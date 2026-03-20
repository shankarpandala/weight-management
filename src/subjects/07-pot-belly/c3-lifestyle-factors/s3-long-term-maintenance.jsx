import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock';
import EvidenceBlock from '../../../components/content/EvidenceBlock';
import ExampleBlock from '../../../components/content/ExampleBlock';
import NoteBlock from '../../../components/content/NoteBlock';
import WarningBlock from '../../../components/content/WarningBlock';
import ReferenceList from '../../../components/content/ReferenceList';

const references = [
  {
    id: 1,
    authors: "Thomas JG, Bond DS, Phelan S, Hill JO, Wing RR",
    year: 2014,
    title: "Weight-loss maintenance for 10 years in the National Weight Control Registry",
    journal: "American Journal of Preventive Medicine",
    volume: "46(1)",
    pages: "17-23",
    doi: "10.1016/j.amepre.2013.08.019"
  },
  {
    id: 2,
    authors: "Lally P, van Jaarsveld CHM, Potts HWW, Wardle J",
    year: 2010,
    title: "How are habits formed: Modelling habit formation in the real world",
    journal: "European Journal of Social Psychology",
    volume: "40(6)",
    pages: "998-1009",
    doi: "10.1002/ejsp.674"
  },
  {
    id: 3,
    authors: "Burke LE, Wang J, Sevick MA",
    year: 2011,
    title: "Self-monitoring in weight loss: a systematic review of the literature",
    journal: "Journal of the American Dietetic Association",
    volume: "111(1)",
    pages: "92-102",
    doi: "10.1016/j.jada.2010.10.008"
  },
  {
    id: 4,
    authors: "Ramachandran A, Snehalatha C, Mary S, Mukesh B, Bhaskar AD, Vijay V",
    year: 2006,
    title: "The Indian Diabetes Prevention Programme shows that lifestyle modification and metformin prevent type 2 diabetes in Asian Indian subjects with impaired glucose tolerance",
    journal: "Diabetologia",
    volume: "49(2)",
    pages: "289-297",
    doi: "10.1007/s00125-005-0097-z"
  },
  {
    id: 5,
    authors: "Poulimeneas D, Yannakoulia M, Kavouras SA, et al.",
    year: 2019,
    title: "Behavioral and psychological factors associated with long-term weight loss maintenance: a systematic review",
    journal: "Psychology Research and Behavior Management",
    volume: "12",
    pages: "1089-1103",
    doi: "10.2147/PRBM.S225425"
  },
  {
    id: 6,
    authors: "Misra A, Vikram NK, Gupta R, Pandey RM, Wasir JS, Gupta VP",
    year: 2006,
    title: "Waist circumference cutoff points and action levels for Asian Indians for identification of abdominal obesity",
    journal: "International Journal of Obesity",
    volume: "30(1)",
    pages: "106-111",
    doi: "10.1038/sj.ijo.0803111"
  }
];

export default function LongTermMaintenance() {
  return (
    <div className="prose-health">
      <h1>Long-Term Belly Fat Maintenance</h1>
      <p>
        Losing abdominal fat is only half the battle. Research consistently shows that
        most individuals regain a significant portion of lost weight within two to five
        years. Understanding the science of long-term maintenance, particularly for
        visceral fat reduction, is essential for lasting health outcomes.
      </p>

      <DefinitionBlock
        term="Weight Maintenance"
        definition="The sustained prevention of weight regain following intentional weight loss, typically defined as maintaining at least 10% of initial body weight loss for one year or longer. For abdominal obesity, this includes maintaining waist circumference below recommended cutoffs — less than 90 cm for Indian men and less than 80 cm for Indian women."
      />

      <h2>Lessons from the National Weight Control Registry</h2>
      <p>
        The National Weight Control Registry (NWCR), tracking over 10,000 individuals
        who have maintained significant weight loss, reveals consistent behavioral
        patterns among successful maintainers.
      </p>

      <EvidenceBlock
        level="strong"
        source="Thomas et al., 2014"
        finding="NWCR participants who maintained weight loss for 10+ years reported continued high levels of physical activity (averaging 60 minutes per day), regular self-weighing, and consistent eating patterns including breakfast consumption. Importantly, the effort required to maintain these behaviors decreased over time."
      />

      <ExampleBlock title="Key NWCR Findings Applied to Indian Context">
        <ul>
          <li><strong>Breakfast consistency:</strong> Eating a regular, balanced breakfast — such as poha with vegetables, idli with sambar, or upma — rather than skipping it or having heavy parathas with butter daily.</li>
          <li><strong>Physical activity:</strong> 60 minutes of moderate activity, including brisk walking after dinner (a common Indian practice), yoga, or cycling.</li>
          <li><strong>Self-weighing:</strong> Weighing weekly and tracking waist circumference monthly with a simple measuring tape.</li>
          <li><strong>Dietary consistency:</strong> Maintaining similar eating patterns on weekdays and weekends, avoiding drastic indulgence during festivals as a regular habit.</li>
        </ul>
      </ExampleBlock>

      <h2>The Science of Habit Formation</h2>
      <p>
        Sustainable maintenance depends on transforming conscious choices into automatic
        habits. Research demonstrates that habit formation follows predictable patterns
        that can be leveraged for long-term success.
      </p>

      <EvidenceBlock
        level="moderate"
        source="Lally et al., 2010"
        finding="On average, it takes 66 days for a new behavior to become automatic, though the range varies from 18 to 254 days depending on the complexity of the behavior. Simpler actions like drinking water before meals become habitual faster than complex ones like a full exercise routine."
      />

      <NoteBlock title="Building Habits for Indian Lifestyles">
        <p>
          Start with small, culturally compatible changes. Replace one cup of chai with
          green tea each day. Add a 15-minute post-dinner walk before building to longer
          walks. Use smaller katoris for rice and dal servings. These small shifts become
          automatic over two to three months and compound into significant waist
          circumference reductions over time.
        </p>
      </NoteBlock>

      <h2>Self-Monitoring: The Cornerstone of Maintenance</h2>
      <p>
        Consistent self-monitoring remains the single most reliable predictor of
        long-term weight and waist circumference maintenance.
      </p>

      <EvidenceBlock
        level="strong"
        source="Burke et al., 2011"
        finding="A systematic review of 22 studies found that self-monitoring of diet and physical activity was consistently associated with weight loss maintenance. Those who tracked food intake and body measurements were two to three times more likely to maintain their weight loss compared to non-trackers."
      />

      <ExampleBlock title="Practical Self-Monitoring Strategies">
        <ul>
          <li><strong>Weekly waist measurement:</strong> Measure at the navel level each Sunday morning before breakfast. Record in a simple diary or phone app.</li>
          <li><strong>Food journaling:</strong> Note major meals and oil/ghee usage. Indian cooking often adds hidden calories through tempering (tadka) and generous oil use.</li>
          <li><strong>Step counting:</strong> Aim for 8,000-10,000 steps daily. Many Indians walk less due to sedentary office jobs and car-dependent commuting.</li>
          <li><strong>Monthly progress photos:</strong> Visual records can motivate when the scale plateaus but body composition improves.</li>
        </ul>
      </ExampleBlock>

      <h2>Sustainable Strategies for Indian Lifestyles</h2>

      <EvidenceBlock
        level="strong"
        source="Ramachandran et al., 2006"
        finding="The Indian Diabetes Prevention Programme demonstrated that lifestyle modification including dietary changes and increased physical activity reduced diabetes incidence by 28.5% in Asian Indians with impaired glucose tolerance, with sustained benefits observed over the follow-up period."
      />

      <ExampleBlock title="Sustainable Indian Dietary Modifications">
        <ul>
          <li><strong>Roti over rice at dinner:</strong> One or two multigrain rotis with sabzi provide more fiber and fewer calories than two to three servings of rice.</li>
          <li><strong>Dal as protein anchor:</strong> Include dal or legume preparation at every major meal to ensure satiety and reduce refined carbohydrate consumption.</li>
          <li><strong>Seasonal vegetable variety:</strong> Rotate through lauki, turai, bhindi, palak, and other local vegetables to maintain nutritional diversity.</li>
          <li><strong>Festival strategy:</strong> Enjoy one to two special items during festivals rather than unrestricted eating for days. Share mithai rather than storing at home.</li>
          <li><strong>Oil management:</strong> Limit cooking oil to two tablespoons per meal for the entire household preparation. Measure rather than pour freely.</li>
        </ul>
      </ExampleBlock>

      <WarningBlock title="Beware of the 'All or Nothing' Trap">
        <p>
          Many people abandon maintenance efforts after a single indulgence — a wedding
          feast or a Diwali binge. Research shows that successful maintainers view lapses
          as temporary, not as failure. One heavy meal does not undo months of progress.
          The critical factor is returning to regular habits the next day rather than
          extending the lapse into a relapse.
        </p>
      </WarningBlock>

      <h2>Maintaining Waist Circumference: Indian-Specific Targets</h2>

      <EvidenceBlock
        level="strong"
        source="Misra et al., 2006"
        finding="Asian Indians develop metabolic complications at lower waist circumferences than Western populations. Recommended cutoffs for abdominal obesity are 90 cm for men and 80 cm for women, significantly lower than the Western thresholds of 102 cm and 88 cm respectively."
      />

      <NoteBlock title="Long-Term Monitoring Framework">
        <p>
          Set clear maintenance targets: keep waist circumference below 90 cm (men)
          or 80 cm (women). If measurements creep up by more than 2 cm, take immediate
          corrective action by tightening portion sizes and increasing activity before
          further regain accumulates. Prevention of regain is far easier than losing
          weight again.
        </p>
      </NoteBlock>

      <h2>Psychological Factors in Maintenance</h2>
      <p>
        Long-term maintenance is as much a psychological challenge as a physical one.
        Understanding the behavioral patterns that support sustained change is essential.
      </p>

      <EvidenceBlock
        level="moderate"
        source="Poulimeneas et al., 2019"
        finding="A systematic review identified internal motivation, self-efficacy, positive body image, and flexible (rather than rigid) dietary restraint as key psychological factors associated with successful long-term weight maintenance."
      />

      <ExampleBlock title="Building a Maintenance Mindset">
        <ul>
          <li><strong>Focus on health markers:</strong> Track energy levels, sleep quality, and blood sugar rather than obsessing over weight alone.</li>
          <li><strong>Flexible restraint:</strong> Follow an 80/20 approach — eat well 80% of the time and allow reasonable indulgences 20% of the time.</li>
          <li><strong>Social support:</strong> Walk with a neighbor, join a local yoga group, or involve family members in cooking healthier meals together.</li>
          <li><strong>Identity shift:</strong> Move from "I am dieting" to "I am someone who eats well and stays active." This shift in self-concept is the strongest predictor of sustained behavior change.</li>
        </ul>
      </ExampleBlock>

      <ReferenceList references={references} />
    </div>
  );
}
