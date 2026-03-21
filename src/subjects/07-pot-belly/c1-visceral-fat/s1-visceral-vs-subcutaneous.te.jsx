import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock';
import EvidenceBlock from '../../../components/content/EvidenceBlock';
import ExampleBlock from '../../../components/content/ExampleBlock';
import NoteBlock from '../../../components/content/NoteBlock';
import WarningBlock from '../../../components/content/WarningBlock';
import ReferenceList from '../../../components/content/ReferenceList';
import ComparisonTable from '../../../components/content/ComparisonTable';

const references = [
  {
    authors: 'Ibrahim MM',
    year: 2010,
    title: 'Subcutaneous and visceral adipose tissue: structural and functional differences',
    source: 'Obesity Reviews, 11(1), 11-18',
    type: 'review',
  },
  {
    authors: 'Després JP',
    year: 2012,
    title: 'Body fat distribution and risk of cardiovascular disease: an update',
    source: 'Circulation, 126(10), 1301-1313',
    type: 'review',
  },
  {
    authors: 'Misra A, Chowbey P, Makkar BM, Vikram NK, Wasir JS, Chadha D, et al.',
    year: 2009,
    title: 'Consensus statement for diagnosis of obesity, abdominal obesity and the metabolic syndrome for Asian Indians and recommendations for physical activity, medical and surgical management',
    source: 'Journal of the Association of Physicians of India, 57, 163-170',
    type: 'guideline',
  },
  {
    authors: 'Wajchenberg BL',
    year: 2000,
    title: 'Subcutaneous and visceral adipose tissue: their relation to the metabolic syndrome',
    source: 'Endocrine Reviews, 21(6), 697-738',
    type: 'review',
  },
  {
    authors: 'Shuster A, Patlas M, Pinthus JH, Mourtzakis M',
    year: 2012,
    title: 'The clinical importance of visceral adiposity: a critical review of methods for visceral adipose tissue analysis',
    source: 'British Journal of Radiology, 85(1009), 1-10',
    type: 'review',
  },
  {
    authors: 'Kuk JL, Katzmarzyk PT, Nichaman MZ, Church TS, Blair SN, Ross R',
    year: 2006,
    title: 'Visceral fat is an independent predictor of all-cause mortality in men',
    source: 'Obesity, 14(2), 336-341',
    type: 'foundational',
  },
  {
    authors: 'Yusuf S, Hawken S, Ounpuu S, Bautista L, Franzosi MG, Commerford P, et al.',
    year: 2005,
    title: 'Obesity and the risk of myocardial infarction in 27,000 participants from 52 countries: a case-control study',
    source: 'The Lancet, 366(9497), 1640-1649',
    type: 'foundational',
  },
];

export default function VisceralVsSubcutaneousFatTe() {
  return (
    <div className="prose-health">
      <h1>పొట్ట కొవ్వు రకాలు: విసెరల్ కొవ్వు vs సబ్‌క్యూటేనియస్ కొవ్వు</h1>

      <p>
        పొట్ట చుట్టూ ఉన్న కొవ్వంటే ఒకేవిధమైన కొవ్వు కాదు. మీ కటి చుట్టూ చూడగలిగే
        మరియు పీట్ట చేయగలిగే కొవ్వు మీ ఆధారుడి కుహరం లోపలి గভీర కొవ్వు నుండి
        మూలానికి భిన్నమైనది. ఈ రెండు రకాల కొవ్వు (adipose tissue) వాటి location,
        metabolic activity, hormone behavior, మరియు ఎక్కువ ముఖ్యమైనవి ఆరోగ్యపై
        ప్రభావంలో ఎలా భిన్నమైనవి ఉంటాయో తెలుసుకోవడం belly fat తగ్గించే నిర్వహణకు
        చాలా ముఖ్యం.
      </p>

      <DefinitionBlock
        term="Visceral Adipose Tissue (VAT)"
        definition="ఆధారుడి కుహరం లోపల, internal organs (liver, pancreas, intestines) చుట్టూ నిల్చిన కొవ్వు. దీనిని intra-abdominal fat అని కూడా అంటారు. ఇది metabolically active, hormonally reactive, మరియు cardiometabolic disease కు చాలా సంబంధం ఉంది. దీనిని చర్మం ద్వారా నేరుగా పీట్ట చేయలేము."
      />

      <DefinitionBlock
        term="Subcutaneous Adipose Tissue (SAT)"
        definition="చర్మం కు సరిగ్గా క్రింద, కండర కుచ్చ పై నిల్చిన కొవ్వు. ఇది మృదువైన, పీట్ట చేయగలిగే కొవ్వు, విలువను పెరుగుతుంది. ఇది శరీర ఆకారం మరియు సౌందర్యానికి తోడ్పడుతుంది కానీ visceral fat కంటే చాలా తక్కువ metabolically ప్రమాదకరమైనది."
      />

      <h2>Anatomical వ్యత్యాసాలు</h2>

      <p>
        ఆధారుడి wall లో చర్మం, కొవ్వు, rectus abdominis మరియు oblique muscles, ఆపై
        peritoneal cavity (organs) ఉన్న layers ఉన్నాయి. Subcutaneous fat
        చర్మం మరియు కండర wall మధ్య ఉంటుంది. Visceral fat లోపలి peritoneal cavity లో,
        liver, stomach, intestines, kidneys చుట్టూ చుట్టు ఉంటుంది.
      </p>

      <p>
        మూడవ రకం retroperitoneal fat, kidneys మరియు aorta చుట్టూ ఉంటుంది. ఇది చిన్న
        పరిమాణంలో ఉన్నప్పటికీ, visceral fat వంటి metabolic characteristics ఉన్నాయి.
      </p>

      <EvidenceBlock
        level="strong"
        title="Visceral Fat Metabolically భిన్నమైనది"
        summary="Ibrahim (2010) comprehensive review లో చూపించాడు visceral adipose tissue fundamental cellular behavior లో subcutaneous fat నుండి భిన్నమైనది. VAT adipocytes более metabolically active, greater lipolytic activity (faster fat breakdown), more insulin-resistant, మరియు significantly more pro-inflammatory cytokines (TNF-alpha, IL-6, PAI-1) ను produce చేస్తాయి."
        source="Ibrahim MM. Obesity Reviews. 2010;11(1):11-18."
      />

      <ComparisonTable
        title="Visceral Fat vs. Subcutaneous Fat — ప్రధాన వ్యత్యాసాలు"
        headers={['Property', 'Visceral Fat (VAT)', 'Subcutaneous Fat (SAT)']}
        rows={[
          ['Location', 'లోపలి — ఆధారుడి కుహరం లోపల organs చుట్టూ', 'బహిరంగ — చర్మం కు క్రింద, muscles కు పైన'],
          ['Feel', 'కఠిన, బయటికి పొడుచుకొచ్చిన belly, పీట్ట చేయలేనిది', 'మృదువైన, పీట్ట చేయగలిగే, jiggly fat layer'],
          ['Metabolic activity', 'అత్యధిక active — endocrine organ వలె పనిచేస్తుంది', 'తక్కువ metabolically active'],
          ['Inflammatory profile', 'TNF-alpha, IL-6, resistin లో high levels produce చేస్తుంది', 'తక్కువ inflammatory cytokines produce చేస్తుంది'],
          ['Insulin sensitivity', 'Highly insulin resistant', 'Relatively more insulin sensitive'],
          ['Lipolysis rate', 'High — portal vein ద్వారా free fatty acids rapidly release చేస్తుంది', 'Lower — slower fat mobilization'],
          ['Blood supply', 'Directly liver కు portal vein ద్వారా drain చేస్తుంది', 'Systemic circulation లోకి drain చేస్తుంది'],
          ['Health risk', 'CVD, diabetes, mortality కు strong independent predictor', 'Metabolic disease కు weaker association'],
          ['Response to exercise', 'Well responds — aerobic exercise నుండి preferentially reduce అవుతుంది', 'Slower to respond; often last fat lost'],
          ['Response to diet', 'Caloric deficit కు well responds', 'Deficit కు responds కానీ slower reduction'],
          ['Gender pattern', 'Men మరియు post-menopausal women లో more common', 'Pre-menopausal women లో more common'],
        ]}
      />

      <h2>వ్యత్యాసాన్ని గుర్తించడం: Hard Belly vs Soft Belly Test</h2>

      <p>
        చిన్న clinical observation ఆధారుగా belly texture మరియు compressibility ను
        చూడవచ్చు. Imaging కు నిర్దేశకం అయినప్పటికీ, ఇది reasonable first approximation
        ఇస్తుంది.
      </p>

      <ExampleBlock title="Belly Palpation Test">
        <p>
          <strong>Hard, distended belly:</strong> మీ belly forward protrudes మరియు feel firm
          or taut press చేసినప్పుడు — basketball పై press చేసిన వంటి — ఇది visceral fat ఎక్కువ సూచిస్తుంది.
          Firmness ఇందుమూలం visceral fat ఆధారుడి muscle wall లోపల packed ఉన్న wall ని బయటికి push చేస్తుంది.
          ఈ కొవ్వులో చాలా భాగాన్ని grab లేదా pinch చేయలేరు.
        </p>
        <p>
          <strong>Soft, pinchable belly:</strong> మీ midsection చుట్టూ soft, jiggly కొవ్వులో
          handfuls grab చేయగలిగితే, ఇది predominantly subcutaneous fat. Aesthetically
          undesirable కానీ, ఈ కొవ్వు less metabolic danger pose చేస్తుంది.
          చాలామంది రెండు రకాల కలయిక కలిగి ఉంటారు.
        </p>
        <p>
          <strong>Combination pattern:</strong> చాలా overweight individuals రెండూ కలిగి ఉంటారు.
          Firm, distended lower belly (visceral) soft, pinchable layer (subcutaneous) పై ఉన్న
          వ్యక్తి common clinical presentation.
        </p>
      </ExampleBlock>

      <h2>Visceral Fat కొలవడం</h2>

      <h3>Gold Standard: CT మరియు MRI Imaging</h3>

      <p>
        Computed tomography (CT) మరియు magnetic resonance imaging (MRI) gold-standard
        methods visceral adipose tissue quantify చేయడానికి. Single CT slice L4-L5
        vertebral level లో visceral fat cross-sectional area accurately measure చేయగలుగుతుంది,
        typically square centimeters (cm²) లో express చేస్తారు. Visceral fat areas above
        100 cm² men లో మరియు 80 cm² women లో elevated cardio-metabolic risk కు associated.
      </p>

      <EvidenceBlock
        level="strong"
        title="CT-Measured Visceral Fat మరియు Mortality"
        summary="Kuk et al. (2006) 291 men లను 11.4 years median follow చేశారు మరియు CT కుంచన
        measure చేసిన visceral fat ఆ-cause mortality కు independent predictor అని కనుగొన్నారు,
        BMI, waist circumference, cardiorespiratory fitness adjust చేసిన తర్వాత కూడా. Visceral
        fat లో ప్రతి standard deviation increase 35% increase mortality risk కు associated."
        source="Kuk JL et al. Obesity. 2006;14(2):336-341."
      />

      <h3>Clinical Proxy: Waist Circumference</h3>

      <p>
        CT మరియు MRI expensive, impractical routine screening కోసం, radiation exposure
        (CT) ఉన్నందువల్ల, waist circumference (WC) most widely used proxy measure visceral
        fat కోసం. ఇది CT-measured visceral fat కు moderate well correlate చేస్తుంది
        (r = 0.60-0.80 depending on population).
      </p>

      <NoteBlock title="Waist Circumference కొలవడం సరిగ్గా ఎలా">
        <ol>
          <li>నిటారుగా నిలబడండి feet together మరియు arms relaxed sides లో.</li>
          <li>Non-stretchable measuring tape use చేయండి.</li>
          <li>Lowest rib మరియు iliac crest (hip bone పై భాగం) మధ్య midpoint locate చేయండి — ఇది WHO-recommended landmark.</li>
          <li>Alternatively, umbilicus (navel) స్థాయిలో కొలవండి — ఇది more practical clinical practice లో.</li>
          <li>Tape snug ఉండాలి కానీ skin compress చేయకూడదు.</li>
          <li>Normal expiration end లో కొలవండి (gently breathe out).</li>
          <li>రెండు measurements తీసుకుని average చేయండి.</li>
          <li>ఉదయం ఆహారం లేదా drink చేయకుండా కొలవండి consistency కోసం.</li>
        </ol>
      </NoteBlock>

      <h3>Ethnic-Specific Cutoffs: Indian populations కు ఎందుకు భిన్న Thresholds</h3>

      <p>
        ఇది Indian populations కోసం critically important point. Standard WHO waist
        circumference cutoffs (men: 102 cm, women: 88 cm) Caucasian populations నుండి
        derived ఉన్నాయి మరియు South Asians కోసం <strong>far too lenient</strong> ఉన్నాయి.
        Indians significantly lower body weights మరియు waist sizes లో visceral fat
        accumulate చేస్తారు Europeanల కంటే.
      </p>

      <EvidenceBlock
        level="strong"
        title="Indian-Specific Waist Circumference Cutoffs"
        summary="2009 Consensus Statement by Misra et al. Indian Association of Clinical Medicine నుండి
        lower waist circumference cutoffs Asian Indians కోసం established చేశారు: ≥90 cm men
        కు మరియు ≥80 cm women కు. ఈ cutoffs better predict చేస్తాయి cardio-metabolic risk
        Indian populations లో, వీరు develop చేస్తారు insulin resistance మరియు visceral
        adiposity significantly lower BMI మరియు waist circumference values లో Western
        populations కంటే."
        source="Misra A et al. Journal of the Association of Physicians of India. 2009;57:163-170."
      />

      <ComparisonTable
        title="Waist Circumference Cutoffs — International vs. Indian"
        headers={['Category', 'WHO (Caucasian)', 'Asian Indian (Misra et al.)']}
        rows={[
          ['Men — Increased Risk', '≥94 cm', '≥78 cm'],
          ['Men — Substantially Increased Risk', '≥102 cm', '≥90 cm'],
          ['Women — Increased Risk', '≥80 cm', '≥72 cm'],
          ['Women — Substantially Increased Risk', '≥88 cm', '≥80 cm'],
        ]}
      />

      <h3>ఇతర Assessment Methods</h3>

      <p>
        అనేక additional techniques visceral fat assess చేయగలుగుతాయి, ప్రతిదీ trade-offs లు కలిగి ఉంటాయి:
      </p>

      <ul>
        <li>
          <strong>DEXA scan (Dual-energy X-ray Absorptiometry):</strong> Newer DEXA software
          android region లో visceral fat estimate చేయగలుగుతుంది. CT కంటే less accurate కానీ more
          accessible మరియు lower radiation exposure.
        </li>
        <li>
          <strong>Bioelectrical impedance analysis (BIA):</strong> కొన్ని advanced BIA devices
          (e.g., InBody, Tanita) visceral fat levels scale లో estimate చేస్తాయి. Reasonable
          time trend tracking కోసం కానీ absolute measurement కోసం highly accurate కాదు.
        </li>
        <li>
          <strong>Waist-to-hip ratio (WHR):</strong> Waist circumference divided by hip
          circumference. 0.90 (men) లేదా 0.85 (women) కంటే ఎక్కువ values central obesity
          indicate చేస్తాయి. INTERHEART study WHR heart attack risk కు BMI కంటే stronger
          predictor కనుగొన్నారు.
        </li>
        <li>
          <strong>Waist-to-height ratio (WHtR):</strong> 0.5 కంటే ఎక్కువ value ("keep your waist
          to less than half your height") central obesity risk కు simple, universally applicable
          indicator.
        </li>
      </ul>

      <EvidenceBlock
        level="strong"
        title="Waist-to-Hip Ratio Heart Attack Risk Better Predict చేస్తుంది BMI కంటే"
        summary="Landmark INTERHEART study (Yusuf et al., 2005), 52 countries నుండి 27,000 participants
        involving, భారతదేశం including, waist-to-hip ratio myocardial infarction కు BMI కంటే stronger
        predictor అని కనుగొన్నారు across all ethnic groups. Population-attributable risk abdominal
        obesity కు heart attack కోసం 20.1% ఉంది — meaning one in five heart attacks globally
        abdominal obesity కు attribute చేయవచ్చు."
        source="Yusuf S et al. The Lancet. 2005;366(9497):1640-1649."
      />

      <h2>ఎందుకు Visceral Fat More Dangerous: Portal Vein Theory</h2>

      <p>
        Visceral fat more dangerous ఎందుకు ఉందో కీలక anatomical reason దాని venous drainage
        లో ఉంది. Visceral fat free fatty acids (FFAs) మరియు inflammatory cytokines
        directly portal vein లోకి release చేస్తుంది, వీటిని blood straight liver కు carries.
        This direct hepatic exposure ఈ వాటికి దారితీస్తుంది:
      </p>

      <ul>
        <li>Increased hepatic glucose production (blood sugar worsen చేస్తుంది)</li>
        <li>Increased hepatic lipid synthesis (triglycerides మరియు VLDL raising)</li>
        <li>Reduced hepatic insulin clearance (insulin resistance worsen చేస్తుంది)</li>
        <li>Increased production inflammatory proteins (CRP, fibrinogen)</li>
        <li>Accumulation fat liver itself లో (non-alcoholic fatty liver disease)</li>
      </ul>

      <p>
        Subcutaneous fat, మరోవైపు, systemic venous circulation లోకి drain చేస్తుంది మరియు
        దాని metabolic products directly liver కు deliver చేయదు. ఈ fundamental difference
        plumbing లో differential health risk ను చాలా explain చేస్తుంది.
      </p>

      <WarningBlock title="'Thin Outside, Fat Inside' Phenomenon">
        <p>
          ఒక వ్యక్తి normal BMI (18.5-24.9) కలిగి ఉండవచ్చు కానీ dangerous levels visceral
          fat harbor చేయవచ్చు. ఈ phenotype, కొన్నిసార్లు TOFI (Thin Outside, Fat Inside) లేదా
          metabolically obese normal weight (MONW) అని పిలుస్తారు, particularly common
          South Asian populations లో. Studies 30% normal-weight Asian Indians metabolic
          abnormalities associated with visceral obesity కలిగి ఉన్నారని చూపించాయి. ఈ
          కారణంగా BMI alone insufficient assessing metabolic risk కోసం Indian populations లో —
          waist circumference measurement essential.
        </p>
      </WarningBlock>

      <h2>Good News: Visceral Fat Well Responds Intervention కు</h2>

      <p>
        Despite being more dangerous, visceral fat silver lining కలిగి ఉంది: it more responsive
        lifestyle intervention కు subcutaneous fat కంటే. Visceral adipocytes higher lipolytic
        activity కలిగి ఉంటాయి మరియు more sensitive catecholamines కు (stress hormones
        fat mobilize చేస్తాయి), అందువల్ల faster shrink caloric deficit create చేసినప్పుడు
        through diet మరియు especially through exercise.
      </p>

      <EvidenceBlock
        level="strong"
        title="Exercise Preferentially Reduce చేస్తుంది Visceral Fat"
        summary="Després (2012) extensive evidence reviewed అది aerobic exercise preferentially reduce
        చేస్తుంది visceral adipose tissue, even when total body weight loss modest. Caloric deficit
        500-700 kcal/day combined 150+ minutes/week moderate aerobic activity reduce చేయగలుగుతుంది
        visceral fat 20-30% over 12-16 weeks, with disproportionately greater reductions visceral
        compared to subcutaneous depots."
        source="Després JP. Circulation. 2012;126(10):1301-1313."
      />

      <NoteBlock title="Key Takeaways">
        <ul>
          <li>Visceral fat (hard belly) far more dangerous subcutaneous fat (soft belly) కంటే దాని inflammatory మరియు metabolic activity వల్ల.</li>
          <li>Indian populations genetically predisposed visceral fat accumulation కు మరియు need lower waist circumference cutoffs (men ≥90 cm, women ≥80 cm).</li>
          <li>BMI alone many Indians మిస్ చేస్తుంది "thin outside, fat inside" — always measure waist circumference.</li>
          <li>CT/MRI gold standard, కానీ waist circumference practical మరియు reasonably accurate proxy.</li>
          <li>Good news: visceral fat better respond చేస్తుంది diet మరియు exercise కు subcutaneous fat కంటే.</li>
        </ul>
      </NoteBlock>

      <ReferenceList references={references} />
    </div>
  );
}
