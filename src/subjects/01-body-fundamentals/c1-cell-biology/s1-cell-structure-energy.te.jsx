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
    authors: 'Alberts B, Johnson A, Lewis J, Raff M, Roberts K, Walter P',
    year: 2002,
    title: 'Molecular Biology of the Cell',
    source: '4th edition, Garland Science, New York',
    type: 'foundational',
  },
  {
    authors: 'Rich PR',
    year: 2003,
    title: 'The molecular machinery of Keilin\'s respiratory chain',
    source: 'Biochemical Society Transactions, 31(6), 1095-1105',
    type: 'foundational',
  },
  {
    authors: 'Rolfe DF, Brown GC',
    year: 1997,
    title: 'Cellular energy utilization and molecular origin of standard metabolic rate in mammals',
    source: 'Physiological Reviews, 77(3), 731-758',
    type: 'review',
  },
  {
    authors: 'Mitchell P',
    year: 1961,
    title: 'Coupling of phosphorylation to electron and hydrogen transfer by a chemi-osmotic type of mechanism',
    source: 'Nature, 191(4784), 144-148',
    type: 'foundational',
  },
  {
    authors: 'Befroy DE, Petersen KF, Dufour S, Mason GF, de Graaf RA, Rothman DL, Shulman GI',
    year: 2007,
    title: 'Impaired mitochondrial substrate oxidation in muscle of insulin-resistant offspring of type 2 diabetic patients',
    source: 'Diabetes, 56(5), 1376-1381',
    type: 'clinical',
  },
  {
    authors: 'Misra A, Khurana L',
    year: 2008,
    title: 'Obesity and the metabolic syndrome in developing countries',
    source: 'Journal of Clinical Endocrinology & Metabolism, 93(11 Suppl 1), S9-S30',
    type: 'review',
  },
  {
    authors: 'Spinelli JB, Haigis MC',
    year: 2018,
    title: 'The multifaceted contributions of mitochondria to cellular metabolism',
    source: 'Nature Cell Biology, 20(7), 745-754',
    type: 'review',
  },
];

export default function CellStructureAndEnergyTe() {
  return (
    <div className="prose-health">
      <h1>Cell నిర్మాణం & Energy వ్యవస్థలు</h1>

      <p>
        బరువు నిర్వహణలో ప్రతి ప్రక్రియ — ఉదయపు నడకలో కొవ్వు కాల్చడం నుండి అన్నం-dal భోజనం
        తర్వాత energy నిల్వ చేయడం వరకు — చివరికి individual cells స్థాయిలో జరుగుతుంది. Cells
        ఎలా energy ఉత్పత్తి చేస్తాయో, నిల్వ చేస్తాయో, మరియు వినియోగిస్తాయో అర్థం చేసుకోవడం
        metabolism, శరీర నిర్మాణం, మరియు బరువు పెరుగుదల-తగ్గుదల వెనుక ఉన్న biological mechanisms
        అర్థం చేసుకోవడానికి పునాది అందిస్తుంది.
      </p>

      <DefinitionBlock
        title="Cellular Metabolism"
        definition="జీవించి ఉన్న cell లో జీవితాన్ని కొనసాగించడానికి జరిగే అన్ని chemical reactions సమూహం. ఈ reactions metabolic pathways గా వ్యవస్థీకృతం అవుతాయి, వీటిలో ఒక chemical enzyme-catalyzed దశల ద్వారా మరొకదానిగా మారుతుంది, చివరికి ఆహారం నుండి nutrients ను ఉపయోగపడే energy మరియు cellular building blocks గా మారుస్తుంది."
        notation="Cellular energy ను ATP (adenosine triphosphate) units లో కొలుస్తారు. సగటు మానవ శరీరం రోజుకు సుమారు 40-70 kg ATP turnover చేస్తుంది, ఇది శరీర బరువుకు సుమారుగా సమానం."
      />

      <h2>మానవ Cell యొక్క ప్రాథమిక నిర్మాణం</h2>

      <p>
        మానవ cells, వాటి సూక్ష్మ పరిమాణం (సాధారణంగా 10-30 micrometers వ్యాసం) ఉన్నప్పటికీ,
        అసాధారణంగా సంక్లిష్టమైన నిర్మాణాలు. ప్రతి cell లో organelles అనే ప్రత్యేక విభాగాలు
        ఉంటాయి, ప్రతి దానికి overall cellular metabolism మరియు energy balance కి దోహదపడే
        విభిన్న విధులు ఉంటాయి.
      </p>

      <h3>Cell Membrane</h3>
      <p>
        Cell membrane ప్రతి cell యొక్క సరిహద్దుగా ఏర్పడే phospholipid bilayer. ఇది selectively
        permeable, glucose, amino acids, మరియు fatty acids వంటి nutrients cell లోకి ప్రవేశించడాన్ని,
        మరియు carbon dioxide వంటి waste products బయటికి వెళ్ళడాన్ని నియంత్రిస్తుంది. ఈ membrane లో
        embed అయిన sodium-potassium pump ఒక్కటే basal metabolic rate లో 20-40% వాటా కలిగి ఉంటుంది
        — nerve signaling, muscle contraction, మరియు nutrient transport కి అవసరమైన ion gradients
        నిలబెట్టడానికి ఇది ఒక అద్భుతమైన energy వ్యయం.
      </p>

      <h3>Cytoplasm</h3>
      <p>
        Cytoplasm అనేది cell లోపల నిండి ఉన్న gel-లాంటి ద్రవం, ఇక్కడ చాలా metabolic reactions
        జరుగుతాయి. Glycolysis — glucose ను pyruvate గా initial breakdown చేయడం — పూర్తిగా
        cytoplasm లో జరుగుతుంది. chapati, అన్నం, లేదా పండ్లలో ఉన్న carbohydrates నుండి energy
        తీయడంలో ఇది మొదటి దశ.
      </p>

      <h3>Nucleus</h3>
      <p>
        Nucleus లో DNA ఉంటుంది, ఇది metabolism కి అవసరమైన అన్ని enzymes ను encode చేసే genetic
        blueprint. Nucleus లో gene expression ఏ metabolic enzymes ఉత్పత్తి అవుతాయో నిర్ణయిస్తుంది,
        ఒక cell glucose ని కాల్చడానికి ప్రాధాన్యత ఇస్తుందా లేదా fat ని కాల్చడానికి ప్రాధాన్యత
        ఇస్తుందా, మరియు ఎంత సమర్థవంతంగా energy ఉత్పత్తి చేస్తుందో ప్రభావితం చేస్తుంది. Metabolic
        enzyme genes లో genetic variations వ్యక్తుల మధ్య metabolic rate తేడాలకు దోహదపడతాయి.
      </p>

      <h2>Mitochondria: Cell యొక్క Powerhouses</h2>

      <p>
        Mitochondria రెండు membranes ఉన్న organelles, ఇవి cell కి అవసరమైన ATP లో సుమారు 90%
        ఉత్పత్తి చేస్తాయి. ఒక సాధారణ మానవ cell లో 1,000 నుండి 2,500 mitochondria ఉంటాయి, అయితే
        ఇది tissue రకం ప్రకారం చాలా మారుతుంది. Heart muscle cells లో 5,000 లేదా అంతకంటే ఎక్కువ
        mitochondria ఉండవచ్చు, వాటి అధిక energy అవసరాలను ప్రతిబింబిస్తూ, అయితే red blood cells లో
        ఏమీ ఉండవు.
      </p>

      <h3>Mitochondrial నిర్మాణం</h3>
      <p>
        Mitochondrion కి రెండు membranes ఉంటాయి. Outer membrane చిన్న molecules కి freely permeable.
        Inner membrane cristae అనే నిర్మాణాలుగా అధికంగా folded అయి ఉంటుంది, ఇది దాని surface area ను
        నాటకీయంగా పెంచుతుంది. ఈ inner membrane లో electron transport chain ఉంటుంది — ATP ఉత్పత్తిలో
        అత్యధిక భాగానికి బాధ్యత వహించే molecular machinery. రెండు membranes మధ్య ఉన్న space
        (intermembrane space) మరియు లోపలి భాగం (matrix) energy ఉత్పత్తిలో ప్రతి ఒక్కటి విభిన్న
        పాత్రలు పోషిస్తాయి.
      </p>

      <EvidenceBlock
        title="Mitochondrial Dysfunction మరియు Metabolic Disease"
        finding="Type 2 diabetic తల్లిదండ్రుల సంతానంలో skeletal muscle లో mitochondrial oxidative phosphorylation activity లో 30% తగ్గుదల కనిపించింది, వారు diabetes develop చేయడానికి ముందే, ఇది impaired mitochondrial function metabolic disease కి early predisposing factor కావచ్చని సూచిస్తుంది."
        study="Insulin-resistant సంతానంలో magnetic resonance spectroscopy ఉపయోగించి mitochondrial function అంచనా"
        source="Befroy et al. (2007) Diabetes"
        details="31P మరియు 13C magnetic resonance spectroscopy ఉపయోగించి, పరిశోధకులు type 2 diabetic patients యొక్క lean, insulin-resistant సంతానం మరియు matched controls లో mitochondrial substrate oxidation rates ను కొలిచారు. Insulin-resistant group లో mitochondrial ATP synthesis మరియు substrate oxidation rates గణనీయంగా తక్కువగా ఉన్నాయి. ఈ ఫలితం South Asian populations కి ప్రత్యేకంగా సంబంధితం, వారికి Western populations కంటే తక్కువ BMI thresholds వద్ద insulin resistance మరియు type 2 diabetes rates ఎక్కువగా ఉంటాయి."
      />

      <h3>Mitochondrial DNA</h3>
      <p>
        Organelles లో ప్రత్యేకంగా, mitochondria వాటి స్వంత DNA (mtDNA) ను కలిగి ఉంటాయి, ఇది
        సుమారు 1.5-2 billion సంవత్సరాల క్రితం ancestral cells చేత absorb చేయబడిన స్వతంత్ర bacteria
        గా వాటి evolutionary మూలం యొక్క అవశేషం. Mitochondrial DNA ప్రత్యేకంగా తల్లి నుండి
        వారసత్వంగా వస్తుంది మరియు electron transport chain యొక్క 13 essential proteins ను encode
        చేస్తుంది. mtDNA లో mutations energy ఉత్పత్తిని దెబ్బతీయగలవు మరియు mitochondrial diseases,
        వయస్సు-సంబంధిత metabolic decline, మరియు కొన్ని రకాల obesity తో సంబంధం కలిగి ఉంటాయి.
      </p>

      <h2>ATP: సార్వత్రిక Energy Currency</h2>

      <DefinitionBlock
        title="Adenosine Triphosphate (ATP)"
        definition="Adenine, ribose, మరియు మూడు phosphate groups తో కూడిన nucleotide. రెండవ మరియు మూడవ phosphate groups మధ్య ఉన్న bond ఒక high-energy bond, ఇది hydrolyzed (నీటి ద్వారా విడగొట్టబడినప్పుడు) అయినప్పుడు సుమారు 7.3 kcal/mol free energy విడుదల చేస్తుంది, ఇది muscle contraction, active transport, మరియు biosynthesis తో సహా cellular work ను నడపడానికి ఉపయోగపడుతుంది."
        notation="ATP + H2O -> ADP + Pi + Energy (7.3 kcal/mol). Reverse reaction (ADP + Pi -> ATP) కి energy input అవసరం, ఇది nutrients oxidation ద్వారా అందించబడుతుంది."
      />

      <p>
        ATP సార్వత్రిక energy intermediary గా పనిచేస్తుంది. నువ్వు తినే ఆహారంలో ఉన్న energy —
        ఒక గిన్నెడు అన్నంలో carbohydrates నుండి అయినా, paneer లో protein నుండి అయినా, లేదా
        ghee లో fat నుండి అయినా — cells నేరుగా ఉపయోగించవు. బదులుగా, ఈ macronutrients నుండి
        energy capture చేయబడి ATP molecules లో నిల్వ చేయబడుతుంది, ఇవి ఆ energy ని ఎక్కడ మరియు
        ఎప్పుడు అవసరమో అక్కడ ఖచ్చితంగా అందిస్తాయి.
      </p>

      <h3>ATP Turnover</h3>
      <p>
        మానవ శరీరంలో ఏ సమయంలోనైనా కేవలం 50 grams ATP మాత్రమే ఉంటుంది — కొన్ని సెకన్ల పాటు
        జీవితాన్ని నిలబెట్టడానికి సరిపోతుంది. అయితే, ATP నిరంతరం recycle అవుతుంది. ప్రతి ATP
        molecule రోజుకు సుమారు 500-700 సార్లు ఉపయోగించబడి regenerate అవుతుంది. మొత్తం రోజువారీ
        ATP turnover సుమారు 40-70 kg, ఇది శరీర బరువుకు సుమారుగా సమానం. తీవ్రమైన exercise సమయంలో,
        active muscles లో ATP turnover 100 రెట్లు పెరగవచ్చు.
      </p>

      <ComparisonTable
        title="వివిధ Macronutrients నుండి ATP Yield"
        headers={['Macronutrient', 'ప్రతి gram కి Energy', 'ప్రతి gram కి సుమారు ATP yield', 'ముఖ్యమైన ఆహార వనరులు (Indian diet)']}
        rows={[
          ['Carbohydrate', '4 kcal', '~38 ATP molecules per glucose (180 g/mol)', 'అన్నం, chapati, idli, dosa, బంగాళాదుంపలు'],
          ['Fat', '9 kcal', '~106 ATP molecules per palmitate (256 g/mol)', 'Ghee, coconut oil, mustard oil, వేరుశెనగలు'],
          ['Protein', '4 kcal', '~30-36 ATP molecules (amino acid ప్రకారం మారుతుంది)', 'Dal, paneer, chicken, fish, eggs'],
        ]}
      />

      <h2>Cells ATP ఎలా ఉత్పత్తి చేస్తాయి</h2>

      <p>
        Cells మూడు ప్రధాన pathways ద్వారా ATP ఉత్పత్తి చేస్తాయి, ఇవి cell యొక్క energy
        అవసరాలు మరియు oxygen అందుబాటు ప్రకారం వరుసగా మరియు సమాంతరంగా పనిచేస్తాయి.
      </p>

      <h3>1. Glycolysis (Cytoplasm)</h3>
      <p>
        Glucose breakdown యొక్క మొదటి దశ cytoplasm లో జరుగుతుంది మరియు oxygen అవసరం లేదు.
        ఒక glucose molecule రెండు pyruvate molecules గా విడగొట్టబడుతుంది, 2 ATP మరియు 2 NADH
        net gain ఇస్తుంది. ఈ yield తక్కువగా ఉన్నా, glycolysis చాలా వేగంగా జరుగుతుంది మరియు
        తీవ్రమైన activity యొక్క మొదటి సెకన్లలో వేగవంతమైన energy అందిస్తుంది, ఉదాహరణకు bus
        పట్టుకోవడానికి పరుగెత్తేటప్పుడు.
      </p>

      <h3>2. Krebs Cycle (Mitochondrial Matrix)</h3>
      <p>
        Glycolysis నుండి pyruvate mitochondria లోకి ప్రవేశిస్తుంది మరియు acetyl-CoA గా మారుతుంది,
        ఇది తర్వాత Krebs cycle (citric acid cycle లేదా TCA cycle అని కూడా అంటారు) లోకి
        ప్రవేశిస్తుంది. Cycle యొక్క ప్రతి rotation 1 ATP, 3 NADH, మరియు 1 FADH2 ఉత్పత్తి
        చేస్తుంది. NADH మరియు FADH2 electron carriers, ఇవి high-energy electrons ను electron
        transport chain కి రవాణా చేస్తాయి.
      </p>

      <h3>3. Oxidative Phosphorylation (Inner Mitochondrial Membrane)</h3>
      <p>
        ATP లో అత్యధిక భాగం ఇక్కడ ఉత్పత్తి అవుతుంది. Electron transport chain NADH మరియు FADH2
        నుండి electrons ను ఉపయోగించి inner mitochondrial membrane అంతటా protons ను pump చేస్తుంది,
        ఒక electrochemical gradient సృష్టిస్తుంది. Protons ATP synthase ద్వారా తిరిగి ప్రవహిస్తాయి
        — ఒక అద్భుతమైన molecular turbine — ADP మరియు inorganic phosphate నుండి ATP synthesis ను
        నడిపిస్తుంది. ఈ ప్రక్రియ ఒక glucose molecule కి ఉత్పత్తి అయ్యే మొత్తం 38 ATP molecules లో
        సుమారు 34 ఉత్పత్తి చేస్తుంది.
      </p>

      <EvidenceBlock
        title="Cellular Energy వినియోగం"
        finding="Mammals లో, సుమారు 90% oxygen consumption mitochondrial, మరియు సుమారు 80% mitochondrial oxygen consumption ATP synthesis తో coupled అయి ఉంటుంది. మిగిలిన 20% inner mitochondrial membrane అంతటా proton leak వల్ల ఏర్పడుతుంది, ఇది heat generation కి దోహదపడుతుంది."
        study="Cellular energy utilization మరియు standard metabolic rate యొక్క సమగ్ర సమీక్ష"
        source="Rolfe & Brown (1997) Physiological Reviews"
        details="ఈ ప్రముఖ సమీక్ష mammalian cells లో ప్రధాన ATP-consuming ప్రక్రియలను quantify చేసింది. Sodium-potassium ATPase (ion gradients నిర్వహణ) మొత్తం ATP లో 19-28% వినియోగిస్తుంది, protein synthesis 20-30% ఉపయోగిస్తుంది, calcium cycling 4-8% ఉపయోగిస్తుంది, gluconeogenesis 7-10% ఉపయోగిస్తుంది, మరియు actinomyosin ATPase (muscle tone) 2-8% ఉపయోగిస్తుంది. మిగిలిన ATP DNA repair, signal transduction, మరియు ఇతర housekeeping functions కి సహాయపడుతుంది. ఈ proportions activity level, disease states, మరియు nutritional status తో నాటకీయంగా మారుతాయి."
      />

      <NoteBlock
        title="Fat Carbohydrate కంటే ఎక్కువ Energy ఎందుకు ఇస్తుంది">
        Fat ప్రతి gram కి రెండు రెట్లు కంటే ఎక్కువ energy కలిగి ఉంటుంది (9 kcal vs 4 kcal) ఎందుకంటే fatty acids carbohydrates కంటే chemically more reduced (oxygen atoms కంటే hydrogen atoms ఎక్కువగా ఉంటాయి). అంటే fatty acids electron transport chain కి ఎక్కువ electrons donate చేయగలవు, ఎక్కువ ATP ఉత్పత్తిని నడిపిస్తాయి. Palmitic acid (ghee మరియు palm oil లో సమృద్ధిగా ఉన్న 16-carbon saturated fat) యొక్క ఒక molecule సుమారు 106 ATP molecules ఇస్తుంది, ఒక glucose molecule నుండి 38 ATP తో పోలిస్తే. శరీరం అదనపు energy ని fat గా నిల్వ చేయడానికి ప్రాధాన్యత ఇవ్వడానికి ఇదే కారణం — ఇది చాలా space-efficient energy reserve.
      </NoteBlock>

      <h2>శరీరంలో Energy నిల్వ</h2>

      <p>
        శరీరం energy reserves ను మూడు ప్రాథమిక రూపాల్లో నిర్వహిస్తుంది, ప్రతి ఒక్కటి క్షణ-క్షణ
        మరియు దీర్ఘకాలిక energy అవసరాలను తీర్చడంలో వివిధ పాత్రలు పోషిస్తుంది.
      </p>

      <h3>ATP మరియు Creatine Phosphate (తక్షణ)</h3>
      <p>
        తక్షణ energy reserves — కండరాలలో నిల్వ చేసిన ATP మరియు creatine phosphate — గరిష్ఠ
        ప్రయత్నంలో సుమారు 8-10 సెకన్ల energy అందిస్తాయి. ఈ reserves విశ్రాంతి సమయంలో వేగంగా
        replenish అవుతాయి.
      </p>

      <h3>Glycogen (స్వల్పకాలిక)</h3>
      <p>
        Glycogen, glucose యొక్క branched polymer, ప్రధానంగా liver (సుమారు 100 grams) మరియు
        skeletal muscle (సుమారు 400 grams) లో నిల్వ చేయబడుతుంది. మొత్తం glycogen stores సుమారు
        2,000 kcal energy అందిస్తాయి — సుమారు ఒక రోజు basal metabolic activity లేదా 90-120
        నిమిషాల moderate-intensity exercise కి సరిపోతుంది. Carbohydrate అధికంగా ఉన్న Indian భోజనం
        తర్వాత, insulin glycogen synthesis ని ప్రేరేపించి ఈ stores ని replenish చేస్తుంది.
      </p>

      <h3>Adipose Tissue (దీర్ఘకాలిక)</h3>
      <p>
        Adipose tissue లో నిల్వ చేసిన fat శరీరం యొక్క అతిపెద్ద energy reserve. 15-20% body fat
        ఉన్న సగటు 70 kg వయోజనుడు సుమారు 10-14 kg fat కలిగి ఉంటారు, ఇది సుమారు 90,000-126,000 kcal
        నిల్వ energy — ఆహారం లేకుండా 40-60 రోజులు జీవితాన్ని నిలబెట్టడానికి సైద్ధాంతికంగా సరిపోతుంది.
        Body fat ప్రాథమికంగా ఒక cellular energy storage system అని అర్థం చేసుకోవడం బరువు నిర్వహణను
        పూర్తిగా aesthetic terms లో కాకుండా biological terms లో reframe చేయడానికి సహాయపడుతుంది.
      </p>

      <ExampleBlock
        title="Indian Diet Context లో Cellular Energy"
        problem="నువ్వు 2 idlis sambar తో ఒక సాధారణ South Indian breakfast తిన్నప్పుడు, rice మరియు urad dal starch glucose గా విడగొట్టబడుతుంది, ఇది నీ cells లోకి ప్రవేశించి cytoplasm లో glycolysis, తర్వాత mitochondria లో Krebs cycle మరియు oxidative phosphorylation కి గురవుతుంది. ఈ భోజనం నుండి సుమారు 250 kcal చివరికి వేల ATP molecules ఉత్పత్తి చేస్తుంది, ఇవి నీ ఉదయపు కార్యకలాపాలకు energy ఇస్తాయి. Coconut chutney medium-chain fatty acids అందిస్తుంది, ఇవి వేగంగా absorb అయి నేరుగా liver mitochondria కి beta-oxidation కోసం రవాణా అవుతాయి — glucose oxidation కంటే ఎక్కువ efficient ATP-producing pathway. భోజనం తక్షణంగా అవసరం కంటే ఎక్కువ energy అందిస్తే, అదనపు energy glycogen లేదా fat గా మారుతుంది."
      />

      <WarningBlock
        title="Mitochondrial ఆరోగ్యం మరియు Metabolic Disease">
        Impaired mitochondrial function metabolic syndrome, type 2 diabetes, మరియు obesity కి contributing factor గా ఎక్కువగా గుర్తించబడుతోంది. South Asian populations skeletal muscle లో mitochondrial dysfunction కి ప్రత్యేకంగా susceptible గా కనిపిస్తారు, ఇది European populations తో పోలిస్తే తక్కువ BMI levels వద్ద insulin resistance rates ఎక్కువగా ఉండటానికి పాక్షికంగా కారణం కావచ్చు. Mitochondrial ఆరోగ్యానికి సహాయపడే lifestyle factors లో regular aerobic exercise (mitochondrial biogenesis ని ప్రేరేపిస్తుంది), తగినంత నిద్ర, మరియు antioxidants మరియు B-vitamins అధికంగా ఉన్న ఆహారం — ఆకుకూరలు, పప్పులు, మరియు పసుపు వంటి సాంప్రదాయ Indian ఆహారాల్లో సమృద్ధిగా ఉన్న nutrients — ఉన్నాయి.
      </WarningBlock>

      <h2>ముఖ్యమైన విషయాలు</h2>

      <ul>
        <li>
          Cells అన్ని metabolic ప్రక్రియలు — energy ఉత్పత్తి, నిల్వ, మరియు వినియోగం —
          జరిగే ప్రాథమిక యూనిట్లు.
        </li>
        <li>
          Mitochondria oxidative phosphorylation ద్వారా cellular ATP లో సుమారు 90% ఉత్పత్తి
          చేస్తాయి, metabolic rate కి అవి కేంద్రం.
        </li>
        <li>
          ATP సార్వత్రిక energy currency; శరీరం ప్రతి రోజు దాని స్వంత బరువులో ATP ని recycle
          చేస్తుంది.
        </li>
        <li>
          Fat ప్రతి gram కి carbohydrate కంటే ఎక్కువ ATP ఇస్తుంది, అందుకే శరీరం అదనపు energy ని
          adipose tissue గా నిల్వ చేయడానికి ప్రాధాన్యత ఇస్తుంది.
        </li>
        <li>
          Mitochondrial ఆరోగ్యం metabolic function కి చాలా ముఖ్యం, మరియు dysfunction insulin
          resistance మరియు obesity తో ముడిపడి ఉంది — South Asian populations కి ప్రత్యేకంగా
          సంబంధితం.
        </li>
        <li>
          Regular exercise, తగినంత పోషణ, మరియు ఆరోగ్యకరమైన నిద్ర mitochondrial function
          మరియు overall cellular energy efficiency కి సహాయపడతాయి.
        </li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
