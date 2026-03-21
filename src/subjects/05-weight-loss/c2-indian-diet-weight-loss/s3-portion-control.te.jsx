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
    id: 'rolls2014',
    authors: 'Rolls BJ.',
    year: 2014,
    title: 'What is the role of portion control in weight management?',
    journal: 'International Journal of Obesity',
    volume: '38(Suppl 1)',
    pages: 'S1-S8',
    doi: '10.1038/ijo.2014.82'
  },
  {
    id: 'wansink2006',
    authors: 'Wansink B.',
    year: 2006,
    title: 'Mindless Eating: Why We Eat More Than We Think',
    journal: 'Bantam Books, New York'
  },
  {
    id: 'young2002',
    authors: 'Young LR, Nestle M.',
    year: 2002,
    title: 'The contribution of expanding portion sizes to the US obesity epidemic',
    journal: 'American Journal of Public Health',
    volume: '92(2)',
    pages: '246-249',
    doi: '10.2105/AJPH.92.2.246'
  },
  {
    id: 'rolls2002',
    authors: 'Rolls BJ, Morris EL, Roe LS.',
    year: 2002,
    title: 'Portion size of food affects energy intake in normal-weight and overweight men and women',
    journal: 'American Journal of Clinical Nutrition',
    volume: '76(6)',
    pages: '1207-1213',
    doi: '10.1093/ajcn/76.6.1207'
  },
  {
    id: 'hollands2015',
    authors: 'Hollands GJ, Shemilt I, Marteau TM, et al.',
    year: 2015,
    title: 'Portion, package or tableware size for changing selection and consumption of food, alcohol and tobacco',
    journal: 'Cochrane Database of Systematic Reviews',
    volume: '(9)',
    pages: 'CD011045',
    doi: '10.1002/14651858.CD011045.pub2'
  }
];

export default function PortionControlTe() {
  return (
    <div className="prose-health">
      <h1>Portion Control for Indian Foods — భారతీయ ఆహారాల కోసం Portion నియంత్రణ</h1>

      <p>
        Portion size is one of the most powerful yet underutilized levers for weight management. Research consistently shows that people eat more when given larger portions — a phenomenon so robust that it occurs regardless of hunger level, food type, or even taste. In Indian food culture, where generous servings signify hospitality and love, and where family-style serving from shared dishes is the norm, mastering portion control requires both practical techniques and a cultural mindset shift.
      </p>

      <p>
        Portion పరిమాణం బరువు నిర్వహణ కోసం అత్యంత శక్తివంతమైన కానీ అకాశపూర్ణ కంటుపడుకుండలలో ఒకటి. పరిశోధన నిరంతరం చూపుతుంది, ఆకృతిపత్ర భాగాలు ఇచ్చినప్పుడు ఎక్కువ తిందని — ఒక దృగ్విషయం ఆకారం ఉత్సాహ స్థరం, ఆహార రకం, లేదా రుచి, బరువు నిర్వహణ పరిశీలన డిజిటల్ సాధనాలు మరియు సాంస్కృతిక మానసిక మార్పుని అవసరం.
      </p>

      <h2>The Portion Size Effect: Why It Matters — Portion పరిమాణం ఎఫెక్ట్: ఇది ఎందుకు ముఖ్యమైనది</h2>

      <EvidenceBlock
        level="strong"
        source="Rolls et al. (2002); Hollands et al. (2015) — Cochrane Review"
      >
        In a series of landmark experiments, Barbara Rolls and colleagues demonstrated that increasing portion size by 50% led to a 16% increase in energy intake at that meal, with no compensatory reduction at subsequent meals. A Cochrane systematic review of 72 studies confirmed that larger portions, packages, and tableware consistently increase food consumption. The effect size is large: people exposed to larger portions consumed an average of 215 kcal more per day — enough to cause approximately 10 kg of weight gain per year if sustained.
      </EvidenceBlock>

      <h2>The Hand-Based Portion Guide for Indian Foods — భారతీయ ఆహారాల కోసం Hand-Based Portion గైడ్</h2>

      <ExampleBlock title="Your Hand as a Measuring Tool — నీ చేయి ఒక Measuring సాధనగా">
        <ul>
          <li>
            <strong>Fist (closed) = 1 cup / 1 katori:</strong> rice, dal, cooked vegetables కోసం ఉపయోగించండి. నుండి సిద్ధమైన rice ఒక fist ≈ 150g ≈ 180-195 kcal. బరువు నష్టం కోసం, ఒక fist rice భోజనం గరిష్ఠ లక్ష్యం.
          </li>
          <li>
            <strong>Palm (fingers and thumb excluded) = protein serving:</strong> నీ palm చేయి మరియు మందు చేయి కలిగిన వ్యక్తిగత సేవ. ఒక palm చికెన్/fish ≈ 85-100g ≈ 25-30g protein. భోజనానికి 1-2 palms protein లక్ష్యం.
          </li>
          <li>
            <strong>Thumb (tip to base) = fat serving:</strong> oil, ghee, butter, లేదా nut butter యొక్క ఒక అంగుళ్ల సంచిక ≈ 1 tablespoon ≈ 100-120 kcal. బరువు నష్టం కోసం, రోజుకు 4-6 thumb-servings జోడిత fat పరిమితం.
          </li>
          <li>
            <strong>Two open hands (cupped together) = vegetable serving:</strong> ఈ generous కూరకూర raw లేదా సిద్ధమైన non-starchy vegetables ≈ 1 cup ≈ 25-50 kcal. భోజనానికి 2-3 double-hand vegetables సేవలు లక్ష్యం.
          </li>
        </ul>
      </ExampleBlock>

      <h3>Calorie Estimates for Common Indian Foods Using Hand Measures — Hand చేతిని ఉపయోగించి సాధారణ భారతీయ ఆహారాల కోసం Calorie అంచనాలు</h3>

      <ComparisonTable
        title="Hand Portions for Indian Foods — భారతీయ ఆహారాల కోసం Hand భాగాలు"
        headers={['Food — ఆహారం', 'Hand Measure', 'Approximate Weight', 'Approximate Calories']}
        rows={[
          ['Cooked rice', '1 fist', '150g', '180-195 kcal'],
          ['Roti (1 medium)', '1 open hand spread', '35-40g (atta)', '100-120 kcal'],
          ['Cooked dal (thick)', '1 fist', '150ml', '120-150 kcal'],
          ['Chicken breast', '1 palm', '85-100g', '140-165 kcal'],
          ['Paneer', '1 palm', '60-75g', '160-200 kcal'],
          ['Fish fillet', '1 palm', '85-100g', '85-120 kcal'],
          ['Cooked vegetables', '2 cupped hands', '150-200g', '40-80 kcal'],
          ['Cooking oil', '1 thumb', '~15ml', '120 kcal'],
          ['Curd/yogurt', '1 fist', '100-125g', '60-75 kcal']
        ]}
      />

      <h2>The Thali Method: Building a Balanced Plate — Thali విధానం: సమతుల్య తెలుగు నిర్మాణం</h2>

      <DefinitionBlock term="The Weight-Loss Thali — బరువు-నష్టం Thali">
        A portion-controlled Indian plate where approximately 50% of the plate area is filled with vegetables (sabzi, salad), 25% with whole grain carbohydrates (rice, roti), and 25% with protein-rich foods (dal, chicken, fish, paneer, eggs). This replaces the typical Indian plate composition of 50-60% carbohydrates, 20-30% vegetables, and 10-20% protein.
        <br/><br/>
        A portion-నియంత్రిత Indian తెలుగు, కర్ర చుట్టూ 50% సాగిందిలోమ vegetables (sabzi, salad), 25% సాఖ్య నిండిన carbohydrates (rice, roti), మరియు 25% protein-rich foods (dal, చికెన్, fish, paneer, అండ్లు) సరిపోయింది. ఇది సాధారణ Indian తెలుగు సమ్మతుకు 50-60% carbohydrates, 20-30% vegetables, మరియు 10-20% protein ఇటిచెయ్యడం.
      </DefinitionBlock>

      <ExampleBlock title="Building the Weight-Loss Thali — బరువు-నష్టం Thali నిర్మాణం">
        <p><strong>The Half-Plate Vegetables (50% of plate) — Half-Plate Vegetables (తెలుగు 50%)</strong></p>
        <ul>
          <li>1 katori sabzi (seasonal vegetable cooked with 1 tsp oil) — 1 katori sabzi (season vegetable 1 tsp oil తో సిద్ధమైన)</li>
          <li>1 katori salad (cucumber, tomato, onion, carrot, radish — raw) — 1 katori salad (కాకిరి, టొమాటో, ఉల్లి, గాజర, రేడిష్ — raw)</li>
          <li><strong>Total from vegetables: ~100-150 kcal, high fiber, high volume</strong></li>
        </ul>
        <p><strong>The Quarter-Plate Grain (25% of plate) — Quarter-Plate నిండిన (తెలుగు 25%)</strong></p>
        <ul>
          <li>1 small fist of rice (~100g cooked) OR 1.5 medium rotis — 1 small fist rice (~100g సిద్ధమైన) OR 1.5 మధ్యస్థ rotis</li>
          <li><strong>Total from grain: ~150-180 kcal</strong></li>
        </ul>
        <p><strong>The Quarter-Plate Protein (25% of plate) — Quarter-Plate Protein (తెలుగు 25%)</strong></p>
        <ul>
          <li>1 katori dal (thick) OR 1 palm-sized piece chicken/fish OR 1 palm paneer/eggs</li>
          <li><strong>Total from protein: ~120-200 kcal</strong></li>
        </ul>
        <p><strong>Complete thali total: ~370-530 kcal — a well-controlled main meal</strong></p>
      </ExampleBlock>

      <h2>Cooking Oil: The Invisible Calorie — Cooking Oil: The అదృశ్య Calorie</h2>

      <p>
        Indian cooking uses substantial amounts of oil for tempering (tadka), sauteing, deep frying, and finishing. One tablespoon (15ml) of any cooking oil — whether olive, mustard, coconut, or refined — contains approximately 120 kcal. Many Indian households use 4-8 tablespoons of oil per meal for a family of four, adding 120-240 kcal per person from oil alone.
      </p>

      <p>
        భారతీయ రంధన tadka కోసం గణనీయ నూనె ఉపయోగిస్తుంది (tadka), sauteing, లోతైన frying, మరియు ముగింపు. ఒక tablespoon (15ml) ఏదైనా చేయి నూనె — olive, సరసుపు, నారియల్, లేదా refined — సుమారు 120 kcal కలిగి ఉంటుంది. అనేక భారతీయ గృహాలు నాలుగు జనాల కుటుంబం కోసం భోజనానికి 4-8 tablespoons నూనె ఉపయోగిస్తాయి, నూనె నుండి మాత్రమే జనకుకు 120-240 kcal జోడిస్తూ.
      </p>

      <WarningBlock title="The Total Oil Rule — మొత్తం Oil నియమం">
        For weight loss, total added cooking fat (oil + ghee + butter) should not exceed 3-4 teaspoons (15-20ml) per person per day across all meals. This provides 120-180 kcal from cooking fat — a significant but manageable portion of total intake. Measure oil with teaspoons, never pour from the bottle. Use non-stick cookware and cooking sprays to reduce the minimum oil needed for cooking.
        <br/><br/>
        బరువు నష్టం కోసం, మొత్తం జోడించిన cooking fat (oil + ghee + butter) సమస్ त meals భోజనానికి జనకుకు రోజుకు 3-4 teaspoons (15-20ml) ఉండకూడదు. ఇది cooking fat నుండి 120-180 kcal అందిస్తుంది — ఒక ముఖ్యమైన కానీ నిర్వహణీయ మొత్తం సేవ భాగం. oil teaspoons తో కొలవండి, ఎటువంటీ సమయంలో bottle నుండి పోయవద్దు. non-stick రక్తస్రావం మరియు cooking sprays ఉపయోగించండి రంధనం కోసం కనిష్ఠ నూనె తగ్గించటానికి.
      </WarningBlock>

      <ReferenceList references={references} />
    </div>
  );
}
