import { ArrowLeft } from 'lucide-react';

interface WorldCupReportProps {
  lang: 'ar' | 'en' | 'fr';
  onBack: () => void;
}

export default function WorldCupReport({ lang, onBack }: WorldCupReportProps) {
  const isRtl = lang === 'ar';

  const t = {
    en: {
      metaReport: "FIFA World Cup 2026 · Market Intelligence & Simulation Report",
      tag: "Live Simulation Checkup",
      eyebrow: "Special Report — Arab Teams · Projected Group Stage 2026",
      headline: <>Arab Football<br /><em>Leads the Charge</em></>,
      deck: "Algeria is projected to qualify from Group J as runner-up. Morocco is predicted to top its group. Eight Arab nations on the world's biggest stage — DZ Analytica tracks every simulation checkup, probability, and projection.",
      algeriaProb: "Algeria — Projected Qualification Probability",
      algeriaSub: "Round of 32 entry projected (Checkup)",
      moroccoProb: "Morocco — Projected Qualification Probability",
      moroccoSub: "Benchmark Arab contender simulation",
      algeriaPoints: "Algeria — Projected Group J Points",
      algeriaPointsSub: "Projected GD +1 · Runner-up finish simulation",
      participating: "Arab Teams Participating",
      participatingSub: "Record Arab presence in a single tournament",
      introTitle: "A Historic Moment for Arab Football (Simulation Checkups)",
      introP1: "The 2026 FIFA World Cup marks an extraordinary chapter in the story of Arab football. With the tournament expanded to 48 teams and hosted across the United States, Canada, and Mexico, a record 8 Arab nations have secured places on the game's biggest stage. Following Morocco's watershed semifinal at Qatar 2022, expectations across the region have never been higher.",
      introP2: "DZ Analytica's group-stage simulation checkup projects Algeria as a standout performer among Arab sides, qualifying from Group J with 4 points and a positive goal difference. The Fennecs' simulated campaign — a narrow projected loss to Argentina, a crucial projected draw with Austria, and a commanding simulated win over Jordan — positions them as a genuine knockout-round threat.",
      introP3: "Morocco, Egypt, Saudi Arabia, Tunisia, Qatar, Iraq, and Jordan complete a contingent that collectively represents the growing stature of Arab football in the global game. This report maps each team's simulated group-stage performance, qualification probability, and the broader economic implications of the region's record presence at the World Cup finals.",
      groupFocus: "Group J · Simulation Focus",
      algeriaCampaign: "Algeria's Projected Group-Stage Campaign",
      algeriaBody1: "Algeria arrives in North America carrying the expectations of millions of supporters. In our simulation checkup, against one of the tournament's most formidable groups — featuring World Cup favorites Argentina — the Fennecs demonstrate the tactical maturity that has long been their promise.",
      pullQuote: "Algeria is projected to finish second in Group J with 4 points and a positive goal difference — the strongest simulated group-stage result by an Arab side.",
      matchResults: "Projected Match Checkups (Simulation)",
      colMatch: "Match",
      colScore: "Projected Score",
      colResult: "Projected Result",
      colPoints: "Projected Points",
      standingsTitle: "Projected Group J Standings (Simulation Checkup)",
      tacticTitle: "Tactical Strengths (Model Inputs)",
      tactic1: "Compact defensive shape limiting space between the lines",
      tactic2: "Rapid transitions exploiting space on the counter-attack",
      tactic3: "Strong midfield pressing disrupting opposition build-up",
      tactic4: "Effective use of wide channels to stretch defensive blocks",
      tactic5: "Clinical finishing when opportunities are created",
      tactic6: "Set-piece threat supplementing open-play attacking quality",
      moroccoFocus: "Group C · Simulation Checkup",
      moroccoTitle: "Morocco: The Benchmark",
      moroccoBody1: "Drawn into Group C alongside Brazil, Scotland, and Haiti, Morocco enters the tournament as the highest-ranked Arab side in our simulations. The Atlas Lions' historic semifinal run at Qatar 2022 — the first by an African or Arab nation — fundamentally altered how the world perceives football from the region.",
      moroccoBody2: "DZ Analytica's model projects a 75–85% qualification probability for Morocco, the highest of any Arab side in the tournament. Their European-based squad, allied to the organizational discipline that characterized their 2022 campaign, makes them genuine Round of 16 contenders and a plausible dark horse for the quarterfinals.",
      summaryFocus: "Group Stage Projections",
      contingentTitle: "The Full Arab Contingent Projections",
      contingentBody1: "Beyond Algeria and Morocco, six further Arab nations — Tunisia, Egypt, Saudi Arabia, Qatar, Iraq, and Jordan — have qualified for the 2026 finals, each navigating a distinct simulated group landscape with varying prospects for progression.",
      contingentBody2: "Egypt, placed in Group G alongside Belgium, Iran, and New Zealand, carries a 40–55% qualification probability according to DZ Analytica's model. The Pharaohs possess sufficient quality to challenge for second place and could become the third Arab side to advance from the group stage.",
      contingentBody3: "Saudi Arabia, three years removed from their extraordinary victory over Argentina in Qatar, face Spain and Uruguay in Group H. Their projected probability of 30–45% reflects both the difficulty of the draw and the capability they possess for producing results against odds — a trait they have demonstrated on football's biggest stage. Tunisia (Group F, 35–45%), Qatar (Group B, 20–35%), Iraq (Group I, 15–25%), and Jordan (Group J, projected elimination) complete the picture of a region that has sent its most ambitious, most experienced delegation to a World Cup finals.",
      colTeam: "Team",
      colGroup: "Group",
      colQual: "Simulated Qualification Probability",
      colProj: "Projected Points",
      sidebarQualTitle: "Simulated Qualification Probability",
      sidebarBreakdown: "Algeria — Simulation Breakdown",
      sidebarAsRunnerUp: "As Group Runner-Up (2nd)",
      sidebarAsBestThird: "As Best 3rd-Placed Team",
      sidebarElim: "Projected Elimination Probability",
      sidebarBreakdownNote: "Simulated based on 4 points, GD +1, and 4 goals scored across Group J fixtures.",
      sidebarModel: "DZ Analytica Model Info",
      sidebarModelDesc1: "Projections incorporate team form, head-to-head records, player quality, tactical setups, and the competitive landscape of each group.",
      sidebarModelDesc2: "The expanded 48-team format allows the eight best third-placed finishers to advance — significantly increasing the value of even modest positive goal differences.",
      sidebarKeyStat: "Simulation Stat",
      sidebarKeyStatTitle: "Arab teams at 2026",
      sidebarKeyStatDesc: "The largest Arab contingent in World Cup history, underscoring the region's growing footballing infrastructure and qualification depth.",
      overviewFocus: "All Arab Participants (Simulations)",
      overviewTitle: "Eight Nations, One Stage",
      conclusionFocus: "DZ Analytica — Conclusion Checkup",
      conclusionTitle: <>A Region<br />Rewriting<br /><span>Its Story</span></>,
      conclusionP1: "The 2026 FIFA World Cup could become the defining tournament for Arab football's global standing. Where Qatar 2022 produced Morocco's extraordinary semifinal run as a single landmark, the 2026 edition offers an entire cohort of Arab nations the chance to validate the progress made since.",
      conclusionP2: "Algeria's simulated qualification from Group J — built on 4 points, a positive goal difference, and the simulated capability to hold their nerve against Argentina — represents the most measured, methodical performance an Arab side has produced in the group stage simulations since Morocco's own 2022 campaign. DZ Analytica's cumulative qualification probability of approximately 90% reflects not just favorable arithmetic, but genuine competitive growth.",
      conclusionP3: "Together, eight Arab nations enter the knockout rounds in our model with aspirations that extend well beyond participation. The global game is witnessing a structural shift in where football's next chapter will be written — and increasingly, it is being written in Arabic.",
      disclaimer: "Report published June 12, 2026 · All projections are analytical estimates, checkups, and simulations and may differ from actual results.",
      loss: "Projected Loss",
      draw: "Projected Draw",
      win: "Projected Win",
      eliminated: "Projected Elimination",
      backButton: "Back to Feed"
    },
    ar: {
      metaReport: "كأس العالم FIFA 2026 · تقرير استخبارات السوق والمحاكاة",
      tag: "فحص المحاكاة المباشرة",
      eyebrow: "تقرير خاص — المنتخبات العربية · دور المجموعات المتوقع 2026",
      headline: <>الكرة العربية<br /><em>تقود الصدارة</em></>,
      deck: "تشير التوقعات إلى تأهل الجزائر عن المجموعة 10 كوصيف. ومن المتوقع أن يتصدر المغرب مجموعته. 8 دول عربية على أكبر مسرح عالمي — دزاير أناليتيكا تتابع كل فحص محاكاة، واحتمال، وتوقع.",
      algeriaProb: "الجزائر — احتمال التأهل المتوقع",
      algeriaSub: "توقع دخول دور الـ 32 (فحص المحاكاة)",
      moroccoProb: "المغرب — احتمال التأهل المتوقع",
      moroccoSub: "محاكاة المنافس العربي الأبرز",
      algeriaPoints: "الجزائر — النقاط المتوقعة في المجموعة 10",
      algeriaPointsSub: "فارق الأهداف المتوقع +1 · محاكاة الإنهاء في المركز الثاني",
      participating: "المنتخبات العربية المشاركة",
      participatingSub: "حضور عربي قياسي في بطولة واحدة",
      introTitle: "لحظة تاريخية لكرة القدم العربية (فحوصات المحاكاة)",
      introP1: "تمثل بطولة كأس العالم FIFA 2026 فصلاً استثنائياً في تاريخ كرة القدم العربية. مع توسيع البطولة لتشمل 48 فريقاً واستضافتها في الولايات المتحدة وكندا والمكسيك، حجزت 8 منتخبات عربية مكاناً لها على أكبر مسرح كروي. بعد تأهل المغرب التاريخي لنصف النهائي في قطر 2022، لم تكن التوقعات في المنطقة أعلى مما هي عليه اليوم.",
      introP2: "يتوقع تحليل محاكاة دور المجموعات من دزاير أناليتيكا أن تكون الجزائر صاحبة الأداء الأبرز بين المنتخبات العربية، بالتأهل من المجموعة 10 بـ 4 نقاط وفارق أهداف إيجابي. إن مسيرة محاربي الصحراء المحاكاتية — خسارة متوقعة ضيقة أمام الأرجنتين، تعادل حاسم متوقع مع النمسا، وفوز محاكاتي مقنع على الأردن — تضعهم كتهديد حقيقي في الأدوار الإقصائية.",
      introP3: "يكمل المغرب ومصر والمملكة العربية السعودية وتونس وقطر والعراق والأردن هذه المجموعة التي تمثل بشكل جماعي المكانة المتنامية لكرة القدم العربية في اللعبة العالمية. يوضح هذا التقرير أداء كل فريق في محاكاة دور المجموعات، واحتمال تأهله، والآثار الاقتصادية الأوسع للوجود القياسي للمنطقة في نهائيات كأس العالم.",
      groupFocus: "المجموعة 10 · تركيز المحاكاة",
      algeriaCampaign: "مسيرة الجزائر المتوقعة في دور المجموعات",
      algeriaBody1: "تصل الجزائر إلى أمريكا الشمالية حاملةً توقعات الملايين من مشجعيها. في فحص المحاكاة الخاص بنا، وضد واحدة من أقوى مجموعات البطولة — التي تضم الأرجنتين المرشحة للقب — يظهر محاربو الصحراء النضج التكتيكي الذي طالما وعدوا به.",
      pullQuote: "تشير التوقعات إلى أن الجزائر ستنهي المجموعة 10 في المركز الثاني برصيد 4 نقاط وفارق أهداف إيجابي — وهي أقوى نتيجة محاكاة لمنتخب عربي.",
      matchResults: "النتائج المتوقعة للمباريات (محاكاة)",
      colMatch: "المباراة",
      colScore: "النتيجة المتوقعة",
      colResult: "النتيجة النهائية المتوقعة",
      colPoints: "النقاط المتوقعة",
      standingsTitle: "الترتيب المتوقع للمجموعة 10 (فحص المحاكاة)",
      tacticTitle: "نقاط القوة التكتيكية (مدخلات النموذج)",
      tactic1: "تقارب الخطوط الدفاعية مما يحد من المساحات بين الخطوط",
      tactic2: "التحولات الهجومية السريعة لاستغلال المساحات في المرتدات",
      tactic3: "الضغط القوي في خط الوسط لتعطيل بناء اللعب لدى الخصم",
      tactic4: "الاستغلال الفعال للأطراف لتوسيع الكتل الدفاعية للمنافس",
      tactic5: "الإنهاء الحاسم للهجمات عند خلق الفرص",
      tactic6: "خطورة الكرات الثابتة التي تعزز جودة اللعب المفتوح",
      moroccoFocus: "المجموعة C · فحص المحاكاة",
      moroccoTitle: "المغرب: المعيار المرجعي",
      moroccoBody1: "وقع المغرب في المجموعة الثالثة إلى جانب البرازيل واسكتلندا وهايتي، ودخل البطولة في محاكاتنا بصفته المنتخب العربي الأعلى تصنيفاً والمعيار المرجعي الذي تقاس به بقية المنتخبات. إن مسيرة أسود الأطلس التاريخية لنصف النهائي في قطر 2022 غيرت جذرياً نظرة العالم لكرة القدم في المنطقة.",
      moroccoBody2: "يتوقع نموذج دزاير أناليتيكا احتمال تأهل بنسبة 75-85% للمغرب، وهي النسبة الأعلى لأي منتخب عربي في البطولة. إن تشكيلتهم التي تضم لاعبين ينشطون في أوروبا، إلى جانب الانضباط التنظيمي الذي ميز مسيرتهم في 2022، تجعلهم منافسين حقيقيين للوصول إلى دور الـ 16 وحصاناً أسود لربع النهائي.",
      summaryFocus: "توقعات دور المجموعات",
      contingentTitle: "توقعات الوفد العربي الكامل",
      contingentBody1: "بالإضافة إلى الجزائر والمغرب، تأهلت 6 دول عربية أخرى — تونس، مصر، المملكة العربية السعودية، قطر، العراق، والأردن — لنهائيات 2026، حيث يواجه كل منها ظروفاً مختلفة في المحاكاة للمرور للدور القادم.",
      contingentBody2: "تحمل مصر، التي تلعب في المجموعة السابعة إلى جانب بلجيكا وإيران ونيوزيلندا، احتمال تأهل بنسبة 40-55% وفقاً لنموذج دزاير أناليتيكا. يمتلك الفراعنة الجودة الكافية للمنافسة على المركز الثاني وتأكيد الصعود.",
      contingentBody3: "أما السعودية، التي تفصلها 3 سنوات عن فوزها التاريخي على الأرجنتين في قطر، فتواجه إسبانيا والأوروغواي في المجموعة الثامنة. تعكس نسبتها المتوقعة البالغة 30-45% صعوبة القرعة وقدرتهم في الوقت ذاته على تحقيق المفاجأة. وتكمل تونس (المجموعة السادسة، 35-45%)، قطر (المجموعة الثانية، 20-35%)، العراق (المجموعة التاسعة، 15-25%)، والأردن (المجموعة 10، إقصاء متوقع) مشهد الوفد الأكثر طموحاً وخبرة للمنطقة.",
      colTeam: "المنتخب",
      colGroup: "المجموعة",
      colQual: "احتمالية التأهل المحاكاتية",
      colProj: "النقاط المتوقعة",
      sidebarQualTitle: "احتمالية التأهل المحاكاتية",
      sidebarBreakdown: "تفصيل محاكاة الجزائر",
      sidebarAsRunnerUp: "كوصيف المجموعة (الثاني)",
      sidebarAsBestThird: "كأحد أفضل الثوالث",
      sidebarElim: "احتمال الإقصاء المتوقع",
      sidebarBreakdownNote: "محاكاة بناءً على 4 نقاط، فارق أهداف +1، و 4 أهداف مسجلة في المجموعة 10.",
      sidebarModel: "نموذج دزاير أناليتيكا",
      sidebarModelDesc1: "تتضمن التوقعات مستوى الفريق، المواجهات المباشرة، جودة اللاعبين، الخطط التكتيكية، والمشهد التنافسي لكل مجموعة.",
      sidebarModelDesc2: "يسمح نظام الـ 48 فريقاً الموسع لأفضل 8 منتخبات من أصحاب المركز الثالث بالتأهل — مما يزيد من قيمة فارق الأهداف الإيجابي بشكل كبير.",
      sidebarKeyStat: "إحصائية المحاكاة",
      sidebarKeyStatTitle: "منتخبات عربية في 2026",
      sidebarKeyStatDesc: "أكبر وفد عربي في تاريخ كأس العالم، مما يؤكد نمو البنية التحتية الرياضية وعمق التأهل في المنطقة.",
      overviewFocus: "جميع المشاركين العرب (محاكاة)",
      overviewTitle: "ثمانية منتخبات، مسرح واحد",
      conclusionFocus: "دزاير أناليتيكا — الخاتمة",
      conclusionTitle: <>منطقة<br />تعيد كتابة<br /><span>تاريخها</span></>,
      conclusionP1: "يمكن أن تصبح بطولة كأس العالم FIFA 2026 البطولة المحددة لمكانة كرة القدم العربية عالمياً. فبينما كانت قطر 2022 شاهداً على مسيرة المغرب الاستثنائية كمعلم منفرد، توفر نسخة 2026 للمجموعة العربية بأكملها فرصة لإثبات التطور المحقق.",
      conclusionP2: "يمثل تأهل الجزائر المحاكاتي عن المجموعة 10 — المبني على 4 نقاط وفارق أهداف إيجابي والقدرة المحاكاتية على الصمود أمام الأرجنتين — الأداء الأكثر توازناً ومنهجية لمنتخب عربي في محاكاة دور المجموعات منذ مسيرة المغرب في 2022. يعكس احتمال التأهل التراكمي البالغ حوالي 90% نمواً تنافسياً حقيقياً.",
      conclusionP3: "معاً، تدخل 8 منتخبات عربية الأدوار الإقصائية في نموذجنا بتطلعات تتجاوز مجرد المشاركة الشرفية. تشهد اللعبة العالمية تحولاً هيكلياً في كتابة فصولها القادمة — وبشكل متزايد، تكتب هذه فصول باللغة العربية.",
      disclaimer: "تم نشر التقرير في 12 يونيو 2026 · جميع التوقعات هي تقديرات وفحوصات ومحاكاة تحليلية وقد تختلف عن النتائج الفعلية للمباريات.",
      loss: "خسارة متوقعة",
      draw: "تعادل متوقع",
      win: "فوز متوقع",
      eliminated: "إقصاء متوقع",
      backButton: "العودة للمقالات"
    },
    fr: {
      metaReport: "Coupe du Monde de la FIFA 2026 · Rapport d'Intelligence & Simulation",
      tag: "Vérification de Simulation",
      eyebrow: "Rapport Spécial — Équipes Arabes · Phase de Groupes Projetée 2026",
      headline: <>Football Arabe<br /><em>Mène la Charge</em></>,
      deck: "L'Algérie est projetée pour se qualifier du Groupe J en tant que deuxième. Le Maroc est prévu pour terminer en tête de son groupe. Huit nations arabes sur la plus grande scène mondiale — DZ Analytica suit chaque simulation, probabilité et projection.",
      algeriaProb: "Algérie — Probabilité Projetée de Qualification",
      algeriaSub: "Entrée projetée en 16es de finale (Simulation)",
      moroccoProb: "Maroc — Probabilité Projetée de Qualification",
      moroccoSub: "Simulation du contendant arabe de référence",
      algeriaPoints: "Algérie — Points Projetés du Groupe J",
      algeriaPointsSub: "Différence de buts projetée de +1 · Simulation de 2e place",
      participating: "Équipes Arabes Participantes",
      participatingSub: "Présence arabe record dans un seul tournoi",
      introTitle: "Un Moment Historique pour le Football Arabe (Simulations)",
      introP1: "La Coupe du Monde de la FIFA 2026 marque un chapitre extraordinaire dans l'histoire du football arabe. Avec l'expansion du tournoi à 48 équipes et son organisation aux États-Unis, au Canada et au Mexique, un record de 8 nations arabes ont assuré leur place sur la plus grande scène du football. Après la demi-finale historique du Maroc au Qatar 2022, les attentes dans la région n'ont jamais été aussi élevées.",
      introP2: "L'analyse de simulation de phase de groupes de DZ Analytica projette l'Algérie comme le performeur marquant parmi les équipes arabes, se qualifiant du Groupe J avec 4 points et une différence de buts positive. La campagne simulée des Fennecs — une défaite projetée étroite contre l'Argentine, un match nul projeté crucial avec l'Autriche et une victoire simulée convaincante contre la Jordanie — les positionne comme une menace sérieuse pour les phases à élimination directe.",
      introP3: "Le Maroc, l'Égypte, l'Arabie Saoudite, la Tunisie, le Qatar, l'Irak et la Jordanie complètent un contingent qui représente collectivement la stature croissante du football arabe dans le jeu mondial. Ce rapport cartographie les performances simulées de chaque équipe en phase de groupes, leurs probabilités de qualification et les implications économiques plus larges de la présence record de la région en phase finale de la Coupe du Monde.",
      groupFocus: "Groupe J · Focus de Simulation",
      algeriaCampaign: "Campagne de phase de groupes projetée de l'Algérie",
      algeriaBody1: "L'Algérie arrive en Amérique du Nord portant les attentes de millions de supporters. Dans notre simulation, contre l'un des groupes les plus redoutables du tournoi — comprenant l'Argentine, favorite de la Coupe du Monde — les Fennecs démontrent la maturité tactique promise de longue date.",
      pullQuote: "L'Algérie est projetée pour terminer deuxième du Groupe J avec 4 points et une différence de buts positive — le meilleur résultat simulé pour une équipe arabe.",
      matchResults: "Résultats de Match Projetés (Simulation)",
      colMatch: "Match",
      colScore: "Score Projeté",
      colResult: "Résultat Projeté",
      colPoints: "Points Projetés",
      standingsTitle: "Classement Projeté du Groupe J (Simulation)",
      tacticTitle: "Forces Tactiques (Données du Modèle)",
      tactic1: "Bloc défensif compact limitant l'espace entre les lignes",
      tactic2: "Transitions rapides exploitant l'espace en contre-attaque",
      tactic3: "Pressing fort au milieu perturbant la construction adverse",
      tactic4: "Utilisation efficace des couloirs pour étirer le bloc défensif",
      tactic5: "Finition clinique lorsque les opportunités se présentent",
      tactic6: "Menace sur coups de pied arrêtés complétant le jeu ouvert",
      moroccoFocus: "Groupe C · Simulation",
      moroccoTitle: "Maroc : La Référence",
      moroccoBody1: "Placé dans le Groupe C aux côtés du Brésil, de l'Écosse et d'Haïti, le Maroc aborde le tournoi dans nos simulations en tant qu'équipe arabe la mieux classée et référence absolue. La demi-finale historique des Lions de l'Atlas au Qatar 2022 a fondamentalement modifié la perception mondiale du football de la région.",
      moroccoBody2: "DZ Analytica prévoit une probabilité de qualification de 75–85% pour le Maroc, la plus élevée parmi les équipes arabes. Leur effectif basé en Europe, allié à la discipline organisationnelle qui a caractérisé leur campagne de 2022, en fait de véritables candidats aux huitièmes de finale et un quart-de-finaliste potentiel.",
      summaryFocus: "Projections de Phase de Groupes",
      contingentTitle: "Projections du Contingent Arabe Complet",
      contingentBody1: "Au-delà de l'Algérie et du Maroc, six autres nations arabes — la Tunisie, l'Égypte, l'Arabie Saoudite, le Qatar, l'Irak et la Jordanie — se sont qualifiées pour la phase finale de 2026, chacune naviguant dans un groupe simulé distinct avec des perspectives variées.",
      contingentBody2: "L'Égypte, placée dans le Groupe G avec la Belgique, l'Iran et la Nouvelle-Zélande, affiche une probabilité de qualification de 40–55% selon notre modèle. Les Pharaons possèdent la qualité nécessaire pour disputer la deuxième place qualificative.",
      contingentBody3: "L'Arabie Saoudite affronte l'Espagne et l'Uruguay dans le Groupe H. Leur probabilité projetée de 30–45% réflechit la difficulté du tirage et leur capacité prouvée à créer des exploits. La Tunisie (Groupe F, 35–45%), le Qatar (Groupe B, 20–35%), l'Irak (Groupe I, 15–25%) et la Jordanie (Groupe J, élimination projetée) complètent le tableau d'une délégation ambitieuse.",
      colTeam: "Équipe",
      colGroup: "Groupe",
      colQual: "Probabilité de Qualification Simulée",
      colProj: "Points Projetés",
      sidebarQualTitle: "Probabilité de Qualification Simulée",
      sidebarBreakdown: "Algérie — Détails de Simulation",
      sidebarAsRunnerUp: "En tant que 2e du Groupe",
      sidebarAsBestThird: "En tant que meilleur 3e",
      sidebarElim: "Probabilité d'Élimination Projetée",
      sidebarBreakdownNote: "Simulation basée sur 4 points, différence de buts de +1, et 4 buts marqués dans le Groupe J.",
      sidebarModel: "Modèle DZ Analytica",
      sidebarModelDesc1: "Les projections intègrent la forme de l'équipe, les confrontations directes, la qualité des joueurs, les tactiques et le contexte de chaque groupe.",
      sidebarModelDesc2: "Le format élargi à 48 équipes permet aux 8 meilleurs troisièmes de se qualifier, augmentant la valeur d'une différence de buts positive.",
      sidebarKeyStat: "Stat de Simulation",
      sidebarKeyStatTitle: "Équipes arabes en 2026",
      sidebarKeyStatDesc: "Le plus grand contingent arabe de l'histoire de la Coupe du Monde, soulignant la croissance des infrastructures sportives régionales.",
      overviewFocus: "Tous les participants arabes (Simulations)",
      overviewTitle: "Huit Nations, Une Scène",
      conclusionFocus: "DZ Analytica — Conclusion",
      conclusionTitle: <>Une Région<br />Réécrit<br /><span>son Histoire</span></>,
      conclusionP1: "La Coupe du Monde de la FIFA 2026 pourrait s'imposer comme le tournoi déterminant pour le football arabe à l'échelle mondiale. Si le Qatar 2022 a vu l'épopée isolée du Maroc, l'édition 2026 offre à toute la cohorte arabe l'opportunité de valider ses progrès.",
      conclusionP2: "La qualification de l'Algérie dans le Groupe J — construite sur 4 points, une différence de buts positive et la capacité simulée à tenir tête à l'Argentine — représente la performance la plus méthodique d'une équipe arabe en phase de groupes simulée depuis le Maroc en 2022. La probabilité cumulative d'environ 90% reflète une croissance compétitive.",
      conclusionP3: "Ensemble, huit nations arabes abordent les phases éliminatoires dans notre modèle avec des ambitions élevées. Le football mondial assiste à un virage structurel majeur, et de plus en plus, le nouveau chapitre s'écrit en arabe.",
      disclaimer: "Rapport publié le 12 juin 2026 · Les projections sont des estimations, vérifications et simulations analytiques et peuvent différer des résultats réels.",
      loss: "Défaite Projetée",
      draw: "Nul Projeté",
      win: "Victoire Projetée",
      eliminated: "Élimination Projetée",
      backButton: "Retour au flux"
    }
  };

  const currentT = t[lang];

  // Specific Arab teams dataset for the bottom cards
  const teamCards = [
    { flag: "🇩🇿", name: { en: "Algeria", ar: "الجزائر", fr: "Algérie" }, group: "Group J", prob: "~90%", probLabel: isRtl ? "احتمالية التأهل" : "qualification probability", outlook: { en: "Strong Round of 32 candidate in simulations. Projected 4 pts, +1 GD. Qualified as group runner-up projection.", ar: "مرشح قوي لدور الـ 32 في المحاكاة. متوقع 4 نقاط، فارق أهداف +1. تأهل متوقع كوصيف للمجموعة.", fr: "Fort candidat pour les 16es de finale en simulations. Projeté 4 pts, +1 GD. Qualifié en tant que 2e du groupe." }, color: "high" },
    { flag: "🇲🇦", name: { en: "Morocco", ar: "المغرب", fr: "Maroc" }, group: "Group C", prob: "75–85%", probLabel: isRtl ? "احتمالية التأهل" : "qualification probability", outlook: { en: "Regional benchmark. Contender for Round of 16 and beyond in model following 2022 heroics.", ar: "المعيار المرجعي للمنطقة. مرشح لدور الـ 16 وما بعده في النموذج بعد إنجازات 2022.", fr: "Référence régionale. Contendant pour les 8es de finale et au-delà après les exploits de 2022." }, color: "high" },
    { flag: "🇪🇬", name: { en: "Egypt", ar: "مصر", fr: "Égypte" }, group: "Group G", prob: "40–55%", probLabel: isRtl ? "احتمالية التأهل" : "qualification probability", outlook: { en: "Seeking first knockout qualification in decades. Capable of challenging Belgium for second in simulations.", ar: "يسعى للتأهل للأدوار الإقصائية للمرة الأولى منذ عقود. قادر على منافسة بلجيكا على الوصافة في المحاكاة.", fr: "Cherche sa première qualification en phase finale depuis des décennies. Capable de défier la Belgique en simulation." }, color: "mid" },
    { flag: "🇹🇳", name: { en: "Tunisia", ar: "تونس", fr: "Tunisie" }, group: "Group F", prob: "35–45%", probLabel: isRtl ? "احتمالية التأهل" : "qualification probability", outlook: { en: "Competitive but difficult draw. Every simulated point will be crucial against Netherlands and Japan.", ar: "قرعة تنافسية وصعبة. كل نقطة محاكاة ستكون حاسمة أمام هولندا واليابان.", fr: "Tirage compétitif mais difficile. Chaque point simulé sera crucial contre les Pays-Bas et le Japon." }, color: "mid" },
    { flag: "🇸🇦", name: { en: "Saudi Arabia", ar: "السعودية", fr: "Arabie Saoudite" }, group: "Group H", prob: "30–45%", probLabel: isRtl ? "احتمالية التأهل" : "qualification probability", outlook: { en: "Proven capacity for upsets. Faces Spain and Uruguay in a demanding simulated group.", ar: "قدرة مثبتة على إحداث المفاجآت. يواجه إسبانيا والأوروغواي في مجموعة محاكاة قوية.", fr: "Capacité avérée à créer des surprises. Affronte l'Espagne et l'Uruguay dans un groupe simulé exigeant." }, color: "mid" },
    { flag: "🇶🇦", name: { en: "Qatar", ar: "قطر", fr: "Qatar" }, group: "Group B", prob: "20–35%", probLabel: isRtl ? "احتمالية التأهل" : "qualification probability", outlook: { en: "Difficult path to progression in simulations. Could challenge for third place with a strong opening performance.", ar: "طريق صعب للتقدم في المحاكاة. قد ينافس على المركز الثالث بأداء قوي في البداية.", fr: "Chemin difficile pour progresser en simulation. Pourrait viser la 3e place avec une bonne entrée en matière." }, color: "low" },
    { flag: "🇮🇶", name: { en: "Iraq", ar: "العراق", fr: "Irak" }, group: "Group I", prob: "15–25%", probLabel: isRtl ? "احتمالية التأهل" : "qualification probability", outlook: { en: "One of the toughest simulated draws: France, Senegal, Norway. Valuable experience for a developing side.", ar: "واحدة من أصعب مجموعات المحاكاة: فرنسا، السنغال، النرويج. تجربة قيمة لفريق يتطور.", fr: "Un des tirages simulés les plus durs : France, Sénégal, Norvège. Expérience précieuse pour un groupe en développement." }, color: "low" },
    { flag: "🇯🇴", name: { en: "Jordan", ar: "الأردن", fr: "Jordanie" }, group: "Group J", prob: currentT.eliminated, probLabel: "0 pts, GD -3", outlook: { en: "Developmental tournament simulation. Experience gained will prove invaluable for future qualifying campaigns.", ar: "محاكاة لبطولة تطويرية وتجربة قيمة ستكون حاسمة في تصفيات كأس العالم القادمة.", fr: "Simulation d'apprentissage. L'expérience acquise s'avérera précieuse pour les futures campagnes." }, color: "low" }
  ];

  return (
    <div className="world-cup-report-page">
      {/* Dynamic Font and Style Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap');
        
        .world-cup-report-page {
          --navy:   #0B1426;
          --navy2:  #131F38;
          --green:  #006233;
          --green2: #00843D;
          --gold:   #C9A84C;
          --cream:  #F5F0E8;
          --slate:  #8B9BB4;
          --white:  #FFFFFF;
          --red:    #C0392B;
          
          background: var(--navy);
          color: var(--cream);
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          line-height: 1.65;
          text-align: ${isRtl ? 'right' : 'left'};
          direction: ${isRtl ? 'rtl' : 'ltr'};
          padding-bottom: 40px;
        }

        .report-back-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 48px;
          border-bottom: 1px solid rgba(201,168,76,.15);
          background: var(--navy);
        }
        .btn-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: var(--gold);
          border: 1px solid rgba(201,168,76,.3);
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-back:hover {
          background: rgba(201,168,76,.1);
          border-color: var(--gold);
        }

        /* ── HERO ── */
        .wcr-hero {
          position: relative;
          padding: 80px 48px 64px;
          overflow: hidden;
          background: linear-gradient(135deg, var(--navy) 60%, #0D2040 100%);
        }
        .wcr-hero::before {
          content: '2026';
          position: absolute;
          ${isRtl ? 'left: -20px;' : 'right: -20px;'}
          top: -30px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 340px;
          font-weight: 900;
          color: rgba(255,255,255,.025);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }
        .wcr-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: .15em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 24px;
        }
        .wcr-hero-eyebrow::before {
          content: '';
          display: block;
          width: 32px; height: 2px;
          background: var(--gold);
        }
        .wcr-hero-headline {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(48px, 7vw, 88px);
          font-weight: 900;
          line-height: .95;
          text-transform: uppercase;
          letter-spacing: -.01em;
          max-width: 820px;
          color: var(--white);
          margin-bottom: 32px;
        }
        .wcr-hero-headline em {
          font-style: normal;
          color: var(--green2);
          display: block;
        }
        .wcr-hero-deck {
          max-width: 560px;
          font-size: 16px;
          font-weight: 300;
          line-height: 1.7;
          color: var(--slate);
          margin-bottom: 48px;
        }

        /* ── PROB GAUGE ── */
        .wcr-gauge-row {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }
        .wcr-gauge-card {
          background: var(--navy2);
          border: 1px solid rgba(201,168,76,.15);
          border-radius: 4px;
          padding: 20px 28px;
          min-width: 200px;
          flex: 1;
          max-width: 280px;
          text-align: ${isRtl ? 'right' : 'left'};
        }
        .wcr-gauge-card-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--slate);
          margin-bottom: 8px;
        }
        .wcr-gauge-card-value {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 52px;
          font-weight: 900;
          line-height: 1;
          color: var(--white);
        }
        .wcr-gauge-card-value.green { color: var(--green2); }
        .wcr-gauge-card-value.gold  { color: var(--gold); }
        .wcr-gauge-card-sub {
          font-size: 11px;
          color: var(--slate);
          margin-top: 4px;
        }
        .wcr-progress-bar-wrap {
          margin-top: 12px;
          background: rgba(255,255,255,.07);
          border-radius: 2px;
          height: 4px;
          overflow: hidden;
        }
        .wcr-progress-bar-fill {
          height: 100%;
          border-radius: 2px;
          background: var(--green2);
          transition: width 1.2s cubic-bezier(.22,1,.36,1);
        }
        .wcr-progress-bar-fill.gold { background: var(--gold); }

        /* ── LAYOUT ── */
        .wcr-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
        }
        .wcr-content-grid {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 64px;
          padding: 64px 0;
        }

        /* ── SECTION LABELS ── */
        .wcr-section-eyebrow {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: var(--gold);
          border-left: ${isRtl ? 'none' : '3px solid var(--gold)'};
          border-right: ${isRtl ? '3px solid var(--gold)' : 'none'};
          padding-left: ${isRtl ? '0' : '10px'};
          padding-right: ${isRtl ? '10px' : '0'};
          margin-bottom: 16px;
          text-align: ${isRtl ? 'right' : 'left'};
        }
        .wcr-section-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 36px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .01em;
          color: var(--white);
          line-height: 1.05;
          margin-bottom: 20px;
          text-align: ${isRtl ? 'right' : 'left'};
        }

        /* ── BODY TEXT ── */
        .wcr-body-text p {
          color: #CBD5E1;
          margin-bottom: 16px;
          font-size: 15px;
          line-height: 1.75;
        }
        .wcr-body-text p:last-child { margin-bottom: 0; }
        .wcr-article-section { margin-bottom: 56px; }

        /* ── DIVIDER ── */
        .wcr-divider {
          border: none;
          border-top: 1px solid rgba(139,155,180,.15);
          margin: 48px 0;
        }

        /* ── MATCH TABLE ── */
        .wcr-match-table-wrap { margin: 24px 0; overflow-x: auto; }
        .wcr-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }
        .wcr-table th {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--slate);
          padding: 8px 14px;
          text-align: ${isRtl ? 'right' : 'left'};
          border-bottom: 1px solid rgba(139,155,180,.2);
        }
        .wcr-table td {
          padding: 12px 14px;
          color: var(--cream);
          text-align: ${isRtl ? 'right' : 'left'};
        }
        .wcr-table tr {
          border-bottom: 1px solid rgba(139,155,180,.08);
          transition: background .15s;
        }
        .wcr-table tr:hover { background: rgba(255,255,255,.03); }
        .wcr-table td.result-win  { color: var(--green2); font-weight: 600; }
        .wcr-table td.result-draw { color: var(--gold);   font-weight: 600; }
        .wcr-table td.result-loss { color: var(--red);    font-weight: 600; }
        
        .wcr-table tr.highlight-row td { background: rgba(0,132,61,.08); }
        .wcr-table tr.highlight-row td:first-child {
          border-left: ${isRtl ? 'none' : '3px solid var(--green2)'};
          border-right: ${isRtl ? '3px solid var(--green2)' : 'none'};
          padding-left: ${isRtl ? '14px' : '11px'};
          padding-right: ${isRtl ? '11px' : '14px'};
        }

        .wcr-pos { 
          display: inline-flex; align-items: center; justify-content: center;
          width: 24px; height: 24px;
          border-radius: 50%;
          font-size: 12px; font-weight: 700;
          background: rgba(139,155,180,.15);
          color: var(--slate);
        }
        .wcr-pos.p1 { background: var(--gold); color: var(--navy); }
        .wcr-pos.p2 { background: var(--green2); color: var(--white); }

        /* ── PULL QUOTE ── */
        .wcr-pull-quote {
          border-left: ${isRtl ? 'none' : '4px solid var(--green2)'};
          border-right: ${isRtl ? '4px solid var(--green2)' : 'none'};
          padding: 20px 24px;
          margin: 32px 0;
          background: rgba(0,132,61,.07);
          border-radius: ${isRtl ? '4px 0 0 4px' : '0 4px 4px 0'};
        }
        .wcr-pull-quote p {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 24px;
          font-weight: 700;
          line-height: 1.25;
          color: var(--white);
          text-transform: uppercase;
          letter-spacing: .01em;
        }
        .wcr-pull-quote cite {
          display: block;
          margin-top: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-style: normal;
          color: var(--slate);
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        /* ── TACTICS GRID ── */
        .wcr-tactics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin: 24px 0;
        }
        .wcr-tactic-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px;
          background: rgba(255,255,255,.04);
          border-radius: 3px;
          border: 1px solid rgba(255,255,255,.06);
        }
        .wcr-tactic-bullet {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--green2);
          margin-top: 6px;
          flex-shrink: 0;
        }
        .wcr-tactic-text {
          font-size: 13px;
          color: var(--cream);
          line-height: 1.5;
        }

        /* ── SIDEBAR ── */
        .wcr-sidebar { position: relative; }
        .wcr-sidebar-card {
          background: var(--navy2);
          border: 1px solid rgba(201,168,76,.15);
          border-radius: 4px;
          padding: 24px;
          margin-bottom: 24px;
        }
        .wcr-sidebar-card-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 18px;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--white);
          letter-spacing: .04em;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(201,168,76,.2);
          text-align: ${isRtl ? 'right' : 'left'};
        }
        .wcr-prob-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }
        .wcr-prob-team {
          font-size: 12px;
          font-weight: 500;
          color: var(--cream);
          width: 100px;
          flex-shrink: 0;
          text-align: ${isRtl ? 'right' : 'left'};
        }
        .wcr-prob-bar-bg {
          flex: 1;
          height: 6px;
          background: rgba(255,255,255,.08);
          border-radius: 3px;
          overflow: hidden;
        }
        .wcr-prob-bar-inner {
          height: 100%;
          border-radius: 3px;
          background: var(--slate);
        }
        .wcr-prob-bar-inner.top1 { background: var(--green2); }
        .wcr-prob-bar-inner.top2 { background: var(--gold); }
        .wcr-prob-pct {
          font-size: 12px;
          font-weight: 600;
          color: var(--white);
          width: 40px;
          text-align: ${isRtl ? 'left' : 'right'};
          flex-shrink: 0;
        }

        /* ── OVERVIEW ── */
        .wcr-overview-section {
          background: var(--navy2);
          border-top: 1px solid rgba(139,155,180,.1);
          border-bottom: 1px solid rgba(139,155,180,.1);
          padding: 64px 48px;
        }
        .wcr-overview-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .wcr-team-card {
          background: var(--navy);
          padding: 24px 20px;
          border: 1px solid rgba(139,155,180,.08);
          transition: border-color .2s;
          text-align: ${isRtl ? 'right' : 'left'};
        }
        .wcr-team-card:hover { border-color: rgba(201,168,76,.3); }
        .wcr-team-card-flag {
          font-size: 28px;
          margin-bottom: 8px;
        }
        .wcr-team-card-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 20px;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--white);
          margin-bottom: 4px;
        }
        .wcr-team-card-group {
          font-size: 11px;
          color: var(--slate);
          letter-spacing: .06em;
          margin-bottom: 12px;
        }
        .wcr-team-card-prob {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 32px;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 2px;
        }
        .wcr-team-card-prob.high   { color: var(--green2); }
        .wcr-team-card-prob.mid    { color: var(--gold); }
        .wcr-team-card-prob.low    { color: var(--slate); }
        .wcr-team-card-prob-label {
          font-size: 10px;
          color: var(--slate);
          letter-spacing: .08em;
          text-transform: uppercase;
        }
        .wcr-team-card-outlook {
          font-size: 12px;
          color: #8B9BB4;
          margin-top: 10px;
          line-height: 1.5;
        }

        /* ── CONCLUSION ── */
        .wcr-conclusion-banner {
          background: linear-gradient(135deg, var(--green) 0%, #004A27 100%);
          padding: 64px 48px;
        }
        .wcr-conclusion-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .wcr-conclusion-headline {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 52px;
          font-weight: 900;
          text-transform: uppercase;
          line-height: .95;
          color: var(--white);
        }
        .wcr-conclusion-headline span { color: rgba(255,255,255,.4); display: block; }
        .wcr-conclusion-body {
          font-size: 15px;
          line-height: 1.75;
          color: rgba(255,255,255,.8);
          text-align: ${isRtl ? 'right' : 'left'};
        }
        .wcr-conclusion-body p { margin-bottom: 14px; }
        .wcr-conclusion-body p:last-child { margin-bottom: 0; }

        /* ── FOOTER ── */
        .wcr-footer {
          padding: 28px 48px;
          border-top: 1px solid rgba(139,155,180,.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--navy);
        }
        .wcr-footer-logo {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 18px;
          font-weight: 900;
          letter-spacing: .1em;
          color: var(--gold);
        }
        .wcr-footer-logo span { color: rgba(255,255,255,.3); }
        .wcr-footer-copy {
          font-size: 11px;
          color: var(--slate);
          letter-spacing: .04em;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .report-back-bar, .wcr-hero, .wcr-wrapper, .wcr-overview-section, .wcr-conclusion-banner, .wcr-footer {
            padding-left: 24px; padding-right: 24px;
          }
          .wcr-content-grid { grid-template-columns: 1fr; gap: 40px; }
          .wcr-overview-grid { grid-template-columns: repeat(2, 1fr); }
          .wcr-conclusion-inner { grid-template-columns: 1fr; gap: 32px; }
          .wcr-hero::before { font-size: 200px; }
          .wcr-tactics-grid { grid-template-columns: 1fr; }
          .wcr-gauge-card { max-width: 100%; }
        }
        @media (max-width: 600px) {
          .wcr-overview-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Nav Controls Bar */}
      <div className="report-back-bar">
        <button onClick={onBack} className="btn-back">
          <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" />
          <span>{currentT.backButton}</span>
        </button>
        <div className="wcr-footer-copy">
          {lang === 'ar' ? '12 يونيو 2026' : 'June 12, 2026'}
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="wcr-hero">
        <div className="wcr-hero-eyebrow">{currentT.eyebrow}</div>
        <h1 className="wcr-hero-headline">{currentT.headline}</h1>
        <p className="wcr-hero-deck">{currentT.deck}</p>

        <div className="wcr-gauge-row">
          <div className="wcr-gauge-card">
            <div className="wcr-gauge-card-label">{currentT.algeriaProb}</div>
            <div className="wcr-gauge-card-value green">90%</div>
            <div className="wcr-gauge-card-sub">{currentT.algeriaSub}</div>
            <div className="wcr-progress-bar-wrap">
              <div className="wcr-progress-bar-fill" style={{ width: '90%' }} />
            </div>
          </div>
          <div className="wcr-gauge-card">
            <div className="wcr-gauge-card-label">{currentT.moroccoProb}</div>
            <div className="wcr-gauge-card-value green">80%</div>
            <div className="wcr-gauge-card-sub">{currentT.moroccoSub}</div>
            <div className="wcr-progress-bar-wrap">
              <div className="wcr-progress-bar-fill" style={{ width: '80%' }} />
            </div>
          </div>
          <div className="wcr-gauge-card">
            <div className="wcr-gauge-card-label">{currentT.algeriaPoints}</div>
            <div className="wcr-gauge-card-value gold">{lang === 'ar' ? '4 نقاط' : '4 pts'}</div>
            <div className="wcr-gauge-card-sub">{currentT.algeriaPointsSub}</div>
            <div className="wcr-progress-bar-wrap">
              <div className="wcr-progress-bar-fill gold" style={{ width: '44%' }} />
            </div>
          </div>
          <div className="wcr-gauge-card">
            <div className="wcr-gauge-card-label">{currentT.participating}</div>
            <div className="wcr-gauge-card-value" style={{ color: 'var(--white)' }}>8</div>
            <div className="wcr-gauge-card-sub">{currentT.participatingSub}</div>
            <div className="wcr-progress-bar-wrap">
              <div className="wcr-progress-bar-fill" style={{ width: '100%', background: 'var(--slate)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="wcr-wrapper">
        <div className="wcr-content-grid">
          
          {/* Main Content Body */}
          <main>
            {/* Intro */}
            <article className="wcr-article-section">
              <div className="wcr-section-eyebrow">{lang === 'ar' ? 'مقدمة' : 'Introduction'}</div>
              <h2 className="wcr-section-title">{currentT.introTitle}</h2>
              <div className="wcr-body-text">
                <p>{currentT.introP1}</p>
                <p>{currentT.introP2}</p>
                <p>{currentT.introP3}</p>
              </div>
            </article>

            <hr className="wcr-divider" />

            {/* Algeria Deep Dive */}
            <article className="wcr-article-section">
              <div className="wcr-section-eyebrow">{currentT.groupFocus}</div>
              <h2 className="wcr-section-title">{currentT.algeriaCampaign}</h2>
              <div className="wcr-body-text">
                <p>{currentT.algeriaBody1}</p>
              </div>

              <div className="wcr-pull-quote">
                <p>"{currentT.pullQuote}"</p>
                <cite>
                  {isRtl 
                    ? 'تقييم محاكاة دور المجموعات من دزاير أناليتيكا — يونيو 2026' 
                    : 'DZ Analytica Group Stage Simulation Assessment — June 2026'}
                </cite>
              </div>

              <div className="wcr-section-eyebrow" style={{ marginTop: '28px' }}>{currentT.matchResults}</div>
              <div className="wcr-match-table-wrap">
                <table className="wcr-table">
                  <thead>
                    <tr>
                      <th>{currentT.colMatch}</th>
                      <th>{currentT.colScore}</th>
                      <th>{currentT.colResult}</th>
                      <th>{currentT.colPoints}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{isRtl ? 'الجزائر ضد الأرجنتين' : 'Algeria vs Argentina'}</td>
                      <td>1 – 2</td>
                      <td className="result-loss">{currentT.loss}</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>{isRtl ? 'الجزائر ضد النمسا' : 'Algeria vs Austria'}</td>
                      <td>1 – 1</td>
                      <td className="result-draw">{currentT.draw}</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>{isRtl ? 'الجزائر ضد الأردن' : 'Algeria vs Jordan'}</td>
                      <td>3 – 0</td>
                      <td className="result-win">{currentT.win}</td>
                      <td>3</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="wcr-section-eyebrow" style={{ marginTop: '28px' }}>{currentT.standingsTitle}</div>
              <div className="wcr-match-table-wrap">
                <table className="wcr-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Team</th>
                      <th>Pts</th>
                      <th>GF</th>
                      <th>GA</th>
                      <th>GD</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span className="wcr-pos p1">1</span></td>
                      <td><strong>{isRtl ? 'الأرجنتين' : 'Argentina'}</strong></td>
                      <td>9</td><td>5</td><td>2</td><td>+3</td>
                    </tr>
                    <tr className="highlight-row">
                      <td><span className="wcr-pos p2">2</span></td>
                      <td><strong>{isRtl ? 'الجزائر ✓' : 'Algeria ✓'}</strong></td>
                      <td>4</td><td>5</td><td>2</td><td>+1</td>
                    </tr>
                    <tr>
                      <td><span className="wcr-pos">3</span></td>
                      <td>{isRtl ? 'النمسا' : 'Austria'}</td>
                      <td>4</td><td>2</td><td>3</td><td>-1</td>
                    </tr>
                    <tr>
                      <td><span className="wcr-pos">4</span></td>
                      <td>{isRtl ? 'الأردن' : 'Jordan'}</td>
                      <td>0</td><td>1</td><td>4</td><td>-3</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="wcr-section-eyebrow" style={{ marginTop: '28px' }}>{currentT.tacticTitle}</div>
              <div className="wcr-tactics-grid">
                {[currentT.tactic1, currentT.tactic2, currentT.tactic3, currentT.tactic4, currentT.tactic5, currentT.tactic6].map((tacticText, idx) => (
                  <div key={idx} className="wcr-tactic-item">
                    <div className="wcr-tactic-bullet" />
                    <div className="wcr-tactic-text">{tacticText}</div>
                  </div>
                ))}
              </div>
            </article>

            <hr className="wcr-divider" />

            {/* Morocco */}
            <article className="wcr-article-section">
              <div className="wcr-section-eyebrow">{currentT.moroccoFocus}</div>
              <h2 className="wcr-section-title">{currentT.moroccoTitle}</h2>
              <div className="wcr-body-text">
                <p>{currentT.moroccoBody1}</p>
                <p>{currentT.moroccoBody2}</p>
              </div>
            </article>

            <hr className="wcr-divider" />

            {/* Full Arab Summary */}
            <article className="wcr-article-section">
              <div className="wcr-section-eyebrow">{currentT.summaryFocus}</div>
              <h2 className="wcr-section-title">{currentT.contingentTitle}</h2>
              <div className="wcr-body-text">
                <p>{currentT.contingentBody1}</p>
                <p>{currentT.contingentBody2}</p>
                <p>{currentT.contingentBody3}</p>
              </div>

              <div className="wcr-match-table-wrap" style={{ marginTop: '24px' }}>
                <table className="wcr-table">
                  <thead>
                    <tr>
                      <th>{currentT.colTeam}</th>
                      <th>{currentT.colGroup}</th>
                      <th>{currentT.colQual}</th>
                      <th>{currentT.colProj}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="highlight-row">
                      <td><strong>{isRtl ? 'الجزائر' : 'Algeria'}</strong></td>
                      <td>J</td>
                      <td className="result-win">71.3% (cumul. ~90%)</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td><strong>{isRtl ? 'المغرب' : 'Morocco'}</strong></td>
                      <td>C</td>
                      <td className="result-win">75–85%</td>
                      <td>5–7</td>
                    </tr>
                    <tr>
                      <td>{isRtl ? 'مصر' : 'Egypt'}</td>
                      <td>G</td>
                      <td className="result-draw">40–55%</td>
                      <td>4–6</td>
                    </tr>
                    <tr>
                      <td>{isRtl ? 'تونس' : 'Tunisia'}</td>
                      <td>F</td>
                      <td className="result-draw">35–45%</td>
                      <td>3–4</td>
                    </tr>
                    <tr>
                      <td>{isRtl ? 'السعودية' : 'Saudi Arabia'}</td>
                      <td>H</td>
                      <td className="result-draw">30–45%</td>
                      <td>3–4</td>
                    </tr>
                    <tr>
                      <td>{isRtl ? 'قطر' : 'Qatar'}</td>
                      <td>B</td>
                      <td className="result-loss">20–35%</td>
                      <td>2–4</td>
                    </tr>
                    <tr>
                      <td>{isRtl ? 'العراق' : 'Iraq'}</td>
                      <td>I</td>
                      <td className="result-loss">15–25%</td>
                      <td>1–3</td>
                    </tr>
                    <tr>
                      <td>{isRtl ? 'الأردن' : 'Jordan'}</td>
                      <td>J</td>
                      <td className="result-loss">{currentT.eliminated}</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </main>

          {/* Right Sidebar */}
          <aside className="wcr-sidebar">
            <div className="wcr-sidebar-card">
              <div className="wcr-sidebar-card-title">{currentT.sidebarQualTitle}</div>
              {[
                { name: isRtl ? "المغرب" : "Morocco", val: 80, isTop1: true },
                { name: isRtl ? "الجزائر" : "Algeria", val: 71, isTop2: true },
                { name: isRtl ? "مصر" : "Egypt", val: 48 },
                { name: isRtl ? "تونس" : "Tunisia", val: 40 },
                { name: isRtl ? "السعودية" : "Saudi Arabia", val: 38 },
                { name: isRtl ? "قطر" : "Qatar", val: 28 },
                { name: isRtl ? "العراق" : "Iraq", val: 20 },
                { name: isRtl ? "الأردن" : "Jordan", val: 0, isElim: true }
              ].map((team, idx) => (
                <div key={idx} className="wcr-prob-row">
                  <div className="wcr-prob-team">{team.name}</div>
                  <div className="wcr-prob-bar-bg">
                    <div 
                      className={`wcr-prob-bar-inner ${team.isTop1 ? 'top1' : team.isTop2 ? 'top2' : ''}`}
                      style={{ 
                        width: `${team.val}%`, 
                        background: (!team.isTop1 && !team.isTop2) ? (team.isElim ? 'transparent' : '#8B9BB4') : undefined 
                      }} 
                    />
                  </div>
                  <div className="wcr-prob-pct" style={{ color: team.isElim ? 'var(--slate)' : undefined }}>
                    {team.isElim ? '—' : `${team.val}%`}
                  </div>
                </div>
              ))}
            </div>

            <div className="wcr-sidebar-card">
              <div className="wcr-sidebar-card-title">{currentT.sidebarBreakdown}</div>
              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '11px', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '6px' }}>
                  {currentT.sidebarAsRunnerUp}
                </div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '36px', fontWeight: 900, color: 'var(--green2)', lineHeight: 1 }}>~75%</div>
              </div>
              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '11px', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '6px' }}>
                  {currentT.sidebarAsBestThird}
                </div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '36px', fontWeight: 900, color: 'var(--gold)', lineHeight: 1 }}>~15%</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '6px' }}>
                  {currentT.sidebarElim}
                </div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '36px', fontWeight: 900, color: 'var(--slate)', lineHeight: 1 }}>~10%</div>
              </div>
              <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(139,155,180,.15)', fontSize: '11px', color: 'var(--slate)', lineHeight: '1.6' }}>
                {currentT.sidebarBreakdownNote}
              </div>
            </div>

            <div className="wcr-sidebar-card">
              <div className="wcr-sidebar-card-title">{currentT.sidebarModel}</div>
              <div style={{ fontSize: '13px', color: '#8B9BB4', lineHeight: 1.7 }}>
                <p style={{ marginBottom: '10px' }}>{currentT.sidebarModelDesc1}</p>
                <p>{currentT.sidebarModelDesc2}</p>
              </div>
            </div>

            <div className="wcr-sidebar-card" style={{ background: 'linear-gradient(135deg,rgba(0,98,51,.25),rgba(0,98,51,.05))', borderColor: 'rgba(0,132,61,.4)' }}>
              <div className="wcr-sidebar-card-title" style={{ borderColor: 'rgba(0,132,61,.3)' }}>{currentT.sidebarKeyStat}</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '64px', fontWeight: 900, color: 'var(--green2)', lineHeight: 1 }}>8</div>
              <div style={{ fontSize: '12px', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '12px' }}>{currentT.sidebarKeyStatTitle}</div>
              <div style={{ fontSize: '13px', color: '#8B9BB4', lineHeight: 1.65 }}>{currentT.sidebarKeyStatDesc}</div>
            </div>
          </aside>

        </div>
      </div>

      {/* Full-width Arab Overview */}
      <section className="wcr-overview-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto 36px' }}>
          <div className="wcr-section-eyebrow">{currentT.overviewFocus}</div>
          <h2 className="wcr-section-title">{currentT.overviewTitle}</h2>
        </div>
        <div className="wcr-overview-grid">
          {teamCards.map((team, idx) => (
            <div key={idx} className="wcr-team-card">
              <div className="wcr-team-card-flag">{team.flag}</div>
              <div className="wcr-team-card-name">{team.name[lang]}</div>
              <div className="wcr-team-card-group">{team.group}</div>
              <div className={`wcr-team-card-prob wcr-team-card-prob-${team.color}`}>{team.prob}</div>
              <div className="wcr-team-card-prob-label">{team.probLabel}</div>
              <div className="wcr-team-card-outlook">{team.outlook[lang]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="wcr-conclusion-banner">
        <div className="wcr-conclusion-inner">
          <div>
            <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginBottom: '16px', borderLeft: isRtl ? 'none' : '3px solid rgba(255,255,255,.4)', borderRight: isRtl ? '3px solid rgba(255,255,255,.4)' : 'none', paddingLeft: isRtl ? '0' : '10px', paddingRight: isRtl ? '10px' : '0' }}>
              {currentT.conclusionFocus}
            </div>
            <h2 className="wcr-conclusion-headline">
              {currentT.conclusionTitle}
            </h2>
          </div>
          <div className="wcr-conclusion-body">
            <p>{currentT.conclusionP1}</p>
            <p>{currentT.conclusionP2}</p>
            <p>{currentT.conclusionP3}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="wcr-footer">
        <div className="wcr-footer-logo">DZ<span> Analytica</span></div>
        <div className="wcr-footer-copy">{currentT.disclaimer}</div>
      </footer>
    </div>
  );
}
