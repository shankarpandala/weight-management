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
    authors: 'Hairston KG, Vitolins MZ, Norris JM, Anderson AM, Hanley AJ, Wagenknecht LE',
    year: 2012,
    title: 'Lifestyle factors and 5-year abdominal fat accumulation in a minority cohort: the IRAS Family Study',
    source: 'Obesity, 20(2), 421-427',
    type: 'foundational',
  },
  {
    authors: 'Estruch R, Ros E, Salas-Salvadó J, Covas MI, Corella D, Arós F, et al.',
    year: 2018,
    title: 'Primary prevention of cardiovascular disease with a Mediterranean diet supplemented with extra-virgin olive oil or nuts',
    source: 'New England Journal of Medicine, 378(25), e34',
    type: 'foundational',
  },
  {
    authors: 'Maki KC, Reeves MS, Farmer M, Yasunaga K, Matsuo N, Katsuragi Y, et al.',
    year: 2009,
    title: 'Green tea catechin consumption enhances exercise-induced abdominal fat loss in overweight and obese adults',
    source: 'Journal of Nutrition, 139(2), 264-270',
    type: 'foundational',
  },
  {
    authors: 'McKeown NM, Troy LM, Jacques PF, Hoffmann U, O\'Donnell CJ, Fox CS',
    year: 2010,
    title: 'Whole- and refined-grain intakes are differentially associated with abdominal visceral and subcutaneous adiposity in healthy adults: the Framingham Heart Study',
    source: 'American Journal of Clinical Nutrition, 92(5), 1165-1171',
    type: 'foundational',
  },
  {
    authors: 'Malik VS, Pan A, Willett WC, Hu FB',
    year: 2013,
    title: 'Sugar-sweetened beverages and weight gain in children and adults: a systematic review and meta-analysis',
    source: 'American Journal of Clinical Nutrition, 98(4), 1084-1102',
    type: 'review',
  },
  {
    authors: 'Wycherley TP, Moran LJ, Clifton PM, Noakes M, Brinkworth GD',
    year: 2012,
    title: 'Effects of energy-restricted high-protein, low-fat compared with standard-protein, low-fat diets: a meta-analysis of randomized controlled trials',
    source: 'American Journal of Clinical Nutrition, 96(6), 1281-1298',
    type: 'review',
  },
  {
    authors: 'Stanhope KL, Schwarz JM, Keim NL, et al.',
    year: 2009,
    title: 'Consuming fructose-sweetened, not glucose-sweetened, beverages increases visceral adiposity',
    source: 'Journal of Clinical Investigation, 119(5), 1322-1334',
    type: 'foundational',
  },
];

export default function FoodsReduceVisceralFat() {
  return (
    <div className="prose-health">
      <h1>Evidence-Based Foods That Reduce Visceral Fat</h1>

      <p>
        While no single food can "melt" belly fat — spot reduction through diet is a myth —
        specific dietary patterns and food components have been shown in rigorous clinical
        trials and observational studies to preferentially reduce visceral adipose tissue.
        The evidence is strongest for soluble fiber, high-protein diets, monounsaturated
        fatty acids, and whole grains, while sugar-sweetened beverages, refined carbohydrates,
        and trans fats are the most potent promoters of visceral fat gain.
      </p>

      <h2>1. Soluble Fiber: The Strongest Dietary Evidence</h2>

      <DefinitionBlock
        term="Soluble Fiber"
        definition="A type of dietary fiber that dissolves in water to form a viscous gel in the digestive tract. It slows gastric emptying, delays glucose absorption, binds bile acids (lowering cholesterol), and is fermented by gut bacteria into beneficial short-chain fatty acids (SCFAs). Found abundantly in oats, barley, legumes, flaxseed, psyllium husk (isabgol), apples, and citrus fruits."
      />

      <EvidenceBlock
        level="strong"
        title="10g/day Soluble Fiber Reduces Visceral Fat by 3.7% Over 5 Years"
        summary="Hairston et al. (2012) followed 1,114 participants in the IRAS Family Study over 5 years with CT-measured visceral fat. They found that for every 10-gram increase in daily soluble fiber intake, the rate of visceral fat accumulation decreased by 3.7% (p=0.01). This effect was independent of total caloric intake, physical activity, and other dietary factors. No similar association was found for insoluble fiber, confirming that the visceral fat benefit is specific to the soluble fraction."
        source="Hairston KG et al. Obesity. 2012;20(2):421-427."
      />

      <p>
        The mechanism behind soluble fiber's visceral fat reduction involves multiple pathways:
        it slows glucose absorption (reducing insulin spikes that promote visceral fat storage),
        increases satiety (reducing total caloric intake), produces SCFAs that inhibit visceral
        adipocyte lipogenesis, and modulates gut microbiota composition favorably.
      </p>

      <NutritionFactBlock
        title="Top Indian Sources of Soluble Fiber — per 100g"
        servingSize="100g"
        calories={0}
        protein={0}
        carbs={0}
        fat={0}
        fiber={0}
        extras={[
          { label: 'Isabgol (Psyllium husk)', value: '~70g soluble fiber' },
          { label: 'Oat bran', value: '~7g soluble fiber' },
          { label: 'Rajma (kidney beans, cooked)', value: '~3g soluble fiber' },
          { label: 'Chana dal (cooked)', value: '~2.5g soluble fiber' },
          { label: 'Sabja seeds (basil seeds)', value: '~2g soluble fiber' },
          { label: 'Flaxseed (ground)', value: '~4g soluble fiber' },
          { label: 'Guava', value: '~2g soluble fiber' },
          { label: 'Green peas', value: '~1.5g soluble fiber' },
        ]}
      />

      <ExampleBlock title="How to Get 10g of Soluble Fiber Daily (Indian Diet)">
        <ul>
          <li>Breakfast: 1 bowl oats porridge (2g) + 1 guava (2g) = 4g</li>
          <li>Lunch: 1 katori rajma or chole (2.5g) = 2.5g</li>
          <li>Evening: 1 tsp isabgol in water (3.5g) = 3.5g</li>
          <li><strong>Total: ~10g soluble fiber</strong></li>
        </ul>
        <p>
          Alternatively: 1 tsp ground flaxseed in buttermilk at lunch (2g) + 1 katori dal
          (2g) + 1 apple (1.5g) + 1 cup sabja drink (2g) + salad with cucumber and carrot
          (1g) = ~8.5g, and adding 1 tsp isabgol reaches 12g easily.
        </p>
      </ExampleBlock>

      <h2>2. High-Protein Diets: Preferential Visceral Fat Loss</h2>

      <EvidenceBlock
        level="strong"
        title="Higher Protein Intake Preserves Muscle and Reduces Visceral Fat"
        summary="A meta-analysis by Wycherley et al. (2012) of 24 randomized controlled trials found that energy-restricted high-protein diets (1.2-1.6 g/kg/day vs. standard 0.8 g/kg/day) resulted in greater loss of fat mass (-0.79 kg, p<0.01) and better preservation of lean mass (+0.43 kg, p<0.01) compared to standard-protein diets. Several individual trials using CT imaging showed that the greater fat loss was disproportionately from visceral depots."
        source="Wycherley TP et al. American Journal of Clinical Nutrition. 2012;96(6):1281-1298."
      />

      <p>
        High-protein diets reduce visceral fat through several mechanisms: increased thermic
        effect of food (protein costs 20-30% of its calories to digest vs. 5-10% for carbs),
        greater satiety per calorie, preservation of metabolically active lean mass during
        caloric deficit, and reduced insulin secretion compared to high-carbohydrate diets.
      </p>

      <p>
        For Indians following vegetarian diets, achieving high protein intake requires deliberate
        planning. Key strategies include combining dal with grains (complementary proteins),
        including paneer/tofu, adding whey protein to buttermilk, consuming eggs if lacto-ovo
        vegetarian, and incorporating soy products.
      </p>

      <h2>3. Monounsaturated Fatty Acids (MUFA): The PREDIMED Evidence</h2>

      <EvidenceBlock
        level="strong"
        title="Mediterranean Diet Rich in MUFA Reduces Central Obesity"
        summary="The PREDIMED trial (Estruch et al., 2018) — one of the largest dietary RCTs ever conducted — randomized 7,447 participants to a Mediterranean diet supplemented with extra-virgin olive oil, Mediterranean diet with nuts, or a low-fat control diet. Both Mediterranean diet groups showed significant reductions in waist circumference and central adiposity compared to the low-fat group, despite not being calorie-restricted. The MUFA-rich olive oil and nut groups also showed 30% reduction in major cardiovascular events."
        source="Estruch R et al. New England Journal of Medicine. 2018;378(25):e34."
      />

      <p>
        MUFA sources relevant to Indian cuisine include groundnut oil, mustard oil (which
        also contains omega-3 alpha-linolenic acid), almonds, cashews, and peanuts. While
        olive oil is the most studied MUFA source, Indian oils provide comparable MUFA
        content at lower cost.
      </p>

      <ComparisonTable
        title="MUFA Content of Common Indian Cooking Oils"
        headers={['Oil', 'MUFA %', 'Additional Benefits', 'Notes']}
        rows={[
          ['Groundnut (peanut) oil', '46%', 'Good smoke point, vitamin E', 'Excellent MUFA source for Indian cooking'],
          ['Mustard oil', '60% (erucic acid)', 'Omega-3 ALA, antimicrobial', 'Erucic acid safety debated; kachi ghani preferred'],
          ['Olive oil (extra virgin)', '73%', 'Polyphenols, anti-inflammatory', 'Best for salads/low-heat; expensive in India'],
          ['Rice bran oil', '39%', 'Oryzanol, balanced fatty acid profile', 'Good all-purpose option'],
          ['Coconut oil', '6%', 'MCTs (medium-chain triglycerides)', 'Very low MUFA; high saturated fat'],
          ['Refined soybean oil', '23%', 'Omega-6 (may promote inflammation)', 'Low MUFA; ubiquitous but not ideal'],
        ]}
      />

      <h2>4. Green Tea Catechins: Moderate Evidence</h2>

      <EvidenceBlock
        level="moderate"
        title="Green Tea Enhances Exercise-Induced Abdominal Fat Loss"
        summary="Maki et al. (2009) conducted a 12-week RCT in which 132 overweight adults were assigned to consume either a catechin-enriched green tea beverage (625 mg catechins/day) or a control beverage while maintaining a moderate exercise program. The green tea group lost significantly more total abdominal fat (-7.7 cm² vs. -0.3 cm²) and subcutaneous abdominal fat compared to the control group. The effect was additive to exercise, not a replacement for it."
        source="Maki KC et al. Journal of Nutrition. 2009;139(2):264-270."
      />

      <p>
        Green tea catechins, particularly epigallocatechin gallate (EGCG), appear to enhance
        fat oxidation and thermogenesis through inhibition of catechol-O-methyltransferase
        (COMT), which breaks down norepinephrine. The practical dose is 3-4 cups of green tea
        daily (approximately 400-500 mg catechins). The effect is modest and requires concurrent
        exercise — green tea alone without lifestyle changes shows minimal benefit.
      </p>

      <NoteBlock title="Practical Green Tea Guidance">
        <ul>
          <li>Brew at 70-80 degrees Celsius (not boiling) for 3-5 minutes to maximize catechin extraction.</li>
          <li>Avoid adding milk — casein binds catechins and reduces absorption.</li>
          <li>Drink between meals, not with iron-rich foods (tannins reduce iron absorption).</li>
          <li>3-4 cups daily is the evidence-based dose; more is not necessarily better.</li>
          <li>Caffeine-sensitive individuals should stop consumption by 2 PM.</li>
          <li>Green tea supplements (concentrated extracts) carry liver toxicity risk — whole tea is safer.</li>
        </ul>
      </NoteBlock>

      <h2>5. Whole Grains vs. Refined Grains: The Framingham Data</h2>

      <EvidenceBlock
        level="strong"
        title="Whole Grains Reduce Visceral Fat; Refined Grains Increase It"
        summary="McKeown et al. (2010) analyzed data from 2,834 participants in the Framingham Heart Study using CT-measured visceral fat. They found that each additional serving of whole grains per day was associated with lower visceral adipose tissue volume (-8.5 cm², p=0.003), while each additional serving of refined grains was associated with higher visceral fat (+6.7 cm², p=0.04). The effect was dose-dependent and independent of total caloric intake, physical activity, and other dietary factors."
        source="McKeown NM et al. American Journal of Clinical Nutrition. 2010;92(5):1165-1171."
      />

      <p>
        For Indian diets, this finding has enormous practical implications. The typical Indian
        meal is built around refined grains: white rice in the south and east, and maida-based
        rotis/naans in urban areas. Switching to whole-grain alternatives can meaningfully
        reduce visceral fat accumulation over time:
      </p>

      <ComparisonTable
        title="Refined vs. Whole Grain Swaps for Indian Meals"
        headers={['Refined Grain', 'Whole Grain Alternative', 'Visceral Fat Impact']}
        rows={[
          ['White rice', 'Brown rice, hand-pounded rice, or millets (ragi, jowar, bajra)', 'Significant reduction in glycemic response and visceral fat'],
          ['Maida roti/naan', 'Whole wheat atta roti (preferably multigrain)', 'Lower glycemic index, more fiber'],
          ['White bread', 'Whole wheat bread or multigrain bread', 'More fiber, slower glucose absorption'],
          ['Semolina (sooji/rava)', 'Broken wheat (dalia) or oats', 'Higher fiber, lower glycemic index'],
          ['Refined pasta', 'Whole wheat pasta or ragi noodles', 'More fiber, less visceral fat promotion'],
        ]}
      />

      <h2>6. Foods to AVOID: The Visceral Fat Promoters</h2>

      <h3>Sugar-Sweetened Beverages (SSBs) — Strongest Evidence</h3>

      <EvidenceBlock
        level="strong"
        title="Sugar-Sweetened Beverages Are the Strongest Dietary Driver of Visceral Fat"
        summary="A systematic review and meta-analysis by Malik et al. (2013) of 32 prospective studies and RCTs found that SSB consumption was consistently and significantly associated with weight gain and visceral fat accumulation. Each additional daily serving of SSBs was associated with 0.12-0.22 kg/year additional weight gain and disproportionate visceral fat deposition. The liquid fructose in SSBs bypasses normal satiety mechanisms and is rapidly converted to visceral fat through hepatic de novo lipogenesis."
        source="Malik VS et al. American Journal of Clinical Nutrition. 2013;98(4):1084-1102."
      />

      <WarningBlock title="Common Indian SSBs to Eliminate">
        <ul>
          <li><strong>Carbonated drinks:</strong> Cola, Sprite, Fanta — 35-40g sugar per 330ml can</li>
          <li><strong>Packaged fruit juices:</strong> Frooti, Real, Tropicana — often 25-30g sugar per 200ml</li>
          <li><strong>Sweetened lassi/buttermilk:</strong> Restaurant or packaged versions with added sugar</li>
          <li><strong>Sweetened tea/coffee:</strong> 2-3 spoons sugar per cup, consumed 4-6 times daily = 40-70g sugar/day from beverages alone</li>
          <li><strong>Energy drinks:</strong> Red Bull, Monster — high sugar plus stimulants</li>
          <li><strong>Rooh Afza/sharbat:</strong> Traditional syrups that are essentially sugar water</li>
        </ul>
        <p>
          The single most impactful dietary change for visceral fat reduction in most Indian
          adults is eliminating sugar from tea and coffee and avoiding packaged beverages.
          This alone can reduce daily sugar intake by 40-80 grams (160-320 empty calories).
        </p>
      </WarningBlock>

      <h3>Refined Carbohydrates</h3>
      <p>
        Maida (refined wheat flour), white rice consumed in large portions, white bread, and
        biscuits/cookies all promote rapid insulin spikes that favor visceral fat deposition.
        The Indian urban diet has shifted heavily toward refined grains over the past 3-4
        decades, coinciding with the rise in central obesity and diabetes.
      </p>

      <h3>Trans Fats</h3>
      <p>
        Partially hydrogenated vegetable oils (vanaspati/dalda), commonly used in Indian
        street food, bakery products, and some packaged foods, contain industrial trans fats
        that specifically promote visceral fat accumulation. Animal studies have shown that
        trans fat consumption, even at equivalent caloric intake, increases visceral fat
        compared to other fat types. India banned trans fats in foods above 2% in 2022, but
        enforcement remains inconsistent, particularly in the unorganized food sector.
      </p>

      <h2>Putting It All Together: A Visceral-Fat-Fighting Dietary Pattern</h2>

      <ExampleBlock title="Daily Dietary Framework for Visceral Fat Reduction">
        <ul>
          <li><strong>Soluble fiber target:</strong> 10-15g/day from dal, oats, fruits, isabgol, sabja</li>
          <li><strong>Protein target:</strong> 1.2-1.6 g/kg body weight from dal, paneer, eggs, fish, legumes</li>
          <li><strong>Cooking fat:</strong> Primarily MUFA-rich oils (groundnut, mustard); limit to 3-4 tsp/day</li>
          <li><strong>Grains:</strong> 100% whole grains — millets, brown rice, whole wheat atta</li>
          <li><strong>Green tea:</strong> 3-4 cups daily between meals (optional but beneficial)</li>
          <li><strong>Eliminate:</strong> All SSBs, sugar in tea/coffee, maida products, trans fats</li>
          <li><strong>Limit:</strong> Total sugar to &lt;25g/day (WHO recommendation); refined grains to near zero</li>
        </ul>
      </ExampleBlock>

      <NoteBlock title="Key Takeaways">
        <ul>
          <li>Soluble fiber has the strongest evidence for visceral fat reduction: +10g/day = 3.7% less visceral fat over 5 years.</li>
          <li>High-protein diets (1.2-1.6 g/kg) preferentially reduce visceral fat while preserving muscle.</li>
          <li>MUFA-rich oils (groundnut, mustard) are the best cooking fats for belly fat reduction.</li>
          <li>Whole grains reduce and refined grains increase visceral fat (Framingham data).</li>
          <li>Sugar-sweetened beverages are the single strongest dietary driver of visceral fat — eliminate them completely.</li>
          <li>Green tea catechins provide modest additive benefit when combined with exercise.</li>
        </ul>
      </NoteBlock>

      <ReferenceList references={references} />
    </div>
  );
}
