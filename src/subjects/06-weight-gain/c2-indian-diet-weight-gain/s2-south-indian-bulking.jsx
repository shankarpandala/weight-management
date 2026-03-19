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
    id: 'nin2017',
    authors: 'National Institute of Nutrition (NIN)',
    year: 2017,
    title: 'Indian Food Composition Tables',
    journal: 'National Institute of Nutrition, ICMR, Hyderabad'
  },
  {
    id: 'icmr2020',
    authors: 'Indian Council of Medical Research (ICMR)',
    year: 2020,
    title: 'Nutrient Requirements and Recommended Dietary Allowances for Indians',
    journal: 'National Institute of Nutrition, Hyderabad'
  }
];

const plan2500 = {
  title: '2,500 kcal South Indian Lean Bulk Plan',
  description: 'Designed for individuals weighing 60-75 kg seeking a moderate caloric surplus for lean muscle gain. Emphasizes traditional South Indian foods prepared for maximum nutritional density. Suitable for those training 3-5 days per week.',
  totalCalories: 2500,
  macros: { protein: 150, carbs: 280, fat: 78 },
  meals: [
    {
      name: 'Breakfast (7:00-7:30 AM)',
      calories: 520,
      items: [
        'Egg dosa — 2 large (dosa batter spread thin, crack 1 egg on each, 1 tsp oil per dosa)',
        'Sambar — 1 large katori (200ml) loaded with drumstick, carrot, and brinjal',
        'Coconut chutney — 2 tablespoons',
        'Banana — 1 large',
        'Filter coffee with full cream milk (150ml milk) — 1 cup'
      ]
    },
    {
      name: 'Mid-Morning Snack (10:00 AM)',
      calories: 300,
      items: [
        'Sundal (boiled black chana) — 100g with coconut, curry leaves, lemon',
        'Mixed nuts — 20g (almonds + cashews)',
        'Buttermilk (neer mor) — 200ml'
      ]
    },
    {
      name: 'Lunch (12:30-1:00 PM)',
      calories: 700,
      items: [
        'Rice — 200g cooked (approximately 1.5 katori) with 1 tsp ghee drizzled',
        'Sambar — 1 large katori with vegetables',
        'Chicken curry (kozhi kuzhambu) — 150g chicken in gravy (2 tsp oil)',
        'OR Fish curry (meen kuzhambu) — 150g fish in tamarind-based gravy',
        'Poriyal — 1 katori (beans/cabbage with 1 tsp coconut oil)',
        'Kootu — 1 katori (chayote or snake gourd with moong dal)',
        'Curd — 100g',
        'Rasam — 1 cup',
        'Pickle — 1 tsp'
      ]
    },
    {
      name: 'Pre-Workout Snack (3:30-4:00 PM)',
      calories: 250,
      items: [
        'Banana — 1 medium',
        'Peanut butter — 1 tablespoon on 1 slice whole wheat bread',
        'OR Ragi porridge (150ml) with jaggery (1 tsp)'
      ]
    },
    {
      name: 'Post-Workout (5:30-6:00 PM)',
      calories: 180,
      items: [
        'Whey protein — 1 scoop (30g) in 200ml water',
        'OR 2 boiled eggs + 200ml buttermilk (if no whey available)'
      ]
    },
    {
      name: 'Dinner (8:00-8:30 PM)',
      calories: 550,
      items: [
        'Ragi mudde — 2 medium balls (made from 60g ragi flour)',
        'OR Idli — 4 medium with extra sambar',
        'OR 3 rotis/chapatis',
        'Egg curry — 3 boiled eggs in coconut-onion gravy (2 tsp oil)',
        'OR Paneer curry — 100g paneer in spinach (palak paneer)',
        'Drumstick leaves (murungai keerai) poriyal — 1 katori',
        'Rasam — 1 cup'
      ]
    }
  ]
};

const plan3000 = {
  title: '3,000 kcal South Indian Bulking Plan',
  description: 'Designed for individuals weighing 75-95 kg or those with higher caloric needs due to intense training (5-6 days/week), high NEAT, or hardgainer metabolism. Maximizes caloric intake through strategic use of ghee, coconut, and calorie-dense South Indian preparations.',
  totalCalories: 3000,
  macros: { protein: 180, carbs: 340, fat: 93 },
  meals: [
    {
      name: 'Breakfast (7:00-7:30 AM)',
      calories: 650,
      items: [
        'Pesarattu (moong dal dosa) — 2 large with upma filling',
        'OR Egg dosa — 3 (1 egg + 1 tsp oil each)',
        'OR Idli — 5 medium with 2 katori sambar',
        'Coconut chutney — 2 tablespoons + peanut chutney — 2 tablespoons',
        'Boiled eggs — 2 whole (if not having egg dosa)',
        'Banana — 1 large',
        'Full cream milk coffee or tea — 1 large cup (200ml milk)'
      ]
    },
    {
      name: 'Mid-Morning Snack (10:00-10:30 AM)',
      calories: 380,
      items: [
        'Ragi malt with full cream milk (250ml) and jaggery (15g)',
        'Mixed nuts — 30g (almonds, cashews, walnuts)',
        'OR Paniyaram (3-4 pieces, pan-fried) with coconut chutney'
      ]
    },
    {
      name: 'Lunch (12:30-1:30 PM)',
      calories: 850,
      items: [
        'Rice — 250-300g cooked (2 katori) with 1 tbsp ghee',
        'Sambar — 1 large katori (generously loaded with vegetables)',
        'Chicken curry — 180g chicken (1 large piece + drumstick)',
        'OR Fish fry (meen varuval) — 150g + fish curry — 100g',
        'Poriyal — 1 katori (beans, carrot, or drumstick)',
        'Kootu — 1 katori with extra dal',
        'Curd — 150g',
        'Rasam — unlimited',
        'Appalam — 2 pieces (roasted, not fried)'
      ]
    },
    {
      name: 'Pre-Workout (3:30-4:00 PM)',
      calories: 320,
      items: [
        'Banana smoothie — 1 banana + 200ml milk + 1 tbsp peanut butter + 1 tsp honey',
        'OR Puttu (2 cylinders) with banana and sugar',
        'OR 2 idlis with sambar (leftover from breakfast)'
      ]
    },
    {
      name: 'Post-Workout (5:30-6:00 PM)',
      calories: 250,
      items: [
        'Whey protein — 1.5 scoops (45g) in 250ml milk',
        'OR 3 boiled eggs + 1 banana + 200ml milk',
        'Dates — 3-4 pieces (for quick glycogen replenishment)'
      ]
    },
    {
      name: 'Dinner (8:00-8:30 PM)',
      calories: 550,
      items: [
        'Dosa — 3 medium (with 1 tsp oil each) OR Chapati — 3',
        'OR Rice — 150g cooked with rasam',
        'Mutton curry (aattukari kuzhambu) — 100g mutton',
        'OR Egg masala — 3 eggs in onion-tomato gravy',
        'OR Soya chunks curry — 50g dry (rehydrated) in coconut gravy',
        'Spinach or greens thoran — 1 katori',
        'Dal — 1 katori (if not having sambar)'
      ]
    }
  ]
};

export default function SouthIndianBulking() {
  return (
    <div className="prose-health">
      <h1>South Indian Bulking Meal Plans</h1>

      <p>
        South Indian cuisine, with its emphasis on rice, coconut, lentil-based
        curries, and generous use of oil and ghee, is naturally well-suited for
        high-calorie eating. The traditional South Indian "meals" (full thali
        with rice, sambar, rasam, kootu, poriyal, and curd) can easily deliver
        700-1,000 kcal when portions are generous — making it an excellent
        foundation for a muscle-building diet. This section provides two complete
        South Indian bulking plans (2,500 and 3,000 kcal), along with pre- and
        post-workout meal strategies using familiar South Indian foods.
      </p>

      <h2>Principles of South Indian Bulking</h2>

      <NoteBlock title="Key Strategies for High-Calorie South Indian Eating">
        <ul>
          <li>
            <strong>Generous rice portions:</strong> Unlike weight loss where rice is
            limited, bulking permits 200-300g cooked rice per meal (1.5-2 katori).
            Rice is easily digestible and provides quick glycogen replenishment.
          </li>
          <li>
            <strong>Added ghee at serving:</strong> Drizzle 1 tbsp ghee on rice before
            eating. This adds 135 kcal without adding volume or reducing appetite.
          </li>
          <li>
            <strong>Coconut-based curries:</strong> South Indian gravies using coconut
            milk or coconut paste are naturally calorie-dense. A coconut milk-based
            chicken curry provides 30-50% more calories than a tomato-onion based one.
          </li>
          <li>
            <strong>Extra idlis/dosas:</strong> Simply increasing the number of idlis
            from 3 to 5 adds ~120 kcal. Making egg dosas instead of plain dosas adds
            ~70 kcal per dosa from the egg alone.
          </li>
          <li>
            <strong>Protein at every meal:</strong> Ensure every meal includes a
            dedicated protein source — eggs, chicken, fish, paneer, or generous dal.
            South Indian meals can be carb-heavy if protein is not deliberately included.
          </li>
          <li>
            <strong>Ragi as a calorie vehicle:</strong> Ragi mudde, ragi porridge, and
            ragi malt with milk are all excellent calorie-dense traditional options
            that also provide superior micronutrition.
          </li>
        </ul>
      </NoteBlock>

      <h2>Plan 1: 2,500 kcal South Indian Lean Bulk</h2>

      <MealPlanBlock plan={plan2500} />

      <NutritionFactBlock
        title="2,500 kcal Plan — Daily Nutrition Summary"
        calories={2500}
        protein={150}
        carbs={280}
        fat={78}
        fiber={35}
        sodium={2400}
        highlights={[
          'Protein: 24% of calories (150g) — sufficient for muscle building at 2.0-2.5 g/kg for 60-75 kg individual',
          'Carbs: 45% of calories (280g) — supports training performance and glycogen stores',
          'Fat: 28% of calories (78g) — adequate for hormonal health',
          'Includes both pre and post-workout nutrition timing',
          'All meals use traditional South Indian preparations',
          'Fiber from vegetables, sambar, and whole grains exceeds recommendations'
        ]}
      />

      <h2>Plan 2: 3,000 kcal South Indian Bulking</h2>

      <MealPlanBlock plan={plan3000} />

      <NutritionFactBlock
        title="3,000 kcal Plan — Daily Nutrition Summary"
        calories={3000}
        protein={180}
        carbs={340}
        fat={93}
        fiber={38}
        sodium={2600}
        highlights={[
          'Protein: 24% of calories (180g) — optimal for muscle building at 1.9-2.4 g/kg for 75-95 kg individual',
          'Carbs: 45% of calories (340g) — high carb to fuel intense training and recovery',
          'Fat: 28% of calories (93g) — from ghee, coconut, nuts, and cooking oils',
          'Six eating occasions to distribute large caloric load across the day',
          'Pre-workout carb-focused meal for training energy',
          'Post-workout protein + carb combination for recovery'
        ]}
      />

      <h2>Pre-Workout Meals: South Indian Options</h2>

      <p>
        The ideal pre-workout meal provides readily digestible carbohydrates for
        energy and moderate protein for amino acid availability during training.
        Fat and fiber should be limited to prevent gastrointestinal discomfort
        during exercise. Timing: consume 60-90 minutes before training for a
        full meal, or 30-45 minutes for a lighter snack.
      </p>

      <ComparisonTable
        title="South Indian Pre-Workout Options"
        headers={['Option', 'Timing Before Workout', 'Calories', 'Best For']}
        rows={[
          ['2-3 idlis + sambar', '60-90 min', '200-250', 'Light, easily digestible, good carbs'],
          ['1 plain dosa + sambar', '60-90 min', '200-230', 'Quick energy, moderate volume'],
          ['Banana + peanut butter toast', '45-60 min', '250-300', 'Quick carbs + sustained energy'],
          ['Ragi porridge with milk', '60-90 min', '250-320', 'Sustained energy, good minerals'],
          ['Puttu + banana', '60-90 min', '280-350', 'Traditional Kerala pre-workout fuel'],
          ['2 bananas + handful dates', '30-45 min', '250-280', 'Quick energy, minimal digestion needed'],
          ['Upma (semolina) with peanuts', '60-90 min', '250-300', 'Complex carbs + some protein'],
          ['Curd rice (small portion)', '60-90 min', '200-250', 'Easy digestion, good for nervous stomachs']
        ]}
      />

      <h2>Post-Workout Meals: South Indian Options</h2>

      <p>
        Post-workout nutrition should prioritize protein (25-40g) for muscle
        repair and carbohydrates (40-80g) for glycogen replenishment. The
        sooner you can eat after training, the better — particularly if your
        next training session is within 24 hours.
      </p>

      <ComparisonTable
        title="South Indian Post-Workout Options"
        headers={['Option', 'Calories', 'Protein (g)', 'Carbs (g)', 'Notes']}
        rows={[
          ['Whey shake + banana', '250-300', '30-35', '35-40', 'Fastest option, ideal immediately post-workout'],
          ['3 egg dosa + sambar', '400-450', '25-30', '45-50', 'Solid meal, eat within 60 min post-workout'],
          ['Ragi malt (milk + whey)', '350-400', '35-40', '45-50', 'Traditional + modern protein combination'],
          ['Chicken fried rice (low oil)', '450-500', '30-35', '55-60', 'South Indian style with drumstick curry'],
          ['4 idlis + 2 egg curry', '400-450', '25-30', '50-55', 'Classic post-workout meal'],
          ['Curd rice + chicken curry', '450-500', '30-35', '45-50', 'Easy digestion, good protein + carb combo'],
          ['Pesarattu (3) + egg', '380-420', '28-32', '42-48', 'High protein dosa option'],
          ['Banana smoothie with whey', '350-400', '35-40', '45-50', 'Liquid meal for those with poor post-workout appetite']
        ]}
      />

      <h2>Vegetarian South Indian Bulking Modifications</h2>

      <p>
        Reaching 150-180g of protein on a vegetarian South Indian diet is
        challenging but achievable with deliberate planning. The key modifications
        involve maximizing dairy protein, incorporating soya products, and
        increasing dal portions beyond traditional serving sizes.
      </p>

      <ExampleBlock title="Vegetarian Protein Boosters for South Indian Meals">
        <ul>
          <li>
            <strong>Double dal portions:</strong> Instead of 1 katori sambar, have 2
            katoris. The extra dal adds approximately 7-10g protein per katori.
          </li>
          <li>
            <strong>Paneer in every dinner:</strong> 100g paneer = 18g protein. Use in
            curries, stir-fries, or as cubes in salad.
          </li>
          <li>
            <strong>Soya chunks curry:</strong> 30g dry soya chunks = 15g protein.
            Rehydrate and cook in South Indian style gravy (with coconut and curry
            leaves) for a familiar flavor profile.
          </li>
          <li>
            <strong>Curd at every meal:</strong> 200g curd = 8g protein. Use as side,
            in curd rice, or as raita.
          </li>
          <li>
            <strong>Milk-based beverages:</strong> Full cream milk (250ml) = 8g protein.
            Use for filter coffee, ragi malt, and protein shakes.
          </li>
          <li>
            <strong>Whey protein supplementation:</strong> 1-2 scoops per day provides
            25-50g of high-quality protein. Not mandatory but extremely helpful for
            vegetarians targeting 150g+ daily.
          </li>
          <li>
            <strong>Sprouts sundal:</strong> Sprouted moong (100g) = 7g protein with
            improved digestibility. Make as sundal or add to breakfast.
          </li>
          <li>
            <strong>Thayir sadam (curd rice) enhancement:</strong> Add 50g paneer
            cubes and 10g roasted peanuts to curd rice — transforms it from a
            carb-heavy side into a balanced mini-meal.
          </li>
        </ul>
      </ExampleBlock>

      <WarningBlock title="Common Bulking Mistakes with South Indian Food">
        <ul>
          <li>
            <strong>Too much rice, not enough protein:</strong> It is easy to fill up
            on 3-4 katoris of rice while having only 1 katori of dal as the protein
            source. This produces a high-calorie meal that is 70% carbohydrate with
            inadequate protein for muscle building.
          </li>
          <li>
            <strong>Relying on deep-fried items:</strong> Vada, bonda, bajji, and
            other deep-fried South Indian snacks are calorie-dense but nutritionally
            poor. They contribute excess oxidized fats and little protein. Use them
            occasionally, not as staple calorie sources.
          </li>
          <li>
            <strong>Ignoring vegetables during bulking:</strong> The temptation to skip
            vegetables and eat more rice is strong during a bulk. Maintain 2-3
            servings of vegetables per meal for fiber, micronutrients, and digestive
            health.
          </li>
          <li>
            <strong>Insufficient hydration:</strong> Higher calorie and protein intake
            requires more water. Aim for 3-4 liters daily, including buttermilk
            and rasam.
          </li>
        </ul>
      </WarningBlock>

      <h2>Weekly Meal Prep Strategy for South Indian Bulking</h2>

      <NoteBlock title="Batch Preparation Guide">
        <ul>
          <li>
            <strong>Sunday:</strong> Pressure cook 3 types of dal/sambar for the
            week. Prepare sambar powder (fresh) if possible. Soak nuts for the
            next 2-3 days.
          </li>
          <li>
            <strong>Sunday:</strong> Prepare dosa/idli batter (ferment overnight).
            One batch lasts 3-4 days in the fridge. Make extra batter for egg dosas.
          </li>
          <li>
            <strong>Sunday:</strong> Cook a large batch of chicken curry or egg
            curry — stores well for 3-4 days refrigerated.
          </li>
          <li>
            <strong>Wednesday:</strong> Prepare fresh batter if needed. Make a
            different protein curry (fish or mutton) for variety.
          </li>
          <li>
            <strong>Daily:</strong> Cook rice fresh (takes 15-20 minutes in a
            pressure cooker). Prepare 1 fresh poriyal or thoran.
          </li>
          <li>
            <strong>Pre-portion snacks:</strong> Bag 30g portions of mixed nuts.
            Keep dates, peanut butter, and bananas accessible. Prepare ragi
            flour for instant malt.
          </li>
          <li>
            <strong>Post-workout prep:</strong> Keep whey protein, a shaker, and
            bananas at your training location or in your gym bag.
          </li>
        </ul>
      </NoteBlock>

      <h2>Summary</h2>

      <NoteBlock title="Key Takeaways">
        <ol>
          <li>
            South Indian cuisine is naturally conducive to high-calorie eating through
            generous rice portions, coconut-based curries, and ghee/oil additions.
          </li>
          <li>
            The 2,500 kcal plan suits 60-75 kg individuals; the 3,000 kcal plan
            suits 75-95 kg individuals or those with high activity levels.
          </li>
          <li>
            Protein must be deliberately included at every meal — the default South
            Indian meal pattern is carbohydrate-dominant and requires protein
            augmentation for muscle building.
          </li>
          <li>
            Pre-workout: choose easily digestible carb-focused South Indian foods
            (idli, dosa, banana, ragi porridge) 45-90 minutes before training.
          </li>
          <li>
            Post-workout: combine protein (whey, eggs, chicken) with carbohydrates
            (rice, banana, ragi) within 1-2 hours after training.
          </li>
          <li>
            Vegetarians can reach 150-180g protein through doubling dal servings,
            daily paneer, generous curd, soya products, and 1-2 scoops of whey.
          </li>
        </ol>
      </NoteBlock>

      <ReferenceList references={references} />
    </div>
  );
}
