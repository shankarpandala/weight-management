import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import NutritionFactBlock from '../../../components/content/NutritionFactBlock.jsx';
import ComparisonTable from '../../../components/content/ComparisonTable.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

export default function RiceBasedMeals() {
  return (
    <div className="prose-health">
      <h1>Rice-Based Meals — Nutritional Analysis</h1>

      <p>
        South Indian cuisine centers on rice in its many forms — steamed, fermented, ground
        into batters, and combined with lentils. This section provides a detailed nutritional
        breakdown of the most commonly consumed South Indian rice-based dishes, with practical
        guidance on portion control, glycemic management, and calorie optimization for weight
        management.
      </p>

      <DefinitionBlock
        term="Glycemic Index (GI)"
        definition="A measure of how quickly a food raises blood glucose levels after consumption, on a scale of 0 to 100. Foods with a GI below 55 are considered low-GI, 55-69 medium-GI, and 70+ high-GI. The GI of a meal is determined not by individual ingredients but by the combined effect of all components — fiber, fat, protein, and acid all lower the glycemic response."
      />

      {/* ============ IDLI ============ */}
      <h2>Idli</h2>

      <p>
        The idli is arguably the most nutritionally elegant everyday food in Indian cuisine. Made
        from a fermented batter of rice and urad dal (typically 3:1 or 4:1 ratio), the
        fermentation process transforms a simple cereal-legume combination into a food with
        enhanced bioavailability, improved protein quality, and probiotic content.
      </p>

      <NutritionFactBlock
        title="Idli (2 pieces, medium size) — approximately 120g"
        servingSize="2 idlis (~120g)"
        calories={120}
        protein={4.0}
        carbs={24.0}
        fat={0.5}
        fiber={1.2}
        extras={[
          { label: 'Glycemic Index', value: '55-65 (Medium)' },
          { label: 'Iron', value: '1.4 mg' },
          { label: 'Calcium', value: '18 mg' },
          { label: 'Thiamine (B1)', value: '0.06 mg' },
          { label: 'Riboflavin (B2)', value: '0.04 mg (2-3x higher than unfermented batter)' },
          { label: 'Sodium', value: '~350 mg (from salt in batter)' },
        ]}
      />

      <EvidenceBlock
        level="strong"
        title="Fermentation enhances idli's nutritional profile"
      >
        The 12-18 hour fermentation of idli batter by Leuconostoc mesenteroides and Streptococcus
        faecalis bacteria produces several measurable nutritional improvements: phytic acid is
        reduced by 20-40% (increasing iron and zinc bioavailability), B vitamin content increases
        (particularly riboflavin and niacin), protein digestibility improves from approximately
        65% to 82%, and the lactic acid produced lowers the pH, further enhancing mineral
        absorption. The amino acid complementation between rice (adequate methionine, low lysine)
        and urad dal (adequate lysine, low methionine) creates a more complete protein profile
        than either ingredient alone (Blandino et al., 2003; Kalpana et al., 2019).
      </EvidenceBlock>

      <NoteBlock title="Idli for weight management">
        Two idlis at 120 kcal represent one of the lowest-calorie, most nutritious breakfast
        options in any cuisine worldwide. However, idlis are low in protein (4g per 2 idlis) and
        fat, meaning they may not keep you satiated for long. Pair with sambar (adds 6-8g
        protein), a boiled egg (6g protein), or a generous portion of chutney containing peanuts
        or coconut for better satiety. Ragi idlis (made with finger millet flour replacing part
        of the rice) add calcium, fiber, and lower the GI further.
      </NoteBlock>

      {/* ============ DOSA ============ */}
      <h2>Dosa</h2>

      <p>
        The dosa uses the same fermented batter as idli but is cooked as a thin crepe on a hot
        tawa with oil. The cooking method significantly changes the nutritional profile compared
        to steamed idli.
      </p>

      <NutritionFactBlock
        title="Plain Dosa (1 medium, ~80g)"
        servingSize="1 medium dosa (~80g)"
        calories={120}
        protein={3.2}
        carbs={20.0}
        fat={3.5}
        fiber={0.8}
        extras={[
          { label: 'Oil Used', value: '1-2 tsp (adds 45-90 kcal)' },
          { label: 'Glycemic Index', value: '60-70 (Medium-High)' },
        ]}
      />

      <NutritionFactBlock
        title="Masala Dosa (1 piece with potato filling)"
        servingSize="1 masala dosa (~180g)"
        calories={250}
        protein={5.5}
        carbs={35.0}
        fat={10.0}
        fiber={2.0}
        extras={[
          { label: 'Potato filling', value: '~100g (adds 100-120 kcal)' },
          { label: 'Oil for dosa + filling', value: '~12-15g total' },
          { label: 'Glycemic Index', value: '65-75 (Medium-High, potato raises it)' },
        ]}
      />

      <NutritionFactBlock
        title="Rava Dosa (1 medium)"
        servingSize="1 medium rava dosa (~90g)"
        calories={175}
        protein={3.0}
        carbs={22.0}
        fat={8.0}
        fiber={0.5}
        extras={[
          { label: 'Note', value: 'Higher oil absorption due to crispy texture' },
          { label: 'Semolina-based', value: 'Higher GI than regular dosa' },
        ]}
      />

      <ComparisonTable
        title="Dosa Variants — Caloric Comparison"
        headers={['Dosa Type', 'Calories', 'Protein (g)', 'Fat (g)', 'Best For']}
        rows={[
          ['Plain dosa (thin, less oil)', '100-120', '3.2', '2-3', 'Weight management'],
          ['Plain dosa (restaurant, crispy)', '150-180', '3.2', '6-8', 'Occasional treat'],
          ['Masala dosa (home)', '200-250', '5.5', '8-10', 'Balanced meal with sambar'],
          ['Masala dosa (restaurant)', '300-400', '5.5', '15-20', 'Very high calorie — limit'],
          ['Rava dosa', '175-220', '3.0', '8-12', 'Higher calorie — smaller portion'],
          ['Ragi dosa', '110-130', '3.5', '2-3', 'Best nutrient profile'],
          ['Set dosa (2 thick)', '200-240', '5.0', '4-6', 'More filling, moderate calories'],
          ['Neer dosa', '90-100', '2.0', '0.5', 'Lowest calorie (no fermentation/oil)'],
        ]}
      />

      {/* ============ SAMBAR ============ */}
      <h2>Sambar</h2>

      <p>
        Sambar is the nutritional backbone of the South Indian meal — a dal-based vegetable stew
        that provides protein, fiber, micronutrients, and flavor. Its composition varies by
        region and household, but the core ingredients are toor dal, tamarind, sambar powder
        (containing coriander, cumin, fenugreek, and red chili), and assorted vegetables.
      </p>

      <NutritionFactBlock
        title="Sambar (100ml / ~120g serving)"
        servingSize="100ml (~120g)"
        calories={80}
        protein={4.5}
        carbs={10.0}
        fat={2.5}
        fiber={2.8}
        extras={[
          { label: 'Iron', value: '1.8 mg' },
          { label: 'Vitamin C', value: '8-12 mg (from vegetables and tamarind)' },
          { label: 'Potassium', value: '210 mg' },
          { label: 'Folate', value: '28 mcg' },
          { label: 'Typical vegetables', value: 'Drumstick, brinjal, okra, radish, ash gourd' },
        ]}
      />

      <EvidenceBlock
        level="strong"
        title="Dal in sambar reduces the glycemic response of rice"
      >
        Jenkins et al. (1981) pioneered the concept of the Glycemic Index and demonstrated that
        adding legumes to a carbohydrate-rich meal significantly blunts the postprandial glucose
        spike. The protein and soluble fiber in toor dal slow gastric emptying and carbohydrate
        absorption. The tamarind in sambar adds organic acids that further reduce the glycemic
        response. Studies specific to South Indian meals show that eating rice with sambar
        (dal-based) produces a 20-30% lower glycemic response than eating rice with rasam
        (watery, no dal) or rice alone (Kalpana et al., 2019). This is why the traditional
        South Indian thali structure — rice + sambar + rasam + vegetable — is metabolically
        sounder than rice eaten with just pickle or papad.
      </EvidenceBlock>

      {/* ============ RASAM ============ */}
      <h2>Rasam</h2>

      <NutritionFactBlock
        title="Rasam (150ml serving)"
        servingSize="150ml (~160g)"
        calories={50}
        protein={1.5}
        carbs={8.0}
        fat={1.5}
        fiber={1.0}
        extras={[
          { label: 'Vitamin C', value: '10-15 mg (from tomato and tamarind)' },
          { label: 'Key spices', value: 'Black pepper, cumin, garlic, curry leaves' },
          { label: 'Piperine', value: 'From black pepper — enhances nutrient absorption' },
        ]}
      />

      <NoteBlock title="Rasam's digestive properties">
        Rasam's reputation as a digestive aid has scientific basis. The black pepper provides
        piperine, which stimulates digestive enzyme secretion and enhances gastric motility.
        Cumin (jeera) contains cuminaldehyde, which stimulates salivary gland function and
        digestive enzyme activity. Garlic rasam adds allicin, with antimicrobial properties.
        The warm, spicy, and acidic nature of rasam promotes hydration and may help with
        appetite regulation — it is very low in calories while being deeply satisfying.
      </NoteBlock>

      {/* ============ PONGAL ============ */}
      <h2>Pongal (Ven Pongal)</h2>

      <NutritionFactBlock
        title="Ven Pongal (1 cup / ~200g)"
        servingSize="1 cup (~200g)"
        calories={200}
        protein={6.0}
        carbs={30.0}
        fat={6.5}
        fiber={1.5}
        extras={[
          { label: 'Ghee content', value: '~5-8g (home) / 15-20g (restaurant)' },
          { label: 'Moong dal', value: 'Provides easily digestible protein' },
          { label: 'Black pepper + cumin', value: 'Carminative, aids digestion' },
          { label: 'Cashews', value: 'Add 3-5g fat per serving (often omitted in diet versions)' },
        ]}
      />

      <WarningBlock title="Restaurant pongal calorie inflation">
        Hotel/restaurant pongal uses 3-5x more ghee and adds generous cashew tempering. A
        restaurant serving easily reaches 350-450 kcal versus the 200 kcal achievable at home.
        For weight management, make pongal at home with 1 teaspoon ghee per serving, skip the
        cashew tempering, and increase the moong dal ratio (try 1:1 rice to dal instead of the
        traditional 3:1) for higher protein and lower GI.
      </WarningBlock>

      {/* ============ FULL SOUTH INDIAN MEAL ============ */}
      <h2>The Complete South Indian Rice Meal (Thali)</h2>

      <p>
        The traditional South Indian lunch — served on a banana leaf or steel plate — is a
        carefully structured meal that, in its traditional form, represents sound nutritional
        engineering. Understanding the caloric breakdown helps with portion-based management.
      </p>

      <ComparisonTable
        title="Standard South Indian Thali — Component Breakdown"
        headers={['Component', 'Typical Serving', 'Calories', 'Protein (g)', 'Role in Meal']}
        rows={[
          ['Rice (steamed)', '1.5 cups cooked (~200g)', '240', '4.5', 'Energy base'],
          ['Sambar', '150ml', '100', '6.0', 'Protein + vegetables'],
          ['Rasam', '150ml', '50', '1.5', 'Digestion + hydration'],
          ['Vegetable poriyal/kootu', '100g', '80', '2.5', 'Fiber + micronutrients'],
          ['Curd/buttermilk', '100ml', '60', '3.5', 'Probiotics + calcium'],
          ['Papad (roasted)', '1 piece', '50', '2.0', 'Crunch + protein'],
          ['Pickle', '1 tsp', '15', '0', 'Flavor + appetite stimulant'],
          ['Payasam/sweet (if any)', '50ml', '100', '1.0', 'Occasional dessert'],
          ['TOTAL (without sweet)', '—', '~550', '~20', 'Complete balanced meal'],
          ['TOTAL (with sweet)', '—', '~650', '~21', 'Festival/occasion meal'],
        ]}
      />

      <NoteBlock title="The 450-550 calorie South Indian lunch">
        A well-portioned South Indian thali without sweets provides approximately 450-550 kcal —
        an excellent caloric range for a main meal during weight management. The key is rice
        portion control: keeping rice to 1-1.5 cups cooked (versus the 2-3 cups many people
        serve) makes this a nutritionally complete, satisfying, and calorie-appropriate meal.
        The sequential eating pattern (sambar rice first, then rasam rice, then curd rice) also
        naturally paces the meal and promotes satiety.
      </NoteBlock>

      <EvidenceBlock
        level="moderate"
        title="Meal structure reduces glycemic impact"
      >
        The South Indian thali structure inherently moderates the glycemic response through
        multiple mechanisms: (1) dal-based sambar provides protein and soluble fiber that slow
        carbohydrate absorption; (2) tamarind in sambar and rasam provides organic acids that
        reduce starch digestibility; (3) the poriyal (vegetable stir-fry) adds fiber; (4) ending
        with curd rice adds dairy protein and fat. Studies show that the overall glycemic response
        of a traditional South Indian meal is significantly lower than its rice content alone
        would suggest, due to these synergistic effects (Kalpana et al., 2019; Jenkins et al.,
        1981).
      </EvidenceBlock>

      <h2>Practical Strategies for Weight Management</h2>

      <ExampleBlock title="Optimizing South Indian meals for calorie control">
        <ul>
          <li><strong>Breakfast:</strong> 2 idlis + 1 bowl sambar = ~200 kcal with 10g protein (add 1 egg for +70 kcal and +6g protein)</li>
          <li><strong>Breakfast alternative:</strong> 1 plain dosa (home, thin) + sambar = ~200 kcal</li>
          <li><strong>Lunch:</strong> 1 cup rice + generous sambar + rasam + poriyal + curd = ~450 kcal</li>
          <li><strong>Swap white rice for brown/parboiled rice</strong> to lower GI by 15-20 points</li>
          <li><strong>Increase sambar serving, decrease rice serving</strong> — more protein per calorie</li>
          <li><strong>Skip or minimize</strong>: fried items (vada, bajji), coconut chutney in large quantities, payasam</li>
          <li><strong>Use ragi/millet flour</strong> for dosa and idli for added fiber and lower GI</li>
        </ul>
      </ExampleBlock>

      <ExampleBlock title="Home vs restaurant calorie comparison">
        <ul>
          <li>Home masala dosa + sambar: ~330 kcal</li>
          <li>Restaurant masala dosa + chutney + sambar: ~550-700 kcal (extra ghee, oil, larger portion)</li>
          <li>Home pongal (1 cup): ~200 kcal</li>
          <li>Restaurant pongal (large serving): ~400-500 kcal</li>
          <li>Home thali (controlled): ~450-550 kcal</li>
          <li>Restaurant meals/banana leaf: ~800-1200 kcal (unlimited servings, generous ghee)</li>
        </ul>
      </ExampleBlock>

      <WarningBlock title="The banana leaf meal trap">
        Banana leaf meals at restaurants (especially during festivals and weddings) encourage
        unlimited consumption through constant refilling. A single wedding banana leaf meal
        can easily reach 1500-2000 kcal, equivalent to an entire day's caloric needs for many
        individuals. The social pressure to accept second and third servings, combined with
        multiple desserts, makes these occasions high-risk for calorie overconsumption. Strategy:
        eat slowly, keep one hand over your plate to signal you are done, and decline sweet
        second servings.
      </WarningBlock>

      <ReferenceList
        references={[
          'Longvah, T., Ananthan, R., Bhaskarachary, K., & Venkaiah, K. (2017). Indian Food Composition Tables. National Institute of Nutrition, ICMR, Hyderabad.',
          'Kalpana, K., Lal, R., & Kusuma, D. L. (2019). Nutritional evaluation of traditional South Indian breakfast and lunch meals. Journal of Food Science and Technology, 56(8), 3567-3575.',
          'Jenkins, D. J., Wolever, T. M., Taylor, R. H., Barker, H., Fielden, H., Baldwin, J. M., ... & Goff, D. V. (1981). Glycemic index of foods: a physiological basis for carbohydrate exchange. American Journal of Clinical Nutrition, 34(3), 362-366.',
          'Blandino, A., Al-Aseeri, M. E., Pandiella, S. S., Cantero, D., & Webb, C. (2003). Cereal-based fermented foods and beverages. Food Research International, 36(6), 527-543.',
          'ICMR-NIN. (2024). Dietary Guidelines for Indians — A Manual. National Institute of Nutrition, Hyderabad.',
        ]}
      />
    </div>
  );
}
