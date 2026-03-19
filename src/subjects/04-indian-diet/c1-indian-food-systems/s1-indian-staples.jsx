import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import NutritionFactBlock from '../../../components/content/NutritionFactBlock.jsx';
import ComparisonTable from '../../../components/content/ComparisonTable.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

export default function IndianStaples() {
  return (
    <div className="prose-health">
      <h1>Nutritional Profile of Indian Staples</h1>

      <p>
        India's dietary landscape is built on a foundation of cereals, pulses, and cooking fats
        that have sustained one of the world's largest populations for millennia. Understanding the
        precise nutritional composition of these staples is essential for building effective
        weight-management and health-optimization strategies tailored to Indian diets.
      </p>

      <DefinitionBlock
        term="Indian Food Composition Tables (IFCT)"
        definition="The IFCT 2017, published by the National Institute of Nutrition (NIN) Hyderabad under ICMR, is the most comprehensive database of the nutritional composition of Indian foods. It covers 528 foods with data on 151 nutritional parameters including proximates, minerals, vitamins, amino acids, fatty acids, and bioactive compounds."
      />

      {/* ============ RICE ============ */}
      <h2>Rice — India's Primary Cereal</h2>

      <p>
        Rice is the staple food for over 65% of the Indian population, particularly in southern,
        eastern, and northeastern states. India is the world's second-largest rice producer.
        However, the type of rice consumed significantly alters its nutritional impact.
      </p>

      <NutritionFactBlock
        title="White Rice (Polished, Raw) — per 100g"
        servingSize="100g raw"
        calories={356}
        protein={6.8}
        carbs={78.2}
        fat={0.5}
        fiber={0.2}
        extras={[
          { label: 'Glycemic Index', value: '70-73 (High)' },
          { label: 'Iron', value: '0.7 mg' },
          { label: 'Thiamine (B1)', value: '0.06 mg' },
          { label: 'Zinc', value: '1.2 mg' },
        ]}
      />

      <NutritionFactBlock
        title="Brown Rice (Unpolished, Raw) — per 100g"
        servingSize="100g raw"
        calories={362}
        protein={7.9}
        carbs={76.0}
        fat={2.7}
        fiber={3.5}
        extras={[
          { label: 'Glycemic Index', value: '50-55 (Low-Medium)' },
          { label: 'Iron', value: '1.5 mg' },
          { label: 'Thiamine (B1)', value: '0.34 mg' },
          { label: 'Magnesium', value: '143 mg' },
          { label: 'Zinc', value: '2.0 mg' },
        ]}
      />

      <NutritionFactBlock
        title="Parboiled Rice (Raw) — per 100g"
        servingSize="100g raw"
        calories={358}
        protein={7.4}
        carbs={77.4}
        fat={1.0}
        fiber={1.4}
        extras={[
          { label: 'Glycemic Index', value: '55-65 (Medium)' },
          { label: 'Iron', value: '1.2 mg' },
          { label: 'Thiamine (B1)', value: '0.21 mg' },
          { label: 'Resistant Starch', value: 'Higher than white rice' },
        ]}
      />

      <EvidenceBlock
        level="strong"
        title="Parboiling improves nutrient retention"
      >
        Parboiling forces water-soluble B vitamins from the bran into the endosperm before milling.
        IFCT 2017 data confirms that parboiled rice retains 2-3x more thiamine than polished white
        rice. Additionally, the gelatinization-retrogradation cycle during parboiling increases
        resistant starch content, lowering the effective glycemic index by 10-15 points compared to
        regular white rice (Longvah et al., 2017).
      </EvidenceBlock>

      {/* ============ WHEAT ============ */}
      <h2>Wheat — The Northern Staple</h2>

      <p>
        Wheat dominates the diet of northern, central, and western India, consumed primarily as
        roti/chapati. The processing level — from whole wheat atta to refined maida — dramatically
        affects nutritional value.
      </p>

      <NutritionFactBlock
        title="Whole Wheat Flour (Atta) — per 100g"
        servingSize="100g"
        calories={341}
        protein={12.1}
        carbs={71.2}
        fat={1.7}
        fiber={11.2}
        extras={[
          { label: 'Glycemic Index', value: '55-65 (Medium)' },
          { label: 'Iron', value: '4.9 mg' },
          { label: 'Folate', value: '36.6 mcg' },
          { label: 'Zinc', value: '2.7 mg' },
        ]}
      />

      <NutritionFactBlock
        title="Refined Wheat Flour (Maida) — per 100g"
        servingSize="100g"
        calories={348}
        protein={11.0}
        carbs={73.9}
        fat={0.9}
        fiber={2.7}
        extras={[
          { label: 'Glycemic Index', value: '70-75 (High)' },
          { label: 'Iron', value: '2.7 mg' },
          { label: 'Folate', value: '20.3 mcg' },
        ]}
      />

      <NutritionFactBlock
        title="Semolina (Suji/Rava) — per 100g"
        servingSize="100g"
        calories={348}
        protein={10.3}
        carbs={74.5}
        fat={0.7}
        fiber={3.9}
        extras={[
          { label: 'Glycemic Index', value: '65-70 (Medium-High)' },
          { label: 'Iron', value: '3.6 mg' },
        ]}
      />

      <WarningBlock title="Maida: the nutritional downgrade">
        Refining wheat into maida removes up to 75% of the fiber, 60% of the iron, and 80% of the
        B vitamins present in whole wheat atta. Products made with maida — naan, paratha from
        restaurants, biscuits, pastries, and white bread — are nutritionally inferior and produce
        sharper blood glucose spikes. Always prefer whole wheat atta for daily roti consumption.
      </WarningBlock>

      {/* ============ MILLETS ============ */}
      <h2>Millets — The Ancient Grains Reclaimed</h2>

      <p>
        India declared 2023 as the International Year of Millets through the UN. Millets were
        India's original staples before the Green Revolution shifted agriculture toward rice and
        wheat. They are now recognized for their superior nutritional profile, lower water
        requirements, and climate resilience.
      </p>

      <NutritionFactBlock
        title="Finger Millet (Ragi/Nachni) — per 100g"
        servingSize="100g"
        calories={328}
        protein={7.3}
        carbs={72.0}
        fat={1.3}
        fiber={11.5}
        extras={[
          { label: 'Calcium', value: '344 mg (highest among cereals)' },
          { label: 'Iron', value: '3.9 mg' },
          { label: 'Glycemic Index', value: '54-68 (Medium)' },
        ]}
      />

      <NutritionFactBlock
        title="Sorghum (Jowar) — per 100g"
        servingSize="100g"
        calories={349}
        protein={10.4}
        carbs={72.6}
        fat={1.9}
        fiber={10.7}
        extras={[
          { label: 'Iron', value: '4.1 mg' },
          { label: 'Zinc', value: '1.6 mg' },
          { label: 'Glycemic Index', value: '50-62 (Low-Medium)' },
          { label: 'Phenolic Compounds', value: 'High (antioxidant)' },
        ]}
      />

      <NutritionFactBlock
        title="Pearl Millet (Bajra) — per 100g"
        servingSize="100g"
        calories={361}
        protein={11.6}
        carbs={67.5}
        fat={5.0}
        fiber={11.3}
        extras={[
          { label: 'Iron', value: '8.0 mg (highest among millets)' },
          { label: 'Zinc', value: '3.1 mg' },
          { label: 'Glycemic Index', value: '52-60 (Low-Medium)' },
        ]}
      />

      <ComparisonTable
        title="Millets vs Rice vs Wheat — per 100g raw"
        headers={['Nutrient', 'White Rice', 'Whole Wheat', 'Ragi', 'Jowar', 'Bajra']}
        rows={[
          ['Calories (kcal)', '356', '341', '328', '349', '361'],
          ['Protein (g)', '6.8', '12.1', '7.3', '10.4', '11.6'],
          ['Fiber (g)', '0.2', '11.2', '11.5', '10.7', '11.3'],
          ['Iron (mg)', '0.7', '4.9', '3.9', '4.1', '8.0'],
          ['Calcium (mg)', '10', '48', '344', '27', '42'],
          ['Zinc (mg)', '1.2', '2.7', '2.3', '1.6', '3.1'],
          ['Glycemic Index', '70-73', '55-65', '54-68', '50-62', '52-60'],
          ['Gluten', 'No', 'Yes', 'No', 'No', 'No'],
        ]}
      />

      <EvidenceBlock
        level="strong"
        title="Millets and glycemic control"
      >
        A systematic review and meta-analysis of 65 studies by the International Crops Research
        Institute for the Semi-Arid Tropics (ICRISAT) found that replacing rice or wheat with
        millets reduced fasting blood glucose by an average of 12% and HbA1c by 0.36% in
        individuals with type 2 diabetes. The high fiber content, slower starch digestibility,
        and presence of polyphenols all contribute to this effect (NIN Hyderabad; ICMR-NIN
        Dietary Guidelines 2024).
      </EvidenceBlock>

      <NoteBlock title="Why millets are making a comeback">
        The decline of millets began during the Green Revolution (1960s-70s) when government
        subsidies favored rice and wheat. The 2018 declaration of millets as "Nutri-Cereals" by
        the Indian government and the 2023 International Year of Millets have driven renewed
        interest. Millets require 60-70% less water than rice and grow in poor soils, making
        them climate-resilient crops. For weight management, their higher fiber and lower GI
        make them preferable to polished rice.
      </NoteBlock>

      {/* ============ DALS ============ */}
      <h2>Dal Varieties — India's Protein Backbone</h2>

      <p>
        Pulses (dals) are the primary protein source for India's large vegetarian population.
        India produces and consumes more pulses than any other country. However, the protein
        content, digestibility, and anti-nutrient levels vary significantly among varieties.
      </p>

      <NutritionFactBlock
        title="Toor Dal (Pigeon Pea, Split) — per 100g dry"
        servingSize="100g dry"
        calories={343}
        protein={22.3}
        carbs={57.6}
        fat={1.7}
        fiber={15.0}
        extras={[
          { label: 'Iron', value: '5.2 mg' },
          { label: 'Folate', value: '456 mcg' },
          { label: 'Limiting Amino Acid', value: 'Methionine + Cysteine' },
        ]}
      />

      <NutritionFactBlock
        title="Moong Dal (Green Gram, Split) — per 100g dry"
        servingSize="100g dry"
        calories={348}
        protein={24.0}
        carbs={59.9}
        fat={1.2}
        fiber={8.2}
        extras={[
          { label: 'Iron', value: '4.4 mg' },
          { label: 'Digestibility', value: 'Highest among dals (82-85%)' },
          { label: 'GI (cooked)', value: '25-38 (Low)' },
        ]}
      />

      <NutritionFactBlock
        title="Masoor Dal (Red Lentil, Split) — per 100g dry"
        servingSize="100g dry"
        calories={343}
        protein={25.1}
        carbs={56.5}
        fat={0.7}
        fiber={10.8}
        extras={[
          { label: 'Iron', value: '7.6 mg' },
          { label: 'Cooking Time', value: 'Fastest among dals (15-20 min)' },
        ]}
      />

      <NutritionFactBlock
        title="Chana Dal (Bengal Gram, Split) — per 100g dry"
        servingSize="100g dry"
        calories={360}
        protein={20.8}
        carbs={59.8}
        fat={5.3}
        fiber={18.3}
        extras={[
          { label: 'Iron', value: '5.3 mg' },
          { label: 'GI (cooked)', value: '8-12 (Very Low — one of the lowest GI foods)' },
          { label: 'Zinc', value: '3.3 mg' },
        ]}
      />

      <NutritionFactBlock
        title="Urad Dal (Black Gram, Split) — per 100g dry"
        servingSize="100g dry"
        calories={341}
        protein={24.0}
        carbs={59.6}
        fat={1.4}
        fiber={13.4}
        extras={[
          { label: 'Iron', value: '7.2 mg' },
          { label: 'Phosphorus', value: '406 mg' },
          { label: 'Note', value: 'Key ingredient in idli/dosa batter' },
        ]}
      />

      <ExampleBlock title="Practical dal protein math">
        One standard bowl of cooked dal (approximately 200ml or 150g cooked, made from ~50g dry
        dal) provides about 10-12g of protein. To get adequate protein from dal alone, you would
        need 6-7 bowls per day — clearly impractical. This is why dal should be combined with
        cereals (for amino acid complementation) and supplemented with dairy, nuts, and other
        protein sources.
      </ExampleBlock>

      {/* ============ GHEE ============ */}
      <h2>Ghee — Clarified Butter</h2>

      <NutritionFactBlock
        title="Ghee (Cow's Milk) — per 100g"
        servingSize="100g"
        calories={897}
        protein={0.0}
        carbs={0.0}
        fat={99.7}
        fiber={0.0}
        extras={[
          { label: 'Saturated Fat', value: '61.9g' },
          { label: 'Monounsaturated Fat', value: '28.7g' },
          { label: 'Short-chain fatty acids (butyrate)', value: '3-4g' },
          { label: 'Vitamin A', value: '840 mcg RE' },
          { label: 'Cholesterol', value: '256 mg' },
          { label: 'Smoke Point', value: '250°C (highest among cooking fats)' },
        ]}
      />

      <EvidenceBlock
        level="moderate"
        title="Ghee in moderate amounts is not harmful"
      >
        Despite being high in saturated fat, moderate ghee consumption (1-2 teaspoons per day)
        has not been associated with increased cardiovascular risk in observational studies of
        Indian populations. Ghee contains short-chain fatty acids, particularly butyrate, which
        has anti-inflammatory properties and supports gut health. However, ghee is extremely
        calorie-dense at 45 kcal per teaspoon, so portion control is essential during weight
        management (ICMR-NIN Dietary Guidelines; Longvah et al., 2017).
      </EvidenceBlock>

      {/* ============ COCONUT ============ */}
      <h2>Coconut — The Southern Essential</h2>

      <NutritionFactBlock
        title="Fresh Coconut Kernel — per 100g"
        servingSize="100g"
        calories={354}
        protein={3.4}
        carbs={15.2}
        fat={33.5}
        fiber={9.0}
        extras={[
          { label: 'MCT Content', value: '~15g (mainly lauric acid)' },
          { label: 'Potassium', value: '356 mg' },
          { label: 'Manganese', value: '1.5 mg' },
        ]}
      />

      <NoteBlock title="Coconut forms and their caloric impact">
        The caloric density of coconut varies enormously by form. Fresh coconut gratings used in
        chutneys and curries (2 tablespoons, ~20g) add about 70 kcal. Coconut milk (100ml) ranges
        from 150-200 kcal. Coconut oil (1 tablespoon) is 120 kcal. Desiccated coconut is the most
        calorie-dense at 660 kcal per 100g. Being mindful of the form used is critical for anyone
        counting calories on a South Indian diet.
      </NoteBlock>

      <h2>Key Takeaways for Weight Management</h2>

      <ExampleBlock title="Practical staple swaps for better nutrition">
        <ul>
          <li>Replace polished white rice with parboiled rice or a rice-millet mix (50:50)</li>
          <li>Use whole wheat atta instead of maida for all home cooking</li>
          <li>Include at least one millet-based meal per day (ragi dosa, jowar roti, bajra khichdi)</li>
          <li>Aim for 2-3 servings of different dals daily, combined with cereals</li>
          <li>Limit ghee to 1-2 teaspoons per day — use it for flavor, not as a cooking medium</li>
          <li>When using coconut, prefer fresh gratings over coconut milk or cream</li>
        </ul>
      </ExampleBlock>

      <ReferenceList
        references={[
          'Longvah, T., Ananthan, R., Bhaskarachary, K., & Venkaiah, K. (2017). Indian Food Composition Tables. National Institute of Nutrition, ICMR, Hyderabad.',
          'ICMR-NIN. (2020). Nutrient Requirements and Recommended Dietary Allowances for Indians. National Institute of Nutrition, Hyderabad.',
          'ICMR-NIN. (2024). Dietary Guidelines for Indians — A Manual. National Institute of Nutrition, Hyderabad.',
          'National Nutrition Monitoring Bureau (NNMB). (2017). Diet and Nutritional Status of Urban Population in India. NIN, Hyderabad.',
          'Kam, J., Puranik, S., Yadav, R., Manwaring, H. R., Pierre, S., Srivastava, R. K., & Yadav, R. S. (2016). Dietary interventions for type 2 diabetes: how millet comes to help. Frontiers in Plant Science, 7, 1454.',
        ]}
      />
    </div>
  );
}
