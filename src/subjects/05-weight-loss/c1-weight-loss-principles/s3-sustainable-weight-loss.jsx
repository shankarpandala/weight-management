import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

const references = [
  {
    id: 'byrne2018',
    authors: 'Byrne NM, Sainsbury A, King NA, Hills AP, Wood RE.',
    year: 2018,
    title: 'Intermittent energy restriction improves weight loss efficiency in obese men: the MATADOR study',
    journal: 'International Journal of Obesity',
    volume: '42(2)',
    pages: '129-138',
    doi: '10.1038/ijo.2017.206'
  },
  {
    id: 'garthe2011',
    authors: 'Garthe I, Raastad T, Refsnes PE, Koivisto A, Sundgot-Borgen J.',
    year: 2011,
    title: 'Effect of two different weight-loss rates on body composition and strength and power-related performance in elite athletes',
    journal: 'International Journal of Sport Nutrition and Exercise Metabolism',
    volume: '21(2)',
    pages: '97-104',
    doi: '10.1123/ijsnem.21.2.97'
  },
  {
    id: 'wing2005',
    authors: 'Wing RR, Phelan S.',
    year: 2005,
    title: 'Long-term weight loss maintenance',
    journal: 'American Journal of Clinical Nutrition',
    volume: '82(1 Suppl)',
    pages: '222S-225S',
    doi: '10.1093/ajcn/82.1.222S'
  },
  {
    id: 'trexler2014',
    authors: 'Trexler ET, Smith-Ryan AE, Norton LE.',
    year: 2014,
    title: 'Metabolic adaptation to weight loss: implications for the athlete',
    journal: 'Journal of the International Society of Sports Nutrition',
    volume: '11(1)',
    pages: '7',
    doi: '10.1186/1550-2783-11-7'
  },
  {
    id: 'thomas2014',
    authors: 'Thomas JG, Bond DS, Phelan S, Hill JO, Wing RR.',
    year: 2014,
    title: 'Weight-loss maintenance for 10 years in the National Weight Control Registry',
    journal: 'American Journal of Preventive Medicine',
    volume: '46(1)',
    pages: '17-23',
    doi: '10.1016/j.amepre.2013.08.019'
  }
];

export default function SustainableWeightLoss() {
  return (
    <div className="prose-health">
      <h1>Sustainable Weight Loss: Rate, Plateaus, and Long-Term Success</h1>

      <p>
        The weight loss industry fixates on dramatic short-term results — "lose 10 kg
        in 30 days" — while ignoring the reality that 80-95% of dieters regain lost
        weight within 1-5 years. Sustainable weight loss is not about speed; it is
        about creating conditions that allow fat loss to continue while preserving
        muscle, maintaining metabolic health, and building habits that last beyond
        the "diet phase." This section covers the optimal rate of loss, strategic
        diet breaks, navigating plateaus, and what separates long-term successes
        from regain statistics.
      </p>

      <h2>Optimal Rate of Weight Loss: 0.5-1% Body Weight Per Week</h2>

      <DefinitionBlock term="Rate of Weight Loss">
        The speed at which body weight decreases, best expressed as a percentage of
        current body weight per week rather than an absolute number. A rate of 0.5-1%
        of body weight per week is considered optimal for most individuals, as it
        maximizes fat loss while minimizing lean tissue loss, hormonal disruption,
        and psychological distress.
      </DefinitionBlock>

      <EvidenceBlock
        level="strong"
        source="Garthe et al. (2011) — Elite athlete study"
      >
        In a landmark study of 24 elite athletes, Garthe and colleagues compared a
        slow rate of weight loss (0.7% of body weight per week, ~500 kcal deficit)
        to a fast rate (1.4% per week, ~1,000 kcal deficit) over 8-12 weeks. Both
        groups consumed 1.6 g/kg protein and performed resistance training. The slow
        group lost significantly more fat mass (5.6 vs 4.0 kg) and gained 2.1% lean
        body mass, while the fast group lost 0.2% lean mass. Strength gains were also
        superior in the slow group. This study provides compelling evidence that a
        slower, more moderate rate of loss produces qualitatively better weight loss —
        more fat, less muscle.
      </EvidenceBlock>

      <h3>Rate Guidelines by Body Fat Percentage</h3>

      <p>
        The appropriate rate of loss scales with current body fat levels. Individuals
        with higher body fat can sustain larger deficits without significant muscle
        loss because their bodies can mobilize stored fat more readily to meet
        energy needs.
      </p>

      <ExampleBlock title="Recommended Weekly Loss Rates by Body Fat">
        <ul>
          <li>
            <strong>Obese (men &gt;25%, women &gt;35% body fat):</strong> 0.7-1.0% of body
            weight per week (e.g., 0.7-1.0 kg/week for a 100 kg individual)
          </li>
          <li>
            <strong>Overweight (men 15-25%, women 25-35%):</strong> 0.5-0.7% per week
            (e.g., 0.4-0.6 kg/week for an 80 kg individual)
          </li>
          <li>
            <strong>Normal/lean (men 10-15%, women 20-25%):</strong> 0.3-0.5% per week
            (e.g., 0.2-0.35 kg/week for a 70 kg individual)
          </li>
          <li>
            <strong>Very lean (men &lt;10%, women &lt;20%):</strong> 0.2-0.3% per week —
            extremely slow dieting with maximum protein and resistance training required
          </li>
        </ul>
      </ExampleBlock>

      <h3>Why Faster Loss Means More Muscle Loss</h3>

      <p>
        The body has a finite capacity to mobilize stored fat for energy. Research
        suggests this limit is approximately 31 kcal per pound of body fat per day
        (69 kcal per kg of fat). When the caloric deficit exceeds this mobilization
        capacity, the additional energy must come from lean tissue. This is why
        leaner individuals must diet more slowly — their smaller fat stores have
        lower absolute mobilization capacity, making them more vulnerable to muscle
        catabolism during aggressive restriction.
      </p>

      <h2>Diet Breaks: The MATADOR Study</h2>

      <EvidenceBlock
        level="moderate"
        source="Byrne et al. (2018) — The MATADOR Study"
      >
        The MATADOR (Minimizing Adaptive Thermogenesis And Deactivating Obesity
        Rebound) study randomly assigned 51 obese men to either 16 weeks of
        continuous energy restriction (33% deficit) or intermittent restriction —
        alternating 2-week blocks of restriction with 2-week blocks at estimated
        energy balance, over a total of 30 weeks. The intermittent group lost
        significantly more weight (14.1 vs 9.1 kg) and fat mass (12.3 vs 8.0 kg),
        with less reduction in resting metabolic rate. At 6-month follow-up, the
        intermittent group had also regained less weight. The study suggests that
        periodic diet breaks at maintenance calories may attenuate metabolic
        adaptation and improve overall fat loss outcomes.
      </EvidenceBlock>

      <h3>How to Implement Diet Breaks</h3>

      <p>
        A diet break is a planned period (typically 1-2 weeks) where caloric intake
        is raised to estimated maintenance level. This is not a "cheat week" — it
        involves eating at calculated maintenance with continued attention to protein
        and food quality. The purpose is physiological and psychological recovery
        from the stress of caloric restriction.
      </p>

      <ExampleBlock title="Structured Diet Break Protocol">
        <ol>
          <li>
            <strong>Duration:</strong> 1-2 full weeks at maintenance calories
          </li>
          <li>
            <strong>Calorie calculation:</strong> Add back the deficit (e.g., if dieting
            at 1,800 kcal with a 500 kcal deficit, eat 2,300 kcal during the break)
          </li>
          <li>
            <strong>Macronutrient adjustment:</strong> Protein stays the same (1.6-2.2 g/kg).
            Extra calories come primarily from carbohydrates, which most effectively
            upregulate leptin, thyroid, and testosterone
          </li>
          <li>
            <strong>Training:</strong> Continue resistance training normally — this is
            not a training break, only a diet break
          </li>
          <li>
            <strong>Expect scale weight to increase</strong> by 1-3 kg from glycogen
            and water replenishment — this is not fat gain and will dissipate when the
            deficit resumes
          </li>
          <li>
            <strong>Frequency:</strong> Every 4-8 weeks of dieting for overweight
            individuals; every 2-4 weeks for leaner individuals
          </li>
        </ol>
      </ExampleBlock>

      <h3>Refeed Days</h3>

      <p>
        A refeed day is a single day where calories are raised to maintenance or
        slightly above, primarily through increased carbohydrate intake. Refeeds
        are a shorter, more frequent alternative to full diet breaks and are
        particularly useful for individuals who find 2-week breaks logistically
        difficult or who prefer a more consistent weekly rhythm.
      </p>

      <NoteBlock title="Refeed Day Guidelines">
        <ul>
          <li>Increase calories to maintenance level for 1 day per week</li>
          <li>Add 300-500 kcal primarily from carbohydrates (rice, potatoes, fruit, oats)</li>
          <li>Keep protein at the same level as dieting days</li>
          <li>Reduce fat slightly to accommodate extra carbs within calorie target</li>
          <li>Best placed on the hardest training day of the week</li>
          <li>Not the same as a "cheat day" — food quality and portions remain controlled</li>
        </ul>
      </NoteBlock>

      <h2>Weight Loss Plateaus</h2>

      <DefinitionBlock term="Weight Loss Plateau">
        A period of 2-4 weeks or longer during which body weight remains stable
        despite continued adherence to a caloric deficit. True plateaus indicate
        that energy expenditure has decreased to match current intake, requiring
        an adjustment. Many apparent plateaus are not true plateaus but rather
        water retention masking ongoing fat loss.
      </DefinitionBlock>

      <h3>Causes of Apparent Plateaus</h3>

      <ul>
        <li>
          <strong>Water retention from cortisol:</strong> Extended dieting increases
          cortisol, which promotes water retention that can mask 1-3 kg of fat loss.
          The "whoosh effect" — a sudden drop in weight after a period of stagnation —
          occurs when cortisol normalizes (often after a refeed or diet break).
        </li>
        <li>
          <strong>Menstrual cycle fluctuations:</strong> Women can retain 1-3 kg of
          water during the luteal phase (days 15-28), completely obscuring fat loss.
          Weight should be compared across the same cycle phase month-to-month.
        </li>
        <li>
          <strong>Increased sodium intake:</strong> A single high-sodium meal can cause
          1-2 kg of temporary water retention lasting 24-72 hours.
        </li>
        <li>
          <strong>New exercise routine:</strong> Starting or intensifying exercise
          causes muscle inflammation and glycogen supercompensation that increases
          water retention for 2-4 weeks.
        </li>
        <li>
          <strong>Inadequate sleep:</strong> Sleep deprivation increases cortisol and
          water retention while also reducing willpower and increasing hunger hormones.
        </li>
      </ul>

      <h3>True Plateaus: What to Do</h3>

      <p>
        If weight has been genuinely stable for 3-4 weeks and measurements (waist,
        hips, limbs) also show no change, a true plateau has occurred. This is
        caused by metabolic adaptation — the body's reduced energy expenditure
        now matches your reduced intake.
      </p>

      <ExampleBlock title="Plateau-Breaking Strategies (In Order of Priority)">
        <ol>
          <li>
            <strong>Audit adherence first:</strong> The most common cause of stalled
            progress is unconscious calorie creep — larger portions, forgotten snacks,
            cooking oil not measured. Track meticulously for one week before making
            any changes.
          </li>
          <li>
            <strong>Increase NEAT:</strong> Add 2,000-3,000 daily steps. This can
            increase expenditure by 100-200 kcal/day without formal exercise.
          </li>
          <li>
            <strong>Take a 1-2 week diet break:</strong> Eating at maintenance can
            help reverse metabolic adaptation before resuming the deficit.
          </li>
          <li>
            <strong>Small calorie reduction:</strong> Reduce intake by an additional
            100-200 kcal (not more), as the deficit has narrowed due to reduced body
            mass and metabolic adaptation.
          </li>
          <li>
            <strong>Adjust macros:</strong> Ensure protein remains at 1.6-2.2 g/kg —
            if it has drifted lower, increasing protein alone can restart progress.
          </li>
        </ol>
      </ExampleBlock>

      <WarningBlock title="What NOT to Do at a Plateau">
        Do not slash calories dramatically — dropping from 1,500 to 1,000 kcal
        will accelerate muscle loss and metabolic adaptation. Do not add excessive
        cardio (more than 30-45 minutes additional per week). Do not use the plateau
        as an excuse to abandon your approach entirely. And do not panic — plateaus
        are a normal, expected part of the weight loss process that everyone
        experiences.
      </WarningBlock>

      <h2>The 80% Adherence Principle</h2>

      <p>
        Perfectionism is the enemy of sustainable weight loss. Research on dietary
        adherence consistently shows that hitting your calorie and protein targets
        80% of the time produces nearly identical results to 100% adherence, while
        being dramatically more sustainable. The 20% margin accounts for social
        events, holidays, travel, and the general unpredictability of life.
      </p>

      <NoteBlock title="Applying the 80% Principle">
        <ul>
          <li>
            In a 7-day week, 80% means approximately 5.5 days on plan — in practice,
            be fully on plan 5-6 days and flexible 1-2 days
          </li>
          <li>
            "Flexible" does not mean binge — it means maintenance-level eating with
            less rigid food choices
          </li>
          <li>
            Over a month, this translates to 24-25 days on target out of 30 — a
            pace that still produces consistent results
          </li>
          <li>
            If adherence drops below 60-70%, progress will stall — the deficit is
            too aggressive or the food choices are unsustainable
          </li>
          <li>
            Track adherence weekly, not daily — one imperfect day does not negate
            six good days
          </li>
        </ul>
      </NoteBlock>

      <h2>Long-Term Success: Lessons from the National Weight Control Registry</h2>

      <EvidenceBlock
        level="strong"
        source="Wing & Phelan (2005); Thomas et al. (2014) — NWCR data"
      >
        The National Weight Control Registry (NWCR) has tracked over 10,000
        individuals who have lost at least 13.6 kg (30 pounds) and maintained
        the loss for at least 1 year. The average participant has lost 33 kg and
        maintained the loss for 5.5 years. Analysis of successful maintainers
        reveals consistent behavioral patterns that distinguish them from those
        who regain weight. These patterns are not extreme — they are consistent,
        moderate habits sustained over years.
      </EvidenceBlock>

      <h3>What Successful Maintainers Do</h3>

      <ExampleBlock title="NWCR Common Behaviors of Successful Maintainers">
        <ul>
          <li>
            <strong>78% eat breakfast daily</strong> — though this may be a marker of
            routine rather than a causal factor
          </li>
          <li>
            <strong>75% weigh themselves at least once per week</strong> — self-monitoring
            enables early detection of regain before it becomes significant
          </li>
          <li>
            <strong>62% watch fewer than 10 hours of TV per week</strong> — reduced
            sedentary behavior and reduced exposure to food advertising
          </li>
          <li>
            <strong>90% exercise approximately 1 hour per day</strong> — high levels of
            physical activity are the strongest predictor of weight maintenance
          </li>
          <li>
            <strong>Consistent eating patterns:</strong> Successful maintainers eat
            similarly on weekdays and weekends, and during holidays and non-holidays
          </li>
          <li>
            <strong>Act quickly on small regains:</strong> Rather than allowing 1-2 kg
            of regain to snowball, successful maintainers immediately adjust behavior
            when the scale rises
          </li>
        </ul>
      </ExampleBlock>

      <h3>The Transition from Weight Loss to Maintenance</h3>

      <p>
        The most dangerous period for weight regain is the transition from active
        weight loss to maintenance. Many people either continue restricting
        unnecessarily (leading to burnout and eventual binge-rebound) or immediately
        return to pre-diet eating patterns. A structured reverse dieting approach —
        gradually increasing calories by 100-200 kcal per week until reaching
        maintenance — helps bridge this gap and allows metabolic adaptation to
        partially reverse.
      </p>

      <NoteBlock title="Maintenance Transition Protocol">
        <ol>
          <li>
            When you reach your goal weight or desired body composition, do not
            immediately jump to "normal eating"
          </li>
          <li>
            Increase calories by 100-150 kcal per week for 4-8 weeks until reaching
            estimated maintenance
          </li>
          <li>
            Prioritize increasing carbohydrates first (to restore leptin and thyroid
            function), then fats
          </li>
          <li>
            Keep protein at the same level (1.6-2.2 g/kg) — this does not change in
            maintenance
          </li>
          <li>
            Continue resistance training at the same intensity and volume
          </li>
          <li>
            Weigh yourself 2-3 times per week and track the weekly average — expect
            a 1-3 kg increase from water and glycogen that is not fat regain
          </li>
          <li>
            Establish a "red line" weight (e.g., 3 kg above goal) that triggers a
            return to a moderate deficit if crossed
          </li>
        </ol>
      </NoteBlock>

      <h2>Summary: The Sustainable Weight Loss Framework</h2>

      <NoteBlock title="Key Principles for Lasting Results">
        <ol>
          <li>
            <strong>Lose 0.5-1% of body weight per week</strong> — slower rates preserve
            muscle and maintain metabolic health
          </li>
          <li>
            <strong>Implement diet breaks</strong> every 4-8 weeks — 1-2 weeks at
            maintenance calories to attenuate metabolic adaptation
          </li>
          <li>
            <strong>Use refeed days</strong> (1 per week) for psychological relief and
            modest metabolic benefit
          </li>
          <li>
            <strong>Expect and prepare for plateaus</strong> — audit adherence first,
            then adjust modestly
          </li>
          <li>
            <strong>Aim for 80% adherence</strong> — perfection is unsustainable and
            unnecessary
          </li>
          <li>
            <strong>Plan the transition to maintenance</strong> — reverse diet gradually
            and establish monitoring habits
          </li>
          <li>
            <strong>Adopt NWCR behaviors:</strong> regular self-monitoring, high physical
            activity, consistent eating patterns, and rapid response to small regains
          </li>
        </ol>
      </NoteBlock>

      <ReferenceList references={references} />
    </div>
  );
}
