import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

const references = [
  { authors: 'Hurrell R, Egli I', year: 2010, title: 'Iron bioavailability and dietary reference values', source: 'American Journal of Clinical Nutrition, 91(5), 1461S-1467S', type: 'review' },
  { authors: 'Gibson RS, Bailey KB, Gibbs M, Ferguson EL', year: 2010, title: 'A review of phytate, iron, zinc, and calcium concentrations in plant-based complementary foods', source: 'Food and Nutrition Bulletin, 31(2 Suppl), S108-S122', type: 'review' },
  { authors: 'Shoba G, Joy D, Joseph T, Majeed M, Rajendran R, Srinivas PS', year: 1998, title: 'Influence of piperine on the pharmacokinetics of curcumin in animals and human volunteers', source: 'Planta Medica, 64(4), 353-356', type: 'clinical' },
  { authors: 'Hotz C, Gibson RS', year: 2007, title: 'Traditional food-processing and preparation practices to enhance the bioavailability of micronutrients in plant-based diets', source: 'Journal of Nutrition, 137(4), 1097-1100', type: 'review' },
  { authors: 'Gupta RK, Gangoliya SS, Singh NK', year: 2015, title: 'Reduction of phytic acid and enhancement of bioavailable micronutrients in food grains', source: 'Journal of Food Science and Technology, 52(2), 676-684', type: 'review' },
];

export default function Bioavailability() {
  return (
    <div className="prose-health">
      <h1>Bioavailability</h1>

      <p>
        The nutrition label on a food package tells you what nutrients are present — but not how
        much your body actually absorbs. Bioavailability is the crucial gap between what you eat
        and what your cells receive. This concept is especially important in Indian diets, where
        traditional food processing methods (soaking, fermenting, sprouting) and spice combinations
        evolved over centuries to maximize nutrient absorption from predominantly plant-based foods.
      </p>

      <DefinitionBlock
        title="Bioavailability"
        definition="The proportion of a nutrient that is digested, absorbed, and available for use or storage in the body. A nutrient with 100% bioavailability is completely absorbed; one with 5% bioavailability means 95% passes through unabsorbed."
        notation="Bioavailability depends on: (1) the food matrix, (2) the chemical form of the nutrient, (3) other foods eaten simultaneously (enhancers/inhibitors), (4) individual factors (gut health, age, nutrient status), and (5) food processing/preparation methods."
      />

      <h2>Anti-Nutrients: Absorption Inhibitors</h2>

      <h3>Phytates (Phytic Acid)</h3>
      <p>
        Found in whole grains, legumes, nuts, and seeds — staples of Indian diets. Phytates bind
        iron, zinc, calcium, and magnesium into insoluble complexes that cannot be absorbed. A
        single dal-rice meal may contain 500-1000mg of phytate, which can reduce iron absorption
        by 50-80% and zinc absorption by 15-50%.
      </p>

      <h3>Oxalates</h3>
      <p>
        High in spinach (palak), amaranth, and beetroot. Oxalates bind calcium — spinach has
        abundant calcium on paper, but only 5% is bioavailable (vs. 32% from milk). This is why
        &quot;palak paneer for calcium&quot; is misleading — the paneer provides calcium, but the
        spinach oxalates actually reduce its absorption.
      </p>

      <h3>Tannins</h3>
      <p>
        Found in tea, coffee, red wine, and some legumes. Tannins bind iron, reducing absorption
        by 60-80%. The common Indian habit of drinking chai with or immediately after meals
        significantly impairs iron absorption — a major concern given India&apos;s high anemia
        prevalence (53% of women are anemic per NFHS-5).
      </p>

      <h3>Lectins</h3>
      <p>
        Present in raw legumes and grains. Lectins can damage intestinal lining and reduce
        nutrient absorption. Thorough cooking destroys most lectins — this is why eating raw or
        undercooked rajma (kidney beans) causes severe GI distress.
      </p>

      <EvidenceBlock
        title="Phytate Reduction Through Processing"
        finding="Soaking reduces phytate by 20-30%, germination (sprouting) by 35-50%, fermentation by 50-75%, and the combination of soaking followed by fermentation can reduce phytate by up to 90%. These methods significantly improve iron and zinc bioavailability."
        study="Systematic review of food processing methods for phytate reduction"
        source="Gupta et al. (2015) Journal of Food Science and Technology"
        details="The review analyzed dozens of studies on traditional and modern food processing methods. Fermentation was the most effective single method because microbial phytases actively break down phytic acid. This validates traditional Indian practices: idli/dosa batter fermentation, overnight soaking of dal, and sprouting of moong/chana all substantially improve mineral bioavailability."
      />

      <h2>Absorption Enhancers</h2>

      <h3>Vitamin C (Ascorbic Acid)</h3>
      <p>
        The most potent enhancer of non-heme iron absorption, increasing it 2-6 fold. Vitamin C
        reduces Fe3+ to Fe2+ and forms a soluble iron-ascorbate complex. Adding lemon juice to dal,
        or eating amla (Indian gooseberry) with meals, can overcome most phytate inhibition.
      </p>

      <h3>Piperine (from Black Pepper)</h3>
      <p>
        Piperine dramatically enhances the bioavailability of many nutrients and phytochemicals.
        Its most famous interaction is with curcumin from turmeric.
      </p>

      <EvidenceBlock
        title="Piperine and Curcumin Bioavailability"
        finding="Co-administration of 20mg piperine with 2g curcumin increased curcumin bioavailability by 2000% (20-fold) in human volunteers. Piperine inhibits hepatic and intestinal glucuronidation of curcumin, preventing its rapid metabolism."
        study="Pharmacokinetic study in healthy human volunteers"
        source="Shoba et al. (1998) Planta Medica"
        details="This study provided scientific validation for the traditional Indian practice of combining turmeric (haldi) with black pepper (kali mirch) in cooking. Without piperine, curcumin has extremely poor bioavailability (less than 1%). The combination found in countless Indian dishes — from dal to sabzi to golden milk — represents centuries of empirical nutritional wisdom."
      />

      <h3>Fat for Fat-Soluble Vitamins</h3>
      <p>
        Vitamins A, D, E, and K require dietary fat for absorption. Eating carrots (vitamin A)
        or spinach (vitamin K) without any fat dramatically reduces absorption. The Indian practice
        of adding ghee to roti, tempering vegetables in oil, or cooking greens with coconut oil
        naturally enhances fat-soluble vitamin absorption.
      </p>

      <ExampleBlock
        title="Traditional Indian Practices That Maximize Bioavailability"
        problem="(1) Idli/dosa fermentation — reduces phytate by 60-75%, increases B-vitamins from microbial synthesis. (2) Soaking dal overnight — reduces phytate by 20-30%. (3) Adding lemon to dal — vitamin C boosts iron absorption 3-6x. (4) Turmeric + black pepper in every curry — 20x increase in curcumin absorption. (5) Tempering with oil — enhances fat-soluble vitamin uptake from vegetables. (6) Sprouting moong/chana — reduces phytate 35-50%, increases vitamin C. (7) Eating amla — one of the richest vitamin C sources (600mg per 100g), dramatically enhances iron from plant foods."
      />

      <NoteBlock
        title="The Tea-and-Iron Problem">
        India has one of the world's highest tea consumption rates AND one of the highest anemia rates — this is not a coincidence. Tannins in chai reduce iron absorption by 60-80%. A simple intervention: drink chai 1-2 hours before or after meals instead of with meals. This alone can significantly improve iron status, especially for vegetarians whose diet relies on non-heme iron.
      </NoteBlock>

      <h2>Individual Factors Affecting Bioavailability</h2>
      <ul>
        <li><strong>Iron status:</strong> Iron-depleted individuals absorb 2-3x more iron from the same meal than iron-replete individuals.</li>
        <li><strong>Gut health:</strong> Inflammation, celiac disease, or tropical sprue (common in South India) reduces absorption of multiple nutrients.</li>
        <li><strong>Age:</strong> Stomach acid production decreases with age, reducing mineral and B12 absorption.</li>
        <li><strong>Genetic variation:</strong> Polymorphisms in transport proteins affect individual absorption capacity.</li>
      </ul>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Bioavailability — not just nutrient content — determines nutritional impact.</li>
        <li>Phytates, oxalates, and tannins in plant foods significantly reduce mineral absorption.</li>
        <li>Traditional Indian food processing (soaking, fermenting, sprouting) reduces anti-nutrients by 50-90%.</li>
        <li>Vitamin C, piperine, and dietary fat are powerful absorption enhancers.</li>
        <li>Drinking tea with meals reduces iron absorption by 60-80%; separate by 1-2 hours.</li>
        <li>Turmeric + black pepper increases curcumin bioavailability by 2000%.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
