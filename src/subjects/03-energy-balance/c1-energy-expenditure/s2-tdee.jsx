import React, { useState } from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

const references = [
  {
    authors: 'FAO/WHO/UNU',
    year: 2001,
    title: 'Human Energy Requirements: Report of a Joint FAO/WHO/UNU Expert Consultation',
    source: 'FAO Food and Nutrition Technical Report Series No. 1, Rome',
    type: 'guideline',
  },
  {
    authors: 'Westerterp KR',
    year: 2013,
    title: 'Physical activity and physical activity induced energy expenditure in humans: measurement, determinants, and effects',
    source: 'Frontiers in Physiology, 4, 90',
    type: 'review',
  },
  {
    authors: 'Levine JA',
    year: 2005,
    title: 'Measurement of energy expenditure',
    source: 'Public Health Nutrition, 8(7A), 1123-1132',
    type: 'foundational',
  },
  {
    authors: 'Westerterp KR',
    year: 2009,
    title: 'Assessment of physical activity: a critical appraisal',
    source: 'European Journal of Applied Physiology, 105(6), 823-828',
    type: 'review',
  },
  {
    authors: 'Schoeller DA',
    year: 1999,
    title: 'Recent advances from application of doubly labeled water to measurement of human energy expenditure',
    source: 'Journal of Nutrition, 129(10), 1765-1768',
    type: 'foundational',
  },
  {
    authors: 'Shetty PS, Henry CJK, Black AE, Prentice AM',
    year: 1996,
    title: 'Energy requirements of adults: an update on basal metabolic rates (BMRs) and physical activity levels (PALs)',
    source: 'European Journal of Clinical Nutrition, 50(Suppl 1), S11-S23',
    type: 'foundational',
  },
  {
    authors: 'Pontzer H, Durazo-Arvizu R, Dugas LR, et al.',
    year: 2016,
    title: 'Constrained Total Energy Expenditure and Metabolic Adaptation to Physical Activity in Adult Humans',
    source: 'Current Biology, 26(3), 410-417',
    type: 'foundational',
  },
];

const palData = [
  { level: 'Sedentary', multiplier: '1.2', description: 'Desk job, minimal movement, no exercise', indianExample: 'IT professional in Bengaluru, driving to work' },
  { level: 'Lightly Active', multiplier: '1.375', description: 'Light exercise 1-3 days/week', indianExample: 'Office worker with evening walks or yoga' },
  { level: 'Moderately Active', multiplier: '1.55', description: 'Moderate exercise 3-5 days/week', indianExample: 'Teacher who walks to school, plays weekend cricket' },
  { level: 'Very Active', multiplier: '1.725', description: 'Hard exercise 6-7 days/week', indianExample: 'Gym trainer, competitive sport participant' },
  { level: 'Extra Active', multiplier: '1.9', description: 'Very hard exercise, physical job', indianExample: 'Construction laborer, agricultural worker' },
];

export default function TotalDailyEnergyExpenditure() {
  const [showPalTable, setShowPalTable] = useState(true);

  return (
    <div className="prose-health">
      <h1>Total Daily Energy Expenditure (TDEE)</h1>

      <p>
        While BMR tells you how many calories your body burns at complete rest, your actual
        daily energy needs are substantially higher. Total Daily Energy Expenditure
        encompasses every calorie your body uses throughout the day — from maintaining organ
        function to digesting food to walking across a room. Understanding TDEE is essential
        for setting accurate caloric targets for weight loss, maintenance, or gain.
      </p>

      <DefinitionBlock
        title="Total Daily Energy Expenditure"
        definition="The total number of calories an individual expends in a 24-hour period. TDEE is the sum of Basal Metabolic Rate (BMR), the Thermic Effect of Food (TEF), Exercise Activity Thermogenesis (EAT), and Non-Exercise Activity Thermogenesis (NEAT)."
        notation="TDEE = BMR + TEF + EAT + NEAT"
      />

      <h2>The Four Components of TDEE</h2>

      <h3>1. Basal Metabolic Rate (BMR) — 60-75% of TDEE</h3>
      <p>
        As covered in the previous section, BMR represents the energy required for basic
        life-sustaining functions. It is the largest single component of TDEE for most
        people, particularly those with sedentary lifestyles. Only in highly active
        individuals (professional athletes, manual laborers) does BMR drop below 50% of
        total expenditure.
      </p>

      <h3>2. Thermic Effect of Food (TEF) — 8-15% of TDEE</h3>
      <p>
        Also known as diet-induced thermogenesis (DIT), TEF represents the energy cost of
        digesting, absorbing, transporting, and metabolizing nutrients. Different
        macronutrients have different thermic effects:
      </p>
      <ul>
        <li><strong>Protein:</strong> 20-30% of calories consumed (highest TEF)</li>
        <li><strong>Carbohydrates:</strong> 5-10% of calories consumed</li>
        <li><strong>Fats:</strong> 0-3% of calories consumed (lowest TEF)</li>
        <li><strong>Alcohol:</strong> approximately 10-30% of calories consumed</li>
      </ul>
      <p>
        This is one reason why higher-protein diets have a modest metabolic advantage — more
        energy is expended simply processing the food. For a mixed diet, TEF averages about
        10% of total caloric intake.
      </p>

      <ExampleBlock
        title="TEF in Practice"
        problem="If you consume 2,000 kcal/day on a mixed diet, approximately 200 kcal will be used just for digesting and processing that food. However, if your diet is 30% protein (600 kcal from protein), the TEF from protein alone would be 120-180 kcal. Compare this to a low-protein diet at 10% protein (200 kcal from protein) where protein TEF would be only 40-60 kcal. This difference of roughly 80-120 kcal/day from TEF alone may contribute to the modest weight loss advantage observed in higher-protein diets."
      />

      <h3>3. Exercise Activity Thermogenesis (EAT) — 5-30% of TDEE</h3>
      <p>
        EAT encompasses all deliberate, planned physical exercise: gym workouts, running,
        swimming, sports, structured yoga sessions, etc. For sedentary individuals, EAT may
        constitute as little as 5% of TDEE. For professional athletes or those who exercise
        vigorously for hours daily, it can represent 30% or more.
      </p>
      <p>
        A common misconception is that exercise contributes an enormous number of calories.
        In reality, a 70 kg person running for 30 minutes at moderate pace burns
        approximately 250-350 kcal — easily negated by a single pastry or sugary drink. This
        is why the phrase "you cannot outrun a bad diet" has scientific merit.
      </p>

      <h3>4. Non-Exercise Activity Thermogenesis (NEAT) — 15-50% of TDEE</h3>
      <p>
        NEAT includes all physical activity that is not sleeping, eating, or deliberate
        exercise: fidgeting, walking to the bathroom, standing while cooking, gesticulating
        while talking, climbing stairs at work, and all other incidental movement. NEAT is
        covered in detail in the next section, but it is important to recognize that it can
        be the most variable component of TDEE, differing by up to 2,000 kcal/day between
        individuals.
      </p>

      <EvidenceBlock
        title="TDEE Components Breakdown"
        finding="In a typical adult, BMR accounts for 60-75% of TDEE, TEF for 8-15%, and physical activity (EAT + NEAT combined) for 15-30%. However, in highly active populations such as manual laborers, physical activity can account for up to 50% of TDEE."
        study="FAO/WHO/UNU Expert Consultation on Human Energy Requirements"
        source="FAO Technical Report Series No. 1, 2001"
        details="The FAO/WHO/UNU consultation synthesized decades of doubly labeled water studies, indirect calorimetry data, and population-level energy balance research to establish reference energy requirements. They developed the Physical Activity Level (PAL) system as a practical means to estimate TDEE from BMR. The consultation included data from diverse populations including Indian, African, Latin American, and Western cohorts."
      />

      <h2>Physical Activity Level (PAL) Multipliers</h2>

      <p>
        The PAL system provides a practical method for estimating TDEE. Your PAL is the ratio
        of TDEE to BMR: <strong>TDEE = BMR × PAL</strong>. This approach, endorsed by the
        FAO/WHO/UNU, simplifies energy requirement estimation for clinical and public health
        purposes.
      </p>

      {showPalTable && (
        <div className="my-6 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 rounded-lg border border-gray-200 dark:divide-gray-700 dark:border-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">Activity Level</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">PAL</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">Description</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">Indian Context Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
              {palData.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50 dark:bg-gray-800/50'}>
                  <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">{row.level}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm font-bold text-blue-600 dark:text-blue-400">{row.multiplier}</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{row.description}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{row.indianExample}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <h2>Estimating TDEE in Practice</h2>

      <h3>Method 1: Prediction Equation + PAL Multiplier</h3>
      <p>
        The simplest approach is to calculate BMR using the Mifflin-St Jeor equation and
        multiply by an appropriate PAL factor. This method is quick and requires no
        equipment, but accuracy depends on honestly assessing your activity level. Most
        people overestimate their activity level, so when in doubt, choose the lower PAL
        category.
      </p>

      <h3>Method 2: Food Logging and Weight Tracking</h3>
      <p>
        A more personalized approach involves tracking food intake and body weight for 2-4
        weeks. If weight remains stable, your average caloric intake equals your TDEE. This
        method accounts for individual metabolic variation but requires diligent, accurate
        food logging — studies show most people underreport intake by 20-50%.
      </p>

      <h3>Method 3: Wearable Devices</h3>
      <p>
        Modern activity trackers and smartwatches estimate TDEE using heart rate monitoring,
        accelerometry, and proprietary algorithms. While convenient, their accuracy varies
        significantly.
      </p>

      <EvidenceBlock
        title="Accuracy of Wearable Devices"
        finding="Consumer wearable devices showed mean errors of 9-43% in estimating total energy expenditure compared to doubly labeled water. No device consistently provided accurate estimates across all activities and individuals."
        study="Assessment of wearable activity monitors for TDEE estimation"
        source="Westerterp (2009) European Journal of Applied Physiology"
        details="Multiple validation studies comparing commercial wearable devices (including Fitbit, Apple Watch, Garmin, etc.) against doubly labeled water — the gold standard for free-living energy expenditure measurement — have found substantial individual-level errors. While group-level averages may be reasonable, individual accuracy is poor. Heart rate-based devices tend to overestimate during rest and underestimate during very high intensity activities. Accelerometer-based devices miss energy expenditure from activities like cycling or upper body movements."
      />

      <h3>Method 4: Doubly Labeled Water (Research Gold Standard)</h3>
      <p>
        Doubly labeled water (DLW) involves drinking water containing rare isotopes of
        hydrogen and oxygen, then measuring their elimination rates in urine over 1-2
        weeks. The difference in elimination rates reflects CO2 production and hence energy
        expenditure. This method is highly accurate (1-3% error) but costs $500-1,000 per
        measurement and is only available in research settings.
      </p>

      <NoteBlock
        title="The Constrained Energy Model">
        Recent research by Pontzer et al. (2016) suggests that the relationship between physical activity and TDEE is not linear. At moderate activity levels, TDEE increases with activity as expected. However, at very high activity levels, the body appears to compensate by reducing energy expenditure in other domains (lower BMR, reduced NEAT, suppressed reproductive and immune function). This 'constrained total energy expenditure' model challenges the additive TDEE model and may explain why exercise alone is often insufficient for substantial weight loss.
      </NoteBlock>

      <h2>TDEE in the Indian Context</h2>

      <p>
        Understanding TDEE in the Indian context requires appreciating the dramatic range of
        physical activity levels across the population.
      </p>

      <h3>Urban Office Workers</h3>
      <p>
        India's rapidly growing IT and services sector has created a large population of
        sedentary workers. A typical urban professional in cities like Bengaluru, Hyderabad,
        or Pune may commute by car or two-wheeler, sit at a desk for 8-10 hours, and have
        limited leisure-time physical activity. Their PAL is typically 1.2-1.4, placing
        them in the sedentary to lightly active category.
      </p>

      <ExampleBlock
        title="Urban Indian Office Worker"
        problem="A 30-year-old female software engineer in Bengaluru: height 160 cm, weight 62 kg. Mifflin-St Jeor BMR = 1,294 kcal/day. With a PAL of 1.3 (sedentary with occasional walking): TDEE = 1,682 kcal/day. For weight loss of 0.5 kg/week, her target would be approximately 1,182 kcal/day — which is very close to the recommended minimum of 1,200 kcal/day, illustrating why exercise (increasing PAL) is so important for smaller-framed sedentary women who want to lose weight while eating adequately."
      />

      <h3>Manual Laborers and Agricultural Workers</h3>
      <p>
        In contrast, agricultural workers, construction laborers, and other manual workers
        in India may have PAL values of 1.7-2.2. A male agricultural worker during harvest
        season may have a TDEE of 3,500-4,000 kcal/day. The challenge for these populations
        is often getting enough calories to meet their expenditure, particularly with
        nutrient-poor diets.
      </p>

      <h3>Dietary Pattern Considerations</h3>
      <p>
        Traditional Indian diets tend to be carbohydrate-heavy (60-70% of calories from
        carbohydrates, largely from rice, wheat, and millets). The TEF of such diets is
        lower than Western diets with higher protein and fat content. This means the TEF
        component of TDEE may be slightly lower — approximately 8-10% vs 10-15% for
        higher-protein Western diets.
      </p>

      <WarningBlock
        title="Common TDEE Estimation Errors">
        The two most common errors in TDEE estimation are: (1) Overestimating activity level — most desk workers are sedentary, not 'lightly active,' even if they exercise 2-3 times per week for 30 minutes. (2) Underreporting food intake — studies consistently show that people underestimate caloric intake by 20-50%, with greater underreporting in overweight individuals. These two errors combined can lead to a perceived caloric deficit of 500+ kcal/day that does not actually exist, explaining why many people feel they 'cannot lose weight despite eating less.'
      </WarningBlock>

      <h2>Practical Steps for Determining Your TDEE</h2>

      <ol>
        <li>
          <strong>Start with an estimate:</strong> Calculate BMR using Mifflin-St Jeor and
          multiply by an honest PAL assessment. When in doubt, choose the lower activity level.
        </li>
        <li>
          <strong>Track for 2-3 weeks:</strong> Weigh yourself daily (first thing in the
          morning after using the bathroom) and log all food intake accurately using a food
          scale and tracking app.
        </li>
        <li>
          <strong>Calculate actual TDEE:</strong> If weight is stable, your average intake
          equals TDEE. If losing 0.5 kg/week, your TDEE is approximately intake + 550 kcal/day.
          If gaining 0.5 kg/week, your TDEE is approximately intake - 550 kcal/day.
        </li>
        <li>
          <strong>Adjust as needed:</strong> TDEE is not static — it changes with body weight,
          body composition, activity patterns, and metabolic adaptation. Re-assess every
          4-6 weeks during active weight management.
        </li>
      </ol>

      <h2>Key Takeaways</h2>

      <ul>
        <li>TDEE has four components: BMR (largest), TEF, EAT, and NEAT.</li>
        <li>
          The PAL multiplier system provides a practical estimation method, but most people
          overestimate their activity level.
        </li>
        <li>
          Wearable devices are convenient but have substantial individual-level errors (9-43%).
        </li>
        <li>
          The most accurate personal TDEE estimate comes from correlating food intake with
          body weight changes over 2-4 weeks.
        </li>
        <li>
          In the Indian context, the urban-rural activity divide creates enormous variation
          in TDEE across the population.
        </li>
        <li>
          TDEE is dynamic and must be reassessed periodically during weight management.
        </li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
