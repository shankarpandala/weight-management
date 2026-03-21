import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';
import ComparisonTable from '../../../components/content/ComparisonTable.jsx';

const references = [
  {
    authors: 'Popkin BM, D\'Anci KE, Rosenberg IH',
    year: 2010,
    title: 'Water, hydration, and health',
    source: 'Nutrition Reviews, 68(8), 439-458',
    type: 'review',
  },
  {
    authors: 'Dennis EA, Dengo AL, Comber DL, Flack KD, Savla J, Davy KP, Davy BM',
    year: 2010,
    title: 'Water consumption increases weight loss during a hypocaloric diet intervention in middle-aged and older adults',
    source: 'Obesity, 18(2), 300-307',
    type: 'clinical',
  },
  {
    authors: 'Jéquier E, Constant F',
    year: 2010,
    title: 'Water as an essential nutrient: the physiological basis of hydration',
    source: 'European Journal of Clinical Nutrition, 64(2), 115-123',
    type: 'review',
  },
  {
    authors: 'Sawka MN, Burke LM, Eichner ER, Maughan RJ, Montain SJ, Stachenfeld NS',
    year: 2007,
    title: 'American College of Sports Medicine position stand: Exercise and fluid replacement',
    source: 'Medicine and Science in Sports and Exercise, 39(2), 377-390',
    type: 'foundational',
  },
  {
    authors: 'He FJ, MacGregor GA',
    year: 2011,
    title: 'Salt reduction lowers cardiovascular risk: meta-analysis of outcome trials',
    source: 'The Lancet, 378(9789), 380-382',
    type: 'review',
  },
  {
    authors: 'Aaron KJ, Sanders PW',
    year: 2013,
    title: 'Role of dietary salt and potassium intake in cardiovascular health and disease: a review of the evidence',
    source: 'Mayo Clinic Proceedings, 88(9), 987-995',
    type: 'review',
  },
  {
    authors: 'Johnson EC, Muñoz CX, Le Bellego L, Klein A, Casa DJ, Maresh CM, Armstrong LE',
    year: 2015,
    title: 'Markers of the hydration process during fluid volume modification in women with habitual high or low daily fluid intake',
    source: 'European Journal of Applied Physiology, 115(5), 1067-1074',
    type: 'clinical',
  },
];

export default function WaterAndElectrolytes() {
  return (
    <div className="prose-health">
      <h1>Water and Electrolytes</h1>

      <p>
        Water is the most essential nutrient for human survival. Constituting approximately
        60% of adult body weight, water is involved in virtually every physiological process:
        it serves as the solvent for biochemical reactions, transports nutrients and waste
        products, regulates body temperature through evaporation, cushions organs and joints,
        and maintains blood volume and pressure. While a person can survive weeks without food,
        death from dehydration can occur within days. Electrolytes — minerals that carry
        electrical charges in solution — work in concert with water to maintain fluid balance,
        nerve impulse transmission, and muscle contraction.
      </p>

      <DefinitionBlock
        title="Water and Electrolytes"
        definition="Water (H2O) is the primary constituent of body fluids including blood plasma, intracellular fluid, and interstitial fluid. Electrolytes are minerals that dissociate into ions in solution, carrying positive (cations: sodium, potassium, calcium, magnesium) or negative (anions: chloride, bicarbonate, phosphate) charges. The balance between water and electrolytes determines cell volume, blood pressure, pH balance, and neuromuscular function."
        notation="Adequate Intake (AI) for water: approximately 2.5 L/day for men, 2.0 L/day for women (from all sources including food). Sodium: limit to less than 2000 mg/day (5 g salt). Potassium: 3510 mg/day (WHO recommendation)."
      />

      <h2>Water: The Forgotten Nutrient</h2>

      <h3>Distribution in the Body</h3>
      <p>
        Total body water is distributed between two major compartments: intracellular fluid
        (approximately two-thirds, or about 28 liters in a 70 kg adult) and extracellular
        fluid (approximately one-third, or about 14 liters). Extracellular fluid is further
        divided into interstitial fluid (surrounding cells) and plasma (the liquid component
        of blood). The movement of water between these compartments is governed by osmotic
        gradients created primarily by sodium (extracellular) and potassium (intracellular).
      </p>

      <h3>Functions of Water</h3>
      <p>
        Water performs multiple critical functions: it is the universal solvent in which all
        metabolic reactions occur, it carries nutrients to cells and removes metabolic waste
        via blood and lymph, it is essential for temperature regulation through sweating
        (evaporation of 1 liter of sweat dissipates approximately 580 kcal of heat), it
        lubricates joints and the digestive tract, and it provides structural support to
        cells and tissues through turgor pressure.
      </p>

      <h3>Daily Water Requirements</h3>
      <p>
        Water intake comes from three sources: drinking water and beverages (approximately
        1.5-2 liters), water in foods (approximately 0.5-1 liter, higher with fruit and
        vegetable-rich diets), and metabolic water produced during oxidation of macronutrients
        (approximately 250-350 ml). Water losses occur through urine (1-2 liters), insensible
        losses through skin and respiration (approximately 0.5-1 liter), sweat (highly
        variable: 0.5-2+ liters depending on activity and climate), and feces (approximately
        100-200 ml).
      </p>

      <EvidenceBlock
        title="Hydration Fundamentals"
        finding="Even mild dehydration (1-2% body weight loss as water) impairs cognitive performance, increases fatigue, and worsens mood. The body has no true water storage mechanism, and daily losses must be replaced through intake. Thirst, while a useful signal, often lags behind actual dehydration, particularly in older adults and during exercise."
        study="Comprehensive review of the physiological basis of hydration requirements and health implications"
        source="Jéquier & Constant (2010) European Journal of Clinical Nutrition"
        details="The review established that water intake requirements vary considerably based on body size, physical activity, climate, and diet composition. In temperate climates with moderate activity, the adequate intake is approximately 2.5 L/day for men and 2.0 L/day for women from all sources. In hot climates (relevant to most of India for most of the year), requirements can increase by 50-100%. The authors emphasized that chronic mild dehydration is common and may have long-term health consequences including increased risk of kidney stones, urinary tract infections, and possibly chronic kidney disease."
      />

      <NoteBlock
        title="Hydration in India's Climate">
        India's tropical and subtropical climate significantly increases water requirements. During summer months (March-June), temperatures regularly exceed 40°C in much of North and Central India, increasing sweat losses to 2-4 liters per day even with minimal activity. Outdoor laborers may lose 6-8 liters per day. The general recommendation of '8 glasses a day' is a minimum; most Indian adults need 3-4 liters of total fluid daily during summer months. Signs of adequate hydration include pale yellow urine and urinating 6-8 times per day. Dark yellow or amber urine indicates dehydration and the need for increased fluid intake.
      </NoteBlock>

      <h2>Water and Weight Management</h2>

      <p>
        Water plays several important roles in weight management that are often overlooked.
        It has zero calories, can partially substitute for caloric beverages, increases
        satiety when consumed before meals, and is essential for the metabolic processes
        that mobilize and oxidize stored fat.
      </p>

      <EvidenceBlock
        title="Water Before Meals Enhances Weight Loss"
        finding="Middle-aged and older adults who consumed 500 ml of water before each of three daily meals lost an average of 2 kg more over 12 weeks compared to a control group following the same hypocaloric diet without pre-meal water. The water preload group also consumed 75-90 fewer calories per meal."
        study="Randomized controlled trial of pre-meal water consumption during a hypocaloric diet intervention"
        source="Dennis et al. (2010) Obesity"
        details="The study enrolled 48 overweight or obese adults aged 55-75 years and randomly assigned them to a hypocaloric diet with or without pre-meal water loading (500 ml, 30 minutes before each meal). After 12 weeks, the water group lost 44% more weight (7.2 kg vs 5.0 kg). The mechanism appears to be gastric distension triggering mechanoreceptor-mediated satiety signals, reducing the desire to eat at the subsequent meal. This simple, zero-cost intervention is especially practical in Indian settings."
      />

      <ExampleBlock
        title="Hydration Strategy for Weight Management"
        problem="Practical daily hydration plan: (1) Start the morning with 1-2 glasses of warm water (traditional Indian practice supported by evidence for stimulating peristalsis). (2) Drink 500 ml of water 30 minutes before each major meal (evidence-based strategy for reducing calorie intake). (3) Replace sugary beverages (packaged fruit juice, soda, sweetened chai) with plain water, nimbu pani without sugar, or green tea. (4) Keep a 1-liter bottle at your desk and finish it by lunch, then refill. (5) Eat water-rich fruits and vegetables: cucumber (96% water), watermelon (92%), tomato (95%), kakdi (95%), lauki (92%). (6) Monitor urine color — aim for pale yellow throughout the day."
      />

      <h2>Electrolytes</h2>

      <h3>Sodium</h3>
      <p>
        Sodium is the primary cation in extracellular fluid and the principal determinant
        of extracellular fluid volume and blood pressure. It is essential for nerve impulse
        transmission, muscle contraction, and nutrient absorption. However, excessive sodium
        intake is one of the most significant modifiable risk factors for hypertension and
        cardiovascular disease.
      </p>

      <p>
        The WHO recommends limiting sodium intake to less than 2000 mg/day (equivalent to
        less than 5 g of salt). The average Indian consumes approximately 9-12 g of salt
        per day — roughly double the recommended limit. Major sources of excess sodium in
        Indian diets include added salt in cooking, pickles (achar), papad, chutneys, and
        processed/packaged foods.
      </p>

      <EvidenceBlock
        title="Salt Reduction and Cardiovascular Risk"
        finding="Reducing salt intake significantly reduced cardiovascular events. A reduction of approximately 5 g/day in salt intake was associated with a 23% reduction in stroke and a 17% reduction in total cardiovascular disease."
        study="Meta-analysis of outcome trials examining the effect of salt reduction on cardiovascular events"
        source="He & MacGregor (2011) The Lancet"
        details="This meta-analysis of 13 prospective studies and outcome trials found a consistent and significant relationship between salt reduction and cardiovascular events. The benefit was dose-dependent — greater salt reduction produced greater risk reduction. The authors noted that even modest reductions (2-3 g/day) produce clinically meaningful blood pressure reductions, particularly in those with hypertension, the elderly, and individuals of South Asian descent who may have greater salt sensitivity."
      />

      <WarningBlock
        title="Hidden Sodium in Indian Diets">
        Beyond the salt added during cooking, many traditional Indian foods are extremely high in sodium: one tablespoon of pickle (achar) contains approximately 800-1000 mg sodium, one papad contains 300-400 mg, commercial masala mixes and ready-to-eat meals are sodium-dense, and even seemingly healthy options like canned rajma or packaged soups can contain 600-800 mg per serving. Taste buds adapt to salt levels within 2-3 weeks — gradually reducing salt allows recalibration of taste perception. Replace salt-heavy condiments with fresh herbs, lemon, amchur (dry mango powder), and freshly ground spices.
      </WarningBlock>

      <h3>Potassium</h3>
      <p>
        Potassium is the primary cation inside cells and works in opposition to sodium to
        regulate fluid balance, nerve signals, and muscle contractions. Adequate potassium
        intake helps counteract the blood pressure-raising effect of sodium, and populations
        with high potassium intake consistently have lower rates of hypertension and stroke.
        The WHO recommends at least 3510 mg/day of potassium for adults.
      </p>

      <p>
        Most Indians consume significantly less potassium than recommended, while consuming
        excess sodium. This creates an unfavorable sodium-to-potassium ratio that amplifies
        cardiovascular risk. Increasing potassium intake while decreasing sodium intake
        produces synergistic benefits for blood pressure control.
      </p>

      <ComparisonTable
        title="Sodium-Potassium Balance: Key Indian Foods"
        headers={['Food', 'Serving', 'Sodium (mg)', 'Potassium (mg)', 'Ratio Assessment']}
        rows={[
          ['Banana', '1 medium (120 g)', '1', '420', 'Excellent — very high K, negligible Na'],
          ['Coconut water', '200 ml', '105', '500', 'Good — high K, moderate Na'],
          ['Spinach (palak)', '100 g cooked', '70', '466', 'Excellent — high K, low Na'],
          ['Sweet potato', '100 g cooked', '36', '337', 'Good potassium source'],
          ['Curd/Dahi', '200 g', '100', '280', 'Good balance'],
          ['Pickle (mango)', '1 tbsp (20 g)', '800-1000', '30', 'Very poor — excessive Na'],
          ['Papad (fried)', '1 piece', '300-400', '50', 'Very poor — high Na, low K'],
          ['Namkeen/Bhujia', '30 g', '400-600', '80', 'Very poor — excessive Na'],
        ]}
        highlightColumn={4}
      />

      <h3>Magnesium</h3>
      <p>
        Magnesium is involved in over 300 enzymatic reactions including energy production,
        protein synthesis, blood glucose control, and blood pressure regulation. It is also
        important for bone health, with approximately 60% of body magnesium stored in bone.
        Good Indian sources include green leafy vegetables, nuts (especially almonds and
        cashews), seeds, whole grains, and legumes. Magnesium deficiency can manifest as
        muscle cramps, fatigue, and insulin resistance.
      </p>

      <h2>Electrolyte Balance During Exercise and Heat</h2>

      <p>
        Sweat contains both water and electrolytes, primarily sodium (average 920 mg/L),
        chloride, and smaller amounts of potassium, calcium, and magnesium. During prolonged
        exercise or work in India's heat, electrolyte losses can be substantial. Replacing
        only water without electrolytes can lead to hyponatremia (dangerously low blood
        sodium), which is potentially life-threatening.
      </p>

      <ExampleBlock
        title="Homemade Oral Rehydration for Indian Conditions"
        problem="For moderate dehydration from heat or exercise, a homemade electrolyte drink is effective and economical: dissolve 6 level teaspoons of sugar and half a level teaspoon of salt in 1 liter of clean drinking water. For better taste and additional potassium, add the juice of one lemon or nimbu. This approximates the WHO oral rehydration solution formula. Traditional Indian options like nimbu pani (lemon water with a pinch of salt and sugar), chaas/buttermilk (provides sodium, potassium, and fluid), and nariyal pani (coconut water — a natural isotonic drink with excellent electrolyte profile) are effective and culturally appropriate rehydration options."
      />

      <NoteBlock
        title="Caffeine and Hydration">
        Contrary to popular belief, moderate caffeine consumption (up to 400 mg/day, equivalent to 3-4 cups of coffee or 6-8 cups of tea) does not cause net dehydration in habitual consumers. While caffeine has a mild diuretic effect, the fluid consumed with caffeinated beverages more than compensates for increased urinary output. However, very strong tea and coffee consumed without water — common in Indian workplaces — provides relatively small fluid volumes. Additionally, tea consumed with meals inhibits iron absorption, so timing matters even if hydration effects are neutral.
      </NoteBlock>

      <h2>Key Takeaways</h2>

      <ul>
        <li>
          Water constitutes 60% of body weight and is involved in virtually every physiological
          process. Most Indian adults need 3-4 liters of total fluid daily, more during summer
          and with physical activity.
        </li>
        <li>
          Drinking 500 ml of water 30 minutes before meals is an evidence-based strategy that
          reduces calorie intake and enhances weight loss by approximately 2 kg over 12 weeks.
        </li>
        <li>
          Indian diets contain roughly double the recommended sodium (9-12 g salt vs 5 g
          recommended). Major sources beyond cooking salt include pickles, papad, and processed
          foods. Reducing sodium intake by 5 g/day lowers stroke risk by 23%.
        </li>
        <li>
          Potassium intake is generally insufficient. Increasing potassium (bananas, coconut
          water, leafy greens, dal) while reducing sodium produces synergistic blood pressure
          benefits.
        </li>
        <li>
          Electrolyte replacement is critical during prolonged exercise or work in India's heat.
          Traditional options like buttermilk, nimbu pani, and coconut water are effective and
          culturally appropriate.
        </li>
        <li>
          Monitor hydration through urine color (pale yellow = well hydrated) rather than
          relying solely on thirst, which is an unreliable indicator, particularly in older
          adults and hot climates.
        </li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
