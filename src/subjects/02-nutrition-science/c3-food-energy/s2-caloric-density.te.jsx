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
    authors: 'Rolls BJ',
    year: 2009,
    title: 'The relationship between dietary energy density and energy intake',
    source: 'Physiology & Behavior, 97(5), 609-615',
    type: 'review',
  },
  {
    authors: 'Rolls BJ, Ello-Martin JA, Tohill BC',
    year: 2004,
    title: 'What can intervention studies tell us about the relationship between fruit and vegetable consumption and weight management?',
    source: 'Nutrition Reviews, 62(1), 1-17',
    type: 'review',
  },
  {
    authors: 'Bell EA, Castellanos VH, Pelkman CL, Thorwart ML, Rolls BJ',
    year: 1998,
    title: 'Energy density of foods affects energy intake in normal-weight women',
    source: 'American Journal of Clinical Nutrition, 67(3), 412-420',
    type: 'foundational',
  },
  {
    authors: 'Ledikwe JH, Blanck HM, Kettel Khan L, Serdula MK, Seymour JD, Tohill BC, Rolls BJ',
    year: 2006,
    title: 'Dietary energy density is associated with energy intake and weight status in US adults',
    source: 'American Journal of Clinical Nutrition, 83(6), 1362-1368',
    type: 'clinical',
  },
  {
    authors: 'Ello-Martin JA, Roe LS, Ledikwe JH, Beach AM, Rolls BJ',
    year: 2007,
    title: 'Dietary energy density in the treatment of obesity: a year-long trial comparing 2 weight-loss diets',
    source: 'American Journal of Clinical Nutrition, 85(6), 1465-1477',
    type: 'clinical',
  },
  {
    authors: 'Drewnowski A',
    year: 2005,
    title: 'Concept of a nutritious food: toward a nutrient density score',
    source: 'American Journal of Clinical Nutrition, 82(4), 721-732',
    type: 'review',
  },
  {
    authors: 'National Institute of Nutrition (NIN)',
    year: 2020,
    title: 'Dietary Guidelines for Indians - A Manual',
    source: 'Indian Council of Medical Research, Hyderabad',
    type: 'foundational',
  },
];

export default function CaloricDensityTe() {
  return (
    <div className="prose-health">
      <h1>Caloric Density</h1>

      <p>
        Caloric density (దీనినే energy density అని కూడా అంటారు) అనేది ఆహారం యొక్క ప్రతి యూనిట్
        బరువు లేదా పరిమాణానికి ఉండే కేలరీల సంఖ్య. ఈ concept బరువు నిర్వహణకు చాలా కీలకమైనది,
        ఎందుకంటే విస్తృత పరిశోధన ప్రకారం ప్రజలు ప్రతిరోజూ caloric content తో సంబంధం లేకుండా
        సాపేక్షంగా స్థిరమైన బరువు మరియు పరిమాణంలో ఆహారం తింటారు. తక్కువ caloric density ఉన్న
        ఆహారాల వైపు మారడం ద్వారా, వ్యక్తులు తృప్తికరమైన portions తింటూనే తక్కువ మొత్తం
        కేలరీలు తీసుకోవచ్చు — ఇదే "volumetrics" విధానం యొక్క ప్రాథమిక సూత్రం.
      </p>

      <DefinitionBlock
        title="Caloric Density (Energy Density)"
        definition="ఆహారం యొక్క ప్రతి యూనిట్ బరువుకు ఉండే శక్తి (కేలరీలు) పరిమాణం, సాధారణంగా kilocalories per gram (kcal/g) గా వ్యక్తం చేయబడుతుంది. ఇది ప్రధానంగా ఆహారంలోని నీరు శాతం, fiber శాతం, మరియు macronutrient కూర్పు ద్వారా నిర్ణయించబడుతుంది. నీరు మరియు fiber కనీస లేదా సున్నా కేలరీలతో బరువు మరియు పరిమాణాన్ని జోడిస్తాయి, energy density ను తగ్గిస్తాయి. Fat (9 kcal/g) మరియు added sugars energy density ను పెంచుతాయి, అయితే నీరు-ఎక్కువగా ఉన్న కూరగాయలు మరియు పండ్లకు అతి తక్కువ energy density ఉంటుంది."
        notation="చాలా తక్కువ energy density: 0-0.6 kcal/g (చాలా పండ్లు మరియు కూరగాయలు). తక్కువ: 0.6-1.5 kcal/g (ఉడికించిన grains, legumes, lean meats). మధ్యస్థం: 1.5-4.0 kcal/g (bread, cheese, meat). ఎక్కువ: 4.0-9.0 kcal/g (chips, nuts, oils, butter)."
      />

      <h2>Energy Density యొక్క శాస్త్రం</h2>

      <p>
        పరిశోధన స్థిరంగా చూపిస్తుంది — ప్రజలు calorie content కంటే బరువు మరియు పరిమాణం ద్వారా
        ఆహారం తీసుకోవడాన్ని నియంత్రిస్తారు. వేర్వేరు energy densities ఉన్న ఆహారాలను
        అందించినప్పుడు, ప్రజలు సమానమైన బరువుల్లో ఆహారం తింటారు కానీ చాలా భిన్నమైన కేలరీలు
        తీసుకుంటారు. అంటే, ఆహారం యొక్క energy density మొత్తం caloric intake ను నిర్ణయించే
        శక్తివంతమైన అంశం.
      </p>

      <EvidenceBlock
        title="Energy Density Calorie Intake ను నడిపిస్తుంది"
        finding="ఆహారం యొక్క energy density ను రహస్యంగా మార్చినప్పుడు (fat మరియు నీరు శాతాన్ని మార్చి, రూపం మరియు రుచి ఒకేలా ఉంచినప్పుడు), మహిళలు energy density తో సంబంధం లేకుండా ప్రతిరోజూ ఒకే బరువులో ఆహారం తిన్నారు. దీని అర్థం — వారు high-density ఆహారంలో low-density ఆహారం కంటే 30% ఎక్కువ కేలరీలు తీసుకున్నారు — రోజుకు సుమారు 800 kcal తేడా — ఈ మార్పు గురించి తెలియకుండానే."
        study="2-రోజుల కాలాలలో ఆహారం యొక్క energy density ను manipulate చేసిన controlled laboratory study"
        source="Bell et al. (1998) American Journal of Clinical Nutrition"
        details="సాధారణ బరువు ఉన్న మహిళలకు మూడు energy density స్థాయిలలో (తక్కువ, మధ్యస్థం, ఎక్కువ) 2-రోజుల కాలాలకు అన్ని భోజనాలు మరియు snacks అందించబడ్డాయి. అన్ని conditions లో తిన్న ఆహారం బరువు సమానంగా ఉంది (రోజుకు సుమారు 1.4 kg), కానీ మొత్తం caloric intake తక్కువ, మధ్యస్థం, మరియు ఎక్కువ density conditions కు వరుసగా 1570, 2010, మరియు 2370 kcal/రోజు. ఆకలి, నిండుగా ఉన్న భావన, లేదా తృప్తిలో conditions మధ్య తేడాలు నివేదించలేదు, energy density manipulation ప్రయత్నపూర్వక effort లేదా deprivation లేకుండా calorie intake ను గణనీయంగా మార్చగలదని నిరూపిస్తుంది."
      />

      <EvidenceBlock
        title="తక్కువ Energy Density ఆహారాలతో బరువు తగ్గడం"
        finding="ఒక సంవత్సరం పాటు, పండ్లు మరియు కూరగాయల తీసుకోవడం పెంచడం ద్వారా energy density తగ్గించమని సలహా ఇవ్వబడిన పాల్గొనేవారు కేవలం fat తగ్గించమని సలహా ఇవ్వబడిన వారి కంటే గణనీయంగా ఎక్కువ బరువు తగ్గించారు. తగ్గించిన-energy-density గ్రూపు సగటున 7.9 kg తగ్గించగా, కేవలం fat-తగ్గించిన గ్రూపు 6.4 kg తగ్గించింది, అదే సమయంలో ఎక్కువ ఆహారం బరువు మరియు ఎక్కువ తృప్తిని నివేదించారు."
        study="రెండు weight loss dietary strategies ను పోల్చిన సంవత్సరం-పొడవైన randomized controlled trial"
        source="Ello-Martin et al. (2007) American Journal of Clinical Nutrition"
        details="ఈ study 97 మంది obese మహిళలను చేర్చుకుని రెండు groups గా randomize చేసింది: ఒకరికి fat intake తగ్గించమని సలహా ఇచ్చారు, మరొకరికి fat తగ్గించి మరియు పండ్లు, కూరగాయల వినియోగం పెంచమని (తద్వారా మొత్తం dietary energy density తగ్గించడం) సలహా ఇచ్చారు. రెండు groups caloric intake తగ్గించాయి, కానీ energy density group ఎక్కువ పరిమాణంలో ఆహారం (ఎక్కువ పండ్లు మరియు కూరగాయలు) తీసుకుని, ఎక్కువ తృప్తి నివేదించి, ఎక్కువ బరువు తగ్గింపు సాధించారు. 'తీసివేయడానికి ముందు జోడించడం' — high-density ఆహారాలను restrict చేయడానికి ముందు low-density ఆహారాలను పెంచడం అనే ఆచరణాత్మక strategy కు ఫలితాలు మద్దతు ఇస్తాయి."
      />

      <h2>Energy Density ను నిర్ణయించే అంశాలు</h2>

      <p>
        మూడు అంశాలు ప్రధానంగా ఆహారం యొక్క energy density ను నిర్ణయిస్తాయి: నీరు శాతం, fiber
        శాతం, మరియు fat శాతం. నీరు అత్యంత ప్రభావవంతమైన అంశం ఎందుకంటే ఇది సున్నా కేలరీలతో
        బరువు మరియు పరిమాణాన్ని జోడిస్తుంది.
      </p>

      <ComparisonTable
        title="Energy Density ను ఏమి నిర్ణయిస్తుంది"
        headers={['అంశం', 'Energy Density పై ప్రభావం', 'యంత్రాంగం', 'ఉదాహరణ']}
        rows={[
          ['నీరు శాతం', 'బాగా తగ్గిస్తుంది', '0 kcal తో బరువు మరియు పరిమాణం జోడిస్తుంది', 'దోసకాయ: 0.15 kcal/g (96% నీరు) vs ఎండు ద్రాక్ష: 3.0 kcal/g (15% నీరు)'],
          ['Fiber శాతం', 'మధ్యస్థంగా తగ్గిస్తుంది', 'కనీస కేలరీలతో (~2 kcal/g) bulk జోడిస్తుంది', 'తొక్కతో ఆపిల్: 0.52 kcal/g vs ఆపిల్ juice: 0.46 kcal/g (కానీ fiber లేదు = తక్కువ satiety)'],
          ['Fat శాతం', 'బాగా పెంచుతుంది', 'Fat 9 kcal/g అందిస్తుంది — ఏ macronutrient లోనూ అత్యధికం', 'ఉడికించిన బంగాళాదుంప: 0.87 kcal/g vs potato chips: 5.3 kcal/g'],
          ['Sugar శాతం', 'మధ్యస్థంగా పెంచుతుంది', 'నీరు లేదా fiber లేకుండా 4 kcal/g జోడిస్తుంది', 'తాజా నారింజ: 0.47 kcal/g vs నారింజ candy: 3.9 kcal/g'],
          ['గాలి చేర్పు', 'తగ్గిస్తుంది (పరిమాణానికి)', 'పరిమాణానికి density తగ్గిస్తుంది (బరువుకు కాదు)', 'Puffed rice: bowl కు తక్కువ kcal (ఎక్కువ పరిమాణం, తక్కువ బరువు)'],
        ]}
      />

      <h2>భారతీయ ఆహారాల Energy Density</h2>

      <ComparisonTable
        title="భారతీయ ఆహారాల Energy Density Spectrum"
        headers={['వర్గం', 'ఆహారం', 'Energy Density (kcal/g)', 'Serving & కేలరీలు']}
        rows={[
          ['చాలా తక్కువ (< 0.6)', 'దోసకాయ/kakdi', '0.15', '100 g = 15 kcal'],
          ['చాలా తక్కువ', 'Lauki (సొరకాయ)', '0.15', '100 g = 15 kcal'],
          ['చాలా తక్కువ', 'టమాటా', '0.18', '100 g = 18 kcal'],
          ['చాలా తక్కువ', 'పుచ్చకాయ', '0.30', '100 g = 30 kcal'],
          ['చాలా తక్కువ', 'బొప్పాయి', '0.43', '100 g = 43 kcal'],
          ['తక్కువ (0.6-1.5)', 'ఉడికించిన dal (పలచన)', '0.70', '1 katori (150 g) = 105 kcal'],
          ['తక్కువ', 'ఉడికించిన అన్నం', '1.30', '1 katori (150 g) = 195 kcal'],
          ['తక్కువ', 'పెరుగు/Dahi', '0.60', '1 katori (200 g) = 120 kcal'],
          ['మధ్యస్థం (1.5-4.0)', 'Roti (గోధుమ పిండి)', '2.97', '1 roti (33 g) = 98 kcal'],
          ['మధ్యస్థం', 'Paneer', '2.65', '50 g = 133 kcal'],
          ['మధ్యస్థం', 'చికెన్ కర్రీ', '1.50', '150 g = 225 kcal'],
          ['ఎక్కువ (> 4.0)', 'Ghee', '9.00', '1 tsp (5 g) = 45 kcal'],
          ['ఎక్కువ', 'వేరుశనగలు (వేయించిన)', '5.67', '30 g = 170 kcal'],
          ['ఎక్కువ', 'Namkeen/Mixture', '5.00', '30 g = 150 kcal'],
          ['ఎక్కువ', 'Gulab jamun', '3.80', '1 piece (40 g) = 152 kcal'],
          ['ఎక్కువ', 'Samosa (వేయించిన)', '3.10', '1 piece (80 g) = 248 kcal'],
        ]}
      />

      <NutritionFactBlock
        food="Lauki (సొరకాయ) Sabzi"
        serving="1 katori (150 g తక్కువ నూనెతో వండినది)"
        calories={45}
        protein={1}
        carbs={7}
        fat={1.5}
        fiber={2}
        highlights={[
          'అత్యంత తక్కువ energy density: 0.30 kcal/g',
          'ఎక్కువ నీరు శాతం (92%) పరిమాణం మరియు తృప్తి అందిస్తుంది',
          'బరువు నిర్వహణకు అత్యుత్తమ కూరగాయలలో ఒకటి',
          'చాలా తక్కువ కేలరీలకు పెద్ద portion తినవచ్చు',
        ]}
      />

      <NutritionFactBlock
        food="వేయించిన Samosa"
        serving="1 piece (80 g)"
        calories={248}
        protein={4}
        carbs={24}
        fat={15}
        fiber={1.5}
        highlights={[
          'ఎక్కువ energy density: deep frying వల్ల 3.1 kcal/g',
          'Deep frying baked version తో పోలిస్తే కేలరీలను రెట్టింపు చేస్తుంది',
          'ఒక samosa = 550 g lauki sabzi (3.5 katoris) తో సమానమైన కేలరీలు',
          'calorie కు తక్కువ satiety — చాలా pieces తినడం సులభం',
        ]}
      />

      <h2>Volumetrics విధానం</h2>

      <p>
        బరువు నిర్వహణకు volumetrics విధానం, nutrition researcher Barbara Rolls చే అభివృద్ధి
        చేయబడింది, energy density సూత్రం మీద నిర్మించబడింది. Portion sizes ను restrict చేయడం లేదా
        కేలరీలను కఠినంగా లెక్కించడం కాకుండా, volumetrics తక్కువ energy density ఉన్న ఆహారాలను
        ఎంచుకోవడం మీద focus చేస్తుంది — తద్వారా తగిన caloric target లో తృప్తికరమైన portions
        తీసుకోవచ్చు. ఈ విధానం చాలా సాంప్రదాయ భారతీయ ఆహార అలవాట్లతో అద్భుతంగా సరిపోతుంది.
      </p>

      <h3>ముఖ్యమైన Volumetrics వ్యూహాలు</h3>

      <ul>
        <li>
          <strong>భోజనాన్ని low-density ఆహారాలతో ప్రారంభించండి:</strong> roti లేదా అన్నం తినడానికి
          ముందు clear soup (rasam, dal broth), salad (kachumber), లేదా పెద్ద serving sabzi తో
          ప్రారంభించండి. పరిశోధన ప్రకారం ఇది మొత్తం భోజనం calorie intake ను 12-20% తగ్గిస్తుంది.
        </li>
        <li>
          <strong>ప్రతిదానిలో కూరగాయలు జోడించండి:</strong> dal లో కూరగాయలు కలపండి, rice dishes లో
          (plain rice బదులు vegetable pulao), parathas లో (lauki paratha, methi paratha), మరియు
          curries లో. ఇది caloric density ను dilute చేస్తూ పరిమాణం మరియు fiber ను పెంచుతుంది.
        </li>
        <li>
          <strong>నీరు-ఎక్కువ ఉన్న cooking methods ఎంచుకోండి:</strong> Steamed, boiled,
          pressure-cooked, మరియు soup-based preparations — ఒకే ఆహారం యొక్క fried, roasted, లేదా
          sauteed versions కంటే తక్కువ energy density కలిగి ఉంటాయి.
        </li>
        <li>
          <strong>Calorie-dense additions పట్ల జాగ్రత్తగా ఉండండి:</strong> Ghee, నూనె, కొబ్బరి,
          nuts, మరియు cream/malai — లేకపోతే మధ్యస్థ-calorie dishes యొక్క energy density ను
          నాటకీయంగా పెంచుతాయి. కొలిచిన మొత్తాలు వాడండి.
        </li>
      </ul>

      <ExampleBlock
        title="Volumetrics ఆచరణలో: భారతీయ భోజనం Makeover"
        description="సాంప్రదాయ thali విధానం (energy-dense): 2 rotis ghee తో (270 kcal) + dal fry (180 kcal) + aloo gobi ఎక్కువ నూనెతో (200 kcal) + అన్నం (200 kcal) + pickle + sweet (gulab jamun, 150 kcal). మొత్తం: ~1000 kcal. Volumetrics-optimized thali: ముందుగా పెద్ద kachumber salad (30 kcal) + 1.5 rotis ghee లేకుండా (150 kcal) + dal palak/lauki తో (120 kcal) + mixed vegetable sabzi (bhindi, beans, tori) 1 tsp నూనెతో (80 kcal) + తక్కువ అన్నం (100 kcal) + raita (60 kcal) + తాజా పండు (బొప్పాయి, 50 kcal). మొత్తం: ~590 kcal. Optimized thali ఎక్కువ ఆహారం పరిమాణం, ఎక్కువ variety, మెరుగైన micronutrient density, మరియు 40% తక్కువ కేలరీలు అందిస్తుంది."
      />

      <h2>Nutrient Density vs Caloric Density</h2>

      <p>
        Caloric density ఒక ఆహారం gram కు ఎన్ని కేలరీలు అందిస్తుందో చెబుతుంది, nutrient
        density ఒక ఆహారం calorie కు ఎన్ని అవసరమైన nutrients (vitamins, minerals, protein, fiber)
        అందిస్తుందో చెబుతుంది. బరువు నిర్వహణకు ఆదర్శ ఆహారం తక్కువ caloric density మరియు ఎక్కువ
        nutrient density ఉన్నది — కనీస కేలరీలతో గరిష్ట nutrition అందించేది.
      </p>

      <ComparisonTable
        title="Nutrient Density vs Caloric Density"
        headers={['ఆహారం', 'Caloric Density', 'Nutrient Density', 'బరువు నిర్వహణ విలువ']}
        rows={[
          ['ఆకుకూరలు (palak, methi)', 'చాలా తక్కువ', 'చాలా ఎక్కువ', 'అత్యుత్తమం — స్వేచ్ఛగా తినండి'],
          ['పండ్లు (బొప్పాయి, జామ)', 'చాలా తక్కువ', 'ఎక్కువ', 'అత్యుత్తమం — nutrient-rich, hydrating'],
          ['Dal / legumes', 'తక్కువ', 'ఎక్కువ', 'చాలా మంచిది — protein, fiber, minerals'],
          ['పెరుగు / dahi', 'తక్కువ', 'ఎక్కువ', 'చాలా మంచిది — protein, calcium, probiotics'],
          ['గుడ్లు', 'మధ్యస్థం', 'చాలా ఎక్కువ', 'మంచిది — calorie కు అసాధారణ nutrient ratio'],
          ['Nuts / seeds', 'ఎక్కువ', 'చాలా ఎక్కువ', 'తక్కువ portions లో మంచిది — calorie-dense కానీ nutrient-rich'],
          ['Soft drinks / juice', 'తక్కువ (liquid)', 'చాలా తక్కువ', 'పేలవం — nutrients లేదా satiety లేకుండా కేలరీలు'],
          ['మిఠాయిలు / sweets', 'ఎక్కువ', 'తక్కువ', 'పేలవం — ఎక్కువ కేలరీలు, తక్కువ nutrients'],
        ]}
      />

      <NoteBlock
        title="Liquid Calories: ఒక ప్రత్యేక సందర్భం"
        content="Liquid calories (తీపి పానీయాలు, fruit juices, తీపి lassi, పంచదార వేసిన chai) — ఇవి energy-dense consumption యొక్క ప్రత్యేకంగా సమస్యాత్మక రూపం. గణనీయమైన కేలరీలు అందించినప్పటికీ (ఒక glass mango shake: 200-300 kcal; తీపి lassi: 150-200 kcal; 2 tsp పంచదార వేసిన 3 cups chai: 100-150 kcal), liquids సమాన కేలరీల solid ఆహారాల కంటే చాలా తక్కువ satiety ఉత్పత్తి చేస్తాయి. Studies స్థిరంగా చూపిస్తాయి — calorie-containing పానీయాలు ఆహారం తీసుకోవడంలో compensatory తగ్గింపులకు దారి తీయవు. పంచదార వేసిన పానీయాల నుండి నీరు, తీపి లేని chai, లేదా black coffee కు మారడం బరువు నిర్వహణకు అత్యంత సరళమైన మరియు ప్రభావవంతమైన మార్పులలో ఒకటి."
      />

      <WarningBlock
        title="భారతీయ ఆహారాలలో Caloric Density ఉచ్చులు"
        content="అనేక సాధారణ భారతీయ ఆహార అలవాట్లు caloric density ను నాటకీయంగా పెంచుతాయి: (1) Ghee/నూనె ఎక్కువగా వాడటం — roti మీద ఒక tablespoon ghee 120 kcal జోడిస్తుంది మరియు 100-kcal roti ను 220-kcal item గా మారుస్తుంది. (2) Deep frying — తక్కువ-density బంగాళాదుంపలను (0.87 kcal/g) ఎక్కువ-density chips (5.3 kcal/g) గా మారుస్తుంది. (3) Chai లో పంచదార — రోజూ 3-4 cups లో ఒక్కొక్కదానిలో 2 teaspoons 100-150 'కనిపించని' కేలరీలు జోడిస్తుంది. (4) భోజనం తర్వాత sweets — 'ఒక్క piece మాత్రమే' మిఠాయి కూడా 150-300 kcal జోడిస్తుంది. (5) ఎండు snacks (namkeen, chakli, sev) — అత్యంత ఎక్కువ density (4-5 kcal/g) మరియు ఎక్కువగా తినడం సులభం. ఈ density ఉచ్చుల గురించి అవగాహన మొత్తం ఆహారాన్ని మార్చకుండా లక్ష్యబద్ధమైన, ఎక్కువ-ప్రభావం ఉన్న మార్పులను అనుమతిస్తుంది."
      />

      <h2>ముఖ్యమైన అంశాలు</h2>

      <ul>
        <li>
          Caloric density (kcal/g) మొత్తం caloric intake ను అంచనా వేసే శక్తివంతమైన సూచిక,
          ఎందుకంటే ప్రజలు ప్రతిరోజూ సాపేక్షంగా స్థిరమైన బరువులో ఆహారం తింటారు. తక్కువ-density
          ఆహారాలు ఆహారం పరిమాణం లేదా తృప్తిని తగ్గించకుండా తక్కువ caloric intake కు దారి
          తీస్తాయి.
        </li>
        <li>
          నీరు శాతం energy density యొక్క ప్రాథమిక నిర్ణాయకం. కూరగాయలు, పండ్లు, soups, మరియు
          dal సహజంగా low-density; నూనెలు, nuts, వేయించిన ఆహారాలు, మరియు sweets high-density.
        </li>
        <li>
          Volumetrics వ్యూహం — భోజనాలను low-density ఆహారాలతో ప్రారంభించడం, dishes లో కూరగాయలు
          జోడించడం, మరియు నీరు-ఎక్కువ ఉన్న preparations ఎంచుకోవడం — తృప్తిని తగ్గించకుండా
          భోజనం కేలరీలను 20-30% తగ్గించగలదు.
        </li>
        <li>
          భారతీయ వంటకాలలో తక్కువ-density options (sabzi, dal, raita, salad, rasam) సమృద్ధిగా
          ఉన్నాయి — ఇవి బరువు నిర్వహణ భోజనాల volumetric foundation గా ఉండాలి.
        </li>
        <li>
          Liquid calories ప్రత్యేక ఆందోళన — అవి తగినంత satiety ఉత్పత్తి చేయకుండా గణనీయమైన
          కేలరీలు జోడిస్తాయి. తీపి పానీయాలను నీరు లేదా తీపి లేని options తో భర్తీ చేయండి.
        </li>
        <li>
          బరువు నిర్వహణకు ఆదర్శ ఆహారం తక్కువ caloric density మరియు ఎక్కువ nutrient density
          కలిగి ఉంటుంది — calorie కు అత్యధిక nutrition అందించేది.
        </li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
