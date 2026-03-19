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

export default function VisceralVsSubcutaneous() {
  return (
    <div className="prose-health">
      <h1>Visceral Fat vs. Subcutaneous Fat: Understanding the Two Types of Belly Fat</h1>

      <p>
        Not all belly fat is created equal. The fat you can see and pinch on your midsection
        is fundamentally different from the fat hidden deep inside your abdominal cavity.
        These two types of adipose tissue differ in their location, metabolic activity,
        hormonal behavior, and — critically — their impact on your health. Understanding this
        distinction is the first step toward an effective strategy for reducing dangerous
        belly fat.
      </p>

      <DefinitionBlock
        term="Visceral Adipose Tissue (VAT)"
        definition="Fat stored within the abdominal cavity, surrounding internal organs such as the liver, pancreas, and intestines. Also called intra-abdominal fat, it is metabolically active, hormonally reactive, and strongly associated with cardiometabolic disease. It cannot be directly pinched or grasped through the skin."
      />

      <DefinitionBlock
        term="Subcutaneous Adipose Tissue (SAT)"
        definition="Fat stored directly beneath the skin, above the abdominal muscles. It is the soft, pinchable fat that constitutes the visible belly. While it contributes to body shape and aesthetics, it is significantly less metabolically dangerous than visceral fat."
      />

      <h2>Anatomical Differences</h2>

      <p>
        The abdominal wall consists of layers: skin, subcutaneous fat, the rectus abdominis
        and oblique muscles, and then the peritoneal cavity containing the organs. Subcutaneous
        fat sits between the skin and the muscle wall. Visceral fat lies deeper, within the
        peritoneal cavity, wrapping around and between the liver, stomach, intestines, and kidneys.
      </p>

      <p>
        A third, less-discussed depot is retroperitoneal fat, which surrounds the kidneys and
        aorta behind the peritoneum. While smaller in volume, it shares metabolic characteristics
        with visceral fat.
      </p>

      <EvidenceBlock
        level="strong"
        title="Visceral Fat Is Metabolically Distinct"
        summary="Ibrahim (2010) demonstrated in a comprehensive review that visceral adipose tissue has fundamentally different cellular behavior compared to subcutaneous fat. VAT adipocytes are more metabolically active, have greater lipolytic activity (faster fat breakdown and release), are more insulin-resistant, and produce significantly more pro-inflammatory cytokines including TNF-alpha, IL-6, and PAI-1."
        source="Ibrahim MM. Obesity Reviews. 2010;11(1):11-18."
      />

      <ComparisonTable
        title="Visceral Fat vs. Subcutaneous Fat — Key Differences"
        headers={['Property', 'Visceral Fat (VAT)', 'Subcutaneous Fat (SAT)']}
        rows={[
          ['Location', 'Deep — around organs inside abdominal cavity', 'Superficial — under the skin, above muscles'],
          ['Feel', 'Hard, protruding belly that cannot be pinched', 'Soft, pinchable, jiggly fat layer'],
          ['Metabolic activity', 'Highly active — acts as an endocrine organ', 'Less metabolically active'],
          ['Inflammatory profile', 'Produces high levels of TNF-alpha, IL-6, resistin', 'Produces less inflammatory cytokines'],
          ['Insulin sensitivity', 'Highly insulin resistant', 'Relatively more insulin sensitive'],
          ['Lipolysis rate', 'High — rapidly releases free fatty acids into portal vein', 'Lower — slower fat mobilization'],
          ['Blood supply', 'Drains directly to liver via portal vein', 'Drains into systemic circulation'],
          ['Health risk', 'Strong independent predictor of CVD, diabetes, mortality', 'Weaker association with metabolic disease'],
          ['Response to exercise', 'Responds well — preferentially reduced by aerobic exercise', 'Slower to respond; often the last fat lost'],
          ['Response to diet', 'Responds well to caloric deficit', 'Responds to deficit but reduction is slower'],
          ['Gender pattern', 'More common in men and post-menopausal women', 'More common in pre-menopausal women'],
        ]}
      />

      <h2>How to Tell the Difference: The Hard Belly vs. Soft Belly Test</h2>

      <p>
        One of the simplest clinical observations is the texture and compressibility of the belly.
        While not a substitute for imaging, this gives a reasonable first approximation:
      </p>

      <ExampleBlock title="The Belly Palpation Test">
        <p>
          <strong>Hard, distended belly:</strong> If your belly protrudes forward and feels firm
          or taut when you press on it — almost like pressing against a basketball — this suggests
          a predominance of visceral fat. The firmness arises because visceral fat is packed inside
          the abdominal cavity behind the muscle wall, pushing the wall outward. You cannot grab
          or pinch the bulk of this fat.
        </p>
        <p>
          <strong>Soft, pinchable belly:</strong> If you can easily grab handfuls of soft, jiggly
          fat around your midsection, this is predominantly subcutaneous fat. While aesthetically
          undesirable, this fat poses less metabolic danger. Many people have a combination of both
          types.
        </p>
        <p>
          <strong>Combination pattern:</strong> Most overweight individuals have both types.
          A person may have a firm, distended lower belly (visceral) with a soft, pinchable
          layer on top (subcutaneous). This is the most common clinical presentation.
        </p>
      </ExampleBlock>

      <h2>Measuring Visceral Fat</h2>

      <h3>Gold Standard: CT and MRI Imaging</h3>

      <p>
        Computed tomography (CT) and magnetic resonance imaging (MRI) are the gold-standard
        methods for quantifying visceral adipose tissue. A single CT slice at the L4-L5
        vertebral level can accurately measure the cross-sectional area of visceral fat,
        typically expressed in square centimeters (cm²). Visceral fat areas above 100 cm²
        in men and 80 cm² in women are considered elevated and associated with increased
        cardiometabolic risk.
      </p>

      <EvidenceBlock
        level="strong"
        title="CT-Measured Visceral Fat and Mortality"
        summary="Kuk et al. (2006) followed 291 men for a median of 11.4 years and found that visceral fat measured by CT was an independent predictor of all-cause mortality, even after adjusting for BMI, waist circumference, and cardiorespiratory fitness. Each standard deviation increase in visceral fat was associated with a 35% increase in mortality risk."
        source="Kuk JL et al. Obesity. 2006;14(2):336-341."
      />

      <h3>Clinical Proxy: Waist Circumference</h3>

      <p>
        Because CT and MRI are expensive, impractical for routine screening, and involve
        radiation exposure (CT), waist circumference (WC) has emerged as the most widely
        used proxy measure for visceral fat. It correlates moderately well with CT-measured
        visceral fat (r = 0.60-0.80 depending on the population).
      </p>

      <NoteBlock title="How to Measure Waist Circumference Correctly">
        <ol>
          <li>Stand upright with feet together and arms relaxed at sides.</li>
          <li>Use a non-stretchable measuring tape.</li>
          <li>Locate the midpoint between the lowest rib and the iliac crest (top of the hip bone) — this is the WHO-recommended landmark.</li>
          <li>Alternatively, measure at the level of the umbilicus (navel) — this is more practical and commonly used in clinical practice.</li>
          <li>The tape should be snug but not compressing the skin.</li>
          <li>Measure at the end of a normal expiration (breathe out gently).</li>
          <li>Take two measurements and average them.</li>
          <li>Measure first thing in the morning, before eating or drinking, for consistency.</li>
        </ol>
      </NoteBlock>

      <h3>Ethnic-Specific Cutoffs: Why Indians Need Different Thresholds</h3>

      <p>
        This is a critically important point for Indian populations. The standard WHO waist
        circumference cutoffs (men: 102 cm, women: 88 cm) were derived from Caucasian
        populations and are <strong>far too lenient</strong> for South Asians. Indians
        accumulate visceral fat at significantly lower body weights and waist sizes compared
        to Europeans.
      </p>

      <EvidenceBlock
        level="strong"
        title="Indian-Specific Waist Circumference Cutoffs"
        summary="The 2009 Consensus Statement by Misra et al. for the Indian Association of Clinical Medicine established lower waist circumference cutoffs for Asian Indians: ≥90 cm for men and ≥80 cm for women. These cutoffs better predict cardiometabolic risk in Indian populations, who develop insulin resistance and visceral adiposity at significantly lower BMI and waist circumference values than Western populations."
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

      <h3>Other Assessment Methods</h3>

      <p>
        Several additional techniques can assess visceral fat, each with trade-offs:
      </p>

      <ul>
        <li>
          <strong>DEXA scan (Dual-energy X-ray Absorptiometry):</strong> Newer DEXA software
          can estimate visceral fat in the android region. Less accurate than CT but more
          accessible and lower radiation exposure.
        </li>
        <li>
          <strong>Bioelectrical impedance analysis (BIA):</strong> Some advanced BIA devices
          (e.g., InBody, Tanita) estimate visceral fat levels on a scale. Reasonable for
          tracking trends over time but not highly accurate for absolute measurement.
        </li>
        <li>
          <strong>Waist-to-hip ratio (WHR):</strong> Waist circumference divided by hip
          circumference. Values above 0.90 (men) or 0.85 (women) indicate central obesity.
          The INTERHEART study found WHR to be a stronger predictor of heart attack risk than BMI.
        </li>
        <li>
          <strong>Waist-to-height ratio (WHtR):</strong> A value above 0.5 ("keep your waist
          to less than half your height") is a simple, universally applicable indicator of
          central obesity risk.
        </li>
      </ul>

      <EvidenceBlock
        level="strong"
        title="Waist-to-Hip Ratio Predicts Heart Attack Risk Better Than BMI"
        summary="The landmark INTERHEART study (Yusuf et al., 2005), involving 27,000 participants from 52 countries including India, found that waist-to-hip ratio was a stronger predictor of myocardial infarction than BMI across all ethnic groups. The population-attributable risk of abdominal obesity for heart attack was 20.1% — meaning one in five heart attacks globally could be attributed to abdominal obesity."
        source="Yusuf S et al. The Lancet. 2005;366(9497):1640-1649."
      />

      <h2>Why Visceral Fat Is More Dangerous: The Portal Vein Theory</h2>

      <p>
        The key anatomical reason visceral fat is more dangerous lies in its venous drainage.
        Visceral fat releases free fatty acids (FFAs) and inflammatory cytokines directly into
        the portal vein, which carries blood straight to the liver. This direct hepatic
        exposure leads to:
      </p>

      <ul>
        <li>Increased hepatic glucose production (worsening blood sugar)</li>
        <li>Increased hepatic lipid synthesis (raising triglycerides and VLDL)</li>
        <li>Reduced hepatic insulin clearance (worsening insulin resistance)</li>
        <li>Increased production of inflammatory proteins (CRP, fibrinogen)</li>
        <li>Accumulation of fat within the liver itself (non-alcoholic fatty liver disease)</li>
      </ul>

      <p>
        Subcutaneous fat, by contrast, drains into the systemic venous circulation and does
        not deliver its metabolic products directly to the liver. This fundamental difference
        in plumbing explains much of the differential health risk.
      </p>

      <WarningBlock title="The 'Thin Outside, Fat Inside' Phenomenon">
        <p>
          A person can have a normal BMI (18.5-24.9) yet harbor dangerous levels of visceral
          fat. This phenotype, sometimes called TOFI (Thin Outside, Fat Inside) or metabolically
          obese normal weight (MONW), is particularly common in South Asian populations. Studies
          have shown that up to 30% of normal-weight Asian Indians have metabolic abnormalities
          associated with visceral obesity. This is why BMI alone is insufficient for assessing
          metabolic risk in Indian populations — waist circumference measurement is essential.
        </p>
      </WarningBlock>

      <h2>The Good News: Visceral Fat Responds Well to Intervention</h2>

      <p>
        Despite being more dangerous, visceral fat has a silver lining: it is more responsive
        to lifestyle intervention than subcutaneous fat. Because visceral adipocytes have
        higher lipolytic activity and are more sensitive to catecholamines (stress hormones
        that mobilize fat), they shrink faster when you create a caloric deficit through diet
        and especially through exercise.
      </p>

      <EvidenceBlock
        level="strong"
        title="Exercise Preferentially Reduces Visceral Fat"
        summary="Després (2012) reviewed extensive evidence showing that aerobic exercise preferentially reduces visceral adipose tissue, even when total body weight loss is modest. A caloric deficit of 500-700 kcal/day combined with 150+ minutes/week of moderate aerobic activity can reduce visceral fat by 20-30% over 12-16 weeks, with disproportionately greater reductions in visceral compared to subcutaneous depots."
        source="Després JP. Circulation. 2012;126(10):1301-1313."
      />

      <NoteBlock title="Key Takeaways">
        <ul>
          <li>Visceral fat (hard belly) is far more dangerous than subcutaneous fat (soft belly) due to its inflammatory and metabolic activity.</li>
          <li>Indian populations are genetically predisposed to visceral fat accumulation and need lower waist circumference cutoffs (men ≥90 cm, women ≥80 cm).</li>
          <li>BMI alone misses many Indians who are "thin outside, fat inside" — always measure waist circumference.</li>
          <li>CT/MRI is the gold standard, but waist circumference is a practical and reasonably accurate proxy.</li>
          <li>The good news: visceral fat responds better to diet and exercise than subcutaneous fat.</li>
        </ul>
      </NoteBlock>

      <ReferenceList references={references} />
    </div>
  );
}
