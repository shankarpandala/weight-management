import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

const references = [
  { authors: 'Kojima M, Hosoda H, Date Y, Nakazato M, Matsuo H, Kangawa K', year: 1999, title: 'Ghrelin is a growth-hormone-releasing acylated peptide from stomach', source: 'Nature, 402(6762), 656-660', type: 'foundational' },
  { authors: 'Friedman JM, Halaas JL', year: 1998, title: 'Leptin and the regulation of body weight in mammals', source: 'Nature, 395(6704), 763-770', type: 'foundational' },
  { authors: 'Batterham RL, Cowley MA, Small CJ, et al.', year: 2002, title: 'Gut hormone PYY3-36 physiologically inhibits food intake', source: 'Nature, 418(6898), 650-654', type: 'foundational' },
  { authors: 'Cummings DE, Overduin J', year: 2007, title: 'Gastrointestinal regulation of food intake', source: 'Journal of Clinical Investigation, 117(1), 13-23', type: 'review' },
  { authors: 'Sumithran P, Prendergast LA, Delbridge E, et al.', year: 2011, title: 'Long-term persistence of hormonal adaptations to weight loss', source: 'New England Journal of Medicine, 365(17), 1597-1604', type: 'clinical' },
];

export default function HungerSatietyHormones() {
  return (
    <div className="prose-health">
      <h1>Hunger & Satiety Hormones</h1>

      <p>
        Hunger is not simply &quot;willpower&quot; — it is driven by a complex hormonal orchestra
        involving your gut, brain, fat tissue, and pancreas. Understanding these hormones explains
        why dieting is biologically hard, why some foods satisfy you for hours while others leave
        you hungry within minutes, and how to work with your biology rather than against it.
      </p>

      <h2>Ghrelin: The Hunger Hormone</h2>

      <DefinitionBlock
        title="Ghrelin"
        definition="A 28-amino-acid peptide hormone produced primarily by the stomach lining (fundus). Ghrelin stimulates appetite, increases food intake, and promotes fat storage. It acts on the hypothalamus via the growth hormone secretagogue receptor (GHSR)."
        notation="Ghrelin levels rise before meals and fall after eating. It is the only known peripheral hormone that stimulates appetite."
      />

      <p>
        Ghrelin follows a predictable circadian pattern — it rises before habitual mealtimes and
        drops within 30-60 minutes of eating. This is why skipping breakfast can feel intensely
        uncomfortable if you always eat breakfast, but becomes easier after a few days as the
        ghrelin pattern adjusts. Importantly, ghrelin increases during weight loss, which is one
        reason maintaining weight loss is harder than achieving it.
      </p>

      <h2>Leptin: The Satiety Signal from Fat</h2>

      <DefinitionBlock
        title="Leptin"
        definition="A hormone produced by adipose (fat) tissue in proportion to fat stores. Leptin signals to the hypothalamus that the body has adequate energy reserves, suppressing appetite and increasing energy expenditure. It is the long-term regulator of energy balance."
        notation="Discovered in 1994 by Jeffrey Friedman. Leptin deficiency causes extreme obesity; however, most obese individuals have HIGH leptin levels (leptin resistance)."
      />

      <p>
        Leptin acts as a fuel gauge — more fat means more leptin, which should reduce appetite.
        However, chronically elevated leptin (from excess body fat) leads to leptin resistance,
        where the hypothalamus becomes desensitized. The brain interprets low leptin sensitivity
        as starvation, driving hunger and reducing metabolic rate even in the presence of abundant
        fat stores. This is a key reason why obesity is self-perpetuating.
      </p>

      <EvidenceBlock
        title="Hormonal Persistence After Weight Loss"
        finding="One year after a 10% weight loss, levels of appetite-stimulating hormones (ghrelin) remained elevated while satiety hormones (leptin, PYY, CCK) remained suppressed. Participants reported significantly greater hunger than at baseline."
        study="50 overweight/obese adults followed for 62 weeks after diet-induced weight loss"
        source="Sumithran et al. (2011) New England Journal of Medicine"
        details="This landmark study demonstrated that the hormonal drive to regain weight persists for at least one year after weight loss — and likely longer. The findings explain the high rate of weight regain (80%+ within 5 years) and argue against viewing obesity as simply a failure of willpower. The hormonal milieu actively pushes the body back toward its previous weight."
      />

      <h2>Insulin: Beyond Blood Sugar</h2>
      <p>
        While primarily known for glucose regulation, insulin also acts as a satiety signal in the
        brain. Insulin crosses the blood-brain barrier and acts on hypothalamic receptors to reduce
        food intake. However, insulin resistance (common in metabolic syndrome and type 2 diabetes)
        impairs this central satiety effect, contributing to overeating. High-glycemic meals cause
        rapid insulin spikes followed by crashes, often triggering rebound hunger.
      </p>

      <h2>PYY (Peptide YY): The &quot;Stop Eating&quot; Signal</h2>
      <p>
        PYY is released by L-cells in the ileum and colon in response to nutrients — especially
        protein and fat. It acts on the hypothalamus to reduce appetite and slow gastric emptying.
        PYY levels remain elevated for several hours after a meal, contributing to prolonged
        satiety. Protein-rich meals stimulate the greatest PYY release, which partly explains
        the high satiety value of protein.
      </p>

      <h2>CCK (Cholecystokinin): The Meal-Ending Hormone</h2>
      <p>
        Released by the duodenum in response to fat and protein, CCK triggers gallbladder
        contraction and pancreatic enzyme secretion while simultaneously sending satiety signals
        to the brain via the vagus nerve. CCK promotes meal termination (stopping eating) but has
        a short half-life (minutes), so it does not maintain satiety for long.
      </p>

      <h2>GLP-1 (Glucagon-Like Peptide 1)</h2>
      <p>
        Released by L-cells in the ileum, GLP-1 slows gastric emptying, stimulates insulin
        secretion, and reduces appetite. GLP-1 receptor agonists (semaglutide, liraglutide)
        are now used as obesity medications precisely because of this powerful appetite-suppressing
        effect. The natural release of GLP-1 is enhanced by fiber, protein, and fermented foods.
      </p>

      <ExampleBlock
        title="Building Satiety into Indian Meals"
        problem="To maximize satiety hormones on an Indian diet: (1) Start with protein — dal, paneer, egg curry, or chicken stimulates PYY and CCK more than pure carbohydrates. (2) Include healthy fats — coconut chutney, ghee on roti, or mustard oil tempering triggers CCK release. (3) Add fiber — vegetables, whole grains, and beans slow gastric emptying and enhance GLP-1 release. (4) Avoid liquid calories — sugary chai, fruit juices, and cold drinks bypass normal satiety signaling. (5) Eat slowly — satiety hormones take 20 minutes to reach the brain."
      />

      <NoteBlock
        title="Why Protein Is the Most Satiating Macronutrient">
        Protein stimulates PYY, CCK, and GLP-1 more powerfully than carbohydrates or fat. It also has the highest thermic effect (20-30% of protein calories are used in digestion). Studies consistently show that increasing protein from 15% to 30% of calories reduces spontaneous food intake by 400-500 kcal/day. For Indian vegetarians, combining dal + rice, paneer + roti, or curd + chana provides complete protein with strong satiety.
      </NoteBlock>

      <WarningBlock
        title="The Hormonal Trap of Crash Dieting">
        Rapid weight loss dramatically raises ghrelin and suppresses leptin, PYY, and CCK — creating an intense biological drive to eat that can persist for 1-3 years. This is NOT a lack of willpower; it is biochemistry. Gradual weight loss (0.5-1% body weight per week) produces smaller hormonal disruptions and is more sustainable long-term.
      </WarningBlock>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Ghrelin (from the stomach) is the only hormone that directly stimulates hunger; it rises before meals and during weight loss.</li>
        <li>Leptin (from fat tissue) signals long-term energy status; leptin resistance in obesity impairs its satiety effect.</li>
        <li>PYY, CCK, and GLP-1 are gut hormones that promote satiety — triggered most strongly by protein and fat.</li>
        <li>Hormonal adaptations to weight loss persist for at least a year, explaining high regain rates.</li>
        <li>Eating protein-rich, fiber-rich, whole-food Indian meals optimizes natural satiety signaling.</li>
        <li>Gradual weight loss minimizes hormonal disruption compared to crash dieting.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
