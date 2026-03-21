import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

const references = [
  { authors: 'Hurrell R, Egli I', year: 2010, title: 'Iron bioavailability and dietary reference values', source: 'American Journal of Clinical Nutrition, 91(5), 1461S-1467S', type: 'review' },
  { authors: 'Gibson RS, Bailey KB, Gibbs M, Ferguson EL', year: 2010, title: 'A review of phytate, iron, zinc, and calcium concentrations in plant-based complementary foods', source: 'Food and Nutrition Bulletin, 31(2 Suppl), S108-S122', type: 'review' },
  { authors: 'Shoba G, Joy D, Joseph T, Majeed M, Rajendran R, Srinivas PS', year: 1998, title: 'Influence of piperine on the pharmacokinetics of curcumin in animals and human volunteers', source: 'Planta Medica, 64(4), 353-356', type: 'clinical' },
  { authors: 'Hotz C, Gibson RS', year: 2007, title: 'Traditional food-processing and preparation practices to enhance the bioavailability of micronutrients in plant-based diets', source: 'Journal of Nutrition, 137(4), 1097-1100', type: 'review' },
  { authors: 'Gupta RK, Gangoliya SS, Singh NK', year: 2015, title: 'Reduction of phytic acid and enhancement of bioavailable micronutrients in food grains', source: 'Journal of Food Science and Technology, 52(2), 676-684', type: 'review' },
];

export default function BioavailabilityTe() {
  return (
    <div className="prose-health">
      <h1>Bioavailability</h1>

      <p>
        ఆహార ప్యాకేజీ మీద ఉన్న nutrition label మీకు ఏ nutrients ఉన్నాయో చెబుతుంది — కానీ మీ
        శరీరం నిజంగా ఎంత absorb చేసుకుంటుందో చెప్పదు. మీరు తినేది మరియు మీ cells కు అందేది
        మధ్యలో ఉన్న ముఖ్యమైన అంతరమే bioavailability. ఈ concept భారతీయ ఆహారాల్లో చాలా
        ముఖ్యమైనది, ఎందుకంటే సాంప్రదాయ food processing పద్ధతులు (నానబెట్టడం, పులియబెట్టడం,
        మొలకెత్తించడం) మరియు మసాలా కలయికలు — ఇవన్నీ ఎక్కువగా plant-based ఆహారాల నుండి
        nutrient absorption ను గరిష్టంగా పెంచడానికి శతాబ్దాలుగా అభివృద్ధి చేయబడ్డాయి.
      </p>

      <DefinitionBlock
        title="Bioavailability"
        definition="ఒక nutrient జీర్ణమై, absorb అయి, శరీరంలో వాడుకకు లేదా నిల్వకు అందుబాటులో ఉండే proportion ను bioavailability అంటారు. 100% bioavailability ఉన్న nutrient పూర్తిగా absorb అవుతుంది; 5% bioavailability అంటే 95% absorb కాకుండా అలాగే బయటకు వెళ్ళిపోతుంది."
        notation="Bioavailability ఈ factors మీద ఆధారపడుతుంది: (1) food matrix, (2) nutrient యొక్క chemical form, (3) అదే సమయంలో తినే ఇతర ఆహారాలు (enhancers/inhibitors), (4) వ్యక్తిగత factors (gut health, వయసు, nutrient status), మరియు (5) food processing/preparation పద్ధతులు."
      />

      <h2>Anti-Nutrients: Absorption ను అడ్డుకునేవి</h2>

      <h3>Phytates (Phytic Acid)</h3>
      <p>
        whole grains, legumes, nuts, మరియు seeds లో ఉంటాయి — ఇవి భారతీయ ఆహారాల్లో ప్రధాన
        పదార్థాలు. Phytates iron, zinc, calcium, మరియు magnesium ను insoluble complexes గా
        మార్చి absorb కాకుండా చేస్తాయి. ఒక్క dal-rice భోజనంలో 500-1000mg phytate ఉండవచ్చు,
        ఇది iron absorption ను 50-80% మరియు zinc absorption ను 15-50% తగ్గించగలదు.
      </p>

      <h3>Oxalates</h3>
      <p>
        spinach (palak), amaranth, మరియు beetroot లో ఎక్కువగా ఉంటాయి. Oxalates calcium ను
        bind చేస్తాయి — spinach లో కాగితం మీద చాలా calcium ఉన్నట్టు కనిపిస్తుంది, కానీ
        కేవలం 5% మాత్రమే bioavailable (milk నుండి 32% తో పోలిస్తే). అందుకే
        &quot;calcium కోసం palak paneer&quot; అనేది తప్పుదారి పట్టించేది — paneer calcium
        ఇస్తుంది, కానీ spinach లోని oxalates దాని absorption ను తగ్గిస్తాయి.
      </p>

      <h3>Tannins</h3>
      <p>
        tea, coffee, red wine, మరియు కొన్ని legumes లో ఉంటాయి. Tannins iron ను bind చేసి
        absorption ను 60-80% తగ్గిస్తాయి. భోజనంతో పాటు లేదా భోజనం తర్వాత వెంటనే chai తాగే
        సాధారణ భారతీయ అలవాటు iron absorption ను గణనీయంగా దెబ్బతీస్తుంది — NFHS-5 ప్రకారం
        భారతదేశంలో 53% మహిళలు anemic గా ఉన్నారు, ఈ విషయంలో ఇది చాలా ఆందోళన కలిగించే అంశం.
      </p>

      <h3>Lectins</h3>
      <p>
        పచ్చి legumes మరియు grains లో ఉంటాయి. Lectins intestinal lining ను దెబ్బతీసి nutrient
        absorption ను తగ్గించగలవు. బాగా వండడం వల్ల చాలా lectins నాశనమవుతాయి — అందుకే పచ్చి
        లేదా సరిగ్గా ఉడకని rajma (kidney beans) తింటే తీవ్రమైన GI సమస్యలు వస్తాయి.
      </p>

      <EvidenceBlock
        title="Processing ద్వారా Phytate తగ్గింపు"
        finding="నానబెట్టడం phytate ను 20-30% తగ్గిస్తుంది, germination (మొలకెత్తించడం) 35-50%, fermentation (పులియబెట్టడం) 50-75%, మరియు నానబెట్టి తర్వాత పులియబెట్టడం కలిపి చేస్తే phytate ను 90% వరకు తగ్గించగలదు. ఈ పద్ధతులు iron మరియు zinc bioavailability ను గణనీయంగా మెరుగుపరుస్తాయి."
        study="Systematic review of food processing methods for phytate reduction"
        source="Gupta et al. (2015) Journal of Food Science and Technology"
        details="ఈ review సాంప్రదాయ మరియు ఆధునిక food processing పద్ధతులపై డజన్ల కొద్దీ studies ను విశ్లేషించింది. Fermentation అత్యంత ప్రభావవంతమైన ఒంటరి పద్ధతి, ఎందుకంటే microbial phytases phytic acid ను చురుగ్గా విచ్ఛిన్నం చేస్తాయి. ఇది సాంప్రదాయ భారతీయ పద్ధతులను ధృవీకరిస్తుంది: idli/dosa batter పులియబెట్టడం, రాత్రంతా dal నానబెట్టడం, మరియు moong/chana మొలకెత్తించడం — ఇవన్నీ mineral bioavailability ను గణనీయంగా మెరుగుపరుస్తాయి."
      />

      <h2>Absorption Enhancers</h2>

      <h3>Vitamin C (Ascorbic Acid)</h3>
      <p>
        Non-heme iron absorption ను 2-6 రెట్లు పెంచే అత్యంత శక్తివంతమైన enhancer ఇది.
        Vitamin C Fe3+ ను Fe2+ గా reduce చేసి, soluble iron-ascorbate complex ను ఏర్పరుస్తుంది.
        dal కు lemon juice కలపడం, లేదా భోజనంతో amla (Indian gooseberry) తినడం వల్ల చాలా
        వరకు phytate inhibition ను అధిగమించవచ్చు.
      </p>

      <h3>Piperine (Black Pepper నుండి)</h3>
      <p>
        Piperine చాలా nutrients మరియు phytochemicals యొక్క bioavailability ను నాటకీయంగా
        పెంచుతుంది. దీని అత్యంత ప్రసిద్ధమైన interaction turmeric లోని curcumin తో ఉంటుంది.
      </p>

      <EvidenceBlock
        title="Piperine మరియు Curcumin Bioavailability"
        finding="20mg piperine ను 2g curcumin తో కలిపి ఇవ్వడం వల్ల మానవ volunteers లో curcumin bioavailability 2000% (20 రెట్లు) పెరిగింది. Piperine curcumin యొక్క hepatic మరియు intestinal glucuronidation ను inhibit చేసి, దాని వేగవంతమైన metabolism ను నిరోధిస్తుంది."
        study="Pharmacokinetic study in healthy human volunteers"
        source="Shoba et al. (1998) Planta Medica"
        details="ఈ study turmeric (haldi) ను black pepper (kali mirch) తో కలిపి వండడమనే సాంప్రదాయ భారతీయ పద్ధతికి scientific validation ఇచ్చింది. Piperine లేకుండా, curcumin యొక్క bioavailability చాలా తక్కువ (1% కంటే తక్కువ). dal నుండి sabzi వరకు, golden milk వరకు — లెక్కలేనన్ని భారతీయ వంటకాల్లో కనిపించే ఈ కలయిక శతాబ్దాల empirical nutritional wisdom ను ప్రతిబింబిస్తుంది."
      />

      <h3>Fat-Soluble Vitamins కోసం Fat</h3>
      <p>
        Vitamins A, D, E, మరియు K absorption కోసం dietary fat అవసరం. carrots (vitamin A)
        లేదా spinach (vitamin K) ను ఎటువంటి fat లేకుండా తింటే absorption చాలా తగ్గిపోతుంది.
        roti కి ghee వేయడం, vegetables ను oil లో తాళించడం, లేదా greens ను coconut oil లో
        వండడం అనే భారతీయ సాంప్రదాయ పద్ధతులు సహజంగానే fat-soluble vitamin absorption ను
        మెరుగుపరుస్తాయి.
      </p>

      <ExampleBlock
        title="Bioavailability ను గరిష్టం చేసే సాంప్రదాయ భారతీయ పద్ధతులు"
        problem="(1) Idli/dosa fermentation — phytate ను 60-75% తగ్గిస్తుంది, microbial synthesis ద్వారా B-vitamins పెరుగుతాయి. (2) రాత్రంతా dal నానబెట్టడం — phytate ను 20-30% తగ్గిస్తుంది. (3) dal కు lemon కలపడం — vitamin C iron absorption ను 3-6 రెట్లు పెంచుతుంది. (4) ప్రతి curry లో turmeric + black pepper — curcumin absorption 20 రెట్లు పెరుగుదల. (5) oil లో తాళించడం — vegetables నుండి fat-soluble vitamin uptake మెరుగవుతుంది. (6) moong/chana మొలకెత్తించడం — phytate 35-50% తగ్గుతుంది, vitamin C పెరుగుతుంది. (7) amla తినడం — అత్యంత సమృద్ధమైన vitamin C వనరులలో ఒకటి (100g కు 600mg), plant foods నుండి iron absorption ను నాటకీయంగా పెంచుతుంది."
      />

      <NoteBlock
        title="Tea-మరియు-Iron సమస్య">
        భారతదేశం ప్రపంచంలో అత్యధికంగా tea తాగే దేశాలలో ఒకటి మరియు అత్యధిక anemia rates ఉన్న దేశాలలో కూడా ఒకటి — ఇది యాదృచ్చికం కాదు. chai లోని tannins iron absorption ను 60-80% తగ్గిస్తాయి. సాధారణ పరిష్కారం: భోజనంతో పాటు కాకుండా, భోజనానికి 1-2 గంటల ముందు లేదా తర్వాత chai తాగండి. ఇది ఒక్కటే iron status ను గణనీయంగా మెరుగుపరుస్తుంది, ముఖ్యంగా non-heme iron మీద ఆధారపడే vegetarians కు.
      </NoteBlock>

      <h2>Bioavailability ను ప్రభావితం చేసే వ్యక్తిగత Factors</h2>
      <ul>
        <li><strong>Iron status:</strong> Iron-depleted వ్యక్తులు అదే భోజనం నుండి iron-replete వ్యక్తుల కంటే 2-3 రెట్లు ఎక్కువ iron absorb చేసుకుంటారు.</li>
        <li><strong>Gut health:</strong> Inflammation, celiac disease, లేదా tropical sprue (South India లో సాధారణం) వల్ల అనేక nutrients absorption తగ్గుతుంది.</li>
        <li><strong>వయసు:</strong> వయసు పెరిగే కొద్దీ stomach acid ఉత్పత్తి తగ్గుతుంది, దీని వల్ల mineral మరియు B12 absorption తగ్గుతుంది.</li>
        <li><strong>Genetic variation:</strong> Transport proteins లో polymorphisms వ్యక్తిగత absorption capacity ను ప్రభావితం చేస్తాయి.</li>
      </ul>

      <h2>ముఖ్యమైన అంశాలు</h2>
      <ul>
        <li>Nutrient content కాదు — bioavailability nutritional impact ను నిర్ణయిస్తుంది.</li>
        <li>Plant foods లోని phytates, oxalates, మరియు tannins mineral absorption ను గణనీయంగా తగ్గిస్తాయి.</li>
        <li>సాంప్రదాయ భారతీయ food processing (నానబెట్టడం, పులియబెట్టడం, మొలకెత్తించడం) anti-nutrients ను 50-90% తగ్గిస్తుంది.</li>
        <li>Vitamin C, piperine, మరియు dietary fat శక్తివంతమైన absorption enhancers.</li>
        <li>భోజనంతో tea తాగితే iron absorption 60-80% తగ్గుతుంది; 1-2 గంటల gap ఉంచండి.</li>
        <li>Turmeric + black pepper curcumin bioavailability ను 2000% పెంచుతుంది.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
