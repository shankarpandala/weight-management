import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import NutritionFactBlock from '../../../components/content/NutritionFactBlock.jsx';
import ComparisonTable from '../../../components/content/ComparisonTable.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

export default function ICMRGuidelinesTe() {
  return (
    <div className="prose-health">
      <h1>ICMR ఆహార నిబంధనలు మరియు భారతీయుల కోసం RDA</h1>

      <p>
        భారతీయ సంసుర్కృత నెట్‌కొర్కు (ICMR-NIN) భారతీయ జనాభా కోసం అధికారిక సిఫారసు ఆహార అనుమతి (RDA) మరియు ఆహార నిబంధనలను నిర్దేశిస్తుంది. ఈ సాక్ష్య-ఆధారిత సిఫారసులు భారత్ యొక్క నిశ్చిత ఆహార నమూనాలు, ఆహార సరఫరా, పోషక లోపం ప్రొఫైల్‌లు మరియు రోగ విధిని ఖాతా చేస్తాయి. ఈ నిబంధనలను అర్థం చేసుకోవడం - మరియు సాధారణ భారతీయ ఆహారాలు ఎక్కడ తక్కువగా ఉన్నాయో - సమర్థవంతమైన ఆహార వ్యూహాలను రూపకల్పన చేయడం ఓపెరేటివ్.
      </p>

      <DefinitionBlock
        term="Recommended Dietary Allowance (RDA)"
        definition="సుస్థ వ్యక్తుల యొక్క నిర్దిష్ట వయస్సు మరియు లింగ సమూహంలో 97-98% మందిని సంతృప్తపరచడానికి చేయలేని సరాసరి దైనిక ఆహార నిర్వహణ స్థాయి. RDA విలువలు సమీప సరిహద్దు అందించడానికి అంచనా సాధారణ అవసరం కంటే ఎక్కువ అందించబడతాయి."
      />

      {/* RDA TABLE */}
      <h2>ICMR-NIN 2020 సిఫారసు ఆహార అనుమతులు</h2>

      <ComparisonTable
        title="ప్రధాన RDA విలువలు — నిస్సారమైన వయుష్కుడు"
        headers={['పోషక', 'వయస్కుడు', 'వయస్కుడు', 'గర్భిణీ స్త్రీ', 'పాల-ఇచ్చే స్త్రీ']}
        rows={[
          ['Energy (kcal/day)', '2110', '1660', '1860 (+200)', '1960 (+300)'],
          ['Protein (g/day)', '54', '46', '56 (+10)', '62 (+16)'],
          ['Calcium (mg/day)', '1000', '1000', '1200', '1200'],
          ['Iron (mg/day)', '19', '29', '27', '23'],
          ['Zinc (mg/day)', '14', '11', '12', '14'],
          ['Vitamin A (mcg/day)', '1000', '840', '900', '950'],
          ['Vitamin C (mg/day)', '80', '65', '80', '115'],
          ['Vitamin D (IU/day)', '600', '600', '600', '600'],
          ['Fiber (g/day)', '30-40', '25-30', '28-30', '28-30'],
        ]}
      />

      <NoteBlock title="ICMR vs అంతర్జాతీయ RDA భేదాలు">
        భారతీయ ప్రోటీన్ RDA విలువలు US విలువల కంటే తక్కువ. భారతీయ క్షతిజ స్త్రీలకు ఇనుము RDA (29 mg) US (18 mg) కంటే ఎక్కువ, ఎందుకంటే భారతీయ శాకాహారం ఆహారం నిరంతరం-హిమ్ ఇనుమను అందిస్తుంది, ఇది మాంసం నుండి హిమ్ ఇనుము కంటే తక్కువ శోషణ రేటు (5-12% vs 15-35%). కాల్షియం RDA ఇటీవల 600 mg నుండి 1000 mg కు పెరిగింది (2020 నవీకరణలో), విస్తృత లోపం అంగీకరిస్తుంది.
      </NoteBlock>

      {/* WHERE INDIANS FALL SHORT */}
      <h2>భారతీయ ఆహారాలు సాధారణంగా ఎక్కడ తక్కువ ఉంటాయి</h2>

      <p>
        భారతదేశం యొక్క సంపన్న ఆహార సంప్రదాయలు ఉన్నప్పటికీ, జాతీయ ఆహార సర్వేలు అనుమోదన మరియు వాస్తవ ఆహార సరఫరాల మధ్య ముఖ్యమైన అంతరాన్ని వెల్లడి చేస్తాయి. అందువల్ల:
      </p>

      <ComparisonTable
        title="ICMR సిఫారసు Intake vs సాధారణ భారతీయ సరఫరా"
        headers={['ఆహారం సమూహం', 'ICMR సిఫారసు', 'సాధారణ భారతీయ సరఫరా', 'అంతరం', 'ఆరోగ్య ఫలితం']}
        rows={[
          ['Cereals', '180-240g/day', '350-450g/day', '60-90% అధిక', 'అధిక కార్బోహైడ్రేట్‌లు, కేలోరీ సరఫరా'],
          ['Pulses/Legumes', '60-90g/day', '30-40g/day', '50-60% లోపం', 'ప్రోటీన్ లోపం'],
          ['Vegetables', '400-500g/day', '150-200g/day', '60-70% లోపం', 'విటామిన్/ఖనిజ లోపం'],
          ['Fruits', '200g/day', '40-80g/day', '60-80% లోపం', 'విటామిన్ C, పొటాషియం లోపం'],
          ['Milk & Dairy', '300ml/day', '100-150ml/day', '50-67% లోపం', 'కాల్షియం, B12, ప్రోటీన్ లోపం'],
          ['Salt', '&lt;5g/day', '8-12g/day', '60-140% అధిక', 'హైపర్‌టెన్షన్, హృదయ సంబంధిత రోగం'],
        ]}
      />

      <EvidenceBlock
        level="strong"
        title="సెరియల్-ఆధిపత్య, ప్రోటీన్-లోపం భారతీయ ఆహారం"
      >
        NNMB డేటా సెరియల్‌లు సాధారణ శక్తి సరఫరాలో 60-75% సంపద ఉన్నాయని నిరంతరం చూపుతుంది (సిఫారసు: 45-55%), ఆ సమయంలో ప్రోటీన్-సంపూర్ణ ఆహారాలు (పప్పులు, పంటకూర, గుడ్డెలు, మాంసం) కేవలం 7-10% చెందుతాయి (సిఫారసు: 15-20%). ఈ సెరియల్-భారీ నమూనా పర్యాప్తమైన కేలోరీ సరఫరాని ఎక్కువ ప్రోటీన్, విటామిన్, మరియు ఖనిజ సరఫరాని దారి తీసుకుంటుంది — "దాచిన ఆకలి" విండిచేటపుడు.
      </EvidenceBlock>

      <WarningBlock title="భారతదేశం యొక్క సూక్ష్మమైన-పోషక లోపం సంక్షోభం">
        అనేక భారతీయలకు పర్యాప్త లేదా అధిక కేలోరీ సరఫరా ఉన్నప్పటికీ, భారతదేశం విస్తృత సూక్ష్మమైన-పోషక లోపాలను ఎదుర్కొంటుంది: ఐరన్-లోపం అనిమియా 53% స్త్రీలను మరియు 23% పురుషులను ప్రభావితం చేస్తుంది; విటామిన్ D లోపం 70-90% జనాభాను ప్రభావితం చేస్తుంది; B12 లోపం 47% జనాభాను ప్రభావితం చేస్తుంది (శాకాహారుల్లో 60-80% ఎక్కువ); కాల్షియం సరఫరా చాలా భారతీయలకు RDA కంటే 50-60% తక్కువ; జింక్ లోపం 25-30% జనాభాను ప్రభావితం చేస్తుంది.
      </WarningBlock>

      <h2>2024 నవీకరణ ఆహార నిబంధనలు</h2>

      <ExampleBlock title="2024 నిబంధన హైలైట్‌లు">
        <ul>
          <li><strong>రోజుకు 400g కూర + పండ్లు కనీసం:</strong> వైవిధ్యంపై ఆధార, కనీసం 100g ఆకు కూర</li>
          <li><strong>ప్రతిభోజనం ప్రోటీన్:</strong> ప్రతిభోజనంలో కనీసం ఒక ప్రోటీన్-సంపూర్ణ ఆహారం (దాల, పంటకూర, గుడ్డుం, మాంసం)</li>
          <li><strong>నువ్వులు చేర్చండి:</strong> నువ్వులతో సెరియల్ సరఫరాలో రెండు-మూడు భాగాన్నీ భర్తీ చేయండి</li>
          <li><strong>అల్ట్రా-ప్రాసెస్డ్ ఆహారాలను పరిమితం చేయండి:</strong> ప్రథమ స్పష్ట సూచన (నిండిన చిప్‌లు, ఇన్‌స్టంట్ నూడిల్‌లు, తీపి పానీయాలు)</li>
          <li><strong>నీల 5g/day కంటే తక్కువ:</strong> హైపర్‌టెన్షన్ సంక్షోభం ఇచ్చినప్పుడు సోడియం తగ్గుదల</li>
          <li><strong>చక్కెర 20-25g/day కు పరిమితం చేయండి:</strong> సుమారుగా 5-6 చెంచాలు, చాయ, కాఫీ, మిఠాయిలు మరియు ప్రక్రియ చేసిన ఆహారాలలో చక్కెర చేర్చుకోవడం</li>
        </ul>
      </ExampleBlock>

      <h2>భారతీయ రోజు (Vegetarian, ~1700 kcal) యొక్క నిబంధన-సంరేఖణ</h2>

      <ExampleBlock title="సంరేఖణ ఉదాహరణ">
        <ul>
          <li><strong>ఉదయం 7:30:</strong> 2 రాగీ ఇడ్లీ + 1 గిన్నె సాంబార్ + కొబ్బరి చట్నీ = ~250 kcal, 12g ప్రోటీన్</li>
          <li><strong>మధ్య ఉదయం 10:30:</strong> 1 ఫలం (అరటి/ఆపిల్) = ~80 kcal</li>
          <li><strong>లంచ్ 1:00 PM:</strong> 1 కప్ నీలం ఎర్రసు + 1 కప్ సాంబార్ + రస + పోరియాల్ + కర్ద = ~500 kcal, 18g ప్రోటీన్</li>
          <li><strong>సాయంత్రం 4:30:</strong> 1 గ్లాస్ మీలు పంటకూర = ~120 kcal, 6g ప్రోటీన్</li>
          <li><strong>విందు 7:30:</strong> 2 జవారం రోటీలు + 1 కప్ పాలక్‌ దాల + కూర రైతా = ~450 kcal, 18g ప్రోటీన్</li>
          <li><strong>సర్వసూత్రం:</strong> ~1515 kcal, ~58g ప్రోటీన్, 6+ నిర్వహణ కూర/ఫలాలు, 3 పంటకూర సేవనలు, నువ్వులు చేర్చిన</li>
        </ul>
      </ExampleBlock>

      <ReferenceList
        references={[
          'ICMR-NIN. (2020). Nutrient Requirements and Recommended Dietary Allowances for Indians. National Institute of Nutrition, Hyderabad.',
          'ICMR-NIN. (2024). Dietary Guidelines for Indians — A Manual. National Institute of Nutrition, Hyderabad.',
          'National Nutrition Monitoring Bureau (NNMB). (2017). Diet and Nutritional Status of Urban Population in India. NIN Technical Report.',
          'World Health Organization. (2020). Healthy Diet Fact Sheet. WHO Technical Report.',
        ]}
      />
    </div>
  );
}
