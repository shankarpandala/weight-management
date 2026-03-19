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
    authors: 'National Institute of Nutrition (NIN)',
    year: 2017,
    title: 'Indian Food Composition Tables',
    source: 'ICMR-National Institute of Nutrition, Hyderabad',
    type: 'guideline',
  },
  {
    authors: 'Indian Council of Medical Research (ICMR)',
    year: 2020,
    title: 'Dietary Guidelines for Indians — A Manual',
    source: 'National Institute of Nutrition, Hyderabad',
    type: 'guideline',
  },
  {
    authors: 'Misra A, Sharma R, Gulati S, Joshi SR, Sharma V, Ibrahim A, et al.',
    year: 2011,
    title: 'Consensus dietary guidelines for healthy living and prevention of obesity, the metabolic syndrome, diabetes, and related disorders in Asian Indians',
    source: 'Diabetes Technology & Therapeutics, 13(6), 683-694',
    type: 'guideline',
  },
  {
    authors: 'Mohan V, Radhika G, Sathya RM, Tamil SR, Ganesan A, Sudha V',
    year: 2009,
    title: 'Dietary carbohydrates, glycaemic load, food groups and newly detected type 2 diabetes among urban Asian Indian population in Chennai, India (Chennai Urban Rural Epidemiology Study 59)',
    source: 'British Journal of Nutrition, 102(10), 1498-1506',
    type: 'foundational',
  },
  {
    authors: 'Shobana S, Krishnaswamy K, Sudha V, Malleshi NG, Anjana RM, Palaniappan L, Mohan V',
    year: 2013,
    title: 'Finger millet (Ragi, Eleusine coracana L.): a review of its nutritional properties, processing, and plausible health benefits',
    source: 'Advances in Food and Nutrition Research, 69, 1-39',
    type: 'review',
  },
  {
    authors: 'Kasturi Rangan A, Mahajan S',
    year: 2015,
    title: 'Indian millets: a review of nutritional and functional properties',
    source: 'International Journal of Food Science and Technology, 50(9), 2040-2049',
    type: 'review',
  },
  {
    authors: 'Neelakantan N, Narayanan M, de Souza RJ, van Dam RM',
    year: 2014,
    title: 'Effect of fenugreek (Trigonella foenum-graecum L.) intake on glycemia: a meta-analysis of clinical trials',
    source: 'Nutrition Journal, 13, 7',
    type: 'review',
  },
];

export default function IndianDietBellyFat() {
  return (
    <div className="prose-health">
      <h1>Indian Diet Plan for Reducing Belly Fat</h1>

      <p>
        Reducing visceral fat does not require abandoning Indian cuisine — it requires
        strategic modifications within the familiar framework of dal-chawal, roti-sabzi,
        and sambar-rice meals. This section provides a practical, culturally appropriate
        Indian diet plan specifically designed to target visceral fat, based on the evidence
        for soluble fiber, high protein, whole grains, and MUFA-rich fats discussed in the
        previous section.
      </p>

      <h2>Key Dietary Modifications for Indian Meals</h2>

      <h3>1. Replace White Rice with Millets or Brown Rice</h3>

      <p>
        Rice is the centerpiece of South Indian and Eastern Indian meals, often consumed
        2-3 times daily. The glycemic impact of large portions of white rice is one of the
        most significant dietary drivers of visceral fat and diabetes in Indian populations.
      </p>

      <EvidenceBlock
        level="strong"
        title="White Rice Intake Linked to Diabetes Risk in Indians"
        summary="The Chennai Urban Rural Epidemiology Study (CURES-59) by Mohan et al. (2009) found that higher intake of refined grains (primarily white rice) was significantly associated with newly detected type 2 diabetes in urban Chennai adults. Those consuming the highest quartile of refined grain had a 1.98-fold higher risk of diabetes compared to the lowest quartile, after adjusting for total calories, physical activity, and other confounders."
        source="Mohan V et al. British Journal of Nutrition. 2009;102(10):1498-1506."
      />

      <ComparisonTable
        title="Millet Alternatives to White Rice"
        headers={['Millet', 'Regional Name', 'GI', 'Key Advantage for Belly Fat']}
        rows={[
          ['Finger millet (Ragi)', 'Ragi (Kannada), Kezhvaragu (Tamil)', '54-68', 'High calcium (344mg/100g), high fiber, low GI'],
          ['Sorghum (Jowar)', 'Jowar (Hindi), Cholam (Tamil)', '62', 'High protein, resistant starch, gluten-free'],
          ['Pearl millet (Bajra)', 'Bajra (Hindi), Kambu (Tamil)', '55', 'High iron, high fiber, very filling'],
          ['Foxtail millet', 'Kangni (Hindi), Thinai (Tamil)', '50-55', 'Low GI, high mineral content'],
          ['Barnyard millet', 'Sanwa (Hindi), Kuthiraivali (Tamil)', '50', 'Lowest carb content among millets'],
          ['Brown rice', 'Same across regions', '50-55', 'Familiar taste, easier transition from white rice'],
        ]}
      />

      <EvidenceBlock
        level="moderate"
        title="Ragi (Finger Millet) and Metabolic Benefits"
        summary="Shobana et al. (2013) reviewed the evidence for finger millet (ragi) and found it has a lower glycemic index than rice, higher dietary fiber (particularly soluble fiber in the form of beta-glucan), high calcium content (344 mg/100g — among the highest of any cereal), and polyphenols that may inhibit carbohydrate-digesting enzymes. Traditional ragi preparations like ragi mudde and ragi porridge have been staples in Karnataka and Tamil Nadu for centuries."
        source="Shobana S et al. Advances in Food and Nutrition Research. 2013;69:1-39."
      />

      <h3>2. Increase Dal and Sambar Portions</h3>

      <p>
        Indian lentil preparations (dal, sambar, rasam with lentils) are excellent sources of
        both soluble fiber and plant protein — the two nutrients with the strongest evidence
        for visceral fat reduction. The typical Indian meal allocates too little volume to
        dal relative to rice/roti. Reversing this ratio is a powerful strategy.
      </p>

      <ExampleBlock title="The Dal-to-Rice Ratio Reversal">
        <p>
          <strong>Typical pattern (promotes belly fat):</strong> 2 cups rice + 0.5 cup dal
          (rice dominates; high glycemic load; low protein and fiber per meal)
        </p>
        <p>
          <strong>Modified pattern (reduces belly fat):</strong> 0.75 cup brown rice/millet
          + 1.5 cups thick dal or sambar (protein and fiber dominate; lower glycemic load;
          greater satiety)
        </p>
        <p>
          This single modification can reduce the glycemic load of a South Indian meal by
          40-50% while doubling the soluble fiber and protein content — without changing
          the fundamental character of the cuisine.
        </p>
      </ExampleBlock>

      <h3>3. Add Flaxseed and Sabja Seeds</h3>

      <p>
        Ground flaxseed (alsi) and sabja seeds (basil seeds, sometimes called Indian chia)
        are concentrated sources of soluble fiber, omega-3 fatty acids (flaxseed), and
        mucilage that forms a viscous gel in the gut. Adding 1-2 teaspoons to buttermilk,
        curd, or raita at each meal significantly increases soluble fiber intake with
        minimal caloric cost.
      </p>

      <NutritionFactBlock
        title="Ground Flaxseed (Alsi) — per 1 tablespoon (10g)"
        servingSize="1 tbsp (10g)"
        calories={55}
        protein={1.9}
        carbs={3.0}
        fat={4.3}
        fiber={2.8}
        extras={[
          { label: 'Soluble fiber', value: '1.1g' },
          { label: 'Omega-3 (ALA)', value: '2.3g' },
          { label: 'Lignans', value: 'Richest food source' },
          { label: 'Note', value: 'Must be ground; whole seeds pass undigested' },
        ]}
      />

      <h3>4. Use Mustard Oil or Groundnut Oil Instead of Refined Oil</h3>

      <p>
        Refined soybean oil and sunflower oil — the most commonly used cooking oils in urban
        India — are high in omega-6 polyunsaturated fats and low in MUFA. Switching to
        cold-pressed (kachi ghani) mustard oil or groundnut oil increases MUFA intake,
        which evidence from the PREDIMED trial suggests reduces central adiposity.
      </p>

      <p>
        Mustard oil also contains erucic acid (a long-chain MUFA) and allyl isothiocyanate,
        which has anti-inflammatory properties. While concerns about erucic acid toxicity
        exist from historical animal studies, epidemiological evidence from mustard
        oil-consuming populations in India shows no increased cardiovascular risk, and
        moderate consumption (2-3 tablespoons/day) is considered safe.
      </p>

      <h3>5. Include Methi (Fenugreek) Regularly</h3>

      <EvidenceBlock
        level="moderate"
        title="Fenugreek Improves Glycemic Control"
        summary="A meta-analysis by Neelakantan et al. (2014) of 10 clinical trials found that fenugreek seed consumption significantly reduced fasting blood glucose (by -17.9 mg/dL, p<0.001) and improved insulin sensitivity. The soluble fiber (galactomannan) in fenugreek seeds forms a gel that slows carbohydrate absorption and reduces postprandial glucose spikes. Doses of 5-50g of fenugreek seed or 1-2g of fenugreek extract daily were effective."
        source="Neelakantan N et al. Nutrition Journal. 2014;13:7."
      />

      <p>
        Practical ways to include fenugreek in the Indian diet:
      </p>

      <ul>
        <li><strong>Methi paratha:</strong> Add fresh or dried methi leaves to whole wheat dough.</li>
        <li><strong>Methi dal:</strong> Add fenugreek leaves to any dal preparation.</li>
        <li><strong>Soaked methi seeds:</strong> Soak 1 teaspoon overnight and consume on an empty stomach with water.</li>
        <li><strong>Methi powder:</strong> Add to curries, sambar, or buttermilk as a spice.</li>
        <li><strong>Sprouted methi:</strong> Add to salads for a slightly bitter, nutty flavor.</li>
      </ul>

      <h2>Sample 1500 kcal Indian Belly-Fat Reduction Day Plan</h2>

      <MealPlanBlock
        title="1500 kcal Visceral Fat Reduction Plan — South Indian Style"
        totalCalories={1500}
        meals={[
          {
            name: 'Early Morning (6:30 AM)',
            items: [
              'Warm water with 1 tsp soaked methi seeds',
              'Green tea (no sugar, no milk) — 1 cup',
            ],
            calories: 5,
            protein: 0.5,
            notes: 'Methi seeds on empty stomach for glycemic benefit',
          },
          {
            name: 'Breakfast (8:00 AM)',
            items: [
              'Ragi dosa (2 medium) made with ragi flour + urad dal batter',
              'Sambar — 1.5 katori (thick, with drumstick, onion, tomato)',
              'Coconut chutney — 1 tablespoon only',
            ],
            calories: 380,
            protein: 14,
            notes: 'Ragi replaces rice flour; sambar provides soluble fiber and protein',
          },
          {
            name: 'Mid-Morning (10:30 AM)',
            items: [
              'Buttermilk (200 ml) with 1 tsp ground flaxseed + pinch of cumin',
              '1 small guava or apple',
            ],
            calories: 120,
            protein: 4,
            notes: 'Flaxseed adds 1g soluble fiber; fruit adds more',
          },
          {
            name: 'Lunch (1:00 PM)',
            items: [
              'Brown rice or foxtail millet rice — 0.75 katori (cooked)',
              'Dal fry (toor or moong) — 1.5 katori (thick)',
              'Palak/methi sabzi with minimal oil — 1 katori',
              'Cucumber-tomato-onion salad with lemon — 1 katori',
              'Plain curd — 0.5 katori',
            ],
            calories: 450,
            protein: 20,
            notes: 'Note the reversed dal:rice ratio — dal is the star, rice is the side',
          },
          {
            name: 'Evening Snack (4:30 PM)',
            items: [
              'Green tea — 1 cup',
              'Roasted chana (chickpeas) — 30g',
              'Or: 1 small handful mixed nuts (almonds + walnuts) — 15g',
            ],
            calories: 130,
            protein: 7,
            notes: 'High-protein, high-fiber snack; avoids empty calories',
          },
          {
            name: 'Dinner (7:30 PM)',
            items: [
              'Multigrain roti (bajra + jowar + whole wheat atta) — 2 small',
              'Rajma masala or chole — 1 katori',
              'Mixed vegetable sabzi (beans, carrot, capsicum) — 1 katori',
              'Onion-lemon salad',
            ],
            calories: 380,
            protein: 16,
            notes: 'Multigrain roti + legume curry = complete protein + high soluble fiber',
          },
          {
            name: 'Before Bed (9:30 PM)',
            items: [
              '1 tsp isabgol (psyllium husk) in warm water',
            ],
            calories: 15,
            protein: 0,
            notes: 'Adds ~3.5g soluble fiber; aids overnight satiety',
          },
        ]}
      />

      <NoteBlock title="Daily Totals and Targets">
        <ul>
          <li><strong>Total calories:</strong> ~1,480 kcal (suitable for moderate deficit in most adults)</li>
          <li><strong>Total protein:</strong> ~61g (increase with an egg at breakfast or paneer at dinner to reach 70-80g)</li>
          <li><strong>Estimated soluble fiber:</strong> ~12-15g (from dal, flaxseed, isabgol, fruits, oats)</li>
          <li><strong>Refined grains:</strong> Zero</li>
          <li><strong>Added sugar:</strong> Zero</li>
          <li><strong>Cooking oil:</strong> ~3 tablespoons total across all meals (mustard or groundnut oil)</li>
        </ul>
      </NoteBlock>

      <h2>North Indian Variation</h2>

      <ExampleBlock title="Key Swaps for North Indian Meals">
        <ul>
          <li><strong>Breakfast:</strong> Besan chilla (chickpea flour pancake) with green chutney instead of paratha. Or: Dalia (broken wheat) upma with vegetables.</li>
          <li><strong>Lunch:</strong> 2 small whole wheat rotis + thick dal makhani (reduce cream, increase dal) + sabzi + raita with flaxseed.</li>
          <li><strong>Dinner:</strong> Bajra roti + sarson ka saag (mustard greens) + moong dal. Or: Jowar roti + rajma + salad.</li>
          <li><strong>Avoid:</strong> Parathas stuffed with potato (high GI), naan/kulcha (maida), white rice biryani in large quantities, sweets after meals.</li>
        </ul>
      </ExampleBlock>

      <h2>Common Pitfalls in Indian Diets That Promote Belly Fat</h2>

      <WarningBlock title="Hidden Belly Fat Promoters in Indian Eating Patterns">
        <ol>
          <li><strong>Excessive rice portions:</strong> Many South Indians consume 3-4 cups of white rice per meal. This alone can exceed 800 kcal with a very high glycemic load.</li>
          <li><strong>Sugar in tea/coffee:</strong> 2-3 teaspoons per cup, 4-6 cups daily = 40-70g added sugar from beverages alone.</li>
          <li><strong>Deep-fried snacks:</strong> Samosa, vada, bhajji, murukku — all absorbed in refined oil with maida/besan coating.</li>
          <li><strong>Late-night heavy meals:</strong> Eating dinner at 9-10 PM and sleeping by 11 PM leaves insufficient time for digestion.</li>
          <li><strong>Fruit juice instead of whole fruit:</strong> Juicing removes fiber and concentrates fructose — the sugar most linked to visceral fat.</li>
          <li><strong>Skipping protein:</strong> Many vegetarian Indian meals are carb-heavy with minimal protein, promoting insulin spikes.</li>
          <li><strong>Ghee overuse:</strong> While small amounts of ghee are fine, liberal addition (2-3 tsp per roti) adds 200-300 hidden calories per meal.</li>
        </ol>
      </WarningBlock>

      <NoteBlock title="Key Takeaways">
        <ul>
          <li>Replace white rice with millets (ragi, jowar, bajra) or brown rice for every meal.</li>
          <li>Reverse the dal-to-rice ratio: make dal the main portion, rice the side.</li>
          <li>Add ground flaxseed or sabja seeds to buttermilk, curd, or raita daily.</li>
          <li>Use mustard oil or groundnut oil (kachi ghani) instead of refined oils.</li>
          <li>Include methi (fenugreek) regularly for glycemic benefits.</li>
          <li>Follow the 1500 kcal plan or adapt it to your caloric needs.</li>
          <li>Eliminate sugar from tea/coffee and all packaged beverages.</li>
        </ul>
      </NoteBlock>

      <ReferenceList references={references} />
    </div>
  );
}
