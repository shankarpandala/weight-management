import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import NutritionFactBlock from '../../../components/content/NutritionFactBlock.jsx';
import ComparisonTable from '../../../components/content/ComparisonTable.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

export default function ICMRGuidelines() {
  return (
    <div className="prose-health">
      <h1>ICMR Dietary Guidelines &amp; RDA for Indians</h1>

      <p>
        The Indian Council of Medical Research — National Institute of Nutrition (ICMR-NIN) sets
        the official Recommended Dietary Allowances (RDA) and dietary guidelines for the Indian
        population. These evidence-based recommendations account for the unique dietary patterns,
        food availability, nutrient deficiency profiles, and disease burden of India. Understanding
        these guidelines — and where typical Indian diets fall short — is essential for designing
        effective nutrition strategies.
      </p>

      <DefinitionBlock
        term="Recommended Dietary Allowance (RDA)"
        definition="The average daily dietary intake level sufficient to meet the nutrient requirements of 97-98% of healthy individuals in a particular age and gender group. RDA values are set higher than the Estimated Average Requirement (EAR) to provide a safety margin. India's RDAs, set by ICMR-NIN, differ from US/WHO values due to differences in body size, dietary patterns, nutrient bioavailability, and genetic factors."
      />

      <DefinitionBlock
        term="My Plate for India"
        definition="A visual dietary guidance tool developed by ICMR-NIN, analogous to the USDA MyPlate. It divides the plate into recommended proportions of food groups: cereals/millets, pulses/protein foods, vegetables, fruits, and dairy. It was introduced as part of the 2024 updated Dietary Guidelines for Indians to simplify nutritional messaging for the general public."
      />

      {/* ============ RDA TABLE ============ */}
      <h2>ICMR-NIN 2020 Recommended Dietary Allowances</h2>

      <ComparisonTable
        title="Key RDA Values — Sedentary Adult (ICMR-NIN 2020)"
        headers={['Nutrient', 'Adult Male', 'Adult Female', 'Pregnant Female', 'Lactating Female']}
        rows={[
          ['Energy (kcal/day)', '2110', '1660', '1860 (+200)', '1960 (+300)'],
          ['Protein (g/day)', '54', '46', '56 (+10)', '62 (+16)'],
          ['Fat (g/day)', 'Visible fat: 25-30g', 'Visible fat: 20-25g', '30g', '30g'],
          ['Calcium (mg/day)', '1000', '1000', '1200', '1200'],
          ['Iron (mg/day)', '19', '29', '27', '23'],
          ['Zinc (mg/day)', '14', '11', '12', '14'],
          ['Vitamin A (mcg/day)', '1000', '840', '900', '950'],
          ['Vitamin C (mg/day)', '80', '65', '80', '115'],
          ['Folate (mcg DFE/day)', '300', '220', '500', '300'],
          ['Vitamin B12 (mcg/day)', '2.2', '2.2', '2.6', '2.8'],
          ['Vitamin D (IU/day)', '600', '600', '600', '600'],
          ['Fiber (g/day)', '30-40', '25-30', '28-30', '28-30'],
        ]}
      />

      <NoteBlock title="ICMR vs international RDA differences">
        Indian RDAs for protein are lower than US values (0.8-1.0 g/kg in India vs 0.8 g/kg
        base in the US, but the US applies to higher body weights). Indian iron RDAs for women
        are higher (29 mg vs 18 mg in US) because Indian vegetarian diets provide only
        non-heme iron, which has 5-12% absorption compared to 15-35% for heme iron from meat.
        Calcium RDA was recently increased to 1000 mg (from 600 mg) in the 2020 update,
        recognizing widespread deficiency. Vitamin D RDA remains at 600 IU despite evidence
        suggesting 1000-2000 IU may be needed given India's paradoxical widespread vitamin D
        deficiency despite tropical sun exposure.
      </NoteBlock>

      {/* ============ MY PLATE FOR INDIA ============ */}
      <h2>My Plate for India — Recommended Servings</h2>

      <ComparisonTable
        title="ICMR-NIN Recommended Daily Servings (Sedentary Adult)"
        headers={['Food Group', 'Recommended Servings', 'Serving Size', 'Daily Amount', 'Key Nutrients Provided']}
        rows={[
          ['Cereals & Millets', '6-8 servings', '30g raw / 1 roti / ¾ cup cooked rice', '180-240g raw', 'Energy, B vitamins, fiber (if whole grain)'],
          ['Pulses & Legumes', '2-3 servings', '30g raw dal', '60-90g raw', 'Protein, iron, folate, fiber'],
          ['Vegetables', '4-5 servings', '100g (1 cup raw / ½ cup cooked)', '400-500g', 'Vitamins, minerals, fiber, antioxidants'],
          ['Green leafy vegetables', '1 serving (within above)', '100g', '100g', 'Iron, calcium, folate, vitamin A'],
          ['Fruits', '2 servings', '100g (1 medium fruit)', '200g', 'Vitamin C, potassium, fiber'],
          ['Milk & Dairy', '3 servings', '100ml milk / 100g curd / 25g paneer', '300ml equivalent', 'Calcium, protein, B12, riboflavin'],
          ['Fats & Oils', '4-6 tsp (visible fat)', '5g (1 tsp)', '20-30g', 'Essential fatty acids, fat-soluble vitamin absorption'],
          ['Nuts & Seeds', '1 serving', '20-30g', '20-30g', 'Healthy fats, protein, vitamin E, minerals'],
          ['Sugar', 'Limit', '—', '<20-25g added sugar', 'Empty calories — minimize'],
          ['Salt', 'Limit', '—', '<5g/day', 'Sodium — limit for blood pressure'],
        ]}
      />

      {/* ============ WHERE INDIANS FALL SHORT ============ */}
      <h2>Where Indian Diets Typically Fall Short</h2>

      <p>
        Despite India's rich food traditions, national nutrition surveys consistently reveal
        significant gaps between recommended and actual dietary intake. The National Nutrition
        Monitoring Bureau (NNMB) data and the National Family Health Survey (NFHS) paint a
        concerning picture.
      </p>

      <ComparisonTable
        title="ICMR Recommended Intake vs Typical Indian Intake"
        headers={['Food Group', 'ICMR Recommended', 'Typical Indian Intake', 'Gap', 'Health Consequence']}
        rows={[
          ['Cereals', '180-240g/day', '350-450g/day', '60-90% excess', 'Excess carbohydrates, calorie surplus'],
          ['Pulses/Legumes', '60-90g/day', '30-40g/day', '50-60% deficit', 'Protein deficiency, low iron/folate'],
          ['Vegetables', '400-500g/day', '150-200g/day', '60-70% deficit', 'Vitamin/mineral deficiency'],
          ['Green leafy veg', '100g/day', '20-40g/day', '60-80% deficit', 'Iron, folate, calcium deficiency'],
          ['Fruits', '200g/day', '40-80g/day', '60-80% deficit', 'Vitamin C, potassium deficiency'],
          ['Milk & Dairy', '300ml/day', '100-150ml/day', '50-67% deficit', 'Calcium, B12, protein deficiency'],
          ['Fats (visible)', '20-30g/day', '30-50g/day', '25-65% excess', 'Excess calories, dyslipidemia'],
          ['Sugar', '<20-25g/day', '35-60g/day', '40-140% excess', 'Obesity, diabetes, dental caries'],
          ['Salt', '<5g/day', '8-12g/day', '60-140% excess', 'Hypertension, cardiovascular disease'],
        ]}
      />

      <EvidenceBlock
        level="strong"
        title="The cereal-dominant, protein-deficient Indian diet"
      >
        NNMB data consistently shows that cereals contribute 60-75% of total energy intake in
        Indian diets (recommended: 45-55%), while protein-rich foods (pulses, dairy, eggs, meat)
        contribute only 7-10% (recommended: 15-20%). This cereal-heavy pattern results in
        adequate calorie intake but inadequate protein, vitamin, and mineral intake — a pattern
        described as "hidden hunger." The 2024 ICMR Dietary Guidelines specifically emphasize
        reducing cereal dependence and increasing pulse, vegetable, and dairy consumption as
        the single most important dietary shift for the Indian population (ICMR-NIN, 2024;
        NNMB data).
      </EvidenceBlock>

      <WarningBlock title="India's micronutrient deficiency crisis">
        Despite adequate or excess caloric intake for many, India faces widespread micronutrient
        deficiencies: iron-deficiency anemia affects 53% of women and 23% of men; vitamin D
        deficiency affects 70-90% of the population across all regions; B12 deficiency affects
        47% of the population (higher among vegetarians at 60-80%); calcium intake is 50-60%
        of the RDA for most Indians; zinc deficiency affects an estimated 25-30% of the
        population. These "hidden hungers" persist because the diet is dominated by polished
        cereals (low in micronutrients) with insufficient vegetables, fruits, dairy, and
        diverse protein sources.
      </WarningBlock>

      {/* ============ 2024 UPDATED GUIDELINES ============ */}
      <h2>The 2024 Updated Dietary Guidelines</h2>

      <p>
        The ICMR-NIN 2024 Dietary Guidelines for Indians represent the most comprehensive
        revision in a decade, incorporating new evidence on ultra-processed foods, millets,
        protein requirements, and the Indian metabolic phenotype.
      </p>

      <ExampleBlock title="Key 2024 guideline highlights">
        <ul>
          <li><strong>Minimum 400g vegetables + fruits daily:</strong> Emphasis on diversity, with at least 100g green leafy vegetables</li>
          <li><strong>Protein at every meal:</strong> At least one protein-rich food (dal, dairy, egg, meat) at each of the three main meals</li>
          <li><strong>Include millets:</strong> Replace at least one-third of cereal intake with millets for fiber and micronutrients</li>
          <li><strong>Limit ultra-processed foods:</strong> First explicit warning against UPFs (packaged snacks, instant noodles, sugary beverages, bakery items)</li>
          <li><strong>Salt below 5g/day:</strong> Strengthened sodium reduction guidance, given India's hypertension epidemic</li>
          <li><strong>Healthy fats:</strong> Use a mix of cooking oils (no single oil), limit saturated fat to less than 7% of energy, eliminate trans fats</li>
          <li><strong>Physical activity:</strong> Minimum 30-45 minutes of moderate activity daily integrated into the dietary framework</li>
          <li><strong>Limit sugar to 20-25g/day:</strong> Approximately 5-6 teaspoons, including sugar in tea, coffee, sweets, and processed foods</li>
        </ul>
      </ExampleBlock>

      {/* ============ ICMR vs WHO ============ */}
      <h2>ICMR Guidelines vs WHO Recommendations</h2>

      <ComparisonTable
        title="ICMR-NIN vs WHO Dietary Recommendations"
        headers={['Parameter', 'ICMR-NIN (India)', 'WHO (Global)', 'Key Difference']}
        rows={[
          ['Energy from carbs', '55-65%', '55-75%', 'Broadly similar; India narrower range'],
          ['Energy from protein', '10-15%', '10-15%', 'Similar, but India specifies plant protein focus'],
          ['Energy from fat', '20-30%', '15-30%', 'Similar upper limit'],
          ['Saturated fat', '<7% of energy', '<10% of energy', 'India stricter (diabetes/CVD risk)'],
          ['Trans fat', '<1% of energy', '<1% of energy', 'Identical'],
          ['Free sugars', '<5-6% of energy (~20-25g)', '<10% of energy (ideal <5%)', 'India uses absolute grams'],
          ['Salt/Sodium', '<5g salt/day', '<5g salt/day (2000mg Na)', 'Identical'],
          ['Fruits & Vegetables', '≥400g/day', '≥400g/day', 'Identical minimum'],
          ['Fiber', '30-40g/day', '25-30g/day', 'India slightly higher (cereal-based diet)'],
          ['Iron (women)', '29 mg/day', '18 mg/day (varied)', 'India higher (vegetarian bioavailability)'],
          ['Calcium', '1000 mg/day', '1000 mg/day', 'Now aligned (India increased in 2020)'],
          ['Vitamin D', '600 IU/day', '600-800 IU/day', 'Similar; both may be insufficient'],
        ]}
      />

      <NoteBlock title="Why India sets stricter saturated fat limits">
        The ICMR recommendation of less than 7% energy from saturated fat (versus WHO's 10%) reflects
        the Indian metabolic phenotype — Indians develop insulin resistance and cardiovascular
        disease at lower BMI and lower absolute fat intake than Western populations. Indians
        have higher visceral fat deposition per unit BMI, smaller LDL particle size, and higher
        lipoprotein(a) levels, all of which increase cardiovascular risk. This genetic
        predisposition means that dietary thresholds considered safe for Western populations may
        not be appropriate for Indians, justifying stricter guidelines.
      </NoteBlock>

      {/* ============ PRACTICAL APPLICATION ============ */}
      <h2>Translating Guidelines into Daily Meals</h2>

      <ExampleBlock title="A guideline-aligned Indian day (vegetarian, ~1700 kcal)">
        <ul>
          <li><strong>Early morning:</strong> 1 glass warm water + 5 soaked almonds (35 kcal)</li>
          <li><strong>Breakfast:</strong> 2 ragi idlis + 1 cup sambar + coconut chutney (1 tbsp) = ~250 kcal, 12g protein</li>
          <li><strong>Mid-morning:</strong> 1 seasonal fruit (banana/apple/guava) = ~80 kcal</li>
          <li><strong>Lunch:</strong> 1 cup brown rice + 1 cup sambar + rasam + poriyal (100g) + curd (100g) = ~500 kcal, 18g protein</li>
          <li><strong>Evening snack:</strong> 1 glass buttermilk + 1 small handful roasted chana = ~120 kcal, 6g protein</li>
          <li><strong>Dinner:</strong> 2 jowar rotis + 1 cup palak dal + vegetable raita = ~450 kcal, 18g protein</li>
          <li><strong>Before bed:</strong> 1 glass warm turmeric milk (low-fat) = ~80 kcal, 4g protein</li>
          <li><strong>Total:</strong> ~1515 kcal, ~58g protein, 6+ servings vegetables/fruits, 3 dairy servings, millets included</li>
        </ul>
      </ExampleBlock>

      <ExampleBlock title="Closing the common gaps: practical fixes">
        <ul>
          <li><strong>Not enough protein?</strong> Add sprouts to breakfast, extra dal serving at lunch, paneer/tofu at dinner</li>
          <li><strong>Not enough vegetables?</strong> Double poriyal/sabzi portions; add vegetable raita; include salad at lunch</li>
          <li><strong>Not enough calcium?</strong> 300ml dairy (curd + milk combined), ragi (344mg Ca/100g), sesame seeds</li>
          <li><strong>Not enough B12?</strong> Vegetarians: fortified foods or supplement (2.2 mcg/day); non-vegetarians: eggs, fish</li>
          <li><strong>Too much cereal?</strong> Reduce rice/roti by 30%; replace with extra dal, vegetables, and curd</li>
          <li><strong>Too much salt?</strong> Reduce pickle to 1 tsp, limit papad, avoid extra salt on curd rice, use lemon instead</li>
        </ul>
      </ExampleBlock>

      <WarningBlock title="The protein RDA is a minimum, not a target">
        The ICMR protein RDA of 0.8-1.0 g/kg body weight represents the minimum to prevent
        deficiency, not the optimal intake for health or body composition. For active individuals,
        those doing resistance training, or older adults (who need more protein to prevent
        sarcopenia), protein needs are 1.2-1.6 g/kg. On a vegetarian Indian diet, this requires
        deliberate planning — it will not happen automatically from a cereal-dominant eating
        pattern. See the next section on high-protein Indian vegetarian diets for specific
        strategies.
      </WarningBlock>

      {/* ============ SPECIAL POPULATIONS ============ */}
      <h2>Special Population Guidelines</h2>

      <h3>Children and Adolescents</h3>

      <NoteBlock title="ICMR guidelines for growing children">
        ICMR-NIN specifies higher protein requirements per kg body weight for children (1.0-1.5
        g/kg depending on age) and emphasizes that at least one glass of milk (200ml) daily is
        critical for calcium and growth. Iron requirements for adolescent girls are particularly
        high (27 mg/day) due to menstrual losses. The 2024 guidelines explicitly warn against
        allowing children to consume ultra-processed foods as snacks and recommend traditional
        snacks (roasted chana, peanuts, fruits, sprouts) instead. School meal programs (Mid-Day
        Meal Scheme) are designed to provide one-third of the daily RDA during school days.
      </NoteBlock>

      <h3>Elderly (60+ years)</h3>

      <NoteBlock title="Nutritional priorities for older Indians">
        Energy requirements decrease with age (approximately 7% reduction per decade after 40),
        but protein requirements increase to 1.0-1.2 g/kg to combat sarcopenia (age-related
        muscle loss). Calcium needs remain at 1000 mg/day, and vitamin D supplementation becomes
        more important as skin synthesis declines. B12 absorption decreases with age due to
        reduced gastric acid production — supplementation is particularly important for elderly
        vegetarians. ICMR recommends softer foods (dal, idli, khichdi, curd) that are easier
        to chew and digest while maintaining nutrient density. Fiber intake should be maintained
        at 25-30g/day to prevent constipation.
      </NoteBlock>

      <h3>Pregnant and Lactating Women</h3>

      <EvidenceBlock
        level="strong"
        title="Increased requirements during pregnancy and lactation"
      >
        ICMR recommends an additional 200 kcal/day during the second trimester and 300 kcal/day
        during the third trimester and lactation. Protein increases by 10g/day during pregnancy
        and 16g/day during lactation. Iron (27 mg/day), folate (500 mcg DFE/day), and calcium
        (1200 mg/day) requirements are significantly elevated. The 2024 guidelines emphasize that
        iron-folate supplementation should begin before conception when possible. Iodine adequacy
        (250 mcg/day during pregnancy) is critical for fetal brain development — iodized salt
        is the primary dietary source for most Indians.
      </EvidenceBlock>

      {/* ============ ULTRA-PROCESSED FOODS ============ */}
      <h2>The Ultra-Processed Food Problem in India</h2>

      <DefinitionBlock
        term="Ultra-Processed Foods (UPFs)"
        definition="Industrial food formulations made mostly from substances derived from foods and additives, with little or no intact whole food. Classified as NOVA Group 4 foods. In India, common UPFs include packaged biscuits, instant noodles (Maggi), chips, sweetened beverages, packaged fruit juices, ready-to-eat meals, flavored yogurts, breakfast cereals, and bakery products."
      />

      <EvidenceBlock
        level="strong"
        title="UPF consumption in India is rising rapidly and linked to poor health outcomes"
      >
        India's UPF market is the fastest-growing in the world, with sales increasing by over
        13% annually. A large-scale study across Indian cities found that UPFs now contribute
        10-30% of total caloric intake in urban populations, up from near-zero three decades
        ago. The 2024 ICMR guidelines explicitly warn that UPFs are associated with obesity,
        type 2 diabetes, cardiovascular disease, and certain cancers. A meta-analysis of 43
        studies found that each 10% increase in UPF consumption is associated with a 12%
        increase in type 2 diabetes risk, 13% increase in cardiovascular disease, and 11%
        increase in all-cause mortality. The traditional Indian diet, based on whole grains,
        fresh vegetables, dals, and home cooking, is being displaced by these products
        particularly among urban youth and children.
      </EvidenceBlock>

      <ComparisonTable
        title="Traditional Indian Snacks vs Ultra-Processed Equivalents"
        headers={['Traditional Snack', 'Calories', 'UPF Equivalent', 'Calories', 'Key Difference']}
        rows={[
          ['Roasted chana (30g)', '105 kcal', 'Packaged chips (30g)', '155 kcal', 'Chips: more fat, less protein, additives'],
          ['Fresh fruit (1 medium)', '60-90 kcal', 'Packaged fruit juice (200ml)', '100-120 kcal', 'Juice: no fiber, added sugar, stripped nutrients'],
          ['Homemade laddoo (1 small)', '90 kcal', 'Packaged cream biscuits (3)', '150 kcal', 'Biscuits: trans fats, refined flour, additives'],
          ['Buttermilk (200ml)', '40 kcal', 'Cola/soft drink (200ml)', '85 kcal', 'Cola: zero nutrients, phosphoric acid, sugar'],
          ['Poha (1 cup homemade)', '180 kcal', 'Instant noodles (1 pack)', '310 kcal', 'Noodles: refined flour, excess sodium, MSG'],
        ]}
      />

      <WarningBlock title="Reading Indian food labels">
        Indian food labeling regulations (FSSAI) require declaration of calories, protein, fat,
        carbohydrates, and total sugar per serving and per 100g. However, manufacturers often
        set unrealistically small serving sizes to make calorie counts appear lower. Always
        check the per-100g column for accurate comparison. Watch for hidden sugars listed as
        "sucrose," "glucose," "high fructose corn syrup," "invert sugar," or "maltodextrin."
        Trans fats may be declared as zero if below 0.2g per serving — but the product may still
        contain partially hydrogenated vegetable oil (listed in ingredients), which means trans
        fats are present. Ingredients are listed in descending order of quantity — if sugar or
        refined flour appears in the first three ingredients, the product is best avoided.
      </WarningBlock>

      <ReferenceList
        references={[
          'ICMR-NIN. (2020). Nutrient Requirements and Recommended Dietary Allowances for Indians — A Report of the Expert Group. National Institute of Nutrition, Indian Council of Medical Research, Hyderabad.',
          'ICMR-NIN. (2024). Dietary Guidelines for Indians — A Manual. National Institute of Nutrition, Hyderabad.',
          'National Nutrition Monitoring Bureau (NNMB). (2017). Diet and Nutritional Status of Urban Population in India and Prevalence of Obesity, Hypertension, Diabetes and Hyperlipidemia in Urban Men and Women. NIN Technical Report No. 27.',
          'International Institute for Population Sciences (IIPS). (2021). National Family Health Survey (NFHS-5), 2019-21. Ministry of Health and Family Welfare, Government of India.',
          'World Health Organization. (2020). Healthy Diet Fact Sheet. WHO Technical Report.',
          'Yajnik, C. S. (2004). Early life origins of insulin resistance and type 2 diabetes in India and other Asian countries. Journal of Nutrition, 134(1), 205-210.',
        ]}
      />
    </div>
  );
}
