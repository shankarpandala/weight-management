import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

const references = [
  {
    id: 'kristeller2011',
    authors: 'Kristeller JL, Wolever RQ.',
    year: 2011,
    title: 'Mindfulness-based eating awareness training for treating binge eating disorder: the conceptual foundation',
    journal: 'Eating Disorders',
    volume: '19(1)',
    pages: '49-61',
    doi: '10.1080/10640266.2011.533605'
  },
  {
    id: 'robinson2014',
    authors: 'Robinson E, Almiron-Roig E, Rutters F, et al.',
    year: 2014,
    title: 'A systematic review and meta-analysis examining the effect of eating rate on energy intake and hunger',
    journal: 'American Journal of Clinical Nutrition',
    volume: '100(1)',
    pages: '123-151',
    doi: '10.3945/ajcn.113.081745'
  },
  {
    id: 'oldham2011',
    authors: 'Oldham-Cooper RE, Hardman CA, Nicoll CE, Rogers PJ, Brunstrom JM.',
    year: 2011,
    title: 'Playing a computer game during lunch affects fullness, memory for lunch, and later snack intake',
    journal: 'American Journal of Clinical Nutrition',
    volume: '93(2)',
    pages: '308-313',
    doi: '10.3945/ajcn.110.004580'
  },
  {
    id: 'warren2017',
    authors: 'Warren JM, Smith N, Ashwell M.',
    year: 2017,
    title: 'A structured literature review on the role of mindfulness, mindful eating and intuitive eating in changing eating behaviours: effectiveness and associated potential mechanisms',
    journal: 'Nutrition Research Reviews',
    volume: '30(2)',
    pages: '272-283',
    doi: '10.1017/S0954422417000154'
  },
  {
    id: 'ogden2013',
    authors: 'Ogden J, Coop N, Cousins C, et al.',
    year: 2013,
    title: 'Distraction, the desire to eat and food intake. Towards an expanded model of mindless eating',
    journal: 'Appetite',
    volume: '62',
    pages: '119-126',
    doi: '10.1016/j.appet.2012.11.023'
  }
];

export default function MindfulEating() {
  return (
    <div className="prose-health">
      <h1>Mindful Eating: Evidence and Practice</h1>

      <p>
        In an era of screen-accompanied meals, on-the-go eating, and constant food
        availability, the act of actually paying attention to what and how we eat has
        become remarkably rare. Mindful eating — the practice of bringing full
        awareness to the experience of eating — has emerged as a research-backed
        approach to improving dietary behavior, reducing overeating, and restoring
        a healthy relationship with food. This section examines the evidence and
        provides practical techniques for implementation.
      </p>

      <DefinitionBlock term="Mindful Eating">
        A practice derived from Buddhist mindfulness meditation that involves paying
        deliberate, non-judgmental attention to the physical and emotional sensations
        associated with eating. This includes awareness of hunger and satiety cues,
        the taste, texture, and aroma of food, the pace of eating, and emotional
        states before, during, and after meals. Mindful eating is not a diet — it
        does not prescribe what or how much to eat. Instead, it changes the quality
        of attention given to the eating experience.
      </DefinitionBlock>

      <h2>The Evidence for Mindful Eating</h2>

      <EvidenceBlock
        level="moderate"
        source="Kristeller & Wolever (2011) — MB-EAT program; Warren et al. (2017)"
      >
        The Mindfulness-Based Eating Awareness Training (MB-EAT) program, developed
        by Jean Kristeller, has been studied in multiple clinical trials. In a
        randomized controlled trial of 150 individuals with binge eating disorder,
        MB-EAT participants showed significant reductions in binge eating episodes
        (from an average of 4 per week to less than 1.5), reduced emotional eating
        scores, and improved sense of control around food. A structured literature
        review by Warren et al. (2017) examining 68 studies found that mindfulness-based
        interventions consistently reduced binge eating, emotional eating, and
        external eating (eating in response to food cues rather than hunger).
        However, evidence for mindful eating as a direct weight loss tool is more
        mixed — it appears most effective at preventing overeating and improving
        food choices rather than producing caloric deficits per se.
      </EvidenceBlock>

      <NoteBlock title="What Mindful Eating Can and Cannot Do">
        <p><strong>Strong evidence that mindful eating:</strong></p>
        <ul>
          <li>Reduces binge eating frequency and severity</li>
          <li>Decreases emotional and stress-driven eating</li>
          <li>Improves awareness of hunger and fullness signals</li>
          <li>Reduces eating in response to external cues (sight, smell, availability)</li>
          <li>Decreases guilt and anxiety around food</li>
        </ul>
        <p><strong>Limited or mixed evidence that mindful eating:</strong></p>
        <ul>
          <li>Directly causes weight loss (modest effect at best)</li>
          <li>Replaces the need for caloric awareness in weight management</li>
          <li>Works as a standalone intervention for obesity treatment</li>
        </ul>
        <p>
          Mindful eating is best viewed as a complementary skill that enhances
          the effectiveness of a structured nutrition plan, not as a replacement
          for one.
        </p>
      </NoteBlock>

      <h2>Eating Speed: Slower Eating Reduces Intake</h2>

      <EvidenceBlock
        level="strong"
        source="Robinson et al. (2014) — Systematic review and meta-analysis"
      >
        A meta-analysis of 22 studies examining eating rate and energy intake found
        that slower eating was associated with significantly lower energy intake.
        On average, participants who ate slowly consumed 10-15% fewer calories per
        meal compared to those eating at a normal or fast pace. Slow eating also
        increased ratings of fullness and decreased ratings of hunger after the
        meal. The effect was consistent across different food types and study
        designs, suggesting that eating speed is a robust and modifiable determinant
        of energy intake.
      </EvidenceBlock>

      <h3>The 20-Minute Satiety Signal</h3>

      <p>
        The gut-brain satiety signaling system operates on a significant time delay.
        After food enters the stomach and duodenum, hormones including cholecystokinin
        (CCK), peptide YY (PYY), and GLP-1 are released. These hormones signal the
        brain to reduce appetite and initiate the sensation of fullness. However,
        this process takes approximately 15-20 minutes from the start of eating.
        When meals are consumed in less than 10 minutes — as is common with fast
        eating — the brain receives the "full" signal well after the person has
        already overeaten.
      </p>

      <ExampleBlock title="The Time Impact on a Typical Meal">
        <p>Consider a 700 kcal Indian lunch (dal, rice, sabzi, roti):</p>
        <ul>
          <li>
            <strong>Fast eater (8-10 minutes):</strong> Finishes the entire plate
            before satiety signals arrive. Still feels hungry, takes second
            helpings. Total intake: 900-1,000 kcal.
          </li>
          <li>
            <strong>Moderate eater (15-20 minutes):</strong> Finishes most of the
            plate as satiety signals begin. May skip second helpings. Total
            intake: 650-750 kcal.
          </li>
          <li>
            <strong>Slow, mindful eater (25-30 minutes):</strong> Satiety signals
            arrive during the meal. Naturally leaves some food on the plate or
            skips the last roti. Total intake: 550-650 kcal.
          </li>
          <li>
            <strong>Difference:</strong> 250-400 kcal per meal, or 500-800 kcal
            per day across lunch and dinner. This single behavioral change can
            create a meaningful caloric deficit.
          </li>
        </ul>
      </ExampleBlock>

      <h3>Chewing Research</h3>

      <p>
        The number of times food is chewed (mastication frequency) directly
        influences eating speed and, consequently, caloric intake. Research has
        shown that increasing chewing count from a typical 15 chews per bite to
        40 chews per bite reduces meal energy intake by approximately 12%. Chewing
        more also enhances the sensory experience of food — you actually taste
        and enjoy the food more when you chew it thoroughly.
      </p>

      <NoteBlock title="Practical Chewing Guidelines">
        <ul>
          <li>Aim for 20-30 chews per bite as a starting point — this feels
            uncomfortably slow at first but becomes natural within 1-2 weeks</li>
          <li>Put down your spoon or fork between bites — this forces a natural
            pause and prevents loading the next bite while still chewing</li>
          <li>Practice with one meal per day initially — typically dinner, when
            there is less time pressure</li>
          <li>Notice the changing texture and flavor of food as you chew — rice
            becomes sweeter, vegetables release different flavors</li>
          <li>For Indian meals: eat roti by tearing small pieces rather than
            large mouthfuls; eat rice with smaller spoonfuls</li>
        </ul>
      </NoteBlock>

      <h2>Distracted Eating: The Screen Effect</h2>

      <EvidenceBlock
        level="strong"
        source="Oldham-Cooper et al. (2011); Ogden et al. (2013)"
      >
        Eating while distracted — watching television, scrolling a phone, working
        at a computer, or playing games — consistently increases caloric intake
        by 25-50% compared to eating without distraction. Oldham-Cooper et al.
        found that participants who played a computer game during lunch reported
        feeling less full afterward and consumed 69% more biscuits at a later
        snack test. The mechanism involves impaired encoding of the meal into
        memory: when the brain does not fully register that eating occurred, it
        fails to properly calibrate subsequent hunger and fullness signals.
        Ogden et al. extended these findings, showing that even non-food-related
        distraction during eating (like completing a cognitive task) increased
        subsequent food intake.
      </EvidenceBlock>

      <h3>The Indian Context of Distracted Eating</h3>

      <p>
        In many Indian households, mealtime television watching has become the
        norm. The family gathers not around the dining table but around the TV,
        eating while watching serials, news, or cricket matches. Additionally,
        the rise of food delivery apps means many young professionals eat alone
        at their desks or on the couch while scrolling their phones. These
        patterns represent significant barriers to mindful eating.
      </p>

      <ExampleBlock title="Screen-Free Eating Strategies">
        <ul>
          <li>
            <strong>The "TV off during meals" rule:</strong> Start with one meal per
            day — typically dinner — where the TV is off and phones are away. This is
            the single most impactful change for most Indian families.
          </li>
          <li>
            <strong>Phone basket at the table:</strong> Place a basket or bowl at the
            dining table where everyone places their phone face-down during the meal.
            Make it a family norm, not a rule imposed on one person.
          </li>
          <li>
            <strong>Replace TV with conversation:</strong> The traditional Indian meal
            was a time for family conversation. Restoring this not only improves
            eating habits but strengthens family bonds.
          </li>
          <li>
            <strong>At work:</strong> Take a 15-minute break from your desk to eat
            lunch. Even moving to a different chair or space creates a mental
            separation between "working" and "eating."
          </li>
          <li>
            <strong>Solo dining:</strong> If eating alone, focus on the food itself —
            notice colors, aromas, textures. Play gentle background music if silence
            feels uncomfortable, but avoid content that demands visual attention.
          </li>
        </ul>
      </ExampleBlock>

      <h2>Practical Mindful Eating Techniques</h2>

      <h3>The Five-Senses Exercise</h3>

      <p>
        Before eating, take 30 seconds to engage all five senses with your food.
        This brief practice anchors attention and transitions the brain from
        "doing mode" (working, scrolling, rushing) to "eating mode."
      </p>

      <ExampleBlock title="Five-Senses Check-In (30 Seconds)">
        <ol>
          <li><strong>See:</strong> Look at your plate. Notice the colors, arrangement,
            and variety. A well-prepared Indian thali is visually rich — appreciate it.</li>
          <li><strong>Smell:</strong> Lean toward the food and inhale. Identify the spices
            — cumin in the tadka, turmeric in the dal, coriander in the garnish.</li>
          <li><strong>Touch:</strong> If eating with your hands (as is traditional in South
            India), notice the temperature and texture of the food as you mix it.</li>
          <li><strong>Hear:</strong> Notice the sounds — the sizzle of a hot sambar, the
            crunch of papad, the silence as you chew.</li>
          <li><strong>Taste:</strong> With the first bite, focus entirely on flavor. Notice
            how the taste evolves — the initial hit of spice, the sweetness of cooked
            onion, the sourness of tamarind.</li>
        </ol>
      </ExampleBlock>

      <h3>The Hunger Scale</h3>

      <p>
        Many people eat by the clock ("it's 1 PM, time for lunch") rather than
        by actual hunger signals. The hunger-fullness scale is a simple tool that
        reconnects eating behavior with physiological need.
      </p>

      <ExampleBlock title="The 1-10 Hunger-Fullness Scale">
        <ul>
          <li><strong>1 — Starving:</strong> Lightheaded, irritable, low energy. You waited too long.</li>
          <li><strong>2 — Very hungry:</strong> Stomach growling, difficulty concentrating.</li>
          <li><strong>3 — Hungry:</strong> Clear stomach emptiness, ready to eat.</li>
          <li><strong>4 — Slightly hungry:</strong> Beginning to think about food.</li>
          <li><strong>5 — Neutral:</strong> Neither hungry nor full.</li>
          <li><strong>6 — Satisfied:</strong> Comfortable. Could eat more but do not need to.</li>
          <li><strong>7 — Full:</strong> Slightly stretched stomach. Should stop here.</li>
          <li><strong>8 — Very full:</strong> Uncomfortable. Ate too much.</li>
          <li><strong>9 — Stuffed:</strong> Painfully full. Post-festival feeling.</li>
          <li><strong>10 — Sick:</strong> Nauseous from overeating.</li>
        </ul>
        <p>
          <strong>The goal:</strong> Start eating at 3-4 (genuinely hungry but not starving)
          and stop at 6-7 (satisfied but not stuffed). Most overeating occurs when people
          start at 1-2 (too hungry, leading to fast eating) or continue past 7 (eating
          for pleasure or habit rather than need).
        </p>
      </ExampleBlock>

      <h3>The Mid-Meal Check-In</h3>

      <p>
        Halfway through your meal, pause for 30-60 seconds. Put down your utensils,
        take a sip of water, and check in with your hunger level. Ask yourself:
        "Am I still genuinely hungry, or am I eating because food is still on my
        plate?" This simple pause, practiced consistently, can reduce caloric
        intake by 10-20% per meal by creating a moment of conscious choice about
        whether to continue eating.
      </p>

      <WarningBlock title="Mindful Eating Is Not Intuitive Eating">
        Mindful eating is sometimes confused with intuitive eating, which involves
        eating whatever your body "tells you" it wants without external rules.
        While intuitive eating can be valuable for individuals recovering from
        eating disorders, it is not an effective weight loss strategy for most
        people. In an environment of abundant, hyperpalatable food, unrestricted
        intuitive eating typically maintains or increases body weight. Mindful
        eating, by contrast, is a skill that enhances awareness within a structured
        nutrition plan — it complements caloric awareness rather than replacing it.
      </WarningBlock>

      <h2>Building a Mindful Eating Practice</h2>

      <NoteBlock title="Week-by-Week Mindful Eating Plan">
        <ul>
          <li>
            <strong>Week 1:</strong> Practice eating one meal per day without screens
            (no TV, phone, or computer). Just eat.
          </li>
          <li>
            <strong>Week 2:</strong> Add the five-senses check-in before that meal.
            Put down utensils between bites.
          </li>
          <li>
            <strong>Week 3:</strong> Add the mid-meal pause. Check hunger level at
            the halfway point of your meal.
          </li>
          <li>
            <strong>Week 4:</strong> Extend mindful eating to two meals per day.
            Begin using the hunger-fullness scale before and after meals.
          </li>
          <li>
            <strong>Ongoing:</strong> Continue building the habit. Full mindful eating
            at every meal is not realistic for most people — aim for 1-2 fully
            mindful meals per day, with general awareness at other meals.
          </li>
        </ul>
      </NoteBlock>

      <h2>Summary</h2>

      <NoteBlock title="Key Takeaways">
        <ol>
          <li>
            Mindful eating reduces binge eating and emotional eating with moderate-to-strong
            evidence — it works best as a complement to a structured nutrition plan.
          </li>
          <li>
            Eating slowly (20-30 minutes per meal) reduces intake by 10-15% per meal
            by allowing satiety signals to catch up with consumption.
          </li>
          <li>
            Distracted eating (TV, phone) increases intake by 25-50% and impairs
            memory for the meal, leading to increased snacking later.
          </li>
          <li>
            Start with one screen-free meal per day — this single change has the
            highest impact-to-effort ratio.
          </li>
          <li>
            Use the hunger-fullness scale (aim to eat at 3-4, stop at 6-7) to
            reconnect eating with physiological need.
          </li>
          <li>
            Build the practice gradually — trying to overhaul all eating habits
            simultaneously leads to abandonment.
          </li>
        </ol>
      </NoteBlock>

      <ReferenceList references={references} />
    </div>
  );
}
