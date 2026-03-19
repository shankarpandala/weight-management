import DefinitionBlock from '../../../components/content/DefinitionBlock';
import EvidenceBlock from '../../../components/content/EvidenceBlock';
import ExampleBlock from '../../../components/content/ExampleBlock';
import NoteBlock from '../../../components/content/NoteBlock';
import WarningBlock from '../../../components/content/WarningBlock';
import ReferenceList from '../../../components/content/ReferenceList';

const references = [
  {
    id: 1,
    authors: 'Speakman JR, Levitsky DA, Allison DB, et al.',
    year: 2011,
    title: 'Set points, settling points and some alternative models: theoretical options to understand how genes and environments combine to regulate body adiposity',
    journal: 'Disease Models & Mechanisms',
    volume: '4(6)',
    pages: '733-745',
  },
  {
    id: 2,
    authors: 'Rosenbaum M, Leibel RL',
    year: 2010,
    title: 'Adaptive thermogenesis in humans',
    journal: 'International Journal of Obesity',
    volume: '34(Suppl 1)',
    pages: 'S47-S55',
  },
  {
    id: 3,
    authors: 'Sumithran P, Prendergast LA, Delbridge E, et al.',
    year: 2011,
    title: 'Long-term persistence of hormonal adaptations to weight loss',
    journal: 'New England Journal of Medicine',
    volume: '365(17)',
    pages: '1597-1604',
  },
  {
    id: 4,
    authors: 'Müller MJ, Bosy-Westphal A, Heymsfield SB',
    year: 2010,
    title: 'Is there evidence for a set point that regulates human body weight?',
    journal: 'F1000 Medicine Reports',
    volume: '2',
    pages: '59',
  },
  {
    id: 5,
    authors: 'Hall KD, Kahan S',
    year: 2018,
    title: 'Maintenance of lost weight and long-term management of obesity',
    journal: 'Medical Clinics of North America',
    volume: '102(1)',
    pages: '183-197',
  },
  {
    id: 6,
    authors: 'Schwartz MW, Seeley RJ, Zeltser LM, et al.',
    year: 2017,
    title: 'Obesity pathogenesis: an Endocrine Society scientific statement',
    journal: 'Endocrine Reviews',
    volume: '38(4)',
    pages: '267-296',
  },
];

export default function SetPointTheory() {
  return (
    <div className="prose-health">
      <h1>Set Point Theory and Body Weight Regulation</h1>

      <p>
        Anyone who has lost weight and then regained it knows the frustrating
        feeling that the body seems to "want" to return to a certain weight.
        Set point theory attempts to explain this phenomenon — and understanding
        it is crucial for developing realistic, sustainable weight management
        strategies.
      </p>

      <DefinitionBlock term="Set point theory">
        The hypothesis that the body has a biologically predetermined weight
        (or narrow weight range) that it actively defends through adjustments
        in metabolism, appetite, and behaviour. When weight deviates from this
        set point, homeostatic mechanisms work to restore it.
      </DefinitionBlock>

      <h2>Evidence for a Biological Set Point</h2>

      <p>
        Several lines of evidence support the idea that the body actively
        defends a particular weight range:
      </p>

      <ul>
        <li><strong>Weight regain after dieting:</strong> The majority of people who lose weight through dieting regain most or all of it within 3-5 years, regardless of the diet method used.</li>
        <li><strong>Resistance to overfeeding:</strong> In controlled overfeeding studies, participants increase NEAT and metabolic rate, resisting weight gain. When overfeeding stops, weight returns toward baseline.</li>
        <li><strong>Hormonal responses:</strong> Weight loss triggers persistent changes in appetite-regulating hormones that promote weight regain.</li>
        <li><strong>Twin studies:</strong> Identical twins show remarkably similar body weights even when raised apart, suggesting strong genetic influence on the defended weight.</li>
      </ul>

      <EvidenceBlock source="Sumithran et al., 2011 (NEJM)" level="landmark">
        After a 10-week weight loss programme, participants showed significant
        changes in circulating levels of appetite-related hormones — including
        increased ghrelin (hunger hormone) and decreased leptin (satiety
        hormone). Critically, these hormonal alterations persisted for at least
        12 months after weight loss, indicating that the body maintains a
        prolonged biological drive to regain lost weight.
      </EvidenceBlock>

      <h2>Hypothalamic Regulation</h2>

      <p>
        The hypothalamus serves as the central regulator of body weight. It
        integrates signals from fat tissue (leptin), the gut (ghrelin, PYY,
        GLP-1), the pancreas (insulin), and nutrient sensors to regulate energy
        intake and expenditure.
      </p>

      <ul>
        <li><strong>Leptin:</strong> Produced by fat cells in proportion to fat mass. When fat stores decrease, leptin drops, signalling the hypothalamus to increase hunger and reduce energy expenditure.</li>
        <li><strong>Ghrelin:</strong> The "hunger hormone" produced by the stomach. Levels rise before meals and increase after weight loss, driving appetite upward.</li>
        <li><strong>Melanocortin pathway:</strong> The arcuate nucleus of the hypothalamus contains NPY/AgRP neurons (stimulate appetite) and POMC neurons (suppress appetite). Weight loss shifts the balance toward hunger-promoting signals.</li>
      </ul>

      <EvidenceBlock source="Schwartz et al., 2017 (Endocrine Society)" level="strong">
        The Endocrine Society's scientific statement on obesity describes body
        weight regulation as a "defended" biological state, not simply a matter
        of willpower. The hypothalamic energy-regulation system treats weight
        loss as a threat to survival and mounts a coordinated response through
        increased appetite, reduced metabolic rate, and altered reward signalling
        that can persist for years.
      </EvidenceBlock>

      <h2>The Settling Point Model: A More Nuanced View</h2>

      <DefinitionBlock term="Settling point model">
        An alternative to the strict set point theory. Rather than a single
        genetically fixed weight, the settling point model proposes that body
        weight stabilises at a point determined by the interaction between
        biology and environment. Change the environment (diet, activity, food
        availability) and the settling point shifts accordingly.
      </DefinitionBlock>

      <p>
        The settling point model better explains several observations that
        strict set point theory cannot:
      </p>

      <ul>
        <li>Why populations gain weight when transitioning to obesogenic environments (as seen during India's rapid urbanisation).</li>
        <li>Why some individuals maintain weight loss long-term through sustained behavioural changes.</li>
        <li>Why the defended weight can shift upward (but rarely downward) over time with prolonged overeating.</li>
      </ul>

      <ExampleBlock title="Settling point in an Indian context">
        Priya maintained a weight of 58 kg throughout her twenties while living
        in a small town, walking regularly, and eating home-cooked meals. After
        moving to Mumbai for work, her weight gradually settled at 72 kg over
        five years — new food environment, less walking, more stress eating.
        Her body now "defends" 72 kg. If she returns to a lifestyle more
        similar to her earlier one, her settling point can shift downward, but
        it requires sustained environmental change, not just a short-term diet.
      </ExampleBlock>

      <h2>Why Weight Regain Happens</h2>

      <p>
        Understanding the mechanisms of weight regain helps remove the stigma
        of "failure" and enables better planning:
      </p>

      <ul>
        <li><strong>Metabolic adaptation:</strong> Resting metabolic rate decreases beyond what would be predicted by lost mass alone, sometimes by 100-300 kcal/day.</li>
        <li><strong>Increased appetite drive:</strong> Persistent hormonal changes increase hunger and reduce satiety after weight loss.</li>
        <li><strong>Reduced NEAT:</strong> The body unconsciously decreases non-exercise movement, conserving energy.</li>
        <li><strong>Reward sensitivity:</strong> Weight loss increases the brain's reward response to food cues, making high-calorie foods more tempting.</li>
        <li><strong>Return to old habits:</strong> Without sustained environmental changes, old eating patterns re-emerge.</li>
      </ul>

      <WarningBlock>
        Weight regain after dieting is not a personal failure — it is a
        predictable biological response. Blaming individuals for weight regain
        without acknowledging these powerful physiological drivers is both
        scientifically inaccurate and psychologically harmful. Effective weight
        management requires strategies that work with biology, not against it.
      </WarningBlock>

      <h2>Metabolic Defence Mechanisms</h2>

      <EvidenceBlock source="Rosenbaum & Leibel, 2010" level="strong">
        Research from Columbia University demonstrated that a 10% reduction in
        body weight triggers a coordinated set of metabolic defences: resting
        metabolic rate drops by approximately 20-25% beyond what lost tissue
        accounts for, skeletal muscle becomes more efficient (burning fewer
        calories for the same work), and thyroid hormone levels decrease. These
        changes create an "energy gap" that powerfully drives weight regain.
      </EvidenceBlock>

      <h2>Working With Your Set Point</h2>

      <NoteBlock title="Strategies for sustainable weight management">
        Rather than fighting biology with extreme restriction, consider these
        approaches: pursue gradual weight loss (0.5-1% body weight per week)
        to minimise metabolic adaptation; incorporate resistance training to
        preserve lean mass; allow periodic diet breaks or refeeds to temporarily
        restore metabolic rate; focus on environmental changes (keeping
        trigger foods out of the home, meal preparation) rather than relying
        solely on willpower; accept that maintaining weight loss requires
        permanent lifestyle change, not a temporary diet.
      </NoteBlock>

      <ExampleBlock title="Realistic expectations">
        If your body has been defending 85 kg for several years, attempting to
        reach 60 kg through an 8-week crash diet is likely to trigger maximum
        metabolic defence. A more realistic approach: aim for a 5-10% reduction
        first (to 76-81 kg), maintain that for 3-6 months while hormonal
        and metabolic systems partially recalibrate, then pursue further loss
        if desired. This "step-down" approach may help establish a new, lower
        settling point over time.
      </ExampleBlock>

      <h2>Key Takeaways</h2>

      <ul>
        <li>The body actively defends its weight through metabolic, hormonal, and behavioural adjustments — this is biology, not weakness.</li>
        <li>The settling point model suggests that sustained environmental changes can shift the defended weight over time.</li>
        <li>Hormonal changes after weight loss (increased ghrelin, decreased leptin) can persist for over a year.</li>
        <li>Gradual weight loss, resistance training, and permanent lifestyle modification are the most effective strategies for working with set point biology.</li>
        <li>Weight management is a long-term process — temporary diets produce temporary results.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
