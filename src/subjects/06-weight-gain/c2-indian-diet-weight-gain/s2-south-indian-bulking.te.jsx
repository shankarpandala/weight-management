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
    id: 'nin2017',
    authors: 'National Institute of Nutrition (NIN)',
    year: 2017,
    title: 'Indian Food Composition Tables',
    journal: 'National Institute of Nutrition, ICMR, Hyderabad'
  },
  {
    id: 'icmr2020',
    authors: 'Indian Council of Medical Research (ICMR)',
    year: 2020,
    title: 'Nutrient Requirements and Recommended Dietary Allowances for Indians',
    journal: 'National Institute of Nutrition, Hyderabad'
  }
];

const plan2500 = {
  title: '2,500 కెకెల్ దక్షిణ భారతీయ పిన్న బల్క్ ప్రణాళిక',
  description: '60-75 కిలోల కండర శిక్షణ కోసం సాంఘిక కెలోరిక్ సర్ప్లస్ కోసం రూపొందించారు. సంప్రదాయవంత దక్షిణ భారతీయ ఆహారాలను గరిష్ఠ పోషణ సాంద్రతకు సిద్ధం చేయడానికి. సారీకరణ 3-5 రోజుల శిక్షణ కోసం సరిపడినది.',
  totalCalories: 2500,
  macros: { protein: 150, carbs: 280, fat: 78 },
  meals: [
    {
      name: 'భోజనం (7:00-7:30 ఎఎమ్)',
      calories: 520,
      items: [
        'గుడ్డె డోసా — 2 విపులమైన (డోసా బెట్టర్ తరచే, ప్రతి 1 గుడ్డె క్రాక్ చేయండి, 1 చెట్టు ఆయిల్)',
        'సాంభర్ — 1 విపులమైన కేటోరీ (200 మిలీ) డ్రమస్టిక్, గాజర, మరియు బ్రిన్జాల్ సాధారణంగా లేదు',
        'కోకోనట్ చట్నీ — 2 సుపుర్ణలు',
        'ఆపిల్ — 1 విపులమైన',
        'ఫిల్టర్ కాఫీ ఫుల్ క్రీమ్ మిల్క్ (150 మిలీ) — 1 కప్పు'
      ]
    }
  ]
};

const plan3000 = {
  title: '3,000 కెకెల్ దక్షిణ భారతీయ బల్కింగ్ ప్రణాళిక',
  description: '75-95 కిలోల వ్యక్తుల కోసం రూపొందించారు లేదా అధిక శిక్షణ (5-6 రోజులు/వారం), అధిక NEAT, లేదా హార్డ్‌గేనర్ జీవన కారణంగా అధిక కెలోరిక్ అవసరాలు. కెలోరిక్ సేవ గరిష్ఠం ఘీ, కోకోనట్, మరియు కెలోరిక్-సాంద్రమైన దక్షిణ భారతీయ సమర్థకరణల దూర వాడకం.',
  totalCalories: 3000,
  macros: { protein: 180, carbs: 340, fat: 93 },
  meals: [
    {
      name: 'భోజనం (7:00-7:30 ఎఎమ్)',
      calories: 650,
      items: [
        'పేసరట్టు (మూంగ్ డాల్ డోసా) — 2 విపులమైన upma సరిపోయిన',
        'గుడ్డె డోసా — 3 (1 గుడ్డె + 1 చెట్టు ఆయిల్)',
        'ఇడ్లీ — 5 మధ్యమ 2 కేటోరీ సాంభర్ కలిసిన',
        'కోకోనట్ చట్నీ — 2 సుపుర్ణలు + పిండి చట్నీ — 2 సుపుర్ణలు',
        'ఉడికిన గుడ్డెలు — 2 పూర్ణ (ఆహార డోసా కాకపోతే)',
        'ఆపిల్ — 1 విపులమైన',
        'ఫుల్ క్రీమ్ మిల్క్ కాఫీ లేదా టీ — 1 విపులమైన కప్పు (200 మిలీ మిల్క్)'
      ]
    }
  ]
};

export default function SouthIndianBulkingTe() {
  return (
    <div className="prose-health">
      <h1>దక్షిణ భారతీయ బల్కింగ్ భోజన ప్రణాళికలు</h1>
      <h1>South Indian Bulking Meal Plans</h1>

      <p>
        దక్షిణ భారతీయ ఆహారం, అరటిపండు, కోకోనట్, డాల్-ఆధారిత కూరలు, ఘీ మరియు ఆయిల్ యొక్క ఉదారమైన వాడకపై దృష్టి సారిస్తుంది, సహజంగా చిన్న-కెలోరిక్ తిన్నవారికి సరిపడినది. సంప్రదాయవంత దక్షిణ భారతీయ "భోజనాలు" (సంపూర్ణ థాలీ చెపుడతో, సాంభర్, రసం, కూటు, పోరియల్, మరియు కర్ద) సులభంగా 700-1,000 కెకెల్ అందించగలిగిన విస్తరిత సరిపోయిన — కండర-నిర్మాణ డైట్‌కు ఉత్తమ ఆధారం సాధన చేస్తుంది. ఈ విభాగం రెండు సంపూర్ణ దక్షిణ భారతీయ బల్కింగ్ ప్రణాళికలను (2,500 మరియు 3,000 కెకెల్) అందిస్తుంది, సుపరిచిత దక్షిణ భారతీయ ఆహారాలను ఉపయోగించిన ముందు- మరియు తరువాత-సెషన్ భోజన ఉపాయాలతో.
      </p>

      <p>
        South Indian cuisine, with its emphasis on rice, coconut, lentil-based
        curries, and generous use of oil and ghee, is naturally well-suited for
        high-calorie eating. The traditional South Indian "meals" (full thali
        with rice, sambar, rasam, kootu, poriyal, and curd) can easily deliver
        700-1,000 kcal when portions are generous — making it an excellent
        foundation for a muscle-building diet. This section provides two complete
        South Indian bulking plans (2,500 and 3,000 kcal), along with pre- and
        post-workout meal strategies using familiar South Indian foods.
      </p>

      <h2>దక్షిణ భారతీయ బల్కింగ్ సూత్రాలు</h2>

      <NoteBlock title="అధిక-కెలోరిక్ దక్షిణ భారతీయ తిన్నవారికి కీలక ఉపాయాలు">
        <ul>
          <li>
            <strong>ఉదారమైన చెపుడు సిరాలు:</strong> బరువు నష్టం చెపుడు సीమిత, బల్కింగ్ 200-300 గ్రాఫ్ చేపుడు సిద్ధం (1.5-2 కేటోరీ) అందించడానికి. చెపుడు సులభంగా జీర్ణయోగ్యమైనది మరియు త్వరిత గ్లైకోజన్ పూరక అందిస్తుంది.
          </li>
          <li>
            <strong>సేవ సమయానికి జోడించిన ఘీ:</strong> 1 సుపుర్ణ ఘీ చెపుడు ముందు చెపుడు. ఇది 135 కెకెల్ జోడిస్తుంది సందర్భం వాల్యూమ్ తగ్గించకుండా.
          </li>
          <li>
            <strong>కోకోనట్-ఆధారిత కూరలు:</strong> దక్షిణ భారతీయ గ్రేవీలు కోకోనట్ పాల లేదా కోకోనట్ పేస్ట్ ఉపయోగించి సహజంగా కెలోరిక్-సాంద్రమైన. కోకోనట్ పాల-ఆధారిత చిరుతపిండి కూర టమోటో-ఆయన్ ఆధారిత కంటే 30-50% ఎక్కువ కెలోరీలు అందిస్తుంది.
          </li>
          <li>
            <strong>అదనపు ఇడ్లీ/డోసా:</strong> ఇడ్లీల సంఖ్య 3 నుండి 5కు సరిపోయిన ~120 కెకెల్ జోడిస్తుంది. సాధారణ డోసాల కంటే గుడ్డె డోసాలు చేస్తే గుడ్డె నుండి ~70 కెకెల్ జోడిస్తుంది.
          </li>
          <li>
            <strong>ప్రతి భోజనం ప్రోటీన్:</strong> ప్రతిটి భోజనం ప్రత్యక్ష ప్రోటీన్ సూత్రం కలిగి ఉండేందుకు ఖచ్చితం — గుడ్డెలు, చిరుతపిండి, చేపలు, పెనీర్, లేదా ఉదారమైన డాల్. దక్షిణ భారతీయ భోజనాలు కార్బోహైడ్రేట్-భారీలు ప్రోటీన్ నిర్దేశపరంగా చేర్చబడనట్లయితే.
          </li>
          <li>
            <strong>కెలోరిక్ వాహనం గా రాగి:</strong> రాగి మడ్డ, రాగి పుట్టుపిండి, మరియు రాగి పాల సరిపోయిన అన్నీ కెలోరిక్-సాంద్రమైన సంప్రదాయవంత ఎంపికలు కూడా సూక్ష్మపోషక శ్రేష్ఠ పోషణ అందిస్తాయి.
          </li>
        </ul>
      </NoteBlock>

      <h2>సారాంశం</h2>

      <NoteBlock title="కీ టేకవే">
        <ol>
          <li>
            దక్షిణ భారతీయ ఆహారం సహజంగా ఉదారమైన చెపుడు సిరాలు, కోకోనట్-ఆధారిత కూరలు, మరియు ఘీ/ఆయిల్ జోడింపుల ద్వారా అధిక-కెలోరిక్ తిన్నవారికి సరిపడినది.
          </li>
          <li>
            2,500 కెకెల్ ప్రణాళిక 60-75 కిలోల వ్యక్తులకు సరిపడినది; 3,000 కెకెల్ ప్రణాళిక 75-95 కిలోల వ్యక్తులకు లేదా అధిక కార్యకలాప స్థాయిలు సరిపడినది.
          </li>
          <li>
            ప్రోటీన్ ప్రతిటి భోజనం తీసుకోవడానికి నిర్దేశపరంగా చేర్చబడాలి — సంప్రదాయవంత దక్షిణ భారతీయ భోజన సందర్భం కార్బోహైడ్రేట్-ఆధిక్య ఆవశ్యక ప్రోటీన్ కోసం సమర్థన చేసిన.
          </li>
          <li>
            ముందు-సెషన్: సులభంగా జీర్ణయోగ్యమైన కార్బోహైడ్రేట్-ఫోకస్ దక్షిణ భారతీయ ఆహారాలను ఎంచుకోండి (ఇడ్లీ, డోసా, ఆపిల్, రాగి పుట్టుపిండి) 45-90 నిమిషాల ముందు శిక్షణకు.
          </li>
          <li>
            తరువాత-సెషన్: ప్రోటీన్ (దేశీ, గుడ్డెలు, చిరుతపిండి) కార్బోహైడ్రేట్‌లతో (చెపుడు, ఆపిల్, రాగి) కలపండి శిక్షణ తరువాత 1-2 గంటలలో.
          </li>
          <li>
            సంయుక్త 150-180 గ్రాఫ్ ప్రోటీన్ బల్క డాల్ సిరాలను రెట్టింపు చేసి, రోజువారీ పెనీర్, ఉదారమైన కర్ద, సోయా సరిపోయిన, మరియు 1-2 సుపుర్ణ దేశీ ద్వారా చేరుకోవచ్చు.
          </li>
        </ol>
      </NoteBlock>

      <ReferenceList references={references} />
    </div>
  );
}
