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
  },
  {
    id: 'icmr2020',
    authors: 'Indian Council of Medical Research (ICMR)',
    year: 2020,
    title: 'Nutrient Requirements and Recommended Dietary Allowances for Indians',
    journal: 'National Institute of Nutrition, Hyderabad'
  }
];

export default function SouthIndianModificationsTe() {
  return (
    <div className="prose-health">
      <h1>South Indian Diet Modifications for Weight Loss — బరువు నష్టం కోసం దక్షిణ భారతీయ ఆహార సవరణలు</h1>

      <p>
        South Indian cuisine — with its emphasis on rice, coconut, fermented batters, and oil-based preparations — presents unique challenges for weight management. However, this cuisine also offers extraordinary advantages: fermented foods (idli, dosa) with improved nutrient bioavailability, protein-rich lentil-based dishes (sambar, rasam, kootu), and a rich tradition of millets (ragi, kambu, thinai) that predates the modern health food movement. The key is not abandoning South Indian food but adapting preparation methods and portion sizes to create a caloric deficit.
      </p>

      <p>
        దక్షిణ భారతీయ సంధానం — rice, నారియల్, fermented batters, మరియు oil-based బేకరీ ఉపాధకు అందించింది — బరువు నిర్వహణ కోసం ప్రత్యేక సవాళ్లను అందిస్తుంది. అయితే, ఈ సంధానం అసాధారణ ప్రయోజనాలను కూడా అందిస్తుంది: fermented ఆహారాలు (idli, dosa) నిర్ణీత nutrient bioavailability, protein-rich lentil-based dishes (sambar, rasam, kootu), మరియు millets (ragi, kambu, thinai) యొక్క సమృద్ధ సంప్రదాయం ఆధునిక ఆరోగ్య ఆహార చలనానికి ముందుగా. కీ దక్షిణ భారతీయ ఆహారాన్ని విడిచిపెట్టడం కాదు కానీ caloric deficit సృష్టించడానికి తయారీ పద్ధతులను మరియు భాగ పరిమాణాలను అనుకూలించడం.
      </p>

      <h2>Calorie Profiles of Common South Indian Foods — సాధారణ దక్షిణ భారతీయ ఆహారాల Calorie ప్రోఫైల్‌లు</h2>

      <ComparisonTable
        title="Calorie Content: Standard vs. Modified Preparations — Calorie కంటెంట్: ప్రామాణిక vs. సవరించిన బేకరీ"
        headers={['Food Item — ఆహార దీ', 'Standard Prep (kcal)', 'Modified Prep (kcal)', 'Savings']}
        rows={[
          ['Rice dosa (1 large)', '180-220', '120-140 (less oil, thinner)', '60-80 kcal'],
          ['Idli (1 piece)', '55-65', '55-65 (already low-cal)', '0 kcal'],
          ['Coconut chutney (3 tbsp)', '90-120', '30-40 (1 tbsp only)', '60-80 kcal'],
          ['Sambar (1 katori)', '100-130', '80-100 (less oil in tempering)', '20-30 kcal'],
          ['Vada (1 piece, deep-fried)', '170-200', '90-110 (pan-fried/air-fried)', '80-90 kcal'],
          ['Rice (1 full plate)', '350-450', '150-200 (half portion)', '200-250 kcal'],
          ['Poriyal with coconut', '100-140', '70-90 (less coconut, less oil)', '30-50 kcal']
        ]}
      />

      <h2>Steamed Idli: The Best South Indian Breakfast for Weight Loss — steam చేసిన Idli: బరువు నష్టం కోసం ఉత్తమ దక్షిణ భారతీయ భోజనం</h2>

      <p>
        The humble idli is arguably the single best traditional Indian breakfast food for weight loss. At approximately 55-65 kcal per medium idli, with 2g of protein and minimal fat (since it is steamed, not fried or oiled), idli provides a low-calorie, easily digestible, fermented food that pairs perfectly with protein-rich sambar.
      </p>

      <p>
        నిరాడంబరమైన idli సందేహాస్పదంగా బరువు నష్టం కోసం ఏకైక ఉత్తమ సాంప్రదాయిక భారతీయ భోజనం. సుమారు 55-65 kcal medium idli కోసం, 2g protein మరియు కనిష్ఠ fat (steam చేసిన కాబట్టి, fried లేదా oiled కాదు), idli low-calorie, సులభంగా పचించే, fermented ఆహారాన్ని అందిస్తుంది, ఇది protein-rich sambar తో పూర్తిగా జత.
      </p>

      <NoteBlock title="Maximizing the Idli Meal — Idli భోజనాన్ని గరిష్టీకరించడం">
        Three idlis alone provide only about 6g protein — insufficient for a weight loss breakfast. The key is generous sambar (which adds dal protein), a side of curd (4g protein per 100g), or egg accompaniments. Avoid drowning idlis in coconut chutney — limit to 1 tablespoon (about 30-40 kcal) and rely on sambar for moisture and flavor instead.
        <br/><br/>
        మూడు idlis మాత్రమే సుమారు 6g protein అందిస్తాయి — బరువు నష్టం భోజనం కోసం సరిపోదు. కీ generous sambar (dal protein జోడిస్తుంది), curd యొక్క సైడ్ (100g కు 4g protein), లేదా egg ఆనుసంగ్యలు. idlis నారియల్ chutney లో మునిగిపోయే నుండి దూరపడండి — 1 tablespoon కు (సుమారు 30-40 kcal) పరిమితం చేయండి మరియు బదులుగా sambar moisture మరియు రుచి కోసం ఆధారపడండి.
      </NoteBlock>

      <h2>Millet Revival: Traditional Grains for Modern Weight Loss — Millet పునరుద్ధారణ: ఆధునిక బరువు నష్టం కోసం సాంప్రదాయిక ధాన్యాలు</h2>

      <p>
        South India has a rich tradition of millet consumption that declined with the Green Revolution's emphasis on rice and wheat. Reintroducing millets offers superior nutritional profiles for weight loss: higher fiber, higher protein, more minerals, and lower glycemic index compared to polished rice.
      </p>

      <p>
        దక్షిణ భారతదేశానికి millet వినియోగం యొక్క సమృద్ధ సంప్రదాయం ఉంది, ఆకుపచ్చ విప్లవం rice మరియు wheat ఉపర్‌కు మరీ నుండి తిరస్కరించబడింది. మిల్లెట్లను పున: ప్రవేశపెట్టడం బరువు నష్టం కోసం అధిక కంటెంట్ వాహక కవచం అందిస్తుంది: అధిక ఫైబర్, అధిక protein, మరింత నిర్మాణం, మరియు పాలిష్డ్ rice కంటే నిమ్న glycemic సూచిక.
      </p>

      <ComparisonTable
        title="Millets vs. Rice: Nutritional Comparison (per 100g dry) — Millets vs. Rice: పోషక పోలిక (100g dry కు)"
        headers={['Grain — ధాన్యం', 'Calories', 'Protein (g)', 'Fiber (g)', 'Calcium (mg)', 'Iron (mg)']}
        rows={[
          ['Polished rice', '356', '6.8', '0.2', '10', '0.7'],
          ['Ragi (finger millet)', '328', '7.3', '3.6', '344', '3.9'],
          ['Bajra (pearl millet)', '361', '11.6', '1.2', '42', '8.0'],
          ['Jowar (sorghum)', '349', '10.4', '1.6', '25', '4.1'],
          ['Foxtail millet (thinai)', '351', '12.3', '8.0', '31', '2.8']
        ]}
      />

      <ReferenceList references={references} />
    </div>
  );
}
