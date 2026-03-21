import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

const references = [
  { authors: 'Epel ES, McEwen B, Seeman T, et al.', year: 2000, title: 'Stress and body shape: stress-induced cortisol secretion is consistently greater among women with central fat', source: 'Psychosomatic Medicine, 62(5), 623-632', type: 'foundational' },
  { authors: 'Bjorntorp P', year: 2001, title: 'Do stress reactions cause abdominal obesity and comorbidities?', source: 'Obesity Reviews, 2(2), 73-86', type: 'review' },
  { authors: 'Rosmond R', year: 2005, title: 'Role of stress in the pathogenesis of the metabolic syndrome', source: 'Psychoneuroendocrinology, 30(1), 1-10', type: 'review' },
  { authors: 'Tomiyama AJ, Mann T, Vinas D, Hunger JM, DeJager J, Taylor SE', year: 2010, title: 'Low calorie dieting increases cortisol', source: 'Psychosomatic Medicine, 72(4), 357-364', type: 'clinical' },
  { authors: 'Chandola T, Brunner E, Marmot M', year: 2006, title: 'Chronic stress at work and the metabolic syndrome', source: 'BMJ, 332(7540), 521-525', type: 'clinical' },
];

export default function CortisolStressFat() {
  return (
    <div className="prose-health">
      <h1>Cortisol, Stress & Fat Storage</h1>

      <p>
        Stress doesn&apos;t just feel bad — it directly reshapes your body. Cortisol, the
        primary stress hormone, drives fat accumulation specifically around the abdomen, breaks
        down muscle tissue, increases appetite for high-calorie comfort foods, and disrupts sleep.
        In modern India&apos;s high-pressure urban environment, chronic stress is a major
        underrecognized driver of the obesity epidemic.
      </p>

      <DefinitionBlock
        title="Cortisol"
        definition="A glucocorticoid steroid hormone produced by the adrenal cortex in response to ACTH from the pituitary. Cortisol mobilizes energy during stress by increasing blood glucose (gluconeogenesis), promoting fat and protein catabolism, and suppressing non-essential functions (immune, digestive, reproductive)."
        notation="Normal cortisol follows a diurnal rhythm: peaks at 6-8 AM (waking), lowest at midnight. Chronic stress flattens this rhythm, maintaining elevated levels throughout the day."
      />

      <h2>The Acute Stress Response</h2>
      <p>
        Short-term stress is adaptive. When you face a threat, cortisol and adrenaline mobilize
        energy — glucose from glycogen, fatty acids from adipose tissue — preparing you to fight
        or flee. Appetite is suppressed during acute stress. Once the threat passes, cortisol
        drops and systems return to baseline.
      </p>

      <h2>Chronic Stress: When Cortisol Stays High</h2>
      <p>
        Modern stressors — work deadlines, financial pressure, traffic commutes, family conflicts,
        social media — activate the same cortisol response but without physical resolution. The
        result is chronically elevated cortisol, which has profoundly different metabolic effects:
      </p>

      <h3>Visceral Fat Accumulation</h3>
      <p>
        Cortisol preferentially deposits fat in visceral (abdominal) adipose tissue. Visceral fat
        cells have 4x more cortisol receptors than subcutaneous fat cells. Cortisol also activates
        lipoprotein lipase in visceral fat, enhancing triglyceride uptake and storage. This is why
        chronic stress creates the characteristic &quot;pot belly&quot; pattern even in otherwise
        thin individuals.
      </p>

      <h3>Increased Appetite and Cravings</h3>
      <p>
        Chronic cortisol stimulates appetite via neuropeptide Y and reduces sensitivity to leptin
        (the satiety hormone). It specifically increases cravings for energy-dense &quot;comfort
        foods&quot; — sweets, fried snacks, and carb-heavy foods. This is biochemistry, not
        weakness — cortisol literally rewires reward circuitry to favor calorie-dense foods.
      </p>

      <h3>Muscle Breakdown</h3>
      <p>
        Cortisol is catabolic to muscle — it promotes proteolysis to provide amino acids for
        gluconeogenesis. Chronically elevated cortisol can reduce lean mass by 5-10% over time,
        lowering BMR and making weight management progressively harder.
      </p>

      <EvidenceBlock
        title="Stress and Central Fat Distribution"
        finding="Women with greater cortisol reactivity to stress had significantly more visceral fat than women with lower cortisol reactivity, independent of overall body weight. High cortisol responders also reported more chronic life stress and negative mood."
        study="59 premenopausal women exposed to laboratory stress challenges"
        source="Epel et al. (2000) Psychosomatic Medicine"
        details="This landmark study demonstrated a direct link between stress-induced cortisol secretion and abdominal fat distribution. Even among lean women, those with higher cortisol responses had more visceral fat. The finding suggests that stress management may be as important as diet and exercise for reducing abdominal obesity."
      />

      <EvidenceBlock
        title="Work Stress and Metabolic Syndrome"
        finding="Chronic work stress was associated with a 2-fold higher risk of metabolic syndrome, with dose-response relationships — more stress exposure predicted greater metabolic risk. The association was independent of lifestyle factors."
        study="Whitehall II prospective cohort study of 10,308 London civil servants"
        source="Chandola et al. (2006) BMJ"
        details="Over 14 years of follow-up, workers experiencing chronic stress had more visceral fat, higher triglycerides, lower HDL cholesterol, and higher blood pressure. The relationship held after adjusting for diet, exercise, smoking, and alcohol — suggesting that stress has direct metabolic effects beyond its influence on behavior."
      />

      <h2>The Stress-Cortisol-Weight Gain Cycle</h2>
      <p>
        Chronic stress creates a vicious cycle: stress raises cortisol → cortisol drives visceral
        fat storage and comfort eating → weight gain causes more stress (body dissatisfaction,
        health anxiety) → more cortisol. Additionally, visceral fat itself produces inflammatory
        cytokines that further stimulate the HPA axis, perpetuating cortisol elevation.
      </p>

      <ExampleBlock
        title="The Indian Urban Professional Stress Pattern"
        problem="A common scenario: long commute (1-2 hours in traffic), high-pressure IT/corporate job, irregular meals (skipping lunch or eating late), evening stress eating (namkeen, biscuits, chai with sugar), late dinner (9-10 PM), poor sleep (phone scrolling until midnight), early alarm (6 AM). This pattern maximizes cortisol through sleep deprivation, meal irregularity, psychological stress, and sedentary behavior — creating ideal conditions for visceral fat accumulation despite no obvious overeating."
      />

      <WarningBlock
        title="Dieting Itself Raises Cortisol">
        Caloric restriction increases cortisol levels by 18-38%, according to research by Tomiyama et al. (2010). This creates a paradox: the stress of strict dieting may promote the very visceral fat accumulation you are trying to reduce. This is another reason why moderate, sustainable deficits work better than extreme diets — they produce less cortisol elevation.
      </WarningBlock>

      <h2>Managing Cortisol for Weight Management</h2>

      <ExampleBlock
        title="Evidence-Based Stress Reduction Strategies"
        problem="(1) Sleep 7-9 hours — sleep deprivation increases cortisol by 37-45%. (2) Exercise moderately — 30-45 minutes of walking, yoga, or swimming reduces cortisol; avoid chronic overtraining which raises it. (3) Practice mindfulness or pranayama — even 10 minutes daily reduces cortisol by 20-25% in studies. (4) Eat regular meals — meal skipping and erratic eating patterns elevate cortisol. (5) Limit caffeine after 2 PM — coffee raises cortisol for 2-3 hours. (6) Social connection — positive social interaction reduces cortisol. (7) Nature exposure — even 20 minutes in a park lowers cortisol significantly."
      />

      <NoteBlock
        title="Yoga and Cortisol: Indian Tradition Meets Science">
        Multiple studies show that regular yoga practice reduces baseline cortisol levels by 15-30%. A 2017 meta-analysis found that yoga was as effective as cognitive behavioral therapy for reducing cortisol in stressed populations. Traditional pranayama (breathing exercises), particularly alternate nostril breathing (Nadi Shodhana), activates the parasympathetic nervous system and directly reduces cortisol. This ancient Indian practice has strong scientific validation for stress and weight management.
      </NoteBlock>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Cortisol is the primary stress hormone; chronic elevation drives visceral fat storage, muscle loss, and increased appetite.</li>
        <li>Visceral fat cells have 4x more cortisol receptors, explaining why stress fat accumulates in the belly.</li>
        <li>Chronic work stress doubles metabolic syndrome risk independent of diet and exercise.</li>
        <li>Crash dieting raises cortisol by 18-38%, potentially worsening abdominal fat.</li>
        <li>Sleep, moderate exercise, yoga/pranayama, and regular meals are the most effective cortisol management strategies.</li>
        <li>Stress management is not a luxury — it is a core component of effective weight management.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
