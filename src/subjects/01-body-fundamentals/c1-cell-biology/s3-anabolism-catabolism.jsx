import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

const references = [
  { authors: 'Frayn KN', year: 2010, title: 'Metabolic Regulation: A Human Perspective', source: 'Wiley-Blackwell, 3rd Edition', type: 'foundational' },
  { authors: 'Atherton PJ, Smith K', year: 2012, title: 'Muscle protein synthesis in response to nutrition and exercise', source: 'Journal of Physiology, 590(5), 1049-1057', type: 'review' },
  { authors: 'Cahill GF Jr', year: 2006, title: 'Fuel metabolism in starvation', source: 'Annual Review of Nutrition, 26, 1-22', type: 'foundational' },
  { authors: 'Rennie MJ, Tipton KD', year: 2000, title: 'Protein and amino acid metabolism during and after exercise and the effects of nutrition', source: 'Annual Review of Nutrition, 20, 457-483', type: 'review' },
  { authors: 'Longo VD, Mattson MP', year: 2014, title: 'Fasting: molecular mechanisms and clinical applications', source: 'Cell Metabolism, 19(2), 181-192', type: 'review' },
];

export default function AnabolismCatabolism() {
  return (
    <div className="prose-health">
      <h1>Anabolism vs Catabolism</h1>

      <p>
        Every moment, your body simultaneously builds new molecules and breaks down others. These
        two opposing yet complementary processes — anabolism and catabolism — together constitute
        metabolism. Whether you gain fat, lose fat, build muscle, or lose muscle depends on which
        process dominates over time.
      </p>

      <DefinitionBlock
        title="Anabolism"
        definition="Metabolic pathways that construct complex molecules from simpler ones. Anabolic processes require energy (ATP) and include protein synthesis, glycogen storage, and fat synthesis (lipogenesis). This is the 'building up' phase of metabolism."
        notation="Key anabolic hormones: insulin, growth hormone, testosterone, IGF-1."
      />

      <DefinitionBlock
        title="Catabolism"
        definition="Metabolic pathways that break down complex molecules into simpler ones, releasing energy. Catabolic processes include glycogenolysis (glycogen breakdown), lipolysis (fat breakdown), and proteolysis (protein breakdown). This is the 'breaking down' phase."
        notation="Key catabolic hormones: glucagon, cortisol, adrenaline (epinephrine)."
      />

      <h2>How Anabolism Works</h2>

      <h3>Protein Synthesis</h3>
      <p>
        Your body continuously builds new proteins from amino acids. After consuming a protein-rich
        meal — say, a bowl of dal with rice — the absorbed amino acids trigger mTOR signaling,
        activating ribosomal machinery to build new muscle proteins. This process peaks 1-3 hours
        after protein ingestion and requires both amino acid availability and energy (ATP).
      </p>

      <h3>Glycogen Synthesis</h3>
      <p>
        When blood glucose rises after carbohydrate-rich foods (rice, roti, idli), insulin
        stimulates glycogen synthase to store glucose as glycogen in the liver (~100g capacity)
        and muscle (~400g capacity).
      </p>

      <h3>Lipogenesis (Fat Synthesis)</h3>
      <p>
        De novo lipogenesis converts excess carbohydrates into fatty acids for storage as
        triglycerides in adipose tissue. Insulin is the primary driver — sustained
        hyperinsulinemia from chronic overeating promotes fat storage.
      </p>

      <EvidenceBlock
        title="Muscle Protein Synthesis Response to Feeding"
        finding="Muscle protein synthesis increases 25-50% above basal levels following 20-40g of high-quality protein. The response plateaus at approximately 0.4g/kg body weight per meal."
        study="Review of protein feeding studies using stable isotope tracers"
        source="Atherton & Smith (2012) Journal of Physiology"
        details="Distributing protein across meals (e.g., 30g at 4 meals) optimizes total daily muscle protein synthesis compared to consuming the same amount in 1-2 large doses. This has practical implications for meal planning on Indian diets where protein is often concentrated in one meal."
      />

      <h2>How Catabolism Works</h2>

      <h3>Glycogenolysis</h3>
      <p>
        When blood glucose drops between meals, glucagon signals the liver to break glycogen back
        into glucose. Liver glycogen sustains blood glucose for approximately 12-18 hours of
        fasting. During exercise, muscle glycogen fuels contractions locally.
      </p>

      <h3>Lipolysis (Fat Breakdown)</h3>
      <p>
        When energy demands exceed glycogen supply, hormone-sensitive lipase breaks stored
        triglycerides into free fatty acids and glycerol. These fatty acids undergo beta-oxidation
        in mitochondria to produce ATP. This is the process driving fat loss during caloric deficit.
      </p>

      <h3>Proteolysis (Protein Breakdown)</h3>
      <p>
        Under prolonged fasting or severe restriction, the body breaks down muscle proteins for
        gluconeogenesis (making glucose) and energy. The body preferentially burns fat before
        significant muscle loss, but both processes occur simultaneously — which is why crash
        diets cause muscle loss alongside fat loss.
      </p>

      <ExampleBlock
        title="The Fed-Fasted Cycle in Daily Life"
        description="Breakfast (idli-sambar) at 8 AM triggers anabolism — insulin rises, glucose is stored, amino acids drive protein synthesis. By noon, mild catabolism begins — insulin falls, glycogenolysis maintains blood glucose. After lunch (rice-dal-sabzi), anabolism resumes. During overnight sleep (10 PM-7 AM), progressive catabolism draws on glycogen then fat stores. This daily oscillation is completely normal and healthy."
      />

      <h2>The Balance That Determines Body Composition</h2>

      <ul>
        <li><strong>Weight gain (surplus):</strong> Anabolism exceeds catabolism — excess energy stored as fat (and muscle with training).</li>
        <li><strong>Weight loss (deficit):</strong> Catabolism exceeds anabolism — stored fat and some muscle broken down.</li>
        <li><strong>Maintenance:</strong> Anabolism and catabolism roughly balanced over 24 hours.</li>
      </ul>

      <h2>Hormonal Control</h2>

      <p>
        <strong>Insulin</strong> is the master anabolic signal — it promotes glucose uptake,
        glycogen synthesis, protein synthesis, and lipogenesis while inhibiting all catabolic
        processes. <strong>Glucagon</strong> is its fasting counterpart, promoting glycogenolysis
        and gluconeogenesis. <strong>Cortisol</strong> promotes muscle protein breakdown and
        visceral fat storage, especially during chronic stress.
      </p>

      <WarningBlock
        title="Extreme Dieting Maximizes Muscle Loss"
        content="Very low calorie diets (below 800 kcal/day) dramatically increase proteolysis. Losing weight faster than 1% body weight per week results in significantly greater lean mass loss. A moderate deficit of 500-750 kcal/day with adequate protein (1.6-2.2g/kg) and resistance training minimizes muscle catabolism during fat loss."
      />

      <NoteBlock
        title="You Cannot Be Purely Anabolic or Catabolic"
        content="Even in a caloric surplus, some catabolism continues — old proteins are degraded, damaged cells recycled. In a deficit, some anabolic repair continues. These terms describe the NET direction, not an absolute state."
      />

      <ExampleBlock
        title="Optimizing the Balance on an Indian Diet"
        description="To support fat loss while preserving muscle: (1) Include 20-30g protein at each meal — paneer, dal, eggs, chicken, or curd. (2) Allow 4-5 hours between meals for insulin to fall and fat oxidation to occur. (3) Avoid constant snacking on biscuits, namkeen, or sugary chai. (4) Do resistance exercise to maintain anabolic stimulus for muscle. (5) Consider 12-14 hour overnight fast (dinner by 8 PM, breakfast at 8 AM)."
      />

      <h2>Key Takeaways</h2>
      <ul>
        <li>Anabolism builds molecules using energy; catabolism breaks them down releasing energy.</li>
        <li>The fed-fasted cycle naturally oscillates between these states throughout each day.</li>
        <li>Net anabolic balance over time causes weight gain; net catabolic balance causes weight loss.</li>
        <li>Insulin is the primary anabolic hormone; glucagon and cortisol are catabolic.</li>
        <li>Preserving muscle during weight loss requires adequate protein, resistance training, and moderate deficits.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
