import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

const references = [
  {
    id: 'lally2010',
    authors: 'Lally P, van Jaarsveld CHM, Potts HWW, Wardle J.',
    year: 2010,
    title: 'How are habits formed: Modelling habit formation in the real world',
    journal: 'European Journal of Social Psychology',
    volume: '40(6)',
    pages: '998-1009',
    doi: '10.1002/ejsp.674'
  },
  {
    id: 'duhigg2012',
    authors: 'Duhigg C.',
    year: 2012,
    title: 'The Power of Habit: Why We Do What We Do in Life and Business',
    journal: 'Random House, New York'
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
    id: 'gardner2012',
    authors: 'Gardner B, Lally P, Wardle J.',
    year: 2012,
    title: 'Making health habitual: the psychology of "habit formation" and general practice',
    journal: 'British Journal of General Practice',
    volume: '62(605)',
    pages: '664-666',
    doi: '10.3399/bjgp12X659466'
  },
  {
    id: 'gollwitzer1999',
    authors: 'Gollwitzer PM.',
    year: 1999,
    title: 'Implementation intentions: Strong effects of simple plans',
    journal: 'American Psychologist',
    volume: '54(7)',
    pages: '493-503',
    doi: '10.1037/0003-066X.54.7.493'
  }
];

export default function SustainableHabits() {
  return (
    <div className="prose-health">
      <h1>Building Sustainable Weight Management Habits</h1>

      <p>
        Willpower is a limited resource. No one can sustain conscious effort and
        self-discipline indefinitely — this is why "trying harder" fails as a
        long-term weight management strategy. The solution is to convert
        health-supporting behaviors from effortful decisions into automatic habits.
        When healthy eating becomes as automatic as brushing your teeth, it no
        longer requires willpower. This section covers the science of habit
        formation, practical implementation strategies, and the behavioral
        patterns of people who have successfully maintained weight loss long-term.
      </p>

      <h2>The Habit Loop: Cue, Routine, Reward</h2>

      <DefinitionBlock term="Habit Loop">
        A neurological pattern described by Charles Duhigg consisting of three
        components: (1) a cue — a trigger that initiates the behavior, (2) a
        routine — the behavior itself, and (3) a reward — the benefit the brain
        receives from the behavior. Once established, habits operate largely
        outside conscious awareness, driven by the basal ganglia rather than the
        prefrontal cortex. This is why habits feel effortless — they bypass the
        decision-making circuitry that consumes cognitive resources.
      </DefinitionBlock>

      <ExampleBlock title="Habit Loops in Eating Behavior">
        <p><strong>Unhealthy habit loop (to be replaced):</strong></p>
        <ul>
          <li><strong>Cue:</strong> Arriving home from work, tired and hungry</li>
          <li><strong>Routine:</strong> Eating whatever is immediately available — biscuits,
            namkeen, leftover sweets — while scrolling the phone on the couch</li>
          <li><strong>Reward:</strong> Immediate taste pleasure, stress relief, relaxation</li>
        </ul>
        <p><strong>Healthy replacement habit loop:</strong></p>
        <ul>
          <li><strong>Cue:</strong> Arriving home from work (same cue)</li>
          <li><strong>Routine:</strong> Changing clothes, drinking a glass of water, eating
            a pre-prepared healthy snack (roasted chana, fruit, or sprouts salad)</li>
          <li><strong>Reward:</strong> Taste satisfaction, hunger relief, feeling of being
            "on track" with goals (same category of reward — comfort and relief)</li>
        </ul>
        <p>
          The key insight: you cannot simply eliminate a habit. You must replace the
          routine while keeping the cue and providing an equivalent reward.
        </p>
      </ExampleBlock>

      <h2>The 21-Day Myth vs. Reality: 66 Days Average</h2>

      <EvidenceBlock
        level="strong"
        source="Lally et al. (2010) — Habit formation study"
      >
        The popular claim that "it takes 21 days to form a habit" has no scientific
        basis — it originated from a misinterpreted anecdote in a 1960s self-help
        book. Phillippa Lally and colleagues at University College London conducted
        the first rigorous study of habit formation in real-world conditions. They
        tracked 96 participants attempting to form a new health-related habit
        (eating, drinking, or exercise behavior) over 12 weeks. The median time
        to reach automaticity — the point at which the behavior felt effortless
        and automatic — was 66 days, with a range of 18 to 254 days depending on
        the complexity of the behavior. Simpler behaviors (drinking a glass of water
        after breakfast) became habitual faster than complex behaviors (doing 50
        sit-ups before dinner).
      </EvidenceBlock>

      <h3>What This Means in Practice</h3>

      <NoteBlock title="Realistic Habit Formation Timelines">
        <ul>
          <li>
            <strong>Simple habits (18-40 days):</strong> Drinking water upon waking,
            taking a daily vitamin, weighing yourself in the morning. These involve
            a single, brief action attached to an existing routine.
          </li>
          <li>
            <strong>Moderate habits (40-90 days):</strong> Eating a protein-rich
            breakfast, preparing lunch the night before, eating without screens.
            These require more preparation but follow a consistent pattern.
          </li>
          <li>
            <strong>Complex habits (90-250+ days):</strong> Complete meal prep routines,
            consistent exercise programs, sustained calorie tracking. These involve
            multiple steps, planning, and willpower management.
          </li>
          <li>
            <strong>Critical finding:</strong> Missing one day does not reset the
            habit formation process. Lally's data showed that occasional lapses
            had no measurable impact on the trajectory toward automaticity.
            Consistency matters, but perfection does not.
          </li>
        </ul>
      </NoteBlock>

      <h2>Implementation Intentions: "When X, I Will Do Y"</h2>

      <EvidenceBlock
        level="strong"
        source="Gollwitzer (1999) — Implementation intentions research"
      >
        Peter Gollwitzer's research on implementation intentions — specific
        if-then plans that link a situational cue to a planned response — has
        demonstrated remarkable effectiveness in translating goals into behavior.
        Meta-analyses show that forming implementation intentions approximately
        doubles the likelihood of following through on a health behavior goal
        compared to motivation alone. The mechanism works by pre-loading the
        decision: when the specified situation occurs, the planned response is
        activated automatically, bypassing the need for deliberation and
        willpower at the moment of choice.
      </EvidenceBlock>

      <ExampleBlock title="Implementation Intentions for Weight Management">
        <p>Structure: "When [specific situation], I will [specific action]."</p>
        <ul>
          <li>
            "When I sit down for lunch, I will fill half my plate with vegetables
            before adding rice or roti."
          </li>
          <li>
            "When I feel like snacking between meals, I will drink a glass of water
            and wait 10 minutes first."
          </li>
          <li>
            "When I wake up on Sunday morning, I will prepare meal-prep containers
            for the week."
          </li>
          <li>
            "When I order food at a restaurant, I will ask for the salad portion to
            be doubled and the rice to be halved."
          </li>
          <li>
            "When I come home from work, I will change my clothes and go for a
            15-minute walk before sitting down."
          </li>
          <li>
            "When I am offered second helpings at a family dinner, I will say 'It
            was delicious, I am completely full, thank you.'"
          </li>
          <li>
            "When I feel stressed and want to eat, I will do 5 minutes of deep
            breathing first."
          </li>
          <li>
            "When I go grocery shopping, I will not buy items that are not on my
            pre-written list."
          </li>
        </ul>
        <p>
          <strong>Key principles:</strong> Be specific (not "I will eat less" but "I
          will eat 1 roti instead of 3"). Attach the new behavior to an existing
          routine or predictable event. Write them down and review weekly.
        </p>
      </ExampleBlock>

      <h2>Environmental Design: Making Healthy Choices Easy</h2>

      <p>
        The most powerful way to change behavior is not through willpower but
        through environment design — structuring your surroundings so that healthy
        choices become the path of least resistance and unhealthy choices require
        extra effort. This approach leverages the fundamental laziness of human
        decision-making: we consistently choose the most convenient option.
      </p>

      <h3>Kitchen and Home Environment</h3>

      <ExampleBlock title="Home Environment Modifications">
        <ul>
          <li>
            <strong>Counter food effect:</strong> Brian Wansink's research found that
            people who kept fruit on their kitchen counter weighed an average of 6 kg
            less than those who kept chips/crackers visible, and 4 kg less than those
            who kept cereal boxes visible. Make healthy foods visible and convenient;
            keep less healthy foods out of sight or out of the house entirely.
          </li>
          <li>
            <strong>The 20-second rule:</strong> If a healthy food requires more than
            20 seconds of additional effort to access compared to an unhealthy
            alternative, you will default to the easier option. Pre-wash and
            cut fruits and vegetables. Keep healthy snacks at the front of
            the fridge at eye level.
          </li>
          <li>
            <strong>Smaller plates and serving vessels:</strong> Replace 12-inch
            dinner plates with 9-10 inch plates. Replace large serving spoons
            with smaller ones. This automatically reduces portions.
          </li>
          <li>
            <strong>Designated eating area:</strong> Eat only at the dining table —
            never on the couch, in bed, or at a desk. Creating spatial boundaries
            for eating reduces mindless snacking.
          </li>
          <li>
            <strong>Grocery strategy:</strong> Shop from a written list. Never shop
            hungry. Stick to the perimeter of the store (fresh foods) and minimize
            time in center aisles (processed foods). In Indian stores, go directly
            to the dal, vegetable, dairy, and protein sections.
          </li>
        </ul>
      </ExampleBlock>

      <h3>Work and Social Environment</h3>

      <NoteBlock title="Managing Your Food Environment at Work">
        <ul>
          <li>
            Keep healthy snacks in your desk drawer (roasted chana, almonds, makhana)
            and nothing else
          </li>
          <li>
            Avoid the break room during times when free food is typically available
            (birthday cakes, meeting leftovers, festival sweets)
          </li>
          <li>
            Bring lunch from home — people who pack lunch consume an average of
            250-400 kcal less than those who eat out daily
          </li>
          <li>
            If lunch meetings are unavoidable, pre-decide what you will order using
            an implementation intention
          </li>
          <li>
            Keep a water bottle at your desk and drink consistently — often what
            feels like a snack craving is mild dehydration
          </li>
        </ul>
      </NoteBlock>

      <h2>Keystone Habits</h2>

      <DefinitionBlock term="Keystone Habit">
        A habit that, once established, creates a cascade of positive changes in
        other behaviors without direct intervention. Keystone habits work by
        creating small wins that establish a sense of identity change and
        momentum, making other healthy behaviors feel natural and congruent.
        Charles Duhigg identified this pattern across multiple domains —
        exercise, food journaling, and making the bed were among the most
        common keystone habits.
      </DefinitionBlock>

      <ExampleBlock title="Keystone Habits for Weight Management">
        <ul>
          <li>
            <strong>Daily food tracking (even rough estimates):</strong> People who
            track food intake lose approximately twice as much weight as non-trackers.
            The act of recording creates awareness that spontaneously improves choices.
            You do not need to track forever — 2-3 months of tracking builds intuitive
            portion awareness that persists.
          </li>
          <li>
            <strong>Morning routine consistency:</strong> People who have a consistent
            morning routine (wake time, hydration, breakfast pattern) show better
            dietary choices throughout the day. The discipline established in the
            morning creates a psychological momentum.
          </li>
          <li>
            <strong>Regular exercise:</strong> People who exercise regularly eat better
            spontaneously — exercise appears to shift food preferences toward
            healthier options and reduce the reward value of junk food, possibly
            through neurochemical changes.
          </li>
          <li>
            <strong>Weekly meal planning:</strong> Spending 20-30 minutes on Sunday
            planning the week's meals cascades into better grocery shopping, less
            food waste, fewer impulsive takeout orders, and more consistent nutrition.
          </li>
          <li>
            <strong>Daily weighing:</strong> Despite historical concerns, research from
            the National Weight Control Registry and multiple RCTs shows that daily
            self-weighing is associated with better weight management outcomes. It
            provides rapid feedback and enables early course correction.
          </li>
        </ul>
      </ExampleBlock>

      <h2>Lessons from the National Weight Control Registry</h2>

      <EvidenceBlock
        level="strong"
        source="Wing & Phelan (2005); NWCR ongoing data"
      >
        The National Weight Control Registry (NWCR) — the largest prospective
        study of long-term successful weight loss — has tracked over 10,000
        individuals who have lost at least 13.6 kg and maintained the loss for
        at least 1 year (average loss: 33 kg, average maintenance duration:
        5.5 years). Analysis of their behaviors reveals remarkably consistent
        patterns that distinguish successful maintainers from the general
        population of dieters who regain weight.
      </EvidenceBlock>

      <h3>The Six Habits of Successful Maintainers</h3>

      <ExampleBlock title="NWCR Behavioral Patterns">
        <ol>
          <li>
            <strong>High levels of physical activity (~60 min/day):</strong> The most
            consistent finding. Walking is the most common exercise type reported.
            Physical activity appears to be the single strongest predictor of
            maintenance — more important than any specific dietary strategy.
          </li>
          <li>
            <strong>Consistent eating patterns:</strong> Successful maintainers eat
            similarly on weekdays and weekends, and during holidays and non-holidays.
            The "diet-on-weekdays, indulge-on-weekends" pattern is associated with
            weight regain.
          </li>
          <li>
            <strong>Regular self-monitoring:</strong> 75% weigh themselves at least
            weekly. 50% continue to track food intake in some form. This is not
            obsessive — it is informational. The scale provides data that enables
            rapid correction.
          </li>
          <li>
            <strong>Breakfast consumption (78%):</strong> While breakfast itself may
            not cause weight loss, eating breakfast is a marker of routine and
            structure — qualities that support consistent eating behavior.
          </li>
          <li>
            <strong>Low-calorie, lower-fat dietary pattern:</strong> Successful
            maintainers average approximately 1,800 kcal/day with about 25-27% of
            calories from fat. High-protein intake is common though not universal.
          </li>
          <li>
            <strong>Catching small regains quickly:</strong> Successful maintainers
            treat a 2-3 kg gain as an alarm signal that triggers immediate behavioral
            adjustment. Those who ignore small gains and wait for larger ones have
            much higher rates of full regain.
          </li>
        </ol>
      </ExampleBlock>

      <h2>The Identity Shift: From "Dieter" to "Healthy Person"</h2>

      <p>
        One of the most powerful but least discussed aspects of sustainable behavior
        change is the shift in self-identity. People who view their healthy behaviors
        as expressions of who they are — rather than temporary restrictions imposed
        on who they are — maintain those behaviors much more successfully.
      </p>

      <ExampleBlock title="Identity-Based vs. Outcome-Based Habits">
        <p><strong>Outcome-based (fragile):</strong></p>
        <ul>
          <li>"I want to lose 10 kg" — once achieved (or abandoned), the motivation disappears</li>
          <li>"I am on a diet" — implies a temporary state with an endpoint</li>
          <li>"I can't eat that" — implies deprivation and external restriction</li>
        </ul>
        <p><strong>Identity-based (durable):</strong></p>
        <ul>
          <li>"I am someone who takes care of my body" — ongoing identity</li>
          <li>"I eat well because that's who I am" — internal motivation</li>
          <li>"I don't eat that" — implies personal choice and identity alignment</li>
        </ul>
        <p>
          The language difference is subtle but psychologically powerful. "I can't"
          implies restriction by an external force. "I don't" implies a personal
          identity decision. Research shows that people who frame healthy choices as
          "I don't" are significantly more likely to maintain them than those who
          frame them as "I can't."
        </p>
      </ExampleBlock>

      <h2>Building Your Habit System: A Practical Framework</h2>

      <NoteBlock title="The Four-Phase Habit Building System">
        <p><strong>Phase 1 — Foundation (Weeks 1-2): Pick ONE keystone habit</strong></p>
        <ul>
          <li>Choose the single most impactful change for your situation</li>
          <li>Common starting points: daily food tracking, daily walking, screen-free dinner</li>
          <li>Create a specific implementation intention for this habit</li>
          <li>Set up your environment to support it</li>
        </ul>
        <p><strong>Phase 2 — Expansion (Weeks 3-6): Add ONE supporting habit</strong></p>
        <ul>
          <li>Once the keystone habit feels relatively automatic, add a second</li>
          <li>Common additions: meal prep, protein at every meal, vegetable-first plating</li>
          <li>Do not add a third habit until the first two feel established</li>
        </ul>
        <p><strong>Phase 3 — Refinement (Weeks 7-12): Optimize and troubleshoot</strong></p>
        <ul>
          <li>Identify which habits are sticking and which are struggling</li>
          <li>For struggling habits, redesign the cue or simplify the routine</li>
          <li>Add one more supporting habit if the first two are solid</li>
          <li>Begin to notice the cascade effect — other behaviors improving spontaneously</li>
        </ul>
        <p><strong>Phase 4 — Maintenance (Month 4+): Protect and recover</strong></p>
        <ul>
          <li>Habits are now largely automatic but remain vulnerable to disruption
            (travel, illness, life changes)</li>
          <li>Plan recovery strategies: "If I miss 3 days in a row, I will restart
            the habit the very next day with no guilt"</li>
          <li>Continue self-monitoring at a reduced frequency</li>
          <li>Annual check-in: Are my habits still serving my goals?</li>
        </ul>
      </NoteBlock>

      <WarningBlock title="Common Habit-Building Mistakes">
        <ul>
          <li>
            <strong>Trying to change everything at once:</strong> This is the most
            common mistake. Starting a new diet, exercise program, sleep schedule,
            and meditation practice simultaneously guarantees failure. Change one
            thing at a time.
          </li>
          <li>
            <strong>Going too big too fast:</strong> Start absurdly small. "I will
            walk for 5 minutes after dinner" is more likely to become habitual than
            "I will exercise for 1 hour every day."
          </li>
          <li>
            <strong>All-or-nothing thinking:</strong> One missed day is not failure.
            Missing one day has zero measurable impact on habit formation. Missing
            two days in a row starts to matter. Never miss twice.
          </li>
          <li>
            <strong>Relying on motivation:</strong> Motivation fluctuates daily.
            Habits persist because they are triggered by cues and environments, not
            by enthusiasm. Design systems, not resolutions.
          </li>
        </ul>
      </WarningBlock>

      <h2>Summary</h2>

      <NoteBlock title="Key Takeaways">
        <ol>
          <li>
            Habits form through the cue-routine-reward loop. Replace unhealthy
            routines while keeping the cue and reward.
          </li>
          <li>
            Habit formation takes a median of 66 days (not 21). Simple habits form
            faster. One missed day does not reset progress.
          </li>
          <li>
            Implementation intentions ("When X, I will Y") double the likelihood
            of following through on health goals.
          </li>
          <li>
            Environmental design is more powerful than willpower. Make healthy choices
            easy and visible; make unhealthy choices inconvenient.
          </li>
          <li>
            Start with ONE keystone habit and build from there. Food tracking,
            daily walking, and meal planning are the most powerful starting points.
          </li>
          <li>
            NWCR successful maintainers share consistent patterns: high activity,
            regular self-monitoring, consistent eating patterns, and rapid response
            to small weight gains.
          </li>
          <li>
            Shift your identity from "dieter" to "healthy person" — "I don't" is
            more powerful than "I can't."
          </li>
        </ol>
      </NoteBlock>

      <ReferenceList references={references} />
    </div>
  );
}
