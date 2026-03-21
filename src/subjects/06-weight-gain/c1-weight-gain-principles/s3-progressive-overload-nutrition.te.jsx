import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

const references = [
  {
    id: 'bray2012',
    authors: 'Bray GA, Smith SR, de Jonge L, et al.',
    year: 2012,
    title: 'Effect of dietary protein content on weight gain, energy expenditure, and body composition during overeating',
    journal: 'JAMA',
    volume: '307(1)',
    pages: '47-55',
    doi: '10.1001/jama.2011.1918'
  },
  {
    id: 'schoenfeld2010',
    authors: 'Schoenfeld BJ.',
    year: 2010,
    title: 'The mechanisms of muscle hypertrophy and their application to resistance training',
    journal: 'Journal of Strength and Conditioning Research',
    volume: '24(10)',
    pages: '2857-2872',
    doi: '10.1519/JSC.0b013e3181e840f3'
  },
  {
    id: 'dattilo2011',
    authors: 'Dattilo M, Antunes HKM, Medeiros A, et al.',
    year: 2011,
    title: 'Sleep and muscle recovery: endocrinological and molecular basis for a new and promising hypothesis',
    journal: 'Medical Hypotheses',
    volume: '77(2)',
    pages: '220-222',
    doi: '10.1016/j.mehy.2011.04.017'
  },
  {
    id: 'schoenfeld2017',
    authors: 'Schoenfeld BJ, Ogborn D, Krieger JW.',
    year: 2017,
    title: 'Dose-response relationship between weekly resistance training volume and increases in muscle mass: a systematic review and meta-analysis',
    journal: 'Journal of Sports Sciences',
    volume: '35(11)',
    pages: '1073-1082',
    doi: '10.1080/02640414.2016.1210197'
  },
  {
    id: 'leproult2011',
    authors: 'Leproult R, Van Cauter E.',
    year: 2011,
    title: 'Effect of 1 week of sleep restriction on testosterone levels in young healthy men',
    journal: 'JAMA',
    volume: '305(21)',
    pages: '2173-2174',
    doi: '10.1001/jama.2011.710'
  }
];

export default function ProgressiveOverloadNutritionTe() {
  return (
    <div className="prose-health">
      <h1>శిక్షణ ఉద్దీపన, చికిత్స, మరియు పోషణ సమన్వయం</h1>
      <h1>Training Stimulus, Recovery, and Nutrition Integration</h1>

      <p>
        నిరోధక శిక్షణ లేకుండా కెలోరిక్ సర్ప్లస్ కొవ్వు సంపాదన చేసే వ్యాయామ. పర్యాప్త పోషణ లేకుండా నిరోధక శిక్షణ ప్రోగ్రామ్ విఫలమైన ప్రయోగం. కండర వృద్ధి శిక్షణ ఉద్దీపన, చికిత్స, మరియు పోషణ యొక్క సంఘటన చేస్తుంది — అన్నీ మూడూ ఒకేసారి సర్వోత్తమ చేయవలసిందా. ఈ విభాగం శిక్షణ ఎందుకు నిర్విరామం పిన్న ద్రవ్యరాశి లాభానికి, ప్రగతిశీల ఓవర్‌లోడ్ ఎలా పని చేస్తుంది, నిద్ర యొక్క పాత్ర మరియు చికిత్స పోషణ, మరియు చికిత్స దశల ప్రక్కన పోషణ కీ చేయడానికి కాలం ఎలా చేసుకుంటుంది.
      </p>

      <p>
        A caloric surplus without resistance training is an exercise in fat
        accumulation. A resistance training program without adequate nutrition is
        an exercise in frustration. Muscle growth occurs at the intersection of
        training stimulus, recovery, and nutrition — all three must be optimized
        simultaneously. This section examines why training is non-negotiable for
        lean mass gain, how progressive overload works, the role of sleep and
        recovery nutrition, and how to periodize nutrition alongside training
        phases.
      </p>

      <h2>శిక్షణ లేకుండా సర్ప్లస్ సమానం కొవ్వు లాభం</h2>

      <EvidenceBlock
        level="strong"
        source="బ్రే ఎట్ అల్. (2012) — JAMA ఓవర్‌ఫీడింగ్ అధ్యయనం"
      >
        JAMA లో ప్రచురితమైన ల్యాండ్‌మార్క్ నియంత్రిత ఓవర్‌ఫీడింగ్ అధ్యయనంలో, బ్రే మరియు సహోద్యోగులు 25 ఆరోగ్యకరమైన ప్రవచనాలను ఓవర్‌ఫీడ్ చేసారు సుమారుగా 954 కెకెల్/రోజు నిర్వహణకు పైన 8 వారాల కోసం — నిరోధక శిక్షణ ప్రోగ్రామ్ లేకుండా. గణనీయ సర్ప్లస్ ఉన్నప్పటికీ, తక్కువ-ప్రోటీన్ డైట్ (5% కెలోరీ) సందర్భం పిండెనిసెంట్ కండర తిన్నవారు గణనీయమైన కొవ్వు సంపాదన చేసారు. సాధారణ (15%) మరియు అధిక-ప్రోటీన్ (25%) డైట్‌ల సందర్భం కొన్ని పిండె ద్రవ్యరాశిని సంపాదన చేసారు (సుమారుగా 2.9-3.2 కిలోలు) కానీ గణనీయమైన కొవ్వు ద్రవ్యరాశిని సంపాదన చేసారు (3.5-4.0 కిలోలు). కీలకంగా, శిక్షణ లేకుండా సంపాదన చేసిన పిండె ద్రవ్యరాశి ప్రాథమికంగా అవయవ ద్రవ్యరాశి మరియు విసెరల్ కణజాలం, సంఘటన కండర కాదు. నిరోధక శిక్షణ యొక్క యాంత్రిక ఉద్దీపన లేకుండా, శరీరం సంఘటన ద్రవ్యరాశిలో సర్ప్లస్ శక్తిని సూచించడానికి సంకేతం కలిగి ఉండదు — ఇది కొవ్వు నిల్వకు చేతన హెచ్చరిక.
      </EvidenceBlock>

      <EvidenceBlock
        level="strong"
        source="Bray et al. (2012) — JAMA overfeeding study"
      >
        In a landmark controlled overfeeding study published in JAMA, Bray and
        colleagues overfed 25 healthy adults by approximately 954 kcal/day above
        maintenance for 8 weeks — without a resistance training program. Despite
        the substantial surplus, participants on the low-protein diet (5% of
        calories) lost lean mass while gaining significant fat. Those on normal
        (15%) and high-protein (25%) diets gained some lean mass (about 2.9-3.2
        kg) but also gained substantial fat mass (3.5-4.0 kg). Critically, the
        lean mass gained without training was primarily organ mass and visceral
        tissue, not skeletal muscle. Without the mechanical stimulus of resistance
        training, the body has no signal to direct surplus energy toward skeletal
        muscle growth — it defaults to fat storage.
      </EvidenceBlock>

      <NoteBlock title="సర్వేక్షణ: సంఘటన నిర్వహణ + పోషణ">
        పోషణ కాలిపోయిన పదార్థాలు మరియు శక్తిని అందిస్తుంది, కానీ నిరోధక శిక్షణ ఆ సంపదలను ఎక్కడ పెట్టుబడి చేయాలో శరీరకు సూచించిన సంకేతం అందిస్తుంది. మీరు కండర శారీరక వర్ణనకు తిన్నవారు సంభవం చేయలేరు. కెలోరిక్ సర్ప్లస్ అర్థవంతమైన సంఘటన హైపర్‌ట్రోఫీ నిర్మాణానికి నిరోధక శిక్షణ జతపరచాలి.
      </NoteBlock>

      <h2>ప్రగతిశీల ఓవర్‌లోడ్: కోర్ సూత్రం</h2>

      <DefinitionBlock term="ప్రగతిశీల ఓవర్‌లోడ్">
        నిరోధక శిక్షణ సమయంలో నిర్ణీత-కాండ వ్యవస్థపై గురు ఆధిక్య విపరీతమైన పెరుగుదల. ఇది బరువు లిఫ్టిచేయబడిన (ఓపెన్) పెరుగుదల, సెట్‌లు లేదా పునరావృత్తుల సంఖ్య (వాల్యూమ్) పెరుగుదల, మెకానిక్‌ల ఉన్నత తీసుకోవడానికి దిశ, విశ్రాంతి అవధి తగ్గుదల, చలన నిష్పత్తి పెరుగుదల, లేదా శిక్షణ ఫ్రీక్వెన్సీ సాధ్యం. ప్రగతిశీల ఓవర్‌లోడ్ నిరంతర కండర అভిযోజన ద్వారా నడిపిన ఫండమెంటల్ విధానం — దీనిలో లేకుండా, శరీరం సమర్థకరణ ఎందుకు సంఘటన కణజాలం నిర్మాణానికి కారణం, పోషణ సమర్థన సంఘటన.
      </DefinitionBlock>

      <DefinitionBlock term="Progressive Overload">
        The gradual increase of stress placed upon the musculoskeletal system
        during resistance training. This can be achieved through increasing
        the weight lifted (load), increasing the number of repetitions or sets
        (volume), improving technique to increase mechanical tension, reducing
        rest periods, increasing range of motion, or increasing training
        frequency. Progressive overload is the fundamental mechanism driving
        continued muscular adaptation — without it, the body has no reason to
        build additional muscle tissue, regardless of nutritional support.
      </DefinitionBlock>

      <ReferenceList references={references} />
    </div>
  );
}
