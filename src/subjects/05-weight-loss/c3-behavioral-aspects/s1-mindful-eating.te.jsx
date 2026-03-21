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

export default function MindfulEatingTe() {
  return (
    <div className="prose-health">
      <h1>Mindful Eating: Evidence and Practice — అవగాహన తినటం: సాక్ష్యం మరియు అభ్యాసం</h1>

      <p>
        In an era of screen-accompanied meals, on-the-go eating, and constant food availability, the act of actually paying attention to what and how we eat has become remarkably rare. Mindful eating — the practice of bringing full awareness to the experience of eating — has emerged as a research-backed approach to improving dietary behavior, reducing overeating, and restoring a healthy relationship with food. This section examines the evidence and provides practical techniques for implementation.
      </p>

      <p>
        స్కీన్-సంసార్థక భోజనాల, on-the-go తినటం, మరియు నిరంతర ఆహార అందుబాటు యొక్క యుగంలో, అసలు గమనిస్తే ఏమి మరియు ఎలా తిందో చాలా అరుదుకం ఉన్నది. అవగాహన తినటం — తినటం యొక్క అనుభవానికి పూర్తి అవగాహన తీసుకువచ్చే అభ్యాసం — dietary ప్రవర్తన మెరుగుపరచటానికి, ఓవర్‌తినటం తగ్గించటానికి, మరియు ఆహారం కూడా ఆరోగ్య సంబంధం పునరుద్ధరించటానికి పరిశోధన-backed విధానం. ఈ విభాగం సాక్ష్యం పరిశీలిస్తుంది మరియు అమలు కోసం practical పద్ధతులను అందిస్తుంది.
      </p>

      <DefinitionBlock term="Mindful Eating — అవగాహన తినటం">
        A practice derived from Buddhist mindfulness meditation that involves paying deliberate, non-judgmental attention to the physical and emotional sensations associated with eating. This includes awareness of hunger and satiety cues, the taste, texture, and aroma of food, the pace of eating, and emotional states before, during, and after meals. Mindful eating is not a diet — it does not prescribe what or how much to eat. Instead, it changes the quality of attention given to the eating experience.
      </DefinitionBlock>

      <h2>The Evidence for Mindful Eating — అవగాహన తినటం కోసం సాక్ష్యం</h2>

      <EvidenceBlock
        level="moderate"
        source="Kristeller & Wolever (2011) — MB-EAT program; Warren et al. (2017)"
      >
        The Mindfulness-Based Eating Awareness Training (MB-EAT) program, developed by Jean Kristeller, has been studied in multiple clinical trials. In a randomized controlled trial of 150 individuals with binge eating disorder, MB-EAT participants showed significant reductions in binge eating episodes (from an average of 4 per week to less than 1.5), reduced emotional eating scores, and improved sense of control around food. A structured literature review by Warren et al. (2017) examining 68 studies found that mindfulness-based interventions consistently reduced binge eating, emotional eating, and external eating (eating in response to food cues rather than hunger).
      </EvidenceBlock>

      <h2>Eating Speed: Slower Eating Reduces Intake — తిన్న వేగం: నెమ్ము తినటం సేవ తగ్గిస్తుంది</h2>

      <EvidenceBlock
        level="strong"
        source="Robinson et al. (2014) — Systematic review and meta-analysis"
      >
        A meta-analysis of 22 studies examining eating rate and energy intake found that slower eating was associated with significantly lower energy intake. On average, participants who ate slowly consumed 10-15% fewer calories per meal compared to those eating at a normal or fast pace. Slow eating also increased ratings of fullness and decreased ratings of hunger after the meal. The effect was consistent across different food types and study designs, suggesting that eating speed is a robust and modifiable determinant of energy intake.
      </EvidenceBlock>

      <h3>The 20-Minute Satiety Signal — 20-నిమిషాల రిపోజిటరీ సంకేతం</h3>

      <p>
        The gut-brain satiety signaling system operates on a significant time delay. After food enters the stomach and duodenum, hormones including cholecystokinin (CCK), peptide YY (PYY), and GLP-1 are released. These hormones signal the brain to reduce appetite and initiate the sensation of fullness. However, this process takes approximately 15-20 minutes from the start of eating. When meals are consumed in less than 10 minutes — as is common with fast eating — the brain receives the "full" signal well after the person has already overeaten.
      </p>

      <p>
        gut-brain గ్రహణ సంకేత వ్యవస్థ గణనీయ సమయ ఆలస్యపై పనిచేస్తుంది. ఆహారం కడుపు మరియు duodenum లోకి ప్రవేశించిన తరువాత, hormones చేస్తున్నాయి including చేస్తున్నాయి (CCK), పేప్టిడ్ YY (PYY), మరియు GLP-1. ఈ hormones appetite తగ్గించటానికి మరియు గ్రహణ జ్ఞానం సంచయించటానికి మెదడుకు సంకేతం. అయితే, ఈ ప్రక్రియ 15-20 నిమిషాలుకుండా తీసుకుంటుంది తిన్న ప్రారంభం నుండి. భోజనాలు 10 నిమిషాల్లో తీసుకుంటే — వేగంగా తినటం కూడా సాధారణ — మెదడు "పూర్తిగా" సంకేతం చెందుకుంటుంది, తరువాత ఆ నిమిషం ఇప్పటికే ఓవర్‌తిన్నది.
      </p>

      <h2>Distracted Eating: The Screen Effect — విచలిత తినటం: Screen ప్రభావం</h2>

      <EvidenceBlock
        level="strong"
        source="Oldham-Cooper et al. (2011); Ogden et al. (2013)"
      >
        Eating while distracted — watching television, scrolling a phone, working at a computer, or playing games — consistently increases caloric intake by 25-50% compared to eating without distraction. Oldham-Cooper et al. found that participants who played a computer game during lunch reported feeling less full afterward and consumed 69% more biscuits at a later snack test. The mechanism involves impaired encoding of the meal into memory: when the brain does not fully register that eating occurred, it fails to properly calibrate subsequent hunger and fullness signals.
      </EvidenceBlock>

      <h3>Screen-Free Eating Strategies — Screen-Free తిన్న వ్యూహాలు</h3>

      <ExampleBlock title="Screen-Free Eating Strategies — Screen-Free తిన్న వ్యూహాలు">
        <ul>
          <li>
            <strong>The "TV off during meals" rule:</strong> Start with one meal per day — typically dinner — where the TV is off and phones are away. This is the single most impactful change for most Indian families.
          </li>
          <li>
            <strong>Phone basket at the table:</strong> Place a basket or bowl at the dining table where everyone places their phone face-down during the meal. Make it a family norm, not a rule imposed on one person.
          </li>
          <li>
            <strong>Replace TV with conversation:</strong> The traditional Indian meal was a time for family conversation. Restoring this not only improves eating habits but strengthens family bonds.
          </li>
        </ul>
      </ExampleBlock>

      <h2>Practical Mindful Eating Techniques — Practical అవగాహన తిన్న పద్ధతులు</h2>

      <h3>The Five-Senses Exercise — ఐదు-ఇందియాలు వ్యాయామం</h3>

      <ExampleBlock title="Five-Senses Check-In (30 Seconds) — ఐదు-ఇందియాలు చెక్-ఇన (30 సెకన్ల)</
>
        <ol>
          <li><strong>See:</strong> Look at your plate. Notice the colors, arrangement, and variety. A well-prepared Indian thali is visually rich — appreciate it.</li>
          <li><strong>Smell:</strong> Lean toward the food and inhale. Identify the spices — cumin in the tadka, turmeric in the dal, coriander in the garnish.</li>
          <li><strong>Touch:</strong> If eating with your hands (as is traditional in South India), notice the temperature and texture of the food as you mix it.</li>
          <li><strong>Hear:</strong> Notice the sounds — the sizzle of a hot sambar, the crunch of papad, the silence as you chew.</li>
          <li><strong>Taste:</strong> With the first bite, focus entirely on flavor. Notice how the taste evolves — the initial hit of spice, the sweetness of cooked onion, the sourness of tamarind.</li>
        </ol>
      </ExampleBlock>

      <h3>The Hunger Scale — గ్రహణ స్కేల్</h3>

      <ExampleBlock title="The 1-10 Hunger-Fullness Scale — 1-10 Hunger-గ్రహణ స్కేల్">
        <ul>
          <li><strong>1 — Starving:</strong> Lightheaded, irritable, low energy. You waited too long.</li>
          <li><strong>3 — Hungry:</strong> Clear stomach emptiness, ready to eat.</li>
          <li><strong>5 — Neutral:</strong> Neither hungry nor full.</li>
          <li><strong>7 — Full:</strong> Slightly stretched stomach. Should stop here.</li>
          <li><strong>10 — Sick:</strong> Nauseous from overeating.</li>
        </ul>
        <p>
          <strong>The goal:</strong> Start eating at 3-4 (genuinely hungry but not starving) and stop at 6-7 (satisfied but not stuffed).
        </p>
      </ExampleBlock>

      <ReferenceList references={references} />
    </div>
  );
}
