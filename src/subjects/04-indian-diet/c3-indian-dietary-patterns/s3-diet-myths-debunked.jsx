import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import NutritionFactBlock from '../../../components/content/NutritionFactBlock.jsx';
import ComparisonTable from '../../../components/content/ComparisonTable.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

export default function DietMythsDebunked() {
  return (
    <div className="prose-health">
      <h1>Indian Diet Myths Debunked</h1>

      <p>
        India has a particularly rich ecosystem of food myths — passed down through generations,
        amplified by social media, and exploited by the wellness industry. Many of these beliefs
        are so deeply ingrained that questioning them feels almost heretical. Yet evidence-based
        nutrition demands that we evaluate each claim on its scientific merits, regardless of how
        widely it is believed. This section systematically examines the most common Indian diet
        myths and evaluates them against current research.
      </p>

      <DefinitionBlock
        term="Nutritional Myth"
        definition="A widely held but scientifically unsupported or inaccurate belief about food and its effects on health. Myths persist due to cultural tradition, anecdotal experience, confirmation bias, and commercial interests. Debunking a myth requires not just dismissing it but explaining why the belief arose and what the evidence actually shows."
      />

      {/* ============ MYTH 1: GHEE ============ */}
      <h2>Myth 1: "Ghee Makes You Fat"</h2>

      <h3>Verdict: FALSE — Calorie surplus makes you fat, not ghee specifically</h3>

      <EvidenceBlock
        level="strong"
        title="No evidence that ghee causes more fat gain than any other fat at equal calories"
      >
        Ghee is pure fat at 9 kcal per gram — the same caloric density as any other fat (olive
        oil, coconut oil, butter). One teaspoon of ghee is approximately 45 kcal. There is no
        metabolic pathway by which ghee preferentially causes fat storage compared to any other
        fat source. Weight gain occurs when total caloric intake exceeds total caloric expenditure
        — the source of calories is secondary. A systematic review of dietary fat studies confirms
        that no specific fat type causes greater adiposity when calories are controlled (Hooper
        et al., 2015). Indian observational studies have not found moderate ghee consumption (1-2
        teaspoons/day) to be associated with obesity or cardiovascular disease when overall diet
        quality is maintained. The myth likely arose because ghee is calorie-dense and is often
        used generously in Indian cooking, leading to calorie overconsumption.
      </EvidenceBlock>

      <NoteBlock title="The real ghee guidance">
        Ghee is nutritionally neutral-to-positive in moderate amounts. It contains butyrate
        (anti-inflammatory short-chain fatty acid), fat-soluble vitamins A and E, and has a high
        smoke point (250°C) making it safe for high-heat cooking. The problem is quantity, not
        the ingredient itself. One teaspoon per meal (3 teaspoons/day = 135 kcal) is easily
        accommodated in any calorie-controlled diet. The issue arises when ghee is used as a
        cooking medium (2-3 tablespoons per dish) rather than a flavoring agent.
      </NoteBlock>

      {/* ============ MYTH 2: RICE ============ */}
      <h2>Myth 2: "Rice Makes You Fat"</h2>

      <h3>Verdict: FALSE — It is portion size and accompaniments, not rice itself</h3>

      <EvidenceBlock
        level="strong"
        title="Rice consumption per se is not associated with obesity"
      >
        Asia consumes the most rice per capita globally, yet Asian countries historically had
        among the lowest obesity rates. Japan, South Korea, and traditional South Indian
        populations consumed rice as a staple while maintaining healthy body weights. A large
        meta-analysis of 21 countries found that higher rice consumption was actually associated
        with lower obesity prevalence (Hu et al., 2012). The obesity epidemic in India has
        coincided not with rice consumption (which has remained stable or declined) but with
        increased consumption of refined oils, sugar, ultra-processed foods, and decreased
        physical activity. Rice itself (1 cup cooked = 180 kcal, 4g protein) is a moderate-
        calorie, low-fat food. The problem is when people consume 2-3 cups per meal with
        oil-heavy curries and minimal protein/vegetables.
      </EvidenceBlock>

      <ExampleBlock title="The portion perspective">
        <ul>
          <li>1 cup cooked rice = 180 kcal — perfectly reasonable in a meal</li>
          <li>2 cups cooked rice = 360 kcal — still manageable if other components are light</li>
          <li>3 cups cooked rice = 540 kcal — rice alone now exceeds a reasonable meal's calorie budget</li>
          <li>The typical generous South Indian serving of 2.5-3 cups rice + sambar + poriyal + curd = 700-800 kcal</li>
          <li>The same meal with 1-1.5 cups rice + more sambar + more vegetables + curd = 450-550 kcal</li>
          <li><strong>Reducing rice by 1 cup saves 180 kcal — equivalent to a 30-minute brisk walk</strong></li>
        </ul>
      </ExampleBlock>

      {/* ============ MYTH 3: BANANA AT NIGHT ============ */}
      <h2>Myth 3: "Eating Banana at Night Causes Weight Gain"</h2>

      <h3>Verdict: FALSE — No evidence supports time-specific fattening effects of bananas</h3>

      <EvidenceBlock
        level="strong"
        title="Timing of food consumption does not alter its caloric value"
      >
        A banana contains approximately 90-105 kcal whether eaten at 8 AM or 10 PM. The body
        does not process calories differently based on the time of day in any way that would
        make a banana more fattening at night. While there is emerging research on chrononutrition
        suggesting that very late eating (after 10 PM) may modestly reduce thermic effect of
        food and alter metabolic hormones, the effect size is small (2-5% difference in
        thermogenesis) and applies to total late meals, not specific foods. A controlled study
        would need to show that eating a banana at night leads to more fat storage than eating
        the same banana during the day — no such study exists. This myth likely combines the
        general "don't eat at night" belief with India's cultural caution about "cold" foods
        (banana is classified as "cold" in Ayurveda) at night.
      </EvidenceBlock>

      <NoteBlock title="When a banana is actually a great nighttime snack">
        Bananas contain tryptophan (precursor to serotonin and melatonin) and magnesium (a
        natural muscle relaxant). If anything, a banana before bed may mildly support sleep
        quality. At ~100 kcal, it is far better than common nighttime snack alternatives like
        biscuits (150-200 kcal), namkeen (200+ kcal), or ice cream (250+ kcal). If you are
        hungry at night and your calorie budget allows it, a banana is an excellent choice.
      </NoteBlock>

      {/* ============ MYTH 4: WATER DURING MEALS ============ */}
      <h2>Myth 4: "Drinking Water During Meals Dilutes Digestive Enzymes"</h2>

      <h3>Verdict: FALSE — No evidence of impaired digestion from water with meals</h3>

      <EvidenceBlock
        level="strong"
        title="Gastric acid and enzyme concentrations are not meaningfully affected by water intake"
      >
        The stomach produces 1.5-2 liters of gastric juice daily, containing hydrochloric acid
        at a pH of 1.5-3.5. The addition of 200-300ml of water during a meal transiently raises
        stomach pH, but the stomach compensates by producing more acid within minutes. Digestive
        enzymes (pepsin, lipase) are secreted in response to food volume and composition, not
        at a fixed concentration that can be "diluted." A study by Gregersen et al. (2003) found
        that water consumed with meals had no significant effect on gastric emptying rate or
        nutrient absorption. In fact, water with meals may aid digestion by helping dissolve
        nutrients and facilitating the mechanical breakdown of food. The only scenario where
        fluid timing matters is large-volume liquid intake (500ml+) immediately before a meal,
        which can reduce appetite — actually useful for weight management, not harmful.
      </EvidenceBlock>

      {/* ============ MYTH 5: CURD AT NIGHT ============ */}
      <h2>Myth 5: "Curd at Night Causes Cold / Increases Mucus"</h2>

      <h3>Verdict: FALSE — No scientific evidence links curd consumption to respiratory symptoms</h3>

      <EvidenceBlock
        level="strong"
        title="Dairy-mucus connection has been thoroughly debunked"
      >
        The belief that dairy products (including curd) increase mucus production or cause
        respiratory symptoms has been tested in multiple controlled studies. A landmark study
        by Pinnock et al. (1990) deliberately infected subjects with rhinovirus (common cold
        virus) and measured mucus production — dairy consumers produced no more mucus than
        non-consumers. A systematic review by Thiara and Goldman (2012) concluded that there is
        no scientific basis for recommending dairy avoidance during respiratory illness or at
        any specific time of day. The sensation of "thickness" in the throat after consuming
        milk is caused by the emulsion properties of milk fat interacting with saliva, not by
        mucus production. Curd, with its probiotic content, may actually support immune function
        — a reason to consume it, not avoid it. The "curd at night" prohibition appears to be
        a purely cultural Ayurvedic belief without physiological basis.
      </EvidenceBlock>

      {/* ============ MYTH 6: LEMON WATER ============ */}
      <h2>Myth 6: "Hot Water with Lemon Burns Fat"</h2>

      <h3>Verdict: FALSE — No fat-burning properties; still a good low-calorie beverage</h3>

      <EvidenceBlock
        level="strong"
        title="No thermogenic or lipolytic effect from lemon water"
      >
        Hot water with lemon contains approximately 4-6 kcal (from the lemon juice) and
        essentially zero bioactive compounds in quantities sufficient to affect fat metabolism.
        Vitamin C from lemon (about 10-15mg per glass) does not cause fat oxidation. The citric
        acid does not "dissolve" body fat. Hot water does not "melt" fat. There is no randomized
        controlled trial showing that lemon water causes greater weight loss than plain water.
        The modest benefit of morning lemon water is that it promotes hydration, may displace
        higher-calorie beverages (like tea with sugar or fruit juice), and is essentially
        calorie-free. These are real but minor benefits — not the dramatic "fat burning" claimed
        by wellness influencers. If you enjoy lemon water, drink it for the taste and hydration,
        not as a weight-loss strategy.
      </EvidenceBlock>

      <NoteBlock title="What actually does increase fat oxidation?">
        Evidence-supported strategies for increasing fat oxidation include: caloric deficit
        (strongest evidence), exercise (particularly moderate-intensity cardio in a fasted or
        post-absorptive state), adequate protein intake (thermic effect), caffeine (modest
        thermogenic effect at 3-5mg/kg), and sufficient sleep (cortisol regulation). These
        are the real tools — no beverage or single food can substitute for them.
      </NoteBlock>

      {/* ============ MYTH 7: SPOT REDUCTION ============ */}
      <h2>Myth 7: "Spot Reduction Works — Crunches Reduce Belly Fat"</h2>

      <h3>Verdict: FALSE — You cannot selectively lose fat from specific body areas through targeted exercise</h3>

      <EvidenceBlock
        level="strong"
        title="Multiple studies confirm spot reduction is impossible"
      >
        A classic study by Katch et al. (1984) had subjects perform 5,004 sit-ups over 27 days
        and measured abdominal fat via biopsy — there was no preferential fat loss from the
        abdominal region compared to other body sites. A 2011 study by Vispute et al. found
        that 6 weeks of abdominal exercises alone (without caloric restriction) produced no
        change in abdominal fat, waist circumference, or abdominal skinfold thickness compared
        to controls. Fat loss occurs systemically — the body mobilizes stored triglycerides
        from adipose tissue across the entire body, with the pattern determined by genetics and
        hormones, not by which muscles are exercised. Indians are genetically predisposed to
        visceral (abdominal) fat deposition, which means belly fat is often the last to go and
        the first to return — requiring sustained caloric deficit and overall fat loss, not
        targeted exercises.
      </EvidenceBlock>

      <ExampleBlock title="What actually reduces belly fat">
        <ul>
          <li><strong>Caloric deficit</strong> — the only way to lose any body fat, including belly fat</li>
          <li><strong>Resistance training</strong> — builds muscle, increases metabolic rate, improves body composition</li>
          <li><strong>Cardiovascular exercise</strong> — increases caloric expenditure</li>
          <li><strong>Adequate sleep (7-8 hours)</strong> — sleep deprivation increases cortisol and visceral fat</li>
          <li><strong>Stress management</strong> — chronic stress elevates cortisol, which promotes abdominal fat storage</li>
          <li><strong>Reduced alcohol consumption</strong> — alcohol calories preferentially stored as visceral fat</li>
          <li>Abdominal exercises strengthen core muscles (valuable) but do NOT selectively burn belly fat</li>
        </ul>
      </ExampleBlock>

      {/* ============ MYTH 8: NEGATIVE CALORIE FOODS ============ */}
      <h2>Myth 8: "Negative Calorie Foods Exist — Celery Burns More Than It Contains"</h2>

      <h3>Verdict: FALSE — No food has a net negative caloric effect</h3>

      <EvidenceBlock
        level="strong"
        title="The thermic effect of food never exceeds the food's caloric content"
      >
        The concept of "negative calorie foods" — foods whose digestion supposedly requires more
        energy than they contain — is thermodynamically implausible for any real food. Celery,
        the most commonly cited example, contains approximately 6 kcal per stalk. The thermic
        effect of food (TEF) for carbohydrate-rich foods is 5-10% of their caloric content,
        meaning digesting one celery stalk burns approximately 0.3-0.6 kcal — far less than the
        6 kcal it provides. A study by Buddemeyer et al. (2019) using lizards (chosen for
        metabolic measurement precision) fed celery found that approximately 24% of the calories
        were used for digestion — substantial, but still yielding a net positive 76% of calories.
        No food is "negative calorie." However, very low-calorie, high-water, high-fiber foods
        (celery, cucumber, watermelon, lettuce) are extremely useful for weight management
        because they provide satiety and volume at minimal caloric cost. Think of them as
        "low calorie" not "negative calorie."
      </EvidenceBlock>

      <ComparisonTable
        title="Common 'Negative Calorie' Claims vs Reality"
        headers={['Food', 'Calories per 100g', 'TEF (Digestion Cost)', 'Net Calories', 'Actual Usefulness']}
        rows={[
          ['Celery', '14 kcal', '~3 kcal (24%)', '+11 kcal', 'Very low calorie, high volume snack'],
          ['Cucumber', '15 kcal', '~2 kcal (15%)', '+13 kcal', 'Excellent for volume eating'],
          ['Watermelon', '30 kcal', '~3 kcal (10%)', '+27 kcal', 'Hydrating, satisfying, moderate GI'],
          ['Lettuce', '15 kcal', '~2 kcal (13%)', '+13 kcal', 'Salad base, negligible calories'],
          ['Tomato', '18 kcal', '~2 kcal (11%)', '+16 kcal', 'Rich in lycopene, very low calorie'],
          ['Ash gourd', '12 kcal', '~1 kcal (10%)', '+11 kcal', 'South Indian staple, minimal caloric impact'],
        ]}
      />

      {/* ============ SUMMARY TABLE ============ */}
      <h2>Summary: Quick-Reference Myth Buster</h2>

      <ComparisonTable
        title="Indian Diet Myths — Evidence Summary"
        headers={['Myth', 'Verdict', 'What Science Says', 'What To Do Instead']}
        rows={[
          ['"Ghee makes you fat"', 'FALSE', 'Calorie surplus causes fat gain, not ghee', 'Use 1-2 tsp ghee/day; count it in calories'],
          ['"Rice makes you fat"', 'FALSE', 'Portion size matters, not rice itself', 'Limit to 1-1.5 cups per meal; add protein'],
          ['"Banana at night = weight gain"', 'FALSE', 'Calories don\'t change by time of day', 'Eat banana whenever it fits your calorie budget'],
          ['"Water dilutes digestion"', 'FALSE', 'Stomach compensates; no effect on absorption', 'Drink water with meals if desired'],
          ['"Curd at night = cold"', 'FALSE', 'Dairy does not increase mucus production', 'Eat curd anytime for probiotic benefits'],
          ['"Lemon water burns fat"', 'FALSE', 'Zero thermogenic effect from lemon water', 'Drink for hydration, not fat loss'],
          ['"Spot reduction works"', 'FALSE', 'Fat loss is systemic, genetically patterned', 'Overall caloric deficit + resistance training'],
          ['"Negative calorie foods"', 'FALSE', 'TEF never exceeds caloric content', 'Eat low-cal foods for volume, not "negative" effect'],
        ]}
      />

      <h2>Why Myths Persist</h2>

      <NoteBlock title="Understanding the psychology of food myths">
        Food myths persist due to several cognitive and social factors: (1) Confirmation bias —
        we notice instances that confirm our belief and ignore contradictions; (2) Authority
        appeal — "my grandmother said so" carries emotional weight; (3) Correlation-causation
        confusion — someone gained weight while eating rice, so rice must be the cause;
        (4) Commercial exploitation — the wellness industry profits from selling "fat-burning"
        foods and demonizing common ingredients; (5) Complexity aversion — a simple rule ("avoid
        rice") feels more actionable than the nuanced truth ("manage total calorie intake").
        The antidote is scientific literacy: understanding that individual foods do not make you
        fat or thin — your overall dietary pattern, caloric balance, and lifestyle determine
        body composition.
      </NoteBlock>

      <WarningBlock title="Be cautious of social media nutrition advice">
        Indian social media is flooded with nutrition misinformation — from Instagram influencers
        promoting "detox waters" to YouTube channels claiming specific foods "boost metabolism
        by 500%." Key red flags: claims of miraculous results from single foods, demonization
        of entire food groups (carbs, fats, dairy), promotion of expensive supplements as
        necessary, and before/after photos without disclosure of other interventions. Always
        ask: is there a randomized controlled trial supporting this claim? If the answer is no,
        treat the claim with skepticism. Your best guides are ICMR-NIN dietary guidelines,
        systematic reviews in peer-reviewed journals, and registered dietitians — not social
        media personalities.
      </WarningBlock>

      <ReferenceList
        references={[
          'Hooper, L., Martin, N., Abdelhamid, A., & Davey Smith, G. (2015). Reduction in saturated fat intake for cardiovascular disease. Cochrane Database of Systematic Reviews, (6), CD011737.',
          'Hu, E. A., Pan, A., Malik, V., & Sun, Q. (2012). White rice consumption and risk of type 2 diabetes: meta-analysis and systematic review. BMJ, 344, e1454.',
          'Pinnock, C. B., Graham, N. M., Mylvaganam, A., & Douglas, R. M. (1990). Relationship between milk intake and mucus production in adult volunteers challenged with rhinovirus-2. American Review of Respiratory Disease, 141(2), 352-356.',
          'Thiara, G., & Goldman, R. D. (2012). Milk consumption and mucus production in children with asthma. Canadian Family Physician, 58(2), 165-166.',
          'Gregersen, N. T., Flint, A., Bitz, C., Blundell, J. E., Raben, A., & Astrup, A. (2003). Reproducibility and power of ad libitum energy intake assessed by a food diary, a 24h recall and a DLW-validated whole-body calorimetry. European Journal of Clinical Nutrition, 57(10), 1210-1218.',
          'Vispute, S. S., Smith, J. D., LeCheminant, J. D., & Hurley, K. S. (2011). The effect of abdominal exercise on abdominal fat. Journal of Strength and Conditioning Research, 25(9), 2559-2564.',
          'Katch, F. I., Clarkson, P. M., Kroll, W., McBride, T., & Wilcox, A. (1984). Effects of sit up exercise training on adipose cell size and adiposity. Research Quarterly for Exercise and Sport, 55(3), 242-247.',
          'Buddemeyer, K. M., Alexander, A. E., & Secor, S. M. (2019). Negative calorie foods: An empirical examination of what is fact or fiction. bioRxiv, 586958.',
          'ICMR-NIN. (2024). Dietary Guidelines for Indians — A Manual. National Institute of Nutrition, Hyderabad.',
        ]}
      />
    </div>
  );
}
