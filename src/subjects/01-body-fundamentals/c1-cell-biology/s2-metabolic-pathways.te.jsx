import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';
import ComparisonTable from '../../../components/content/ComparisonTable.jsx';

const references = [
  { authors: 'Berg JM, Tymoczko JL, Stryer L', year: 2002, title: 'Biochemistry', source: '5th edition, W.H. Freeman, New York', type: 'foundational' },
  { authors: 'Krebs HA, Johnson WA', year: 1937, title: 'The role of citric acid in intermediate metabolism in animal tissues', source: 'Enzymologia, 4, 148-156', type: 'foundational' },
  { authors: 'Jeukendrup AE', year: 2002, title: 'Regulation of fat metabolism in skeletal muscle', source: 'Annals of the New York Academy of Sciences, 967, 217-235', type: 'review' },
  { authors: 'Spriet LL, Watt MJ', year: 2003, title: 'Regulatory mechanisms in the interaction between carbohydrate and lipid oxidation during exercise', source: 'Acta Physiologica Scandinavica, 178(4), 443-452', type: 'review' },
  { authors: 'Randle PJ, Garland PB, Hales CN, Newsholme EA', year: 1963, title: 'The glucose fatty-acid cycle: its role in insulin sensitivity and the metabolic disturbances of diabetes mellitus', source: 'The Lancet, 281(7285), 785-789', type: 'foundational' },
  { authors: 'Kurpad AV, Muthayya S, Vaz M', year: 2005, title: 'Consequences of inadequate food energy and negative energy balance in humans', source: 'Public Health Nutrition, 8(7A), 1053-1076', type: 'review' },
  { authors: 'Nelson DL, Cox MM', year: 2017, title: 'Lehninger Principles of Biochemistry', source: '7th edition, W.H. Freeman, New York', type: 'foundational' },
];

export default function MetabolicPathwaysTe() {
  return (
    <div className="prose-health">
      <h1>Metabolic Pathways</h1>

      <p>
        నువ్వు తినే ఆహారం — అది ఒక ప్లేటు biryani అయినా, ఒక గిన్నెడు dal-chawal అయినా, లేదా
        ఒక గుప్పెడు almonds అయినా — నీ cells ఆ energy ను ఉపయోగించుకోగలిగే ముందు క్రమపద్ధతిలో
        రసాయన చర్యల శ్రేణి ద్వారా విడగొట్టబడాలి. ఈ చర్యలు metabolic pathways గా నిర్వహించబడతాయి:
        nutrients ను ATP గా మార్చే enzyme-catalyzed దశల క్రమబద్ధ శ్రేణులు — ATP అనేది
        సార్వత్రిక energy currency. ఈ pathways ను అర్థం చేసుకోవడం ద్వారా వివిధ macronutrients
        ఎందుకు వేర్వేరుగా metabolize అవుతాయో, శరీరం fuel sources ను ఎలా ప్రాధాన్యం ఇస్తుందో
        తెలుస్తుంది.
      </p>

      <DefinitionBlock
        title="Metabolic Pathway"
        definition="Cell లోపల జరిగే enzyme-catalyzed రసాయన చర్యల అనుసంధాన శ్రేణి, ఇందులో ఒక చర్య యొక్క ఉత్పత్తి తదుపరి చర్యకు substrate గా పనిచేస్తుంది. Metabolic pathways enzyme activity, substrate అందుబాటు, మరియు hormonal signals ద్వారా కఠినంగా నియంత్రించబడతాయి, తద్వారా energy ఉత్పత్తి energy అవసరానికి సరిపోతుంది."
        notation="ప్రధాన energy-ఉత్పత్తి pathways లో glycolysis, Krebs cycle (citric acid cycle), beta-oxidation, మరియు oxidative phosphorylation ఉన్నాయి. ఈ pathways acetyl-CoA, NADH, మరియు FADH2 వంటి ఉమ్మడి intermediates ద్వారా పరస్పరం అనుసంధానించబడి ఉంటాయి."
      />

      <h2>Glycolysis: Energy Metabolism కి ప్రవేశద్వారం</h2>

      <p>
        Glycolysis (గ్రీకు glykys అంటే తీపి, lysis అంటే విడగొట్టడం) glucose metabolism లో
        మొదటి pathway. ఇది శరీరంలోని ప్రతి cell యొక్క cytoplasm లో జరుగుతుంది మరియు oxygen
        అవసరం లేదు, ఇది అన్ని జీవులలో అత్యంత ప్రాచీన మరియు సార్వత్రికంగా సంరక్షించబడిన
        metabolic pathway గా చేస్తుంది.
      </p>

      <h3>Glycolysis దశలు</h3>
      <p>
        Glycolysis లో 10 వరుస enzyme-catalyzed చర్యలు ఉంటాయి, ఇవి ఒక 6-carbon glucose
        molecule ను రెండు 3-carbon pyruvate molecules గా మారుస్తాయి. ఈ pathway లో రెండు దశలు
        ఉన్నాయి:
      </p>

      <ul>
        <li>
          <strong>Energy investment దశ (దశలు 1-5):</strong> glucose ను phosphorylate చేసి
          రెండు 3-carbon intermediates గా విడగొట్టడానికి రెండు ATP molecules ఖర్చు అవుతాయి.
          ఈ ప్రారంభ పెట్టుబడి glucose molecule ను అస్థిరం చేసి energy వెలికితీతకు సిద్ధం
          చేయడానికి అవసరం.
        </li>
        <li>
          <strong>Energy payoff దశ (దశలు 6-10):</strong> నాలుగు ATP molecules మరియు రెండు
          NADH molecules ఉత్పత్తి అవుతాయి. 2 ATP పెట్టుబడి పెట్టబడినందున, నికర ఉత్పత్తి ప్రతి
          glucose molecule కు 2 ATP మరియు 2 NADH.
        </li>
      </ul>

      <h3>Glycolysis నియంత్రణ</h3>
      <p>
        మూడు కీలక enzymes glycolytic flux ను నియంత్రిస్తాయి: hexokinase (దశ 1),
        phosphofructokinase-1 లేదా PFK-1 (దశ 3), మరియు pyruvate kinase (దశ 10). PFK-1
        అత్యంత ముఖ్యమైన నియంత్రణ బిందువు — ఇది AMP ద్వారా activate అవుతుంది (తక్కువ
        cellular energy ను సూచిస్తుంది) మరియు ATP మరియు citrate ద్వారా inhibit అవుతుంది
        (తగినంత energy ఉందని సూచిస్తుంది). ఈ సొగసైన feedback వ్యవస్థ energy అవసరమైనప్పుడు
        glycolysis వేగం పెరిగేలా మరియు energy సమృద్ధిగా ఉన్నప్పుడు నెమ్మదించేలా నిర్ధారిస్తుంది.
      </p>

      <EvidenceBlock
        title="Glucose-Fatty Acid Cycle"
        finding="Fatty acid oxidation పెరిగినప్పుడు (ఉపవాసం లేదా low-carbohydrate diets సమయంలో), ఫలితంగా పెరిగిన acetyl-CoA మరియు citrate స్థాయిలు PFK-1 దశ వద్ద glycolysis ను inhibit చేస్తాయి. అదే విధంగా, అధిక glucose అందుబాటు మరియు insulin fat oxidation ను అణచివేస్తాయి. ఈ పరస్పర నియంత్రణ అంటే శరీరం ఒకేసారి గరిష్ఠ రేట్ల వద్ద రెండు fuels ను కాకుండా, ఏదో ఒకదాన్ని ప్రాధాన్యంగా కాల్చుతుంది."
        study="Glucose fatty-acid cycle మరియు insulin sensitivity లో దాని పాత్ర"
        source="Randle et al. (1963) The Lancet"
        details="Philip Randle యొక్క ప్రాముఖ్యమైన ఆవిష్కరణ glucose మరియు fatty acid oxidation biochemical feedback mechanisms ద్వారా పరస్పరం inhibitory అని చూపించింది. Fatty acid oxidation ఎక్కువగా ఉన్నప్పుడు (ఉపవాసంలో లేదా అధిక-కొవ్వు భోజనం తర్వాత), citrate పేరుకుపోయి PFK-1 ను inhibit చేస్తుంది, glycolysis ను నెమ్మదిస్తుంది. అదే సమయంలో, acetyl-CoA pyruvate dehydrogenase ను inhibit చేసి, pyruvate Krebs cycle లోకి ప్రవేశించకుండా నిరోధిస్తుంది. ఈ mechanism అధిక-కొవ్వు diets glucose tolerance ను ఎందుకు దెబ్బతీస్తాయో వివరిస్తుంది — ఆహార కొవ్వు నమూనాలు వేగంగా మారుతున్న భారతీయ జనాభాలకు ఈ ఫలితం ముఖ్యమైన చిక్కులను కలిగి ఉంది."
      />

      <h3>Pyruvate యొక్క భవిష్యత్తు</h3>
      <p>
        Glycolysis తర్వాత, oxygen అందుబాటు మరియు cell యొక్క metabolic స్థితిని బట్టి pyruvate
        మూడు మార్గాలలో ఒకదాన్ని ఎదుర్కొంటుంది:
      </p>

      <ComparisonTable
        title="Pyruvate యొక్క మూడు మార్గాలు"
        headers={['మార్గం', 'పరిస్థితి', 'ఉత్పత్తి', 'ప్రాముఖ్యత']}
        rows={[
          ['Aerobic oxidation', 'Oxygen అందుబాటులో ఉన్నప్పుడు (విశ్రాంతిలో చాలా cells)', 'Acetyl-CoA (Krebs cycle లోకి ప్రవేశిస్తుంది)', 'గరిష్ఠ ATP ఉత్పత్తి; నిరంతర energy కి ప్రాథమిక pathway'],
          ['Lactic acid fermentation', 'Oxygen పరిమితం (తీవ్రమైన వ్యాయామం)', 'Lactate', 'వేగవంతమైన కానీ పరిమిత ATP; glycolysis కొనసాగేలా చేస్తుంది'],
          ['Ethanol fermentation', 'Yeast (మానవ cells కాదు)', 'Ethanol + CO2', 'idli/dosa batter, kanji వంటి fermented ఆహారాల ఆధారం'],
        ]}
      />

      <NoteBlock
        title="Lactate వ్యర్థ పదార్థం కాదు"
        content="Lactate కండరాల నొప్పికి కారణమయ్యే హానికరమైన metabolic వ్యర్థం అనే దీర్ఘకాల నమ్మకానికి భిన్నంగా, ఆధునిక పరిశోధన lactate నిజానికి విలువైన fuel అని చూపించింది. పనిచేసే కండరాలు ఉత్పత్తి చేసిన lactate రక్తం ద్వారా liver కి రవాణా చేయబడుతుంది, అక్కడ Cori cycle ద్వారా తిరిగి glucose గా మార్చబడుతుంది. ఇది గుండె మరియు విశ్రాంతిలో ఉన్న skeletal muscles ద్వారా నేరుగా oxidize కూడా అవుతుంది. మధ్యస్థ వ్యాయామంలో, cardiac fuel లో lactate గణనీయమైన భాగాన్ని ఆక్రమిస్తుంది. తీవ్రమైన వ్యాయామంలో మంట అనుభూతికి hydrogen ion పేరుకుపోవడం (acidosis) కారణం, lactate కాదు."
      />

      <h2>Krebs Cycle (Citric Acid Cycle)</h2>

      <p>
        1937 లో Hans Krebs కనుగొన్న Krebs cycle, carbohydrate, fat, మరియు protein metabolism
        నుండి వచ్చిన acetyl-CoA carbon dioxide గా oxidize అయ్యే కేంద్ర metabolic hub. ఇది
        mitochondrial matrix లో జరుగుతుంది మరియు catabolic (energy-వెలికితీత) మరియు anabolic
        (biosynthetic) రెండు functions ను అందిస్తుంది.
      </p>

      <DefinitionBlock
        title="Krebs Cycle"
        definition="Mitochondrial matrix లో జరిగే ఎనిమిది enzyme-catalyzed చర్యల చక్రీయ శ్రేణి, ఇది acetyl-CoA యొక్క acetyl group ను రెండు CO2 molecules గా oxidize చేస్తుంది, ప్రతి turn కు 3 NADH, 1 FADH2, మరియు 1 GTP (1 ATP కి సమానం) ఉత్పత్తి చేస్తుంది. ఈ cycle అన్ని fuel molecules యొక్క oxidation కు చివరి ఉమ్మడి pathway."
        notation="Citric acid cycle (citrate మొదటి ఉత్పత్తి కాబట్టి) లేదా tricarboxylic acid (TCA) cycle అని కూడా పిలుస్తారు. Glycolysis 2 pyruvate ఉత్పత్తి చేస్తుంది, ప్రతి ఒక్కటి 1 acetyl-CoA ఇస్తుంది కాబట్టి ప్రతి glucose molecule కి రెండు turns అవసరం."
      />

      <h3>కీలక దశలు మరియు ఉత్పత్తులు</h3>
      <p>
        Acetyl-CoA (2 carbons) oxaloacetate (4 carbons) తో కలిసి citrate (6 carbons) ను
        ఏర్పరచినప్పుడు cycle ప్రారంభమవుతుంది. Oxidation, decarboxylation, మరియు
        rearrangement చర్యల శ్రేణి ద్వారా, రెండు carbon atoms CO2 గా విడుదల అవుతాయి, మరియు
        4-carbon oxaloacetate cycle ను మళ్ళీ ప్రారంభించడానికి పునరుత్పత్తి అవుతుంది. ఈ
        ప్రక్రియలో, carbon backbone నుండి తీసివేయబడిన అధిక-energy electrons NAD+ మరియు FAD
        ద్వారా పట్టుకోబడతాయి, NADH మరియు FADH2 ను ఏర్పరుస్తాయి — ఇవి electron transport
        chain కి ఆహారం అందించే ప్రాథమిక electron carriers.
      </p>

      <h3>Metabolic కూడలిగా Krebs Cycle</h3>
      <p>
        Krebs cycle కేవలం catabolic pathway మాత్రమే కాదు. దాని intermediates biosynthetic
        చర్యలకు ప్రారంభ బిందువులుగా పనిచేస్తాయి: citrate fatty acid synthesis కోసం export
        అవుతుంది, alpha-ketoglutarate amino acid synthesis కోసం ఉపయోగించబడుతుంది, succinyl-CoA
        heme production లోకి ప్రవేశిస్తుంది, మరియు oxaloacetate gluconeogenesis కోసం substrate.
        ఈ ద్వంద్వ పాత్ర energy సమృద్ధిగా ఉన్నప్పటికీ cycle ఎందుకు కొనసాగాలో వివరిస్తుంది —
        దాని intermediates నిరంతరం biosynthesis కోసం తీసివేయబడుతూ ఉంటాయి మరియు తిరిగి
        నింపబడాలి (ఈ ప్రక్రియను anaplerosis అంటారు).
      </p>

      <ExampleBlock
        title="భారతీయ ఆహారంలో Anaplerosis"
        description="Protein అధికంగా ఉన్న rajma (kidney beans) మరియు rice భోజనం తిన్న తర్వాత, rajma protein నుండి వచ్చిన కొన్ని amino acids — ముఖ్యంగా glutamate మరియు aspartate — Krebs cycle intermediates గా (వరుసగా alpha-ketoglutarate మరియు oxaloacetate) మార్చబడతాయి. ఈ anaplerotic reaction cycle ను 'నింపుతుంది', intermediates ఇతర biosynthetic pathways కు మళ్ళించబడినప్పటికీ cycle సమర్థవంతంగా కొనసాగేలా నిర్ధారిస్తుంది. Protein ను carbohydrate తో కలపడం (సంప్రదాయ rajma-chawal కలయికలో వలె) metabolically పరిపూరకమైన nutrients ను అందించడానికి ఇది ఒక కారణం."
      />

      <h2>Beta-Oxidation: Energy కోసం Fat ను కాల్చడం</h2>

      <p>
        Beta-oxidation అనేది fatty acids mitochondrial matrix లో విడగొట్టబడి acetyl-CoA,
        NADH, మరియు FADH2 ఉత్పత్తి చేసే pathway. ఉపవాసం, సుదీర్ఘ వ్యాయామం, మరియు
        low-carbohydrate ఆహార స్థితులలో energy ఉత్పత్తికి ఇది ప్రాథమిక pathway.
      </p>

      <h3>Beta-Oxidation ఎలా పని చేస్తుంది</h3>
      <p>
        ఆహార కొవ్వు నుండి వచ్చిన long-chain fatty acids (నువ్వుల నూనెలో ఉన్న oleic acid లేదా
        కొబ్బరి నూనెలో ఉన్న lauric acid వంటివి) మొదట cytoplasm లో fatty acyl-CoA గా
        activate చేయబడతాయి, తర్వాత carnitine shuttle ద్వారా mitochondria లోకి రవాణా
        చేయబడతాయి. Mitochondria లోపల, fatty acyl chain ప్రతి cycle లో 2 carbons చొప్పున
        క్రమంగా తగ్గించబడుతుంది, ప్రతి cycle 1 acetyl-CoA, 1 NADH, మరియు 1 FADH2
        ఇస్తుంది. 16-carbon fatty acid (palmitate) 7 cycles beta-oxidation చేస్తుంది, Krebs
        cycle లోకి ప్రవేశించే 8 acetyl-CoA molecules ను ఉత్పత్తి చేస్తుంది.
      </p>

      <EvidenceBlock
        title="వ్యాయామంలో Fat Oxidation"
        finding="గరిష్ఠ fat oxidation రేట్లు VO2max లో 45-65% వ్యాయామ తీవ్రతల వద్ద జరుగుతాయి, trained వ్యక్తులలో సుమారు 0.3-0.6 g/min రేట్లు ఉంటాయి. ఎక్కువ వ్యాయామ తీవ్రతల వద్ద, glycolytic flux పెరిగి fatty acid mitochondria లోకి ప్రవేశించడాన్ని inhibit చేయడంతో carbohydrate ప్రధాన fuel అవుతుంది."
        study="వ్యాయామంలో fat metabolism నియంత్రణ సమీక్ష"
        source="Jeukendrup (2002) Annals of the New York Academy of Sciences"
        details="ఈ సమీక్ష 'Fatmax' భావనను స్థాపించింది — fat oxidation గరిష్ఠంగా ఉండే వ్యాయామ తీవ్రత. ఈ తీవ్రత కంటే తక్కువ వద్ద, fat oxidation శాతం ఎక్కువ ఉన్నప్పటికీ మొత్తం energy ఖర్చు తక్కువ. దాని కంటే ఎక్కువ వద్ద, carbohydrate oxidation ఆధిపత్యం చెలాయిస్తుంది. చాలా మందికి, చురుకైన నడక లేదా తేలికపాటి jogging Fatmax zone లో ఉంటుంది. బరువు నిర్వహణకు ఇది ఆచరణాత్మక చిక్కులను కలిగి ఉంది: మధ్యస్థ-తీవ్రత వ్యాయామం ఒక్కో session లో సంక్షిప్త high-intensity ప్రయత్నాల కంటే ఎక్కువ మొత్తం fat ను oxidize చేయవచ్చు, అయితే మొత్తం caloric expenditure మరియు వ్యాయామం తర్వాత metabolic effects కూడా పరిగణించాలి."
      />

      <h2>Oxidative Phosphorylation: ATP Factory</h2>

      <p>
        Oxidative phosphorylation అనేది NADH మరియు FADH2 లో నిల్వ చేయబడిన energy ను ATP
        synthesize చేయడానికి ఉపయోగించే ప్రక్రియ. ఇది inner mitochondrial membrane మీద జరుగుతుంది
        మరియు cell ఉత్పత్తి చేసే మొత్తం ATP లో సుమారు 90% కి కారణమవుతుంది.
      </p>

      <h3>Electron Transport Chain</h3>
      <p>
        Electron transport chain (ETC) inner mitochondrial membrane లో పొందుపరచబడిన నాలుగు
        పెద్ద protein complexes (I-IV) మరియు రెండు mobile electron carriers (ubiquinone మరియు
        cytochrome c) తో కూడి ఉంటుంది. NADH నుండి electrons Complex I వద్ద ప్రవేశిస్తాయి,
        FADH2 నుండి electrons Complex II వద్ద ప్రవేశిస్తాయి. Electrons chain గుండా
        వెళ్ళేటప్పుడు, విడుదలయ్యే energy protons (H+) ను mitochondrial matrix నుండి
        intermembrane space లోకి pump చేయడానికి ఉపయోగించబడుతుంది, ఒక electrochemical gradient
        ను సృష్టిస్తుంది.
      </p>

      <h3>ATP Synthase: ఒక Molecular Turbine</h3>
      <p>
        ATP synthase (కొన్నిసార్లు Complex V అని పిలుస్తారు) ఒక అద్భుతమైన rotary molecular
        machine. Protons తమ concentration gradient వెంట ATP synthase గుండా తిరిగి
        ప్రవహించేటప్పుడు, ఆ energy enzyme యొక్క central stalk ను సెకనుకు సుమారు 100
        rotations వేగంతో తిప్పుతుంది, ADP మరియు inorganic phosphate ను ATP గా condensation
        చేయడాన్ని catalyze చేస్తుంది. ప్రతి పూర్తి rotation 3 ATP molecules ను ఉత్పత్తి
        చేస్తుంది. Peter Mitchell యొక్క chemiosmotic hypothesis ద్వారా వివరించబడిన ఈ
        mechanism అతనికి 1978 లో Nobel Prize సంపాదించిపెట్టింది.
      </p>

      <ComparisonTable
        title="ప్రతి Glucose Molecule కు ATP ఉత్పత్తి సారాంశం"
        headers={['Pathway', 'స్థానం', 'ప్రత్యక్ష ATP', 'ఉత్పత్తి అయిన NADH', 'ఉత్పత్తి అయిన FADH2', 'మొత్తం ATP సమానం']}
        rows={[
          ['Glycolysis', 'Cytoplasm', '2 (నికర)', '2', '0', '~7'],
          ['Pyruvate oxidation', 'Mitochondria', '0', '2', '0', '~5'],
          ['Krebs cycle (x2)', 'Mitochondria', '2', '6', '2', '~20'],
          ['Oxidative phosphorylation', 'Inner membrane', '~26', '—', '—', '~26'],
          ['మొత్తం', '—', '—', '—', '—', '~30-32'],
        ]}
      />

      <NoteBlock
        title="38 ATP కాకుండా 30-32 ఎందుకు?"
        content="పాత textbooks ప్రతి glucose కు 36-38 ATP ని పేర్కొంటాయి, కానీ ఆధునిక అంచనాలు 30-32. ఈ సవరణ cytoplasm లో ఉత్పత్తి అయిన NADH ని mitochondria లోకి రవాణా చేయడంలో (malate-aspartate లేదా glycerol-3-phosphate shuttle ద్వారా) ఖర్చయ్యే energy మరియు proton gradient ATP synthesis కాకుండా ఇతర ప్రయోజనాలకు కూడా ఉపయోగించబడుతుందనే వాస్తవాన్ని ప్రతిబింబిస్తుంది — pyruvate, phosphate, మరియు calcium ను mitochondria లోకి రవాణా చేయడం వంటివి. ఖచ్చితమైన ఉత్పత్తి electron transport మరియు ATP synthesis మధ్య coupling efficiency మీద కూడా ఆధారపడుతుంది, ఇది tissues మరియు వ్యక్తుల మధ్య మారుతుంది."
      />

      <h2>Metabolic Pathways యొక్క సమన్వయం</h2>

      <p>
        సజీవ శరీరంలో, ఈ pathways ఒంటరిగా పనిచేయవు. అవి hormonal signals — ముఖ్యంగా
        insulin, glucagon, epinephrine, మరియు cortisol — ద్వారా కఠినంగా సమన్వయించబడి
        నియంత్రించబడతాయి, ఇవి పోషక స్థితి, శారీరక కార్యకలాపం, మరియు ఒత్తిడికి
        ప్రతిస్పందిస్తాయి.
      </p>

      <h3>Fed State (భోజనం తర్వాత)</h3>
      <p>
        Carbohydrate అధికంగా ఉన్న భోజనం (rice, roti, లేదా idli వంటివి) తిన్న తర్వాత, blood
        glucose పెరుగుతుంది మరియు insulin స్రవిస్తుంది. Insulin cells ద్వారా glucose
        uptake ను ప్రోత్సహిస్తుంది, glycolysis మరియు glycogen synthesis ను ఉత్తేజపరుస్తుంది,
        మరియు beta-oxidation మరియు gluconeogenesis ను అణచివేస్తుంది. వచ్చిన energy ని glycogen
        మరియు fat గా నిల్వ చేయడం metabolic ప్రాధాన్యత.
      </p>

      <h3>Fasted State (భోజనాల మధ్య)</h3>
      <p>
        భోజనాల మధ్య blood glucose తగ్గినప్పుడు, glucagon విడుదల అవుతుంది. Glucagon blood
        glucose ను నిర్వహించడానికి liver లో glycogenolysis (glycogen విడగొట్టడం) మరియు
        gluconeogenesis ను ఉత్తేజపరుస్తుంది. Peripheral tissues లో, fatty acids ప్రాథమిక
        fuel source గా మారడంతో beta-oxidation పెరుగుతుంది. సుదీర్ఘ ఉపవాసంలో (24-48 గంటల
        తర్వాత), fat metabolism నుండి ketone body ఉత్పత్తి మెదడుకు ప్రత్యామ్నాయ fuel ను
        అందిస్తుంది.
      </p>

      <ExampleBlock
        title="Metabolic Pathways మరియు భారతీయ భోజన సమయాలు"
        description="ముందస్తు రాత్రి భోజనం (సాయంత్రం 7-8 గంటలకు) తినడం మరియు అల్పాహారానికి ముందు విరామం ఇవ్వడం అనే సంప్రదాయ భారతీయ అభ్యాసం 10-12 గంటల సహజ రాత్రి ఉపవాస కాలాన్ని సృష్టిస్తుంది. ఈ కాలంలో, శరీరం fed state (glycolysis మరియు lipogenesis ఆధిపత్యం) నుండి fasted state (glycogenolysis, gluconeogenesis, మరియు beta-oxidation ఆధిపత్యం) కు మారుతుంది. ఈ metabolic switch శరీరానికి energy కోసం fat నిల్వలను యాక్సెస్ చేయడానికి అనుమతిస్తుంది. Circadian rhythms తో సమన్వయించబడిన ఈ విస్తరించిన రాత్రి ఉపవాసం insulin sensitivity ని మెరుగుపరచవచ్చని పరిశోధన సూచిస్తుంది — అధిక insulin resistance రేట్లు ఉన్న భారతీయ జనాభాలకు ఈ ఫలితం ముఖ్యంగా సంబంధితం."
      />

      <WarningBlock
        title="Metabolic Inflexibility మరియు వ్యాధి"
        content="Metabolic flexibility అంటే అందుబాటును బట్టి carbohydrates మరియు fat కాల్చడం మధ్య సమర్థవంతంగా మారగల శరీర సామర్థ్యం. Metabolic syndrome మరియు type 2 diabetes లో — South Asian జనాభాలలో అసమానంగా ఎక్కువగా ఉండే పరిస్థితులు — ఈ flexibility దెబ్బతింటుంది. Cells fatty acids ను oxidize చేయడంలో తక్కువ సమర్థవంతంగా మరియు glucose uptake చేయమని insulin యొక్క signal కి తక్కువ responsive గా మారతాయి, ఫలితంగా blood glucose మరియు blood lipids ఏకకాలంలో పెరుగుతాయి. క్రమం తప్పని శారీరక కార్యకలాపం మరియు దీర్ఘకాలిక caloric excess ను నివారించడం metabolic flexibility ని నిర్వహించడానికి అత్యంత ప్రభావవంతమైన వ్యూహాలు."
      />

      <h2>ముఖ్యమైన అంశాలు</h2>

      <ul>
        <li>
          Glycolysis cytoplasm లో glucose ను pyruvate గా విడగొడుతుంది, oxygen అవసరం లేకుండా
          నికరంగా 2 ATP ను ఇస్తుంది.
        </li>
        <li>
          Krebs cycle mitochondria లో acetyl-CoA ను CO2 గా oxidize చేస్తుంది, electron
          carriers (NADH, FADH2) ను ఉత్పత్తి చేస్తుంది మరియు carbohydrate, fat, మరియు
          protein metabolism ను అనుసంధానించే metabolic hub గా పనిచేస్తుంది.
        </li>
        <li>
          Inner mitochondrial membrane మీద oxidative phosphorylation electron transport
          chain మరియు ATP synthase ద్వారా ATP లో అధిక భాగాన్ని (~30-32 లో ~26) ఉత్పత్తి
          చేస్తుంది.
        </li>
        <li>
          Beta-oxidation fatty acids ను acetyl-CoA గా విడగొడుతుంది, glucose oxidation కంటే
          ప్రతి carbon కు ఎక్కువ ATP ఇస్తుంది, అందుకే fat ఎక్కువ energy-dense fuel.
        </li>
        <li>
          Hormonal signals (insulin, glucagon), పోషక స్థితి (fed vs fasted), మరియు
          కార్యకలాప స్థాయి ఆధారంగా శరీరం fuel sources మధ్య మారుతుంది.
        </li>
        <li>
          Metabolic flexibility — fuels మధ్య సమర్థవంతంగా మారగల సామర్థ్యం — metabolic
          ఆరోగ్యానికి అత్యవసరం మరియు obesity మరియు diabetes లో దెబ్బతింటుంది.
        </li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
