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

export default function SustainableWeightLossTe() {
  return (
    <div className="prose-health">
      <h1>Sustainable Weight Loss: Rate, Plateaus, and Long-Term Success — సస్టైనబుల్ బరువు నష్టం: రేటు, పీఠభూమిలు, మరియు దీర్ఘకాలిక విజయం</h1>

      <p>
        The weight loss industry fixates on dramatic short-term results — "lose 10 kg in 30 days" — while ignoring the reality that 80-95% of dieters regain lost weight within 1-5 years. Sustainable weight loss is not about speed; it is about creating conditions that allow fat loss to continue while preserving muscle, maintaining metabolic health, and building habits that last beyond the "diet phase." This section covers the optimal rate of loss, strategic diet breaks, navigating plateaus, and what separates long-term successes from regain statistics.
      </p>

      <p>
        బరువు నష్టం పరిశ్రమ నాటకీయ స్వల్పకాలిక ఫలితాలపై దృష్టి సారిస్తుంది — "30 రోజుల్లో 10 kg నష్టం" — 80-95% dieters 1-5 సంవత్సరాల్లో నష్టపోయిన బరువులను తిరిగి పొందుతారనే వాస్తవాన్ని విస్మరిస్తూ. సస్టైనబుల్ బరువు నష్టం వేగం గురించి కాదు; కండరాలను సంరక్షిస్తూ, metabolic ఆరోగ్యం నిర్వహిస్తూ, మరియు "diet phase" వెనుక కొనసాగే అలవాట్లను నిర్మిస్తూ fat loss కొనసాగడానికి అనుమతించే పరిస్థితులను సృష్టించడం. ఈ విభాగం నష్టం యొక్క సరైన రేటు, వ్యూహాత్మక diet breaks, plateaus నావిగేట్ చేయడం, మరియు దీర్ఘకాలిక విజయాలను regain గణాంకాల నుండి ఏ విభజనలు చేస్తుందో కవర్ చేస్తుంది.
      </p>

      <h2>Optimal Rate of Weight Loss: 0.5-1% Body Weight Per Week — బరువు నష్టం యొక్క సరైన రేటు: సप్తాహానికి 0.5-1% శరీర బరువు</h2>

      <DefinitionBlock term="Rate of Weight Loss — బరువు నష్టం యొక్క రేటు">
        The speed at which body weight decreases, best expressed as a percentage of current body weight per week rather than an absolute number. A rate of 0.5-1% of body weight per week is considered optimal for most individuals, as it maximizes fat loss while minimizing lean tissue loss, hormonal disruption, and psychological distress.
        <br/><br/>
        శరీర బరువు తగ్గిన వేగం, సంపూర్ణ సంఖ్య కంటే సాప్తాహిక current body weight శాతం వలె బాగా వ్యక్తీకరించబడుతుంది. శరీర బరువు యొక్క 0.5-1% సప్తాహానికి రేటు చాలా మంది వ్యక్తులకు సరైనదిగా간주చేయబడుతుంది, ఎందుకంటే ఇది lean tissue నష్టం, hormonal విఘ్నం, మరియు మానసిక బాధను తగ్గించటాయితే fat loss గరిష్టీకరిస్తుంది.
      </DefinitionBlock>

      <EvidenceBlock
        level="strong"
        source="Garthe et al. (2011) — Elite athlete study"
      >
        In a landmark study of 24 elite athletes, Garthe and colleagues compared a slow rate of weight loss (0.7% of body weight per week, ~500 kcal deficit) to a fast rate (1.4% per week, ~1,000 kcal deficit) over 8-12 weeks. Both groups consumed 1.6 g/kg protein and performed resistance training. The slow group lost significantly more fat mass (5.6 vs 4.0 kg) and gained 2.1% lean body mass, while the fast group lost 0.2% lean mass. Strength gains were also superior in the slow group. This study provides compelling evidence that a slower, more moderate rate of loss produces qualitatively better weight loss — more fat, less muscle.
      </EvidenceBlock>

      <h2>Weight Loss Plateaus — బరువు నష్టం పీఠభూమిలు</h2>

      <DefinitionBlock term="Weight Loss Plateau — బరువు నష్టం పీఠభూమి">
        A period of 2-4 weeks or longer during which body weight remains stable despite continued adherence to a caloric deficit. True plateaus indicate that energy expenditure has decreased to match current intake, requiring an adjustment. Many apparent plateaus are not true plateaus but rather water retention masking ongoing fat loss.
        <br/><br/>
        caloric deficit కు నిరంతర adherence ఉన్నప్పటికీ శరీర బరువు స్థిరంగా ఉండే 2-4 సप్తాహాలు లేదా అంతకంటే ఎక్కువ కాలం. నిజమైన plateaus energy expenditure current intake కు సరిపోయడానికి తగ్గిందని సూచిస్తుంది, సర్దుబాటు కు అవసరం. చాలా కనిపించే plateaus నిజమైన plateaus కాదు కానీ water retention ప్రస్తుత fat loss ను రద్దు చేస్తుంది.
      </DefinitionBlock>

      <h3>True Plateaus: What to Do — నిజమైన Plateaus: చేయవలసిన కర్మ</h3>

      <ExampleBlock title="Plateau-Breaking Strategies (In Order of Priority) — Plateau-Breaking వ్యూహాలు (ప్రాధాన్యత క్రమానికి)">
        <ol>
          <li>
            <strong>Audit adherence first:</strong> The most common cause of stalled progress is unconscious calorie creep — larger portions, forgotten snacks, cooking oil not measured. Track meticulously for one week before making any changes.
          </li>
          <li>
            <strong>Increase NEAT:</strong> Add 2,000-3,000 daily steps. This can increase expenditure by 100-200 kcal/day without formal exercise.
          </li>
          <li>
            <strong>Take a 1-2 week diet break:</strong> Eating at maintenance can help reverse metabolic adaptation before resuming the deficit.
          </li>
          <li>
            <strong>Small calorie reduction:</strong> Reduce intake by an additional 100-200 kcal (not more), as the deficit has narrowed due to reduced body mass and metabolic adaptation.
          </li>
        </ol>
      </ExampleBlock>

      <h2>Long-Term Success: Lessons from the National Weight Control Registry — దీర్ఘకాలిక విజయం: నేషనల్ బరువు నియంత్రణ నిబంధన నుండి పాఠాలు</h2>

      <EvidenceBlock
        level="strong"
        source="Wing & Phelan (2005); Thomas et al. (2014) — NWCR data"
      >
        The National Weight Control Registry (NWCR) has tracked over 10,000 individuals who have lost at least 13.6 kg (30 pounds) and maintained the loss for at least 1 year. The average participant has lost 33 kg and maintained the loss for 5.5 years. Analysis of successful maintainers reveals consistent behavioral patterns that distinguish them from those who regain weight. These patterns are not extreme — they are consistent, moderate habits sustained over years.
      </EvidenceBlock>

      <h3>What Successful Maintainers Do — విజయవంతమైన నిర్వాహకులు చేసే కర్మ</h3>

      <ExampleBlock title="NWCR Common Behaviors of Successful Maintainers — విజయవంతమైన నిర్వాహకుల సాధారణ ప్రవర్తనలు">
        <ul>
          <li><strong>90% exercise approximately 1 hour per day</strong> — high levels of physical activity are the strongest predictor of weight maintenance</li>
          <li><strong>75% weigh themselves at least once per week</strong> — self-monitoring enables early detection of regain before it becomes significant</li>
          <li><strong>78% eat breakfast daily</strong> — though this may be a marker of routine rather than a causal factor</li>
          <li><strong>Consistent eating patterns:</strong> Successful maintainers eat similarly on weekdays and weekends, and during holidays and non-holidays</li>
          <li><strong>Act quickly on small regains:</strong> Rather than allowing 1-2 kg of regain to snowball, successful maintainers immediately adjust behavior when the scale rises</li>
        </ul>
      </ExampleBlock>

      <NoteBlock title="Key Principles for Lasting Results — స్థిరమైన ఫలితాల కోసం కీ సూత్రాలు">
        <ol>
          <li><strong>Lose 0.5-1% of body weight per week</strong> — slower rates preserve muscle and maintain metabolic health</li>
          <li><strong>Implement diet breaks</strong> every 4-8 weeks — 1-2 weeks at maintenance calories to attenuate metabolic adaptation</li>
          <li><strong>Expect and prepare for plateaus</strong> — audit adherence first, then adjust modestly</li>
          <li><strong>Plan the transition to maintenance</strong> — reverse diet gradually and establish monitoring habits</li>
          <li><strong>Adopt NWCR behaviors:</strong> regular self-monitoring, high physical activity, consistent eating patterns, and rapid response to small regains</li>
        </ol>
      </NoteBlock>

      <ReferenceList references={references} />
    </div>
  );
}
