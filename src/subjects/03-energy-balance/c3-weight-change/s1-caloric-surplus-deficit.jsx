import DefinitionBlock from '../../../components/content/DefinitionBlock';
import EvidenceBlock from '../../../components/content/EvidenceBlock';
import ExampleBlock from '../../../components/content/ExampleBlock';
import NoteBlock from '../../../components/content/NoteBlock';
import WarningBlock from '../../../components/content/WarningBlock';
import ReferenceList from '../../../components/content/ReferenceList';

const references = [
  {
    id: 1,
    authors: 'Hall KD, Sacks G, Chandramohan D, et al.',
    year: 2011,
    title: 'Quantification of the effect of energy imbalance on bodyweight',
    journal: 'The Lancet',
    volume: '378(9793)',
    pages: '826-837',
  },
  {
    id: 2,
    authors: 'Thomas DM, Martin CK, Lettieri S, et al.',
    year: 2013,
    title: 'Can a weight loss of one pound a week be achieved with a 3500-kcal deficit? Commentary on a commonly accepted rule',
    journal: 'International Journal of Obesity',
    volume: '37(12)',
    pages: '1611-1613',
  },
  {
    id: 3,
    authors: 'Hall KD',
    year: 2008,
    title: 'What is the required energy deficit per unit weight loss?',
    journal: 'International Journal of Obesity',
    volume: '32(3)',
    pages: '573-576',
  },
  {
    id: 4,
    authors: 'Heymsfield SB, Thomas D, Martin CK, et al.',
    year: 2012,
    title: 'Energy content of weight loss: kinetic features during voluntary caloric restriction',
    journal: 'Metabolism',
    volume: '61(7)',
    pages: '937-943',
  },
  {
    id: 5,
    authors: 'Misra A, Sharma R, Gulati S, et al.',
    year: 2011,
    title: 'Consensus dietary guidelines for healthy living and prevention of obesity, the metabolic syndrome, diabetes, and related disorders in Asian Indians',
    journal: 'Diabetes Technology & Therapeutics',
    volume: '13(6)',
    pages: '683-694',
  },
  {
    id: 6,
    authors: 'Helms ER, Aragon AA, Fitschen PJ',
    year: 2014,
    title: 'Evidence-based recommendations for natural bodybuilding contest preparation: nutrition and supplementation',
    journal: 'Journal of the International Society of Sports Nutrition',
    volume: '11(1)',
    pages: '20',
  },
];

export default function CaloricSurplusDeficit() {
  return (
    <div className="prose-health">
      <h1>Caloric Surplus and Deficit</h1>

      <p>
        At its most fundamental level, weight change is governed by energy
        balance — the relationship between the calories you consume and the
        calories you expend. While this sounds straightforward, the reality
        of how energy balance operates in living humans is far more nuanced
        than the simple "calories in minus calories out" equation suggests.
      </p>

      <DefinitionBlock term="Energy balance equation">
        Change in body energy stores = Energy intake - Energy expenditure.
        When intake exceeds expenditure, the body stores the excess (primarily
        as fat), creating a caloric surplus. When expenditure exceeds intake,
        the body draws from stored energy, creating a caloric deficit. Both
        sides of the equation dynamically influence each other.
      </DefinitionBlock>

      <h2>Caloric Surplus: Gaining Weight</h2>

      <p>
        A caloric surplus occurs when you consistently consume more energy
        than you expend. The composition of the surplus and training status
        determines whether the excess is stored as fat, muscle, or a
        combination:
      </p>

      <ul>
        <li><strong>Without resistance training:</strong> Roughly 60-80% of weight gained from a surplus is stored as fat, with the remainder as lean tissue.</li>
        <li><strong>With resistance training and adequate protein:</strong> A greater proportion of the surplus can be directed toward muscle growth, though some fat gain is nearly inevitable.</li>
        <li><strong>Rate matters:</strong> Large surpluses (500+ kcal/day above maintenance) tend to produce more fat gain relative to muscle gain compared to modest surpluses (200-300 kcal/day).</li>
      </ul>

      <h2>Caloric Deficit: Losing Weight</h2>

      <p>
        A caloric deficit forces the body to draw from internal energy stores.
        The goal in a well-managed deficit is to lose primarily fat while
        preserving as much lean mass as possible.
      </p>

      <ul>
        <li><strong>Moderate deficit (300-500 kcal/day):</strong> Produces approximately 0.3-0.5 kg/week fat loss. Better for lean mass preservation, easier to sustain, less hormonal disruption.</li>
        <li><strong>Aggressive deficit (500-750 kcal/day):</strong> Produces approximately 0.5-0.7 kg/week fat loss. Acceptable for individuals with significant fat to lose. Requires careful attention to protein intake.</li>
        <li><strong>Very aggressive deficit (1000+ kcal/day):</strong> Rapid weight loss but substantially greater lean mass loss, metabolic adaptation, hormonal disruption, and risk of nutrient deficiency.</li>
      </ul>

      <h2>The 3,500 kcal/lb Rule: Why It Is Oversimplified</h2>

      <p>
        The widely cited rule that a deficit of 3,500 kcal equals one pound
        (0.45 kg) of fat loss is based on the energy content of pure adipose
        tissue. While the number itself is approximately correct for the
        energy density of fat tissue, it fails as a predictive model for
        weight loss.
      </p>

      <EvidenceBlock source="Thomas et al., 2013 (International Journal of Obesity)" level="strong">
        The 3,500 kcal rule assumes that energy expenditure remains constant
        as weight is lost — a deeply flawed assumption. In reality, metabolic
        rate decreases as body mass decreases, and adaptive thermogenesis
        further reduces expenditure. The rule overestimates weight loss at
        every time point, with errors growing larger over time. A 500 kcal/day
        deficit does not produce 0.45 kg/week of sustained weight loss; the
        actual rate progressively slows.
      </EvidenceBlock>

      <EvidenceBlock source="Hall et al., 2011 (The Lancet)" level="landmark">
        Kevin Hall and colleagues developed a dynamic energy balance model
        that accounts for metabolic adaptation. Their mathematical model shows
        that the body reaches a new equilibrium after approximately 3 years,
        with roughly half of the predicted weight loss (by the 3,500 kcal
        rule) actually achieved. They proposed a more accurate rule of thumb:
        every permanent 10 kcal/day reduction in intake eventually produces
        about 0.45 kg of weight loss at the new equilibrium.
      </EvidenceBlock>

      <h2>Dynamic Energy Balance</h2>

      <p>
        The critical insight is that both sides of the energy balance equation
        change in response to each other:
      </p>

      <ul>
        <li><strong>Reducing intake</strong> leads to lower body weight, which reduces BMR. It also triggers hormonal changes that increase appetite and decrease NEAT.</li>
        <li><strong>Increasing expenditure</strong> through exercise can increase appetite, and the body may compensate by reducing NEAT during non-exercise hours.</li>
        <li><strong>Weight loss itself</strong> reduces the energy cost of movement (less mass to carry), further narrowing the deficit over time.</li>
      </ul>

      <NoteBlock title="The plateau is not a mystery">
        Weight loss plateaus are entirely predictable from the dynamic energy
        balance model. As you lose weight, your energy expenditure decreases
        while your appetite drive increases. Eventually, intake equals the new,
        lower expenditure, and weight loss stops. Breaking a plateau requires
        either further reducing intake, increasing expenditure, or both — and
        each successive adjustment yields diminishing returns.
      </NoteBlock>

      <h2>Practical Deficit Targets for Indians</h2>

      <ExampleBlock title="Calculating a practical deficit">
        Sunita is a 35-year-old woman in Hyderabad, weighing 72 kg with a
        sedentary office job. Her estimated TDEE is approximately 1,750 kcal/day.
        A moderate deficit of 400 kcal/day would give her a target intake of
        roughly 1,350 kcal/day. At this level, she should prioritise
        protein-rich foods — dal, paneer, eggs, curd — aiming for at least
        70-80 g protein daily to preserve lean mass. She can expect to lose
        approximately 1.5-2 kg in the first month (including initial water
        weight), then 1-1.5 kg/month thereafter.
      </ExampleBlock>

      <WarningBlock>
        For most Indian women, caloric intake should generally not fall below
        1,200 kcal/day, and for men, not below 1,500 kcal/day, without medical
        supervision. Going below these levels makes it extremely difficult to
        meet micronutrient needs — particularly iron, calcium, and B12, which
        are already commonly deficient in Indian diets. Crash diets of 800-1,000
        kcal are neither sustainable nor safe for long-term use.
      </WarningBlock>

      <ExampleBlock title="The Indian dietary challenge">
        A typical Indian thali can easily provide 700-900 kcal per meal: 2-3
        rotis (300 kcal), dal (150 kcal), sabzi with oil (150 kcal), rice
        (200 kcal), and curd (60 kcal). For someone targeting 1,500 kcal/day,
        this leaves only 600-800 kcal for the other two meals and snacks.
        The key is not to eliminate the thali but to adjust portions: use
        smaller rotis, reduce rice, increase protein-rich components, and
        moderate oil in cooking.
      </ExampleBlock>

      <h2>Surplus and Deficit: Not Just About Fat</h2>

      <p>
        The composition of weight gained or lost during energy imbalance
        depends on several factors:
      </p>

      <ul>
        <li><strong>Protein intake:</strong> Higher protein (1.6-2.2 g/kg/day during a deficit) significantly improves lean mass retention.</li>
        <li><strong>Resistance training:</strong> The single most powerful stimulus for preserving muscle during a deficit.</li>
        <li><strong>Deficit magnitude:</strong> Larger deficits lead to proportionally more lean mass loss.</li>
        <li><strong>Starting body fat:</strong> Leaner individuals lose a greater proportion of lean mass in a deficit, while those with more fat to lose can sustain larger deficits with less muscle loss.</li>
        <li><strong>Sleep and stress:</strong> Poor sleep and chronic stress shift the ratio of weight lost toward lean mass and away from fat.</li>
      </ul>

      <NoteBlock title="The Indian protein gap">
        Indian diets are often protein-poor relative to requirements,
        particularly during caloric restriction. Vegetarian diets require
        deliberate planning to achieve adequate protein intake: combining dals
        with grains, including paneer and curd regularly, and considering
        supplementation with whey or plant protein if needed. During a caloric
        deficit, protein becomes even more critical — it is not optional.
      </NoteBlock>

      <h2>Key Takeaways</h2>

      <ul>
        <li>Energy balance governs weight change, but both sides of the equation are dynamic and interconnected.</li>
        <li>The 3,500 kcal/lb rule is a rough approximation, not a predictive model — expect diminishing returns over time.</li>
        <li>Moderate deficits (300-500 kcal/day) preserve more lean mass and are more sustainable than aggressive cuts.</li>
        <li>Weight loss plateaus are biologically inevitable, not signs of failure.</li>
        <li>For Indian populations, maintaining adequate protein intake during a deficit is especially important given typically low baseline protein consumption.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
