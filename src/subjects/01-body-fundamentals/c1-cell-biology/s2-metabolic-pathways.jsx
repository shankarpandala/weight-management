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
    authors: 'Berg JM, Tymoczko JL, Stryer L',
    year: 2002,
    title: 'Biochemistry',
    source: '5th edition, W.H. Freeman, New York',
    type: 'foundational',
  },
  {
    authors: 'Krebs HA, Johnson WA',
    year: 1937,
    title: 'The role of citric acid in intermediate metabolism in animal tissues',
    source: 'Enzymologia, 4, 148-156',
    type: 'foundational',
  },
  {
    authors: 'Jeukendrup AE',
    year: 2002,
    title: 'Regulation of fat metabolism in skeletal muscle',
    source: 'Annals of the New York Academy of Sciences, 967, 217-235',
    type: 'review',
  },
  {
    authors: 'Spriet LL, Watt MJ',
    year: 2003,
    title: 'Regulatory mechanisms in the interaction between carbohydrate and lipid oxidation during exercise',
    source: 'Acta Physiologica Scandinavica, 178(4), 443-452',
    type: 'review',
  },
  {
    authors: 'Randle PJ, Garland PB, Hales CN, Newsholme EA',
    year: 1963,
    title: 'The glucose fatty-acid cycle: its role in insulin sensitivity and the metabolic disturbances of diabetes mellitus',
    source: 'The Lancet, 281(7285), 785-789',
    type: 'foundational',
  },
  {
    authors: 'Kurpad AV, Muthayya S, Vaz M',
    year: 2005,
    title: 'Consequences of inadequate food energy and negative energy balance in humans',
    source: 'Public Health Nutrition, 8(7A), 1053-1076',
    type: 'review',
  },
  {
    authors: 'Nelson DL, Cox MM',
    year: 2017,
    title: 'Lehninger Principles of Biochemistry',
    source: '7th edition, W.H. Freeman, New York',
    type: 'foundational',
  },
];

export default function MetabolicPathways() {
  return (
    <div className="prose-health">
      <h1>Metabolic Pathways</h1>

      <p>
        The food you eat — whether a plate of biryani, a bowl of dal-chawal, or a handful
        of almonds — must be systematically broken down through a series of chemical reactions
        before your cells can use its energy. These reactions are organized into metabolic
        pathways: ordered sequences of enzyme-catalyzed steps that convert nutrients into ATP,
        the universal energy currency. Understanding these pathways reveals why different
        macronutrients are metabolized differently and how the body prioritizes fuel sources.
      </p>

      <DefinitionBlock
        title="Metabolic Pathway"
        definition="A linked series of enzyme-catalyzed chemical reactions occurring within a cell, in which the product of one reaction serves as the substrate for the next. Metabolic pathways are tightly regulated by enzyme activity, substrate availability, and hormonal signals to match energy production to energy demand."
        notation="Major energy-producing pathways include glycolysis, the Krebs cycle (citric acid cycle), beta-oxidation, and oxidative phosphorylation. These pathways are interconnected through shared intermediates such as acetyl-CoA, NADH, and FADH2."
      />

      <h2>Glycolysis: The Gateway to Energy Metabolism</h2>

      <p>
        Glycolysis (from Greek glykys, meaning sweet, and lysis, meaning splitting) is the
        first pathway in glucose metabolism. It occurs in the cytoplasm of every cell in the
        body and does not require oxygen, making it the most ancient and universally conserved
        metabolic pathway across all living organisms.
      </p>

      <h3>The Steps of Glycolysis</h3>
      <p>
        Glycolysis consists of 10 sequential enzyme-catalyzed reactions that convert one
        6-carbon glucose molecule into two 3-carbon pyruvate molecules. The pathway has two
        phases:
      </p>

      <ul>
        <li>
          <strong>Energy investment phase (steps 1-5):</strong> Two ATP molecules are
          consumed to phosphorylate glucose and split it into two 3-carbon intermediates.
          This initial investment is necessary to destabilize the glucose molecule and
          prepare it for energy extraction.
        </li>
        <li>
          <strong>Energy payoff phase (steps 6-10):</strong> Four ATP molecules and two
          NADH molecules are produced. Since 2 ATP were invested, the net yield is 2 ATP
          and 2 NADH per glucose molecule.
        </li>
      </ul>

      <h3>Regulation of Glycolysis</h3>
      <p>
        Three key enzymes regulate glycolytic flux: hexokinase (step 1), phosphofructokinase-1
        or PFK-1 (step 3), and pyruvate kinase (step 10). PFK-1 is the most important
        regulatory point — it is activated by AMP (indicating low cellular energy) and
        inhibited by ATP and citrate (indicating adequate energy). This elegant feedback
        mechanism ensures that glycolysis speeds up when energy is needed and slows down
        when energy is plentiful.
      </p>

      <EvidenceBlock
        title="The Glucose-Fatty Acid Cycle"
        finding="When fatty acid oxidation increases (as during fasting or low-carbohydrate diets), the resulting elevation of acetyl-CoA and citrate levels inhibits glycolysis at the PFK-1 step. Conversely, high glucose availability and insulin suppress fat oxidation. This reciprocal regulation means the body preferentially burns one fuel or the other, not both simultaneously at maximum rates."
        study="The glucose fatty-acid cycle and its role in insulin sensitivity"
        source="Randle et al. (1963) The Lancet"
        details="Philip Randle's landmark discovery showed that glucose and fatty acid oxidation are mutually inhibitory through biochemical feedback mechanisms. When fatty acid oxidation is high (during fasting or after a high-fat meal), citrate accumulates and inhibits PFK-1, slowing glycolysis. Simultaneously, acetyl-CoA inhibits pyruvate dehydrogenase, preventing pyruvate from entering the Krebs cycle. This mechanism explains why high-fat diets can impair glucose tolerance — a finding with significant implications for Indian populations where dietary fat patterns are rapidly shifting."
      />

      <h3>The Fate of Pyruvate</h3>
      <p>
        After glycolysis, pyruvate faces one of three fates depending on oxygen availability
        and the cell's metabolic state:
      </p>

      <ComparisonTable
        title="Three Fates of Pyruvate"
        headers={['Fate', 'Condition', 'Product', 'Significance']}
        rows={[
          ['Aerobic oxidation', 'Oxygen available (most cells at rest)', 'Acetyl-CoA (enters Krebs cycle)', 'Maximum ATP yield; primary pathway for sustained energy'],
          ['Lactic acid fermentation', 'Oxygen limited (intense exercise)', 'Lactate', 'Rapid but limited ATP; allows glycolysis to continue'],
          ['Ethanol fermentation', 'Yeast (not human cells)', 'Ethanol + CO2', 'Basis of fermented foods like idli/dosa batter, kanji'],
        ]}
      />

      <NoteBlock
        title="Lactate Is Not a Waste Product">
        Contrary to the long-held belief that lactate is a harmful metabolic waste that causes muscle soreness, modern research has shown that lactate is actually a valuable fuel. Lactate produced by working muscles is transported via the blood to the liver, where it is converted back to glucose through the Cori cycle. It is also directly oxidized by the heart and resting skeletal muscles. During moderate exercise, lactate accounts for a significant portion of cardiac fuel. The burning sensation during intense exercise is caused by hydrogen ion accumulation (acidosis), not lactate itself.
      </NoteBlock>

      <h2>The Krebs Cycle (Citric Acid Cycle)</h2>

      <p>
        The Krebs cycle, discovered by Hans Krebs in 1937, is the central metabolic hub
        where acetyl-CoA from carbohydrate, fat, and protein metabolism is oxidized to
        carbon dioxide. It occurs in the mitochondrial matrix and serves both catabolic
        (energy-extracting) and anabolic (biosynthetic) functions.
      </p>

      <DefinitionBlock
        title="The Krebs Cycle"
        definition="A cyclic series of eight enzyme-catalyzed reactions in the mitochondrial matrix that oxidize the acetyl group of acetyl-CoA to two molecules of CO2, generating 3 NADH, 1 FADH2, and 1 GTP (equivalent to 1 ATP) per turn. The cycle is the final common pathway for the oxidation of all fuel molecules."
        notation="Also known as the citric acid cycle (because citrate is the first product) or the tricarboxylic acid (TCA) cycle. Two turns are required per glucose molecule since glycolysis produces 2 pyruvate, each yielding 1 acetyl-CoA."
      />

      <h3>Key Steps and Products</h3>
      <p>
        The cycle begins when acetyl-CoA (2 carbons) combines with oxaloacetate (4 carbons)
        to form citrate (6 carbons). Through a series of oxidation, decarboxylation, and
        rearrangement reactions, two carbon atoms are released as CO2, and the 4-carbon
        oxaloacetate is regenerated to start the cycle again. Along the way, the high-energy
        electrons removed from the carbon backbone are captured by NAD+ and FAD, forming
        NADH and FADH2 — the primary electron carriers that feed the electron transport chain.
      </p>

      <h3>The Krebs Cycle as a Metabolic Crossroads</h3>
      <p>
        The Krebs cycle is not merely a catabolic pathway. Its intermediates serve as starting
        points for biosynthetic reactions: citrate is exported for fatty acid synthesis,
        alpha-ketoglutarate is used for amino acid synthesis, succinyl-CoA feeds into heme
        production, and oxaloacetate is a substrate for gluconeogenesis. This dual role
        explains why the cycle must continue running even when energy is plentiful — its
        intermediates are constantly being siphoned off for biosynthesis and must be
        replenished (a process called anaplerosis).
      </p>

      <ExampleBlock
        title="Anaplerosis in an Indian Diet"
        problem="After eating a protein-rich meal of rajma (kidney beans) and rice, certain amino acids from the rajma protein — particularly glutamate and aspartate — can be converted into Krebs cycle intermediates (alpha-ketoglutarate and oxaloacetate, respectively). This anaplerotic reaction 'tops up' the cycle, ensuring it keeps running efficiently even as intermediates are diverted to other biosynthetic pathways. This is one reason why combining protein with carbohydrate (as in the traditional rajma-chawal combination) provides metabolically complementary nutrients."
      />

      <h2>Beta-Oxidation: Burning Fat for Energy</h2>

      <p>
        Beta-oxidation is the pathway by which fatty acids are broken down in the mitochondrial
        matrix to generate acetyl-CoA, NADH, and FADH2. It is the primary pathway for energy
        production during fasting, prolonged exercise, and low-carbohydrate dietary states.
      </p>

      <h3>How Beta-Oxidation Works</h3>
      <p>
        Long-chain fatty acids from dietary fat (such as the oleic acid in groundnut oil or
        the lauric acid in coconut oil) are first activated to fatty acyl-CoA in the cytoplasm,
        then transported into the mitochondria via the carnitine shuttle. Inside the
        mitochondria, the fatty acyl chain is progressively shortened by 2 carbons per cycle,
        with each cycle yielding 1 acetyl-CoA, 1 NADH, and 1 FADH2. A 16-carbon fatty acid
        (palmitate) undergoes 7 cycles of beta-oxidation, producing 8 acetyl-CoA molecules
        that enter the Krebs cycle.
      </p>

      <EvidenceBlock
        title="Fat Oxidation During Exercise"
        finding="Maximum fat oxidation rates occur at exercise intensities between 45-65% of VO2max, with rates of approximately 0.3-0.6 g/min in trained individuals. At higher exercise intensities, carbohydrate becomes the dominant fuel as glycolytic flux increases and inhibits fatty acid entry into mitochondria."
        study="Review of fat metabolism regulation during exercise"
        source="Jeukendrup (2002) Annals of the New York Academy of Sciences"
        details="This review established the concept of 'Fatmax' — the exercise intensity at which fat oxidation is maximal. Below this intensity, total energy expenditure is low despite a high percentage of fat oxidation. Above it, carbohydrate oxidation dominates. For most people, brisk walking or light jogging falls within the Fatmax zone. This has practical implications for weight management: moderate-intensity exercise may oxidize more total fat per session than brief high-intensity efforts, though total caloric expenditure and post-exercise metabolic effects must also be considered."
      />

      <h2>Oxidative Phosphorylation: The ATP Factory</h2>

      <p>
        Oxidative phosphorylation is the process by which the energy stored in NADH and FADH2
        is used to synthesize ATP. It occurs on the inner mitochondrial membrane and accounts
        for approximately 90% of all ATP produced by the cell.
      </p>

      <h3>The Electron Transport Chain</h3>
      <p>
        The electron transport chain (ETC) consists of four large protein complexes (I-IV)
        and two mobile electron carriers (ubiquinone and cytochrome c) embedded in the inner
        mitochondrial membrane. Electrons from NADH enter at Complex I, while electrons from
        FADH2 enter at Complex II. As electrons pass through the chain, the energy released
        is used to pump protons (H+) from the mitochondrial matrix into the intermembrane
        space, creating an electrochemical gradient.
      </p>

      <h3>ATP Synthase: A Molecular Turbine</h3>
      <p>
        ATP synthase (sometimes called Complex V) is a remarkable rotary molecular machine.
        As protons flow back down their concentration gradient through ATP synthase, the
        energy drives the rotation of the enzyme's central stalk at approximately 100
        revolutions per second, catalyzing the condensation of ADP and inorganic phosphate
        into ATP. Each full rotation produces 3 ATP molecules. This mechanism, elucidated by
        Peter Mitchell's chemiosmotic hypothesis, earned him the Nobel Prize in 1978.
      </p>

      <ComparisonTable
        title="ATP Yield Summary per Glucose Molecule"
        headers={['Pathway', 'Location', 'Direct ATP', 'NADH produced', 'FADH2 produced', 'Total ATP equivalent']}
        rows={[
          ['Glycolysis', 'Cytoplasm', '2 (net)', '2', '0', '~7'],
          ['Pyruvate oxidation', 'Mitochondria', '0', '2', '0', '~5'],
          ['Krebs cycle (x2)', 'Mitochondria', '2', '6', '2', '~20'],
          ['Oxidative phosphorylation', 'Inner membrane', '~26', '—', '—', '~26'],
          ['TOTAL', '—', '—', '—', '—', '~30-32'],
        ]}
      />

      <NoteBlock
        title="Why 30-32 and Not 38 ATP?">
        Older textbooks cite 36-38 ATP per glucose, but modern estimates are 30-32. The revision reflects the energy cost of transporting NADH produced in the cytoplasm into mitochondria (via the malate-aspartate or glycerol-3-phosphate shuttle) and the fact that the proton gradient is also used for purposes other than ATP synthesis, such as transporting pyruvate, phosphate, and calcium into the mitochondria. The exact yield also depends on the efficiency of coupling between electron transport and ATP synthesis, which varies between tissues and individuals.
      </NoteBlock>

      <h2>Integration of Metabolic Pathways</h2>

      <p>
        In the living body, these pathways do not operate in isolation. They are tightly
        integrated and regulated by hormonal signals — primarily insulin, glucagon,
        epinephrine, and cortisol — that respond to nutritional state, physical activity,
        and stress.
      </p>

      <h3>Fed State (After a Meal)</h3>
      <p>
        After a carbohydrate-rich meal (such as rice, roti, or idli), blood glucose rises
        and insulin is secreted. Insulin promotes glucose uptake by cells, stimulates
        glycolysis and glycogen synthesis, and suppresses beta-oxidation and gluconeogenesis.
        The metabolic priority is to store incoming energy as glycogen and fat.
      </p>

      <h3>Fasted State (Between Meals)</h3>
      <p>
        As blood glucose falls between meals, glucagon is released. Glucagon stimulates
        glycogenolysis (glycogen breakdown) and gluconeogenesis in the liver to maintain
        blood glucose. In peripheral tissues, beta-oxidation increases as fatty acids
        become the primary fuel source. During prolonged fasting (beyond 24-48 hours), ketone
        body production from fat metabolism provides an alternative fuel for the brain.
      </p>

      <ExampleBlock
        title="Metabolic Pathways and Indian Meal Timing"
        problem="The traditional Indian practice of eating an early dinner (by 7-8 PM) and having a gap before breakfast creates a natural overnight fasting period of 10-12 hours. During this period, the body transitions from the fed state (glycolysis and lipogenesis dominant) to the fasted state (glycogenolysis, gluconeogenesis, and beta-oxidation dominant). This metabolic switch allows the body to access fat stores for energy. Research suggests that this extended overnight fast — aligned with circadian rhythms — may improve insulin sensitivity, a finding particularly relevant for Indian populations with high rates of insulin resistance."
      />

      <WarningBlock
        title="Metabolic Inflexibility and Disease">
        Metabolic flexibility refers to the body's ability to efficiently switch between burning carbohydrates and fat based on availability. In metabolic syndrome and type 2 diabetes — conditions disproportionately prevalent in South Asian populations — this flexibility is impaired. Cells become less efficient at oxidizing fatty acids and less responsive to insulin's signal to take up glucose, leading to elevated blood glucose and blood lipids simultaneously. Regular physical activity and avoiding chronic caloric excess are the most effective strategies for maintaining metabolic flexibility.
      </WarningBlock>

      <h2>Key Takeaways</h2>

      <ul>
        <li>
          Glycolysis breaks glucose into pyruvate in the cytoplasm, yielding a modest 2
          net ATP without requiring oxygen.
        </li>
        <li>
          The Krebs cycle oxidizes acetyl-CoA to CO2 in the mitochondria, generating
          electron carriers (NADH, FADH2) and serving as a metabolic hub connecting
          carbohydrate, fat, and protein metabolism.
        </li>
        <li>
          Oxidative phosphorylation on the inner mitochondrial membrane produces the
          majority of ATP (~26 of ~30-32 per glucose) through the electron transport
          chain and ATP synthase.
        </li>
        <li>
          Beta-oxidation breaks down fatty acids into acetyl-CoA, yielding more ATP per
          carbon than glucose oxidation, which is why fat is a more energy-dense fuel.
        </li>
        <li>
          The body switches between fuel sources based on hormonal signals (insulin,
          glucagon), nutritional state (fed vs fasted), and activity level.
        </li>
        <li>
          Metabolic flexibility — the ability to efficiently switch between fuels — is
          essential for metabolic health and is impaired in obesity and diabetes.
        </li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
