import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

const references = [
  { authors: 'Kojima M, Hosoda H, Date Y, Nakazato M, Matsuo H, Kangawa K', year: 1999, title: 'Ghrelin is a growth-hormone-releasing acylated peptide from stomach', source: 'Nature, 402(6762), 656-660', type: 'foundational' },
  { authors: 'Friedman JM, Halaas JL', year: 1998, title: 'Leptin and the regulation of body weight in mammals', source: 'Nature, 395(6704), 763-770', type: 'foundational' },
  { authors: 'Batterham RL, Cowley MA, Small CJ, et al.', year: 2002, title: 'Gut hormone PYY3-36 physiologically inhibits food intake', source: 'Nature, 418(6898), 650-654', type: 'foundational' },
  { authors: 'Cummings DE, Overduin J', year: 2007, title: 'Gastrointestinal regulation of food intake', source: 'Journal of Clinical Investigation, 117(1), 13-23', type: 'review' },
  { authors: 'Sumithran P, Prendergast LA, Delbridge E, et al.', year: 2011, title: 'Long-term persistence of hormonal adaptations to weight loss', source: 'New England Journal of Medicine, 365(17), 1597-1604', type: 'clinical' },
];

export default function HungerSatietyHormonesTe() {
  return (
    <div className="prose-health">
      <h1>ఆకలి & సంతృప్తి Hormones</h1>

      <p>
        ఆకలి అనేది కేవలం &quot;సంకల్పశక్తి&quot; కాదు — ఇది మీ పేగులు, మెదడు, కొవ్వు కణజాలం,
        మరియు pancreas ని కలిగి ఉన్న ఒక సంక్లిష్టమైన hormonal వ్యవస్థ ద్వారా నడపబడుతుంది.
        ఈ hormones ను అర్థం చేసుకుంటే, dieting జీవశాస్త్రపరంగా ఎందుకు కష్టమో, కొన్ని ఆహారాలు
        మిమ్మల్ని గంటల తరబడి ఎందుకు సంతృప్తిగా ఉంచుతాయో, మరికొన్ని నిమిషాల్లోనే ఆకలి
        ఎందుకు వేస్తుందో అర్థమవుతుంది — మీ జీవశాస్త్రానికి వ్యతిరేకంగా కాకుండా దానితో కలిసి
        ఎలా పని చేయాలో కూడా తెలుస్తుంది.
      </p>

      <h2>Ghrelin: ఆకలి Hormone</h2>

      <DefinitionBlock
        title="Ghrelin"
        definition="ఇది ప్రధానంగా కడుపు లోపలి పొర (fundus) నుండి ఉత్పత్తి అయ్యే 28-amino-acid peptide hormone. Ghrelin ఆకలిని ప్రేరేపిస్తుంది, ఆహార తీసుకోవడాన్ని పెంచుతుంది, మరియు కొవ్వు నిల్వను ప్రోత్సహిస్తుంది. ఇది growth hormone secretagogue receptor (GHSR) ద్వారా hypothalamus పై పనిచేస్తుంది."
        notation="Ghrelin levels భోజనానికి ముందు పెరుగుతాయి మరియు తిన్న తర్వాత తగ్గుతాయి. ఆకలిని ప్రేరేపించే ఏకైక తెలిసిన peripheral hormone ఇదే."
      />

      <p>
        Ghrelin ఒక ఊహించదగిన circadian pattern ను అనుసరిస్తుంది — ఇది మీరు అలవాటుగా తినే
        సమయాలకు ముందు పెరుగుతుంది మరియు తిన్న 30-60 నిమిషాల్లో తగ్గుతుంది. అందుకే మీరు
        ఎప్పుడూ breakfast తింటుంటే, ఒకరోజు skip చేస్తే చాలా ఇబ్బందిగా అనిపిస్తుంది, కానీ
        కొన్ని రోజుల తర్వాత ghrelin pattern సర్దుబాటు అవడంతో ఇది సులభం అవుతుంది. ముఖ్యంగా,
        బరువు తగ్గేటప్పుడు ghrelin పెరుగుతుంది — అందుకే బరువు తగ్గడం కంటే తగ్గిన బరువును
        నిలుపుకోవడం కష్టం.
      </p>

      <h2>Leptin: కొవ్వు కణజాలం నుండి వచ్చే సంతృప్తి సంకేతం</h2>

      <DefinitionBlock
        title="Leptin"
        definition="కొవ్వు కణజాలం (adipose tissue) ద్వారా కొవ్వు నిల్వలకు అనుపాతంగా ఉత్పత్తి అయ్యే hormone. Leptin శరీరానికి తగినంత శక్తి నిల్వలు ఉన్నాయని hypothalamus కు సంకేతం పంపుతుంది, ఆకలిని అణచివేస్తుంది మరియు energy expenditure ని పెంచుతుంది. ఇది శక్తి సమతుల్యత యొక్క దీర్ఘకాలిక నియంత్రకం."
        notation="1994లో Jeffrey Friedman కనుగొన్నారు. Leptin లోపం తీవ్రమైన ఊబకాయాన్ని కలిగిస్తుంది; అయితే, చాలా మంది ఊబకాయ వ్యక్తులకు ఎక్కువ leptin levels ఉంటాయి (leptin resistance)."
      />

      <p>
        Leptin ఒక ఇంధన gauge లాగా పనిచేస్తుంది — ఎక్కువ కొవ్వు అంటే ఎక్కువ leptin, ఇది
        ఆకలిని తగ్గించాలి. అయితే, అధిక శరీర కొవ్వు వల్ల నిరంతరం ఎక్కువగా ఉండే leptin,
        leptin resistance కు దారితీస్తుంది — అప్పుడు hypothalamus సున్నితత్వం కోల్పోతుంది.
        మెదడు తక్కువ leptin sensitivity ని ఆకలి పరిస్థితిగా అర్థం చేసుకుంటుంది, సమృద్ధిగా
        కొవ్వు నిల్వలు ఉన్నప్పటికీ ఆకలిని పెంచుతుంది మరియు metabolic rate ను తగ్గిస్తుంది.
        ఊబకాయం ఎందుకు స్వయంగా కొనసాగుతుందో ఇది ఒక ముఖ్యమైన కారణం.
      </p>

      <EvidenceBlock
        title="బరువు తగ్గిన తర్వాత Hormonal మార్పుల నిలకడ"
        finding="10% బరువు తగ్గిన ఒక సంవత్సరం తర్వాత కూడా, ఆకలిని ప్రేరేపించే hormones (ghrelin) ఎక్కువగా ఉండగా, సంతృప్తి hormones (leptin, PYY, CCK) తక్కువగానే ఉన్నాయి. పాల్గొనేవారు baseline కంటే గణనీయంగా ఎక్కువ ఆకలిని నివేదించారు."
        study="Diet ద్వారా బరువు తగ్గిన తర్వాత 62 వారాలు follow-up చేయబడిన 50 మంది అధిక బరువు/ఊబకాయ వయోజనులు"
        source="Sumithran et al. (2011) New England Journal of Medicine"
        details="ఈ ముఖ్యమైన అధ్యయనం, బరువు తిరిగి పెరగాలనే hormonal drive బరువు తగ్గిన తర్వాత కనీసం ఒక సంవత్సరం పాటు — బహుశా ఎక్కువ కాలం — కొనసాగుతుందని నిరూపించింది. 5 సంవత్సరాలలో 80%+ మంది బరువు తిరిగి పెరగడం యొక్క అధిక రేటును ఈ findings వివరిస్తాయి, మరియు ఊబకాయాన్ని కేవలం సంకల్పశక్తి వైఫల్యంగా చూడరాదని వాదిస్తాయి. Hormonal వాతావరణం శరీరాన్ని దాని మునుపటి బరువు వైపు చురుకుగా నెడుతుంది."
      />

      <h2>Insulin: రక్తంలో చక్కెర కంటే ఎక్కువ</h2>
      <p>
        Insulin ప్రధానంగా glucose నియంత్రణకు తెలిసినప్పటికీ, ఇది మెదడులో సంతృప్తి సంకేతంగా
        కూడా పనిచేస్తుంది. Insulin blood-brain barrier దాటి hypothalamic receptors పై పనిచేసి
        ఆహార తీసుకోవడాన్ని తగ్గిస్తుంది. అయితే, insulin resistance (metabolic syndrome మరియు
        type 2 diabetes లో సాధారణం) ఈ central satiety ప్రభావాన్ని దెబ్బతీస్తుంది, అధికంగా
        తినడానికి దోహదం చేస్తుంది. High-glycemic భోజనాలు వేగవంతమైన insulin spikes తర్వాత
        crashes కలిగిస్తాయి, తరచుగా rebound ఆకలిని ప్రేరేపిస్తాయి.
      </p>

      <h2>PYY (Peptide YY): &quot;తినడం ఆపు&quot; సంకేతం</h2>
      <p>
        PYY అనేది ileum మరియు colon లోని L-cells నుండి పోషకాలకు ప్రతిస్పందనగా విడుదల
        అవుతుంది — ముఖ్యంగా protein మరియు fat కు. ఇది hypothalamus పై పనిచేసి ఆకలిని
        తగ్గిస్తుంది మరియు gastric emptying ను నెమ్మదిస్తుంది. భోజనం తర్వాత PYY levels
        అనేక గంటల పాటు ఎక్కువగా ఉంటాయి, ఎక్కువ సేపు సంతృప్తికి దోహదం చేస్తాయి.
        Protein-rich భోజనాలు అత్యధిక PYY విడుదలను ప్రేరేపిస్తాయి — protein యొక్క అధిక
        సంతృప్తి విలువకు ఇది కొంతవరకు కారణం.
      </p>

      <h2>CCK (Cholecystokinin): భోజనం ముగించే Hormone</h2>
      <p>
        Fat మరియు protein కు ప్రతిస్పందనగా duodenum నుండి విడుదల అయ్యే CCK, gallbladder
        సంకోచం మరియు pancreatic enzyme స్రావాన్ని ప్రేరేపిస్తుంది, అదే సమయంలో vagus nerve
        ద్వారా మెదడుకు సంతృప్తి సంకేతాలను పంపుతుంది. CCK భోజనం ముగించడాన్ని (తినడం ఆపడం)
        ప్రోత్సహిస్తుంది, కానీ దీని half-life చాలా తక్కువ (నిమిషాలు), కాబట్టి ఇది ఎక్కువ
        సేపు సంతృప్తిని నిలుపుకోదు.
      </p>

      <h2>GLP-1 (Glucagon-Like Peptide 1)</h2>
      <p>
        Ileum లోని L-cells నుండి విడుదల అయ్యే GLP-1, gastric emptying ను నెమ్మదిస్తుంది,
        insulin స్రావాన్ని ప్రేరేపిస్తుంది, మరియు ఆకలిని తగ్గిస్తుంది. GLP-1 receptor
        agonists (semaglutide, liraglutide) ఈ శక్తివంతమైన ఆకలి-అణచివేత ప్రభావం వల్లనే
        ఇప్పుడు ఊబకాయ మందులుగా వాడబడుతున్నాయి. Fiber, protein, మరియు fermented foods
        ద్వారా సహజ GLP-1 విడుదల పెరుగుతుంది.
      </p>

      <ExampleBlock
        title="భారతీయ భోజనాల్లో సంతృప్తిని పెంచుకోవడం"
        description="భారతీయ ఆహారంలో satiety hormones ను గరిష్టంగా పెంచడానికి: (1) Protein తో ప్రారంభించండి — dal, paneer, egg curry, లేదా chicken కేవలం carbohydrates కంటే PYY మరియు CCK ని ఎక్కువగా ప్రేరేపిస్తాయి. (2) ఆరోగ్యకరమైన fats చేర్చండి — coconut chutney, roti పై ghee, లేదా mustard oil tempering CCK విడుదలను ప్రేరేపిస్తాయి. (3) Fiber చేర్చండి — కూరగాయలు, whole grains, మరియు beans gastric emptying ను నెమ్మదిస్తాయి మరియు GLP-1 విడుదలను పెంచుతాయి. (4) Liquid calories నుండి దూరంగా ఉండండి — చక్కెర chai, fruit juices, మరియు cold drinks సాధారణ satiety signaling ను దాటిపోతాయి. (5) నెమ్మదిగా తినండి — satiety hormones మెదడుకు చేరడానికి 20 నిమిషాలు పడుతుంది."
      />

      <NoteBlock
        title="Protein ఎందుకు అత్యంత సంతృప్తికరమైన Macronutrient"
        content="Protein, carbohydrates లేదా fat కంటే PYY, CCK, మరియు GLP-1 ని మరింత శక్తివంతంగా ప్రేరేపిస్తుంది. ఇది అత్యధిక thermic effect కలిగి ఉంటుంది (protein calories లో 20-30% జీర్ణక్రియలో వాడబడతాయి). Protein ను calories లో 15% నుండి 30% కి పెంచడం వల్ల రోజువారీ ఆహార తీసుకోవడం 400-500 kcal/day స్వయంచాలకంగా తగ్గుతుందని అధ్యయనాలు స్థిరంగా చూపిస్తున్నాయి. భారతీయ శాకాహారులకు, dal + rice, paneer + roti, లేదా curd + chana కలపడం బలమైన సంతృప్తితో పూర్తి protein అందిస్తుంది."
      />

      <WarningBlock
        title="Crash Dieting యొక్క Hormonal ఉచ్చు"
        content="వేగవంతమైన బరువు తగ్గడం ghrelin ను గణనీయంగా పెంచుతుంది మరియు leptin, PYY, మరియు CCK ని అణచివేస్తుంది — 1-3 సంవత్సరాలు కొనసాగగల తీవ్రమైన జీవశాస్త్ర drive ను సృష్టిస్తుంది. ఇది సంకల్పశక్తి లోపం కాదు; ఇది biochemistry. క్రమంగా బరువు తగ్గడం (వారానికి శరీర బరువులో 0.5-1%) తక్కువ hormonal disruptions కలిగిస్తుంది మరియు దీర్ఘకాలంలో మరింత నిలకడగా ఉంటుంది."
      />

      <h2>ముఖ్యమైన విషయాలు</h2>
      <ul>
        <li>Ghrelin (కడుపు నుండి) నేరుగా ఆకలిని ప్రేరేపించే ఏకైక hormone; ఇది భోజనాలకు ముందు మరియు బరువు తగ్గేటప్పుడు పెరుగుతుంది.</li>
        <li>Leptin (కొవ్వు కణజాలం నుండి) దీర్ఘకాలిక శక్తి స్థితిని సూచిస్తుంది; ఊబకాయంలో leptin resistance దాని సంతృప్తి ప్రభావాన్ని దెబ్బతీస్తుంది.</li>
        <li>PYY, CCK, మరియు GLP-1 సంతృప్తిని ప్రోత్సహించే gut hormones — protein మరియు fat ద్వారా అత్యంత బలంగా ప్రేరేపించబడతాయి.</li>
        <li>బరువు తగ్గడానికి hormonal adaptations కనీసం ఒక సంవత్సరం పాటు కొనసాగుతాయి, అధిక బరువు తిరిగి పెరిగే రేట్లను వివరిస్తాయి.</li>
        <li>Protein-rich, fiber-rich, whole-food భారతీయ భోజనాలు సహజ satiety signaling ను ఆప్టిమైజ్ చేస్తాయి.</li>
        <li>Crash dieting తో పోలిస్తే, క్రమంగా బరువు తగ్గడం hormonal disruption ను తగ్గిస్తుంది.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
