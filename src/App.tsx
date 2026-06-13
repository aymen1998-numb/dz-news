import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  ArrowLeft, 
  Calendar, 
  Share2, 
  ExternalLink, 
  BookOpen, 
  TrendingUp, 
  Check,
  ChevronRight,
  Settings,
  Trophy
} from 'lucide-react';
import WorldCupReport from './components/WorldCupReport';
import AdminDashboard from './components/AdminDashboard';

interface MultilingualString {
  ar: string;
  en: string;
  fr: string;
}

interface Article {
  slug: string;
  title: MultilingualString;
  excerpt: MultilingualString;
  content: MultilingualString;
  keywords: MultilingualString;
  date: string;
}

type Language = 'ar' | 'en' | 'fr';
type ActiveView = 'feed' | 'world-cup' | 'admin';

const translations = {
  ar: {
    siteTitle: 'تحليلات دزاير',
    siteSubtitle: 'منصة تحليلات السوق والذكاء الاصطناعي في الجزائر',
    insights: 'تحليلات Insights',
    searchPlaceholder: 'ابحث عن التقارير والمقالات...',
    loading: 'جاري تحميل التحليلات...',
    readTime: 'دقائق قراءة',
    readMore: 'اقرأ التقرير الكامل',
    backToHome: 'العودة للموقع الرئيسي',
    shareLink: 'نسخ رابط المقال',
    linkCopied: 'تم النسخ!',
    noArticles: 'لم يتم العثور على مقالات تطابق بحثك.',
    all: 'الكل',
    categories: {
      ai: 'ذكاء اصطناعي وتوقعات',
      erp: 'حلول الـ ERP والبرمجيات',
      macro: 'الاقتصاد الكلي',
      b2b: 'أبحاث السوق B2B'
    },
    metaDesc: 'تحليلات وتقارير أسبوعية مدعومة بالذكاء الاصطناعي حول السوق والاقتصاد الجزائري من دزاير أناليتيكا.',
    navFeed: 'تغذية الأخبار',
    navWorldCup: 'تقرير كأس العالم 2026',
    navAdmin: 'لوحة التحكم',
    specialReportBanner: '🔥 تغطية خاصة: تقرير استخبارات السوق للمنتخبات العربية في كأس العالم 2026. استكشف التحليلات والتوقعات.',
    exploreReport: 'استكشف التقرير المباشر',
    adminGateTitle: "مصادقة مسؤول النظام مطلوبة",
    adminGateDesc: "يرجى إدخال كلمة المرور للوصول إلى لوحة الإدارة وتعديل المقالات.",
    adminGatePlaceholder: "كلمة مرور الإدارة...",
    adminGateBtn: "دخول",
    adminGateFail: "كلمة المرور غير صحيحة!"
  },
  en: {
    siteTitle: 'DZ Insights',
    siteSubtitle: 'Market Analysis & AI Intelligence Portal in Algeria',
    insights: 'Insights & B2B News',
    searchPlaceholder: 'Search reports and articles...',
    loading: 'Loading insights...',
    readTime: 'min read',
    readMore: 'Read Full Report',
    backToHome: 'Back to Main Site',
    shareLink: 'Copy Article Link',
    linkCopied: 'Link Copied!',
    noArticles: 'No articles found matching your search.',
    all: 'All',
    categories: {
      ai: 'AI & Predictive',
      erp: 'ERP & Software',
      macro: 'Macroeconomics',
      b2b: 'B2B Market Research'
    },
    metaDesc: 'Weekly AI-powered market intelligence reports and B2B articles on the Algerian economy from DZ Analytica.',
    navFeed: 'News Feed',
    navWorldCup: 'World Cup 2026 Report',
    navAdmin: 'Admin Control',
    specialReportBanner: '🔥 Special Coverage: FIFA World Cup 2026 Arab Teams Market Intelligence Report. Explore live analytics & match projections.',
    exploreReport: 'Explore Live Report',
    adminGateTitle: "Admin Authorization Required",
    adminGateDesc: "Please enter the administrative password to access the CMS and edit articles.",
    adminGatePlaceholder: "Admin Password...",
    adminGateBtn: "Authenticate",
    adminGateFail: "Incorrect password!"
  },
  fr: {
    siteTitle: 'DZ Insights',
    siteSubtitle: 'Portail d\'analyses de marché & d\'IA en Algérie',
    insights: 'Analyses & B2B',
    searchPlaceholder: 'Rechercher des rapports...',
    loading: 'Chargement des analyses...',
    readTime: 'min de lecture',
    readMore: 'Lire le rapport complet',
    backToHome: 'Retour au site principal',
    shareLink: 'Copier le lien',
    linkCopied: 'Lien copié !',
    noArticles: 'Aucun article trouvé pour votre recherche.',
    all: 'Tout',
    categories: {
      ai: 'IA & Prédictions',
      erp: 'ERP & Solutions',
      macro: 'Macroéconomie',
      b2b: 'Études de Marché B2B'
    },
    metaDesc: 'Rapports hebdomadaires sur le marché et l\'économie algérienne propulsés par l\'IA de DZ Analytica.',
    navFeed: 'Flux d\'Actualités',
    navWorldCup: 'Rapport Coupe du Monde 2026',
    navAdmin: 'Administration',
    specialReportBanner: '🔥 Couverture Spéciale : Rapport d\'intelligence de marché des équipes arabes à la Coupe du Monde 2026. Explorez les analyses.',
    exploreReport: 'Explorer le Rapport',
    adminGateTitle: "Authentification Administrateur Requise",
    adminGateDesc: "Veuillez entrer le mot de passe d'administration pour accéder au CMS et éditer les articles.",
    adminGatePlaceholder: "Mot de passe...",
    adminGateBtn: "S'authentifier",
    adminGateFail: "Mot de passe incorrect !"
  }
};

const ARTICLES_FEED_URL = 'https://raw.githubusercontent.com/aymen1998-numb/DZ-ANALYTICA/main/src/data/articles.json';

// Fallback initial mock data if the network is unavailable or fetch fails
const fallbackArticles: Article[] = [
  {
    slug: "fifa-world-cup-2026-algeria-market-impact",
    title: {
      ar: "كأس العالم FIFA 2026: توقعات السوق الجزائري للإعلانات التجارية (B2B) والإنفاق الاستهلاكي",
      en: "FIFA World Cup 2026: Algerian Market Forecasts for B2B Advertising and Consumer Spending",
      fr: "Coupe du Monde FIFA 2026 : Prévisions du marché algérien pour la publicité B2B et les dépenses de consommation"
    },
    excerpt: {
      ar: "تتوقع DZ Analytica تأثيراً اقتصادياً كبيراً لكأس العالم FIFA 2026 على السوق الجزائري، حتى مع عدم مشاركة المنتخب الوطني.",
      en: "DZ Analytica predicts a significant economic ripple effect from the FIFA World Cup 2026 on the Algerian market.",
      fr: "DZ Analytica prévoit un effet d'entraînement économique significatif de la Coupe du Monde FIFA 2026 sur le marché algérien."
    },
    content: {
      ar: "<h3>مقدمة: الجاذبية الدائمة لكرة القدم العالمية في الجزائر</h3>\nعلى الرغم من غياب الجزائر عن كأس العالم FIFA 2026، فإن الجاذبية العالمية للبطولة تضمن لها بصمة اقتصادية كبيرة على السوق الجزائري.",
      en: "<h3>Introduction: The Unwavering Appeal of Global Football in Algeria</h3>\nDespite Algeria's absence from the FIFA World Cup 2026, the tournament's universal appeal ensures a substantial economic footprint.",
      fr: "<h3>Introduction : L'attrait indéfectible du football mondial en Algérie</h3>\nMalgré l'absence de l'Algérie de la Coupe du Monde de la FIFA 2026, l'attrait universel du tournoi garantit une empreinte économique."
    },
    keywords: {
      ar: "كأس العالم, الجزائر, استهلاك, إعلانات B2B",
      en: "World Cup, Algeria, Consumer Spending, B2B Advertising",
      fr: "Coupe du Monde, Algérie, Dépenses, Publicité B2B"
    },
    date: new Date().toISOString()
  }
];

function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [copied, setCopied] = useState(false);
  const [activeView, setActiveView] = useState<ActiveView>('feed');
  
  // Admin password authorization state
  const [adminPassword, setAdminPassword] = useState('');
  const [isAdminAuthorized, setIsAdminAuthorized] = useState(() => sessionStorage.getItem('dz_admin_auth') === 'true');
  const [showAdminTab, setShowAdminTab] = useState(false);

  // Set page direction according to language
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // Load articles from GitHub live feed
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(ARTICLES_FEED_URL);
        if (response.ok) {
          const data = await response.json();
          setArticles(data);
        } else {
          setArticles(fallbackArticles);
        }
      } catch (err) {
        console.error('Error fetching articles, using fallback data:', err);
        setArticles(fallbackArticles);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  // Show Admin link on header only if they are authorized or have ?admin=true parameter in URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'true' || isAdminAuthorized) {
      setShowAdminTab(true);
    } else {
      setShowAdminTab(false);
    }
  }, [isAdminAuthorized]);

  // Deep-linking handle
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('article');
    const view = params.get('view');
    
    if (view === 'world-cup') {
      setActiveView('world-cup');
    } else if (view === 'admin') {
      setActiveView('admin');
    } else {
      setActiveView('feed');
    }

    if (slug && articles.length > 0) {
      const matched = articles.find(a => a.slug === slug);
      if (matched) {
        setSelectedArticle(matched);
      }
    }
  }, [articles]);

  const selectArticle = (article: Article | null) => {
    setSelectedArticle(article);
    const url = new URL(window.location.href);
    if (article) {
      url.searchParams.set('article', article.slug);
    } else {
      url.searchParams.delete('article');
    }
    window.history.pushState({}, '', url.toString());
  };

  const changeView = (view: ActiveView) => {
    setActiveView(view);
    const url = new URL(window.location.href);
    if (view === 'feed') {
      url.searchParams.delete('view');
    } else {
      url.searchParams.set('view', view);
    }
    window.history.pushState({}, '', url.toString());
  };

  const copyLink = () => {
    if (!selectedArticle) return;
    const url = `${window.location.origin}${window.location.pathname}?article=${selectedArticle.slug}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleAdminAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: adminPassword })
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setIsAdminAuthorized(true);
        sessionStorage.setItem('dz_admin_auth', 'true');
      } else {
        alert(activeT.adminGateFail);
      }
    } catch (err) {
      // Offline fallback for local development testing
      if (adminPassword === 'dzanalytica2026') {
        setIsAdminAuthorized(true);
        sessionStorage.setItem('dz_admin_auth', 'true');
      } else {
        alert(activeT.adminGateFail);
      }
    }
  };

  // Helper to determine article category based on content/keywords
  const getCategory = (article: Article): 'ai' | 'erp' | 'macro' | 'b2b' => {
    const text = (
      (article.keywords.en || '') + ' ' + 
      (article.title.en || '') + ' ' + 
      (article.content.en || '')
    ).toLowerCase();

    if (text.includes('ai') || text.includes('mirofish') || text.includes('swarm') || text.includes('predictive') || text.includes('simulation')) {
      return 'ai';
    }
    if (text.includes('erp') || text.includes('odoo') || text.includes('software') || text.includes('system')) {
      return 'erp';
    }
    if (text.includes('macro') || text.includes('economy') || text.includes('gdp') || text.includes('finance') || text.includes('inflation')) {
      return 'macro';
    }
    return 'b2b';
  };

  // Filter articles by search query and category tab
  const filteredArticles = articles.filter(article => {
    const categoryMatch = selectedCategory === 'all' || getCategory(article) === selectedCategory;
    
    const titleText = (article.title[lang] || '').toLowerCase();
    const excerptText = (article.excerpt[lang] || '').toLowerCase();
    const contentText = (article.content[lang] || '').toLowerCase();
    const searchMatch = !searchQuery || 
      titleText.includes(searchQuery.toLowerCase()) || 
      excerptText.includes(searchQuery.toLowerCase()) ||
      contentText.includes(searchQuery.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const activeT = translations[lang];

  return (
    <div className="min-h-screen bg-dz-darker text-white overflow-hidden relative selection:bg-dz-gold selection:text-dz-darker">
      
      {/* Sleek Gradient Backdrops */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-dz-green/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-dz-gold/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-dz-darker/70 backdrop-blur-md border-b border-dz-gold/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => changeView('feed')}>
            <TrendingUp className="w-8 h-8 text-dz-gold animate-pulse" />
            <div>
              <span className="font-extrabold text-2xl tracking-wide bg-gradient-to-r from-dz-gold to-white bg-clip-text text-transparent">
                {activeT.siteTitle}
              </span>
              <span className="text-[10px] text-dz-green-light block font-medium uppercase tracking-widest">
                Algeria Market Feed
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-2 bg-zinc-950/80 px-2 py-1.5 rounded-xl border border-zinc-850">
            <button
              onClick={() => changeView('feed')}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeView === 'feed' ? 'bg-dz-green text-white border border-dz-green-light' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {activeT.navFeed}
            </button>
            <button
              onClick={() => changeView('world-cup')}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                activeView === 'world-cup' ? 'bg-dz-green text-white border border-dz-green-light' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>{activeT.navWorldCup}</span>
            </button>
            
            {/* Admin link - only visible if authorized/triggered */}
            {showAdminTab && (
              <button
                onClick={() => changeView('admin')}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                  activeView === 'admin' ? 'bg-dz-green text-white border border-dz-green-light' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Settings className="w-3.5 h-3.5" />
                <span>{activeT.navAdmin}</span>
              </button>
            )}
          </nav>

          <div className="flex items-center gap-4">
            {/* Mobile Nav Actions */}
            {showAdminTab && (
              <button
                onClick={() => changeView(activeView === 'admin' ? 'feed' : 'admin')}
                className="md:hidden p-2 text-zinc-400 hover:text-dz-gold bg-zinc-900 border border-zinc-855 rounded-xl"
                title={activeT.navAdmin}
              >
                <Settings className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={() => changeView(activeView === 'world-cup' ? 'feed' : 'world-cup')}
              className="md:hidden p-2 text-zinc-400 hover:text-dz-gold bg-zinc-900 border border-zinc-855 rounded-xl"
              title={activeT.navWorldCup}
            >
              <Trophy className="w-4 h-4" />
            </button>

            {/* Back to main website link */}
            <a 
              href="https://www.dzanalytica.com" 
              className="text-xs text-zinc-400 hover:text-dz-gold transition-colors flex items-center gap-1 bg-zinc-900/40 px-3 h-9 rounded-lg border border-zinc-850"
            >
              <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" />
              <span className="hidden sm:inline">{activeT.backToHome}</span>
            </a>

            {/* Language Switcher */}
            <div className="flex items-center gap-1.5 bg-zinc-950 p-1 rounded-lg border border-zinc-800">
              {(['ar', 'en', 'fr'] as Language[]).map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                    lang === l 
                      ? 'bg-dz-gold text-dz-darker shadow-lg' 
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Page Layout Switcher */}
      <main className="relative z-10">
        
        {selectedArticle ? (
          <div className="world-cup-report-page min-h-screen">
            {/* Dynamic Font and Style Injection */}
            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap');
              
              .wcr-article-hero {
                position: relative;
                padding: 60px 48px 48px;
                background: linear-gradient(135deg, #0B1426 60%, #0D2040 100%);
                border-bottom: 1px solid rgba(201, 168, 76, 0.15);
              }
              .wcr-article-hero::before {
                content: 'INSIGHT';
                position: absolute;
                ${lang === 'ar' ? 'left: -10px;' : 'right: -10px;'}
                top: -20px;
                font-family: 'Barlow Condensed', sans-serif;
                font-size: 260px;
                font-weight: 900;
                color: rgba(255, 255, 255, 0.015);
                line-height: 1;
                pointer-events: none;
                user-select: none;
              }
              .wcr-article-content {
                max-w: 1200px;
                margin: 0 auto;
                padding: 48px;
              }
              .wcr-article-grid {
                display: grid;
                grid-template-columns: 1fr 340px;
                gap: 64px;
              }
              @media (max-width: 960px) {
                .wcr-article-grid {
                  grid-template-columns: 1fr;
                  gap: 40px;
                }
                .wcr-article-hero {
                  padding: 40px 24px 32px;
                }
                .wcr-article-content {
                  padding: 24px;
                }
              }
            `}</style>

            {/* Back Bar Controls */}
            <div className="report-back-bar">
              <button
                onClick={() => selectArticle(null)}
                className="btn-back"
              >
                <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
                <span>{activeView === 'world-cup' ? activeT.navWorldCup : activeT.backToHome}</span>
              </button>

              <div className="flex items-center gap-3">
                {/* Share on Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    `${window.location.origin}${window.location.pathname}?article=${selectedArticle.slug}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-[#131f38] border border-[#c9a84c]/15 text-[#cbd5e1] hover:text-blue-500 transition-colors flex items-center"
                  title="Share on Facebook"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>

                {/* Share on LinkedIn */}
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    `${window.location.origin}${window.location.pathname}?article=${selectedArticle.slug}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-[#131f38] border border-[#c9a84c]/15 text-[#cbd5e1] hover:text-blue-400 transition-colors flex items-center"
                  title="Share on LinkedIn"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>

                {/* Copy link share button */}
                <button
                  onClick={copyLink}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#131f38] border border-[#c9a84c]/15 text-[#cbd5e1] hover:text-white transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-dz-green-light" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copied ? activeT.linkCopied : activeT.shareLink}</span>
                </button>
              </div>
            </div>

            {/* Premium World Cup Hero Section */}
            <div className="wcr-article-hero">
              <div className="wcr-hero-eyebrow">
                <span>{activeT.categories[getCategory(selectedArticle)]} · {new Date(selectedArticle.date).toLocaleDateString(lang === 'ar' ? 'ar-DZ' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              
              <h1 className="wcr-hero-headline" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {selectedArticle.title[lang]}
              </h1>

              <p className="wcr-hero-deck">
                {selectedArticle.excerpt[lang]}
              </p>

              {/* Stat Gauges at the top for premium feel */}
              <div className="wcr-gauge-row mt-8">
                <div className="wcr-gauge-card">
                  <div className="wcr-gauge-card-label">
                    {lang === 'ar' ? 'نموذج التوقع' : 'Model Confidence'}
                  </div>
                  <div className="wcr-gauge-card-value green">
                    {getCategory(selectedArticle) === 'ai' ? '92%' :
                     getCategory(selectedArticle) === 'macro' ? '88%' :
                     getCategory(selectedArticle) === 'erp' ? '85%' : '80%'}
                  </div>
                  <div className="wcr-gauge-card-sub">
                    {lang === 'ar' ? 'فحص محاكاة B2B' : 'B2B Simulation Precision'}
                  </div>
                  <div className="wcr-progress-bar-wrap">
                    <div 
                      className="wcr-progress-bar-fill" 
                      style={{ 
                        width: getCategory(selectedArticle) === 'ai' ? '92%' :
                               getCategory(selectedArticle) === 'macro' ? '88%' :
                               getCategory(selectedArticle) === 'erp' ? '85%' : '80%'
                      }} 
                    />
                  </div>
                </div>

                <div className="wcr-gauge-card">
                  <div className="wcr-gauge-card-label">
                    {lang === 'ar' ? 'معدل الأهداف المتوقعة' : 'Expected Goals (xG)'}
                  </div>
                  <div className="wcr-gauge-card-value gold">
                    {selectedArticle.slug.includes('winner') ? '2.15' :
                     selectedArticle.slug.includes('algeria') ? '1.45' :
                     selectedArticle.slug.includes('morocco') ? '1.10' :
                     selectedArticle.slug.includes('saudi') ? '0.75' : '0.95'}
                  </div>
                  <div className="wcr-gauge-card-sub">
                    {lang === 'ar' ? 'الإنتاجية الهجومية للمباراة' : 'Projected Offensive Output'}
                  </div>
                  <div className="wcr-progress-bar-wrap">
                    <div 
                      className="wcr-progress-bar-fill gold" 
                      style={{ 
                        width: selectedArticle.slug.includes('winner') ? '80%' :
                               selectedArticle.slug.includes('algeria') ? '65%' :
                               selectedArticle.slug.includes('morocco') ? '55%' :
                               selectedArticle.slug.includes('saudi') ? '40%' : '50%'
                      }} 
                    />
                  </div>
                </div>

                <div className="wcr-gauge-card">
                  <div className="wcr-gauge-card-label">
                    {lang === 'ar' ? 'مدة القراءة' : 'Reading Duration'}
                  </div>
                  <div className="wcr-gauge-card-value">
                    5 {lang === 'ar' ? 'دقائق' : 'min'}
                  </div>
                  <div className="wcr-gauge-card-sub">
                    {lang === 'ar' ? 'دراسة استراتيجية شاملة' : 'Comprehensive business brief'}
                  </div>
                </div>
              </div>
            </div>

            {/* Content & Sidebar Grid */}
            <div className="wcr-article-content">
              <div className="wcr-article-grid">
                
                {/* Main Article Body */}
                <div className="wcr-body-text">
                  <div 
                    className="prose prose-invert max-w-none text-[#cbd5e1] space-y-8 leading-relaxed text-base md:text-lg"
                    dir={lang === 'ar' ? 'rtl' : 'ltr'}
                    style={{
                      fontFamily: lang === 'ar' ? '"Cairo", sans-serif' : '"Inter", sans-serif'
                    }}
                  >
                    <div dangerouslySetInnerHTML={{ __html: selectedArticle.content[lang] }} />
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6 lg:sticky lg:top-24">
                  {/* B2B Strategic Checklist */}
                  <div className="bg-[#131f38] border border-[#c9a84c]/25 rounded-xl p-6 space-y-4">
                    <div className="text-[10px] font-bold text-[#c9a84c] tracking-wider uppercase">
                      {lang === 'ar' ? 'مخرجات استراتيجية B2B' : 'B2B Strategic Takeaways'}
                    </div>
                    <ul className="text-xs text-[#cbd5e1] space-y-3">
                      <li className="flex gap-2 items-start">
                        <span className="text-[#c9a84c] font-bold">✓</span>
                        <span>{lang === 'ar' ? 'تحديد الفرص الاستباقية في الأسواق الإقليمية.' : 'Identify early mover advantages in regional spaces.'}</span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="text-[#c9a84c] font-bold">✓</span>
                        <span>{lang === 'ar' ? 'مواءمة استراتيجيات التوسع مع تحولات استهلاك الجماهير.' : 'Align expansion strategies with mass audience demand shifts.'}</span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="text-[#c9a84c] font-bold">✓</span>
                        <span>{lang === 'ar' ? 'استباق التغيرات التجارية والإنفاق الإعلاني خلال المسابقة.' : 'Proactively capitalize on brand advertising surges.'}</span>
                      </li>
                    </ul>
                  </div>

                  {/* Keywords footer tag cloud */}
                  <div className="bg-[#131f38]/40 border border-zinc-800/80 rounded-xl p-6">
                    <div className="text-[10px] font-bold text-[#8b9bb4] tracking-wider uppercase mb-3">
                      {lang === 'ar' ? 'الكلمات المفتاحية' : 'Taxonomy Tags'}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedArticle.keywords[lang].split(',').map((kw, idx) => (
                        <span key={idx} className="text-xs bg-[#0b1426] px-3 py-1 rounded-md text-[#8b9bb4] border border-[#c9a84c]/10">
                          #{kw.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ) : activeView === 'world-cup' ? (
          <WorldCupReport 
            lang={lang} 
            articles={articles}
            onBack={() => changeView('feed')} 
            onPreviewArticle={(art) => selectArticle(art)}
          />
        ) : activeView === 'admin' ? (
          // Password Gate for Administration Dashboard
          !isAdminAuthorized ? (
            <div className="max-w-md mx-auto px-6 py-24 text-center">
              <div className="glass-panel p-8 rounded-3xl border border-dz-gold/25 space-y-6">
                <Settings className="w-12 h-12 text-dz-gold animate-spin mx-auto" />
                <div>
                  <h2 className="text-xl font-bold mb-2">{activeT.adminGateTitle}</h2>
                  <p className="text-xs text-zinc-400">{activeT.adminGateDesc}</p>
                </div>
                <form onSubmit={handleAdminAuth} className="space-y-4">
                  <input
                    type="password"
                    placeholder={activeT.adminGatePlaceholder}
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-dz-gold text-center font-bold"
                  />
                  <button
                    type="submit"
                    className="w-full bg-dz-gold text-dz-darker font-bold py-2.5 rounded-xl text-xs hover:bg-dz-gold-light transition-all cursor-pointer"
                  >
                    {activeT.adminGateBtn}
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <AdminDashboard 
              lang={lang} 
              articles={articles} 
              onUpdateArticles={setArticles} 
              onPreviewArticle={(art) => selectArticle(art)} 
            />
          )
        ) : (
          <div className="max-w-7xl mx-auto px-6 py-12">
            
            {/* World Cup Special Report Banner Alert */}
            <div 
              onClick={() => changeView('world-cup')}
              className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-dz-green-dark/60 via-dz-green/35 to-zinc-950/60 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 cursor-pointer hover:border-dz-gold/40 transition-all group shadow-xl"
            >
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-dz-gold animate-bounce flex-shrink-0" />
                <span className="text-xs md:text-sm font-semibold text-zinc-200 text-left rtl:text-right">
                  {activeT.specialReportBanner}
                </span>
              </div>
              <span className="text-xs font-bold text-dz-gold group-hover:text-white transition-colors flex items-center gap-1 flex-shrink-0">
                <span>{activeT.exploreReport}</span>
                <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </span>
            </div>

            {/* Hero Banner */}
            <section className="text-center mb-16 relative">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
                  {activeT.siteSubtitle}
                </h1>
                <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">
                  {activeT.metaDesc}
                </p>
              </motion.div>
            </section>

            {/* Search & Categories Bar */}
            <section className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between bg-zinc-900/30 p-6 rounded-2xl border border-dz-gold/10 backdrop-blur-md">
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    selectedCategory === 'all'
                      ? 'bg-dz-green text-white border border-dz-green-light'
                      : 'bg-zinc-950/60 text-zinc-400 border border-zinc-800 hover:text-white'
                  }`}
                >
                  {activeT.all}
                </button>
                {(['ai', 'erp', 'macro', 'b2b'] as const).map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                      selectedCategory === cat
                        ? 'bg-dz-green text-white border border-dz-green-light'
                        : 'bg-zinc-950/60 text-zinc-400 border border-zinc-800 hover:text-white'
                    }`}
                  >
                    {activeT.categories[cat]}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  placeholder={activeT.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-dz-gold transition-all text-white placeholder-zinc-500"
                />
                <Search className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
              </div>
            </section>

            {/* Grid List Section */}
            {loading ? (
              <div className="text-center py-20">
                <div className="w-12 h-12 border-4 border-dz-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-zinc-400 font-medium">{activeT.loading}</p>
              </div>
            ) : filteredArticles.length === 0 ? (
              <div className="text-center py-20 glass-panel rounded-2xl">
                <BookOpen className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
                <p className="text-zinc-400 font-medium">{activeT.noArticles}</p>
              </div>
            ) : (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                layout
              >
                <AnimatePresence mode="popLayout">
                  {filteredArticles.map(article => {
                    const cat = getCategory(article);
                    return (
                      <motion.article
                        key={article.slug}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer group"
                        onClick={() => selectArticle(article)}
                      >
                        <div className={`h-2.5 bg-gradient-to-r ${
                          cat === 'ai' ? 'from-purple-600 to-indigo-500' :
                          cat === 'erp' ? 'from-dz-green-light to-emerald-400' :
                          cat === 'macro' ? 'from-amber-500 to-dz-gold' :
                          'from-blue-600 to-cyan-500'
                        }`} />

                        <div className="p-6 flex flex-col flex-grow">
                          <div className="flex items-center gap-3 mb-3 text-xs text-zinc-400">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                              cat === 'ai' ? 'bg-purple-950/80 text-purple-300 border border-purple-800' :
                              cat === 'erp' ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800' :
                              cat === 'macro' ? 'bg-amber-950/80 text-amber-300 border border-amber-800' :
                              'bg-blue-950/80 text-blue-300 border border-blue-800'
                            }`}>
                              {activeT.categories[cat]}
                            </span>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              <span>{new Date(article.date).toLocaleDateString(lang === 'ar' ? 'ar-DZ' : 'en-US', { day: 'numeric', month: 'short' })}</span>
                            </div>
                          </div>

                          <h3 className="text-xl font-bold mb-3 line-clamp-2 leading-snug group-hover:text-dz-gold transition-colors">
                            {article.title[lang]}
                          </h3>

                          <p className="text-zinc-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                            {article.excerpt[lang]}
                          </p>

                          <div className="mt-auto pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-bold text-dz-gold group-hover:text-white transition-colors">
                            <span>{activeT.readMore}</span>
                            <ChevronRight className="w-4 h-4 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                          </div>
                        </div>
                      </motion.article>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        )}
      </main>



      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950/40 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center text-zinc-500 text-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <p 
            onClick={() => changeView('admin')}
            className="cursor-pointer hover:text-dz-gold transition-colors"
          >
            © {new Date().getFullYear()} DZ Analytica. All rights reserved.
          </p>
          <a 
            href="https://www.dzanalytica.com" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-dz-gold transition-colors"
          >
            <span>dzanalytica.com</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
