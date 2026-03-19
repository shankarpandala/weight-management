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

export default function MeasurementMethods() {
  return (
    <div className="prose-health">
      <h1>Body Composition Measurement Methods</h1>

      <p>
        Measuring body composition accurately is essential for assessing health
        risk, tracking progress, and making informed decisions about nutrition
        and exercise. Each method has trade-offs between accuracy, cost,
        accessibility, and practicality — and several require modified
        interpretation for Indian populations.
      </p>

      <h2>Body Mass Index (BMI)</h2>

      <DefinitionBlock term="Body Mass Index (BMI)">
        A simple ratio of weight in kilograms divided by height in metres
        squared (kg/m²). Standard WHO classifications define underweight as
        below 18.5, normal as 18.5-24.9, overweight as 25-29.9, and obese
        as 30 and above.
      </DefinitionBlock>

      <p>
        BMI remains the most widely used screening tool globally due to its
        simplicity. However, it has significant limitations: it cannot
        distinguish between fat mass and lean mass, does not account for fat
        distribution, and misclassifies many individuals — both muscular
        people (overestimating risk) and thin-fat individuals (underestimating
        risk).
      </p>

      <WarningBlock>
        Standard WHO BMI cutoffs significantly underestimate obesity risk in
        Indian populations. Indians develop metabolic complications at much
        lower BMI values compared to European populations. The consensus
        guidelines for Asian Indians recommend revised cutoffs: overweight at
        BMI 23-24.9 and obese at BMI 25 and above — a full 5 points lower
        than the international standard.
      </WarningBlock>

      <EvidenceBlock source="WHO Expert Consultation, 2004 (The Lancet)" level="landmark">
        The WHO expert consultation concluded that Asian populations, including
        Indians, have higher body fat percentages and greater metabolic risk at
        lower BMI values. They recommended that public health action thresholds
        for Asian populations be set at BMI 23 (increased risk) and BMI 27.5
        (high risk), rather than the standard 25 and 30.
      </EvidenceBlock>

      <ExampleBlock title="BMI limitations in practice">
        Amit is a 30-year-old software engineer in Pune. At 172 cm and 72 kg,
        his BMI is 24.3 — "normal" by international standards. But using the
        Indian cutoff, he is already overweight. His body fat is 27%, waist
        circumference is 91 cm, and his fasting insulin is elevated. His
        colleague Vijay, who lifts weights regularly, is 172 cm and 80 kg
        (BMI 27) but has 16% body fat and a 78 cm waist. BMI tells you
        almost nothing about these two very different bodies.
      </ExampleBlock>

      <h2>Waist Circumference</h2>

      <p>
        Waist circumference is a simple, inexpensive, and powerful predictor
        of cardiometabolic risk because it correlates well with visceral fat.
        It is measured at the midpoint between the lowest rib and the iliac
        crest (top of the hip bone) using a non-stretchable tape.
      </p>

      <EvidenceBlock source="Misra et al., 2009 (Consensus Statement for Asian Indians)" level="strong">
        The consensus guidelines for Asian Indians established specific waist
        circumference cutoffs for abdominal obesity: 90 cm or greater for men
        and 80 cm or greater for women. These are lower than the international
        cutoffs of 102 cm (men) and 88 cm (women), reflecting the higher
        visceral fat and metabolic risk in Indian populations at smaller
        waist sizes.
      </EvidenceBlock>

      <NoteBlock title="Waist-to-height ratio">
        An even simpler rule of thumb: your waist circumference should be less
        than half your height. This waist-to-height ratio (WHtR) of below 0.5
        applies across sexes, ages, and ethnicities, making it one of the most
        universally applicable screening tools. A systematic review found WHtR
        to be superior to both BMI and waist circumference alone for predicting
        cardiometabolic risk.
      </NoteBlock>

      <h2>Waist-Hip Ratio</h2>

      <p>
        The waist-hip ratio (WHR) compares waist circumference to hip
        circumference and indicates fat distribution pattern. A higher ratio
        suggests more central (android) fat distribution.
      </p>

      <ul>
        <li><strong>Men:</strong> WHR above 0.90 indicates central obesity.</li>
        <li><strong>Women:</strong> WHR above 0.85 indicates central obesity.</li>
        <li><strong>Indian context:</strong> Many Indians exceed these ratios even at relatively low body weights due to the thin-fat phenotype.</li>
      </ul>

      <h2>DEXA (Dual-Energy X-ray Absorptiometry)</h2>

      <DefinitionBlock term="DEXA scan">
        A medical imaging technique that uses two X-ray beams at different
        energy levels to distinguish between bone mineral, lean tissue, and
        fat tissue. It provides regional body composition data, showing fat
        and lean mass distribution across the trunk, arms, and legs.
      </DefinitionBlock>

      <p>
        DEXA is considered a clinical reference standard for body composition
        assessment. It provides accurate, reproducible measurements of total
        body fat percentage, regional fat distribution, visceral fat estimates,
        lean mass, and bone mineral density — all from a single 10-15 minute
        scan with minimal radiation exposure.
      </p>

      <NoteBlock title="DEXA availability in India">
        DEXA scans are available at most major hospitals and diagnostic centres
        in Indian cities, typically costing between 2,000-5,000 INR. While not
        necessary for everyone, a baseline DEXA scan can be invaluable for
        individuals who appear normal weight by BMI but suspect they may carry
        excess body fat — a common scenario among urban Indians.
      </NoteBlock>

      <h2>Bioelectrical Impedance Analysis (BIA)</h2>

      <p>
        BIA devices send a small electrical current through the body and
        measure resistance (impedance). Since lean tissue contains more water
        and conducts electricity better than fat, impedance measurements can
        estimate body composition.
      </p>

      <ul>
        <li><strong>Pros:</strong> Inexpensive, portable, widely available (smart scales, handheld devices), quick.</li>
        <li><strong>Cons:</strong> Accuracy is affected by hydration status, recent meals, exercise, and menstrual cycle. Results can vary by 3-5% body fat from the true value.</li>
      </ul>

      <WarningBlock>
        BIA readings are best used for tracking trends over time rather than
        for absolute accuracy. Always measure under consistent conditions:
        same time of day, similar hydration, before eating or exercising.
        A single BIA measurement should not be used to make clinical decisions.
      </WarningBlock>

      <h2>Skinfold Measurements</h2>

      <p>
        Skinfold calipers measure the thickness of subcutaneous fat at specific
        anatomical sites (typically triceps, biceps, subscapular, and
        suprailiac). These measurements are entered into population-specific
        equations to estimate total body fat percentage.
      </p>

      <ul>
        <li><strong>Pros:</strong> Inexpensive, portable, can track changes over time.</li>
        <li><strong>Cons:</strong> Highly operator-dependent — accuracy requires trained practitioners. Does not measure visceral fat. Equations may not be validated for all populations.</li>
      </ul>

      <h2>Choosing the Right Method</h2>

      <ExampleBlock title="Practical recommendations for Indians">
        For most individuals, a combination of simple measurements provides
        excellent screening: BMI (using the Indian cutoff of 23 for overweight),
        waist circumference (below 90 cm for men, 80 cm for women), and
        waist-to-height ratio (below 0.5). If these suggest elevated risk or
        if more precise data is needed, a DEXA scan offers the best clinical
        insight. BIA smart scales are useful for home tracking of trends,
        provided measurements are taken consistently.
      </ExampleBlock>

      <h2>Key Takeaways</h2>

      <ul>
        <li>BMI is a blunt tool — use Indian-specific cutoffs (overweight at 23, obese at 25) for more accurate risk assessment.</li>
        <li>Waist circumference is a powerful, free predictor of cardiometabolic risk: aim below 90 cm (men) and 80 cm (women) in Indian populations.</li>
        <li>DEXA is the most informative clinical method, providing fat, lean, and bone data regionally.</li>
        <li>BIA is useful for home tracking trends, not for absolute accuracy.</li>
        <li>No single measurement tells the full story — combining methods gives the most reliable picture.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
