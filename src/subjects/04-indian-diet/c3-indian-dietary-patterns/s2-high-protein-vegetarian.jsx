import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import NutritionFactBlock from '../../../components/content/NutritionFactBlock.jsx';
import ComparisonTable from '../../../components/content/ComparisonTable.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

export default function HighProteinVegetarian() {
  return (
    <div className="prose-health">
      <h1>High-Protein Indian Vegetarian Diet</h1>

      <p>
        India has the world's largest vegetarian population — approximately 30-40% of Indians
        follow a vegetarian or predominantly vegetarian diet. While nutritionally viable, Indian
        vegetarian diets frequently deliver inadequate protein, with surveys showing average
        intakes of only 0.6-0.8 g/kg body weight — below even the conservative RDA minimum.
        For weight management, muscle preservation, and optimal health, protein intake of
        1.2-1.6 g/kg is desirable. This section provides a comprehensive, evidence-based strategy
        for achieving high protein intake on an Indian vegetarian diet.
      </p>

      {/* ============ THE PROTEIN PROBLEM ============ */}
      <h2>The Indian Vegetarian Protein Problem</h2>

      <DefinitionBlock
        term="Protein Quality"
        definition="A measure of a protein source's ability to provide all essential amino acids in adequate proportions and in a digestible form. Measured by the Protein Digestibility-Corrected Amino Acid Score (PDCAAS) or the newer Digestible Indispensable Amino Acid Score (DIAAS). Animal proteins score 0.9-1.0 (high quality). Indian vegetarian proteins score lower individually: dal 0.5-0.7, rice 0.5-0.6, wheat 0.4-0.5. However, combining complementary plant proteins can achieve scores approaching 1.0."
      />

      <EvidenceBlock
        level="strong"
        title="Average Indian vegetarian protein intake is suboptimal"
      >
        National Nutrition Monitoring Bureau (NNMB) data shows that the average Indian consumes
        approximately 48-55g protein per day, with vegetarians at the lower end (45-50g).
        For a 70 kg individual, this translates to only 0.64-0.71 g/kg — below the ICMR RDA
        of 0.8-1.0 g/kg and far below the 1.2-1.6 g/kg recommended for active individuals or
        those in caloric deficit. The problem is structural: when cereals dominate the plate
        (providing only 7-10% protein by calories), overall protein intake is inherently limited.
        Increasing protein requires deliberate substitution of cereals with protein-rich foods,
        not simply adding more food (NIN India protein data; ICMR-NIN 2020).
      </EvidenceBlock>

      <ComparisonTable
        title="Protein Needs by Goal (for 70kg individual)"
        headers={['Goal', 'Protein Target (g/kg)', 'Daily Total (g)', 'Challenge Level on Veg Indian Diet']}
        rows={[
          ['Prevent deficiency (RDA)', '0.8 g/kg', '56g', 'Moderate — achievable with basic dal + dairy'],
          ['Weight management (caloric deficit)', '1.2-1.4 g/kg', '84-98g', 'Challenging — requires planning'],
          ['Muscle building / resistance training', '1.4-1.6 g/kg', '98-112g', 'Very challenging — needs deliberate strategy'],
          ['Elderly / sarcopenia prevention', '1.0-1.2 g/kg', '70-84g', 'Challenging — appetite often reduced'],
        ]}
      />

      {/* ============ PROTEIN SOURCES ============ */}
      <h2>Indian Vegetarian Protein Sources — Ranked</h2>

      <ComparisonTable
        title="Protein Content of Indian Vegetarian Foods"
        headers={['Food', 'Serving', 'Protein (g)', 'Calories', 'Protein per 100 kcal']}
        rows={[
          ['Soy chunks (textured)', '30g dry', '15.6', '102', '15.3g'],
          ['Tofu (firm)', '100g', '12.0', '120', '10.0g'],
          ['Paneer (low-fat)', '50g', '9.0', '120', '7.5g'],
          ['Greek yogurt (plain)', '150g', '12.0', '90', '13.3g'],
          ['Moong sprouts', '100g', '7.5', '68', '11.0g'],
          ['Chana dal (cooked)', '100g (from 35g dry)', '7.3', '120', '6.1g'],
          ['Toor dal (cooked)', '100g (from 35g dry)', '7.0', '115', '6.1g'],
          ['Curd (whole milk)', '150g', '4.7', '90', '5.2g'],
          ['Milk (toned)', '200ml', '6.0', '100', '6.0g'],
          ['Whole moong (cooked)', '100g', '7.1', '105', '6.8g'],
          ['Rajma (cooked)', '100g', '6.7', '118', '5.7g'],
          ['Peanuts (roasted)', '30g', '7.8', '170', '4.6g'],
          ['Almonds', '20g (12-15 nuts)', '4.2', '116', '3.6g'],
          ['Paneer (full-fat)', '50g', '7.0', '150', '4.7g'],
          ['Roti (whole wheat)', '1 medium (30g atta)', '3.5', '100', '3.5g'],
          ['Rice (cooked)', '150g (1 cup)', '3.5', '180', '1.9g'],
        ]}
      />

      <NoteBlock title="Soy chunks: the most protein-dense Indian vegetarian food">
        Textured soy protein (soy chunks / meal maker) provides an extraordinary 52g protein
        per 100g dry weight — comparable to chicken breast on a dry-weight basis. At 15.6g
        protein per 30g serving (102 kcal), soy chunks offer the best protein-to-calorie ratio
        of any common Indian vegetarian food. They are also inexpensive (approximately Rs 60-80
        per 200g pack, providing 100g+ protein). Despite persistent myths, soy consumption is
        safe: a meta-analysis of clinical trials found no adverse effects on male testosterone
        levels from moderate soy intake (Reed et al., 2021). Including soy chunks 3-4 times
        per week can dramatically improve protein intake.
      </NoteBlock>

      {/* ============ AMINO ACID COMPLEMENTATION ============ */}
      <h2>Amino Acid Complementation</h2>

      <DefinitionBlock
        term="Complementary Proteins"
        definition="Two or more protein sources that, when combined, provide all essential amino acids in adequate proportions. The amino acid deficiency of one food is compensated by the surplus in the other. The classic Indian example is dal (high in lysine, low in methionine) + rice (high in methionine, low in lysine) = complete protein comparable to animal protein in amino acid profile."
      />

      <EvidenceBlock
        level="strong"
        title="Complementary proteins do not need to be consumed at the same meal"
      >
        Earlier research suggested that complementary proteins must be consumed simultaneously
        for effective utilization. Young and Pellett (1994) demonstrated that this is unnecessary —
        the body maintains a free amino acid pool that buffers intake over the course of a day.
        As long as complementary proteins are consumed within the same day, amino acid
        complementation occurs effectively. This means that dal at lunch and rice at dinner, or
        nuts at a snack and dal at a meal, still achieve complementation. However, consuming
        them together (as in the traditional dal-rice combination) does maximize post-meal
        protein synthesis efficiency (Phillips & Van Loon, 2011).
      </EvidenceBlock>

      <ComparisonTable
        title="Complementary Protein Combinations in Indian Cuisine"
        headers={['Combination', 'Limiting AA (Food 1)', 'Complemented By (Food 2)', 'PDCAAS Score (Combined)', 'Traditional Dish']}
        rows={[
          ['Dal + Rice', 'Rice: low lysine', 'Dal: high lysine', '0.80-0.85', 'Dal chawal, sambar rice, khichdi'],
          ['Dal + Wheat', 'Wheat: low lysine', 'Dal: high lysine', '0.75-0.82', 'Dal + roti, dal paratha'],
          ['Legume + Cereal + Dairy', 'Cereal: low lysine', 'Dal: lysine, Dairy: methionine', '0.90-0.95', 'Khichdi + curd, dal roti + raita'],
          ['Soy + Cereal', 'Cereal: low lysine', 'Soy: high lysine', '0.90-0.95', 'Soy chunk biryani, soy roti'],
          ['Nuts + Legumes', 'Variable', 'Mutually complementary', '0.75-0.85', 'Trail mix, chana-peanut chaat'],
        ]}
      />

      {/* ============ MEAL-BY-MEAL STRATEGY ============ */}
      <h2>Meal-by-Meal Protein Optimization</h2>

      <ExampleBlock title="Protein distribution strategy">
        <p>
          Research shows that distributing protein evenly across meals (rather than concentrating
          at dinner) maximizes muscle protein synthesis. Aim for 20-30g protein per meal, 3-4
          times daily. The typical Indian pattern of a low-protein breakfast (2 idlis = 4g protein),
          moderate lunch (dal rice = 12g), and moderate dinner (roti sabzi = 10g) needs restructuring.
        </p>
      </ExampleBlock>

      <ComparisonTable
        title="Breakfast Protein Boosters"
        headers={['Standard Breakfast', 'Protein', 'Upgraded Version', 'Protein', 'Increase']}
        rows={[
          ['2 idlis + chutney', '4g', '2 idlis + sambar + 1 egg', '16g', '+12g'],
          ['2 plain dosas', '6g', '1 dosa + moong dal chilla + curd', '18g', '+12g'],
          ['Poha (1 cup)', '4g', 'Poha with peanuts + sprouts + curd', '15g', '+11g'],
          ['Upma (1 cup)', '5g', 'Upma with soy granules + milk glass', '16g', '+11g'],
          ['2 parathas + pickle', '7g', '1 paratha + paneer bhurji + curd', '22g', '+15g'],
          ['Cornflakes + milk', '6g', 'Oats + milk + peanut butter + nuts', '18g', '+12g'],
        ]}
      />

      <ComparisonTable
        title="Lunch & Dinner Protein Boosters"
        headers={['Strategy', 'Protein Added', 'Calories Added', 'How']}
        rows={[
          ['Double the dal serving', '+7-8g', '+80-100 kcal', '1 extra katori of dal/sambar'],
          ['Add 100g tofu to sabzi', '+12g', '+120 kcal', 'Cube and add to any vegetable curry'],
          ['Add 30g soy chunks to curry', '+15g', '+100 kcal', 'Rehydrate and add to any gravy'],
          ['Replace 1 roti with moong chilla', '+5g', 'Similar', 'Moong dal crepe instead of wheat roti'],
          ['Add 100g paneer', '+18g', '+260 kcal', 'Paneer sabzi or cubed in dal'],
          ['End meal with 150g Greek yogurt', '+12g', '+90 kcal', 'Replace regular curd with Greek yogurt'],
          ['Add sprout salad (100g)', '+7g', '+70 kcal', 'Moong/moth sprouts with onion, lemon'],
        ]}
      />

      {/* ============ SAMPLE MEAL PLAN ============ */}
      <h2>Sample 80g Protein Vegetarian Indian Day Plan</h2>

      <ExampleBlock title="High-protein vegetarian day (~1600 kcal, ~82g protein)">
        <ul>
          <li>
            <strong>Breakfast (7:30 AM) — 22g protein, ~350 kcal</strong>
            <br />2 moong dal chillas (30g dry moong dal each) = 14g protein, 200 kcal
            <br />150g Greek yogurt with 10g chia seeds = 8g protein, 130 kcal
            <br />Green chutney (mint-coriander) = 0g protein, 20 kcal
          </li>
          <li>
            <strong>Mid-morning (10:30 AM) — 8g protein, ~150 kcal</strong>
            <br />200ml toned milk (or soy milk) = 6g protein, 100 kcal
            <br />10 almonds = 2g protein, 50 kcal
          </li>
          <li>
            <strong>Lunch (1:00 PM) — 24g protein, ~500 kcal</strong>
            <br />1 cup brown rice = 4g protein, 180 kcal
            <br />1 cup thick sambar (with drumstick and brinjal) = 8g protein, 120 kcal
            <br />Soy chunk poriyal (30g dry soy chunks + beans) = 16g protein, 150 kcal
            <br />Rasam (1 cup) = 1g protein, 30 kcal
            <br />Cucumber raita (50g curd) = 2g protein, 30 kcal
          </li>
          <li>
            <strong>Evening snack (4:30 PM) — 9g protein, ~130 kcal</strong>
            <br />1 glass spiced buttermilk (200ml) = 2g protein, 40 kcal
            <br />Roasted chana (30g) = 7g protein, 90 kcal
          </li>
          <li>
            <strong>Dinner (7:30 PM) — 19g protein, ~430 kcal</strong>
            <br />2 jowar rotis = 5g protein, 160 kcal
            <br />Palak tofu (100g tofu + spinach) = 12g protein, 180 kcal
            <br />Mixed vegetable raita (100g curd) = 3g protein, 60 kcal
            <br />Small salad = 1g protein, 30 kcal
          </li>
          <li>
            <strong>Daily Total: ~82g protein, ~1560 kcal</strong>
            <br />Protein distribution: 22g + 8g + 24g + 9g + 19g = well-distributed across the day
            <br />Protein as % of calories: ~21% (excellent for weight management)
          </li>
        </ul>
      </ExampleBlock>

      <NoteBlock title="Key principles of this meal plan">
        This plan achieves 82g protein without any protein powder, non-vegetarian food, or
        exotic ingredients. The strategies employed: (1) moong dal chilla replaces low-protein
        idli at breakfast; (2) Greek yogurt replaces regular curd (2x protein); (3) soy chunks
        are included at lunch; (4) tofu is the dinner protein; (5) roasted chana provides
        protein at snack time; (6) milk provides protein between meals. Every meal contains
        15+ grams of protein, supporting muscle protein synthesis throughout the day.
      </NoteBlock>

      {/* ============ SUPPLEMENTS ============ */}
      <h2>When Supplements May Be Needed</h2>

      <EvidenceBlock
        level="moderate"
        title="Whey protein is effective but not essential for vegetarians"
      >
        For vegetarians who struggle to reach 1.2-1.6 g/kg protein through whole foods alone
        (particularly those with higher targets due to intense training or very high body weight),
        a whey protein supplement can be a practical solution. One scoop of whey protein
        (typically 25-30g protein, 120-140 kcal) is equivalent to approximately 100g paneer or
        60g soy chunks in protein content. Whey has a PDCAAS score of 1.0 and the highest
        leucine content of any protein source, making it particularly effective for muscle
        protein synthesis. However, supplementation is not mandatory — the meal plan above
        demonstrates that 80g+ protein is achievable through Indian vegetarian whole foods
        (Phillips & Van Loon, 2011).
      </EvidenceBlock>

      <WarningBlock title="B12 supplementation is non-negotiable for strict vegetarians">
        Vitamin B12 is found almost exclusively in animal products. Indian vegetarians who
        consume dairy may get some B12, but often not enough (dairy provides about 0.3-0.5 mcg
        per 100ml milk versus the 2.2 mcg RDA). Strict vegetarians and vegans are at very high
        risk of B12 deficiency (prevalence: 60-80% among Indian vegetarians). B12 deficiency
        causes megaloblastic anemia, neuropathy, cognitive decline, and elevated homocysteine
        (cardiovascular risk). A daily B12 supplement (minimum 2.4 mcg, or weekly 1000 mcg dose)
        or B12-fortified foods are essential for all strict vegetarians. This is not optional —
        no amount of plant food diversity can provide adequate B12.
      </WarningBlock>

      <ExampleBlock title="Quick reference: hitting protein targets">
        <ul>
          <li><strong>Need 10g more protein?</strong> Add 200ml milk, or 100g sprouts, or 20g soy chunks</li>
          <li><strong>Need 15g more protein?</strong> Add 75g paneer, or 30g soy chunks, or 150g Greek yogurt</li>
          <li><strong>Need 20g more protein?</strong> Add 100g tofu + 50g curd, or 1 moong dal chilla + milk</li>
          <li><strong>Need 25g more protein?</strong> Add 1 scoop whey protein, or 50g soy chunks + 100g curd</li>
          <li><strong>Easiest single swap for +10g protein:</strong> Replace regular curd with Greek yogurt at any meal</li>
          <li><strong>Most cost-effective source:</strong> Soy chunks (Rs 60-80 for 100g+ protein)</li>
          <li><strong>Most calorie-efficient source:</strong> Soy chunks (15.3g protein per 100 kcal)</li>
        </ul>
      </ExampleBlock>

      {/* ============ COMMON MISTAKES ============ */}
      <h2>Common Mistakes in Indian Vegetarian Protein Intake</h2>

      <WarningBlock title="Mistakes that keep protein intake low">
        <ul>
          <li><strong>Counting cereal protein as sufficient:</strong> While wheat and rice contain protein (7-12g per 100g raw), their quality is low (PDCAAS 0.4-0.6) and they come packaged with large amounts of carbohydrate. Relying on roti and rice for protein means consuming excess calories before meeting protein needs.</li>
          <li><strong>Watery dal instead of thick dal:</strong> Many households serve very dilute dal (mostly water). Thick, concentrated dal has 2-3x more protein per serving. Ask for "sukha dal" or thick preparation.</li>
          <li><strong>Skipping protein at breakfast:</strong> The typical South Indian breakfast of 2 idlis or 1 dosa with chutney provides only 3-6g protein — a wasted protein opportunity at the first meal of the day.</li>
          <li><strong>Over-relying on paneer:</strong> While protein-rich, paneer is also high in saturated fat and calories (260 kcal per 100g). Tofu and soy chunks provide similar or more protein at fewer calories.</li>
          <li><strong>Ignoring sprouts:</strong> Sprouting increases protein digestibility by 10-15% and vitamin C content dramatically. Sprouted moong (100g) provides 7.5g highly digestible protein at only 68 kcal.</li>
        </ul>
      </WarningBlock>

      <h2>Protein Quality Optimization for Vegetarians</h2>

      <EvidenceBlock
        level="strong"
        title="Leucine threshold matters for muscle protein synthesis"
      >
        Research demonstrates that a minimum of 2-3g of leucine per meal is needed to maximally
        stimulate muscle protein synthesis (MPS). Animal proteins achieve this threshold easily
        (30g chicken breast provides ~2.5g leucine), but plant proteins are lower in leucine.
        To reach the leucine threshold on a vegetarian diet, larger protein portions are needed:
        approximately 40g of plant protein per meal versus 25-30g of animal protein. This is
        achievable through strategic combinations: 1 cup thick dal (8g protein) + 100g paneer
        (18g protein) + 1 roti (3.5g protein) provides approximately 30g total protein with
        adequate leucine. Adding soy (one of the highest leucine plant sources at 3.2g leucine
        per 50g protein) significantly helps reach this threshold (Morton et al., 2018).
      </EvidenceBlock>

      <ComparisonTable
        title="Leucine Content of Indian Vegetarian Protein Sources"
        headers={['Food', 'Protein per Serving', 'Leucine Content', 'Servings to Hit 2.5g Leucine']}
        rows={[
          ['Soy chunks (50g dry)', '26g', '2.1g', '1.2 servings'],
          ['Paneer (100g)', '18g', '1.8g', '1.4 servings'],
          ['Tofu (150g)', '18g', '1.4g', '1.8 servings'],
          ['Greek yogurt (200g)', '16g', '1.5g', '1.7 servings'],
          ['Moong dal (50g dry, cooked)', '12g', '0.9g', '2.8 servings'],
          ['Milk (300ml)', '9g', '0.9g', '2.8 servings'],
          ['Peanuts (40g)', '10g', '0.7g', '3.6 servings'],
          ['Whey protein (1 scoop)', '25g', '2.7g', '0.9 servings'],
        ]}
      />

      <NoteBlock title="The practical takeaway on leucine">
        You do not need to obsess over leucine if you are eating adequate total protein (1.2+
        g/kg) distributed across meals. The leucine threshold is most relevant for maximizing
        muscle growth during resistance training. For general health and weight management,
        meeting total daily protein targets with diverse sources is sufficient. The leucine
        data simply reinforces that soy-based foods and dairy are particularly valuable protein
        sources for Indian vegetarians due to their superior amino acid profiles.
      </NoteBlock>

      <ReferenceList
        references={[
          'Phillips, S. M., & Van Loon, L. J. (2011). Dietary protein for athletes: from requirements to optimum adaptation. Journal of Sports Sciences, 29(sup1), S29-S38.',
          'Young, V. R., & Pellett, P. L. (1994). Plant proteins in relation to human protein and amino acid nutrition. American Journal of Clinical Nutrition, 59(5), 1203S-1212S.',
          'ICMR-NIN. (2020). Nutrient Requirements and Recommended Dietary Allowances for Indians. National Institute of Nutrition, Hyderabad.',
          'National Nutrition Monitoring Bureau (NNMB). (2017). Diet and Nutritional Status of Urban Population in India. NIN Technical Report.',
          'Reed, K. E., Camargo, J., Hamilton-Reeves, J., Kurzer, M., & Messina, M. (2021). Neither soy nor isoflavone intake affects male reproductive hormones: An expanded and updated meta-analysis of clinical studies. Reproductive Toxicology, 100, 60-67.',
          'Morton, R. W., Murphy, K. T., McKellar, S. R., Schoenfeld, B. J., Henselmans, M., Helms, E., ... & Phillips, S. M. (2018). A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength in healthy adults. British Journal of Sports Medicine, 52(6), 376-384.',
          'Longvah, T., Ananthan, R., Bhaskarachary, K., & Venkaiah, K. (2017). Indian Food Composition Tables. National Institute of Nutrition, ICMR, Hyderabad.',
        ]}
      />
    </div>
  );
}
