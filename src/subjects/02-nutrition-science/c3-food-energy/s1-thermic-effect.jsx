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
    authors: 'Westerterp KR',
    year: 2004,
    title: 'Diet induced thermogenesis',
    source: 'Nutrition & Metabolism, 1(1), 5',
    type: 'review',
  },
  {
    authors: 'Halton TL, Hu FB',
    year: 2004,
    title: 'The effects of high protein diets on thermogenesis, satiety and weight loss: a critical review',
    source: 'Journal of the American College of Nutrition, 23(5), 373-385',
    type: 'review',
  },
  {
    authors: 'Tappy L',
    year: 1996,
    title: 'Thermic effect of food and sympathetic nervous system activity in humans',
    source: 'Reproduction Nutrition Development, 36(4), 391-397',
    type: 'review',
  },
  {
    authors: 'Westerterp-Plantenga MS, Lemmens SG, Westerterp KR',
    year: 2012,
    title: 'Dietary protein - its role in satiety, energetics, weight loss and health',
    source: 'British Journal of Nutrition, 108(S2), S105-S112',
    type: 'review',
  },
  {
    authors: 'Barr SB, Wright JC',
    year: 2010,
    title: 'Postprandial energy expenditure in whole-food and processed-food meals: implications for daily energy expenditure',
    source: 'Food & Nutrition Research, 54, 5144',
    type: 'clinical',
  },
  {
    authors: 'De Jonge L, Bray GA',
    year: 1997,
    title: 'The thermic effect of food and obesity: a critical review',
    source: 'Obesity Research, 5(6), 622-631',
    type: 'review',
  },
  {
    authors: 'Acheson KJ, Blondel-Lubrano A, Oguey-Araymon S, Beaumont M, Emady-Azar S, Ammon-Zufferey C, Monnard I, Pinaud S, Nielsen-Moennoz C, Bovetto L',
    year: 2011,
    title: 'Protein choices targeting thermogenesis and metabolism',
    source: 'American Journal of Clinical Nutrition, 93(3), 525-534',
    type: 'clinical',
  },
];

export default function ThermicEffectOfFood() {
  return (
    <div className="prose-health">
      <h1>Thermic Effect of Food (TEF)</h1>

      <p>
        The thermic effect of food, also known as diet-induced thermogenesis (DIT) or the
        specific dynamic action of food, refers to the increase in energy expenditure above
        the basal metabolic rate that occurs after eating. This increase represents the
        metabolic cost of digesting, absorbing, transporting, metabolizing, and storing
        the nutrients from a meal. TEF typically accounts for approximately 8-15% of total
        daily energy expenditure, making it the smallest but nonetheless meaningful component
        of the energy balance equation.
      </p>

      <DefinitionBlock
        title="Thermic Effect of Food (TEF)"
        definition="The increase in metabolic rate that occurs after ingestion of food, representing the energy cost of nutrient processing. TEF begins within minutes of eating, peaks at 1-3 hours postprandially, and can persist for 5-6 hours depending on the size and composition of the meal. It is measured as the difference between postprandial energy expenditure and basal (fasting) energy expenditure."
        notation="TEF accounts for approximately 8-15% of total daily energy expenditure. It is expressed either as a percentage of the energy content of the food consumed or as an absolute value in kcal. Also called Diet-Induced Thermogenesis (DIT) or Specific Dynamic Action (SDA)."
      />

      <h2>TEF by Macronutrient</h2>

      <p>
        The thermic effect varies substantially by macronutrient type. This variation reflects
        the different metabolic pathways and biochemical costs involved in processing each
        macronutrient. Protein has by far the highest TEF, followed by carbohydrates, then
        fats. Alcohol has an intermediate TEF. These differences have meaningful implications
        for weight management.
      </p>

      <ComparisonTable
        title="Thermic Effect by Macronutrient"
        headers={['Macronutrient', 'TEF (% of energy)', 'Net Energy per gram', 'Primary Metabolic Cost']}
        rows={[
          ['Protein', '20-30%', '~2.8-3.2 kcal', 'Deamination, urea synthesis, gluconeogenesis, protein turnover'],
          ['Carbohydrate', '5-10%', '~3.6-3.8 kcal', 'Glycogen synthesis, glucose transport, insulin secretion'],
          ['Fat', '0-3%', '~8.7-9.0 kcal', 'Minimal processing — fatty acids easily stored as triglycerides'],
          ['Alcohol', '10-30%', '~5.0-5.6 kcal (of 7 kcal/g)', 'Obligatory oxidation via alcohol dehydrogenase'],
          ['Mixed diet', '8-15%', 'Varies', 'Combined effects of all macronutrients'],
        ]}
        highlightColumn={1}
      />

      <h3>Why Protein Has the Highest TEF</h3>
      <p>
        Protein's high thermic effect (20-30%) results from the substantial metabolic cost
        of amino acid processing. Unlike fats and carbohydrates, the body has no dedicated
        storage form for excess amino acids. When protein is consumed, amino acids must be
        actively transported, deaminated (removal of the nitrogen-containing amino group),
        the nitrogen must be converted to urea for excretion (an energy-expensive cycle), and
        the carbon skeletons must be either oxidized for energy or converted to glucose or
        fatty acids. Protein turnover (the continuous breakdown and resynthesis of body
        proteins) also contributes to the high metabolic cost.
      </p>

      <h3>Why Fat Has the Lowest TEF</h3>
      <p>
        Dietary fat has a remarkably low thermic effect (0-3%) because it requires minimal
        biochemical transformation before storage. Dietary triglycerides are hydrolyzed,
        absorbed, repackaged into chylomicrons, and transported to adipose tissue where they
        are stored as triglycerides with very high efficiency. The metabolic pathway from
        dietary fat to stored body fat is essentially a transport process with minimal
        biochemical conversion, costing very little energy.
      </p>

      <EvidenceBlock
        title="Macronutrient Composition and Thermogenesis"
        finding="A review of all studies using indirect calorimetry to measure diet-induced thermogenesis found consistent values of 0-3% for fat, 5-10% for carbohydrate, and 20-30% for protein. For a typical mixed diet, TEF averaged approximately 10% of energy intake. The high TEF of protein is an obligatory metabolic cost that cannot be avoided."
        study="Comprehensive review of diet-induced thermogenesis research spanning three decades"
        source="Westerterp (2004) Nutrition & Metabolism"
        details="The review confirmed that the thermic effect of macronutrients is relatively consistent across studies and populations. For a 2000 kcal diet, shifting the macronutrient composition from 15% protein to 30% protein (keeping total calories constant) would increase daily TEF from approximately 180 kcal to approximately 240 kcal — a 60 kcal/day difference. While modest, this metabolic advantage compounds over time and contributes to the superior weight management outcomes seen with higher-protein diets."
      />

      <EvidenceBlock
        title="Protein Thermogenesis and Weight Loss"
        finding="High-protein diets consistently increased thermogenesis by 80-100 kcal/day compared to standard-protein diets at the same total caloric intake. This thermogenic advantage, combined with protein's superior satiety effects, led to significantly greater weight loss and fat loss in high-protein diet groups across multiple randomized controlled trials."
        study="Critical review of randomized controlled trials on high-protein diets, thermogenesis, and weight management"
        source="Halton & Hu (2004) Journal of the American College of Nutrition"
        details="The review analyzed 15 studies and found that the thermogenic effect of protein was the most consistent finding. The 80-100 kcal/day thermogenic advantage of high-protein diets translates to approximately 3-4 kg of additional weight loss per year, assuming all other factors remain constant. The authors noted that this thermogenic effect is separate from and additive to protein's satiety effects, which also reduce caloric intake."
      />

      <h2>Factors Affecting TEF</h2>

      <h3>Meal Size and Frequency</h3>
      <p>
        TEF is proportional to the energy content of the meal — larger meals produce a greater
        absolute thermic effect. However, there is no convincing evidence that meal frequency
        independently affects total daily TEF when total caloric intake and macronutrient
        composition are held constant. Eating six small meals versus three larger meals of the
        same total composition produces approximately the same 24-hour TEF. The popular idea
        that eating more frequently "stokes the metabolic fire" is not supported by the
        evidence.
      </p>

      <h3>Food Processing and Whole Foods</h3>
      <p>
        The degree of food processing significantly affects TEF. Whole, minimally processed
        foods require more mechanical and chemical digestion, resulting in a higher thermic
        effect compared to highly processed equivalents with the same macronutrient content.
      </p>

      <EvidenceBlock
        title="Whole Foods vs Processed Foods and TEF"
        finding="A whole-food meal (multi-grain bread with cheddar cheese) produced a thermic effect that was nearly 50% greater than an energy-matched processed-food meal (white bread with processed cheese). The postprandial energy expenditure after the whole-food meal was approximately 137 kcal compared to 73 kcal after the processed-food meal."
        study="Crossover study comparing postprandial energy expenditure from whole-food and processed-food meals"
        source="Barr & Wright (2010) Food & Nutrition Research"
        details="The study fed isocaloric meals (approximately 800 kcal) of either whole or processed foods to participants and measured energy expenditure for 5 hours postprandially. The processed meal's lower TEF was attributed to the pre-processing already done industrially — grinding, refining, and pre-cooking break down food structures that the body would otherwise need to break down metabolically. This finding has important implications: choosing whole foods (like hand-pounded rice over polished rice, or whole dal over processed instant dal) provides a metabolic advantage beyond the difference in fiber and micronutrient content."
      />

      <h3>Other Factors Influencing TEF</h3>
      <p>
        Several other factors modulate TEF. Physical fitness increases TEF, likely due to
        increased sympathetic nervous system responsiveness. Age reduces TEF, consistent
        with the overall decline in metabolic rate. Insulin resistance is associated with
        reduced TEF, which may contribute to weight gain in those with pre-diabetes or
        metabolic syndrome. Spicy foods containing capsaicin (from chili peppers, widely
        used in Indian cooking) can transiently increase TEF by 20-30% through activation
        of the sympathetic nervous system.
      </p>

      <NoteBlock
        title="TEF and Obesity"
        content="Some research suggests that obese individuals have a blunted thermic effect of food compared to lean individuals, even after adjusting for body composition and meal size. This reduced TEF may be both a cause and consequence of obesity. The difference is estimated at 20-30 kcal/day — small but potentially significant over years. Insulin resistance, which is common in obesity, impairs glucose-stimulated thermogenesis. The good news is that weight loss and improved insulin sensitivity can partially restore normal TEF, and higher-protein diets can offset the blunting effect."
      />

      <h2>Practical Applications for Weight Management</h2>

      <ExampleBlock
        title="Maximizing TEF in an Indian Diet"
        description="Strategies to increase the thermic effect of food: (1) Increase protein proportion — replace a portion of rice/roti calories with dal, paneer, eggs, or chicken at each meal. Aim for 25-30% of calories from protein. (2) Choose whole and minimally processed foods — whole moong dal over processed moong dal instant mix, hand-pounded rice over polished white rice, steel-cut oats over instant oats. (3) Add spices liberally — Indian cooking's generous use of chili, black pepper, ginger, and turmeric provides a modest TEF boost. (4) Example: A meal of whole wheat roti + rajma + raita + green chutney has a significantly higher TEF than an equivalent-calorie meal of white rice + potato curry + papad, due to more protein, more fiber, and less processing."
      />

      <WarningBlock
        title="TEF Is Important But Not Magical"
        content="While TEF differences between macronutrients are real and scientifically established, they should be viewed in proper perspective. The maximum practical TEF advantage from dietary manipulation is approximately 100-150 kcal/day — equivalent to about 10-15 minutes of brisk walking. TEF cannot compensate for a caloric surplus, and claims that certain foods have 'negative calories' (TEF exceeding their caloric content) are unfounded. No food requires more calories to digest than it provides. The real value of understanding TEF is in making informed food choices that provide a small but consistent metabolic advantage as part of a comprehensive weight management strategy."
      />

      <ExampleBlock
        title="TEF Comparison: Two Indian Meals"
        description="Consider two meals, each providing approximately 500 kcal. Meal A: 200 g white rice (350 kcal from carbs) + aloo fry (150 kcal, mostly fat). Estimated TEF: ~35-40 kcal (7-8%). Meal B: 1 multigrain roti (120 kcal) + 1 katori chana dal (150 kcal, high protein) + palak paneer with 40 g paneer (180 kcal, protein + fat) + raita (50 kcal, protein). Estimated TEF: ~65-75 kcal (13-15%). Meal B 'wastes' an additional 25-35 kcal through thermogenesis, leaves you more satisfied due to protein and fiber, and provides better micronutrient density. Over 3 meals a day, this pattern could produce a 75-100 kcal/day thermogenic advantage."
      />

      <h2>Key Takeaways</h2>

      <ul>
        <li>
          TEF accounts for 8-15% of total daily energy expenditure and represents the
          metabolic cost of processing the food you eat.
        </li>
        <li>
          Protein has the highest TEF (20-30%), followed by carbohydrate (5-10%) and fat
          (0-3%). This is an obligatory metabolic cost, not a voluntary expenditure.
        </li>
        <li>
          Higher-protein diets increase daily energy expenditure by approximately 80-100
          kcal/day through TEF alone, contributing to superior weight management outcomes.
        </li>
        <li>
          Whole, minimally processed foods produce a higher TEF than processed equivalents
          — another reason to choose traditional whole foods over packaged alternatives.
        </li>
        <li>
          Meal frequency does not independently affect total daily TEF when macronutrient
          intake is constant. "Eating small frequent meals to boost metabolism" is a myth.
        </li>
        <li>
          Spices commonly used in Indian cooking (chili, pepper, ginger) provide a modest
          additional TEF boost through sympathetic nervous system activation.
        </li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
