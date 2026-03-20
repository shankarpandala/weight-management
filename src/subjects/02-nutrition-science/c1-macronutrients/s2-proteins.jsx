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
    authors: 'Leidy HJ, Clifton PM, Astrup A, Wycherley TP, Westerterp-Plantenga MS, Luscombe-Marsh ND, Woods SC, Mattes RD',
    year: 2015,
    title: 'The role of protein in weight loss and maintenance',
    source: 'American Journal of Clinical Nutrition, 101(6), 1320S-1329S',
    type: 'review',
  },
  {
    authors: 'Phillips SM, Van Loon LJ',
    year: 2011,
    title: 'Dietary protein for athletes: from requirements to optimum adaptation',
    source: 'Journal of Sports Sciences, 29(sup1), S29-S38',
    type: 'review',
  },
  {
    authors: 'FAO/WHO',
    year: 2013,
    title: 'Dietary protein quality evaluation in human nutrition: Report of an FAO Expert Consultation',
    source: 'FAO Food and Nutrition Paper No. 92, Rome',
    type: 'foundational',
  },
  {
    authors: 'Kashyap S, Shivakumar N, Varkey A, Duraisamy R, Thomas T, Preston T, Devi S, Kurpad AV',
    year: 2019,
    title: 'Ileal digestibility of intrinsically labeled hen egg and meat protein determined with the dual stable isotope tracer method in Indian adults',
    source: 'American Journal of Clinical Nutrition, 110(4), 893-903',
    type: 'clinical',
  },
  {
    authors: 'Paddon-Jones D, Westman E, Mattes RD, Wolfe RR, Astrup A, Westerterp-Plantenga MS',
    year: 2008,
    title: 'Protein, weight management, and satiety',
    source: 'American Journal of Clinical Nutrition, 87(5), 1558S-1561S',
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
    authors: 'Schaafsma G',
    year: 2000,
    title: 'The Protein Digestibility-Corrected Amino Acid Score',
    source: 'Journal of Nutrition, 130(7), 1865S-1867S',
    type: 'foundational',
  },
];

export default function Proteins() {
  return (
    <div className="prose-health">
      <h1>Proteins</h1>

      <p>
        Proteins are the structural and functional workhorses of the body. Composed of amino
        acid chains, they form the basis of muscle tissue, enzymes, hormones, antibodies, and
        virtually every cellular structure. Providing 4 kilocalories per gram, protein plays
        a uniquely important role in weight management due to its high thermic effect, superior
        satiety properties, and ability to preserve lean mass during caloric restriction.
        Understanding protein quality, quantity, and sources is particularly important in the
        Indian context, where protein deficiency and poor protein quality remain significant
        nutritional concerns.
      </p>

      <DefinitionBlock
        title="Proteins"
        definition="Large, complex molecules composed of one or more chains of amino acids linked by peptide bonds. The sequence and arrangement of 20 different amino acids determine each protein's unique three-dimensional structure and function. Dietary protein is digested into individual amino acids and small peptides, which are absorbed and used for protein synthesis, energy production, and other metabolic functions."
        notation="Energy yield: 4 kcal/g (17 kJ/g). ICMR RDA for Indians: 0.83 g/kg body weight/day for adults (approximately 48-60 g/day for most adults). Higher requirements during growth, pregnancy, lactation, and illness."
      />

      <h2>Amino Acids: The Building Blocks</h2>

      <p>
        Of the 20 standard amino acids used in protein synthesis, nine are classified as
        essential (indispensable) because the human body cannot synthesize them in adequate
        amounts. These must be obtained from the diet. The remaining eleven are non-essential
        (dispensable), meaning the body can produce them from other amino acids and metabolic
        intermediates, though some become conditionally essential during illness or stress.
      </p>

      <ComparisonTable
        title="Essential vs Non-Essential Amino Acids"
        headers={['Essential (Must eat)', 'Non-Essential (Body can make)', 'Conditionally Essential']}
        rows={[
          ['Leucine', 'Alanine', 'Arginine'],
          ['Isoleucine', 'Aspartic acid', 'Cysteine'],
          ['Valine', 'Asparagine', 'Glutamine'],
          ['Lysine', 'Glutamic acid', 'Glycine'],
          ['Methionine', 'Serine', 'Proline'],
          ['Phenylalanine', 'Tyrosine*', 'Tyrosine'],
          ['Threonine', 'Glutamine*', ''],
          ['Tryptophan', '', ''],
          ['Histidine', '', ''],
        ]}
      />

      <NoteBlock
        title="Leucine: The Key Muscle-Building Signal"
        content="Among the essential amino acids, leucine plays a uniquely important role in stimulating muscle protein synthesis through the mTOR signaling pathway. Research suggests a 'leucine threshold' of approximately 2-3 g per meal is needed to maximally stimulate muscle protein synthesis. This has practical implications: a meal needs roughly 25-30 g of high-quality protein to reach this threshold. Many traditional Indian vegetarian meals fall below this threshold per eating occasion, which is why protein distribution across meals matters."
      />

      <h2>Complete vs Incomplete Proteins</h2>

      <p>
        A complete protein source contains all nine essential amino acids in adequate
        proportions to meet human requirements. Most animal-derived proteins (meat, fish,
        eggs, dairy) are complete. An incomplete protein is deficient in one or more
        essential amino acids relative to human needs. Most individual plant proteins are
        incomplete, with specific limiting amino acids.
      </p>

      <ComparisonTable
        title="Protein Quality of Common Indian Foods"
        headers={['Food Source', 'Complete/Incomplete', 'Limiting Amino Acid', 'PDCAAS']}
        rows={[
          ['Egg (whole)', 'Complete', 'None', '1.00'],
          ['Milk / Paneer', 'Complete', 'None', '1.00'],
          ['Chicken / Mutton', 'Complete', 'None', '0.92'],
          ['Fish', 'Complete', 'None', '0.95'],
          ['Soy (tofu, chunks)', 'Complete', 'None (marginal methionine)', '0.91'],
          ['Rice', 'Incomplete', 'Lysine', '0.50'],
          ['Wheat (roti)', 'Incomplete', 'Lysine', '0.42'],
          ['Chana / Rajma (legumes)', 'Incomplete', 'Methionine', '0.65-0.78'],
          ['Moong dal', 'Incomplete', 'Methionine', '0.72'],
          ['Groundnuts', 'Incomplete', 'Lysine, threonine', '0.52'],
        ]}
      />

      <h3>Complementary Proteins</h3>
      <p>
        The concept of complementary proteins is fundamental to vegetarian nutrition and is
        deeply embedded in traditional Indian food culture. When two incomplete protein sources
        have different limiting amino acids, combining them provides all essential amino acids
        in adequate amounts. The classic combination is cereals (limiting in lysine, adequate
        in methionine) with legumes (limiting in methionine, adequate in lysine).
      </p>

      <ExampleBlock
        title="Complementary Proteins in Indian Cuisine"
        description="Traditional Indian meals naturally combine complementary proteins: dal-chawal (lentils with rice), rajma-chawal (kidney beans with rice), chole with bhatura/roti (chickpeas with wheat), idli-sambar (rice and urad dal with vegetable lentil stew), khichdi (rice and moong dal). These combinations achieve near-complete amino acid profiles. Modern research confirms that complementary proteins do not need to be consumed at the exact same meal; consuming them over the course of the same day is sufficient for adequate amino acid availability."
      />

      <h2>Protein Digestibility Scores</h2>

      <p>
        Not all protein is equally usable by the body. Protein quality assessment must
        account for both amino acid composition and digestibility. Two major scoring systems
        are used internationally.
      </p>

      <DefinitionBlock
        title="PDCAAS and DIAAS"
        definition="Protein Digestibility-Corrected Amino Acid Score (PDCAAS) is calculated by multiplying the amino acid score (the ratio of the most limiting essential amino acid in the food to the same amino acid in a reference pattern) by the protein's fecal digestibility. Values are truncated at 1.0. The newer Digestible Indispensable Amino Acid Score (DIAAS) uses ileal digestibility (at the end of the small intestine) for each individual amino acid, providing a more accurate measure. DIAAS values can exceed 1.0."
        notation="PDCAAS: Score 0-1.0 (truncated). DIAAS: Score typically 0-1.5+ (not truncated). FAO recommends DIAAS as the preferred method since 2013."
      />

      <EvidenceBlock
        title="DIAAS: The New Gold Standard"
        finding="The FAO Expert Consultation recommended replacing PDCAAS with DIAAS as the preferred method for evaluating dietary protein quality. DIAAS uses ileal digestibility of individual amino acids rather than fecal crude protein digestibility, providing a more accurate and physiologically meaningful assessment."
        study="FAO Expert Consultation on protein quality evaluation in human nutrition"
        source="FAO/WHO (2013) FAO Food and Nutrition Paper No. 92"
        details="The Expert Consultation identified several limitations of PDCAAS: it uses fecal rather than ileal digestibility (overestimating the contribution of microbially modified amino acids from the colon), it truncates values at 1.0 (preventing differentiation among high-quality proteins), and it applies a single digestibility factor to all amino acids. DIAAS addresses each of these limitations, giving a more accurate picture of how much usable amino acid a food actually delivers to the body."
      />

      <EvidenceBlock
        title="Protein Digestibility in Indian Adults"
        finding="Ileal digestibility of egg protein in Indian adults was approximately 90-95%, similar to values reported in Western populations. This confirms that protein quality assessment methods developed in Western populations are broadly applicable to Indian populations."
        study="Dual stable isotope tracer method study measuring ileal amino acid digestibility in healthy Indian adults"
        source="Kashyap et al. (2019) American Journal of Clinical Nutrition"
        details="This study from St. John's Research Institute, Bangalore, was among the first to measure true ileal amino acid digestibility using the dual stable isotope tracer method in an Indian population. The findings validated the use of international protein quality scoring methods for Indian dietary recommendations and provided important reference data for DIAAS calculations of foods consumed in Indian diets."
      />

      <h2>Protein and Weight Management</h2>

      <p>
        Protein has several unique properties that make it the most important macronutrient
        for weight management. Higher protein intakes consistently improve weight loss
        outcomes, body composition, and long-term weight maintenance across diverse
        populations.
      </p>

      <h3>Satiety</h3>
      <p>
        Protein is the most satiating macronutrient, calorie for calorie. It stimulates
        the release of satiety hormones (GLP-1, PYY, cholecystokinin) and suppresses the
        hunger hormone ghrelin more effectively than carbohydrates or fats. This leads to
        spontaneous reductions in caloric intake without conscious restriction.
      </p>

      <h3>Thermic Effect</h3>
      <p>
        Protein has the highest thermic effect of food (TEF) at 20-30% of calories consumed,
        compared to 5-10% for carbohydrates and 0-3% for fats. This means that for every
        100 kcal of protein consumed, 20-30 kcal are expended in digestion, absorption, and
        processing. This metabolic advantage is modest but meaningful over time.
      </p>

      <h3>Lean Mass Preservation</h3>
      <p>
        During caloric restriction, adequate protein intake (1.2-1.6 g/kg/day) helps preserve
        lean body mass, ensuring that a greater proportion of weight lost comes from fat rather
        than muscle. This is critical because loss of lean mass reduces basal metabolic rate,
        making weight regain more likely.
      </p>

      <EvidenceBlock
        title="Protein for Weight Loss and Maintenance"
        finding="Higher-protein diets (1.2-1.6 g/kg/day) consistently resulted in greater satiety, more fat loss with lean mass preservation, improved body composition, and better long-term weight maintenance compared to standard-protein diets."
        study="Comprehensive review of randomized controlled trials examining protein intake and body weight regulation"
        source="Leidy et al. (2015) American Journal of Clinical Nutrition"
        details="The review analyzed evidence from numerous RCTs and found that protein intakes of 25-30 g per meal were most effective for appetite control. Higher protein diets increased 24-hour energy expenditure by 80-100 kcal/day through the thermic effect of food. In weight loss trials, higher protein groups lost 1.2-2.5 kg more fat mass than lower protein groups over 6-12 months. The preservation of lean mass was particularly pronounced when higher protein intake was combined with resistance training."
      />

      <h2>Protein in the Indian Diet</h2>

      <p>
        India has one of the highest rates of protein deficiency globally. The National
        Nutrition Monitoring Bureau surveys have consistently shown that a significant
        proportion of Indian adults consume less than the RDA for protein. This is
        especially concerning for vegetarians, who constitute approximately 30-40% of the
        population, and for lower-income groups who may have limited access to protein-rich
        foods.
      </p>

      <NutritionFactBlock
        food="Moong Dal (cooked, 1 katori)"
        serving="100 g cooked (approx 30 g raw)"
        calories={105}
        protein={7}
        carbs={18}
        fat={0.5}
        fiber={3}
        highlights={[
          'One of the most digestible legumes (PDCAAS 0.72)',
          'Limiting in methionine - pair with rice for complete amino acids',
          'Rich in folate and iron',
        ]}
      />

      <NutritionFactBlock
        food="Paneer (cottage cheese, 50 g)"
        serving="50 g (approx 2 inch cube)"
        calories={140}
        protein={9}
        carbs={1}
        fat={11}
        fiber={0}
        highlights={[
          'Complete protein with all essential amino acids (PDCAAS 1.0)',
          'High in calcium (250 mg per 50 g)',
          'Calorie-dense due to fat content - moderate portions for weight management',
        ]}
      />

      <WarningBlock
        title="Protein Deficiency in Indian Vegetarian Diets"
        content="Many Indian vegetarian diets provide only 30-40 g of protein per day, well below the RDA of 48-60 g. Common pitfalls include excessive reliance on carbohydrate-heavy meals (rice/roti with minimal dal), skipping protein-rich foods at breakfast, and using very small portions of dal or paneer. To meet protein needs, vegetarians should include a protein source (dal, paneer, curd, soy, eggs if lacto-ovo) at every meal, and consider protein-rich snacks like roasted chana, sprouts, or curd."
      />

      <ExampleBlock
        title="Meeting Protein Needs on an Indian Vegetarian Diet"
        description="A practical day achieving approximately 55-60 g of protein: Breakfast - 2 moong dal chilla (12 g protein) with curd (4 g). Lunch - 2 roti (7 g) + 1 katori rajma (9 g) + raita (3 g). Snack - roasted chana 30 g (6 g) + glass of buttermilk (3 g). Dinner - 1 katori rice (3 g) + 1 katori dal (7 g) + palak paneer with 50 g paneer (9 g). Total: approximately 63 g protein. The key is including a legume, dairy, or soy product at every meal."
      />

      <h2>Key Takeaways</h2>

      <ul>
        <li>
          Protein provides 4 kcal/g and is essential for muscle, enzymes, hormones, and
          immune function. Nine essential amino acids must come from the diet.
        </li>
        <li>
          Protein quality depends on amino acid profile and digestibility. DIAAS is the
          preferred scoring method, replacing the older PDCAAS system.
        </li>
        <li>
          Complementary proteins (cereals + legumes) achieve complete amino acid profiles and
          are the foundation of traditional Indian vegetarian diets.
        </li>
        <li>
          Higher protein intakes (1.2-1.6 g/kg/day) improve satiety, preserve lean mass
          during weight loss, and increase energy expenditure through the thermic effect.
        </li>
        <li>
          Many Indian diets are protein-deficient. Including a protein source at every meal
          and aiming for 25-30 g per meal is a practical target.
        </li>
        <li>
          Animal proteins (eggs, dairy, fish, meat) are complete and highly digestible; plant
          proteins require combining and larger portions to meet equivalent needs.
        </li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
