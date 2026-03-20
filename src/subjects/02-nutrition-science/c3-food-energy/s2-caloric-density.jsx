import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';
import ComparisonTable from '../../../components/content/ComparisonTable.jsx';
import NutritionFactBlock from '../../../components/content/NutritionFactBlock.jsx';

const references = [
  {
    authors: 'Rolls BJ',
    year: 2009,
    title: 'The relationship between dietary energy density and energy intake',
    source: 'Physiology & Behavior, 97(5), 609-615',
    type: 'review',
  },
  {
    authors: 'Rolls BJ, Ello-Martin JA, Tohill BC',
    year: 2004,
    title: 'What can intervention studies tell us about the relationship between fruit and vegetable consumption and weight management?',
    source: 'Nutrition Reviews, 62(1), 1-17',
    type: 'review',
  },
  {
    authors: 'Bell EA, Castellanos VH, Pelkman CL, Thorwart ML, Rolls BJ',
    year: 1998,
    title: 'Energy density of foods affects energy intake in normal-weight women',
    source: 'American Journal of Clinical Nutrition, 67(3), 412-420',
    type: 'foundational',
  },
  {
    authors: 'Ledikwe JH, Blanck HM, Kettel Khan L, Serdula MK, Seymour JD, Tohill BC, Rolls BJ',
    year: 2006,
    title: 'Dietary energy density is associated with energy intake and weight status in US adults',
    source: 'American Journal of Clinical Nutrition, 83(6), 1362-1368',
    type: 'clinical',
  },
  {
    authors: 'Ello-Martin JA, Roe LS, Ledikwe JH, Beach AM, Rolls BJ',
    year: 2007,
    title: 'Dietary energy density in the treatment of obesity: a year-long trial comparing 2 weight-loss diets',
    source: 'American Journal of Clinical Nutrition, 85(6), 1465-1477',
    type: 'clinical',
  },
  {
    authors: 'Drewnowski A',
    year: 2005,
    title: 'Concept of a nutritious food: toward a nutrient density score',
    source: 'American Journal of Clinical Nutrition, 82(4), 721-732',
    type: 'review',
  },
  {
    authors: 'National Institute of Nutrition (NIN)',
    year: 2020,
    title: 'Dietary Guidelines for Indians - A Manual',
    source: 'Indian Council of Medical Research, Hyderabad',
    type: 'foundational',
  },
];

export default function CaloricDensity() {
  return (
    <div className="prose-health">
      <h1>Caloric Density</h1>

      <p>
        Caloric density (also called energy density) is the number of calories per unit weight
        or volume of food. This concept is central to weight management because extensive
        research demonstrates that people tend to eat a relatively consistent weight and
        volume of food each day, regardless of its caloric content. By shifting the diet
        toward foods with lower caloric density, individuals can eat satisfying portions
        while consuming fewer total calories — the fundamental principle behind the
        "volumetrics" approach to weight management.
      </p>

      <DefinitionBlock
        title="Caloric Density (Energy Density)"
        definition="The amount of energy (calories) per unit weight of food, typically expressed as kilocalories per gram (kcal/g). It is determined primarily by the food's water content, fiber content, and macronutrient composition. Water and fiber add weight and volume with minimal or no calories, lowering energy density. Fat (9 kcal/g) and added sugars increase energy density, while water-rich vegetables and fruits have the lowest energy density."
        notation="Very low energy density: 0-0.6 kcal/g (most fruits and vegetables). Low: 0.6-1.5 kcal/g (cooked grains, legumes, lean meats). Medium: 1.5-4.0 kcal/g (bread, cheese, meat). High: 4.0-9.0 kcal/g (chips, nuts, oils, butter)."
      />

      <h2>The Science of Energy Density</h2>

      <p>
        Research consistently demonstrates that people regulate food intake by weight and
        volume more than by calorie content. When presented with foods of different energy
        densities, people consume similar weights of food but dramatically different numbers
        of calories. This means that the energy density of the diet is a powerful determinant
        of total caloric intake.
      </p>

      <EvidenceBlock
        title="Energy Density Drives Calorie Intake"
        finding="When the energy density of the diet was covertly manipulated (by varying fat and water content while keeping appearance and taste similar), women consumed the same weight of food per day regardless of energy density. This meant they consumed 30% more calories on the high-density diet compared to the low-density diet — a difference of approximately 800 kcal/day — without being aware of the manipulation."
        study="Controlled laboratory study manipulating energy density of the diet over 2-day periods"
        source="Bell et al. (1998) American Journal of Clinical Nutrition"
        details="Normal-weight women were provided with all meals and snacks for 2-day periods at three energy density levels (low, medium, high). Food weight consumed was similar across all conditions (approximately 1.4 kg/day), but total caloric intake was 1570, 2010, and 2370 kcal/day for the low, medium, and high density conditions respectively. The women did not report differences in hunger, fullness, or satisfaction across conditions, demonstrating that energy density manipulation can substantially alter calorie intake without conscious effort or deprivation."
      />

      <EvidenceBlock
        title="Lower Energy Density Diets for Weight Loss"
        finding="Over one year, participants advised to reduce energy density by increasing fruit and vegetable intake (while reducing fat) lost significantly more weight than those simply advised to reduce fat. The reduced-energy-density group lost an average of 7.9 kg compared to 6.4 kg in the reduced-fat-only group, while reporting greater food intake by weight and greater satisfaction."
        study="Year-long randomized controlled trial comparing two dietary strategies for weight loss"
        source="Ello-Martin et al. (2007) American Journal of Clinical Nutrition"
        details="The study enrolled 97 obese women and randomized them to two groups: one was advised to reduce fat intake, while the other was advised to reduce fat AND increase fruit and vegetable consumption (thereby reducing overall dietary energy density). Both groups reduced caloric intake, but the energy density group consumed a larger volume of food (more fruits and vegetables), reported greater satisfaction, and achieved greater weight loss. The findings support the practical strategy of 'adding before subtracting' — increasing low-density foods before restricting high-density foods."
      />

      <h2>Determinants of Energy Density</h2>

      <p>
        Three factors primarily determine a food's energy density: water content, fiber
        content, and fat content. Water is the single most influential factor because it
        adds weight and volume with zero calories.
      </p>

      <ComparisonTable
        title="What Determines Energy Density"
        headers={['Factor', 'Effect on Energy Density', 'Mechanism', 'Example']}
        rows={[
          ['Water content', 'Strongly decreases', 'Adds weight and volume with 0 kcal', 'Cucumber: 0.15 kcal/g (96% water) vs raisin: 3.0 kcal/g (15% water)'],
          ['Fiber content', 'Moderately decreases', 'Adds bulk with minimal calories (~2 kcal/g)', 'Apple with skin: 0.52 kcal/g vs apple juice: 0.46 kcal/g (but no fiber = less satiety)'],
          ['Fat content', 'Strongly increases', 'Fat provides 9 kcal/g — highest of any macronutrient', 'Boiled potato: 0.87 kcal/g vs potato chips: 5.3 kcal/g'],
          ['Sugar content', 'Moderately increases', 'Adds 4 kcal/g, often without water or fiber', 'Fresh orange: 0.47 kcal/g vs orange candy: 3.9 kcal/g'],
          ['Air incorporation', 'Decreases (per volume)', 'Reduces density per volume (not per weight)', 'Puffed rice: low kcal per bowl (large volume, low weight)'],
        ]}
      />

      <h2>Energy Density of Indian Foods</h2>

      <ComparisonTable
        title="Energy Density Spectrum of Indian Foods"
        headers={['Category', 'Food', 'Energy Density (kcal/g)', 'Serving & Calories']}
        rows={[
          ['Very Low (< 0.6)', 'Cucumber/kakdi', '0.15', '100 g = 15 kcal'],
          ['Very Low', 'Lauki (bottle gourd)', '0.15', '100 g = 15 kcal'],
          ['Very Low', 'Tomato', '0.18', '100 g = 18 kcal'],
          ['Very Low', 'Watermelon', '0.30', '100 g = 30 kcal'],
          ['Very Low', 'Papaya', '0.43', '100 g = 43 kcal'],
          ['Low (0.6-1.5)', 'Cooked dal (thin)', '0.70', '1 katori (150 g) = 105 kcal'],
          ['Low', 'Cooked rice', '1.30', '1 katori (150 g) = 195 kcal'],
          ['Low', 'Curd/Dahi', '0.60', '1 katori (200 g) = 120 kcal'],
          ['Medium (1.5-4.0)', 'Roti (whole wheat)', '2.97', '1 roti (33 g) = 98 kcal'],
          ['Medium', 'Paneer', '2.65', '50 g = 133 kcal'],
          ['Medium', 'Chicken curry', '1.50', '150 g = 225 kcal'],
          ['High (> 4.0)', 'Ghee', '9.00', '1 tsp (5 g) = 45 kcal'],
          ['High', 'Groundnuts (roasted)', '5.67', '30 g = 170 kcal'],
          ['High', 'Namkeen/Mixture', '5.00', '30 g = 150 kcal'],
          ['High', 'Gulab jamun', '3.80', '1 piece (40 g) = 152 kcal'],
          ['High', 'Samosa (fried)', '3.10', '1 piece (80 g) = 248 kcal'],
        ]}
      />

      <NutritionFactBlock
        food="Lauki (Bottle Gourd) Sabzi"
        serving="1 katori (150 g cooked with minimal oil)"
        calories={45}
        protein={1}
        carbs={7}
        fat={1.5}
        fiber={2}
        highlights={[
          'Extremely low energy density: 0.30 kcal/g',
          'High water content (92%) provides volume and satiety',
          'One of the best vegetables for weight management',
          'Can eat a large portion for very few calories',
        ]}
      />

      <NutritionFactBlock
        food="Fried Samosa"
        serving="1 piece (80 g)"
        calories={248}
        protein={4}
        carbs={24}
        fat={15}
        fiber={1.5}
        highlights={[
          'High energy density: 3.1 kcal/g due to deep frying',
          'Deep frying doubles the calories compared to baked version',
          'One samosa = same calories as 550 g of lauki sabzi (3.5 katoris)',
          'Low satiety per calorie — easy to eat multiple pieces',
        ]}
      />

      <h2>The Volumetrics Approach</h2>

      <p>
        The volumetrics approach to weight management, developed by nutrition researcher
        Barbara Rolls, is built on the energy density principle. Rather than restricting
        portion sizes or counting calories rigidly, volumetrics emphasizes choosing foods
        with lower energy density so that satisfying portions can be consumed within an
        appropriate caloric target. The approach aligns remarkably well with many traditional
        Indian dietary practices.
      </p>

      <h3>Key Volumetrics Strategies</h3>

      <ul>
        <li>
          <strong>Start meals with low-density foods:</strong> Begin with a clear soup (rasam,
          dal broth), salad (kachumber), or a large serving of sabzi before eating roti or rice.
          Research shows this reduces total meal calorie intake by 12-20%.
        </li>
        <li>
          <strong>Add vegetables to everything:</strong> Mix vegetables into dal, rice dishes
          (vegetable pulao instead of plain rice), parathas (lauki paratha, methi paratha), and
          curries. This increases volume and fiber while diluting caloric density.
        </li>
        <li>
          <strong>Choose water-rich cooking methods:</strong> Steamed, boiled, pressure-cooked,
          and soup-based preparations have lower energy density than fried, roasted, or sauteed
          versions of the same food.
        </li>
        <li>
          <strong>Be mindful of calorie-dense additions:</strong> Ghee, oil, coconut, nuts,
          and cream/malai dramatically increase the energy density of otherwise moderate-calorie
          dishes. Use measured amounts.
        </li>
      </ul>

      <ExampleBlock
        title="Volumetrics in Practice: Indian Meal Makeover"
        description="Traditional thali approach (energy-dense): 2 rotis with ghee (270 kcal) + dal fry (180 kcal) + aloo gobi with generous oil (200 kcal) + rice (200 kcal) + pickle + sweet (gulab jamun, 150 kcal). Total: ~1000 kcal. Volumetrics-optimized thali: large kachumber salad to start (30 kcal) + 1.5 rotis without ghee (150 kcal) + dal with palak/lauki (120 kcal) + mixed vegetable sabzi (bhindi, beans, tori) with 1 tsp oil (80 kcal) + small serving rice (100 kcal) + raita (60 kcal) + fresh fruit (papaya, 50 kcal). Total: ~590 kcal. The optimized thali provides more food volume, greater variety, better micronutrient density, and 40% fewer calories."
      />

      <h2>Nutrient Density vs Caloric Density</h2>

      <p>
        While caloric density tells us how many calories a food provides per gram, nutrient
        density tells us how many essential nutrients (vitamins, minerals, protein, fiber) it
        provides per calorie. The ideal weight management food is one with low caloric density
        and high nutrient density — providing maximal nutrition with minimal calories.
      </p>

      <ComparisonTable
        title="Nutrient Density vs Caloric Density"
        headers={['Food', 'Caloric Density', 'Nutrient Density', 'Weight Management Value']}
        rows={[
          ['Leafy greens (palak, methi)', 'Very low', 'Very high', 'Excellent — eat freely'],
          ['Fruits (papaya, guava)', 'Very low', 'High', 'Excellent — nutrient-rich, hydrating'],
          ['Dal / legumes', 'Low', 'High', 'Very good — protein, fiber, minerals'],
          ['Curd / dahi', 'Low', 'High', 'Very good — protein, calcium, probiotics'],
          ['Eggs', 'Medium', 'Very high', 'Good — exceptional nutrient per calorie ratio'],
          ['Nuts / seeds', 'High', 'Very high', 'Good in small portions — calorie-dense but nutrient-rich'],
          ['Soft drinks / juice', 'Low (liquid)', 'Very low', 'Poor — calories without nutrients or satiety'],
          ['Mithai / sweets', 'High', 'Low', 'Poor — high calories, low nutrients'],
        ]}
      />

      <NoteBlock
        title="Liquid Calories: A Special Case"
        content="Liquid calories (from sweetened beverages, fruit juices, sweetened lassi, chai with sugar) are a particularly problematic form of energy-dense consumption. Despite contributing significant calories (a glass of mango shake: 200-300 kcal; sweetened lassi: 150-200 kcal; 3 cups of chai with 2 tsp sugar each: 100-150 kcal), liquids produce very little satiety compared to solid foods of equal calories. Studies consistently show that calorie-containing beverages do not lead to compensatory reductions in food intake. Switching from sugared beverages to water, unsweetened chai, or black coffee is one of the simplest and most impactful changes for weight management."
      />

      <WarningBlock
        title="Caloric Density Traps in Indian Diets"
        content="Several common Indian dietary habits dramatically increase caloric density: (1) Generous use of ghee/oil — a tablespoon of ghee on roti adds 120 kcal and converts a 100-kcal roti into a 220-kcal item. (2) Deep frying — transforms low-density potatoes (0.87 kcal/g) into high-density chips (5.3 kcal/g). (3) Sugar in chai — 3-4 cups daily with 2 teaspoons each adds 100-150 'invisible' calories. (4) After-meal sweets — even 'just one piece' of mithai adds 150-300 kcal. (5) Dry snacks (namkeen, chakli, sev) — extremely high density (4-5 kcal/g) and easy to overeat. Awareness of these density traps allows targeted, high-impact changes without overhauling the entire diet."
      />

      <h2>Key Takeaways</h2>

      <ul>
        <li>
          Caloric density (kcal/g) is a powerful predictor of total caloric intake because
          people eat a relatively consistent weight of food each day. Lower-density diets
          lead to lower caloric intake without reducing food volume or satisfaction.
        </li>
        <li>
          Water content is the primary determinant of energy density. Vegetables, fruits,
          soups, and dal are naturally low-density; oils, nuts, fried foods, and sweets are
          high-density.
        </li>
        <li>
          The volumetrics strategy — starting meals with low-density foods, adding vegetables
          to dishes, and choosing water-rich preparations — can reduce meal calories by 20-30%
          without reducing satisfaction.
        </li>
        <li>
          Indian cuisine offers abundant low-density options (sabzi, dal, raita, salad, rasam)
          that should form the volumetric foundation of weight management meals.
        </li>
        <li>
          Liquid calories are a special concern — they add significant calories without producing
          proportional satiety. Replace sugared beverages with water or unsweetened options.
        </li>
        <li>
          The ideal weight management food has low caloric density AND high nutrient density —
          providing the most nutrition per calorie.
        </li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
