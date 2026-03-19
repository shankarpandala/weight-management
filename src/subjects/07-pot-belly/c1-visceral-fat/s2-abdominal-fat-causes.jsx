import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';
import ComparisonTable from '../../../components/content/ComparisonTable.jsx';

const references = [
  {
    authors: 'Björntorp P',
    year: 2001,
    title: 'Do stress reactions cause abdominal obesity and comorbidities?',
    source: 'Obesity Reviews, 2(2), 73-86',
    type: 'review',
  },
  {
    authors: 'Stanhope KL, Schwarz JM, Keim NL, Griffen SC, Bremer AA, Graham JL, et al.',
    year: 2009,
    title: 'Consuming fructose-sweetened, not glucose-sweetened, beverages increases visceral adiposity and lipids and decreases insulin sensitivity in overweight/obese humans',
    source: 'Journal of Clinical Investigation, 119(5), 1322-1334',
    type: 'foundational',
  },
  {
    authors: 'Yusuf S, Hawken S, Ounpuu S, Bautista L, Franzosi MG, Commerford P, et al.',
    year: 2005,
    title: 'Obesity and the risk of myocardial infarction in 27,000 participants from 52 countries: a case-control study',
    source: 'The Lancet, 366(9497), 1640-1649',
    type: 'foundational',
  },
  {
    authors: 'Tchernof A, Després JP',
    year: 2013,
    title: 'Pathophysiology of human visceral obesity: an update',
    source: 'Physiological Reviews, 93(1), 359-404',
    type: 'review',
  },
  {
    authors: 'Misra A, Khurana L',
    year: 2011,
    title: 'Obesity-related non-communicable diseases: South Asians vs White Caucasians',
    source: 'International Journal of Obesity, 35(2), 167-187',
    type: 'review',
  },
  {
    authors: 'Lovejoy JC, Champagne CM, de Jonge L, Xie H, Smith SR',
    year: 2008,
    title: 'Increased visceral fat and decreased energy expenditure during the menopausal transition',
    source: 'International Journal of Obesity, 32(6), 949-958',
    type: 'foundational',
  },
  {
    authors: 'Epel ES, McEwen B, Seeman T, Matthews K, Castellazzo G, Brownell KD, et al.',
    year: 2000,
    title: 'Stress and body shape: stress-induced cortisol secretion is consistently greater among women with central fat',
    source: 'Psychosomatic Medicine, 62(5), 623-632',
    type: 'foundational',
  },
];

export default function AbdominalFatCauses() {
  return (
    <div className="prose-health">
      <h1>Why Does Fat Accumulate in the Belly? Causes of Abdominal Obesity</h1>

      <p>
        Abdominal fat accumulation is not random. A complex interplay of genetics, hormones,
        diet, age, gender, lifestyle, and ethnicity determines where your body preferentially
        stores fat. Understanding these drivers is essential for targeting interventions
        effectively — because if you do not address the root cause, the belly fat will return
        even after successful weight loss.
      </p>

      <h2>1. Genetics: The Apple vs. Pear Body Shape</h2>

      <p>
        Body fat distribution is strongly heritable. Twin studies estimate that 50-70% of the
        variance in visceral fat accumulation is genetically determined. This manifests as two
        broad body shape patterns:
      </p>

      <ComparisonTable
        title="Apple Shape vs. Pear Shape Body Fat Distribution"
        headers={['Characteristic', 'Apple Shape (Android)', 'Pear Shape (Gynoid)']}
        rows={[
          ['Fat distribution', 'Central — abdomen, waist, upper body', 'Peripheral — hips, thighs, buttocks'],
          ['Fat type predominance', 'Higher visceral fat proportion', 'Higher subcutaneous fat proportion'],
          ['Gender tendency', 'More common in men', 'More common in pre-menopausal women'],
          ['Metabolic risk', 'Higher risk of CVD, diabetes, metabolic syndrome', 'Lower metabolic risk at equivalent body weight'],
          ['Hormonal driver', 'Cortisol, testosterone decline, insulin', 'Estrogen, progesterone'],
          ['South Asian prevalence', 'Very high — genetic predisposition', 'Less common in South Asian populations'],
        ]}
      />

      <p>
        Multiple genetic loci have been identified that influence fat distribution independently
        of total adiposity. Key genes include those involved in cortisol metabolism (HSD11B1),
        sex hormone signaling, and adipocyte differentiation. Genome-wide association studies
        have identified over 50 loci associated with waist-to-hip ratio adjusted for BMI.
      </p>

      <h2>2. Cortisol: The Stress-Belly Hormone</h2>

      <DefinitionBlock
        term="Cortisol"
        definition="A glucocorticoid hormone produced by the adrenal glands in response to stress (physical or psychological). Cortisol raises blood sugar, suppresses immune function, and — critically for belly fat — promotes visceral fat deposition by increasing the activity of lipoprotein lipase (LPL) in visceral adipocytes and stimulating appetite for calorie-dense foods."
      />

      <EvidenceBlock
        level="strong"
        title="Cortisol Drives Visceral Fat Accumulation"
        summary="Björntorp (2001) proposed the 'hypothalamic-pituitary-adrenal (HPA) axis hypothesis' of abdominal obesity: chronic psychosocial stress activates the HPA axis, leading to sustained cortisol elevation. Cortisol selectively promotes fat storage in visceral depots because visceral adipocytes have 4 times more glucocorticoid receptors than subcutaneous adipocytes. Additionally, the enzyme 11-beta-hydroxysteroid dehydrogenase type 1 (11β-HSD1), which converts inactive cortisone to active cortisol locally within fat tissue, is more active in visceral than subcutaneous adipose tissue."
        source="Björntorp P. Obesity Reviews. 2001;2(2):73-86."
      />

      <p>
        The cortisol-visceral fat relationship creates a vicious cycle: stress raises cortisol,
        cortisol increases visceral fat, visceral fat produces inflammatory cytokines that
        further dysregulate the HPA axis, leading to more cortisol production. Breaking this
        cycle requires addressing stress management alongside dietary and exercise interventions.
      </p>

      <EvidenceBlock
        level="moderate"
        title="Women with Central Fat Produce More Cortisol Under Stress"
        summary="Epel et al. (2000) studied 59 pre-menopausal women and found that those with greater central fat distribution (higher WHR) secreted significantly more cortisol in response to laboratory stressors compared to women with peripheral fat distribution, even after controlling for total body fat. This suggests that the cortisol-visceral fat relationship may be bidirectional."
        source="Epel ES et al. Psychosomatic Medicine. 2000;62(5):623-632."
      />

      <h2>3. Insulin Resistance: The Metabolic Driver</h2>

      <p>
        Insulin resistance and visceral fat have a bidirectional relationship — each worsens
        the other. When cells become resistant to insulin's signal, the pancreas produces more
        insulin (hyperinsulinemia). Elevated insulin levels promote fat storage, particularly
        in visceral depots. At the same time, visceral fat releases free fatty acids and
        inflammatory cytokines that worsen insulin resistance.
      </p>

      <ExampleBlock title="The Insulin-Visceral Fat Feedback Loop">
        <ol>
          <li>High-glycemic diet spikes blood sugar repeatedly.</li>
          <li>Pancreas releases large amounts of insulin to compensate.</li>
          <li>Chronically elevated insulin promotes fat storage, especially visceral fat.</li>
          <li>Visceral fat releases FFAs into the portal vein, reaching the liver directly.</li>
          <li>Liver becomes insulin resistant, increases glucose output.</li>
          <li>Blood sugar stays elevated, requiring even more insulin.</li>
          <li>The cycle escalates — more insulin, more visceral fat, more resistance.</li>
        </ol>
        <p>
          This is why controlling insulin levels through diet (reducing refined carbohydrates
          and sugar) is one of the most powerful strategies for visceral fat reduction.
        </p>
      </ExampleBlock>

      <h2>4. Age: The Inevitable Shift</h2>

      <p>
        Visceral fat increases steadily with age, even if total body weight remains stable.
        This redistribution occurs because of several age-related changes:
      </p>

      <ul>
        <li>
          <strong>Declining growth hormone:</strong> GH promotes lipolysis (fat breakdown) in
          visceral depots. GH secretion decreases by approximately 14% per decade after age 30.
        </li>
        <li>
          <strong>Declining sex hormones:</strong> Testosterone in men and estrogen in women
          both have protective effects against visceral fat accumulation. Their decline with
          age removes this protection.
        </li>
        <li>
          <strong>Reduced muscle mass (sarcopenia):</strong> Loss of metabolically active muscle
          tissue lowers resting metabolic rate, promoting fat gain. Lost muscle is often replaced
          by intramuscular and visceral fat.
        </li>
        <li>
          <strong>Mitochondrial dysfunction:</strong> Aging reduces the efficiency of
          mitochondrial fat oxidation, leading to greater fat storage.
        </li>
      </ul>

      <NoteBlock title="The 40+ Belly Fat Acceleration">
        <p>
          Cross-sectional and longitudinal studies consistently show that visceral fat
          accumulation accelerates after age 40 in both men and women. In men, this coincides
          with declining testosterone levels (approximately 1-2% per year after age 30). In
          women, the most dramatic increase occurs during the menopausal transition (ages 45-55),
          when estrogen levels drop sharply. A woman who maintained a stable weight through her
          30s and 40s may notice a shift of fat from hips and thighs to the abdomen during
          perimenopause, even without weight gain on the scale.
        </p>
      </NoteBlock>

      <h2>5. Gender Differences in Fat Distribution</h2>

      <p>
        Sex hormones are the primary determinant of the male-female difference in fat
        distribution:
      </p>

      <ul>
        <li>
          <strong>Pre-menopausal women:</strong> Estrogen directs fat storage to gluteal-femoral
          (hip and thigh) depots and actively inhibits visceral fat accumulation. This is why
          pre-menopausal women typically have a pear-shaped distribution.
        </li>
        <li>
          <strong>Post-menopausal women:</strong> As estrogen declines, fat distribution shifts
          dramatically toward visceral deposition. Post-menopausal women accumulate visceral fat
          at rates comparable to or exceeding men of the same age.
        </li>
        <li>
          <strong>Men:</strong> Testosterone, while promoting central fat distribution, also
          promotes lean mass and fat oxidation. As testosterone declines with age, the balance
          shifts toward net visceral fat accumulation. Men with low testosterone have
          significantly more visceral fat.
        </li>
      </ul>

      <EvidenceBlock
        level="moderate"
        title="Menopause Accelerates Visceral Fat Gain"
        summary="Lovejoy et al. (2008) measured body composition changes in 156 women as they transitioned through menopause. They found that the menopausal transition was associated with a preferential increase in abdominal visceral fat and a significant decrease in energy expenditure, independent of aging. Women gained an average of 2.6 kg of fat during the transition, with a disproportionate amount deposited viscerally."
        source="Lovejoy JC et al. International Journal of Obesity. 2008;32(6):949-958."
      />

      <h2>6. Sedentary Lifestyle and Physical Inactivity</h2>

      <p>
        Physical inactivity is one of the strongest modifiable risk factors for visceral fat
        accumulation. Sedentary behavior promotes visceral fat through multiple mechanisms:
      </p>

      <ul>
        <li>Reduced energy expenditure creates a caloric surplus that favors fat storage.</li>
        <li>Prolonged sitting impairs lipoprotein lipase activity and fat metabolism.</li>
        <li>Inactivity reduces insulin sensitivity, promoting visceral fat deposition.</li>
        <li>Lack of muscle contraction reduces catecholamine-driven lipolysis in visceral depots.</li>
      </ul>

      <p>
        Importantly, even among people who exercise regularly, prolonged sitting during the
        rest of the day independently increases visceral fat. This is the "active couch potato"
        phenomenon — meeting exercise guidelines does not fully offset 10+ hours of daily sitting.
      </p>

      <h2>7. Diet: Fructose and Refined Carbohydrates</h2>

      <EvidenceBlock
        level="strong"
        title="Fructose Specifically Promotes Visceral Fat"
        summary="Stanhope et al. (2009) conducted a 10-week controlled feeding study comparing fructose-sweetened vs. glucose-sweetened beverages (25% of calories) in overweight adults. Both groups gained similar total body weight, but the fructose group gained significantly more visceral fat (+14.4% increase in VAT) compared to the glucose group, which gained predominantly subcutaneous fat. The fructose group also developed greater insulin resistance, elevated postprandial triglycerides, and increased small dense LDL."
        source="Stanhope KL et al. Journal of Clinical Investigation. 2009;119(5):1322-1334."
      />

      <p>
        The mechanism behind fructose's selective promotion of visceral fat involves its unique
        hepatic metabolism. Unlike glucose, which is metabolized by all cells, fructose is
        metabolized almost exclusively by the liver. High fructose intake overwhelms hepatic
        capacity, leading to de novo lipogenesis (creation of new fat) and preferential
        packaging of these lipids into visceral fat depots.
      </p>

      <p>
        Common sources of high fructose in Indian diets include sugar-sweetened beverages
        (carbonated drinks, packaged fruit juices, sweetened lassi), table sugar (sucrose,
        which is 50% fructose), jaggery, and honey. While jaggery and honey contain minerals,
        their fructose content contributes similarly to visceral fat when consumed in excess.
      </p>

      <h2>8. The Indian Context: Genetic Predisposition to Central Obesity</h2>

      <EvidenceBlock
        level="strong"
        title="South Asians Have Greater Visceral Fat at Lower BMI"
        summary="The INTERHEART study (Yusuf et al., 2005) and subsequent analyses by Misra & Khurana (2011) demonstrated that South Asians have a uniquely unfavorable body composition profile: higher body fat percentage, greater visceral adiposity, less lean muscle mass, and more insulin resistance at any given BMI compared to Caucasians. An Indian man with a BMI of 23 may have the same visceral fat and metabolic risk as a European man with a BMI of 30."
        source="Misra A, Khurana L. International Journal of Obesity. 2011;35(2):167-187."
      />

      <p>
        Several factors contribute to the South Asian predisposition to central obesity:
      </p>

      <ul>
        <li>
          <strong>Thrifty genotype hypothesis:</strong> Millennia of feast-famine cycles may
          have selected for genes that promote efficient fat storage, particularly visceral fat
          which can be rapidly mobilized during famine.
        </li>
        <li>
          <strong>Lower lean body mass:</strong> Indians have 3-5% less skeletal muscle mass
          compared to Caucasians at the same BMI, resulting in lower metabolic rates and greater
          propensity for fat accumulation.
        </li>
        <li>
          <strong>Higher insulin resistance at baseline:</strong> Even lean, healthy Indians
          show higher fasting insulin levels and greater insulin resistance compared to
          Caucasians, predisposing to visceral fat accumulation.
        </li>
        <li>
          <strong>Dietary transition:</strong> The rapid shift from traditional high-fiber,
          plant-based diets to refined grains, added sugars, and processed foods has occurred
          faster in India than the population can adapt to metabolically.
        </li>
        <li>
          <strong>Physical inactivity epidemic:</strong> Urbanization, desk jobs in the IT
          sector, and increasing reliance on motorized transport have dramatically reduced
          physical activity levels across Indian cities.
        </li>
      </ul>

      <WarningBlock title="Normal BMI Does Not Mean Normal Risk for Indians">
        <p>
          Standard BMI cutoffs (overweight: 25+, obese: 30+) significantly underestimate
          metabolic risk in South Asian populations. The WHO and Indian medical associations
          recommend lower cutoffs for Indians: overweight at BMI ≥23 and obese at BMI ≥25.
          Even at these lower cutoffs, waist circumference measurement remains essential
          because many metabolically unhealthy Indians fall within the "normal" BMI range.
          If you are of Indian descent, always measure your waist circumference regardless
          of your BMI.
        </p>
      </WarningBlock>

      <NoteBlock title="Summary of Belly Fat Causes">
        <ul>
          <li><strong>Genetics (50-70%):</strong> Body shape is largely inherited; Indians are genetically predisposed to central obesity.</li>
          <li><strong>Cortisol/stress:</strong> Chronic stress drives visceral fat through HPA axis dysregulation.</li>
          <li><strong>Insulin resistance:</strong> Hyperinsulinemia promotes visceral fat storage in a vicious cycle.</li>
          <li><strong>Age:</strong> Visceral fat increases after 40 due to declining hormones and muscle mass.</li>
          <li><strong>Gender:</strong> Men and post-menopausal women are most prone to visceral fat.</li>
          <li><strong>Sedentary behavior:</strong> Both lack of exercise and prolonged sitting independently increase visceral fat.</li>
          <li><strong>Fructose/refined carbs:</strong> High fructose intake specifically promotes visceral fat through hepatic lipogenesis.</li>
          <li><strong>Ethnicity:</strong> South Asians accumulate more visceral fat at lower body weights.</li>
        </ul>
      </NoteBlock>

      <ReferenceList references={references} />
    </div>
  );
}
