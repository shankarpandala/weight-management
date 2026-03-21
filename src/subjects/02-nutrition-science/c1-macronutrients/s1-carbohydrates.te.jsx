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
    authors: 'Ludwig DS, Hu FB, Tappy L, Brand-Miller J',
    year: 2018,
    title: 'Dietary carbohydrates: role of quality and quantity in chronic disease',
    source: 'BMJ, 361, k2340',
    type: 'review',
  },
  {
    authors: 'Jenkins DJ, Wolever TM, Taylor RH, Barker H, Fielden H, Baldwin JM, Bowling AC, Newman HC, Jenkins AL, Goff DV',
    year: 1981,
    title: 'Glycemic index of foods: a physiological basis for carbohydrate exchange',
    source: 'American Journal of Clinical Nutrition, 34(3), 362-366',
    type: 'foundational',
  },
  {
    authors: 'Reynolds A, Mann J, Cummings J, Winter N, Mete E, Te Morenga L',
    year: 2019,
    title: 'Carbohydrate quality and human health: a series of systematic reviews and meta-analyses',
    source: 'The Lancet, 393(10170), 434-445',
    type: 'review',
  },
  {
    authors: 'Misra A, Sharma R, Gulati S, Joshi SR, Sharma V, Ibrahim A, Joshi S, Laxmaiah A, Kurpad A, Raj RK, Mohan V',
    year: 2011,
    title: 'Consensus dietary guidelines for healthy living and prevention of obesity, the metabolic syndrome, diabetes, and related disorders in Asian Indians',
    source: 'Diabetes Technology & Therapeutics, 13(6), 683-694',
    type: 'clinical',
  },
  {
    authors: 'Atkinson FS, Brand-Miller JC, Foster-Powell K, Buyken AE, Goletzke J',
    year: 2021,
    title: 'International tables of glycemic index and glycemic load values 2021: a systematic review',
    source: 'American Journal of Clinical Nutrition, 114(5), 1625-1632',
    type: 'review',
  },
  {
    authors: 'Slavin JL',
    year: 2005,
    title: 'Dietary fiber and body weight',
    source: 'Nutrition, 21(3), 411-418',
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

export default function CarbohydratesTe() {
  return (
    <div className="prose-health">
      <h1>Carbohydrates</h1>

      <p>
        Carbohydrates శరీరానికి ప్రాథమిక మరియు ఇష్టమైన energy వనరు, గ్రాముకు 4 kilocalories
        అందిస్తాయి. ప్రపంచవ్యాప్తంగా చాలా ఆహారాల్లో ఇవి అత్యధికంగా ఉండే macronutrient, మరియు
        ఇది భారతీయ ఆహారాల్లో మరింత నిజం — భారతీయ ఆహారంలో carbohydrates సాధారణంగా మొత్తం caloric
        intake లో 60-70% అందిస్తాయి. వివిధ రకాల carbohydrates, వాటి metabolic ప్రభావాలు, మరియు
        బరువు నిర్వహణలో వాటి పాత్రను అర్థం చేసుకోవడం evidence-based ఆహార ఎంపికలు చేయడానికి
        అవసరం.
      </p>

      <DefinitionBlock
        title="Carbohydrates"
        definition="Carbon, hydrogen, మరియు oxygen atoms తో కూడిన organic compounds, సాధారణంగా hydrogen-to-oxygen ratio 2:1 ఉంటుంది. ఇవి శరీరానికి ప్రాథమిక fuel వనరుగా పనిచేస్తాయి మరియు వాటి molecular structure ఆధారంగా simple carbohydrates (monosaccharides మరియు disaccharides) మరియు complex carbohydrates (oligosaccharides మరియు polysaccharides) గా వర్గీకరించబడతాయి."
        notation="Energy yield: 4 kcal/g (17 kJ/g). RDA: పెద్దవారికి రోజుకు కనీసం 130 g (brain glucose అవసరాల ఆధారంగా). ICMR భారతీయులకు మొత్తం energy లో 55-60% carbohydrates నుండి రావాలని సిఫార్సు చేస్తుంది."
      />

      <h2>Simple vs Complex Carbohydrates</h2>

      <h3>Simple Carbohydrates</h3>
      <p>
        Simple carbohydrates ఒకటి లేదా రెండు sugar units తో కూడి ఉంటాయి. Monosaccharides లో
        glucose (రక్త చక్కెర), fructose (పండ్ల చక్కెర), మరియు galactose (పాల చక్కెర) ఉంటాయి.
        Disaccharides లో sucrose (టేబుల్ షుగర్, glucose మరియు fructose కలయిక),
        lactose (పాల చక్కెర, glucose మరియు galactose కలయిక), మరియు maltose (malt sugar,
        రెండు glucose units కలయిక) ఉంటాయి. ఈ sugars త్వరగా జీర్ణమై absorb అవుతాయి,
        రక్తంలో glucose స్థాయిలను వేగంగా పెంచుతాయి.
      </p>

      <p>
        whole fruits నుండి వచ్చే simple carbohydrates fiber, vitamins, మరియు phytochemicals తో
        కలిసి ఉంటాయి — ఇవి వాటి metabolic ప్రభావాన్ని తగ్గిస్తాయి. కానీ added sugars మరియు
        refined simple carbohydrates లో ఈ రక్షణాత్మక co-nutrients ఉండవు. WHO free sugars ను
        మొత్తం energy intake లో 10% కంటే తక్కువకు పరిమితం చేయాలని సిఫార్సు చేస్తుంది, 5%
        కంటే తక్కువ వద్ద అదనపు ఆరోగ్య ప్రయోజనాలు కనిపిస్తాయి.
      </p>

      <h3>Complex Carbohydrates</h3>
      <p>
        Complex carbohydrates పొడవైన glucose units గొలుసులతో కూడిన polysaccharides.
        Starch, మొక్కల్లో energy నిల్వ యొక్క ప్రాథమిక రూపం, ధాన్యాలు, legumes, మరియు
        tubers లో పుష్కలంగా ఉంటుంది. Glycogen జంతువుల నిల్వ రూపం, మాంసం మరియు liver లో
        తక్కువ మొత్తంలో ఉంటుంది. Complex carbohydrates సాధారణంగా enzymatic breakdown కోసం
        ఎక్కువ సమయం అవసరం, ఇది రక్తప్రవాహంలో glucose ను మరింత క్రమంగా విడుదల చేస్తుంది.
      </p>

      <p>
        అయితే, simple-versus-complex వర్గీకరణ ఒక అధిక సరళీకరణ. white rice మరియు maida
        (refined wheat flour) వంటి అధికంగా refined complex carbohydrates simple sugars
        అంత వేగంగా జీర్ణం కాగలవు, అదే సమయంలో whole fruit లోని కొన్ని simple carbohydrates
        వాటి fiber matrix కారణంగా నెమ్మదిగా absorb అవుతాయి. ఈ పరిమితి glycemic index ను
        మరింత సూక్ష్మమైన వర్గీకరణ వ్యవస్థగా అభివృద్ధి చేయడానికి దారితీసింది.
      </p>

      <ComparisonTable
        title="Simple vs Complex Carbohydrates"
        headers={['లక్షణం', 'Simple Carbohydrates', 'Complex Carbohydrates']}
        rows={[
          ['నిర్మాణం', '1-2 sugar units', 'పొడవైన sugar units గొలుసులు'],
          ['జీర్ణ వేగం', 'వేగవంతం', 'సాధారణంగా నెమ్మదిగా'],
          ['రక్త చక్కెర ప్రభావం', 'వేగమైన spike', 'మరింత క్రమమైన పెరుగుదల'],
          ['సంతృప్తి', 'తక్కువ', 'సాధారణంగా ఎక్కువ'],
          ['ఉదాహరణలు (భారతీయ)', 'బెల్లం, చక్కెర, తేనె, fruit juice', 'అన్నం, roti, dal, oats, bajra'],
          ['Fiber పరిమాణం', 'సాధారణంగా తక్కువ (whole fruits తప్ప)', 'వేరియబుల్ (whole grains లో ఎక్కువ)'],
        ]}
      />

      <h2>Glycemic Index</h2>

      <p>
        Glycemic index (GI) అనేది carbohydrate-containing ఆహారాలను తిన్న తర్వాత రెండు గంటల్లో
        రక్తంలో glucose స్థాయిలపై వాటి ప్రభావం ఆధారంగా rank చేసే వ్యవస్థ. Pure glucose కు
        GI 100 గా నిర్ణయించబడింది, మరియు అన్ని ఇతర ఆహారాలు దాని సాపేక్షంగా rank చేయబడతాయి.
        ఆహారాలు low GI (55 లేదా తక్కువ), medium GI (56-69), లేదా high GI (70 లేదా అంతకంటే
        ఎక్కువ) గా వర్గీకరించబడతాయి.
      </p>

      <DefinitionBlock
        title="Glycemic Index (GI)"
        definition="0 నుండి 100 వరకు ఉన్న numerical scale, carbohydrate-containing ఆహారాలను reference food (glucose లేదా white bread) తో పోలిస్తే అవి రక్తంలో glucose స్థాయిలను ఎంత పెంచుతాయో ఆధారంగా rank చేస్తుంది. ఇది ఆరోగ్యవంతమైన volunteers కు 50 g available carbohydrate ఉన్న ఆహార భాగాన్ని ఇచ్చి, రెండు గంటల్లో blood glucose response curve కింద incremental area ను కొలవడం ద్వారా నిర్ణయించబడుతుంది."
        notation="Low GI: 55 లేదా తక్కువ. Medium GI: 56-69. High GI: 70 లేదా అంతకంటే ఎక్కువ. Glycemic Load (GL) = GI x serving కు carbohydrate grams / 100."
      />

      <EvidenceBlock
        title="Glycemic Index: మూల పరిశోధన"
        finding="వివిధ carbohydrate-containing ఆహారాలు, ఒకే మొత్తంలో carbohydrate ఉన్నప్పటికీ, చాలా భిన్నమైన blood glucose responses ఇస్తాయి. Glycemic index carbohydrates ను వర్గీకరించడానికి simple-versus-complex వ్యత్యాసం కంటే మరింత అర్థవంతమైన physiological ఆధారాన్ని అందిస్తుంది."
        study="Controlled feeding trials ఉపయోగించి glycemic index concept ను స్థాపించిన landmark study"
        source="Jenkins et al. (1981) American Journal of Clinical Nutrition"
        details="Jenkins మరియు సహచరులు 5-10 ఆరోగ్యవంతమైన volunteers గ్రూపులకు 62 సాధారణంగా తినే ఆహారాలను అందించి 2 గంటల్లో blood glucose responses ను కొలిచారు. white bread మరియు potatoes వంటి ఆహారాలకు blood glucose response చాలా simple sugars కంటే ఎక్కువగా లేదా సమానంగా ఉందని వారు కనుగొన్నారు, అదే సమయంలో legumes starch-rich అయినప్పటికీ చాలా తక్కువ responses ఇచ్చాయి. complex carbohydrates simple sugars కంటే ఎల్లప్పుడూ నెమ్మదైన glucose responses ఇస్తాయనే ఊహను ఈ కనుగోలు సవాలు చేసింది."
      />

      <h3>సాధారణ భారతీయ ఆహారాల GI</h3>

      <ComparisonTable
        title="సాధారణ భారతీయ ఆహారాల Glycemic Index"
        headers={['ఆహారం', 'GI విలువ', 'వర్గం', 'సాధారణ Serving']}
        rows={[
          ['White rice (polished)', '73', 'High', '1 కటోరి (150 g వండినది)'],
          ['Brown rice', '50', 'Low', '1 కటోరి (150 g వండినది)'],
          ['Whole wheat roti', '62', 'Medium', '1 మధ్యస్థ (30 g పిండి)'],
          ['White bread', '75', 'High', '2 slices (60 g)'],
          ['Bajra (pearl millet) roti', '55', 'Low', '1 మధ్యస్థ (30 g పిండి)'],
          ['Jowar (sorghum) roti', '62', 'Medium', '1 మధ్యస్థ (30 g పిండి)'],
          ['Rajma (kidney beans)', '28', 'Low', '1 కటోరి (100 g వండినది)'],
          ['Chana dal', '11', 'Low', '1 కటోరి (100 g వండినది)'],
          ['Potato (ఉడికించిన)', '78', 'High', '1 మధ్యస్థ (150 g)'],
          ['Sweet potato (ఉడికించిన)', '63', 'Medium', '1 మధ్యస్థ (150 g)'],
        ]}
      />

      <ExampleBlock
        title="భారతీయ భోజనాల్లో Glycemic Index"
        problem="ఒక సాధారణ దక్షిణ భారత breakfast — idli (GI ~70) ని sambar తో తినడం వల్ల idli మాత్రమే తిన్నప్పటి కంటే overall glycemic response గణనీయంగా తగ్గుతుంది. sambar లోని dal నుండి protein మరియు fiber, అలాగే fat, gastric emptying మరియు glucose absorption ను నెమ్మదిస్తాయి. అదే విధంగా, అన్నానికి ఒక టేబుల్ స్పూన్ ghee కలపడం భోజనం యొక్క GI ని తగ్గిస్తుంది. ఇది ఒక mixed meal యొక్క GI వ్యక్తిగత ఆహారాల GI కంటే ఎందుకు ముఖ్యమో చూపిస్తుంది. సాంప్రదాయ భారతీయ భోజన నిర్మాణాలు — ధాన్యాలను dal, కూరగాయలు, మరియు fat వనరుతో కలపడం — glycemic responses ను సహజంగా తగ్గిస్తాయి."
      />

      <h2>Glycemic Load</h2>

      <p>
        Glycemic index carbohydrate యొక్క నాణ్యతను కొలుస్తుంది, కానీ తినే పరిమాణాన్ని
        లెక్కలోకి తీసుకోదు. ఒక ఆహారానికి high GI ఉండవచ్చు కానీ సాధారణ serving లో చాలా
        తక్కువ carbohydrate ఉండవచ్చు. Glycemic load (GL) GI ని ఒక serving లోని carbohydrate
        grams తో గుణించి 100 తో భాగించడం ద్వారా దీనిని పరిష్కరిస్తుంది. GL 10 లేదా తక్కువ
        low గా, 11-19 medium గా, మరియు 20 లేదా అంతకంటే ఎక్కువ high గా పరిగణించబడుతుంది.
      </p>

      <p>
        ఉదాహరణకు, watermelon కు high GI సుమారు 76 ఉంటుంది, కానీ సాధారణ serving లో కేవలం
        సుమారు 6 grams carbohydrate ఉంటుంది, ఇది GL కేవలం 5 (low) గా ఇస్తుంది. దీనికి
        భిన్నంగా, పెద్ద serving white rice (300 g వండినది) high GI (73) మరియు high GL
        (సుమారు 43) రెండూ కలిగి ఉంటుంది, ఇది postprandial glucose spikes కు ప్రధాన
        కారణం అవుతుంది.
      </p>

      <h2>Dietary Fiber</h2>

      <p>
        Dietary fiber అనేది plant foods లోని non-digestible carbohydrate భాగాలు. Starch
        మరియు sugars లాగా కాకుండా, fiber మానవ digestive enzymes ద్వారా విచ్ఛిన్నం కాకుండా
        small intestine గుండా వెళ్ళిపోతుంది. నేరుగా తక్కువ energy అందించినప్పటికీ (colonic
        fermentation ద్వారా short-chain fatty acid ఉత్పత్తి నుండి సుమారు 2 kcal/g),
        fiber ఆరోగ్యం మరియు బరువు నిర్వహణలో కీలక పాత్ర పోషిస్తుంది.
      </p>

      <h3>Soluble Fiber</h3>
      <p>
        Soluble fiber నీటిలో కరిగి digestive tract లో viscous gel ను ఏర్పరుస్తుంది. ఈ gel
        gastric emptying ను నెమ్మదిస్తుంది, glucose absorption ను ఆలస్యం చేస్తుంది
        (postprandial blood sugar ను తగ్గిస్తుంది), మరియు bile acids ను bind చేస్తుంది
        (LDL cholesterol తగ్గించడంలో సహాయపడుతుంది). మంచి భారతీయ వనరులలో oats, barley,
        rajma, chana, methi (fenugreek) seeds, మరియు guava మరియు apples వంటి పండ్లు
        ఉన్నాయి. ICMR భారతీయులకు రోజుకు మొత్తం 40 g fiber intake ను సిఫార్సు చేస్తుంది.
      </p>

      <h3>Insoluble Fiber</h3>
      <p>
        Insoluble fiber మలానికి bulk జోడించి intestinal transit ను వేగవంతం చేస్తుంది,
        మలబద్ధకాన్ని నివారిస్తుంది మరియు colorectal cancer ప్రమాదాన్ని తగ్గిస్తుంది. ఇది
        whole wheat bran, పండ్లు మరియు కూరగాయల తొక్కలు, మరియు whole millets లో కనిపిస్తుంది.
        Insoluble fiber calories జోడించకుండా భోజనాలకు volume జోడించడం ద్వారా సంతృప్తికి
        కూడా దోహదపడుతుంది.
      </p>

      <EvidenceBlock
        title="Fiber మరియు ఆరోగ్య ఫలితాలు"
        finding="రోజుకు dietary fiber intake లో ప్రతి 8 g/day పెరుగుదల coronary heart disease, type 2 diabetes, colorectal cancer, మరియు all-cause mortality ప్రమాదంలో 5-27% తగ్గుదలతో సంబంధం కలిగి ఉంది. ఎక్కువ fiber intake తక్కువ శరీర బరువుతో కూడా సంబంధం కలిగి ఉంది."
        study="దాదాపు 40 సంవత్సరాల evidence ను కలిగి ఉన్న prospective studies మరియు clinical trials యొక్క systematic reviews మరియు meta-analyses శ్రేణి"
        source="Reynolds et al. (2019) The Lancet"
        details="WHO చే commissioned చేయబడిన ఈ సమగ్ర review, 185 prospective studies మరియు 58 clinical trials ను విశ్లేషించింది. రోజువారీ fiber intakes 25-29 g వద్ద అత్యధిక risk reductions గమనించబడ్డాయి, dose-response curves ఎక్కువ intakes వద్ద మరిన్ని ప్రయోజనాలను సూచిస్తున్నాయి. Whole grains అత్యంత బలమైన మరియు సజాతీయ protective associations చూపించాయి. Dietary fiber intake దీర్ఘకాలిక ఆరోగ్య ఫలితాలకు ఒక critical determinant అని రచయితలు నిర్ధారించారు."
      />

      <EvidenceBlock
        title="Fiber మరియు శరీర బరువు"
        finding="పెరిగిన dietary fiber intake శరీర బరువు మరియు శరీర కొవ్వును స్థిరంగా తగ్గిస్తుంది. Fiber బహుళ mechanisms ద్వారా సంతృప్తిని ప్రోత్సహిస్తుంది: భోజనాలకు bulk మరియు volume జోడించడం, gastric emptying ను నెమ్మదించడం, మరియు satiety hormones (GLP-1, PYY) విడుదలను trigger చేయడం."
        study="Dietary fiber మరియు శరీర బరువు నియంత్రణపై clinical మరియు epidemiological evidence యొక్క review"
        source="Slavin (2005) Nutrition"
        details="చాలా interventional studies fiber intake ను రోజుకు 14 g పెంచడం వల్ల energy intake లో 10% తగ్గుదల మరియు 3.8 నెలల్లో సుమారు 1.9 kg శరీర బరువు తగ్గడంతో సంబంధం కలిగి ఉందని review కనుగొంది. ఊబకాయం ఉన్న వ్యక్తుల్లో ప్రభావాలు మరింత ఎక్కువగా ఉన్నాయి. Viscous soluble fibers (oats మరియు legumes లో ఉన్నవి వంటివి) ఆకలి మరియు energy intake ను తగ్గించడంలో ప్రత్యేకంగా ప్రభావవంతంగా ఉన్నాయి."
      />

      <h2>భారతీయ ఆహారంలో Carbohydrates</h2>

      <p>
        సాంప్రదాయ భారతీయ ఆహారం carbohydrate-dominant, వివిధ ప్రాంతాల్లో అన్నం మరియు గోధుమ
        ఆహార ప్రధానాలుగా ఉన్నాయి. చాలా భారతీయ ఆహారాల్లో carbohydrates మొత్తం calories లో
        65-75% అందిస్తాయి, ఇది ICMR సిఫార్సు 55-60% కంటే ఎక్కువ. ఈ అధిక carbohydrate load,
        ముఖ్యంగా polished rice మరియు maida వంటి refined వనరుల నుండి, భారతదేశంలో type 2 diabetes
        యొక్క అధిక ప్రాబల్యానికి ఒక కారణ అంశంగా పరిగణించబడుతుంది.
      </p>

      <NutritionFactBlock
        food="Whole Wheat Roti (1 మధ్యస్థ)"
        serving="30 g పిండి, ~40 g వండినది"
        calories={100}
        protein={3.5}
        carbs={20}
        fat={0.5}
        fiber={3}
        highlights={[
          'Medium GI (62) - white bread కంటే మెరుగు',
          'B vitamins మరియు iron యొక్క మంచి వనరు (unrefined అయినప్పుడు)',
          'Complementary amino acids కోసం dal తో కలిపి తినండి',
        ]}
      />

      <NutritionFactBlock
        food="వండిన White Rice (1 కటోరి)"
        serving="150 g వండినది (సుమారు 50 g పచ్చిది)"
        calories={180}
        protein={3.5}
        carbs={40}
        fat={0.3}
        fiber={0.5}
        highlights={[
          'High GI (73) - వేగమైన blood sugar పెరుగుదల కలిగిస్తుంది',
          'Bran తొలగించడం వల్ల చాలా తక్కువ fiber',
          'Brown rice, millets తో replace చేయడం లేదా portion size తగ్గించడం పరిగణించండి',
        ]}
      />

      <WarningBlock
        title="భారతీయ Diabetes మహమ్మారి మరియు Carbohydrate నాణ్యత">
        భారతదేశంలో 100 million కంటే ఎక్కువ మంది పెద్దవారికి type 2 diabetes ఉంది, మరియు carbohydrate నాణ్యత ఒక ముఖ్యమైన modifiable risk factor. Asian Indians Western populations కంటే తక్కువ BMI విలువల వద్ద insulin resistance చూపిస్తారు, ఇది high-GI, refined carbohydrates యొక్క metabolic effects కు వారిని మరింత susceptible చేస్తుంది. ICMR consensus guidelines refined cereals ను whole grains మరియు millets తో replace చేయాలని, dal మరియు కూరగాయల intake పెంచాలని, మరియు diabetes నివారణ కోసం మొత్తం carbohydrate ను calories లో 55-60% కు పరిమితం చేయాలని సిఫార్సు చేస్తాయి.
      </WarningBlock>

      <ExampleBlock
        title="మెరుగైన Carbohydrate నాణ్యత కోసం ఆచరణాత్మక మార్పులు"
        problem="Polished white rice ను hand-pounded rice, brown rice, లేదా rice మరియు millets (bajra, jowar, ragi) మిశ్రమంతో replace చేయండి. rotis మరియు parathas కోసం maida బదులు whole wheat atta వాడండి. dalia (broken wheat porridge), కూరగాయలతో చేసిన poha, లేదా ragi mudde వంటి సాంప్రదాయ preparations ఎంచుకోండి. భోజనాల్లో rice కంటే dal నిష్పత్తి పెంచండి. భోజనం యొక్క fiber content పెంచడానికి మరియు glycemic load తగ్గించడానికి parathas మరియు rice dishes కు lauki, bhindi, లేదా beans వంటి కూరగాయలు జోడించండి."
      />

      <h2>Carbohydrates మరియు బరువు నిర్వహణ</h2>

      <p>
        బరువు నిర్వహణలో carbohydrates పాత్ర విస్తృతంగా చర్చించబడింది. కొన్ని ప్రాచుర్యమైన
        diets తీవ్రమైన carbohydrate restriction ను సమర్థిస్తాయి (ketogenic మరియు low-carb diets),
        మరికొన్ని పరిమాణం కంటే carbohydrate నాణ్యతను నొక్కి చెబుతాయి. శాస్త్రీయ evidence మొత్తం
        caloric intake మరియు carbohydrate నాణ్యత రెండూ ముఖ్యమని, కానీ overall energy balance
        బరువు మార్పుకు ప్రాథమిక నిర్ణయాంశంగా ఉంటుందని సూచిస్తుంది.
      </p>

      <p>
        High-fiber, low-GI carbohydrate వనరులు బహుళ mechanisms ద్వారా బరువు నిర్వహణను
        ప్రోత్సహిస్తాయి: calorie కు ఎక్కువ సంతృప్తి, నిదానమైన జీర్ణక్రియ వల్ల నిరంతర energy,
        తక్కువ insulin responses (lipogenesis తగ్గించడం), మరియు gut microbiome పై ప్రయోజనకరమైన
        ప్రభావాలు. దీనికి విరుద్ధంగా, refined, high-GI carbohydrates వేగమైన blood sugar spikes
        మరియు crashes, తక్కువ సంతృప్తి, మరియు hyperinsulinemia ద్వారా అధికంగా తినడాన్ని
        ప్రోత్సహిస్తాయి.
      </p>

      <NoteBlock
        title="Resistant Starch">
        Resistant starch అనేది small intestine లో జీర్ణక్రియను నిరోధించే మరియు soluble fiber లాగా పనిచేసే ఒక రకమైన starch. ఇది పచ్చి potatoes, పచ్చి bananas, మరియు legumes లో సహజంగా కనిపిస్తుంది, మరియు rice మరియు potatoes వంటి starchy ఆహారాలను వండి తర్వాత చల్లబరిచినప్పుడు కూడా ఏర్పడుతుంది (retrogradation). అందుకే మిగిలిపోయిన చల్లని అన్నం తాజాగా వండిన అన్నం కంటే తక్కువ glycemic impact కలిగి ఉంటుంది. భారతీయ వంటలో, cold rice salads లేదా ఒక రోజు ముందు తయారు చేసిన roti వంటి dishes అదనపు resistant starch ప్రయోజనాలను అందించవచ్చు.
      </NoteBlock>

      <h2>ముఖ్యమైన విషయాలు</h2>

      <ul>
        <li>
          Carbohydrates 4 kcal/g అందిస్తాయి మరియు శరీరానికి ఇష్టమైన energy వనరు, ముఖ్యంగా
          brain కు మరియు high-intensity exercise సమయంలో.
        </li>
        <li>
          Simple-versus-complex వర్గీకరణ metabolic ప్రభావాలను అంచనా వేయడానికి glycemic index
          మరియు glycemic load కంటే తక్కువ ఉపయోగకరం.
        </li>
        <li>
          Dietary fiber (soluble మరియు insoluble రెండూ) తక్కువ శరీర బరువు, తగ్గిన వ్యాధి
          ప్రమాదం, మరియు మెరుగైన సంతృప్తితో స్థిరంగా సంబంధం కలిగి ఉంది. రోజుకు కనీసం
          25-40 g లక్ష్యంగా పెట్టుకోండి.
        </li>
        <li>
          భారతీయ ఆహారాలు carbohydrate-heavy గా ఉంటాయి; metabolic ఆరోగ్యం కోసం పరిమాణం కంటే
          నాణ్యతపై (whole grains, millets, legumes) దృష్టి పెట్టడం చాలా ముఖ్యం.
        </li>
        <li>
          సాంప్రదాయ భారతీయ భోజన నిర్మాణాలు — ధాన్యాలను dal, కూరగాయలు, మరియు fat తో కలపడం —
          glycemic responses ను సహజంగా తగ్గిస్తాయి మరియు వాటిని కొనసాగించాలి.
        </li>
        <li>
          బరువు నిర్వహణ కోసం, carbohydrate నాణ్యత మరియు మొత్తం caloric intake రెండూ ముఖ్యమే;
          తీవ్రమైన restriction లేదా refined carbohydrates యొక్క అపరిమిత వినియోగం — రెండూ
          optimal కావు.
        </li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
