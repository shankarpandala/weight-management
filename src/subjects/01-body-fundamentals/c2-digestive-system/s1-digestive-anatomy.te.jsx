import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

const references = [
  { authors: 'Tortora GJ, Derrickson B', year: 2017, title: 'Principles of Anatomy and Physiology', source: 'Wiley, 15th Edition', type: 'foundational' },
  { authors: 'Helander HF, Fändriks L', year: 2014, title: 'Surface area of the digestive tract – revisited', source: 'Scandinavian Journal of Gastroenterology, 49(6), 681-689', type: 'foundational' },
  { authors: 'Sensoy I', year: 2021, title: 'A review on the food digestion in the digestive tract and the used in vitro models', source: 'Current Research in Food Science, 4, 308-319', type: 'review' },
  { authors: 'Mowat AM, Agace WW', year: 2014, title: 'Regional specialization within the intestinal immune system', source: 'Nature Reviews Immunology, 14(10), 667-685', type: 'review' },
  { authors: 'Reed KK, Wickham R', year: 2009, title: 'Review of the gastrointestinal tract: from macro to micro', source: 'Seminars in Oncology Nursing, 25(1), 3-14', type: 'review' },
];

export default function DigestiveAnatomyTe() {
  return (
    <div className="prose-health">
      <h1>Digestive System శరీర నిర్మాణం</h1>

      <p>
        Digestive system అనేది నోటి నుండి మలద్వారం వరకు సుమారు 9 మీటర్ల పొడవున్న ఒక నిరంతర గొట్టం.
        ఇది ఆహారాన్ని — అన్నం, రోటీ, పప్పు, కూరగాయలు — రక్తప్రవాహంలోకి శోషించుకునేంత చిన్న
        అణువులుగా విడగొడుతుంది. ఈ అణువులు శక్తి, పెరుగుదల మరియు మరమ్మతు కోసం ఉపయోగపడతాయి.
      </p>

      <DefinitionBlock
        title="Gastrointestinal (GI) Tract"
        definition="ఆహారం ప్రయాణించే నిరంతర కండర గొట్టం: నోరు, pharynx, esophagus, stomach, small intestine (duodenum, jejunum, ileum), large intestine (cecum, colon, rectum), మరియు మలద్వారం. దీన్ని alimentary canal అని కూడా అంటారు."
        notation="నాలుగు కణజాల పొరలు: mucosa (అంతర్భాగం), submucosa, muscularis externa (peristalsis ఉత్పత్తి చేస్తుంది), మరియు serosa (బయటి పొర)."
      />

      <h2>నోరు: జీర్ణక్రియ ఇక్కడే మొదలవుతుంది</h2>
      <p>
        యాంత్రిక జీర్ణక్రియ నమలడంతో మొదలవుతుంది, ఇది enzymes కోసం ఉపరితల వైశాల్యాన్ని పెంచుతుంది.
        మూడు జతల లాలాజల గ్రంధుల నుండి వచ్చే లాలాజలంలో salivary amylase (ptyalin) ఉంటుంది — ఇది
        మొదటి digestive enzyme, ఇది పిండి పదార్థాన్ని maltose గా మార్చడం ప్రారంభిస్తుంది.
        అందుకే మామూలు అన్నాన్ని ఎక్కువసేపు నమిలితే తీపిగా అనిపిస్తుంది.
      </p>

      <NoteBlock
        title="నమలడం మరియు బరువు నిర్వహణ"
        content="అధ్యయనాల ప్రకారం బాగా నమలడం (ప్రతి ముద్దకు 30-40 సార్లు) సంతృప్తి హార్మోన్లను పెంచుతుంది, భోజనం పరిమాణాన్ని 10-15% తగ్గిస్తుంది, మరియు శోషణను మెరుగుపరుస్తుంది. సాంప్రదాయంగా చేతితో తినడం హడావిడిగా fork తో తినడం కంటే నెమ్మదిగా, శ్రద్ధగా తినడాన్ని సహజంగా ప్రోత్సహిస్తుంది."
      />

      <h2>Esophagus</h2>
      <p>
        ఇది 25 సెం.మీ. పొడవైన కండర గొట్టం, peristalsis ద్వారా ఆహారాన్ని stomach కు తీసుకెళ్తుంది.
        దిగువ esophageal sphincter ఆహారం లోపలికి వెళ్ళడానికి తెరుచుకుంటుంది, ఆమ్లం తిరిగి రాకుండా
        మూసుకుంటుంది. ఇది బలహీనపడినప్పుడు, GERD (గుండెల్లో మంట) వస్తుంది — రాత్రి పూట ఆలస్యంగా
        భారీ, మసాలా భోజనాలు తిన్నప్పుడు ఇది సర్వసాధారణం.
      </p>

      <h2>Stomach</h2>
      <p>
        ఇది J-ఆకారంలో ఉన్న అవయవం, 1-1.5 లీటర్లు పట్టుతుంది. ఇది ఆహారాన్ని నిల్వ చేస్తుంది,
        కలుపుతుంది, మరియు రసాయనికంగా జీర్ణం చేస్తుంది. Gastric గ్రంధులు hydrochloric acid
        (pH 1.5-3.5) ఉత్పత్తి చేస్తాయి — ఇది బ్యాక్టీరియాను చంపుతుంది, proteins ను విచ్ఛిన్నం
        చేస్తుంది, మరియు pepsinogen ను pepsin గా మార్చి protein జీర్ణక్రియను ప్రారంభిస్తుంది.
        Stomach vitamin B12 శోషణ కోసం intrinsic factor కూడా ఉత్పత్తి చేస్తుంది.
      </p>
      <p>
        ఆహారం chyme గా మారి pyloric sphincter ద్వారా నెమ్మదిగా విడుదల అవుతుంది. ఒక మిశ్రమ భోజనం
        ఖాళీ కావడానికి 2-4 గంటలు పడుతుంది; ఎక్కువ కొవ్వు ఉన్న భోజనాలకు 4-6 గంటలు పడుతుంది —
        అందుకే paneer butter masala మామూలు అన్నం కంటే ఎక్కువసేపు కడుపు నిండుగా ఉంచుతుంది.
      </p>

      <h2>Small Intestine</h2>
      <p>
        ఇది జీర్ణక్రియ యొక్క అసలు పనిచేసే భాగం — సుమారు 6 మీటర్ల పొడవు, మూడు విభాగాలతో:
      </p>

      <h3>Duodenum (25 సెం.మీ.)</h3>
      <p>
        ఇక్కడ chyme తో పాటు liver/gallbladder నుండి bile మరియు pancreatic juice వస్తాయి. Bile
        కొవ్వులను emulsify చేస్తుంది; pancreatic enzymes అన్ని macronutrients విచ్ఛిన్నాన్ని
        పూర్తి చేస్తాయి. Bicarbonate stomach ఆమ్లాన్ని pH 7-8 కు తటస్థం చేస్తుంది.
      </p>

      <h3>Jejunum (2.5 మీ.)</h3>
      <p>
        ప్రధాన శోషణ ప్రదేశం. వృత్తాకార మడతలు, villi, మరియు microvilli కలిసి అపారమైన ఉపరితల
        వైశాల్యాన్ని సృష్టిస్తాయి. చాలా వరకు carbohydrates, proteins, కొవ్వులు, vitamins, మరియు
        minerals ఇక్కడే శోషించబడతాయి.
      </p>

      <h3>Ileum (3.5 మీ.)</h3>
      <p>
        మిగిలిన పోషకాలను, bile salts (పునర్వినియోగం కోసం), మరియు vitamin B12 ను శోషిస్తుంది.
        ఇందులో Peyer&apos;s patches ఉంటాయి — ఇవి రోగకారక క్రిములను గుర్తించడానికి intestine
        లోని పదార్థాలను పర్యవేక్షించే రోగనిరోధక కణజాలం.
      </p>

      <EvidenceBlock
        title="Small Intestine ఉపరితల వైశాల్యం"
        finding="శోషణ ఉపరితల వైశాల్యం సుమారు 32 చదరపు మీటర్లు — ఒక చిన్న studio apartment అంత. Electron microscopy ఆధారంగా ఇంతకు ముందు అంచనా వేసిన 200+ m² అతిగా అంచనా వేయబడింది."
        study="ఆధునిక morphometric పద్ధతులతో పునఃమూల్యాంకనం"
        source="Helander & Fändriks (2014) Scandinavian Journal of Gastroenterology"
        details="32 m² అయినా కూడా, ఇది బయటి శరీర ఉపరితల వైశాల్యం కంటే సుమారు 100 రెట్లు ఎక్కువ — సమర్థవంతమైన పోషక శోషణకు ఇది చాలా సరిపోతుంది. ఈ భారీ విస్తరణ circular folds (3x), villi (10x), మరియు microvilli (20x) గుణకార ప్రభావం వల్ల వస్తుంది."
      />

      <h2>Large Intestine (Colon)</h2>
      <p>
        సుమారు 1.5 మీటర్ల పొడవు. ఈ దశ వచ్చేసరికి, చాలా పోషకాలు ఇప్పటికే శోషించబడి ఉంటాయి.
        Colon యొక్క ప్రధాన విధులు:
      </p>
      <ul>
        <li><strong>నీటి పునరుద్ధరణ:</strong> రోజుకు ~1.5 లీటర్లు, ద్రవ chyme ను గట్టి మలంగా మారుస్తుంది.</li>
        <li><strong>బ్యాక్టీరియల fermentation:</strong> ~100 ట్రిలియన్ బ్యాక్టీరియా dietary fiber ను short-chain fatty acids (butyrate, propionate, acetate) గా ferment చేసి రోజువారీ శక్తిలో 5-10% అందిస్తాయి.</li>
        <li><strong>Vitamin ఉత్పత్తి:</strong> బ్యాక్టీరియా vitamin K మరియు కొన్ని B vitamins సంశ్లేషణ చేస్తాయి.</li>
        <li><strong>వ్యర్థాల తొలగింపు:</strong> Rectum మలాన్ని బయటకు పంపే వరకు నిల్వ చేస్తుంది.</li>
      </ul>

      <ExampleBlock
        title="ఒక దక్షిణ భారత భోజనం యొక్క జీర్ణ ప్రయాణం"
        description="Sambar rice తో papad: (1) నోరు — నమలడం మరియు salivary amylase అన్నం పిండి జీర్ణక్రియను ప్రారంభిస్తాయి. (2) Stomach — HCl మరియు pepsin పప్పు proteins ను విచ్ఛిన్నం చేస్తాయి; 3-4 గంటలు కలపడం. (3) Duodenum — bile తాలింపు నూనెను emulsify చేస్తుంది; pancreatic enzymes అన్ని macronutrients ను జీర్ణం చేస్తాయి. (4) Jejunum — అన్నం నుండి glucose, పప్పు నుండి amino acids, నూనె నుండి fatty acids, కూరగాయల నుండి vitamins villi ద్వారా శోషించబడతాయి. (5) Ileum — మిగిలిన పోషకాలు మరియు bile salts శోషించబడతాయి. (6) Colon — కూరగాయల fiber బ్యాక్టీరియా ద్వారా ferment అవుతుంది, నీరు పునరుద్ధరించబడుతుంది, మిగిలినది మలంగా మారుతుంది. మొత్తం ప్రయాణ సమయం: 24-72 గంటలు."
      />

      <h2>సహాయక అవయవాలు</h2>
      <p>
        <strong>Liver:</strong> రోజుకు 500-1000 mL bile ఉత్పత్తి చేస్తుంది; hepatic portal vein
        ద్వారా శోషించబడిన అన్ని పోషకాలను ప్రాసెస్ చేస్తుంది. <strong>Pancreas:</strong> రెండు
        విధులు — exocrine (digestive enzymes, bicarbonate) మరియు endocrine (insulin, glucagon).
        <strong>Gallbladder:</strong> bile ను కేంద్రీకరించి నిల్వ చేస్తుంది; భారతీయ మహిళల్లో
        gallstones సర్వసాధారణం, ముఖ్యంగా వేగంగా బరువు తగ్గినప్పుడు.
      </p>

      <h2>ముఖ్యమైన విషయాలు</h2>
      <ul>
        <li>GI tract అనేది 9-మీటర్ల గొట్టం, యాంత్రిక మరియు రసాయన జీర్ణక్రియ ద్వారా ఆహారాన్ని ప్రాసెస్ చేస్తుంది.</li>
        <li>జీర్ణక్రియ నోటిలో (పిండి పదార్థం) మరియు stomach లో (protein) మొదలవుతుంది, చాలా వరకు duodenum లో జరుగుతుంది.</li>
        <li>Small intestine తన 32 m² ఉపరితల వైశాల్యం ద్వారా 90%+ పోషకాలను శోషిస్తుంది.</li>
        <li>Large intestine నీటిని పునరుద్ధరిస్తుంది, microbiome కు ఆవాసం కల్పిస్తుంది, మరియు వ్యర్థాలను తొలగిస్తుంది.</li>
        <li>మొత్తం ప్రయాణ సమయం: నోటి నుండి తొలగింపు వరకు 24-72 గంటలు.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
