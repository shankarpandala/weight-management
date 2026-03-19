import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';
import MealPlanBlock from '../../../components/content/MealPlanBlock.jsx';
import NutritionFactBlock from '../../../components/content/NutritionFactBlock.jsx';
import ComparisonTable from '../../../components/content/ComparisonTable.jsx';

const references = [
  {
    id: 'icmr2020',
    authors: 'Indian Council of Medical Research (ICMR)',
    year: 2020,
    title: 'Nutrient Requirements and Recommended Dietary Allowances for Indians',
    journal: 'National Institute of Nutrition, Hyderabad',
    pages: 'A Report of the Expert Group'
  },
  {
    id: 'nin2017',
    authors: 'National Institute of Nutrition (NIN)',
    year: 2017,
    title: 'Indian Food Composition Tables',
    journal: 'National Institute of Nutrition, ICMR, Hyderabad'
  },
  {
    id: 'nin2011',
    authors: 'National Institute of Nutrition (NIN)',
    year: 2011,
    title: 'Dietary Guidelines for Indians — A Manual',
    journal: 'National Institute of Nutrition, ICMR, Hyderabad',
    pages: '2nd Edition'
  }
];

const plan1200 = {
  title: '1,200 kcal Indian Meal Plan — Aggressive Deficit',
  description: 'Suitable for shorter/lighter individuals (under 155 cm or under 55 kg) requiring an aggressive but safe deficit. Protein-optimized at approximately 30% of calories.',
  totalCalories: 1200,
  macros: { protein: 90, carbs: 120, fat: 40 },
  meals: [
    {
      name: 'Breakfast (7:00-8:00 AM)',
      calories: 280,
      items: [
        'Moong dal chilla (2 medium) — made with 40g moong dal, minimal oil (1 tsp)',
        'Mint chutney — 2 tbsp (made without coconut)',
        'Curd/yogurt — 100g (low-fat)',
        'Green tea or black coffee — 1 cup'
      ]
    },
    {
      name: 'Mid-Morning Snack (10:30 AM)',
      calories: 100,
      items: [
        'Buttermilk (chaas) — 200ml with roasted cumin',
        'Cucumber — 1 medium, sliced'
      ]
    },
    {
      name: 'Lunch (12:30-1:30 PM)',
      calories: 380,
      items: [
        'Brown rice or regular rice — 80g cooked (half katori)',
        'Dal (toor/masoor) — 1 katori (150ml), thick',
        'Sabzi — 1 katori (lauki, tinda, or mixed vegetables with 1 tsp oil)',
        'Salad — cucumber, tomato, onion, lemon',
        'Curd — 50g'
      ]
    },
    {
      name: 'Afternoon Snack (4:00 PM)',
      calories: 120,
      items: [
        'Roasted chana — 30g',
        'Green tea — 1 cup'
      ]
    },
    {
      name: 'Dinner (7:00-8:00 PM)',
      calories: 320,
      items: [
        'Roti (whole wheat) — 1 medium (30g atta)',
        'Paneer bhurji — 50g paneer with vegetables (1 tsp oil)',
        'Palak/methi sabzi — 1 katori (1 tsp oil)',
        'Salad — mixed greens with lemon'
      ]
    }
  ]
};

const plan1500 = {
  title: '1,500 kcal Indian Meal Plan — Moderate Deficit',
  description: 'The most commonly recommended plan for moderate weight loss. Suitable for most Indian adults with a sedentary-to-moderate activity level. This is the sweet spot for sustainable fat loss with adequate nutrition.',
  totalCalories: 1500,
  macros: { protein: 112, carbs: 150, fat: 50 },
  meals: [
    {
      name: 'Breakfast (7:00-8:00 AM)',
      calories: 350,
      items: [
        'Vegetable poha — 50g flattened rice with peanuts (10g), vegetables, 1 tsp oil',
        'OR Egg bhurji (2 whole eggs + 1 egg white) with 1 slice whole wheat toast',
        'Milk (toned) — 150ml for tea/coffee',
        'Fruit — 1 small apple or guava'
      ]
    },
    {
      name: 'Mid-Morning Snack (10:30 AM)',
      calories: 130,
      items: [
        'Mixed nuts (almonds + walnuts) — 15g',
        'Buttermilk — 200ml',
        'OR Sprouts chaat — 50g (moong/chana sprouts with onion, lemon, chaat masala)'
      ]
    },
    {
      name: 'Lunch (12:30-1:30 PM)',
      calories: 480,
      items: [
        'Rice — 120g cooked (1 katori) OR 2 medium rotis (60g atta)',
        'Dal — 1 katori (150ml) made with toor, moong, or masoor',
        'Chicken curry — 80g chicken (1 piece) with 1 tsp oil',
        'OR Rajma/chole — 1 katori (cooked 80g dry)',
        'Sabzi — 1 katori seasonal vegetables (1 tsp oil)',
        'Salad — generous portion with lemon dressing',
        'Curd — 100g'
      ]
    },
    {
      name: 'Evening Snack (4:00-4:30 PM)',
      calories: 140,
      items: [
        'Roasted makhana (fox nuts) — 30g with minimal ghee/salt',
        'Green tea — 1 cup',
        'OR Fruit — 1 medium banana or orange'
      ]
    },
    {
      name: 'Dinner (7:00-8:00 PM)',
      calories: 400,
      items: [
        'Roti — 2 medium (60g atta)',
        'Fish curry or egg curry — 100g fish or 2 boiled eggs (1 tsp oil)',
        'OR Paneer tikka — 75g paneer with bell peppers (grilled/air-fried)',
        'Mixed vegetable sabzi — 1 katori (1 tsp oil)',
        'Dal or sambar — half katori if desired',
        'Salad — cucumber, radish, carrot'
      ]
    }
  ]
};

const plan1800 = {
  title: '1,800 kcal Indian Meal Plan — Mild Deficit',
  description: 'Designed for taller/heavier individuals (over 170 cm or over 80 kg) or those with moderate-to-high activity levels. Provides a mild deficit for gradual, highly sustainable fat loss with excellent nutritional adequacy.',
  totalCalories: 1800,
  macros: { protein: 135, carbs: 180, fat: 60 },
  meals: [
    {
      name: 'Breakfast (7:00-8:00 AM)',
      calories: 420,
      items: [
        'Oats upma — 50g oats with vegetables, peanuts (15g), 1 tsp oil',
        'OR Besan chilla (2 large) with vegetable stuffing, 1 tsp oil',
        'Boiled eggs — 2 whole',
        'Milk tea or coffee — 1 cup (150ml toned milk)',
        'Fruit — 1 medium banana or papaya (100g)'
      ]
    },
    {
      name: 'Mid-Morning Snack (10:30 AM)',
      calories: 170,
      items: [
        'Mixed nuts — 20g (almonds, cashews, walnuts)',
        'Sprouts salad — 60g with onion, tomato, lemon, chaat masala',
        'OR Paneer cubes — 40g with black pepper'
      ]
    },
    {
      name: 'Lunch (12:30-1:30 PM)',
      calories: 560,
      items: [
        'Rice — 150g cooked (1.5 katori) OR 2-3 rotis (60-90g atta)',
        'Dal — 1 katori (toor/masoor/moong)',
        'Chicken breast or thigh — 120g (grilled or curry with 1 tsp oil)',
        'OR Soya chunks — 30g dry (rehydrated) in gravy',
        'Sabzi — 1 large katori seasonal vegetables',
        'Curd/raita — 100g with cucumber',
        'Salad — generous portion'
      ]
    },
    {
      name: 'Evening Snack (4:00-4:30 PM)',
      calories: 180,
      items: [
        'Protein shake — 1 scoop whey in 200ml water (if needed to hit protein target)',
        'OR Roasted chana — 40g with jaggery (10g)',
        'OR Idli — 2 small with sambar (leftover)'
      ]
    },
    {
      name: 'Dinner (7:30-8:30 PM)',
      calories: 470,
      items: [
        'Roti — 2 medium (60g atta)',
        'Fish (rohu/pomfret) — 120g grilled or curry (1 tsp oil)',
        'OR Egg bhurji — 3 whole eggs with vegetables',
        'OR Tofu stir-fry — 100g with vegetables',
        'Mixed dal or sambar — 1 katori',
        'Sabzi — 1 katori (baingan, bhindi, or mixed greens)',
        'Salad — cucumber, tomato, onion'
      ]
    }
  ]
};

export default function CalorieControlledPlans() {
  return (
    <div className="prose-health">
      <h1>Calorie-Controlled Indian Meal Plans for Weight Loss</h1>

      <p>
        Effective weight loss requires a consistent caloric deficit, but this does
        not mean abandoning the flavors, ingredients, and cultural patterns of Indian
        cuisine. The following three meal plans demonstrate that traditional Indian
        foods — dal, roti, rice, sabzi, curd — can be combined into nutritionally
        complete, calorie-controlled plans that support fat loss while providing
        adequate protein, essential micronutrients, and dietary satisfaction.
      </p>

      <h2>Choosing Your Calorie Level</h2>

      <p>
        The appropriate calorie level depends on your current weight, height, age,
        activity level, and the desired rate of loss. The following guidelines provide
        a starting point — individual adjustments may be needed based on progress
        over 2-4 weeks.
      </p>

      <ComparisonTable
        title="Which Calorie Level Is Right for You?"
        headers={['Factor', '1,200 kcal', '1,500 kcal', '1,800 kcal']}
        rows={[
          ['Height', 'Under 155 cm', '155-170 cm', 'Over 170 cm'],
          ['Current weight', 'Under 55 kg', '55-80 kg', 'Over 80 kg'],
          ['Activity level', 'Sedentary', 'Lightly active', 'Moderately active'],
          ['Deficit type', 'Aggressive', 'Moderate', 'Mild'],
          ['Expected loss', '0.7-1.0 kg/week', '0.5-0.7 kg/week', '0.3-0.5 kg/week'],
          ['Sustainability', 'Moderate (8-12 weeks max)', 'High (long-term)', 'Very high (long-term)'],
          ['Best for', 'Shorter/lighter individuals', 'Most adults', 'Taller/heavier/active adults']
        ]}
      />

      <WarningBlock title="Important Considerations">
        These meal plans are general guidelines and should not replace personalized
        advice from a registered dietitian, particularly if you have diabetes,
        kidney disease, cardiovascular conditions, or any other medical condition
        requiring dietary management. No adult should consume fewer than 1,200 kcal
        per day without medical supervision. If you experience persistent fatigue,
        hair loss, menstrual irregularities, or constant cold intolerance, your
        caloric intake may be too low.
      </WarningBlock>

      <h2>Plan 1: 1,200 kcal — Aggressive Deficit</h2>

      <MealPlanBlock plan={plan1200} />

      <NutritionFactBlock
        title="1,200 kcal Plan — Daily Nutrition Summary"
        calories={1200}
        protein={90}
        carbs={120}
        fat={40}
        fiber={22}
        sodium={1800}
        highlights={[
          'Protein: 30% of calories (90g) — high for appetite control and muscle preservation',
          'Carbs: 40% of calories (120g) — sufficient for basic energy needs',
          'Fat: 30% of calories (40g) — minimum for hormonal health',
          'Fiber: ~22g — from vegetables, dal, and whole grains',
          'Iron: adequate from dal, green leafy vegetables, and whole grains',
          'Calcium: from curd/yogurt and leafy greens'
        ]}
      />

      <NoteBlock title="1,200 kcal Plan Guidance">
        This plan is only appropriate for shorter or lighter individuals for whom
        it creates a moderate (not extreme) deficit. For most Indian adults, 1,200
        kcal will be too aggressive and is not recommended for more than 8-12 weeks.
        Supplement with a multivitamin and ensure daily sunlight exposure for
        vitamin D. Monitor energy levels, mood, and menstrual regularity (women)
        closely.
      </NoteBlock>

      <h2>Plan 2: 1,500 kcal — Moderate Deficit (Recommended)</h2>

      <MealPlanBlock plan={plan1500} />

      <NutritionFactBlock
        title="1,500 kcal Plan — Daily Nutrition Summary"
        calories={1500}
        protein={112}
        carbs={150}
        fat={50}
        fiber={28}
        sodium={2000}
        highlights={[
          'Protein: 30% of calories (112g) — optimized for satiety and lean mass',
          'Carbs: 40% of calories (150g) — adequate for energy and training',
          'Fat: 30% of calories (50g) — supports hormonal function and nutrient absorption',
          'Fiber: ~28g — approaching recommended 30g from whole foods',
          'Includes both vegetarian and non-vegetarian protein options',
          'All micronutrient needs met through food diversity'
        ]}
      />

      <NoteBlock title="Why 1,500 kcal Works for Most People">
        For the average Indian adult (height 160-170 cm, weight 60-80 kg, sedentary
        to lightly active lifestyle), a maintenance intake falls between 1,800 and
        2,200 kcal. A 1,500 kcal plan therefore creates a deficit of 300-700 kcal
        per day — the ideal range for sustainable fat loss. This plan can be
        followed indefinitely with periodic diet breaks every 6-8 weeks. It provides
        enough food volume for satisfaction and enough nutritional diversity for
        long-term health.
      </NoteBlock>

      <h2>Plan 3: 1,800 kcal — Mild Deficit</h2>

      <MealPlanBlock plan={plan1800} />

      <NutritionFactBlock
        title="1,800 kcal Plan — Daily Nutrition Summary"
        calories={1800}
        protein={135}
        carbs={180}
        fat={60}
        fiber={32}
        sodium={2200}
        highlights={[
          'Protein: 30% of calories (135g) — excellent for muscle preservation during exercise',
          'Carbs: 40% of calories (180g) — good for active individuals and training performance',
          'Fat: 30% of calories (60g) — ample for hormonal health and cooking flexibility',
          'Fiber: ~32g — meets daily recommendations from whole food sources',
          'Generous portions make this plan highly sustainable long-term',
          'Suitable for combining with resistance training programs'
        ]}
      />

      <h2>Practical Tips for All Plans</h2>

      <h3>Oil and Cooking Fat Management</h3>

      <p>
        Cooking oil is the single biggest hidden calorie source in Indian cooking.
        One tablespoon of any oil (15ml) contains approximately 120 kcal. Indian
        home cooking often uses 3-5 tablespoons per dish, adding 360-600 kcal that
        go unnoticed. The plans above limit each dish to 1 teaspoon (5ml, ~40 kcal)
        of oil.
      </p>

      <ExampleBlock title="Oil-Saving Cooking Techniques">
        <ul>
          <li>Use non-stick or well-seasoned iron pans to reduce oil needed</li>
          <li>Measure oil with teaspoons — never pour directly from the bottle</li>
          <li>Use oil sprays (1-second spray = ~10 kcal vs 1 tbsp = 120 kcal)</li>
          <li>Dry roast spices instead of tempering in oil when possible</li>
          <li>Steam, grill, air-fry, or pressure cook instead of deep frying</li>
          <li>For tadka/tempering, use 1 tsp oil for the whole pot of dal</li>
          <li>Choose grilled or tandoori preparations over gravy-based dishes</li>
        </ul>
      </ExampleBlock>

      <h3>Protein Optimization in Indian Diets</h3>

      <p>
        The traditional Indian vegetarian diet tends to be carbohydrate-heavy and
        protein-inadequate. Achieving 30% protein on these plans requires deliberate
        inclusion of protein-rich foods at every meal.
      </p>

      <ExampleBlock title="High-Protein Indian Foods (per 100g cooked)">
        <ul>
          <li><strong>Chicken breast:</strong> ~31g protein, 165 kcal</li>
          <li><strong>Eggs (2 whole):</strong> ~13g protein, 155 kcal</li>
          <li><strong>Paneer:</strong> ~18g protein, 265 kcal</li>
          <li><strong>Toor dal (cooked):</strong> ~7g protein, 120 kcal</li>
          <li><strong>Curd/yogurt:</strong> ~4g protein, 60 kcal per 100g</li>
          <li><strong>Soya chunks (dry):</strong> ~52g protein, 345 kcal</li>
          <li><strong>Chana (chickpeas, cooked):</strong> ~9g protein, 164 kcal</li>
          <li><strong>Sprouts (moong):</strong> ~7g protein, 105 kcal per 100g cooked</li>
          <li><strong>Fish (rohu):</strong> ~17g protein, 97 kcal</li>
          <li><strong>Milk (toned):</strong> ~3g protein, 50 kcal per 100ml</li>
        </ul>
      </ExampleBlock>

      <h3>Meal Prep and Batch Cooking</h3>

      <NoteBlock title="Weekly Prep Strategy for Indian Meals">
        <ul>
          <li>
            <strong>Sunday:</strong> Pressure cook 3 types of dal (toor, moong, masoor) —
            store in portions in the fridge for the week
          </li>
          <li>
            <strong>Sunday:</strong> Make roti dough in bulk — store in fridge for
            3-4 days of fresh rotis
          </li>
          <li>
            <strong>Sunday:</strong> Wash, chop, and store salad vegetables in airtight
            containers
          </li>
          <li>
            <strong>Mid-week:</strong> Prepare a second batch of dal and fresh sabzi
          </li>
          <li>
            <strong>Daily:</strong> Cook protein fresh (eggs, chicken, fish, paneer) for
            best taste and texture
          </li>
          <li>
            <strong>Keep ready:</strong> Roasted chana, makhana, nuts portioned in small
            bags for snacks
          </li>
        </ul>
      </NoteBlock>

      <h2>Vegetarian vs. Non-Vegetarian Considerations</h2>

      <p>
        All three plans include both vegetarian and non-vegetarian options. For strict
        vegetarians, reaching protein targets requires more planning but is achievable
        through generous portions of dal, curd, paneer, soya, sprouts, and legumes.
        Combining cereals with pulses (dal-chawal, roti-rajma) provides complete
        amino acid profiles.
      </p>

      <WarningBlock title="Vegan Considerations">
        Vegans following these plans must replace curd with plant-based alternatives
        (soy yogurt) and paneer with tofu. Vitamin B12 supplementation is mandatory
        for vegans as no plant food provides adequate B12. Additionally, calcium
        intake must be monitored, with sesame seeds (til), ragi, and fortified
        plant milks as primary sources. Iron absorption from plant sources is
        enhanced by consuming vitamin C-rich foods (lemon, amla, capsicum)
        alongside iron-rich foods.
      </WarningBlock>

      <ReferenceList references={references} />
    </div>
  );
}
