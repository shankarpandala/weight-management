import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

const references = [
  { authors: 'Whitcomb DC, Lowe ME', year: 2007, title: 'Human pancreatic digestive enzymes', source: 'Digestive Diseases and Sciences, 52(1), 1-17', type: 'review' },
  { authors: 'Ianiro G, Pecere S, Giorgio V, Gasbarrini A, Cammarota G', year: 2016, title: 'Digestive enzyme supplementation in gastrointestinal diseases', source: 'Current Drug Metabolism, 17(2), 187-193', type: 'review' },
  { authors: 'Roxas M', year: 2008, title: 'The role of enzyme supplementation in digestive disorders', source: 'Alternative Medicine Review, 13(4), 307-314', type: 'review' },
  { authors: 'Bauer E, Jakob S, Mosenthin R', year: 2005, title: 'Principles of physiology of lipid digestion', source: 'Asian-Australasian Journal of Animal Sciences, 18(2), 282-295', type: 'foundational' },
  { authors: 'Swagerty DL, Walling AD, Klein RM', year: 2002, title: 'Lactose intolerance', source: 'American Family Physician, 65(9), 1845-1850', type: 'review' },
];

export default function EnzymesSecretions() {
  return (
    <div className="prose-health">
      <h1>Enzymes & Digestive Secretions</h1>

      <p>
        Digestive enzymes are biological catalysts that break macronutrients into absorbable units.
        Without them, the dal, rice, and chapati you eat would pass largely undigested. Each enzyme
        is highly specific, acting on one type of chemical bond at a particular pH.
      </p>

      <DefinitionBlock
        title="Digestive Enzymes"
        definition="Proteins that catalyze the hydrolysis of food macromolecules into monomeric units: monosaccharides from carbohydrates, amino acids from proteins, and fatty acids plus glycerol from fats."
        notation="Classified by substrate: amylases (starch), proteases (protein), lipases (fat), nucleases (nucleic acids)."
      />

      <h2>Carbohydrate-Digesting Enzymes</h2>

      <h3>Salivary Amylase (Ptyalin)</h3>
      <p>
        Produced by salivary glands, it breaks starch into maltose at pH 6.5-7.0. Inactivated in
        the acidic stomach, so its action is limited to chewing time. Thorough chewing can digest
        30-40% of starch in the mouth.
      </p>

      <h3>Pancreatic Amylase</h3>
      <p>
        The major starch-digesting enzyme. Completes starch breakdown into maltose, maltotriose,
        and alpha-limit dextrins at pH 7-8 in the duodenum.
      </p>

      <h3>Brush Border Enzymes</h3>
      <p>
        Maltase, sucrase, lactase, and isomaltase on intestinal cell surfaces convert disaccharides
        into monosaccharides. Lactase deficiency — affecting 60-80% of Indian adults — causes
        undigested lactose to be fermented by bacteria, producing gas, bloating, and diarrhea.
      </p>

      <h2>Protein-Digesting Enzymes (Proteases)</h2>

      <h3>Pepsin</h3>
      <p>
        The stomach&apos;s primary protease, secreted as inactive pepsinogen and activated by HCl.
        Works at pH 1.5-2.5, breaking proteins into large peptide fragments.
      </p>

      <h3>Trypsin and Chymotrypsin</h3>
      <p>
        Pancreatic proteases secreted as inactive zymogens. Enterokinase activates trypsinogen to
        trypsin, which activates all other pancreatic zymogens in a cascade. They cleave peptides
        into smaller fragments and individual amino acids.
      </p>

      <h3>Peptidases</h3>
      <p>
        Carboxypeptidase (pancreatic) and aminopeptidase/dipeptidase (brush border) complete
        protein digestion into free amino acids, dipeptides, and tripeptides for absorption.
      </p>

      <h2>Fat-Digesting Enzymes</h2>

      <h3>Bile Salts</h3>
      <p>
        Not enzymes, but essential for fat digestion. Produced by the liver, stored in the
        gallbladder, bile salts emulsify large fat globules into tiny micelles (~1 micrometer),
        dramatically increasing surface area for lipase action.
      </p>

      <h3>Pancreatic Lipase</h3>
      <p>
        The primary fat-digesting enzyme, assisted by colipase. Cleaves triglycerides into
        2-monoglycerides and free fatty acids. Without it, dietary fat passes undigested
        (steatorrhea).
      </p>

      <EvidenceBlock
        title="Pancreatic Enzyme Reserve Capacity"
        finding="The pancreas produces enough enzymes daily to digest ~300g carbohydrate, 600g protein, and 250g fat — far exceeding normal intake. Up to 90% of function must be lost before maldigestion occurs."
        study="Review of pancreatic exocrine function"
        source="Whitcomb & Lowe (2007) Digestive Diseases and Sciences"
        details="This enormous reserve capacity explains why partial pancreatectomy or mild pancreatitis rarely causes digestive problems. Only severe chronic pancreatitis or cystic fibrosis typically requires enzyme supplementation."
      />

      <h2>Gastric Acid (HCl)</h2>
      <p>
        Secreted by parietal cells, HCl (pH 1.5-3.5) activates pepsinogen, denatures proteins,
        kills pathogens, facilitates mineral absorption (iron, calcium), and triggers bile and
        pancreatic secretion via secretin release.
      </p>

      <NoteBlock
        title="Indian Spices Enhance Digestive Secretions">
        Ginger (adrak) promotes gastric motility. Black pepper (kali mirch) increases HCl secretion and enhances curcumin bioavailability from turmeric. Cumin (jeera), fennel (saunf), and asafoetida (hing) stimulate bile and pancreatic output. These traditional practices have scientific support.
      </NoteBlock>

      <h2>Hormonal Coordination</h2>
      <ul>
        <li><strong>Gastrin:</strong> Stimulates HCl and pepsinogen secretion in response to food.</li>
        <li><strong>Secretin:</strong> Stimulates pancreatic bicarbonate to neutralize duodenal acid.</li>
        <li><strong>CCK:</strong> Triggers bile release and pancreatic enzyme secretion; also promotes satiety in the brain.</li>
        <li><strong>GIP:</strong> Slows gastric emptying and stimulates insulin release.</li>
      </ul>

      <ExampleBlock
        title="Why Curd Rice Aids Digestion"
        problem="Curd (dahi) rice is a traditional South Indian digestive food with scientific support. Lactic acid bacteria pre-digest some lactose and produce helpful enzymes. Fermentation partially breaks down casein protein. The cool temperature and mild acidity soothe irritated stomachs. Rice provides easily digestible starch. Together, they require minimal digestive effort — ideal after heavy meals or during illness."
      />

      <h2>Key Takeaways</h2>
      <ul>
        <li>Digestive enzymes are specific: amylases for carbs, proteases for protein, lipases for fat.</li>
        <li>The pancreas is the digestive powerhouse, producing enzymes for all three macronutrients.</li>
        <li>Bile salts are essential for fat digestion through emulsification.</li>
        <li>Stomach acid activates pepsin, kills pathogens, and aids mineral absorption.</li>
        <li>Traditional Indian spices genuinely enhance digestive enzyme activity.</li>
        <li>Lactase deficiency affects 60-80% of Indian adults.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
