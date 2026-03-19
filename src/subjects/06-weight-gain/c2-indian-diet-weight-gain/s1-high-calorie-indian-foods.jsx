import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';
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

export default function HighCalorieIndianFoods() {
  return (
    <div className="prose-health">
      <h1>High-Calorie Indian Foods for Healthy Weight Gain</h1>

      <p>
        For individuals struggling to gain weight — whether underweight individuals,
        hardgainers, or those recovering from illness — Indian cuisine offers an
        abundance of naturally calorie-dense foods that can significantly boost
        daily energy intake without requiring unreasonable food volumes. The key
        is identifying and strategically incorporating the most calorie-dense
        options while maintaining nutritional quality. This section ranks and
        profiles the best calorie-dense Indian foods with complete nutritional
        information.
      </p>

      <DefinitionBlock term="Caloric Density">
        The number of calories per unit weight (kcal per gram or per 100g) of a
        food. High caloric density foods provide many calories in a small volume,
        making them ideal for individuals who struggle to eat large quantities.
        Fats (9 kcal/g) are the most calorically dense macronutrient, followed
        by carbohydrates and protein (4 kcal/g each). Foods high in fat and/or
        low in water content tend to have the highest caloric density.
      </DefinitionBlock>

      <h2>Top Calorie-Dense Indian Foods Ranked</h2>

      <ComparisonTable
        title="Calorie-Dense Indian Foods: Complete Ranking"
        headers={['Food', 'Calories/100g', 'Protein (g)', 'Fat (g)', 'Carbs (g)', 'Key Benefit']}
        rows={[
          ['Ghee', '900', '0', '100', '0', 'Pure fat, easy to add to any dish'],
          ['Coconut oil', '884', '0', '100', '0', 'MCTs, cooking versatile'],
          ['Almonds (badam)', '576', '21', '50', '22', 'High protein + healthy fats'],
          ['Cashews (kaju)', '553', '18', '44', '30', 'Good fats + minerals'],
          ['Peanuts (moongphali)', '567', '26', '49', '16', 'Highest protein among nuts'],
          ['Walnuts (akhrot)', '654', '15', '65', '14', 'Omega-3 fatty acids'],
          ['Peanut butter', '588', '25', '50', '20', 'Spreadable, easy to consume'],
          ['Sesame seeds (til)', '573', '18', '50', '23', 'Very high calcium'],
          ['Flax seeds (alsi)', '534', '18', '42', '29', 'Omega-3, high fiber'],
          ['Paneer', '265', '18', '21', '1.2', 'Complete protein, versatile'],
          ['Dry dates (kharik)', '282', '2.5', '0.5', '75', 'Quick energy, iron-rich'],
          ['Raisins (kishmish)', '299', '3.1', '0.5', '79', 'Quick energy, iron'],
          ['Paratha (aloo/gobi)', '250-350', '5-7', '12-18', '30-40', 'Calorie-dense flatbread'],
          ['Banana', '89', '1.1', '0.3', '23', 'Quick energy, potassium'],
          ['Full cream milk', '67', '3.2', '3.9', '4.9', 'Complete nutrition, liquid']
        ]}
      />

      <h2>Detailed Profiles of Top Choices</h2>

      <h3>1. Dry Fruits and Nuts</h3>

      <p>
        Nuts and dry fruits are the cornerstone of healthy weight gain in Indian
        diets. They provide a powerful combination of healthy fats, protein,
        fiber, and micronutrients in a compact, shelf-stable form. The challenge
        for most people is not finding nuts but consuming enough of them —
        because they are also highly satiating per calorie.
      </p>

      <NutritionFactBlock
        title="Almonds (Badam) — 30g serving (about 23 almonds)"
        calories={173}
        protein={6.3}
        carbs={6.5}
        fat={15}
        fiber={3.5}
        highlights={[
          'Rich in vitamin E (7.3mg per 30g — 50% of daily value)',
          'Good source of magnesium (76mg per 30g)',
          'Calcium: 76mg per 30g (important for vegetarians)',
          'Monounsaturated fats support cardiovascular health',
          'Soaking overnight increases digestibility and mineral absorption',
          'Almond butter: same nutrition but easier to consume in large quantities'
        ]}
      />

      <NutritionFactBlock
        title="Cashews (Kaju) — 30g serving (about 18 cashews)"
        calories={166}
        protein={5.4}
        carbs={9}
        fat={13.2}
        fiber={1}
        highlights={[
          'Rich in zinc (1.6mg per 30g — supports testosterone and immune function)',
          'Good source of iron (1.9mg per 30g)',
          'Contains copper (0.6mg per 30g — supports collagen synthesis)',
          'Lower fiber than almonds — less satiating, easier to eat more',
          'Versatile in Indian cooking: kaju curry, kaju barfi, cashew milk'
        ]}
      />

      <NutritionFactBlock
        title="Peanuts (Moongphali) — 50g serving"
        calories={284}
        protein={13}
        carbs={8}
        fat={24.5}
        fiber={4.3}
        highlights={[
          'Highest protein content among common nuts (26g per 100g)',
          'Excellent value — cheapest high-calorie nut option in India',
          'Rich in niacin (B3) which supports energy metabolism',
          'Roasted peanuts with jaggery (chikki) — a traditional high-calorie snack',
          'Peanut butter on roti or banana — quick 400+ kcal snack',
          'Groundnut oil for cooking adds calories without changing flavor profile'
        ]}
      />

      <ExampleBlock title="Daily Nut and Dry Fruit Strategy for Weight Gain">
        <ul>
          <li>
            <strong>Morning:</strong> 10 soaked almonds + 5 soaked walnuts with
            breakfast = ~200 kcal, 7g protein
          </li>
          <li>
            <strong>Mid-morning:</strong> Trail mix (15g cashews + 15g raisins + 10g
            peanuts) = ~200 kcal, 5g protein
          </li>
          <li>
            <strong>Post-workout:</strong> 2 tbsp peanut butter + 1 banana smoothie
            with milk = ~350 kcal, 15g protein
          </li>
          <li>
            <strong>Before bed:</strong> 5 dates + 200ml warm milk with turmeric =
            ~250 kcal, 8g protein
          </li>
          <li>
            <strong>Total from nuts/dry fruits alone:</strong> ~1,000 kcal, 35g protein
            — added to regular meals, this easily creates a surplus
          </li>
        </ul>
      </ExampleBlock>

      <h3>2. Ghee</h3>

      <p>
        Ghee (clarified butter) is the single most calorie-dense food in Indian
        cuisine at 900 kcal per 100g (120 kcal per tablespoon). It has been
        central to Indian cooking and Ayurvedic traditions for millennia. For
        weight gain, ghee is invaluable because it can be added to virtually
        any Indian dish — rice, dal, roti, vegetables — adding significant
        calories without substantially changing the volume of food.
      </p>

      <NutritionFactBlock
        title="Ghee — 1 tablespoon (15g)"
        calories={135}
        protein={0}
        carbs={0}
        fat={15}
        fiber={0}
        highlights={[
          'Contains butyric acid — a short-chain fatty acid that supports gut health',
          'Rich in fat-soluble vitamins A, D, E, and K',
          'High smoke point (250°C) — excellent for Indian cooking methods',
          'Virtually lactose-free and casein-free (safe for most dairy-sensitive individuals)',
          'Adding 2 tbsp ghee per day to meals = +270 kcal with zero extra volume',
          'Traditional use: drizzled on dal-rice, applied to hot rotis, in halwa and laddoo'
        ]}
      />

      <NoteBlock title="Strategic Ghee Use for Weight Gain">
        <ul>
          <li>Add 1 tsp ghee to each bowl of dal — barely noticeable but adds 45 kcal</li>
          <li>Apply ghee to hot rotis/chapatis — 1 tsp per roti adds 45 kcal each</li>
          <li>Drizzle 1 tbsp on rice at serving time — adds 135 kcal to the meal</li>
          <li>Use ghee for tempering (tadka) instead of oil — same calories but richer flavor</li>
          <li>Add to morning porridge (oats/ragi) — improves taste and adds density</li>
          <li>Conservative approach: 2-3 tablespoons per day = 270-405 extra kcal</li>
        </ul>
      </NoteBlock>

      <WarningBlock title="Ghee Moderation for Heart Health">
        While ghee is an excellent tool for weight gain, it is predominantly
        saturated fat. Current evidence suggests that moderate ghee intake (2-3
        tablespoons daily) does not increase cardiovascular risk in healthy,
        active individuals, but excessive intake (5+ tablespoons daily) may
        elevate LDL cholesterol in some people. Individuals with existing
        dyslipidemia, familial hypercholesterolemia, or cardiovascular disease
        should consult their physician about appropriate ghee intake. Balance
        ghee with unsaturated fat sources (nuts, seeds, fish) for optimal
        lipid profiles.
      </WarningBlock>

      <h3>3. Peanut Butter</h3>

      <p>
        Peanut butter has become increasingly popular in Indian fitness culture,
        and for good reason. At 588 kcal per 100g with 25g of protein, it is
        one of the most calorie-efficient and protein-rich foods available. Its
        spreadable, mixable nature makes it easy to add to multiple meals and
        snacks throughout the day.
      </p>

      <ExampleBlock title="Peanut Butter Usage Ideas">
        <ul>
          <li>Spread on whole wheat roti or toast — 2 tbsp (32g) = 188 kcal, 8g protein</li>
          <li>Blended into banana-milk smoothie — adds richness and 200 kcal per 2 tbsp</li>
          <li>Mixed into oatmeal/porridge — stir in 1-2 tbsp for a calorie boost</li>
          <li>Eaten directly from jar as a snack — 2 tbsp with banana slices</li>
          <li>Added to ragi malt/porridge for enhanced flavor and calories</li>
          <li>Choose brands with no added sugar — ingredients should be only peanuts and salt</li>
        </ul>
      </ExampleBlock>

      <h3>4. Paneer</h3>

      <NutritionFactBlock
        title="Paneer — 100g serving"
        calories={265}
        protein={18}
        carbs={1.2}
        fat={21}
        fiber={0}
        highlights={[
          'Complete protein with all essential amino acids',
          'Excellent source of calcium (480mg per 100g)',
          'Rich in phosphorus (supports bone and energy metabolism)',
          'Versatile: paneer tikka, paneer bhurji, palak paneer, paneer paratha',
          'Can be eaten raw (cubed in salads) or cooked',
          'One of the best protein sources for Indian vegetarians gaining weight'
        ]}
      />

      <h3>5. Banana-Based Preparations</h3>

      <p>
        Bananas are perhaps the most accessible and affordable calorie-dense fruit
        in India. While a single banana provides a modest 89-105 kcal, banana-based
        preparations — milkshakes, smoothies, and traditional recipes — can deliver
        significantly more.
      </p>

      <ExampleBlock title="High-Calorie Banana Preparations">
        <ul>
          <li>
            <strong>Banana milkshake:</strong> 2 bananas + 300ml full cream milk +
            1 tbsp honey + 1 tbsp peanut butter = ~550 kcal, 18g protein
          </li>
          <li>
            <strong>Banana smoothie with oats:</strong> 1 banana + 200ml milk + 30g
            oats + 10g almonds + 1 scoop whey = ~500 kcal, 35g protein
          </li>
          <li>
            <strong>Kerala pazham pori (banana fry):</strong> ~200 kcal per piece
            (high calorie but lower nutritional quality — occasional use)
          </li>
          <li>
            <strong>Banana with peanut butter:</strong> 1 banana + 2 tbsp peanut
            butter = ~290 kcal, 9g protein — a quick pre-bed snack
          </li>
          <li>
            <strong>Banana in curd:</strong> 1 banana sliced into 150g full-fat curd
            with honey = ~230 kcal, 6g protein
          </li>
        </ul>
      </ExampleBlock>

      <h3>6. Ragi Malt with Milk</h3>

      <p>
        A traditional South Indian preparation that is both nutritious and
        calorie-dense when made with full-cream milk and sweetened with jaggery.
        Ragi (finger millet) provides exceptional calcium content (344mg per 100g),
        making this an excellent choice for vegetarians and anyone needing
        bone-supporting nutrition alongside calories.
      </p>

      <NutritionFactBlock
        title="Ragi Malt with Milk (1 large glass, ~350ml)"
        calories={320}
        protein={10}
        carbs={52}
        fat={8}
        fiber={3}
        highlights={[
          'Ragi flour (30g) + full cream milk (250ml) + jaggery (15g)',
          'Exceptional calcium content: ~250mg per serving',
          'Good source of iron from both ragi and jaggery',
          'Traditional post-workout or bedtime drink in South India',
          'Can be further enriched with 1 tbsp almond powder (+80 kcal)',
          'Add 1 scoop protein powder for a 45g protein muscle-building drink'
        ]}
      />

      <h3>7. Parathas: The Calorie-Dense Flatbread</h3>

      <p>
        While rotis provide approximately 100-120 kcal each, stuffed parathas
        deliver 250-350 kcal per piece due to the fat used in preparation and
        the calorie-dense stuffing. For weight gain, replacing 2 plain rotis
        with 2 stuffed parathas at a meal can add 250-450 extra kcal.
      </p>

      <ComparisonTable
        title="Paratha Varieties: Calorie Comparison"
        headers={['Paratha Type', 'Calories (1 piece)', 'Protein (g)', 'Notes']}
        rows={[
          ['Plain paratha (with ghee)', '200-250', '4-5', 'Layered with ghee during rolling'],
          ['Aloo paratha', '280-350', '5-6', 'Potato stuffing adds carbs and calories'],
          ['Gobi paratha', '250-300', '5-6', 'Lower cal than aloo, more fiber'],
          ['Paneer paratha', '300-380', '10-12', 'Best protein content among parathas'],
          ['Methi paratha', '220-270', '5-6', 'Iron-rich from fenugreek leaves'],
          ['Egg paratha', '280-320', '10-12', 'Egg adds complete protein'],
          ['Mixed dal paratha', '260-310', '8-10', 'Good for vegetarian protein'],
          ['Mooli paratha', '220-270', '4-5', 'Radish adds fiber and vitamins']
        ]}
      />

      <NoteBlock title="Smart Paratha Strategy for Weight Gain">
        Choose paneer or egg parathas for the best protein-to-calorie ratio.
        Serve with a large bowl of curd (adds protein and calcium) and a side of
        pickle for flavor. Two paneer parathas + 150g curd + pickle = approximately
        750-850 kcal and 25-30g protein — an excellent weight-gain breakfast.
      </NoteBlock>

      <h3>8. Traditional Sweets in Moderation</h3>

      <p>
        Indian mithai (sweets) like laddoo, halwa, and barfi are extremely
        calorie-dense, making them tempting choices for weight gain. However,
        most traditional sweets are predominantly sugar and fat with little
        protein or micronutrient value. They should be used strategically
        rather than as primary calorie sources.
      </p>

      <ExampleBlock title="Better Sweet Choices for Weight Gain">
        <ul>
          <li>
            <strong>Besan laddoo:</strong> ~150-180 kcal each. Made from gram flour
            (besan) — provides some protein (4-5g per laddoo). Better than pure
            sugar-based sweets.
          </li>
          <li>
            <strong>Dry fruit laddoo:</strong> Made from dates, nuts, and seeds
            without added sugar. ~120-150 kcal each with 3-4g protein. The best
            sweet option for quality calories.
          </li>
          <li>
            <strong>Ragi halwa:</strong> Made with ragi flour, ghee, jaggery.
            ~200-250 kcal per serving with good calcium and iron.
          </li>
          <li>
            <strong>Avoid as staples:</strong> Gulab jamun (~150 kcal each, pure
            sugar/fat), jalebi (~150 kcal each, deep-fried sugar), rasgulla
            (~120 kcal each, mostly sugar).
          </li>
        </ul>
      </ExampleBlock>

      <h2>Building a High-Calorie Indian Day</h2>

      <ExampleBlock title="Adding 800-1000 Extra Calories Through Strategic Additions">
        <p>
          These additions can be layered onto your existing meals without
          dramatically increasing food volume:
        </p>
        <ul>
          <li><strong>Morning:</strong> 10 almonds + 5 walnuts soaked = +200 kcal</li>
          <li><strong>Add to breakfast:</strong> 1 tbsp ghee on paratha = +135 kcal</li>
          <li><strong>Mid-morning:</strong> Banana + 1 tbsp peanut butter = +200 kcal</li>
          <li><strong>Add to lunch:</strong> 1 tbsp ghee on rice = +135 kcal</li>
          <li><strong>Evening:</strong> Ragi malt with milk = +320 kcal</li>
          <li><strong>Total additions:</strong> ~990 kcal with 25g+ additional protein</li>
        </ul>
        <p>
          These are additions to your regular meals — you still eat breakfast,
          lunch, and dinner as normal. The extra ~1,000 kcal comes from strategic
          calorie-dense additions and snacks.
        </p>
      </ExampleBlock>

      <WarningBlock title="Weight Gain Quality Matters">
        While the goal is to increase calorie intake, the quality of those calories
        affects long-term health, body composition, and how you feel. Prioritize
        calorie-dense whole foods (nuts, ghee, paneer, full-cream dairy, eggs,
        whole grains) over processed calorie sources (chips, biscuits, fried
        snacks, sugary drinks). A 500 kcal surplus from almonds, ghee, and paneer
        supports muscle growth and overall health. A 500 kcal surplus from samosa
        and cola supports mostly fat gain and metabolic dysfunction. The calories
        may be equal, but the outcomes are not.
      </WarningBlock>

      <h2>Summary</h2>

      <NoteBlock title="Key Takeaways">
        <ol>
          <li>
            Nuts and seeds are the most powerful weight-gain foods in Indian cuisine —
            calorie-dense, protein-rich, and nutritionally excellent. Aim for 50-75g
            daily (300-500 kcal).
          </li>
          <li>
            Ghee is the easiest way to add calories without adding volume — 2-3
            tablespoons daily adds 270-405 kcal to your existing meals.
          </li>
          <li>
            Peanut butter is an affordable, protein-rich calorie booster — 2-3
            tablespoons daily provides 200-300 kcal and 8-12g protein.
          </li>
          <li>
            Paneer is the best high-calorie protein source for vegetarians — 100g
            provides 265 kcal and 18g complete protein.
          </li>
          <li>
            Banana-based shakes and smoothies are excellent liquid calorie vehicles —
            one shake can provide 400-600 kcal.
          </li>
          <li>
            Parathas (especially paneer and egg varieties) are calorie-dense
            alternatives to plain rotis for breakfast.
          </li>
          <li>
            Add calorie-dense foods to existing meals rather than trying to eat
            dramatically more food volume.
          </li>
        </ol>
      </NoteBlock>

      <ReferenceList references={references} />
    </div>
  );
}
