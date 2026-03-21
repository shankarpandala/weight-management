import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

const references = [
  { authors: 'Kiela PR, Ghishan FK', year: 2016, title: 'Physiology of intestinal absorption and secretion', source: 'Best Practice & Research Clinical Gastroenterology, 30(2), 145-159', type: 'review' },
  { authors: 'Gropper SS, Smith JL', year: 2013, title: 'Advanced Nutrition and Human Metabolism', source: 'Wadsworth, 6th Edition', type: 'foundational' },
  { authors: 'Iqbal J, Hussain MM', year: 2009, title: 'Intestinal lipid absorption', source: 'American Journal of Physiology, 296(6), E1183-E1194', type: 'review' },
  { authors: 'Daniel H', year: 2004, title: 'Molecular and integrative physiology of intestinal peptide transport', source: 'Annual Review of Physiology, 66, 361-384', type: 'foundational' },
  { authors: 'Hurrell R, Egli I', year: 2010, title: 'Iron bioavailability and dietary reference values', source: 'American Journal of Clinical Nutrition, 91(5), 1461S-1467S', type: 'review' },
];

export default function NutrientAbsorptionTe() {
  return (
    <div className="prose-health">
      <h1>పోషకాల శోషణ విధానాలు</h1>

      <p>
        జీర్ణక్రియ ఆహారాన్ని చిన్న అణువులుగా విడగొడుతుంది, కానీ ఆ అణువులు రక్తప్రవాహంలోకి
        ప్రవేశించడానికి పేగు గోడను దాటాలి. ఈ ప్రక్రియను — absorption అని పిలుస్తారు — ఇక్కడే
        నిజమైన పోషణ జరుగుతుంది. చిన్న పేగు తీసుకున్న పోషకాలలో 90% కంటే ఎక్కువ శోషించుకుంటుంది,
        దీని కోసం అనేక విభిన్న transport విధానాలను ఉపయోగిస్తుంది.
      </p>

      <DefinitionBlock
        title="పోషకాల శోషణ (Nutrient Absorption)"
        definition="జీర్ణమైన పోషకాలు పేగు epithelium దాటి రక్తం లేదా lymph లోకి ప్రవేశించే ప్రక్రియ. ఇది ప్రధానంగా jejunum మరియు ileum లో నాలుగు విధానాల ద్వారా జరుగుతుంది: passive diffusion, facilitated diffusion, active transport, మరియు endocytosis."
        notation="శోషణ ఉపరితలం circular folds, villi, మరియు microvilli (brush border) ద్వారా ~600 రెట్లు పెరుగుతుంది."
      />

      <h2>Transport విధానాలు</h2>

      <h3>Passive Diffusion</h3>
      <p>
        అణువులు ఎటువంటి శక్తి ఖర్చు లేకుండా ఎక్కువ సాంద్రత నుండి తక్కువ సాంద్రతకు
        కదులుతాయి. నీరు, కొన్ని lipids, మరియు fat-soluble vitamins (A, D, E, K) ఈ విధంగా
        పేగు membrane దాటతాయి. చిన్న, lipophilic అణువులు నేరుగా phospholipid bilayer
        గుండా వెళ్ళగలవు.
      </p>

      <h3>Facilitated Diffusion</h3>
      <p>
        Carrier proteins ATP లేకుండా అణువులను వాటి concentration gradient వెంట membrane
        దాటడానికి సహాయం చేస్తాయి. Fructose శోషణ brush border పై ఉన్న GLUT5 transporters
        ను ఈ విధానం ద్వారా ఉపయోగిస్తుంది.
      </p>

      <h3>Active Transport</h3>
      <p>
        శక్తి-ఆధారిత (ATP) transport concentration gradient కి వ్యతిరేకంగా జరుగుతుంది.
        చాలావరకు పోషకాల శోషణ ఈ విధానాన్ని ఉపయోగిస్తుంది. Glucose మరియు galactose లు
        SGLT1 (sodium-glucose co-transporter) ద్వారా శోషించబడతాయి — sodium తన gradient
        వెంట ప్రవహించడం glucose ను లోపలికి లాగడానికి శక్తిని అందిస్తుంది. Amino acids
        కూడా ఇలాంటి sodium-coupled transporters ను ఉపయోగిస్తాయి.
      </p>

      <h3>Endocytosis</h3>
      <p>
        కణ membrane పెద్ద అణువులను చుట్టి లోపలికి తీసుకుంటుంది. ఈ విధానం intact proteins
        (శిశువులకు తల్లిపాలలోని antibodies వంటివి) మరియు కొన్ని vitamin B12-intrinsic factor
        complexes కోసం ఉపయోగించబడుతుంది.
      </p>

      <h2>Carbohydrate శోషణ</h2>
      <p>
        Monosaccharides చివరి శోషణయోగ్య రూపం. Glucose మరియు galactose enterocytes లోకి
        apical ఉపరితలంపై SGLT1 (active transport) ద్వారా ప్రవేశిస్తాయి మరియు basolateral
        వైపున GLUT2 ద్వారా capillaries లోకి బయటకు వెళ్తాయి. Fructose ప్రవేశం కోసం GLUT5
        (facilitated diffusion) ను ఉపయోగిస్తుంది. మూడు monosaccharides కూడా portal vein
        ద్వారా liver కి processing కోసం ప్రయాణిస్తాయి.
      </p>

      <h2>Protein శోషణ</h2>
      <p>
        Amino acids, dipeptides, మరియు tripeptides శోషించబడతాయి. Free amino acids sodium-coupled
        transporters ను ఉపయోగిస్తాయి (వేర్వేరు amino acid వర్గాలకు కనీసం 7 రకాలు).
        Dipeptides మరియు tripeptides PepT1 transporters ను ఉపయోగిస్తాయి — మరియు వాస్తవానికి
        free amino acids కంటే మరింత సమర్థవంతంగా శోషించబడతాయి. కణం లోపల, peptidases మిగిలిన
        peptides ను portal blood కి export చేయడానికి ముందు free amino acids గా విడగొడతాయి.
      </p>

      <EvidenceBlock
        title="Peptide Transport సామర్థ్యం"
        finding="Dipeptides మరియు tripeptides PepT1 transporter ద్వారా సమానమైన free amino acids కంటే వేగంగా శోషించబడతాయి. Protein hydrolysates మరియు whey peptides వేగవంతమైన absorption kinetics చూపించడానికి ఇదే కారణం."
        study="Molecular characterization of intestinal peptide transport"
        source="Daniel (2004) Annual Review of Physiology"
        details="PepT1 transporter amino acid కూర్పుతో సంబంధం లేకుండా దాదాపు ఏ di- లేదా tripeptide నైనా స్వీకరిస్తుంది, ఇది చాలా versatile గా చేస్తుంది. ఇది శక్తి కోసం proton gradient ను ఉపయోగిస్తుంది. దీనికి ఆచరణాత్మక ప్రాముఖ్యత ఉంది: fermented dal లేదా aged paneer వంటి ఆహారాలలో ముందుగానే ఏర్పడిన peptides ఉంటాయి, ఇవి intact proteins కంటే మరింత సమర్థవంతంగా శోషించబడవచ్చు."
      />

      <h2>Fat శోషణ</h2>
      <p>
        Fat శోషణ ప్రత్యేకమైనది ఎందుకంటే fats నీటిలో కరగవు. Pancreatic lipase monoglycerides
        మరియు fatty acids ను సృష్టించిన తర్వాత, bile salts వాటిని mixed micelles గా
        నిర్వహిస్తాయి — ఇవి నీటిలో కరిగే చిన్న packages, ఇవి fats ను brush border కి
        అందిస్తాయి. కణ ఉపరితలం వద్ద, fats membrane లో కరిగి కణంలోకి ప్రవేశిస్తాయి.
      </p>
      <p>
        Enterocytes లోపల, fatty acids తిరిగి triglycerides గా సమావేశమవుతాయి మరియు
        cholesterol, phospholipids, మరియు proteins తో కలిసి chylomicrons గా pack
        చేయబడతాయి — ఇవి పెద్ద lipoprotein particles, ఇవి lacteals ద్వారా lymphatic
        system లోకి ప్రవేశిస్తాయి (portal blood లోకి కాదు). అందువల్ల dietary fat
        carbohydrates లేదా protein కంటే రక్తప్రవాహంలో నెమ్మదిగా కనిపిస్తుంది.
      </p>

      <NoteBlock
        title="Medium-Chain Triglycerides (MCTs)">
        దక్షిణ భారత వంటకాల్లో విస్తృతంగా ఉపయోగించే కొబ్బరి నూనెలో medium-chain fatty acids (C8-C12) ఉంటాయి, ఇవి chylomicron pathway ను bypass చేస్తాయి. MCTs amino acids లాగా నేరుగా portal blood లోకి శోషించబడతాయి, త్వరిత శక్తి కోసం liver ని వేగంగా చేరుకుంటాయి. బరువు నిర్వహణలో కొబ్బరి నూనె దృష్టిని ఆకర్షించడానికి ఇది ఒక కారణం, అయినప్పటికీ మొత్తం calorie balance ఇప్పటికీ బరువు మార్పును నిర్ణయిస్తుంది.
      </NoteBlock>

      <h2>Mineral శోషణ</h2>

      <h3>Iron</h3>
      <p>
        Iron శోషణ కఠినంగా నియంత్రించబడుతుంది మరియు సాధారణంగా తక్కువగా ఉంటుంది (తీసుకున్న
        దానిలో 5-35%). మాంసం నుండి వచ్చే Heme iron, మొక్కల నుండి వచ్చే non-heme iron కంటే
        2-3 రెట్లు ఎక్కువ సమర్థవంతంగా శోషించబడుతుంది. Vitamin C Fe3+ ను Fe2+ గా reduce చేయడం
        ద్వారా non-heme iron శోషణను పెంచుతుంది. తృణధాన్యాలలోని phytates మరియు టీలోని tannins
        iron శోషణను గణనీయంగా అడ్డుకుంటాయి — భారతీయ శాకాహార ఆహారాల్లో ఇది ఒక ముఖ్యమైన సమస్య.
      </p>

      <h3>Calcium</h3>
      <p>
        తక్కువ తీసుకున్నప్పుడు duodenum లో active transport (vitamin D-dependent) ద్వారా
        శోషించబడుతుంది, ఎక్కువ తీసుకున్నప్పుడు చిన్న పేగు అంతటా passive diffusion ద్వారా
        శోషించబడుతుంది. పాలకూరలోని oxalates మరియు తృణధాన్యాలలోని phytates calcium శోషణను
        తగ్గిస్తాయి. పాల ఉత్పత్తులు అత్యంత bioavailable calcium మూలంగా ఉన్నాయి —
        lactose-intolerant భారతీయులకు ఇది ఒక సవాలు.
      </p>

      <ExampleBlock
        title="భారతీయ భోజనాల నుండి Iron శోషణను పెంచడం"
        problem="ఒక సాధారణ శాకాహార thali లో iron (పాలకూర, dal, రోటీ నుండి) ఉంటుంది కానీ శోషణ inhibitors (phytates, tannins) కూడా ఉంటాయి. మెరుగుపరచడానికి: (1) dal కి నిమ్మరసం (vitamin C) జోడించండి — non-heme iron శోషణ 2-3 రెట్లు పెరుగుతుంది. (2) భోజనం తర్వాత 1 గంట లోపు టీ/coffee తాగకండి — tannins iron శోషణను 60-80% తగ్గిస్తాయి. (3) ఉసిరికాయ (amla) చేర్చండి — అత్యంత సమృద్ధమైన vitamin C వనరులలో ఒకటి. (4) తృణధాన్యాలను నానబెట్టి పులియబెట్టండి — phytate content ను 40-60% తగ్గిస్తుంది. idli batter పులియబెట్టడం వంటి సాంప్రదాయ పద్ధతులు mineral bioavailability ని సహజంగా మెరుగుపరుస్తాయి."
      />

      <WarningBlock
        title="Malabsorption హెచ్చరిక సంకేతాలు">
        పోషకాల malabsorption సంకేతాలలో దీర్ఘకాలిక అతిసారం, కొవ్వుతో కూడిన/దుర్వాసనగల మలం, వివరించలేని బరువు తగ్గుదల, ఉబ్బరం, అలసట, మరియు పోషకాల లోపం లక్షణాలు (anemia, ఎముక నొప్పి, సులభంగా కందడం) ఉంటాయి. Celiac disease, tropical sprue (దక్షిణ భారతదేశంలో సాధారణం), inflammatory bowel disease, మరియు chronic pancreatitis అన్నీ శోషణను దెబ్బతీయవచ్చు. నిరంతర లక్షణాలు అనుభవిస్తుంటే gastroenterologist ను సంప్రదించండి.
      </WarningBlock>

      <h2>ముఖ్యమైన అంశాలు</h2>
      <ul>
        <li>చిన్న పేగు active transport, facilitated diffusion, passive diffusion, మరియు endocytosis ఉపయోగించి 90%+ పోషకాలను శోషిస్తుంది.</li>
        <li>Glucose SGLT1 (active) ను, fructose GLUT5 (facilitated) ను ఉపయోగిస్తుంది.</li>
        <li>Peptides (di/tripeptides) PepT1 ద్వారా free amino acids కంటే మరింత సమర్థవంతంగా శోషించబడతాయి.</li>
        <li>Fats కు bile salt micelles అవసరం మరియు lymphatic transport కోసం chylomicrons గా pack చేయబడతాయి.</li>
        <li>Iron మరియు calcium శోషణ dietary enhancers (vitamin C) మరియు inhibitors (phytates, tannins) ద్వారా బాగా ప్రభావితమవుతాయి.</li>
        <li>పులియబెట్టడం, నిమ్మరసం వాడటం, మసాలాలతో వండడం వంటి సాంప్రదాయ భారతీయ పద్ధతులు పోషకాల bioavailability ని మెరుగుపరుస్తాయి.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
