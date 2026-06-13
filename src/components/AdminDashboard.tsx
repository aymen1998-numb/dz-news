import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Trash2, 
  Download, 
  Sparkles, 
  Save, 
  Edit3, 
  FileText, 
  Check, 
  HelpCircle,
  Eye
} from 'lucide-react';

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

interface AdminDashboardProps {
  lang: 'ar' | 'en' | 'fr';
  articles: Article[];
  onUpdateArticles: (updated: Article[]) => void;
  onPreviewArticle: (article: Article) => void;
}

type FormLang = 'ar' | 'en' | 'fr';

export default function AdminDashboard({ lang, articles, onUpdateArticles, onPreviewArticle }: AdminDashboardProps) {
  const [selectedArticleIndex, setSelectedArticleIndex] = useState<number | null>(null);
  const [geminiKey, setGeminiKey] = useState(() => localStorage.getItem('dz_gemini_api_key') || '');
  const [generationSubject, setGenerationSubject] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [formLang, setFormLang] = useState<FormLang>('ar');
  const [successMsg, setSuccessMsg] = useState('');
  
  // Local state for editing form
  const [slug, setSlug] = useState('');
  const [date, setDate] = useState('');
  const [titles, setTitles] = useState<MultilingualString>({ ar: '', en: '', fr: '' });
  const [excerpts, setExcerpts] = useState<MultilingualString>({ ar: '', en: '', fr: '' });
  const [contents, setContents] = useState<MultilingualString>({ ar: '', en: '', fr: '' });
  const [keywords, setKeywords] = useState<MultilingualString>({ ar: '', en: '', fr: '' });

  // Save Gemini Key to localStorage when updated
  useEffect(() => {
    localStorage.setItem('dz_gemini_api_key', geminiKey);
  }, [geminiKey]);

  // Load selected article into form
  useEffect(() => {
    if (selectedArticleIndex !== null && articles[selectedArticleIndex]) {
      const art = articles[selectedArticleIndex];
      setSlug(art.slug || '');
      setDate(art.date || new Date().toISOString());
      setTitles({ ar: art.title.ar || '', en: art.title.en || '', fr: art.title.fr || '' });
      setExcerpts({ ar: art.excerpt.ar || '', en: art.excerpt.en || '', fr: art.excerpt.fr || '' });
      setContents({ ar: art.content.ar || '', en: art.content.en || '', fr: art.content.fr || '' });
      setKeywords({ ar: art.keywords.ar || '', en: art.keywords.en || '', fr: art.keywords.fr || '' });
    } else {
      // Clear form
      setSlug('');
      setDate(new Date().toISOString());
      setTitles({ ar: '', en: '', fr: '' });
      setExcerpts({ ar: '', en: '', fr: '' });
      setContents({ ar: '', en: '', fr: '' });
      setKeywords({ ar: '', en: '', fr: '' });
    }
  }, [selectedArticleIndex, articles]);

  const handleSave = () => {
    if (!slug) {
      alert('Slug is required!');
      return;
    }

    const updatedArticle: Article = {
      slug: slug.trim().toLowerCase().replace(/[^a-z0-9-]/g, '-'),
      date: date || new Date().toISOString(),
      title: titles,
      excerpt: excerpts,
      content: contents,
      keywords: keywords
    };

    let updatedList = [...articles];
    if (selectedArticleIndex !== null) {
      updatedList[selectedArticleIndex] = updatedArticle;
      showToast('Article updated locally!');
    } else {
      updatedList.unshift(updatedArticle);
      setSelectedArticleIndex(0);
      showToast('New article created locally!');
    }
    onUpdateArticles(updatedList);
  };

  const handleAddNew = () => {
    setSelectedArticleIndex(null);
    setSlug('new-article-slug');
    setDate(new Date().toISOString());
    setTitles({ ar: '', en: '', fr: '' });
    setExcerpts({ ar: '', en: '', fr: '' });
    setContents({ ar: '', en: '', fr: '' });
    setKeywords({ ar: '', en: '', fr: '' });
  };

  const handleDelete = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to delete this article?')) {
      const updated = articles.filter((_, i) => i !== index);
      onUpdateArticles(updated);
      setSelectedArticleIndex(null);
      showToast('Article deleted locally.');
    }
  };

  const showToast = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(articles, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "articles.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('JSON exported successfully! Please copy it to your GitHub repo.');
  };

  const generateWithGemini = async () => {
    if (!geminiKey) {
      alert('Please enter your Gemini API Key to generate content!');
      return;
    }
    if (!generationSubject) {
      alert('Please enter a subject (e.g. Odoo ERP adoption in Algiers)!');
      return;
    }

    setIsGenerating(true);
    try {
      const prompt = `
You are the Lead Market Analyst at DZ Analytica. 
Write a high-quality, professional, data-driven analytical B2B news/market prediction report about this specific subject or trend in Algeria:
"${generationSubject}"

Your article should focus on predictive analysis, forecasting, and B2B opportunities in Algeria.
Write the report in three languages: Arabic, English, and French.
Ensure the content is detailed and paragraphs are divided cleanly.
Do NOT output any wrappers like markdown codeblocks (\`\`\`json). Output raw JSON matching this schema:
{
  "slug": "url-friendly-slug-in-english-only",
  "title": {
    "ar": "عنوان احترافي باللغة العربية",
    "en": "Professional Title in English",
    "fr": "Titre professionnel en Français"
  },
  "excerpt": {
    "ar": "ملخص للمقالة باللغة العربية (سطرين)",
    "en": "Summary of the article in English (2 sentences)",
    "fr": "Résumé de l'article en Français (2 phrases)"
  },
  "content": {
    "ar": "<h3>مقدمة...</h3>\\nالمحتوى الكامل للمقالة باللغة العربية في فقرات واضحة مع عناوين فرعية ومؤشرات دقيقة باستخدام وسوم html مثل h3 و ul و li و strong عند اللزوم.",
    "en": "<h3>Introduction...</h3>\\nFull analytical content of the article in English, in clean paragraphs with subheaders and HTML tags like h3, ul, li, strong.",
    "fr": "<h3>Introduction...</h3>\\nContenu analytique complet de l'article en Français, avec des paragraphes et des sous-titres et balises HTML comme h3, ul, li, strong."
  },
  "keywords": {
    "ar": "الكلمات المفتاحية مفصولة بفواصل",
    "en": "keywords separated by commas",
    "fr": "mots-clés séparés par des virgules"
  }
}
`;

      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { responseMimeType: "application/json" }
        })
      });

      if (!response.ok) {
        throw new Error(`Gemini API returned status ${response.status}`);
      }

      const resData = await response.json();
      const rawText = resData.candidates[0].content.parts[0].text;
      const cleanJson = JSON.parse(rawText);

      // Populate form
      setSlug(cleanJson.slug || 'ai-generated-slug');
      setDate(new Date().toISOString());
      setTitles(cleanJson.title || { ar: '', en: '', fr: '' });
      setExcerpts(cleanJson.excerpt || { ar: '', en: '', fr: '' });
      setContents(cleanJson.content || { ar: '', en: '', fr: '' });
      setKeywords(cleanJson.keywords || { ar: '', en: '', fr: '' });
      
      setSelectedArticleIndex(null); // Mark as new unsaved article loaded in form
      showToast('AI Draft generated successfully! Review and click Save below.');
    } catch (err: any) {
      console.error(err);
      alert('Failed to generate draft: ' + err.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const currentT = {
    ar: {
      editorTitle: "لوحة التحكم وإدارة المحتوى",
      editorDesc: "قم بإضافة أو تعديل المقالات باللغات العربية والإنجليزية والفرنسية، أو قم بإنشاء مسودات ذكاء اصطناعي وتصدير ملف التحديث النهائي.",
      listHeader: "مقالات التغذية الحالية",
      addNew: "إضافة مقالة جديدة",
      geminiSec: "التوليد السريع بالذكاء الاصطناعي",
      geminiKeyLabel: "مفتاح Gemini API الخاص بك:",
      geminiSubjectLabel: "موضوع المقالة المراد توليدها:",
      geminiSubjectPl: "مثال: نمو مبيعات السيارات الكهربائية بالجزائر في 2026",
      generateBtn: "توليد مسودة المقال",
      generating: "جاري التوليد...",
      fieldsSec: "نموذج تعديل المقالة",
      fieldSlug: "الاسم اللطيف للرابط (Slug):",
      fieldDate: "تاريخ النشر:",
      fieldTitle: "العنوان:",
      fieldExcerpt: "الملخص القصير (سطرين):",
      fieldContent: "محتوى المقالة الكامل (يدعم وسوم HTML مثل h3, strong, ul, li):",
      fieldKeywords: "الكلمات المفتاحية (مفصولة بفواصل):",
      saveBtn: "حفظ المقال محلياً",
      exportBtn: "تصدير وتحميل ملف articles.json النهائي",
      guideTitle: "تعليمات النشر والتحديث على GitHub",
      step1: "1. قم بإضافة/تعديل المقالات المطلوبة في النموذج أو توليدها عبر الذكاء الاصطناعي.",
      step2: "2. اضغط على 'حفظ المقال محلياً' لتثبيت التعديلات في القائمة الجانبية.",
      step3: "3. اضغط على زر التصدير (تنزيل ملف articles.json).",
      step4: "4. اذهب إلى مستودع GitHub الخاص بك (aymen1998-numb/DZ-ANALYTICA)، وافتح المجلد src/data/، ثم ارفع ملف articles.json الجديد لاستبدال الملف القديم ومزامنة التحديث فوراً في ثوانٍ!",
      arTab: "العربية",
      enTab: "الإنجليزية",
      frTab: "الفرنسية"
    },
    en: {
      editorTitle: "Editorial Dashboard & CMS",
      editorDesc: "Add, review, edit, and translate news articles in Arabic, English, and French. Generate drafts using AI, then export the JSON file.",
      listHeader: "Current Articles in Feed",
      addNew: "Add New Article",
      geminiSec: "Quick AI Draft Generation",
      geminiKeyLabel: "Your Gemini API Key (saved locally):",
      geminiSubjectLabel: "Article subject / trend to write about:",
      geminiSubjectPl: "e.g. Odoo ERP expansion in Algiers B2B sectors for 2026",
      generateBtn: "Generate Article Draft",
      generating: "Generating...",
      fieldsSec: "Article Editor Fields",
      fieldSlug: "URL Slug (English only, lower-case):",
      fieldDate: "Publish Date:",
      fieldTitle: "Article Title:",
      fieldExcerpt: "Excerpt Summary (2 sentences):",
      fieldContent: "Full Article Content (supports HTML tags like h3, strong, ul, li):",
      fieldKeywords: "Keywords (comma-separated):",
      saveBtn: "Save Article Locally",
      exportBtn: "Export & Download articles.json",
      guideTitle: "How to Publish Your Changes to GitHub",
      step1: "1. Add, edit, or generate drafts of your articles. Click 'Save Article Locally' to update the list.",
      step2: "2. Click 'Export & Download articles.json' to get the final unified database file.",
      step3: "3. Go to your GitHub repository (aymen1998-numb/DZ-ANALYTICA).",
      step4: "4. Navigate to src/data/, upload the new articles.json file to overwrite the old one, and commit. Your site will automatically rebuild and update live in seconds!",
      arTab: "Arabic",
      enTab: "English",
      frTab: "French"
    },
    fr: {
      editorTitle: "Tableau de Bord Éditorial",
      editorDesc: "Ajoutez, modifiez et traduisez des articles en arabe, anglais et français. Générez des brouillons avec l'IA et exportez la base de données.",
      listHeader: "Articles du Flux Actuel",
      addNew: "Ajouter un Article",
      geminiSec: "Génération de Brouillon par l'IA",
      geminiKeyLabel: "Clé API Gemini (sauvegardée localement) :",
      geminiSubjectLabel: "Sujet ou tendance de l'article :",
      geminiSubjectPl: "ex. L'adoption des solutions cloud et ERP par les PME en Algérie",
      generateBtn: "Générer le brouillon",
      generating: "Génération...",
      fieldsSec: "Champs d'Édition de l'Article",
      fieldSlug: "Slug d'URL (en anglais, minuscules) :",
      fieldDate: "Date de Publication :",
      fieldTitle: "Titre de l'Article :",
      fieldExcerpt: "Résumé Court (2 phrases) :",
      fieldContent: "Contenu Complet (supporte les balises HTML comme h3, strong, ul, li) :",
      fieldKeywords: "Mots-clés (séparés par des virgules) :",
      saveBtn: "Enregistrer Localement",
      exportBtn: "Exporter et Télécharger articles.json",
      guideTitle: "Comment Publier vos Modifications sur GitHub",
      step1: "1. Ajoutez, éditez ou générez vos articles. Cliquez sur 'Enregistrer Localement' pour mettre à jour la liste.",
      step2: "2. Cliquez sur 'Exporter et Télécharger articles.json' pour obtenir le fichier de base de données.",
      step3: "3. Allez sur votre dépôt GitHub (aymen1998-numb/DZ-ANALYTICA).",
      step4: "4. Naviguez dans src/data/, uploadez le nouveau fichier articles.json pour écraser l'ancien et validez. Le site se déploiera automatiquement en quelques secondes !",
      arTab: "Arabe",
      enTab: "Anglais",
      frTab: "Français"
    }
  }[lang];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 relative text-white">
      {/* Toast Notification */}
      {successMsg && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-2xl flex items-center gap-2 border border-emerald-400">
          <Check className="w-5 h-5 animate-bounce" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Header Info */}
      <div className="mb-10">
        <h1 className="text-3xl font-black mb-2 tracking-tight bg-gradient-to-r from-dz-gold to-white bg-clip-text text-transparent">
          {currentT.editorTitle}
        </h1>
        <p className="text-zinc-400 text-sm max-w-3xl">
          {currentT.editorDesc}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Side: Sidebar Articles List & AI Generator */}
        <div className="space-y-6">
          {/* Export & Actions Panel */}
          <div className="glass-panel p-5 rounded-2xl space-y-3">
            <button
              onClick={handleExportJSON}
              className="w-full flex items-center justify-center gap-2 bg-dz-gold text-dz-darker hover:bg-dz-gold-light font-bold py-3 px-4 rounded-xl transition-all cursor-pointer shadow-lg"
            >
              <Download className="w-4.5 h-4.5" />
              <span>{currentT.exportBtn}</span>
            </button>
            
            <button
              onClick={handleAddNew}
              className="w-full flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 hover:bg-zinc-850 font-bold py-2.5 px-4 rounded-xl transition-all cursor-pointer"
            >
              <Plus className="w-4.5 h-4.5 text-dz-gold" />
              <span>{currentT.addNew}</span>
            </button>
          </div>

          {/* Current Articles List */}
          <div className="glass-panel p-5 rounded-2xl">
            <h3 className="text-xs font-bold text-dz-gold uppercase tracking-wider mb-4 border-b border-zinc-850 pb-2">
              {currentT.listHeader} ({articles.length})
            </h3>
            <div className="space-y-2 max-h-[350px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-zinc-850 scrollbar-track-transparent">
              {articles.map((art, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedArticleIndex(idx)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between group ${
                    selectedArticleIndex === idx
                      ? 'bg-dz-green/10 border-dz-gold text-white'
                      : 'bg-zinc-900/50 border-zinc-850 text-zinc-400 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center gap-2 overflow-hidden mr-2">
                    <FileText className="w-4 h-4 flex-shrink-0 text-zinc-500" />
                    <span className="text-xs font-bold truncate text-left rtl:text-right">
                      {art.title[lang] || art.title.en || art.slug}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      title="Preview Article"
                      onClick={(e) => { e.stopPropagation(); onPreviewArticle(art); }}
                      className="p-1 text-zinc-500 hover:text-dz-gold"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    <button
                      title="Delete Article"
                      onClick={(e) => handleDelete(idx, e)}
                      className="p-1 text-zinc-550 hover:text-red-500"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Generator Panel */}
          <div className="glass-panel p-5 rounded-2xl space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-zinc-850 pb-2 flex items-center gap-2">
              <Sparkles className="w-4.5 h-4.5 text-dz-gold animate-pulse" />
              {currentT.geminiSec}
            </h3>
            
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                {currentT.geminiKeyLabel}
              </label>
              <input
                type="password"
                placeholder="AIzaSy..."
                value={geminiKey}
                onChange={(e) => setGeminiKey(e.target.value)}
                className="w-full bg-zinc-950/80 border border-zinc-850 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-dz-gold transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                {currentT.geminiSubjectLabel}
              </label>
              <textarea
                placeholder={currentT.geminiSubjectPl}
                value={generationSubject}
                onChange={(e) => setGenerationSubject(e.target.value)}
                rows={2}
                className="w-full bg-zinc-950/80 border border-zinc-850 rounded-xl p-3 text-xs focus:outline-none focus:border-dz-gold transition-all"
              />
            </div>

            <button
              onClick={generateWithGemini}
              disabled={isGenerating}
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 disabled:bg-zinc-800 disabled:text-zinc-600 font-bold py-2 px-4 rounded-xl transition-all cursor-pointer"
            >
              {isGenerating ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>{currentT.generating}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-emerald-300" />
                  <span>{currentT.generateBtn}</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Right Side: Editorial Editor Form (2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel p-6 md:p-8 rounded-2xl space-y-6">
            <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-zinc-850 pb-2 flex items-center gap-2">
              <Edit3 className="w-5 h-5 text-dz-gold" />
              {currentT.fieldsSec} {selectedArticleIndex !== null ? `#${selectedArticleIndex + 1}` : '(New Article)'}
            </h3>

            {/* Core Slug & Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                  {currentT.fieldSlug}
                </label>
                <input
                  type="text"
                  placeholder="fifa-world-cup-2026-predictions"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full bg-zinc-950/80 border border-zinc-850 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-dz-gold transition-all text-emerald-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                  {currentT.fieldDate}
                </label>
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-zinc-950/80 border border-zinc-850 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-dz-gold transition-all"
                />
              </div>
            </div>

            {/* Language Switch Tabs for Editor Form */}
            <div className="flex bg-zinc-950 p-1 rounded-xl border border-zinc-850 w-fit">
              {(['ar', 'en', 'fr'] as FormLang[]).map((fl) => (
                <button
                  key={fl}
                  type="button"
                  onClick={() => setFormLang(fl)}
                  className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    formLang === fl
                      ? 'bg-dz-gold text-dz-darker shadow-lg'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {fl === 'ar' ? currentT.arTab : fl === 'en' ? currentT.enTab : currentT.frTab}
                </button>
              ))}
            </div>

            {/* Form Fields for Active Language */}
            <div className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                  {currentT.fieldTitle} ({formLang.toUpperCase()})
                </label>
                <input
                  type="text"
                  value={titles[formLang]}
                  onChange={(e) => setTitles({ ...titles, [formLang]: e.target.value })}
                  dir={formLang === 'ar' ? 'rtl' : 'ltr'}
                  className="w-full bg-zinc-950/80 border border-zinc-850 rounded-xl px-4 py-2.5 text-sm font-semibold focus:outline-none focus:border-dz-gold transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                  {currentT.fieldExcerpt} ({formLang.toUpperCase()})
                </label>
                <textarea
                  value={excerpts[formLang]}
                  onChange={(e) => setExcerpts({ ...excerpts, [formLang]: e.target.value })}
                  rows={2}
                  dir={formLang === 'ar' ? 'rtl' : 'ltr'}
                  className="w-full bg-zinc-950/80 border border-zinc-850 rounded-xl p-4 text-xs focus:outline-none focus:border-dz-gold transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                  {currentT.fieldContent} ({formLang.toUpperCase()})
                </label>
                <textarea
                  value={contents[formLang]}
                  onChange={(e) => setContents({ ...contents, [formLang]: e.target.value })}
                  rows={10}
                  dir={formLang === 'ar' ? 'rtl' : 'ltr'}
                  className="w-full bg-zinc-950/80 border border-zinc-850 rounded-xl p-4 text-xs font-mono focus:outline-none focus:border-dz-gold transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                  {currentT.fieldKeywords} ({formLang.toUpperCase()})
                </label>
                <input
                  type="text"
                  value={keywords[formLang]}
                  onChange={(e) => setKeywords({ ...keywords, [formLang]: e.target.value })}
                  dir={formLang === 'ar' ? 'rtl' : 'ltr'}
                  className="w-full bg-zinc-950/80 border border-zinc-855 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-dz-gold transition-all"
                />
              </div>
            </div>

            {/* Save Form Button */}
            <button
              onClick={handleSave}
              className="w-full flex items-center justify-center gap-2 bg-dz-green hover:bg-dz-green-light font-bold py-3 px-4 rounded-xl transition-all cursor-pointer shadow-lg border border-dz-green-light"
            >
              <Save className="w-4.5 h-4.5" />
              <span>{currentT.saveBtn}</span>
            </button>

          </div>

          {/* Instructions Step-by-Step Box */}
          <div className="glass-panel p-6 rounded-2xl bg-zinc-900/40">
            <h4 className="text-xs font-bold text-dz-gold uppercase tracking-wider mb-4 flex items-center gap-2">
              <HelpCircle className="w-4.5 h-4.5" />
              {currentT.guideTitle}
            </h4>
            <ul className="text-xs text-zinc-400 space-y-3 leading-relaxed">
              <li>{currentT.step1}</li>
              <li>{currentT.step2}</li>
              <li>{currentT.step3}</li>
              <li>{currentT.step4}</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
