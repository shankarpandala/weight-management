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
    authors: 'Westerterp KR',
    year: 2004,
    title: 'Diet induced thermogenesis',
    source: 'Nutrition & Metabolism, 1(1), 5',
    type: 'review',
  },
  {
    authors: 'Halton TL, Hu FB',
    year: 2004,
    title: 'The effects of high protein diets on thermogenesis, satiety and weight loss: a critical review',
    source: 'Journal of the American College of Nutrition, 23(5), 373-385',
    type: 'review',
  },
  {
    authors: 'Tappy L',
    year: 1996,
    title: 'Thermic effect of food and sympathetic nervous system activity in humans',
    source: 'Reproduction Nutrition Development, 36(4), 391-397',
    type: 'review',
  },
  {
    authors: 'Westerterp-Plantenga MS, Lemmens SG, Westerterp KR',
    year: 2012,
    title: 'Dietary protein - its role in satiety, energetics, weight loss and health',
    source: 'British Journal of Nutrition, 108(S2), S105-S112',
    type: 'review',
  },
  {
    authors: 'Barr SB, Wright JC',
    year: 2010,
    title: 'Postprandial energy expenditure in whole-food and processed-food meals: implications for daily energy expenditure',
    source: 'Food & Nutrition Research, 54, 5144',
    type: 'clinical',
  },
  {
    authors: 'De Jonge L, Bray GA',
    year: 1997,
    title: 'The thermic effect of food and obesity: a critical review',
    source: 'Obesity Research, 5(6), 622-631',
    type: 'review',
  },
  {
    authors: 'Acheson KJ, Blondel-Lubrano A, Oguey-Araymon S, Beaumont M, Emady-Azar S, Ammon-Zufferey C, Monnard I, Pinaud S, Nielsen-Moennoz C, Bovetto L',
    year: 2011,
    title: 'Protein choices targeting thermogenesis and metabolism',
    source: 'American Journal of Clinical Nutrition, 93(3), 525-534',
    type: 'clinical',
  },
];

export default function ThermicEffectOfFoodTe() {
  return (
    <div className="prose-health">
      <h1>Thermic Effect of Food (TEF) — ఆహారం యొక్క ఉష్ణ ప్రభావం</h1>

      <p>
        ఆహారం యొక్క thermic effect, దీనిని diet-induced thermogenesis (DIT) లేదా specific
        dynamic action of food అని కూడా అంటారు, ఇది తిన్న తర్వాత basal metabolic rate కంటే
        పైన పెరిగే energy expenditure ను సూచిస్తుంది. ఈ పెరుగుదల భోజనం నుండి nutrients ను
        జీర్ణించడం, absorb చేయడం, రవాణా చేయడం, metabolize చేయడం మరియు నిల్వ చేయడం వంటి
        metabolic ఖర్చును సూచిస్తుంది. TEF సాధారణంగా మొత్తం రోజువారీ energy expenditure లో
        సుమారు 8-15% వరకు ఉంటుంది, ఇది energy balance equation లో అతి చిన్నది అయినప్పటికీ
        అర్థవంతమైన భాగం.
      </p>

      <DefinitionBlock
        title="Thermic Effect of Food (TEF)"
        definition="ఆహారం తిన్న తర్వాత metabolic rate లో పెరుగుదలను TEF అంటారు, ఇది nutrient processing యొక్క energy ఖర్చును సూచిస్తుంది. TEF తిన్న కొన్ని నిమిషాల్లోనే మొదలవుతుంది, భోజనం తర్వాత 1-3 గంటలలో గరిష్టానికి చేరుతుంది, మరియు భోజనం పరిమాణం మరియు composition ను బట్టి 5-6 గంటల వరకు కొనసాగవచ్చు. ఇది postprandial energy expenditure మరియు basal (fasting) energy expenditure మధ్య తేడాగా కొలుస్తారు."
        notation="TEF మొత్తం రోజువారీ energy expenditure లో సుమారు 8-15% ఉంటుంది. దీనిని తిన్న ఆహారం యొక్క energy content శాతంగా లేదా kcal లో absolute value గా వ్యక్తం చేస్తారు. దీనిని Diet-Induced Thermogenesis (DIT) లేదా Specific Dynamic Action (SDA) అని కూడా అంటారు."
      />

      <h2>Macronutrient ప్రకారం TEF</h2>

      <p>
        Thermic effect macronutrient రకాన్ని బట్టి గణనీయంగా మారుతుంది. ఈ వ్యత్యాసం ప్రతి
        macronutrient ను process చేయడంలో ఉన్న వేర్వేరు metabolic pathways మరియు biochemical
        ఖర్చులను ప్రతిబింబిస్తుంది. Protein కు అత్యధిక TEF ఉంటుంది, తర్వాత carbohydrates,
        ఆపై fats. Alcohol కు మధ్యస్థ TEF ఉంటుంది. ఈ తేడాలు బరువు నిర్వహణకు అర్థవంతమైన
        ప్రభావాలను కలిగి ఉంటాయి.
      </p>

      <ComparisonTable
        title="Macronutrient ప్రకారం Thermic Effect"
        headers={['Macronutrient', 'TEF (% of energy)', 'ఒక gram కు Net Energy', 'ప్రధాన Metabolic ఖర్చు']}
        rows={[
          ['Protein', '20-30%', '~2.8-3.2 kcal', 'Deamination, urea synthesis, gluconeogenesis, protein turnover'],
          ['Carbohydrate', '5-10%', '~3.6-3.8 kcal', 'Glycogen synthesis, glucose transport, insulin secretion'],
          ['Fat', '0-3%', '~8.7-9.0 kcal', 'కనిష్ట processing — fatty acids సులభంగా triglycerides గా నిల్వ అవుతాయి'],
          ['Alcohol', '10-30%', '~5.0-5.6 kcal (7 kcal/g లో)', 'Alcohol dehydrogenase ద్వారా obligatory oxidation'],
          ['Mixed diet', '8-15%', 'మారుతుంది', 'అన్ని macronutrients యొక్క combined effects'],
        ]}
        highlightColumn={1}
      />

      <h3>Protein కు అత్యధిక TEF ఎందుకు ఉంటుంది</h3>
      <p>
        Protein యొక్క అధిక thermic effect (20-30%) amino acid processing యొక్క గణనీయమైన
        metabolic ఖర్చు వల్ల వస్తుంది. Fats మరియు carbohydrates వలె కాకుండా, శరీరానికి
        అదనపు amino acids కోసం ప్రత్యేక నిల్వ రూపం లేదు. Protein తిన్నప్పుడు, amino acids
        చురుగ్గా transport చేయబడాలి, deaminate చేయబడాలి (nitrogen కలిగిన amino group తొలగింపు),
        nitrogen ను విసర్జన కోసం urea గా మార్చాలి (ఇది energy-expensive cycle), మరియు carbon
        skeletons ను energy కోసం oxidize చేయాలి లేదా glucose లేదా fatty acids గా మార్చాలి.
        Protein turnover (శరీర proteins యొక్క నిరంతర విచ్ఛిన్నం మరియు పునర్నిర్మాణం) కూడా
        అధిక metabolic ఖర్చుకు దోహదం చేస్తుంది.
      </p>

      <h3>Fat కు అతి తక్కువ TEF ఎందుకు ఉంటుంది</h3>
      <p>
        Dietary fat కు చాలా తక్కువ thermic effect (0-3%) ఉంటుంది, ఎందుకంటే నిల్వకు ముందు
        కనిష్ట biochemical transformation అవసరం. Dietary triglycerides hydrolyze అవుతాయి,
        absorb అవుతాయి, chylomicrons గా repackage అవుతాయి, మరియు adipose tissue కు transport
        అవుతాయి, అక్కడ అవి చాలా అధిక efficiency తో triglycerides గా నిల్వ అవుతాయి. Dietary
        fat నుండి నిల్వ body fat కు metabolic pathway ముఖ్యంగా కనిష్ట biochemical conversion
        తో ఒక transport process, ఇది చాలా తక్కువ energy ను ఖర్చు చేస్తుంది.
      </p>

      <EvidenceBlock
        title="Macronutrient Composition మరియు Thermogenesis"
        finding="Diet-induced thermogenesis ను indirect calorimetry ద్వారా కొలిచిన అన్ని studies యొక్క review లో fat కు 0-3%, carbohydrate కు 5-10%, మరియు protein కు 20-30% అనే స్థిరమైన విలువలు కనుగొనబడ్డాయి. సాధారణ mixed diet కోసం, TEF సగటున energy intake లో సుమారు 10% ఉంది. Protein యొక్క అధిక TEF అనేది తప్పించుకోలేని obligatory metabolic ఖర్చు."
        study="మూడు దశాబ్దాల diet-induced thermogenesis పరిశోధన యొక్క సమగ్ర review"
        source="Westerterp (2004) Nutrition & Metabolism"
        details="ఈ review macronutrients యొక్క thermic effect studies మరియు populations లో సాపేక్షంగా స్థిరంగా ఉంటుందని నిర్ధారించింది. 2000 kcal diet లో, macronutrient composition ను 15% protein నుండి 30% protein కు మార్చడం (మొత్తం calories స్థిరంగా ఉంచి) రోజువారీ TEF ను సుమారు 180 kcal నుండి సుమారు 240 kcal కు పెంచుతుంది — రోజుకు 60 kcal తేడా. ఇది తక్కువగా అనిపించినా, ఈ metabolic advantage కాలక్రమేణా సంకలనమై, అధిక-protein diets తో కనిపించే మెరుగైన బరువు నిర్వహణ ఫలితాలకు దోహదం చేస్తుంది."
      />

      <EvidenceBlock
        title="Protein Thermogenesis మరియు బరువు తగ్గడం"
        finding="అదే మొత్తం caloric intake వద్ద standard-protein diets తో పోలిస్తే, high-protein diets thermogenesis ను రోజుకు 80-100 kcal స్థిరంగా పెంచాయి. ఈ thermogenic advantage, protein యొక్క అద్భుతమైన satiety effects తో కలిసి, బహుళ randomized controlled trials లో high-protein diet groups లో గణనీయంగా ఎక్కువ బరువు తగ్గడం మరియు fat తగ్గడం చూపించింది."
        study="High-protein diets, thermogenesis, మరియు బరువు నిర్వహణపై randomized controlled trials యొక్క critical review"
        source="Halton & Hu (2004) Journal of the American College of Nutrition"
        details="ఈ review 15 studies ను విశ్లేషించింది మరియు protein యొక్క thermogenic effect అత్యంత స్థిరమైన finding అని కనుగొంది. High-protein diets యొక్క రోజుకు 80-100 kcal thermogenic advantage, ఇతర అన్ని factors స్థిరంగా ఉంటాయని అనుకుంటే, సంవత్సరానికి సుమారు 3-4 kg అదనపు బరువు తగ్గడంగా మారుతుంది. రచయితలు ఈ thermogenic effect protein యొక్క satiety effects నుండి వేరుగా మరియు అదనంగా ఉంటుందని, ఇది caloric intake ను కూడా తగ్గిస్తుందని పేర్కొన్నారు."
      />

      <h2>TEF ను ప్రభావితం చేసే Factors</h2>

      <h3>భోజనం పరిమాణం మరియు ఫ్రీక్వెన్సీ</h3>
      <p>
        TEF భోజనం యొక్క energy content కు అనులోమానుపాతంలో ఉంటుంది — పెద్ద భోజనాలు ఎక్కువ
        absolute thermic effect ను ఉత్పత్తి చేస్తాయి. అయితే, మొత్తం caloric intake మరియు
        macronutrient composition స్థిరంగా ఉన్నప్పుడు meal frequency స్వతంత్రంగా మొత్తం
        రోజువారీ TEF ను ప్రభావితం చేస్తుందనే convincing ఆధారం లేదు. ఒకే మొత్తం composition
        తో ఆరు చిన్న భోజనాలు తినడం మరియు మూడు పెద్ద భోజనాలు తినడం సుమారు ఒకే 24-గంటల
        TEF ను ఉత్పత్తి చేస్తాయి. తరచుగా తినడం &quot;metabolism అగ్నిని రేపుతుంది&quot; అనే
        ప్రాచుర్యం పొందిన ఆలోచన ఆధారాలతో నిరూపించబడలేదు.
      </p>

      <h3>Food Processing మరియు Whole Foods</h3>
      <p>
        Food processing స్థాయి TEF ను గణనీయంగా ప్రభావితం చేస్తుంది. Whole, కనిష్టంగా
        processed ఆహారాలకు ఎక్కువ mechanical మరియు chemical జీర్ణక్రియ అవసరం, ఇది అదే
        macronutrient content ఉన్న highly processed equivalents తో పోలిస్తే అధిక thermic
        effect ను ఇస్తుంది.
      </p>

      <EvidenceBlock
        title="Whole Foods vs Processed Foods మరియు TEF"
        finding="Whole-food భోజనం (multi-grain bread with cheddar cheese) energy-matched processed-food భోజనం (white bread with processed cheese) కంటే దాదాపు 50% ఎక్కువ thermic effect ను ఉత్పత్తి చేసింది. Whole-food భోజనం తర్వాత postprandial energy expenditure సుమారు 137 kcal, processed-food భోజనం తర్వాత 73 kcal."
        study="Whole-food మరియు processed-food భోజనాల నుండి postprandial energy expenditure ను పోల్చే crossover study"
        source="Barr & Wright (2010) Food & Nutrition Research"
        details="ఈ study పాల్గొనేవారికి whole లేదా processed ఆహారాల isocaloric భోజనాలు (సుమారు 800 kcal) ఇచ్చి, భోజనం తర్వాత 5 గంటల పాటు energy expenditure ను కొలిచింది. Processed meal యొక్క తక్కువ TEF ఇప్పటికే పారిశ్రామికంగా చేయబడిన pre-processing వల్ల — grinding, refining, మరియు pre-cooking ఆహార నిర్మాణాలను విచ్ఛిన్నం చేస్తాయి, లేకపోతే శరీరం metabolically విచ్ఛిన్నం చేయవలసి ఉంటుంది. ఈ finding కు ముఖ్యమైన ప్రభావాలు ఉన్నాయి: whole foods ఎంచుకోవడం (polished rice బదులు hand-pounded rice, processed instant dal బదులు whole dal) fiber మరియు micronutrient content లో తేడా కంటే అదనంగా metabolic advantage ను అందిస్తుంది."
      />

      <h3>TEF ను ప్రభావితం చేసే ఇతర Factors</h3>
      <p>
        అనేక ఇతర factors TEF ను modulate చేస్తాయి. Physical fitness TEF ను పెంచుతుంది,
        బహుశా sympathetic nervous system responsiveness పెరగడం వల్ల. వయసు TEF ను తగ్గిస్తుంది,
        ఇది metabolic rate లో మొత్తం క్షీణతకు అనుగుణంగా ఉంటుంది. Insulin resistance తగ్గిన
        TEF తో సంబంధం కలిగి ఉంటుంది, ఇది pre-diabetes లేదా metabolic syndrome ఉన్నవారిలో
        బరువు పెరుగుదలకు దోహదం చేయవచ్చు. భారతీయ వంటకాల్లో విస్తృతంగా వాడే మిరపకాయల నుండి
        capsaicin కలిగిన spicy ఆహారాలు sympathetic nervous system activation ద్వారా TEF ను
        తాత్కాలికంగా 20-30% పెంచగలవు.
      </p>

      <NoteBlock
        title="TEF మరియు Obesity"
        content="కొన్ని పరిశోధనలు body composition మరియు భోజనం పరిమాణానికి adjust చేసిన తర్వాత కూడా, obese వ్యక్తులకు lean వ్యక్తుల కంటే blunted thermic effect of food ఉంటుందని సూచిస్తున్నాయి. ఈ తగ్గిన TEF obesity కు కారణం మరియు పరిణామం రెండూ కావచ్చు. తేడా రోజుకు 20-30 kcal గా అంచనా వేయబడింది — చిన్నది కానీ సంవత్సరాలలో గణనీయమైనది కావచ్చు. Obesity లో సాధారణమైన insulin resistance glucose-stimulated thermogenesis ను దెబ్బతీస్తుంది. శుభవార్త ఏమిటంటే బరువు తగ్గడం మరియు insulin sensitivity మెరుగుపడటం సాధారణ TEF ను పాక్షికంగా పునరుద్ధరించగలవు, మరియు higher-protein diets blunting effect ను భర్తీ చేయగలవు."
      />

      <h2>బరువు నిర్వహణ కోసం ఆచరణాత్మక అనువర్తనాలు</h2>

      <ExampleBlock
        title="భారతీయ ఆహారంలో TEF ను గరిష్టం చేయడం"
        description="ఆహారం యొక్క thermic effect ను పెంచే వ్యూహాలు: (1) Protein proportion పెంచండి — ప్రతి భోజనంలో rice/roti calories లో కొంత భాగాన్ని dal, paneer, eggs, లేదా chicken తో భర్తీ చేయండి. Calories లో 25-30% protein నుండి రావాలని లక్ష్యం పెట్టుకోండి. (2) Whole మరియు కనిష్టంగా processed ఆహారాలు ఎంచుకోండి — processed moong dal instant mix బదులు whole moong dal, polished white rice బదులు hand-pounded rice, instant oats బదులు steel-cut oats. (3) మసాలాలు ధారాళంగా వాడండి — భారతీయ వంటకాల్లో మిర్చి, black pepper, ginger, మరియు turmeric ఉదారంగా వాడటం TEF ను కొద్దిగా పెంచుతుంది. (4) ఉదాహరణ: whole wheat roti + rajma + raita + green chutney భోజనానికి white rice + potato curry + papad భోజనం కంటే గణనీయంగా ఎక్కువ TEF ఉంటుంది, ఎందుకంటే ఎక్కువ protein, ఎక్కువ fiber, మరియు తక్కువ processing ఉంటుంది."
      />

      <WarningBlock
        title="TEF ముఖ్యమైనది కానీ మాయాజాలం కాదు"
        content="Macronutrients మధ్య TEF తేడాలు నిజమైనవి మరియు శాస్త్రీయంగా నిర్ధారించబడినవి అయినప్పటికీ, వాటిని సరైన దృష్టికోణంలో చూడాలి. ఆహార manipulation నుండి గరిష్ట ఆచరణాత్మక TEF advantage రోజుకు సుమారు 100-150 kcal — ఇది సుమారు 10-15 నిమిషాల brisk walking కు సమానం. TEF caloric surplus ను భర్తీ చేయలేదు, మరియు కొన్ని ఆహారాలకు 'negative calories' ఉన్నాయనే (TEF వాటి caloric content కంటే ఎక్కువ) వాదనలు నిరాధారమైనవి. ఏ ఆహారమూ అది అందించే calories కంటే ఎక్కువ calories జీర్ణించుకోవడానికి అవసరం కాదు. TEF ను అర్థం చేసుకోవడం యొక్క నిజమైన విలువ సమగ్ర బరువు నిర్వహణ వ్యూహంలో భాగంగా చిన్న కానీ స్థిరమైన metabolic advantage ను అందించే ఆహార ఎంపికలు చేయడంలో ఉంది."
      />

      <ExampleBlock
        title="TEF పోలిక: రెండు భారతీయ భోజనాలు"
        description="ప్రతి ఒక్కటి సుమారు 500 kcal అందించే రెండు భోజనాలను పరిగణించండి. భోజనం A: 200 g white rice (carbs నుండి 350 kcal) + aloo fry (150 kcal, ఎక్కువగా fat). అంచనా TEF: ~35-40 kcal (7-8%). భోజనం B: 1 multigrain roti (120 kcal) + 1 katori chana dal (150 kcal, అధిక protein) + palak paneer with 40 g paneer (180 kcal, protein + fat) + raita (50 kcal, protein). అంచనా TEF: ~65-75 kcal (13-15%). భోజనం B thermogenesis ద్వారా అదనంగా 25-35 kcal ను 'వృథా' చేస్తుంది, protein మరియు fiber వల్ల ఎక్కువ తృప్తిగా ఉంచుతుంది, మరియు మెరుగైన micronutrient density ను అందిస్తుంది. రోజుకు 3 భోజనాలలో, ఈ pattern రోజుకు 75-100 kcal thermogenic advantage ను ఇవ్వగలదు."
      />

      <h2>ముఖ్యమైన అంశాలు</h2>

      <ul>
        <li>
          TEF మొత్తం రోజువారీ energy expenditure లో 8-15% ఉంటుంది మరియు మీరు తినే ఆహారాన్ని
          process చేయడం యొక్క metabolic ఖర్చును సూచిస్తుంది.
        </li>
        <li>
          Protein కు అత్యధిక TEF (20-30%) ఉంటుంది, తర్వాత carbohydrate (5-10%) మరియు fat
          (0-3%). ఇది obligatory metabolic ఖర్చు, voluntary expenditure కాదు.
        </li>
        <li>
          Higher-protein diets TEF ద్వారా మాత్రమే రోజువారీ energy expenditure ను సుమారు 80-100
          kcal పెంచుతాయి, ఇది మెరుగైన బరువు నిర్వహణ ఫలితాలకు దోహదం చేస్తుంది.
        </li>
        <li>
          Whole, కనిష్టంగా processed ఆహారాలు processed equivalents కంటే అధిక TEF ను ఉత్పత్తి
          చేస్తాయి — packaged alternatives కంటే సాంప్రదాయ whole foods ఎంచుకోవడానికి మరో కారణం.
        </li>
        <li>
          Macronutrient intake స్థిరంగా ఉన్నప్పుడు meal frequency స్వతంత్రంగా మొత్తం రోజువారీ
          TEF ను ప్రభావితం చేయదు. &quot;Metabolism పెంచడానికి తరచుగా చిన్న భోజనాలు తినడం&quot;
          అనేది myth.
        </li>
        <li>
          భారతీయ వంటకాల్లో సాధారణంగా వాడే మసాలాలు (మిర్చి, pepper, ginger) sympathetic nervous
          system activation ద్వారా కొద్దిగా అదనపు TEF boost ను అందిస్తాయి.
        </li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
