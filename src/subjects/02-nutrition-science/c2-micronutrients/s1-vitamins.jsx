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
    authors: 'Holick MF',
    year: 2007,
    title: 'Vitamin D deficiency',
    source: 'New England Journal of Medicine, 357(3), 266-281',
    type: 'review',
  },
  {
    authors: 'Marwaha RK, Tandon N, Reddy DR, Aggarwal R, Singh R, Sawhney RC, Saluja B, Ganie MA, Singh S',
    year: 2005,
    title: 'Vitamin D and bone mineral density status of healthy schoolchildren in northern India',
    source: 'American Journal of Clinical Nutrition, 82(2), 477-482',
    type: 'clinical',
  },
  {
    authors: 'Harinarayan CV, Ramalakshmi T, Prasad UV, Sudhakar D, Srinivasarao PV, Sarma KV, Kumar EG',
    year: 2007,
    title: 'High prevalence of low dietary calcium, high phytate consumption, and vitamin D deficiency in healthy south Indians',
    source: 'American Journal of Clinical Nutrition, 85(4), 1062-1067',
    type: 'clinical',
  },
  {
    authors: 'National Institute of Nutrition (NIN)',
    year: 2020,
    title: 'Recommended Dietary Allowances and Estimated Average Requirements for Indians',
    source: 'Indian Council of Medical Research, Hyderabad',
    type: 'foundational',
  },
  {
    authors: 'Carr AC, Maggini S',
    year: 2017,
    title: 'Vitamin C and Immune Function',
    source: 'Nutrients, 9(11), 1211',
    type: 'review',
  },
  {
    authors: 'Green R, Allen LH, Bjorke-Monsen AL, Brito A, Gueant JL, Miller JW, Molloy AM, Nexo E, Stabler S, Toh BH, Ueland PM, Yajnik C',
    year: 2017,
    title: 'Vitamin B12 deficiency',
    source: 'Nature Reviews Disease Primers, 3, 17040',
    type: 'review',
  },
  {
    authors: 'Yajnik CS, Deshpande SS, Jackson AA, Refsum H, Rao S, Fisher DJ, Bhat DS, Naik SS, Coyaji KJ, Joglekar CV, Joshi N, Lubree HG, Deshpande VU, Rege SS, Fall CH',
    year: 2008,
    title: 'Vitamin B12 and folate concentrations during pregnancy and insulin resistance in the offspring: the Pune Maternal Nutrition Study',
    source: 'Diabetologia, 51(1), 29-38',
    type: 'clinical',
  },
];

export default function Vitamins() {
  return (
    <div className="prose-health">
      <h1>Vitamins</h1>

      <p>
        Vitamins are essential organic micronutrients required in small amounts for normal
        metabolic function, growth, and maintenance of health. Unlike macronutrients, vitamins
        do not provide calories, but they are indispensable cofactors in hundreds of enzymatic
        reactions that govern energy metabolism, immune function, bone health, neurological
        function, and cellular repair. The human body cannot synthesize most vitamins in
        sufficient quantities, making dietary intake or supplementation necessary. Vitamin
        deficiencies remain a significant public health concern in India, with deficiencies
        in vitamin D, B12, folate, and iron affecting hundreds of millions of people.
      </p>

      <DefinitionBlock
        title="Vitamins"
        definition="Organic compounds required in trace amounts (micrograms to milligrams per day) that serve as coenzymes, antioxidants, or hormonal precursors essential for normal physiological function. They are classified into two groups based on solubility: fat-soluble vitamins (A, D, E, K) that are absorbed with dietary fat and stored in adipose tissue and the liver, and water-soluble vitamins (B-complex and C) that dissolve in water, are not substantially stored, and must be consumed regularly."
        notation="13 essential vitamins: 4 fat-soluble (A, D, E, K) and 9 water-soluble (8 B vitamins + vitamin C)."
      />

      <h2>Fat-Soluble Vitamins</h2>

      <p>
        Fat-soluble vitamins are absorbed along with dietary fats through the intestinal wall
        and transported via chylomicrons in the lymphatic system. They can be stored in the
        body's fat depots and liver for extended periods — weeks to months — which means that
        daily intake is not strictly necessary but also means that excessive intake can lead
        to toxicity (hypervitaminosis). Adequate dietary fat intake (at least 15-20% of
        calories) is necessary for proper absorption of these vitamins.
      </p>

      <ComparisonTable
        title="Fat-Soluble Vitamins: Functions and Indian Sources"
        headers={['Vitamin', 'Key Functions', 'Indian Food Sources', 'ICMR RDA (Adult)', 'Deficiency Concern in India']}
        rows={[
          ['Vitamin A (Retinol)', 'Vision, immune function, skin integrity, reproduction', 'Liver, egg yolk, milk, butter; beta-carotene: carrots, papaya, palak, methi', '1000 mcg RE (men), 840 mcg RE (women)', 'High in children — night blindness, xerophthalmia'],
          ['Vitamin D (Cholecalciferol)', 'Calcium absorption, bone mineralization, immune modulation, insulin sensitivity', 'Sunlight exposure, fatty fish, egg yolk, fortified milk; very few dietary sources', '600 IU (15 mcg)/day', 'Extremely high — 70-90% of Indians are deficient'],
          ['Vitamin E (Tocopherol)', 'Antioxidant (protects cell membranes), immune function', 'Vegetable oils, nuts, seeds, wheat germ, sunflower seeds', '10 mg (men), 7.5 mg (women)', 'Relatively rare in isolation'],
          ['Vitamin K (Phylloquinone)', 'Blood clotting, bone metabolism, calcium regulation', 'Green leafy vegetables (palak, methi, sarson), soybean oil', '55 mcg/day', 'Rare except in newborns (given at birth)'],
        ]}
      />

      <h3>The Vitamin D Crisis in India</h3>

      <p>
        Despite India's abundant sunshine, vitamin D deficiency is paradoxically one of the
        most prevalent nutritional deficiencies in the country. Studies consistently show
        that 70-90% of Indians across all age groups, geographic regions, and socioeconomic
        strata have insufficient vitamin D levels (below 30 ng/mL). This has profound
        implications for bone health, immune function, insulin sensitivity, and even body
        weight regulation.
      </p>

      <EvidenceBlock
        title="Vitamin D Deficiency in Indian Children"
        finding="Over 90% of apparently healthy schoolchildren in New Delhi had vitamin D levels below 30 ng/mL (insufficient), and 35% had levels below 9 ng/mL (severely deficient). This was despite living in a region with abundant sunlight year-round."
        study="Cross-sectional study of 5,137 schoolchildren aged 10-18 years in northern India"
        source="Marwaha et al. (2005) American Journal of Clinical Nutrition"
        details="The study found that vitamin D deficiency was prevalent even among children with outdoor sun exposure. Contributing factors included dark skin pigmentation (melanin reduces vitamin D synthesis), air pollution blocking UVB radiation, cultural practices of covering skin, and very low dietary vitamin D intake. Girls had significantly lower vitamin D levels than boys, likely due to less outdoor activity and more skin coverage. The findings highlighted the need for vitamin D fortification of foods and widespread supplementation in India."
      />

      <NoteBlock
        title="Why Sunlight Alone Is Not Enough in India">
        Several factors explain the vitamin D paradox in India: (1) Dark skin requires 3-6 times more sun exposure than light skin to produce the same amount of vitamin D. (2) Urban air pollution in cities like Delhi, Mumbai, and Kolkata blocks up to 50% of UVB radiation. (3) Office-based work and indoor lifestyles limit sun exposure. (4) Cultural practices — covering most skin with clothing — reduce exposed surface area. (5) Very few Indian foods are natural vitamin D sources, and fortification is not universal. The ICMR recommends 600 IU/day, but many experts suggest 1000-2000 IU/day is needed to correct prevalent deficiency in Indian populations.
      </NoteBlock>

      <h2>Water-Soluble Vitamins</h2>

      <p>
        Water-soluble vitamins dissolve in water, are absorbed directly into the bloodstream
        from the small intestine, and cannot be stored in significant quantities (except
        vitamin B12, which is stored in the liver for years). Excess intake is generally
        excreted in urine, making toxicity rare but also meaning that regular dietary intake
        is essential. The B vitamins primarily function as coenzymes in energy metabolism
        and cellular processes.
      </p>

      <ComparisonTable
        title="Water-Soluble Vitamins: Key Members"
        headers={['Vitamin', 'Key Functions', 'Indian Food Sources', 'Deficiency Signs']}
        rows={[
          ['B1 (Thiamine)', 'Carbohydrate metabolism, nerve function', 'Whole grains, legumes, pork, dal', 'Beriberi (rare), Wernicke encephalopathy'],
          ['B2 (Riboflavin)', 'Energy metabolism, red blood cell production', 'Milk, curd, eggs, green vegetables, mushrooms', 'Angular stomatitis, skin cracks'],
          ['B3 (Niacin)', 'Energy metabolism, DNA repair', 'Groundnuts, chicken, fish, mushrooms, whole grains', 'Pellagra (dermatitis, diarrhea, dementia)'],
          ['B6 (Pyridoxine)', 'Amino acid metabolism, neurotransmitter synthesis', 'Chickpeas, bananas, potatoes, poultry, fish', 'Peripheral neuropathy, anemia'],
          ['B9 (Folate)', 'DNA synthesis, red blood cell formation, neural tube development', 'Green leafy vegetables, legumes, citrus fruits', 'Megaloblastic anemia, neural tube defects'],
          ['B12 (Cobalamin)', 'DNA synthesis, nerve function, red blood cell formation', 'Milk, curd, eggs, meat, fish — absent in plant foods', 'Megaloblastic anemia, neuropathy, cognitive decline'],
          ['Vitamin C (Ascorbic acid)', 'Collagen synthesis, antioxidant, iron absorption', 'Amla, guava, citrus, bell peppers, tomatoes', 'Scurvy, impaired wound healing, weakened immunity'],
        ]}
      />

      <h3>The Vitamin B12 Problem in Indian Vegetarians</h3>

      <p>
        Vitamin B12 is found naturally only in animal-derived foods. This makes B12 deficiency
        a major concern for India's large vegetarian population. Studies estimate that 47-75%
        of Indian vegetarians have inadequate B12 levels. Even lacto-vegetarians who consume
        dairy often have insufficient intake because the B12 content of milk and curd is
        modest (approximately 0.5-1 mcg per cup versus the RDA of 2.2 mcg/day).
      </p>

      <EvidenceBlock
        title="Vitamin B12 Deficiency and Metabolic Risk in India"
        finding="Low maternal vitamin B12 levels during pregnancy were associated with higher adiposity and insulin resistance in the offspring at age 6 years. Children born to mothers with the lowest B12 and highest folate concentrations had the highest insulin resistance, suggesting a role of B12 deficiency in India's diabetes epidemic."
        study="Prospective cohort study following 653 pregnancies and offspring in Pune, India"
        source="Yajnik et al. (2008) Diabetologia"
        details="This landmark Pune Maternal Nutrition Study found that low B12 combined with high folate (the 'folate trap') was particularly associated with adverse metabolic outcomes in offspring. Maternal B12 deficiency was extremely common — over 65% of mothers had low B12 levels. The findings suggested that B12 supplementation, not just folate supplementation, should be considered for Indian women of reproductive age, and that the widespread B12 deficiency in India may contribute to the high prevalence of insulin resistance and type 2 diabetes."
      />

      <WarningBlock
        title="Vitamin B12: A Critical Gap in Indian Vegetarian Diets">
        Vitamin B12 deficiency is often subclinical and insidious — neurological damage can occur before anemia is detectable. No plant food is a reliable source of B12 (fermented foods and spirulina contain inactive analogues). Indian vegetarians should strongly consider: (1) Regular B12 supplementation (at least 2.2 mcg/day, or 1000 mcg weekly as absorption from supplements is low). (2) Consuming B12-fortified foods if available. (3) Including milk, curd, and paneer regularly (lacto-vegetarians). (4) Getting B12 levels tested periodically, especially for vegetarians, pregnant women, and the elderly.
      </WarningBlock>

      <h2>Vitamins and Weight Management</h2>

      <p>
        While vitamins do not directly provide calories, several vitamins play important
        roles in energy metabolism and weight regulation. B vitamins (particularly B1, B2,
        B3, B5, B6, B7, and B12) are essential cofactors in the metabolic pathways that
        extract energy from macronutrients. Vitamin D deficiency has been associated with
        obesity and insulin resistance, and some intervention studies suggest that correcting
        severe vitamin D deficiency may modestly improve weight loss outcomes.
      </p>

      <p>
        During caloric restriction for weight loss, micronutrient intake often falls short
        of requirements, particularly for vitamins A, C, D, E, folate, and B12. This is
        one reason why severe caloric restriction (below 1200-1500 kcal/day) is discouraged
        without medical supervision and multivitamin supplementation. Nutrient-dense food
        choices become critically important during weight loss to ensure adequate vitamin
        intake within a reduced calorie budget.
      </p>

      <ExampleBlock
        title="Vitamin-Rich Indian Foods for Weight Management"
        problem="Foods that provide high vitamin density per calorie are ideal during weight loss: (1) Amla (Indian gooseberry) — one amla provides 600 mg vitamin C (10x the RDA) for only 30 kcal. (2) Palak (spinach) — rich in folate, vitamin A, and vitamin K at only 23 kcal per 100 g. (3) Methi (fenugreek leaves) — excellent source of folate and beta-carotene with minimal calories. (4) Curd/dahi — provides B12, B2, and calcium. (5) Eggs — one egg provides significant B12, vitamin D, vitamin A, and choline for only 70 kcal. (6) Papaya — rich in vitamin A and C at only 43 kcal per 100 g."
      />

      <ExampleBlock
        title="Preserving Vitamins in Indian Cooking"
        problem="Indian cooking methods can significantly affect vitamin retention. Heat-sensitive water-soluble vitamins (C and B vitamins) are most vulnerable. Best practices: avoid washing vegetables after cutting (leaches water-soluble vitamins), do not discard the water from boiled rice or vegetables (kanjee/starch water retains B vitamins), steam or pressure-cook rather than boiling in excess water, add amla or lemon juice after cooking for vitamin C, and do not over-cook green vegetables. Fat-soluble vitamins (A, D, E, K) are better absorbed when consumed with some fat, which is why adding a small amount of oil or ghee to sabzi actually improves nutrient absorption."
      />

      <h2>Key Takeaways</h2>

      <ul>
        <li>
          Vitamins are essential organic micronutrients classified as fat-soluble (A, D, E, K)
          or water-soluble (B-complex, C). Fat-soluble vitamins require dietary fat for
          absorption and can accumulate to toxic levels; water-soluble vitamins need regular intake.
        </li>
        <li>
          Vitamin D deficiency affects 70-90% of Indians despite abundant sunlight. Supplementation
          of 600-2000 IU/day is widely recommended for Indian populations.
        </li>
        <li>
          Vitamin B12 deficiency is endemic among Indian vegetarians (47-75% affected) and has
          implications beyond anemia, including neurological damage and metabolic programming
          of offspring. Supplementation is essential for vegetarians.
        </li>
        <li>
          B vitamins are critical cofactors for energy metabolism. Deficiency can impair the
          body's ability to extract energy from macronutrients efficiently.
        </li>
        <li>
          During weight loss, choose vitamin-dense, calorie-sparse foods (amla, leafy greens,
          curd, eggs) to meet micronutrient needs within a reduced calorie budget.
        </li>
        <li>
          Indian cooking methods significantly affect vitamin retention. Minimize water exposure
          for cut vegetables, prefer steaming and pressure-cooking, and add citrus after cooking.
        </li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
