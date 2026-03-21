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
    authors: 'Holick MF',
    year: 2007,
    title: 'Vitamin D deficiency',
    source: 'New England Journal of Medicine, 357(3), 266-281',
    type: 'review',
  },
  {
    authors: 'Marwaha RK, Tandon N, Reddy DR, Aggarwal R, Singh R, Sawhney RC, Saluja B, Ganie MA, Singh S',
    year: 2005,
    title: 'Vitamin D and bone mineral density status of healthy schoolchildren in northern India',
    source: 'American Journal of Clinical Nutrition, 82(2), 477-482',
    type: 'clinical',
  },
  {
    authors: 'Harinarayan CV, Ramalakshmi T, Prasad UV, Sudhakar D, Srinivasarao PV, Sarma KV, Kumar EG',
    year: 2007,
    title: 'High prevalence of low dietary calcium, high phytate consumption, and vitamin D deficiency in healthy south Indians',
    source: 'American Journal of Clinical Nutrition, 85(4), 1062-1067',
    type: 'clinical',
  },
  {
    authors: 'National Institute of Nutrition (NIN)',
    year: 2020,
    title: 'Recommended Dietary Allowances and Estimated Average Requirements for Indians',
    source: 'Indian Council of Medical Research, Hyderabad',
    type: 'foundational',
  },
  {
    authors: 'Carr AC, Maggini S',
    year: 2017,
    title: 'Vitamin C and Immune Function',
    source: 'Nutrients, 9(11), 1211',
    type: 'review',
  },
  {
    authors: 'Green R, Allen LH, Bjorke-Monsen AL, Brito A, Gueant JL, Miller JW, Molloy AM, Nexo E, Stabler S, Toh BH, Ueland PM, Yajnik C',
    year: 2017,
    title: 'Vitamin B12 deficiency',
    source: 'Nature Reviews Disease Primers, 3, 17040',
    type: 'review',
  },
  {
    authors: 'Yajnik CS, Deshpande SS, Jackson AA, Refsum H, Rao S, Fisher DJ, Bhat DS, Naik SS, Coyaji KJ, Joglekar CV, Joshi N, Lubree HG, Deshpande VU, Rege SS, Fall CH',
    year: 2008,
    title: 'Vitamin B12 and folate concentrations during pregnancy and insulin resistance in the offspring: the Pune Maternal Nutrition Study',
    source: 'Diabetologia, 51(1), 29-38',
    type: 'clinical',
  },
];

export default function VitaminsTe() {
  return (
    <div className="prose-health">
      <h1>Vitamins (విటమిన్లు)</h1>

      <p>
        Vitamins అనేవి శరీరం యొక్క సాధారణ జీవక్రియ, ఎదుగుదల మరియు ఆరోగ్యం
        నిర్వహణకు తక్కువ మొత్తాల్లో అవసరమైన అత్యావశ్యక organic micronutrients.
        Macronutrients వలె కాకుండా, vitamins calories అందించవు, కానీ energy metabolism,
        రోగనిరోధక శక్తి, ఎముకల ఆరోగ్యం, నాడీ వ్యవస్థ పనితీరు మరియు కణాల మరమ్మతును
        నియంత్రించే వందలాది enzymatic reactions లో అవి అనివార్యమైన cofactors. మానవ శరీరం
        చాలా vitamins ను తగినంత మొత్తంలో తయారు చేయలేదు, కాబట్టి ఆహారం లేదా
        supplementation ద్వారా తీసుకోవడం అవసరం. భారతదేశంలో vitamin లోపాలు ఇప్పటికీ
        ప్రజారోగ్య సమస్యగా ఉన్నాయి — vitamin D, B12, folate మరియు iron లోపాలు
        కోట్ల మంది ప్రజలను ప్రభావితం చేస్తున్నాయి.
      </p>

      <DefinitionBlock
        title="Vitamins (విటమిన్లు)"
        definition="శరీరం యొక్క సాధారణ శారీరక పనితీరుకు అత్యావశ్యకమైన organic సమ్మేళనాలు — రోజుకు micrograms నుండి milligrams వరకు తక్కువ మొత్తాల్లో అవసరం. ఇవి coenzymes, antioxidants, లేదా hormonal precursors గా పని చేస్తాయి. వీటిని solubility ఆధారంగా రెండు గ్రూపులుగా వర్గీకరిస్తారు: fat-soluble vitamins (A, D, E, K) — ఇవి dietary fat తో కలిసి absorb అవుతాయి మరియు adipose tissue మరియు liver లో నిల్వ అవుతాయి; water-soluble vitamins (B-complex మరియు C) — ఇవి నీటిలో కరుగుతాయి, శరీరంలో పెద్దగా నిల్వ కావు, కాబట్టి క్రమంగా తీసుకోవాలి."
        notation="13 అత్యావశ్యక vitamins: 4 fat-soluble (A, D, E, K) మరియు 9 water-soluble (8 B vitamins + vitamin C)."
      />

      <h2>Fat-Soluble Vitamins (కొవ్వులో కరిగే విటమిన్లు)</h2>

      <p>
        Fat-soluble vitamins ఆహారంలోని కొవ్వులతో కలిసి పేగు గోడ ద్వారా absorb అవుతాయి
        మరియు lymphatic system లో chylomicrons ద్వారా రవాణా అవుతాయి. ఇవి శరీరం యొక్క
        కొవ్వు నిల్వలు మరియు liver లో వారాల నుండి నెలల వరకు నిల్వ ఉంటాయి — అంటే
        రోజూ తీసుకోవడం తప్పనిసరి కాదు, కానీ అధికంగా తీసుకుంటే toxicity
        (hypervitaminosis) వచ్చే ప్రమాదం ఉంది. ఈ vitamins సరిగ్గా absorb కావడానికి
        తగినంత dietary fat (కనీసం calories లో 15-20%) తీసుకోవడం అవసరం.
      </p>

      <ComparisonTable
        title="Fat-Soluble Vitamins: విధులు మరియు భారతీయ ఆహార వనరులు"
        headers={['Vitamin', 'ప్రధాన విధులు', 'భారతీయ ఆహార వనరులు', 'ICMR RDA (వయోజనులు)', 'భారతదేశంలో లోపం ఆందోళన']}
        rows={[
          ['Vitamin A (Retinol)', 'దృష్టి, రోగనిరోధక శక్తి, చర్మ సమగ్రత, పునరుత్పత్తి', 'Liver, గుడ్డు పచ్చసొన, పాలు, వెన్న; beta-carotene: carrots, బొప్పాయి, palak, methi', '1000 mcg RE (పురుషులు), 840 mcg RE (మహిళలు)', 'పిల్లలలో ఎక్కువ — రాత్రి అంధత్వం, xerophthalmia'],
          ['Vitamin D (Cholecalciferol)', 'Calcium absorption, ఎముకల mineralization, రోగనిరోధక modulation, insulin sensitivity', 'సూర్యరశ్మి, fatty fish, గుడ్డు పచ్చసొన, fortified పాలు; ఆహార వనరులు చాలా తక్కువ', '600 IU (15 mcg)/రోజు', 'అత్యంత ఎక్కువ — 70-90% భారతీయులలో లోపం'],
          ['Vitamin E (Tocopherol)', 'Antioxidant (కణ పొరలను రక్షిస్తుంది), రోగనిరోధక శక్తి', 'వంట నూనెలు, nuts, seeds, wheat germ, sunflower seeds', '10 mg (పురుషులు), 7.5 mg (మహిళలు)', 'ఒంటరిగా చాలా అరుదు'],
          ['Vitamin K (Phylloquinone)', 'రక్తం గడ్డకట్టడం, ఎముకల metabolism, calcium నియంత్రణ', 'ఆకుకూరలు (palak, methi, sarson), soybean oil', '55 mcg/రోజు', 'నవజాత శిశువులలో తప్ప అరుదు (పుట్టినప్పుడు ఇస్తారు)'],
        ]}
      />

      <h3>భారతదేశంలో Vitamin D సంక్షోభం</h3>

      <p>
        భారతదేశంలో సమృద్ధిగా సూర్యరశ్మి ఉన్నప్పటికీ, vitamin D లోపం విరుద్ధంగా
        దేశంలో అత్యంత ప్రబలమైన పోషకాహార లోపాలలో ఒకటి. అధ్యయనాలు స్థిరంగా చూపిస్తున్నాయి
        — అన్ని వయసుల, భౌగోళిక ప్రాంతాల మరియు ఆర్థిక స్థాయిల భారతీయులలో 70-90%
        మందికి vitamin D స్థాయిలు సరిపోవు (30 ng/mL కంటే తక్కువ). ఇది ఎముకల ఆరోగ్యం,
        రోగనిరోధక శక్తి, insulin sensitivity మరియు శరీర బరువు నియంత్రణపై తీవ్ర
        ప్రభావం చూపుతుంది.
      </p>

      <EvidenceBlock
        title="భారతీయ పిల్లలలో Vitamin D లోపం"
        finding="న్యూ ఢిల్లీలో ఆరోగ్యంగా కనిపించే 90% కంటే ఎక్కువ పాఠశాల పిల్లలలో vitamin D స్థాయిలు 30 ng/mL కంటే తక్కువ (insufficient) గా ఉన్నాయి, మరియు 35% లో 9 ng/mL కంటే తక్కువ (తీవ్రమైన లోపం) గా ఉన్నాయి. ఏడాది పొడవునా సమృద్ధిగా సూర్యరశ్మి ఉన్న ప్రాంతంలో నివసిస్తున్నప్పటికీ ఇది జరిగింది."
        study="ఉత్తర భారతదేశంలో 10-18 సంవత్సరాల 5,137 పాఠశాల పిల్లలపై cross-sectional అధ్యయనం"
        source="Marwaha et al. (2005) American Journal of Clinical Nutrition"
        details="ఈ అధ్యయనం ప్రకారం, బయట ఎండలో ఆడుకునే పిల్లలలో కూడా vitamin D లోపం ఉంది. కారణాలలో: నల్లటి చర్మ రంగు (melanin vitamin D synthesis ను తగ్గిస్తుంది), వాయు కాలుష్యం UVB కిరణాలను అడ్డుకోవడం, చర్మాన్ని కప్పే సాంస్కృతిక ఆచారాలు, మరియు ఆహారంలో vitamin D చాలా తక్కువగా ఉండటం. అమ్మాయిలలో అబ్బాయిల కంటే vitamin D స్థాయిలు గణనీయంగా తక్కువగా ఉన్నాయి — తక్కువ బయటి కార్యకలాపాలు మరియు ఎక్కువ చర్మ కవరేజ్ కారణంగా. ఈ ఫలితాలు భారతదేశంలో ఆహార fortification మరియు విస్తృత supplementation అవసరాన్ని నొక్కి చెప్పాయి."
      />

      <NoteBlock
        title="భారతదేశంలో సూర్యరశ్మి మాత్రమే ఎందుకు సరిపోదు"
        content="భారతదేశంలో vitamin D paradox ను అనేక factors వివరిస్తాయి: (1) నల్లటి చర్మానికి అదే మొత్తంలో vitamin D తయారు చేయడానికి తెల్ల చర్మం కంటే 3-6 రెట్లు ఎక్కువ ఎండ అవసరం. (2) Delhi, Mumbai, Kolkata వంటి నగరాల్లో వాయు కాలుష్యం 50% వరకు UVB కిరణాలను అడ్డుకుంటుంది. (3) Office-based పని మరియు indoor lifestyles ఎండ exposure ను తగ్గిస్తాయి. (4) సాంస్కృతిక ఆచారాలు — చాలా చర్మాన్ని బట్టలతో కప్పడం — exposed surface area ను తగ్గిస్తాయి. (5) భారతీయ ఆహారాల్లో vitamin D యొక్క సహజ వనరులు చాలా తక్కువ, మరియు fortification సార్వత్రికం కాదు. ICMR 600 IU/రోజు సిఫారసు చేస్తుంది, కానీ చాలా నిపుణులు భారతీయ జనాభాలో ప్రబలమైన లోపాన్ని సరిదిద్దడానికి 1000-2000 IU/రోజు అవసరమని సూచిస్తారు."
      />

      <h2>Water-Soluble Vitamins (నీటిలో కరిగే విటమిన్లు)</h2>

      <p>
        Water-soluble vitamins నీటిలో కరుగుతాయి, చిన్న ప్రేగు నుండి నేరుగా రక్తప్రవాహంలోకి
        absorb అవుతాయి, మరియు గణనీయమైన మొత్తాల్లో నిల్వ కావు (vitamin B12 తప్ప, ఇది
        liver లో సంవత్సరాల పాటు నిల్వ ఉంటుంది). అధికంగా తీసుకుంటే సాధారణంగా మూత్రంలో
        బయటకు వెళ్ళిపోతుంది, కాబట్టి toxicity అరుదు, కానీ అదే సమయంలో క్రమం తప్పకుండా
        ఆహారంలో తీసుకోవడం అవసరం. B vitamins ప్రధానంగా energy metabolism మరియు కణ
        ప్రక్రియలలో coenzymes గా పని చేస్తాయి.
      </p>

      <ComparisonTable
        title="Water-Soluble Vitamins: ప్రధాన సభ్యులు"
        headers={['Vitamin', 'ప్రధాన విధులు', 'భారతీయ ఆహార వనరులు', 'లోపం సంకేతాలు']}
        rows={[
          ['B1 (Thiamine)', 'Carbohydrate metabolism, నాడీ పనితీరు', 'Whole grains, legumes, pork, dal', 'Beriberi (అరుదు), Wernicke encephalopathy'],
          ['B2 (Riboflavin)', 'Energy metabolism, ఎర్ర రక్తకణాల ఉత్పత్తి', 'పాలు, curd, గుడ్లు, ఆకుకూరలు, mushrooms', 'Angular stomatitis, చర్మ పగుళ్ళు'],
          ['B3 (Niacin)', 'Energy metabolism, DNA repair', 'వేరుశెనగ, chicken, fish, mushrooms, whole grains', 'Pellagra (dermatitis, diarrhea, dementia)'],
          ['B6 (Pyridoxine)', 'Amino acid metabolism, neurotransmitter synthesis', 'Chickpeas, అరటిపండ్లు, బంగాళాదుంపలు, poultry, fish', 'Peripheral neuropathy, రక్తహీనత'],
          ['B9 (Folate)', 'DNA synthesis, ఎర్ర రక్తకణాల ఉత్పత్తి, neural tube అభివృద్ధి', 'ఆకుకూరలు, legumes, citrus fruits', 'Megaloblastic anemia, neural tube defects'],
          ['B12 (Cobalamin)', 'DNA synthesis, నాడీ పనితీరు, ఎర్ర రక్తకణాల ఉత్పత్తి', 'పాలు, curd, గుడ్లు, మాంసం, fish — మొక్కల ఆహారాల్లో ఉండదు', 'Megaloblastic anemia, neuropathy, cognitive decline'],
          ['Vitamin C (Ascorbic acid)', 'Collagen synthesis, antioxidant, iron absorption', 'Amla, జామ, citrus, bell peppers, టమాటాలు', 'Scurvy, గాయాలు తగ్గకపోవడం, రోగనిరోధక శక్తి తగ్గడం'],
        ]}
      />

      <h3>భారతీయ శాఖాహారుల్లో Vitamin B12 సమస్య</h3>

      <p>
        Vitamin B12 సహజంగా కేవలం జంతు ఆధారిత ఆహారాల్లో మాత్రమే లభిస్తుంది. ఇది
        భారతదేశంలోని పెద్ద శాఖాహార జనాభాకు B12 లోపం ఒక ప్రధాన ఆందోళన. అధ్యయనాల
        ప్రకారం 47-75% భారతీయ శాఖాహారులకు B12 స్థాయిలు సరిపోవు. పాల ఉత్పత్తులు
        తీసుకునే lacto-vegetarians కు కూడా తరచుగా తగినంత intake ఉండదు, ఎందుకంటే పాలు
        మరియు curd లో B12 content తక్కువ (ఒక కప్పులో సుమారు 0.5-1 mcg, RDA 2.2
        mcg/రోజు తో పోలిస్తే).
      </p>

      <EvidenceBlock
        title="భారతదేశంలో Vitamin B12 లోపం మరియు Metabolic Risk"
        finding="గర్భధారణ సమయంలో తల్లిలో తక్కువ vitamin B12 స్థాయిలు, సంతానంలో 6 సంవత్సరాల వయసులో ఎక్కువ adiposity మరియు insulin resistance తో అనుసంధానించబడ్డాయి. అత్యంత తక్కువ B12 మరియు అత్యధిక folate ఉన్న తల్లుల నుండి పుట్టిన పిల్లలలో insulin resistance అత్యధికంగా ఉంది — B12 లోపం భారతదేశపు diabetes epidemic లో పాత్ర పోషిస్తుందని ఇది సూచిస్తుంది."
        study="పుణెలో 653 గర్భధారణలు మరియు సంతానాన్ని follow చేసిన prospective cohort study"
        source="Yajnik et al. (2008) Diabetologia"
        details="ఈ ప్రసిద్ధ Pune Maternal Nutrition Study ప్రకారం, తక్కువ B12 తో కలిపి ఎక్కువ folate ('folate trap') ముఖ్యంగా సంతానంలో ప్రతికూల metabolic outcomes తో అనుసంధానించబడింది. తల్లులలో B12 లోపం చాలా సాధారణం — 65% కంటే ఎక్కువ తల్లులలో B12 స్థాయిలు తక్కువగా ఉన్నాయి. ఈ ఫలితాలు సూచించాయి — భారతీయ ప్రత్యుత్పత్తి వయసు మహిళలకు folate supplementation మాత్రమే కాకుండా B12 supplementation కూడా పరిగణించాలి, మరియు భారతదేశంలో విస్తృత B12 లోపం insulin resistance మరియు type 2 diabetes అధిక ప్రబలత్వానికి దోహదపడవచ్చు."
      />

      <WarningBlock
        title="Vitamin B12: భారతీయ శాఖాహార ఆహారంలో క్లిష్టమైన అంతరం"
        content="Vitamin B12 లోపం తరచుగా subclinical మరియు నెమ్మదిగా పెరిగేది — రక్తహీనత కనిపించే ముందే నాడీ నష్టం జరగవచ్చు. ఏ మొక్కల ఆహారం కూడా B12 యొక్క నమ్మకమైన వనరు కాదు (fermented foods మరియు spirulina లో inactive analogues ఉంటాయి). భారతీయ శాఖాహారులు తప్పనిసరిగా పరిగణించాలి: (1) క్రమం తప్పకుండా B12 supplementation (కనీసం 2.2 mcg/రోజు, లేదా 1000 mcg వారానికి — supplements నుండి absorption తక్కువగా ఉంటుంది). (2) B12-fortified ఆహారాలు అందుబాటులో ఉంటే తీసుకోవడం. (3) పాలు, curd మరియు paneer క్రమంగా తీసుకోవడం (lacto-vegetarians). (4) B12 స్థాయిలు కాలానుగుణంగా పరీక్షించుకోవడం, ముఖ్యంగా శాఖాహారులు, గర్భిణీ స్త్రీలు మరియు వృద్ధులకు."
      />

      <h2>Vitamins మరియు బరువు నియంత్రణ</h2>

      <p>
        Vitamins నేరుగా calories అందించనప్పటికీ, అనేక vitamins energy metabolism మరియు
        బరువు నియంత్రణలో ముఖ్యమైన పాత్రలు పోషిస్తాయి. B vitamins (ముఖ్యంగా B1, B2,
        B3, B5, B6, B7, మరియు B12) macronutrients నుండి energy తీయడంలో metabolic
        pathways లో అత్యావశ్యక cofactors. Vitamin D లోపం ఊబకాయం మరియు insulin
        resistance తో అనుసంధానించబడింది, మరియు కొన్ని intervention studies ప్రకారం
        తీవ్రమైన vitamin D లోపాన్ని సరిదిద్దడం వల్ల బరువు తగ్గింపు ఫలితాలు కొంచెం
        మెరుగుపడవచ్చు.
      </p>

      <p>
        బరువు తగ్గడానికి caloric restriction సమయంలో, micronutrient intake తరచుగా
        అవసరాల కంటే తక్కువగా ఉంటుంది — ముఖ్యంగా vitamins A, C, D, E, folate మరియు
        B12. అందుకే తీవ్రమైన caloric restriction (రోజుకు 1200-1500 kcal కంటే తక్కువ)
        వైద్య పర్యవేక్షణ మరియు multivitamin supplementation లేకుండా నిరుత్సాహపరచబడుతుంది.
        తగ్గిన calorie budget లో తగినంత vitamin intake నిర్ధారించడానికి బరువు తగ్గడ
        సమయంలో nutrient-dense ఆహార ఎంపికలు చాలా ముఖ్యమైనవి.
      </p>

      <ExampleBlock
        title="బరువు నియంత్రణకు Vitamin-Rich భారతీయ ఆహారాలు"
        description="ప్రతి calorie కి ఎక్కువ vitamin density ఇచ్చే ఆహారాలు బరువు తగ్గడ సమయంలో అనువైనవి: (1) Amla (ఉసిరికాయ) — ఒక amla 600 mg vitamin C అందిస్తుంది (RDA కంటే 10 రెట్లు) కేవలం 30 kcal కి. (2) Palak (పాలకూర) — folate, vitamin A మరియు vitamin K లో సమృద్ధి, 100 g కి కేవలం 23 kcal. (3) Methi (మెంతి ఆకులు) — folate మరియు beta-carotene యొక్క అద్భుతమైన వనరు, తక్కువ calories తో. (4) Curd/dahi — B12, B2 మరియు calcium అందిస్తుంది. (5) గుడ్లు — ఒక గుడ్డు B12, vitamin D, vitamin A మరియు choline ను కేవలం 70 kcal కి అందిస్తుంది. (6) బొప్పాయి — vitamin A మరియు C లో సమృద్ధి, 100 g కి కేవలం 43 kcal."
      />

      <ExampleBlock
        title="భారతీయ వంటలో Vitamins ను కాపాడటం"
        description="భారతీయ వంట పద్ధతులు vitamin retention ను గణనీయంగా ప్రభావితం చేస్తాయి. వేడికి సున్నితమైన water-soluble vitamins (C మరియు B vitamins) అత్యంత హానికరం. ఉత్తమ పద్ధతులు: కూరగాయలను కట్ చేసిన తర్వాత కడగకూడదు (water-soluble vitamins కోల్పోతారు), ఉడికించిన బియ్యం లేదా కూరగాయల నీటిని (కంజీ/starch water) పారేయకూడదు (B vitamins ఉంటాయి), ఎక్కువ నీటిలో ఉడికించడం కంటే ఆవిరి లేదా pressure-cook చేయడం మంచిది, vitamin C కోసం amla లేదా నిమ్మరసం వంట తర్వాత కలపాలి, మరియు ఆకుకూరలు ఎక్కువగా ఉడికించకూడదు. Fat-soluble vitamins (A, D, E, K) కొంచెం కొవ్వుతో కలిసి తీసుకుంటే బాగా absorb అవుతాయి — అందుకే సబ్జీకి కొంచెం నూనె లేదా నెయ్యి కలపడం వల్ల nutrient absorption మెరుగుపడుతుంది."
      />

      <h2>ముఖ్య అంశాలు</h2>

      <ul>
        <li>
          Vitamins fat-soluble (A, D, E, K) లేదా water-soluble (B-complex, C) గా
          వర్గీకరించబడే అత్యావశ్యక organic micronutrients. Fat-soluble vitamins absorption కి
          dietary fat అవసరం మరియు toxic స్థాయిలకు పెరగవచ్చు; water-soluble vitamins కు
          క్రమం తప్పకుండా intake అవసరం.
        </li>
        <li>
          సమృద్ధిగా సూర్యరశ్మి ఉన్నప్పటికీ vitamin D లోపం 70-90% భారతీయులను ప్రభావితం
          చేస్తుంది. భారతీయ జనాభాకు 600-2000 IU/రోజు supplementation విస్తృతంగా
          సిఫారసు చేయబడుతుంది.
        </li>
        <li>
          భారతీయ శాఖాహారుల్లో vitamin B12 లోపం endemic (47-75% ప్రభావితం) మరియు
          రక్తహీనత కంటే ఎక్కువగా — నాడీ నష్టం మరియు సంతానంలో metabolic programming తో
          సంబంధం ఉంది. శాఖాహారులకు supplementation అత్యావశ్యకం.
        </li>
        <li>
          B vitamins energy metabolism కు critical cofactors. లోపం వల్ల శరీరం
          macronutrients నుండి సమర్థవంతంగా energy తీసుకునే సామర్థ్యం దెబ్బతింటుంది.
        </li>
        <li>
          బరువు తగ్గడ సమయంలో, తగ్గిన calorie budget లో micronutrient అవసరాలను
          తీర్చడానికి vitamin-dense, calorie-sparse ఆహారాలు (amla, ఆకుకూరలు, curd,
          గుడ్లు) ఎంచుకోండి.
        </li>
        <li>
          భారతీయ వంట పద్ధతులు vitamin retention ను గణనీయంగా ప్రభావితం చేస్తాయి. కట్
          చేసిన కూరగాయలకు నీటి exposure తగ్గించండి, ఆవిరి మరియు pressure-cooking కు
          ప్రాధాన్యత ఇవ్వండి, మరియు వంట తర్వాత citrus కలపండి.
        </li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
