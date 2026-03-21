import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

const references = [
  { authors: 'Whitcomb DC, Lowe ME', year: 2007, title: 'Human pancreatic digestive enzymes', source: 'Digestive Diseases and Sciences, 52(1), 1-17', type: 'review' },
  { authors: 'Ianiro G, Pecere S, Giorgio V, Gasbarrini A, Cammarota G', year: 2016, title: 'Digestive enzyme supplementation in gastrointestinal diseases', source: 'Current Drug Metabolism, 17(2), 187-193', type: 'review' },
  { authors: 'Roxas M', year: 2008, title: 'The role of enzyme supplementation in digestive disorders', source: 'Alternative Medicine Review, 13(4), 307-314', type: 'review' },
  { authors: 'Bauer E, Jakob S, Mosenthin R', year: 2005, title: 'Principles of physiology of lipid digestion', source: 'Asian-Australasian Journal of Animal Sciences, 18(2), 282-295', type: 'foundational' },
  { authors: 'Swagerty DL, Walling AD, Klein RM', year: 2002, title: 'Lactose intolerance', source: 'American Family Physician, 65(9), 1845-1850', type: 'review' },
];

export default function EnzymesSecretionsTe() {
  return (
    <div className="prose-health">
      <h1>Enzymes & జీర్ణ స్రావాలు</h1>

      <p>
        జీర్ణ enzymes అనేవి మన శరీరంలో ఉండే జీవ రసాయన ఉత్ప్రేరకాలు — ఇవి పెద్ద పోషకాలను
        శోషించగలిగే చిన్న యూనిట్లుగా విడగొడతాయి. ఇవి లేకపోతే, మీరు తినే dal, rice, chapati
        అన్నీ జీర్ణం కాకుండా అలాగే బయటికి వెళ్ళిపోతాయి. ప్రతి enzyme చాలా ప్రత్యేకమైనది —
        ఒక నిర్దిష్ట pH లో ఒక రకమైన రసాయన బంధం మీద మాత్రమే పనిచేస్తుంది.
      </p>

      <DefinitionBlock
        title="జీర్ణ Enzymes"
        definition="ఆహారంలోని పెద్ద అణువులను చిన్న యూనిట్లుగా విడగొట్టే proteins: carbohydrates నుండి monosaccharides, proteins నుండి amino acids, కొవ్వుల నుండి fatty acids మరియు glycerol."
        notation="వాటి substrate ఆధారంగా వర్గీకరించబడతాయి: amylases (పిండి పదార్థం), proteases (protein), lipases (కొవ్వు), nucleases (nucleic acids)."
      />

      <h2>పిండి పదార్థాలను జీర్ణం చేసే Enzymes</h2>

      <h3>Salivary Amylase (Ptyalin)</h3>
      <p>
        లాలాజల గ్రంథులు ఈ enzyme ను ఉత్పత్తి చేస్తాయి. ఇది pH 6.5-7.0 వద్ద పిండి పదార్థాన్ని
        maltose గా మారుస్తుంది. ఆమ్ల జఠరంలో ఇది నిష్క్రియం అవుతుంది, కాబట్టి దీని పని నమిలే
        సమయానికే పరిమితం. బాగా నమిలి తింటే నోటిలోనే 30-40% పిండి పదార్థం జీర్ణం అవుతుంది.
      </p>

      <h3>Pancreatic Amylase</h3>
      <p>
        పిండి పదార్థాన్ని జీర్ణం చేసే ప్రధాన enzyme ఇది. duodenum లో pH 7-8 వద్ద పిండి
        పదార్థాన్ని maltose, maltotriose, మరియు alpha-limit dextrins గా పూర్తిగా విడగొడుతుంది.
      </p>

      <h3>Brush Border Enzymes</h3>
      <p>
        పేగు కణాల ఉపరితలంపై ఉండే maltase, sucrase, lactase, మరియు isomaltase — ఇవి
        disaccharides ను monosaccharides గా మారుస్తాయి. Lactase లోపం — భారతీయ వయోజనులలో
        60-80% మందిని ప్రభావితం చేస్తుంది — జీర్ణం కాని lactose ను బ్యాక్టీరియా పులియబెట్టడం
        వల్ల గ్యాస్, ఉబ్బరం, మరియు విరేచనాలు వస్తాయి.
      </p>

      <h2>Protein ను జీర్ణం చేసే Enzymes (Proteases)</h2>

      <h3>Pepsin</h3>
      <p>
        జఠరంలోని ప్రధాన protease ఇది. ఇది నిష్క్రియ pepsinogen రూపంలో స్రవించబడి, HCl ద్వారా
        సక్రియం అవుతుంది. pH 1.5-2.5 వద్ద పనిచేస్తూ, proteins ను పెద్ద peptide ముక్కలుగా
        విడగొడుతుంది.
      </p>

      <h3>Trypsin మరియు Chymotrypsin</h3>
      <p>
        ఇవి pancreas నుండి నిష్క్రియ zymogens రూపంలో స్రవించబడే proteases. Enterokinase
        trypsinogen ను trypsin గా సక్రియం చేస్తుంది, తర్వాత trypsin మిగతా pancreatic zymogens
        అన్నింటినీ ఒక శ్రేణిలో సక్రియం చేస్తుంది. ఇవి peptides ను మరింత చిన్న ముక్కలుగా మరియు
        వ్యక్తిగత amino acids గా విడగొడతాయి.
      </p>

      <h3>Peptidases</h3>
      <p>
        Carboxypeptidase (pancreas నుండి) మరియు aminopeptidase/dipeptidase (brush border నుండి)
        — ఇవి protein జీర్ణాన్ని పూర్తి చేస్తూ, స్వతంత్ర amino acids, dipeptides, మరియు
        tripeptides గా మారుస్తాయి, తద్వారా శోషణ జరుగుతుంది.
      </p>

      <h2>కొవ్వును జీర్ణం చేసే Enzymes</h2>

      <h3>Bile Salts</h3>
      <p>
        ఇవి enzymes కాదు, కానీ కొవ్వు జీర్ణానికి చాలా అవసరం. కాలేయం వీటిని ఉత్పత్తి చేస్తుంది,
        పిత్తాశయంలో నిల్వ చేయబడతాయి. Bile salts పెద్ద కొవ్వు బిందువులను ~1 micrometer ఉన్న
        చిన్న micelles గా emulsify చేస్తాయి, దీనివల్ల lipase పనిచేయడానికి ఉపరితల వైశాల్యం
        చాలా పెరుగుతుంది.
      </p>

      <h3>Pancreatic Lipase</h3>
      <p>
        కొవ్వును జీర్ణం చేసే ప్రధాన enzyme ఇది, colipase సహాయంతో పనిచేస్తుంది. Triglycerides ను
        2-monoglycerides మరియు free fatty acids గా విడగొడుతుంది. ఇది లేకపోతే, ఆహారంలోని కొవ్వు
        జీర్ణం కాకుండా అలాగే బయటికి వెళ్ళిపోతుంది (steatorrhea).
      </p>

      <EvidenceBlock
        title="Pancreas యొక్క Enzyme రిజర్వ్ సామర్థ్యం"
        finding="Pancreas రోజుకు ~300g carbohydrate, 600g protein, మరియు 250g కొవ్వును జీర్ణం చేయగలిగినంత enzymes ఉత్పత్తి చేస్తుంది — ఇది సాధారణ ఆహార తీసుకోవడం కంటే చాలా ఎక్కువ. 90% వరకు పనితీరు కోల్పోతే తప్ప జీర్ణ సమస్యలు రావు."
        study="Pancreatic exocrine function పై సమీక్ష"
        source="Whitcomb & Lowe (2007) Digestive Diseases and Sciences"
        details="ఈ అపారమైన రిజర్వ్ సామర్థ్యం వల్లనే పాక్షిక pancreatectomy లేదా తేలికపాటి pancreatitis వల్ల జీర్ణ సమస్యలు అరుదుగా వస్తాయి. తీవ్రమైన chronic pancreatitis లేదా cystic fibrosis ఉన్నప్పుడు మాత్రమే enzyme supplementation అవసరం అవుతుంది."
      />

      <h2>జఠర ఆమ్లం (HCl)</h2>
      <p>
        Parietal cells ద్వారా స్రవించబడే HCl (pH 1.5-3.5) pepsinogen ను సక్రియం చేస్తుంది,
        proteins ను denature చేస్తుంది, వ్యాధికారక క్రిములను చంపుతుంది, ఖనిజాల శోషణకు
        (iron, calcium) సహాయపడుతుంది, మరియు secretin విడుదల ద్వారా bile మరియు pancreatic
        స్రావాలను ప్రేరేపిస్తుంది.
      </p>

      <NoteBlock
        title="భారతీయ సుగంధ ద్రవ్యాలు జీర్ణ స్రావాలను పెంచుతాయి"
        content="అల్లం (adrak) జఠర కదలికలను ప్రోత్సహిస్తుంది. నల్ల మిరియాలు (kali mirch) HCl స్రావాన్ని పెంచుతాయి మరియు పసుపులోని curcumin జీవ లభ్యతను మెరుగుపరుస్తాయి. జీలకర్ర (jeera), సోంపు (saunf), మరియు ఇంగువ (hing) bile మరియు pancreatic ఉత్పత్తిని ఉత్తేజపరుస్తాయి. ఈ సంప్రదాయ పద్ధతులకు శాస్త్రీయ ఆధారం ఉంది."
      />

      <h2>హార్మోన్ల సమన్వయం</h2>
      <ul>
        <li><strong>Gastrin:</strong> ఆహారానికి ప్రతిస్పందనగా HCl మరియు pepsinogen స్రావాన్ని ప్రేరేపిస్తుంది.</li>
        <li><strong>Secretin:</strong> duodenum లోని ఆమ్లాన్ని తటస్థీకరించడానికి pancreatic bicarbonate ను ప్రేరేపిస్తుంది.</li>
        <li><strong>CCK:</strong> Bile విడుదల మరియు pancreatic enzyme స్రావాన్ని ప్రేరేపిస్తుంది; మెదడులో ఆకలి తృప్తి భావాన్ని కూడా కలిగిస్తుంది.</li>
        <li><strong>GIP:</strong> జఠరం ఖాళీ అయ్యే వేగాన్ని తగ్గిస్తుంది మరియు insulin విడుదలను ప్రేరేపిస్తుంది.</li>
      </ul>

      <ExampleBlock
        title="పెరుగు అన్నం జీర్ణానికి ఎందుకు సహాయపడుతుంది"
        description="పెరుగు (dahi) అన్నం ఒక సంప్రదాయ దక్షిణ భారతీయ జీర్ణ ఆహారం, దీనికి శాస్త్రీయ ఆధారం ఉంది. Lactic acid bacteria కొంత lactose ను ముందే జీర్ణం చేసి, సహాయకరమైన enzymes ను ఉత్పత్తి చేస్తాయి. పులియబెట్టే ప్రక్రియ casein protein ను పాక్షికంగా విడగొడుతుంది. చల్లని ఉష్ణోగ్రత మరియు తేలికపాటి ఆమ్లత్వం చికాకుపడిన కడుపుకు ఉపశమనం కలిగిస్తాయి. Rice తేలికగా జీర్ణమయ్యే పిండి పదార్థాన్ని అందిస్తుంది. కలిసి, వీటికి తక్కువ జీర్ణ శ్రమ అవసరం — భారీ భోజనం తర్వాత లేదా అనారోగ్యంలో ఇది చాలా అనుకూలం."
      />

      <h2>ముఖ్యమైన అంశాలు</h2>
      <ul>
        <li>జీర్ణ enzymes ప్రత్యేకమైనవి: amylases carbs కోసం, proteases protein కోసం, lipases కొవ్వు కోసం.</li>
        <li>Pancreas జీర్ణ వ్యవస్థకు శక్తి కేంద్రం — మూడు macronutrients కోసం enzymes ఉత్పత్తి చేస్తుంది.</li>
        <li>Bile salts emulsification ద్వారా కొవ్వు జీర్ణానికి అత్యవసరం.</li>
        <li>జఠర ఆమ్లం pepsin ను సక్రియం చేస్తుంది, వ్యాధికారకాలను చంపుతుంది, మరియు ఖనిజ శోషణకు సహాయపడుతుంది.</li>
        <li>సంప్రదాయ భారతీయ సుగంధ ద్రవ్యాలు నిజంగానే జీర్ణ enzyme కార్యకలాపాన్ని పెంచుతాయి.</li>
        <li>Lactase లోపం భారతీయ వయోజనులలో 60-80% మందిని ప్రభావితం చేస్తుంది.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
