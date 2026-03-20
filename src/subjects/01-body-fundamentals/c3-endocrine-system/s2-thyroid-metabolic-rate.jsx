import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

const references = [
  { authors: 'Mullur R, Liu YY, Brent GA', year: 2014, title: 'Thyroid hormone regulation of metabolism', source: 'Physiological Reviews, 94(2), 355-382', type: 'review' },
  { authors: 'Biondi B, Wartofsky L', year: 2014, title: 'Treatment with thyroid hormone', source: 'Endocrine Reviews, 35(3), 433-512', type: 'review' },
  { authors: 'Unnikrishnan AG, Menon UV', year: 2011, title: 'Thyroid disorders in India: An epidemiological perspective', source: 'Indian Journal of Endocrinology and Metabolism, 15(Suppl 2), S78-S81', type: 'clinical' },
  { authors: 'Kim B', year: 2008, title: 'Thyroid hormone as a determinant of energy expenditure and the basal metabolic rate', source: 'Thyroid, 18(2), 141-144', type: 'review' },
  { authors: 'Zimmermann MB, Boelaert K', year: 2015, title: 'Iodine deficiency and thyroid disorders', source: 'Lancet Diabetes & Endocrinology, 3(4), 286-295', type: 'review' },
];

export default function ThyroidMetabolicRate() {
  return (
    <div className="prose-health">
      <h1>Thyroid & Metabolic Rate</h1>

      <p>
        The thyroid gland is a butterfly-shaped organ at the base of your neck that acts as the
        body&apos;s metabolic thermostat. Through its hormones T3 and T4, it controls the rate at
        which every cell in your body burns energy. Thyroid dysfunction — affecting an estimated
        42 million Indians — can significantly alter metabolic rate, making weight management
        substantially harder.
      </p>

      <DefinitionBlock
        title="Thyroid Hormones"
        definition="T4 (thyroxine) and T3 (triiodothyronine) are iodine-containing hormones produced by the thyroid gland. T4 is the primary secretory product (90%); T3 is the biologically active form (4-5x more potent). T4 is converted to T3 in peripheral tissues by deiodinase enzymes."
        notation="The HPT axis: Hypothalamus (TRH) → Pituitary (TSH) → Thyroid (T3/T4). TSH is the most commonly tested marker of thyroid function."
      />

      <h2>How Thyroid Hormones Control Metabolism</h2>

      <p>
        T3 enters cells and binds to nuclear thyroid receptors, directly regulating gene expression
        for hundreds of metabolic enzymes. Its effects are wide-ranging:
      </p>

      <ul>
        <li><strong>Basal metabolic rate:</strong> T3 increases oxygen consumption and heat production in virtually every tissue, accounting for its 15-40% impact on BMR.</li>
        <li><strong>Carbohydrate metabolism:</strong> Enhances glucose absorption, glycolysis, and gluconeogenesis.</li>
        <li><strong>Fat metabolism:</strong> Increases lipolysis (fat breakdown) and fatty acid oxidation. T3 also increases LDL receptor expression, lowering blood cholesterol.</li>
        <li><strong>Protein metabolism:</strong> At normal levels, promotes protein synthesis; at excess levels, promotes protein catabolism.</li>
        <li><strong>Thermogenesis:</strong> Stimulates uncoupling proteins (UCP1) in brown fat and increases mitochondrial activity.</li>
      </ul>

      <EvidenceBlock
        title="Thyroid Hormone and Energy Expenditure"
        finding="Thyroid hormones are a major determinant of resting energy expenditure. Hypothyroidism reduces BMR by 15-40%, while hyperthyroidism increases it by 15-50%. Even subclinical thyroid dysfunction produces measurable changes in metabolic rate."
        study="Comprehensive review of thyroid hormone effects on energy metabolism"
        source="Kim (2008) Thyroid"
        details="The review analyzed multiple studies using indirect calorimetry in patients with thyroid disorders. Hypothyroid patients showed decreased oxygen consumption, reduced thermogenesis, and lower fat oxidation rates. Importantly, the weight gain from hypothyroidism is typically modest (2-5 kg), mostly from fluid retention rather than fat accumulation, though reduced metabolic rate makes further weight gain easier over time."
      />

      <h2>Hypothyroidism: The Slow Metabolism</h2>

      <p>
        Hypothyroidism (underactive thyroid) is far more common than hyperthyroidism, affecting
        approximately 10% of Indian adults — with higher rates in women, older adults, and
        iodine-deficient regions. Hashimoto&apos;s thyroiditis (autoimmune) is the most common
        cause in iodine-sufficient areas.
      </p>

      <h3>Symptoms Related to Weight</h3>
      <ul>
        <li>Weight gain (typically 2-5 kg, mostly water/mucopolysaccharides)</li>
        <li>Fatigue and lethargy (reduced exercise tolerance)</li>
        <li>Cold intolerance (reduced thermogenesis)</li>
        <li>Constipation (slowed gut motility)</li>
        <li>Dry skin and hair loss</li>
        <li>Elevated cholesterol (reduced LDL clearance)</li>
      </ul>

      <NoteBlock
        title="Hypothyroidism and Weight: The Reality"
        content="While hypothyroidism does slow metabolism, it is NOT a primary cause of obesity. The weight gain from untreated hypothyroidism is typically 2-5 kg (mostly fluid), not 20-30 kg. If someone has gained significant weight, thyroid dysfunction may be a contributing factor but is unlikely to be the sole cause. Proper thyroid replacement (levothyroxine) normalizes metabolic rate but does not automatically cause weight loss — caloric balance still applies."
      />

      <h2>Hyperthyroidism: The Fast Metabolism</h2>
      <p>
        Hyperthyroidism (overactive thyroid) increases metabolic rate, often causing unintentional
        weight loss despite increased appetite. Graves&apos; disease is the most common cause.
        Symptoms include weight loss, heat intolerance, rapid heartbeat, anxiety, tremor, and
        frequent bowel movements. While some people wish for a &quot;faster metabolism,&quot;
        hyperthyroidism is a serious condition that can cause heart arrhythmias and bone loss.
      </p>

      <h2>Thyroid and Indian Populations</h2>

      <EvidenceBlock
        title="Thyroid Disorders in India"
        finding="An estimated 42 million Indians have thyroid disorders, with hypothyroidism being far more common than hyperthyroidism. Prevalence is higher in women (11% vs 6.2% in men) and increases with age. Iodine deficiency remains a concern in some regions despite the salt iodization program."
        study="Epidemiological survey of thyroid disorders across Indian states"
        source="Unnikrishnan & Menon (2011) Indian Journal of Endocrinology and Metabolism"
        details="The study highlighted significant geographic variation — coastal populations had lower rates due to natural iodine intake from seafood. The introduction of iodized salt has dramatically reduced iodine deficiency disorders but has paradoxically increased autoimmune thyroiditis in some regions, possibly by triggering immune responses in genetically susceptible individuals."
      />

      <ExampleBlock
        title="Supporting Thyroid Health Through Indian Diet"
        description="Key nutrients for thyroid function: (1) Iodine — use iodized salt; include seafood if non-vegetarian. One teaspoon of iodized salt provides about 150mcg iodine (the daily requirement). (2) Selenium — crucial for T4-to-T3 conversion. Sources: Brazil nuts, eggs, garlic, mushrooms. (3) Zinc — needed for thyroid hormone synthesis. Sources: pumpkin seeds, chickpeas, cashews. (4) Avoid excess goitrogens when thyroid function is compromised — raw cruciferous vegetables (cabbage, cauliflower) can interfere with iodine uptake, but cooking largely inactivates goitrogens."
      />

      <WarningBlock
        title="When to Get Your Thyroid Checked"
        content="See a doctor for thyroid testing (TSH, free T4) if you experience unexplained weight change, persistent fatigue, cold/heat intolerance, menstrual irregularities, or difficulty losing weight despite consistent effort. Thyroid dysfunction is easily diagnosed with a simple blood test and effectively treated with medication. Do NOT self-supplement with thyroid hormones or iodine mega-doses."
      />

      <h2>Key Takeaways</h2>
      <ul>
        <li>Thyroid hormones (T3/T4) regulate metabolic rate in every cell, affecting BMR by 15-50%.</li>
        <li>Hypothyroidism slows metabolism but causes modest weight gain (2-5 kg, mostly fluid) — not severe obesity.</li>
        <li>An estimated 42 million Indians have thyroid disorders; screening is recommended for unexplained weight changes.</li>
        <li>Iodine, selenium, and zinc are essential nutrients for thyroid function.</li>
        <li>Thyroid hormone replacement normalizes metabolic rate but does not eliminate the need for caloric balance.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
