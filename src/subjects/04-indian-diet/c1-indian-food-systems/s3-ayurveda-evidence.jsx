import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import NutritionFactBlock from '../../../components/content/NutritionFactBlock.jsx';
import ComparisonTable from '../../../components/content/ComparisonTable.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

export default function AyurvedaEvidence() {
  return (
    <div className="prose-health">
      <h1>Ayurvedic Principles — Evidence-Based Evaluation</h1>

      <p>
        Ayurveda, India's traditional system of medicine dating back over 3,000 years, contains
        a vast body of knowledge about food, digestion, and health. Some of its principles have
        been remarkably validated by modern science, while others lack rigorous evidence or have
        been disproven. This section evaluates key Ayurvedic dietary concepts through the lens
        of contemporary evidence-based medicine — acknowledging what works, questioning what
        does not, and separating commercial hype from genuine therapeutic potential.
      </p>

      <DefinitionBlock
        term="Ayurveda"
        definition="Literally 'science of life' (ayus = life, veda = knowledge), Ayurveda is a holistic medical system originating in ancient India, codified in texts including the Charaka Samhita and Sushruta Samhita (circa 600 BCE to 200 CE). It classifies individuals by constitutional types (doshas), foods by their qualities (gunas), and emphasizes digestive health (agni) as central to overall well-being."
      />

      {/* ============ FOOD CLASSIFICATIONS ============ */}
      <h2>Ayurvedic Food Classifications</h2>

      <h3>Sattvic, Rajasic, and Tamasic Foods</h3>

      <DefinitionBlock
        term="Sattvic Foods"
        definition="Foods considered pure, clean, and promoting clarity of mind. These include fresh fruits, vegetables, whole grains, milk, ghee, nuts, seeds, honey, and lightly spiced preparations. Modern nutritional interpretation: these broadly align with whole, minimally processed, nutrient-dense foods."
      />

      <DefinitionBlock
        term="Rajasic Foods"
        definition="Foods considered stimulating and passion-inducing. These include strongly spiced foods, coffee, tea, onion, garlic, fermented foods, and excessively salty or sour items. Modern interpretation: some of these (garlic, fermented foods) are now known to have significant health benefits."
      />

      <DefinitionBlock
        term="Tamasic Foods"
        definition="Foods considered dulling, heavy, and promoting lethargy. These include stale food, overcooked food, reheated leftovers, processed food, alcohol, and excess meat. Modern interpretation: the avoidance of stale and heavily processed foods aligns well with modern food safety and nutrition science."
      />

      <NoteBlock title="A balanced perspective on food classification">
        The sattvic-rajasic-tamasic framework is a philosophical and ethical classification,
        not a nutritional one. While it happens to overlap with some sound nutritional principles
        (eating fresh, whole foods; avoiding processed and stale food), it also categorizes
        beneficial foods like garlic, onion, and fermented foods as undesirable, which contradicts
        strong modern evidence for their health benefits. Use this framework as cultural context,
        not as a dietary prescription.
      </NoteBlock>

      {/* ============ DOSHAS ============ */}
      <h3>Vata, Pitta, and Kapha Body Types (Doshas)</h3>

      <ComparisonTable
        title="Ayurvedic Doshas — Traditional Descriptions"
        headers={['Characteristic', 'Vata', 'Pitta', 'Kapha']}
        rows={[
          ['Body Type', 'Thin, light frame', 'Medium, muscular build', 'Heavy, solid frame'],
          ['Digestion', 'Irregular, variable', 'Strong, fast', 'Slow, steady'],
          ['Temperament', 'Active, creative, anxious', 'Driven, sharp, irritable', 'Calm, steady, lethargic'],
          ['Recommended Foods', 'Warm, moist, grounding', 'Cool, bitter, sweet', 'Light, dry, spicy'],
          ['Foods to Avoid', 'Cold, raw, dry foods', 'Spicy, sour, salty', 'Heavy, oily, sweet'],
        ]}
      />

      <EvidenceBlock
        level="weak"
        title="Dosha-based dietary prescriptions lack clinical validation"
      >
        Despite widespread popularity, the dosha classification system has not been validated
        through rigorous randomized controlled trials. While the general body type descriptions
        loosely correspond to modern somatotypes (ectomorph, mesomorph, endomorph), there is no
        peer-reviewed evidence that eating according to one's dosha produces superior health
        outcomes compared to standard evidence-based dietary guidelines. A 2014 systematic review
        found no clinical trials supporting dosha-specific diets. The concept may have value as
        a personalization framework, but should not replace evidence-based nutritional guidance.
      </EvidenceBlock>

      {/* ============ TURMERIC ============ */}
      <h2>Turmeric (Haldi) — Strong Evidence</h2>

      <NutritionFactBlock
        title="Turmeric Powder — per 100g"
        servingSize="100g (typical use: 1-3g/day)"
        calories={312}
        protein={9.7}
        carbs={67.1}
        fat={3.3}
        fiber={22.7}
        extras={[
          { label: 'Curcumin Content', value: '2-5% of turmeric by weight' },
          { label: 'Iron', value: '55 mg' },
          { label: 'Manganese', value: '19.8 mg' },
        ]}
      />

      <EvidenceBlock
        level="strong"
        title="Curcumin: well-studied anti-inflammatory compound"
      >
        Curcumin, the primary bioactive compound in turmeric, has been evaluated in over 120
        clinical trials. A meta-analysis by Aggarwal et al. (2009) demonstrated significant
        anti-inflammatory activity through inhibition of NF-kB, COX-2, and pro-inflammatory
        cytokines. Clinical trials have shown modest but consistent benefits for osteoarthritis
        pain (comparable to ibuprofen in some studies), metabolic syndrome markers, and
        inflammatory bowel disease symptoms. Key limitation: curcumin has very low bioavailability
        (approximately 1% absorption). Co-administration with piperine from black pepper increases
        absorption by 2000% (Shoba et al., 1998). The traditional Indian practice of combining
        turmeric with black pepper and fat (in curries) was a remarkably prescient solution to
        this bioavailability problem.
      </EvidenceBlock>

      <WarningBlock title="Turmeric supplements vs dietary turmeric">
        Commercial curcumin supplements (500-2000mg concentrated curcumin) are not the same as
        dietary turmeric. At supplement doses, curcumin can interact with anticoagulant
        medications, may cause gastrointestinal distress, and has been associated with liver
        injury in rare cases at very high doses. The 1-3g of turmeric powder used daily in Indian
        cooking (containing 20-150mg curcumin) is well within safe limits and has been consumed
        for millennia without adverse effects. Dietary use is evidence-supported and safe;
        high-dose supplementation should be discussed with a healthcare provider.
      </WarningBlock>

      {/* ============ ASHWAGANDHA ============ */}
      <h2>Ashwagandha (Withania somnifera) — Moderate Evidence</h2>

      <EvidenceBlock
        level="moderate"
        title="Ashwagandha shows promise for stress and cortisol reduction"
      >
        A landmark double-blind, randomized, placebo-controlled trial by Chandrasekhar et al.
        (2012) demonstrated that 300mg ashwagandha root extract twice daily for 60 days
        significantly reduced serum cortisol levels by 27.9% (p &lt; 0.001) and perceived stress
        scores compared to placebo. A systematic review by Pratte et al. (2014) of five RCTs
        confirmed anxiolytic effects. Moderate evidence also supports improvements in sleep
        quality, VO2 max in athletes, and testosterone levels in men. However, most studies are
        small (n = 50-100), short-term (8-12 weeks), and many are industry-funded. Larger,
        longer, independent trials are needed to confirm these effects.
      </EvidenceBlock>

      <NoteBlock title="Relevance to weight management">
        Ashwagandha's cortisol-lowering properties may be relevant for individuals whose weight
        gain is stress-driven (cortisol promotes visceral fat deposition and appetite increase).
        One small study found reduced food cravings and body weight in chronically stressed
        adults taking ashwagandha. This is plausible but not yet established with strong evidence.
        It should not be considered a weight-loss supplement.
      </NoteBlock>

      {/* ============ TULSI ============ */}
      <h2>Tulsi (Holy Basil) — Moderate Evidence</h2>

      <EvidenceBlock
        level="moderate"
        title="Tulsi shows adaptogenic and mild glucose-lowering effects"
      >
        A systematic review of 24 studies on Ocimum sanctum (tulsi) found evidence supporting
        adaptogenic (stress-modulating) properties, mild hypoglycemic effects (fasting blood
        glucose reduction of 15-20 mg/dL in some trials), and antioxidant activity. The eugenol,
        rosmarinic acid, and ursolic acid in tulsi demonstrate anti-inflammatory properties
        in vitro. However, most human trials are small and of moderate quality. Daily consumption
        as tulsi tea (2-3 cups) is safe and may offer modest metabolic benefits, but should not
        replace conventional diabetes management.
      </EvidenceBlock>

      {/* ============ AMLA ============ */}
      <h2>Amla (Indian Gooseberry) — Strong Evidence for Vitamin C</h2>

      <NutritionFactBlock
        title="Amla (Fresh) — per 100g"
        servingSize="100g (1 medium fruit ≈ 40-50g)"
        calories={58}
        protein={0.9}
        carbs={13.7}
        fat={0.1}
        fiber={3.4}
        extras={[
          { label: 'Vitamin C', value: '600-700 mg (8-10x an orange)' },
          { label: 'Polyphenols', value: 'Extremely high (gallic acid, ellagic acid)' },
          { label: 'Chromium', value: 'Trace amounts' },
        ]}
      />

      <EvidenceBlock
        level="strong"
        title="Amla: one of the richest natural sources of vitamin C"
      >
        Amla contains 600-700 mg of vitamin C per 100g fresh fruit — the highest concentration
        among commonly consumed fruits worldwide. Uniquely, the vitamin C in amla is heat-stable
        due to the presence of tannins that form a protective complex, meaning amla-based
        preparations (like chyawanprash and amla candy) retain significant vitamin C even after
        processing. Clinical studies show that amla consumption improves antioxidant status,
        reduces LDL oxidation, and has modest lipid-lowering effects. A 12-week trial found
        that 500mg amla extract daily reduced total cholesterol by 11% and triglycerides by
        15% (Akhtar et al., 2011).
      </EvidenceBlock>

      {/* ============ TRIPHALA ============ */}
      <h2>Triphala — Moderate Evidence</h2>

      <DefinitionBlock
        term="Triphala"
        definition="A traditional Ayurvedic formulation consisting of equal parts of three dried fruits: amla (Emblica officinalis), haritaki (Terminalia chebula), and bibhitaki (Terminalia bellirica). It has been used for over 2,000 years, primarily as a digestive and bowel-regulating remedy."
      />

      <EvidenceBlock
        level="moderate"
        title="Triphala shows laxative, antioxidant, and anti-obesity effects in early research"
      >
        Triphala's laxative effect is well-documented and primarily attributed to the haritaki
        component (containing anthraquinone glycosides). A randomized controlled trial found that
        triphala supplementation (5g twice daily for 12 weeks) significantly reduced body weight,
        waist circumference, and hip circumference compared to placebo in obese individuals
        (Kamali et al., 2012). In vitro and animal studies demonstrate anti-adipogenic effects,
        potentially through PPAR-gamma modulation. However, human evidence for weight loss is
        preliminary and limited to a few small trials.
      </EvidenceBlock>

      {/* ============ EVIDENCE SUMMARY ============ */}
      <h2>Evidence Summary: What's Supported and What's Not</h2>

      <ComparisonTable
        title="Ayurvedic Ingredients — Evidence Scorecard"
        headers={['Ingredient', 'Evidence Level', 'Key Supported Claims', 'Unsupported/Overstated Claims']}
        rows={[
          ['Turmeric/Curcumin', 'Strong', 'Anti-inflammatory, joint pain relief, antioxidant', '"Cures cancer," replaces medication for serious conditions'],
          ['Ashwagandha', 'Moderate', 'Cortisol reduction, anxiety relief, sleep improvement', '"Miracle testosterone booster," dramatic muscle gain'],
          ['Tulsi', 'Moderate', 'Adaptogenic effects, mild glucose reduction', '"Cures diabetes," replaces antidiabetic medications'],
          ['Amla', 'Strong', 'Vitamin C source, antioxidant, mild lipid-lowering', '"Reverses aging," detox claims'],
          ['Triphala', 'Moderate', 'Laxative effect, possible weight support', '"Fat burner," dramatic weight loss claims'],
          ['Dosha-based diets', 'Weak', 'General personalization concept', 'Superior to standard evidence-based nutrition'],
          ['Sattvic diet', 'N/A (philosophical)', 'Eat fresh, whole foods (good advice)', 'Garlic/onion harmful, fermented foods bad'],
          ['Copper water', 'Weak', 'Mild antimicrobial (on surfaces)', '"Detoxes body," cures diseases'],
          ['Oil pulling', 'Weak-Moderate', 'May reduce oral bacteria count', '"Pulls toxins from body," cures systemic diseases'],
        ]}
      />

      <h2>A Balanced Approach</h2>

      <NoteBlock title="Integrating Ayurvedic wisdom with modern evidence">
        The most productive approach is neither wholesale rejection nor uncritical acceptance of
        Ayurvedic principles. Many traditional practices — using turmeric with black pepper and
        fat, consuming fermented foods, eating seasonal and locally grown produce, emphasizing
        digestive health, and favoring whole over processed foods — are remarkably well-supported
        by modern nutrition science. Other practices — dosha-based dietary restriction, avoiding
        scientifically beneficial foods like garlic and onion, and attributing magical properties
        to copper vessels — lack evidence. Use traditional wisdom as a starting point, but always
        verify claims against current research before making health decisions.
      </NoteBlock>

      <WarningBlock title="The supplement industry exploitation">
        The wellness industry aggressively markets Ayurvedic ingredients as supplements with
        inflated health claims. Ashwagandha "testosterone boosters," turmeric "cancer cures,"
        and triphala "detox" products are sold at extreme markups with minimal quality control.
        Many supplements have been found to contain heavy metals, adulterants, or undisclosed
        pharmaceutical ingredients. If you choose to use Ayurvedic supplements, select products
        with third-party testing certifications and discuss with your healthcare provider,
        especially if you take medications. Dietary use of these ingredients in traditional
        cooking is safe and does not carry these risks.
      </WarningBlock>

      <ExampleBlock title="Evidence-backed Ayurvedic practices to incorporate">
        <ul>
          <li>Add turmeric + black pepper to dals, curries, and golden milk for anti-inflammatory benefits</li>
          <li>Consume 1 fresh amla daily (or amla-based preparations) for vitamin C and antioxidants</li>
          <li>Drink tulsi tea (2-3 cups daily) as a caffeine-free, mildly beneficial beverage</li>
          <li>Follow the core sattvic principle of eating fresh, whole, minimally processed foods</li>
          <li>Include digestive spices (cumin, coriander, fennel, ginger) which have demonstrated carminative effects</li>
          <li>If stress is a factor in your weight management, ashwagandha (300mg extract, 2x daily) may be worth trying</li>
        </ul>
      </ExampleBlock>

      {/* ============ DIGESTIVE SPICES ============ */}
      <h2>Indian Digestive Spices — Evidence Review</h2>

      <p>
        Beyond the headline Ayurvedic ingredients, everyday Indian cooking spices have
        accumulated a meaningful evidence base for digestive and metabolic effects.
      </p>

      <ComparisonTable
        title="Common Indian Spices — Evidence for Digestive Benefits"
        headers={['Spice', 'Active Compound', 'Evidence Level', 'Demonstrated Effects']}
        rows={[
          ['Ginger (Adrak)', 'Gingerol, Shogaol', 'Strong', 'Anti-nausea (pregnancy, chemo), prokinetic, anti-inflammatory'],
          ['Cumin (Jeera)', 'Cuminaldehyde', 'Moderate', 'Stimulates digestive enzymes, carminative, mild weight loss aid'],
          ['Fennel (Saunf)', 'Anethole', 'Moderate', 'Carminative, reduces bloating, mild antispasmodic'],
          ['Black Pepper (Kali Mirch)', 'Piperine', 'Strong', 'Enhances bioavailability of nutrients, thermogenic, digestive stimulant'],
          ['Coriander (Dhaniya)', 'Linalool', 'Weak-Moderate', 'Mild carminative, hypoglycemic effect in animal studies'],
          ['Fenugreek (Methi)', 'Galactomannan fiber', 'Moderate', 'Blood glucose reduction, appetite suppression, lipid lowering'],
          ['Asafoetida (Hing)', 'Ferulic acid', 'Moderate', 'Antispasmodic, reduces flatulence, traditionally used for IBS-like symptoms'],
          ['Cinnamon (Dalchini)', 'Cinnamaldehyde', 'Moderate', 'Blood glucose reduction (1-6g/day), insulin sensitization'],
        ]}
      />

      <EvidenceBlock
        level="moderate"
        title="Fenugreek seeds show consistent blood glucose lowering effects"
      >
        Multiple clinical trials have demonstrated that fenugreek seed consumption (5-50g/day,
        typically as soaked seeds or powder) reduces fasting blood glucose by 15-25 mg/dL in
        diabetic subjects. The soluble fiber galactomannan slows carbohydrate absorption, while
        the amino acid 4-hydroxyisoleucine stimulates insulin secretion. A meta-analysis of 10
        trials confirmed a significant reduction in fasting glucose and HbA1c with fenugreek
        supplementation. The traditional practice of consuming soaked methi seeds on an empty
        stomach has a genuine evidence base, though it works as an adjunct to diet and exercise,
        not a replacement for diabetic medication.
      </EvidenceBlock>

      <ReferenceList
        references={[
          'Aggarwal, B. B., & Harikumar, K. B. (2009). Potential therapeutic effects of curcumin, the anti-inflammatory agent, against neurodegenerative, cardiovascular, pulmonary, metabolic, autoimmune and neoplastic diseases. International Journal of Biochemistry & Cell Biology, 41(1), 40-59.',
          'Chandrasekhar, K., Kapoor, J., & Anishetty, S. (2012). A prospective, randomized double-blind, placebo-controlled study of safety and efficacy of a high-concentration full-spectrum extract of ashwagandha root in reducing stress and anxiety in adults. Indian Journal of Psychological Medicine, 34(3), 255-262.',
          'Pratte, M. A., Nanavati, K. B., Young, V., & Morley, C. P. (2014). An alternative treatment for anxiety: a systematic review of human trial results reported for the Ayurvedic herb ashwagandha. Journal of Alternative and Complementary Medicine, 20(12), 901-908.',
          'Shoba, G., Joy, D., Joseph, T., Majeed, M., Rajendran, R., & Srinivas, P. S. (1998). Influence of piperine on the pharmacokinetics of curcumin in animals and human volunteers. Planta Medica, 64(4), 353-356.',
          'Akhtar, M. S., Ramzan, A., Ali, A., & Ahmad, M. (2011). Effect of Amla fruit on blood glucose and lipid profile of normal subjects and type 2 diabetic patients. International Journal of Food Sciences and Nutrition, 62(6), 609-616.',
          'Kamali, S. H., Khalaj, A. R., Hasani-Ranjbar, S., Esfehani, M. M., Kamalinejad, M., & Soheil, O. (2012). Efficacy of Itrifal Saghir, a traditional medicine compound, in treatment of obesity. Iranian Red Crescent Medical Journal, 14(2), 85-89.',
          'Longvah, T., Ananthan, R., Bhaskarachary, K., & Venkaiah, K. (2017). Indian Food Composition Tables. National Institute of Nutrition, ICMR, Hyderabad.',
        ]}
      />
    </div>
  );
}
