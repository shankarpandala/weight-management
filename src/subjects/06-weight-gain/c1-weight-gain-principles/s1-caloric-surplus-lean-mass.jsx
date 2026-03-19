import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

const references = [
  {
    id: 'garthe2013',
    authors: 'Garthe I, Raastad T, Refsnes PE, Sundgot-Borgen J.',
    year: 2013,
    title: 'Effect of nutritional intervention on body composition and performance in elite athletes',
    journal: 'European Journal of Sport Science',
    volume: '13(3)',
    pages: '295-303',
    doi: '10.1080/17461391.2011.643923'
  },
  {
    id: 'slater2011',
    authors: 'Slater G, Phillips SM.',
    year: 2011,
    title: 'Nutrition guidelines for strength sports: sprinting, weightlifting, throwing events, and bodybuilding',
    journal: 'Journal of Sports Sciences',
    volume: '29(Suppl 1)',
    pages: 'S67-S77',
    doi: '10.1080/02640414.2011.574722'
  },
  {
    id: 'iraki2019',
    authors: 'Iraki J, Fitschen P, Espinar S, Helms E.',
    year: 2019,
    title: 'Nutrition recommendations for bodybuilders in the off-season: a narrative review',
    journal: 'Sports',
    volume: '7(7)',
    pages: '154',
    doi: '10.3390/sports7070154'
  },
  {
    id: 'ribeiro2022',
    authors: 'Ribeiro AS, Nunes JP, Schoenfeld BJ, et al.',
    year: 2022,
    title: 'Effects of different dietary energy intake following resistance training on muscle mass and body fat in bodybuilders: a pilot study',
    journal: 'Journal of Human Kinetics',
    volume: '81',
    pages: '217-226',
    doi: '10.2478/hukin-2022-0017'
  },
  {
    id: 'leaf2017',
    authors: 'Leaf A, Antonio J.',
    year: 2017,
    title: 'The effects of overfeeding on body composition: the role of macronutrient composition',
    journal: 'International Journal of Exercise Science',
    volume: '10(8)',
    pages: '1275-1296'
  }
];

export default function CaloricSurplusLeanMass() {
  return (
    <div className="prose-health">
      <h1>Caloric Surplus Strategies for Lean Muscle Gain</h1>

      <p>
        Building muscle requires an anabolic environment — one where the body
        has sufficient energy and building materials to synthesize new tissue.
        While resistance training provides the stimulus for muscle growth, a
        caloric surplus provides the energy and raw materials. However, the
        magnitude of that surplus profoundly determines the ratio of muscle to
        fat gained. This section examines the evidence for optimal surplus
        levels, compares lean and aggressive bulking approaches, and provides
        practical guidance for maximizing muscle gain while minimizing
        unnecessary fat accumulation.
      </p>

      <h2>The Optimal Surplus: 300-500 kcal/day</h2>

      <DefinitionBlock term="Lean Bulk / Clean Bulk">
        A controlled caloric surplus of approximately 10-20% above maintenance
        energy expenditure (typically 300-500 kcal/day for most individuals),
        combined with progressive resistance training and adequate protein
        intake. The goal is to provide sufficient energy for muscle protein
        synthesis while limiting excess energy that would be stored as body
        fat. This approach prioritizes body composition quality over rapid
        scale weight increase.
      </DefinitionBlock>

      <EvidenceBlock
        level="moderate"
        source="Garthe et al. (2013) — Lean vs. aggressive surplus in athletes"
      >
        Garthe and colleagues studied elite athletes during a 12-week period
        comparing a moderate energy surplus (~500 kcal/day) to a larger surplus
        (~800+ kcal/day) during resistance training. Both groups gained similar
        amounts of lean body mass (approximately 1.7 kg over 12 weeks). However,
        the large surplus group gained significantly more fat mass (1.1 kg vs
        0.2 kg). This demonstrates a critical principle: beyond a certain
        threshold, additional calories do not accelerate muscle growth — they
        simply accelerate fat storage. The body has a finite rate at which it
        can synthesize muscle tissue, and excess energy above this requirement
        is stored as fat.
      </EvidenceBlock>

      <h3>Why 300-500 kcal Is the Sweet Spot</h3>

      <p>
        The rate of muscle protein synthesis is limited by biological factors
        including hormonal milieu, training stimulus, protein availability, and
        genetic ceiling. For most natural (non-enhanced) trainees, the maximum
        rate of muscle gain is approximately 200-400g per week for beginners,
        declining to 100-200g per week for intermediates and 50-100g per week
        for advanced lifters. Building 200-400g of muscle per week requires
        approximately 200-400 kcal per day above the energy cost of maintaining
        current body mass. Adding a small buffer for increased training
        expenditure and the thermic effect of food yields the 300-500 kcal
        recommendation.
      </p>

      <ExampleBlock title="Calculating Your Lean Bulk Calories">
        <ol>
          <li>
            <strong>Estimate maintenance calories:</strong> Body weight (kg) x 33-35
            kcal for moderately active individuals. Example: 70 kg x 34 = 2,380 kcal.
          </li>
          <li>
            <strong>Add training expenditure:</strong> Resistance training burns
            approximately 200-400 kcal per session. On training days, add this. On
            rest days, do not.
          </li>
          <li>
            <strong>Add surplus:</strong> 300 kcal/day for beginners with higher
            muscle-building potential. 200-300 kcal/day for intermediates with
            slower potential gains.
          </li>
          <li>
            <strong>Result for 70 kg beginner:</strong> 2,380 + 300 = 2,680 kcal on
            rest days; 2,680 + 300 (training) = 2,980 kcal on training days.
          </li>
          <li>
            <strong>Monitor and adjust:</strong> If gaining more than 0.5 kg per week,
            the surplus is too large (mostly fat gain). If gaining less than 0.25 kg
            per week, increase slightly.
          </li>
        </ol>
      </ExampleBlock>

      <h2>Clean Bulk vs. Dirty Bulk</h2>

      <DefinitionBlock term="Dirty Bulk">
        An approach to weight gain that prioritizes caloric quantity over food
        quality, involving aggressive caloric surpluses (often 1,000+ kcal/day
        above maintenance) with little regard for macronutrient composition or
        food sources. Typically involves fast food, excessive processed foods,
        and "eating everything in sight." While this approach produces rapid
        scale weight gain, the majority of weight gained is fat rather than
        muscle.
      </DefinitionBlock>

      <EvidenceBlock
        level="moderate"
        source="Leaf & Antonio (2017); Iraki et al. (2019)"
      >
        Research on overfeeding consistently demonstrates that aggressive caloric
        surpluses beyond 500 kcal/day above maintenance produce diminishing
        returns for muscle growth while progressively increasing fat gain. Leaf
        and Antonio reviewed the effects of overfeeding on body composition and
        found that while protein overfeeding resulted in less fat gain than
        carbohydrate or fat overfeeding (due to higher thermic effect), all
        forms of aggressive overfeeding resulted in significant fat accumulation.
        The Iraki et al. (2019) narrative review for bodybuilders concluded that
        a surplus of 10-20% above maintenance (approximately 300-500 kcal) is
        optimal for the off-season bulking phase to maximize the lean-to-fat
        gain ratio.
      </EvidenceBlock>

      <h3>The Problem with Dirty Bulking</h3>

      <ExampleBlock title="Dirty Bulk vs. Lean Bulk: A 16-Week Comparison">
        <p><strong>Scenario A: Dirty bulk (1,000+ kcal surplus)</strong></p>
        <ul>
          <li>Total weight gained: 8-10 kg in 16 weeks</li>
          <li>Of which muscle: ~2-3 kg (20-30% of total gain)</li>
          <li>Of which fat: ~5-7 kg (70-80% of total gain)</li>
          <li>Subsequent cut required: 10-14 weeks of dieting to remove excess fat</li>
          <li>Net muscle gain after cut: ~1.5-2 kg (some muscle lost during cut)</li>
          <li>Total time investment: 26-30 weeks for ~1.5-2 kg net muscle</li>
        </ul>
        <p><strong>Scenario B: Lean bulk (300-500 kcal surplus)</strong></p>
        <ul>
          <li>Total weight gained: 3-5 kg in 16 weeks</li>
          <li>Of which muscle: ~2-3 kg (50-70% of total gain)</li>
          <li>Of which fat: ~1-2 kg (30-50% of total gain)</li>
          <li>Subsequent cut required: 3-5 weeks (minimal fat to remove)</li>
          <li>Net muscle gain after cut: ~2-2.5 kg (less muscle lost in shorter cut)</li>
          <li>Total time investment: 19-21 weeks for ~2-2.5 kg net muscle</li>
        </ul>
        <p>
          The lean bulk produces equal or better net muscle gain in less total time
          because it avoids the extended cutting phase that dirty bulking necessitates.
        </p>
      </ExampleBlock>

      <WarningBlock title="Health Risks of Excessive Surplus">
        Beyond the body composition disadvantages, dirty bulking poses genuine
        health risks. Aggressive caloric surplus — particularly from processed
        foods — increases visceral fat accumulation, elevates blood lipids and
        fasting glucose, promotes insulin resistance, increases systemic
        inflammation, and can establish unhealthy eating patterns that persist
        beyond the bulking phase. For individuals with a family history of
        diabetes or cardiovascular disease, dirty bulking is particularly
        inadvisable.
      </WarningBlock>

      <h2>Ectomorph and Hardgainer Considerations</h2>

      <p>
        Some individuals genuinely struggle to gain weight despite apparent effort.
        While the "ectomorph" body type classification lacks strong scientific
        support as a fixed genetic category, it is true that individuals vary
        in their basal metabolic rate, NEAT response to overfeeding, appetite
        regulation, and digestive efficiency. For those who find gaining weight
        difficult, several specific strategies can help.
      </p>

      <NoteBlock title="Why Some People Struggle to Gain Weight">
        <ul>
          <li>
            <strong>High NEAT response:</strong> Some individuals unconsciously
            increase non-exercise activity (fidgeting, standing, walking) when
            overfed, burning off a significant portion of the surplus without
            awareness. Studies show NEAT can vary by up to 700 kcal/day between
            individuals in response to overfeeding.
          </li>
          <li>
            <strong>Low appetite:</strong> Appetite is hormonally regulated, and some
            people have naturally lower levels of ghrelin (hunger hormone) or higher
            sensitivity to satiety signals, making it physically uncomfortable to
            eat large volumes of food.
          </li>
          <li>
            <strong>High basal metabolic rate:</strong> Variation of 10-15% around
            predicted values is normal. A 70 kg individual might have a BMR of 1,500
            or 1,800 kcal depending on genetics and body composition.
          </li>
          <li>
            <strong>Overestimation of intake:</strong> The most common reason.
            Self-reported "I eat so much but can't gain weight" frequently does not
            survive a week of accurate food tracking. Track everything for one week
            before concluding you are a hardgainer.
          </li>
        </ul>
      </NoteBlock>

      <ExampleBlock title="Practical Strategies for Hardgainers">
        <ul>
          <li>
            <strong>Track calories for real:</strong> Weigh food and log everything
            for 2 weeks. Most "hardgainers" discover they eat less than they think.
          </li>
          <li>
            <strong>Eat more frequently:</strong> If three large meals feel
            overwhelming, eat 4-5 moderate meals plus snacks. More eating occasions
            can increase total daily intake without requiring larger portions.
          </li>
          <li>
            <strong>Increase caloric density:</strong> Add olive oil or ghee to
            rice and dal (1 tbsp = 120 kcal). Use whole milk instead of skim. Add
            peanut butter to smoothies. Choose fattier cuts of meat. These changes
            add calories without adding volume.
          </li>
          <li>
            <strong>Liquid calories:</strong> Smoothies and shakes are less satiating
            than solid food. A shake with milk, banana, oats, peanut butter, and
            protein powder can provide 500-700 kcal and be consumed in minutes.
          </li>
          <li>
            <strong>Eat before bed:</strong> An additional meal or snack before sleep
            (e.g., casein protein with milk, or curd with nuts) adds calories during
            the longest fasting period.
          </li>
          <li>
            <strong>Gradual increase:</strong> Add 200 kcal per week until the scale
            starts moving at the desired rate (0.25-0.5 kg per week).
          </li>
        </ul>
      </ExampleBlock>

      <h2>Realistic Rates of Muscle Gain</h2>

      <EvidenceBlock
        level="moderate"
        source="Slater & Phillips (2011); Multiple longitudinal training studies"
      >
        Naturalistic estimates of muscle gain potential, synthesized from multiple
        longitudinal training studies and expert consensus, suggest the following
        monthly rates for natural (drug-free) trainees performing optimal resistance
        training with adequate nutrition: beginners (first year) may gain 0.7-1.0
        kg of muscle per month; intermediates (1-3 years of training) may gain
        0.25-0.5 kg per month; advanced trainees (3+ years) may gain 0.1-0.25 kg
        per month. These rates assume optimal training, nutrition, sleep, and
        recovery. Real-world rates are often lower due to suboptimal adherence
        to one or more of these factors.
      </EvidenceBlock>

      <ExampleBlock title="Monthly Muscle Gain Expectations by Training Level">
        <ul>
          <li>
            <strong>Beginner (0-1 year of serious training):</strong> 0.7-1.0 kg/month.
            This is the "newbie gains" period where the body responds rapidly to a
            novel training stimulus. A 500 kcal surplus is appropriate.
          </li>
          <li>
            <strong>Intermediate (1-3 years):</strong> 0.25-0.5 kg/month. Progress
            slows significantly. A 300-400 kcal surplus is sufficient — larger
            surpluses add fat without accelerating muscle growth.
          </li>
          <li>
            <strong>Advanced (3-5+ years):</strong> 0.1-0.25 kg/month. Gains are
            extremely slow. A 200-300 kcal surplus is adequate. Advanced trainees
            often benefit from body recomposition (maintenance calories) rather than
            traditional bulking.
          </li>
          <li>
            <strong>Genetic ceiling:</strong> Most natural trainees can gain a total
            of 15-25 kg of muscle over their training career (depending on frame
            size, hormonal profile, and genetics). Approaching this ceiling, gains
            slow to near-zero regardless of nutrition or training.
          </li>
        </ul>
      </ExampleBlock>

      <h2>Tracking Progress: Beyond the Scale</h2>

      <p>
        During a lean bulk, the scale should increase slowly and steadily (0.25-0.5
        kg per week). However, the scale alone cannot distinguish between muscle,
        fat, water, and glycogen changes. A comprehensive tracking approach provides
        much better insight into body composition changes.
      </p>

      <NoteBlock title="The Three-Method Progress Tracking System">
        <ul>
          <li>
            <strong>Scale weight (daily, weekly average):</strong> Weigh yourself
            every morning under consistent conditions (after waking, after using the
            bathroom, before eating or drinking). Calculate the weekly average — this
            smooths out daily fluctuations from water, sodium, and glycogen. The
            weekly average should increase by 0.25-0.5 kg during a lean bulk.
          </li>
          <li>
            <strong>Body measurements (bi-weekly):</strong> Measure chest, arms (flexed
            and relaxed), waist, hips, and thighs every 2 weeks at the same time of
            day. During an effective lean bulk, chest and arm measurements should
            increase while waist measurement stays relatively stable. If waist is
            increasing proportionally to other measurements, too much fat is being
            gained.
          </li>
          <li>
            <strong>Progress photos (monthly):</strong> Take front, side, and back
            photos in consistent lighting, clothing, and time of day. Photos capture
            visual changes that measurements and scale weight miss. Compare photos
            month-over-month, not week-over-week.
          </li>
        </ul>
      </NoteBlock>

      <WarningBlock title="When to End the Bulk">
        Consider transitioning from bulking to either maintenance or a cutting
        phase when: body fat percentage exceeds approximately 15-17% for men or
        25-27% for women (beyond these levels, nutrient partitioning worsens
        and insulin sensitivity declines, meaning a greater proportion of
        surplus calories will be stored as fat rather than directed to muscle);
        waist measurement has increased by more than 5-7 cm from its leanest
        point; or the visual changes in progress photos show significant fat
        accumulation. Bulking phases typically last 3-6 months before a
        maintenance or cutting phase.
      </WarningBlock>

      <h2>Summary</h2>

      <NoteBlock title="Key Takeaways">
        <ol>
          <li>
            A caloric surplus of 300-500 kcal/day above maintenance is optimal for
            lean muscle gain. Larger surpluses do not accelerate muscle growth —
            they only accelerate fat gain.
          </li>
          <li>
            Dirty bulking is inefficient. The net muscle gain after accounting for
            the required fat-loss phase is equal or inferior to lean bulking, while
            taking more total time and carrying health risks.
          </li>
          <li>
            Hardgainers should track calories precisely, increase meal frequency,
            focus on calorie-dense foods, and use liquid calories before assuming
            they have abnormally high caloric needs.
          </li>
          <li>
            Realistic muscle gain rates are 0.5-1 kg/month for beginners, declining
            to 0.1-0.25 kg/month for advanced trainees. Adjust expectations and
            surplus accordingly.
          </li>
          <li>
            Track progress using scale weight (weekly average), body measurements
            (bi-weekly), and progress photos (monthly). No single metric tells the
            whole story.
          </li>
        </ol>
      </NoteBlock>

      <ReferenceList references={references} />
    </div>
  );
}
