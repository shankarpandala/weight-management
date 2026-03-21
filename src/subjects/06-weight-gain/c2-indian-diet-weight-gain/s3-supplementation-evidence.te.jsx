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
    id: 'jager2017',
    authors: 'Jäger R, Kerksick CM, Campbell BI, et al.',
    year: 2017,
    title: 'International Society of Sports Nutrition Position Stand: protein and exercise',
    journal: 'Journal of the International Society of Sports Nutrition',
    volume: '14',
    pages: '20',
    doi: '10.1186/s12970-017-0177-8'
  },
  {
    id: 'kreider2017',
    authors: 'Kreider RB, Kalman DS, Antonio J, et al.',
    year: 2017,
    title: 'International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine',
    journal: 'Journal of the International Society of Sports Nutrition',
    volume: '14',
    pages: '18',
    doi: '10.1186/s12970-017-0173-z'
  },
  {
    id: 'wankhede2015',
    authors: 'Wankhede S, Langade D, Joshi K, Sinha SR, Bhattacharyya S.',
    year: 2015,
    title: 'Examining the effect of Withania somnifera supplementation on muscle strength and recovery: a randomized controlled trial',
    journal: 'Journal of the International Society of Sports Nutrition',
    volume: '12',
    pages: '43',
    doi: '10.1186/s12970-015-0104-9'
  },
  {
    id: 'wolfe2017',
    authors: 'Wolfe RR.',
    year: 2017,
    title: 'Branched-chain amino acids and muscle protein synthesis in humans: myth or reality?',
    journal: 'Journal of the International Society of Sports Nutrition',
    volume: '14',
    pages: '30',
    doi: '10.1186/s12970-017-0184-9'
  },
  {
    id: 'buford2007',
    authors: 'Buford TW, Kreider RB, Stout JR, et al.',
    year: 2007,
    title: 'International Society of Sports Nutrition position stand: creatine supplementation and exercise',
    journal: 'Journal of the International Society of Sports Nutrition',
    volume: '4',
    pages: '6',
    doi: '10.1186/1550-2783-4-6'
  }
];

export default function SupplementationEvidenceTe() {
  return (
    <div className="prose-health">
      <h1>బరువు సంపాదన కోసం సంపూరకం: సాక్ష్య సమీక్ష</h1>
      <h1>Supplementation for Weight Gain: Evidence Review</h1>

      <p>
        సంపూరక పరిశ్రమ వేగవంతమైన కండర లాభం, ఉత్తమ చికిత్స, ఉన్నత కార్యక్ష్మత ఎంచుకోవడం ఆశ్చర్యం చేస్తూ సంవత్సరానికి బిలియన్ డాలర్లను ఉత్పత్తి చేస్తుంది. వాస్తవం చాలా విస్తృత — విస్తృత సంపూరకాలు బలమైన లేదా సాక్ష్య సమర్థన లేకుండా, మరియు ఆ కనిసరు నిర్వహణ ఉన్నత శిక్షణ మరియు సమర్థకరణ ప్రోగ్రామ్ కు సర్వోత్తమ ఉపయోగం ఉత్తమ లాభాలను చేస్తుంది. సంపూరకాలు, నిర్వచనం ద్వారా, సంపూరక — అవి కానీ కెటగరీ సేవ ఆహారం ఆధారం. ఈ విభాగం సమర్థకరణ ఉపయోగించిన చాలా సాధారణ సంపూరకాలపై సాక్ష్య-ఆధారిత సమీక్ష అందిస్తుంది, స్పష్టమైన నిర్ణయాలు అందిస్తుంది.
      </p>

      <p>
        The supplement industry generates billions of dollars annually by promising
        faster muscle gain, better recovery, and enhanced performance. The reality
        is far more modest: the vast majority of supplements have weak or no evidence
        supporting their claims, and the few that do work provide relatively small
        benefits on top of an already optimized nutrition and training program.
        Supplements are, by definition, supplementary — they complement but never
        replace a solid dietary foundation. This section provides an evidence-based
        review of the most commonly used supplements for weight and muscle gain,
        with clear verdicts on each.
      </p>

      <DefinitionBlock term="ఆహారం-ప్రథమ సూత్రం">
        ఆహారం సూత్రం పూర్ణ పోషక అవసరాలను సర్వోత్తమం చేసిన ఇతర సంపూరకాలు సందర్భం ముందు. సంపూరకాలు ఉపయోగించాలి సందర్భానికి: (1) నిర్దిష్ట పోషక సందర్భం ఆహారం సరిసంవరణ ఆచరణ సంఘటన, (2) సాక్ష్య శక్తిశాలీ ఫలితం సంఘటన ఆహారం అందిస్తుంది, లేదా (3) సరిసంవరణ లోపం లక్ష్య సంపూరకం అవసరం. చాలా వ్యక్తుల కోసం, సర్వోత్తమ ఆహారం కండర వృద్ధి కోసం కోసరాలు అందిస్తుంది.
      </DefinitionBlock>

      <DefinitionBlock term="The Food-First Principle">
        The foundational approach in sports nutrition that prioritizes meeting all
        nutritional needs through whole foods before considering supplements.
        Supplements should only be used when: (1) a specific nutrient need cannot
        be practically met through food alone, (2) there is strong evidence for
        ergogenic benefit beyond what food provides, or (3) a diagnosed deficiency
        requires targeted supplementation. For the majority of individuals, an
        optimized whole-food diet provides everything needed for muscle growth.
      </DefinitionBlock>

      <h2>సాక్ష్య టిర్లు: సంపూరక నాణ్యత అర్థం</h2>

      <ComparisonTable
        title="సంపూరక సాక్ష్య టిర్లు"
        headers={['టిర్', 'సాక్ష్య స్థితి', 'సంపూరకాలు', 'సిఫారసు']}
        rows={[
          ['టిర్ 1: శక్తిశాలీ సాక్ష్య', 'బహుళ మెటా-అనాలిసిస్, నిరంతర RCTs', 'దేశీ ప్రోటీన్, క్రియేటిన్ మోనోహైడ్రేట్, కెఫిన్', 'సిఫారసు చేస్తే సంఘటన వర్తించినప్పుడు'],
          ['టిర్ 2: మధ్యమ సాక్ష్య', 'కొన్ని RCTs, ఆశ్చర్య కానీ నిర్ణీతమైనది కాదు', 'అశ్వగంధ, విటమిన్ డీ (లోపం చేసిన), బీటా-అలనిన్', 'వ్యక్తిగత అవసరాల ఆధారంగా పరిశీలించండి'],
          ['టిర్ 3: బలమైన సాక్ష్య', 'సीమిత అధ్యయనాలు, విపణన డేటా ఆధిక్య', 'BCAAs, ద్రవ్యరాశి gainers, గ్లుటామిన్, టెస్టోస్టెరోన్ బూస్టర్‌లు', 'సాధారణంగా సిఫారసు చేయవద్దు'],
          ['టిర్ 4: సాక్ష్య లేదు', 'నాణ్య పరిశోధన లేదు, పరిశోధన విషయాలు సందర్భం', 'చాలా మర్నాభిధానం పర్బలు, "అనాబోలిక్" సంపూరకాలు', 'నివారించండి — సరిపోయిన లోపం']
        ]}
      />

      <h2>టిర్ 1: దేశీ ప్రోటీన్ — శక్తిశాలీ సాక్ష్య</h2>

      <EvidenceBlock
        level="strong"
        source="జాగర్ ఎట్ అల్. (2017) — ISSN స్థితి నిలుస్తుంది ప్రోటీన్ మరియు చర్యపై"
      >
        ISSN స్థితి నిలుస్తుంది, సాహిత్య విస్తరిత సమీక్ష ఆధారపడి, ప్రోటీన్ సంపూరక (ప్రాథమికంగా దేశీ ప్రోటీన్ అధ్యయనం చేసిన) గణనీయంగా పెంచుతుందని నిర్ణయించారు నిరోధక శిక్షణ-ప్రేరిత అభియోజన కండర హైపర్‌ట్రోఫీ మరియు శక్తి చేసిన మొత్తం దైనిక ప్రోటీన్ సేవ అసమర్థమైనది ఆహారం నుండి. మెటా-అనాలిసిస్ మోర్టన్ ఎట్ అల్. (2018) ప్రోటీన్ సంపూరక పెంచుతుందని కనుగొన్నారు సరిపోయిన కొవ్వు-ఉచ్చారణ ద్రవ్యరాశి లాభం సుమారుగా 0.3 కిలోలు 6-12 వారాలుగా నిరోధక శిక్షణ నిర్ధారణ కంటే ఎటువంటి సందర్భం. ముఖ్యంగా, ప్రయోజనం చాలా పెద్దగా తీసుకోవాలి సందర్భం చేసిన వారిలో ఆచారమైన ప్రోటీన్ సేవ సరిసంవరణ కంటే 1.6 గ్రాఫ్/కిలోలు/రోజు. ఈ సందర్భం ఎక్కువ ప్రోటీన్ (సంపూరక లేదా ఆహారం నుండి) అందిస్తుంది.
      </EvidenceBlock>

      <NoteBlock title="ఆహారం వర్సెస్ దేశీ: న్యాయమైన సందర్భం">
        <ul>
          <li>30 గ్రాఫ్ దేశీ ప్రోటీన్ = ~120 కెకెల్, 25 గ్రాఫ్ ప్రోటీన్, ~1-2 గ్రాఫ్ కొవ్వు</li>
          <li>100 గ్రాఫ్ చిరుతపిండి చిరుతపిండి = ~165 కెకెల్, 31 గ్రాఫ్ ప్రోటీన్, ~3.6 గ్రాఫ్ కొవ్వు</li>
          <li>100 గ్రాఫ్ పెనీర్ = ~265 కెకెల్, 18 గ్రాఫ్ ప్రోటీన్, ~21 గ్రాఫ్ కొవ్వు</li>
          <li>200 మిలీ మిల్క్ + 2 గుడ్డెలు = ~240 కెకెల్, 19 గ్రాఫ్ ప్రోటీన్, ~14 గ్రాఫ్ కొవ్వు</li>
          <li>
            దేశీ కండర నిర్మాణం ఆహారం శ్రేష్ఠ కాదు. ఇది కేవలం సుబిధవంत, వేగవంత వినియోగం చేసిన, మరియు ప్రోటీన్ కెకెల్కు కంటే తక్కువ. ఆహారం బదులుగా తిన్నవారు సరిపడిన, ఆహారం తిన్నవారు.
          </li>
        </ul>
      </NoteBlock>

      <h2>సారాంశం</h2>

      <NoteBlock title="కీ టేకవే">
        <ol>
          <li>
            <strong>ఆహారం ముందుకు, ఎక్కడ.</strong> సంపూరకాలు చెడ్డ డైట్ కోసం సమర్థకరణ చేయలేరు. ఆహారం పోషణ సర్వోత్తమం సంపూరకాలపై ఖర్చు చేయడానికి ముందు.
          </li>
          <li>
            <strong>దేశీ ప్రోటీన్</strong> ఉపయోగించిన ఆహారం ప్రోటీన్ లక్ష్య చేరుకోలేము. ఇది సుబిధవంత సాధనం, జాదూ కండర బిల్డర్ కాదు.
          </li>
          <li>
            <strong>క్రియేటిన్ మోనోహైడ్రేట్</strong> చాలా సమర్థకరణ క్రమం మరియు నిరంతర కండర మరియు శక్తి లాభం. 3-5 గ్రాఫ్ రోజువారీ, దీని. సంరక్షణ, సరిసంవరణ.
          </li>
          <li>
            <strong>BCAAs అనవసర</strong> చేసిన ప్రోటీన్ సేవ సమర్థవంతమైన (1.6+ గ్రాఫ్/కిలోలు/రోజు). సరిపోయిన సరిపోయిన.
          </li>
          <li>
            <strong>ద్రవ్యరాశి gainers అతి ఖరీదైన మాల్టోడెక్స్‌ట్రిన్.</strong> హోమ్‌మేడ్ షేక్ (మిల్క్ + ఆపిల్ + ఆటిస్ + పిండి బటర్ + దేశీ) చాలా ఉన్నత ప్రతిక్రియ శక్తిపూర్వక చేస్తుంది.
          </li>
          <li>
            <strong>అశ్వగంధ</strong> తీసిపోయిన ఆశ్చర్య శక్తి మరియు చికిత్స కోసం సాక్ష్య. ఇది సందర్భం చేసిన చేసిన.
          </li>
          <li>
            <strong>రక్త సందర్భం పూర్తీకరణ</strong> విటామిన్ డీ, బీ 12, ఇనుము, జింక్, మరియు ఇతర సందర్భం ముందు సంపూరక. సందర్భం అనుమానం కాదు.
          </li>
        </ol>
      </NoteBlock>

      <ReferenceList references={references} />
    </div>
  );
}
