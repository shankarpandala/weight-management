import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';
import ComparisonTable from '../../../components/content/ComparisonTable.jsx';
import NutritionFactBlock from '../../../components/content/NutritionFactBlock.jsx';

const references = [
  {
    authors: 'Leidy HJ, Clifton PM, Astrup A, Wycherley TP, Westerterp-Plantenga MS, Luscombe-Marsh ND, Woods SC, Mattes RD',
    year: 2015,
    title: 'The role of protein in weight loss and maintenance',
    source: 'American Journal of Clinical Nutrition, 101(6), 1320S-1329S',
    type: 'review',
  },
  {
    authors: 'Phillips SM, Van Loon LJ',
    year: 2011,
    title: 'Dietary protein for athletes: from requirements to optimum adaptation',
    source: 'Journal of Sports Sciences, 29(sup1), S29-S38',
    type: 'review',
  },
  {
    authors: 'FAO/WHO',
    year: 2013,
    title: 'Dietary protein quality evaluation in human nutrition: Report of an FAO Expert Consultation',
    source: 'FAO Food and Nutrition Paper No. 92, Rome',
    type: 'foundational',
  },
  {
    authors: 'Kashyap S, Shivakumar N, Varkey A, Duraisamy R, Thomas T, Preston T, Devi S, Kurpad AV',
    year: 2019,
    title: 'Ileal digestibility of intrinsically labeled hen egg and meat protein determined with the dual stable isotope tracer method in Indian adults',
    source: 'American Journal of Clinical Nutrition, 110(4), 893-903',
    type: 'clinical',
  },
  {
    authors: 'Paddon-Jones D, Westman E, Mattes RD, Wolfe RR, Astrup A, Westerterp-Plantenga MS',
    year: 2008,
    title: 'Protein, weight management, and satiety',
    source: 'American Journal of Clinical Nutrition, 87(5), 1558S-1561S',
    type: 'review',
  },
  {
    authors: 'National Institute of Nutrition (NIN)',
    year: 2020,
    title: 'Recommended Dietary Allowances and Estimated Average Requirements for Indians',
    source: 'Indian Council of Medical Research, Hyderabad',
    type: 'foundational',
  },
  {
    authors: 'Schaafsma G',
    year: 2000,
    title: 'The Protein Digestibility-Corrected Amino Acid Score',
    source: 'Journal of Nutrition, 130(7), 1865S-1867S',
    type: 'foundational',
  },
];

export default function ProteinsTe() {
  return (
    <div className="prose-health">
      <h1>Proteins</h1>

      <p>
        Proteins అనేవి శరీరంలో నిర్మాణాత్మక మరియు క్రియాత్మక పనులు చేసే ముఖ్యమైన అణువులు.
        Amino acid గొలుసులతో తయారైన ఇవి కండరాల కణజాలం, enzymes, hormones, antibodies, మరియు
        దాదాపు ప్రతి cellular నిర్మాణానికి ఆధారం. గ్రాముకు 4 kilocalories ఇచ్చే protein బరువు
        నిర్వహణలో ప్రత్యేకంగా ముఖ్యమైన పాత్ర పోషిస్తుంది — దీని అధిక thermic effect, మెరుగైన
        satiety లక్షణాలు, మరియు caloric restriction సమయంలో lean mass ను కాపాడే సామర్థ్యం వల్ల.
        Protein నాణ్యత, పరిమాణం, మరియు మూలాలను అర్థం చేసుకోవడం భారతీయ సందర్భంలో మరింత
        ముఖ్యమైనది, ఎందుకంటే protein లోపం మరియు తక్కువ protein నాణ్యత ఇప్పటికీ ముఖ్యమైన
        పోషకాహార సమస్యలుగా ఉన్నాయి.
      </p>

      <DefinitionBlock
        title="Proteins"
        definition="Proteins అనేవి peptide bonds ద్వారా అనుసంధానమైన ఒకటి లేదా అంతకంటే ఎక్కువ amino acid గొలుసులతో తయారైన పెద్ద, సంక్లిష్టమైన అణువులు. 20 వేర్వేరు amino acids యొక్క వరుస మరియు అమరిక ప్రతి protein యొక్క ప్రత్యేక త్రిమితీయ నిర్మాణం మరియు పనిని నిర్ణయిస్తాయి. ఆహారంలోని protein వ్యక్తిగత amino acids మరియు చిన్న peptides గా జీర్ణమవుతుంది, ఇవి absorb అయి protein synthesis, energy ఉత్పత్తి, మరియు ఇతర metabolic పనులకు ఉపయోగించబడతాయి."
        notation="Energy yield: 4 kcal/g (17 kJ/g). భారతీయులకు ICMR RDA: పెద్దవారికి రోజుకు 0.83 g/kg శరీర బరువు (చాలా మంది పెద్దవారికి సుమారు 48-60 g/రోజు). పెరుగుదల, గర్భధారణ, పాలిచ్చే కాలం, మరియు అనారోగ్యం సమయంలో అవసరాలు ఎక్కువగా ఉంటాయి."
      />

      <h2>Amino Acids: నిర్మాణ ఇటుకలు</h2>

      <p>
        Protein synthesis లో ఉపయోగించే 20 ప్రామాణిక amino acids లో, తొమ్మిది essential
        (అనివార్యమైనవి) గా వర్గీకరించబడ్డాయి ఎందుకంటే మానవ శరీరం వాటిని తగినంత పరిమాణంలో
        సంశ్లేషణ చేయలేదు. ఇవి ఆహారం నుండి తప్పనిసరిగా రావాలి. మిగిలిన పదకొండు non-essential
        (అనివార్యం కానివి), అంటే శరీరం వాటిని ఇతర amino acids మరియు metabolic మధ్యవర్తుల
        నుండి ఉత్పత్తి చేయగలదు, అయితే కొన్ని అనారోగ్యం లేదా ఒత్తిడి సమయంలో conditionally
        essential అవుతాయి.
      </p>

      <ComparisonTable
        title="Essential vs Non-Essential Amino Acids"
        headers={['Essential (తప్పనిసరిగా తినాలి)', 'Non-Essential (శరీరం తయారు చేయగలదు)', 'Conditionally Essential']}
        rows={[
          ['Leucine', 'Alanine', 'Arginine'],
          ['Isoleucine', 'Aspartic acid', 'Cysteine'],
          ['Valine', 'Asparagine', 'Glutamine'],
          ['Lysine', 'Glutamic acid', 'Glycine'],
          ['Methionine', 'Serine', 'Proline'],
          ['Phenylalanine', 'Tyrosine*', 'Tyrosine'],
          ['Threonine', 'Glutamine*', ''],
          ['Tryptophan', '', ''],
          ['Histidine', '', ''],
        ]}
      />

      <NoteBlock
        title="Leucine: కండరాల నిర్మాణంలో కీలక సంకేతం"
        content="Essential amino acids లో, leucine కండరాల protein synthesis ను mTOR signaling pathway ద్వారా ప్రేరేపించడంలో ప్రత్యేకంగా ముఖ్యమైన పాత్ర పోషిస్తుంది. పరిశోధన ప్రకారం కండరాల protein synthesis ను గరిష్టంగా ప్రేరేపించడానికి ఒక్కో భోజనంలో సుమారు 2-3 g 'leucine threshold' అవసరం. దీని ఆచరణాత్మక ప్రభావం: ఈ threshold చేరుకోవడానికి ఒక భోజనంలో సుమారు 25-30 g అధిక-నాణ్యత protein అవసరం. చాలా సాంప్రదాయ భారతీయ శాఖాహార భోజనాలు ఒక్కో భోజన సందర్భంలో ఈ threshold కంటే తక్కువగా ఉంటాయి, అందుకే భోజనాల మధ్య protein పంపిణీ చాలా ముఖ్యమైనది."
      />

      <h2>Complete vs Incomplete Proteins</h2>

      <p>
        Complete protein source లో మానవ అవసరాలను తీర్చడానికి తగిన నిష్పత్తిలో తొమ్మిది essential
        amino acids అన్నీ ఉంటాయి. చాలా జంతు ఆధారిత proteins (మాంసం, చేపలు, గుడ్లు, dairy)
        complete. Incomplete protein లో మానవ అవసరాలకు సంబంధించి ఒకటి లేదా అంతకంటే ఎక్కువ
        essential amino acids తక్కువగా ఉంటాయి. చాలా వ్యక్తిగత plant proteins incomplete, నిర్దిష్ట
        limiting amino acids తో.
      </p>

      <ComparisonTable
        title="సాధారణ భారతీయ ఆహారాల Protein నాణ్యత"
        headers={['ఆహార మూలం', 'Complete/Incomplete', 'Limiting Amino Acid', 'PDCAAS']}
        rows={[
          ['గుడ్డు (whole)', 'Complete', 'ఏదీ లేదు', '1.00'],
          ['Milk / Paneer', 'Complete', 'ఏదీ లేదు', '1.00'],
          ['Chicken / Mutton', 'Complete', 'ఏదీ లేదు', '0.92'],
          ['చేపలు', 'Complete', 'ఏదీ లేదు', '0.95'],
          ['Soy (tofu, chunks)', 'Complete', 'ఏదీ లేదు (methionine తక్కువగా)', '0.91'],
          ['Rice', 'Incomplete', 'Lysine', '0.50'],
          ['Wheat (roti)', 'Incomplete', 'Lysine', '0.42'],
          ['Chana / Rajma (legumes)', 'Incomplete', 'Methionine', '0.65-0.78'],
          ['Moong dal', 'Incomplete', 'Methionine', '0.72'],
          ['వేరుశెనగలు', 'Incomplete', 'Lysine, threonine', '0.52'],
        ]}
      />

      <h3>Complementary Proteins (పూరక proteins)</h3>
      <p>
        Complementary proteins భావన శాఖాహార పోషణకు మూలాధారమైనది మరియు సాంప్రదాయ భారతీయ ఆహార
        సంస్కృతిలో లోతుగా పాతుకుపోయింది. రెండు incomplete protein sources కు వేర్వేరు limiting
        amino acids ఉన్నప్పుడు, వాటిని కలపడం ద్వారా అన్ని essential amino acids తగిన పరిమాణంలో
        అందుతాయి. క్లాసిక్ కలయిక ఏమిటంటే ధాన్యాలు (lysine తక్కువ, methionine సరిపోతుంది) +
        legumes (methionine తక్కువ, lysine సరిపోతుంది).
      </p>

      <ExampleBlock
        title="భారతీయ వంటకాల్లో Complementary Proteins"
        description="సాంప్రదాయ భారతీయ భోజనాలు సహజంగానే complementary proteins ను కలుపుతాయి: dal-chawal (పప్పు + అన్నం), rajma-chawal (రాజ్మా + అన్నం), chole + bhatura/roti (చోలే + గోధుమ), idli-sambar (బియ్యం మరియు urad dal + కూరగాయల పప్పు), khichdi (బియ్యం + moong dal). ఈ కలయికలు దాదాపు complete amino acid profiles ను సాధిస్తాయి. ఆధునిక పరిశోధన ధృవీకరించింది — complementary proteins ను ఒకే భోజనంలో తినాల్సిన అవసరం లేదు; ఒకే రోజులో తినడం తగిన amino acid లభ్యతకు సరిపోతుంది."
      />

      <h2>Protein Digestibility Scores</h2>

      <p>
        అన్ని protein లు శరీరానికి సమానంగా ఉపయోగపడవు. Protein నాణ్యత అంచనాలో amino acid
        కూర్పు మరియు జీర్ణశక్తి రెండూ పరిగణించాలి. అంతర్జాతీయంగా రెండు ప్రధాన scoring
        వ్యవస్థలు ఉపయోగించబడతాయి.
      </p>

      <DefinitionBlock
        title="PDCAAS మరియు DIAAS"
        definition="Protein Digestibility-Corrected Amino Acid Score (PDCAAS) ను amino acid score (ఆహారంలో అత్యంత limiting essential amino acid మరియు reference pattern లోని అదే amino acid నిష్పత్తి) ను protein యొక్క fecal digestibility తో గుణించడం ద్వారా లెక్కిస్తారు. విలువలు 1.0 వద్ద truncate అవుతాయి. కొత్త Digestible Indispensable Amino Acid Score (DIAAS) ప్రతి వ్యక్తిగత amino acid కు ileal digestibility (చిన్న ప్రేగు చివర) ను ఉపయోగిస్తుంది, ఇది మరింత ఖచ్చితమైన కొలతను అందిస్తుంది. DIAAS విలువలు 1.0 కంటే ఎక్కువగా ఉండవచ్చు."
        notation="PDCAAS: Score 0-1.0 (truncated). DIAAS: Score సాధారణంగా 0-1.5+ (truncate కాదు). FAO 2013 నుండి DIAAS ను ఇష్టపడే పద్ధతిగా సిఫార్సు చేస్తుంది."
      />

      <EvidenceBlock
        title="DIAAS: కొత్త Gold Standard"
        finding="FAO Expert Consultation, protein నాణ్యత అంచనా వేయడంలో PDCAAS స్థానంలో DIAAS ను ఇష్టపడే పద్ధతిగా సిఫార్సు చేసింది. DIAAS fecal crude protein digestibility బదులు వ్యక్తిగత amino acids యొక్క ileal digestibility ని ఉపయోగిస్తుంది, ఇది మరింత ఖచ్చితమైన మరియు శారీరకంగా అర్థవంతమైన అంచనాను అందిస్తుంది."
        study="FAO Expert Consultation on protein quality evaluation in human nutrition"
        source="FAO/WHO (2013) FAO Food and Nutrition Paper No. 92"
        details="Expert Consultation PDCAAS యొక్క అనేక పరిమితులను గుర్తించింది: ఇది ileal కాకుండా fecal digestibility ని ఉపయోగిస్తుంది (colon నుండి microbially modified amino acids సహకారాన్ని ఎక్కువగా అంచనా వేస్తుంది), ఇది విలువలను 1.0 వద్ద truncate చేస్తుంది (అధిక-నాణ్యత proteins మధ్య వ్యత్యాసం చూపడం అసాధ్యం), మరియు ఇది అన్ని amino acids కు ఒకే digestibility factor వర్తింపజేస్తుంది. DIAAS ఈ ప్రతి పరిమితిని పరిష్కరిస్తుంది, ఒక ఆహారం శరీరానికి నిజంగా ఎంత ఉపయోగించగల amino acid అందిస్తుందో మరింత ఖచ్చితమైన చిత్రాన్ని ఇస్తుంది."
      />

      <EvidenceBlock
        title="భారతీయ పెద్దవారిలో Protein Digestibility"
        finding="భారతీయ పెద్దవారిలో egg protein యొక్క ileal digestibility సుమారు 90-95%, ఇది పాశ్చాత్య జనాభాలో నివేదించిన విలువలకు సమానం. పాశ్చాత్య జనాభాలో అభివృద్ధి చేసిన protein నాణ్యత అంచనా పద్ధతులు భారతీయ జనాభాకు కూడా విస్తృతంగా వర్తిస్తాయని ఇది నిర్ధారిస్తుంది."
        study="భారతీయ పెద్దవారిలో ileal amino acid digestibility కొలిచే dual stable isotope tracer method అధ్యయనం"
        source="Kashyap et al. (2019) American Journal of Clinical Nutrition"
        details="Bangalore లోని St. John's Research Institute నుండి వచ్చిన ఈ అధ్యయనం భారతీయ జనాభాలో dual stable isotope tracer method ఉపయోగించి true ileal amino acid digestibility కొలిచిన మొదటి వాటిలో ఒకటి. ఈ ఫలితాలు భారతీయ ఆహార సిఫార్సులకు అంతర్జాతీయ protein నాణ్యత scoring పద్ధతుల వాడకాన్ని ధృవీకరించాయి మరియు భారతీయ ఆహారాల్లో తినే ఆహారాల DIAAS లెక్కింపులకు ముఖ్యమైన reference data ను అందించాయి."
      />

      <h2>Protein మరియు బరువు నిర్వహణ</h2>

      <p>
        Protein కు బరువు నిర్వహణకు అత్యంత ముఖ్యమైన macronutrient గా చేసే అనేక ప్రత్యేక
        లక్షణాలు ఉన్నాయి. ఎక్కువ protein తీసుకోవడం వివిధ జనాభాలలో బరువు తగ్గింపు ఫలితాలు,
        శరీర కూర్పు, మరియు దీర్ఘకాలిక బరువు నిర్వహణను స్థిరంగా మెరుగుపరుస్తుంది.
      </p>

      <h3>Satiety (తృప్తి)</h3>
      <p>
        Calorie కు calorie గా protein అత్యంత సంతృప్తి కలిగించే macronutrient. ఇది satiety
        hormones (GLP-1, PYY, cholecystokinin) విడుదలను ప్రేరేపిస్తుంది మరియు carbohydrates లేదా
        fats కంటే ఆకలి hormone ghrelin ను మరింత సమర్థవంతంగా అణచివేస్తుంది. ఇది ఉద్దేశపూర్వక
        నియంత్రణ లేకుండానే caloric intake లో స్వయంచాలక తగ్గుదలకు దారితీస్తుంది.
      </p>

      <h3>Thermic Effect (ఉష్ణ ప్రభావం)</h3>
      <p>
        Protein తినిన calories లో 20-30% thermic effect of food (TEF) కలిగి ఉంటుంది — ఇది
        macronutrients లో అత్యధికం. Carbohydrates కు 5-10% మరియు fats కు 0-3% మాత్రమే. అంటే 100
        kcal protein తింటే, 20-30 kcal జీర్ణం, absorption, మరియు processing లో ఖర్చవుతాయి. ఈ
        metabolic ప్రయోజనం చిన్నదిగా ఉన్నప్పటికీ కాలక్రమేణా అర్థవంతమైనది.
      </p>

      <h3>Lean Mass (కండరాల ద్రవ్యరాశి) సంరక్షణ</h3>
      <p>
        Caloric restriction సమయంలో, తగినంత protein తీసుకోవడం (1.2-1.6 g/kg/రోజు) lean body mass
        ను కాపాడటంలో సహాయపడుతుంది, తగ్గిన బరువులో ఎక్కువ భాగం కండరాల కంటే కొవ్వు నుండి రావడం
        నిర్ధారిస్తుంది. ఇది చాలా కీలకం ఎందుకంటే lean mass కోల్పోవడం basal metabolic rate ను
        తగ్గిస్తుంది, బరువు తిరిగి పెరగడానికి ఎక్కువ అవకాశం ఉంటుంది.
      </p>

      <EvidenceBlock
        title="బరువు తగ్గడం మరియు నిర్వహణ కోసం Protein"
        finding="ఎక్కువ protein ఆహారాలు (1.2-1.6 g/kg/రోజు) ప్రామాణిక protein ఆహారాలతో పోలిస్తే ఎక్కువ satiety, lean mass సంరక్షణతో ఎక్కువ fat loss, మెరుగైన శరీర కూర్పు, మరియు మెరుగైన దీర్ఘకాలిక బరువు నిర్వహణను స్థిరంగా అందించాయి."
        study="Protein తీసుకోవడం మరియు శరీర బరువు నియంత్రణను పరిశీలించే randomized controlled trials యొక్క సమగ్ర సమీక్ష"
        source="Leidy et al. (2015) American Journal of Clinical Nutrition"
        details="ఈ సమీక్ష అనేక RCTs నుండి ఆధారాలను విశ్లేషించింది మరియు ఒక్కో భోజనంలో 25-30 g protein ఆకలి నియంత్రణకు అత్యంత సమర్థవంతమని కనుగొంది. ఎక్కువ protein ఆహారాలు thermic effect of food ద్వారా 24-గంటల energy expenditure ను 80-100 kcal/రోజు పెంచాయి. బరువు తగ్గింపు trials లో, ఎక్కువ protein groups 6-12 నెలల్లో తక్కువ protein groups కంటే 1.2-2.5 kg ఎక్కువ fat mass కోల్పోయాయి. ఎక్కువ protein తీసుకోవడం resistance training తో కలిపినప్పుడు lean mass సంరక్షణ ముఖ్యంగా గుర్తించదగినదిగా ఉంది."
      />

      <h2>భారతీయ ఆహారంలో Protein</h2>

      <p>
        ప్రపంచవ్యాప్తంగా protein లోపం అధికంగా ఉన్న దేశాల్లో భారతదేశం ఒకటి. National Nutrition
        Monitoring Bureau సర్వేలు భారతీయ పెద్దవారిలో గణనీయమైన శాతం protein RDA కంటే తక్కువగా
        తీసుకుంటున్నారని స్థిరంగా చూపించాయి. జనాభాలో సుమారు 30-40% ఉన్న శాఖాహారులకు మరియు
        protein అధికమైన ఆహారాలకు పరిమిత ప్రాప్యత ఉన్న తక్కువ ఆదాయ వర్గాలకు ఇది ముఖ్యంగా
        ఆందోళన కలిగించేది.
      </p>

      <NutritionFactBlock
        food="Moong Dal (ఉడికించిన, 1 కటోరీ)"
        serving="100 g ఉడికించిన (సుమారు 30 g పచ్చిది)"
        calories={105}
        protein={7}
        carbs={18}
        fat={0.5}
        fiber={3}
        highlights={[
          'అత్యంత జీర్ణమయ్యే legumes లో ఒకటి (PDCAAS 0.72)',
          'Methionine తక్కువ — complete amino acids కోసం rice తో కలపండి',
          'Folate మరియు iron అధికంగా ఉంటుంది',
        ]}
      />

      <NutritionFactBlock
        food="Paneer (50 g)"
        serving="50 g (సుమారు 2 అంగుళాల ముక్క)"
        calories={140}
        protein={9}
        carbs={1}
        fat={11}
        fiber={0}
        highlights={[
          'అన్ని essential amino acids తో complete protein (PDCAAS 1.0)',
          'Calcium అధికం (50 g కు 250 mg)',
          'Fat content వల్ల calorie-dense — బరువు నిర్వహణ కోసం మోతాదు భోజనాలు తీసుకోండి',
        ]}
      />

      <WarningBlock
        title="భారతీయ శాఖాహార ఆహారాల్లో Protein లోపం"
        content="చాలా భారతీయ శాఖాహార ఆహారాలు రోజుకు కేవలం 30-40 g protein మాత్రమే అందిస్తాయి, ఇది RDA 48-60 g కంటే చాలా తక్కువ. సాధారణ తప్పులు: carbohydrate ఎక్కువగా ఉన్న భోజనాలపై అధికంగా ఆధారపడడం (అన్నం/రోటీ తక్కువ dal తో), breakfast లో protein-rich ఆహారాలను వదిలేయడం, మరియు dal లేదా paneer చాలా తక్కువ పరిమాణంలో వాడటం. Protein అవసరాలు తీర్చడానికి, శాఖాహారులు ప్రతి భోజనంలో ఒక protein source (dal, paneer, curd, soy, గుడ్లు — lacto-ovo అయితే) చేర్చాలి, మరియు roasted chana, sprouts, లేదా curd వంటి protein-rich snacks పరిగణించాలి."
      />

      <ExampleBlock
        title="భారతీయ శాఖాహారంతో Protein అవసరాలు తీర్చడం"
        description="సుమారు 55-60 g protein సాధించే ఆచరణాత్మక రోజు: Breakfast - 2 moong dal chilla (12 g protein) + curd (4 g). Lunch - 2 roti (7 g) + 1 కటోరీ rajma (9 g) + raita (3 g). Snack - roasted chana 30 g (6 g) + ఒక గ్లాసు buttermilk (3 g). Dinner - 1 కటోరీ rice (3 g) + 1 కటోరీ dal (7 g) + palak paneer 50 g paneer తో (9 g). మొత్తం: సుమారు 63 g protein. కీలకమైనది ప్రతి భోజనంలో legume, dairy, లేదా soy product చేర్చడం."
      />

      <h2>ముఖ్యమైన విషయాలు</h2>

      <ul>
        <li>
          Protein 4 kcal/g అందిస్తుంది మరియు కండరాలు, enzymes, hormones, మరియు immune
          function కు అవసరం. తొమ్మిది essential amino acids ఆహారం నుండి రావాలి.
        </li>
        <li>
          Protein నాణ్యత amino acid profile మరియు digestibility పై ఆధారపడుతుంది. పాత PDCAAS
          వ్యవస్థ స్థానంలో DIAAS ఇష్టపడే scoring పద్ధతి.
        </li>
        <li>
          Complementary proteins (ధాన్యాలు + legumes) complete amino acid profiles సాధిస్తాయి
          మరియు సాంప్రదాయ భారతీయ శాఖాహార ఆహారాల పునాది.
        </li>
        <li>
          ఎక్కువ protein తీసుకోవడం (1.2-1.6 g/kg/రోజు) satiety మెరుగుపరుస్తుంది, బరువు తగ్గేటప్పుడు
          lean mass కాపాడుతుంది, మరియు thermic effect ద్వారా energy expenditure పెంచుతుంది.
        </li>
        <li>
          చాలా భారతీయ ఆహారాలు protein-deficient. ప్రతి భోజనంలో protein source చేర్చడం మరియు
          ఒక్కో భోజనంలో 25-30 g లక్ష్యంగా పెట్టుకోవడం ఆచరణాత్మక లక్ష్యం.
        </li>
        <li>
          జంతు proteins (గుడ్లు, dairy, చేపలు, మాంసం) complete మరియు అధిక digestible; plant
          proteins సమానమైన అవసరాలు తీర్చడానికి కలపడం మరియు ఎక్కువ పరిమాణాలు అవసరం.
        </li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
