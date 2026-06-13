import { ArrowLeft, Calendar, Shield, Trophy, Activity, Lightbulb } from 'lucide-react';

interface WorldCupReportProps {
  lang: 'ar' | 'en' | 'fr';
  onBack: () => void;
}

export default function WorldCupReport({ lang, onBack }: WorldCupReportProps) {
  const isRtl = lang === 'ar';

  const t = {
    en: {
      title: "FIFA World Cup 2026",
      subtitle: "Market Intelligence & Projections Report",
      eyebrow: "Special Report — Arab Teams · Group Stage 2026",
      headline: "Arab Football Leads the Charge",
      deck: "Algeria qualifies from Group J as runner-up. Morocco tops its group. Eight Arab nations on the world's biggest stage — DZ Analytica tracks every result, probability, and projection.",
      tag: "Live Analysis",
      algeriaProb: "Algeria — Qualification Probability",
      algeriaSub: "Round of 32 entry projected",
      moroccoProb: "Morocco — Qualification Probability",
      moroccoSub: "Benchmark Arab contender",
      pointsCard: "Algeria — Group J Final Points",
      pointsSub: "Goal difference +1 · Runner-up finish",
      participating: "Arab Teams Participating",
      participatingSub: "Record Arab presence in a single tournament",
      introTitle: "A Historic Moment for Arab Football",
      introText1: "The 2026 FIFA World Cup marks an extraordinary chapter in the story of Arab football. With the tournament expanded to 48 teams and hosted across the United States, Canada, and Mexico, a record eight Arab nations have secured places on the game's biggest stage. Following Morocco's watershed semifinal at Qatar 2022, expectations across the region have never been higher.",
      introText2: "DZ Analytica's group-stage analysis projects Algeria as the standout performer among Arab sides, qualifying from Group J with four points and a positive goal difference. The Fennecs' disciplined campaign — a narrow loss to Argentina, a crucial draw with Austria, and a commanding win over Jordan — positions them as a genuine knockout-round threat.",
      introText3: "Morocco, Egypt, Saudi Arabia, Tunisia, Qatar, Iraq, and Jordan complete a contingent that collectively represents the growing stature of Arab football in the global game. This report maps each team's group-stage performance, qualification probability, and the broader economic implications of the region's record presence at the World Cup finals.",
      algeriaTitle: "Algeria's Group-Stage Campaign",
      algeriaBody1: "Algeria arrived in North America carrying the expectations of millions of supporters and answered with the most composed group-stage performance of any Arab side. Against one of the tournament's most formidable groups — featuring World Cup favorites Argentina — the Fennecs demonstrated the tactical maturity that had long been their promise.",
      pullQuote: "Algeria finished second in Group J with 4 points and a positive goal difference — the strongest group-stage result by an Arab side since Morocco in 2022.",
      matchResults: "Match Results",
      matchCol: "Match",
      scoreCol: "Score",
      resCol: "Result",
      ptsCol: "Points",
      standingsTitle: "Final Group J Standings",
      tacticTitle: "Tactical Strengths",
      tactic1: "Compact defensive shape limiting space between the lines",
      tactic2: "Rapid transitions exploiting space on the counter-attack",
      tactic3: "Strong midfield pressing disrupting opposition build-up",
      tactic4: "Effective use of wide channels to stretch defensive blocks",
      tactic5: "Clinical finishing when opportunities are created",
      tactic6: "Set-piece threat supplementing open-play attacking quality",
      moroccoTitle: "Morocco: The Benchmark",
      moroccoBody1: "Drawn into Group C alongside Brazil, Scotland, and Haiti, Morocco enters the tournament as the highest-ranked Arab side and the benchmark against which others are measured. The Atlas Lions' historic semifinal run at Qatar 2022 — the first by an African or Arab nation — fundamentally altered how the world perceives football from the region.",
      moroccoBody2: "DZ Analytica projects a 75–85% qualification probability for Morocco, the highest of any Arab side in the tournament. Their European-based squad, allied to the organizational discipline that characterized their 2022 campaign, makes them genuine Round of 16 contenders and a plausible dark horse for the quarterfinals.",
      contingentTitle: "The Full Arab Contingent",
      contingentBody1: "Beyond Algeria and Morocco, six further Arab nations — Tunisia, Egypt, Saudi Arabia, Qatar, Iraq, and Jordan — have qualified for the 2026 finals, each navigating a distinct group landscape with varying prospects for progression.",
      contingentBody2: "Egypt, placed in Group G alongside Belgium, Iran, and New Zealand, carries a 40–55% qualification probability according to DZ Analytica's model. The Pharaohs possess sufficient quality to challenge for second place and could become the third Arab side to advance from the group stage.",
      contingentBody3: "Saudi Arabia, three years removed from their extraordinary victory over Argentina in Qatar, face Spain and Uruguay in Group H. Their projected probability of 30–45% reflects both the difficulty of the draw and the capability they possess for producing results against odds. Tunisia (Group F, 35–45%), Qatar (Group B, 20–35%), Iraq (Group I, 15–25%), and Jordan (Group J, eliminated) complete the picture of a region that has sent its most ambitious, most experienced delegation to a World Cup finals.",
      qualProb: "Qualification Probability",
      breakdown: "Algeria — Qual. Breakdown",
      asRunnerUp: "As Group Runner-Up (2nd)",
      asBestThird: "As Best 3rd-Placed Team",
      elimProb: "Elimination Probability",
      breakdownNote: "Based on 4 points, GD +1, and 4 goals scored across Group J fixtures.",
      modelTitle: "DZ Analytica Model",
      modelDesc1: "Projections incorporate team form, head-to-head records, player quality, tactical setups, and the competitive landscape of each group.",
      modelDesc2: "The expanded 48-team format allows the eight best third-placed finishers to advance — significantly increasing the value of even modest positive goal differences.",
      keyStat: "Key Stat",
      keyStatTitle: "Arab teams at 2026",
      keyStatDesc: "The largest Arab contingent in World Cup history, underscoring the region's growing footballing infrastructure and qualification depth.",
      eightNations: "Eight Nations, One Stage",
      participants: "All Arab Participants",
      conclusion: "A Region Rewriting Its Story",
      conclusionBody1: "The 2026 FIFA World Cup could become the defining tournament for Arab football's global standing. Where Qatar 2022 produced Morocco's extraordinary semifinal run as a single landmark, the 2026 edition offers an entire cohort of Arab nations the chance to validate the progress made since.",
      conclusionBody2: "Algeria's disciplined qualification from Group J — built on four points, a positive goal difference, and the maturity to hold their nerve against Argentina — represents the most measured, methodical performance an Arab side has produced in the group stage since Morocco's own 2022 campaign.",
      conclusionBody3: "Together, eight Arab nations enter the knockout rounds with aspirations that extend well beyond participation. The global game is witnessing a structural shift in where football's next chapter will be written — and increasingly, it is being written in Arabic.",
      loss: "Loss",
      draw: "Draw",
      win: "Win",
      eliminated: "Eliminated",
      groupLabel: "qualification probability",
      published: "Report published June 12, 2026 · All projections are analytical estimates and may differ from actual results.",
      backButton: "Back to Feed"
    },
    ar: {
      title: "كأس العالم FIFA 2026",
      subtitle: "تقرير استخبارات السوق والتوقعات",
      eyebrow: "تقرير خاص — المنتخبات العربية · دور المجموعات 2026",
      headline: "الكرة العربية تقود الصدارة",
      deck: "تتأهل الجزائر عن المجموعة العاشرة كوصيف. المغرب يتصدر مجموعته. ثماني دول عربية على أكبر مسرح عالمي — دزاير أناليتيكا تتابع كل نتيجة واحتمال وتوقع.",
      tag: "تحليل مباشر",
      algeriaProb: "الجزائر — احتمال التأهل",
      algeriaSub: "توقع دخول دور الـ 32",
      moroccoProb: "المغرب — احتمال التأهل",
      moroccoSub: "المنافس العربي الأبرز",
      pointsCard: "الجزائر — النقاط النهائية للمجموعة العاشرة",
      pointsSub: "فارق الأهداف +1 · إنهاء في المركز الثاني",
      participating: "المنتخبات العربية المشاركة",
      participatingSub: "حضور عربي قياسي في بطولة واحدة",
      introTitle: "لحظة تاريخية لكرة القدم العربية",
      introText1: "تمثل بطولة كأس العالم FIFA 2026 فصلاً استثنائياً في تاريخ كرة القدم العربية. مع توسيع البطولة لتشمل 48 فريقاً واستضافتها في الولايات المتحدة وكندا والمكسيك، حجزت ثمانية منتخبات عربية مكاناً لها على أكبر مسرح كروي. بعد تأهل المغرب التاريخي لنصف النهائي في قطر 2022، لم تكن التوقعات في المنطقة أعلى مما هي عليه اليوم.",
      introText2: "يتوقع تحليل دور المجموعات من دزاير أناليتيكا أن تكون الجزائر صاحبة الأداء الأبرز بين المنتخبات العربية، بالتأهل من المجموعة العاشرة بأربع نقاط وفارق أهداف إيجابي. إن مسيرة محاربي الصحراء المنضبطة — خسارة ضيقة أمام الأرجنتين، تعادل حاسم مع النمسا، وفوز مقنع على الأردن — تضعهم كتهديد حقيقي في الأدوار الإقصائية.",
      introText3: "يكمل المغرب ومصر والمملكة العربية السعودية وتونس وقطر والعراق والأردن هذه المجموعة التي تمثل بشكل جماعي المكانة المتنامية لكرة القدم العربية في اللعبة العالمية. يوضح هذا التقرير أداء كل فريق في دور المجموعات، واحتمال تأهله، والآثار الاقتصادية الأوسع للوجود القياسي للمنطقة في نهائيات كأس العالم.",
      algeriaTitle: "مسيرة الجزائر في دور المجموعات",
      algeriaBody1: "وصلت الجزائر إلى أمريكا الشمالية حاملةً توقعات الملايين من مشجعيها وأجابت بأكثر أداء متزن لأي فريق عربي في دور المجموعات. ضد واحدة من أقوى مجموعات البطولة — التي تضم الأرجنتين المرشحة للقب — أظهر محاربو الصحراء النضج التكتيكي الذي طالما وعدوا به.",
      pullQuote: "أنهت الجزائر المجموعة العاشرة في المركز الثاني برصيد 4 نقاط وفارق أهداف إيجابي — وهي أقوى نتيجة في دور المجموعات لمنتخب عربي منذ المغرب في عام 2022.",
      matchResults: "نتائج المباريات",
      matchCol: "المباراة",
      scoreCol: "النتيجة",
      resCol: "النتيجة النهائية",
      ptsCol: "النقاط",
      standingsTitle: "الترتيب النهائي للمجموعة العاشرة",
      tacticTitle: "نقاط القوة التكتيكية",
      tactic1: "تقارب الخطوط الدفاعية مما يحد من المساحات بين الخطوط",
      tactic2: "التحولات الهجومية السريعة لاستغلال المساحات في المرتدات",
      tactic3: "الضغط القوي في خط الوسط لتعطيل بناء اللعب لدى الخصم",
      tactic4: "الاستغلال الفعال للأطراف لتوسيع الكتل الدفاعية للمنافس",
      tactic5: "الإنهاء الحاسم للهجمات عند خلق الفرص",
      tactic6: "خطورة الكرات الثابتة التي تعزز جودة اللعب المفتوح",
      moroccoTitle: "المغرب: المعيار المرجعي",
      moroccoBody1: "وقع المغرب في المجموعة الثالثة إلى جانب البرازيل واسكتلندا وهايتي، ودخل البطولة بصفته المنتخب العربي الأعلى تصنيفاً والمعيار المرجعي الذي تقاس به بقية المنتخبات. إن مسيرة أسود الأطلس التاريخية لنصف النهائي في قطر 2022 غيرت جذرياً نظرة العالم لكرة القدم في المنطقة.",
      moroccoBody2: "تتوقع دزاير أناليتيكا احتمال تأهل بنسبة 75-85% للمغرب، وهي النسبة الأعلى لأي منتخب عربي في البطولة. إن تشكيلتهم التي تضم لاعبين ينشطون في أوروبا، إلى جانب الانضباط التنظيمي الذي ميز مسيرتهم في 2022، تجعلهم منافسين حقيقيين للوصول إلى دور الـ 16 وحصاناً أسود لربع النهائي.",
      contingentTitle: "الوفد العربي الكامل",
      contingentBody1: "بالإضافة إلى الجزائر والمغرب، تأهلت ست دول عربية أخرى — تونس، مصر، المملكة العربية السعودية، قطر، العراق، والأردن — لنهائيات 2026، حيث يواجه كل منها ظروفاً مختلفة للمرور للدور القادم.",
      contingentBody2: "تحمل مصر، التي تلعب في المجموعة السابعة إلى جانب بلجيكا وإيران ونيوزيلندا، احتمال تأهل بنسبة 40-55% وفقاً لنموذج دزاير أناليتيكا. يمتلك الفراعنة الجودة الكافية للمنافسة على المركز الثاني وتأكيد الصعود.",
      contingentBody3: "أما السعودية، التي تفصلها ثلاث سنوات عن فوزها التاريخي على الأرجنتين في قطر، فتواجه إسبانيا والأوروغواي في المجموعة الثامنة. تعكس نسبتها المتوقعة البالغة 30-45% صعوبة القرعة وقدرتهم في الوقت ذاته على تحقيق المفاجأة. وتكمل تونس (المجموعة السادسة، 35-45%)، قطر (المجموعة الثانية، 20-35%)، العراق (المجموعة التاسعة، 15-25%)، والأردن (المجموعة العاشرة، مغادر) مشهد الوفد الأكثر طموحاً وخبرة للمنطقة.",
      qualProb: "احتمال التأهل",
      breakdown: "تفصيل تأهل الجزائر",
      asRunnerUp: "كوصيف المجموعة (الثاني)",
      asBestThird: "كأحد أفضل الثوالث",
      elimProb: "احتمال الإقصاء",
      breakdownNote: "بناءً على 4 نقاط، فارق أهداف +1، و 5 أهداف مسجلة في المجموعة العاشرة.",
      modelTitle: "نموذج دزاير أناليتيكا",
      modelDesc1: "تتضمن التوقعات مستوى الفريق، المواجهات المباشرة، جودة اللاعبين، الخطط التكتيكية، والمشهد التنافسي لكل مجموعة.",
      modelDesc2: "يسمح نظام الـ 48 فريقاً الموسع لأفضل 8 منتخبات من أصحاب المركز الثالث بالتأهل — مما يزيد من قيمة فارق الأهداف الإيجابي بشكل كبير.",
      keyStat: "إحصائية رئيسية",
      keyStatTitle: "منتخبات عربية في 2026",
      keyStatDesc: "أكبر وفد عربي في تاريخ كأس العالم، مما يؤكد نمو البنية التحتية الرياضية وعمق التأهل في المنطقة.",
      eightNations: "ثمانية منتخبات، مسرح واحد",
      participants: "جميع المشاركين العرب",
      conclusion: "الخاتمة: منطقة تعيد كتابة تاريخها",
      conclusionBody1: "يمكن أن تصبح بطولة كأس العالم FIFA 2026 البطولة المحددة لمكانة كرة القدم العربية عالمياً. فبينما كانت قطر 2022 شاهداً على مسيرة المغرب الاستثنائية كمعلم منفرد، توفر نسخة 2026 للمجموعة العربية بأكملها فرصة لإثبات التطور المحقق.",
      conclusionBody2: "يمثل تأهل الجزائر المنضبط عن المجموعة العاشرة — المبني على أربع نقاط وفارق أهداف إيجابي والنضج في الصمود أمام الأرجنتين — الأداء الأكثر توازناً ومنهجية لمنتخب عربي في دور المجموعات منذ مسيرة المغرب في 2022.",
      conclusionBody3: "معاً، تدخل ثمانية منتخبات عربية الأدوار الإقصائية بتطلعات تتجاوز مجرد المشاركة الشرفية. تشهد اللعبة العالمية تحولاً هيكلياً في كتابة فصولها القادمة — وبشكل متزايد، تكتب هذه الفصول باللغة العربية.",
      loss: "خسارة",
      draw: "تعادل",
      win: "فوز",
      eliminated: "مغادر",
      groupLabel: "احتمالية التأهل",
      published: "تم نشر التقرير في 12 يونيو 2026 · جميع التوقعات هي تقديرات تحليلية وقد تختلف عن النتائج الفعلية للمباريات.",
      backButton: "العودة للمقالات"
    },
    fr: {
      title: "Coupe du Monde de la FIFA 2026",
      subtitle: "Rapport d'Intelligence et Prévisions de Marché",
      eyebrow: "Rapport Spécial — Équipes Arabes · Phase de Groupes 2026",
      headline: "Le Football Arabe Mène la Charge",
      deck: "L'Algérie se qualifie du Groupe J en tant que deuxième. Le Maroc termine en tête de son groupe. Huit nations arabes sur la plus grande scène mondiale — DZ Analytica suit chaque résultat, probabilité et projection.",
      tag: "Analyse en Direct",
      algeriaProb: "Algérie — Probabilité de Qualification",
      algeriaSub: "Entrée projetée en 16es de finale",
      moroccoProb: "Maroc — Probabilité de Qualification",
      moroccoSub: "Contendant arabe de référence",
      pointsCard: "Algérie — Points Finaux du Groupe J",
      pointsSub: "Différence de buts +1 · Deuxième place",
      participating: "Équipes Arabes Participantes",
      participatingSub: "Présence arabe record dans un seul tournoi",
      introTitle: "Un Moment Historique pour le Football Arabe",
      introText1: "La Coupe du Monde de la FIFA 2026 marque un chapitre extraordinaire dans l'histoire du football arabe. Avec l'expansion du tournoi à 48 équipes et son organisation aux États-Unis, au Canada et au Mexique, un record de huit nations arabes ont assuré leur place sur la plus grande scène du football. Après la demi-finale historique du Maroc au Qatar 2022, les attentes dans la région n'ont jamais été aussi élevées.",
      introText2: "L'analyse de la phase de groupes de DZ Analytica projette l'Algérie comme le performeur marquant parmi les équipes arabes, se qualifiant du Groupe J avec quatre points et une différence de buts positive. La campagne disciplinée des Fennecs — une défaite étroite contre l'Argentine, un match nul crucial avec l'Autriche et une victoire convaincante contre la Jordanie — les positionne comme une menace sérieuse pour les phases à élimination directe.",
      introText3: "Le Maroc, l'Égypte, l'Arabie Saoudite, la Tunisie, le Qatar, l'Irak et la Jordanie complètent un contingent qui représente collectivement la stature croissante du football arabe dans le jeu mondial. Ce rapport cartographie les performances de chaque équipe en phase de groupes, leurs probabilités de qualification et les implications économiques plus larges de la présence record de la région en phase finale de la Coupe du Monde.",
      algeriaTitle: "Campagne de phase de groupes de l'Algérie",
      algeriaBody1: "L'Algérie est arrivée en Amérique du Nord portant les attentes de millions de supporters et a répondu par la performance la plus posée en phase de groupes de toutes les équipes arabes. Face à l'un des groupes les plus redoutables du tournoi — comprenant l'Argentine, favorite de la Coupe du Monde — les Fennecs ont démontré la maturité tactique promise de longue date.",
      pullQuote: "L'Algérie a terminé deuxième du Groupe J avec 4 points et une différence de buts positive — le meilleur résultat en phase de groupes pour une équipe arabe depuis le Maroc en 2022.",
      matchResults: "Résultats des Matchs",
      matchCol: "Match",
      scoreCol: "Score",
      resCol: "Résultat",
      ptsCol: "Points",
      standingsTitle: "Classement Final du Groupe J",
      tacticTitle: "Forces Tactiques",
      tactic1: "Bloc défensif compact limitant l'espace entre les lignes",
      tactic2: "Transitions rapides exploitant l'espace en contre-attaque",
      tactic3: "Pressing fort au milieu perturbant la construction adverse",
      tactic4: "Utilisation efficace des couloirs pour étirer le bloc défensif",
      tactic5: "Finition clinique lorsque les opportunités se présentent",
      tactic6: "Menace sur coups de pied arrêtés complétant le jeu ouvert",
      moroccoTitle: "Maroc : La Référence",
      moroccoBody1: "Placé dans le Groupe C aux côtés du Brésil, de l'Écosse et d'Haïti, le Maroc aborde le tournoi en tant qu'équipe arabe la mieux classée et référence absolue. La demi-finale historique des Lions de l'Atlas au Qatar 2022 a fondamentalement modifié la perception mondiale du football de la région.",
      moroccoBody2: "DZ Analytica prévoit une probabilité de qualification de 75-85% pour le Maroc, la plus élevée parmi les équipes arabes. Leur effectif basé en Europe, allié à la discipline organisationnelle qui a caractérisé leur campagne de 2022, en fait de véritables candidats aux huitièmes de finale et un quart-de-finaliste potentiel.",
      contingentTitle: "Le Contingent Arabe Complet",
      contingentBody1: "Au-delà de l'Algérie et du Maroc, six autres nations arabes — la Tunisie, l'Égypte, l'Arabie Saoudite, le Qatar, l'Irak et la Jordanie — se sont qualifiées pour la phase finale de 2026, chacune naviguant dans un groupe distinct avec des perspectives variées.",
      contingentBody2: "L'Égypte, placée dans le Groupe G avec la Belgique, l'Iran et la Nouvelle-Zélande, affiche une probabilité de qualification de 40-55% selon notre modèle. Les Pharaons possèdent la qualité nécessaire pour disputer la deuxième place qualificative.",
      contingentBody3: "L'Arabie Saoudite affronte l'Espagne et l'Uruguay dans le Groupe H. Leur probabilité projetée de 30-45% reflète la difficulté du tirage et leur capacité prouvée à créer des exploits. La Tunisie (Groupe F, 35-45%), le Qatar (Groupe B, 20-35%), l'Irak (Groupe I, 15-25%) et la Jordanie (Groupe J, éliminée) complètent le tableau d'une délégation ambitieuse.",
      qualProb: "Probabilité de Qualification",
      breakdown: "Algérie — Détails de Qual.",
      asRunnerUp: "En tant que 2e du Groupe",
      asBestThird: "En tant que meilleur 3e",
      elimProb: "Probabilité d'Élimination",
      breakdownNote: "Basé sur 4 points, différence de buts de +1, et 5 buts marqués dans le Groupe J.",
      modelTitle: "Modèle DZ Analytica",
      modelDesc1: "Les projections intègrent la forme de l'équipe, les confrontations directes, la qualité des joueurs, les tactiques et le contexte de chaque groupe.",
      modelDesc2: "Le format élargi à 48 équipes permet aux 8 meilleurs troisièmes de se qualifier, augmentant la valeur d'une différence de buts positive.",
      keyStat: "Stat Clé",
      keyStatTitle: "Équipes arabes en 2026",
      keyStatDesc: "Le plus grand contingent arabe de l'histoire de la Coupe du Monde, soulignant la croissance des infrastructures sportives régionales.",
      eightNations: "Huit Nations, Une Scène",
      participants: "Tous les participants arabes",
      conclusion: "Conclusion : Une Région Réécrit son Histoire",
      conclusionBody1: "La Coupe du Monde de la FIFA 2026 pourrait s'imposer comme le tournoi déterminant pour le football arabe à l'échelle mondiale. Si le Qatar 2022 a vu l'épopée isolée du Maroc, l'édition 2026 offre à toute la cohorte arabe l'opportunité de valider ses progrès.",
      conclusionBody2: "La qualification disciplinée de l'Algérie dans le Groupe J — construite sur quatre points, une différence de buts positive et le sang-froid face à l'Argentine — représente la performance la plus méthodique d'une équipe arabe depuis le Maroc en 2022.",
      conclusionBody3: "Ensemble, huit nations arabes abordent les phases éliminatoires avec des ambitions élevées. Le football mondial assiste à un virage structurel majeur, et de plus en plus, le nouveau chapitre s'écrit en arabe.",
      loss: "Défaite",
      draw: "Nul",
      win: "Victoire",
      eliminated: "Éliminé",
      groupLabel: "probabilité de qualification",
      published: "Rapport publié le 12 juin 2026 · Les projections sont des estimations analytiques et peuvent différer des résultats réels.",
      backButton: "Retour au flux"
    }
  };

  const currentT = t[lang];

  const teamCards = [
    { flag: "🇩🇿", name: { en: "Algeria", ar: "الجزائر", fr: "Algérie" }, group: "Group J", prob: "~90%", probLabel: currentT.groupLabel, outlook: { en: "Strong Round of 32 candidate. 4 pts, +1 GD. Qualified as group runner-up.", ar: "مرشح قوي لدور الـ 32. 4 نقاط، فارق أهداف +1. تأهل كوصيف للمجموعة.", fr: "Fort candidat pour les 16es de finale. 4 pts, +1 GD. Qualifié en tant que 2e du groupe." }, color: "text-emerald-500" },
    { flag: "🇲🇦", name: { en: "Morocco", ar: "المغرب", fr: "Maroc" }, group: "Group C", prob: "75–85%", probLabel: currentT.groupLabel, outlook: { en: "Regional benchmark. Contender for Round of 16 and beyond following 2022 heroics.", ar: "المعيار المرجعي للمنطقة. مرشح لدور الـ 16 وما بعده بعد إنجازات 2022.", fr: "Référence régionale. Contendant pour les 8es de finale et au-delà après les exploits de 2022." }, color: "text-emerald-500" },
    { flag: "🇪🇬", name: { en: "Egypt", ar: "مصر", fr: "Égypte" }, group: "Group G", prob: "40–55%", probLabel: currentT.groupLabel, outlook: { en: "Seeking first knockout qualification in decades. Capable of challenging Belgium for second.", ar: "يسعى للتأهل للأدوار الإقصائية للمرة الأولى منذ عقود. قادر على منافسة بلجيكا على الوصافة.", fr: "Cherche sa première qualification en phase finale depuis des décennies. Capable de défier la Belgique." }, color: "text-amber-500" },
    { flag: "🇹🇳", name: { en: "Tunisia", ar: "تونس", fr: "Tunisie" }, group: "Group F", prob: "35–45%", probLabel: currentT.groupLabel, outlook: { en: "Competitive but difficult draw. Every point will be crucial against Netherlands and Japan.", ar: "قرعة تنافسية وصعبة. كل نقطة ستكون حاسمة أمام هولندا واليابان.", fr: "Tirage compétitif mais difficile. Chaque point sera crucial contre les Pays-Bas et le Japon." }, color: "text-amber-500" },
    { flag: "🇸🇦", name: { en: "Saudi Arabia", ar: "السعودية", fr: "Arabie Saoudite" }, group: "Group H", prob: "30–45%", probLabel: currentT.groupLabel, outlook: { en: "Proven capacity for upsets. Faces Spain and Uruguay in a demanding group.", ar: "قدرة مثبتة على إحداث المفاجآت. يواجه إسبانيا والأوروغواي في مجموعة قوية.", fr: "Capacité avérée à créer des surprises. Affronte l'Espagne et l'Uruguay dans un groupe exigeant." }, color: "text-amber-500" },
    { flag: "🇶🇦", name: { en: "Qatar", ar: "قطر", fr: "Qatar" }, group: "Group B", prob: "20–35%", probLabel: currentT.groupLabel, outlook: { en: "Difficult path to progression. Could challenge for third place with a strong opening performance.", ar: "طريق صعب للتقدم. قد ينافس على المركز الثالث بأداء قوي في البداية.", fr: "Chemin difficile pour progresser. Pourrait viser la 3e place avec une bonne entrée en matière." }, color: "text-zinc-500" },
    { flag: "🇮🇶", name: { en: "Iraq", ar: "العراق", fr: "Irak" }, group: "Group I", prob: "15–25%", probLabel: currentT.groupLabel, outlook: { en: "One of the toughest draws: France, Senegal, Norway. Valuable experience for a developing side.", ar: "واحدة من أصعب المجموعات: فرنسا، السنغال، النرويج. تجربة قيمة لفريق يتطور.", fr: "Un des tirages les plus durs : France, Sénégal, Norvège. Expérience précieuse pour un groupe en développement." }, color: "text-zinc-500" },
    { flag: "🇯🇴", name: { en: "Jordan", ar: "الأردن", fr: "Jordanie" }, group: "Group J", prob: currentT.eliminated, probLabel: "0 pts, GD -3", outlook: { en: "Developmental tournament. Experience gained will prove invaluable for future qualifying campaigns.", ar: "بطولة تطويرية وتجربة قيمة ستكون حاسمة في تصفيات كأس العالم القادمة.", fr: "Tournoi d'apprentissage. L'expérience acquise s'avérera précieuse pour les futures campagnes." }, color: "text-zinc-500" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 relative">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-850">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-dz-gold transition-colors bg-zinc-900/50 border border-zinc-800 px-4 py-2 rounded-xl"
        >
          <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
          <span>{currentT.backButton}</span>
        </button>
        <div className="text-xs text-zinc-500 flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5" />
          <span>{lang === 'ar' ? '١٢ يونيو ٢٠٢٦' : 'June 12, 2026'}</span>
        </div>
      </div>

      <section className="relative overflow-hidden bg-gradient-to-br from-dz-green-dark/40 to-zinc-950 p-8 md:p-12 rounded-3xl border border-dz-gold/15 mb-12">
        <div className="absolute top-0 right-0 p-8 opacity-5 select-none pointer-events-none font-bold text-9xl text-white">
          2026
        </div>
        <div className="relative z-10 max-w-4xl">
          <span className="text-xs md:text-sm font-bold text-dz-gold uppercase tracking-wider block mb-4 border-l-2 border-dz-gold pl-2.5 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-2.5">
            {currentT.eyebrow}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight leading-none">
            {currentT.headline}
          </h1>
          <p className="text-zinc-400 text-base md:text-lg mb-8 leading-relaxed max-w-3xl">
            {currentT.deck}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-xl">
              <span className="text-[10px] text-zinc-500 font-semibold uppercase block mb-1">{currentT.algeriaProb}</span>
              <span className="text-3xl font-black text-emerald-400 block mb-1">90%</span>
              <span className="text-[10px] text-zinc-400 block">{currentT.algeriaSub}</span>
              <div className="w-full bg-zinc-800 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full" style={{ width: '90%' }} />
              </div>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-xl">
              <span className="text-[10px] text-zinc-500 font-semibold uppercase block mb-1">{currentT.moroccoProb}</span>
              <span className="text-3xl font-black text-emerald-400 block mb-1">80%</span>
              <span className="text-[10px] text-zinc-400 block">{currentT.moroccoSub}</span>
              <div className="w-full bg-zinc-800 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full" style={{ width: '80%' }} />
              </div>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-xl">
              <span className="text-[10px] text-zinc-500 font-semibold uppercase block mb-1">{currentT.pointsCard}</span>
              <span className="text-3xl font-black text-dz-gold block mb-1">{lang === 'ar' ? '٤ نقاط' : '4 pts'}</span>
              <span className="text-[10px] text-zinc-400 block">{currentT.pointsSub}</span>
              <div className="w-full bg-zinc-800 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-dz-gold h-full rounded-full" style={{ width: '44%' }} />
              </div>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-xl">
              <span className="text-[10px] text-zinc-500 font-semibold uppercase block mb-1">{currentT.participating}</span>
              <span className="text-3xl font-black text-white block mb-1">8</span>
              <span className="text-[10px] text-zinc-400 block">{currentT.participatingSub}</span>
              <div className="w-full bg-zinc-800 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-zinc-400 h-full rounded-full" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-12">
          <article className="glass-panel p-6 md:p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-white border-b border-zinc-800 pb-2">{currentT.introTitle}</h2>
            <div className="text-zinc-300 space-y-4 leading-relaxed text-sm md:text-base">
              <p>{currentT.introText1}</p>
              <p>{currentT.introText2}</p>
              <p>{currentT.introText3}</p>
            </div>
          </article>

          <article className="glass-panel p-6 md:p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-white border-b border-zinc-800 pb-2">{currentT.algeriaTitle}</h2>
            <div className="text-zinc-300 space-y-4 leading-relaxed text-sm md:text-base">
              <p>{currentT.algeriaBody1}</p>
            </div>

            <div className="border-l-4 border-dz-green bg-dz-green/10 p-5 my-6 rounded-r-xl rtl:border-l-0 rtl:border-r-4 rtl:rounded-r-none rtl:rounded-l-xl">
              <p className="text-lg font-bold text-white leading-snug">
                "{currentT.pullQuote}"
              </p>
            </div>

            <h3 className="text-base font-bold text-dz-gold mb-3 mt-6 uppercase tracking-wider flex items-center gap-2">
              <Activity className="w-4.5 h-4.5" />
              {currentT.matchResults}
            </h3>
            <div className="overflow-x-auto border border-zinc-800 rounded-xl mb-6">
              <table className="w-full text-left rtl:text-right text-xs md:text-sm">
                <thead className="bg-zinc-900/80 text-zinc-400 font-semibold border-b border-zinc-800">
                  <tr>
                    <th className="p-3">{currentT.matchCol}</th>
                    <th className="p-3 text-center">{currentT.scoreCol}</th>
                    <th className="p-3">{currentT.resCol}</th>
                    <th className="p-3 text-center">{currentT.ptsCol}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-850">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3 font-medium">{isRtl ? 'الجزائر ضد الأرجنتين' : 'Algeria vs Argentina'}</td>
                    <td className="p-3 text-center font-bold">1 – 2</td>
                    <td className="p-3 text-red-500 font-semibold">{currentT.loss}</td>
                    <td className="p-3 text-center">0</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3 font-medium">{isRtl ? 'الجزائر ضد النمسا' : 'Algeria vs Austria'}</td>
                    <td className="p-3 text-center font-bold">1 – 1</td>
                    <td className="p-3 text-dz-gold font-semibold">{currentT.draw}</td>
                    <td className="p-3 text-center">1</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3 font-medium">{isRtl ? 'الجزائر ضد الأردن' : 'Algeria vs Jordan'}</td>
                    <td className="p-3 text-center font-bold">3 – 0</td>
                    <td className="p-3 text-emerald-500 font-semibold">{currentT.win}</td>
                    <td className="p-3 text-center">3</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-base font-bold text-dz-gold mb-3 mt-6 uppercase tracking-wider flex items-center gap-2">
              <Trophy className="w-4.5 h-4.5" />
              {currentT.standingsTitle}
            </h3>
            <div className="overflow-x-auto border border-zinc-800 rounded-xl mb-6">
              <table className="w-full text-left rtl:text-right text-xs md:text-sm">
                <thead className="bg-zinc-900/80 text-zinc-400 font-semibold border-b border-zinc-800">
                  <tr>
                    <th className="p-3 w-12">#</th>
                    <th className="p-3">Team</th>
                    <th className="p-3 text-center">Pts</th>
                    <th className="p-3 text-center">GF</th>
                    <th className="p-3 text-center">GA</th>
                    <th className="p-3 text-center">GD</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-850">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3"><span className="w-6 h-6 rounded-full bg-dz-gold text-zinc-950 font-bold flex items-center justify-center text-xs">1</span></td>
                    <td className="p-3 font-bold">{isRtl ? 'الأرجنتين' : 'Argentina'}</td>
                    <td className="p-3 text-center font-bold">9</td>
                    <td className="p-3 text-center">5</td>
                    <td className="p-3 text-center">2</td>
                    <td className="p-3 text-center text-emerald-500 font-semibold">+3</td>
                  </tr>
                  <tr className="bg-emerald-950/20 hover:bg-emerald-950/30 transition-colors border-l-2 border-emerald-500">
                    <td className="p-3"><span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">2</span></td>
                    <td className="p-3 font-bold">{isRtl ? 'الجزائر ✓' : 'Algeria ✓'}</td>
                    <td className="p-3 text-center font-bold">4</td>
                    <td className="p-3 text-center">5</td>
                    <td className="p-3 text-center">2</td>
                    <td className="p-3 text-center text-emerald-500 font-semibold">+1</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3"><span className="w-6 h-6 rounded-full bg-zinc-800 text-zinc-400 font-bold flex items-center justify-center text-xs">3</span></td>
                    <td className="p-3 font-medium">{isRtl ? 'النمسا' : 'Austria'}</td>
                    <td className="p-3 text-center font-bold">4</td>
                    <td className="p-3 text-center">2</td>
                    <td className="p-3 text-center">3</td>
                    <td className="p-3 text-center text-red-500 font-semibold">-1</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-3"><span className="w-6 h-6 rounded-full bg-zinc-800 text-zinc-400 font-bold flex items-center justify-center text-xs">4</span></td>
                    <td className="p-3 font-medium">{isRtl ? 'الأردن' : 'Jordan'}</td>
                    <td className="p-3 text-center font-bold">0</td>
                    <td className="p-3 text-center">1</td>
                    <td className="p-3 text-center">4</td>
                    <td className="p-3 text-center text-red-500 font-semibold">-3</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-base font-bold text-dz-gold mb-3 mt-6 uppercase tracking-wider flex items-center gap-2">
              <Shield className="w-4.5 h-4.5" />
              {currentT.tacticTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[currentT.tactic1, currentT.tactic2, currentT.tactic3, currentT.tactic4, currentT.tactic5, currentT.tactic6].map((tac, idx) => (
                <div key={idx} className="bg-zinc-900/40 border border-zinc-850 p-4 rounded-xl flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-zinc-300">{tac}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="glass-panel p-6 md:p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-white border-b border-zinc-800 pb-2">{currentT.moroccoTitle}</h2>
            <div className="text-zinc-300 space-y-4 leading-relaxed text-sm md:text-base">
              <p>{currentT.moroccoBody1}</p>
              <p>{currentT.moroccoBody2}</p>
            </div>
          </article>
        </div>

        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6 border-b border-zinc-800 pb-2">
              {currentT.qualProb}
            </h3>
            <div className="space-y-4">
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
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-zinc-300">{team.name}</span>
                    <span className="font-bold text-white">{team.isElim ? '—' : `${team.val}%`}</span>
                  </div>
                  <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden border border-zinc-850">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${
                        team.isTop1 ? 'bg-emerald-500' :
                        team.isTop2 ? 'bg-dz-gold' :
                        team.isElim ? 'bg-transparent' : 'bg-zinc-550'
                      }`}
                      style={{ width: `${team.val}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6 border-b border-zinc-800 pb-2">
              {currentT.breakdown}
            </h3>
            <div className="space-y-4">
              <div>
                <span className="text-[10px] text-zinc-500 font-bold uppercase block mb-1">{currentT.asRunnerUp}</span>
                <span className="text-3xl font-black text-emerald-400">~75%</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 font-bold uppercase block mb-1">{currentT.asBestThird}</span>
                <span className="text-3xl font-black text-dz-gold">~15%</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 font-bold uppercase block mb-1">{currentT.elimProb}</span>
                <span className="text-3xl font-black text-zinc-400">~10%</span>
              </div>
              <p className="text-[10px] text-zinc-500 leading-relaxed pt-3 border-t border-zinc-855">
                {currentT.breakdownNote}
              </p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-dz-gold" />
              {currentT.modelTitle}
            </h3>
            <div className="text-xs text-zinc-400 space-y-3 leading-relaxed">
              <p>{currentT.modelDesc1}</p>
              <p>{currentT.modelDesc2}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-950/30 to-zinc-950 border border-emerald-500/35 p-6 rounded-2xl">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">{currentT.keyStat}</span>
            <span className="text-6xl font-black text-emerald-500 block mb-1 leading-none">8</span>
            <span className="text-xs font-bold text-white uppercase tracking-wider block mb-3">{currentT.keyStatTitle}</span>
            <p className="text-xs text-zinc-400 leading-relaxed">{currentT.keyStatDesc}</p>
          </div>
        </div>
      </div>

      <section className="glass-panel p-6 md:p-8 rounded-3xl border border-zinc-850 mb-12">
        <div className="mb-6">
          <span className="text-xs font-bold text-dz-gold uppercase tracking-wider block mb-1">{currentT.participants}</span>
          <h2 className="text-2xl md:text-3xl font-black text-white">{currentT.eightNations}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamCards.map((team, idx) => (
            <div key={idx} className="bg-zinc-950/80 border border-zinc-850 p-5 rounded-xl hover:border-dz-gold/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl select-none">{team.flag}</span>
                <div>
                  <h4 className="text-sm font-bold text-white">{team.name[lang]}</h4>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider">{team.group}</span>
                </div>
              </div>
              <div className="mb-2">
                <span className={`text-xl font-extrabold ${team.color}`}>{team.prob}</span>
                <span className="text-[9px] text-zinc-500 block uppercase tracking-wider">{team.probLabel}</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed border-t border-zinc-900 pt-2.5">
                {team.outlook[lang]}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-dz-green-dark to-emerald-950 p-8 md:p-12 rounded-3xl text-white mb-8 border border-emerald-500/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest block mb-2 border-l-2 border-emerald-300 pl-2 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-2">
              DZ Analytica
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none text-white">
              {isRtl ? <>منطقة<br />تعيد كتابة<br /><span className="text-emerald-300">تاريخها</span></> : <>A Region<br />Rewriting<br /><span className="text-emerald-300">Its Story</span></>}
            </h2>
          </div>
          <div className="md:col-span-2 text-xs md:text-sm text-white/80 space-y-4 leading-relaxed">
            <p>{currentT.conclusionBody1}</p>
            <p>{currentT.conclusionBody2}</p>
            <p>{currentT.conclusionBody3}</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-zinc-500 border-t border-zinc-900 pt-6">
        <p>{currentT.published}</p>
      </footer>
    </div>
  );
}
