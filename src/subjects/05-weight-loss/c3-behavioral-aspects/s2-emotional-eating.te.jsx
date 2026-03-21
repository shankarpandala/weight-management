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

export default function EmotionalEatingTe() {
  return (
    <div className="prose-health">
      <h1>Emotional Eating: Understanding and Managing Food-Mood Connections — మానసిక తినటం: ఆహార-మానసిక కనెక్షన్‌లను అర్థం చేసుకోవడం మరియు నిర్వహించడం</h1>

      <p>
        Humans do not eat purely for physiological nourishment. Food serves as comfort, celebration, distraction, reward, and coping mechanism. Emotional eating — consuming food in response to feelings rather than physical hunger — is one of the most common barriers to successful weight management. It operates largely below conscious awareness and can undermine even the most carefully designed nutrition plan. Understanding the triggers, mechanisms, and evidence-based strategies for managing emotional eating is essential for anyone pursuing lasting dietary change.
      </p>

      <p>
        మానవులు నిర్మితమైన పోషణ కోసం ఖచ్చితమైన తినవు. ఆహారం సాయం, సందడి, విచలన, పురస్కారం, మరియు coping విధానం సేవ చేస్తుంది. మానసిక తినటం — భావనలకు ప్రతిక్రియ స్వరూపంగా ఆహారం వినియోగించడం కాకుండా భౌతిక ఆకాంక్ష — విజయవంతమైన బరువు నిర్వహణకు సర్వసాధారణ అవరోధాల్లో ఒకటి. ఇది చాలా చేతన చైతన్యం క్రింద పనిచేస్తుంది మరియు చాలా జాగ్రత్తగా రూపొందించిన పోషణ ప్రణాళికను కూడా దెబ్బతీయగలదు. స్థిర dietary మార్పు పర్ఱుశ్చేసే ఎవరికైనా emotional తినటం నిర్వహణ యొక్క triggers, mechanisms, మరియు evidence-based వ్యూహాలను అర్థం చేసుకోవడం అవసరం.
      </p>

      <DefinitionBlock term="Emotional Eating — మానసిక తినటం">
        The tendency to eat in response to negative (or sometimes positive) emotions rather than physiological hunger. Emotional eating is characterized by sudden onset of desire for specific comfort foods, eating beyond fullness, and feelings of guilt or shame afterward. It is distinct from binge eating disorder (BED), though the two can overlap. Emotional eating exists on a spectrum — occasional emotional eating is normal human behavior, while chronic and compulsive emotional eating can significantly impair health and weight management.
      </DefinitionBlock>

      <h2>Types of Emotional Eating Triggers — మానసిక తినటం Triggers రకాలు</h2>

      <h3>Stress Eating — చాపం తినటం</h3>

      <p>
        Chronic stress elevates cortisol, which has a direct physiological effect on appetite — it increases cravings for energy-dense foods high in sugar and fat. This is not simply a lack of willpower; cortisol genuinely alters the brain's reward response to food, making high-calorie options more appealing and more rewarding to consume. The stressed brain is literally primed to seek caloric density.
      </p>

      <p>
        చిరకాల చాపం cortisol ఎత్తుపెట్టుకుంటుంది, ఇది appetite కు నేరుగా physiological ప్రభావం కలిగి ఉంటుంది — ఇది చక్కెర మరియు కొవ్వుల్లో అధిక energy-dense ఆహారాల కోసం కోరికలను పెంచుతుంది. ఇది చిత్త శక్తి కి సాధారణ కమీ కాదు; cortisol కేవలం ఆహారానికి మెదడు యొక్క prize ప్రతిక్రియను సవరించదు, అధిక-calorie ఎంపికలను ఎక్కువ ఆకర్షణీయమైన మరియు వినియోగానికి ఎక్కువ prize చేస్తుంది. చాపం మెదడు కేవలం caloric సాంద్రత కోసం సన్నద్ధమైనది.
      </p>

      <EvidenceBlock
        level="strong"
        source="Macht (2008) — Five-way model of emotion-eating interaction"
      >
        Michael Macht proposed a comprehensive model explaining five distinct pathways by which emotions affect eating behavior: (1) emotions generated by food itself, (2) emotions that suppress eating (acute intense stress, fear), (3) emotions that impair cognitive eating controls, (4) emotions that trigger eating as a coping mechanism, and (5) emotions that modulate eating in congruence with the emotion's features. This model explains why different emotional states produce different eating behaviors.
      </EvidenceBlock>

      <h3>Boredom Eating — నీరసత తినటం</h3>

      <p>
        Boredom is one of the most underrecognized triggers for overeating. When the brain lacks stimulation, eating provides a reliable dopamine hit — a brief burst of pleasure and novelty. Boredom eating is particularly problematic because it tends to involve mindless snacking rather than structured meals, making it difficult to track and easy to underestimate.
      </p>

      <p>
        నీరసత ఓవర్‌తినటం కోసం చాలా అకుర-గుర్తించిన triggers లో ఒకటి. మెదడు stimulation లేకపోయినప్పుడు, తినటం విశ్వసనీయ dopamine hit అందిస్తుంది — pleasure మరియు novelty యొక్క సంక్షిప్త స్ఫూర్తి. నీరసత తినటం ముఖ్యంగా చేతన స్నాకింగ్ కంటే structured ఆహారాలను కలిగి ఉండటానికి ఎందుకంటే, దీన్ని ట్రాక్ చేయడం కష్టం మరియు తక్కువ అంచనా చేయడం సులభం.
      </p>

      <h2>The Comfort Food Phenomenon — సాయం ఆహారం దృగ్విషయం</h2>

      <p>
        Comfort foods are specific foods associated with positive emotional memories, typically from childhood. In the Indian context, common comfort foods include khichdi (associated with being cared for when sick), mother's specific dal recipe, halwa or laddoo (associated with celebrations and love), chai with biscuits (associated with relaxation and social connection), and biryani (associated with special occasions and festivity).
      </p>

      <p>
        సాయం ఆహారాలు సానుకూల మానసిక జ్ఞాపకాలతో సంబంధం కలిగిన నిర్దిష్ట ఆహారాలు, సాధారణంగా చిన్నతనం నుండి. భారతీయ సందర్భంలో, సాధారణ సాయం ఆహారాలు khichdi (రోగం వద్ద జాగ్రత్త చేయడం కూడా సంబంధితం), తల్లి నిర్దిష్ట dal రెసిపీ, halwa లేదా laddoo (సందడి మరియు ప్రేమ కూడా సంబంధితం), చాయ్ biscuits తో (విశ్రమణ మరియు సామాజిక కనెక్షన్ కూడా సంబంధితం), మరియు biryani (ప్రత్యేక సందర్భాలు మరియు సందడి కూడా సంబంధితం) చేర్చండి.
      </p>

      <h2>Cognitive Behavioral Strategies — నైతిక Behavioral వ్యూహాలు</h2>

      <h3>The Emotional Eating Cycle — మానసిక తినటం చక్రం</h3>

      <ExampleBlock title="The Four-Stage Emotional Eating Cycle — నాలుగు-దశ మానసిక తినటం చక్రం">
        <ol>
          <li>
            <strong>Trigger:</strong> An emotional event or state (stress, boredom, sadness, loneliness, anger, even happiness/celebration)
          </li>
          <li>
            <strong>Urge:</strong> A sudden, intense desire for specific comfort foods. The urge feels urgent and overwhelming.
          </li>
          <li>
            <strong>Eating:</strong> Consuming the comfort food, often quickly and without full awareness. Temporary mood improvement during eating.
          </li>
          <li>
            <strong>Aftermath:</strong> Guilt, shame, physical discomfort, and frustration — which themselves become triggers for the next cycle.
          </li>
        </ol>
      </ExampleBlock>

      <h3>Key CBT Techniques — కీ CBT పద్ధతులు</h3>

      <NoteBlock title="Practical CBT Strategies for Emotional Eating — మానసిక తినటం కోసం Practical CBT వ్యూహాలు">
        <ul>
          <li>
            <strong>Food-mood journaling:</strong> For 2 weeks, record what you eat, when, and what you were feeling before eating. This creates awareness of patterns that operate below consciousness.
          </li>
          <li>
            <strong>The HALT check:</strong> Before non-meal eating, ask: Am I Hungry, Angry, Lonely, or Tired? If the answer is not "hungry," address the actual need directly.
          </li>
          <li>
            <strong>Urge surfing:</strong> When a food craving hits, set a timer for 15 minutes and do something else. Urges are like waves — they rise, peak, and pass.
          </li>
          <li>
            <strong>Cognitive restructuring:</strong> Challenge the thoughts that drive emotional eating. "I deserve this treat" becomes "I deserve to feel healthy and reach my goals."
          </li>
        </ul>
      </NoteBlock>

      <h2>Alternative Coping Mechanisms — ప్రత్యామ్నాయ Coping విధానాలు</h2>

      <ExampleBlock title="Non-Food Coping Toolkit — Non-Food Coping సాధన సమితి">
        <p><strong>For stress:</strong></p>
        <ul>
          <li>5-minute deep breathing (box breathing: inhale 4 sec, hold 4, exhale 4, hold 4)</li>
          <li>Brief walk — even 10 minutes reduces cortisol significantly</li>
          <li>Calling a friend or family member</li>
        </ul>
        <p><strong>For boredom:</strong></p>
        <ul>
          <li>Keep a list of 10 quick activities (read, puzzle, call someone, walk, clean)</li>
          <li>Move to a different room — leaving the kitchen area removes the cue</li>
          <li>Drink water or herbal tea — provides oral stimulation without calories</li>
        </ul>
      </ExampleBlock>

      <ReferenceList references={references} />
    </div>
  );
}
