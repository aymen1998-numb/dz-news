const fs = require('fs');
const path = require('path');

const ARTICLES_JSON_URL = 'https://raw.githubusercontent.com/aymen1998-numb/DZ-ANALYTICA/main/src/data/articles.json';

module.exports = async (req, res) => {
  const slug = req.query.article;
  
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

  if (!slug) {
    return res.send(html);
  }

  // 2. Fetch the articles JSON dynamically to ensure it's always up-to-date
  let article = null;
  try {
    const response = await fetch(ARTICLES_JSON_URL);
    if (response.ok) {
      const articles = await response.json();
      article = articles.find(a => a.slug === slug);
    }
  } catch (err) {
    console.error('Error fetching articles json:', err);
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
  if (textContent.includes('ai') || textContent.includes('mirofish') || textContent.includes('swarm') || textContent.includes('predictive')) {
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

  // 3. Replace Meta Tags in HTML
  const metaReplacements = {
    '<meta property="og:title" content="[^"]*"' : `<meta property="og:title" content="${titleAr} | ${titleEn}"`,
    '<meta property="og:description" content="[^"]*"' : `<meta property="og:description" content="${excerptEn || excerptAr}"`,
    '<meta property="og:image" content="[^"]*"' : `<meta property="og:image" content="${ogImageUrl}"`,
    '<meta property="og:url" content="[^"]*"' : `<meta property="og:url" content="${protocol}://${host}/?article=${slug}"`,
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
