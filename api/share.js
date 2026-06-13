const fs = require('fs');
const path = require('path');

const ARTICLES_JSON_URL = 'https://raw.githubusercontent.com/aymen1998-numb/DZ-ANALYTICA/main/src/data/articles.json';

module.exports = async (req, res) => {
  const slug = req.query.article;
  const view = req.query.view;
  
  // 1. Fetch template HTML (use compiled dist/index.html if available, fallback to root index.html)
  let html = '';
  try {
    const distPath = path.join(process.cwd(), 'dist', 'index.html');
    if (fs.existsSync(distPath)) {
      html = fs.readFileSync(distPath, 'utf8');
    } else {
      const rootPath = path.join(process.cwd(), 'index.html');
      html = fs.readFileSync(rootPath, 'utf8');
    }
  } catch (e) {
    return res.status(500).send(`Error reading index.html: ${e.message}`);
  }

  if (!slug && view !== 'world-cup') {
    return res.send(html);
  }

  // 2. Fetch or construct the article data
  let article = null;
  if (view === 'world-cup') {
    article = {
      slug: 'world-cup',
      title: {
        ar: 'كأس العالم 2026: استخبارات السوق وتوقعات المنتخبات العربية',
        en: 'FIFA World Cup 2026: Arab Teams Market Intelligence & Projections',
        fr: 'Coupe du Monde FIFA 2026 : Rapports d\'intelligence et prévisions'
      },
      excerpt: {
        ar: 'تغطية تحليلية خاصة من دزاير أناليتيكا لأداء وتوقعات ومؤشرات السوق للمنتخبات العربية المشاركة في نهائيات كأس العالم 2026.',
        en: 'Special analytics coverage by DZ Analytica mapping market impact, tactics, and projections for Arab nations in the FIFA World Cup 2026.',
        fr: 'Couverture de DZ Analytica pour la Coupe du Monde FIFA 2026, évaluant l\'impact économique et les prévisions.'
      },
      keywords: {
        ar: 'كأس العالم 2026, المنتخبات العربية, استخبارات السوق',
        en: 'world cup, arab teams, market intelligence',
        fr: 'coupe du monde, equipes arabes, intelligence'
      },
      content: {
        en: 'world cup'
      }
    };
  } else {
    try {
      const response = await fetch(ARTICLES_JSON_URL);
      if (response.ok) {
        const articles = await response.json();
        article = articles.find(a => a.slug === slug);
      }
    } catch (err) {
      console.error('Error fetching articles json:', err);
    }
  }

  if (!article) {
    // Fallback if not found or fetch fails
    return res.send(html);
  }

  // Determine category
  const textContent = (
    (article.keywords?.en || '') + ' ' + 
    (article.title?.en || '') + ' ' + 
    (article.content?.en || '')
  ).toLowerCase();

  let category = 'Market Report';
  if (view === 'world-cup') {
    category = 'World Cup Special';
  } else if (textContent.includes('ai') || textContent.includes('mirofish') || textContent.includes('swarm') || textContent.includes('predictive')) {
    category = 'AI & Predictive';
  } else if (textContent.includes('erp') || textContent.includes('odoo') || textContent.includes('software')) {
    category = 'ERP & Solutions';
  } else if (textContent.includes('macro') || textContent.includes('economy')) {
    category = 'Macroeconomics';
  } else if (textContent.includes('b2b')) {
    category = 'B2B Market Research';
  }

  // Extract titles and excerpts
  const titleAr = article.title?.ar || article.title?.en || '';
  const titleEn = article.title?.en || titleAr || '';
  
  const excerptAr = article.excerpt?.ar || article.excerpt?.en || '';
  const excerptEn = article.excerpt?.en || excerptAr || '';

  // Determine og:image URL (points to our dynamic OG generator API)
  const host = req.headers.host || 'news.dzanalytica.com';
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const ogImageUrl = `${protocol}://${host}/api/og?title=${encodeURIComponent(titleEn)}&category=${encodeURIComponent(category)}`;
  const shareUrl = view === 'world-cup'
    ? `${protocol}://${host}/?view=world-cup`
    : `${protocol}://${host}/?article=${slug}`;

  // 3. Replace Meta Tags in HTML
  const metaReplacements = {
    '<meta property="og:title" content="[^"]*"' : `<meta property="og:title" content="${titleAr} | ${titleEn}"`,
    '<meta property="og:description" content="[^"]*"' : `<meta property="og:description" content="${excerptEn || excerptAr}"`,
    '<meta property="og:image" content="[^"]*"' : `<meta property="og:image" content="${ogImageUrl}"`,
    '<meta property="og:url" content="[^"]*"' : `<meta property="og:url" content="${shareUrl}"`,
    '<meta name="twitter:title" content="[^"]*"' : `<meta name="twitter:title" content="${titleAr} | ${titleEn}"`,
    '<meta name="twitter:description" content="[^"]*"' : `<meta name="twitter:description" content="${excerptEn || excerptAr}"`,
    '<meta name="twitter:image" content="[^"]*"' : `<meta name="twitter:image" content="${ogImageUrl}"`,
    '<title>[^<]*</title>' : `<title>${titleAr} | DZ Insights</title>`,
    '<meta name="description" content="[^"]*"' : `<meta name="description" content="${excerptEn || excerptAr}"`
  };

  for (const [pattern, replacement] of Object.entries(metaReplacements)) {
    const regex = new RegExp(pattern, 'i');
    if (regex.test(html)) {
      html = html.replace(regex, replacement);
    } else {
      // If tag is missing, inject it right before </head>
      html = html.replace('</head>', `${replacement}\n</head>`);
    }
  }

  // Send modified HTML
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  return res.send(html);
};
