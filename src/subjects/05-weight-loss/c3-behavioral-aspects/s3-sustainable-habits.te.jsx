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

export default function SustainableHabitsTe() {
  return (
    <div className="prose-health">
      <h1>Building Sustainable Weight Management Habits — సస్టైనబుల్ బరువు నిర్వహణ అలవాట్లను నిర్మిస్తూ</h1>

      <p>
        Willpower is a limited resource. No one can sustain conscious effort and self-discipline indefinitely — this is why "trying harder" fails as a long-term weight management strategy. The solution is to convert health-supporting behaviors from effortful decisions into automatic habits. When healthy eating becomes as automatic as brushing your teeth, it no longer requires willpower. This section covers the science of habit formation, practical implementation strategies, and the behavioral patterns of people who have successfully maintained weight loss long-term.
      </p>

      <p>
        చిత్త శక్తి అనేది పరిమితమైన నిధి. ఎవరూ చేతన ప్రయత్నం మరియు self-discipline నిరవధికంగా నిలుస్తారు — ఇదే "కష్టపడటం" దీర్ఘకాలిక బరువు నిర్వహణ వ్యూహ విఫలమవుతుంది. సమాధానం health-supporting ప్రవర్తనలను effortful నిర్ణయాల నుండి automatic అలవాట్లుగా మార్చడం. ఆరోగ్య తినటం నీ దంతాలను శుభ్రపరిచేటప్పుడు ఆటోమేటిక్ గా మారిందే, ఇది ఇకపై చిత్త శక్తి అవసరం లేదు. ఈ విభాగం అలవాటు నిర్మాణం యొక్క సైన్సు, practical అమలు వ్యూహాలు, మరియు దీర్ఘకాలికంగా బరువు నష్టం విజయవంతంగా నిర్వహించిన వ్యక్తుల ప్రవర్తన నమూనాలను కవర్ చేస్తుంది.
      </p>

      <h2>The Habit Loop: Cue, Routine, Reward — అలవాటు లూప్: Cue, Routine, Reward</h2>

      <DefinitionBlock term="Habit Loop — అలవాటు లూప్">
        A neurological pattern described by Charles Duhigg consisting of three components: (1) a cue — a trigger that initiates the behavior, (2) a routine — the behavior itself, and (3) a reward — the benefit the brain receives from the behavior. Once established, habits operate largely outside conscious awareness, driven by the basal ganglia rather than the prefrontal cortex. This is why habits feel effortless — they bypass the decision-making circuitry that consumes cognitive resources.
      </DefinitionBlock>

      <ExampleBlock title="Habit Loops in Eating Behavior — తిన్న ప్రవర్తనలో అలవాటు లూప్‌లు">
        <p><strong>Unhealthy habit loop (to be replaced):</strong></p>
        <ul>
          <li><strong>Cue:</strong> Arriving home from work, tired and hungry</li>
          <li><strong>Routine:</strong> Eating whatever is immediately available — biscuits, namkeen, leftover sweets — while scrolling the phone on the couch</li>
          <li><strong>Reward:</strong> Immediate taste pleasure, stress relief, relaxation</li>
        </ul>
        <p><strong>Healthy replacement habit loop:</strong></p>
        <ul>
          <li><strong>Cue:</strong> Arriving home from work (same cue)</li>
          <li><strong>Routine:</strong> Changing clothes, drinking a glass of water, eating a pre-prepared healthy snack (roasted chana, fruit, or sprouts salad)</li>
          <li><strong>Reward:</strong> Taste satisfaction, hunger relief, feeling of being "on track" with goals</li>
        </ul>
      </ExampleBlock>

      <h2>The 21-Day Myth vs. Reality: 66 Days Average — 21-రోజుల పెద్ద లేకపై వాస్తవం: 66 రోజులు సగటు</h2>

      <EvidenceBlock
        level="strong"
        source="Lally et al. (2010) — Habit formation study"
      >
        The popular claim that "it takes 21 days to form a habit" has no scientific basis — it originated from a misinterpreted anecdote in a 1960s self-help book. Phillippa Lally and colleagues at University College London conducted the first rigorous study of habit formation in real-world conditions. They tracked 96 participants attempting to form a new health-related habit over 12 weeks. The median time to reach automaticity was 66 days, with a range of 18 to 254 days depending on the complexity of the behavior. Simpler behaviors became habitual faster than complex behaviors.
      </EvidenceBlock>

      <h2>Implementation Intentions: "When X, I Will Do Y" — అమలు ఉద్దేశ్యాలు: "ఎక్స్ ఎప్పుడు, నేను Y చేస్తాను"</h2>

      <EvidenceBlock
        level="strong"
        source="Gollwitzer (1999) — Implementation intentions research"
      >
        Peter Gollwitzer's research on implementation intentions — specific if-then plans that link a situational cue to a planned response — has demonstrated remarkable effectiveness in translating goals into behavior. Meta-analyses show that forming implementation intentions approximately doubles the likelihood of following through on a health behavior goal compared to motivation alone. The mechanism works by pre-loading the decision: when the specified situation occurs, the planned response is activated automatically, bypassing the need for deliberation and willpower at the moment of choice.
      </EvidenceBlock>

      <ExampleBlock title="Implementation Intentions for Weight Management — బరువు నిర్వహణ కోసం అమలు ఉద్దేశ్యాలు">
        <p>Structure: "When [specific situation], I will [specific action]."</p>
        <ul>
          <li>"When I sit down for lunch, I will fill half my plate with vegetables before adding rice or roti."</li>
          <li>"When I feel like snacking between meals, I will drink a glass of water and wait 10 minutes first."</li>
          <li>"When I wake up on Sunday morning, I will prepare meal-prep containers for the week."</li>
          <li>"When I come home from work, I will change my clothes and go for a 15-minute walk before sitting down."</li>
          <li>"When I feel stressed and want to eat, I will do 5 minutes of deep breathing first."</li>
        </ul>
      </ExampleBlock>

      <h2>Environmental Design: Making Healthy Choices Easy — పర్యావరణ రూపకల్పన: ఆరోగ్య ఎంపికలను సులభ తీయడం</h2>

      <p>
        The most powerful way to change behavior is not through willpower but through environment design — structuring your surroundings so that healthy choices become the path of least resistance and unhealthy choices require extra effort. This approach leverages the fundamental laziness of human decision-making: we consistently choose the most convenient option.
      </p>

      <p>
        ప్రవర్తన మార్చుటకు శక్తివంతమైన మార్గం చిత్త శక్తిద్వారా కాదు కానీ పర్యావరణ రూపకల్పనద్వారా — ఆరోగ్య ఎంపికలను కనిష్ఠ నిరోధం యొక్క మార్గం మరియు ఆరోగ్య కాని ఎంపికలకు అదనపు ప్రయత్నం అవసరమైన విధంగా నీ చుట్టూ నిర్మాణం. ఈ విధానం మానవ నిర్ణయ నిర్ణయం యొక్క ప్రాథమిక సోమరితనం leverage — మేము చిన్నఉన్న ఎంపిక సర్వదా ఎంచుకుంటాము.
      </p>

      <h3>Kitchen and Home Environment — కిచెన్ మరియు ఇంటి పర్యావరణం</h3>

      <ExampleBlock title="Home Environment Modifications — ఇంటి పర్యావరణ సవరణలు">
        <ul>
          <li>
            <strong>Counter food effect:</strong> Brian Wansink's research found that people who kept fruit on their kitchen counter weighed an average of 6 kg less than those who kept chips/crackers visible.
          </li>
          <li>
            <strong>The 20-second rule:</strong> If a healthy food requires more than 20 seconds of additional effort to access compared to an unhealthy alternative, you will default to the easier option.
          </li>
          <li>
            <strong>Smaller plates and serving vessels:</strong> Replace 12-inch dinner plates with 9-10 inch plates. Replace large serving spoons with smaller ones. This automatically reduces portions.
          </li>
          <li>
            <strong>Designated eating area:</strong> Eat only at the dining table — never on the couch, in bed, or at a desk. Creating spatial boundaries for eating reduces mindless snacking.
          </li>
        </ul>
      </ExampleBlock>

      <h2>Keystone Habits — కీ అలవాట్లు</h2>

      <DefinitionBlock term="Keystone Habit — కీ అలవాటు">
        A habit that, once established, creates a cascade of positive changes in other behaviors without direct intervention. Keystone habits work by creating small wins that establish a sense of identity change and momentum, making other healthy behaviors feel natural and congruent.
      </DefinitionBlock>

      <ExampleBlock title="Keystone Habits for Weight Management — బరువు నిర్వహణ కోసం కీ అలవాట్లు">
        <ul>
          <li>
            <strong>Daily food tracking (even rough estimates):</strong> People who track food intake lose approximately twice as much weight as non-trackers. The act of recording creates awareness that spontaneously improves choices.
          </li>
          <li>
            <strong>Regular exercise:</strong> People who exercise regularly eat better spontaneously — exercise appears to shift food preferences toward healthier options.
          </li>
          <li>
            <strong>Weekly meal planning:</strong> Spending 20-30 minutes on Sunday planning the week's meals cascades into better grocery shopping, less food waste, and more consistent nutrition.
          </li>
          <li>
            <strong>Daily weighing:</strong> Daily self-weighing is associated with better weight management outcomes. It provides rapid feedback and enables early course correction.
          </li>
        </ul>
      </ExampleBlock>

      <h2>Building Your Habit System: A Practical Framework — నీ అలవాటు వ్యవస్థ నిర్మిస్తూ: ఒక Practical ఫ్రేమ్‌వర్క్</h2>

      <NoteBlock title="The Four-Phase Habit Building System — నాలుగు-Phase అలవాటు నిర్మాణ వ్యవస్థ">
        <p><strong>Phase 1 — Foundation (Weeks 1-2): Pick ONE keystone habit</strong></p>
        <ul>
          <li>Choose the single most impactful change for your situation</li>
          <li>Common starting points: daily food tracking, daily walking, screen-free dinner</li>
        </ul>
        <p><strong>Phase 2 — Expansion (Weeks 3-6): Add ONE supporting habit</strong></p>
        <ul>
          <li>Once the keystone habit feels relatively automatic, add a second</li>
          <li>Common additions: meal prep, protein at every meal, vegetable-first plating</li>
        </ul>
        <p><strong>Phase 3 — Refinement (Weeks 7-12): Optimize and troubleshoot</strong></p>
        <ul>
          <li>Identify which habits are sticking and which are struggling</li>
          <li>For struggling habits, redesign the cue or simplify the routine</li>
        </ul>
        <p><strong>Phase 4 — Maintenance (Month 4+): Protect and recover</strong></p>
        <ul>
          <li>Habits are now largely automatic but remain vulnerable to disruption</li>
          <li>Plan recovery strategies: "If I miss 3 days in a row, I will restart the habit the very next day with no guilt"</li>
        </ul>
      </NoteBlock>

      <h2>The Identity Shift: From "Dieter" to "Healthy Person" — identity మార్పు: "Dieter" నుండి "ఆరోగ్య వ్యక్తి" కు</h2>

      <ExampleBlock title="Identity-Based vs. Outcome-Based Habits — Identity-Based vs. Outcome-Based అలవాట్లు">
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
      </ExampleBlock>

      <ReferenceList references={references} />
    </div>
  );
}
