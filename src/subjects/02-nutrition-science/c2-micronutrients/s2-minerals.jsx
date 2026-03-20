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
    authors: 'Kassebaum NJ, Jasrasaria R, Naghavi M, Wulf SK, Johns N, Lozano R, et al.',
    year: 2014,
    title: 'A systematic analysis of global anemia burden from 1990 to 2010',
    source: 'Blood, 123(5), 615-624',
    type: 'review',
  },
  {
    authors: 'International Institute for Population Sciences (IIPS) and ICF',
    year: 2021,
    title: 'National Family Health Survey (NFHS-5), 2019-21: India',
    source: 'Mumbai: IIPS',
    type: 'foundational',
  },
  {
    authors: 'Harinarayan CV, Ramalakshmi T, Prasad UV, Sudhakar D, Srinivasarao PV, Sarma KV, Kumar EG',
    year: 2007,
    title: 'High prevalence of low dietary calcium, high phytate consumption, and vitamin D deficiency in healthy south Indians',
    source: 'American Journal of Clinical Nutrition, 85(4), 1062-1067',
    type: 'clinical',
  },
  {
    authors: 'Zimmermann MB, Andersson M',
    year: 2012,
    title: 'Assessment of iodine nutrition in populations: past, present, and future',
    source: 'Nutrition Reviews, 70(10), 553-570',
    type: 'review',
  },
  {
    authors: 'Hurrell R, Egli I',
    year: 2010,
    title: 'Iron bioavailability and dietary reference values',
    source: 'American Journal of Clinical Nutrition, 91(5), 1461S-1467S',
    type: 'review',
  },
  {
    authors: 'National Institute of Nutrition (NIN)',
    year: 2020,
    title: 'Recommended Dietary Allowances and Estimated Average Requirements for Indians',
    source: 'Indian Council of Medical Research, Hyderabad',
    type: 'foundational',
  },
  {
    authors: 'Wessells KR, Brown KH',
    year: 2012,
    title: 'Estimating the global prevalence of zinc deficiency: results based on zinc availability in national food supplies and the prevalence of stunting',
    source: 'PLoS ONE, 7(11), e50568',
    type: 'review',
  },
];

export default function Minerals() {
  return (
    <div className="prose-health">
      <h1>Minerals</h1>

      <p>
        Minerals are inorganic elements that serve as essential components of enzymes,
        hormones, structural tissues, and fluid balance systems in the body. Unlike vitamins,
        minerals cannot be destroyed by heat, light, or cooking — but they can be lost through
        leaching into cooking water or rendered less absorbable by binding with anti-nutritional
        factors like phytates and oxalates. Mineral deficiencies are among the most widespread
        nutritional problems in India, with iron, calcium, zinc, and iodine deficiencies
        affecting a significant proportion of the population, especially women, children, and
        those consuming predominantly plant-based diets.
      </p>

      <DefinitionBlock
        title="Dietary Minerals"
        definition="Inorganic elements required by the body for structural functions (bones, teeth), enzymatic reactions, fluid balance, nerve transmission, and oxygen transport. They are classified as macrominerals (needed in amounts greater than 100 mg/day: calcium, phosphorus, magnesium, sodium, potassium, chloride, sulfur) and trace minerals (needed in smaller amounts: iron, zinc, iodine, selenium, copper, manganese, fluoride, chromium, molybdenum)."
        notation="Macrominerals are measured in mg or g/day; trace minerals in mg or mcg/day. Bioavailability varies enormously — from less than 5% for non-heme iron from high-phytate diets to over 95% for sodium."
      />

      <h2>Iron</h2>

      <p>
        Iron is required for oxygen transport (hemoglobin in red blood cells, myoglobin in
        muscles), energy metabolism (cytochrome enzymes in the electron transport chain), and
        DNA synthesis. Iron deficiency is the most common nutritional deficiency worldwide
        and is a particularly severe problem in India, where it contributes to the staggering
        burden of anemia.
      </p>

      <h3>Heme vs Non-Heme Iron</h3>
      <p>
        Dietary iron exists in two forms. Heme iron, found exclusively in animal foods (meat,
        poultry, fish), is absorbed intact by a specific intestinal transporter and has a
        bioavailability of 15-35%. Non-heme iron, the only form present in plant foods and
        also found in animal foods, is absorbed through a different pathway and has a much
        lower bioavailability of 2-20%, depending heavily on dietary enhancers and inhibitors
        consumed at the same meal.
      </p>

      <EvidenceBlock
        title="Iron Bioavailability and Dietary Factors"
        finding="The bioavailability of non-heme iron varies more than 10-fold depending on the composition of the meal. Ascorbic acid (vitamin C) is the most potent enhancer of non-heme iron absorption, while phytate (from whole grains and legumes) and polyphenols (from tea and coffee) are the most potent inhibitors."
        study="Review of the mechanisms and dietary determinants of iron bioavailability"
        source="Hurrell & Egli (2010) American Journal of Clinical Nutrition"
        details="The review quantified that 50 mg of ascorbic acid (the amount in one amla or half a guava) can increase non-heme iron absorption 3-6 fold. Conversely, a single cup of tea consumed with a meal can reduce iron absorption by 60-70% due to polyphenol binding. Phytic acid in whole grains and legumes forms insoluble iron-phytate complexes that resist digestion. Soaking, sprouting, and fermenting grains and legumes significantly reduces phytate content and improves iron availability."
      />

      <WarningBlock
        title="India's Anemia Crisis"
        content="According to NFHS-5 (2019-21), 57% of Indian women aged 15-49 and 67% of children aged 6-59 months are anemic. Iron deficiency is the leading cause, though B12 and folate deficiency also contribute. The predominantly vegetarian diet with high phytate content, combined with tea/coffee consumption with meals and low vitamin C intake, creates a 'perfect storm' for poor iron absorption. Women of reproductive age are especially vulnerable due to menstrual losses. The ICMR recommends 21 mg/day for adult men and 29 mg/day for women — higher than Western recommendations precisely because of lower bioavailability from Indian diets."
      />

      <ExampleBlock
        title="Improving Iron Absorption from Indian Meals"
        description="Evidence-based strategies: (1) Add vitamin C to every meal — squeeze lemon on dal, include amla chutney, eat guava or orange as dessert. (2) Avoid tea or coffee within 1 hour of meals — this single change can double iron absorption. (3) Soak and sprout legumes before cooking to reduce phytate by 30-50%. (4) Fermented foods (idli, dosa, dhokla) have lower phytate due to microbial phytase activity. (5) Cook in cast iron vessels — this can increase the iron content of acidic foods by 2-3 fold. (6) If non-vegetarian, include even small amounts of meat or fish (the 'meat factor' enhances non-heme iron absorption from the entire meal)."
      />

      <h2>Calcium</h2>

      <p>
        Calcium is the most abundant mineral in the body, with 99% stored in bones and teeth.
        The remaining 1% in blood and soft tissues is critical for muscle contraction, nerve
        transmission, blood clotting, and enzyme function. Adequate calcium intake throughout
        life is essential for achieving peak bone mass in young adulthood and preventing
        osteoporosis in later life.
      </p>

      <p>
        The ICMR recommends 1000 mg/day of calcium for Indian adults and 1200 mg/day for
        pregnant and lactating women. However, studies consistently show that the average
        calcium intake of Indians is only 300-400 mg/day — less than half the recommendation.
        This chronic calcium deficit, compounded by widespread vitamin D deficiency, contributes
        to high rates of osteoporosis and fractures, particularly in postmenopausal women.
      </p>

      <EvidenceBlock
        title="Calcium Deficiency in South Indians"
        finding="Average daily calcium intake among healthy adults in South India was only 269 mg — less than a third of the recommended intake of 1000 mg. Simultaneously, phytate intake was high (700-800 mg/day), further reducing calcium bioavailability. Combined with vitamin D deficiency (present in over 40% of the study population), this created a severe dual deficit for bone health."
        study="Cross-sectional study of calcium intake, phytate consumption, and vitamin D status in 164 healthy adults in Andhra Pradesh"
        source="Harinarayan et al. (2007) American Journal of Clinical Nutrition"
        details="The study found that the primary sources of calcium in these diets were ragi (finger millet) and dairy, but overall intake was insufficient. High consumption of cereals and legumes contributed to high phytate intake, which binds calcium and reduces its absorption. The authors recommended increasing dairy consumption, promoting ragi as a calcium source, and addressing vitamin D deficiency through supplementation as a three-pronged strategy for improving bone health in India."
      />

      <ComparisonTable
        title="Calcium Content of Common Indian Foods"
        headers={['Food', 'Serving', 'Calcium (mg)', 'Bioavailability Notes']}
        rows={[
          ['Ragi (finger millet) flour', '100 g', '344', 'Good source; moderate bioavailability'],
          ['Milk (buffalo/cow)', '1 glass (200 ml)', '240-260', 'Excellent bioavailability (~30%)'],
          ['Curd/Dahi', '1 katori (200 g)', '240-280', 'Good — fermentation may improve absorption'],
          ['Paneer', '50 g', '250', 'Good bioavailability from dairy'],
          ['Sesame seeds (til)', '1 tbsp (10 g)', '97', 'Contains oxalates that reduce absorption'],
          ['Palak (spinach)', '100 g cooked', '99', 'Poor — high oxalate content binds ~95% of calcium'],
          ['Rajma (cooked)', '100 g', '60', 'Moderate — phytates reduce absorption'],
          ['Amaranth (chaulai) leaves', '100 g', '215', 'Moderate bioavailability'],
        ]}
      />

      <NoteBlock
        title="The Spinach-Calcium Myth"
        content="Palak (spinach) is often promoted as a calcium-rich food, but this is misleading. While spinach contains 99 mg of calcium per 100 g, its very high oxalate content binds approximately 95% of this calcium, making it essentially unavailable for absorption. The actual absorbable calcium from 100 g of spinach is only about 5 mg — compared to 60-80 mg from 200 ml of milk. For calcium, dairy products, ragi, and sesame seeds are far superior practical sources. Other high-oxalate foods with poor calcium bioavailability include amaranth grain, beet greens, and sweet potatoes."
      />

      <h2>Zinc</h2>

      <p>
        Zinc is a trace mineral required for the function of over 300 enzymes involved in
        immune function, protein synthesis, wound healing, DNA synthesis, cell division, and
        taste perception. Like iron, zinc bioavailability is strongly affected by phytate
        content in the diet, making deficiency common in populations consuming predominantly
        plant-based diets high in cereals and legumes.
      </p>

      <p>
        India is among the countries with the highest estimated prevalence of zinc deficiency.
        The ICMR recommends 12 mg/day for men and 10 mg/day for women. Good Indian sources
        include meat, poultry, shellfish, dairy, nuts, seeds (pumpkin seeds are especially
        rich), chickpeas, and whole grains. As with iron, soaking, sprouting, and fermenting
        cereals and legumes improve zinc bioavailability by reducing phytate.
      </p>

      <EvidenceBlock
        title="Global Zinc Deficiency"
        finding="An estimated 17.3% of the world's population is at risk of inadequate zinc intake, with the highest prevalence in South Asia (30%) and Sub-Saharan Africa. India's predominantly cereal-based diets with high phytate content put a large proportion of the population at risk."
        study="Global analysis of zinc availability in national food supplies and relationship to stunting prevalence"
        source="Wessells & Brown (2012) PLoS ONE"
        details="The analysis found that countries with high proportions of energy from cereals and legumes (and low intake of animal source foods) had the highest estimated zinc deficiency risk. India's food supply provided only marginally adequate zinc relative to requirements, and the high phytate content of Indian diets further reduced effective zinc availability. The study highlighted the importance of dietary diversification, food processing methods (soaking, sprouting), and potential fortification strategies."
      />

      <h2>Iodine</h2>

      <p>
        Iodine is an essential trace element required for the synthesis of thyroid hormones
        (T3 and T4), which regulate metabolic rate, growth, and development. Iodine deficiency
        was historically endemic in many regions of India, particularly in the sub-Himalayan
        belt, inland areas, and flood-prone plains where soil iodine has been leached away.
        The introduction of universal salt iodization has dramatically reduced iodine
        deficiency disorders, but challenges remain.
      </p>

      <p>
        The ICMR recommends 150 mcg/day of iodine for adults (250 mcg during pregnancy and
        lactation). Iodized salt is the primary source for most Indians — 5 g of adequately
        iodized salt (at 30 ppm iodine) provides approximately 150 mcg. However, iodine is
        volatile and can be lost during storage (especially in hot, humid conditions in open
        containers) and during cooking. Studies show that 20-40% of iodine in salt is lost
        during cooking, highlighting the importance of adding iodized salt at the end of
        cooking when possible.
      </p>

      <NoteBlock
        title="Iodine and Thyroid Function in Weight Management"
        content="Thyroid hormones directly regulate basal metabolic rate. Hypothyroidism (which can result from chronic iodine deficiency) reduces BMR by 15-40%, leading to weight gain, fatigue, and cold intolerance. While universal salt iodization has reduced overt iodine deficiency in India, subclinical hypothyroidism affects approximately 10-12% of the Indian population. Anyone experiencing unexplained weight gain, fatigue, or difficulty losing weight should have thyroid function (TSH, T3, T4) tested. Excessive iodine intake (from supplements or kelp) can also disrupt thyroid function and should be avoided."
      />

      <h2>Minerals and Weight Management</h2>

      <p>
        While minerals do not directly provide calories, several minerals influence body weight
        regulation. Iron deficiency reduces exercise capacity and physical endurance, making
        physical activity — a key component of weight management — more difficult. Calcium
        has been investigated for potential effects on fat metabolism, with some studies
        suggesting that adequate calcium intake may modestly reduce fat absorption and promote
        fat oxidation. Zinc is required for the production of leptin, the satiety hormone
        secreted by fat cells, and zinc deficiency can impair appetite regulation.
      </p>

      <p>
        During caloric restriction, mineral intake often falls short of requirements.
        This is particularly concerning for iron (especially in women), calcium, zinc, and
        magnesium. A weight loss diet should emphasize mineral-dense foods and may require
        supplementation if intake consistently falls below recommendations.
      </p>

      <ExampleBlock
        title="Mineral-Rich Indian Meal Strategy"
        description="A day optimized for mineral intake: Breakfast — ragi dosa (calcium: 170 mg) with coconut chutney + glass of buttermilk (calcium: 120 mg). Lunch — brown rice (zinc) + sprouted moong dal (iron, zinc with improved bioavailability) + palak paneer (iron from spinach partially offset by oxalates, but calcium from paneer is well-absorbed) + lemon wedge (vitamin C to enhance iron absorption). Snack — roasted pumpkin seeds 15 g (zinc: 1.2 mg, iron: 1.2 mg) + amla juice (vitamin C). Dinner — bajra roti (iron: 6 mg per 100 g) + chole (zinc) + raita (calcium). Avoid tea/coffee with meals. This plan provides approximately 800 mg calcium, 20 mg iron, and 10 mg zinc."
      />

      <h2>Key Takeaways</h2>

      <ul>
        <li>
          Iron deficiency anemia affects 57% of Indian women and 67% of children. The
          predominantly vegetarian diet with high phytate and tea/coffee consumption creates
          severe absorption challenges. Adding vitamin C to meals and avoiding tea with meals
          are the most impactful dietary changes.
        </li>
        <li>
          Calcium intake in India (300-400 mg/day) is less than half the ICMR recommendation
          (1000 mg/day). Dairy, ragi, and sesame seeds are the most bioavailable sources.
          Spinach is a poor practical calcium source despite its calcium content due to oxalates.
        </li>
        <li>
          Zinc deficiency risk is high in cereal-based Indian diets. Soaking, sprouting, and
          fermenting grains and legumes reduce phytate and improve zinc and iron absorption.
        </li>
        <li>
          Iodine deficiency has been substantially reduced by universal salt iodization, but
          iodine losses during cooking (20-40%) and storage mean that adequate iodized salt
          intake remains important.
        </li>
        <li>
          Mineral deficiencies impair energy metabolism, exercise capacity, appetite regulation,
          and thyroid function — all of which are relevant to weight management.
        </li>
        <li>
          Traditional food processing techniques — soaking, sprouting, fermenting (idli, dosa,
          dhokla) — are evidence-based methods for improving mineral bioavailability from
          plant-based Indian diets.
        </li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
