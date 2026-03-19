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
    id: 'nin2011',
    authors: 'National Institute of Nutrition (NIN)',
    year: 2011,
    title: 'Dietary Guidelines for Indians — A Manual',
    journal: 'National Institute of Nutrition, ICMR, Hyderabad',
    pages: '2nd Edition'
  },
  {
    id: 'icmr2020',
    authors: 'Indian Council of Medical Research (ICMR)',
    year: 2020,
    title: 'Nutrient Requirements and Recommended Dietary Allowances for Indians',
    journal: 'National Institute of Nutrition, Hyderabad'
  }
];

const southIndianPlan = {
  title: '1,500 kcal South Indian Weight-Loss Day Plan',
  description: 'A complete day of traditional South Indian meals modified for weight loss. Maintains authentic flavors while controlling calories through portion adjustment, oil reduction, and strategic ingredient swaps.',
  totalCalories: 1500,
  macros: { protein: 110, carbs: 155, fat: 48 },
  meals: [
    {
      name: 'Breakfast (7:00-8:00 AM)',
      calories: 320,
      items: [
        'Steamed idli — 3 medium (made with regular rice-urad batter)',
        'Sambar — 1 katori (150ml) — loaded with vegetables (drumstick, carrot, brinjal)',
        'Coconut chutney — 1 tablespoon only (not 3-4 tbsp)',
        'OR Ragi dosa — 2 medium (made with ragi flour + urad dal batter, 1 tsp oil total)',
        'Filter coffee or tea — 1 cup (100ml toned milk, minimal sugar or sugar-free)'
      ]
    },
    {
      name: 'Mid-Morning Snack (10:30 AM)',
      calories: 120,
      items: [
        'Buttermilk (neer mor) — 200ml with curry leaves and ginger',
        'Sundal (boiled chana/peas) — 50g with coconut shavings (1 tsp)',
        'OR Sprouted horse gram (kollu) — 40g with lemon and salt'
      ]
    },
    {
      name: 'Lunch (12:30-1:30 PM)',
      calories: 490,
      items: [
        'Rice — 100g cooked (reduced portion — about 2/3 katori)',
        'Sambar — 1 large katori (200ml) with drumstick, brinjal, onion',
        'Rasam — 1 katori (unlimited — very low calorie at ~30 kcal)',
        'Kootu (vegetable + dal stew) — 1 katori (snake gourd or chayote)',
        'Poriyal (dry vegetable stir-fry) — 1 katori beans/cabbage (1 tsp oil)',
        'Curd rice — small portion (50g rice + 75g curd) OR plain curd',
        'Pickle — 1 tsp (for flavor)',
        'Appalam — skip or 1 small piece (unfried, microwave-roasted)'
      ]
    },
    {
      name: 'Evening Snack (4:00-4:30 PM)',
      calories: 140,
      items: [
        'Roasted peanuts — 20g with jaggery (5g)',
        'Kanji (ragi porridge) — small cup (150ml) made with water + 50ml milk',
        'OR Vazhaipoo (banana flower) vadai — 1 piece (pan-fried, not deep-fried)'
      ]
    },
    {
      name: 'Dinner (7:00-8:00 PM)',
      calories: 430,
      items: [
        'Ragi mudde — 1 medium ball (made from 40g ragi flour)',
        'OR Chapati — 2 medium',
        'OR Oats dosa — 2 medium (1 tsp oil total)',
        'Egg curry — 2 boiled eggs in light tomato-onion gravy (1 tsp oil)',
        'OR Fish curry (meen kuzhambu) — 100g seer fish or sardine in tamarind gravy',
        'OR Paneer stir-fry — 60g with capsicum and onion',
        'Greens thoran — 1 katori (spinach/drumstick leaves with minimal coconut)',
        'Rasam — 1 cup'
      ]
    }
  ]
};

export default function SouthIndianModifications() {
  return (
    <div className="prose-health">
      <h1>South Indian Diet Modifications for Weight Loss</h1>

      <p>
        South Indian cuisine — with its emphasis on rice, coconut, fermented batters,
        and oil-based preparations — presents unique challenges for weight management.
        However, this cuisine also offers extraordinary advantages: fermented foods
        (idli, dosa) with improved nutrient bioavailability, protein-rich lentil-based
        dishes (sambar, rasam, kootu), and a rich tradition of millets (ragi, kambu,
        thinai) that predates the modern health food movement. The key is not
        abandoning South Indian food but adapting preparation methods and portion
        sizes to create a caloric deficit.
      </p>

      <h2>Calorie Profiles of Common South Indian Foods</h2>

      <ComparisonTable
        title="Calorie Content: Standard vs. Modified Preparations"
        headers={['Food Item', 'Standard Prep (kcal)', 'Modified Prep (kcal)', 'Savings']}
        rows={[
          ['Rice dosa (1 large)', '180-220', '120-140 (less oil, thinner)', '60-80 kcal'],
          ['Masala dosa', '350-450', '200-250 (less potato, minimal oil)', '150-200 kcal'],
          ['Idli (1 piece)', '55-65', '55-65 (already low-cal)', '0 kcal'],
          ['Coconut chutney (3 tbsp)', '90-120', '30-40 (1 tbsp only)', '60-80 kcal'],
          ['Sambar (1 katori)', '100-130', '80-100 (less oil in tempering)', '20-30 kcal'],
          ['Vada (1 piece, deep-fried)', '170-200', '90-110 (pan-fried/air-fried)', '80-90 kcal'],
          ['Rice (1 full plate)', '350-450', '150-200 (half portion)', '200-250 kcal'],
          ['Poriyal with coconut', '100-140', '70-90 (less coconut, less oil)', '30-50 kcal'],
          ['Payasam (1 serving)', '250-350', 'Skip or 2-3 tbsp (50-75)', '200-275 kcal'],
          ['Curd rice (full bowl)', '280-350', '150-180 (half rice)', '130-170 kcal']
        ]}
      />

      <h2>Making Dosa Weight-Loss Friendly</h2>

      <p>
        Dosa is one of the most popular South Indian breakfast items but can range
        from 120 kcal (thin, minimal oil) to over 400 kcal (thick, ghee-roasted
        masala dosa) depending on preparation. The batter itself is relatively
        moderate in calories — the oil used during cooking is the primary concern.
      </p>

      <h3>Dosa Modifications</h3>

      <ExampleBlock title="Low-Calorie Dosa Strategies">
        <ul>
          <li>
            <strong>Oil reduction:</strong> Use a well-seasoned iron tawa or non-stick
            pan. Apply oil with a paper towel wipe rather than pouring — this reduces
            oil from 2-3 tsp per dosa to under 0.5 tsp, saving 80-100 kcal per dosa.
          </li>
          <li>
            <strong>Oats dosa:</strong> Replace half the rice in the batter with rolled
            oats. This increases fiber content, reduces glycemic index, and adds a
            slightly nutty flavor. Calories remain similar but satiety improves.
          </li>
          <li>
            <strong>Ragi dosa:</strong> Made with 50% ragi (finger millet) flour and
            50% urad dal. Significantly higher in calcium (344mg per 100g ragi vs
            10mg per 100g rice) and fiber. Darker color and earthier flavor.
          </li>
          <li>
            <strong>Moong dal dosa (pesarattu):</strong> Made primarily with whole
            green moong dal — an Andhra specialty that is naturally higher in protein
            (~24g per 100g dry moong) and fiber. One of the best dosa options for
            weight loss.
          </li>
          <li>
            <strong>Skip the ghee roast:</strong> Ghee-roasted dosa adds 100-150 kcal
            of pure fat. Request or make dosa without ghee roasting.
          </li>
          <li>
            <strong>Stuff with vegetables, not potato:</strong> Replace the traditional
            potato masala (150-200 kcal per serving) with a lower-calorie vegetable
            filling — sauteed capsicum, onion, carrot, and beans (~60-80 kcal).
          </li>
        </ul>
      </ExampleBlock>

      <h2>Steamed Idli: The Best South Indian Breakfast for Weight Loss</h2>

      <p>
        The humble idli is arguably the single best traditional Indian breakfast food
        for weight loss. At approximately 55-65 kcal per medium idli, with 2g of
        protein and minimal fat (since it is steamed, not fried or oiled), idli
        provides a low-calorie, easily digestible, fermented food that pairs
        perfectly with protein-rich sambar.
      </p>

      <NutritionFactBlock
        title="Steamed Idli (1 medium, ~40g)"
        calories={58}
        protein={2}
        carbs={11}
        fat={0.4}
        fiber={0.8}
        highlights={[
          'Fermentation increases B-vitamin content and improves mineral bioavailability',
          'Very low fat since steaming requires no oil',
          'Good source of easily digestible carbohydrates',
          'Pair 3 idlis + 1 bowl sambar for a 250 kcal, 12g protein breakfast',
          'Ragi idli variant adds calcium and iron significantly'
        ]}
      />

      <NoteBlock title="Maximizing the Idli Meal">
        Three idlis alone provide only about 6g protein — insufficient for a weight
        loss breakfast. The key is generous sambar (which adds dal protein), a side
        of curd (4g protein per 100g), or egg accompaniments. Avoid drowning idlis
        in coconut chutney — limit to 1 tablespoon (about 30-40 kcal) and rely on
        sambar for moisture and flavor instead.
      </NoteBlock>

      <h2>Reducing Rice Portions Without Feeling Deprived</h2>

      <p>
        For many South Indians, a meal without rice feels incomplete. The goal is
        not to eliminate rice but to reduce the portion while increasing the
        accompaniments that provide satiety with fewer calories.
      </p>

      <ExampleBlock title="The Rice Reduction Strategy">
        <ul>
          <li>
            <strong>Week 1-2:</strong> Reduce from your current serving to 3/4 of
            that amount. Increase sambar and poriyal portions to compensate volume.
          </li>
          <li>
            <strong>Week 3-4:</strong> Reduce to 1/2 of your original rice portion.
            Add a second vegetable dish (kootu or thoran).
          </li>
          <li>
            <strong>Ongoing:</strong> Maintain at approximately 100-150g cooked rice
            per meal (roughly 2/3 to 1 katori). This provides 130-195 kcal from
            rice alone.
          </li>
          <li>
            <strong>The sambar trick:</strong> Eat sambar first (with extra vegetables),
            then rasam, then proceed to rice. You will naturally eat less rice when
            you start with the more filling, lower-calorie dishes.
          </li>
          <li>
            <strong>Curd rice replacement:</strong> Instead of a full bowl of curd
            rice as a meal closer, have a small portion (50g rice + 75g curd) or
            simply end with a bowl of plain curd.
          </li>
        </ul>
      </ExampleBlock>

      <h2>Managing Coconut Chutney</h2>

      <p>
        Coconut chutney is calorically dense due to the fat content of coconut.
        Fresh coconut contains approximately 354 kcal per 100g, and a typical
        generous serving of chutney (3-4 tablespoons) can add 90-150 kcal to a
        breakfast that might otherwise be quite moderate in calories.
      </p>

      <h3>Lower-Calorie Chutney Alternatives</h3>

      <ul>
        <li>
          <strong>Limit coconut chutney to 1 tablespoon</strong> — use as a flavor
          accent, not a dipping sauce.
        </li>
        <li>
          <strong>Tomato chutney:</strong> Made with tomatoes, red chilies, and
          minimal oil — approximately 25-30 kcal per tablespoon vs 35-40 kcal
          for coconut chutney.
        </li>
        <li>
          <strong>Mint-coriander chutney:</strong> Very low calorie (15-20 kcal per
          tablespoon) and full of flavor from herbs, green chili, and lemon.
        </li>
        <li>
          <strong>Onion chutney (vengaya chutney):</strong> Made with roasted onions
          and red chili — approximately 20-25 kcal per tablespoon.
        </li>
        <li>
          <strong>Peanut chutney:</strong> While calorically similar to coconut,
          peanut chutney provides more protein (about 3g per tablespoon) making
          it a better choice for satiety.
        </li>
      </ul>

      <h2>Vegetable-Heavy Kootu and Poriyal</h2>

      <p>
        Kootu (vegetable-lentil stew) and poriyal (dry vegetable stir-fry) are
        the unsung heroes of South Indian weight-loss eating. These dishes provide
        volume, fiber, and micronutrients with relatively few calories, especially
        when prepared with controlled oil.
      </p>

      <ExampleBlock title="Best Vegetables for Low-Calorie South Indian Cooking">
        <ul>
          <li>
            <strong>Snake gourd (pudalangai):</strong> Only 17 kcal per 100g —
            excellent in kootu with moong dal
          </li>
          <li>
            <strong>Ridge gourd (peerkangai):</strong> 20 kcal per 100g — perfect
            for poriyal or thogayal
          </li>
          <li>
            <strong>Bottle gourd (sorakkai):</strong> 15 kcal per 100g — works
            beautifully in sambar and kootu
          </li>
          <li>
            <strong>Drumstick (murungakkai):</strong> 26 kcal per 100g — rich in
            vitamins and calcium, a sambar staple
          </li>
          <li>
            <strong>Cluster beans (kothavarangai):</strong> 31 kcal per 100g —
            excellent poriyal, high in fiber
          </li>
          <li>
            <strong>Ash gourd (poosanikai):</strong> 10 kcal per 100g — one of the
            lowest-calorie vegetables available, excellent in kootu
          </li>
          <li>
            <strong>Drumstick leaves (murungai keerai):</strong> Extremely nutrient-dense.
            92 kcal per 100g but packed with protein (6.7g), calcium, and iron.
          </li>
        </ul>
      </ExampleBlock>

      <NoteBlock title="Kootu Recipe Principle for Weight Loss">
        The ideal weight-loss kootu formula: 70% vegetables + 20% cooked dal
        (moong or toor) + 10% coconut paste (minimal). Temper with 1 tsp
        coconut oil, mustard seeds, curry leaves, and dried red chili. This
        creates a filling, protein-enhanced dish at approximately 80-120 kcal
        per katori. Make 2 katoris — one to accompany rice, one to eat as a
        standalone side dish.
      </NoteBlock>

      <h2>Complete 1,500 kcal South Indian Day Plan</h2>

      <MealPlanBlock plan={southIndianPlan} />

      <h2>Eating Out: South Indian Restaurant Strategies</h2>

      <ExampleBlock title="Best and Worst Restaurant Choices">
        <p><strong>Best choices (under 300 kcal per serving):</strong></p>
        <ul>
          <li>Idli + sambar (3 idlis = ~250 kcal with sambar)</li>
          <li>Plain dosa with sambar (request minimal oil) — ~200 kcal</li>
          <li>Pesarattu (moong dal dosa) — ~180 kcal</li>
          <li>Idiyappam (string hoppers) with vegetable stew — ~280 kcal</li>
          <li>Rasam rice (small portion rice + unlimited rasam) — ~250 kcal</li>
          <li>Appam with vegetable stew — ~220 kcal per appam + stew</li>
        </ul>
        <p><strong>Worst choices (over 500 kcal per serving):</strong></p>
        <ul>
          <li>Ghee roast masala dosa — 500-650 kcal</li>
          <li>Rava masala dosa — 450-550 kcal</li>
          <li>Vada (deep-fried, 2 pieces) — 350-400 kcal</li>
          <li>Pongal with ghee — 400-500 kcal</li>
          <li>Bisi bele bath (restaurant portion) — 500-600 kcal</li>
          <li>Full meals/thali with unlimited rice — 800-1200 kcal</li>
        </ul>
      </ExampleBlock>

      <WarningBlock title="Restaurant Calorie Inflation">
        Restaurant South Indian food typically contains 2-3 times more oil, ghee,
        and coconut than home-cooked versions. A restaurant sambar may use 2-3
        tablespoons of oil for tempering versus 1 teaspoon at home. When eating
        out, assume calories are 40-60% higher than home-cooked equivalents and
        adjust portions accordingly. Request "less oil" whenever possible, and
        choose steamed items (idli, puttu) over fried items (vada, bonda).
      </WarningBlock>

      <h2>Millet Revival: Traditional Grains for Modern Weight Loss</h2>

      <p>
        South India has a rich tradition of millet consumption that declined with
        the Green Revolution's emphasis on rice and wheat. Reintroducing millets
        offers superior nutritional profiles for weight loss: higher fiber, higher
        protein, more minerals, and lower glycemic index compared to polished rice.
      </p>

      <ComparisonTable
        title="Millets vs. Rice: Nutritional Comparison (per 100g dry)"
        headers={['Grain', 'Calories', 'Protein (g)', 'Fiber (g)', 'Calcium (mg)', 'Iron (mg)']}
        rows={[
          ['Polished rice', '356', '6.8', '0.2', '10', '0.7'],
          ['Ragi (finger millet)', '328', '7.3', '3.6', '344', '3.9'],
          ['Bajra (pearl millet)', '361', '11.6', '1.2', '42', '8.0'],
          ['Jowar (sorghum)', '349', '10.4', '1.6', '25', '4.1'],
          ['Foxtail millet (thinai)', '351', '12.3', '8.0', '31', '2.8'],
          ['Little millet (samai)', '341', '7.7', '7.6', '17', '9.3'],
          ['Barnyard millet (kuthiraivali)', '307', '6.2', '10.1', '20', '5.0']
        ]}
      />

      <NoteBlock title="Easy Millet Swaps">
        <ul>
          <li>Replace rice with barnyard millet (kuthiraivali) for sambar rice — fewer
            calories and 50 times more fiber</li>
          <li>Use ragi flour for dosa, idli, and mudde — dramatically higher calcium</li>
          <li>Try foxtail millet (thinai) pongal as a high-protein alternative to
            rice pongal</li>
          <li>Cook little millet (samai) exactly like rice — similar texture with
            better nutrition</li>
          <li>Start with 50:50 millet-rice blend if the family resists full replacement</li>
        </ul>
      </NoteBlock>

      <ReferenceList references={references} />
    </div>
  );
}
