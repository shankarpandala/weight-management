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
    authors: 'Popkin BM, D\'Anci KE, Rosenberg IH',
    year: 2010,
    title: 'Water, hydration, and health',
    source: 'Nutrition Reviews, 68(8), 439-458',
    type: 'review',
  },
  {
    authors: 'Dennis EA, Dengo AL, Comber DL, Flack KD, Savla J, Davy KP, Davy BM',
    year: 2010,
    title: 'Water consumption increases weight loss during a hypocaloric diet intervention in middle-aged and older adults',
    source: 'Obesity, 18(2), 300-307',
    type: 'clinical',
  },
  {
    authors: 'Jéquier E, Constant F',
    year: 2010,
    title: 'Water as an essential nutrient: the physiological basis of hydration',
    source: 'European Journal of Clinical Nutrition, 64(2), 115-123',
    type: 'review',
  },
  {
    authors: 'Sawka MN, Burke LM, Eichner ER, Maughan RJ, Montain SJ, Stachenfeld NS',
    year: 2007,
    title: 'American College of Sports Medicine position stand: Exercise and fluid replacement',
    source: 'Medicine and Science in Sports and Exercise, 39(2), 377-390',
    type: 'foundational',
  },
  {
    authors: 'He FJ, MacGregor GA',
    year: 2011,
    title: 'Salt reduction lowers cardiovascular risk: meta-analysis of outcome trials',
    source: 'The Lancet, 378(9789), 380-382',
    type: 'review',
  },
  {
    authors: 'Aaron KJ, Sanders PW',
    year: 2013,
    title: 'Role of dietary salt and potassium intake in cardiovascular health and disease: a review of the evidence',
    source: 'Mayo Clinic Proceedings, 88(9), 987-995',
    type: 'review',
  },
  {
    authors: 'Johnson EC, Muñoz CX, Le Bellego L, Klein A, Casa DJ, Maresh CM, Armstrong LE',
    year: 2015,
    title: 'Markers of the hydration process during fluid volume modification in women with habitual high or low daily fluid intake',
    source: 'European Journal of Applied Physiology, 115(5), 1067-1074',
    type: 'clinical',
  },
];

export default function WaterAndElectrolytesTe() {
  return (
    <div className="prose-health">
      <h1>నీరు మరియు Electrolytes</h1>

      <p>
        నీరు మానవ మనుగడకు అత్యంత అవసరమైన పోషకం. పెద్దల శరీర బరువులో సుమారు 60% నీరు
        ఉంటుంది, దాదాపు ప్రతి శారీరక ప్రక్రియలో నీరు పాల్గొంటుంది: biochemical reactions కు
        solvent గా పనిచేస్తుంది, nutrients మరియు waste products ను రవాణా చేస్తుంది, evaporation
        ద్వారా శరీర ఉష్ణోగ్రతను నియంత్రిస్తుంది, organs మరియు joints ను రక్షిస్తుంది, మరియు
        రక్తం volume మరియు pressure ను నిర్వహిస్తుంది. ఆహారం లేకుండా వారాల పాటు బతకగలిగినా,
        నీరు లేకుండా కొన్ని రోజుల్లోనే మరణం సంభవించవచ్చు. Electrolytes — ద్రావణంలో విద్యుత్
        charges ను మోసుకెళ్లే minerals — నీటితో కలిసి fluid balance, nerve impulse transmission,
        మరియు muscle contraction ను నిర్వహిస్తాయి.
      </p>

      <DefinitionBlock
        title="నీరు మరియు Electrolytes"
        definition="నీరు (H2O) రక్తం plasma, intracellular fluid, మరియు interstitial fluid తో సహా శరీర ద్రవాల ప్రాథమిక భాగం. Electrolytes అనేవి ద్రావణంలో ions గా విడిపోయే minerals, ఇవి positive (cations: sodium, potassium, calcium, magnesium) లేదా negative (anions: chloride, bicarbonate, phosphate) charges ను కలిగి ఉంటాయి. నీరు మరియు electrolytes మధ్య సమతుల్యత cell volume, blood pressure, pH balance, మరియు neuromuscular function ను నిర్ణయిస్తుంది."
        notation="నీటి Adequate Intake (AI): పురుషులకు రోజుకు సుమారు 2.5 L, మహిళలకు రోజుకు 2.0 L (ఆహారం నుండి వచ్చేది సహా అన్ని sources నుండి). Sodium: రోజుకు 2000 mg కంటే తక్కువ (5 g ఉప్పు). Potassium: రోజుకు 3510 mg (WHO సిఫార్సు)."
      />

      <h2>నీరు: మరచిపోయిన పోషకం</h2>

      <h3>శరీరంలో పంపిణీ</h3>
      <p>
        మొత్తం శరీర నీరు రెండు ప్రధాన భాగాలలో పంపిణీ అవుతుంది: intracellular fluid
        (సుమారు మూడింట రెండు వంతులు, 70 kg పెద్దవారిలో సుమారు 28 liters) మరియు extracellular
        fluid (సుమారు మూడింట ఒక వంతు, సుమారు 14 liters). Extracellular fluid మరింతగా
        interstitial fluid (cells చుట్టూ ఉండే ద్రవం) మరియు plasma (రక్తం యొక్క ద్రవ భాగం)
        గా విభజించబడుతుంది. ఈ భాగాల మధ్య నీటి కదలిక ప్రధానంగా sodium (extracellular) మరియు
        potassium (intracellular) ద్వారా సృష్టించబడిన osmotic gradients ద్వారా నియంత్రించబడుతుంది.
      </p>

      <h3>నీటి పనితీరు</h3>
      <p>
        నీరు అనేక కీలకమైన పనులు చేస్తుంది: అన్ని metabolic reactions జరిగే universal solvent
        గా పనిచేస్తుంది, రక్తం మరియు lymph ద్వారా cells కు nutrients ను తీసుకెళ్లి metabolic
        waste ను తొలగిస్తుంది, చెమట ద్వారా ఉష్ణోగ్రత నియంత్రణకు అవసరం (1 liter చెమట
        evaporation సుమారు 580 kcal వేడిని తొలగిస్తుంది), joints మరియు జీర్ణ వ్యవస్థను
        lubricate చేస్తుంది, మరియు turgor pressure ద్వారా cells మరియు tissues కు structural
        support ఇస్తుంది.
      </p>

      <h3>రోజువారీ నీటి అవసరాలు</h3>
      <p>
        నీటి తీసుకోవడం మూడు మూలాల నుండి వస్తుంది: తాగే నీరు మరియు పానీయాలు (సుమారు 1.5-2
        liters), ఆహారంలోని నీరు (సుమారు 0.5-1 liter, పండ్లు మరియు కూరగాయలు ఎక్కువగా
        తినే ఆహారంలో ఎక్కువ), మరియు macronutrients oxidation సమయంలో ఉత్పత్తి అయ్యే
        metabolic water (సుమారు 250-350 ml). నీటి నష్టాలు urine ద్వారా (1-2 liters),
        చర్మం మరియు శ్వాసక్రియ ద్వారా insensible losses (సుమారు 0.5-1 liter), చెమట
        (చాలా మారుతుంది: activity మరియు climate ను బట్టి 0.5-2+ liters), మరియు మలం
        ద్వారా (సుమారు 100-200 ml) జరుగుతాయి.
      </p>

      <EvidenceBlock
        title="Hydration ప్రాథమికాలు"
        finding="తేలికపాటి dehydration కూడా (శరీర బరువులో 1-2% నీటి నష్టం) cognitive performance ను దెబ్బతీస్తుంది, అలసటను పెంచుతుంది, మరియు మానసిక స్థితిని దిగజార్చుతుంది. శరీరానికి నిజమైన నీటి నిల్వ mechanism లేదు, మరియు రోజువారీ నష్టాలను intake ద్వారా భర్తీ చేయాలి. దాహం ఉపయోగకరమైన signal అయినప్పటికీ, అది తరచుగా నిజమైన dehydration కంటే ఆలస్యంగా వస్తుంది, ముఖ్యంగా వృద్ధులలో మరియు exercise సమయంలో."
        study="Hydration అవసరాలు మరియు ఆరోగ్య ప్రభావాల యొక్క physiological basis పై సమగ్ర సమీక్ష"
        source="Jéquier & Constant (2010) European Journal of Clinical Nutrition"
        details="ఈ సమీక్ష శరీర పరిమాణం, physical activity, climate, మరియు ఆహార కూర్పు ఆధారంగా నీటి తీసుకోవడం అవసరాలు గణనీయంగా మారుతాయని నిర్ధారించింది. సమశీతోష్ణ వాతావరణాల్లో మితమైన activity తో, adequate intake అన్ని sources నుండి పురుషులకు రోజుకు సుమారు 2.5 L మరియు మహిళలకు 2.0 L. వేడి వాతావరణాల్లో (సంవత్సరంలో ఎక్కువ భాగం భారతదేశంలో చాలా వర్తిస్తుంది), అవసరాలు 50-100% పెరగవచ్చు. దీర్ఘకాలిక తేలికపాటి dehydration సాధారణమైనది మరియు kidney stones, urinary tract infections, మరియు బహుశా chronic kidney disease తో సహా దీర్ఘకాలిక ఆరోగ్య పరిణామాలు ఉండవచ్చని రచయితలు నొక్కిచెప్పారు."
      />

      <NoteBlock
        title="భారతదేశ వాతావరణంలో Hydration"
        content="భారతదేశ ఉష్ణమండల మరియు ఉపఉష్ణమండల వాతావరణం నీటి అవసరాలను గణనీయంగా పెంచుతుంది. వేసవి నెలల్లో (మార్చి-జూన్), ఉత్తర మరియు మధ్య భారతదేశంలో ఉష్ణోగ్రతలు క్రమం తప్పకుండా 40°C కంటే ఎక్కువగా ఉంటాయి, కనీస activity తో కూడా చెమట నష్టాలు రోజుకు 2-4 liters కు పెరుగుతాయి. బయట పని చేసే కార్మికులు రోజుకు 6-8 liters కోల్పోవచ్చు. 'రోజుకు 8 గ్లాసులు' అనేది కనిష్టం; చాలా మంది భారతీయ పెద్దలకు వేసవి నెలల్లో రోజుకు 3-4 liters మొత్తం ద్రవం అవసరం. తగినంత hydration ఉన్నట్లు సూచనలు: లేత పసుపు రంగు urine మరియు రోజుకు 6-8 సార్లు urinate చేయడం. ముదురు పసుపు లేదా amber రంగు urine dehydration ను సూచిస్తుంది మరియు ఎక్కువ ద్రవాలు తీసుకోవాల్సిన అవసరాన్ని తెలియజేస్తుంది."
      />

      <h2>నీరు మరియు బరువు నిర్వహణ</h2>

      <p>
        బరువు నిర్వహణలో నీరు అనేక ముఖ్యమైన పాత్రలు పోషిస్తుంది, ఇవి తరచుగా విస్మరించబడతాయి.
        దీనిలో zero calories ఉంటాయి, caloric beverages కు పాక్షికంగా ప్రత్యామ్నాయంగా
        ఉపయోగించవచ్చు, భోజనానికి ముందు తాగితే satiety ను పెంచుతుంది, మరియు నిల్వ చేసిన
        కొవ్వును mobilize చేసి oxidize చేసే metabolic ప్రక్రియలకు అవసరం.
      </p>

      <EvidenceBlock
        title="భోజనానికి ముందు నీరు బరువు తగ్గడాన్ని మెరుగుపరుస్తుంది"
        finding="మధ్య వయస్కులు మరియు పెద్ద వయసు పెద్దలు రోజులో మూడు భోజనాలకు ముందు 500 ml నీరు తాగినప్పుడు, pre-meal water లేకుండా అదే hypocaloric diet అనుసరించిన control group తో పోలిస్తే 12 వారాలలో సగటున 2 kg ఎక్కువ బరువు తగ్గారు. నీటి preload group ప్రతి భోజనంలో 75-90 తక్కువ calories తీసుకున్నారు."
        study="Hypocaloric diet intervention సమయంలో pre-meal water consumption యొక్క randomized controlled trial"
        source="Dennis et al. (2010) Obesity"
        details="ఈ అధ్యయనంలో 55-75 సంవత్సరాల వయస్సు గల 48 మంది అధిక బరువు లేదా obese పెద్దలను చేర్చుకొని, pre-meal water loading (ప్రతి భోజనానికి 30 నిమిషాల ముందు 500 ml) తో లేదా లేకుండా hypocaloric diet కు యాదృచ్ఛికంగా కేటాయించారు. 12 వారాల తర్వాత, నీటి group 44% ఎక్కువ బరువు తగ్గింది (7.2 kg vs 5.0 kg). Mechanism గా gastric distension mechanoreceptor-mediated satiety signals ను trigger చేసి, తదుపరి భోజనంలో తినాలనే కోరికను తగ్గిస్తుందని కనిపిస్తుంది. ఈ సరళమైన, zero-cost intervention భారతీయ పరిస్థితుల్లో ప్రత్యేకంగా ఆచరణీయమైనది."
      />

      <ExampleBlock
        title="బరువు నిర్వహణ కోసం Hydration వ్యూహం"
        description="ఆచరణాత్మక రోజువారీ hydration ప్రణాళిక: (1) ఉదయం 1-2 గ్లాసుల వెచ్చని నీటితో మొదలుపెట్టండి (peristalsis ను ప్రేరేపించే evidence ద్వారా మద్దతు పొందిన సాంప్రదాయ భారతీయ అలవాటు). (2) ప్రతి ప్రధాన భోజనానికి 30 నిమిషాల ముందు 500 ml నీరు తాగండి (calorie intake తగ్గించడానికి evidence-based వ్యూహం). (3) చక్కెర పానీయాలను (packaged fruit juice, soda, తీపి చేసిన chai) సాదా నీరు, చక్కెర లేని nimbu pani, లేదా green tea తో భర్తీ చేయండి. (4) మీ desk వద్ద 1-liter bottle ఉంచుకొని lunch లోపు దాన్ని పూర్తి చేయండి, తర్వాత మళ్ళీ నింపండి. (5) నీరు ఎక్కువగా ఉన్న పండ్లు మరియు కూరగాయలు తినండి: cucumber (96% నీరు), watermelon (92%), tomato (95%), kakdi (95%), lauki (92%). (6) Urine రంగును గమనించండి — రోజంతా లేత పసుపు రంగు ఉండేలా చూడండి."
      />

      <h2>Electrolytes</h2>

      <h3>Sodium</h3>
      <p>
        Sodium extracellular fluid లో ప్రాథమిక cation మరియు extracellular fluid volume
        మరియు blood pressure యొక్క ప్రధాన నిర్ణాయకం. Nerve impulse transmission, muscle
        contraction, మరియు nutrient absorption కు ఇది అవసరం. అయితే, అధిక sodium
        తీసుకోవడం hypertension మరియు cardiovascular disease కు అత్యంత ముఖ్యమైన మార్పు
        చేయగల risk factors లో ఒకటి.
      </p>

      <p>
        WHO sodium తీసుకోవడాన్ని రోజుకు 2000 mg కంటే తక్కువగా (5 g ఉప్పుకు సమానం)
        పరిమితం చేయాలని సిఫార్సు చేస్తుంది. సగటు భారతీయుడు రోజుకు సుమారు 9-12 g ఉప్పు
        తీసుకుంటాడు — ఇది సిఫార్సు చేసిన పరిమితి కంటే దాదాపు రెట్టింపు. భారతీయ ఆహారాల్లో
        అధిక sodium యొక్క ప్రధాన మూలాలు వంటలో కలిపే ఉప్పు, pickles (achar), papad,
        chutneys, మరియు processed/packaged ఆహారాలు.
      </p>

      <EvidenceBlock
        title="ఉప్పు తగ్గింపు మరియు Cardiovascular Risk"
        finding="ఉప్పు తీసుకోవడం తగ్గించడం cardiovascular events ను గణనీయంగా తగ్గించింది. రోజుకు సుమారు 5 g ఉప్పు తగ్గింపు stroke లో 23% తగ్గుదల మరియు మొత్తం cardiovascular disease లో 17% తగ్గుదలతో సంబంధం కలిగి ఉంది."
        study="ఉప్పు తగ్గింపు cardiovascular events పై ప్రభావాన్ని పరిశీలించే outcome trials యొక్క meta-analysis"
        source="He & MacGregor (2011) The Lancet"
        details="13 prospective studies మరియు outcome trials యొక్క ఈ meta-analysis ఉప్పు తగ్గింపు మరియు cardiovascular events మధ్య స్థిరమైన మరియు గణనీయమైన సంబంధాన్ని కనుగొన్నది. ప్రయోజనం dose-dependent — ఎక్కువ ఉప్పు తగ్గింపు ఎక్కువ risk తగ్గింపును ఇచ్చింది. మితమైన తగ్గింపులు కూడా (రోజుకు 2-3 g) clinically అర్థవంతమైన blood pressure తగ్గింపులను ఇస్తాయని, ముఖ్యంగా hypertension ఉన్నవారిలో, వృద్ధులలో, మరియు ఎక్కువ salt sensitivity ఉండే South Asian వంశజులలో అని రచయితలు గుర్తించారు."
      />

      <WarningBlock
        title="భారతీయ ఆహారాల్లో దాగిన Sodium"
        content="వంట సమయంలో కలిపే ఉప్పు కాకుండా, చాలా సాంప్రదాయ భారతీయ ఆహారాలలో చాలా ఎక్కువ sodium ఉంటుంది: ఒక tablespoon pickle (achar) లో సుమారు 800-1000 mg sodium ఉంటుంది, ఒక papad లో 300-400 mg ఉంటుంది, commercial masala mixes మరియు ready-to-eat meals sodium-dense గా ఉంటాయి, మరియు ఆరోగ్యకరంగా అనిపించే canned rajma లేదా packaged soups కూడా ప్రతి serving లో 600-800 mg కలిగి ఉండవచ్చు. రుచి మొగ్గలు 2-3 వారాలలో ఉప్పు స్థాయిలకు అలవాటు పడతాయి — క్రమంగా ఉప్పు తగ్గించడం రుచి గ్రహణ శక్తిని recalibrate చేయడానికి అనుమతిస్తుంది. ఉప్పు ఎక్కువగా ఉన్న condiments స్థానంలో తాజా herbs, నిమ్మకాయ, amchur (ఎండు మామిడి పొడి), మరియు తాజాగా దంచిన మసాలాలు వాడండి."
      />

      <h3>Potassium</h3>
      <p>
        Potassium cells లోపల ప్రాథమిక cation మరియు fluid balance, nerve signals, మరియు
        muscle contractions ను నియంత్రించడానికి sodium కు వ్యతిరేకంగా పని చేస్తుంది.
        తగినంత potassium తీసుకోవడం sodium యొక్క blood pressure పెంచే ప్రభావాన్ని
        ప్రతిఘటించడంలో సహాయపడుతుంది, మరియు అధిక potassium తీసుకోవడం ఉన్న జనాభాలో
        స్థిరంగా తక్కువ hypertension మరియు stroke రేట్లు ఉంటాయి. WHO పెద్దలకు రోజుకు
        కనీసం 3510 mg potassium సిఫార్సు చేస్తుంది.
      </p>

      <p>
        చాలా మంది భారతీయులు సిఫార్సు కంటే గణనీయంగా తక్కువ potassium తీసుకుంటారు, అదే
        సమయంలో అధిక sodium తీసుకుంటారు. ఇది cardiovascular risk ను పెంచే అననుకూల
        sodium-to-potassium ratio ను సృష్టిస్తుంది. Sodium తీసుకోవడం తగ్గిస్తూ potassium
        తీసుకోవడం పెంచడం blood pressure నియంత్రణకు synergistic ప్రయోజనాలను ఇస్తుంది.
      </p>

      <ComparisonTable
        title="Sodium-Potassium సమతుల్యత: ముఖ్యమైన భారతీయ ఆహారాలు"
        headers={['ఆహారం', 'Serving', 'Sodium (mg)', 'Potassium (mg)', 'Ratio అంచనా']}
        rows={[
          ['అరటిపండు', '1 మధ్యస్థం (120 g)', '1', '420', 'అద్భుతం — చాలా ఎక్కువ K, నామమాత్రం Na'],
          ['Coconut water', '200 ml', '105', '500', 'మంచిది — ఎక్కువ K, మితమైన Na'],
          ['పాలకూర (palak)', '100 g ఉడికించినది', '70', '466', 'అద్భుతం — ఎక్కువ K, తక్కువ Na'],
          ['చిలగడదుంప', '100 g ఉడికించినది', '36', '337', 'మంచి potassium మూలం'],
          ['పెరుగు/Dahi', '200 g', '100', '280', 'మంచి సమతుల్యత'],
          ['Pickle (మామిడి)', '1 tbsp (20 g)', '800-1000', '30', 'చాలా చెడ్డది — అధిక Na'],
          ['Papad (వేయించినది)', '1 ముక్క', '300-400', '50', 'చాలా చెడ్డది — ఎక్కువ Na, తక్కువ K'],
          ['Namkeen/Bhujia', '30 g', '400-600', '80', 'చాలా చెడ్డది — అధిక Na'],
        ]}
        highlightColumn={4}
      />

      <h3>Magnesium</h3>
      <p>
        Magnesium energy production, protein synthesis, blood glucose control, మరియు blood
        pressure regulation తో సహా 300 కంటే ఎక్కువ enzymatic reactions లో పాల్గొంటుంది.
        ఎముకల ఆరోగ్యానికి కూడా ఇది ముఖ్యమైనది, శరీరంలోని magnesium లో సుమారు 60% ఎముకలో
        నిల్వ ఉంటుంది. మంచి భారతీయ మూలాలలో ఆకు కూరలు, nuts (ముఖ్యంగా almonds మరియు
        cashews), seeds, whole grains, మరియు legumes ఉన్నాయి. Magnesium లోపం muscle cramps,
        అలసట, మరియు insulin resistance గా కనిపించవచ్చు.
      </p>

      <h2>Exercise మరియు వేడిలో Electrolyte సమతుల్యత</h2>

      <p>
        చెమటలో నీరు మరియు electrolytes రెండూ ఉంటాయి, ప్రధానంగా sodium (సగటున 920 mg/L),
        chloride, మరియు తక్కువ మొత్తంలో potassium, calcium, మరియు magnesium. భారతదేశ వేడిలో
        సుదీర్ఘ exercise లేదా పని సమయంలో, electrolyte నష్టాలు గణనీయంగా ఉండవచ్చు.
        Electrolytes లేకుండా కేవలం నీరు మాత్రమే భర్తీ చేయడం hyponatremia (ప్రమాదకరంగా
        తక్కువ blood sodium) కు దారితీయవచ్చు, ఇది ప్రాణాంతకం కావచ్చు.
      </p>

      <ExampleBlock
        title="భారతీయ పరిస్థితులకు ఇంట్లో తయారుచేసే Oral Rehydration"
        description="వేడి లేదా exercise వల్ల మితమైన dehydration కోసం, ఇంట్లో తయారుచేసే electrolyte drink ప్రభావవంతమైనది మరియు పొదుపైనది: 1 liter శుభ్రమైన తాగు నీటిలో 6 సమతల teaspoons చక్కెర మరియు అర లెవల్ teaspoon ఉప్పు కరగించండి. మెరుగైన రుచి మరియు అదనపు potassium కోసం, ఒక నిమ్మకాయ లేదా nimbu రసం కలపండి. ఇది WHO oral rehydration solution formula కు దగ్గరగా ఉంటుంది. సాంప్రదాయ భారతీయ ఎంపికలు: nimbu pani (చిటికెడు ఉప్పు మరియు చక్కెర తో నిమ్మరసం), chaas/buttermilk (sodium, potassium, మరియు fluid ను అందిస్తుంది), మరియు nariyal pani (coconut water — అద్భుతమైన electrolyte profile తో సహజ isotonic drink) — ఇవి ప్రభావవంతమైన మరియు సాంస్కృతికంగా అనువైన rehydration ఎంపికలు."
      />

      <NoteBlock
        title="Caffeine మరియు Hydration"
        content="ప్రచలిత నమ్మకానికి విరుద్ధంగా, మితమైన caffeine తీసుకోవడం (రోజుకు 400 mg వరకు, 3-4 cups coffee లేదా 6-8 cups tea కు సమానం) అలవాటైన వినియోగదారులలో net dehydration కు కారణం కాదు. Caffeine తేలికపాటి diuretic effect కలిగి ఉన్నప్పటికీ, caffeinated beverages తో తీసుకునే ద్రవం పెరిగిన urinary output ను మించి భర్తీ చేస్తుంది. అయితే, నీరు లేకుండా తాగే చాలా strong tea మరియు coffee — భారతీయ workplaces లో సాధారణం — చాలా తక్కువ fluid volumes ను అందిస్తాయి. అదనంగా, భోజనంతో తాగే tea iron absorption ను అడ్డుకుంటుంది, కాబట్టి hydration ప్రభావాలు neutral అయినప్పటికీ timing ముఖ్యం."
      />

      <h2>ముఖ్యమైన అంశాలు</h2>

      <ul>
        <li>
          నీరు శరీర బరువులో 60% ఉంటుంది మరియు దాదాపు ప్రతి శారీరక ప్రక్రియలో పాల్గొంటుంది.
          చాలా మంది భారతీయ పెద్దలకు రోజుకు 3-4 liters మొత్తం ద్రవం అవసరం, వేసవిలో మరియు
          physical activity తో ఎక్కువ.
        </li>
        <li>
          భోజనానికి 30 నిమిషాల ముందు 500 ml నీరు తాగడం calorie intake ను తగ్గించి 12
          వారాలలో సుమారు 2 kg బరువు తగ్గడాన్ని మెరుగుపరిచే evidence-based వ్యూహం.
        </li>
        <li>
          భారతీయ ఆహారాలలో సిఫార్సు చేసిన దాని కంటే దాదాపు రెట్టింపు sodium ఉంటుంది (9-12 g
          ఉప్పు vs 5 g సిఫార్సు). వంట ఉప్పు కాకుండా ప్రధాన మూలాలు pickles, papad, మరియు
          processed ఆహారాలు. Sodium తీసుకోవడం రోజుకు 5 g తగ్గించడం stroke risk ను 23%
          తగ్గిస్తుంది.
        </li>
        <li>
          Potassium తీసుకోవడం సాధారణంగా సరిపోదు. Sodium తగ్గిస్తూ potassium పెంచడం (అరటిపండ్లు,
          coconut water, ఆకు కూరలు, dal) synergistic blood pressure ప్రయోజనాలను ఇస్తుంది.
        </li>
        <li>
          భారతదేశ వేడిలో సుదీర్ఘ exercise లేదా పని సమయంలో electrolyte భర్తీ చాలా అవసరం.
          Buttermilk, nimbu pani, మరియు coconut water వంటి సాంప్రదాయ ఎంపికలు ప్రభావవంతమైనవి
          మరియు సాంస్కృతికంగా అనువైనవి.
        </li>
        <li>
          దాహం మీద మాత్రమే ఆధారపడకుండా urine రంగు ద్వారా hydration ను గమనించండి (లేత
          పసుపు = బాగా hydrated), ఇది నమ్మదగని సూచిక, ముఖ్యంగా వృద్ధులలో మరియు వేడి
          వాతావరణాల్లో.
        </li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
