import React, { useState } from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';
import CalorieCalculator from '../../../components/viz/CalorieCalculator.jsx';

const references = [
  {
    authors: 'Mifflin MD, St Jeor ST, Hill LA, Scott BJ, Daugherty SA, Koh YO',
    year: 1990,
    title: 'A new predictive equation for resting energy expenditure in healthy individuals',
    source: 'American Journal of Clinical Nutrition, 51(2), 241-247',
    type: 'foundational',
  },
  {
    authors: 'Harris JA, Benedict FG',
    year: 1919,
    title: 'A Biometric Study of Human Basal Metabolism',
    source: 'Proceedings of the National Academy of Sciences, 4(12), 370-373',
    type: 'foundational',
  },
  {
    authors: 'Frankenfield D, Roth-Yousey L, Compher C',
    year: 2005,
    title: 'Comparison of predictive equations for resting metabolic rate in healthy nonobese and obese adults: a systematic review',
    source: 'Journal of the American Dietetic Association, 105(5), 775-789',
    type: 'review',
  },
  {
    authors: 'Cunningham JJ',
    year: 1991,
    title: 'Body composition as a determinant of energy expenditure: a synthetic review and a proposed general prediction equation',
    source: 'American Journal of Clinical Nutrition, 54(6), 963-969',
    type: 'foundational',
  },
  {
    authors: 'Johnstone AM, Murison SD, Duncan JS, Rance KA, Speakman JR',
    year: 2005,
    title: 'Factors influencing variation in basal metabolic rate include fat-free mass, fat mass, age, and circulating thyroxine but not sex, circulating leptin, or triiodothyronine',
    source: 'American Journal of Clinical Nutrition, 82(5), 941-948',
    type: 'foundational',
  },
  {
    authors: 'Muller MJ, Bosy-Westphal A, Later W, Haas V, Heller M',
    year: 2009,
    title: 'Functional body composition: insights into the regulation of energy metabolism and some clinical applications',
    source: 'European Journal of Clinical Nutrition, 63(9), 1045-1056',
    type: 'review',
  },
  {
    authors: 'Ravussin E, Lillioja S, Anderson TE, Christin L, Bogardus C',
    year: 1986,
    title: 'Determinants of 24-hour energy expenditure in man: methods and results using a respiratory chamber',
    source: 'Journal of Clinical Investigation, 78(6), 1568-1578',
    type: 'foundational',
  },
];

export default function BasalMetabolicRate() {
  const [showEquations, setShowEquations] = useState(false);

  return (
    <div className="prose-health">
      <h1>Basal Metabolic Rate (BMR)</h1>

      <p>
        Basal Metabolic Rate represents the minimum amount of energy your body requires to
        sustain life while at complete rest. It is the single largest component of daily
        energy expenditure for most people, typically accounting for 60-75% of total
        calories burned each day. Understanding BMR is fundamental to any evidence-based
        approach to weight management.
      </p>

      <DefinitionBlock
        title="Basal Metabolic Rate"
        definition="The rate of energy expenditure at complete physical and mental rest, in a thermoneutral environment, after a 12-hour fast. It represents the energy cost of maintaining vital physiological functions including organ function, breathing, circulation, and cellular metabolism."
        notation="BMR is typically expressed in kilocalories per day (kcal/day) or kilojoules per day (kJ/day). 1 kcal = 4.184 kJ."
      />

      <h2>What BMR Includes</h2>

      <p>
        BMR encompasses all the involuntary metabolic processes that keep you alive. These
        are the energy costs your body incurs even when you are lying perfectly still in a
        temperature-controlled room, fully awake but completely resting.
      </p>

      <h3>Organ Function</h3>
      <p>
        The brain alone consumes approximately 20% of BMR despite comprising only about 2%
        of body weight. The liver accounts for roughly 21% of BMR, the heart about 9%, and
        the kidneys approximately 8%. Skeletal muscle, while metabolically less active per
        kilogram than organs, contributes about 22% of BMR due to its large total mass.
        These organ-level energy demands are relatively fixed and difficult to alter through
        lifestyle changes.
      </p>

      <h3>Breathing and Circulation</h3>
      <p>
        The respiratory muscles and the heart continuously work to deliver oxygen and remove
        carbon dioxide. At rest, the heart beats approximately 60-100 times per minute,
        pumping around 5 liters of blood per minute. The diaphragm and intercostal muscles
        drive 12-20 breaths per minute. These processes require a constant supply of ATP
        generated from metabolic substrates.
      </p>

      <h3>Temperature Regulation</h3>
      <p>
        Maintaining core body temperature at approximately 37 degrees Celsius is an
        energy-intensive process. Even in a thermoneutral environment (around 22-25 degrees
        Celsius), the body expends energy on vasomotor control and baseline metabolic heat
        production. In colder environments, additional thermogenesis further increases energy
        expenditure, though this component is excluded from strict BMR measurements.
      </p>

      <h3>Cellular Maintenance</h3>
      <p>
        At the cellular level, BMR includes the energy cost of maintaining ion gradients
        across cell membranes (the sodium-potassium pump alone accounts for 20-40% of BMR),
        protein synthesis and turnover, DNA repair, and other housekeeping functions that
        maintain cellular integrity.
      </p>

      <EvidenceBlock
        title="Organ Contribution to BMR"
        finding="High metabolic rate organs (brain, liver, heart, kidneys) account for approximately 60% of BMR despite representing only about 5-6% of total body weight. Skeletal muscle contributes roughly 22% of BMR at rest."
        study="Analysis of organ-level metabolic rates using functional body composition models"
        source="Muller et al. (2009) European Journal of Clinical Nutrition"
        details="The researchers used advanced imaging techniques and indirect calorimetry to quantify the metabolic contribution of individual organs. They found that the metabolic rate of high-metabolic-rate organs is approximately 200-440 kcal/kg/day, while skeletal muscle has a metabolic rate of only about 13 kcal/kg/day at rest. This explains why body composition — particularly the ratio of organ mass to total mass — is a critical determinant of BMR."
      />

      <h2>Prediction Equations</h2>

      <p>
        Since directly measuring BMR requires specialized laboratory equipment (indirect
        calorimetry via a metabolic cart), several prediction equations have been developed
        to estimate BMR from easily measured variables like weight, height, age, and sex.
      </p>

      <button
        onClick={() => setShowEquations(!showEquations)}
        className="mb-4 rounded-lg bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50 transition-colors"
      >
        {showEquations ? 'Hide' : 'Show'} Detailed Equations
      </button>

      {showEquations && (
        <div className="mb-6 rounded-xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800/50">
          <h4 className="mb-3 text-sm font-bold text-gray-800 dark:text-gray-200">
            Harris-Benedict Equation (1919)
          </h4>
          <div className="mb-1 font-mono text-sm text-gray-700 dark:text-gray-300">
            <p>Men: BMR = 66.5 + (13.75 × weight kg) + (5.003 × height cm) - (6.755 × age)</p>
            <p>Women: BMR = 655.1 + (9.563 × weight kg) + (1.850 × height cm) - (4.676 × age)</p>
          </div>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Developed from calorimetry data on 136 men and 103 women. Tends to overestimate
            BMR by 5-15% in modern populations due to changes in body composition.
          </p>

          <h4 className="mb-3 mt-5 text-sm font-bold text-gray-800 dark:text-gray-200">
            Mifflin-St Jeor Equation (1990)
          </h4>
          <div className="mb-1 font-mono text-sm text-gray-700 dark:text-gray-300">
            <p>Men: BMR = (10 × weight kg) + (6.25 × height cm) - (5 × age) + 5</p>
            <p>Women: BMR = (10 × weight kg) + (6.25 × height cm) - (5 × age) - 161</p>
          </div>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Developed from a more diverse and modern sample. Recommended by the American
            Dietetic Association as the most accurate for non-obese and obese individuals.
          </p>

          <h4 className="mb-3 mt-5 text-sm font-bold text-gray-800 dark:text-gray-200">
            Cunningham Equation (1991)
          </h4>
          <div className="mb-1 font-mono text-sm text-gray-700 dark:text-gray-300">
            <p>BMR = 500 + (22 × lean body mass in kg)</p>
          </div>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Best suited for athletic populations with known body composition data. Accounts
            for lean mass directly, making it more accurate for muscular individuals.
          </p>
        </div>
      )}

      <h3>Harris-Benedict vs Mifflin-St Jeor</h3>

      <p>
        The Harris-Benedict equation, published in 1919, was the gold standard for nearly
        a century. However, it was developed using data from a relatively small, homogeneous
        population. As average body composition has shifted over the decades (with generally
        higher body fat percentages), this equation increasingly overestimates BMR for
        modern populations.
      </p>

      <EvidenceBlock
        title="Mifflin-St Jeor Is More Accurate"
        finding="The Mifflin-St Jeor equation was the most reliable predictor of resting metabolic rate, predicting RMR within 10% of measured values in more non-obese and obese individuals than any other equation tested."
        study="Systematic review comparing predictive equations for resting metabolic rate"
        source="Frankenfield et al. (2005) Journal of the American Dietetic Association"
        details="This systematic review evaluated the accuracy of five commonly used prediction equations (Harris-Benedict, Mifflin-St Jeor, Owen, WHO/FAO/UNU, and Cunningham) against measured resting metabolic rate via indirect calorimetry. The Mifflin-St Jeor equation predicted RMR within 10% of measured values in 82% of non-obese subjects. The Harris-Benedict equation tended to overestimate by 5% or more, particularly in overweight and obese individuals. The American Dietetic Association subsequently recommended Mifflin-St Jeor as the preferred equation for clinical use."
      />

      <h3>The Cunningham Equation for Athletes</h3>

      <p>
        Standard equations use total body weight, which does not distinguish between muscle
        and fat. For athletes or highly muscular individuals, these equations may
        significantly underestimate BMR because muscle tissue is more metabolically active
        than fat tissue. The Cunningham equation addresses this by using lean body mass (LBM)
        as its primary input variable.
      </p>

      <ExampleBlock
        title="When to Use the Cunningham Equation"
        description="Consider a male bodybuilder weighing 90 kg at 10% body fat (LBM = 81 kg) vs a sedentary man weighing 90 kg at 30% body fat (LBM = 63 kg). Mifflin-St Jeor gives them very similar BMR estimates since it uses total weight. The Cunningham equation yields BMR of 2,282 kcal/day for the bodybuilder vs 1,886 kcal/day for the sedentary man — a difference of nearly 400 kcal/day that reflects the metabolic reality of their different body compositions."
      />

      <h2>Factors Affecting BMR</h2>

      <h3>Muscle Mass (Fat-Free Mass)</h3>
      <p>
        Fat-free mass is the single strongest predictor of BMR, explaining approximately
        60-80% of the inter-individual variation. Each kilogram of muscle tissue burns
        roughly 13 kcal/day at rest, compared to about 4.5 kcal/day per kilogram of fat
        tissue. While the per-kilogram difference seems modest, individuals can differ by
        20-30 kg of muscle mass, creating substantial BMR differences.
      </p>

      <h3>Age</h3>
      <p>
        BMR declines approximately 1-2% per decade after age 20. This decline is primarily
        driven by age-related loss of lean mass (sarcopenia) rather than an inherent slowing
        of metabolic rate. Adults lose approximately 3-8% of muscle mass per decade after
        age 30, accelerating after age 60. Resistance training can significantly attenuate
        this decline, helping to preserve BMR with aging.
      </p>

      <h3>Biological Sex</h3>
      <p>
        Males typically have a 5-10% higher BMR than females of the same weight and height,
        primarily due to greater lean mass and lower essential body fat requirements. When
        BMR is expressed per kilogram of fat-free mass, the difference between sexes narrows
        substantially but does not completely disappear, suggesting some hormonal influence
        (notably testosterone) on metabolic rate beyond body composition effects.
      </p>

      <h3>Genetics</h3>
      <p>
        Twin studies and family studies suggest that genetics account for approximately 40%
        of the variation in BMR after adjusting for body composition, age, and sex.
        Polymorphisms in genes related to thyroid function, uncoupling proteins, and
        mitochondrial efficiency all contribute to this heritable variation.
      </p>

      <EvidenceBlock
        title="Genetic Variation in BMR"
        finding="After adjusting for fat-free mass, fat mass, age, and sex, approximately 40% of the remaining variation in 24-hour energy expenditure could be attributed to genetic factors. Family membership alone explained a significant portion of the residual variance in metabolic rate."
        study="Determinants of 24-hour energy expenditure in man"
        source="Ravussin et al. (1986) Journal of Clinical Investigation"
        details="In a study of Pima Indians using whole-room indirect calorimetry, researchers found that 24-hour energy expenditure varied by as much as 500 kcal/day between individuals even after accounting for body size, body composition, age, and sex. Family membership was a significant determinant, indicating a substantial genetic component. This landmark study was among the first to quantify the genetic contribution to metabolic rate variation."
      />

      <h3>Thyroid Function</h3>
      <p>
        Thyroid hormones (T3 and T4) are primary regulators of metabolic rate. Hypothyroidism
        can reduce BMR by 15-40%, while hyperthyroidism can increase it by 15-50%.
        Subclinical thyroid dysfunction, which affects an estimated 5-10% of the population,
        can also modestly alter BMR. This is one reason why unexplained changes in weight
        should prompt evaluation of thyroid function.
      </p>

      <h3>Environmental Temperature</h3>
      <p>
        While strict BMR is measured in a thermoneutral environment, real-world resting
        metabolic rate is influenced by ambient temperature. Cold exposure activates brown
        adipose tissue and increases thermogenesis, while chronic heat exposure can mildly
        elevate metabolic rate through increased cardiovascular demands.
      </p>

      <NoteBlock
        title="BMR vs RMR"
        content="In practice, most clinical and research settings measure Resting Metabolic Rate (RMR) rather than true BMR. RMR is typically 10-20% higher than BMR because it does not require the strict 12-hour fasting, overnight sleep, and thermoneutral conditions. When using prediction equations in practical settings, the values obtained are closer to RMR than strict BMR, but the terms are often used interchangeably."
      />

      <WarningBlock
        title="Limitations of Prediction Equations"
        content="All BMR prediction equations have a margin of error of approximately plus or minus 10-15% when compared to measured values. In certain populations — particularly individuals with obesity, the elderly, certain ethnicities, and those who are very muscular — errors can be larger. For clinical decisions requiring precise energy expenditure data (such as critical care nutrition or eating disorder treatment), indirect calorimetry remains the gold standard."
      />

      <h2>Interactive BMR Calculator</h2>

      <p>
        Use the calculator below to estimate your BMR using the Mifflin-St Jeor equation
        and see how it translates to TDEE based on your activity level. Remember that these
        are estimates — individual variation of 10-15% is normal.
      </p>

      <CalorieCalculator />

      <h2>Practical Implications for Weight Management</h2>

      <p>
        Understanding BMR has several critical implications for weight management:
      </p>

      <ul>
        <li>
          <strong>Caloric floors matter:</strong> Eating significantly below BMR is
          unsustainable and potentially dangerous. Most clinical guidelines recommend
          a minimum intake of 1,200 kcal/day for women and 1,500 kcal/day for men in
          medically supervised programs.
        </li>
        <li>
          <strong>Muscle preservation is metabolic preservation:</strong> Resistance
          training during a caloric deficit helps maintain lean mass and, by extension,
          BMR. Rapid weight loss without exercise preferentially depletes muscle, leading
          to a larger-than-expected drop in metabolic rate.
        </li>
        <li>
          <strong>BMR is not fixed:</strong> While genetics set a range, body composition
          changes from exercise and nutrition can shift BMR meaningfully. Gaining 5 kg of
          muscle mass would increase BMR by approximately 65 kcal/day — modest but
          meaningful over years.
        </li>
        <li>
          <strong>Crash diets are counterproductive:</strong> Severe caloric restriction
          triggers adaptive thermogenesis, reducing BMR beyond what body composition
          changes would predict. This metabolic adaptation can persist for months or even
          years after dieting ends.
        </li>
      </ul>

      <ExampleBlock
        title="BMR in Practice: Indian Context"
        description="An Indian male office worker aged 35, height 172 cm, weight 78 kg would have an estimated BMR of approximately 1,690 kcal/day using Mifflin-St Jeor. With a sedentary activity multiplier of 1.2, his TDEE would be about 2,028 kcal/day. For gradual weight loss of 0.5 kg per week, he would target approximately 1,528 kcal/day (a 500 kcal deficit). Note that some studies suggest South Asian populations may have slightly lower metabolic rates than Western populations at the same body weight, possibly related to differences in lean mass and body fat distribution."
      />

      <h2>Key Takeaways</h2>

      <ul>
        <li>BMR accounts for 60-75% of total daily energy expenditure in most people.</li>
        <li>
          The Mifflin-St Jeor equation is the recommended prediction method for the general
          population; the Cunningham equation is preferred for athletes with known lean mass.
        </li>
        <li>
          Fat-free mass is the strongest predictor of BMR, followed by age, sex, and genetics.
        </li>
        <li>
          Prediction equations carry a 10-15% margin of error; indirect calorimetry is the
          gold standard when precision is needed.
        </li>
        <li>
          Preserving muscle through resistance training helps maintain BMR during weight
          loss.
        </li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
