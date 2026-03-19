import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

const references = [
  {
    id: 'cioffi2018',
    authors: 'Cioffi I, Evangelista A, Ponzo V, et al.',
    year: 2018,
    title: 'Intermittent versus continuous energy restriction on weight loss and cardiometabolic outcomes: a systematic review and meta-analysis of randomized controlled trials',
    journal: 'Journal of Translational Medicine',
    volume: '16(1)',
    pages: '371',
    doi: '10.1186/s12967-018-1748-4'
  },
  {
    id: 'schoenfeld2015',
    authors: 'Schoenfeld BJ, Aragon AA, Krieger JW.',
    year: 2015,
    title: 'Effects of meal frequency on weight loss and body composition: a meta-analysis',
    journal: 'Nutrition Reviews',
    volume: '73(2)',
    pages: '69-82',
    doi: '10.1093/nutrit/nuu017'
  },
  {
    id: 'mattson2017',
    authors: 'Mattson MP, Longo VD, Harvie M.',
    year: 2017,
    title: 'Impact of intermittent fasting on health and disease processes',
    journal: 'Ageing Research Reviews',
    volume: '39',
    pages: '46-58',
    doi: '10.1016/j.arr.2016.10.005'
  },
  {
    id: 'sievert2019',
    authors: 'Sievert K, Hussain SM, Page MJ, et al.',
    year: 2019,
    title: 'Effect of breakfast on weight and energy intake: systematic review and meta-analysis of randomised controlled trials',
    journal: 'BMJ',
    volume: '364',
    pages: 'l42',
    doi: '10.1136/bmj.l42'
  },
  {
    id: 'tinsley2015',
    authors: 'Tinsley GM, La Bounty PM.',
    year: 2015,
    title: 'Effects of intermittent fasting on body composition and clinical health markers in humans',
    journal: 'Nutrition Reviews',
    volume: '73(10)',
    pages: '661-674',
    doi: '10.1093/nutrit/nuv041'
  }
];

export default function MealTimingFasting() {
  return (
    <div className="prose-health">
      <h1>Meal Timing, Frequency, and Intermittent Fasting</h1>

      <p>
        Few topics in nutrition generate as much debate and confusion as meal timing.
        Should you eat six small meals a day to "stoke your metabolism"? Is intermittent
        fasting a metabolic miracle or just another tool for caloric restriction?
        Does skipping breakfast doom you to weight gain? The evidence provides clear
        answers to these questions — and in most cases, the answer is simpler than
        the fitness industry would have you believe.
      </p>

      <DefinitionBlock term="Intermittent Fasting (IF)">
        A dietary pattern that cycles between periods of voluntary fasting and
        eating. Unlike traditional diets that focus on what to eat, IF focuses
        primarily on when to eat. The multiple variants — 16:8, 5:2, OMAD, and
        alternate-day fasting — differ in the duration and frequency of fasting
        periods but share the common feature of deliberately restricting the
        eating window.
      </DefinitionBlock>

      <h2>Intermittent Fasting Variants</h2>

      <h3>16:8 Time-Restricted Eating (TRE)</h3>

      <p>
        The most popular and arguably most practical form of intermittent fasting.
        The individual eats all daily calories within an 8-hour window and fasts
        for the remaining 16 hours (including sleep). Most practitioners skip
        breakfast and eat from approximately noon to 8 PM, though the specific
        timing is flexible. This approach naturally reduces caloric intake by
        eliminating one eating occasion.
      </p>

      <ExampleBlock title="Typical 16:8 Schedule">
        <ul>
          <li><strong>Fasting window:</strong> 8:00 PM to 12:00 PM next day (16 hours)</li>
          <li><strong>Eating window:</strong> 12:00 PM to 8:00 PM (8 hours)</li>
          <li><strong>Meal 1 (12:00 PM):</strong> Large lunch — protein, vegetables, complex carbs</li>
          <li><strong>Meal 2 (3:30 PM):</strong> Snack — nuts, fruit, or protein shake</li>
          <li><strong>Meal 3 (7:30 PM):</strong> Dinner — balanced plate with protein and vegetables</li>
          <li><strong>During fast:</strong> Water, black coffee, green tea (zero-calorie beverages only)</li>
        </ul>
      </ExampleBlock>

      <h3>5:2 Diet</h3>

      <p>
        Developed by Dr. Michael Mosley, the 5:2 approach involves eating normally
        for five days per week and restricting caloric intake to approximately
        500-600 kcal on two non-consecutive days. The two "fast days" create a
        weekly deficit without requiring daily restriction. This approach appeals
        to those who find daily restriction mentally exhausting but can tolerate
        two challenging days per week.
      </p>

      <h3>One Meal a Day (OMAD)</h3>

      <p>
        OMAD concentrates all daily calories into a single meal, typically consumed
        within a 1-hour window. While this creates the longest daily fast (approximately
        23 hours), it also presents significant practical challenges: consuming
        adequate protein (1.6-2.2 g/kg) in a single sitting is difficult, nutrient
        absorption may be suboptimal, and the extreme approach can promote an
        unhealthy relationship with food in susceptible individuals.
      </p>

      <WarningBlock title="OMAD Concerns">
        OMAD makes it extremely difficult to consume adequate protein for muscle
        preservation, as absorbing more than 40-50g of protein in a single meal
        becomes progressively less efficient. Additionally, the feast-famine cycle
        can trigger binge-like eating patterns and is explicitly contraindicated
        for anyone with a history of eating disorders. OMAD should not be a
        first-line recommendation for weight loss.
      </WarningBlock>

      <h3>Alternate-Day Fasting (ADF)</h3>

      <p>
        ADF alternates between "feed days" (eating normally or ad libitum) and
        "fast days" (consuming 0-25% of normal calories, typically 500-600 kcal).
        This creates a weekly caloric deficit of approximately 25-35% without
        daily restriction. Research suggests similar outcomes to continuous
        restriction, but dropout rates in studies are notably higher due to the
        difficulty of maintaining every-other-day fasting long-term.
      </p>

      <h2>The Central Finding: IF Is Not Superior to Continuous Restriction</h2>

      <EvidenceBlock
        level="strong"
        source="Cioffi et al. (2018) — Systematic review and meta-analysis"
      >
        In a comprehensive meta-analysis of 11 randomized controlled trials
        directly comparing intermittent energy restriction to continuous energy
        restriction, Cioffi and colleagues found no significant difference in
        weight loss, fat mass reduction, lean mass preservation, or improvements
        in metabolic markers (fasting glucose, insulin, lipids) between the two
        approaches. When total caloric intake and protein are equated, the pattern
        of restriction — whether continuous or intermittent — does not meaningfully
        alter outcomes. IF works for weight loss because it reduces total caloric
        intake, not because of any unique metabolic mechanism.
      </EvidenceBlock>

      <p>
        This finding has been replicated across multiple subsequent systematic
        reviews and meta-analyses. The mechanisms sometimes attributed to IF —
        increased growth hormone, enhanced autophagy, improved insulin
        sensitivity — either do not occur to a meaningful degree in the context
        of typical IF protocols (16-24 hour fasts), or they also occur with
        continuous caloric restriction of similar magnitude.
      </p>

      <NoteBlock title="When IF Might Still Be Useful">
        Although IF is not metabolically superior, it can be a valuable practical
        tool for certain individuals. People who naturally prefer fewer, larger
        meals may find IF easier to adhere to than spreading small meals throughout
        the day. Those with busy morning schedules may find 16:8 simplifies their
        routine. The structure of defined eating windows can help people who
        struggle with uncontrolled snacking. The key insight is that IF is a
        preference-based scheduling tool, not a metabolic hack.
      </NoteBlock>

      <h2>Meal Frequency: 3 Meals vs. 6 Meals</h2>

      <p>
        For decades, the fitness industry promoted the idea that eating six small
        meals per day "stoked the metabolic fire" and increased the thermic effect
        of food. This advice was based on a fundamental misunderstanding of
        thermodynamics and has been thoroughly debunked.
      </p>

      <EvidenceBlock
        level="strong"
        source="Schoenfeld et al. (2015) — Meta-analysis of meal frequency studies"
      >
        Schoenfeld, Aragon, and Krieger conducted a meta-analysis examining the
        relationship between meal frequency, body weight, and body composition.
        Their analysis found no significant effect of meal frequency on weight
        loss or body composition when total caloric intake and macronutrient
        composition were controlled. The thermic effect of food is determined
        by total caloric intake and macronutrient composition, not by meal
        frequency. Three meals of 600 kcal produce the same thermic effect
        as six meals of 300 kcal — the total thermogenesis is identical.
      </EvidenceBlock>

      <h3>The "Metabolic Fire" Myth Explained</h3>

      <p>
        The thermic effect of food (TEF) represents approximately 10% of total
        daily energy expenditure and is proportional to total caloric intake and
        the macronutrient composition of the diet. Protein has the highest TEF
        (20-30%), followed by carbohydrates (5-10%) and fats (0-3%). Whether
        you consume 2,000 kcal in 2 meals or 6 meals, the total TEF remains
        the same — approximately 200 kcal. Spreading meals does not increase
        this value.
      </p>

      <ExampleBlock title="TEF Comparison: Same Calories, Different Frequencies">
        <p><strong>Scenario A: Three meals per day</strong></p>
        <ul>
          <li>Meal 1: 667 kcal → TEF: ~67 kcal</li>
          <li>Meal 2: 667 kcal → TEF: ~67 kcal</li>
          <li>Meal 3: 667 kcal → TEF: ~67 kcal</li>
          <li><strong>Total daily TEF: ~200 kcal</strong></li>
        </ul>
        <p><strong>Scenario B: Six meals per day</strong></p>
        <ul>
          <li>Meals 1-6: 333 kcal each → TEF: ~33 kcal each</li>
          <li><strong>Total daily TEF: ~200 kcal</strong></li>
        </ul>
        <p>The total is identical. Meal frequency does not alter total thermogenesis.</p>
      </ExampleBlock>

      <h2>Time-Restricted Eating and Circadian Rhythm</h2>

      <p>
        An emerging area of research examines the intersection of meal timing
        and circadian biology. The body's circadian clock influences insulin
        sensitivity, glucose tolerance, and lipid metabolism, all of which
        vary throughout the day. Insulin sensitivity peaks in the morning and
        declines throughout the day, suggesting that earlier eating may have
        metabolic advantages.
      </p>

      <EvidenceBlock
        level="moderate"
        source="Mattson et al. (2017); Early time-restricted eating studies"
      >
        Preliminary research on early time-restricted eating (eTRE) — consuming
        all food between approximately 8 AM and 2 PM — suggests modest
        improvements in insulin sensitivity, blood pressure, and oxidative
        stress compared to eating the same calories spread over 12+ hours.
        However, these studies are small, short-term, and the magnitude of
        metabolic benefit is modest. For weight loss specifically, the
        circadian timing effect is secondary to total caloric intake. The
        practical challenge is significant: eating only between 8 AM and
        2 PM is socially disruptive and difficult to maintain long-term.
      </EvidenceBlock>

      <NoteBlock title="Practical Circadian Recommendations">
        While the evidence for strict early TRE is still preliminary, reasonable
        circadian-informed habits include: consuming a substantial protein-rich
        breakfast, making lunch the largest meal when possible, keeping dinner
        moderate in size, avoiding large meals within 2-3 hours of bedtime, and
        maintaining consistent meal timing from day to day. These practices
        may provide modest metabolic benefits without the impracticality of
        strict early TRE.
      </NoteBlock>

      <h2>Breakfast Skipping: The Evidence Is Neutral</h2>

      <p>
        Conventional wisdom held that skipping breakfast leads to weight gain
        through compensatory overeating later in the day. This belief was
        based primarily on observational studies showing that breakfast
        skippers tended to weigh more — a classic example of confounding,
        as breakfast skipping correlates with many other unhealthy behaviors.
      </p>

      <EvidenceBlock
        level="strong"
        source="Sievert et al. (2019) — BMJ systematic review"
      >
        A systematic review and meta-analysis of 13 randomized controlled
        trials published in the BMJ found that breakfast consumption had no
        significant effect on weight loss. In fact, those assigned to eat
        breakfast consumed an average of 260 kcal more per day than those
        assigned to skip it, without a compensatory reduction in later meals.
        The common advice that "breakfast is the most important meal of the
        day for weight loss" is not supported by experimental evidence.
        Whether to eat or skip breakfast should be based on individual
        preference, schedule, and hunger patterns.
      </EvidenceBlock>

      <h2>Practical Recommendations Summary</h2>

      <NoteBlock title="Evidence-Based Takeaways on Meal Timing">
        <ol>
          <li>
            <strong>Total calories and protein matter most.</strong> Meal timing
            and frequency are secondary factors that can be adjusted based on
            personal preference without affecting weight loss outcomes.
          </li>
          <li>
            <strong>IF is a scheduling tool, not a metabolic hack.</strong> Choose
            it if it helps you eat fewer calories more easily, but do not expect
            magic beyond caloric restriction.
          </li>
          <li>
            <strong>Eat 2-4 meals per day based on your preference.</strong> There
            is no metabolic advantage to any particular meal frequency.
          </li>
          <li>
            <strong>Breakfast is optional.</strong> Eat it if you are hungry in the
            morning; skip it if you are not. Neither choice will make or break
            your weight loss.
          </li>
          <li>
            <strong>Distribute protein across meals.</strong> The one evidence-based
            timing recommendation: consume 25-40g of protein at each eating
            occasion to maximize muscle protein synthesis.
          </li>
          <li>
            <strong>Avoid large meals close to bedtime</strong> when possible, as
            this may modestly improve sleep quality and metabolic parameters.
          </li>
        </ol>
      </NoteBlock>

      <WarningBlock title="IF and Specific Populations">
        Intermittent fasting is not recommended for: individuals with a history
        of eating disorders (binge eating, anorexia, bulimia), pregnant or
        breastfeeding women, children and adolescents, individuals with type 1
        diabetes or those on insulin/sulfonylureas without medical supervision,
        and people with a history of hypoglycemia. For these groups, regular
        balanced meals throughout the day remain the safest approach.
      </WarningBlock>

      <ReferenceList references={references} />
    </div>
  );
}
