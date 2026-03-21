import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

const references = [
  { authors: 'Tortora GJ, Derrickson B', year: 2017, title: 'Principles of Anatomy and Physiology', source: 'Wiley, 15th Edition', type: 'foundational' },
  { authors: 'Helander HF, Fändriks L', year: 2014, title: 'Surface area of the digestive tract – revisited', source: 'Scandinavian Journal of Gastroenterology, 49(6), 681-689', type: 'foundational' },
  { authors: 'Sensoy I', year: 2021, title: 'A review on the food digestion in the digestive tract and the used in vitro models', source: 'Current Research in Food Science, 4, 308-319', type: 'review' },
  { authors: 'Mowat AM, Agace WW', year: 2014, title: 'Regional specialization within the intestinal immune system', source: 'Nature Reviews Immunology, 14(10), 667-685', type: 'review' },
  { authors: 'Reed KK, Wickham R', year: 2009, title: 'Review of the gastrointestinal tract: from macro to micro', source: 'Seminars in Oncology Nursing, 25(1), 3-14', type: 'review' },
];

export default function DigestiveAnatomy() {
  return (
    <div className="prose-health">
      <h1>Digestive System Anatomy</h1>

      <p>
        The digestive system is a continuous tube approximately 9 meters long, from mouth to anus.
        It breaks down food — rice, roti, dal, sabzi — into molecules small enough to be absorbed
        into the bloodstream for energy, growth, and repair.
      </p>

      <DefinitionBlock
        title="Gastrointestinal (GI) Tract"
        definition="The continuous muscular tube through which food passes: mouth, pharynx, esophagus, stomach, small intestine (duodenum, jejunum, ileum), large intestine (cecum, colon, rectum), and anus. Also called the alimentary canal."
        notation="Four tissue layers: mucosa (innermost), submucosa, muscularis externa (generates peristalsis), and serosa (outermost)."
      />

      <h2>The Mouth: Where Digestion Begins</h2>
      <p>
        Mechanical digestion starts with chewing, which increases surface area for enzymes. Saliva
        from three pairs of salivary glands contains salivary amylase (ptyalin), the first
        digestive enzyme, which begins converting starch to maltose. This is why chewing plain
        rice long enough makes it taste sweet.
      </p>

      <NoteBlock
        title="Chewing and Weight Management">
        Studies show thorough chewing (30-40 chews per bite) increases satiety hormones, reduces meal size by 10-15%, and improves absorption. Traditional Indian eating with hands naturally encourages slower, more mindful eating compared to hurried fork-based meals.
      </NoteBlock>

      <h2>The Esophagus</h2>
      <p>
        A 25 cm muscular tube that transports food to the stomach via peristalsis. The lower
        esophageal sphincter opens for food entry and closes to prevent acid reflux. When it
        weakens, GERD (heartburn) results — common after heavy, spicy meals eaten late at night.
      </p>

      <h2>The Stomach</h2>
      <p>
        A J-shaped organ holding 1-1.5 liters that stores, mixes, and chemically digests food.
        Gastric glands produce hydrochloric acid (pH 1.5-3.5) that kills bacteria, denatures
        proteins, and activates pepsinogen into pepsin for protein digestion. The stomach also
        produces intrinsic factor for vitamin B12 absorption.
      </p>
      <p>
        Food churns into chyme, released gradually through the pyloric sphincter. A mixed meal
        takes 2-4 hours to empty; high-fat meals take 4-6 hours — why paneer butter masala
        keeps you fuller than plain rice.
      </p>

      <h2>The Small Intestine</h2>
      <p>
        The digestive workhorse — approximately 6 meters long with three sections:
      </p>

      <h3>Duodenum (25 cm)</h3>
      <p>
        Receives chyme plus bile from the liver/gallbladder and pancreatic juice. Bile emulsifies
        fats; pancreatic enzymes complete breakdown of all macronutrients. Bicarbonate neutralizes
        stomach acid to pH 7-8.
      </p>

      <h3>Jejunum (2.5 m)</h3>
      <p>
        Primary absorption site. Circular folds, villi, and microvilli create enormous surface
        area. Most carbohydrates, proteins, fats, vitamins, and minerals are absorbed here.
      </p>

      <h3>Ileum (3.5 m)</h3>
      <p>
        Absorbs remaining nutrients, bile salts (for recycling), and vitamin B12. Contains
        Peyer&apos;s patches — immune tissue monitoring intestinal contents for pathogens.
      </p>

      <EvidenceBlock
        title="Surface Area of the Small Intestine"
        finding="The absorptive surface area is approximately 32 square meters — about the size of a studio apartment. Earlier estimates of 200+ m² were overestimates based on electron microscopy."
        study="Reassessment using modern morphometric methods"
        source="Helander & Fändriks (2014) Scandinavian Journal of Gastroenterology"
        details="Even at 32 m², this is roughly 100 times the external body surface area — more than sufficient for efficient nutrient absorption. The massive amplification comes from circular folds (3x), villi (10x), and microvilli (20x) acting multiplicatively."
      />

      <h2>The Large Intestine (Colon)</h2>
      <p>
        Approximately 1.5 meters long. By this point, most nutrients have been absorbed. The
        colon&apos;s primary functions:
      </p>
      <ul>
        <li><strong>Water recovery:</strong> ~1.5 liters/day, transforming liquid chyme into solid stool.</li>
        <li><strong>Bacterial fermentation:</strong> ~100 trillion bacteria ferment dietary fiber into short-chain fatty acids (butyrate, propionate, acetate) providing 5-10% of daily energy.</li>
        <li><strong>Vitamin production:</strong> Bacteria synthesize vitamin K and some B vitamins.</li>
        <li><strong>Waste elimination:</strong> Rectum stores feces until elimination.</li>
      </ul>

      <ExampleBlock
        title="Digestive Journey of a South Indian Meal"
        problem="Sambar rice with papad: (1) Mouth — chewing and salivary amylase start rice starch digestion. (2) Stomach — HCl and pepsin break down dal proteins; 3-4 hours churning. (3) Duodenum — bile emulsifies tempering oil; pancreatic enzymes digest all macronutrients. (4) Jejunum — glucose from rice, amino acids from dal, fatty acids from oil, vitamins from vegetables absorbed through villi. (5) Ileum — remaining nutrients and bile salts absorbed. (6) Colon — vegetable fiber fermented by bacteria, water recovered, residue forms stool. Total transit: 24-72 hours."
      />

      <h2>Accessory Organs</h2>
      <p>
        <strong>Liver:</strong> Produces 500-1000 mL bile daily; processes all absorbed nutrients
        via the hepatic portal vein. <strong>Pancreas:</strong> Dual function — exocrine (digestive
        enzymes, bicarbonate) and endocrine (insulin, glucagon). <strong>Gallbladder:</strong> Concentrates
        and stores bile; gallstones are common in Indian women, especially with rapid weight loss.
      </p>

      <h2>Key Takeaways</h2>
      <ul>
        <li>The GI tract is a 9-meter tube processing food through mechanical and chemical digestion.</li>
        <li>Digestion begins in the mouth (starch) and stomach (protein), with most occurring in the duodenum.</li>
        <li>The small intestine absorbs 90%+ of nutrients through its 32 m² surface area.</li>
        <li>The large intestine recovers water, houses the microbiome, and eliminates waste.</li>
        <li>Total transit time: 24-72 hours from mouth to elimination.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
