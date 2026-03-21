import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

const references = [
  { authors: 'Frayn KN', year: 2010, title: 'Metabolic Regulation: A Human Perspective', source: 'Wiley-Blackwell, 3rd Edition', type: 'foundational' },
  { authors: 'Atherton PJ, Smith K', year: 2012, title: 'Muscle protein synthesis in response to nutrition and exercise', source: 'Journal of Physiology, 590(5), 1049-1057', type: 'review' },
  { authors: 'Cahill GF Jr', year: 2006, title: 'Fuel metabolism in starvation', source: 'Annual Review of Nutrition, 26, 1-22', type: 'foundational' },
  { authors: 'Rennie MJ, Tipton KD', year: 2000, title: 'Protein and amino acid metabolism during and after exercise and the effects of nutrition', source: 'Annual Review of Nutrition, 20, 457-483', type: 'review' },
  { authors: 'Longo VD, Mattson MP', year: 2014, title: 'Fasting: molecular mechanisms and clinical applications', source: 'Cell Metabolism, 19(2), 181-192', type: 'review' },
];

export default function AnabolismCatabolismTe() {
  return (
    <div className="prose-health">
      <h1>Anabolism vs Catabolism</h1>

      <p>
        ప్రతి క్షణం, నీ శరీరం ఒకవైపు కొత్త molecules తయారు చేస్తుంటుంది, మరోవైపు ఉన్నవాటిని
        విడగొడుతుంటుంది. ఈ రెండు వ్యతిరేక కానీ ఒకదానికొకటి సహకరించే ప్రక్రియలు — anabolism మరియు
        catabolism — కలిసి metabolism అవుతాయి. నువ్వు కొవ్వు పెరుగుతావా, కొవ్వు తగ్గుతావా, కండరాలు
        పెరుగుతాయా, లేక కండరాలు తగ్గుతాయా అనేది కాలక్రమంలో ఏ ప్రక్రియ ఎక్కువగా జరుగుతుందో
        దాని మీద ఆధారపడుతుంది.
      </p>

      <DefinitionBlock
        title="Anabolism"
        definition="సాధారణ molecules నుండి సంక్లిష్టమైన molecules ను నిర్మించే metabolic pathways. Anabolic ప్రక్రియలకు energy (ATP) అవసరం, వీటిలో protein synthesis, glycogen నిల్వ, మరియు fat synthesis (lipogenesis) ఉంటాయి. ఇది metabolism లో 'నిర్మించే' దశ."
        notation="ముఖ్యమైన anabolic hormones: insulin, growth hormone, testosterone, IGF-1."
      />

      <DefinitionBlock
        title="Catabolism"
        definition="సంక్లిష్టమైన molecules ను సాధారణ వాటిగా విడగొట్టి, energy విడుదల చేసే metabolic pathways. Catabolic ప్రక్రియలలో glycogenolysis (glycogen విడగొట్టడం), lipolysis (fat విడగొట్టడం), మరియు proteolysis (protein విడగొట్టడం) ఉంటాయి. ఇది 'విడగొట్టే' దశ."
        notation="ముఖ్యమైన catabolic hormones: glucagon, cortisol, adrenaline (epinephrine)."
      />

      <h2>Anabolism ఎలా పని చేస్తుంది</h2>

      <h3>Protein Synthesis</h3>
      <p>
        నీ శరీరం నిరంతరం amino acids నుండి కొత్త proteins తయారు చేస్తుంటుంది. protein అధికంగా ఉన్న
        భోజనం తిన్న తర్వాత — అంటే ఒక గిన్నెడు dal అన్నం తిన్నాక — absorb అయిన amino acids mTOR
        signaling ను trigger చేస్తాయి, ribosomal machinery ని activate చేసి కొత్త muscle proteins
        తయారు చేస్తాయి. ఈ ప్రక్రియ protein తిన్న 1-3 గంటల తర్వాత గరిష్ఠంగా ఉంటుంది, దీనికి
        amino acids అందుబాటు మరియు energy (ATP) రెండూ అవసరం.
      </p>

      <h3>Glycogen Synthesis</h3>
      <p>
        carbohydrate అధికంగా ఉన్న ఆహారం (అన్నం, రోటీ, idli) తిన్న తర్వాత blood glucose పెరిగినప్పుడు,
        insulin glycogen synthase ని ప్రేరేపించి glucose ని liver లో (~100g సామర్థ్యం) మరియు
        కండరాలలో (~400g సామర్థ్యం) glycogen గా నిల్వ చేస్తుంది.
      </p>

      <h3>Lipogenesis (Fat Synthesis)</h3>
      <p>
        De novo lipogenesis అధికంగా ఉన్న carbohydrates ని fatty acids గా మార్చి adipose tissue లో
        triglycerides గా నిల్వ చేస్తుంది. Insulin ప్రధాన driver — ఎక్కువ కాలం overeating వల్ల
        వచ్చే sustained hyperinsulinemia కొవ్వు నిల్వను ప్రోత్సహిస్తుంది.
      </p>

      <EvidenceBlock
        title="తినడం తర్వాత Muscle Protein Synthesis స్పందన"
        finding="20-40g నాణ్యమైన protein తిన్న తర్వాత muscle protein synthesis basal levels కంటే 25-50% పెరుగుతుంది. ఈ స్పందన ప్రతి భోజనంలో సుమారు 0.4g/kg శరీర బరువు వద్ద plateau అవుతుంది."
        study="Stable isotope tracers ఉపయోగించిన protein feeding అధ్యయనాల సమీక్ష"
        source="Atherton & Smith (2012) Journal of Physiology"
        details="Protein ను భోజనాల్లో పంచుకోవడం (ఉదా., 4 భోజనాల్లో 30g చొప్పున) మొత్తం రోజువారీ muscle protein synthesis ని optimize చేస్తుంది, అదే మొత్తాన్ని 1-2 పెద్ద భోజనాల్లో తినడం కంటే. Indian diets లో protein తరచుగా ఒక భోజనంలో concentrate అవుతుంది, కాబట్టి meal planning లో ఇది ముఖ్యమైన విషయం."
      />

      <h2>Catabolism ఎలా పని చేస్తుంది</h2>

      <h3>Glycogenolysis</h3>
      <p>
        భోజనాల మధ్య blood glucose తగ్గినప్పుడు, glucagon liver కి signal ఇచ్చి glycogen ను తిరిగి
        glucose గా విడగొడుతుంది. Liver glycogen సుమారు 12-18 గంటల fasting కి blood glucose ని
        నిలబెడుతుంది. Exercise సమయంలో, muscle glycogen స్థానికంగా కండరాల సంకోచాలకు ఇంధనంగా పనిచేస్తుంది.
      </p>

      <h3>Lipolysis (Fat Breakdown)</h3>
      <p>
        Energy అవసరాలు glycogen సరఫరా కంటే ఎక్కువైనప్పుడు, hormone-sensitive lipase నిల్వ చేసిన
        triglycerides ని free fatty acids మరియు glycerol గా విడగొడుతుంది. ఈ fatty acids mitochondria
        లో beta-oxidation ద్వారా ATP ఉత్పత్తి చేస్తాయి. Caloric deficit లో fat loss జరిగేది ఇదే ప్రక్రియ ద్వారా.
      </p>

      <h3>Proteolysis (Protein Breakdown)</h3>
      <p>
        ఎక్కువ కాలం fasting లేదా తీవ్రమైన ఆహార నియంత్రణలో, శరీరం gluconeogenesis (glucose తయారీ)
        మరియు energy కోసం muscle proteins ని విడగొడుతుంది. శరీరం ముందుగా fat ని కాలుస్తుంది, కానీ
        రెండు ప్రక్రియలు ఏకకాలంలో జరుగుతాయి — అందుకే crash diets వల్ల కొవ్వుతో పాటు కండరాలు
        కూడా తగ్గుతాయి.
      </p>

      <ExampleBlock
        title="రోజువారీ జీవితంలో Fed-Fasted Cycle"
        problem="ఉదయం 8 గంటలకు breakfast (idli-sambar) anabolism ను trigger చేస్తుంది — insulin పెరుగుతుంది, glucose నిల్వ అవుతుంది, amino acids protein synthesis ను నడిపిస్తాయి. మధ్యాహ్నం నాటికి తేలికపాటి catabolism మొదలవుతుంది — insulin తగ్గుతుంది, glycogenolysis blood glucose ని maintain చేస్తుంది. lunch (అన్నం-dal-కూర) తర్వాత మళ్ళీ anabolism మొదలవుతుంది. రాత్రి నిద్ర సమయంలో (10 PM-7 AM), క్రమంగా catabolism glycogen తర్వాత fat stores ని వాడుకుంటుంది. ఈ రోజువారీ హెచ్చుతగ్గులు పూర్తిగా సహజం మరియు ఆరోగ్యకరం."
      />

      <h2>శరీర నిర్మాణాన్ని నిర్ణయించే సమతుల్యత</h2>

      <ul>
        <li><strong>బరువు పెరగడం (surplus):</strong> Anabolism catabolism కంటే ఎక్కువ — అదనపు energy కొవ్వుగా (మరియు training తో కండరాలుగా) నిల్వ అవుతుంది.</li>
        <li><strong>బరువు తగ్గడం (deficit):</strong> Catabolism anabolism కంటే ఎక్కువ — నిల్వ చేసిన కొవ్వు మరియు కొంత కండరాలు విడగొట్టబడతాయి.</li>
        <li><strong>నిర్వహణ:</strong> Anabolism మరియు catabolism 24 గంటల్లో సుమారుగా సమతుల్యంగా ఉంటాయి.</li>
      </ul>

      <h2>Hormonal నియంత్రణ</h2>

      <p>
        <strong>Insulin</strong> ప్రధాన anabolic signal — ఇది glucose uptake, glycogen synthesis,
        protein synthesis, మరియు lipogenesis ని ప్రోత్సహిస్తుంది, అదే సమయంలో అన్ని catabolic
        ప్రక్రియలను నిరోధిస్తుంది. <strong>Glucagon</strong> fasting సమయంలో దాని counterpart,
        glycogenolysis మరియు gluconeogenesis ను ప్రోత్సహిస్తుంది. <strong>Cortisol</strong> muscle
        protein breakdown మరియు visceral fat నిల్వను ప్రోత్సహిస్తుంది, ముఖ్యంగా దీర్ఘకాలిక
        stress సమయంలో.
      </p>

      <WarningBlock
        title="విపరీతమైన Dieting కండరాల నష్టాన్ని గరిష్ఠం చేస్తుంది">
        చాలా తక్కువ calorie diets (రోజుకు 800 kcal కంటే తక్కువ) proteolysis ని చాలా ఎక్కువ చేస్తాయి. వారానికి 1% శరీర బరువు కంటే వేగంగా బరువు తగ్గడం వల్ల lean mass నష్టం చాలా ఎక్కువ అవుతుంది. 500-750 kcal/day మితమైన deficit తో తగినంత protein (1.6-2.2g/kg) మరియు resistance training కలిపితే fat loss సమయంలో muscle catabolism తగ్గించవచ్చు.
      </WarningBlock>

      <NoteBlock
        title="నువ్వు పూర్తిగా Anabolic లేదా Catabolic గా ఉండలేవు">
        Caloric surplus లో కూడా కొంత catabolism కొనసాగుతుంది — పాత proteins విడగొట్టబడతాయి, దెబ్బతిన్న cells recycle అవుతాయి. Deficit లో కూడా కొంత anabolic repair కొనసాగుతుంది. ఈ terms NET దిశను వివరిస్తాయి, absolute state ని కాదు.
      </NoteBlock>

      <ExampleBlock
        title="Indian Diet లో సమతుల్యతను Optimize చేయడం"
        problem="కొవ్వు తగ్గించుకుంటూ కండరాలను కాపాడుకోవడానికి: (1) ప్రతి భోజనంలో 20-30g protein ఉండేలా చూసుకో — paneer, dal, eggs, chicken, లేదా పెరుగు. (2) భోజనాల మధ్య 4-5 గంటల gap ఉంచు, insulin తగ్గి fat oxidation జరగడానికి. (3) biscuits, namkeen, లేదా చక్కెర chai తో నిరంతరం snacking చేయకు. (4) కండరాలకు anabolic stimulus కోసం resistance exercise చేయి. (5) 12-14 గంటల overnight fast ఆలోచించు (రాత్రి 8 PM కి dinner, ఉదయం 8 AM కి breakfast)."
      />

      <h2>ముఖ్యమైన విషయాలు</h2>
      <ul>
        <li>Anabolism energy ఉపయోగించి molecules నిర్మిస్తుంది; catabolism వాటిని విడగొట్టి energy విడుదల చేస్తుంది.</li>
        <li>Fed-fasted cycle ప్రతి రోజు సహజంగా ఈ రెండు states మధ్య హెచ్చుతగ్గులు చూపిస్తుంది.</li>
        <li>కాలక్రమంలో net anabolic balance బరువు పెరుగుదలకు కారణమవుతుంది; net catabolic balance బరువు తగ్గుదలకు కారణమవుతుంది.</li>
        <li>Insulin ప్రధాన anabolic hormone; glucagon మరియు cortisol catabolic hormones.</li>
        <li>బరువు తగ్గేటప్పుడు కండరాలను కాపాడుకోవాలంటే తగినంత protein, resistance training, మరియు మితమైన deficits అవసరం.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
