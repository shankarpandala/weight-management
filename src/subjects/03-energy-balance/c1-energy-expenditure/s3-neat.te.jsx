import DefinitionBlock from '../../../components/content/DefinitionBlock';
import EvidenceBlock from '../../../components/content/EvidenceBlock';
import ExampleBlock from '../../../components/content/ExampleBlock';
import NoteBlock from '../../../components/content/NoteBlock';
import WarningBlock from '../../../components/content/WarningBlock';
import ReferenceList from '../../../components/content/ReferenceList';

const references = [
  {
    id: 1,
    authors: 'Levine JA, Eberhardt NL, Jensen MD',
    year: 1999,
    title: 'Role of nonexercise activity thermogenesis in resistance to fat gain in humans',
    journal: 'Science',
    volume: '283(5399)',
    pages: '212-214',
  },
  {
    id: 2,
    authors: 'Levine JA, Lanningham-Foster LM, McCrady SK, et al.',
    year: 2005,
    title: 'Interindividual variation in posture allocation: possible role in human obesity',
    journal: 'Science',
    volume: '307(5709)',
    pages: '584-586',
  },
  {
    id: 3,
    authors: 'Villablanca PA, Jagber JR, Sishi BJ, et al.',
    year: 2015,
    title: 'Nonexercise activity thermogenesis in obesity management',
    journal: 'Mayo Clinic Proceedings',
    volume: '90(4)',
    pages: '509-519',
  },
  {
    id: 4,
    authors: 'Misra A, Khurana L',
    year: 2008,
    title: 'Obesity and the metabolic syndrome in developing countries',
    journal: 'Journal of Clinical Endocrinology & Metabolism',
    volume: '93(11 Suppl 1)',
    pages: 'S9-S30',
  },
  {
    id: 5,
    authors: 'Kotz CM, Teske JA, Billington CJ',
    year: 2008,
    title: 'Neuroregulation of nonexercise activity thermogenesis and obesity resistance',
    journal: 'American Journal of Physiology - Regulatory, Integrative and Comparative Physiology',
    volume: '294(3)',
    pages: 'R699-R710',
  },
  {
    id: 6,
    authors: 'von Loeffelholz C, Birkenfeld AL',
    year: 2022,
    title: 'Non-exercise activity thermogenesis in human energy homeostasis',
    journal: 'Endotext [Internet]',
    volume: '',
    pages: '',
  },
];

export default function NEATTe() {
  return (
    <div className="prose-health">
      <h1>Non-Exercise Activity Thermogenesis (NEAT)</h1>

      <p>
        చాలామంది calorie expenditure గురించి ఆలోచించినప్పుడు gym workouts మీద
        దృష్టి పెడతారు, కానీ రోజువారీ non-exercise కదలికల ద్వారా ఖర్చయ్యే
        energy చాలాసార్లు formal exercise కంటే ఎక్కువగా ఉంటుంది. Total daily
        energy expenditure లో ఈ భాగాన్ని Non-Exercise Activity Thermogenesis
        (NEAT) అని అంటారు, ఇది బరువు నిర్వహణలో అత్యంత variable గా ఉండే మరియు
        తక్కువగా గుర్తించబడే factors లో ఒకటి.
      </p>

      <DefinitionBlock term="NEAT (Non-Exercise Activity Thermogenesis)">
        నిద్రపోవడం, తినడం లేదా ఉద్దేశపూర్వక exercise కాకుండా మిగతా అన్ని
        కార్యకలాపాలకు ఖర్చయ్యే energy ని NEAT అంటారు. NEAT లో fidgeting,
        నడవడం, నిలబడడం, మెట్లు ఎక్కడం, ఇంటి పనులు, వృత్తిపరమైన activity,
        మరియు భంగిమను నిలబెట్టుకోవడం కూడా ఉన్నాయి. ఇది sedentary వ్యక్తులలో
        సుమారు 200 kcal/day నుండి highly active వ్యక్తులలో 900 kcal/day కంటే
        ఎక్కువ వరకు ఉండవచ్చు.
      </DefinitionBlock>

      <h2>NEAT లోని భాగాలు</h2>

      <p>
        NEAT రోజువారీ కదలికల విస్తృత శ్రేణిని కలిగి ఉంటుంది, వీటి గురించి
        చాలామంది ఎప్పుడూ ఆలోచించరు:
      </p>

      <ul>
        <li><strong>వృత్తిపరమైన activity:</strong> శారీరక శ్రమ, meetings మధ్య నడవడం, దుకాణం counter వద్ద నిలబడడం, లేదా desk వద్ద కూర్చోవడం — వీటి energy costs చాలా భిన్నంగా ఉంటాయి.</li>
        <li><strong>నడక కదలిక:</strong> మార్కెట్‌కి నడవడం, ఇంట్లో మెట్లు ఎక్కడం, గదుల మధ్య కదలడం.</li>
        <li><strong>Fidgeting మరియు అప్రయత్న కదలికలు:</strong> కాళ్ళు తట్టడం, కుర్చీలో కదలడం, మాట్లాడుతూ చేతులు ఊపడం.</li>
        <li><strong>భంగిమ నిర్వహణ:</strong> నిలబడడం కూర్చోవడం కంటే సుమారు 0.7 kcal/min ఎక్కువ ఖర్చు చేస్తుంది; కూర్చోవడం పడుకోవడం కంటే ఎక్కువ ఖర్చు చేస్తుంది.</li>
        <li><strong>ఇంటి పనులు:</strong> వంట చేయడం, శుభ్రం చేయడం, చేతితో బట్టలు ఉతకడం, ఊడ్చడం — ఈ పనులు చాలా భారతీయ కుటుంబాలలో ఇప్పటికీ సాధారణం.</li>
      </ul>

      <EvidenceBlock source="Levine et al., 1999 (Science)" level="landmark">
        ఒక ముఖ్యమైన overfeeding అధ్యయనంలో, participants కి 8 వారాల పాటు
        maintenance కంటే రోజుకు 1,000 kcal ఎక్కువ ఆహారం ఇచ్చారు. Subjects
        మధ్య fat gain పది రెట్లు తేడాతో ఉంది, మరియు fat gain కి resistance
        యొక్క అత్యంత బలమైన predictor NEAT లో పెరుగుదల. కొందరు వ్యక్తులు
        తెలియకుండానే fidgeting మరియు కదలికలను పెంచుకుని, అదనపు calories లో
        చాలా భాగాన్ని ఖర్చు చేశారు.
      </EvidenceBlock>

      <h2>భారీ వైవిధ్యం: రోజుకు 200 నుండి 900+ kcal</h2>

      <p>
        Total daily energy expenditure లో NEAT అత్యంత variable component.
        ఒకే సైజు ఉన్న ఇద్దరు వ్యక్తుల మధ్య వారి non-exercise movement
        patterns ఆధారంగా మాత్రమే రోజుకు 700 kcal లేదా అంతకంటే ఎక్కువ తేడా
        ఉండవచ్చు. ఈ వైవిధ్యం వృత్తి, వాతావరణం, సాంస్కృతిక అలవాట్లు మరియు
        వ్యక్తిగత biology ద్వారా నడపబడుతుంది.
      </p>

      <EvidenceBlock source="Levine et al., 2005 (Science)" level="strong">
        అధునాతన motion-tracking undergarments ఉపయోగించి, పరిశోధకులు ఊబకాయం
        ఉన్న వ్యక్తులు సన్నగా ఉన్న వ్యక్తుల కంటే రోజుకు సగటున 2.5 గంటలు
        ఎక్కువ కూర్చున్నారని కనుగొన్నారు. ఈ posture allocation తేడా ఒక్కటే
        రోజుకు సుమారు 350 kcal కి సమానం — కాలక్రమేణా గణనీయమైన బరువు
        మార్పును కలిగించడానికి ఇది సరిపోతుంది.
      </EvidenceBlock>

      <ExampleBlock title="భారతీయ సందర్భంలో NEAT">
        బెంగళూరులో ఇద్దరు office workers ని ఊహించండి. Person A కారులో పనికి
        వెళ్తాడు, 8 గంటలు desk వద్ద కూర్చుంటాడు, lift వాడతాడు, మరియు food
        delivery order చేస్తాడు. Person B metro station కి నడుస్తాడు, train
        లో నిలబడతాడు, office లో మెట్లు ఎక్కుతాడు, lunch కోసం సమీపంలోని
        dabba service కి నడుస్తాడు, మరియు సాయంత్రం ఇంటి పనులు చేస్తాడు.
        Person B ఎటువంటి gym visit లేకుండానే NEAT ద్వారా మాత్రమే రోజుకు
        400-600 kcal ఎక్కువ ఖర్చు చేయవచ్చు.
      </ExampleBlock>

      <h2>భారతీయ నిశ్చల జీవనశైలి ఆందోళన</h2>

      <p>
        భారతదేశంలో వేగవంతమైన పట్టణీకరణ జనాభా అంతటా NEAT ని నాటకీయంగా
        తగ్గించింది. వ్యవసాయ మరియు చేతి పని నుండి desk jobs కి మారడం, పెరిగిన
        screen time, food delivery apps, మరియు ఇంటి సహాయకుల వాడకంతో కలిపి,
        NEAT చారిత్రాత్మకంగా అత్యంత తక్కువ స్థాయిలో ఉన్న పరిస్థితి
        ఏర్పడింది.
      </p>

      <WarningBlock>
        భారతీయ పట్టణ జనాభా compound risk ని ఎదుర్కొంటోంది: visceral fat
        accumulation వైపు genetic గా ఎక్కువ ధోరణి (thin-fat phenotype)
        sedentary office culture వల్ల తీవ్రంగా తగ్గిన NEAT తో మరింత
        తీవ్రమవుతోంది. అధ్యయనాల ప్రకారం, urban India లో physical activity
        levels రెండు దశాబ్దాలలో దాదాపు 50% తగ్గాయి, ఈ తగ్గుదలలో ఎక్కువ
        భాగం gym attendance తగ్గడం వల్ల కాకుండా non-exercise movement
        తగ్గడం వల్ల వచ్చింది.
      </WarningBlock>

      <NoteBlock title="సాంప్రదాయ భారతీయ జీవనశైలులు మరియు NEAT">
        అనేక సాంప్రదాయ భారతీయ రోజువారీ కార్యకలాపాలు NEAT కి అద్భుతమైన
        మూలాలు: నేలమీద కూర్చోవడం (మరియు పదే పదే లేవడం), చేతితో బట్టలు
        ఉతకడం, సిల్-బట్టాతో మసాలాలు రుబ్బడం, స్థానిక మార్కెట్‌లకు నడవడం,
        వంట చేస్తూ కూర్చోవడం, మరియు Indian-style toilets వాడటం. ఈ
        అలవాట్లను ఆధునిక సౌకర్యాలు భర్తీ చేసినప్పుడు, ప్రజలు గమనించకుండానే
        రోజువారీ NEAT లో వందల calories కోల్పోతున్నారు.
      </NoteBlock>

      <h2>NEAT Regulation యొక్క Biology</h2>

      <p>
        NEAT పూర్తిగా conscious control లో ఉండదు. Hypothalamus, ముఖ్యంగా
        paraventricular nucleus, spontaneous physical activity ని regulate
        చేయడంలో పాత్ర పోషిస్తుంది. Orexin (hypocretin) neuropeptides
        ముఖ్యమైన mediators గా కనిపిస్తాయి, ఇవి మెలకువగా ఉండటాన్ని మరియు
        కదలికలను ప్రేరేపిస్తాయి.
      </p>

      <p>
        Caloric restriction సమయంలో, NEAT తెలియకుండానే తగ్గిపోతుంది — వ్యక్తులు
        తక్కువగా fidget చేస్తారు, నెమ్మదిగా కదులుతారు, మరియు నిలబడడం కంటే
        కూర్చోవడాన్ని ఎంచుకుంటారు. ఇది శరీరం యొక్క energy-conservation
        response లో భాగం మరియు చాలామంది dieters అనుభవించే plateau కి
        దోహదపడుతుంది.
      </p>

      <EvidenceBlock source="Kotz et al., 2008" level="strong">
        Animal studies ప్రకారం hypothalamus లో orexin signalling spontaneous
        physical activity ని నేరుగా modulate చేస్తుంది. సహజంగా ఎక్కువ orexin
        activity ఉన్న వ్యక్తులు రోజంతా ఎక్కువగా కదులుతారు, ఇది ఎక్కువ NEAT
        కి మరియు బరువు పెరగడానికి ఎక్కువ resistance కి దోహదపడుతుంది.
      </EvidenceBlock>

      <h2>NEAT పెంచడానికి ఆచరణాత్మక వ్యూహాలు</h2>

      <ul>
        <li><strong>మాట్లాడుతూ నడవండి:</strong> Phone calls తీసుకునేటప్పుడు అటూ ఇటూ నడవండి — ఇది Indian offices లో సాధారణమే, కానీ ఉద్దేశపూర్వకంగా చేయడం మంచిది.</li>
        <li><strong>మెట్లు వాడండి:</strong> 4-5 అంతస్తుల లోపు lifts ని నివారించండి.</li>
        <li><strong>ఎప్పుడప్పుడు నిలబడండి:</strong> Desk job ఉంటే ప్రతి గంటకు 10-15 నిమిషాలు నిలబడడాన్ని లక్ష్యంగా పెట్టుకోండి.</li>
        <li><strong>భోజనం తర్వాత నడవండి:</strong> రాత్రి భోజనం తర్వాత నడక అనే భారతీయ సంప్రదాయం (శతపావళి — 100 అడుగులు) NEAT పెంచడానికి అద్భుతమైన మార్గం.</li>
        <li><strong>ఇంటి పనులు చేయండి:</strong> వంట చేయడం, శుభ్రం చేయడం, సర్దడం — ఇవన్నీ గణనీయంగా దోహదపడతాయి.</li>
        <li><strong>Delivery మీద ఆధారపడడం తగ్గించండి:</strong> సాధ్యమైనప్పుడు online order చేయడానికి బదులు స్థానిక దుకాణాలకు నడవండి.</li>
        <li><strong>Step target పెట్టుకోండి:</strong> రోజుకు 7,000-8,000 steps కూడా baseline level NEAT ని నిర్ధారిస్తాయి.</li>
      </ul>

      <NoteBlock title="NEAT versus formal exercise">
        45 నిమిషాల gym session 200-400 kcal ఖర్చు చేయవచ్చు. కానీ మిగిలిన
        15 మెలకువ గంటలు దాదాపు కదలకుండా గడిపితే, మీ total activity
        expenditure ఇప్పటికీ తక్కువగా ఉండవచ్చు. దీనికి విరుద్ధంగా, gym
        membership లేకుండా ఎక్కువ NEAT ఉన్న వ్యక్తి మొత్తం activity
        calories లో సులభంగా ఎక్కువ ఖర్చు చేయగలరు. అత్యంత ప్రభావవంతమైన
        విధానం రెండింటినీ కలపడం, కానీ మొదట ఒక ప్రాంతాన్ని మెరుగుపరచాలంటే,
        NEAT పెంచడం తరచుగా మరింత స్థిరమైన ఫలితాలను ఇస్తుంది.
      </NoteBlock>

      <h2>ముఖ్యమైన అంశాలు</h2>

      <ul>
        <li>వ్యక్తుల మధ్య energy expenditure లో అతిపెద్ద వ్యత్యాసానికి NEAT కారణం — రోజుకు 700 kcal వరకు తేడా.</li>
        <li>NEAT ని నిర్ణయించే అతిపెద్ద అంశం వృత్తి.</li>
        <li>Caloric deficit సమయంలో శరీరం తెలియకుండానే NEAT ని తగ్గిస్తుంది, దీనివల్ల బరువు తగ్గడం కష్టమవుతుంది.</li>
        <li>పట్టణ భారతీయ జీవనశైలులు NEAT ని నాటకీయంగా తగ్గించాయి, metabolic risks ని మరింత పెంచాయి.</li>
        <li>రోజువారీ కదలికలో చిన్న, స్థిరమైన పెరుగుదలలు కాలక్రమేణా energy balance ని గణనీయంగా మెరుగుపరచగలవు.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
