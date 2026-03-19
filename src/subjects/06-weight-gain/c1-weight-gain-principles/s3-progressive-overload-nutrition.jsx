import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

const references = [
  {
    id: 'bray2012',
    authors: 'Bray GA, Smith SR, de Jonge L, et al.',
    year: 2012,
    title: 'Effect of dietary protein content on weight gain, energy expenditure, and body composition during overeating',
    journal: 'JAMA',
    volume: '307(1)',
    pages: '47-55',
    doi: '10.1001/jama.2011.1918'
  },
  {
    id: 'schoenfeld2010',
    authors: 'Schoenfeld BJ.',
    year: 2010,
    title: 'The mechanisms of muscle hypertrophy and their application to resistance training',
    journal: 'Journal of Strength and Conditioning Research',
    volume: '24(10)',
    pages: '2857-2872',
    doi: '10.1519/JSC.0b013e3181e840f3'
  },
  {
    id: 'dattilo2011',
    authors: 'Dattilo M, Antunes HKM, Medeiros A, et al.',
    year: 2011,
    title: 'Sleep and muscle recovery: endocrinological and molecular basis for a new and promising hypothesis',
    journal: 'Medical Hypotheses',
    volume: '77(2)',
    pages: '220-222',
    doi: '10.1016/j.mehy.2011.04.017'
  },
  {
    id: 'schoenfeld2017',
    authors: 'Schoenfeld BJ, Ogborn D, Krieger JW.',
    year: 2017,
    title: 'Dose-response relationship between weekly resistance training volume and increases in muscle mass: a systematic review and meta-analysis',
    journal: 'Journal of Sports Sciences',
    volume: '35(11)',
    pages: '1073-1082',
    doi: '10.1080/02640414.2016.1210197'
  },
  {
    id: 'leproult2011',
    authors: 'Leproult R, Van Cauter E.',
    year: 2011,
    title: 'Effect of 1 week of sleep restriction on testosterone levels in young healthy men',
    journal: 'JAMA',
    volume: '305(21)',
    pages: '2173-2174',
    doi: '10.1001/jama.2011.710'
  }
];

export default function ProgressiveOverloadNutrition() {
  return (
    <div className="prose-health">
      <h1>Training Stimulus, Recovery, and Nutrition Integration</h1>

      <p>
        A caloric surplus without resistance training is an exercise in fat
        accumulation. A resistance training program without adequate nutrition is
        an exercise in frustration. Muscle growth occurs at the intersection of
        training stimulus, recovery, and nutrition — all three must be optimized
        simultaneously. This section examines why training is non-negotiable for
        lean mass gain, how progressive overload works, the role of sleep and
        recovery nutrition, and how to periodize nutrition alongside training
        phases.
      </p>

      <h2>Why Surplus Without Training Equals Fat Gain</h2>

      <EvidenceBlock
        level="strong"
        source="Bray et al. (2012) — JAMA overfeeding study"
      >
        In a landmark controlled overfeeding study published in JAMA, Bray and
        colleagues overfed 25 healthy adults by approximately 954 kcal/day above
        maintenance for 8 weeks — without a resistance training program. Despite
        the substantial surplus, participants on the low-protein diet (5% of
        calories) lost lean mass while gaining significant fat. Those on normal
        (15%) and high-protein (25%) diets gained some lean mass (about 2.9-3.2
        kg) but also gained substantial fat mass (3.5-4.0 kg). Critically, the
        lean mass gained without training was primarily organ mass and visceral
        tissue, not skeletal muscle. Without the mechanical stimulus of resistance
        training, the body has no signal to direct surplus energy toward skeletal
        muscle growth — it defaults to fat storage.
      </EvidenceBlock>

      <p>
        This study provides the clearest evidence for a fundamental principle:
        nutrition provides the raw materials and energy, but resistance training
        provides the signal that tells the body where to invest those resources.
        You cannot eat your way to a muscular physique. The caloric surplus must
        be paired with progressive resistance training to produce meaningful
        skeletal muscle hypertrophy.
      </p>

      <h2>Progressive Overload: The Core Principle</h2>

      <DefinitionBlock term="Progressive Overload">
        The gradual increase of stress placed upon the musculoskeletal system
        during resistance training. This can be achieved through increasing
        the weight lifted (load), increasing the number of repetitions or sets
        (volume), improving technique to increase mechanical tension, reducing
        rest periods, increasing range of motion, or increasing training
        frequency. Progressive overload is the fundamental mechanism driving
        continued muscular adaptation — without it, the body has no reason to
        build additional muscle tissue, regardless of nutritional support.
      </DefinitionBlock>

      <EvidenceBlock
        level="strong"
        source="Schoenfeld (2010); Schoenfeld et al. (2017)"
      >
        Schoenfeld identified three primary mechanisms of muscle hypertrophy:
        (1) mechanical tension — the force generated by muscles against resistance,
        which activates mechanosensors that trigger anabolic signaling cascades;
        (2) metabolic stress — the accumulation of metabolites (lactate, hydrogen
        ions, inorganic phosphate) during resistance training that activates
        hormonal and cellular hypertrophy pathways; and (3) muscle damage — the
        micro-tears in muscle fibers that stimulate repair and growth responses.
        Of these, mechanical tension is considered the primary driver, making
        progressive loading the most important training variable. A subsequent
        meta-analysis by Schoenfeld et al. (2017) found a dose-response
        relationship between weekly training volume (number of sets per muscle
        group) and hypertrophy, with 10+ sets per muscle group per week producing
        optimal results.
      </EvidenceBlock>

      <h3>Methods of Progressive Overload</h3>

      <ExampleBlock title="Progressive Overload Methods (In Order of Priority)">
        <ol>
          <li>
            <strong>Increase load (weight):</strong> The most straightforward method.
            When you can complete all prescribed sets and reps with good form, increase
            the weight by 2.5-5 kg for upper body exercises and 5-10 kg for lower
            body. This is the primary method for beginners and intermediates.
          </li>
          <li>
            <strong>Increase volume (sets or reps):</strong> Add 1-2 reps per set or
            1 additional set per exercise over the course of several weeks. When
            you reach the top of the rep range (e.g., 12 reps in an 8-12 range),
            increase weight and drop back to the bottom (8 reps).
          </li>
          <li>
            <strong>Increase frequency:</strong> Training each muscle group 2-3 times
            per week produces more hypertrophy than once per week, due to more
            frequent MPS stimulation. Moving from a body-part split to an upper/lower
            or push/pull/legs rotation increases frequency.
          </li>
          <li>
            <strong>Improve technique:</strong> Better form through full range of
            motion increases mechanical tension on the target muscle. A deeper squat,
            a more controlled eccentric (lowering phase), or better mind-muscle
            connection all constitute progressive overload without changing the weight.
          </li>
          <li>
            <strong>Decrease rest periods:</strong> Reducing rest from 3 minutes to
            2 minutes between sets increases training density and metabolic stress.
            However, this should not come at the expense of load — maintain weight
            on the bar.
          </li>
        </ol>
      </ExampleBlock>

      <NoteBlock title="Minimum Effective Training Volume">
        For hypertrophy, current evidence suggests a minimum of approximately 10
        working sets per muscle group per week, with a likely optimal range of
        10-20 sets per week for most individuals. Beyond 20 sets per muscle group,
        additional volume produces diminishing returns and may impair recovery.
        Beginners can grow on the lower end (10-12 sets/week), while advanced
        trainees may require the higher end (15-20+ sets/week) due to their
        reduced sensitivity to training stimulus.
      </NoteBlock>

      <h2>Recovery Nutrition</h2>

      <p>
        Muscle growth does not occur during training — it occurs during recovery.
        Training creates the stimulus (micro-damage and mechanical tension);
        recovery is when the body repairs and builds new tissue in response to
        that stimulus. Nutrition during the recovery period (the 24-48 hours
        following a training session) is therefore critical.
      </p>

      <h3>Post-Training Nutrition</h3>

      <ExampleBlock title="Post-Training Recovery Nutrition Protocol">
        <ul>
          <li>
            <strong>Protein (25-40g within 2-4 hours):</strong> Provides amino acids
            for muscle repair and growth. The timing is flexible — if you ate protein
            1-2 hours before training, immediate post-workout protein is not urgent.
            If you trained fasted, prioritize eating within 1-2 hours.
          </li>
          <li>
            <strong>Carbohydrates (0.5-1.0 g/kg within 2-4 hours):</strong> Replenishes
            glycogen stores depleted during training. Especially important if training
            again within 24 hours. Carbohydrate sources: rice, roti, banana, potato,
            oats.
          </li>
          <li>
            <strong>Hydration:</strong> Replace fluid lost during training.
            Approximately 500-750ml of water per hour of training. Add electrolytes
            (sodium, potassium) if training was particularly sweaty or lasted over
            60 minutes.
          </li>
          <li>
            <strong>Indian post-workout meal example:</strong> 2 eggs + 2 rotis +
            dal (1 katori) + banana — provides approximately 35g protein, 80g
            carbohydrates, and adequate rehydration potential.
          </li>
        </ul>
      </ExampleBlock>

      <h3>Recovery Between Training Sessions</h3>

      <NoteBlock title="Recovery Optimization Checklist">
        <ul>
          <li>
            <strong>Protein at every meal:</strong> Distribute 1.6-2.2 g/kg across
            3-5 meals to maintain elevated MPS throughout the day
          </li>
          <li>
            <strong>Adequate total calories:</strong> A surplus of 300-500 kcal
            ensures sufficient energy for tissue repair and growth
          </li>
          <li>
            <strong>Micronutrient sufficiency:</strong> Zinc (supports testosterone
            production), magnesium (supports muscle relaxation and sleep), vitamin D
            (supports muscle function), and iron (supports oxygen delivery to
            recovering muscles) are particularly important
          </li>
          <li>
            <strong>Anti-inflammatory foods:</strong> Turmeric (curcumin), ginger,
            omega-3 fatty acids, and colorful fruits and vegetables support recovery
            by moderating the inflammatory response to training
          </li>
          <li>
            <strong>Limit alcohol:</strong> Alcohol impairs MPS by 20-30% even in
            moderate amounts and disrupts sleep quality. During bulking phases,
            minimize alcohol consumption.
          </li>
        </ul>
      </NoteBlock>

      <h2>Sleep and Growth Hormone</h2>

      <EvidenceBlock
        level="strong"
        source="Dattilo et al. (2011); Leproult & Van Cauter (2011)"
      >
        Sleep is arguably the most important and most neglected recovery variable.
        Approximately 60-70% of daily growth hormone (GH) secretion occurs during
        deep sleep (stages 3-4 of NREM sleep), primarily in the first half of the
        night. GH promotes muscle protein synthesis, supports fat mobilization, and
        is essential for tissue repair. Leproult and Van Cauter demonstrated that
        just one week of sleep restriction (5 hours per night instead of 8) reduced
        daytime testosterone levels in young healthy men by 10-15% — equivalent to
        10-15 years of aging. Since both GH and testosterone are primary anabolic
        hormones driving muscle growth, chronic sleep deprivation directly impairs
        the body's capacity to build muscle, regardless of how optimal the training
        and nutrition program may be.
      </EvidenceBlock>

      <h3>Sleep Optimization for Muscle Growth</h3>

      <ExampleBlock title="Sleep Hygiene for Trainees">
        <ul>
          <li>
            <strong>Duration:</strong> Aim for 7-9 hours per night. 8 hours is optimal
            for most resistance trainees. Consistently sleeping less than 6 hours
            significantly impairs recovery and hormone profiles.
          </li>
          <li>
            <strong>Consistency:</strong> Go to bed and wake up at the same time daily,
            including weekends. Irregular sleep schedules disrupt circadian rhythm
            and reduce sleep quality even when duration is adequate.
          </li>
          <li>
            <strong>Pre-sleep nutrition:</strong> A casein-rich snack before bed
            (paneer, curd, milk, or casein protein powder) provides slow-releasing
            amino acids during the overnight fast, supporting MPS during the critical
            GH release window.
          </li>
          <li>
            <strong>Avoid screens 1 hour before bed:</strong> Blue light suppresses
            melatonin production, delaying sleep onset and reducing deep sleep
            duration.
          </li>
          <li>
            <strong>Cool environment:</strong> Optimal sleep temperature is 18-20
            degrees Celsius. A cooler room promotes deeper sleep and better GH
            release.
          </li>
          <li>
            <strong>Caffeine cutoff:</strong> No caffeine after 2 PM (earlier if you
            are sensitive). Caffeine has a half-life of 5-6 hours, meaning a 4 PM
            coffee still has 50% of its stimulant effect at 9-10 PM.
          </li>
          <li>
            <strong>Magnesium supplementation:</strong> 200-400mg of magnesium glycinate
            before bed may improve sleep quality, particularly if dietary intake is
            suboptimal (common in Indian diets low in green leafy vegetables and nuts).
          </li>
        </ul>
      </ExampleBlock>

      <WarningBlock title="Sleep Debt Cannot Be "Caught Up"">
        While a single night of poor sleep can be partially compensated by sleeping
        longer the next night, chronic sleep restriction (consistently sleeping 5-6
        hours) creates accumulated deficits in hormonal function, muscle recovery,
        and cognitive performance that cannot be fully reversed by weekend sleep-ins.
        Sleep is not a luxury for muscle growth — it is a non-negotiable requirement.
        No amount of protein or training optimization can compensate for chronic
        sleep deprivation.
      </WarningBlock>

      <h2>Nutrition Periodization with Training Phases</h2>

      <p>
        Training typically follows periodized cycles — phases that vary in intensity,
        volume, and focus. Nutrition should be aligned with these training phases to
        support the specific demands of each period.
      </p>

      <ExampleBlock title="Nutrition-Training Phase Alignment">
        <p><strong>Phase 1: Hypertrophy / Bulking Phase (12-20 weeks)</strong></p>
        <ul>
          <li>Training: High volume (15-20 sets/muscle/week), moderate intensity (65-80% 1RM)</li>
          <li>Nutrition: Caloric surplus of 300-500 kcal/day</li>
          <li>Protein: 1.6-2.0 g/kg/day</li>
          <li>Carbohydrates: 4-6 g/kg/day (to fuel high-volume training)</li>
          <li>Fat: 0.8-1.2 g/kg/day (for hormonal support)</li>
          <li>Goal: Maximize muscle growth while limiting fat gain</li>
        </ul>
        <p><strong>Phase 2: Strength Phase (6-8 weeks)</strong></p>
        <ul>
          <li>Training: Lower volume (10-15 sets/muscle/week), high intensity (80-90% 1RM)</li>
          <li>Nutrition: Maintenance calories or very slight surplus (+100-200 kcal)</li>
          <li>Protein: 1.8-2.2 g/kg/day (higher to support recovery from heavy loads)</li>
          <li>Carbohydrates: 3-5 g/kg/day</li>
          <li>Fat: 1.0-1.5 g/kg/day</li>
          <li>Goal: Consolidate muscle gains into functional strength</li>
        </ul>
        <p><strong>Phase 3: Deload / Recovery Week (1 week every 4-8 weeks)</strong></p>
        <ul>
          <li>Training: Reduced volume (50-60% of normal) and intensity</li>
          <li>Nutrition: Maintenance calories</li>
          <li>Protein: Maintain at 1.6 g/kg minimum</li>
          <li>Focus on recovery: sleep, micronutrient-dense foods, reduced stress</li>
          <li>Goal: Allow connective tissue and central nervous system to fully recover</li>
        </ul>
        <p><strong>Phase 4: Cutting Phase (8-12 weeks, if needed)</strong></p>
        <ul>
          <li>Training: Maintain intensity (weight on bar) but may reduce volume by 20-30%</li>
          <li>Nutrition: Caloric deficit of 300-500 kcal/day</li>
          <li>Protein: Increase to 2.0-2.4 g/kg/day (higher to preserve muscle during deficit)</li>
          <li>Carbohydrates: Reduce first (2-3 g/kg/day)</li>
          <li>Fat: Maintain at minimum 0.7 g/kg/day (do not drop lower for hormonal health)</li>
          <li>Goal: Remove fat gained during bulk while preserving maximum muscle mass</li>
        </ul>
      </ExampleBlock>

      <NoteBlock title="Nutrition on Training Days vs. Rest Days">
        <p>
          A practical approach for intermediate trainees is to differentiate
          nutrition between training and rest days:
        </p>
        <ul>
          <li>
            <strong>Training days:</strong> Higher calories (surplus of 400-500 kcal),
            higher carbohydrates (concentrated around the training session — before,
            during if needed, and after). This supports workout performance and
            post-training recovery.
          </li>
          <li>
            <strong>Rest days:</strong> Slightly lower calories (surplus of 100-200 kcal
            or maintenance), lower carbohydrates (body needs less glycogen
            replenishment), maintain protein at the same level.
          </li>
          <li>
            <strong>Protein stays constant:</strong> Muscle recovery and MPS continue
            on rest days — protein needs do not decrease when you are not training.
          </li>
          <li>
            This approach is called "calorie cycling" or "carb cycling" and helps
            minimize fat gain during a bulking phase by ensuring extra calories
            are available when the body is most primed to use them for growth.
          </li>
        </ul>
      </NoteBlock>

      <h2>Summary</h2>

      <NoteBlock title="Key Takeaways">
        <ol>
          <li>
            Caloric surplus without resistance training results in primarily fat gain.
            Training provides the signal; nutrition provides the materials.
          </li>
          <li>
            Progressive overload — systematically increasing training stress over
            time — is the fundamental driver of continued muscle growth. Without it,
            the body has no reason to build additional muscle.
          </li>
          <li>
            Aim for 10-20 working sets per muscle group per week, distributed across
            2-3 training sessions per muscle.
          </li>
          <li>
            Sleep 7-9 hours per night. 60-70% of growth hormone is released during
            deep sleep. One week of sleep restriction reduces testosterone by 10-15%.
          </li>
          <li>
            Align nutrition with training phases: surplus during hypertrophy, maintenance
            during strength, and deficit during cutting — with protein remaining high
            throughout.
          </li>
          <li>
            Consider calorie cycling: higher calories and carbohydrates on training
            days, slightly lower on rest days, to optimize nutrient partitioning.
          </li>
        </ol>
      </NoteBlock>

      <ReferenceList references={references} />
    </div>
  );
}
