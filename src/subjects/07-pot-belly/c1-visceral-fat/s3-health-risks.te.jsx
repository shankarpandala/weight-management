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
    authors: 'Després JP, Lemieux I, Bergeron J, Pibarot P, Mathieu P, Larose E, et al.',
    year: 2008,
    title: 'Abdominal obesity and the metabolic syndrome: contribution to global cardiometabolic risk',
    source: 'Arteriosclerosis, Thrombosis, and Vascular Biology, 28(6), 1039-1049',
    type: 'review',
  },
  {
    authors: 'Ramachandran A, Snehalatha C, Shetty AS, Nanditha A',
    year: 2012,
    title: 'Trends in prevalence of diabetes in Asian countries',
    source: 'World Journal of Diabetes, 3(6), 110-117',
    type: 'review',
  },
  {
    authors: 'Fabbrini E, Sullivan S, Klein S',
    year: 2010,
    title: 'Obesity and nonalcoholic fatty liver disease: biochemical, metabolic, and clinical implications',
    source: 'Hepatology, 51(2), 679-689',
    type: 'review',
  },
  {
    authors: 'Hotamisligil GS',
    year: 2006,
    title: 'Inflammation and metabolic disorders',
    source: 'Nature, 444(7121), 860-867',
    type: 'foundational',
  },
  {
    authors: 'Alberti KGMM, Eckel RH, Grundy SM, Zimmet PZ, Cleeman JI, Donato KA, et al.',
    year: 2009,
    title: 'Harmonizing the metabolic syndrome: a joint interim statement',
    source: 'Circulation, 120(16), 1640-1645',
    type: 'guideline',
  },
  {
    authors: 'Anjana RM, Deepa M, Pradeepa R, Mahanta J, Narain K, Das HK, et al.',
    year: 2017,
    title: 'Prevalence of diabetes and prediabetes in 15 states of India: results from the ICMR-INDIAB population-based cross-sectional study',
    source: 'The Lancet Diabetes & Endocrinology, 5(8), 585-596',
    type: 'foundational',
  },
  {
    authors: 'Britton KA, Fox CS',
    year: 2011,
    title: 'Ectopic fat depots and cardiovascular disease',
    source: 'Circulation, 124(24), e837-e841',
    type: 'review',
  },
];

export default function HealthRisksTe() {
  return (
    <div className="prose-health">
      <h1>Visceral Fat Health Risks: ఎందుకు Belly Fat Kill చేయగలుగుతుంది</h1>

      <p>
        Visceral fat merely passive storage depot excess calories కోసం కాదు. ఇది
        metabolically active endocrine organ dozens of hormones, inflammatory molecules,
        మరియు signaling proteins secrete చేస్తుంది collectively adipokines అని పిలువబడేవాటిని.
        ఈ biochemical activity make చేస్తుంది visceral fat single most dangerous risk
        factors cardiovascular disease, type 2 diabetes, liver disease, మరియు premature
        death కోసం — మరియు India disproportionate share bear చేస్తుంది burden.
      </p>

      <h2>Visceral Fat as Endocrine Organ</h2>

      <DefinitionBlock
        term="Adipokines"
        definition="Bioactive molecules secreted adipose tissue (fat cells) ద్వారా act చేస్తాయి hormones మరియు signaling proteins గా. Visceral fat produce చేస్తుంది distinctly pro-inflammatory profile adipokines subcutaneous fat కంటే. Key adipokines include leptin, adiponectin, resistin, TNF-alpha, IL-6, PAI-1, మరియు angiotensinogen."
      />

      <p>
        Fat concept as endocrine organ revolutionary ఉంది when first proposed 1990s లో.
        Now we know visceral fat produce చేస్తుంది 600 కంటే ఎక్కువ bioactive molecules. Most
        clinically relevant include:
      </p>

      <ComparisonTable
        title="Key Adipokines Produced by Visceral Fat మరియు Effects"
        headers={['Adipokine', 'Effect', 'Health Consequence']}
        rows={[
          ['TNF-alpha (Tumor Necrosis Factor)', 'Pro-inflammatory cytokine; impairs insulin signaling', 'Insulin resistance, systemic inflammation, atherosclerosis'],
          ['Interleukin-6 (IL-6)', 'Stimulates hepatic CRP production; promotes inflammation', 'Cardiovascular disease, metabolic syndrome'],
          ['Resistin', 'Opposes insulin action; promotes insulin resistance', 'Type 2 diabetes, metabolic dysfunction'],
          ['PAI-1 (Plasminogen Activator Inhibitor-1)', 'Inhibits fibrinolysis (blood clot breakdown)', 'Increased thrombosis risk, heart attacks, strokes'],
          ['Angiotensinogen', 'Precursor to angiotensin II; promotes vasoconstriction', 'Hypertension'],
          ['Adiponectin (DECREASED)', 'Anti-inflammatory, insulin-sensitizing — but visceral fat reduces its production', 'Loss of metabolic protection; worsening insulin resistance'],
          ['Leptin (ELEVATED)', 'Satiety hormone — but chronically elevated levels cause leptin resistance', 'Failure of appetite regulation; continued overeating'],
        ]}
      />

      <EvidenceBlock
        level="strong"
        title="Visceral Fat Drives Chronic Low-Grade Inflammation"
        summary="Hotamisligil (2006) established landmark Nature review లో obesity — particularly
        visceral obesity — create చేస్తుంది chronic low-grade systemic inflammation state
        (sometimes called 'metaflammation'). ఇది differs acute infection-driven inflammation:
        lower intensity కానీ persistent, lasting years to decades. Inflammatory molecules
        produced by visceral fat (TNF-alpha, IL-6, CRP) directly damage blood vessel walls,
        impair insulin signaling, మరియు promote metabolic dysfunction."
        source="Hotamisligil GS. Nature. 2006;444(7121):860-867."
      />

      <h2>Cardiovascular Disease Risk</h2>

      <p>
        Visceral fat one of strongest independent risk factors چocardiovascular disease (CVD),
        surpassing BMI, total cholesterol, మరియు even smoking some analyses లో. Mechanisms
        connecting visceral fat to CVD include:
      </p>

      <ul>
        <li>
          <strong>Atherogenic dyslipidemia:</strong> Visceral fat promote చేస్తుంది characteristic
          lipid pattern — elevated triglycerides, low HDL cholesterol, increased small dense
          LDL particles. ఈ triad one of most potent promoters atherosclerotic plaque
          formation.
        </li>
        <li>
          <strong>Hypertension:</strong> Visceral fat produce చేస్తుంది angiotensinogen, activating
          renin-angiotensin-aldosterone system (RAAS) మరియు promoting sodium retention మరియు
          vasoconstriction. ప్రతి 1 cm increase waist circumference associated approximately
          1 mmHg increase systolic blood pressure.
        </li>
        <li>
          <strong>Endothelial dysfunction:</strong> Inflammatory cytokines from visceral fat
          damage endothelium (inner lining of blood vessels), reducing nitric oxide production
          మరియు promoting vasoconstriction, platelet adhesion, మరియు plaque formation.
        </li>
        <li>
          <strong>Prothrombotic state:</strong> Elevated PAI-1 from visceral fat impair చేస్తుంది
          body's ability dissolve blood clots, increasing heart attacks మరియు strokes risk.
        </li>
        <li>
          <strong>Epicardial and perivascular fat:</strong> Visceral fat also include చేస్తుంది
          ectopic fat depots directly surrounding heart (epicardial fat) మరియు blood vessels
          (perivascular fat), which directly promote చేయగలుగుతాయి local inflammation మరియు
          atherosclerosis.
        </li>
      </ul>

      <EvidenceBlock
        level="strong"
        title="Waist Circumference Predicts Cardiovascular Events"
        summary="Després et al. (2008) reviewed extensive evidence demonstrating ప్రతి 1 cm
        increase waist circumference associated 2% increase relative risk cardiovascular
        events. Furthermore, individuals elevated waist circumference (>102 cm men, >88 cm
        women by WHO cutoffs; >90 cm men, >80 cm women by Asian cutoffs) had 2-3 times
        higher CVD risk compared normal waist circumference కలిగిన వారు, even after adjusting
        BMI, blood pressure, cholesterol, మరియు smoking status కోసం."
        source="Després JP et al. Arteriosclerosis, Thrombosis, and Vascular Biology. 2008;28(6):1039-1049."
      />

      <h2>Type 2 Diabetes: Visceral Fat Connection</h2>

      <p>
        Relationship visceral fat మరియు type 2 diabetes between perhaps well-established
        all visceral fat-disease associations. Progression follows characteristic sequence:
      </p>

      <ExampleBlock title="Path from Visceral Fat to Type 2 Diabetes">
        <ol>
          <li>
            <strong>Step 1 — Visceral fat accumulation:</strong> Excess visceral fat release
            చేస్తుంది free fatty acids (FFAs) portal vein లోకి మరియు pro-inflammatory cytokines
            (TNF-alpha, IL-6) systemic circulation లోకి.
          </li>
          <li>
            <strong>Step 2 — Hepatic insulin resistance:</strong> Portal FFAs overwhelm liver,
            causing hepatic steatosis (fatty liver) మరియు impairing insulin's ability suppress
            hepatic glucose production. Liver pours glucose blood లోకి even when glucose
            levels already elevated.
          </li>
          <li>
            <strong>Step 3 — Peripheral insulin resistance:</strong> Inflammatory cytokines
            from visceral fat impair insulin signaling skeletal muscle మరియు other peripheral
            tissues లో, reducing glucose uptake.
          </li>
          <li>
            <strong>Step 4 — Compensatory hyperinsulinemia:</strong> Pancreatic beta cells
            ramp up insulin production overcome resistance కోసం. Fasting insulin levels may
            be 2-4 times normal.
          </li>
          <li>
            <strong>Step 5 — Beta cell exhaustion:</strong> After years overwork, beta cells
            become exhausted మరియు begin fail. Insulin production declines. Blood sugar rises
            prediabetic (HbA1c 5.7-6.4%) మరియు eventually diabetic (HbA1c ≥6.5%) range లోకి.
          </li>
          <li>
            <strong>Step 6 — Overt type 2 diabetes:</strong> Beta cell function irreversibly
            compromised (though early intervention partially restore చేయగలుగుతుంది). Patient now
            requires medication blood sugar control చేయడానికి.
          </li>
        </ol>
      </ExampleBlock>

      <h3>India's Diabetes Epidemic మరియు Visceral Fat</h3>

      <EvidenceBlock
        level="strong"
        title="India Has World's Second-Largest Diabetes Population"
        summary="ICMR-INDIAB study (Anjana et al., 2017) — largest epidemiological study diabetes
        India లో — screened 57,000 కంటే ఎక్కువ individuals 15 states across మరియు found
        7.3% adult population diabetes కలిగి ఉంది మరియు 10.3% prediabetes కలిగి ఉంది. Extrapolated
        nationally, ఇది translates approximately 77 million adults diabetes కలిగిన మరియు 109
        million prediabetes కలిగిన. Central obesity (elevated waist circumference) one of
        strongest independent predictors diabetes risk across all states."
        source="Anjana RM et al. The Lancet Diabetes & Endocrinology. 2017;5(8):585-596."
      />

      <p>
        Indian diabetes epidemic directly linked population's predisposition visceral
        fat accumulation కు. Indians develop diabetes lower BMI, younger age, మరియు lower
        waist circumference compared Caucasians కు. Phenomenon sometimes called "Asian Indian
        phenotype" describe చేస్తుంది ఈ cluster metabolic vulnerabilities: excess visceral
        fat, insulin resistance, dyslipidemia, మరియు pro-inflammatory state — all present
        relatively lean body weights లో.
      </p>

      <h2>Metabolic Syndrome</h2>

      <DefinitionBlock
        term="Metabolic Syndrome"
        definition="Cluster interconnected metabolic abnormalities together dramatically increase
        risk cardiovascular disease, type 2 diabetes, మరియు premature death. ఇది diagnosed
        when 3 లేదా more of 5 criteria present. Visceral obesity considered primary driver."
      />

      <ComparisonTable
        title="Metabolic Syndrome Criteria (Harmonized Definition, 2009)"
        headers={['Criterion', 'Standard Cutoff', 'South Asian/Indian Cutoff']}
        rows={[
          ['Elevated waist circumference', 'Men ≥102 cm, Women ≥88 cm', 'Men ≥90 cm, Women ≥80 cm'],
          ['Elevated triglycerides', '≥150 mg/dL (or on treatment)', '≥150 mg/dL (or on treatment)'],
          ['Reduced HDL cholesterol', 'Men <40 mg/dL, Women <50 mg/dL (or on treatment)', 'Men <40 mg/dL, Women <50 mg/dL (or on treatment)'],
          ['Elevated blood pressure', '≥130/85 mmHg (or on treatment)', '≥130/85 mmHg (or on treatment)'],
          ['Elevated fasting glucose', '≥100 mg/dL (or on treatment)', '≥100 mg/dL (or on treatment)'],
        ]}
      />

      <p>
        Metabolic syndrome affects estimated 30-40% urban Indian adults, prevalence
        rapidly increasing. Elevated waist circumference criterion capture చేస్తుంది central
        role visceral fat — it often described as "necessary కానీ not sufficient" component
        metabolic syndrome diagnosis కోసం.
      </p>

      <h2>Non-Alcoholic Fatty Liver Disease (NAFLD)</h2>

      <EvidenceBlock
        level="strong"
        title="Visceral Fat Primary Driver NAFLD"
        summary="Fabbrini et al. (2010) demonstrated comprehensive Hepatology review లో visceral
        fat strongest predictor intrahepatic triglyceride content (liver fat), even more
        total body fat లేదా subcutaneous fat కంటే. Portal vein deliver చేస్తుంది free fatty
        acids from visceral fat directly liver కు, overwhelming hepatic lipid metabolism.
        Approximately 25-30% Indian urban population now NAFLD కలిగి ఉంది, visceral obesity
        being strongest risk factor."
        source="Fabbrini E et al. Hepatology. 2010;51(2):679-689."
      />

      <p>
        NAFLD progress చేస్తుంది stages increasing severity యొక్క:
      </p>

      <ol>
        <li>
          <strong>Simple steatosis (fatty liver):</strong> Fat accumulation more than 5%
          hepatocytes లో. Often asymptomatic. Detected by ultrasound. Reversible weight
          loss 5-7% body weight.
        </li>
        <li>
          <strong>Non-alcoholic steatohepatitis (NASH):</strong> Fatty liver inflammation
          మరియు hepatocyte damage కు. Present approximately 3-5% general population లో.
          Progress చేయగలుగుతుంది fibrosis కు.
        </li>
        <li>
          <strong>Fibrosis:</strong> Scarring liver tissue. Progressive stages (F0-F4).
          Still potentially reversible aggressive weight loss మరియు lifestyle intervention కు.
        </li>
        <li>
          <strong>Cirrhosis:</strong> Irreversible scarring మరియు liver damage. Increase చేస్తుంది
          liver failure మరియు hepatocellular carcinoma risk. Require చేస్తుంది medical
          management మరియు potentially liver transplantation.
        </li>
      </ol>

      <WarningBlock title="NAFLD Now Commonest Liver Disease India లో">
        <p>
          NAFLD overtaken చేసిన alcoholic liver disease మరియు hepatitis B/C को most
          common cause chronic liver disease Indian urban populations లో. Studies estimate
          prevalence 25-30% urban India మరియు 15-20% rural India లో. Disease often remain
          silent until advanced stages — many patients NASH మరియు even early fibrosis
          completely normal liver function tests కలిగి ఉంటారు. Ultrasound first-line
          screening tool, మరియు any individual central obesity (elevated waist
          circumference) కలిగిన screen చేయవలసి ఉంటుంది.
        </p>
      </WarningBlock>

      <h2>ఇతర Health Consequences</h2>

      <h3>Cancer Risk</h3>
      <p>
        Visceral fat increase చేస్తుంది several cancers risk through chronic inflammation,
        elevated insulin/IGF-1 levels, మరియు altered sex hormone metabolism. Cancers strongest
        links visceral obesity కు include colorectal cancer (30% increased risk), post-menopausal
        breast cancer, endometrial cancer, esophageal adenocarcinoma, pancreatic cancer,
        మరియు kidney cancer.
      </p>

      <h3>Sleep Apnea</h3>
      <p>
        Visceral fat associated obstructive sleep apnea (OSA) కు mechanisms beyond simple
        neck/upper airway fat deposition. Visceral fat-driven inflammation మరియు fluid shifts
        contribute airway narrowing కు. OSA in turn worsen చేస్తుంది visceral fat through
        sleep fragmentation, cortisol elevation, మరియు hormonal disruption — creating another
        vicious cycle.
      </p>

      <h3>Cognitive Decline మరియు Dementia</h3>
      <p>
        Emerging evidence link చేస్తుంది visceral obesity accelerated brain aging, reduced
        hippocampal volume, మరియు increased risk dementia including Alzheimer's disease కు.
        Mechanisms likely involve chronic neuroinflammation, cerebrovascular damage from
        metabolic syndrome components, మరియు insulin resistance brain లో.
      </p>

      <h3>Polycystic Ovary Syndrome (PCOS)</h3>
      <p>
        Women లో, visceral fat మరియు insulin resistance strongly linked PCOS కు, which affects
        approximately 10-15% Indian women of reproductive age. Visceral fat-driven hyperinsulinemia
        stimulate చేస్తుంది ovarian androgen production, leading irregular periods, anovulation,
        hirsutism, మరియు infertility. Reducing visceral fat through lifestyle modification
        first-line treatment PCOS కోసం.
      </p>

      <h2>Risk Quantifying: How Much Visceral Fat Matter చేస్తుంది</h2>

      <ExampleBlock title="Numbers That Should Motivate Action">
        <ul>
          <li>ప్రతి 1 cm increase waist circumference associated 2% increase cardiovascular risk.</li>
          <li>Men waist circumference >102 cm కలిగిన have 3.5-fold higher risk coronary heart disease.</li>
          <li>ప్రతి 5 cm increase waist circumference కోసం, type 2 diabetes risk increases 11% men మరియు 13% women లో.</li>
          <li>Metabolic syndrome (driven by visceral fat) increase చేస్తుంది cardiovascular death risk 2.4-fold.</li>
          <li>NAFLD prevalence increases 7% from normal-weight individuals to 70% abdominal obesity కలిగిన వారిలో.</li>
          <li>Reducing waist circumference just 4 cm associated 14% reduction cardiovascular events risk.</li>
        </ul>
      </ExampleBlock>

      <NoteBlock title="Key Takeaways">
        <ul>
          <li>Visceral fat active endocrine organ producing inflammatory cytokines that drive disease.</li>
          <li>CVD risk increase చేస్తుంది approximately 2% ప్రతి 1 cm increase waist circumference కోసం.</li>
          <li>Visceral fat primary driver insulin resistance that leads type 2 diabetes కు.</li>
          <li>India faces convergent crisis: genetic predisposition visceral fat + dietary transition + sedentary lifestyle = diabetes మరియు CVD epidemic.</li>
          <li>NAFLD most common liver disease urban India, driven by visceral obesity.</li>
          <li>Metabolic syndrome criteria should use South Asian waist cutoffs (men ≥90 cm, women ≥80 cm).</li>
          <li>Even modest reductions visceral fat (4-5 cm waist circumference) significantly reduce disease risk.</li>
        </ul>
      </NoteBlock>

      <ReferenceList references={references} />
    </div>
  );
}
