import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock';
import EvidenceBlock from '../../../components/content/EvidenceBlock';
import ExampleBlock from '../../../components/content/ExampleBlock';
import NoteBlock from '../../../components/content/NoteBlock';
import WarningBlock from '../../../components/content/WarningBlock';
import ReferenceList from '../../../components/content/ReferenceList';

const references = [
  {
    id: 1,
    authors: "Yano JM, Yu K, Donaldson GP, et al.",
    year: 2015,
    title: "Indigenous bacteria from the gut microbiota regulate host serotonin biosynthesis",
    journal: "Cell",
    volume: "161(2)",
    pages: "264-276",
    doi: "10.1016/j.cell.2015.02.047"
  },
  {
    id: 2,
    authors: "Bravo JA, Forsythe P, Chew MV, et al.",
    year: 2011,
    title: "Ingestion of Lactobacillus strain regulates emotional behavior and central GABA receptor expression in a mouse via the vagus nerve",
    journal: "Proceedings of the National Academy of Sciences",
    volume: "108(38)",
    pages: "16050-16055",
    doi: "10.1073/pnas.1102999108"
  },
  {
    id: 3,
    authors: "Foster JA, Rinaman L, Cryan JF",
    year: 2017,
    title: "Stress & the gut-brain axis: Regulation by the microbiome",
    journal: "Neurobiology of Stress",
    volume: "7",
    pages: "124-136",
    doi: "10.1016/j.ynstr.2017.03.001"
  },
  {
    id: 4,
    authors: "Valles-Colomer M, Falony G, Darzi Y, et al.",
    year: 2019,
    title: "The neuroactive potential of the human gut microbiota in quality of life and depression",
    journal: "Nature Microbiology",
    volume: "4(4)",
    pages: "623-632",
    doi: "10.1038/s41564-018-0337-x"
  },
  {
    id: 5,
    authors: "Dinan TG, Cryan JF",
    year: 2017,
    title: "The microbiome-gut-brain axis in health and disease",
    journal: "Gastroenterology Clinics of North America",
    volume: "46(1)",
    pages: "77-89",
    doi: "10.1016/j.gtc.2016.09.007"
  },
  {
    id: 6,
    authors: "Torres-Fuentes C, Schellekens H, Dinan TG, Cryan JF",
    year: 2017,
    title: "The microbiota-gut-brain axis in obesity",
    journal: "The Lancet Gastroenterology & Hepatology",
    volume: "2(10)",
    pages: "747-756",
    doi: "10.1016/S2468-1253(17)30147-4"
  },
  {
    id: 7,
    authors: "Sarkar A, Lehto SM, Harty S, Dinan TG, Cryan JF, Burnet PWJ",
    year: 2016,
    title: "Psychobiotics and the manipulation of bacteria-gut-brain signals",
    journal: "Trends in Neurosciences",
    volume: "39(11)",
    pages: "763-781",
    doi: "10.1016/j.tins.2016.09.002"
  }
];

export default function GutBrainAxis() {
  return (
    <div className="prose-health">
      <h1>The Gut-Brain Axis</h1>
      <p>
        Your gut and brain are in constant, bidirectional communication through a complex
        network of nerves, hormones, and microbial metabolites known as the gut-brain
        axis. This connection explains why stress causes stomach upset, why certain foods
        affect mood, and why the state of your gut microbiome can influence everything
        from anxiety to food cravings.
      </p>

      <DefinitionBlock
        term="Gut-Brain Axis"
        definition="The bidirectional communication network between the gastrointestinal tract and the central nervous system, involving the vagus nerve, the enteric nervous system (containing over 500 million neurons), the hypothalamic-pituitary-adrenal (HPA) axis, immune signaling pathways, and microbial metabolites. This system allows the gut to influence brain function and vice versa."
      />

      <h2>The Vagus Nerve: A Direct Highway</h2>
      <p>
        The vagus nerve — the longest cranial nerve in the body — serves as the primary
        physical connection between the gut and brain, carrying information in both
        directions at remarkable speed.
      </p>

      <EvidenceBlock
        level="strong"
        source="Bravo et al., 2011"
        finding="Mice fed Lactobacillus rhamnosus showed reduced anxiety-like and depression-like behavior along with altered GABA receptor expression in the brain. Critically, these effects were completely abolished when the vagus nerve was severed, proving that the vagus nerve is the essential communication pathway through which gut bacteria influence brain chemistry and behavior."
      />

      <NoteBlock title="Your Gut Has Its Own Nervous System">
        <p>
          The enteric nervous system — sometimes called the "second brain" — contains
          over 500 million neurons lining the gastrointestinal tract. This neural
          network can operate independently of the brain, controlling digestion
          autonomously, but it constantly sends information to the brain via the vagus
          nerve. This is why gut disturbances affect mental state and why mental stress
          manifests as digestive symptoms.
        </p>
      </NoteBlock>

      <h2>Serotonin: The Gut's Mood Chemical</h2>
      <p>
        Serotonin is widely known as a brain neurotransmitter affecting mood, sleep,
        and appetite. What most people do not realize is that the vast majority of
        serotonin is produced not in the brain, but in the gut.
      </p>

      <EvidenceBlock
        level="strong"
        source="Yano et al., 2015"
        finding="Approximately 95% of the body's serotonin is produced by enterochromaffin cells in the gut, and this production is directly regulated by gut bacteria. Spore-forming bacteria (primarily Clostridia species) promote serotonin biosynthesis by signaling to enterochromaffin cells. Germ-free mice had 60% less circulating serotonin, which was restored upon colonization with spore-forming bacteria."
      />

      <ExampleBlock title="How Gut Serotonin Affects Weight">
        <ul>
          <li><strong>Appetite regulation:</strong> Gut-derived serotonin influences satiety signaling, helping you feel full after meals. Disrupted production can lead to persistent hunger.</li>
          <li><strong>Carbohydrate cravings:</strong> Low serotonin levels trigger cravings for carbohydrate-rich foods — sweets, rice, bread — because carbohydrate consumption temporarily boosts serotonin. This explains the "comfort food" response.</li>
          <li><strong>Mood-driven eating:</strong> When gut serotonin production is impaired, mood dips can trigger emotional eating as the body seeks serotonin-boosting foods.</li>
          <li><strong>Gut motility:</strong> Serotonin regulates intestinal movement. Dysregulated production contributes to both constipation and diarrhea, affecting nutrient absorption and bloating.</li>
        </ul>
      </ExampleBlock>

      <h2>The Stress-Gut Connection</h2>
      <p>
        Chronic stress — from work pressure, financial worries, relationship difficulties,
        or the demanding pace of urban Indian life — profoundly disrupts the gut-brain
        axis, creating a vicious cycle that promotes weight gain.
      </p>

      <EvidenceBlock
        level="strong"
        source="Foster et al., 2017"
        finding="Chronic stress activates the hypothalamic-pituitary-adrenal (HPA) axis, increasing cortisol production, which alters gut permeability ('leaky gut'), reduces microbial diversity, shifts bacterial composition toward pro-inflammatory species, and impairs gut barrier function. These gut changes then send inflammatory signals back to the brain, further amplifying the stress response in a self-reinforcing cycle."
      />

      <ExampleBlock title="The Stress-Gut-Weight Gain Cycle">
        <ul>
          <li><strong>Step 1:</strong> Chronic stress (deadlines, traffic, family pressures) elevates cortisol.</li>
          <li><strong>Step 2:</strong> Elevated cortisol disrupts gut bacterial balance and increases intestinal permeability.</li>
          <li><strong>Step 3:</strong> Disrupted gut bacteria reduce serotonin production and increase inflammatory signals to the brain.</li>
          <li><strong>Step 4:</strong> Low serotonin and increased inflammation trigger cravings for high-calorie comfort foods — samosas, mithai, fried snacks.</li>
          <li><strong>Step 5:</strong> Overeating further disrupts gut bacteria, and the cycle repeats, promoting visceral fat accumulation.</li>
        </ul>
      </ExampleBlock>

      <h2>Microbiome, Mood, and Cravings</h2>

      <EvidenceBlock
        level="moderate"
        source="Valles-Colomer et al., 2019"
        finding="In a large population-level study, specific bacterial genera were consistently associated with mental health indicators. Faecalibacterium and Coprococcus bacteria — both butyrate producers — were positively associated with higher quality of life, while their depletion was linked to depression, even after controlling for antidepressant use."
      />

      <EvidenceBlock
        level="moderate"
        source="Torres-Fuentes et al., 2017"
        finding="Gut bacteria can influence food preferences and cravings through multiple mechanisms: producing neurotransmitter precursors, generating appetite-regulating hormones, manipulating taste receptors, and creating metabolites that act on reward circuits in the brain. Bacteria that thrive on sugar can effectively increase host cravings for sweet foods to ensure their own nutrient supply."
      />

      <WarningBlock title="Your Cravings May Not Be Entirely 'Yours'">
        <p>
          Research suggests that gut bacteria can manipulate host eating behavior
          to favor their own survival. Bacteria that feed on sugar promote cravings
          for sugar. Bacteria that thrive on fiber promote desire for vegetables.
          When you crave a specific food intensely, it may partly reflect the demands
          of your dominant gut bacteria rather than a genuine nutritional need. Shifting
          your diet gradually reshapes which bacteria dominate, which in turn changes
          what you crave.
        </p>
      </WarningBlock>

      <h2>Psychobiotics: Bacteria for the Brain</h2>

      <DefinitionBlock
        term="Psychobiotics"
        definition="Live organisms (probiotics) or substrates that support their growth (prebiotics) that, when ingested in adequate quantities, produce a health benefit in patients suffering from psychiatric or neurological illness, by influencing bacteria-brain relationships."
      />

      <EvidenceBlock
        level="moderate"
        source="Sarkar et al., 2016"
        finding="Certain probiotic strains, particularly Lactobacillus and Bifidobacterium species, demonstrate anxiolytic and antidepressant effects in both animal models and early human trials. These effects are mediated through modulation of the HPA axis, reduction of pro-inflammatory cytokines, and production of neuroactive metabolites including GABA, dopamine precursors, and short-chain fatty acids."
      />

      <h2>The Indian Perspective on Gut-Mind Connection</h2>
      <p>
        Indian traditional medicine systems recognized the gut-mind connection
        centuries before modern science described the gut-brain axis.
      </p>

      <ExampleBlock title="Traditional Indian Wisdom Meets Modern Science">
        <ul>
          <li><strong>Ayurvedic concept of Agni:</strong> Ayurveda considers digestive fire (Agni) central to both physical and mental health. Modern science confirms that gut dysfunction affects neurological function.</li>
          <li><strong>Sattvic diet principles:</strong> Fresh, whole, minimally processed foods recommended in yogic traditions align with diets shown to support microbial diversity and mental health.</li>
          <li><strong>Mindful eating practices:</strong> Eating slowly and without distraction, emphasized in Indian traditions, activates vagal pathways that improve both digestion and emotional regulation.</li>
          <li><strong>Spice as medicine:</strong> Turmeric (curcumin), ashwagandha, and triphala — traditional Indian remedies — show prebiotic and anti-inflammatory properties that benefit the gut-brain axis.</li>
          <li><strong>Pranayama and vagal tone:</strong> Deep breathing practices stimulate the vagus nerve, directly improving gut-brain communication. This may partly explain the mental health benefits of yogic breathing.</li>
        </ul>
      </ExampleBlock>

      <EvidenceBlock
        level="moderate"
        source="Dinan & Cryan, 2017"
        finding="The microbiome-gut-brain axis represents a paradigm shift in understanding mental health and metabolic disease. Interventions that target the gut microbiome — through diet, probiotics, prebiotics, and stress management — offer a novel therapeutic approach for conditions including obesity, depression, and anxiety, with the potential for fewer side effects than pharmaceutical interventions."
      />

      <NoteBlock title="Practical Steps to Support Your Gut-Brain Axis">
        <p>
          Eat a diverse, fiber-rich diet with traditional Indian fermented foods daily.
          Practice stress management through pranayama, meditation, or regular walking.
          Prioritize seven to eight hours of sleep, as sleep deprivation disrupts both
          gut bacteria and brain function. Eat meals at consistent times to support
          circadian rhythms in gut bacteria. When feeling strong cravings, pause and
          consider whether you are genuinely hungry or responding to stress — this
          simple awareness engages the prefrontal cortex and can interrupt the
          gut-driven craving cycle.
        </p>
      </NoteBlock>

      <h2>Key Takeaways</h2>
      <ExampleBlock title="Understanding the Gut-Brain Connection for Weight Management">
        <ul>
          <li>Your gut produces 95% of your serotonin, directly influencing mood, appetite, and food cravings.</li>
          <li>Chronic stress damages gut bacteria, which further worsens mood and drives comfort eating — a vicious cycle.</li>
          <li>Gut bacteria can actively influence your food preferences to serve their own survival needs.</li>
          <li>Breaking the cycle requires addressing both ends: improve gut bacteria through diet and reduce stress through mindful practices.</li>
          <li>Indian traditions of fermented foods, mindful eating, yogic breathing, and whole-food diets naturally support healthy gut-brain communication.</li>
        </ul>
      </ExampleBlock>

      <ReferenceList references={references} />
    </div>
  );
}
