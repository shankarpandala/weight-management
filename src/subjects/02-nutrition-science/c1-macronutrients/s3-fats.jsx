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
    authors: 'Sacks FM, Lichtenstein AH, Wu JHY, Appel LJ, Creager MA, Kris-Etherton PM, Miller M, Rimm EB, Rudel LL, Robinson JG, Stone NJ, Van Horn LV',
    year: 2017,
    title: 'Dietary Fats and Cardiovascular Disease: A Presidential Advisory From the American Heart Association',
    source: 'Circulation, 136(3), e1-e23',
    type: 'review',
  },
  {
    authors: 'Mozaffarian D, Katan MB, Ascherio A, Stampfer MJ, Willett WC',
    year: 2006,
    title: 'Trans fatty acids and cardiovascular disease',
    source: 'New England Journal of Medicine, 354(15), 1601-1613',
    type: 'review',
  },
  {
    authors: 'Calder PC',
    year: 2015,
    title: 'Marine omega-3 fatty acids and inflammatory processes: Effects, mechanisms and clinical relevance',
    source: 'Biochimica et Biophysica Acta, 1851(4), 469-484',
    type: 'review',
  },
  {
    authors: 'Misra A, Sharma R, Gulati S, Joshi SR, Sharma V, Ibrahim A, Joshi S, Laxmaiah A, Kurpad A, Raj RK, Mohan V',
    year: 2011,
    title: 'Consensus dietary guidelines for healthy living and prevention of obesity, the metabolic syndrome, diabetes, and related disorders in Asian Indians',
    source: 'Diabetes Technology & Therapeutics, 13(6), 683-694',
    type: 'clinical',
  },
  {
    authors: 'Estruch R, Ros E, Salas-Salvado J, Covas MI, Corella D, Aros F, et al.',
    year: 2018,
    title: 'Primary Prevention of Cardiovascular Disease with a Mediterranean Diet Supplemented with Extra-Virgin Olive Oil or Nuts',
    source: 'New England Journal of Medicine, 378(25), e34',
    type: 'clinical',
  },
  {
    authors: 'National Institute of Nutrition (NIN)',
    year: 2020,
    title: 'Dietary Guidelines for Indians - A Manual',
    source: 'Indian Council of Medical Research, Hyderabad',
    type: 'foundational',
  },
  {
    authors: 'Simopoulos AP',
    year: 2002,
    title: 'The importance of the ratio of omega-6/omega-3 essential fatty acids',
    source: 'Biomedicine & Pharmacotherapy, 56(8), 365-379',
    type: 'review',
  },
];

export default function Fats() {
  return (
    <div className="prose-health">
      <h1>Dietary Fats</h1>

      <p>
        Dietary fats are the most energy-dense macronutrient, providing 9 kilocalories per
        gram — more than double the energy density of carbohydrates or protein. Far from
        being merely a calorie source, fats serve critical biological functions: they form
        cell membrane structures, enable absorption of fat-soluble vitamins (A, D, E, K),
        serve as precursors to hormones and signaling molecules, insulate organs, and
        regulate inflammation. The type of fat consumed has profound effects on cardiovascular
        health, metabolic function, and chronic disease risk.
      </p>

      <DefinitionBlock
        title="Dietary Fats (Lipids)"
        definition="A diverse group of hydrophobic organic molecules, primarily triglycerides (three fatty acid chains attached to a glycerol backbone). Fatty acids are classified by their chain length, degree of saturation (number of double bonds), and the position of double bonds. The four main categories are saturated fats, monounsaturated fats (MUFA), polyunsaturated fats (PUFA), and trans fats."
        notation="Energy yield: 9 kcal/g (37 kJ/g). ICMR recommendation: 20-30% of total energy from fat. Visible fat intake should not exceed 20 g/day per adult. Essential fatty acids: linoleic acid (omega-6) and alpha-linolenic acid (omega-3)."
      />

      <h2>Types of Dietary Fats</h2>

      <h3>Saturated Fats</h3>
      <p>
        Saturated fatty acids have no double bonds in their carbon chain, making them
        straight and able to pack tightly. This is why saturated fats are typically solid
        at room temperature. Major dietary sources include ghee, butter, coconut oil,
        palm oil, full-fat dairy, and the fat in red meat. Saturated fats raise LDL
        cholesterol levels, and replacing them with unsaturated fats consistently reduces
        cardiovascular disease risk.
      </p>

      <p>
        The relationship between saturated fat and health is nuanced. Not all saturated
        fatty acids have identical metabolic effects — stearic acid (found in dark chocolate
        and some meats) has a neutral effect on LDL cholesterol, while lauric, myristic,
        and palmitic acids raise it. However, the overall evidence strongly supports limiting
        saturated fat intake to less than 10% of total calories, with replacement by
        unsaturated fats rather than refined carbohydrates.
      </p>

      <h3>Monounsaturated Fats (MUFA)</h3>
      <p>
        Monounsaturated fatty acids have a single double bond in their carbon chain. The
        most common is oleic acid (omega-9), abundant in olive oil, mustard oil, groundnut
        oil, almonds, and avocados. MUFAs lower LDL cholesterol without reducing HDL
        cholesterol, improve insulin sensitivity, and are associated with reduced
        cardiovascular risk. The Mediterranean diet, which is rich in olive oil (a MUFA
        source), has shown significant cardiovascular and metabolic benefits in large trials.
      </p>

      <h3>Polyunsaturated Fats (PUFA)</h3>
      <p>
        Polyunsaturated fatty acids have two or more double bonds. The two essential fatty
        acids — linoleic acid (omega-6) and alpha-linolenic acid (omega-3) — are PUFAs.
        They cannot be synthesized by the body and must come from the diet. PUFAs are found
        in vegetable oils (sunflower, soybean, corn), fatty fish (salmon, mackerel, sardines),
        walnuts, and flaxseeds. Both omega-3 and omega-6 fatty acids are biologically
        essential, but their balance in the diet has significant health implications.
      </p>

      <h3>Trans Fats</h3>
      <p>
        Trans fats are unsaturated fats with at least one double bond in a trans configuration
        (rather than the natural cis configuration). Industrial trans fats are produced by
        partial hydrogenation of vegetable oils, a process that converts liquid oils into
        solid fats for use in processed foods. Small amounts of naturally occurring trans fats
        exist in dairy and meat from ruminant animals, but these appear to have different
        metabolic effects than industrial trans fats.
      </p>

      <ComparisonTable
        title="Types of Dietary Fats"
        headers={['Type', 'Structure', 'Effect on LDL', 'Effect on HDL', 'Key Indian Sources']}
        rows={[
          ['Saturated', 'No double bonds', 'Raises', 'Slightly raises', 'Ghee, coconut oil, butter, palm oil'],
          ['MUFA', '1 double bond', 'Lowers', 'Maintains/raises', 'Mustard oil, groundnut oil, til oil'],
          ['PUFA (omega-6)', '2+ double bonds', 'Lowers', 'May slightly lower', 'Sunflower, soybean, safflower oil'],
          ['PUFA (omega-3)', '2+ double bonds', 'Lowers triglycerides', 'May raise', 'Fish, flaxseed, walnuts, mustard oil'],
          ['Trans (industrial)', 'Trans double bond', 'Raises significantly', 'Lowers', 'Vanaspati, bakery items, fried snacks'],
        ]}
        highlightColumn={2}
      />

      <EvidenceBlock
        title="Replacing Saturated Fat Reduces CVD Risk"
        finding="Replacing 5% of energy from saturated fat with equivalent energy from polyunsaturated fat was associated with a 25% reduction in coronary heart disease events. Replacement with monounsaturated fat showed a 15% risk reduction. However, replacing saturated fat with refined carbohydrates or sugars did not reduce cardiovascular risk."
        study="AHA Presidential Advisory analyzing core clinical trials and prospective observational studies on dietary fats and cardiovascular disease"
        source="Sacks et al. (2017) Circulation"
        details="This advisory reviewed evidence from four core randomized controlled trials (with outcomes data for cardiovascular events) and numerous prospective cohort studies. The consistent finding was that the type of replacement nutrient matters critically. Replacing saturated fat with polyunsaturated fat (particularly linoleic acid) showed the most consistent benefit. The advisory reaffirmed the recommendation to limit saturated fat to less than 10% of calories, with replacement by unsaturated fats."
      />

      <h2>Omega-3 and Omega-6 Fatty Acids</h2>

      <p>
        Omega-3 and omega-6 fatty acids are both essential polyunsaturated fats, but they
        produce different classes of eicosanoids (signaling molecules). Omega-6 fatty acids
        primarily produce pro-inflammatory eicosanoids, while omega-3 fatty acids produce
        anti-inflammatory and inflammation-resolving mediators. Both inflammatory and
        anti-inflammatory processes are necessary for health, but the modern diet has
        dramatically shifted the balance toward omega-6 dominance.
      </p>

      <h3>The Omega-6 to Omega-3 Ratio</h3>
      <p>
        Ancestral human diets had an omega-6 to omega-3 ratio of approximately 1:1 to 4:1.
        Modern Western diets have ratios of 15:1 to 20:1, and typical Indian diets range
        from 20:1 to 50:1, among the highest in the world. This imbalance is driven by
        heavy use of omega-6-rich vegetable oils (sunflower, soybean, corn) and very low
        intake of omega-3 sources (fatty fish, flaxseed, walnuts). The ICMR recommends a
        ratio of 5-10:1.
      </p>

      <EvidenceBlock
        title="Omega-6/Omega-3 Ratio and Health"
        finding="A ratio of omega-6 to omega-3 of approximately 4:1 was associated with a 70% reduction in total mortality in the context of secondary prevention of cardiovascular disease. Lower ratios were also associated with reduced risk of cancer, inflammatory diseases, and autoimmune conditions."
        study="Review of the evolutionary, biological, and clinical evidence on the importance of omega-6/omega-3 balance"
        source="Simopoulos (2002) Biomedicine & Pharmacotherapy"
        details="The review found that excessive omega-6 relative to omega-3 promotes the pathogenesis of many diseases including cardiovascular disease, cancer, inflammatory and autoimmune diseases, whereas increased levels of omega-3 PUFA exert suppressive effects. The optimal ratio varies by disease condition but consistently supports increasing omega-3 intake rather than simply reducing total fat."
      />

      <ExampleBlock
        title="Improving the Omega-3 to Omega-6 Ratio in Indian Diets"
        problem="Practical strategies: (1) Replace sunflower/soybean oil with mustard oil as the primary cooking oil — mustard oil has a favorable omega-6:omega-3 ratio of approximately 6:1 compared to 70:1 for sunflower oil. (2) Include 1-2 tablespoons of ground flaxseed (alsi) daily in chutney, raita, or roti dough. (3) Eat fatty fish (rohu, hilsa, sardines, mackerel) at least twice per week if non-vegetarian. (4) Add walnuts (akhrot) as a regular snack — 4-5 walnuts provide approximately 2.5 g of ALA. (5) Use til (sesame) oil for tempering — it provides a better fatty acid profile than many refined oils."
      />

      <h2>Trans Fats: The Most Harmful Fat</h2>

      <EvidenceBlock
        title="Trans Fats and Cardiovascular Disease"
        finding="A 2% increase in energy intake from trans fats was associated with a 23% increase in the incidence of coronary heart disease. Trans fats not only raise LDL cholesterol but also lower HDL cholesterol, increase triglycerides, promote inflammation, and impair endothelial function — a uniquely harmful metabolic profile."
        study="Comprehensive review of epidemiological, clinical, and mechanistic evidence on trans fatty acids and cardiovascular disease"
        source="Mozaffarian et al. (2006) New England Journal of Medicine"
        details="The review found that trans fatty acids have a substantially more adverse effect on the LDL:HDL ratio than any other macronutrient. On a per-calorie basis, trans fats increase the risk of coronary heart disease more than any other macronutrient. The authors estimated that eliminating industrially produced trans fats from the food supply could prevent between 72,000 and 228,000 coronary events annually in the United States alone."
      />

      <WarningBlock
        title="Hidden Trans Fats in Indian Foods">
        Vanaspati (partially hydrogenated vegetable oil) remains widely used in Indian street food, bakeries, and restaurant cooking. Common high-trans-fat Indian foods include: samosas and pakoras fried in vanaspati or reheated oil, store-bought biscuits and cookies (Parle-G, cream biscuits), commercial namkeens, bakery bread and buns (pav, bun maska), and sweets made with vanaspati-based khoya. India's FSSAI has mandated a maximum of 2% trans fat in oils and fats since 2022, but enforcement varies. Always check labels for 'partially hydrogenated vegetable oil' or 'vanaspati' in ingredient lists.
      </WarningBlock>

      <h2>Fats in the Indian Diet</h2>

      <p>
        Traditional Indian cooking uses a variety of fats with distinct fatty acid profiles.
        The ICMR recommends limiting visible fat intake to 20 g per day and total fat to
        20-30% of calories. In practice, many Indian diets exceed this due to generous use
        of cooking oil, ghee, and consumption of fried foods. The choice of cooking oil has
        significant implications for fatty acid balance.
      </p>

      <ComparisonTable
        title="Common Indian Cooking Oils and Their Fatty Acid Profiles"
        headers={['Oil', 'SFA %', 'MUFA %', 'PUFA %', 'Smoke Point', 'Best Use']}
        rows={[
          ['Mustard oil', '12', '60', '21 (good n-3)', '250°C', 'All-purpose cooking, tadka'],
          ['Groundnut oil', '18', '49', '33', '230°C', 'Frying, sauteing'],
          ['Til (sesame) oil', '14', '40', '42', '210°C', 'Tempering, South Indian cooking'],
          ['Coconut oil', '87', '6', '2', '175°C', 'Light cooking, specific curries'],
          ['Ghee', '62', '29', '4', '250°C', 'Tadka, rotis (use sparingly)'],
          ['Sunflower oil', '10', '20', '66 (mostly n-6)', '230°C', 'Limit use — very high omega-6'],
          ['Rice bran oil', '20', '42', '32', '230°C', 'Deep frying (stable at high heat)'],
        ]}
      />

      <NoteBlock
        title="The ICMR Recommendation: Rotate Your Oils">
        The ICMR recommends using a combination of cooking oils rather than relying on a single oil. This ensures a balanced intake of different fatty acid types. A practical approach is to use mustard oil or groundnut oil as the primary cooking oil, with occasional use of til oil for tempering and limited ghee for flavor. Avoid using sunflower or corn oil as the sole cooking oil, as this dramatically skews the omega-6:omega-3 ratio. The total amount matters as much as the type: measure oil rather than pouring freely.
      </NoteBlock>

      <NutritionFactBlock
        food="Ghee (1 tablespoon)"
        serving="15 ml (approximately 13 g)"
        calories={120}
        protein={0}
        carbs={0}
        fat={13}
        fiber={0}
        highlights={[
          'High in saturated fat (62%) - use sparingly',
          'Contains fat-soluble vitamins A, D, E, K',
          'High smoke point (250°C) - suitable for high-heat cooking',
          'Traditional Ayurvedic value, but limit to 1-2 tsp/day for heart health',
        ]}
      />

      <h2>Fats and Weight Management</h2>

      <p>
        Due to their high caloric density (9 kcal/g), fats contribute the most calories per
        unit volume of food. This makes dietary fat an important target for calorie reduction,
        but not through fat elimination. Extremely low-fat diets (below 15% of calories) can
        impair absorption of fat-soluble vitamins, disrupt hormone production, and reduce diet
        palatability and adherence.
      </p>

      <p>
        For weight management, the key principles are: control the total quantity of added
        fats and oils (measure rather than pour), choose unsaturated fats over saturated and
        trans fats, eliminate industrial trans fats completely, and ensure adequate omega-3
        intake. Within an appropriate total caloric intake, moderate fat consumption (25-30%
        of calories) supports hormonal health, nutrient absorption, and dietary satisfaction.
      </p>

      <ExampleBlock
        title="Practical Fat Reduction in Indian Cooking"
        problem="Small changes compound: use 1 teaspoon of oil per dish instead of 2-3 tablespoons (saves 150-200 kcal per meal). Use non-stick cookware or air fryers to reduce oil needs. Steam or pressure-cook vegetables before adding a small tempering (tadka) instead of sauteing in oil. Replace malai and cream in gravies with cashew paste, tomato puree, or low-fat curd. Choose tandoori or grilled preparations over deep-fried options. Skim fat from the surface of cooled curries and gravies. These changes can reduce daily fat intake by 20-30 g (180-270 kcal) without significantly affecting taste."
      />

      <h2>Key Takeaways</h2>

      <ul>
        <li>
          Dietary fats provide 9 kcal/g and are essential for cell structure, hormone
          production, vitamin absorption, and many regulatory functions.
        </li>
        <li>
          Replace saturated fats with unsaturated fats (MUFA and PUFA) for cardiovascular
          health. Limit saturated fat to less than 10% of calories.
        </li>
        <li>
          Eliminate industrial trans fats completely. Avoid vanaspati, check labels for
          partially hydrogenated oils, and limit fried street food.
        </li>
        <li>
          Indian diets have excessively high omega-6:omega-3 ratios (20:1 to 50:1). Increase
          omega-3 sources (mustard oil, flaxseed, walnuts, fatty fish) and reduce sunflower/
          soybean oil use.
        </li>
        <li>
          The ICMR recommends rotating cooking oils and limiting visible fat to 20 g/day.
          Measure oil rather than pouring freely.
        </li>
        <li>
          For weight management, control fat quantity (high caloric density) while maintaining
          adequate intake (25-30% of calories) for health and dietary satisfaction.
        </li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
