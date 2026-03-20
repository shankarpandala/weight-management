import DefinitionBlock from '../../../components/content/DefinitionBlock';
import EvidenceBlock from '../../../components/content/EvidenceBlock';
import ExampleBlock from '../../../components/content/ExampleBlock';
import NoteBlock from '../../../components/content/NoteBlock';
import WarningBlock from '../../../components/content/WarningBlock';
import ReferenceList from '../../../components/content/ReferenceList';

const references = [
  {
    id: 1,
    authors: 'Levine JA, Eberhardt NL, Jensen MD',
    year: 1999,
    title: 'Role of nonexercise activity thermogenesis in resistance to fat gain in humans',
    journal: 'Science',
    volume: '283(5399)',
    pages: '212-214',
  },
  {
    id: 2,
    authors: 'Levine JA, Lanningham-Foster LM, McCrady SK, et al.',
    year: 2005,
    title: 'Interindividual variation in posture allocation: possible role in human obesity',
    journal: 'Science',
    volume: '307(5709)',
    pages: '584-586',
  },
  {
    id: 3,
    authors: 'Villablanca PA, Jagber JR, Sishi BJ, et al.',
    year: 2015,
    title: 'Nonexercise activity thermogenesis in obesity management',
    journal: 'Mayo Clinic Proceedings',
    volume: '90(4)',
    pages: '509-519',
  },
  {
    id: 4,
    authors: 'Misra A, Khurana L',
    year: 2008,
    title: 'Obesity and the metabolic syndrome in developing countries',
    journal: 'Journal of Clinical Endocrinology & Metabolism',
    volume: '93(11 Suppl 1)',
    pages: 'S9-S30',
  },
  {
    id: 5,
    authors: 'Kotz CM, Teske JA, Billington CJ',
    year: 2008,
    title: 'Neuroregulation of nonexercise activity thermogenesis and obesity resistance',
    journal: 'American Journal of Physiology - Regulatory, Integrative and Comparative Physiology',
    volume: '294(3)',
    pages: 'R699-R710',
  },
  {
    id: 6,
    authors: 'von Loeffelholz C, Birkenfeld AL',
    year: 2022,
    title: 'Non-exercise activity thermogenesis in human energy homeostasis',
    journal: 'Endotext [Internet]',
    volume: '',
    pages: '',
  },
];

export default function NEAT() {
  return (
    <div className="prose-health">
      <h1>Non-Exercise Activity Thermogenesis (NEAT)</h1>

      <p>
        Most people focus on gym workouts when thinking about calorie expenditure,
        yet the energy burned through everyday non-exercise movements often dwarfs
        formal exercise. This component of total daily energy expenditure, known as
        Non-Exercise Activity Thermogenesis (NEAT), is one of the most variable and
        underappreciated factors in weight management.
      </p>

      <DefinitionBlock term="NEAT (Non-Exercise Activity Thermogenesis)">
        The energy expended for everything that is not sleeping, eating, or
        deliberate exercise. NEAT includes fidgeting, walking, standing, climbing
        stairs, household chores, occupational activity, and even maintaining
        posture. It can range from approximately 200 kcal/day in sedentary
        individuals to over 900 kcal/day in highly active individuals.
      </DefinitionBlock>

      <h2>Components of NEAT</h2>

      <p>
        NEAT encompasses a wide spectrum of daily movements that most people
        never consciously think about:
      </p>

      <ul>
        <li><strong>Occupational activity:</strong> Physical labour, walking between meetings, standing at a shop counter, or sitting at a desk all carry vastly different energy costs.</li>
        <li><strong>Ambulatory movement:</strong> Walking to the market, climbing stairs at home, moving between rooms.</li>
        <li><strong>Fidgeting and spontaneous movement:</strong> Tapping feet, shifting in a chair, gesturing while talking.</li>
        <li><strong>Posture maintenance:</strong> Standing burns roughly 0.7 kcal/min more than sitting; sitting burns more than lying down.</li>
        <li><strong>Household activities:</strong> Cooking, cleaning, washing clothes by hand, sweeping — activities that are still common in many Indian households.</li>
      </ul>

      <EvidenceBlock source="Levine et al., 1999 (Science)" level="landmark">
        In a landmark overfeeding study, participants were fed 1,000 kcal/day above
        maintenance for 8 weeks. Fat gain varied tenfold among subjects, and the
        single strongest predictor of resistance to fat gain was the increase in
        NEAT. Some individuals unconsciously ramped up fidgeting and movement,
        burning off much of the surplus.
      </EvidenceBlock>

      <h2>The Enormous Variation: 200 to 900+ kcal/day</h2>

      <p>
        NEAT is the most variable component of total daily energy expenditure.
        Two people of similar size can differ by 700 kcal/day or more based purely
        on their non-exercise movement patterns. This variation is driven by
        occupation, environment, cultural habits, and individual biology.
      </p>

      <EvidenceBlock source="Levine et al., 2005 (Science)" level="strong">
        Using sophisticated motion-tracking undergarments, researchers found that
        obese individuals sat an average of 2.5 hours more per day than lean
        individuals. This difference in posture allocation alone accounted for
        roughly 350 kcal/day — enough to drive meaningful weight change over time.
      </EvidenceBlock>

      <ExampleBlock title="NEAT in an Indian context">
        Consider two office workers in Bengaluru. Person A drives to work, sits at
        a desk for 8 hours, takes the lift, and orders food delivery. Person B
        walks to the metro station, stands on the train, takes stairs at office,
        walks to a nearby dabba service for lunch, and does household chores in the
        evening. Person B may burn 400-600 kcal/day more through NEAT alone —
        without any gym visit.
      </ExampleBlock>

      <h2>The Indian Sedentary Lifestyle Concern</h2>

      <p>
        Rapid urbanisation in India has dramatically reduced NEAT across
        populations. The shift from agricultural and manual work to desk jobs,
        combined with increased screen time, food delivery apps, and domestic help,
        has created an environment where NEAT is at historically low levels.
      </p>

      <WarningBlock>
        Indian urban populations face a compounded risk: the genetically higher
        tendency toward visceral fat accumulation (the thin-fat phenotype) is
        worsened by drastically reduced NEAT from sedentary office culture. Studies
        show that physical activity levels in urban India have declined by nearly
        50% over two decades, with much of that decline coming from reduced
        non-exercise movement rather than reduced gym attendance.
      </WarningBlock>

      <NoteBlock title="Traditional Indian lifestyles and NEAT">
        Many traditional Indian daily activities are excellent sources of NEAT:
        sitting on the floor (and getting up repeatedly), hand-washing clothes,
        grinding spices with a sil-batta, walking to local markets, squatting
        during cooking, and using Indian-style toilets. As these practices are
        replaced by modern conveniences, hundreds of calories of daily NEAT
        are lost without people realising it.
      </NoteBlock>

      <h2>Biology of NEAT Regulation</h2>

      <p>
        NEAT is not entirely under conscious control. The hypothalamus, particularly
        the paraventricular nucleus, plays a role in regulating spontaneous
        physical activity. Orexin (hypocretin) neuropeptides appear to be key
        mediators, stimulating wakefulness and movement.
      </p>

      <p>
        During caloric restriction, NEAT tends to decrease unconsciously — people
        fidget less, move more slowly, and choose to sit rather than stand. This
        is part of the body's energy-conservation response and contributes to
        the plateau many dieters experience.
      </p>

      <EvidenceBlock source="Kotz et al., 2008" level="strong">
        Animal studies demonstrate that orexin signalling in the hypothalamus
        directly modulates spontaneous physical activity. Individuals with
        naturally higher orexin activity tend to move more throughout the day,
        contributing to higher NEAT and greater resistance to weight gain.
      </EvidenceBlock>

      <h2>Practical Strategies to Increase NEAT</h2>

      <ul>
        <li><strong>Walk while talking:</strong> Take phone calls while pacing — common in Indian offices but worth making deliberate.</li>
        <li><strong>Use stairs:</strong> Avoid lifts for fewer than 4-5 floors.</li>
        <li><strong>Stand periodically:</strong> Aim for 10-15 minutes of standing every hour if you have a desk job.</li>
        <li><strong>Walk after meals:</strong> The Indian tradition of a post-dinner walk (shatapavali — 100 steps) is an excellent NEAT booster.</li>
        <li><strong>Do household chores:</strong> Cooking, cleaning, and organising all contribute meaningfully.</li>
        <li><strong>Reduce reliance on delivery:</strong> Walk to local shops instead of ordering online when practical.</li>
        <li><strong>Set a step target:</strong> Even 7,000-8,000 steps daily ensures a baseline level of NEAT.</li>
      </ul>

      <NoteBlock title="NEAT versus formal exercise">
        A 45-minute gym session might burn 200-400 kcal. But if you spend the
        remaining 15 waking hours nearly motionless, your total activity
        expenditure may still be low. Conversely, someone with high NEAT but
        no gym membership can easily expend more total activity calories. The
        most effective approach combines both, but if you must choose one area
        to improve first, increasing NEAT often yields more sustainable results.
      </NoteBlock>

      <h2>Key Takeaways</h2>

      <ul>
        <li>NEAT accounts for the largest variation in energy expenditure between individuals — up to 700 kcal/day difference.</li>
        <li>Occupation is the single biggest determinant of NEAT.</li>
        <li>The body unconsciously reduces NEAT during caloric deficit, making weight loss harder.</li>
        <li>Urban Indian lifestyles have dramatically reduced NEAT, compounding metabolic risks.</li>
        <li>Small, sustained increases in daily movement can meaningfully improve energy balance over time.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
