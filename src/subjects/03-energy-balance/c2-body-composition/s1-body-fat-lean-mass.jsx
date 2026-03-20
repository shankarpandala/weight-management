import DefinitionBlock from '../../../components/content/DefinitionBlock';
import EvidenceBlock from '../../../components/content/EvidenceBlock';
import ExampleBlock from '../../../components/content/ExampleBlock';
import NoteBlock from '../../../components/content/NoteBlock';
import WarningBlock from '../../../components/content/WarningBlock';
import ReferenceList from '../../../components/content/ReferenceList';

const references = [
  {
    id: 1,
    authors: 'Yajnik CS, Fall CH, Coyaji KJ, et al.',
    year: 2003,
    title: 'Neonatal anthropometry: the thin-fat Indian baby. The Pune Maternal Nutrition Study',
    journal: 'International Journal of Obesity',
    volume: '27(2)',
    pages: '173-180',
  },
  {
    id: 2,
    authors: 'Misra A, Vikram NK',
    year: 2004,
    title: 'Insulin resistance syndrome (metabolic syndrome) and obesity in Asian Indians: evidence and implications',
    journal: 'Nutrition',
    volume: '20(5)',
    pages: '482-491',
  },
  {
    id: 3,
    authors: 'Lohman TG, Going SB',
    year: 2006,
    title: 'Body composition assessment for development of an international growth standard for preadolescent and adolescent children',
    journal: 'Food and Nutrition Bulletin',
    volume: '27(4 Suppl)',
    pages: 'S314-S325',
  },
  {
    id: 4,
    authors: 'Dulloo AG, Jacquet J, Solinas G, Montani JP, Schutz Y',
    year: 2010,
    title: 'Body composition phenotypes in pathways to obesity and the metabolic syndrome',
    journal: 'International Journal of Obesity',
    volume: '34(Suppl 2)',
    pages: 'S4-S17',
  },
  {
    id: 5,
    authors: 'Kalra S, Unnikrishnan AG',
    year: 2012,
    title: 'Obesity in India: the weight of the matter',
    journal: 'Journal of Medical Nutrition and Nutraceuticals',
    volume: '1(1)',
    pages: '37-41',
  },
  {
    id: 6,
    authors: 'Wells JCK',
    year: 2007,
    title: 'Sexual dimorphism of body composition',
    journal: 'Best Practice & Research Clinical Endocrinology & Metabolism',
    volume: '21(3)',
    pages: '415-430',
  },
];

export default function BodyFatLeanMass() {
  return (
    <div className="prose-health">
      <h1>Body Fat and Lean Mass</h1>

      <p>
        Body weight alone tells an incomplete story. Two individuals at 75 kg can
        look dramatically different, carry different health risks, and respond
        differently to diet and exercise — all based on their ratio of fat mass
        to lean mass. Understanding body composition is essential for meaningful
        weight management.
      </p>

      <DefinitionBlock term="Body composition">
        The proportional makeup of the body in terms of fat mass and fat-free
        (lean) mass. Fat mass includes essential fat and storage fat. Lean mass
        includes skeletal muscle, bone, organs, water, and connective tissue.
      </DefinitionBlock>

      <h2>Types of Body Fat</h2>

      <h3>Essential Fat</h3>
      <p>
        Essential fat is required for normal physiological function. It is found
        in the brain, bone marrow, nerves, and cell membranes. Men require
        approximately 3% body fat as essential fat, while women require about
        12% due to additional sex-specific fat in the breasts, hips, and
        reproductive organs.
      </p>

      <h3>Storage Fat</h3>
      <p>
        Storage fat accumulates in adipose tissue beneath the skin (subcutaneous)
        and around internal organs (visceral). While often viewed negatively,
        moderate storage fat serves as an energy reserve, provides insulation,
        and cushions organs.
      </p>

      <DefinitionBlock term="Visceral fat">
        Fat stored within the abdominal cavity, surrounding organs such as the
        liver, pancreas, and intestines. Visceral fat is metabolically active,
        secreting inflammatory cytokines and contributing disproportionately to
        insulin resistance, type 2 diabetes, and cardiovascular disease compared
        to subcutaneous fat.
      </DefinitionBlock>

      <DefinitionBlock term="Subcutaneous fat">
        Fat stored directly beneath the skin. While excess subcutaneous fat is
        undesirable, it is generally less metabolically harmful than visceral fat.
        Subcutaneous fat on the hips and thighs may even have some protective
        metabolic effects.
      </DefinitionBlock>

      <h2>Lean Mass Components</h2>

      <p>
        Lean mass (also called fat-free mass) includes several components, each
        with distinct functions:
      </p>

      <ul>
        <li><strong>Skeletal muscle:</strong> The largest component, typically 40-50% of body weight in healthy individuals. It is the primary driver of resting metabolic rate and glucose disposal.</li>
        <li><strong>Bone mass:</strong> Comprising about 15% of body weight, bone density is critical for structural support and injury prevention.</li>
        <li><strong>Organ mass:</strong> The brain, liver, kidneys, and heart are metabolically expensive tissues despite their relatively small weight.</li>
        <li><strong>Body water:</strong> Approximately 60% of total body weight in men and 50% in women. Water content varies with hydration, glycogen stores, and sodium intake.</li>
      </ul>

      <NoteBlock title="Why lean mass matters for weight management">
        Each kilogram of skeletal muscle burns roughly 13 kcal/day at rest,
        compared to about 4.5 kcal/day per kilogram of fat tissue. While this
        difference seems small per kilogram, a person carrying 10 kg more muscle
        burns approximately 85 additional calories daily at rest. More
        importantly, muscle tissue is the primary site for glucose uptake and
        fatty acid oxidation during activity, making it central to metabolic
        health.
      </NoteBlock>

      <h2>The Indian Thin-Fat Phenotype</h2>

      <p>
        Indian populations exhibit a distinctive body composition pattern that
        has significant implications for health and weight management. This
        pattern, first described in neonates and later confirmed in adults, is
        characterised by relatively low body weight and BMI but
        disproportionately high body fat percentage and visceral fat.
      </p>

      <EvidenceBlock source="Yajnik et al., 2003 (Pune Maternal Nutrition Study)" level="landmark">
        Indian newborns, when compared to white European newborns, were lighter
        overall but had preserved or higher subscapular skinfold thickness — a
        marker of central adiposity. This "thin-fat" phenotype appears to be
        programmed in utero and persists into adulthood, predisposing Indians to
        metabolic syndrome at lower body weights than Western populations.
      </EvidenceBlock>

      <EvidenceBlock source="Misra & Vikram, 2004" level="strong">
        Asian Indians have higher body fat percentages, more visceral fat, and
        greater insulin resistance at any given BMI compared to white Europeans.
        An Indian man at BMI 23 may carry the same metabolic risk as a European
        man at BMI 27-28. This is why international BMI cutoffs underestimate
        obesity-related risk in Indian populations.
      </EvidenceBlock>

      <ExampleBlock title="Thin outside, fat inside">
        Rahul is 170 cm tall and weighs 68 kg (BMI 23.5 — "normal" by WHO
        standards). However, his body fat percentage is 28%, and his waist
        circumference is 92 cm. Despite appearing slim in clothes, he carries
        significant visceral fat and has prediabetic fasting glucose levels.
        This scenario is extremely common among urban Indian men who are
        sedentary and consume refined-carbohydrate-heavy diets.
      </ExampleBlock>

      <h2>Healthy Body Fat Ranges</h2>

      <p>
        Body fat percentage ranges considered healthy vary by sex and age.
        For Indian populations, the lower end of "overfat" thresholds may be
        more appropriate given the higher metabolic risk at lower fat levels.
      </p>

      <ul>
        <li><strong>Men (general):</strong> 10-20% body fat is considered healthy; above 25% is classified as obese.</li>
        <li><strong>Women (general):</strong> 18-28% body fat is considered healthy; above 32% is classified as obese.</li>
        <li><strong>Indian men:</strong> Given the thin-fat phenotype, maintaining body fat below 20% is advisable for metabolic health.</li>
        <li><strong>Indian women:</strong> Keeping body fat below 30% is recommended, with particular attention to waist circumference.</li>
      </ul>

      <WarningBlock>
        Extremely low body fat is not healthier. Men below 5% and women below
        15% body fat risk hormonal disruption, immune suppression, bone loss,
        and reproductive dysfunction. For women, loss of menstrual cycles
        (amenorrhoea) is a clear warning sign that body fat has dropped below
        safe levels.
      </WarningBlock>

      <h2>Fat Distribution Patterns</h2>

      <p>
        Where fat is stored matters as much as how much fat is stored:
      </p>

      <ul>
        <li><strong>Android (apple-shaped):</strong> Fat concentrated around the abdomen. More common in men and post-menopausal women. Strongly associated with metabolic disease.</li>
        <li><strong>Gynoid (pear-shaped):</strong> Fat concentrated on hips and thighs. More common in premenopausal women. Carries relatively lower metabolic risk.</li>
        <li><strong>Indian pattern:</strong> Indians tend toward android distribution regardless of sex, with preferential visceral fat deposition even at normal weight.</li>
      </ul>

      <NoteBlock title="Dietary implications for Indian body composition">
        The Indian thin-fat phenotype responds particularly well to resistance
        training (to build lean mass) combined with adequate protein intake
        (1.2-1.6 g/kg/day). Traditional Indian diets, often low in protein
        and high in refined carbohydrates (white rice, maida-based products),
        may worsen the phenotype. Incorporating more dal, paneer, eggs, and
        other protein-rich foods while reducing refined grains can help shift
        body composition favourably.
      </NoteBlock>

      <h2>Key Takeaways</h2>

      <ul>
        <li>Body composition — not just body weight — determines metabolic health and disease risk.</li>
        <li>Visceral fat is far more dangerous than subcutaneous fat, and Indians accumulate it disproportionately.</li>
        <li>The Indian thin-fat phenotype means that normal BMI does not guarantee healthy body composition.</li>
        <li>Preserving and building lean mass through resistance training and adequate protein is critical during weight loss.</li>
        <li>Body fat percentage targets should be interpreted in the context of Indian-specific risk profiles.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
