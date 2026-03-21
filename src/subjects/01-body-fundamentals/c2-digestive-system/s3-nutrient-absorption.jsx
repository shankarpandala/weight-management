import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

const references = [
  { authors: 'Kiela PR, Ghishan FK', year: 2016, title: 'Physiology of intestinal absorption and secretion', source: 'Best Practice & Research Clinical Gastroenterology, 30(2), 145-159', type: 'review' },
  { authors: 'Gropper SS, Smith JL', year: 2013, title: 'Advanced Nutrition and Human Metabolism', source: 'Wadsworth, 6th Edition', type: 'foundational' },
  { authors: 'Iqbal J, Hussain MM', year: 2009, title: 'Intestinal lipid absorption', source: 'American Journal of Physiology, 296(6), E1183-E1194', type: 'review' },
  { authors: 'Daniel H', year: 2004, title: 'Molecular and integrative physiology of intestinal peptide transport', source: 'Annual Review of Physiology, 66, 361-384', type: 'foundational' },
  { authors: 'Hurrell R, Egli I', year: 2010, title: 'Iron bioavailability and dietary reference values', source: 'American Journal of Clinical Nutrition, 91(5), 1461S-1467S', type: 'review' },
];

export default function NutrientAbsorption() {
  return (
    <div className="prose-health">
      <h1>Nutrient Absorption Mechanisms</h1>

      <p>
        Digestion breaks food into small molecules, but these molecules must then cross the
        intestinal wall to enter the bloodstream. This process — absorption — is where nutrition
        truly happens. The small intestine absorbs over 90% of ingested nutrients using several
        distinct transport mechanisms.
      </p>

      <DefinitionBlock
        title="Nutrient Absorption"
        definition="The process by which digested nutrients cross the intestinal epithelium into the blood or lymph. This occurs primarily in the jejunum and ileum through four mechanisms: passive diffusion, facilitated diffusion, active transport, and endocytosis."
        notation="The absorptive surface is amplified ~600-fold by circular folds, villi, and microvilli (brush border)."
      />

      <h2>Transport Mechanisms</h2>

      <h3>Passive Diffusion</h3>
      <p>
        Molecules move from high to low concentration without energy expenditure. Water, some
        lipids, and fat-soluble vitamins (A, D, E, K) cross the intestinal membrane this way.
        Small, lipophilic molecules can pass directly through the phospholipid bilayer.
      </p>

      <h3>Facilitated Diffusion</h3>
      <p>
        Carrier proteins help molecules cross the membrane down their concentration gradient
        without ATP. Fructose absorption uses GLUT5 transporters on the brush border via this
        mechanism.
      </p>

      <h3>Active Transport</h3>
      <p>
        Energy-dependent (ATP) transport against the concentration gradient. Most nutrient
        absorption uses this mechanism. Glucose and galactose are absorbed via SGLT1 (sodium-glucose
        co-transporter) — sodium flowing down its gradient provides energy to pull glucose in.
        Amino acids use similar sodium-coupled transporters.
      </p>

      <h3>Endocytosis</h3>
      <p>
        The cell membrane engulfs large molecules. This mechanism is used for intact proteins
        (like antibodies in breast milk for infants) and some vitamin B12-intrinsic factor complexes.
      </p>

      <h2>Carbohydrate Absorption</h2>
      <p>
        Monosaccharides are the final absorbable form. Glucose and galactose enter enterocytes
        via SGLT1 (active transport) on the apical surface and exit via GLUT2 on the basolateral
        side into capillaries. Fructose uses GLUT5 (facilitated diffusion) for entry. All three
        monosaccharides travel via the portal vein to the liver for processing.
      </p>

      <h2>Protein Absorption</h2>
      <p>
        Amino acids, dipeptides, and tripeptides are absorbed. Free amino acids use sodium-coupled
        transporters (at least 7 different types for different amino acid classes). Dipeptides and
        tripeptides use PepT1 transporters — and are actually absorbed more efficiently than free
        amino acids. Inside the cell, peptidases break remaining peptides into free amino acids
        before export to portal blood.
      </p>

      <EvidenceBlock
        title="Peptide Transport Efficiency"
        finding="Dipeptides and tripeptides are absorbed faster than equivalent free amino acids through the PepT1 transporter. This explains why protein hydrolysates and whey peptides show rapid absorption kinetics."
        study="Molecular characterization of intestinal peptide transport"
        source="Daniel (2004) Annual Review of Physiology"
        details="The PepT1 transporter accepts virtually any di- or tripeptide regardless of amino acid composition, making it remarkably versatile. It uses a proton gradient for energy. This has practical relevance: foods like fermented dal or aged paneer contain pre-formed peptides that may be absorbed more efficiently than intact proteins."
      />

      <h2>Fat Absorption</h2>
      <p>
        Fat absorption is unique because fats are not water-soluble. After pancreatic lipase
        creates monoglycerides and fatty acids, bile salts organize them into mixed micelles —
        tiny water-soluble packages that deliver fats to the brush border. At the cell surface,
        fats dissolve into the membrane and enter the cell.
      </p>
      <p>
        Inside enterocytes, fatty acids are reassembled into triglycerides and packaged with
        cholesterol, phospholipids, and proteins into chylomicrons — large lipoprotein particles
        that enter the lymphatic system (not portal blood) via lacteals. This is why dietary fat
        appears in the bloodstream more slowly than carbohydrates or protein.
      </p>

      <NoteBlock
        title="Medium-Chain Triglycerides (MCTs)">
        Coconut oil, widely used in South Indian cooking, contains medium-chain fatty acids (C8-C12) that bypass the chylomicron pathway. MCTs are absorbed directly into portal blood like amino acids, reaching the liver faster for quick energy. This is one reason coconut oil has gained attention in weight management, though total calorie balance still determines weight change.
      </NoteBlock>

      <h2>Mineral Absorption</h2>

      <h3>Iron</h3>
      <p>
        Iron absorption is tightly regulated and typically low (5-35% of intake). Heme iron
        (from meat) is absorbed 2-3x more efficiently than non-heme iron (from plants). Vitamin C
        enhances non-heme iron absorption by reducing Fe3+ to Fe2+. Phytates in whole grains and
        tannins in tea significantly inhibit iron absorption — a major concern in Indian vegetarian
        diets.
      </p>

      <h3>Calcium</h3>
      <p>
        Absorbed via active transport (vitamin D-dependent) in the duodenum when intake is low,
        and passive diffusion throughout the small intestine when intake is high. Oxalates in
        spinach and phytates in grains reduce calcium absorption. Dairy products remain the most
        bioavailable calcium source — a challenge for lactose-intolerant Indians.
      </p>

      <ExampleBlock
        title="Maximizing Iron Absorption from Indian Meals"
        problem="A typical vegetarian thali contains iron (from spinach, dal, roti) but also absorption inhibitors (phytates, tannins). To optimize: (1) Add lemon juice (vitamin C) to dal — increases non-heme iron absorption 2-3 fold. (2) Avoid tea/coffee within 1 hour of meals — tannins reduce iron absorption by 60-80%. (3) Include amla (Indian gooseberry) — one of the richest vitamin C sources. (4) Soak and ferment grains — reduces phytate content by 40-60%. Traditional practices like fermenting idli batter naturally improve mineral bioavailability."
      />

      <WarningBlock
        title="Malabsorption Warning Signs">
        Signs of nutrient malabsorption include chronic diarrhea, fatty/foul-smelling stools, unexplained weight loss, bloating, fatigue, and nutrient deficiency symptoms (anemia, bone pain, easy bruising). Celiac disease, tropical sprue (common in South India), inflammatory bowel disease, and chronic pancreatitis can all impair absorption. Consult a gastroenterologist if you experience persistent symptoms.
      </WarningBlock>

      <h2>Key Takeaways</h2>
      <ul>
        <li>The small intestine absorbs 90%+ of nutrients using active transport, facilitated diffusion, passive diffusion, and endocytosis.</li>
        <li>Glucose uses SGLT1 (active), fructose uses GLUT5 (facilitated).</li>
        <li>Peptides (di/tripeptides) are absorbed more efficiently than free amino acids via PepT1.</li>
        <li>Fats require bile salt micelles and are packaged into chylomicrons for lymphatic transport.</li>
        <li>Iron and calcium absorption are heavily influenced by dietary enhancers (vitamin C) and inhibitors (phytates, tannins).</li>
        <li>Traditional Indian practices like fermenting, using lemon, and cooking with spices improve nutrient bioavailability.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
