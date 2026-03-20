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
    authors: "Hill C, Guarner F, Reid G, et al.",
    year: 2014,
    title: "Expert consensus document: The International Scientific Association for Probiotics and Prebiotics consensus statement on the scope and appropriate use of the term probiotic",
    journal: "Nature Reviews Gastroenterology & Hepatology",
    volume: "11(8)",
    pages: "506-514",
    doi: "10.1038/nrgastro.2014.66"
  },
  {
    id: 2,
    authors: "Senan S, Prajapati JB, Joshi CG",
    year: 2015,
    title: "Feasibility of genome-wide screening for biosafety assessment of probiotics: a case study of Lactobacillus helveticus MTCC 5463",
    journal: "Probiotics and Antimicrobial Proteins",
    volume: "7(4)",
    pages: "249-258",
    doi: "10.1007/s12602-015-9199-1"
  },
  {
    id: 3,
    authors: "Tamang JP, Shin DH, Jung SJ, Chae SW",
    year: 2016,
    title: "Functional properties of microorganisms in fermented foods",
    journal: "Frontiers in Microbiology",
    volume: "7",
    pages: "578",
    doi: "10.3389/fmicb.2016.00578"
  },
  {
    id: 4,
    authors: "Gibson GR, Hutkins R, Sanders ME, et al.",
    year: 2017,
    title: "Expert consensus document: The International Scientific Association for Probiotics and Prebiotics (ISAPP) consensus statement on the definition and scope of prebiotics",
    journal: "Nature Reviews Gastroenterology & Hepatology",
    volume: "14(8)",
    pages: "491-502",
    doi: "10.1038/nrgastro.2017.75"
  },
  {
    id: 5,
    authors: "Sánchez B, Delgado S, Blanco-Míguez A, Lourenço A, Gueimonde M, Margolles A",
    year: 2017,
    title: "Probiotics, gut microbiota, and their influence on host health and disease",
    journal: "Molecular Nutrition & Food Research",
    volume: "61(1)",
    pages: "1600240",
    doi: "10.1002/mnfr.201600240"
  },
  {
    id: 6,
    authors: "Ray M, Ghosh K, Singh S, Mondal KC",
    year: 2016,
    title: "Folk to functional: An explorative overview of rice-based fermented foods and beverages in India",
    journal: "Journal of Ethnic Foods",
    volume: "3(1)",
    pages: "5-18",
    doi: "10.1016/j.jef.2016.02.002"
  },
  {
    id: 7,
    authors: "Wastyk HC, Fragiadakis GK, Perelman D, et al.",
    year: 2021,
    title: "Gut-microbiota-targeted diets modulate human immune status",
    journal: "Cell",
    volume: "184(16)",
    pages: "4137-4153",
    doi: "10.1016/j.cell.2021.06.019"
  }
];

export default function PrebioticsProbioticsIndian() {
  return (
    <div className="prose-health">
      <h1>Prebiotics and Probiotics in the Indian Diet</h1>
      <p>
        India has one of the richest traditions of fermented and fiber-rich foods in
        the world. Long before the terms "probiotic" and "prebiotic" entered scientific
        vocabulary, Indian households relied on dahi, achaar, idli, and kanji as daily
        dietary staples. Modern science now validates what traditional Indian food
        wisdom has practiced for centuries.
      </p>

      <DefinitionBlock
        term="Probiotics"
        definition="Live microorganisms that, when administered in adequate amounts, confer a health benefit on the host. In food, they are found in fermented products where beneficial bacteria remain viable at the time of consumption."
      />

      <DefinitionBlock
        term="Prebiotics"
        definition="Substrates that are selectively utilized by host microorganisms conferring a health benefit. These are primarily non-digestible dietary fibers that serve as food for beneficial gut bacteria, promoting their growth and activity."
      />

      <h2>Dahi and Curd: India's Probiotic Powerhouse</h2>
      <p>
        Dahi (curd/yogurt) is arguably the most consumed fermented food in India,
        present in virtually every regional cuisine. It provides a natural source of
        beneficial Lactobacillus and Streptococcus species.
      </p>

      <EvidenceBlock
        level="moderate"
        source="Senan et al., 2015"
        finding="Indian homemade dahi contains diverse strains of Lactobacillus, including L. helveticus, L. rhamnosus, and L. fermentum, many of which demonstrate probiotic properties including acid tolerance, bile salt resistance, and antimicrobial activity against pathogens."
      />

      <ExampleBlock title="Getting the Most from Dahi">
        <ul>
          <li><strong>Homemade over commercial:</strong> Home-set dahi using a traditional starter (jaman) often contains more diverse and viable bacteria than commercial varieties that may be pasteurized after fermentation.</li>
          <li><strong>Avoid heating:</strong> Adding dahi to hot curries kills beneficial bacteria. Use it as raita, chaas (buttermilk), or lassi consumed at room temperature or chilled.</li>
          <li><strong>Daily consistency:</strong> A small bowl (100-150 ml) of fresh dahi daily is more beneficial than occasional large servings.</li>
          <li><strong>Pair with prebiotics:</strong> Add sliced banana, flaxseeds, or a spoonful of honey to dahi for a synbiotic combination that feeds the very bacteria you are consuming.</li>
        </ul>
      </ExampleBlock>

      <h2>Idli and Dosa: Fermented Grain-Legume Magic</h2>
      <p>
        The idli and dosa batter undergoes natural fermentation by wild Leuconostoc
        mesenteroides and Lactobacillus species, making these South Indian staples both
        probiotic-rich and more nutritious than their unfermented ingredients.
      </p>

      <EvidenceBlock
        level="moderate"
        source="Tamang et al., 2016"
        finding="Fermentation of rice-lentil batter for idli and dosa increases B-vitamin content (particularly B12 and folate), improves protein digestibility, reduces antinutrients like phytic acid, and introduces beneficial lactic acid bacteria. The natural fermentation process produces organic acids that create a favorable environment for probiotic survival."
      />

      <NoteBlock title="Maximizing Fermentation Benefits">
        <p>
          Allow batter to ferment naturally for 12-16 hours rather than using
          commercial instant mixes, which may contain chemical leavening agents instead
          of relying on microbial fermentation. The characteristic sour smell and risen
          volume indicate active microbial activity. While cooking does reduce live
          bacteria, the fermentation process has already improved nutrient bioavailability
          and reduced antinutrients.
        </p>
      </NoteBlock>

      <h2>Traditional Pickles (Achaar) and Kanji</h2>
      <p>
        Indian pickles made through traditional lacto-fermentation — not the oil-and-spice
        preserved commercial varieties — are rich sources of beneficial bacteria.
      </p>

      <EvidenceBlock
        level="moderate"
        source="Ray et al., 2016"
        finding="Traditional Indian fermented foods including kanji (fermented black carrot drink), gundruk (fermented leafy vegetables), and naturally fermented pickles harbor diverse lactic acid bacteria populations with demonstrable probiotic properties, including Lactobacillus plantarum and L. brevis strains with cholesterol-lowering and immunomodulatory capabilities."
      />

      <ExampleBlock title="Traditional Fermented Foods of India">
        <ul>
          <li><strong>Kanji:</strong> A North Indian fermented drink made from black carrots, mustard seeds, and water. Rich in Lactobacillus species and traditionally consumed during Holi season.</li>
          <li><strong>Naturally fermented achaar:</strong> Pickles made with salt, mustard, and sun-drying (not oil-submerged) undergo genuine lacto-fermentation. Mango, lemon, and mixed vegetable varieties are common.</li>
          <li><strong>Ambali:</strong> A South Indian fermented millet porridge, particularly common in Karnataka and Tamil Nadu. Made from ragi (finger millet) and buttermilk.</li>
          <li><strong>Selroti:</strong> A fermented rice-based bread from Northeast India containing naturally occurring lactic acid bacteria.</li>
          <li><strong>Dhokla:</strong> Fermented chickpea flour preparation from Gujarat, where the batter undergoes overnight bacterial fermentation.</li>
        </ul>
      </ExampleBlock>

      <WarningBlock title="Not All Pickles Are Probiotic">
        <p>
          Most commercial Indian pickles (achaar) sold in stores are preserved in oil
          with added preservatives and are not truly fermented. They do not contain
          live beneficial bacteria. For probiotic benefits, seek out traditionally
          fermented pickles made with salt and natural sun-drying, or prepare them at
          home using lacto-fermentation methods. Similarly, many store-bought "probiotic"
          drinks contain high sugar content that may counteract gut health benefits.
        </p>
      </WarningBlock>

      <h2>Prebiotic-Rich Indian Foods</h2>

      <EvidenceBlock
        level="strong"
        source="Gibson et al., 2017"
        finding="Prebiotic fibers including inulin, fructo-oligosaccharides (FOS), and galacto-oligosaccharides (GOS) selectively stimulate the growth of beneficial Bifidobacterium and Lactobacillus species, leading to increased short-chain fatty acid production, improved mineral absorption, enhanced immune function, and favorable modulation of appetite-regulating hormones."
      />

      <ExampleBlock title="Top Indian Prebiotic Foods">
        <ul>
          <li><strong>Raw banana (kachha kela):</strong> Extremely rich in resistant starch that feeds beneficial bacteria. Used in sabzi and chips across South and East India.</li>
          <li><strong>Garlic (lehsun) and onion (pyaaz):</strong> Contain inulin and FOS. Used abundantly in Indian cooking — the tadka tradition ensures daily intake.</li>
          <li><strong>Chicory root (kasni):</strong> One of the richest sources of inulin. Available as a supplement and traditionally used in Unani medicine.</li>
          <li><strong>Whole wheat and barley:</strong> Contain arabinoxylan fibers. Choose stone-ground atta over refined varieties.</li>
          <li><strong>Dals and legumes:</strong> Rajma, chana, moong, and lobia provide galacto-oligosaccharides that feed Bifidobacteria.</li>
          <li><strong>Asparagus (shatavari):</strong> Rich in inulin, used in both cooking and Ayurvedic medicine in India.</li>
          <li><strong>Jackfruit (kathal):</strong> Contains significant prebiotic fiber, especially when consumed raw or semi-ripe.</li>
        </ul>
      </ExampleBlock>

      <h2>Commercial Probiotics vs Traditional Foods</h2>

      <EvidenceBlock
        level="strong"
        source="Wastyk et al., 2021"
        finding="A diet high in fermented foods (six servings per day) significantly increased microbiota diversity and decreased markers of inflammation in a 10-week randomized controlled trial. The fermented food diet outperformed a high-fiber diet in improving microbial diversity, suggesting that regular consumption of diverse fermented foods may be more effective than isolated probiotic supplements."
      />

      <ExampleBlock title="Commercial Probiotics vs Traditional Foods: A Comparison">
        <ul>
          <li><strong>Strain specificity:</strong> Commercial probiotics contain specific, well-studied strains. Traditional foods contain diverse, sometimes unstudied but time-tested microbial communities.</li>
          <li><strong>Viability:</strong> Quality supplements guarantee colony-forming unit (CFU) counts. Traditional foods vary in live bacteria content based on preparation, storage, and freshness.</li>
          <li><strong>Cost:</strong> A daily bowl of homemade dahi costs a fraction of commercial probiotic capsules, which can run Rs 500-2000 per month.</li>
          <li><strong>Whole-food matrix:</strong> Fermented foods provide nutrients, enzymes, and metabolites beyond just live bacteria. A probiotic capsule provides only the organisms.</li>
          <li><strong>Sustainability:</strong> People are far more likely to maintain a daily dahi habit for decades than to continue purchasing supplements indefinitely.</li>
        </ul>
      </ExampleBlock>

      <EvidenceBlock
        level="moderate"
        source="Sánchez et al., 2017"
        finding="While specific probiotic strains have demonstrated benefits in clinical trials for conditions like antibiotic-associated diarrhea and irritable bowel syndrome, evidence for weight loss from probiotic supplementation alone remains inconsistent. The most robust metabolic benefits appear when probiotics are consumed as part of a diverse, fiber-rich diet."
      />

      <NoteBlock title="A Practical Indian Gut Health Plan">
        <p>
          Rather than choosing between supplements and traditional foods, use both
          strategically. Build a daily foundation of dahi or chaas, include fermented
          foods like idli or dhokla several times weekly, and ensure prebiotic fiber
          from onions, garlic, bananas, and dals at every meal. Reserve commercial
          probiotics for recovery after antibiotic courses or during gastrointestinal
          illness, when targeted strains offer specific clinical benefit.
        </p>
      </NoteBlock>

      <ReferenceList references={references} />
    </div>
  );
}
