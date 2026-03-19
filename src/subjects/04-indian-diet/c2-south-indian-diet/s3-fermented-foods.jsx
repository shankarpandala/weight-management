import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import NutritionFactBlock from '../../../components/content/NutritionFactBlock.jsx';
import ComparisonTable from '../../../components/content/ComparisonTable.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

export default function FermentedFoods() {
  return (
    <div className="prose-health">
      <h1>Fermented Foods — Probiotic Benefits</h1>

      <p>
        South India has one of the world's richest traditions of food fermentation. From the
        ubiquitous idli and dosa batter to curd, buttermilk, pickles, and traditional beverages,
        fermented foods are consumed at nearly every meal. Modern research has revealed that these
        traditional practices confer significant nutritional and health benefits through enhanced
        bioavailability, probiotic content, and gut microbiome support.
      </p>

      <DefinitionBlock
        term="Fermentation"
        definition="A metabolic process in which microorganisms (bacteria, yeasts, or molds) convert carbohydrates into organic acids, gases, or alcohol under anaerobic or partially anaerobic conditions. In food science, fermentation serves to preserve food, enhance flavor, improve nutritional value, and introduce beneficial microorganisms (probiotics) into the diet."
      />

      <DefinitionBlock
        term="Probiotics"
        definition="Live microorganisms that, when administered in adequate amounts, confer a health benefit on the host (WHO/FAO definition). Probiotics must survive gastric acid, colonize the intestine (even transiently), and produce measurable health effects. Common probiotic genera include Lactobacillus, Bifidobacterium, and Streptococcus thermophilus."
      />

      {/* ============ IDLI/DOSA FERMENTATION ============ */}
      <h2>Idli/Dosa Batter Fermentation</h2>

      <p>
        The fermentation of rice-urad dal batter is one of the most scientifically studied
        traditional Indian food processes. The transformation that occurs during 12-18 hours of
        fermentation is remarkable and multi-dimensional.
      </p>

      <h3>The Microbiology</h3>

      <EvidenceBlock
        level="strong"
        title="Leuconostoc mesenteroides drives idli batter fermentation"
      >
        Research has identified the primary microorganism responsible for idli batter fermentation
        as Leuconostoc mesenteroides, a heterofermentative lactic acid bacterium. This organism
        produces lactic acid (lowering pH from ~6.0 to ~4.0), carbon dioxide (causing the batter
        to rise and become fluffy), and diacetyl (contributing to the characteristic aroma).
        As fermentation progresses, Streptococcus faecalis and Pediococcus cerevisiae also
        contribute. Yeasts, particularly Torulopsis candida and Saccharomyces cerevisiae,
        appear in later stages. The succession of microorganisms is temperature-dependent,
        with optimal fermentation occurring at 28-32°C (Blandino et al., 2003; Tamang et al.,
        2016).
      </EvidenceBlock>

      <h3>Nutritional Improvements from Fermentation</h3>

      <ComparisonTable
        title="Nutritional Changes During Idli Batter Fermentation"
        headers={['Parameter', 'Before Fermentation', 'After Fermentation (18h)', 'Change']}
        rows={[
          ['pH', '6.0-6.2', '3.8-4.2', 'Decreased (acidified)'],
          ['Phytic acid', '100% (baseline)', '60-80%', '20-40% reduction'],
          ['Iron bioavailability', 'Baseline', 'Significantly improved', '+40-60% more absorbable'],
          ['Zinc bioavailability', 'Baseline', 'Improved', '+20-30% more absorbable'],
          ['Riboflavin (B2)', 'Baseline', '2-3x increased', 'Synthesized by bacteria'],
          ['Niacin (B3)', 'Baseline', '1.5-2x increased', 'Synthesized by bacteria'],
          ['Thiamine (B1)', 'Baseline', 'Slight increase', 'Minor improvement'],
          ['Protein digestibility', '~65%', '~82%', '+17% improvement'],
          ['Trypsin inhibitors', '100% (baseline)', '40-60%', '40-60% reduction'],
          ['Flatulence factors', 'High (raffinose, stachyose)', 'Reduced', 'Broken down by bacteria'],
          ['Amino acid profile', 'Complementary (incomplete)', 'Complementary (improved)', 'Lysine + methionine balanced'],
        ]}
      />

      <EvidenceBlock
        level="strong"
        title="Fermentation dramatically improves mineral bioavailability"
      >
        The single most important nutritional effect of idli/dosa fermentation is the reduction
        of phytic acid — the primary anti-nutrient in cereals and legumes that chelates iron,
        zinc, and calcium, rendering them poorly absorbable. Lactic acid bacteria produce
        phytase enzymes that break down phytic acid during fermentation. Additionally, the
        organic acids produced (lactic acid, acetic acid) lower pH, which further promotes
        mineral solubilization. Studies show that iron absorption from fermented rice-dal products
        is 40-60% higher than from unfermented equivalents. This is particularly significant for
        India, where iron-deficiency anemia affects over 50% of women of reproductive age
        (Blandino et al., 2003; Marco et al., 2017).
      </EvidenceBlock>

      <NoteBlock title="Fermentation and the gas problem">
        Many people avoid dals and legumes due to flatulence. The raffinose and stachyose
        sugars in urad dal are primary offenders — human digestive enzymes cannot break them
        down, so colonic bacteria ferment them, producing gas. During batter fermentation,
        Leuconostoc and other bacteria partially break down these oligosaccharides. This is why
        idli and dosa cause less bloating than unfermented dal preparations for many individuals.
        Sprouting dals before cooking has a similar effect.
      </NoteBlock>

      {/* ============ CURD / YOGURT ============ */}
      <h2>Curd (Dahi) / Yogurt</h2>

      <p>
        Curd — homemade yogurt set using a culture from previous batches — is consumed daily
        across India, particularly in the South where curd rice (thayir sadam) is the traditional
        meal-ending course.
      </p>

      <NutritionFactBlock
        title="Homemade Curd (Whole Milk) — per 100g"
        servingSize="100g"
        calories={60}
        protein={3.1}
        carbs={4.9}
        fat={3.0}
        fiber={0}
        extras={[
          { label: 'Calcium', value: '149 mg' },
          { label: 'Phosphorus', value: '93 mg' },
          { label: 'Riboflavin (B2)', value: '0.19 mg' },
          { label: 'Vitamin B12', value: '0.36 mcg' },
          { label: 'Live cultures', value: 'Lactobacillus delbrueckii subsp. bulgaricus, Streptococcus thermophilus' },
        ]}
      />

      <EvidenceBlock
        level="strong"
        title="Yogurt/curd consumption associated with metabolic benefits"
      >
        A meta-analysis of prospective cohort studies found that daily yogurt consumption is
        associated with an 18% lower risk of type 2 diabetes (Gijsbers et al., 2016). The
        Lactobacillus and Streptococcus species in curd produce lactic acid, which may improve
        insulin sensitivity, and bacteriocins, which modulate gut microbiota composition. Curd
        also improves lactose tolerance — the bacterial cultures pre-digest 20-30% of the lactose,
        making curd tolerable for many lactose-intolerant individuals who cannot drink milk. The
        calcium in curd is more bioavailable than in milk due to the acidic pH. Additionally,
        the fermentation process produces conjugated linoleic acid (CLA), which has shown
        modest fat-mass-reducing effects in some studies (Marco et al., 2017).
      </EvidenceBlock>

      {/* ============ BUTTERMILK ============ */}
      <h2>Buttermilk (Chaas / Neer Moru / Majjige)</h2>

      <NutritionFactBlock
        title="Buttermilk (Diluted Curd) — per 200ml glass"
        servingSize="200ml"
        calories={40}
        protein={2.0}
        carbs={3.5}
        fat={1.5}
        fiber={0}
        extras={[
          { label: 'Calcium', value: '100 mg' },
          { label: 'Sodium', value: '~250-400 mg (with salt)' },
          { label: 'Probiotics', value: 'Lactobacillus (variable count)' },
          { label: 'Typical additions', value: 'Salt, curry leaves, ginger, green chili, asafoetida' },
        ]}
      />

      <NoteBlock title="Buttermilk: the ideal weight-management beverage">
        At only 40 kcal per 200ml glass, spiced buttermilk (chaas) is one of the best
        between-meal beverages for weight management. It provides hydration, probiotics, calcium,
        and electrolytes (sodium, potassium) with minimal calories. Compared to packaged fruit
        juices (100-120 kcal per 200ml), sweetened lassi (150-200 kcal per 200ml), or soft
        drinks (80-90 kcal per 200ml), buttermilk is dramatically lower in calories while
        offering actual nutritional value. The traditional practice of ending a South Indian
        meal with buttermilk or curd rice aids digestion through probiotic delivery at a time
        when the stomach pH is buffered by food, improving bacterial survival through the
        stomach.
      </NoteBlock>

      {/* ============ SOUTH INDIAN PICKLES ============ */}
      <h2>South Indian Pickles (Oorugai / Achar)</h2>

      <p>
        South Indian pickles differ from their North Indian counterparts in their use of
        sesame oil (gingelly oil), strong mustard-based spicing, and the prominence of specific
        ingredients like lemon, mango, garlic, and tamarind.
      </p>

      <ComparisonTable
        title="South Indian Pickle Varieties — Nutritional Overview"
        headers={['Pickle Type', 'Calories per 10g (1 tsp)', 'Key Nutrients', 'Fermented?', 'Notes']}
        rows={[
          ['Avakkai (raw mango)', '25-30 kcal', 'Vitamin C, mustard oil', 'Partially', 'High in oil and salt'],
          ['Lemon pickle', '20-25 kcal', 'Vitamin C, citric acid', 'Yes', 'Naturally fermented over days'],
          ['Garlic pickle', '25-30 kcal', 'Allicin, selenium', 'Partially', 'Antimicrobial properties'],
          ['Gongura (sorrel) pickle', '20-25 kcal', 'Iron, vitamin C, oxalic acid', 'Partially', 'High in iron, tangy'],
          ['Nellikai (amla) pickle', '15-20 kcal', 'Vitamin C (heat-stable)', 'Yes', 'Excellent antioxidant source'],
          ['Inji puli (ginger-tamarind)', '20-25 kcal', 'Gingerol, organic acids', 'No (cooked)', 'Digestive aid'],
        ]}
      />

      <WarningBlock title="Pickle: health benefits vs sodium concern">
        While South Indian pickles contain beneficial bioactive compounds (capsaicin, allicin,
        vitamin C, mustard oil compounds), they are extremely high in sodium — typically
        2000-4000 mg per 100g. A single tablespoon (15g) can contain 300-600 mg sodium, which
        is 15-30% of the recommended daily limit. The oil content also adds calories — a generous
        serving of avakkai pickle with its oil can add 50-80 kcal to a meal. For weight
        management and blood pressure control, limit pickles to 1 teaspoon per meal and blot
        excess oil. Naturally fermented varieties (lemon, amla) offer more probiotic benefit
        than oil-heavy varieties.
      </WarningBlock>

      {/* ============ TODDY / PALM WINE ============ */}
      <h2>Toddy / Palm Wine (Kallu)</h2>

      <NutritionFactBlock
        title="Fresh Toddy (Palm Wine) — per 100ml"
        servingSize="100ml"
        calories={35}
        protein={0.3}
        carbs={5.0}
        fat={0}
        fiber={0}
        extras={[
          { label: 'Alcohol content', value: '2-8% (increases with fermentation time)' },
          { label: 'Probiotics', value: 'Saccharomyces, Lactobacillus, Acetobacter (in fresh toddy)' },
          { label: 'B Vitamins', value: 'B1, B2, B12 (synthesized by yeasts)' },
          { label: 'Potassium', value: '~150 mg' },
        ]}
      />

      <NoteBlock title="Toddy: a fermented beverage with context-dependent effects">
        Fresh toddy (less than 4 hours old, alcohol content 1-2%) is consumed in parts of
        Kerala and Tamil Nadu as a probiotic-rich, mildly alcoholic beverage. It contains
        diverse microbial communities including beneficial yeasts and lactic acid bacteria.
        However, as fermentation progresses, alcohol content rises (up to 8%), and the health
        trade-off shifts negatively. Toddy adds calories (primarily from alcohol and sugars)
        and regular consumption of even moderate alcohol is associated with health risks. Fresh,
        low-alcohol toddy consumed occasionally is culturally traditional but should not be
        recommended as a health food. For probiotic benefits, buttermilk and curd are superior
        and alcohol-free alternatives.
      </NoteBlock>

      {/* ============ GUT MICROBIOME CONNECTION ============ */}
      <h2>Fermented Foods and the Gut Microbiome</h2>

      <EvidenceBlock
        level="strong"
        title="Fermented foods increase gut microbiome diversity"
      >
        A landmark 2021 Stanford study (Sonnenburg et al.) found that a high-fermented-food diet
        (6 servings daily for 10 weeks) significantly increased gut microbiome diversity — a
        marker consistently associated with better health outcomes — and decreased markers of
        inflammation (including IL-6, IL-10, and IL-12b). Remarkably, the high-fiber diet
        comparison group did not show the same increase in microbial diversity, suggesting that
        fermented foods have unique microbiome-modulating effects beyond their fiber content.
        The South Indian dietary pattern, with its multiple daily fermented food servings (idli
        at breakfast, curd at lunch, buttermilk in the afternoon, curd rice at dinner), naturally
        provides the level of fermented food intake that this study found beneficial.
      </EvidenceBlock>

      <EvidenceBlock
        level="moderate"
        title="Gut microbiome composition influences body weight"
      >
        Emerging evidence links gut microbiome composition to obesity and metabolic health. Obese
        individuals tend to have lower microbial diversity and an altered Firmicutes-to-
        Bacteroidetes ratio. Fermented foods introduce diverse bacterial species and their
        metabolites (short-chain fatty acids like butyrate, propionate, and acetate) that
        influence energy harvest from food, appetite regulation (via GLP-1 and PYY hormones),
        and fat storage. While the microbiome is not the sole determinant of body weight, it is
        increasingly recognized as a modifiable factor, and regular fermented food consumption
        is one of the most practical ways to positively influence it (Marco et al., 2017).
      </EvidenceBlock>

      <ComparisonTable
        title="South Indian Fermented Foods — Probiotic Summary"
        headers={['Food', 'Primary Organisms', 'Probiotic Strength', 'Daily Serving Suggestion', 'Calories']}
        rows={[
          ['Idli/Dosa batter', 'L. mesenteroides, S. faecalis', 'Moderate (some killed by cooking)', '2-3 idlis or 1-2 dosas', '120-200 kcal'],
          ['Curd (homemade)', 'L. bulgaricus, S. thermophilus', 'Strong (live cultures)', '100-150g', '60-90 kcal'],
          ['Buttermilk', 'Lactobacillus spp.', 'Strong (live, diluted)', '200-300ml', '40-60 kcal'],
          ['Fermented pickle (lemon)', 'Lactobacillus, Leuconostoc', 'Moderate', '1 tsp (5g)', '10-15 kcal'],
          ['Appam batter', 'Yeasts, LAB', 'Moderate (some killed)', '2-3 appams', '150-200 kcal'],
          ['Koozh (fermented ragi)', 'Lactobacillus, yeasts', 'Strong (consumed raw)', '200ml', '80-100 kcal'],
        ]}
      />

      <h2>Practical Strategies</h2>

      <ExampleBlock title="Maximizing probiotic intake from South Indian foods">
        <ul>
          <li><strong>End every meal with curd or buttermilk</strong> — the food in your stomach buffers gastric acid, helping more bacteria survive to reach the intestine</li>
          <li><strong>Use homemade curd over commercial curd</strong> — homemade tends to have higher and more diverse bacterial counts</li>
          <li><strong>Do not heat curd</strong> — cooking kills the beneficial bacteria; add curd to dishes after they cool below 40°C</li>
          <li><strong>Include naturally fermented pickles</strong> (lemon, amla) in small amounts</li>
          <li><strong>Try ragi koozh / ambali</strong> — a fermented millet porridge consumed cold, with high probiotic content</li>
          <li><strong>Aim for 2-3 fermented food servings daily</strong> — aligned with the Stanford study findings</li>
          <li><strong>Combine fermented foods with high-fiber foods</strong> (vegetables, whole grains) — fiber acts as a prebiotic, feeding the bacteria you introduce</li>
        </ul>
      </ExampleBlock>

      <WarningBlock title="Not all fermentation is probiotic">
        Cooking fermented batters (idli steaming, dosa grilling) kills most of the live
        bacteria. The nutritional improvements from fermentation (reduced phytates, increased
        B vitamins, better protein digestibility) persist after cooking, but the probiotic
        benefit does not. For direct probiotic intake, prioritize uncooked fermented foods:
        curd, buttermilk, naturally fermented pickles, and cold fermented porridges. Also note
        that commercially produced pickles preserved with vinegar and pasteurized curd products
        may contain few or no live bacteria — check labels for "live cultures."
      </WarningBlock>

      <ReferenceList
        references={[
          'Blandino, A., Al-Aseeri, M. E., Pandiella, S. S., Cantero, D., & Webb, C. (2003). Cereal-based fermented foods and beverages. Food Research International, 36(6), 527-543.',
          'Marco, M. L., Heeney, D., Binda, S., Cifelli, C. J., Cotter, P. D., Foligné, B., ... & Hutkins, R. (2017). Health benefits of fermented foods: microbiota and beyond. Current Opinion in Biotechnology, 44, 94-102.',
          'Tamang, J. P., Watanabe, K., & Holzapfel, W. H. (2016). Review: Diversity of microorganisms in global fermented foods and beverages. Frontiers in Microbiology, 7, 377.',
          'Sonnenburg, J. L., et al. (2021). Gut-microbiota-targeted diets modulate human immune status. Cell, 184(16), 4137-4153.',
          'Gijsbers, L., Ding, E. L., Malik, V. S., de Goede, J., Geleijnse, J. M., & Soedamah-Muthu, S. S. (2016). Consumption of dairy foods and diabetes incidence: a dose-response meta-analysis of observational studies. American Journal of Clinical Nutrition, 103(4), 1111-1124.',
          'Longvah, T., Ananthan, R., Bhaskarachary, K., & Venkaiah, K. (2017). Indian Food Composition Tables. National Institute of Nutrition, ICMR, Hyderabad.',
        ]}
      />
    </div>
  );
}
