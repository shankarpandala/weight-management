import DefinitionBlock from '../../../components/content/DefinitionBlock';
import EvidenceBlock from '../../../components/content/EvidenceBlock';
import ExampleBlock from '../../../components/content/ExampleBlock';
import NoteBlock from '../../../components/content/NoteBlock';
import WarningBlock from '../../../components/content/WarningBlock';
import ReferenceList from '../../../components/content/ReferenceList';

const references = [
  {
    id: 1,
    authors: 'Fernandez-Elias VE, Ortega JF, Nelson RK, Mora-Rodriguez R',
    year: 2015,
    title: 'Relationship between muscle water and glycogen recovery after prolonged exercise in the heat in humans',
    journal: 'European Journal of Applied Physiology',
    volume: '115(9)',
    pages: '1919-1926',
  },
  {
    id: 2,
    authors: 'Kreitzman SN, Coxon AY, Szaz KF',
    year: 1992,
    title: 'Glycogen storage: illusions of easy weight loss, excessive weight regain, and distortions in estimates of body composition',
    journal: 'American Journal of Clinical Nutrition',
    volume: '56(1 Suppl)',
    pages: '292S-293S',
  },
  {
    id: 3,
    authors: 'Rakova N, Kitada K, Lerchl K, et al.',
    year: 2017,
    title: 'Increased salt consumption induces body water conservation and decreases fluid intake',
    journal: 'Journal of Clinical Investigation',
    volume: '127(5)',
    pages: '1932-1943',
  },
  {
    id: 4,
    authors: 'White CP, Hitchcock CL, Vigna YM, Prior JC',
    year: 2011,
    title: 'Fluid retention over the menstrual cycle: 1-year data from the prospective ovulation cohort',
    journal: 'Obstetrics and Gynecology International',
    volume: '2011',
    pages: '138451',
  },
  {
    id: 5,
    authors: 'Hall KD',
    year: 2007,
    title: 'Body fat and fat-free mass inter-relationships: Forbes\'s theory revisited',
    journal: 'British Journal of Nutrition',
    volume: '97(6)',
    pages: '1059-1063',
  },
  {
    id: 6,
    authors: 'Maughan RJ, Shirreffs SM, Leiper JB',
    year: 2007,
    title: 'Errors in the estimation of hydration status from changes in body mass',
    journal: 'Journal of Sports Sciences',
    volume: '25(7)',
    pages: '797-804',
  },
];

export default function WaterWeightGlycogen() {
  return (
    <div className="prose-health">
      <h1>Water Weight and Glycogen</h1>

      <p>
        The scale is perhaps the most misunderstood tool in weight management.
        Daily weight can fluctuate by 1-3 kg due to shifts in water and
        glycogen, leading to unnecessary panic when weight spikes overnight
        or false celebration when it drops rapidly in the first week of a
        diet. Understanding what drives these fluctuations is essential for
        interpreting the scale correctly and maintaining psychological
        resilience during a weight management programme.
      </p>

      <DefinitionBlock term="Water weight">
        The portion of body weight attributable to water held in and between
        cells, in the blood, and in the digestive tract. Total body water
        constitutes approximately 50-60% of body weight and can fluctuate
        by 1-3 kg daily based on hydration, sodium intake, carbohydrate
        consumption, hormonal status, and other factors — none of which
        reflect changes in body fat.
      </DefinitionBlock>

      <h2>Glycogen and Its Relationship to Water</h2>

      <DefinitionBlock term="Glycogen">
        The storage form of glucose (carbohydrate) in the body. Glycogen is
        stored primarily in skeletal muscle (approximately 400-500 g in an
        average adult) and the liver (approximately 80-100 g). Total glycogen
        stores amount to roughly 500-600 g in a well-fed individual, though
        this can vary significantly with diet and activity.
      </DefinitionBlock>

      <p>
        The critical detail about glycogen is its relationship with water:
        each gram of glycogen binds approximately 3 grams of water. This
        means that full glycogen stores represent not just 500-600 g of
        glycogen itself, but an additional 1,500-1,800 g of bound water —
        a total of approximately 2-2.4 kg of combined glycogen and water.
      </p>

      <EvidenceBlock source="Kreitzman et al., 1992 (AJCN)" level="strong">
        When glycogen stores are depleted through carbohydrate restriction
        or prolonged exercise, the associated water is released and excreted.
        This explains why low-carbohydrate diets and initial caloric
        restriction produce rapid weight loss of 2-3 kg in the first week —
        the majority of which is glycogen-bound water, not fat. Conversely,
        reintroducing carbohydrates after a period of restriction causes
        rapid weight gain as glycogen and water are restored.
      </EvidenceBlock>

      <ExampleBlock title="Why the first week is misleading">
        Ananya starts a 1,500 kcal diet on Monday. By Friday, she has lost
        2.5 kg and is thrilled. However, with a daily deficit of approximately
        400-500 kcal, she has created a total deficit of roughly 2,000-2,500
        kcal in five days — enough to lose about 280-350 g of actual fat
        tissue. The remaining 2+ kg is almost entirely water lost from
        glycogen depletion and reduced food volume in the digestive tract.
        This is not a problem — but it does mean the rate will slow
        dramatically after week one, which is entirely normal.
      </ExampleBlock>

      <h2>Sodium and Water Retention</h2>

      <p>
        Sodium is the primary electrolyte regulating extracellular water
        volume. When sodium intake increases, the body retains water to
        maintain appropriate sodium concentration. When intake decreases,
        excess water is excreted.
      </p>

      <EvidenceBlock source="Rakova et al., 2017 (JCI)" level="strong">
        Research has shown that sodium-induced water retention is more
        complex than previously thought. High sodium intake can increase
        body weight by 0.5-1.5 kg through water retention within 24-48
        hours. The body's regulatory mechanisms work to excrete this excess
        over several days when sodium intake normalises.
      </EvidenceBlock>

      <ExampleBlock title="The restaurant meal effect">
        Vikram weighs himself at 78.0 kg on Saturday morning. That evening,
        he eats a meal at a restaurant — biryani, raita, and gulab jamun.
        The meal is higher in sodium, carbohydrates, and total calories
        than his usual fare. Sunday morning, the scale reads 79.5 kg. Vikram
        has not gained 1.5 kg of fat overnight — that would require consuming
        approximately 11,500 kcal above maintenance in a single meal. The
        increase is primarily water retention from sodium and carbohydrate
        intake, plus the physical weight of food still being digested. By
        Tuesday, if he returns to normal eating, his weight will settle
        back near 78 kg.
      </ExampleBlock>

      <NoteBlock title="Indian food and sodium">
        Indian cuisine tends to be relatively high in sodium due to generous
        use of salt in cooking, pickles (achaar), papads, chutneys, and
        processed snacks like namkeen and bhujia. A single serving of mixed
        vegetable pickle can contain 800-1,200 mg of sodium. This means
        that daily weight fluctuations related to sodium may be more
        pronounced for people eating traditional Indian meals, particularly
        on days with heavy pickle or papad consumption.
      </NoteBlock>

      <h2>Carbohydrate Intake and Weight Shifts</h2>

      <p>
        Beyond glycogen storage, carbohydrate intake directly influences
        water balance through insulin's effect on renal sodium reabsorption.
        Higher carbohydrate intake stimulates insulin secretion, which
        signals the kidneys to retain sodium and, consequently, water.
      </p>

      <ul>
        <li><strong>Switching to low-carb:</strong> Expect 1.5-3 kg of rapid water loss in the first 3-5 days. This is not fat loss.</li>
        <li><strong>Resuming carbs after restriction:</strong> Expect 1.5-3 kg of rapid weight gain over 1-2 days. This is not fat gain.</li>
        <li><strong>High-carb refeed day:</strong> Weight may spike 0.5-1.5 kg the following day, resolving within 48-72 hours.</li>
      </ul>

      <WarningBlock>
        Many popular Indian diet programmes exploit the glycogen-water
        relationship to create impressive early results. A week of
        extremely low carbohydrate intake (eliminating rice, roti, and
        starchy vegetables) can produce 2-3 kg of weight loss that is
        almost entirely water. When clients inevitably reintroduce
        carbohydrates, the weight returns — and they are told they "fell
        off the diet." This is not dietary failure; it is basic physiology
        being misrepresented.
      </WarningBlock>

      <h2>Menstrual Cycle and Water Retention</h2>

      <EvidenceBlock source="White et al., 2011" level="moderate">
        Prospective cohort data shows that women experience measurable
        fluid retention during the luteal phase (the 14 days before
        menstruation), with peak water retention occurring in the days
        immediately before the period begins. Weight can increase by
        0.5-2 kg during this phase, masking any fat loss that may have
        occurred. This resolves within the first few days of menstruation.
      </EvidenceBlock>

      <NoteBlock title="Tracking weight across the menstrual cycle">
        Women should compare their weight to the same point in the previous
        cycle, not to the previous week. If you weighed 65 kg in the
        follicular phase last month and 65.5 kg in the luteal phase this
        week, you may actually have lost fat — the water retention is
        simply masking it. Comparing week 1 of cycle A to week 1 of
        cycle B gives a much clearer picture of true progress.
      </NoteBlock>

      <h2>Other Factors Affecting Water Weight</h2>

      <ul>
        <li><strong>Exercise:</strong> Intense exercise causes temporary inflammation and water retention in muscles for repair. Weight may increase 0.5-1 kg for 24-48 hours after a hard workout.</li>
        <li><strong>Stress and cortisol:</strong> Chronic stress elevates cortisol, which promotes water retention. Exam periods, work deadlines, and family stress can all cause unexplained scale increases.</li>
        <li><strong>Travel:</strong> Air travel and changes in routine (especially increased sitting and different food) commonly cause 1-2 kg of water retention.</li>
        <li><strong>Digestive contents:</strong> A large meal can weigh 0.5-1 kg before absorption and elimination. Constipation can add additional weight.</li>
        <li><strong>Climate:</strong> In hot Indian summers, the body may retain more water as part of thermoregulation, leading to higher scale readings.</li>
      </ul>

      <h2>How to Use the Scale Intelligently</h2>

      <ExampleBlock title="The moving average approach">
        Rather than reacting to any single weigh-in, track a 7-day moving
        average. Weigh yourself every morning after using the toilet and
        before eating. Record all values and calculate the weekly average.
        Compare this week's average to last week's average. If the trend
        is downward over 2-3 weeks, fat loss is occurring regardless of
        day-to-day spikes. Many smartphone apps can calculate this
        automatically.
      </ExampleBlock>

      <ul>
        <li>Weigh yourself at the same time daily (morning, after toilet, before eating).</li>
        <li>Use a 7-day moving average, not individual daily readings.</li>
        <li>Expect daily fluctuations of 0.5-1.5 kg as entirely normal.</li>
        <li>Do not weigh yourself after a restaurant meal or festival day — wait 2-3 days.</li>
        <li>Women should track cycle-to-cycle rather than week-to-week.</li>
        <li>If the scale causes significant anxiety, weigh less frequently (weekly) or use other metrics (waist circumference, how clothes fit).</li>
      </ul>

      <h2>Key Takeaways</h2>

      <ul>
        <li>Daily weight fluctuations of 1-3 kg are normal and driven by water, glycogen, sodium, and digestive contents — not fat.</li>
        <li>Each gram of glycogen binds approximately 3 grams of water; depleting glycogen stores through carb restriction causes rapid but misleading weight loss.</li>
        <li>High-sodium Indian foods (pickles, papads, processed snacks) can cause significant next-day water retention.</li>
        <li>The menstrual cycle causes predictable 0.5-2 kg fluctuations that mask true fat loss in women.</li>
        <li>Use a 7-day moving average and multi-week trends rather than any single scale reading to assess real progress.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
