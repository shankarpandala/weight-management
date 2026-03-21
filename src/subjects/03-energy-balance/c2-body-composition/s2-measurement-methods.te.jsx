import DefinitionBlock from '../../../components/content/DefinitionBlock';
import EvidenceBlock from '../../../components/content/EvidenceBlock';
import ExampleBlock from '../../../components/content/ExampleBlock';
import NoteBlock from '../../../components/content/NoteBlock';
import WarningBlock from '../../../components/content/WarningBlock';
import ReferenceList from '../../../components/content/ReferenceList';

const references = [
  {
    id: 1,
    authors: 'WHO Expert Consultation',
    year: 2004,
    title: 'Appropriate body-mass index for Asian populations and its implications for policy and intervention strategies',
    journal: 'The Lancet',
    volume: '363(9403)',
    pages: '157-163',
  },
  {
    id: 2,
    authors: 'Misra A, Chowbey P, Makkar BM, et al.',
    year: 2009,
    title: 'Consensus statement for diagnosis of obesity, abdominal obesity and the metabolic syndrome for Asian Indians and recommendations for physical activity, medical and surgical management',
    journal: 'Journal of the Association of Physicians of India',
    volume: '57',
    pages: '163-170',
  },
  {
    id: 3,
    authors: 'Shepherd JA, Ng BK, Sommer MJ, Heymsfield SB',
    year: 2017,
    title: 'Body composition by DXA',
    journal: 'Bone',
    volume: '104',
    pages: '101-105',
  },
  {
    id: 4,
    authors: 'Kyle UG, Bosaeus I, De Lorenzo AD, et al.',
    year: 2004,
    title: 'Bioelectrical impedance analysis — part I: review of principles and methods',
    journal: 'Clinical Nutrition',
    volume: '23(5)',
    pages: '1226-1243',
  },
  {
    id: 5,
    authors: 'Nuttall FQ',
    year: 2015,
    title: 'Body mass index: obesity, BMI, and health: a critical review',
    journal: 'Nutrition Today',
    volume: '50(3)',
    pages: '117-128',
  },
  {
    id: 6,
    authors: 'Ashwell M, Gunn P, Gibson S',
    year: 2012,
    title: 'Waist-to-height ratio is a better screening tool than waist circumference and BMI for adult cardiometabolic risk factors: systematic review and meta-analysis',
    journal: 'Obesity Reviews',
    volume: '13(3)',
    pages: '275-286',
  },
];

export default function MeasurementMethodsTe() {
  return (
    <div className="prose-health">
      <h1>Body Composition Measurement Methods</h1>

      <p>
        ఆరోగ్య ప్రమాదాన్ని అంచనా వేయడానికి, పురోగతిని ట్రాక్ చేయడానికి,
        మరియు nutrition మరియు exercise గురించి సమాచారంతో కూడిన నిర్ణయాలు
        తీసుకోవడానికి body composition ని ఖచ్చితంగా కొలవడం చాలా అవసరం.
        ప్రతి పద్ధతికి ఖచ్చితత్వం, ఖర్చు, అందుబాటు, మరియు ఆచరణాత్మకత
        మధ్య trade-offs ఉంటాయి — మరియు అనేక పద్ధతులకు Indian జనాభా కోసం
        సవరించిన వ్యాఖ్యానం అవసరం.
      </p>

      <h2>Body Mass Index (BMI)</h2>

      <DefinitionBlock term="Body Mass Index (BMI)">
        కిలోగ్రాములలో బరువును మీటర్లలో ఎత్తు వర్గంతో భాగించిన సాధారణ
        నిష్పత్తి (kg/m²). ప్రామాణిక WHO వర్గీకరణలు underweight ను 18.5
        కంటే తక్కువగా, normal ను 18.5-24.9 గా, overweight ను 25-29.9 గా,
        మరియు obese ను 30 మరియు అంతకంటే ఎక్కువగా నిర్వచిస్తాయి.
      </DefinitionBlock>

      <p>
        BMI దాని సరళత కారణంగా ప్రపంచవ్యాప్తంగా అత్యంత విస్తృతంగా
        ఉపయోగించే screening సాధనంగా ఉంది. అయితే, దీనికి గణనీయమైన
        పరిమితులు ఉన్నాయి: ఇది fat mass మరియు lean mass మధ్య తేడా చెప్పలేదు,
        fat పంపిణీని పరిగణనలోకి తీసుకోదు, మరియు అనేక వ్యక్తులను తప్పుగా
        వర్గీకరిస్తుంది — కండరాల వ్యక్తులను (ప్రమాదాన్ని అతిగా అంచనా
        వేయడం) మరియు thin-fat వ్యక్తులను (ప్రమాదాన్ని తక్కువగా అంచనా
        వేయడం) రెండింటినీ.
      </p>

      <WarningBlock>
        ప్రామాణిక WHO BMI cutoffs Indian జనాభాలో obesity ప్రమాదాన్ని
        గణనీయంగా తక్కువగా అంచనా వేస్తాయి. European జనాభాతో పోలిస్తే
        Indians చాలా తక్కువ BMI విలువల వద్ద metabolic సమస్యలను
        అభివృద్ధి చేస్తారు. Asian Indians కోసం consensus మార్గదర్శకాలు
        సవరించిన cutoffs ను సిఫార్సు చేస్తాయి: BMI 23-24.9 వద్ద overweight
        మరియు BMI 25 మరియు అంతకంటే ఎక్కువ వద్ద obese — అంతర్జాతీయ
        ప్రమాణం కంటే పూర్తి 5 పాయింట్లు తక్కువ.
      </WarningBlock>

      <EvidenceBlock source="WHO Expert Consultation, 2004 (The Lancet)" level="landmark">
        WHO expert consultation, Indians తో సహా Asian జనాభాలకు తక్కువ BMI
        విలువల వద్ద ఎక్కువ body fat శాతాలు మరియు ఎక్కువ metabolic ప్రమాదం
        ఉంటుందని నిర్ధారించింది. Asian జనాభా కోసం public health action
        thresholds ను ప్రామాణిక 25 మరియు 30 కాకుండా BMI 23 (పెరిగిన
        ప్రమాదం) మరియు BMI 27.5 (అధిక ప్రమాదం) వద్ద సెట్ చేయాలని వారు
        సిఫార్సు చేశారు.
      </EvidenceBlock>

      <ExampleBlock title="ఆచరణలో BMI పరిమితులు">
        Amit పుణేలో 30 సంవత్సరాల software engineer. 172 cm మరియు 72 kg తో,
        అతని BMI 24.3 — అంతర్జాతీయ ప్రమాణాల ప్రకారం "normal". కానీ Indian
        cutoff ఉపయోగిస్తే, అతను ఇప్పటికే overweight. అతని body fat 27%,
        waist circumference 91 cm, మరియు అతని fasting insulin ఎక్కువగా
        ఉంది. క్రమం తప్పకుండా weights ఎత్తే అతని సహోద్యోగి Vijay, 172 cm
        మరియు 80 kg (BMI 27) కానీ 16% body fat మరియు 78 cm waist కలిగి
        ఉన్నాడు. BMI ఈ రెండు చాలా భిన్నమైన శరీరాల గురించి దాదాపు
        ఏమీ చెప్పదు.
      </ExampleBlock>

      <h2>Waist Circumference</h2>

      <p>
        Waist circumference అనేది cardiometabolic ప్రమాదానికి సాధారణమైన,
        చవకైన, మరియు శక్తివంతమైన అంచనా సాధనం ఎందుకంటే ఇది visceral fat తో
        బాగా సహసంబంధం కలిగి ఉంటుంది. ఇది అత్యంత తక్కువ పక్కటెముక మరియు
        iliac crest (తుంటి ఎముక పైభాగం) మధ్య మధ్య బిందువు వద్ద
        సాగని టేపు ఉపయోగించి కొలుస్తారు.
      </p>

      <EvidenceBlock source="Misra et al., 2009 (Consensus Statement for Asian Indians)" level="strong">
        Asian Indians కోసం consensus మార్గదర్శకాలు abdominal obesity కోసం
        నిర్దిష్ట waist circumference cutoffs ను స్థాపించాయి: పురుషులకు 90
        cm లేదా అంతకంటే ఎక్కువ మరియు మహిళలకు 80 cm లేదా అంతకంటే ఎక్కువ.
        ఇవి అంతర్జాతీయ cutoffs అయిన 102 cm (పురుషులు) మరియు 88 cm
        (మహిళలు) కంటే తక్కువగా ఉన్నాయి, ఇది చిన్న waist sizes వద్ద Indian
        జనాభాలో ఎక్కువ visceral fat మరియు metabolic ప్రమాదాన్ని
        ప్రతిబింబిస్తుంది.
      </EvidenceBlock>

      <NoteBlock title="Waist-to-height ratio">
        మరింత సరళమైన నియమం: మీ waist circumference మీ ఎత్తులో సగం కంటే
        తక్కువగా ఉండాలి. 0.5 కంటే తక్కువ ఈ waist-to-height ratio (WHtR)
        లింగాలు, వయసులు, మరియు జాతులకు అతీతంగా వర్తిస్తుంది, ఇది అత్యంత
        సార్వత్రికంగా అన్వయించగల screening సాధనాలలో ఒకటిగా చేస్తుంది.
        ఒక systematic review, cardiometabolic ప్రమాదాన్ని అంచనా వేయడంలో
        WHtR BMI మరియు waist circumference రెండింటి కంటే ఉన్నతమైనదని
        కనుగొంది.
      </NoteBlock>

      <h2>Waist-Hip Ratio</h2>

      <p>
        Waist-hip ratio (WHR) waist circumference ను hip circumference తో
        పోల్చుతుంది మరియు fat పంపిణీ నమూనాను సూచిస్తుంది. ఎక్కువ నిష్పత్తి
        ఎక్కువ central (android) fat పంపిణీని సూచిస్తుంది.
      </p>

      <ul>
        <li><strong>పురుషులు:</strong> 0.90 కంటే ఎక్కువ WHR central obesity ని సూచిస్తుంది.</li>
        <li><strong>మహిళలు:</strong> 0.85 కంటే ఎక్కువ WHR central obesity ని సూచిస్తుంది.</li>
        <li><strong>Indian సందర్భం:</strong> thin-fat phenotype కారణంగా అనేక Indians సాపేక్షంగా తక్కువ శరీర బరువుల వద్ద కూడా ఈ నిష్పత్తులను మించిపోతారు.</li>
      </ul>

      <h2>DEXA (Dual-Energy X-ray Absorptiometry)</h2>

      <DefinitionBlock term="DEXA scan">
        Bone mineral, lean tissue, మరియు fat tissue మధ్య తేడా చెప్పడానికి
        రెండు వేర్వేరు energy స్థాయిలలో X-ray beams ను ఉపయోగించే medical
        imaging టెక్నిక్. ఇది trunk, arms, మరియు legs అంతటా fat మరియు
        lean mass పంపిణీని చూపిస్తూ regional body composition data ను
        అందిస్తుంది.
      </DefinitionBlock>

      <p>
        DEXA body composition అంచనా కోసం clinical reference standard గా
        పరిగణించబడుతుంది. ఇది మొత్తం body fat శాతం, regional fat పంపిణీ,
        visceral fat అంచనాలు, lean mass, మరియు bone mineral density యొక్క
        ఖచ్చితమైన, పునరుత్పాదక కొలతలను అందిస్తుంది — ఇవన్నీ కనిష్ట
        radiation exposure తో ఒకే 10-15 నిమిషాల scan నుండి.
      </p>

      <NoteBlock title="భారతదేశంలో DEXA అందుబాటు">
        DEXA scans భారతీయ నగరాల్లోని చాలా ప్రధాన ఆసుపత్రులు మరియు
        diagnostic centres లో అందుబాటులో ఉంటాయి, సాధారణంగా 2,000-5,000
        INR మధ్య ఖర్చవుతుంది. అందరికీ అవసరం కానప్పటికీ, BMI ద్వారా normal
        weight గా కనిపించే కానీ అధిక body fat కలిగి ఉండవచ్చని
        అనుమానించే వ్యక్తులకు baseline DEXA scan అమూల్యమైనది కావచ్చు —
        urban Indians లో ఇది సాధారణ పరిస్థితి.
      </NoteBlock>

      <h2>Bioelectrical Impedance Analysis (BIA)</h2>

      <p>
        BIA పరికరాలు శరీరం ద్వారా చిన్న electrical current ను పంపి
        resistance (impedance) ను కొలుస్తాయి. Lean tissue ఎక్కువ నీటిని
        కలిగి ఉండి fat కంటే విద్యుత్తును బాగా ప్రసారం చేస్తుంది కాబట్టి,
        impedance కొలతలు body composition ను అంచనా వేయగలవు.
      </p>

      <ul>
        <li><strong>ప్రయోజనాలు:</strong> చవకైనది, పోర్టబుల్, విస్తృతంగా అందుబాటులో ఉన్నది (smart scales, handheld devices), త్వరగా.</li>
        <li><strong>అప్రయోజనాలు:</strong> ఖచ్చితత్వం hydration స్థితి, ఇటీవలి భోజనాలు, exercise, మరియు menstrual cycle ద్వారా ప్రభావితమవుతుంది. ఫలితాలు నిజమైన విలువ నుండి 3-5% body fat వరకు మారవచ్చు.</li>
      </ul>

      <WarningBlock>
        BIA readings సంపూర్ణ ఖచ్చితత్వం కోసం కాకుండా కాలక్రమేణా trends ను
        ట్రాక్ చేయడానికి ఉత్తమంగా ఉపయోగించబడతాయి. ఎల్లప్పుడూ స్థిరమైన
        పరిస్థితులలో కొలవండి: రోజులో అదే సమయం, సమానమైన hydration, తినడానికి
        లేదా exercise చేయడానికి ముందు. ఒకే BIA కొలత clinical నిర్ణయాలు
        తీసుకోవడానికి ఉపయోగించకూడదు.
      </WarningBlock>

      <h2>Skinfold Measurements</h2>

      <p>
        Skinfold calipers నిర్దిష్ట anatomical ప్రదేశాలలో (సాధారణంగా
        triceps, biceps, subscapular, మరియు suprailiac) subcutaneous fat
        మందాన్ని కొలుస్తాయి. మొత్తం body fat శాతాన్ని అంచనా వేయడానికి ఈ
        కొలతలు population-specific సమీకరణాలలో నమోదు చేయబడతాయి.
      </p>

      <ul>
        <li><strong>ప్రయోజనాలు:</strong> చవకైనది, పోర్టబుల్, కాలక్రమేణా మార్పులను ట్రాక్ చేయగలదు.</li>
        <li><strong>అప్రయోజనాలు:</strong> అధికంగా operator-dependent — ఖచ్చితత్వానికి శిక్షణ పొందిన practitioners అవసరం. Visceral fat ను కొలవదు. సమీకరణాలు అన్ని జనాభాలకు validated కాకపోవచ్చు.</li>
      </ul>

      <h2>సరైన పద్ధతిని ఎంచుకోవడం</h2>

      <ExampleBlock title="Indians కోసం ఆచరణాత్మక సిఫార్సులు">
        చాలా మంది వ్యక్తులకు, సాధారణ కొలతల కలయిక అద్భుతమైన screening ను
        అందిస్తుంది: BMI (overweight కోసం 23 Indian cutoff ఉపయోగించి),
        waist circumference (పురుషులకు 90 cm కంటే తక్కువ, మహిళలకు 80 cm
        కంటే తక్కువ), మరియు waist-to-height ratio (0.5 కంటే తక్కువ). ఇవి
        పెరిగిన ప్రమాదాన్ని సూచిస్తే లేదా మరింత ఖచ్చితమైన data అవసరమైతే,
        DEXA scan ఉత్తమ clinical అవగాహనను అందిస్తుంది. BIA smart scales
        trends యొక్క home tracking కోసం ఉపయోగకరంగా ఉంటాయి, కొలతలు
        స్థిరంగా తీసుకుంటే.
      </ExampleBlock>

      <h2>ముఖ్య విషయాలు</h2>

      <ul>
        <li>BMI ఒక మొద్దుబారిన సాధనం — మరింత ఖచ్చితమైన risk assessment కోసం Indian-specific cutoffs (23 వద్ద overweight, 25 వద్ద obese) ఉపయోగించండి.</li>
        <li>Waist circumference cardiometabolic ప్రమాదానికి శక్తివంతమైన, ఉచిత అంచనా సాధనం: Indian జనాభాలో 90 cm (పురుషులు) మరియు 80 cm (మహిళలు) కంటే తక్కువగా ఉండేలా లక్ష్యంగా పెట్టుకోండి.</li>
        <li>DEXA అత్యంత సమాచారదాయకమైన clinical పద్ధతి, fat, lean, మరియు bone data ను regionally అందిస్తుంది.</li>
        <li>BIA home లో trends ట్రాక్ చేయడానికి ఉపయోగకరం, సంపూర్ణ ఖచ్చితత్వం కోసం కాదు.</li>
        <li>ఏ ఒక్క కొలత పూర్తి కథ చెప్పదు — పద్ధతులను కలపడం అత్యంత నమ్మకమైన చిత్రాన్ని అందిస్తుంది.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
