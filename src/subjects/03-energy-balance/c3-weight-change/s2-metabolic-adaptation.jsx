import DefinitionBlock from '../../../components/content/DefinitionBlock';
import EvidenceBlock from '../../../components/content/EvidenceBlock';
import ExampleBlock from '../../../components/content/ExampleBlock';
import NoteBlock from '../../../components/content/NoteBlock';
import WarningBlock from '../../../components/content/WarningBlock';
import ReferenceList from '../../../components/content/ReferenceList';

const references = [
  {
    id: 1,
    authors: 'Keys A, Brozek J, Henschel A, Mickelsen O, Taylor HL',
    year: 1950,
    title: 'The Biology of Human Starvation',
    journal: 'University of Minnesota Press',
    volume: 'Vols 1-2',
    pages: '',
  },
  {
    id: 2,
    authors: 'Fothergill E, Guo J, Howard L, et al.',
    year: 2016,
    title: 'Persistent metabolic adaptation 6 years after "The Biggest Loser" competition',
    journal: 'Obesity',
    volume: '24(8)',
    pages: '1612-1619',
  },
  {
    id: 3,
    authors: 'Rosenbaum M, Hirsch J, Gallagher DA, Leibel RL',
    year: 2008,
    title: 'Long-term persistence of adaptive thermogenesis in subjects who have maintained a reduced body weight',
    journal: 'American Journal of Clinical Nutrition',
    volume: '88(4)',
    pages: '906-912',
  },
  {
    id: 4,
    authors: 'Trexler ET, Smith-Ryan AE, Norton LE',
    year: 2014,
    title: 'Metabolic adaptation to weight loss: implications for the athlete',
    journal: 'Journal of the International Society of Sports Nutrition',
    volume: '11(1)',
    pages: '7',
  },
  {
    id: 5,
    authors: 'Dulloo AG, Jacquet J, Montani JP, Schutz Y',
    year: 2012,
    title: 'Adaptive thermogenesis in human body weight regulation: more of a concept than a measurable entity?',
    journal: 'Obesity Reviews',
    volume: '13(Suppl 2)',
    pages: '105-121',
  },
  {
    id: 6,
    authors: 'Camps SG, Verhoef SP, Westerterp KR',
    year: 2015,
    title: 'Weight loss-induced reduction in physical activity recovers during weight maintenance',
    journal: 'American Journal of Clinical Nutrition',
    volume: '101(5)',
    pages: '989-994',
  },
];

export default function MetabolicAdaptation() {
  return (
    <div className="prose-health">
      <h1>Metabolic Adaptation</h1>

      <p>
        One of the most frustrating aspects of weight loss is the body's
        tendency to fight back. As you lose weight, your metabolism does not
        simply decrease in proportion to lost tissue — it slows down even more
        than expected, as if the body is actively resisting further weight
        loss. This phenomenon, known as metabolic adaptation or adaptive
        thermogenesis, is a major reason why long-term weight loss is so
        difficult to maintain.
      </p>

      <DefinitionBlock term="Metabolic adaptation (adaptive thermogenesis)">
        A disproportionate reduction in energy expenditure beyond what would
        be predicted by changes in body mass and composition alone. During
        caloric restriction, the body becomes more "fuel efficient," burning
        fewer calories for the same activities and bodily functions. This is
        a survival mechanism, not a metabolic defect.
      </DefinitionBlock>

      <h2>The Minnesota Starvation Experiment</h2>

      <p>
        The foundational research on metabolic adaptation comes from one of
        the most famous studies in nutrition science, conducted during World
        War II.
      </p>

      <EvidenceBlock source="Keys et al., 1950 (Minnesota Starvation Experiment)" level="landmark">
        Thirty-six conscientious objectors were placed on a semi-starvation
        diet of approximately 1,570 kcal/day (about half their normal intake)
        for 24 weeks. Key findings: basal metabolic rate dropped by 40% — far
        more than the 25% reduction in body weight would predict. Participants
        became obsessed with food, experienced extreme irritability, depression,
        and social withdrawal. Heart rate, body temperature, and physical
        activity all decreased dramatically. During refeeding, participants
        initially overate massively and preferentially regained fat over
        lean tissue.
      </EvidenceBlock>

      <NoteBlock title="Relevance to modern dieting">
        The Minnesota Experiment used approximately 1,570 kcal/day — a number
        that many popular Indian diet plans recommend as a standard weight-loss
        target. While the participants were young, active men with higher
        baseline needs, this study illustrates that severe restriction relative
        to needs triggers profound metabolic and psychological consequences.
        The caloric level matters less than the magnitude of the deficit
        relative to the individual's requirements.
      </NoteBlock>

      <h2>The Biggest Loser Study</h2>

      <EvidenceBlock source="Fothergill et al., 2016 (Obesity)" level="landmark">
        Researchers followed 14 participants from the reality television show
        "The Biggest Loser" for six years after the competition. The findings
        were striking: despite regaining a significant portion of lost weight,
        their metabolic rates remained suppressed. On average, participants
        burned approximately 500 kcal/day fewer than expected for their body
        size — six years later. Their bodies had been permanently recalibrated
        to defend a lower metabolic rate, even as weight crept back up.
      </EvidenceBlock>

      <WarningBlock>
        The Biggest Loser study is a cautionary tale about extreme, rapid
        weight loss. Participants lost an average of 58 kg in 30 weeks through
        extreme exercise (4-6 hours/day) and severe caloric restriction. This
        approach maximised metabolic adaptation. The lesson is not that weight
        loss is futile, but that the method matters enormously — rapid,
        extreme approaches may cause lasting metabolic damage that slower,
        more moderate approaches do not.
      </WarningBlock>

      <h2>Mechanisms of Metabolic Adaptation</h2>

      <p>
        Metabolic adaptation is not a single phenomenon but a collection of
        coordinated biological responses:
      </p>

      <ul>
        <li><strong>Reduced resting metabolic rate:</strong> Beyond what lost tissue accounts for. Thyroid hormone (T3) conversion decreases, reducing cellular metabolic activity.</li>
        <li><strong>Increased muscular efficiency:</strong> Skeletal muscle becomes more fuel-efficient, performing the same work with fewer calories. This is measurable even years after weight loss.</li>
        <li><strong>Reduced NEAT:</strong> Spontaneous physical activity decreases unconsciously. People fidget less, move more slowly, and choose to sit rather than stand.</li>
        <li><strong>Reduced thermic effect of food:</strong> Processing fewer calories means less energy spent on digestion.</li>
        <li><strong>Hormonal shifts:</strong> Decreased leptin, thyroid hormones, and sympathetic nervous system activity; increased ghrelin and cortisol.</li>
        <li><strong>Mitochondrial efficiency:</strong> Cellular energy production becomes more efficient, extracting more ATP per unit of fuel.</li>
      </ul>

      <h2>How Much Does Metabolism Actually Slow?</h2>

      <EvidenceBlock source="Rosenbaum et al., 2008" level="strong">
        Studies from Columbia University show that maintaining a 10% reduction
        in body weight is associated with approximately 20-25% reduction in
        total energy expenditure, of which roughly 10-15% is "adaptive" —
        meaning it exceeds what the loss of tissue alone would predict. For
        a person whose maintenance was 2,200 kcal/day, this could mean their
        new maintenance after weight loss is 1,650-1,750 kcal/day rather than
        the predicted 1,900-2,000 kcal/day.
      </EvidenceBlock>

      <ExampleBlock title="Adaptation in practice">
        Arjun is a 40-year-old man in Delhi who weighed 95 kg with an estimated
        TDEE of 2,500 kcal/day. After losing 15 kg over 8 months through a
        500 kcal deficit, his predicted TDEE should be approximately 2,200
        kcal/day based on his new weight alone. However, metabolic adaptation
        means his actual TDEE might be closer to 1,950-2,050 kcal/day. He
        now needs to eat 150-250 fewer calories than a person who had always
        been 80 kg — this metabolic penalty is the price of weight loss.
      </ExampleBlock>

      <h2>How to Minimise Metabolic Adaptation</h2>

      <p>
        While metabolic adaptation cannot be entirely prevented, its magnitude
        can be significantly reduced through evidence-based strategies:
      </p>

      <ul>
        <li><strong>Moderate caloric deficit:</strong> Deficits of 300-500 kcal/day produce less adaptation than 800-1,000+ kcal deficits. Patience pays metabolic dividends.</li>
        <li><strong>Resistance training:</strong> Maintaining or building muscle mass partially offsets the decline in resting metabolic rate. This is the single most important countermeasure.</li>
        <li><strong>High protein intake:</strong> Consuming 1.6-2.2 g/kg/day of protein preserves lean mass and has a higher thermic effect than carbohydrates or fat.</li>
        <li><strong>Diet breaks:</strong> Periodic phases (1-2 weeks) of eating at maintenance can partially restore metabolic rate and provide psychological relief.</li>
        <li><strong>Refeed days:</strong> Strategic high-carbohydrate days (1-2 per week) can temporarily boost leptin and thyroid hormone levels.</li>
        <li><strong>Maintain NEAT:</strong> Consciously keeping step counts and daily movement high counteracts the unconscious reduction in NEAT.</li>
        <li><strong>Adequate sleep:</strong> Poor sleep amplifies metabolic adaptation and shifts weight loss toward lean mass.</li>
      </ul>

      <NoteBlock title="Diet breaks in the Indian context">
        A diet break does not mean a week of unrestricted eating at weddings
        and festivals. It means deliberately eating at estimated maintenance
        calories for 1-2 weeks, with continued attention to protein and food
        quality. This can be practically achieved by adding an extra roti
        or serving of rice to meals, including more healthy fats (ghee,
        nuts), and allowing a moderate sweet or snack without guilt. The goal
        is metabolic restoration, not dietary chaos.
      </NoteBlock>

      <ExampleBlock title="Structured approach to minimise adaptation">
        Meera wants to lose 12 kg. Rather than a continuous 6-month deficit,
        she plans: 6 weeks of a moderate deficit (400 kcal/day) followed by
        2 weeks at maintenance calories, then repeating the cycle. She
        maintains her strength training 3 times per week throughout and keeps
        her daily steps above 8,000. She prioritises dal, eggs, and paneer
        to hit her protein target. This approach may take 7-8 months instead
        of 5-6, but she is far more likely to maintain the loss long-term
        with less metabolic damage.
      </ExampleBlock>

      <h2>Recovery from Metabolic Adaptation</h2>

      <p>
        The question of whether metabolic adaptation is reversible remains
        an active area of research. Evidence suggests that some, but not
        necessarily all, of the adaptive response reverses when caloric
        intake returns to maintenance or surplus levels. NEAT appears to
        recover relatively well, while some degree of metabolic suppression
        may persist for months or years after significant weight loss.
      </p>

      <h2>Key Takeaways</h2>

      <ul>
        <li>Metabolic adaptation is a real, measurable phenomenon — the body burns fewer calories than predicted after weight loss.</li>
        <li>The magnitude of adaptation is proportional to the speed and severity of weight loss.</li>
        <li>Extreme approaches (very low calorie diets, excessive exercise) maximise metabolic damage.</li>
        <li>Resistance training, adequate protein, moderate deficits, and periodic diet breaks are the primary tools to minimise adaptation.</li>
        <li>A person who has lost weight will likely need to eat fewer calories than someone who was always at that weight — this is a permanent biological reality to be managed, not a failure.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
