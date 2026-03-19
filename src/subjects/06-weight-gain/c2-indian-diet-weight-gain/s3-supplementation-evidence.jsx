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
    id: 'jager2017',
    authors: 'Jäger R, Kerksick CM, Campbell BI, et al.',
    year: 2017,
    title: 'International Society of Sports Nutrition Position Stand: protein and exercise',
    journal: 'Journal of the International Society of Sports Nutrition',
    volume: '14',
    pages: '20',
    doi: '10.1186/s12970-017-0177-8'
  },
  {
    id: 'kreider2017',
    authors: 'Kreider RB, Kalman DS, Antonio J, et al.',
    year: 2017,
    title: 'International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine',
    journal: 'Journal of the International Society of Sports Nutrition',
    volume: '14',
    pages: '18',
    doi: '10.1186/s12970-017-0173-z'
  },
  {
    id: 'wankhede2015',
    authors: 'Wankhede S, Langade D, Joshi K, Sinha SR, Bhattacharyya S.',
    year: 2015,
    title: 'Examining the effect of Withania somnifera supplementation on muscle strength and recovery: a randomized controlled trial',
    journal: 'Journal of the International Society of Sports Nutrition',
    volume: '12',
    pages: '43',
    doi: '10.1186/s12970-015-0104-9'
  },
  {
    id: 'wolfe2017',
    authors: 'Wolfe RR.',
    year: 2017,
    title: 'Branched-chain amino acids and muscle protein synthesis in humans: myth or reality?',
    journal: 'Journal of the International Society of Sports Nutrition',
    volume: '14',
    pages: '30',
    doi: '10.1186/s12970-017-0184-9'
  },
  {
    id: 'buford2007',
    authors: 'Buford TW, Kreider RB, Stout JR, et al.',
    year: 2007,
    title: 'International Society of Sports Nutrition position stand: creatine supplementation and exercise',
    journal: 'Journal of the International Society of Sports Nutrition',
    volume: '4',
    pages: '6',
    doi: '10.1186/1550-2783-4-6'
  }
];

export default function SupplementationEvidence() {
  return (
    <div className="prose-health">
      <h1>Supplementation for Weight Gain: Evidence Review</h1>

      <p>
        The supplement industry generates billions of dollars annually by promising
        faster muscle gain, better recovery, and enhanced performance. The reality
        is far more modest: the vast majority of supplements have weak or no evidence
        supporting their claims, and the few that do work provide relatively small
        benefits on top of an already optimized nutrition and training program.
        Supplements are, by definition, supplementary — they complement but never
        replace a solid dietary foundation. This section provides an evidence-based
        review of the most commonly used supplements for weight and muscle gain,
        with clear verdicts on each.
      </p>

      <DefinitionBlock term="The Food-First Principle">
        The foundational approach in sports nutrition that prioritizes meeting all
        nutritional needs through whole foods before considering supplements.
        Supplements should only be used when: (1) a specific nutrient need cannot
        be practically met through food alone, (2) there is strong evidence for
        ergogenic benefit beyond what food provides, or (3) a diagnosed deficiency
        requires targeted supplementation. For the majority of individuals, an
        optimized whole-food diet provides everything needed for muscle growth.
      </DefinitionBlock>

      <h2>Evidence Tiers: Understanding Supplement Quality</h2>

      <ComparisonTable
        title="Supplement Evidence Tiers"
        headers={['Tier', 'Evidence Level', 'Supplements', 'Recommendation']}
        rows={[
          ['Tier 1: Strong evidence', 'Multiple meta-analyses, consistent RCTs', 'Whey protein, Creatine monohydrate, Caffeine', 'Recommended when appropriate'],
          ['Tier 2: Moderate evidence', 'Some RCTs, promising but not definitive', 'Ashwagandha, Vitamin D (if deficient), Beta-alanine', 'Consider based on individual needs'],
          ['Tier 3: Weak evidence', 'Limited studies, marketing exceeds data', 'BCAAs, Mass gainers, Glutamine, Testosterone boosters', 'Generally not recommended'],
          ['Tier 4: No evidence', 'No quality research, or research disproves claims', 'Most proprietary blends, "anabolic" supplements', 'Avoid — waste of money']
        ]}
      />

      <h2>Tier 1: Whey Protein — Strong Evidence</h2>

      <EvidenceBlock
        level="strong"
        source="Jäger et al. (2017) — ISSN Position Stand on protein and exercise"
      >
        The ISSN position stand, based on a comprehensive review of the literature,
        concludes that protein supplementation (primarily studied in the form of
        whey protein) significantly enhances resistance training-induced adaptations
        including muscle hypertrophy and strength when total daily protein intake
        is insufficient from food alone. The meta-analysis by Morton et al. (2018)
        found that protein supplementation increased fat-free mass gains by an
        average of 0.3 kg over 6-12 weeks of resistance training compared to
        placebo — a meaningful but modest effect. Importantly, the benefit was
        most pronounced in individuals whose habitual protein intake was below
        1.6 g/kg/day. Above this threshold, additional protein (whether from
        supplements or food) provided diminishing returns.
      </EvidenceBlock>

      <h3>Whey Protein: Practical Guide</h3>

      <ExampleBlock title="Whey Protein Usage and Selection">
        <p><strong>When to use whey protein:</strong></p>
        <ul>
          <li>You cannot meet your daily protein target (1.6-2.2 g/kg) through food alone</li>
          <li>You need a quick, convenient post-workout protein source</li>
          <li>You are vegetarian and struggle to get sufficient high-quality protein</li>
          <li>Your appetite is poor and liquid protein is easier to consume than solid food</li>
        </ul>
        <p><strong>When you do NOT need whey protein:</strong></p>
        <ul>
          <li>You already meet your protein target through food — adding whey on top
            does not provide additional muscle-building benefit</li>
          <li>Your diet includes sufficient eggs, chicken, fish, paneer, and dal to
            reach 1.6-2.2 g/kg</li>
        </ul>
        <p><strong>Choosing a whey product:</strong></p>
        <ul>
          <li><strong>Whey concentrate (WPC):</strong> 70-80% protein, affordable, mild
            taste. Good for most people. May cause mild bloating in lactose-sensitive
            individuals.</li>
          <li><strong>Whey isolate (WPI):</strong> 90%+ protein, more expensive, very low
            lactose. Better for lactose-intolerant individuals.</li>
          <li><strong>Dose:</strong> 25-40g per serving (1-1.5 scoops), 1-2 times daily as needed.</li>
          <li><strong>Indian context:</strong> Buy from reputable brands (check for FSSAI
            certification). Beware of counterfeit products — purchase only from
            authorized retailers.</li>
        </ul>
      </ExampleBlock>

      <NoteBlock title="Food vs. Whey: A Fair Comparison">
        <ul>
          <li>30g whey protein = ~120 kcal, 25g protein, ~1-2g fat</li>
          <li>100g chicken breast = ~165 kcal, 31g protein, ~3.6g fat</li>
          <li>100g paneer = ~265 kcal, 18g protein, ~21g fat</li>
          <li>200ml milk + 2 eggs = ~240 kcal, 19g protein, ~14g fat</li>
          <li>
            Whey is not superior to food protein for muscle building. It is simply
            more convenient, faster to consume, and lower in calories per gram of
            protein. If you can eat food instead, eat food.
          </li>
        </ul>
      </NoteBlock>

      <h2>Tier 1: Creatine Monohydrate — Very Strong Evidence</h2>

      <EvidenceBlock
        level="strong"
        source="Kreider et al. (2017) — ISSN Position Stand on creatine"
      >
        Creatine monohydrate is the most extensively studied and consistently
        effective sports supplement in existence. The ISSN position stand, based
        on over 500 peer-reviewed studies, concludes that creatine supplementation
        increases intramuscular creatine and phosphocreatine stores by 20-40%,
        which enhances the capacity for high-intensity exercise performance,
        leading to greater training adaptations over time. Meta-analyses
        consistently show that creatine supplementation increases lean body
        mass by 1-2 kg more than placebo over 4-12 weeks of resistance training.
        It also increases strength (bench press, squat) by 5-10% beyond
        training alone. Creatine has been deemed safe for long-term use in
        healthy individuals, with no evidence of kidney damage, liver damage,
        or other adverse effects in hundreds of studies spanning over 30 years.
      </EvidenceBlock>

      <h3>Creatine: Practical Guide</h3>

      <ExampleBlock title="Creatine Supplementation Protocol">
        <ul>
          <li>
            <strong>Form:</strong> Creatine monohydrate — the most studied and most
            cost-effective form. No other form (HCl, ethyl ester, buffered, etc.)
            has been shown to be superior despite higher prices.
          </li>
          <li>
            <strong>Dose:</strong> 3-5g per day, every day (training and rest days).
            This is the maintenance protocol and is sufficient for most individuals.
          </li>
          <li>
            <strong>Loading protocol (optional):</strong> 20g per day (4 doses of 5g)
            for 5-7 days, then 3-5g daily maintenance. Loading saturates stores
            faster (within a week vs 3-4 weeks with maintenance dosing alone).
            Not required but speeds up the time to feel effects.
          </li>
          <li>
            <strong>Timing:</strong> Does not matter significantly. Take it whenever
            is most convenient and consistent. Many people add it to their post-workout
            shake or morning beverage.
          </li>
          <li>
            <strong>Water retention:</strong> Creatine causes an initial weight gain
            of 1-3 kg from increased intracellular water retention. This is not fat
            gain and is actually beneficial (contributes to the cell-swelling
            stimulus for hypertrophy).
          </li>
          <li>
            <strong>Cost:</strong> Creatine monohydrate is extremely affordable —
            approximately Rs 500-800 for 100 servings (a 3-month supply). It is
            one of the best value-for-money supplements available.
          </li>
        </ul>
      </ExampleBlock>

      <WarningBlock title="Creatine Safety">
        Creatine monohydrate at recommended doses (3-5g/day) has been extensively
        studied for safety in healthy individuals and found to cause no kidney
        damage, liver damage, dehydration, or muscle cramping — all commonly cited
        but evidence-free concerns. However, individuals with pre-existing chronic
        kidney disease should consult their nephrologist before supplementing, as
        creatine metabolism increases creatinine (a marker used to estimate kidney
        function), which may confound medical monitoring. Stay well-hydrated
        (3+ liters/day) when supplementing with creatine.
      </WarningBlock>

      <h2>Tier 3: BCAAs — Largely Unnecessary</h2>

      <EvidenceBlock
        level="weak"
        source="Wolfe (2017) — Review of BCAA evidence"
      >
        Robert Wolfe's comprehensive review of BCAA supplementation concluded that
        the claim that BCAAs (leucine, isoleucine, valine) stimulate muscle protein
        synthesis is theoretically unfounded and not supported by human data when
        total protein intake is adequate. The key finding: BCAAs alone cannot
        stimulate MPS because muscle protein synthesis requires ALL essential amino
        acids, not just three. BCAAs in isolation may actually increase muscle
        protein breakdown to liberate the other essential amino acids needed for
        synthesis, producing a net catabolic rather than anabolic effect. When
        total daily protein intake meets the 1.6-2.2 g/kg target, supplemental
        BCAAs provide zero additional benefit — you are already consuming far
        more BCAAs through whole protein than a BCAA supplement provides.
      </EvidenceBlock>

      <NoteBlock title="When BCAAs Might Have Limited Value">
        The only scenarios where BCAAs may provide marginal benefit:
        <ul>
          <li>Training in a completely fasted state (rare and not recommended for
            muscle building)</li>
          <li>Severely calorie-restricted individuals unable to consume adequate
            protein (VLCD/PSMF — medical supervision scenarios)</li>
          <li>Individuals with specific medical conditions affecting protein
            metabolism (under medical guidance)</li>
        </ul>
        For anyone eating a normal diet with 1.6+ g/kg protein, BCAAs are an
        unnecessary expense. A glass of milk or a couple of eggs provides more
        complete nutrition at a fraction of the cost.
      </NoteBlock>

      <h2>Tier 3: Mass Gainers — Not Recommended</h2>

      <p>
        Mass gainers are high-calorie powder supplements that typically provide
        500-1,200 kcal per serving, primarily from maltodextrin (a rapidly
        absorbed processed carbohydrate), with modest amounts of protein (30-50g)
        and sometimes added fats. They are marketed to hardgainers as an easy
        way to increase caloric intake.
      </p>

      <WarningBlock title="Why Mass Gainers Are a Poor Choice">
        <ul>
          <li>
            <strong>Mostly sugar/maltodextrin:</strong> A typical mass gainer serving
            derives 60-70% of its calories from maltodextrin — essentially
            liquid sugar. This spikes blood glucose, promotes fat storage, and
            provides no nutritional benefit that whole foods do not provide better.
          </li>
          <li>
            <strong>Poor protein quality per calorie:</strong> You pay for 1,000 kcal
            but only receive 30-50g of protein. A homemade shake (milk + banana +
            oats + peanut butter + whey) provides similar calories with more protein,
            better micronutrients, more fiber, and healthier fats.
          </li>
          <li>
            <strong>Expensive:</strong> Mass gainers cost 2-3 times more per serving
            than combining whey protein with real food.
          </li>
          <li>
            <strong>Digestive issues:</strong> The large bolus of maltodextrin commonly
            causes bloating, gas, and gastrointestinal discomfort.
          </li>
          <li>
            <strong>Promotes fat gain:</strong> The calorie composition (high sugar,
            moderate protein) is the worst possible ratio for lean mass gain — it
            preferentially promotes fat storage.
          </li>
        </ul>
      </WarningBlock>

      <ExampleBlock title="Homemade Mass Gainer vs. Commercial Product">
        <p><strong>Homemade shake (5 minutes, ~Rs 50-80):</strong></p>
        <ul>
          <li>Full cream milk — 300ml (200 kcal, 10g protein)</li>
          <li>Banana — 1 large (105 kcal)</li>
          <li>Oats — 40g (150 kcal, 5g protein)</li>
          <li>Peanut butter — 2 tbsp (188 kcal, 8g protein)</li>
          <li>Whey protein — 1 scoop (120 kcal, 25g protein)</li>
          <li><strong>Total: ~763 kcal, 48g protein, whole food nutrition, healthy fats, fiber</strong></li>
        </ul>
        <p><strong>Commercial mass gainer (1 serving, ~Rs 100-150):</strong></p>
        <ul>
          <li>Maltodextrin, whey protein, added vitamins</li>
          <li><strong>Total: ~750 kcal, 30g protein, mostly processed sugar, no fiber</strong></li>
        </ul>
        <p>
          The homemade version provides 60% more protein, whole-food micronutrients,
          fiber, and healthy fats — at half the cost. There is no scenario where a
          commercial mass gainer is the better choice.
        </p>
      </ExampleBlock>

      <h2>Tier 2: Ashwagandha — Moderate Evidence</h2>

      <EvidenceBlock
        level="moderate"
        source="Wankhede et al. (2015) — RCT on ashwagandha and muscle strength"
      >
        A randomized, double-blind, placebo-controlled trial by Wankhede and
        colleagues examined the effect of ashwagandha root extract (KSM-66,
        600mg/day) on muscle strength and recovery in 57 young male subjects
        engaged in resistance training for 8 weeks. The ashwagandha group showed
        significantly greater increases in muscle strength (bench press: 44 kg vs
        26 kg increase; leg extension: 14 kg vs 9 kg increase), greater muscle
        size (arm: 8.6 cm2 vs 5.3 cm2 increase; chest: 3.3 cm vs 1.4 cm), a
        greater reduction in exercise-induced muscle damage (creatine kinase
        levels), a greater reduction in body fat percentage (3.5% vs 1.5%),
        and significantly higher testosterone levels compared to placebo. While
        these results are promising, the study was relatively small, and
        replication in larger, independent trials is needed before ashwagandha
        can be placed in the same evidence tier as creatine.
      </EvidenceBlock>

      <NoteBlock title="Ashwagandha: Practical Considerations">
        <ul>
          <li>
            <strong>Form:</strong> KSM-66 or Sensoril root extracts are the most
            studied forms. Generic ashwagandha powder may vary in active compound
            concentration.
          </li>
          <li>
            <strong>Dose:</strong> 300-600mg of standardized root extract per day,
            typically taken with meals.
          </li>
          <li>
            <strong>Timeline:</strong> Effects on strength and body composition emerge
            after 4-8 weeks of consistent supplementation.
          </li>
          <li>
            <strong>Additional benefits:</strong> Strong evidence for reducing cortisol
            (stress hormone) by 14-28% and improving subjective stress, sleep quality,
            and anxiety. These benefits may indirectly support muscle growth through
            improved recovery and hormonal environment.
          </li>
          <li>
            <strong>Indian context:</strong> Ashwagandha (Withania somnifera) has been
            used in Ayurvedic medicine for centuries. Modern standardized extracts
            provide consistent dosing that traditional preparations may lack.
          </li>
          <li>
            <strong>Caution:</strong> May interact with thyroid medication (can increase
            thyroid hormone levels). Consult physician if you have thyroid conditions.
          </li>
        </ul>
      </NoteBlock>

      <h2>Tier 2: Multivitamins — Only If Deficient</h2>

      <p>
        Multivitamin supplementation is frequently recommended as "insurance"
        but provides benefit primarily for individuals with documented or
        likely deficiencies. For people consuming a varied diet meeting
        caloric needs, most micronutrient requirements are met through food.
      </p>

      <ExampleBlock title="Common Deficiencies in Indian Populations">
        <ul>
          <li>
            <strong>Vitamin D:</strong> Extremely common in India despite abundant
            sunlight. Estimated 70-90% prevalence of deficiency. Supplementation
            of 1,000-2,000 IU daily is recommended if blood levels are below 30
            ng/mL. Vitamin D supports testosterone production and muscle function.
          </li>
          <li>
            <strong>Vitamin B12:</strong> Very common in vegetarians (up to 80%
            deficiency rate). B12 is found only in animal products. All vegetarians
            and vegans should supplement with 250-1,000 mcg daily or get regular
            injections.
          </li>
          <li>
            <strong>Iron:</strong> Common in vegetarians and menstruating women.
            Supplement only if diagnosed deficient — excess iron supplementation
            is harmful. Enhance dietary absorption by pairing iron-rich foods
            (spinach, lentils, ragi) with vitamin C sources (lemon, amla).
          </li>
          <li>
            <strong>Zinc:</strong> Important for testosterone production and immune
            function. Vegetarians may have lower zinc status due to phytate
            interference with absorption. If deficient, 15-30mg daily.
          </li>
          <li>
            <strong>Omega-3 fatty acids:</strong> Indian diets are typically very
            low in omega-3s. Fish eaters get adequate amounts from 2-3 servings
            of fatty fish per week. Vegetarians should consider algae-based
            omega-3 supplements (250-500mg DHA+EPA daily).
          </li>
        </ul>
      </ExampleBlock>

      <WarningBlock title="Get Tested Before Supplementing">
        Rather than taking a generic multivitamin "just in case," get blood
        work done for vitamin D, B12, iron (ferritin), and other markers your
        physician recommends. Targeted supplementation of documented deficiencies
        is more effective and safer than broad-spectrum megadose multivitamins.
        Some nutrients (iron, vitamin A, vitamin E) can be harmful in excess.
        Test, do not guess.
      </WarningBlock>

      <h2>Supplement Summary Table</h2>

      <ComparisonTable
        title="Complete Supplement Verdict for Weight/Muscle Gain"
        headers={['Supplement', 'Evidence', 'Effective Dose', 'Cost-Effectiveness', 'Verdict']}
        rows={[
          ['Whey protein', 'Strong', '25-40g/serving', 'High', 'Use if food protein is insufficient'],
          ['Creatine monohydrate', 'Very strong', '3-5g/day', 'Very high', 'Recommended for all trainees'],
          ['Caffeine', 'Strong', '3-6mg/kg pre-workout', 'Very high', 'Effective ergogenic aid (coffee works)'],
          ['Ashwagandha (KSM-66)', 'Moderate', '300-600mg/day', 'Moderate', 'Consider for stress + mild strength benefit'],
          ['Vitamin D', 'Strong (if deficient)', '1000-2000 IU/day', 'Very high', 'Test levels; supplement if below 30 ng/mL'],
          ['Vitamin B12', 'Strong (vegetarians)', '250-1000 mcg/day', 'Very high', 'Essential for all vegetarians'],
          ['BCAAs', 'Weak', 'N/A', 'Very low', 'Unnecessary if protein intake is adequate'],
          ['Mass gainers', 'None', 'N/A', 'Very low', 'Not recommended — use real food instead'],
          ['Glutamine', 'Weak', 'N/A', 'Low', 'No benefit when protein intake is adequate'],
          ['Testosterone boosters', 'None', 'N/A', 'Very low', 'No legal OTC supplement meaningfully raises T']
        ]}
      />

      <h2>Summary</h2>

      <NoteBlock title="Key Takeaways">
        <ol>
          <li>
            <strong>Food first, always.</strong> Supplements cannot compensate for a
            poor diet. Optimize your whole-food nutrition before spending money on
            supplements.
          </li>
          <li>
            <strong>Whey protein</strong> is useful when you cannot meet protein targets
            through food. It is a convenient tool, not a magical muscle builder.
          </li>
          <li>
            <strong>Creatine monohydrate</strong> is the single most effective and
            well-studied supplement for muscle and strength gain. 3-5g daily, every
            day. Safe, cheap, effective.
          </li>
          <li>
            <strong>BCAAs are unnecessary</strong> if total protein intake is adequate
            (1.6+ g/kg/day). Save your money.
          </li>
          <li>
            <strong>Mass gainers are overpriced maltodextrin.</strong> A homemade shake
            with milk, oats, banana, peanut butter, and whey is superior in every way.
          </li>
          <li>
            <strong>Ashwagandha</strong> shows moderate promise for strength and
            recovery, with strong evidence for stress reduction. Consider if you
            are chronically stressed.
          </li>
          <li>
            <strong>Get blood work done</strong> for vitamin D, B12, iron, and zinc
            before supplementing. Target deficiencies specifically rather than
            taking generic multivitamins.
          </li>
        </ol>
      </NoteBlock>

      <ReferenceList references={references} />
    </div>
  );
}
