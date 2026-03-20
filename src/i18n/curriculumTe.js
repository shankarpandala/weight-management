/**
 * Telugu translations for curriculum titles and descriptions.
 * Technical terms are kept in English. Conversational Telugu is used.
 */

const CURRICULUM_TE = {
  '01-body-fundamentals': {
    title: 'మానవ శరీర ప్రాథమికాలు',
    description: 'Cell biology, metabolism, digestion, మరియు endocrine system — మీ శరీరం ఆహారాన్ని ఎలా process చేస్తుందో మరియు బరువును ఎలా regulate చేస్తుందో అతి లోతైన స్థాయిలో అర్థం చేసుకోండి.',
    chapters: {
      'c1-cell-biology': {
        title: 'Cell Biology & Metabolism Basics',
        description: 'Cells ఆహారం నుండి energy ని ఎలా తయారు చేస్తాయి — mitochondria, ATP, మరియు ప్రాథమిక metabolic pathways.',
        sections: {
          's1-cell-structure-energy': { title: 'Cell Structure & Energy Systems', description: 'Mitochondria, ATP production, మరియు cellular energy currency.' },
          's2-metabolic-pathways': { title: 'Metabolic Pathways', description: 'Glycolysis, Krebs cycle, మరియు oxidative phosphorylation వివరణ.' },
          's3-anabolism-catabolism': { title: 'Anabolism vs Catabolism', description: 'నిర్మించడం మరియు విచ్ఛిన్నం చేయడం — metabolism యొక్క రెండు వైపులు.' },
        },
      },
      'c2-digestive-system': {
        title: 'Organ Systems & Digestion',
        description: 'పూర్తి digestive ప్రయాణం — నోటి నుండి colon వరకు, enzymes నుండి absorption వరకు.',
        sections: {
          's1-digestive-anatomy': { title: 'Digestive System Anatomy', description: 'నోరు, esophagus, stomach, small intestine, large intestine — పూర్తి ప్రయాణం.' },
          's2-enzymes-secretions': { title: 'Enzymes & Digestive Secretions', description: 'Amylase, pepsin, lipase, bile — ఆహారం chemically ఎలా విచ్ఛిన్నమవుతుందో.' },
          's3-nutrient-absorption': { title: 'Nutrient Absorption Mechanisms', description: 'Nutrients intestinal wall ని దాటి bloodstream లోకి ఎలా వెళ్తాయో.' },
        },
      },
      'c3-endocrine-system': {
        title: 'Endocrine System & Metabolism',
        description: 'ఆకలి, సంతృప్తి, metabolic rate, మరియు fat storage ని regulate చేసే hormones.',
        sections: {
          's1-hunger-satiety-hormones': { title: 'Hunger & Satiety Hormones', description: 'Ghrelin, leptin, insulin, PYY — ఆకలి యొక్క hormonal orchestra.' },
          's2-thyroid-metabolic-rate': { title: 'Thyroid & Metabolic Rate', description: 'T3, T4, TSH — thyroid మీ metabolic engine ని ఎలా control చేస్తుందో.' },
          's3-cortisol-stress-fat': { title: 'Cortisol, Stress & Fat Storage', description: 'Chronic stress పొట్ట fat accumulation ని ఎలా drive చేస్తుందో.' },
        },
      },
    },
  },
  '02-nutrition-science': {
    title: 'Nutrition Science (పోషకాహార శాస్త్రం)',
    description: 'Macronutrients, micronutrients, మరియు ఆహారం energy గా ఎలా మారుతుందో — మీరు తినేది ఏమిటి మరియు మీ శరీరం దాన్ని ఎలా ఉపయోగిస్తుందో అనే science.',
    chapters: {
      'c1-macronutrients': {
        title: 'Macronutrients',
        description: 'Carbohydrates, proteins, మరియు fats — energy ఇచ్చే మూడు nutrients.',
        sections: {
          's1-carbohydrates': { title: 'Carbohydrates', description: 'Simple vs complex carbs, glycemic index, fiber, మరియు energy లో వాటి role.' },
          's2-proteins': { title: 'Proteins', description: 'Amino acids, complete vs incomplete proteins, digestibility scores.' },
          's3-fats': { title: 'Fats', description: 'Saturated, unsaturated, trans fats, omega-3/6 — పూర్తి picture.' },
        },
      },
      'c2-micronutrients': {
        title: 'Micronutrients',
        description: 'Vitamins, minerals, మరియు నీరు — తక్కువ quantities లో essential కానీ ఆరోగ్యానికి critical.',
        sections: {
          's1-vitamins': { title: 'Vitamins', description: 'Fat-soluble vs water-soluble vitamins, functions, మరియు deficiency signs.' },
          's2-minerals': { title: 'Minerals', description: 'Iron, calcium, zinc, magnesium — functions మరియు భారతీయ ఆహార sources.' },
          's3-water-electrolytes': { title: 'Water & Electrolyte Balance', description: 'Hydration, sodium, potassium, మరియు body composition లో వాటి role.' },
        },
      },
      'c3-food-energy': {
        title: 'ఆహారం Energy గా ఎలా మారుతుందో',
        description: 'Thermic effect of food, caloric density, మరియు bioavailability.',
        sections: {
          's1-thermic-effect': { title: 'Thermic Effect of Food', description: 'Protein vs carbs vs fat digest చేయడానికి అయ్యే energy cost.' },
          's2-caloric-density': { title: 'Caloric Density & Nutrient Density', description: 'కొన్ని foods మిమ్మల్ని ఎందుకు నింపేస్తాయి, మరికొన్ని ఎందుకు ఆకలిగా ఉంచుతాయి.' },
          's3-bioavailability': { title: 'Bioavailability & Food Combinations', description: 'Iron తో vitamin C ఎందుకు పని చేస్తుందో, మరియు ఇతర food pairing science.' },
        },
      },
    },
  },
  '03-energy-balance': {
    title: 'Energy Balance & Body Composition',
    description: 'BMR, TDEE, NEAT, body composition, మరియు బరువు మార్పు mechanics — మీ శరీరం యొక్క physics.',
    chapters: {
      'c1-energy-expenditure': {
        title: 'Energy Expenditure',
        description: 'Basal Metabolic Rate, Total Daily Energy Expenditure, మరియు Non-Exercise Activity Thermogenesis.',
        sections: {
          's1-bmr': { title: 'Basal Metabolic Rate (BMR)', description: 'Harris-Benedict vs Mifflin-St Jeor equations — మీ resting energy needs ని predict చేయడం.' },
          's2-tdee': { title: 'Total Daily Energy Expenditure (TDEE)', description: 'BMR + activity + thermic effect = మీ daily calorie budget.' },
          's3-neat': { title: 'Non-Exercise Activity Thermogenesis (NEAT)', description: 'దాగిన calorie burner — fidgeting, walking, మరియు daily movement.' },
        },
      },
      'c2-body-composition': {
        title: 'Body Composition',
        description: 'Scale కి ఆవల — body fat, lean mass, మరియు వాటిని ఎలా measure చేయాలో.',
        sections: {
          's1-body-fat-lean-mass': { title: 'Body Fat, Lean Mass & Bone Density', description: 'మీ body weight ని ఏమి తయారు చేస్తుందో మరియు scale ఎందుకు అబద్ధాలు చెప్తుందో.' },
          's2-measurement-methods': { title: 'Body Composition Measurement', description: 'DEXA, BIA, skinfold calipers, waist-hip ratio — pros మరియు cons.' },
          's3-set-point-theory': { title: 'Set Point vs Settling Point Theory', description: 'మీ శరీరానికి target weight ఉంటుందా? దానికి వ్యతిరేకంగా ఉన్న evidence.' },
        },
      },
      'c3-weight-change': {
        title: 'Weight Change Mechanisms',
        description: 'బరువు ఎలా పెరుగుతుందో మరియు తగ్గుతుందో — surplus, deficit, మరియు adaptation.',
        sections: {
          's1-caloric-surplus-deficit': { title: 'Caloric Surplus & Deficit', description: 'బరువు మార్పు యొక్క fundamental equation — energy in vs energy out.' },
          's2-metabolic-adaptation': { title: 'Metabolic Adaptation', description: 'Adaptive thermogenesis — మీ శరీరం weight loss తో ఎందుకు పోరాడుతుందో.' },
          's3-water-weight-glycogen': { title: 'Water Weight, Glycogen & Scale Fluctuations', description: 'మీ బరువు రోజుకు 1-2 kg ఎందుకు మారుతుందో మరియు దాని అర్థం ఏమిటి.' },
        },
      },
    },
  },
  '04-indian-diet': {
    title: 'భారతీయ ఆహారం & పోషకాహారం',
    description: 'భారతీయ మరియు దక్షిణ భారతీయ foods యొక్క nutritional analysis, cooking methods, ICMR guidelines, మరియు సంప్రదాయ ఆహార జ్ఞానం యొక్క evidence-based evaluation.',
    chapters: {
      'c1-indian-food-systems': {
        title: 'భారతీయ ఆహార వ్యవస్థలు',
        description: 'భారతీయ staples యొక్క nutritional profiles, cooking methods, మరియు Ayurvedic principles evidence తో evaluate చేయడం.',
        sections: {
          's1-indian-staples': { title: 'భారతీయ Staples యొక్క Nutritional Profile', description: 'బియ్యం, గోధుమ, millets, పప్పు, నెయ్యి — వివరమైన nutritional breakdown.' },
          's2-cooking-methods': { title: 'భారతీయ Cooking Methods & Nutrient Retention', description: 'Tempering, pressure cooking, fermentation — cooking nutrition ని ఎలా ప్రభావితం చేస్తుందో.' },
          's3-ayurveda-evidence': { title: 'Ayurvedic Principles — Evidence Review', description: 'Evidence-backed Ayurvedic wisdom ని unsubstantiated claims నుండి వేరు చేయడం.' },
        },
      },
      'c2-south-indian-diet': {
        title: 'దక్షిణ భారతీయ ఆహారం Deep Dive',
        description: 'Rice-based meals, fermented foods, కొబ్బరి, మరియు దక్షిణ భారతీయ cuisine యొక్క ప్రత్యేక nutritional advantages.',
        sections: {
          's1-rice-based-meals': { title: 'Rice-Based Meals — Nutritional Analysis', description: 'ఇడ్లీ, దోస, rice-sambar, పొంగల్ — calories, macros, మరియు glycemic impact.' },
          's2-vegetables-coconut': { title: 'దక్షిణ భారతీయ కూరగాయలు, కొబ్బరి & Curry Leaves', description: 'మునగ, బూడిద గుమ్మడి, coconut oil vs coconut milk — nutritional profiles.' },
          's3-fermented-foods': { title: 'Fermented Foods — Probiotic Benefits', description: 'ఇడ్లీ/దోస batter, పెరుగు, ఊరగాయలు, appam — fermentation science మరియు gut health.' },
        },
      },
      'c3-indian-dietary-patterns': {
        title: 'Weight Management కోసం భారతీయ ఆహార Patterns',
        description: 'ICMR guidelines, high-protein vegetarian strategies, మరియు myth-busting.',
        sections: {
          's1-icmr-guidelines': { title: 'ICMR Dietary Guidelines & RDA భారతీయులకు', description: 'National Institute of Nutrition recommendations — భారతీయులు ఏమి తినాలి.' },
          's2-high-protein-vegetarian': { title: 'High-Protein భారతీయ Vegetarian Diet', description: 'Vegetarian Indian diet లో 1.6g/kg protein సాధించడం — practical strategies.' },
          's3-diet-myths-debunked': { title: 'భారతీయ ఆహార Myths Debunked', description: 'నెయ్యి చెడ్డదా? బియ్యం బరువు పెంచుతుందా? రాత్రి అరటిపండు? Evidence-based answers.' },
        },
      },
    },
  },
  '05-weight-loss': {
    title: 'ఆహారం ద్వారా బరువు తగ్గడం',
    description: 'Evidence-based weight loss principles, భారతీయ ఆహార modifications, behavioral psychology, మరియు sustainable strategies.',
    chapters: {
      'c1-weight-loss-principles': {
        title: 'Evidence-Based Weight Loss Principles',
        description: 'బరువు effectively మరియు safely తగ్గించడం గురించి research నిజంగా ఏం చెప్తుందో.',
        sections: {
          's1-caloric-deficit-strategies': { title: 'పని చేసే Caloric Deficit Strategies', description: 'Deficit approaches యొక్క systematic review — ఏవి best evidence కలిగి ఉన్నాయి?' },
          's2-meal-timing-fasting': { title: 'Meal Timing, Frequency & Intermittent Fasting', description: 'మీరు ఎప్పుడు తింటారనేది matter అవుతుందా? 16:8, OMAD, 5:2 — evidence examine చేయడం.' },
          's3-sustainable-weight-loss': { title: 'Sustainable Rate of Weight Loss', description: 'వారానికి 0.5-1% body weight — నెమ్మదిగా మరియు స్థిరంగా ఎందుకు గెలుస్తుందో.' },
        },
      },
      'c2-indian-diet-weight-loss': {
        title: 'Weight Loss కోసం భారతీయ ఆహారం',
        description: 'Effective weight loss కోసం practical, calorie-controlled భారతీయ meal plans.',
        sections: {
          's1-calorie-controlled-plans': { title: 'Calorie-Controlled భారతీయ Meal Plans', description: '1200, 1500, మరియు 1800 kcal భారతీయ diet plans పూర్తి macro breakdowns తో.' },
          's2-south-indian-modifications': { title: 'Weight Loss కోసం దక్షిణ భారతీయ ఆహార Modifications', description: 'రుచి sacrifice చేయకుండా idli-dosa-rice meals ని weight-loss friendly గా చేయడం.' },
          's3-portion-control': { title: 'భారతీయ Meals తో Portion Control', description: 'అన్నం, పప్పు, కూర, రోటీ కోసం visual portion guides — measuring అవసరం లేదు.' },
        },
      },
      'c3-behavioral-aspects': {
        title: 'Behavioral & Psychological Aspects',
        description: 'Mindful eating, emotional eating, మరియు lasting habits build చేసే science.',
        sections: {
          's1-mindful-eating': { title: 'Mindful Eating & Satiety Signals', description: 'నెమ్మదిగా తినడం, fullness cues గుర్తించడం, మరియు 20-minute rule.' },
          's2-emotional-eating': { title: 'Emotional Eating & Coping Strategies', description: 'Stress eating, boredom eating, comfort food — triggers అర్థం చేసుకోవడం మరియు manage చేయడం.' },
          's3-sustainable-habits': { title: 'Sustainable Habits Build చేయడం', description: 'Habit loop science — cue, routine, reward — eating behavior కి apply చేయడం.' },
        },
      },
    },
  },
  '06-weight-gain': {
    title: 'ఆహారం ద్వారా బరువు పెరగడం',
    description: 'Healthy weight gain principles, muscle synthesis కోసం protein requirements, మరియు lean mass gain కోసం భారతీయ diet plans.',
    chapters: {
      'c1-weight-gain-principles': {
        title: 'Healthy Weight Gain Principles',
        description: 'Caloric surplus, optimal protein intake, మరియు progressive nutrition ద్వారా lean mass build చేయడం.',
        sections: {
          's1-caloric-surplus-lean-mass': { title: 'Lean Mass Gain కోసం Caloric Surplus', description: 'ఎంత surplus? Clean bulk vs dirty bulk — evidence ఏం చెప్తుందో.' },
          's2-protein-muscle-synthesis': { title: 'Muscle Synthesis కోసం Protein Requirements', description: 'Muscle protein synthesis, leucine threshold, మరియు optimal protein timing.' },
          's3-progressive-overload-nutrition': { title: 'Progressive Overload & Nutrition Connection', description: 'Training stimulus surplus calories ఎక్కడ వెళ్తాయో ఎందుకు decide చేస్తుందో.' },
        },
      },
      'c2-indian-diet-weight-gain': {
        title: 'Weight Gain కోసం భారతీయ ఆహారం',
        description: 'High-calorie nutritious భారతీయ foods మరియు practical bulking meal plans.',
        sections: {
          's1-high-calorie-indian-foods': { title: 'High-Calorie Nutritious భారతీయ Foods', description: 'Nuts, నెయ్యి, paneer, banana shake, రాగి — calorie-dense భారతీయ options.' },
          's2-south-indian-bulking': { title: 'దక్షిణ భారతీయ Bulking Diet Plans', description: '2500-3500 kcal దక్షిణ భారతీయ meal plans lean mass gain కోసం.' },
          's3-supplementation-evidence': { title: 'Supplementation — Evidence Review', description: 'Whey protein, creatine, BCAAs — ఏది పని చేస్తుంది, ఏది చేయదు, మరియు ఏది waste.' },
        },
      },
    },
  },
  '07-pot-belly': {
    title: 'పొట్ట తగ్గించడం (Visceral Fat)',
    description: 'Visceral fat గురించి dedicated deep-dive — దాన్ని అర్థం చేసుకోవడం, దాని health risks, మరియు evidence-based dietary మరియు lifestyle strategies.',
    chapters: {
      'c1-visceral-fat': {
        title: 'Visceral Fat అర్థం చేసుకోవడం',
        description: 'Visceral fat ఏమిటి, అది పొట్ట చుట్టూ ఎందుకు accumulate అవుతుందో, మరియు ఇది ఎందుకు dangerous.',
        sections: {
          's1-visceral-vs-subcutaneous': { title: 'Visceral vs Subcutaneous Fat', description: 'రెండు రకాల belly fat — anatomy, location, మరియు metabolic differences.' },
          's2-abdominal-fat-causes': { title: 'పొట్టలో Fat ఎందుకు Accumulate అవుతుందో', description: 'Genetics, cortisol, insulin resistance, వయస్సు, మరియు gender — contributing factors.' },
          's3-health-risks': { title: 'Visceral Fat యొక్క Health Risks', description: 'CVD, type 2 diabetes, metabolic syndrome, fatty liver — medical evidence.' },
        },
      },
      'c2-dietary-strategies': {
        title: 'Visceral Fat Reduction కోసం Dietary Strategies',
        description: 'Belly fat ని target చేసే evidence-based foods మరియు భారతీయ diet plans.',
        sections: {
          's1-foods-reduce-visceral-fat': { title: 'Visceral Fat తగ్గించే Foods', description: 'Soluble fiber, protein, MUFA, green tea — research-backed choices.' },
          's2-indian-diet-belly-fat': { title: 'Belly Fat Reduction కోసం భారతీయ Diet Plan', description: 'Calorie మరియు macro targets తో visceral fat ని target చేసే practical భారతీయ meal plans.' },
          's3-anti-inflammatory-diet': { title: 'దక్షిణ భారతీయ Anti-Inflammatory Diet', description: 'పసుపు, curry leaves, మెంతులు — evidence తో దక్షిణ భారతీయ anti-inflammatory foods.' },
        },
      },
      'c3-lifestyle-factors': {
        title: 'Lifestyle Factors',
        description: 'నిద్ర, stress, alcohol, మరియు diet కి మించిన long-term strategies.',
        sections: {
          's1-sleep-stress-connection': { title: 'Sleep, Stress & Visceral Fat Connection', description: 'తక్కువ నిద్ర మరియు chronic stress నేరుగా belly fat ని ఎలా పెంచుతాయి — cortisol mechanism.' },
          's2-alcohol-visceral-fat': { title: 'Alcohol & Visceral Fat', description: '"Beer belly" effect — alcohol visceral fat storage ని ఎలా promote చేస్తుందో.' },
          's3-long-term-maintenance': { title: 'Long-Term Maintenance & Monitoring', description: 'Waist circumference tracking, sustainable habits, మరియు regain prevent చేయడం.' },
        },
      },
    },
  },
  '08-gut-health': {
    title: 'Gut Health & Microbiome',
    description: 'Gut microbiome, weight regulation లో దాని role, మరియు భారతీయ fermented foods gut health ని ఎలా support చేస్తాయో.',
    chapters: {
      'c1-microbiome': {
        title: 'Gut Microbiome Fundamentals',
        description: 'Gut bacteria, prebiotics, probiotics, మరియు gut-brain connection.',
        sections: {
          's1-gut-bacteria-weight': { title: 'Gut Bacteria & బరువులో వాటి Role', description: 'Firmicutes vs Bacteroidetes, SCFAs, మరియు microbiome composition బరువుని ఎలా affect చేస్తుందో.' },
          's2-prebiotics-probiotics-indian': { title: 'భారతీయ ఆహారంలో Prebiotics & Probiotics', description: 'పెరుగు, మజ్జిగ, fermented batter, అరటి, వెల్లుల్లి — భారతీయ gut health foods.' },
          's3-gut-brain-axis': { title: 'Gut-Brain Axis & Appetite Regulation', description: 'Gut bacteria మీ brain తో communicate చేసి ఆకలి మరియు food choices ని ఎలా influence చేస్తాయో.' },
        },
      },
    },
  },
};

export default CURRICULUM_TE;
