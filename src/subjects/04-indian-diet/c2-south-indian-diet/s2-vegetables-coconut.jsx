import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import NutritionFactBlock from '../../../components/content/NutritionFactBlock.jsx';
import ComparisonTable from '../../../components/content/ComparisonTable.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

export default function VegetablesCoconut() {
  return (
    <div className="prose-health">
      <h1>South Indian Vegetables, Coconut &amp; Curry Leaves</h1>

      <p>
        South Indian cuisine features a distinctive array of vegetables and ingredients that
        are less common in other regional Indian diets. From the nutritional powerhouse moringa
        (drumstick) to the versatile coconut in its many forms, these ingredients offer unique
        health benefits. This section provides evidence-based nutritional profiles and practical
        guidance for incorporating them into a weight-management diet.
      </p>

      {/* ============ DRUMSTICK / MORINGA ============ */}
      <h2>Drumstick (Moringa oleifera) — A Nutritional Powerhouse</h2>

      <DefinitionBlock
        term="Moringa"
        definition="Moringa oleifera, commonly known as drumstick tree or 'the miracle tree,' is native to the Indian subcontinent. Every part of the tree is used — leaves as a vegetable or powder, immature seed pods (drumsticks) in sambar and curries, seeds for oil and water purification, and flowers as a delicacy. It has been called the most nutrient-dense plant discovered to date."
      />

      <NutritionFactBlock
        title="Drumstick Pods (Moringa Pods) — per 100g"
        servingSize="100g edible portion (2-3 drumstick pieces)"
        calories={37}
        protein={2.1}
        carbs={8.5}
        fat={0.2}
        fiber={3.2}
        extras={[
          { label: 'Vitamin C', value: '120 mg' },
          { label: 'Calcium', value: '30 mg' },
          { label: 'Iron', value: '0.4 mg' },
          { label: 'Potassium', value: '259 mg' },
          { label: 'Beta-carotene', value: '110 mcg' },
        ]}
      />

      <NutritionFactBlock
        title="Moringa Leaves (Fresh) — per 100g"
        servingSize="100g fresh leaves"
        calories={64}
        protein={9.4}
        carbs={8.3}
        fat={1.4}
        fiber={2.0}
        extras={[
          { label: 'Vitamin A', value: '6780 mcg (as beta-carotene)' },
          { label: 'Vitamin C', value: '220 mg' },
          { label: 'Calcium', value: '185 mg' },
          { label: 'Iron', value: '4.0 mg' },
          { label: 'Potassium', value: '337 mg' },
          { label: 'Protein', value: '9.4g (highest among common leafy greens)' },
        ]}
      />

      <EvidenceBlock
        level="moderate"
        title="Moringa's exceptional nutrient density is well-documented"
      >
        A comprehensive review by Fuglie (2001) and subsequent analyses confirm that moringa
        leaves contain, gram for gram, 7x the vitamin C of oranges, 4x the calcium of milk,
        4x the vitamin A of carrots, 2x the protein of yogurt, and 3x the potassium of bananas.
        While these comparisons are based on dry weight and practical serving sizes differ,
        moringa remains objectively one of the most nutrient-dense foods available. Clinical
        trials have shown hypoglycemic effects (fasting blood glucose reduction) in diabetic
        subjects consuming moringa leaf powder, though effect sizes vary and more large-scale
        trials are needed. The high antioxidant content (quercetin, chlorogenic acid) is
        well-established through biochemical analysis (NIN IFCT 2017).
      </EvidenceBlock>

      <ExampleBlock title="Ways to use moringa in daily cooking">
        <ul>
          <li>Add drumstick pods to sambar — the classic preparation that provides both flavor and nutrition</li>
          <li>Moringa leaf thoran/poriyal — stir-fry with minimal oil, garlic, and grated coconut</li>
          <li>Add moringa leaf powder (1-2 tsp) to idli/dosa batter for nutrient fortification</li>
          <li>Moringa rasam — use fresh leaves in pepper-cumin rasam</li>
          <li>Smoothie addition — 1 teaspoon moringa powder adds negligible calories but significant micronutrients</li>
        </ul>
      </ExampleBlock>

      {/* ============ ASH GOURD ============ */}
      <h2>Ash Gourd (Boodida Gummadikaya / Neer Poosanikai)</h2>

      <NutritionFactBlock
        title="Ash Gourd — per 100g"
        servingSize="100g"
        calories={12}
        protein={0.4}
        carbs={2.6}
        fat={0.1}
        fiber={0.5}
        extras={[
          { label: 'Water Content', value: '96%' },
          { label: 'Vitamin C', value: '10 mg' },
          { label: 'Potassium', value: '150 mg' },
          { label: 'Calcium', value: '19 mg' },
        ]}
      />

      <NoteBlock title="Ash gourd: the ultimate high-volume, low-calorie vegetable">
        At only 12 kcal per 100g (96% water), ash gourd is one of the lowest-calorie vegetables
        available. A large 200g serving in kootu or sambar adds only 24 kcal while providing
        significant volume and satiety. For weight management, ash gourd-based dishes are
        excellent for increasing meal volume without meaningful caloric impact. The traditional
        South Indian ash gourd kootu (with moong dal and coconut) provides a satisfying, low-
        calorie side dish at approximately 80-100 kcal per generous serving. Ash gourd juice
        (popular in some wellness circles) has no special fat-burning properties but is a
        hydrating, near-zero-calorie beverage.
      </NoteBlock>

      {/* ============ BANANA FLOWER ============ */}
      <h2>Banana Flower (Vazhaipoo)</h2>

      <NutritionFactBlock
        title="Banana Flower — per 100g"
        servingSize="100g cleaned florets"
        calories={34}
        protein={1.6}
        carbs={5.1}
        fat={0.6}
        fiber={5.7}
        extras={[
          { label: 'Iron', value: '3.6 mg' },
          { label: 'Calcium', value: '32 mg' },
          { label: 'Phosphorus', value: '50 mg' },
          { label: 'Vitamin E', value: '1.1 mg' },
        ]}
      />

      <NoteBlock title="Banana flower for iron and fiber">
        Banana flower is an underutilized vegetable with an impressive iron content (3.6 mg per
        100g, comparable to spinach) and exceptional fiber (5.7g per 100g). The traditional
        Tamil Nadu preparation of banana flower poriyal or usili (cooked with ground dal) is both
        iron-rich and protein-enriched. The high fiber content promotes satiety and digestive
        health. At 34 kcal per 100g, it is another excellent high-volume, low-calorie food for
        weight management. Banana stem (vazhaith-thandhu) is similarly low-calorie (26 kcal/100g)
        with high fiber and is traditionally used for kidney health, though rigorous clinical
        evidence for specific therapeutic effects is limited.
      </NoteBlock>

      {/* ============ COCONUT ============ */}
      <h2>Coconut — The Many Forms</h2>

      <p>
        Coconut is the defining ingredient of South Indian and Kerala cuisine. It appears in
        virtually every dish — chutneys, curries, rice preparations, sweets, and beverages.
        However, the caloric impact varies enormously depending on the form used, making it
        critical to understand the differences for weight management.
      </p>

      <ComparisonTable
        title="Coconut Forms — Caloric Comparison"
        headers={['Form', 'Per 100g / 100ml', 'Typical Serving', 'Calories per Serving', 'Fat per Serving']}
        rows={[
          ['Fresh coconut (gratings)', '354 kcal', '2 tbsp (20g)', '71 kcal', '6.7g'],
          ['Coconut milk (thick)', '230 kcal', '100ml in curry', '230 kcal', '24g'],
          ['Coconut milk (thin)', '100 kcal', '100ml in curry', '100 kcal', '10g'],
          ['Coconut cream', '330 kcal', '50ml', '165 kcal', '17g'],
          ['Coconut oil', '884 kcal', '1 tbsp (15ml)', '130 kcal', '14g'],
          ['Desiccated coconut', '660 kcal', '2 tbsp (15g)', '99 kcal', '10g'],
          ['Coconut water', '19 kcal', '200ml', '38 kcal', '0.2g'],
          ['Coconut flour', '400 kcal', '2 tbsp (15g)', '60 kcal', '3g'],
        ]}
      />

      <NutritionFactBlock
        title="Coconut Oil — per 100ml"
        servingSize="100ml"
        calories={884}
        protein={0}
        carbs={0}
        fat={100}
        fiber={0}
        extras={[
          { label: 'Saturated Fat', value: '86.5g (highest of any common cooking oil)' },
          { label: 'Lauric Acid (C12:0)', value: '44-52g (primary MCT)' },
          { label: 'Capric Acid (C10:0)', value: '6-7g' },
          { label: 'Caprylic Acid (C8:0)', value: '5-8g' },
          { label: 'Total MCTs', value: '55-65g' },
          { label: 'Smoke Point', value: '177°C (virgin) / 204°C (refined)' },
        ]}
      />

      <EvidenceBlock
        level="moderate"
        title="Coconut oil MCTs and metabolic effects"
      >
        Coconut oil contains 55-65% medium-chain triglycerides (MCTs), which are metabolized
        differently from long-chain fatty acids — MCTs are absorbed directly into the portal
        circulation and oxidized in the liver, producing a modest thermogenic effect. A study
        by Assuncao et al. (2009) found that women who consumed 30ml coconut oil daily for
        12 weeks had a greater reduction in waist circumference compared to a soybean oil group,
        though total body weight change was not significant. However, coconut oil is still 86.5%
        saturated fat — the American Heart Association advises limiting saturated fat intake.
        The evidence does NOT support coconut oil as a "weight loss food." It is a calorie-dense
        fat (130 kcal per tablespoon) that should be used in moderation, not added liberally
        to the diet under the assumption it burns fat.
      </EvidenceBlock>

      <WarningBlock title="Coconut oil marketing vs science">
        Coconut oil has been aggressively marketed as a "superfood" and "fat burner." The
        reality is more nuanced. Pure MCT oil (concentrated C8 and C10 fatty acids) does show
        modest thermogenic and appetite-suppressing effects, but coconut oil is NOT pure MCT oil.
        Lauric acid (C12), which makes up nearly half of coconut oil, behaves metabolically more
        like a long-chain fatty acid than a true MCT. The weight-loss claims based on MCT
        research do not directly translate to coconut oil. For cooking, coconut oil is perfectly
        fine in moderate amounts and adds excellent flavor to South Indian dishes, but it should
        not be consumed in excess expecting weight-loss benefits.
      </WarningBlock>

      {/* ============ CURRY LEAVES ============ */}
      <h2>Curry Leaves (Kadi Patta / Karivepillai)</h2>

      <NutritionFactBlock
        title="Curry Leaves (Fresh) — per 100g"
        servingSize="100g (typical use: 8-10 leaves = ~2g)"
        calories={108}
        protein={6.1}
        carbs={18.7}
        fat={1.0}
        fiber={6.4}
        extras={[
          { label: 'Iron', value: '7.0 mg' },
          { label: 'Calcium', value: '810 mg' },
          { label: 'Vitamin A', value: '12,600 IU (as beta-carotene)' },
          { label: 'Vitamin C', value: '4 mg' },
          { label: 'Folic acid', value: '93.9 mcg' },
        ]}
      />

      <NoteBlock title="Curry leaves: more than a garnish">
        Per 100g, curry leaves are among the richest sources of calcium (810 mg), iron (7 mg),
        and vitamin A (12,600 IU) among commonly available herbs. While the typical serving of
        8-10 leaves (2g) provides only a fraction of these amounts, the cumulative effect of
        daily use across multiple dishes (tadka, sambar, rasam, chutneys) is meaningful. Unlike
        many herbs, curry leaves are typically consumed (not discarded) in South Indian cooking,
        particularly when crisped in oil during tempering. The fat-soluble vitamin A precursors
        are better absorbed when curry leaves are tempered in oil — another example of traditional
        cooking wisdom aligning with nutritional science.
      </NoteBlock>

      <EvidenceBlock
        level="moderate"
        title="Curry leaves show hypoglycemic and hypolipidemic effects"
      >
        Animal and small human studies suggest that curry leaf extract has blood glucose-lowering
        properties, potentially through mahanimbine (a carbazole alkaloid) that enhances insulin
        sensitivity. Some studies report modest LDL cholesterol reduction. The alkaloid
        girinimbine in curry leaves has shown anti-diabetic potential in preclinical models.
        However, clinical evidence in humans is limited to small, short-term studies. The
        traditional practice of eating curry leaves daily as part of the diet is safe and
        potentially beneficial, but therapeutic claims require larger clinical trials for
        confirmation (NIN IFCT 2017).
      </EvidenceBlock>

      {/* ============ COMPARISON ============ */}
      <h2>South Indian vs North Indian Vegetable Curries</h2>

      <ComparisonTable
        title="Regional Curry Style Comparison"
        headers={['Parameter', 'South Indian Style', 'North Indian Style']}
        rows={[
          ['Primary fat', 'Coconut oil, gingelly oil', 'Ghee, mustard oil, refined oil'],
          ['Coconut usage', 'Extensive (gratings, milk, oil)', 'Minimal (occasional garnish)'],
          ['Cream/cashew paste', 'Rare', 'Common in restaurant gravies'],
          ['Tempering style', 'Mustard seeds, curry leaves, urad dal', 'Cumin, onion, garlic, whole spices'],
          ['Base for gravy', 'Coconut paste, tamarind, tomato', 'Onion-tomato, cashew, cream'],
          ['Typical calories (per 200g)', '100-180 kcal', '200-350 kcal'],
          ['Vegetables used', 'Drumstick, ash gourd, banana flower, raw banana, snake gourd', 'Paneer, potato, cauliflower, peas, palak'],
          ['Protein source', 'Dal-based (sambar, kootu)', 'Paneer, dal, cream-based'],
          ['Fiber content', 'Generally higher (more vegetables)', 'Moderate'],
          ['Oil per serving', '1-2 tsp', '2-4 tsp (restaurant: much more)'],
        ]}
      />

      <NoteBlock title="Caloric advantage of South Indian vegetable preparations">
        South Indian vegetable preparations (poriyal, kootu, avial) tend to be significantly
        lower in calories than North Indian equivalents (palak paneer, shahi paneer, malai kofta)
        because they use less oil, avoid cream and cashew-paste bases, and feature lower-calorie
        vegetables. A typical poriyal (100g) is 60-90 kcal, while a typical North Indian paneer
        curry (100g) can be 180-300 kcal. For weight management, the South Indian approach of
        lightly cooked vegetables with minimal coconut and tempering offers excellent
        nutrient-to-calorie ratios.
      </NoteBlock>

      <h2>Practical Strategies for Weight Management</h2>

      <ExampleBlock title="High-impact, low-calorie South Indian vegetables">
        <ul>
          <li><strong>Ash gourd:</strong> 12 kcal/100g — use in kootu and sambar for maximum volume</li>
          <li><strong>Snake gourd:</strong> 18 kcal/100g — excellent in poriyal and sambar</li>
          <li><strong>Bottle gourd:</strong> 14 kcal/100g — versatile in kootu, chutney, and dal</li>
          <li><strong>Banana flower:</strong> 34 kcal/100g — high fiber, excellent iron source</li>
          <li><strong>Drumstick:</strong> 37 kcal/100g — nutrient-dense, adds flavor to sambar</li>
          <li><strong>Raw banana:</strong> 83 kcal/100g — moderate calorie but resistant starch when cooked and cooled</li>
          <li><strong>Brinjal (eggplant):</strong> 24 kcal/100g — low calorie, absorbs flavors well</li>
        </ul>
      </ExampleBlock>

      <ExampleBlock title="Managing coconut calories">
        <ul>
          <li>In chutneys: use 1 tbsp fresh coconut + water for volume instead of 3-4 tbsp coconut</li>
          <li>In curries: use thin coconut milk (100 kcal/100ml) not thick (230 kcal/100ml)</li>
          <li>For tempering: use 1 tsp coconut oil (45 kcal) — sufficient for flavor</li>
          <li>In poriyals: limit grated coconut garnish to 1 tsp per serving</li>
          <li>For avial: use ground coconut paste sparingly — bulk up with yogurt instead</li>
          <li>Coconut water (200ml, 38 kcal) is an excellent low-calorie hydration choice</li>
        </ul>
      </ExampleBlock>

      <ReferenceList
        references={[
          'Longvah, T., Ananthan, R., Bhaskarachary, K., & Venkaiah, K. (2017). Indian Food Composition Tables. National Institute of Nutrition, ICMR, Hyderabad.',
          'Assunção, M. L., Ferreira, H. S., dos Santos, A. F., Cabral, C. R., & Florêncio, T. M. (2009). Effects of dietary coconut oil on the biochemical and anthropometric profiles of women presenting abdominal obesity. Lipids, 44(7), 593-601.',
          'Fuglie, L. J. (2001). The Miracle Tree: Moringa oleifera: Natural Nutrition for the Tropics. Church World Service, Dakar, Senegal.',
          'ICMR-NIN. (2024). Dietary Guidelines for Indians — A Manual. National Institute of Nutrition, Hyderabad.',
          'Sacks, F. M., Lichtenstein, A. H., Wu, J. H., et al. (2017). Dietary fats and cardiovascular disease: a presidential advisory from the American Heart Association. Circulation, 136(3), e1-e23.',
          'Eyres, L., Eyres, M. F., Chisholm, A., & Brown, R. C. (2016). Coconut oil consumption and cardiovascular risk factors in humans. Nutrition Reviews, 74(4), 267-280.',
        ]}
      />
    </div>
  );
}
