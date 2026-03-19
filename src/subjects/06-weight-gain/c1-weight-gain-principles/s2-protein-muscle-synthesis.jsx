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
    id: 'schoenfeld2018',
    authors: 'Schoenfeld BJ, Aragon AA.',
    year: 2018,
    title: 'How much protein can the body use in a single meal for muscle-building? Implications for daily protein distribution',
    journal: 'Journal of the International Society of Sports Nutrition',
    volume: '15(1)',
    pages: '10',
    doi: '10.1186/s12970-018-0215-1'
  },
  {
    id: 'morton2018',
    authors: 'Morton RW, Murphy KT, McKellar SR, et al.',
    year: 2018,
    title: 'A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength in healthy adults',
    journal: 'British Journal of Sports Medicine',
    volume: '52(6)',
    pages: '376-384',
    doi: '10.1136/bjsports-2017-097608'
  },
  {
    id: 'phillips2012',
    authors: 'Phillips SM.',
    year: 2012,
    title: 'Dietary protein requirements and adaptive advantages in athletes',
    journal: 'British Journal of Nutrition',
    volume: '108(Suppl 2)',
    pages: 'S158-S167',
    doi: '10.1017/S0007114512002516'
  },
  {
    id: 'vanvliet2015',
    authors: 'van Vliet S, Burd NA, van Loon LJ.',
    year: 2015,
    title: 'The skeletal muscle anabolic response to plant- versus animal-based protein consumption',
    journal: 'Journal of Nutrition',
    volume: '145(9)',
    pages: '1981-1991',
    doi: '10.3945/jn.114.204305'
  },
  {
    id: 'jager2017',
    authors: 'Jäger R, Kerksick CM, Campbell BI, et al.',
    year: 2017,
    title: 'International Society of Sports Nutrition Position Stand: protein and exercise',
    journal: 'Journal of the International Society of Sports Nutrition',
    volume: '14',
    pages: '20',
    doi: '10.1186/s12970-017-0177-8'
  }
];

export default function ProteinMuscleSynthesis() {
  return (
    <div className="prose-health">
      <h1>Protein and Muscle Protein Synthesis</h1>

      <p>
        Protein is the most critical macronutrient for muscle growth. While
        carbohydrates provide energy and fats support hormonal function, protein
        provides the amino acid building blocks from which new muscle tissue is
        literally constructed. Understanding how muscle protein synthesis works —
        the leucine threshold, optimal per-meal doses, total daily requirements,
        timing considerations, and protein source quality — is essential for
        maximizing the muscle-building response to resistance training.
      </p>

      <h2>Muscle Protein Synthesis (MPS) Basics</h2>

      <DefinitionBlock term="Muscle Protein Synthesis (MPS)">
        The metabolic process by which the body incorporates amino acids into
        skeletal muscle protein, resulting in muscle repair and growth. MPS is
        stimulated by two primary signals: mechanical tension from resistance
        training and amino acid availability from protein consumption. The
        balance between MPS and muscle protein breakdown (MPB) determines
        whether muscle is gained (net positive), maintained (balanced), or
        lost (net negative). A sustained positive MPS-MPB balance — achieved
        through training combined with adequate protein and energy — is
        required for hypertrophy.
      </DefinitionBlock>

      <p>
        After a resistance training session, MPS is elevated for approximately
        24-48 hours (longer in beginners, shorter in advanced trainees). During
        this window, the muscle is primed to incorporate dietary amino acids into
        new contractile proteins. Consuming protein during this elevated MPS
        period maximizes the anabolic response. This is why protein distribution
        throughout the day — not just total daily intake — matters for muscle
        growth.
      </p>

      <h2>The Leucine Threshold</h2>

      <DefinitionBlock term="Leucine Threshold">
        The minimum amount of the branched-chain amino acid leucine required per
        meal to maximally stimulate muscle protein synthesis through activation of
        the mTORC1 (mechanistic target of rapamycin complex 1) signaling pathway.
        This threshold is approximately 2-3g of leucine per eating occasion in
        young adults, and may be higher (3-4g) in older adults due to anabolic
        resistance. Reaching this threshold is necessary to "switch on" the full
        MPS response; subthreshold leucine intake produces a diminished anabolic
        signal.
      </DefinitionBlock>

      <ExampleBlock title="Leucine Content of Common Protein Sources">
        <ul>
          <li><strong>Whey protein (25g serving):</strong> ~2.7g leucine — exceeds threshold easily</li>
          <li><strong>Chicken breast (100g):</strong> ~2.5g leucine</li>
          <li><strong>Eggs (3 whole):</strong> ~2.1g leucine</li>
          <li><strong>Paneer (100g):</strong> ~1.8g leucine</li>
          <li><strong>Fish (100g):</strong> ~2.0g leucine</li>
          <li><strong>Toor dal (100g cooked):</strong> ~0.5g leucine — needs larger serving</li>
          <li><strong>Milk (250ml):</strong> ~0.8g leucine — needs combination with other sources</li>
          <li><strong>Soya chunks (30g dry):</strong> ~1.2g leucine</li>
          <li><strong>Rice + dal combination (typical serving):</strong> ~1.0-1.5g leucine</li>
        </ul>
        <p>
          Note: Most single-source vegetarian foods do not reach the leucine
          threshold in typical serving sizes. Combining multiple protein sources
          (dal + curd + paneer, or soya + nuts) at each meal is essential for
          vegetarian muscle-building diets.
        </p>
      </ExampleBlock>

      <h2>Optimal Protein Per Meal: 0.4-0.55 g/kg/meal</h2>

      <EvidenceBlock
        level="strong"
        source="Schoenfeld & Aragon (2018)"
      >
        In a comprehensive review examining how much protein the body can use for
        muscle building in a single meal, Schoenfeld and Aragon concluded that
        consuming approximately 0.4-0.55g of protein per kg of body weight per
        meal maximizes the MPS response when distributed across a minimum of 3-4
        meals per day. For a 70 kg individual, this translates to approximately
        28-39g of protein per meal. While the body can digest and absorb more
        protein than this in a single sitting, the excess is oxidized for energy
        or converted to other substrates rather than contributing to additional
        muscle protein synthesis. Distributing protein evenly across meals
        stimulates MPS multiple times throughout the day, producing a greater
        total anabolic effect than consuming the same total protein in 1-2
        large doses.
      </EvidenceBlock>

      <ExampleBlock title="Optimal Protein Distribution for a 75 kg Individual">
        <p>
          <strong>Daily target:</strong> 1.6-2.2 g/kg = 120-165g protein total
        </p>
        <p>
          <strong>Per-meal target:</strong> 0.4-0.55 g/kg = 30-41g per meal
        </p>
        <ul>
          <li><strong>Meal 1 (8 AM):</strong> 35g — 3 eggs + 200ml milk + 1 toast = ~35g</li>
          <li><strong>Meal 2 (1 PM):</strong> 40g — 120g chicken + dal + curd = ~40g</li>
          <li><strong>Meal 3 (5 PM):</strong> 30g — Protein shake (1 scoop whey) + banana = ~30g</li>
          <li><strong>Meal 4 (8 PM):</strong> 40g — 120g fish + dal + paneer = ~40g</li>
          <li><strong>Total:</strong> 145g across 4 meals = ~4 MPS-stimulating events per day</li>
        </ul>
        <p>
          Compare with eating 80g at lunch and 65g at dinner (common pattern): only
          2 MPS-stimulating events despite the same total protein.
        </p>
      </ExampleBlock>

      <h2>Total Daily Protein: 1.6-2.2 g/kg</h2>

      <EvidenceBlock
        level="strong"
        source="Morton et al. (2018) — Meta-analysis of 49 studies"
      >
        The largest meta-analysis on protein supplementation and resistance
        training outcomes, encompassing 49 studies and 1,863 participants, found
        that protein supplementation significantly augmented resistance
        training-induced gains in muscle mass and strength. The analysis
        identified a total daily protein intake of 1.62 g/kg/day as the
        point beyond which additional protein did not further increase muscle
        gains in the aggregate data. However, the upper confidence interval
        extended to 2.2 g/kg/day, and individual variation suggests that some
        trainees may benefit from intakes up to this higher level. The 1.6-2.2
        g/kg range is therefore recommended as optimal for muscle hypertrophy
        during resistance training.
      </EvidenceBlock>

      <ComparisonTable
        title="Daily Protein Requirements by Goal and Population"
        headers={['Population', 'Protein (g/kg/day)', 'For 70 kg Person', 'Notes']}
        rows={[
          ['General healthy adult (RDA)', '0.8', '56g', 'Minimum to prevent deficiency, not optimal'],
          ['Active adult (maintenance)', '1.0-1.2', '70-84g', 'Supports activity without specific goals'],
          ['Muscle building (optimal)', '1.6-2.2', '112-154g', 'Evidence-based range for hypertrophy'],
          ['During caloric deficit', '2.0-2.4', '140-168g', 'Higher protein preserves muscle during fat loss'],
          ['Elderly (>65 years)', '1.2-1.6', '84-112g', 'Higher needs due to anabolic resistance'],
          ['Indian vegetarian (building)', '1.8-2.2', '126-154g', 'Higher end to compensate for lower bioavailability']
        ]}
      />

      <WarningBlock title="Protein and Kidney Health">
        A persistent myth claims that high protein intake damages the kidneys.
        In individuals with healthy kidney function, multiple systematic reviews
        and meta-analyses have found no evidence that protein intake up to 2.2-3.0
        g/kg/day causes kidney damage, reduces kidney function, or increases kidney
        disease risk. However, individuals with pre-existing chronic kidney disease
        (CKD) should follow their nephrologist's protein recommendations, which are
        typically lower (0.6-0.8 g/kg). If you have diabetes, hypertension, or a
        family history of kidney disease, consult your physician before adopting
        a high-protein diet. For everyone else, 1.6-2.2 g/kg is safe based on
        current evidence.
      </WarningBlock>

      <h2>Protein Timing: The Anabolic Window</h2>

      <EvidenceBlock
        level="moderate"
        source="Schoenfeld & Aragon (2018); Jäger et al. (2017) — ISSN Position Stand"
      >
        The concept of a narrow "anabolic window" — the idea that protein must be
        consumed within 30 minutes of training or the muscle-building response is
        lost — has been significantly revised by recent research. The ISSN position
        stand on protein and exercise concluded that the anabolic window is much
        wider than previously believed: consuming protein within approximately
        2-4 hours of training (before or after) is sufficient to maximize MPS.
        If a protein-rich meal was consumed 1-2 hours before training, post-workout
        protein can be delayed by 1-2 hours without compromising the anabolic
        response. The most important factor is total daily protein intake and
        distribution across meals, not precise post-workout timing.
      </EvidenceBlock>

      <NoteBlock title="Practical Protein Timing Recommendations">
        <ul>
          <li>
            <strong>Pre-training option:</strong> Consume a protein-rich meal (25-40g
            protein) 1-3 hours before training. This provides amino acids that will
            be circulating during and after the session.
          </li>
          <li>
            <strong>Post-training:</strong> If you trained fasted or it has been more
            than 3-4 hours since your last protein-containing meal, prioritize a
            protein-rich meal or shake within 1-2 hours after training.
          </li>
          <li>
            <strong>If you ate 1-2 hours before training:</strong> Post-workout protein
            can be consumed whenever your next meal naturally falls — within 1-3
            hours is fine.
          </li>
          <li>
            <strong>Before sleep:</strong> A protein serving before bed (20-40g,
            ideally casein or slow-digesting protein like paneer or curd) may
            support overnight MPS, particularly when consumed after an evening
            training session.
          </li>
          <li>
            <strong>Bottom line:</strong> Do not stress about exact timing. Focus on
            consuming 25-40g of quality protein at 3-5 eating occasions spread
            throughout the day. This automatically covers all timing needs.
          </li>
        </ul>
      </NoteBlock>

      <h2>Animal vs. Plant Protein for Muscle Protein Synthesis</h2>

      <EvidenceBlock
        level="moderate"
        source="van Vliet et al. (2015)"
      >
        Animal-based proteins (whey, eggs, meat, fish, dairy) consistently
        stimulate MPS to a greater degree than plant-based proteins (soy, pea,
        rice, lentils, beans) on a gram-for-gram basis. Van Vliet and colleagues
        identified several reasons: animal proteins have higher essential amino
        acid content (particularly leucine), higher digestibility (DIAAS scores
        of 0.9-1.0 vs 0.5-0.8 for most plant sources), and faster absorption
        kinetics. However, when total daily protein intake is adequate (1.6-2.2
        g/kg) and meals are designed to meet the leucine threshold through
        combining multiple plant sources, the difference in muscle-building
        outcomes between animal and plant protein diets is substantially reduced
        and may be negligible for practical purposes.
      </EvidenceBlock>

      <ComparisonTable
        title="Protein Quality Comparison: Animal vs. Plant Sources"
        headers={['Protein Source', 'DIAAS Score', 'Leucine (g/100g protein)', 'Practical Notes']}
        rows={[
          ['Whey protein', '1.09', '10.9', 'Gold standard for MPS stimulation'],
          ['Egg (whole)', '1.13', '8.6', 'Excellent quality, versatile'],
          ['Chicken breast', '1.08', '7.5', 'Lean, high protein density'],
          ['Milk (cow)', '1.14', '9.8', 'Complete protein, good for shakes'],
          ['Soy protein isolate', '0.90', '8.0', 'Best plant source, close to animal'],
          ['Pea protein', '0.82', '8.4', 'Good leucine but lower digestibility'],
          ['Rice protein', '0.60', '8.0', 'Low lysine; combine with legumes'],
          ['Lentils/dal (cooked)', '0.52', '6.8', 'Lower digestibility; eat more volume'],
          ['Chickpeas (cooked)', '0.83', '6.5', 'Good but high calorie per gram protein'],
          ['Paneer', '~1.0', '9.2', 'High quality but calorie-dense']
        ]}
      />

      <h3>Strategies for Vegetarian Muscle Building</h3>

      <NoteBlock title="Maximizing Plant Protein for Muscle Growth">
        <ul>
          <li>
            <strong>Combine protein sources:</strong> Pair cereals with legumes at each
            meal (rice + dal, roti + rajma) to provide all essential amino acids.
            The amino acids lacking in one source are provided by the other.
          </li>
          <li>
            <strong>Increase total protein by 10-20%:</strong> Due to lower
            digestibility, vegetarians targeting muscle growth should aim for the
            higher end of the range (1.8-2.2 g/kg vs 1.6-2.0 g/kg for non-vegetarians).
          </li>
          <li>
            <strong>Include high-quality plant proteins:</strong> Soy (tofu, tempeh,
            soya chunks), quinoa, and amaranth have higher DIAAS scores than most
            other plant sources.
          </li>
          <li>
            <strong>Dairy is powerful:</strong> For lacto-vegetarians, whey protein,
            paneer, curd, and milk are excellent protein sources with quality comparable
            to meat. Two scoops of whey + 200ml milk provides 50-55g of high-quality
            protein.
          </li>
          <li>
            <strong>Consider leucine supplementation:</strong> Adding 2-3g of leucine
            powder to plant-based meals can compensate for the lower leucine content
            and ensure the mTOR threshold is reached.
          </li>
          <li>
            <strong>Volume challenge:</strong> Reaching 1.8-2.2 g/kg from plant sources
            requires eating considerably more volume than animal-based diets. Planning
            and preparation are essential — it does not happen by accident.
          </li>
        </ul>
      </NoteBlock>

      <h2>Common Protein Myths</h2>

      <ExampleBlock title="Protein Myths and Evidence-Based Reality">
        <ul>
          <li>
            <strong>Myth: "You can only absorb 30g of protein per meal."</strong><br />
            Reality: The body can absorb much more than 30g in a single meal. The 30g
            figure refers to the approximate amount that maximally stimulates MPS in
            a single dose. Excess protein is still absorbed and used for other
            functions (energy, enzyme production, immune function) — it is not wasted.
          </li>
          <li>
            <strong>Myth: "Plant protein cannot build muscle."</strong><br />
            Reality: Plant protein can absolutely support muscle growth when total
            intake is sufficient and sources are combined for amino acid completeness.
            It requires more planning and higher total intake, but the outcome can
            be equivalent.
          </li>
          <li>
            <strong>Myth: "More protein is always better."</strong><br />
            Reality: Beyond 2.2 g/kg/day, additional protein provides no further
            muscle-building benefit in most contexts. The extra protein is simply
            oxidized for energy. Those calories could be better spent on carbohydrates
            (for training performance) or fats (for hormonal health).
          </li>
          <li>
            <strong>Myth: "You must have protein within 30 minutes of training."</strong><br />
            Reality: The anabolic window is 2-4 hours wide, not 30 minutes. If you
            ate protein 1-2 hours before training, the urgency of immediate
            post-workout protein is minimal.
          </li>
        </ul>
      </ExampleBlock>

      <h2>Summary</h2>

      <NoteBlock title="Key Takeaways">
        <ol>
          <li>
            Total daily protein intake of 1.6-2.2 g/kg is optimal for muscle growth
            during resistance training. This is the single most important nutritional
            factor after total caloric intake.
          </li>
          <li>
            Distribute protein across 3-5 meals, aiming for 0.4-0.55 g/kg per meal
            (25-40g for most people) to maximize MPS stimulation throughout the day.
          </li>
          <li>
            Reach the leucine threshold (~2-3g) at each meal by choosing high-quality
            protein sources or combining plant proteins strategically.
          </li>
          <li>
            The anabolic window is 2-4 hours, not 30 minutes. Prioritize total daily
            intake and distribution over precise post-workout timing.
          </li>
          <li>
            Animal proteins are more efficient gram-for-gram, but plant-based diets
            can achieve equivalent results with higher total intake (1.8-2.2 g/kg)
            and strategic combining.
          </li>
          <li>
            High protein intake (up to 2.2 g/kg) is safe for individuals with
            healthy kidneys. Those with kidney disease should consult their physician.
          </li>
        </ol>
      </NoteBlock>

      <ReferenceList references={references} />
    </div>
  );
}
