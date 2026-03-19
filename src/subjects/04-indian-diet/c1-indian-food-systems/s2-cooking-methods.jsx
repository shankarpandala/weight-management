import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import NutritionFactBlock from '../../../components/content/NutritionFactBlock.jsx';
import ComparisonTable from '../../../components/content/ComparisonTable.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

export default function CookingMethods() {
  return (
    <div className="prose-health">
      <h1>Indian Cooking Methods &amp; Nutrient Retention</h1>

      <p>
        Indian cuisine employs a remarkable diversity of cooking techniques — from the rapid
        flash-frying of tadka to the slow fermentation of idli batter. Each method alters the
        nutritional profile of foods in distinct ways: destroying some nutrients, enhancing the
        bioavailability of others, and adding or subtracting calories. Understanding these effects
        is essential for making informed dietary choices, especially during weight management.
      </p>

      <DefinitionBlock
        term="Nutrient Retention"
        definition="The percentage of a nutrient that remains bioavailable in food after cooking, compared to its raw form. Nutrient retention depends on cooking temperature, duration, water usage, and the chemical stability of the nutrient in question. Fat-soluble vitamins (A, D, E, K) are generally more heat-stable than water-soluble vitamins (B-complex, C)."
      />

      {/* ============ TADKA / TEMPERING ============ */}
      <h2>Tadka / Tempering (Chaunk / Baghar)</h2>

      <DefinitionBlock
        term="Tadka"
        definition="A technique where whole or ground spices are briefly fried in hot oil or ghee (typically 10-30 seconds) to release fat-soluble flavor compounds and volatile oils. The tempered oil-spice mixture is then added to dals, curries, raita, or rice dishes. Common tempering spices include mustard seeds, cumin, curry leaves, dried red chilies, asafoetida, and fenugreek seeds."
      />

      <NoteBlock title="Caloric impact of tadka">
        A standard tadka uses 1-2 teaspoons of oil or ghee (5-10ml), adding approximately 45-90
        kcal to the entire dish. When shared across 3-4 servings, this adds only 15-30 kcal per
        serving — a modest and worthwhile caloric investment given the significant flavor and
        bioavailability benefits. The fat in tadka enhances absorption of fat-soluble vitamins
        and carotenoids from the dish.
      </NoteBlock>

      <EvidenceBlock
        level="moderate"
        title="Fat-soluble nutrient extraction through tempering"
      >
        Heating spices in oil during tadka releases curcumin from turmeric (bioavailability
        increased 7-8x when combined with piperine from black pepper and dissolved in fat),
        lycopene from tomatoes, and beta-carotene from curry leaves. The brief, high-heat
        exposure is insufficient to destroy most heat-stable compounds but sufficient to fracture
        cell walls and dissolve fat-soluble phytochemicals into the oil medium (Khokhar &
        Chauhan, 1986; IFCT 2017 cooking retention data).
      </EvidenceBlock>

      <ExampleBlock title="Optimizing tadka for nutrition">
        <ul>
          <li>Use measured oil (1 teaspoon per person) to control calories</li>
          <li>Add turmeric + black pepper together — piperine increases curcumin absorption by up to 2000%</li>
          <li>Add curry leaves to hot oil — releases fat-soluble vitamin A precursors</li>
          <li>Do not let oil reach smoking point — this degrades beneficial compounds and creates harmful aldehydes</li>
          <li>For weight management, use a non-stick pan to reduce the oil needed for effective tempering</li>
        </ul>
      </ExampleBlock>

      {/* ============ PRESSURE COOKING ============ */}
      <h2>Pressure Cooking</h2>

      <p>
        The pressure cooker is ubiquitous in Indian kitchens, used for dals, rice, vegetables,
        and meat. It operates at approximately 15 psi above atmospheric pressure, raising the
        boiling point of water to about 121°C. This dramatically reduces cooking time — a key
        factor in nutrient retention.
      </p>

      <EvidenceBlock
        level="strong"
        title="Pressure cooking retains more nutrients than boiling"
      >
        Multiple studies confirm that pressure cooking preserves significantly more water-soluble
        vitamins than conventional boiling. Because cooking time is reduced by 60-70% and less
        water is used (reducing leaching), retention of B vitamins is 20-35% higher with pressure
        cooking compared to open-pot boiling. Vitamin C retention is approximately 90-95% in
        pressure-cooked vegetables versus 40-70% in boiled vegetables, due to shorter heat
        exposure and the absence of oxygen (Khokhar & Chauhan, 1986; Slavin et al., 2013).
      </EvidenceBlock>

      <ComparisonTable
        title="Nutrient Retention: Pressure Cooking vs Open Boiling"
        headers={['Nutrient', 'Pressure Cooking', 'Open Boiling', 'Difference']}
        rows={[
          ['Thiamine (B1)', '80-90%', '55-65%', '+25% retention'],
          ['Riboflavin (B2)', '85-95%', '70-80%', '+15% retention'],
          ['Vitamin C', '90-95%', '40-70%', '+25-50% retention'],
          ['Folate', '75-85%', '50-65%', '+20% retention'],
          ['Iron bioavailability', 'Enhanced', 'Moderate', 'Positive effect'],
          ['Protein digestibility', 'Improved (denaturation)', 'Improved', 'Similar'],
          ['Cooking time (dal)', '15-20 min', '45-60 min', '60-70% less'],
          ['Water usage', 'Minimal', 'High (leaching)', 'Much less'],
        ]}
      />

      <NoteBlock title="Anti-nutrients and pressure cooking">
        Pressure cooking is particularly effective at reducing anti-nutritional factors in pulses.
        Phytic acid (which binds iron and zinc) is reduced by 30-50%. Trypsin inhibitors (which
        impair protein digestion) are reduced by 70-80%. Lectins in kidney beans (rajma) are
        almost completely inactivated — this is a safety-critical point, as undercooked rajma can
        cause severe gastrointestinal distress.
      </NoteBlock>

      {/* ============ DEEP FRYING ============ */}
      <h2>Deep Frying</h2>

      <p>
        Deep frying is used extensively in Indian cuisine for snacks (samosa, pakora, vada, puri,
        bhajiya), sweets (jalebi, gulab jamun), and festival foods. While it produces distinctive
        textures and flavors, deep frying has the most significant caloric impact of any Indian
        cooking method.
      </p>

      <WarningBlock title="Caloric impact of deep frying">
        Deep frying can add 100-200 kcal per serving due to oil absorption. The amount of oil
        absorbed depends on surface area, moisture content, batter coating, and frying temperature.
        Foods with high surface-area-to-volume ratios (like thin chips or boondi) absorb
        proportionally more oil. A single serving of pakoras (4-5 pieces) absorbs approximately
        15-20g of oil, adding 135-180 kcal from fat alone.
      </WarningBlock>

      <ComparisonTable
        title="Oil Absorption Rates by Food Type"
        headers={['Food Item', 'Serving', 'Calories (Before Frying)', 'Calories (After Frying)', 'Oil Absorbed']}
        rows={[
          ['Puri (1 piece)', '30g dough', '90 kcal', '150 kcal', '~7g (60 kcal added)'],
          ['Samosa (1 piece)', '60g', '100 kcal', '210 kcal', '~12g (110 kcal added)'],
          ['Pakora (4-5 pieces)', '80g batter+veg', '110 kcal', '260 kcal', '~17g (150 kcal added)'],
          ['Medu Vada (1 piece)', '40g batter', '80 kcal', '170 kcal', '~10g (90 kcal added)'],
          ['Potato Chips (30g)', '30g potato', '25 kcal', '160 kcal', '~15g (135 kcal added)'],
          ['Jalebi (2 pieces)', '50g batter+syrup', '120 kcal', '250 kcal', '~14g (130 kcal added)'],
        ]}
      />

      <EvidenceBlock
        level="strong"
        title="Frying temperature affects oil absorption"
      >
        Research from IFCT 2017 and food science literature confirms that frying at the correct
        temperature (170-180°C) minimizes oil absorption. When oil temperature is too low
        (below 150°C), food stays in oil longer and absorbs 30-40% more oil. Conversely,
        temperatures above 190°C cause surface burning while leaving interiors undercooked.
        Reusing oil multiple times also increases oil absorption due to breakdown of the oil
        structure and increased viscosity (Khokhar & Chauhan, 1986).
      </EvidenceBlock>

      <ExampleBlock title="Reducing calories from fried foods">
        <ul>
          <li>Air-fry instead of deep fry — reduces oil by 70-80%</li>
          <li>Shallow fry in a non-stick pan with 1-2 teaspoons of oil</li>
          <li>Use appe/paniyaram pan for vada shapes — uses minimal oil</li>
          <li>Bake samosas instead of frying (150 kcal vs 210 kcal)</li>
          <li>If deep frying, maintain oil at 170-180°C and do not reuse oil more than 2-3 times</li>
          <li>Drain fried foods on a wire rack, not paper towels (better drainage)</li>
        </ul>
      </ExampleBlock>

      {/* ============ DRY ROASTING ============ */}
      <h2>Dry Roasting (Bhunao / Dry Bhaji)</h2>

      <p>
        Dry roasting involves cooking in a dry pan or tawa without oil, or with minimal oil.
        This technique is used for spices (enhancing volatile compounds), papad, dry sabzis,
        and roasted nuts/seeds.
      </p>

      <EvidenceBlock
        level="moderate"
        title="Roasting enhances antioxidant availability"
      >
        Dry roasting of spices at moderate temperatures (120-150°C for 2-5 minutes) increases
        the availability of certain antioxidant compounds by breaking down cell walls while
        preserving most heat-stable phytochemicals. Roasting cumin seeds increases their
        thymoquinone content accessibility. Roasting peanuts increases their total phenolic
        content by 15-25% compared to raw. However, roasting at excessive temperatures or
        durations can degrade vitamin E and create acrylamide in starchy foods (IFCT 2017).
      </EvidenceBlock>

      <NoteBlock title="Caloric advantage of dry roasting">
        Dry roasting adds zero calories from fat, making it the most weight-management-friendly
        Indian cooking method. A dry-roasted papad has approximately 50 kcal versus 100 kcal when
        deep-fried. Dry sabzi made without oil saves 90-120 kcal per serving compared to
        oil-based preparations. For everyday cooking during calorie restriction, maximizing
        dry-roasting techniques delivers flavor without caloric penalty.
      </NoteBlock>

      {/* ============ FERMENTATION ============ */}
      <h2>Fermentation</h2>

      <p>
        Fermentation is deeply embedded in Indian food culture — from idli and dosa batter to
        curd, pickles, kanji, and dhokla. Unlike other cooking methods that apply heat,
        fermentation uses microbial activity to transform foods over hours or days.
      </p>

      <EvidenceBlock
        level="strong"
        title="Fermentation improves nutrient bioavailability"
      >
        Fermentation of rice-urad dal batter (for idli/dosa) reduces phytic acid by 20-40%,
        increasing iron and zinc bioavailability. The Leuconostoc mesenteroides bacteria that
        drive fermentation synthesize B vitamins — particularly riboflavin (B2), which increases
        by 2-3x, and niacin. Protein digestibility improves from approximately 65% to 82% after
        18-hour fermentation. The lactic acid produced lowers the pH, creating conditions that
        favor mineral absorption in the gut (Blandino et al., 2003; Tamang et al., 2016).
      </EvidenceBlock>

      <NoteBlock title="No significant caloric change from fermentation">
        Fermentation does not meaningfully alter the caloric content of foods. The slight
        reduction in starch (converted to lactic acid and CO2) is negligible. Two idlis from
        fermented batter have approximately the same calorie count as the equivalent amount of
        unfermented batter would — the benefit is nutritional quality and digestibility, not
        calorie reduction.
      </NoteBlock>

      {/* ============ STEAMING ============ */}
      <h2>Steaming (Bhapa / Idli Style)</h2>

      <p>
        Steaming uses indirect heat from water vapor at 100°C. In Indian cooking, it is used
        for idli, modak, patra, patrani machhi, and certain Bengali dishes (bhapa doi, bhapa
        ilish). Steaming is nutritionally one of the best cooking methods.
      </p>

      <ComparisonTable
        title="Vitamin Retention by Cooking Method"
        headers={['Cooking Method', 'Vitamin C', 'B Vitamins', 'Fat-Soluble Vitamins', 'Minerals', 'Added Calories']}
        rows={[
          ['Steaming', '85-95%', '80-90%', '90-95%', '95-100%', '0 kcal'],
          ['Pressure Cooking', '90-95%', '80-90%', '85-90%', '90-95%', '0 kcal'],
          ['Boiling (open)', '40-70%', '55-75%', '85-90%', '60-70%*', '0 kcal'],
          ['Dry Roasting', '20-40%', '70-85%', '75-85%', '95-100%', '0 kcal'],
          ['Tadka/Tempering', 'N/A', '75-85%', 'Enhanced', '95-100%', '15-30 kcal'],
          ['Shallow Frying', '20-40%', '60-75%', '70-80%', '90-95%', '40-80 kcal'],
          ['Deep Frying', '10-20%', '50-65%', '60-70%', '85-90%', '100-200 kcal'],
        ]}
      />

      <p>
        <em>* Minerals leach into boiling water. If the cooking water is discarded (as with
        rice cooked by the excess-water method), mineral loss can be 30-40%.</em>
      </p>

      <ExampleBlock title="The rice cooking controversy: absorption vs excess water">
        <strong>Absorption method</strong> (measured water, all absorbed): retains nearly 100%
        of water-soluble nutrients. <strong>Excess water method</strong> (rice boiled in large
        quantity of water, water drained): loses 30-50% of thiamine, folate, and iron into the
        discarded water. For weight management, some advocate the excess water method claiming it
        reduces starch, but research shows only a minor reduction in available carbohydrate
        (5-10%) while sacrificing significant micronutrients. The absorption method is
        nutritionally superior — control portions instead.
      </ExampleBlock>

      {/* ============ PRACTICAL FRAMEWORK ============ */}
      <h2>Practical Framework: Choosing Cooking Methods for Weight Management</h2>

      <ExampleBlock title="Cooking method hierarchy for calorie control">
        <ol>
          <li><strong>Best:</strong> Steaming, pressure cooking, dry roasting — zero added calories, maximum nutrient retention</li>
          <li><strong>Good:</strong> Tadka with measured oil, sauteing with 1 tsp oil — minimal added calories, enhanced flavor and bioavailability</li>
          <li><strong>Moderate:</strong> Shallow frying with measured oil — moderate caloric addition, acceptable for occasional use</li>
          <li><strong>Limit:</strong> Deep frying — high caloric addition (100-200 kcal per serving), reserve for occasional treats</li>
        </ol>
      </ExampleBlock>

      <WarningBlock title="Hidden calories in restaurant Indian food">
        Restaurant and takeaway Indian food typically uses 3-5x more oil and ghee than home
        cooking. A restaurant dal tadka may use 3-4 tablespoons of ghee versus the 1-2 teaspoons
        sufficient at home, adding 300-400 extra calories per serving. Restaurant gravies often
        contain cashew paste, cream, and generous butter. A single restaurant butter chicken
        serving can contain 500-700 kcal versus 250-350 kcal for a well-made home version. Cooking
        at home with measured oil is one of the single most impactful strategies for calorie
        control in an Indian diet.
      </WarningBlock>

      <h2>Reheating and Nutrient Degradation</h2>

      <p>
        Reheating food is an everyday reality in Indian households, yet it has meaningful
        nutritional consequences that are often overlooked.
      </p>

      <EvidenceBlock
        level="moderate"
        title="Repeated reheating degrades heat-sensitive vitamins"
      >
        Each reheating cycle further reduces heat-sensitive nutrients. Vitamin C, already
        partially destroyed during initial cooking, can be reduced by an additional 20-30%
        per reheat cycle. Folate degrades similarly. B vitamins in dal and rice decline with
        each reheat. A study on reheated spinach found vitamin C content reduced to less than
        15% of the original raw value after two reheating cycles. However, minerals (iron,
        calcium, zinc) and macronutrients (protein, fat, carbohydrates) are largely unaffected
        by reheating. The caloric content of food does not change with reheating.
      </EvidenceBlock>

      <NoteBlock title="Resistant starch formation on cooling and reheating">
        An interesting exception to the "reheating degrades nutrition" rule is resistant starch
        formation. When starchy foods like rice and potatoes are cooked, cooled (refrigerated
        for 12-24 hours), and then reheated, some of the digestible starch retrograde into
        resistant starch — a form that resists digestion in the small intestine and functions
        more like fiber. This can reduce the effective caloric content of rice by 10-15% and
        lower the glycemic response. The traditional South Indian practice of eating leftover
        rice as "pzhaya sadam" (day-old rice soaked in water) may inadvertently exploit this
        mechanism.
      </NoteBlock>

      <ExampleBlock title="Best practices for reheating Indian food">
        <ul>
          <li>Reheat only once — each cycle degrades nutrients further</li>
          <li>Use microwave or stovetop with minimal additional water to reduce leaching</li>
          <li>Add fresh garnishes (coriander, lemon juice, raw onion) after reheating to restore some vitamin C</li>
          <li>For rice: cook, cool, refrigerate, and reheat once — this maximizes resistant starch formation</li>
          <li>Avoid reheating leafy greens repeatedly — nitrate-to-nitrite conversion increases with each cycle</li>
          <li>Dals and sambar reheat well with minimal nutrient loss beyond the initial cooking</li>
        </ul>
      </ExampleBlock>

      <ReferenceList
        references={[
          'Longvah, T., Ananthan, R., Bhaskarachary, K., & Venkaiah, K. (2017). Indian Food Composition Tables. National Institute of Nutrition, ICMR, Hyderabad.',
          'Khokhar, S., & Chauhan, B. M. (1986). Effect of domestic processing and cooking on the nutritive value of Indian foods. Indian Journal of Nutrition and Dietetics, 23, 351-361.',
          'Slavin, M., Cheng, Z., Luther, M., Kenworthy, W., & Yu, L. (2013). Antioxidant properties and phenolic, isoflavone, tocopherol and carotenoid composition of blanched versus non-blanched soybeans. Journal of Food Science, 78(8), C1151-C1157.',
          'Blandino, A., Al-Aseeri, M. E., Pandiella, S. S., Cantero, D., & Webb, C. (2003). Cereal-based fermented foods and beverages. Food Research International, 36(6), 527-543.',
          'Tamang, J. P., Watanabe, K., & Holzapfel, W. H. (2016). Review: Diversity of microorganisms in global fermented foods and beverages. Frontiers in Microbiology, 7, 377.',
          'ICMR-NIN. (2024). Dietary Guidelines for Indians — A Manual. National Institute of Nutrition, Hyderabad.',
        ]}
      />
    </div>
  );
}
