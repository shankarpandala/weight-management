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
    authors: 'Alberts B, Johnson A, Lewis J, Raff M, Roberts K, Walter P',
    year: 2002,
    title: 'Molecular Biology of the Cell',
    source: '4th edition, Garland Science, New York',
    type: 'foundational',
  },
  {
    authors: 'Rich PR',
    year: 2003,
    title: 'The molecular machinery of Keilin\'s respiratory chain',
    source: 'Biochemical Society Transactions, 31(6), 1095-1105',
    type: 'foundational',
  },
  {
    authors: 'Rolfe DF, Brown GC',
    year: 1997,
    title: 'Cellular energy utilization and molecular origin of standard metabolic rate in mammals',
    source: 'Physiological Reviews, 77(3), 731-758',
    type: 'review',
  },
  {
    authors: 'Mitchell P',
    year: 1961,
    title: 'Coupling of phosphorylation to electron and hydrogen transfer by a chemi-osmotic type of mechanism',
    source: 'Nature, 191(4784), 144-148',
    type: 'foundational',
  },
  {
    authors: 'Befroy DE, Petersen KF, Dufour S, Mason GF, de Graaf RA, Rothman DL, Shulman GI',
    year: 2007,
    title: 'Impaired mitochondrial substrate oxidation in muscle of insulin-resistant offspring of type 2 diabetic patients',
    source: 'Diabetes, 56(5), 1376-1381',
    type: 'clinical',
  },
  {
    authors: 'Misra A, Khurana L',
    year: 2008,
    title: 'Obesity and the metabolic syndrome in developing countries',
    source: 'Journal of Clinical Endocrinology & Metabolism, 93(11 Suppl 1), S9-S30',
    type: 'review',
  },
  {
    authors: 'Spinelli JB, Haigis MC',
    year: 2018,
    title: 'The multifaceted contributions of mitochondria to cellular metabolism',
    source: 'Nature Cell Biology, 20(7), 745-754',
    type: 'review',
  },
];

export default function CellStructureAndEnergy() {
  return (
    <div className="prose-health">
      <h1>Cell Structure & Energy Systems</h1>

      <p>
        Every process in weight management — from burning fat during a morning walk to
        storing energy after a meal of rice and dal — ultimately happens at the level of
        individual cells. Understanding how cells produce, store, and utilize energy
        provides the foundation for comprehending metabolism, body composition, and the
        biological mechanisms underlying weight gain and loss.
      </p>

      <DefinitionBlock
        title="Cellular Metabolism"
        definition="The complete set of chemical reactions that occur within a living cell to maintain life. These reactions are organized into metabolic pathways in which one chemical is transformed into another through a series of enzyme-catalyzed steps, ultimately converting nutrients from food into usable energy and cellular building blocks."
        notation="Cellular energy is measured in units of ATP (adenosine triphosphate). The average human body turns over approximately 40-70 kg of ATP per day, roughly equal to body weight."
      />

      <h2>The Basic Architecture of a Human Cell</h2>

      <p>
        Human cells, despite their microscopic size (typically 10-30 micrometers in diameter),
        are extraordinarily complex structures. Each cell contains specialized compartments
        called organelles, each with distinct functions that contribute to overall cellular
        metabolism and energy balance.
      </p>

      <h3>The Cell Membrane</h3>
      <p>
        The cell membrane is a phospholipid bilayer that forms the boundary of every cell.
        It is selectively permeable, controlling the passage of nutrients like glucose, amino
        acids, and fatty acids into the cell, and waste products like carbon dioxide out. The
        sodium-potassium pump embedded in this membrane alone accounts for 20-40% of basal
        metabolic rate — a remarkable energy expenditure just to maintain ion gradients that
        enable nerve signaling, muscle contraction, and nutrient transport.
      </p>

      <h3>The Cytoplasm</h3>
      <p>
        The cytoplasm is the gel-like fluid filling the cell interior, where many metabolic
        reactions occur. Glycolysis — the initial breakdown of glucose into pyruvate — takes
        place entirely in the cytoplasm. This is the first step in extracting energy from the
        carbohydrates in foods like chapati, rice, or fruit.
      </p>

      <h3>The Nucleus</h3>
      <p>
        The nucleus houses DNA, the genetic blueprint that encodes all the enzymes needed for
        metabolism. Gene expression in the nucleus determines which metabolic enzymes are
        produced, influencing whether a cell preferentially burns glucose or fat, and how
        efficiently it produces energy. Genetic variations in metabolic enzyme genes contribute
        to individual differences in metabolic rate.
      </p>

      <h2>Mitochondria: The Powerhouses of the Cell</h2>

      <p>
        Mitochondria are double-membraned organelles that produce approximately 90% of the
        ATP a cell needs. A typical human cell contains 1,000 to 2,500 mitochondria, though
        this varies dramatically by tissue type. Heart muscle cells may contain 5,000 or more
        mitochondria, reflecting their enormous energy demands, while red blood cells contain
        none at all.
      </p>

      <h3>Mitochondrial Structure</h3>
      <p>
        The mitochondrion has two membranes. The outer membrane is freely permeable to small
        molecules. The inner membrane is highly folded into structures called cristae, which
        dramatically increase its surface area. This inner membrane houses the electron
        transport chain — the molecular machinery responsible for the vast majority of ATP
        production. The space between the two membranes (intermembrane space) and the interior
        (matrix) each serve distinct roles in energy production.
      </p>

      <EvidenceBlock
        title="Mitochondrial Dysfunction and Metabolic Disease"
        finding="Offspring of type 2 diabetic parents showed a 30% reduction in mitochondrial oxidative phosphorylation activity in skeletal muscle, even before developing diabetes themselves, suggesting that impaired mitochondrial function may be an early predisposing factor for metabolic disease."
        study="Assessment of mitochondrial function in insulin-resistant offspring using magnetic resonance spectroscopy"
        source="Befroy et al. (2007) Diabetes"
        details="Using 31P and 13C magnetic resonance spectroscopy, researchers measured mitochondrial substrate oxidation rates in lean, insulin-resistant offspring of type 2 diabetic patients and matched controls. The insulin-resistant group had significantly lower rates of mitochondrial ATP synthesis and substrate oxidation. This finding is particularly relevant for South Asian populations, who have higher rates of insulin resistance and type 2 diabetes, often at lower BMI thresholds than Western populations."
      />

      <h3>Mitochondrial DNA</h3>
      <p>
        Uniquely among organelles, mitochondria contain their own DNA (mtDNA), a remnant of
        their evolutionary origin as independent bacteria that were engulfed by ancestral
        cells approximately 1.5-2 billion years ago. Mitochondrial DNA is inherited exclusively
        from the mother and encodes 13 essential proteins of the electron transport chain.
        Mutations in mtDNA can impair energy production and are associated with mitochondrial
        diseases, age-related metabolic decline, and some forms of obesity.
      </p>

      <h2>ATP: The Universal Energy Currency</h2>

      <DefinitionBlock
        title="Adenosine Triphosphate (ATP)"
        definition="A nucleotide consisting of adenine, ribose, and three phosphate groups. The bond between the second and third phosphate groups is a high-energy bond that, when hydrolyzed (broken by water), releases approximately 7.3 kcal/mol of free energy that can be used to drive cellular work including muscle contraction, active transport, and biosynthesis."
        notation="ATP + H2O -> ADP + Pi + Energy (7.3 kcal/mol). The reverse reaction (ADP + Pi -> ATP) requires energy input, which is provided by the oxidation of nutrients."
      />

      <p>
        ATP functions as a universal energy intermediary. The energy in the food you eat —
        whether from the carbohydrates in a bowl of rice, the protein in paneer, or the fat
        in ghee — is not used directly by cells. Instead, the energy from these macronutrients
        is captured and stored in ATP molecules, which then deliver that energy precisely where
        and when it is needed.
      </p>

      <h3>ATP Turnover</h3>
      <p>
        The human body contains only about 50 grams of ATP at any given moment — enough to
        sustain life for just a few seconds. However, ATP is continuously recycled. Each ATP
        molecule is used and regenerated approximately 500-700 times per day. The total daily
        ATP turnover amounts to roughly 40-70 kg, approximately equal to body weight. During
        intense exercise, ATP turnover in active muscles can increase 100-fold.
      </p>

      <ComparisonTable
        title="ATP Yield from Different Macronutrients"
        headers={['Macronutrient', 'Energy per gram', 'Approximate ATP yield per gram', 'Key food sources (Indian diet)']}
        rows={[
          ['Carbohydrate', '4 kcal', '~38 ATP molecules per glucose (180 g/mol)', 'Rice, chapati, idli, dosa, potatoes'],
          ['Fat', '9 kcal', '~106 ATP molecules per palmitate (256 g/mol)', 'Ghee, coconut oil, mustard oil, groundnuts'],
          ['Protein', '4 kcal', '~30-36 ATP molecules (varies by amino acid)', 'Dal, paneer, chicken, fish, eggs'],
        ]}
      />

      <h2>How Cells Generate ATP</h2>

      <p>
        Cells generate ATP through three major pathways, which operate in sequence and in
        parallel depending on the cell's energy needs and the availability of oxygen.
      </p>

      <h3>1. Glycolysis (Cytoplasm)</h3>
      <p>
        The first stage of glucose breakdown occurs in the cytoplasm and does not require
        oxygen. One molecule of glucose is split into two molecules of pyruvate, yielding a
        net gain of 2 ATP and 2 NADH. While this yield is modest, glycolysis is extremely
        fast and provides rapid energy during the first seconds of intense activity, such as
        sprinting to catch a bus.
      </p>

      <h3>2. The Krebs Cycle (Mitochondrial Matrix)</h3>
      <p>
        Pyruvate from glycolysis enters the mitochondria and is converted to acetyl-CoA,
        which then enters the Krebs cycle (also called the citric acid cycle or TCA cycle).
        Each turn of the cycle produces 1 ATP, 3 NADH, and 1 FADH2. The NADH and FADH2 are
        electron carriers that transport high-energy electrons to the electron transport chain.
      </p>

      <h3>3. Oxidative Phosphorylation (Inner Mitochondrial Membrane)</h3>
      <p>
        This is where the majority of ATP is produced. The electron transport chain uses the
        electrons from NADH and FADH2 to pump protons across the inner mitochondrial membrane,
        creating an electrochemical gradient. Protons flow back through ATP synthase — a
        remarkable molecular turbine — driving the synthesis of ATP from ADP and inorganic
        phosphate. This process generates approximately 34 of the 38 total ATP molecules
        produced per glucose molecule.
      </p>

      <EvidenceBlock
        title="Cellular Energy Utilization"
        finding="In mammals, approximately 90% of oxygen consumption is mitochondrial, and approximately 80% of mitochondrial oxygen consumption is coupled to ATP synthesis. The remaining 20% is accounted for by proton leak across the inner mitochondrial membrane, which contributes to heat generation."
        study="Comprehensive review of cellular energy utilization and standard metabolic rate"
        source="Rolfe & Brown (1997) Physiological Reviews"
        details="This landmark review quantified the major ATP-consuming processes in mammalian cells. The sodium-potassium ATPase (maintaining ion gradients) consumes 19-28% of total ATP, protein synthesis uses 20-30%, calcium cycling uses 4-8%, gluconeogenesis uses 7-10%, and actinomyosin ATPase (muscle tone) uses 2-8%. The remaining ATP supports DNA repair, signal transduction, and other housekeeping functions. These proportions shift dramatically with activity level, disease states, and nutritional status."
      />

      <NoteBlock
        title="Why Fat Yields More Energy Than Carbohydrate"
        content="Fat contains more than twice the energy per gram (9 kcal vs 4 kcal) because fatty acids are more chemically reduced (they have more hydrogen atoms relative to oxygen atoms) than carbohydrates. This means fatty acids can donate more electrons to the electron transport chain, driving more ATP production. A single molecule of palmitic acid (a 16-carbon saturated fat found abundantly in ghee and palm oil) yields approximately 106 ATP molecules, compared to 38 ATP from one glucose molecule. This is also why the body preferentially stores excess energy as fat — it is a far more space-efficient energy reserve."
      />

      <h2>Energy Storage in the Body</h2>

      <p>
        The body maintains energy reserves in three primary forms, each serving different
        roles in meeting moment-to-moment and long-term energy demands.
      </p>

      <h3>ATP and Creatine Phosphate (Immediate)</h3>
      <p>
        The immediate energy reserves — ATP and creatine phosphate stored in muscle — provide
        energy for about 8-10 seconds of maximal effort. These reserves are replenished rapidly
        during rest.
      </p>

      <h3>Glycogen (Short-term)</h3>
      <p>
        Glycogen, a branched polymer of glucose, is stored primarily in liver (approximately
        100 grams) and skeletal muscle (approximately 400 grams). Total glycogen stores provide
        approximately 2,000 kcal of energy — enough to fuel roughly one day of basal metabolic
        activity or 90-120 minutes of moderate-intensity exercise. After a carbohydrate-rich
        Indian meal, insulin stimulates glycogen synthesis to replenish these stores.
      </p>

      <h3>Adipose Tissue (Long-term)</h3>
      <p>
        Fat stored in adipose tissue represents the body's largest energy reserve. An average
        70 kg adult with 15-20% body fat carries approximately 10-14 kg of fat, representing
        roughly 90,000-126,000 kcal of stored energy — theoretically enough to sustain life
        for 40-60 days without food. Understanding that body fat is fundamentally a cellular
        energy storage system helps reframe weight management in biological rather than purely
        aesthetic terms.
      </p>

      <ExampleBlock
        title="Cellular Energy in an Indian Diet Context"
        description="When you eat a typical South Indian breakfast of 2 idlis with sambar, the rice and urad dal starch is broken down to glucose, which enters your cells and undergoes glycolysis in the cytoplasm, then the Krebs cycle and oxidative phosphorylation in mitochondria. The approximately 250 kcal from this meal ultimately produces thousands of ATP molecules that power your morning activities. The coconut chutney provides medium-chain fatty acids that are rapidly absorbed and transported directly to liver mitochondria for beta-oxidation — a more efficient ATP-producing pathway than glucose oxidation. If the meal provides more energy than immediately needed, the excess is converted to glycogen or fat for later use."
      />

      <WarningBlock
        title="Mitochondrial Health and Metabolic Disease"
        content="Impaired mitochondrial function is increasingly recognized as a contributing factor in metabolic syndrome, type 2 diabetes, and obesity. South Asian populations appear to be particularly susceptible to mitochondrial dysfunction in skeletal muscle, which may partly explain the higher rates of insulin resistance observed at lower BMI levels compared to European populations. Lifestyle factors that support mitochondrial health include regular aerobic exercise (which stimulates mitochondrial biogenesis), adequate sleep, and a diet rich in antioxidants and B-vitamins — nutrients abundant in traditional Indian foods like leafy greens, lentils, and turmeric."
      />

      <h2>Key Takeaways</h2>

      <ul>
        <li>
          Cells are the fundamental units where all metabolic processes — energy production,
          storage, and utilization — occur.
        </li>
        <li>
          Mitochondria produce approximately 90% of cellular ATP through oxidative
          phosphorylation, making them central to metabolic rate.
        </li>
        <li>
          ATP is the universal energy currency; the body recycles its own weight in ATP
          every day.
        </li>
        <li>
          Fat yields more ATP per gram than carbohydrate, which is why the body preferentially
          stores excess energy as adipose tissue.
        </li>
        <li>
          Mitochondrial health is critical for metabolic function, and dysfunction is
          linked to insulin resistance and obesity — particularly relevant for South
          Asian populations.
        </li>
        <li>
          Regular exercise, adequate nutrition, and healthy sleep support mitochondrial
          function and overall cellular energy efficiency.
        </li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
