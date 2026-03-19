import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

const references = [
  {
    id: 'vanstrien2016',
    authors: 'Van Strien T, Cebolla A, Etchemendy E, et al.',
    year: 2016,
    title: 'Emotional eating and food intake after sadness and joy',
    journal: 'Appetite',
    volume: '100',
    pages: '225-232',
    doi: '10.1016/j.appet.2016.02.026'
  },
  {
    id: 'macht2008',
    authors: 'Macht M.',
    year: 2008,
    title: 'How emotions affect eating: a five-way model',
    journal: 'Appetite',
    volume: '50(1)',
    pages: '1-11',
    doi: '10.1016/j.appet.2007.07.002'
  },
  {
    id: 'frayn2018',
    authors: 'Frayn M, Knäuper B.',
    year: 2018,
    title: 'Emotional eating and weight in adults: a review',
    journal: 'Current Psychology',
    volume: '37(4)',
    pages: '924-933',
    doi: '10.1007/s12144-017-9577-9'
  },
  {
    id: 'konttinen2019',
    authors: 'Konttinen H, van Strien T, Haukkala A, Kalogeropoulos N, Sarlio-Lähteenkorva S.',
    year: 2019,
    title: 'Emotional eating and physical activity self-efficacy as pathways in the association between depressive symptoms and adiposity indicators',
    journal: 'American Journal of Clinical Nutrition',
    volume: '109(4)',
    pages: '1142-1149',
    doi: '10.1093/ajcn/nqy327'
  },
  {
    id: 'devonport2019',
    authors: 'Devonport TJ, Nicholls W, Fullerton C.',
    year: 2019,
    title: 'A systematic review of the association between emotions and eating behaviour in normal and overweight adult populations',
    journal: 'Journal of Health Psychology',
    volume: '24(1)',
    pages: '3-24',
    doi: '10.1177/1359105317697813'
  }
];

export default function EmotionalEating() {
  return (
    <div className="prose-health">
      <h1>Emotional Eating: Understanding and Managing Food-Mood Connections</h1>

      <p>
        Humans do not eat purely for physiological nourishment. Food serves as
        comfort, celebration, distraction, reward, and coping mechanism. Emotional
        eating — consuming food in response to feelings rather than physical hunger —
        is one of the most common barriers to successful weight management. It
        operates largely below conscious awareness and can undermine even the most
        carefully designed nutrition plan. Understanding the triggers, mechanisms,
        and evidence-based strategies for managing emotional eating is essential
        for anyone pursuing lasting dietary change.
      </p>

      <DefinitionBlock term="Emotional Eating">
        The tendency to eat in response to negative (or sometimes positive) emotions
        rather than physiological hunger. Emotional eating is characterized by
        sudden onset of desire for specific comfort foods, eating beyond fullness,
        and feelings of guilt or shame afterward. It is distinct from binge eating
        disorder (BED), though the two can overlap. Emotional eating exists on a
        spectrum — occasional emotional eating is normal human behavior, while
        chronic and compulsive emotional eating can significantly impair health
        and weight management.
      </DefinitionBlock>

      <h2>Types of Emotional Eating Triggers</h2>

      <h3>Stress Eating</h3>

      <p>
        Chronic stress elevates cortisol, which has a direct physiological effect
        on appetite — it increases cravings for energy-dense foods high in sugar
        and fat. This is not simply a lack of willpower; cortisol genuinely
        alters the brain's reward response to food, making high-calorie options
        more appealing and more rewarding to consume. The stressed brain is
        literally primed to seek caloric density.
      </p>

      <EvidenceBlock
        level="strong"
        source="Macht (2008) — Five-way model of emotion-eating interaction"
      >
        Michael Macht proposed a comprehensive model explaining five distinct
        pathways by which emotions affect eating behavior: (1) emotions generated
        by food itself (food-induced emotions), (2) emotions that suppress eating
        (acute intense stress, fear), (3) emotions that impair cognitive eating
        controls (breaking dietary restraint), (4) emotions that trigger eating
        as a coping mechanism (using food to regulate mood), and (5) emotions
        that modulate eating in congruence with the emotion's features (angry
        people eat aggressively, sad people eat slowly). This model explains why
        different emotional states produce different eating behaviors and why
        interventions must target specific emotional pathways.
      </EvidenceBlock>

      <ExampleBlock title="Common Stress Eating Patterns">
        <ul>
          <li>
            <strong>Work deadline stress:</strong> Reaching for biscuits, chips, or
            namkeen while working late. The combination of cognitive fatigue and
            elevated cortisol makes energy-dense snacks nearly irresistible.
          </li>
          <li>
            <strong>Financial stress:</strong> Comfort food as an affordable "treat"
            when other pleasures feel inaccessible. "I deserve at least this."
          </li>
          <li>
            <strong>Relationship stress:</strong> Eating replaces communication — food
            becomes the emotional outlet when direct expression feels impossible.
          </li>
          <li>
            <strong>Parenting stress:</strong> Eating children's leftovers, snacking
            during nap time, using bedtime as an opportunity for "me time" treats.
          </li>
        </ul>
      </ExampleBlock>

      <h3>Boredom Eating</h3>

      <p>
        Boredom is one of the most underrecognized triggers for overeating. When
        the brain lacks stimulation, eating provides a reliable dopamine hit —
        a brief burst of pleasure and novelty. Boredom eating is particularly
        problematic because it tends to involve mindless snacking rather than
        structured meals, making it difficult to track and easy to underestimate.
      </p>

      <NoteBlock title="Identifying Boredom Eating">
        Ask yourself before eating: "Am I physically hungry, or am I just
        looking for something to do?" If you would eat a plain apple or a bowl
        of plain dal-rice with the same enthusiasm as the chips or sweets you
        are reaching for, you are probably genuinely hungry. If only the highly
        palatable option appeals to you, the drive is more likely emotional or
        stimulus-seeking rather than physiological.
      </NoteBlock>

      <h3>Sadness and Grief Eating</h3>

      <p>
        Sadness-driven eating involves using food to soothe emotional pain — the
        classic "comfort food" phenomenon. Research by Van Strien and colleagues
        has shown that individuals with high emotional eating tendencies consume
        significantly more food after a sadness induction compared to neutral
        mood conditions. The foods chosen are almost invariably sweet, fatty,
        or both — ice cream, chocolate, fried snacks, mithai — because these
        foods activate the brain's opioid and dopamine reward systems, providing
        temporary mood elevation.
      </p>

      <EvidenceBlock
        level="moderate"
        source="Van Strien et al. (2016)"
      >
        Van Strien and colleagues demonstrated that individuals high in emotional
        eating traits consumed significantly more food after experimentally induced
        sadness compared to joy or a neutral state. Importantly, individuals low
        in emotional eating traits showed no such increase — they actually ate
        slightly less when sad. This suggests that emotional eating is a learned
        response pattern, not a universal human reaction to negative emotions,
        and that it can therefore be unlearned through appropriate interventions.
      </EvidenceBlock>

      <h2>The Comfort Food Phenomenon</h2>

      <p>
        Comfort foods are specific foods associated with positive emotional memories,
        typically from childhood. In the Indian context, common comfort foods include
        khichdi (associated with being cared for when sick), mother's specific dal
        recipe, halwa or laddoo (associated with celebrations and love), chai with
        biscuits (associated with relaxation and social connection), and biryani
        (associated with special occasions and festivity).
      </p>

      <p>
        The emotional power of these foods is real and should not be dismissed.
        The goal is not to eliminate comfort foods but to develop awareness of when
        they are being used as emotional medication rather than enjoyed as part of
        normal eating, and to develop alternative coping strategies for the
        underlying emotions.
      </p>

      <h2>Measuring Emotional Eating: The DEBQ</h2>

      <DefinitionBlock term="Dutch Eating Behavior Questionnaire (DEBQ)">
        A validated psychometric instrument developed by Tatiana van Strien and
        colleagues that measures three dimensions of eating behavior: emotional
        eating (13 items), external eating (10 items — eating in response to food
        cues like sight and smell), and restrained eating (10 items — conscious
        restriction of food intake). The emotional eating subscale assesses eating
        in response to specific emotions including anxiety, anger, boredom,
        loneliness, and sadness. Higher scores indicate greater tendency toward
        emotional eating.
      </DefinitionBlock>

      <ExampleBlock title="Sample DEBQ Emotional Eating Questions">
        <p>Rate each from 1 (never) to 5 (very often):</p>
        <ul>
          <li>"Do you have a desire to eat when you are irritated?"</li>
          <li>"Do you have a desire to eat when you have nothing to do?"</li>
          <li>"Do you have a desire to eat when you are depressed or discouraged?"</li>
          <li>"Do you have a desire to eat when you are feeling lonely?"</li>
          <li>"Do you have a desire to eat when somebody lets you down?"</li>
          <li>"Do you have a desire to eat when you are cross?"</li>
          <li>"Do you get the desire to eat when you are anxious, worried, or tense?"</li>
        </ul>
        <p>
          An average score above 3.0 on the emotional eating subscale suggests a
          clinically relevant tendency toward emotional eating that would benefit
          from targeted intervention.
        </p>
      </ExampleBlock>

      <h2>Cognitive Behavioral Strategies</h2>

      <p>
        Cognitive behavioral therapy (CBT) is the most evidence-based psychological
        approach for managing emotional eating. CBT targets the thought patterns
        (cognitions) and behavioral patterns that maintain the emotional eating
        cycle.
      </p>

      <h3>The Emotional Eating Cycle</h3>

      <ExampleBlock title="The Four-Stage Emotional Eating Cycle">
        <ol>
          <li>
            <strong>Trigger:</strong> An emotional event or state (stress, boredom,
            sadness, loneliness, anger, even happiness/celebration)
          </li>
          <li>
            <strong>Urge:</strong> A sudden, intense desire for specific comfort
            foods. The urge feels urgent and overwhelming.
          </li>
          <li>
            <strong>Eating:</strong> Consuming the comfort food, often quickly and
            without full awareness. Temporary mood improvement during eating.
          </li>
          <li>
            <strong>Aftermath:</strong> Guilt, shame, physical discomfort, and
            frustration — which themselves become triggers for the next cycle.
          </li>
        </ol>
        <p>
          CBT intervenes at each stage: identifying triggers, developing tolerance
          for urges without acting on them, creating alternative responses, and
          reducing guilt through self-compassion.
        </p>
      </ExampleBlock>

      <h3>Key CBT Techniques</h3>

      <NoteBlock title="Practical CBT Strategies for Emotional Eating">
        <ul>
          <li>
            <strong>Food-mood journaling:</strong> For 2 weeks, record what you eat,
            when, and what you were feeling before eating. This creates awareness
            of patterns that operate below consciousness. Many people are shocked
            to discover how frequently they eat in response to emotions.
          </li>
          <li>
            <strong>The HALT check:</strong> Before non-meal eating, ask: Am I Hungry,
            Angry, Lonely, or Tired? If the answer is not "hungry," address the
            actual need directly.
          </li>
          <li>
            <strong>Urge surfing:</strong> When a food craving hits, set a timer for
            15 minutes and do something else. Urges are like waves — they rise,
            peak, and pass. Most food urges diminish significantly within 15-20
            minutes if not acted upon.
          </li>
          <li>
            <strong>Cognitive restructuring:</strong> Challenge the thoughts that
            drive emotional eating. "I deserve this treat" becomes "I deserve
            to feel healthy and reach my goals." "This will make me feel better"
            becomes "This will make me feel better for 5 minutes and worse for
            2 hours."
          </li>
          <li>
            <strong>Behavioral experiments:</strong> Test predictions by trying
            alternative coping strategies and comparing how you feel afterward
            versus after emotional eating.
          </li>
        </ul>
      </NoteBlock>

      <h2>Indian Cultural Context: Food as Love and Celebration</h2>

      <p>
        Indian culture has a uniquely intense relationship with food as an expression
        of emotion, particularly love and care. Understanding this context is
        essential for addressing emotional eating without creating shame or cultural
        disconnection.
      </p>

      <ExampleBlock title="Cultural Food-Emotion Connections in India">
        <ul>
          <li>
            <strong>"Kha le beta" (Eat, child):</strong> Indian mothers and
            grandmothers express love through feeding. Refusing food can feel like
            rejecting love. This creates deep conditioning where being fed = being
            loved, and self-feeding becomes a way to self-soothe.
          </li>
          <li>
            <strong>Festival eating:</strong> Every Indian festival centers on
            specific foods — Diwali mithai, Pongal sweet rice, Eid biryani, Onam
            sadya. Moderation during festivals can feel like not fully participating
            in cultural life.
          </li>
          <li>
            <strong>Guest hospitality:</strong> Not feeding a guest generously is
            considered deeply disrespectful. Guests are expected to eat beyond
            fullness as a sign of appreciation.
          </li>
          <li>
            <strong>Food as status:</strong> Serving rich, ghee-laden foods signals
            prosperity. In families that experienced scarcity, food abundance carries
            emotional significance beyond nutrition.
          </li>
          <li>
            <strong>Emotional vocabulary:</strong> When words for emotional states are
            limited or unexpressed (as in many traditional Indian families), food
            becomes the primary language for care, concern, celebration, and comfort.
          </li>
        </ul>
      </ExampleBlock>

      <NoteBlock title="Navigating Cultural Food Expectations">
        The solution is not to reject food-as-love but to expand the vocabulary of
        care. Love can be expressed through cooking healthier versions of favorite
        foods, through spending quality time together (not centered on eating),
        through physical affection, and through verbal expression. When a
        grandmother says "eat more," responding with "your food is so delicious,
        I am completely satisfied" acknowledges the love while setting a boundary.
        The cultural work is gradual — it involves redefining "caring for someone"
        to include "caring for their health."
      </NoteBlock>

      <h2>Alternative Coping Mechanisms</h2>

      <p>
        If emotional eating serves a function — soothing stress, relieving boredom,
        numbing sadness — then simply removing the food without providing an
        alternative leaves the underlying need unmet. Sustainable change requires
        building a toolkit of non-food coping strategies.
      </p>

      <ExampleBlock title="Non-Food Coping Toolkit">
        <p><strong>For stress:</strong></p>
        <ul>
          <li>5-minute deep breathing (box breathing: inhale 4 sec, hold 4, exhale 4, hold 4)</li>
          <li>Brief walk — even 10 minutes reduces cortisol significantly</li>
          <li>Progressive muscle relaxation</li>
          <li>Calling a friend or family member</li>
          <li>Writing down what is stressing you (journaling)</li>
        </ul>
        <p><strong>For boredom:</strong></p>
        <ul>
          <li>Keep a list of 10 quick activities (read, puzzle, call someone, walk, clean)</li>
          <li>Move to a different room — leaving the kitchen area removes the cue</li>
          <li>Drink water or herbal tea — provides oral stimulation without calories</li>
          <li>Pick up a hobby that uses your hands (drawing, gardening, cooking something planned)</li>
        </ul>
        <p><strong>For sadness:</strong></p>
        <ul>
          <li>Allow yourself to feel the emotion — sometimes we eat to avoid feeling</li>
          <li>Physical activity — even gentle movement improves mood neurochemically</li>
          <li>Social connection — call or visit someone you trust</li>
          <li>Listen to music that matches then gradually improves your mood</li>
          <li>Self-compassion practice: "This is hard right now. What do I truly need?"</li>
        </ul>
        <p><strong>For loneliness:</strong></p>
        <ul>
          <li>Reach out — text or call someone, even briefly</li>
          <li>Engage in community activities — join a class, volunteer group, or walking club</li>
          <li>Pet interaction if available — reduces cortisol and increases oxytocin</li>
        </ul>
      </ExampleBlock>

      <h2>When to Seek Professional Help</h2>

      <WarningBlock title="Signs That Professional Support Is Needed">
        Emotional eating exists on a spectrum. Occasional emotional eating is a
        normal part of human behavior and does not require professional intervention.
        However, seek help from a psychologist, counselor, or psychiatrist if:
        <ul>
          <li>Emotional eating occurs daily or nearly daily and feels out of control</li>
          <li>You eat in secret and hide food consumption from others</li>
          <li>You feel intense shame or self-loathing after eating</li>
          <li>Eating is your only or primary coping mechanism for negative emotions</li>
          <li>You experience binge eating episodes (consuming unusually large amounts
            of food in a short period with a sense of loss of control)</li>
          <li>Your eating patterns are causing significant weight gain, digestive
            problems, or social isolation</li>
          <li>You have a history of trauma, depression, or anxiety that is
            intertwined with eating behavior</li>
          <li>Self-help strategies have been tried consistently for 2-3 months
            without meaningful improvement</li>
        </ul>
        Seeking professional help is a sign of strength and self-awareness, not
        weakness. Emotional eating rooted in trauma, depression, or anxiety
        often requires therapeutic support that goes beyond nutrition advice.
      </WarningBlock>

      <EvidenceBlock
        level="moderate"
        source="Frayn & Knäuper (2018) — Review of emotional eating and weight"
      >
        A review of the relationship between emotional eating and weight in adults
        confirmed that emotional eating is a significant predictor of weight gain
        over time, with effect sizes comparable to other established risk factors.
        The review also found that cognitive-behavioral interventions targeting
        emotional eating were effective in reducing both emotional eating behavior
        and associated weight gain, particularly when they included skills training
        in emotion regulation, cognitive restructuring of food-related thoughts,
        and development of alternative coping strategies. Interventions that
        only targeted diet without addressing the emotional component showed
        high relapse rates.
      </EvidenceBlock>

      <h2>Summary</h2>

      <NoteBlock title="Key Takeaways">
        <ol>
          <li>
            Emotional eating is driven by specific triggers — stress, boredom,
            sadness, loneliness — each requiring different management strategies.
          </li>
          <li>
            The comfort food phenomenon is neurobiologically real — high-fat, high-sugar
            foods genuinely (but temporarily) improve mood through opioid and dopamine
            pathways.
          </li>
          <li>
            CBT techniques — food-mood journaling, the HALT check, urge surfing, and
            cognitive restructuring — are the most evidence-based self-help approaches.
          </li>
          <li>
            Indian cultural food-as-love traditions require sensitive navigation,
            not outright rejection. Expand the vocabulary of care beyond food.
          </li>
          <li>
            Build a non-food coping toolkit and practice using it before you need it.
          </li>
          <li>
            Seek professional help if emotional eating is daily, feels out of control,
            or is linked to underlying mental health conditions.
          </li>
        </ol>
      </NoteBlock>

      <ReferenceList references={references} />
    </div>
  );
}
