import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

const references = [
  { authors: 'Epel ES, McEwen B, Seeman T, et al.', year: 2000, title: 'Stress and body shape: stress-induced cortisol secretion is consistently greater among women with central fat', source: 'Psychosomatic Medicine, 62(5), 623-632', type: 'foundational' },
  { authors: 'Bjorntorp P', year: 2001, title: 'Do stress reactions cause abdominal obesity and comorbidities?', source: 'Obesity Reviews, 2(2), 73-86', type: 'review' },
  { authors: 'Rosmond R', year: 2005, title: 'Role of stress in the pathogenesis of the metabolic syndrome', source: 'Psychoneuroendocrinology, 30(1), 1-10', type: 'review' },
  { authors: 'Tomiyama AJ, Mann T, Vinas D, Hunger JM, DeJager J, Taylor SE', year: 2010, title: 'Low calorie dieting increases cortisol', source: 'Psychosomatic Medicine, 72(4), 357-364', type: 'clinical' },
  { authors: 'Chandola T, Brunner E, Marmot M', year: 2006, title: 'Chronic stress at work and the metabolic syndrome', source: 'BMJ, 332(7540), 521-525', type: 'clinical' },
];

export default function CortisolStressFatTe() {
  return (
    <div className="prose-health">
      <h1>Cortisol, Stress & కొవ్వు నిల్వ</h1>

      <p>
        Stress అంటే కేవలం మానసికంగా బాధగా అనిపించడం మాత్రమే కాదు — ఇది మీ శరీరాన్ని
        నేరుగా మార్చేస్తుంది. Cortisol అనేది ప్రధాన stress hormone, ఇది ప్రత్యేకంగా
        పొట్ట చుట్టూ కొవ్వును పేరుకుపోయేలా చేస్తుంది, కండరాల కణజాలాన్ని విచ్ఛిన్నం
        చేస్తుంది, అధిక-calorie comfort foods పట్ల ఆకలిని పెంచుతుంది, మరియు నిద్రను
        భంగపరుస్తుంది. ఆధునిక భారతదేశంలోని అధిక ఒత్తిడి ఉన్న నగర వాతావరణంలో,
        దీర్ఘకాలిక stress అనేది ఊబకాయం సమస్యకు ప్రధాన కారణంగా ఉంది, కానీ చాలా
        మంది దీన్ని గుర్తించరు.
      </p>

      <DefinitionBlock
        title="Cortisol"
        definition="Cortisol అనేది pituitary నుండి వచ్చే ACTH కి ప్రతిస్పందనగా adrenal cortex ద్వారా ఉత్పత్తి అయ్యే glucocorticoid steroid hormone. Stress సమయంలో cortisol రక్తంలో glucose ను పెంచడం (gluconeogenesis), కొవ్వు మరియు protein catabolism ను ప్రోత్సహించడం, మరియు అనవసరమైన పనులను (immune, digestive, reproductive) అణచివేయడం ద్వారా శక్తిని సమీకరిస్తుంది."
        notation="సాధారణ cortisol ఒక diurnal rhythm ను అనుసరిస్తుంది: ఉదయం 6-8 గంటలకు (మేల్కొనేటప్పుడు) అత్యధికంగా ఉంటుంది, అర్ధరాత్రికి అతి తక్కువగా ఉంటుంది. దీర్ఘకాలిక stress ఈ rhythm ను చదును చేస్తుంది, రోజంతా అధిక స్థాయిలను కొనసాగిస్తుంది."
      />

      <h2>Acute Stress Response — తక్షణ ఒత్తిడి ప్రతిస్పందన</h2>
      <p>
        తక్కువ కాలం ఉండే stress మంచిదే. మీరు ఒక ప్రమాదాన్ని ఎదుర్కొన్నప్పుడు,
        cortisol మరియు adrenaline శక్తిని సమీకరిస్తాయి — glycogen నుండి glucose,
        adipose tissue నుండి fatty acids — మిమ్మల్ని పోరాడటానికి లేదా పారిపోవడానికి
        సిద్ధం చేస్తాయి. Acute stress సమయంలో ఆకలి తగ్గిపోతుంది. ప్రమాదం
        తొలగిపోయాక, cortisol తగ్గుతుంది మరియు అన్ని వ్యవస్థలు మామూలు స్థితికి
        తిరిగి వస్తాయి.
      </p>

      <h2>దీర్ఘకాలిక Stress: Cortisol ఎప్పుడూ ఎక్కువగా ఉన్నప్పుడు</h2>
      <p>
        ఆధునిక ఒత్తిళ్ళు — work deadlines, ఆర్థిక ఒత్తిడి, traffic లో ప్రయాణం,
        కుటుంబ సమస్యలు, social media — ఇవన్నీ అదే cortisol ప్రతిస్పందనను
        ప్రేరేపిస్తాయి కానీ శారీరక పరిష్కారం లేకుండా. ఫలితంగా cortisol దీర్ఘకాలికంగా
        ఎక్కువగా ఉంటుంది, దీని metabolic ప్రభావాలు చాలా భిన్నంగా ఉంటాయి:
      </p>

      <h3>Visceral Fat పేరుకుపోవడం</h3>
      <p>
        Cortisol ప్రాధాన్యంగా visceral (పొట్ట లోపలి) adipose tissue లో కొవ్వును
        నిల్వ చేస్తుంది. Visceral fat cells లో subcutaneous fat cells కంటే 4 రెట్లు
        ఎక్కువ cortisol receptors ఉంటాయి. Cortisol అలాగే visceral fat లో
        lipoprotein lipase ను activate చేస్తుంది, triglyceride uptake మరియు storage ను
        పెంచుతుంది. అందుకే దీర్ఘకాలిక stress వల్ల మిగతా శరీరం సన్నగా ఉన్నా కూడా
        &quot;బొజ్జ&quot; వచ్చే pattern కనిపిస్తుంది.
      </p>

      <h3>ఆకలి మరియు cravings పెరగడం</h3>
      <p>
        దీర్ఘకాలిక cortisol neuropeptide Y ద్వారా ఆకలిని ప్రేరేపిస్తుంది మరియు
        leptin (ఆకలి తీరిన అనుభూతి ఇచ్చే hormone) పట్ల సున్నితత్వాన్ని
        తగ్గిస్తుంది. ఇది ప్రత్యేకంగా energy-dense &quot;comfort foods&quot; —
        తీపి పదార్థాలు, వేపుళ్ళు, మరియు carb-heavy ఆహారాల పట్ల cravings ను
        పెంచుతుంది. ఇది మీ బలహీనత కాదు — cortisol అక్షరాలా reward circuitry ని
        calorie-dense foods కి అనుకూలంగా మార్చేస్తుంది.
      </p>

      <h3>కండరాల విచ్ఛిన్నం</h3>
      <p>
        Cortisol కండరాలకు catabolic — ఇది gluconeogenesis కోసం amino acids ను
        అందించడానికి proteolysis ను ప్రోత్సహిస్తుంది. దీర్ఘకాలికంగా ఎక్కువగా ఉండే
        cortisol కాలక్రమంలో lean mass ను 5-10% తగ్గించగలదు, BMR ను తగ్గిస్తుంది
        మరియు బరువు నిర్వహణను క్రమంగా కష్టతరం చేస్తుంది.
      </p>

      <EvidenceBlock
        title="Stress మరియు Central Fat పంపిణీ"
        finding="Stress కి ఎక్కువ cortisol reactivity ఉన్న మహిళలకు, తక్కువ cortisol reactivity ఉన్న మహిళలతో పోలిస్తే, మొత్తం శరీర బరువుతో సంబంధం లేకుండా గణనీయంగా ఎక్కువ visceral fat ఉంది. అధిక cortisol responders దీర్ఘకాలిక జీవిత ఒత్తిడి మరియు ప్రతికూల మానసిక స్థితిని కూడా నివేదించారు."
        study="59 premenopausal మహిళలపై laboratory stress challenges"
        source="Epel et al. (2000) Psychosomatic Medicine"
        details="ఈ ప్రాముఖ్యమైన అధ్యయనం stress-induced cortisol secretion మరియు పొట్ట కొవ్వు పంపిణీ మధ్య నేరుగా సంబంధాన్ని నిరూపించింది. సన్నగా ఉన్న మహిళల్లో కూడా, ఎక్కువ cortisol responses ఉన్నవారికి ఎక్కువ visceral fat ఉంది. ఈ ఫలితం పొట్ట కొవ్వును తగ్గించడానికి stress management, diet మరియు exercise అంత ముఖ్యమైనదని సూచిస్తుంది."
      />

      <EvidenceBlock
        title="Work Stress మరియు Metabolic Syndrome"
        finding="దీర్ఘకాలిక work stress metabolic syndrome ప్రమాదాన్ని 2 రెట్లు పెంచుతుంది, dose-response సంబంధాలతో — ఎక్కువ stress exposure ఎక్కువ metabolic risk ను అంచనా వేసింది. ఈ సంబంధం lifestyle factors తో సంబంధం లేకుండా స్వతంత్రంగా ఉంది."
        study="Whitehall II prospective cohort study — 10,308 London civil servants"
        source="Chandola et al. (2006) BMJ"
        details="14 సంవత్సరాల follow-up లో, దీర్ఘకాలిక stress అనుభవించిన workers కి ఎక్కువ visceral fat, అధిక triglycerides, తక్కువ HDL cholesterol, మరియు అధిక blood pressure ఉన్నాయి. Diet, exercise, smoking, మరియు alcohol కి adjust చేసిన తర్వాత కూడా ఈ సంబంధం నిలిచి ఉంది — stress ప్రవర్తనపై ప్రభావం దాటి నేరుగా metabolic effects కలిగి ఉంటుందని ఇది సూచిస్తుంది."
      />

      <h2>Stress-Cortisol-బరువు పెరుగుదల చక్రం</h2>
      <p>
        దీర్ఘకాలిక stress ఒక దుష్ట చక్రాన్ని సృష్టిస్తుంది: stress cortisol ను
        పెంచుతుంది → cortisol visceral fat storage మరియు comfort eating ను
        ప్రేరేపిస్తుంది → బరువు పెరుగుదల మరింత stress కలిగిస్తుంది (శరీరం పట్ల
        అసంతృప్తి, ఆరోగ్య ఆందోళన) → మరింత cortisol. అదనంగా, visceral fat స్వయంగా
        inflammatory cytokines ను ఉత్పత్తి చేస్తుంది, ఇవి HPA axis ను మరింత
        ప్రేరేపిస్తాయి, cortisol elevation ను కొనసాగిస్తాయి.
      </p>

      <ExampleBlock
        title="భారతీయ నగర ఉద్యోగి Stress Pattern"
        problem="ఒక సాధారణ దృశ్యం: పొడవైన ప్రయాణం (traffic లో 1-2 గంటలు), అధిక-ఒత్తిడి IT/corporate ఉద్యోగం, క్రమరహిత భోజనాలు (lunch skip చేయడం లేదా ఆలస్యంగా తినడం), సాయంత్రం stress eating (namkeen, biscuits, పంచదార వేసిన chai), ఆలస్యంగా రాత్రి భోజనం (రాత్రి 9-10 గంటలకు), నిద్ర సరిగ్గా రాకపోవడం (అర్ధరాత్రి వరకు phone scrolling), పొద్దున్నే alarm (ఉదయం 6 గంటలకు). ఈ pattern నిద్ర లేమి, భోజన క్రమరాహిత్యం, మానసిక ఒత్తిడి, మరియు sedentary behavior ద్వారా cortisol ను గరిష్ఠంగా పెంచుతుంది — స్పష్టమైన అతిగా తినడం లేకున్నా visceral fat పేరుకుపోవడానికి అనుకూలమైన పరిస్థితులను సృష్టిస్తుంది."
      />

      <WarningBlock
        title="Dieting స్వయంగా Cortisol ను పెంచుతుంది">
        Tomiyama et al. (2010) పరిశోధన ప్రకారం, caloric restriction cortisol స్థాయిలను 18-38% పెంచుతుంది. ఇది ఒక విరుద్ధ పరిస్థితిని సృష్టిస్తుంది: కఠినమైన dieting యొక్క stress మీరు తగ్గించాలని ప్రయత్నిస్తున్న visceral fat పేరుకుపోవడాన్ని ప్రోత్సహించవచ్చు. అందుకే extreme diets కంటే మోస్తరు, నిలకడగా ఉండే deficits మెరుగ్గా పని చేస్తాయి — అవి తక్కువ cortisol elevation ను కలిగిస్తాయి.
      </WarningBlock>

      <h2>బరువు నిర్వహణ కోసం Cortisol నిర్వహణ</h2>

      <ExampleBlock
        title="సాక్ష్యాధారిత Stress తగ్గింపు వ్యూహాలు"
        problem="(1) 7-9 గంటలు నిద్రపోండి — నిద్ర లేమి cortisol ను 37-45% పెంచుతుంది. (2) మోస్తరుగా exercise చేయండి — 30-45 నిమిషాల నడక, yoga, లేదా swimming cortisol ను తగ్గిస్తుంది; దీర్ఘకాలిక overtraining ను మాత్రం నివారించండి, ఇది cortisol ను పెంచుతుంది. (3) Mindfulness లేదా pranayama practice చేయండి — రోజుకు 10 నిమిషాలు కూడా అధ్యయనాల్లో cortisol ను 20-25% తగ్గిస్తుంది. (4) క్రమంగా భోజనాలు చేయండి — భోజనాలు skip చేయడం మరియు అస్థిరమైన eating patterns cortisol ను పెంచుతాయి. (5) మధ్యాహ్నం 2 గంటల తర్వాత caffeine తగ్గించండి — coffee 2-3 గంటల పాటు cortisol ను పెంచుతుంది. (6) సామాజిక సంబంధాలు — సానుకూల సామాజిక interaction cortisol ను తగ్గిస్తుంది. (7) ప్రకృతిలో సమయం — పార్కులో 20 నిమిషాలు కూడా cortisol ను గణనీయంగా తగ్గిస్తుంది."
      />

      <NoteBlock
        title="Yoga మరియు Cortisol: భారతీయ సంప్రదాయం మరియు సైన్స్ కలయిక">
        అనేక అధ్యయనాలు క్రమం తప్పకుండా yoga practice baseline cortisol స్థాయిలను 15-30% తగ్గిస్తుందని చూపిస్తున్నాయి. 2017 నాటి ఒక meta-analysis ప్రకారం, ఒత్తిడిలో ఉన్న జనాభాలో cortisol తగ్గించడంలో yoga, cognitive behavioral therapy అంత ప్రభావవంతంగా ఉంది. సంప్రదాయ pranayama (శ్వాస వ్యాయామాలు), ముఖ్యంగా alternate nostril breathing (Nadi Shodhana), parasympathetic nervous system ను activate చేస్తుంది మరియు నేరుగా cortisol ను తగ్గిస్తుంది. ఈ ప్రాచీన భారతీయ అభ్యాసానికి stress మరియు బరువు నిర్వహణ కోసం బలమైన శాస్త్రీయ ధ్రువీకరణ ఉంది.
      </NoteBlock>

      <h2>ముఖ్యమైన అంశాలు</h2>
      <ul>
        <li>Cortisol ప్రధాన stress hormone; దీర్ఘకాలిక elevation visceral fat storage, కండరాల నష్టం, మరియు ఆకలి పెరుగుదలకు కారణమవుతుంది.</li>
        <li>Visceral fat cells లో 4 రెట్లు ఎక్కువ cortisol receptors ఉంటాయి, అందుకే stress వల్ల కొవ్వు పొట్టలో పేరుకుపోతుంది.</li>
        <li>దీర్ఘకాలిక work stress, diet మరియు exercise తో సంబంధం లేకుండా, metabolic syndrome ప్రమాదాన్ని రెట్టింపు చేస్తుంది.</li>
        <li>Crash dieting cortisol ను 18-38% పెంచుతుంది, ఇది పొట్ట కొవ్వును మరింత అధ్వాన్నం చేయవచ్చు.</li>
        <li>నిద్ర, మోస్తరు exercise, yoga/pranayama, మరియు క్రమం తప్పని భోజనాలు — ఇవి అత్యంత ప్రభావవంతమైన cortisol నిర్వహణ వ్యూహాలు.</li>
        <li>Stress management అనేది విలాసం కాదు — ఇది సమర్థవంతమైన బరువు నిర్వహణలో ప్రధాన భాగం.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
