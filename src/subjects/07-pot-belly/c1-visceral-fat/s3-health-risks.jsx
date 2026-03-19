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

export default function HealthRisks() {
  return (
    <div className="prose-health">
      <h1>Health Risks of Visceral Fat: Why Belly Fat Can Kill</h1>

      <p>
        Visceral fat is not merely a passive storage depot for excess calories. It is a
        metabolically active endocrine organ that secretes dozens of hormones, inflammatory
        molecules, and signaling proteins collectively known as adipokines. This biochemical
        activity makes visceral fat one of the single most dangerous risk factors for
        cardiovascular disease, type 2 diabetes, liver disease, and premature death — and
        India bears a disproportionate share of this burden.
      </p>

      <h2>Visceral Fat as an Endocrine Organ</h2>

      <DefinitionBlock
        term="Adipokines"
        definition="Bioactive molecules secreted by adipose tissue (fat cells) that act as hormones and signaling proteins. Visceral fat produces a distinctly pro-inflammatory profile of adipokines compared to subcutaneous fat. Key adipokines include leptin, adiponectin, resistin, TNF-alpha, IL-6, PAI-1, and angiotensinogen."
      />

      <p>
        The concept of fat as an endocrine organ was revolutionary when first proposed in the
        1990s. We now know that visceral fat produces over 600 bioactive molecules. The most
        clinically relevant include:
      </p>

      <ComparisonTable
        title="Key Adipokines Produced by Visceral Fat and Their Effects"
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
        summary="Hotamisligil (2006) established in a landmark Nature review that obesity — particularly visceral obesity — creates a state of chronic low-grade systemic inflammation (sometimes called 'metaflammation'). This differs from acute infection-driven inflammation: it is lower in intensity but persistent, lasting years to decades. The inflammatory molecules produced by visceral fat (TNF-alpha, IL-6, CRP) directly damage blood vessel walls, impair insulin signaling, and promote metabolic dysfunction."
        source="Hotamisligil GS. Nature. 2006;444(7121):860-867."
      />

      <h2>Cardiovascular Disease Risk</h2>

      <p>
        Visceral fat is one of the strongest independent risk factors for cardiovascular
        disease (CVD), surpassing BMI, total cholesterol, and even smoking in some analyses.
        The mechanisms connecting visceral fat to CVD include:
      </p>

      <ul>
        <li>
          <strong>Atherogenic dyslipidemia:</strong> Visceral fat promotes a characteristic
          lipid pattern — elevated triglycerides, low HDL cholesterol, increased small dense
          LDL particles. This triad is one of the most potent promoters of atherosclerotic
          plaque formation.
        </li>
        <li>
          <strong>Hypertension:</strong> Visceral fat produces angiotensinogen, activating the
          renin-angiotensin-aldosterone system (RAAS) and promoting sodium retention and
          vasoconstriction. Each 1 cm increase in waist circumference is associated with
          approximately 1 mmHg increase in systolic blood pressure.
        </li>
        <li>
          <strong>Endothelial dysfunction:</strong> Inflammatory cytokines from visceral fat
          damage the endothelium (inner lining of blood vessels), reducing nitric oxide
          production and promoting vasoconstriction, platelet adhesion, and plaque formation.
        </li>
        <li>
          <strong>Prothrombotic state:</strong> Elevated PAI-1 from visceral fat impairs the
          body's ability to dissolve blood clots, increasing the risk of heart attacks and strokes.
        </li>
        <li>
          <strong>Epicardial and perivascular fat:</strong> Visceral fat also includes ectopic
          fat depots directly surrounding the heart (epicardial fat) and blood vessels
          (perivascular fat), which can directly promote local inflammation and atherosclerosis.
        </li>
      </ul>

      <EvidenceBlock
        level="strong"
        title="Waist Circumference Predicts Cardiovascular Events"
        summary="Després et al. (2008) reviewed extensive evidence demonstrating that each 1 cm increase in waist circumference is associated with a 2% increase in relative risk of cardiovascular events. Furthermore, individuals with elevated waist circumference (>102 cm men, >88 cm women by WHO cutoffs; >90 cm men, >80 cm women by Asian cutoffs) had 2-3 times higher CVD risk compared to those with normal waist circumference, even after adjusting for BMI, blood pressure, cholesterol, and smoking status."
        source="Després JP et al. Arteriosclerosis, Thrombosis, and Vascular Biology. 2008;28(6):1039-1049."
      />

      <h2>Type 2 Diabetes: The Visceral Fat Connection</h2>

      <p>
        The relationship between visceral fat and type 2 diabetes is perhaps the most
        well-established of all visceral fat-disease associations. The progression follows
        a characteristic sequence:
      </p>

      <ExampleBlock title="The Path from Visceral Fat to Type 2 Diabetes">
        <ol>
          <li>
            <strong>Step 1 — Visceral fat accumulation:</strong> Excess visceral fat releases
            free fatty acids (FFAs) into the portal vein and pro-inflammatory cytokines
            (TNF-alpha, IL-6) into systemic circulation.
          </li>
          <li>
            <strong>Step 2 — Hepatic insulin resistance:</strong> Portal FFAs overwhelm the
            liver, causing hepatic steatosis (fatty liver) and impairing insulin's ability
            to suppress hepatic glucose production. The liver pours glucose into the blood
            even when glucose levels are already elevated.
          </li>
          <li>
            <strong>Step 3 — Peripheral insulin resistance:</strong> Inflammatory cytokines
            from visceral fat impair insulin signaling in skeletal muscle and other peripheral
            tissues, reducing glucose uptake.
          </li>
          <li>
            <strong>Step 4 — Compensatory hyperinsulinemia:</strong> Pancreatic beta cells
            ramp up insulin production to overcome resistance. Fasting insulin levels may
            be 2-4 times normal.
          </li>
          <li>
            <strong>Step 5 — Beta cell exhaustion:</strong> After years of overwork, beta
            cells become exhausted and begin to fail. Insulin production declines. Blood
            sugar rises into the prediabetic (HbA1c 5.7-6.4%) and eventually diabetic
            (HbA1c ≥6.5%) range.
          </li>
          <li>
            <strong>Step 6 — Overt type 2 diabetes:</strong> Beta cell function is
            irreversibly compromised (though early intervention can partially restore it).
            The patient now requires medication to control blood sugar.
          </li>
        </ol>
      </ExampleBlock>

      <h3>India's Diabetes Epidemic and Visceral Fat</h3>

      <EvidenceBlock
        level="strong"
        title="India Has the World's Second-Largest Diabetes Population"
        summary="The ICMR-INDIAB study (Anjana et al., 2017) — the largest epidemiological study of diabetes in India — screened over 57,000 individuals across 15 states and found that 7.3% of the adult population had diabetes and 10.3% had prediabetes. Extrapolated nationally, this translates to approximately 77 million adults with diabetes and 109 million with prediabetes. Central obesity (elevated waist circumference) was one of the strongest independent predictors of diabetes risk across all states."
        source="Anjana RM et al. The Lancet Diabetes & Endocrinology. 2017;5(8):585-596."
      />

      <p>
        The Indian diabetes epidemic is directly linked to the population's predisposition to
        visceral fat accumulation. Indians develop diabetes at lower BMI, younger age, and
        lower waist circumference compared to Caucasians. A phenomenon sometimes called the
        "Asian Indian phenotype" describes this cluster of metabolic vulnerabilities: excess
        visceral fat, insulin resistance, dyslipidemia, and a pro-inflammatory state — all
        present at relatively lean body weights.
      </p>

      <h2>Metabolic Syndrome</h2>

      <DefinitionBlock
        term="Metabolic Syndrome"
        definition="A cluster of interconnected metabolic abnormalities that together dramatically increase the risk of cardiovascular disease, type 2 diabetes, and premature death. It is diagnosed when 3 or more of 5 criteria are present. Visceral obesity is considered the primary driver."
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
        Metabolic syndrome affects an estimated 30-40% of urban Indian adults, with the
        prevalence increasing rapidly. The elevated waist circumference criterion captures
        the central role of visceral fat — it is often described as the "necessary but not
        sufficient" component for metabolic syndrome diagnosis.
      </p>

      <h2>Non-Alcoholic Fatty Liver Disease (NAFLD)</h2>

      <EvidenceBlock
        level="strong"
        title="Visceral Fat Is the Primary Driver of NAFLD"
        summary="Fabbrini et al. (2010) demonstrated in a comprehensive Hepatology review that visceral fat is the strongest predictor of intrahepatic triglyceride content (liver fat), even more so than total body fat or subcutaneous fat. The portal vein delivers free fatty acids from visceral fat directly to the liver, overwhelming hepatic lipid metabolism. Approximately 25-30% of the Indian urban population now has NAFLD, with visceral obesity being the strongest risk factor."
        source="Fabbrini E et al. Hepatology. 2010;51(2):679-689."
      />

      <p>
        NAFLD progresses through stages of increasing severity:
      </p>

      <ol>
        <li>
          <strong>Simple steatosis (fatty liver):</strong> Fat accumulation in more than 5%
          of hepatocytes. Often asymptomatic. Detected by ultrasound. Reversible with
          weight loss of 5-7% of body weight.
        </li>
        <li>
          <strong>Non-alcoholic steatohepatitis (NASH):</strong> Fatty liver with inflammation
          and hepatocyte damage. Present in approximately 3-5% of the general population.
          Can progress to fibrosis.
        </li>
        <li>
          <strong>Fibrosis:</strong> Scarring of liver tissue. Progressive stages (F0-F4).
          Still potentially reversible with aggressive weight loss and lifestyle intervention.
        </li>
        <li>
          <strong>Cirrhosis:</strong> Irreversible scarring and liver damage. Increases risk
          of liver failure and hepatocellular carcinoma. Requires medical management and
          potentially liver transplantation.
        </li>
      </ol>

      <WarningBlock title="NAFLD Is Now the Commonest Liver Disease in India">
        <p>
          NAFLD has overtaken alcoholic liver disease and hepatitis B/C as the most common
          cause of chronic liver disease in Indian urban populations. Studies estimate
          prevalence at 25-30% in urban India and 15-20% in rural India. The disease often
          remains silent until advanced stages — many patients with NASH and even early
          fibrosis have completely normal liver function tests. Ultrasound is the first-line
          screening tool, and any individual with central obesity (elevated waist circumference)
          should be screened.
        </p>
      </WarningBlock>

      <h2>Other Health Consequences</h2>

      <h3>Cancer Risk</h3>
      <p>
        Visceral fat increases the risk of several cancers through chronic inflammation,
        elevated insulin/IGF-1 levels, and altered sex hormone metabolism. Cancers with the
        strongest links to visceral obesity include colorectal cancer (30% increased risk),
        post-menopausal breast cancer, endometrial cancer, esophageal adenocarcinoma,
        pancreatic cancer, and kidney cancer.
      </p>

      <h3>Sleep Apnea</h3>
      <p>
        Visceral fat is associated with obstructive sleep apnea (OSA) through mechanisms
        beyond simple neck/upper airway fat deposition. Visceral fat-driven inflammation
        and fluid shifts contribute to airway narrowing. OSA in turn worsens visceral fat
        through sleep fragmentation, cortisol elevation, and hormonal disruption — creating
        another vicious cycle.
      </p>

      <h3>Cognitive Decline and Dementia</h3>
      <p>
        Emerging evidence links visceral obesity to accelerated brain aging, reduced hippocampal
        volume, and increased risk of dementia including Alzheimer's disease. The mechanisms
        likely involve chronic neuroinflammation, cerebrovascular damage from metabolic
        syndrome components, and insulin resistance in the brain.
      </p>

      <h3>Polycystic Ovary Syndrome (PCOS)</h3>
      <p>
        In women, visceral fat and insulin resistance are strongly linked to PCOS, which
        affects approximately 10-15% of Indian women of reproductive age. Visceral fat-driven
        hyperinsulinemia stimulates ovarian androgen production, leading to irregular periods,
        anovulation, hirsutism, and infertility. Reducing visceral fat through lifestyle
        modification is a first-line treatment for PCOS.
      </p>

      <h2>Quantifying the Risk: How Much Does Visceral Fat Matter?</h2>

      <ExampleBlock title="The Numbers That Should Motivate Action">
        <ul>
          <li>Each 1 cm increase in waist circumference is associated with a 2% increase in cardiovascular risk.</li>
          <li>Men with waist circumference &gt;102 cm have a 3.5-fold higher risk of coronary heart disease.</li>
          <li>For every 5 cm increase in waist circumference, the risk of type 2 diabetes increases by 11% in men and 13% in women.</li>
          <li>Metabolic syndrome (driven by visceral fat) increases cardiovascular death risk by 2.4-fold.</li>
          <li>NAFLD prevalence increases from 7% in normal-weight individuals to 70% in those with abdominal obesity.</li>
          <li>Reducing waist circumference by just 4 cm is associated with a 14% reduction in the risk of cardiovascular events.</li>
        </ul>
      </ExampleBlock>

      <NoteBlock title="Key Takeaways">
        <ul>
          <li>Visceral fat is an active endocrine organ producing inflammatory cytokines that drive disease.</li>
          <li>CVD risk increases approximately 2% for every 1 cm increase in waist circumference.</li>
          <li>Visceral fat is the primary driver of the insulin resistance that leads to type 2 diabetes.</li>
          <li>India faces a convergent crisis: genetic predisposition to visceral fat + dietary transition + sedentary lifestyle = diabetes and CVD epidemic.</li>
          <li>NAFLD is now the most common liver disease in urban India, driven by visceral obesity.</li>
          <li>Metabolic syndrome criteria should use South Asian waist cutoffs (men ≥90 cm, women ≥80 cm).</li>
          <li>Even modest reductions in visceral fat (4-5 cm waist circumference) significantly reduce disease risk.</li>
        </ul>
      </NoteBlock>

      <ReferenceList references={references} />
    </div>
  );
}
