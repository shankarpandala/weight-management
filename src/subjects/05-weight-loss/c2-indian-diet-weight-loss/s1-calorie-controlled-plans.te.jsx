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
    id: 'icmr2020',
    authors: 'Indian Council of Medical Research (ICMR)',
    year: 2020,
    title: 'Nutrient Requirements and Recommended Dietary Allowances for Indians',
    journal: 'National Institute of Nutrition, Hyderabad',
    pages: 'A Report of the Expert Group'
  },
  {
    id: 'nin2017',
    authors: 'National Institute of Nutrition (NIN)',
    year: 2017,
    title: 'Indian Food Composition Tables',
    journal: 'National Institute of Nutrition, ICMR, Hyderabad'
  },
  {
    id: 'nin2011',
    authors: 'National Institute of Nutrition (NIN)',
    year: 2011,
    title: 'Dietary Guidelines for Indians — A Manual',
    journal: 'National Institute of Nutrition, ICMR, Hyderabad',
    pages: '2nd Edition'
  }
];

export default function CalorieControlledPlansTe() {
  return (
    <div className="prose-health">
      <h1>Calorie-Controlled Indian Meal Plans for Weight Loss — బరువు నష్టం కోసం Calorie-Controlled భారతీయ భోజన ప్రణాళికలు</h1>

      <p>
        Effective weight loss requires a consistent caloric deficit, but this does not mean abandoning the flavors, ingredients, and cultural patterns of Indian cuisine. The following three meal plans demonstrate that traditional Indian foods — dal, roti, rice, sabzi, curd — can be combined into nutritionally complete, calorie-controlled plans that support fat loss while providing adequate protein, essential micronutrients, and dietary satisfaction.
      </p>

      <p>
         प्రभावी బరువు నష్టం నిరంతర caloric deficit అవసరం, కానీ ఇది భారతీయ రంధన రుచులు, సంघటకాలు, మరియు సాంస్కృతిక నమూనాలను విడిచిపెట్టడం అర్థం కాదు. క్రింది మూడు భోజన ప్రణాళికలు సాంప్రదాయిక భారతీయ ఆహారాలు — dal, roti, rice, sabzi, curd — తగిన protein, అవసరమైన micronutrients, మరియు ఆహార సంతృప్తిని అందించిస్తూ fat loss సపోర్ట్ చేసే పోషక పూర్ణ, calorie-controlled ప్రణాళికలుగా కలిసిపోయిందని ప్రదర్శిస్తుంది.
      </p>

      <h2>Choosing Your Calorie Level — నీ Calorie Level ఎంచుకోవడం</h2>

      <p>
        The appropriate calorie level depends on your current weight, height, age, activity level, and the desired rate of loss. The following guidelines provide a starting point — individual adjustments may be needed based on progress over 2-4 weeks.
      </p>

      <p>
        తగిన calorie స్థరం ఉన్న బరువు, ఎత్తు, వయస్సు, activity level, మరియు నష్టం యొక్క కోరిక రేటు ఆధారపడి ఉంటుంది. ఈ మార్గదర్శకాలు ప్రారంభ బిందువును అందిస్తాయి — వ్యక్తిగత సర్దుబాట్లు 2-4 సప్తాహాల పురోగతి ఆధారంగా అవసరం కావచ్చు.
      </p>

      <ComparisonTable
        title="Which Calorie Level Is Right for You? — నీకు కుదిరిన Calorie Level ఏది?"
        headers={['Factor', '1,200 kcal', '1,500 kcal', '1,800 kcal']}
        rows={[
          ['Height — ఎత్తు', 'Under 155 cm', '155-170 cm', 'Over 170 cm'],
          ['Current weight — ప్రస్తుత బరువు', 'Under 55 kg', '55-80 kg', 'Over 80 kg'],
          ['Activity level — కార్యకలాప స్థరం', 'Sedentary', 'Lightly active', 'Moderately active'],
          ['Deficit type — Deficit రకం', 'Aggressive', 'Moderate', 'Mild'],
          ['Expected loss — ఆశించిన నష్టం', '0.7-1.0 kg/week', '0.5-0.7 kg/week', '0.3-0.5 kg/week'],
          ['Sustainability — సస్టైనబిలిటీ', 'Moderate (8-12 weeks max)', 'High (long-term)', 'Very high (long-term)'],
          ['Best for — ఉత్తమం', 'Shorter/lighter individuals', 'Most adults', 'Taller/heavier/active adults']
        ]}
      />

      <WarningBlock title="Important Considerations — ముఖ్యమైన పరిగణనలు">
        These meal plans are general guidelines and should not replace personalized advice from a registered dietitian, particularly if you have diabetes, kidney disease, cardiovascular conditions, or any other medical condition requiring dietary management. No adult should consume fewer than 1,200 kcal per day without medical supervision. If you experience persistent fatigue, hair loss, menstrual irregularities, or constant cold intolerance, your caloric intake may be too low.
        <br/><br/>
        ఈ భోజన ప్రణాళికలు సాధారణ మార్గదర్శకాలు మరియు నిబంధిత dietitian నుండి వ్యక్తిగత సలహా యొక్క స్థానాన్ని తీసుకోవకూడదు, ఎందుకంటే మీకు diabetes, kidney disease, cardiovascular పరిస్థితులు, లేదా ఏదైనా diet నిర్వహణ కోసం ఇతర వైద్య పరిస్థితి ఉంటే. ఎటువంటి వయోజనుడు వైద్యక감 సూపర్వైజన్ లేకుండా రోజుకు 1,200 kcal కంటే తక్కువ వినియోగించకూడదు. మీరు నిరంతర피로, జుట్టు నష్టం, masik క్రమరాహిత్యం, లేదా నిరంతర చలి అసహ్యతను అనుభవిస్తే, మీ caloric intake చాలా తక్కువ కావచ్చు.
      </WarningBlock>

      <h2>Plan 2: 1,500 kcal — Moderate Deficit (Recommended) — 1,500 kcal Moderate Deficit (సిఫారసు చేసిన)</h2>

      <NoteBlock title="Why 1,500 kcal Works for Most People — 1,500 kcal చాలా మందికి ఎందుకు పనిచేస్తుంది">
        For the average Indian adult (height 160-170 cm, weight 60-80 kg, sedentary to lightly active lifestyle), a maintenance intake falls between 1,800 and 2,200 kcal. A 1,500 kcal plan therefore creates a deficit of 300-700 kcal per day — the ideal range for sustainable fat loss. This plan can be followed indefinitely with periodic diet breaks every 6-8 weeks. It provides enough food volume for satisfaction and enough nutritional diversity for long-term health.
        <br/><br/>
        సగటు భారతీయ వయోజనుని కోసం (ఎత్తు 160-170 సెం.మీ., బరువు 60-80 kg, sedentary నుండి lightly active జీవన విధానం), నిర్వహణ intake 1,800 నుండి 2,200 kcal మధ్య పడుతుంది. 1,500 kcal ప్రణాళిక కనుక రోజుకు 300-700 kcal deficit సృష్టిస్తుంది — సస్టైనబుల్ fat loss కు ఆదర్శ పరిధి. ఈ ప్రణాళిక ప్రతి 6-8 సప్తాహాలకు periodic diet breaks తో నిరవధికంగా అనుసరించవచ్చు. ఇది సంతృప్తిక్కు తగిన ఆహార వాల్యూమ్ మరియు దీర్ఘకాలిక ఆరోగ్యం కోసం తగిన పోషక వైవిధ్యం అందిస్తుంది.
      </NoteBlock>

      <h3>Protein Optimization in Indian Diets — భారతీయ ఆహారాలలో Protein Optimization</h3>

      <ExampleBlock title="High-Protein Indian Foods (per 100g cooked) — అధిక-Protein భారతీయ ఆహారాలు (100g క్లిక్కుకు)">
        <ul>
          <li><strong>Chicken breast:</strong> ~31g protein, 165 kcal</li>
          <li><strong>Eggs (2 whole):</strong> ~13g protein, 155 kcal</li>
          <li><strong>Paneer:</strong> ~18g protein, 265 kcal</li>
          <li><strong>Toor dal (cooked):</strong> ~7g protein, 120 kcal</li>
          <li><strong>Curd/yogurt:</strong> ~4g protein, 60 kcal per 100g</li>
          <li><strong>Fish (rohu):</strong> ~17g protein, 97 kcal</li>
        </ul>
      </ExampleBlock>

      <ReferenceList references={references} />
    </div>
  );
}
