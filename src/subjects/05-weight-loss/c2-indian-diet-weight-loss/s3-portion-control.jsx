import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';
import ComparisonTable from '../../../components/content/ComparisonTable.jsx';

const references = [
  {
    id: 'rolls2014',
    authors: 'Rolls BJ.',
    year: 2014,
    title: 'What is the role of portion control in weight management?',
    journal: 'International Journal of Obesity',
    volume: '38(Suppl 1)',
    pages: 'S1-S8',
    doi: '10.1038/ijo.2014.82'
  },
  {
    id: 'wansink2006',
    authors: 'Wansink B.',
    year: 2006,
    title: 'Mindless Eating: Why We Eat More Than We Think',
    journal: 'Bantam Books, New York'
  },
  {
    id: 'young2002',
    authors: 'Young LR, Nestle M.',
    year: 2002,
    title: 'The contribution of expanding portion sizes to the US obesity epidemic',
    journal: 'American Journal of Public Health',
    volume: '92(2)',
    pages: '246-249',
    doi: '10.2105/AJPH.92.2.246'
  },
  {
    id: 'rolls2002',
    authors: 'Rolls BJ, Morris EL, Roe LS.',
    year: 2002,
    title: 'Portion size of food affects energy intake in normal-weight and overweight men and women',
    journal: 'American Journal of Clinical Nutrition',
    volume: '76(6)',
    pages: '1207-1213',
    doi: '10.1093/ajcn/76.6.1207'
  },
  {
    id: 'hollands2015',
    authors: 'Hollands GJ, Shemilt I, Marteau TM, et al.',
    year: 2015,
    title: 'Portion, package or tableware size for changing selection and consumption of food, alcohol and tobacco',
    journal: 'Cochrane Database of Systematic Reviews',
    volume: '(9)',
    pages: 'CD011045',
    doi: '10.1002/14651858.CD011045.pub2'
  }
];

export default function PortionControl() {
  return (
    <div className="prose-health">
      <h1>Portion Control for Indian Foods</h1>

      <p>
        Portion size is one of the most powerful yet underutilized levers for weight
        management. Research consistently shows that people eat more when given larger
        portions — a phenomenon so robust that it occurs regardless of hunger level,
        food type, or even taste. In Indian food culture, where generous servings
        signify hospitality and love, and where family-style serving from shared
        dishes is the norm, mastering portion control requires both practical
        techniques and a cultural mindset shift.
      </p>

      <h2>The Portion Size Effect: Why It Matters</h2>

      <EvidenceBlock
        level="strong"
        source="Rolls et al. (2002); Hollands et al. (2015) — Cochrane Review"
      >
        In a series of landmark experiments, Barbara Rolls and colleagues demonstrated
        that increasing portion size by 50% led to a 16% increase in energy intake
        at that meal, with no compensatory reduction at subsequent meals. A Cochrane
        systematic review of 72 studies confirmed that larger portions, packages,
        and tableware consistently increase food consumption. The effect size is
        large: people exposed to larger portions consumed an average of 215 kcal
        more per day — enough to cause approximately 10 kg of weight gain per year
        if sustained. Critically, participants were largely unaware of eating more
        when given larger portions.
      </EvidenceBlock>

      <DefinitionBlock term="Portion Distortion">
        The phenomenon where people's perception of a "normal" serving size has
        expanded over time, leading to systematic underestimation of how much they
        eat. Research by Young and Nestle (2002) documented that standard food
        portions in the US increased by 2-5 fold between the 1970s and 2000s. In
        the Indian context, this manifests as ever-larger plates of rice, extra
        rotis offered automatically, and generous oil use that has escalated with
        prosperity.
      </DefinitionBlock>

      <h2>The Hand-Based Portion Guide for Indian Foods</h2>

      <p>
        Weighing every food on a kitchen scale is accurate but impractical for
        daily life, especially in Indian households where meals are prepared in
        shared pots and served family-style. Your hand provides a portable,
        always-available measuring tool that correlates reasonably well with
        body size — larger people have larger hands and correspondingly higher
        caloric needs.
      </p>

      <ExampleBlock title="Your Hand as a Measuring Tool">
        <ul>
          <li>
            <strong>Fist (closed) = 1 cup / 1 katori:</strong> Use for rice, dal,
            cooked vegetables. One fist of cooked rice ≈ 150g ≈ 180-195 kcal. One
            fist of cooked dal ≈ 120-150 kcal. For weight loss, aim for 1 fist of
            rice per meal maximum.
          </li>
          <li>
            <strong>Palm (fingers and thumb excluded) = protein serving:</strong> The
            size and thickness of your palm represents one protein serving. One palm
            of chicken/fish ≈ 85-100g ≈ 25-30g protein. One palm of paneer ≈ 70g ≈
            12-13g protein. Aim for 1-2 palms of protein per meal.
          </li>
          <li>
            <strong>Cupped hand = carbohydrate serving:</strong> A cupped hand of dry
            oats, poha, or muesli ≈ 40-50g ≈ one serving of carbohydrate food.
          </li>
          <li>
            <strong>Thumb (tip to base) = fat serving:</strong> One thumb-sized
            portion of oil, ghee, butter, or nut butter ≈ 1 tablespoon ≈ 100-120
            kcal. For weight loss, limit to 4-6 thumb-servings of added fat per day.
          </li>
          <li>
            <strong>Thumb tip (first joint to tip) = small condiment serving:</strong>
            Use for pickle, chutney, or cheese. One thumb-tip ≈ 1 teaspoon.
          </li>
          <li>
            <strong>Two open hands (cupped together) = vegetable serving:</strong>
            This generous portion of raw or cooked non-starchy vegetables ≈ 1 cup ≈
            25-50 kcal. Aim for 2-3 double-hand servings of vegetables per meal.
          </li>
        </ul>
      </ExampleBlock>

      <h3>Calorie Estimates for Common Indian Foods Using Hand Measures</h3>

      <ComparisonTable
        title="Hand Portions for Indian Foods"
        headers={['Food', 'Hand Measure', 'Approximate Weight', 'Approximate Calories']}
        rows={[
          ['Cooked rice', '1 fist', '150g', '180-195 kcal'],
          ['Roti (1 medium)', '1 open hand spread', '35-40g (atta)', '100-120 kcal'],
          ['Cooked dal (thick)', '1 fist', '150ml', '120-150 kcal'],
          ['Chicken breast', '1 palm', '85-100g', '140-165 kcal'],
          ['Paneer', '1 palm', '60-75g', '160-200 kcal'],
          ['Fish fillet', '1 palm', '85-100g', '85-120 kcal'],
          ['Cooked vegetables', '2 cupped hands', '150-200g', '40-80 kcal'],
          ['Cooking oil', '1 thumb', '~15ml', '120 kcal'],
          ['Nuts (mixed)', '1 cupped palm', '25-30g', '150-180 kcal'],
          ['Curd/yogurt', '1 fist', '100-125g', '60-75 kcal'],
          ['Fruit (apple/banana)', '1 fist', '1 medium piece', '70-105 kcal']
        ]}
      />

      <h2>The Thali Method: Building a Balanced Plate</h2>

      <p>
        The traditional Indian thali, when properly proportioned, is actually an
        excellent framework for balanced eating. The problem is not the thali concept
        but the modern proportions — where rice or roti dominate the plate and
        vegetables are an afterthought. Restructuring the thali proportions creates
        a naturally calorie-controlled meal.
      </p>

      <DefinitionBlock term="The Weight-Loss Thali">
        A portion-controlled Indian plate where approximately 50% of the plate area
        is filled with vegetables (sabzi, salad), 25% with whole grain carbohydrates
        (rice, roti), and 25% with protein-rich foods (dal, chicken, fish, paneer,
        eggs). This replaces the typical Indian plate composition of 50-60%
        carbohydrates, 20-30% vegetables, and 10-20% protein.
      </DefinitionBlock>

      <ExampleBlock title="Building the Weight-Loss Thali">
        <p><strong>The Half-Plate Vegetables (50% of plate):</strong></p>
        <ul>
          <li>1 katori sabzi (seasonal vegetable cooked with 1 tsp oil)</li>
          <li>1 katori salad (cucumber, tomato, onion, carrot, radish — raw)</li>
          <li>1 small katori raita (cucumber-curd) OR plain curd</li>
          <li>Total from vegetables: ~100-150 kcal, high fiber, high volume</li>
        </ul>
        <p><strong>The Quarter-Plate Grain (25% of plate):</strong></p>
        <ul>
          <li>1 small fist of rice (~100g cooked) OR 1.5 medium rotis</li>
          <li>Total from grain: ~150-180 kcal</li>
        </ul>
        <p><strong>The Quarter-Plate Protein (25% of plate):</strong></p>
        <ul>
          <li>1 katori dal (thick) OR 1 palm-sized piece chicken/fish OR 1 palm paneer/eggs</li>
          <li>Total from protein: ~120-200 kcal</li>
        </ul>
        <p><strong>Complete thali total: ~370-530 kcal — a well-controlled main meal</strong></p>
      </ExampleBlock>

      <h2>Pre-Plating vs. Family-Style Serving</h2>

      <EvidenceBlock
        level="moderate"
        source="Wansink (2006) — Environmental eating research"
      >
        Brian Wansink's extensive research on environmental influences on eating
        demonstrated that serving food family-style (placing serving dishes on the
        dining table) leads to 20-30% higher caloric intake compared to pre-plating
        food in the kitchen. When food is visible and within arm's reach, second and
        third helpings become effortless and automatic. Moving serving dishes to the
        kitchen counter — even just 6 feet away — significantly reduces consumption
        because each additional serving requires a conscious decision and physical
        effort.
      </EvidenceBlock>

      <h3>Adapting Pre-Plating to Indian Meals</h3>

      <p>
        The Indian tradition of serving food at the table and offering repeated
        helpings ("aur lo, aur lo") is deeply embedded in hospitality culture.
        Transitioning to pre-plated meals requires sensitivity but offers
        substantial benefits for weight management.
      </p>

      <NoteBlock title="Practical Pre-Plating Strategies">
        <ul>
          <li>
            <strong>Plate food in the kitchen:</strong> Serve each person a complete,
            portioned thali before bringing it to the table. Keep serving vessels in
            the kitchen, not on the dining table.
          </li>
          <li>
            <strong>The "one roti at a time" rule:</strong> Instead of placing a stack
            of rotis on the table, bring one roti at a time from the kitchen. The
            effort of getting up for another roti creates a natural pause to assess
            hunger.
          </li>
          <li>
            <strong>Serve rice from the kitchen:</strong> Never bring the rice cooker
            or rice pot to the table. Serve a measured portion on the plate.
          </li>
          <li>
            <strong>Unlimited vegetables only:</strong> If anything is placed on the
            table for self-service, make it the salad bowl or extra sabzi — not the
            rice, roti, or high-calorie items.
          </li>
          <li>
            <strong>Use smaller serving spoons:</strong> Replace large ladles with
            smaller spoons for dal and rice. People serve themselves less with smaller
            utensils without noticing.
          </li>
        </ul>
      </NoteBlock>

      <h2>Plate and Bowl Size Effects</h2>

      <EvidenceBlock
        level="moderate"
        source="Wansink (2006); Hollands et al. (2015)"
      >
        Using smaller plates (9-10 inches instead of 12 inches) leads to 22-30%
        less food served and consumed, with no increase in reported hunger. The
        Delboeuf illusion — where the same amount of food looks more generous on a
        smaller plate — creates a perception of abundance even with reduced portions.
        Similarly, using taller, thinner glasses for beverages reduces liquid calorie
        consumption by 25-30% compared to short, wide glasses.
      </EvidenceBlock>

      <ExampleBlock title="Tableware Modifications for Indian Households">
        <ul>
          <li>
            <strong>Switch to 9-inch thali plates</strong> instead of the increasingly
            common 12-inch plates. The smaller plate will naturally limit rice and
            roti portions while still looking full.
          </li>
          <li>
            <strong>Use smaller katoris (150ml instead of 200ml)</strong> for dal and
            sabzi. One smaller katori of thick dal provides adequate protein while
            saving 40-60 kcal compared to a larger katori.
          </li>
          <li>
            <strong>Use standard teaspoons for oil measurement</strong> — replace
            the habit of pouring oil freely with the habit of measuring.
          </li>
          <li>
            <strong>Serve water in tall glasses:</strong> Drinking water before and
            during meals aids satiety. Tall, attractive glasses encourage more water
            consumption.
          </li>
          <li>
            <strong>Use dark-colored plates:</strong> Research suggests lighter plates
            may make portions look smaller due to contrast effects. Dark plates with
            lighter-colored rice create a visual impression of generous portions.
          </li>
        </ul>
      </ExampleBlock>

      <h2>Portion Guides for Specific Indian Foods</h2>

      <h3>Rice: The Most Over-Portioned Indian Food</h3>

      <p>
        Rice is the single greatest source of excess calories in the Indian diet.
        A "normal" serving of rice on many Indian plates contains 300-400g of cooked
        rice (390-520 kcal) — nearly double what a weight-loss plan calls for.
      </p>

      <ComparisonTable
        title="Rice Portion Guide"
        headers={['Description', 'Cooked Weight', 'Calories', 'Recommendation']}
        rows={[
          ['Small (weight loss)', '100g (~2/3 katori)', '130 kcal', 'Aggressive deficit'],
          ['Medium (weight loss)', '150g (~1 katori)', '195 kcal', 'Moderate deficit — recommended'],
          ['Standard (maintenance)', '200g (~1.5 katori)', '260 kcal', 'Active individuals'],
          ['Large (typical Indian)', '300-400g (2-3 katori)', '390-520 kcal', 'Avoid for weight loss'],
          ['Restaurant "full meals"', '400-600g', '520-780 kcal', 'Excessive — halve it']
        ]}
      />

      <h3>Roti: Counting and Sizing</h3>

      <p>
        A medium roti made from 30g of whole wheat atta provides approximately
        100-110 kcal. The key variables are the size of the roti (which varies
        dramatically between households), the amount of atta used, and whether
        ghee or oil is applied after cooking.
      </p>

      <NoteBlock title="Roti Portion Strategy">
        <ul>
          <li>Standardize roti size to approximately 6-7 inches diameter (30-35g atta each)</li>
          <li>For weight loss: 1-2 rotis per meal (100-220 kcal)</li>
          <li>Skip the ghee/oil brush after cooking — saves 40-80 kcal per roti</li>
          <li>If you want more volume, make thinner rotis from the same amount of dough —
            they feel like "more" even though the calories are identical</li>
          <li>Count rotis before you start eating — decide on 1 or 2, not "I'll see how I feel"</li>
        </ul>
      </NoteBlock>

      <h3>Cooking Oil: The Invisible Calorie</h3>

      <p>
        Indian cooking uses substantial amounts of oil for tempering (tadka),
        sauteing, deep frying, and finishing. One tablespoon (15ml) of any
        cooking oil — whether olive, mustard, coconut, or refined — contains
        approximately 120 kcal. Many Indian households use 4-8 tablespoons of
        oil per meal for a family of four, adding 120-240 kcal per person from
        oil alone.
      </p>

      <ExampleBlock title="Oil Audit: Where the Calories Hide">
        <ul>
          <li><strong>Tadka for dal:</strong> Standard = 2-3 tbsp oil (240-360 kcal for the pot).
            Modified = 1 tsp (40 kcal for the pot). Per serving savings: ~50-80 kcal.</li>
          <li><strong>Sabzi preparation:</strong> Standard = 2-3 tbsp oil (240-360 kcal).
            Modified = 1-2 tsp (40-80 kcal). Per serving savings: ~50-70 kcal.</li>
          <li><strong>Deep frying (vada, pakora, puri):</strong> Absorbs 10-40% of oil by weight.
            One vada absorbs ~10-15ml oil (~120-180 kcal from oil alone).</li>
          <li><strong>Paratha:</strong> Standard = 1-2 tbsp ghee/oil (120-240 kcal from fat).
            Dry-roasted = near zero added fat. Savings: 120-240 kcal per paratha.</li>
          <li><strong>Pickle:</strong> Oil-based pickles add 30-50 kcal per tablespoon.
            Use sparingly — 1 tsp for flavor.</li>
        </ul>
      </ExampleBlock>

      <WarningBlock title="The Total Oil Rule">
        For weight loss, total added cooking fat (oil + ghee + butter) should not
        exceed 3-4 teaspoons (15-20ml) per person per day across all meals. This
        provides 120-180 kcal from cooking fat — a significant but manageable
        portion of total intake. Measure oil with teaspoons, never pour from the
        bottle. Use non-stick cookware and cooking sprays to reduce the minimum
        oil needed for cooking.
      </WarningBlock>

      <h2>Dealing with Social Pressure Around Portions</h2>

      <p>
        In Indian culture, food is love, and offering abundant food is how affection
        is expressed. Refusing a second helping can feel like rejecting the host.
        Navigating this social dimension requires practical strategies that honor
        cultural norms while protecting your health goals.
      </p>

      <NoteBlock title="Social Strategies for Portion Control">
        <ul>
          <li>
            <strong>"I'm so full because it was delicious"</strong> — compliment the
            food enthusiastically to deflect pressure for more
          </li>
          <li>
            <strong>Take tiny symbolic seconds:</strong> Accept one extra tablespoon
            of dal or a small piece of sabzi — the social obligation is met with
            minimal caloric impact
          </li>
          <li>
            <strong>Serve yourself first:</strong> When possible, plate your own food
            to control portions rather than letting others serve you
          </li>
          <li>
            <strong>Eat slowly:</strong> The last person eating never gets asked
            "want more?" as often
          </li>
          <li>
            <strong>Bring a healthy dish to gatherings:</strong> This ensures at least
            one lower-calorie option is available and shows your commitment without
            being preachy
          </li>
          <li>
            <strong>Have an ally:</strong> If a family member understands your goals,
            they can help deflect pressure from others
          </li>
        </ul>
      </NoteBlock>

      <h2>Summary: The Portion Control Toolkit</h2>

      <NoteBlock title="Key Takeaways">
        <ol>
          <li>
            Use your hand as a portable measuring tool — fist for rice and dal, palm
            for protein, thumb for fats
          </li>
          <li>
            Build every meal using the thali method: 50% vegetables, 25% grain,
            25% protein
          </li>
          <li>
            Pre-plate food in the kitchen — never bring serving dishes to the table
          </li>
          <li>
            Switch to 9-inch plates and smaller katoris — you will eat less without
            feeling deprived
          </li>
          <li>
            Measure cooking oil with teaspoons — limit to 3-4 tsp total per day
          </li>
          <li>
            Address portion sizes of rice first — this is where the biggest calorie
            savings exist in most Indian diets
          </li>
          <li>
            Develop social strategies for cultural food pressure — prepare responses
            in advance
          </li>
        </ol>
      </NoteBlock>

      <ReferenceList references={references} />
    </div>
  );
}
