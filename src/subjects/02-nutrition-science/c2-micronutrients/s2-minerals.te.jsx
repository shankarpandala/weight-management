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
    authors: 'Kassebaum NJ, Jasrasaria R, Naghavi M, Wulf SK, Johns N, Lozano R, et al.',
    year: 2014,
    title: 'A systematic analysis of global anemia burden from 1990 to 2010',
    source: 'Blood, 123(5), 615-624',
    type: 'review',
  },
  {
    authors: 'International Institute for Population Sciences (IIPS) and ICF',
    year: 2021,
    title: 'National Family Health Survey (NFHS-5), 2019-21: India',
    source: 'Mumbai: IIPS',
    type: 'foundational',
  },
  {
    authors: 'Harinarayan CV, Ramalakshmi T, Prasad UV, Sudhakar D, Srinivasarao PV, Sarma KV, Kumar EG',
    year: 2007,
    title: 'High prevalence of low dietary calcium, high phytate consumption, and vitamin D deficiency in healthy south Indians',
    source: 'American Journal of Clinical Nutrition, 85(4), 1062-1067',
    type: 'clinical',
  },
  {
    authors: 'Zimmermann MB, Andersson M',
    year: 2012,
    title: 'Assessment of iodine nutrition in populations: past, present, and future',
    source: 'Nutrition Reviews, 70(10), 553-570',
    type: 'review',
  },
  {
    authors: 'Hurrell R, Egli I',
    year: 2010,
    title: 'Iron bioavailability and dietary reference values',
    source: 'American Journal of Clinical Nutrition, 91(5), 1461S-1467S',
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
    authors: 'Wessells KR, Brown KH',
    year: 2012,
    title: 'Estimating the global prevalence of zinc deficiency: results based on zinc availability in national food supplies and the prevalence of stunting',
    source: 'PLoS ONE, 7(11), e50568',
    type: 'review',
  },
];

export default function MineralsTe() {
  return (
    <div className="prose-health">
      <h1>Minerals (ఖనిజాలు)</h1>

      <p>
        Minerals అనేవి inorganic elements, ఇవి శరీరంలో enzymes, hormones, structural tissues,
        మరియు fluid balance systems లో అవసరమైన భాగాలుగా పనిచేస్తాయి. Vitamins లాగా కాకుండా,
        minerals వేడి, కాంతి, లేదా వంట వల్ల నాశనం కావు — కానీ వంట నీటిలో కరిగిపోవడం ద్వారా
        కోల్పోవచ్చు లేదా phytates మరియు oxalates వంటి anti-nutritional factors తో bind అయి
        absorption తగ్గవచ్చు. భారతదేశంలో mineral లోపాలు అత్యంత విస్తృతమైన పోషక సమస్యలలో
        ఉన్నాయి — iron, calcium, zinc, మరియు iodine లోపాలు జనాభాలో గణనీయమైన భాగాన్ని,
        ముఖ్యంగా మహిళలు, పిల్లలు, మరియు ప్రధానంగా plant-based ఆహారాలు తినేవారిని
        ప్రభావితం చేస్తున్నాయి.
      </p>

      <DefinitionBlock
        title="Dietary Minerals (ఆహార ఖనిజాలు)"
        definition="శరీరానికి structural functions (ఎముకలు, దంతాలు), enzymatic reactions, fluid balance, nerve transmission, మరియు oxygen transport కోసం అవసరమైన inorganic elements. వీటిని macrominerals (రోజుకు 100 mg కంటే ఎక్కువ అవసరం: calcium, phosphorus, magnesium, sodium, potassium, chloride, sulfur) మరియు trace minerals (తక్కువ మొత్తంలో అవసరం: iron, zinc, iodine, selenium, copper, manganese, fluoride, chromium, molybdenum) గా వర్గీకరిస్తారు."
        notation="Macrominerals ను mg లేదా g/day లో కొలుస్తారు; trace minerals ను mg లేదా mcg/day లో. Bioavailability చాలా వ్యత్యాసం ఉంటుంది — high-phytate ఆహారాల నుండి non-heme iron కు 5% కంటే తక్కువ నుండి sodium కు 95% కంటే ఎక్కువ వరకు."
      />

      <h2>Iron</h2>

      <p>
        Iron oxygen transport (red blood cells లో hemoglobin, కండరాలలో myoglobin), energy
        metabolism (electron transport chain లో cytochrome enzymes), మరియు DNA synthesis కోసం
        అవసరం. Iron లోపం ప్రపంచవ్యాప్తంగా అత్యంత సాధారణ పోషక లోపం మరియు భారతదేశంలో ఇది
        ప్రత్యేకంగా తీవ్రమైన సమస్య, ఇక్కడ ఇది రక్తహీనత యొక్క భారీ భారానికి కారణమవుతోంది.
      </p>

      <h3>Heme vs Non-Heme Iron</h3>
      <p>
        ఆహారంలో iron రెండు రూపాల్లో ఉంటుంది. Heme iron కేవలం animal foods (మాంసం, poultry,
        చేపలు) లో మాత్రమే ఉంటుంది, ఇది ఒక నిర్దిష్ట intestinal transporter ద్వారా absorb అవుతుంది
        మరియు దీని bioavailability 15-35%. Non-heme iron plant foods లో ఉండే ఏకైక రూపం మరియు
        animal foods లో కూడా ఉంటుంది, ఇది వేరే pathway ద్వారా absorb అవుతుంది మరియు దీని
        bioavailability చాలా తక్కువ — 2-20%, ఇది ఒకే భోజనంలో తినే enhancers మరియు inhibitors
        మీద ఎక్కువగా ఆధారపడుతుంది.
      </p>

      <EvidenceBlock
        title="Iron Bioavailability మరియు ఆహార కారకాలు"
        finding="Non-heme iron యొక్క bioavailability భోజనం యొక్క కూర్పును బట్టి 10 రెట్లు కంటే ఎక్కువ మారుతుంది. Ascorbic acid (vitamin C) non-heme iron absorption ను అత్యంత శక్తివంతంగా పెంచుతుంది, అయితే phytate (whole grains మరియు legumes నుండి) మరియు polyphenols (tea మరియు coffee నుండి) అత్యంత శక్తివంతమైన inhibitors."
        study="Iron bioavailability యొక్క mechanisms మరియు dietary determinants review"
        source="Hurrell & Egli (2010) American Journal of Clinical Nutrition"
        details="ఈ review ప్రకారం 50 mg ascorbic acid (ఒక ఉసిరి లేదా సగం జామలో ఉన్నంత) non-heme iron absorption ను 3-6 రెట్లు పెంచగలదు. దీనికి విరుద్ధంగా, భోజనంతో ఒక కప్పు tea తాగితే polyphenol binding వల్ల iron absorption 60-70% తగ్గుతుంది. Whole grains మరియు legumes లోని phytic acid insoluble iron-phytate complexes ను ఏర్పరచి జీర్ణానికి లొంగవు. Grains మరియు legumes ను నానబెట్టడం, మొలకెత్తించడం, మరియు పులియబెట్టడం phytate content ను గణనీయంగా తగ్గించి iron availability ని మెరుగుపరుస్తాయి."
      />

      <WarningBlock
        title="భారతదేశం యొక్క రక్తహీనత సంక్షోభం"
        content="NFHS-5 (2019-21) ప్రకారం, 15-49 సంవత్సరాల భారతీయ మహిళల్లో 57% మరియు 6-59 నెలల పిల్లల్లో 67% రక్తహీనత ఉంది. Iron లోపం ప్రధాన కారణం, అయితే B12 మరియు folate లోపం కూడా దోహదపడతాయి. ఎక్కువగా శాకాహార ఆహారం — ఎక్కువ phytate content, భోజనంతో tea/coffee తాగడం, మరియు తక్కువ vitamin C తీసుకోవడం — ఇవన్నీ కలిసి iron absorption కు 'perfect storm' సృష్టిస్తాయి. పునరుత్పత్తి వయసులో ఉన్న మహిళలు menstrual losses వల్ల ప్రత్యేకంగా దుర్బలంగా ఉంటారు. ICMR పురుషులకు 21 mg/day మరియు మహిళలకు 29 mg/day సిఫారసు చేస్తుంది — భారతీయ ఆహారాల నుండి తక్కువ bioavailability కారణంగా ఇవి Western సిఫారసుల కంటే ఎక్కువ."
      />

      <ExampleBlock
        title="భారతీయ భోజనాల నుండి Iron Absorption మెరుగుపరచడం"
        description="ఆధారిత వ్యూహాలు: (1) ప్రతి భోజనంలో vitamin C జోడించండి — dal మీద నిమ్మరసం పిండండి, ఉసిరి chutney చేర్చండి, dessert గా జామ లేదా orange తినండి. (2) భోజనానికి 1 గంట లోపు tea లేదా coffee తాగకండి — ఈ ఒక్క మార్పు iron absorption ను రెట్టింపు చేయగలదు. (3) Legumes ను వండడానికి ముందు నానబెట్టి మొలకెత్తించండి — phytate 30-50% తగ్గుతుంది. (4) Fermented foods (idli, dosa, dhokla) లో microbial phytase activity వల్ల phytate తక్కువగా ఉంటుంది. (5) ఇనుప పాత్రలలో వండడం — ఇది ఆమ్ల ఆహారాల iron content ను 2-3 రెట్లు పెంచగలదు. (6) Non-vegetarian అయితే, తక్కువ మొత్తంలో అయినా మాంసం లేదా చేపలు చేర్చండి ('meat factor' మొత్తం భోజనం నుండి non-heme iron absorption ను పెంచుతుంది)."
      />

      <h2>Calcium</h2>

      <p>
        Calcium శరీరంలో అత్యంత సమృద్ధిగా ఉన్న mineral, 99% ఎముకలు మరియు దంతాలలో నిల్వ
        ఉంటుంది. రక్తం మరియు soft tissues లో ఉన్న మిగిలిన 1% కండరాల సంకోచం, nerve
        transmission, రక్తం గడ్డకట్టడం, మరియు enzyme function కోసం చాలా కీలకం. జీవితాంతం
        తగినంత calcium తీసుకోవడం యువ వయసులో peak bone mass సాధించడానికి మరియు తరువాతి
        జీవితంలో osteoporosis నిరోధించడానికి అవసరం.
      </p>

      <p>
        ICMR భారతీయ వయోజనులకు రోజుకు 1000 mg calcium మరియు గర్భిణీ మరియు పాలిచ్చే
        మహిళలకు 1200 mg/day సిఫారసు చేస్తుంది. అయితే, అధ్యయనాలు భారతీయుల సగటు calcium
        తీసుకోవడం కేవలం 300-400 mg/day మాత్రమేనని — సిఫారసులో సగం కంటే తక్కువ అని నిరంతరం
        చూపిస్తున్నాయి. ఈ దీర్ఘకాలిక calcium లోటు, విస్తృతమైన vitamin D లోపంతో కలిసి,
        ముఖ్యంగా menopause తర్వాత మహిళల్లో osteoporosis మరియు fractures యొక్క అధిక
        రేట్లకు దోహదపడుతోంది.
      </p>

      <EvidenceBlock
        title="దక్షిణ భారతీయులలో Calcium లోపం"
        finding="దక్షిణ భారతదేశంలో ఆరోగ్యకరమైన వయోజనుల్లో సగటు రోజువారీ calcium తీసుకోవడం కేవలం 269 mg — సిఫారసు చేసిన 1000 mg లో మూడింట ఒక వంతు కంటే తక్కువ. అదే సమయంలో, phytate తీసుకోవడం ఎక్కువగా ఉంది (700-800 mg/day), ఇది calcium bioavailability ను మరింత తగ్గించింది. Vitamin D లోపం (అధ్యయన జనాభాలో 40% కంటే ఎక్కువ మందిలో ఉంది) తో కలిసి, ఇది ఎముకల ఆరోగ్యానికి తీవ్రమైన ద్వంద్వ లోటును సృష్టించింది."
        study="ఆంధ్రప్రదేశ్‌లో 164 ఆరోగ్యకరమైన వయోజనుల్లో calcium తీసుకోవడం, phytate వినియోగం, మరియు vitamin D status యొక్క cross-sectional study"
        source="Harinarayan et al. (2007) American Journal of Clinical Nutrition"
        details="ఈ అధ్యయనంలో ఈ ఆహారాల్లో calcium యొక్క ప్రాథమిక వనరులు ragi (finger millet) మరియు dairy అని కనుగొన్నారు, కానీ మొత్తం తీసుకోవడం సరిపోలేదు. Cereals మరియు legumes ఎక్కువగా తినడం వల్ల phytate తీసుకోవడం ఎక్కువైంది, ఇది calcium ను bind చేసి absorption ను తగ్గిస్తుంది. పరిశోధకులు dairy వినియోగం పెంచడం, calcium వనరుగా ragi ను ప్రోత్సహించడం, మరియు supplementation ద్వారా vitamin D లోపాన్ని పరిష్కరించడం — ఈ మూడంచెల వ్యూహాన్ని భారతదేశంలో ఎముకల ఆరోగ్యం మెరుగుపరచడానికి సిఫారసు చేశారు."
      />

      <ComparisonTable
        title="సాధారణ భారతీయ ఆహారాల్లో Calcium Content"
        headers={['ఆహారం', 'Serving', 'Calcium (mg)', 'Bioavailability గమనికలు']}
        rows={[
          ['Ragi (finger millet) flour', '100 g', '344', 'మంచి వనరు; మోస్తరు bioavailability'],
          ['Milk (buffalo/cow)', '1 glass (200 ml)', '240-260', 'అద్భుతమైన bioavailability (~30%)'],
          ['Curd/Dahi', '1 katori (200 g)', '240-280', 'మంచిది — fermentation absorption ను మెరుగుపరచవచ్చు'],
          ['Paneer', '50 g', '250', 'Dairy నుండి మంచి bioavailability'],
          ['Sesame seeds (til)', '1 tbsp (10 g)', '97', 'Absorption తగ్గించే oxalates ఉంటాయి'],
          ['Palak (spinach)', '100 g cooked', '99', 'తక్కువ — ఎక్కువ oxalate content ~95% calcium ను bind చేస్తుంది'],
          ['Rajma (cooked)', '100 g', '60', 'మోస్తరు — phytates absorption తగ్గిస్తాయి'],
          ['Amaranth (chaulai) ఆకులు', '100 g', '215', 'మోస్తరు bioavailability'],
        ]}
      />

      <NoteBlock
        title="Spinach-Calcium అపోహ"
        content="Palak (spinach) ను తరచుగా calcium-rich ఆహారంగా ప్రచారం చేస్తారు, కానీ ఇది తప్పుదారి పట్టించేది. Spinach లో 100 g కు 99 mg calcium ఉన్నప్పటికీ, దాని చాలా ఎక్కువ oxalate content ఈ calcium లో సుమారు 95% ను bind చేసి, absorption కు అందుబాటులో లేకుండా చేస్తుంది. 100 g spinach నుండి నిజంగా absorb అయ్యే calcium కేవలం 5 mg మాత్రమే — 200 ml milk నుండి 60-80 mg తో పోలిస్తే. Calcium కోసం, dairy products, ragi, మరియు sesame seeds చాలా మెరుగైన ఆచరణాత్మక వనరులు. తక్కువ calcium bioavailability ఉన్న ఇతర high-oxalate ఆహారాలలో amaranth grain, beet greens, మరియు sweet potatoes ఉన్నాయి."
      />

      <h2>Zinc</h2>

      <p>
        Zinc అనేది immune function, protein synthesis, గాయాల నయం, DNA synthesis, cell
        division, మరియు రుచి గ్రహణంలో పాల్గొనే 300 కంటే ఎక్కువ enzymes పనితీరుకు అవసరమైన
        trace mineral. Iron లాగానే, zinc bioavailability ఆహారంలోని phytate content ద్వారా
        బలంగా ప్రభావితమవుతుంది, ఇది cereals మరియు legumes ఎక్కువగా ఉన్న plant-based
        ఆహారాలు తినే జనాభాలో లోపాన్ని సాధారణం చేస్తుంది.
      </p>

      <p>
        Zinc లోపం యొక్క అత్యధిక prevalence ఉన్న దేశాలలో భారతదేశం ఒకటి. ICMR పురుషులకు
        12 mg/day మరియు మహిళలకు 10 mg/day సిఫారసు చేస్తుంది. మంచి భారతీయ వనరులలో మాంసం,
        poultry, shellfish, dairy, nuts, seeds (pumpkin seeds ప్రత్యేకంగా సమృద్ధిగా ఉంటాయి),
        chickpeas, మరియు whole grains ఉన్నాయి. Iron లాగానే, cereals మరియు legumes ను
        నానబెట్టడం, మొలకెత్తించడం, మరియు పులియబెట్టడం phytate తగ్గించి zinc bioavailability
        ను మెరుగుపరుస్తాయి.
      </p>

      <EvidenceBlock
        title="ప్రపంచ Zinc లోపం"
        finding="ప్రపంచ జనాభాలో అంచనా ప్రకారం 17.3% మందికి తగినంత zinc తీసుకోవడం లేదు, దక్షిణ ఆసియాలో (30%) మరియు Sub-Saharan Africa లో అత్యధిక prevalence ఉంది. భారతదేశం యొక్క ప్రధానంగా cereal-based ఆహారాలు ఎక్కువ phytate content తో జనాభాలో పెద్ద భాగాన్ని ప్రమాదంలో ఉంచుతాయి."
        study="National food supplies లో zinc availability మరియు stunting prevalence తో సంబంధం యొక్క global analysis"
        source="Wessells & Brown (2012) PLoS ONE"
        details="Cereals మరియు legumes నుండి ఎక్కువ శాతం energy తీసుకునే (మరియు animal source foods తక్కువగా తినే) దేశాల్లో zinc లోపం ప్రమాదం అత్యధికంగా ఉందని ఈ analysis కనుగొంది. భారతదేశం యొక్క food supply అవసరాలకు సంబంధించి కేవలం marginally adequate zinc ను అందించింది, మరియు భారతీయ ఆహారాల్లో ఎక్కువ phytate content effective zinc availability ను మరింత తగ్గించింది. Dietary diversification, food processing పద్ధతులు (నానబెట్టడం, మొలకెత్తించడం), మరియు fortification వ్యూహాల ప్రాముఖ్యతను ఈ అధ్యయనం హైలైట్ చేసింది."
      />

      <h2>Iodine</h2>

      <p>
        Iodine అనేది thyroid hormones (T3 మరియు T4) సంశ్లేషణకు అవసరమైన essential trace
        element, ఇవి metabolic rate, growth, మరియు development ను నియంత్రిస్తాయి.
        భారతదేశంలో అనేక ప్రాంతాలలో iodine లోపం చారిత్రాత్మకంగా endemic గా ఉండేది,
        ముఖ్యంగా sub-Himalayan belt, లోతట్టు ప్రాంతాలు, మరియు వరదలకు గురయ్యే మైదానాల్లో
        మట్టి నుండి iodine కొట్టుకుపోయిన చోట్ల. Universal salt iodization ప్రవేశపెట్టడం
        iodine లోపం వ్యాధులను గణనీయంగా తగ్గించింది, కానీ సవాళ్ళు మిగిలి ఉన్నాయి.
      </p>

      <p>
        ICMR వయోజనులకు రోజుకు 150 mcg iodine (గర్భం మరియు స్తన్యపానం సమయంలో 250 mcg)
        సిఫారసు చేస్తుంది. చాలా భారతీయులకు iodized salt ప్రాథమిక వనరు — 5 g తగినంతగా
        iodize చేసిన salt (30 ppm iodine వద్ద) సుమారు 150 mcg అందిస్తుంది. అయితే, iodine
        volatile గా ఉంటుంది మరియు నిల్వ సమయంలో (ముఖ్యంగా వేడి, తేమగల పరిస్థితుల్లో
        తెరిచిన containers లో) మరియు వంట సమయంలో కోల్పోవచ్చు. వంట సమయంలో salt లో 20-40%
        iodine కోల్పోతుందని అధ్యయనాలు చూపిస్తున్నాయి, ఇది సాధ్యమైనప్పుడు వంట చివరలో
        iodized salt వేయడం యొక్క ప్రాముఖ్యతను హైలైట్ చేస్తుంది.
      </p>

      <NoteBlock
        title="బరువు నిర్వహణలో Iodine మరియు Thyroid Function"
        content="Thyroid hormones basal metabolic rate ను నేరుగా నియంత్రిస్తాయి. Hypothyroidism (దీర్ఘకాలిక iodine లోపం వల్ల రావచ్చు) BMR ను 15-40% తగ్గిస్తుంది, ఇది బరువు పెరుగుదల, అలసట, మరియు చలి అసహనానికి దారితీస్తుంది. Universal salt iodization భారతదేశంలో స్పష్టమైన iodine లోపాన్ని తగ్గించినప్పటికీ, subclinical hypothyroidism భారతీయ జనాభాలో సుమారు 10-12% ను ప్రభావితం చేస్తుంది. వివరించలేని బరువు పెరుగుదల, అలసట, లేదా బరువు తగ్గడంలో ఇబ్బంది అనుభవిస్తున్న ఎవరైనా thyroid function (TSH, T3, T4) పరీక్షించుకోవాలి. అధిక iodine తీసుకోవడం (supplements లేదా kelp నుండి) కూడా thyroid function ను దెబ్బతీయవచ్చు మరియు నివారించాలి."
      />

      <h2>Minerals మరియు బరువు నిర్వహణ</h2>

      <p>
        Minerals నేరుగా calories అందించకపోయినా, అనేక minerals శరీర బరువు నియంత్రణను
        ప్రభావితం చేస్తాయి. Iron లోపం exercise capacity మరియు physical endurance ను
        తగ్గిస్తుంది, ఇది బరువు నిర్వహణలో కీలక భాగమైన శారీరక శ్రమను మరింత కష్టతరం
        చేస్తుంది. Calcium fat metabolism మీద సంభావ్య ప్రభావాల కోసం పరిశోధించబడింది, కొన్ని
        అధ్యయనాలు తగినంత calcium తీసుకోవడం fat absorption ను కొద్దిగా తగ్గించి fat
        oxidation ను ప్రోత్సహించవచ్చని సూచిస్తున్నాయి. Zinc fat cells స్రవించే satiety
        hormone అయిన leptin ఉత్పత్తికి అవసరం, మరియు zinc లోపం ఆకలి నియంత్రణను
        దెబ్బతీయవచ్చు.
      </p>

      <p>
        Caloric restriction సమయంలో, mineral తీసుకోవడం తరచుగా అవసరాల కంటే తక్కువగా ఉంటుంది.
        ఇది ముఖ్యంగా iron (ప్రత్యేకంగా మహిళల్లో), calcium, zinc, మరియు magnesium కు
        ఆందోళనకరం. బరువు తగ్గించే ఆహారం mineral-dense ఆహారాలను నొక్కి చెప్పాలి మరియు
        తీసుకోవడం నిరంతరం సిఫారసుల కంటే తక్కువగా ఉంటే supplementation అవసరం కావచ్చు.
      </p>

      <ExampleBlock
        title="Mineral-Rich భారతీయ భోజనం వ్యూహం"
        description="Mineral తీసుకోవడం కోసం ఆప్టిమైజ్ చేసిన రోజు: అల్పాహారం — ragi dosa (calcium: 170 mg) coconut chutney తో + ఒక glass మజ్జిగ (calcium: 120 mg). భోజనం — brown rice (zinc) + మొలకెత్తిన moong dal (iron, zinc — మెరుగైన bioavailability) + palak paneer (spinach నుండి iron — oxalates వల్ల కొంత తగ్గినా, paneer నుండి calcium బాగా absorb అవుతుంది) + నిమ్మ ముక్క (iron absorption పెంచడానికి vitamin C). Snack — వేయించిన pumpkin seeds 15 g (zinc: 1.2 mg, iron: 1.2 mg) + ఉసిరి juice (vitamin C). రాత్రి భోజనం — bajra roti (iron: 6 mg per 100 g) + chole (zinc) + raita (calcium). భోజనంతో tea/coffee తాగకండి. ఈ plan సుమారు 800 mg calcium, 20 mg iron, మరియు 10 mg zinc అందిస్తుంది."
      />

      <h2>ముఖ్యమైన విషయాలు</h2>

      <ul>
        <li>
          Iron లోపం రక్తహీనత 57% భారతీయ మహిళలను మరియు 67% పిల్లలను ప్రభావితం చేస్తుంది.
          ఎక్కువగా శాకాహార ఆహారం, ఎక్కువ phytate మరియు tea/coffee వినియోగం తీవ్రమైన
          absorption సవాళ్ళను సృష్టిస్తాయి. భోజనాలకు vitamin C జోడించడం మరియు భోజనంతో tea
          తాగకపోవడం అత్యంత ప్రభావవంతమైన ఆహార మార్పులు.
        </li>
        <li>
          భారతదేశంలో calcium తీసుకోవడం (300-400 mg/day) ICMR సిఫారసు (1000 mg/day) లో
          సగం కంటే తక్కువ. Dairy, ragi, మరియు sesame seeds అత్యంత bioavailable వనరులు.
          Oxalates కారణంగా spinach calcium content ఉన్నప్పటికీ ఆచరణాత్మకంగా తక్కువ calcium
          వనరు.
        </li>
        <li>
          Cereal-based భారతీయ ఆహారాల్లో zinc లోపం ప్రమాదం ఎక్కువ. Grains మరియు legumes ను
          నానబెట్టడం, మొలకెత్తించడం, మరియు పులియబెట్టడం phytate తగ్గించి zinc మరియు iron
          absorption ను మెరుగుపరుస్తాయి.
        </li>
        <li>
          Universal salt iodization ద్వారా iodine లోపం గణనీయంగా తగ్గించబడింది, కానీ వంట
          (20-40%) మరియు నిల్వ సమయంలో iodine కోల్పోవడం వల్ల తగినంత iodized salt
          తీసుకోవడం ఇప్పటికీ ముఖ్యం.
        </li>
        <li>
          Mineral లోపాలు energy metabolism, exercise capacity, ఆకలి నియంత్రణ, మరియు
          thyroid function ను దెబ్బతీస్తాయి — ఇవన్నీ బరువు నిర్వహణకు సంబంధించినవి.
        </li>
        <li>
          సాంప్రదాయ food processing పద్ధతులు — నానబెట్టడం, మొలకెత్తించడం, పులియబెట్టడం
          (idli, dosa, dhokla) — ఇవి plant-based భారతీయ ఆహారాల నుండి mineral
          bioavailability ను మెరుగుపరచడానికి evidence-based పద్ధతులు.
        </li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
