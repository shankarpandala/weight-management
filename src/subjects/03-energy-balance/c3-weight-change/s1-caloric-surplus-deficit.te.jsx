import DefinitionBlock from '../../../components/content/DefinitionBlock';
import EvidenceBlock from '../../../components/content/EvidenceBlock';
import ExampleBlock from '../../../components/content/ExampleBlock';
import NoteBlock from '../../../components/content/NoteBlock';
import WarningBlock from '../../../components/content/WarningBlock';
import ReferenceList from '../../../components/content/ReferenceList';

const references = [
  {
    id: 1,
    authors: 'Hall KD, Sacks G, Chandramohan D, et al.',
    year: 2011,
    title: 'Quantification of the effect of energy imbalance on bodyweight',
    journal: 'The Lancet',
    volume: '378(9793)',
    pages: '826-837',
  },
  {
    id: 2,
    authors: 'Thomas DM, Martin CK, Lettieri S, et al.',
    year: 2013,
    title: 'Can a weight loss of one pound a week be achieved with a 3500-kcal deficit? Commentary on a commonly accepted rule',
    journal: 'International Journal of Obesity',
    volume: '37(12)',
    pages: '1611-1613',
  },
  {
    id: 3,
    authors: 'Hall KD',
    year: 2008,
    title: 'What is the required energy deficit per unit weight loss?',
    journal: 'International Journal of Obesity',
    volume: '32(3)',
    pages: '573-576',
  },
  {
    id: 4,
    authors: 'Heymsfield SB, Thomas D, Martin CK, et al.',
    year: 2012,
    title: 'Energy content of weight loss: kinetic features during voluntary caloric restriction',
    journal: 'Metabolism',
    volume: '61(7)',
    pages: '937-943',
  },
  {
    id: 5,
    authors: 'Misra A, Sharma R, Gulati S, et al.',
    year: 2011,
    title: 'Consensus dietary guidelines for healthy living and prevention of obesity, the metabolic syndrome, diabetes, and related disorders in Asian Indians',
    journal: 'Diabetes Technology & Therapeutics',
    volume: '13(6)',
    pages: '683-694',
  },
  {
    id: 6,
    authors: 'Helms ER, Aragon AA, Fitschen PJ',
    year: 2014,
    title: 'Evidence-based recommendations for natural bodybuilding contest preparation: nutrition and supplementation',
    journal: 'Journal of the International Society of Sports Nutrition',
    volume: '11(1)',
    pages: '20',
  },
];

export default function CaloricSurplusDeficitTe() {
  return (
    <div className="prose-health">
      <h1>Caloric Surplus and Deficit</h1>

      <p>
        అత్యంత ప్రాథమిక స్థాయిలో, బరువు మార్పును energy balance నియంత్రిస్తుంది
        — మీరు తీసుకునే calories మరియు మీరు ఖర్చు చేసే calories మధ్య సంబంధం.
        ఇది సరళంగా అనిపించినా, మానవ శరీరంలో energy balance ఎలా పనిచేస్తుందో
        అనేది "calories in minus calories out" అనే సాధారణ సమీకరణం సూచించే
        దానికంటే చాలా సూక్ష్మమైనది.
      </p>

      <DefinitionBlock term="Energy balance equation">
        శరీర energy stores లో మార్పు = Energy intake - Energy expenditure.
        తీసుకోవడం ఖర్చు చేయడం కంటే ఎక్కువైనప్పుడు, శరీరం మిగులును నిల్వ
        చేస్తుంది (ప్రధానంగా fat గా), ఇది caloric surplus ని సృష్టిస్తుంది.
        ఖర్చు తీసుకోవడం కంటే ఎక్కువైనప్పుడు, శరీరం నిల్వ చేసిన energy ని
        వాడుకుంటుంది, ఇది caloric deficit ని సృష్టిస్తుంది. సమీకరణం యొక్క
        రెండు వైపులూ ఒకదానిని ఒకటి dynamically ప్రభావితం చేస్తాయి.
      </DefinitionBlock>

      <h2>Caloric Surplus: Gaining Weight</h2>

      <p>
        మీరు ఖర్చు చేసే దానికంటే నిరంతరం ఎక్కువ energy తీసుకున్నప్పుడు
        caloric surplus ఏర్పడుతుంది. surplus యొక్క కూర్పు మరియు training
        స్థితి, మిగులు fat గా, muscle గా, లేదా రెండింటి కలయికగా నిల్వ
        అవుతుందా అనేది నిర్ణయిస్తాయి:
      </p>

      <ul>
        <li><strong>Without resistance training:</strong> Surplus నుండి పెరిగిన బరువులో దాదాపు 60-80% fat గా నిల్వ అవుతుంది, మిగిలినది lean tissue గా ఉంటుంది.</li>
        <li><strong>With resistance training and adequate protein:</strong> Surplus లో ఎక్కువ భాగం muscle growth వైపు మళ్ళించబడవచ్చు, అయినప్పటికీ కొంత fat gain దాదాపు తప్పనిసరి.</li>
        <li><strong>Rate matters:</strong> పెద్ద surpluses (maintenance కంటే రోజుకు 500+ kcal ఎక్కువ) మితమైన surpluses (రోజుకు 200-300 kcal) తో పోలిస్తే muscle gain కంటే ఎక్కువ fat gain ని ఉత్పత్తి చేస్తాయి.</li>
      </ul>

      <h2>Caloric Deficit: Losing Weight</h2>

      <p>
        Caloric deficit శరీరాన్ని అంతర్గత energy stores నుండి తీసుకునేలా
        బలవంతం చేస్తుంది. బాగా నిర్వహించబడిన deficit లో లక్ష్యం ప్రధానంగా
        fat ని తగ్గించడం, సాధ్యమైనంత ఎక్కువ lean mass ను కాపాడటం.
      </p>

      <ul>
        <li><strong>Moderate deficit (300-500 kcal/day):</strong> వారానికి దాదాపు 0.3-0.5 kg fat loss ఇస్తుంది. Lean mass ను కాపాడటానికి మంచిది, నిలబెట్టుకోవడం సులభం, hormonal disruption తక్కువ.</li>
        <li><strong>Aggressive deficit (500-750 kcal/day):</strong> వారానికి దాదాపు 0.5-0.7 kg fat loss ఇస్తుంది. గణనీయమైన fat తగ్గించుకోవాల్సిన వ్యక్తులకు ఆమోదయోగ్యం. Protein intake పై జాగ్రత్తగా శ్రద్ధ అవసరం.</li>
        <li><strong>Very aggressive deficit (1000+ kcal/day):</strong> వేగంగా బరువు తగ్గుతుంది కానీ గణనీయంగా ఎక్కువ lean mass loss, metabolic adaptation, hormonal disruption, మరియు nutrient deficiency ప్రమాదం ఉంటుంది.</li>
      </ul>

      <h2>The 3,500 kcal/lb Rule: Why It Is Oversimplified</h2>

      <p>
        3,500 kcal deficit అంటే ఒక pound (0.45 kg) fat loss అనే విస్తృతంగా
        ఉటంకించబడే నియమం pure adipose tissue యొక్క energy content మీద
        ఆధారపడి ఉంది. ఈ సంఖ్య fat tissue యొక్క energy density కి దాదాపు
        సరైనదే అయినా, weight loss కోసం ఒక predictive model గా ఇది
        విఫలమవుతుంది.
      </p>

      <EvidenceBlock source="Thomas et al., 2013 (International Journal of Obesity)" level="strong">
        3,500 kcal నియమం బరువు తగ్గేకొద్దీ energy expenditure స్థిరంగా
        ఉంటుందని భావిస్తుంది — ఇది చాలా తప్పుడు అంచనా. వాస్తవంలో, శరీర
        ద్రవ్యరాశి తగ్గేకొద్దీ metabolic rate తగ్గుతుంది, మరియు adaptive
        thermogenesis expenditure ని మరింత తగ్గిస్తుంది. ఈ నియమం ప్రతి
        సమయ బిందువు వద్ద weight loss ని అధికంగా అంచనా వేస్తుంది, మరియు
        లోపాలు కాలక్రమేణా పెరుగుతాయి. రోజుకు 500 kcal deficit వారానికి
        0.45 kg నిరంతర weight loss ని ఉత్పత్తి చేయదు; వాస్తవ రేటు
        క్రమంగా నెమ్మదిస్తుంది.
      </EvidenceBlock>

      <EvidenceBlock source="Hall et al., 2011 (The Lancet)" level="landmark">
        Kevin Hall మరియు సహచరులు metabolic adaptation ను లెక్కలోకి తీసుకునే
        dynamic energy balance model ని అభివృద్ధి చేశారు. వారి mathematical
        model ప్రకారం శరీరం దాదాపు 3 సంవత్సరాల తర్వాత కొత్త equilibrium కి
        చేరుకుంటుంది, 3,500 kcal నియమం ద్వారా అంచనా వేసిన weight loss లో
        దాదాపు సగం మాత్రమే వాస్తవంగా సాధించబడుతుంది. వారు మరింత ఖచ్చితమైన
        నియమాన్ని ప్రతిపాదించారు: తీసుకోవడంలో ప్రతి శాశ్వత 10 kcal/day
        తగ్గింపు చివరికి కొత్త equilibrium వద్ద దాదాపు 0.45 kg weight loss ని
        ఉత్పత్తి చేస్తుంది.
      </EvidenceBlock>

      <h2>Dynamic Energy Balance</h2>

      <p>
        కీలకమైన అంతర్దృష్టి ఏమిటంటే energy balance సమీకరణం యొక్క రెండు
        వైపులూ ఒకదానికొకటి ప్రతిస్పందనగా మారుతాయి:
      </p>

      <ul>
        <li><strong>Reducing intake</strong> తక్కువ శరీర బరువుకు దారితీస్తుంది, ఇది BMR ని తగ్గిస్తుంది. ఇది ఆకలిని పెంచే మరియు NEAT ని తగ్గించే hormonal changes ను కూడా ప్రేరేపిస్తుంది.</li>
        <li><strong>Increasing expenditure</strong> exercise ద్వారా ఆకలిని పెంచవచ్చు, మరియు exercise చేయని గంటలలో NEAT ని తగ్గించడం ద్వారా శరీరం భర్తీ చేయవచ్చు.</li>
        <li><strong>Weight loss itself</strong> కదలిక యొక్క energy cost ని తగ్గిస్తుంది (తక్కువ ద్రవ్యరాశి మోయడం), ఇది కాలక్రమేణా deficit ని మరింత తగ్గిస్తుంది.</li>
      </ul>

      <NoteBlock title="The plateau is not a mystery">
        Weight loss plateaus dynamic energy balance model నుండి పూర్తిగా
        ఊహించదగినవి. మీరు బరువు తగ్గేకొద్దీ, మీ energy expenditure తగ్గుతుంది
        మరియు మీ ఆకలి పెరుగుతుంది. చివరికి, intake కొత్త తక్కువ expenditure కి
        సమానమవుతుంది, మరియు weight loss ఆగిపోతుంది. Plateau ని అధిగమించడానికి
        intake ని మరింత తగ్గించడం, expenditure ని పెంచడం, లేదా రెండూ అవసరం —
        మరియు ప్రతి వరుస సర్దుబాటు తగ్గుతున్న ఫలితాలను ఇస్తుంది.
      </NoteBlock>

      <h2>Practical Deficit Targets for Indians</h2>

      <ExampleBlock title="Calculating a practical deficit">
        సునీత హైదరాబాద్‌లో 35 ఏళ్ల మహిళ, 72 kg బరువు, sedentary office job
        చేస్తుంది. ఆమె అంచనా TDEE దాదాపు 1,750 kcal/day. 400 kcal/day
        moderate deficit ఆమెకు దాదాపు 1,350 kcal/day target intake ఇస్తుంది.
        ఈ స్థాయిలో, ఆమె protein-rich foods కి ప్రాధాన్యత ఇవ్వాలి — పప్పు,
        పనీర్, గుడ్లు, పెరుగు — lean mass ను కాపాడటానికి రోజుకు కనీసం 70-80 g
        protein లక్ష్యంగా పెట్టుకోవాలి. మొదటి నెలలో దాదాపు 1.5-2 kg
        తగ్గుతుందని (initial water weight తో సహా) ఆశించవచ్చు, ఆ తర్వాత
        నెలకు 1-1.5 kg తగ్గుతుంది.
      </ExampleBlock>

      <WarningBlock>
        చాలా మంది భారతీయ మహిళలకు caloric intake సాధారణంగా రోజుకు 1,200 kcal
        కంటే తక్కువకు, మరియు పురుషులకు 1,500 kcal కంటే తక్కువకు, వైద్య
        పర్యవేక్షణ లేకుండా తగ్గకూడదు. ఈ స్థాయిల కంటే తక్కువకు వెళ్ళడం వల్ల
        micronutrient అవసరాలు తీర్చడం చాలా కష్టమవుతుంది — ముఖ్యంగా iron,
        calcium, మరియు B12, ఇవి భారతీయ ఆహారాలలో ఇప్పటికే సాధారణంగా తక్కువగా
        ఉంటాయి. 800-1,000 kcal crash diets దీర్ఘకాలిక వాడకానికి
        నిలకడగా ఉండవు లేదా సురక్షితం కావు.
      </WarningBlock>

      <ExampleBlock title="The Indian dietary challenge">
        ఒక సాధారణ Indian thali ఒక్క భోజనంలో 700-900 kcal సులభంగా
        అందించగలదు: 2-3 రోటీలు (300 kcal), పప్పు (150 kcal), నూనెతో కూర
        (150 kcal), అన్నం (200 kcal), మరియు పెరుగు (60 kcal). రోజుకు
        1,500 kcal లక్ష్యంగా పెట్టుకున్న వ్యక్తికి, మిగిలిన రెండు భోజనాలు
        మరియు snacks కోసం 600-800 kcal మాత్రమే మిగులుతుంది. thali ని
        పూర్తిగా మానేయడం కాదు, portions ను సర్దుబాటు చేయడం కీలకం: చిన్న
        రోటీలు వాడండి, అన్నం తగ్గించండి, protein-rich భాగాలు పెంచండి,
        మరియు వంటలో నూనె మితంగా వాడండి.
      </ExampleBlock>

      <h2>Surplus and Deficit: Not Just About Fat</h2>

      <p>
        Energy imbalance సమయంలో పెరిగిన లేదా తగ్గిన బరువు యొక్క కూర్పు
        అనేక అంశాల మీద ఆధారపడుతుంది:
      </p>

      <ul>
        <li><strong>Protein intake:</strong> ఎక్కువ protein (deficit సమయంలో 1.6-2.2 g/kg/day) lean mass retention ను గణనీయంగా మెరుగుపరుస్తుంది.</li>
        <li><strong>Resistance training:</strong> Deficit సమయంలో muscle ను కాపాడటానికి అత్యంత శక్తివంతమైన ప్రేరణ.</li>
        <li><strong>Deficit magnitude:</strong> పెద్ద deficits proportionally ఎక్కువ lean mass loss కి దారితీస్తాయి.</li>
        <li><strong>Starting body fat:</strong> సన్నగా ఉన్న వ్యక్తులు deficit లో ఎక్కువ lean mass proportion కోల్పోతారు, అయితే ఎక్కువ fat ఉన్న వ్యక్తులు తక్కువ muscle loss తో పెద్ద deficits ను భరించగలరు.</li>
        <li><strong>Sleep and stress:</strong> తక్కువ నిద్ర మరియు chronic stress కోల్పోయిన బరువు యొక్క నిష్పత్తిని fat నుండి lean mass వైపు మారుస్తాయి.</li>
      </ul>

      <NoteBlock title="The Indian protein gap">
        భారతీయ ఆహారాలు తరచుగా అవసరాల కంటే protein తక్కువగా ఉంటాయి,
        ముఖ్యంగా caloric restriction సమయంలో. శాకాహార ఆహారాలకు తగినంత protein
        తీసుకోవడానికి ఉద్దేశపూర్వక ప్రణాళిక అవసరం: పప్పులను ధాన్యాలతో
        కలపడం, పనీర్ మరియు పెరుగును క్రమం తప్పకుండా చేర్చడం, మరియు
        అవసరమైతే whey లేదా plant protein తో supplementation పరిశీలించడం.
        Caloric deficit సమయంలో, protein మరింత కీలకమవుతుంది — ఇది optional
        కాదు.
      </NoteBlock>

      <h2>Key Takeaways</h2>

      <ul>
        <li>Energy balance బరువు మార్పును నియంత్రిస్తుంది, కానీ సమీకరణం యొక్క రెండు వైపులూ dynamic గా మరియు పరస్పరం అనుసంధానించబడి ఉంటాయి.</li>
        <li>3,500 kcal/lb నియమం ఒక స్థూల అంచనా మాత్రమే, predictive model కాదు — కాలక్రమేణా తగ్గుతున్న ఫలితాలను ఆశించండి.</li>
        <li>Moderate deficits (300-500 kcal/day) ఎక్కువ lean mass ను కాపాడతాయి మరియు aggressive cuts కంటే ఎక్కువ కాలం నిలబడతాయి.</li>
        <li>Weight loss plateaus జీవశాస్త్రపరంగా తప్పనిసరి, విఫలత యొక్క సంకేతాలు కావు.</li>
        <li>భారతీయ జనాభాకు, సాధారణంగా తక్కువ baseline protein consumption ఉన్నందున deficit సమయంలో తగినంత protein తీసుకోవడం చాలా ముఖ్యం.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
