/**
 * Curriculum registry for Weight Management.
 * Defines all 8 subjects, their chapters, and sections.
 */

export const CURRICULUM = [
  {
    id: '01-body-fundamentals',
    title: 'Human Body Fundamentals',
    icon: '🫀',
    colorHex: '#ef4444',
    description: 'Cell biology, metabolism, digestion, and the endocrine system — understanding how your body processes food and regulates weight at the deepest level.',
    prerequisites: [],
    healthRelevance: 90,
    estimatedHours: 12,
    difficulty: 'beginner',
    chapters: [
      {
        id: 'c1-cell-biology',
        title: 'Cell Biology & Metabolism Basics',
        description: 'How cells produce energy from food — mitochondria, ATP, and the fundamental metabolic pathways.',
        difficulty: 'beginner',
        estimatedMinutes: 180,
        sections: [
          { id: 's1-cell-structure-energy', title: 'Cell Structure & Energy Systems', difficulty: 'beginner', readingMinutes: 20, description: 'Mitochondria, ATP production, and cellular energy currency.', buildsOn: null },
          { id: 's2-metabolic-pathways', title: 'Metabolic Pathways', difficulty: 'beginner', readingMinutes: 25, description: 'Glycolysis, Krebs cycle, and oxidative phosphorylation explained.', buildsOn: '01-body-fundamentals/c1-cell-biology/s1-cell-structure-energy' },
          { id: 's3-anabolism-catabolism', title: 'Anabolism vs Catabolism', difficulty: 'beginner', readingMinutes: 20, description: 'Building up and breaking down — the two sides of metabolism.', buildsOn: '01-body-fundamentals/c1-cell-biology/s2-metabolic-pathways' },
        ],
      },
      {
        id: 'c2-digestive-system',
        title: 'Organ Systems & Digestion',
        description: 'The complete digestive journey — from mouth to colon, enzymes to absorption.',
        difficulty: 'beginner',
        estimatedMinutes: 200,
        sections: [
          { id: 's1-digestive-anatomy', title: 'Digestive System Anatomy', difficulty: 'beginner', readingMinutes: 22, description: 'Mouth, esophagus, stomach, small intestine, large intestine — the complete journey.', buildsOn: '01-body-fundamentals/c1-cell-biology/s3-anabolism-catabolism' },
          { id: 's2-enzymes-secretions', title: 'Enzymes & Digestive Secretions', difficulty: 'beginner', readingMinutes: 25, description: 'Amylase, pepsin, lipase, bile — how food is chemically broken down.', buildsOn: '01-body-fundamentals/c2-digestive-system/s1-digestive-anatomy' },
          { id: 's3-nutrient-absorption', title: 'Nutrient Absorption Mechanisms', difficulty: 'intermediate', readingMinutes: 25, description: 'How nutrients cross the intestinal wall into the bloodstream.', buildsOn: '01-body-fundamentals/c2-digestive-system/s2-enzymes-secretions' },
        ],
      },
      {
        id: 'c3-endocrine-system',
        title: 'Endocrine System & Metabolism',
        description: 'Hormones that regulate hunger, satiety, metabolic rate, and fat storage.',
        difficulty: 'intermediate',
        estimatedMinutes: 220,
        sections: [
          { id: 's1-hunger-satiety-hormones', title: 'Hunger & Satiety Hormones', difficulty: 'intermediate', readingMinutes: 25, description: 'Ghrelin, leptin, insulin, PYY — the hormonal orchestra of appetite.', buildsOn: '01-body-fundamentals/c2-digestive-system/s3-nutrient-absorption' },
          { id: 's2-thyroid-metabolic-rate', title: 'Thyroid & Metabolic Rate', difficulty: 'intermediate', readingMinutes: 22, description: 'T3, T4, TSH — how the thyroid controls your metabolic engine.', buildsOn: '01-body-fundamentals/c3-endocrine-system/s1-hunger-satiety-hormones' },
          { id: 's3-cortisol-stress-fat', title: 'Cortisol, Stress & Fat Storage', difficulty: 'intermediate', readingMinutes: 25, description: 'How chronic stress drives abdominal fat accumulation.', buildsOn: '01-body-fundamentals/c3-endocrine-system/s2-thyroid-metabolic-rate' },
        ],
      },
    ],
  },
  {
    id: '02-nutrition-science',
    title: 'Nutrition Science',
    icon: '🧬',
    colorHex: '#f97316',
    description: 'Macronutrients, micronutrients, and how food becomes energy — the science of what you eat and how your body uses it.',
    prerequisites: ['01-body-fundamentals'],
    healthRelevance: 95,
    estimatedHours: 14,
    difficulty: 'beginner',
    chapters: [
      {
        id: 'c1-macronutrients',
        title: 'Macronutrients',
        description: 'Carbohydrates, proteins, and fats — the three energy-providing nutrients.',
        difficulty: 'beginner',
        estimatedMinutes: 200,
        sections: [
          { id: 's1-carbohydrates', title: 'Carbohydrates', difficulty: 'beginner', readingMinutes: 22, description: 'Simple vs complex carbs, glycemic index, fiber, and their role in energy.', buildsOn: '01-body-fundamentals/c1-cell-biology/s2-metabolic-pathways' },
          { id: 's2-proteins', title: 'Proteins', difficulty: 'beginner', readingMinutes: 25, description: 'Amino acids, complete vs incomplete proteins, digestibility scores.', buildsOn: '02-nutrition-science/c1-macronutrients/s1-carbohydrates' },
          { id: 's3-fats', title: 'Fats', difficulty: 'beginner', readingMinutes: 25, description: 'Saturated, unsaturated, trans fats, omega-3/6 — the full picture.', buildsOn: '02-nutrition-science/c1-macronutrients/s2-proteins' },
        ],
      },
      {
        id: 'c2-micronutrients',
        title: 'Micronutrients',
        description: 'Vitamins, minerals, and water — essential in small quantities but critical for health.',
        difficulty: 'beginner',
        estimatedMinutes: 200,
        sections: [
          { id: 's1-vitamins', title: 'Vitamins', difficulty: 'beginner', readingMinutes: 25, description: 'Fat-soluble vs water-soluble vitamins, functions, and deficiency signs.', buildsOn: '02-nutrition-science/c1-macronutrients/s3-fats' },
          { id: 's2-minerals', title: 'Minerals', difficulty: 'beginner', readingMinutes: 22, description: 'Iron, calcium, zinc, magnesium — functions and Indian dietary sources.', buildsOn: '02-nutrition-science/c2-micronutrients/s1-vitamins' },
          { id: 's3-water-electrolytes', title: 'Water & Electrolyte Balance', difficulty: 'beginner', readingMinutes: 20, description: 'Hydration, sodium, potassium, and their role in body composition.', buildsOn: '02-nutrition-science/c2-micronutrients/s2-minerals' },
        ],
      },
      {
        id: 'c3-food-energy',
        title: 'How Food Becomes Energy',
        description: 'Thermic effect of food, caloric density, and bioavailability.',
        difficulty: 'intermediate',
        estimatedMinutes: 200,
        sections: [
          { id: 's1-thermic-effect', title: 'Thermic Effect of Food', difficulty: 'intermediate', readingMinutes: 20, description: 'Energy cost of digesting protein vs carbs vs fat.', buildsOn: '02-nutrition-science/c2-micronutrients/s3-water-electrolytes' },
          { id: 's2-caloric-density', title: 'Caloric Density & Nutrient Density', difficulty: 'beginner', readingMinutes: 22, description: 'Why some foods fill you up and others leave you hungry.', buildsOn: '02-nutrition-science/c3-food-energy/s1-thermic-effect' },
          { id: 's3-bioavailability', title: 'Bioavailability & Food Combinations', difficulty: 'intermediate', readingMinutes: 25, description: 'Why iron with vitamin C works, and other food pairing science.', buildsOn: '02-nutrition-science/c3-food-energy/s2-caloric-density' },
        ],
      },
    ],
  },
  {
    id: '03-energy-balance',
    title: 'Energy Balance & Body Composition',
    icon: '⚖️',
    colorHex: '#eab308',
    description: 'BMR, TDEE, NEAT, body composition, and the mechanics of weight change — the physics of your body.',
    prerequisites: ['02-nutrition-science'],
    healthRelevance: 98,
    estimatedHours: 14,
    difficulty: 'intermediate',
    chapters: [
      {
        id: 'c1-energy-expenditure',
        title: 'Energy Expenditure',
        description: 'Basal Metabolic Rate, Total Daily Energy Expenditure, and Non-Exercise Activity Thermogenesis.',
        difficulty: 'intermediate',
        estimatedMinutes: 200,
        sections: [
          { id: 's1-bmr', title: 'Basal Metabolic Rate (BMR)', difficulty: 'intermediate', readingMinutes: 25, description: 'Harris-Benedict vs Mifflin-St Jeor equations — predicting your resting energy needs.', buildsOn: '02-nutrition-science/c3-food-energy/s1-thermic-effect' },
          { id: 's2-tdee', title: 'Total Daily Energy Expenditure (TDEE)', difficulty: 'intermediate', readingMinutes: 22, description: 'BMR + activity + thermic effect = your daily calorie budget.', buildsOn: '03-energy-balance/c1-energy-expenditure/s1-bmr' },
          { id: 's3-neat', title: 'Non-Exercise Activity Thermogenesis (NEAT)', difficulty: 'intermediate', readingMinutes: 20, description: 'The hidden calorie burner — fidgeting, walking, and daily movement.', buildsOn: '03-energy-balance/c1-energy-expenditure/s2-tdee' },
        ],
      },
      {
        id: 'c2-body-composition',
        title: 'Body Composition',
        description: 'Beyond the scale — body fat, lean mass, and how to measure them.',
        difficulty: 'intermediate',
        estimatedMinutes: 200,
        sections: [
          { id: 's1-body-fat-lean-mass', title: 'Body Fat, Lean Mass & Bone Density', difficulty: 'beginner', readingMinutes: 22, description: 'What makes up your body weight and why the scale lies.', buildsOn: '03-energy-balance/c1-energy-expenditure/s3-neat' },
          { id: 's2-measurement-methods', title: 'Body Composition Measurement', difficulty: 'intermediate', readingMinutes: 25, description: 'DEXA, BIA, skinfold calipers, waist-hip ratio — pros and cons.', buildsOn: '03-energy-balance/c2-body-composition/s1-body-fat-lean-mass' },
          { id: 's3-set-point-theory', title: 'Set Point vs Settling Point Theory', difficulty: 'advanced', readingMinutes: 25, description: 'Does your body have a target weight? The evidence for and against.', buildsOn: '03-energy-balance/c2-body-composition/s2-measurement-methods' },
        ],
      },
      {
        id: 'c3-weight-change',
        title: 'Weight Change Mechanisms',
        description: 'How weight is actually gained and lost — surplus, deficit, and adaptation.',
        difficulty: 'intermediate',
        estimatedMinutes: 200,
        sections: [
          { id: 's1-caloric-surplus-deficit', title: 'Caloric Surplus & Deficit', difficulty: 'beginner', readingMinutes: 20, description: 'The fundamental equation of weight change — energy in vs energy out.', buildsOn: '03-energy-balance/c2-body-composition/s3-set-point-theory' },
          { id: 's2-metabolic-adaptation', title: 'Metabolic Adaptation', difficulty: 'advanced', readingMinutes: 28, description: 'Adaptive thermogenesis — why your body fights weight loss.', buildsOn: '03-energy-balance/c3-weight-change/s1-caloric-surplus-deficit' },
          { id: 's3-water-weight-glycogen', title: 'Water Weight, Glycogen & Scale Fluctuations', difficulty: 'beginner', readingMinutes: 20, description: 'Why your weight changes 1-2 kg daily and what it actually means.', buildsOn: '03-energy-balance/c3-weight-change/s2-metabolic-adaptation' },
        ],
      },
    ],
  },
  {
    id: '04-indian-diet',
    title: 'Indian Diet & Nutrition',
    icon: '🍛',
    colorHex: '#22c55e',
    description: 'Nutritional analysis of Indian and South Indian foods, cooking methods, ICMR guidelines, and evidence-based evaluation of traditional dietary wisdom.',
    prerequisites: ['02-nutrition-science'],
    healthRelevance: 95,
    estimatedHours: 16,
    difficulty: 'beginner',
    chapters: [
      {
        id: 'c1-indian-food-systems',
        title: 'Indian Food Systems',
        description: 'Nutritional profiles of Indian staples, cooking methods, and Ayurvedic principles evaluated against evidence.',
        difficulty: 'beginner',
        estimatedMinutes: 200,
        sections: [
          { id: 's1-indian-staples', title: 'Nutritional Profile of Indian Staples', difficulty: 'beginner', readingMinutes: 25, description: 'Rice, wheat, millets, dal, ghee — detailed nutritional breakdown.', buildsOn: '02-nutrition-science/c1-macronutrients/s1-carbohydrates' },
          { id: 's2-cooking-methods', title: 'Indian Cooking Methods & Nutrient Retention', difficulty: 'beginner', readingMinutes: 22, description: 'Tempering, pressure cooking, fermentation — how cooking affects nutrition.', buildsOn: '04-indian-diet/c1-indian-food-systems/s1-indian-staples' },
          { id: 's3-ayurveda-evidence', title: 'Ayurvedic Principles — Evidence Review', difficulty: 'intermediate', readingMinutes: 25, description: 'Separating evidence-backed Ayurvedic wisdom from unsubstantiated claims.', buildsOn: '04-indian-diet/c1-indian-food-systems/s2-cooking-methods' },
        ],
      },
      {
        id: 'c2-south-indian-diet',
        title: 'South Indian Diet Deep Dive',
        description: 'Rice-based meals, fermented foods, coconut, and the unique nutritional advantages of South Indian cuisine.',
        difficulty: 'beginner',
        estimatedMinutes: 220,
        sections: [
          { id: 's1-rice-based-meals', title: 'Rice-Based Meals — Nutritional Analysis', difficulty: 'beginner', readingMinutes: 25, description: 'Idli, dosa, rice-sambar, pongal — calories, macros, and glycemic impact.', buildsOn: '04-indian-diet/c1-indian-food-systems/s1-indian-staples' },
          { id: 's2-vegetables-coconut', title: 'South Indian Vegetables, Coconut & Curry Leaves', difficulty: 'beginner', readingMinutes: 22, description: 'Drumstick, ash gourd, coconut oil vs coconut milk — nutritional profiles.', buildsOn: '04-indian-diet/c2-south-indian-diet/s1-rice-based-meals' },
          { id: 's3-fermented-foods', title: 'Fermented Foods — Probiotic Benefits', difficulty: 'intermediate', readingMinutes: 25, description: 'Idli/dosa batter, curd, pickles, appam — fermentation science and gut health.', buildsOn: '04-indian-diet/c2-south-indian-diet/s2-vegetables-coconut' },
        ],
      },
      {
        id: 'c3-indian-dietary-patterns',
        title: 'Indian Dietary Patterns for Weight Management',
        description: 'ICMR guidelines, high-protein vegetarian strategies, and myth-busting.',
        difficulty: 'intermediate',
        estimatedMinutes: 220,
        sections: [
          { id: 's1-icmr-guidelines', title: 'ICMR Dietary Guidelines & RDA for Indians', difficulty: 'intermediate', readingMinutes: 25, description: 'National Institute of Nutrition recommendations — what Indians should eat.', buildsOn: '04-indian-diet/c2-south-indian-diet/s3-fermented-foods' },
          { id: 's2-high-protein-vegetarian', title: 'High-Protein Indian Vegetarian Diet', difficulty: 'intermediate', readingMinutes: 25, description: 'Achieving 1.6g/kg protein on a vegetarian Indian diet — practical strategies.', buildsOn: '04-indian-diet/c3-indian-dietary-patterns/s1-icmr-guidelines' },
          { id: 's3-diet-myths-debunked', title: 'Indian Diet Myths Debunked', difficulty: 'beginner', readingMinutes: 22, description: 'Ghee is bad? Rice makes you fat? Banana at night? Evidence-based answers.', buildsOn: '04-indian-diet/c3-indian-dietary-patterns/s2-high-protein-vegetarian' },
        ],
      },
    ],
  },
  {
    id: '05-weight-loss',
    title: 'Weight Loss Through Diet',
    icon: '📉',
    colorHex: '#06b6d4',
    description: 'Evidence-based weight loss principles, Indian diet modifications, behavioral psychology, and sustainable strategies.',
    prerequisites: ['03-energy-balance', '04-indian-diet'],
    healthRelevance: 98,
    estimatedHours: 16,
    difficulty: 'intermediate',
    chapters: [
      {
        id: 'c1-weight-loss-principles',
        title: 'Evidence-Based Weight Loss Principles',
        description: 'What the research actually says about losing weight effectively and safely.',
        difficulty: 'intermediate',
        estimatedMinutes: 220,
        sections: [
          { id: 's1-caloric-deficit-strategies', title: 'Caloric Deficit Strategies That Work', difficulty: 'intermediate', readingMinutes: 25, description: 'Systematic review of deficit approaches — which ones have the best evidence?', buildsOn: '03-energy-balance/c3-weight-change/s1-caloric-surplus-deficit' },
          { id: 's2-meal-timing-fasting', title: 'Meal Timing, Frequency & Intermittent Fasting', difficulty: 'intermediate', readingMinutes: 28, description: 'Does when you eat matter? 16:8, OMAD, 5:2 — the evidence examined.', buildsOn: '05-weight-loss/c1-weight-loss-principles/s1-caloric-deficit-strategies' },
          { id: 's3-sustainable-weight-loss', title: 'Sustainable Rate of Weight Loss', difficulty: 'beginner', readingMinutes: 20, description: '0.5-1% body weight per week — why slow and steady wins the race.', buildsOn: '05-weight-loss/c1-weight-loss-principles/s2-meal-timing-fasting' },
        ],
      },
      {
        id: 'c2-indian-diet-weight-loss',
        title: 'Indian Diet for Weight Loss',
        description: 'Practical, calorie-controlled Indian meal plans for effective weight loss.',
        difficulty: 'intermediate',
        estimatedMinutes: 220,
        sections: [
          { id: 's1-calorie-controlled-plans', title: 'Calorie-Controlled Indian Meal Plans', difficulty: 'intermediate', readingMinutes: 28, description: '1200, 1500, and 1800 kcal Indian diet plans with complete macro breakdowns.', buildsOn: '05-weight-loss/c1-weight-loss-principles/s3-sustainable-weight-loss' },
          { id: 's2-south-indian-modifications', title: 'South Indian Diet Modifications for Weight Loss', difficulty: 'intermediate', readingMinutes: 25, description: 'Making idli-dosa-rice meals weight-loss friendly without sacrificing taste.', buildsOn: '05-weight-loss/c2-indian-diet-weight-loss/s1-calorie-controlled-plans' },
          { id: 's3-portion-control', title: 'Portion Control with Indian Meals', difficulty: 'beginner', readingMinutes: 22, description: 'Visual portion guides for rice, dal, sabzi, roti — no measuring needed.', buildsOn: '05-weight-loss/c2-indian-diet-weight-loss/s2-south-indian-modifications' },
        ],
      },
      {
        id: 'c3-behavioral-aspects',
        title: 'Behavioral & Psychological Aspects',
        description: 'Mindful eating, emotional eating, and the science of building lasting habits.',
        difficulty: 'intermediate',
        estimatedMinutes: 200,
        sections: [
          { id: 's1-mindful-eating', title: 'Mindful Eating & Satiety Signals', difficulty: 'beginner', readingMinutes: 22, description: 'Eating slowly, recognizing fullness cues, and the 20-minute rule.', buildsOn: '01-body-fundamentals/c3-endocrine-system/s1-hunger-satiety-hormones' },
          { id: 's2-emotional-eating', title: 'Emotional Eating & Coping Strategies', difficulty: 'intermediate', readingMinutes: 25, description: 'Stress eating, boredom eating, comfort food — understanding and managing triggers.', buildsOn: '05-weight-loss/c3-behavioral-aspects/s1-mindful-eating' },
          { id: 's3-sustainable-habits', title: 'Building Sustainable Habits', difficulty: 'intermediate', readingMinutes: 25, description: 'Habit loop science — cue, routine, reward — applied to eating behavior.', buildsOn: '05-weight-loss/c3-behavioral-aspects/s2-emotional-eating' },
        ],
      },
    ],
  },
  {
    id: '06-weight-gain',
    title: 'Weight Gain Through Diet',
    icon: '📈',
    colorHex: '#8b5cf6',
    description: 'Healthy weight gain principles, protein requirements for muscle synthesis, and Indian diet plans for lean mass gain.',
    prerequisites: ['03-energy-balance', '04-indian-diet'],
    healthRelevance: 85,
    estimatedHours: 10,
    difficulty: 'intermediate',
    chapters: [
      {
        id: 'c1-weight-gain-principles',
        title: 'Healthy Weight Gain Principles',
        description: 'Building lean mass through caloric surplus, optimal protein intake, and progressive nutrition.',
        difficulty: 'intermediate',
        estimatedMinutes: 200,
        sections: [
          { id: 's1-caloric-surplus-lean-mass', title: 'Caloric Surplus for Lean Mass Gain', difficulty: 'intermediate', readingMinutes: 22, description: 'How much surplus? Clean bulk vs dirty bulk — what the evidence says.', buildsOn: '03-energy-balance/c3-weight-change/s1-caloric-surplus-deficit' },
          { id: 's2-protein-muscle-synthesis', title: 'Protein Requirements for Muscle Synthesis', difficulty: 'intermediate', readingMinutes: 25, description: 'Muscle protein synthesis, leucine threshold, and optimal protein timing.', buildsOn: '06-weight-gain/c1-weight-gain-principles/s1-caloric-surplus-lean-mass' },
          { id: 's3-progressive-overload-nutrition', title: 'Progressive Overload & Nutrition Connection', difficulty: 'intermediate', readingMinutes: 22, description: 'Why training stimulus determines where surplus calories go.', buildsOn: '06-weight-gain/c1-weight-gain-principles/s2-protein-muscle-synthesis' },
        ],
      },
      {
        id: 'c2-indian-diet-weight-gain',
        title: 'Indian Diet for Weight Gain',
        description: 'High-calorie nutritious Indian foods and practical bulking meal plans.',
        difficulty: 'intermediate',
        estimatedMinutes: 200,
        sections: [
          { id: 's1-high-calorie-indian-foods', title: 'High-Calorie Nutritious Indian Foods', difficulty: 'beginner', readingMinutes: 22, description: 'Nuts, ghee, paneer, banana shake, ragi — calorie-dense Indian options.', buildsOn: '06-weight-gain/c1-weight-gain-principles/s3-progressive-overload-nutrition' },
          { id: 's2-south-indian-bulking', title: 'South Indian Bulking Diet Plans', difficulty: 'intermediate', readingMinutes: 25, description: '2500-3500 kcal South Indian meal plans for lean mass gain.', buildsOn: '06-weight-gain/c2-indian-diet-weight-gain/s1-high-calorie-indian-foods' },
          { id: 's3-supplementation-evidence', title: 'Supplementation — Evidence Review', difficulty: 'intermediate', readingMinutes: 25, description: 'Whey protein, creatine, BCAAs — what works, what doesn\'t, and what\'s a waste.', buildsOn: '06-weight-gain/c2-indian-diet-weight-gain/s2-south-indian-bulking' },
        ],
      },
    ],
  },
  {
    id: '07-pot-belly',
    title: 'Reducing Pot Belly (Visceral Fat)',
    icon: '🎯',
    colorHex: '#ec4899',
    description: 'A dedicated deep-dive into visceral fat — understanding it, its health risks, and evidence-based dietary and lifestyle strategies to reduce it.',
    prerequisites: ['03-energy-balance', '04-indian-diet'],
    healthRelevance: 98,
    estimatedHours: 14,
    difficulty: 'intermediate',
    chapters: [
      {
        id: 'c1-visceral-fat',
        title: 'Understanding Visceral Fat',
        description: 'What visceral fat is, why it accumulates around the abdomen, and why it is dangerous.',
        difficulty: 'intermediate',
        estimatedMinutes: 220,
        sections: [
          { id: 's1-visceral-vs-subcutaneous', title: 'Visceral vs Subcutaneous Fat', difficulty: 'beginner', readingMinutes: 22, description: 'The two types of belly fat — anatomy, location, and metabolic differences.', buildsOn: '03-energy-balance/c2-body-composition/s1-body-fat-lean-mass' },
          { id: 's2-abdominal-fat-causes', title: 'Why Fat Accumulates in the Abdomen', difficulty: 'intermediate', readingMinutes: 28, description: 'Genetics, cortisol, insulin resistance, age, and gender — the contributing factors.', buildsOn: '07-pot-belly/c1-visceral-fat/s1-visceral-vs-subcutaneous' },
          { id: 's3-health-risks', title: 'Health Risks of Visceral Fat', difficulty: 'intermediate', readingMinutes: 25, description: 'CVD, type 2 diabetes, metabolic syndrome, fatty liver — the medical evidence.', buildsOn: '07-pot-belly/c1-visceral-fat/s2-abdominal-fat-causes' },
        ],
      },
      {
        id: 'c2-dietary-strategies',
        title: 'Dietary Strategies for Visceral Fat Reduction',
        description: 'Evidence-based foods and Indian diet plans specifically targeting belly fat.',
        difficulty: 'intermediate',
        estimatedMinutes: 220,
        sections: [
          { id: 's1-foods-reduce-visceral-fat', title: 'Foods That Reduce Visceral Fat', difficulty: 'intermediate', readingMinutes: 25, description: 'Soluble fiber, protein, MUFA, green tea — research-backed choices.', buildsOn: '07-pot-belly/c1-visceral-fat/s3-health-risks' },
          { id: 's2-indian-diet-belly-fat', title: 'Indian Diet Plan for Belly Fat Reduction', difficulty: 'intermediate', readingMinutes: 28, description: 'Practical Indian meal plans targeting visceral fat with calorie and macro targets.', buildsOn: '07-pot-belly/c2-dietary-strategies/s1-foods-reduce-visceral-fat' },
          { id: 's3-anti-inflammatory-diet', title: 'South Indian Anti-Inflammatory Diet', difficulty: 'intermediate', readingMinutes: 25, description: 'Turmeric, curry leaves, fenugreek — South Indian anti-inflammatory foods with evidence.', buildsOn: '07-pot-belly/c2-dietary-strategies/s2-indian-diet-belly-fat' },
        ],
      },
      {
        id: 'c3-lifestyle-factors',
        title: 'Lifestyle Factors',
        description: 'Sleep, stress, alcohol, and long-term strategies beyond just diet.',
        difficulty: 'intermediate',
        estimatedMinutes: 200,
        sections: [
          { id: 's1-sleep-stress-connection', title: 'Sleep, Stress & Visceral Fat Connection', difficulty: 'intermediate', readingMinutes: 25, description: 'How poor sleep and chronic stress directly increase belly fat — the cortisol mechanism.', buildsOn: '01-body-fundamentals/c3-endocrine-system/s3-cortisol-stress-fat' },
          { id: 's2-alcohol-visceral-fat', title: 'Alcohol & Visceral Fat', difficulty: 'beginner', readingMinutes: 20, description: 'The "beer belly" effect — how alcohol promotes visceral fat storage.', buildsOn: '07-pot-belly/c3-lifestyle-factors/s1-sleep-stress-connection' },
          { id: 's3-long-term-maintenance', title: 'Long-Term Maintenance & Monitoring', difficulty: 'intermediate', readingMinutes: 25, description: 'Waist circumference tracking, sustainable habits, and preventing regain.', buildsOn: '07-pot-belly/c3-lifestyle-factors/s2-alcohol-visceral-fat' },
        ],
      },
    ],
  },
  {
    id: '08-gut-health',
    title: 'Gut Health & Microbiome',
    icon: '🦠',
    colorHex: '#14b8a6',
    description: 'The gut microbiome, its role in weight regulation, and how Indian fermented foods support gut health.',
    prerequisites: ['01-body-fundamentals', '04-indian-diet'],
    healthRelevance: 85,
    estimatedHours: 6,
    difficulty: 'intermediate',
    chapters: [
      {
        id: 'c1-microbiome',
        title: 'Gut Microbiome Fundamentals',
        description: 'Gut bacteria, prebiotics, probiotics, and the gut-brain connection.',
        difficulty: 'intermediate',
        estimatedMinutes: 200,
        sections: [
          { id: 's1-gut-bacteria-weight', title: 'Gut Bacteria & Their Role in Weight', difficulty: 'intermediate', readingMinutes: 25, description: 'Firmicutes vs Bacteroidetes, SCFAs, and how microbiome composition affects weight.', buildsOn: '01-body-fundamentals/c2-digestive-system/s3-nutrient-absorption' },
          { id: 's2-prebiotics-probiotics-indian', title: 'Prebiotics & Probiotics in Indian Diet', difficulty: 'beginner', readingMinutes: 22, description: 'Curd, buttermilk, fermented batter, banana, garlic — Indian gut health foods.', buildsOn: '08-gut-health/c1-microbiome/s1-gut-bacteria-weight' },
          { id: 's3-gut-brain-axis', title: 'Gut-Brain Axis & Appetite Regulation', difficulty: 'advanced', readingMinutes: 28, description: 'How gut bacteria communicate with your brain to influence hunger and food choices.', buildsOn: '08-gut-health/c1-microbiome/s2-prebiotics-probiotics-indian' },
        ],
      },
    ],
  },
];

// ─── Helper functions ────────────────────────────────────────────────────────

export function getCurriculumById(subjectId) {
  return CURRICULUM.find((s) => s.id === subjectId) || null;
}

export function getChapterById(subjectId, chapterId) {
  const subject = getCurriculumById(subjectId);
  return subject?.chapters?.find((c) => c.id === chapterId) || null;
}

export function getSectionById(subjectId, chapterId, sectionId) {
  const chapter = getChapterById(subjectId, chapterId);
  return chapter?.sections?.find((s) => s.id === sectionId) || null;
}

export function getSubjectSectionCount(subjectId) {
  const subject = getCurriculumById(subjectId);
  if (!subject) return 0;
  return subject.chapters?.reduce((acc, ch) => acc + (ch.sections?.length || 0), 0) || 0;
}

/**
 * Flatten all sections across all subjects into an ordered list.
 */
function getAllSectionsFlat() {
  const flat = [];
  for (const subject of CURRICULUM) {
    for (const chapter of subject.chapters || []) {
      for (const section of chapter.sections || []) {
        flat.push({
          subjectId: subject.id,
          subjectTitle: subject.title,
          chapterId: chapter.id,
          chapterTitle: chapter.title,
          sectionId: section.id,
          title: section.title,
        });
      }
    }
  }
  return flat;
}

const ALL_SECTIONS = getAllSectionsFlat();

/**
 * Get the previous and next sections relative to the current one.
 */
export function getAdjacentSections(subjectId, chapterId, sectionId) {
  const idx = ALL_SECTIONS.findIndex(
    (s) => s.subjectId === subjectId && s.chapterId === chapterId && s.sectionId === sectionId
  );
  if (idx === -1) return { prev: null, next: null };

  const prev = idx > 0 ? ALL_SECTIONS[idx - 1] : null;
  const next = idx < ALL_SECTIONS.length - 1 ? ALL_SECTIONS[idx + 1] : null;

  const format = (item) => {
    if (!item) return null;
    return {
      ...item,
      crossesSubject: item.subjectId !== subjectId,
    };
  };

  return { prev: format(prev), next: format(next) };
}

/**
 * Resolve a buildsOn string like "01-body-fundamentals/c1-cell-biology/s1-cell-structure-energy"
 * to the actual section metadata.
 */
export function resolveBuildsOn(buildsOnStr) {
  if (!buildsOnStr) return null;
  const parts = buildsOnStr.split('/');
  if (parts.length !== 3) return null;
  const [subjectId, chapterId, sectionId] = parts;
  const subject = getCurriculumById(subjectId);
  const chapter = getChapterById(subjectId, chapterId);
  const section = getSectionById(subjectId, chapterId, sectionId);
  if (!subject || !chapter || !section) return null;
  return {
    subjectId,
    chapterId,
    sectionId,
    title: section.title,
    subjectTitle: subject.title,
  };
}

export default CURRICULUM;
