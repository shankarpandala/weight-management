import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

const references = [
  { authors: 'Mullur R, Liu YY, Brent GA', year: 2014, title: 'Thyroid hormone regulation of metabolism', source: 'Physiological Reviews, 94(2), 355-382', type: 'review' },
  { authors: 'Biondi B, Wartofsky L', year: 2014, title: 'Treatment with thyroid hormone', source: 'Endocrine Reviews, 35(3), 433-512', type: 'review' },
  { authors: 'Unnikrishnan AG, Menon UV', year: 2011, title: 'Thyroid disorders in India: An epidemiological perspective', source: 'Indian Journal of Endocrinology and Metabolism, 15(Suppl 2), S78-S81', type: 'clinical' },
  { authors: 'Kim B', year: 2008, title: 'Thyroid hormone as a determinant of energy expenditure and the basal metabolic rate', source: 'Thyroid, 18(2), 141-144', type: 'review' },
  { authors: 'Zimmermann MB, Boelaert K', year: 2015, title: 'Iodine deficiency and thyroid disorders', source: 'Lancet Diabetes & Endocrinology, 3(4), 286-295', type: 'review' },
];

export default function ThyroidMetabolicRateTe() {
  return (
    <div className="prose-health">
      <h1>Thyroid & Metabolic Rate</h1>

      <p>
        Thyroid gland అనేది మీ మెడ దిగువన ఉన్న సీతాకోకచిలుక ఆకారంలో ఉన్న అవయవం, ఇది
        శరీరం యొక్క metabolic thermostat లాగా పనిచేస్తుంది. దీని hormones T3 మరియు T4 ద్వారా,
        మీ శరీరంలోని ప్రతి cell ఎంత వేగంగా energy ను బర్న్ చేస్తుందో అది నియంత్రిస్తుంది.
        Thyroid dysfunction — అంచనా ప్రకారం 42 మిలియన్ల భారతీయులను ప్రభావితం చేస్తోంది —
        metabolic rate ను గణనీయంగా మార్చగలదు, దీంతో weight management చాలా కష్టమవుతుంది.
      </p>

      <DefinitionBlock
        title="Thyroid Hormones"
        definition="T4 (thyroxine) మరియు T3 (triiodothyronine) అనేవి thyroid gland ద్వారా ఉత్పత్తి చేయబడే iodine-కలిగిన hormones. T4 ప్రధాన secretory product (90%); T3 అనేది biologically active form (4-5 రెట్లు ఎక్కువ potent). T4 peripheral tissues లో deiodinase enzymes ద్వారా T3 గా మార్చబడుతుంది."
        notation="HPT axis: Hypothalamus (TRH) → Pituitary (TSH) → Thyroid (T3/T4). TSH అనేది thyroid function కోసం అత్యంత సాధారణంగా test చేయబడే marker."
      />

      <h2>Thyroid Hormones Metabolism ను ఎలా నియంత్రిస్తాయి</h2>

      <p>
        T3 cells లోకి ప్రవేశించి nuclear thyroid receptors కు బంధిస్తుంది, వందలాది metabolic
        enzymes కోసం gene expression ను నేరుగా నియంత్రిస్తుంది. దీని ప్రభావాలు చాలా విస్తృతమైనవి:
      </p>

      <ul>
        <li><strong>Basal metabolic rate:</strong> T3 దాదాపు ప్రతి tissue లో oxygen consumption మరియు heat production ను పెంచుతుంది, ఇది BMR పై 15-40% ప్రభావం చూపుతుంది.</li>
        <li><strong>Carbohydrate metabolism:</strong> glucose absorption, glycolysis, మరియు gluconeogenesis ను మెరుగుపరుస్తుంది.</li>
        <li><strong>Fat metabolism:</strong> lipolysis (కొవ్వు విచ్ఛిన్నం) మరియు fatty acid oxidation ను పెంచుతుంది. T3 LDL receptor expression ను కూడా పెంచుతుంది, దీంతో రక్తంలో cholesterol తగ్గుతుంది.</li>
        <li><strong>Protein metabolism:</strong> సాధారణ స్థాయిలలో, protein synthesis ను ప్రోత్సహిస్తుంది; అధిక స్థాయిలలో, protein catabolism ను ప్రోత్సహిస్తుంది.</li>
        <li><strong>Thermogenesis:</strong> brown fat లో uncoupling proteins (UCP1) ను ఉత్తేజపరుస్తుంది మరియు mitochondrial activity ని పెంచుతుంది.</li>
      </ul>

      <EvidenceBlock
        title="Thyroid Hormone మరియు Energy Expenditure"
        finding="Thyroid hormones resting energy expenditure యొక్క ప్రధాన నిర్ణయాధికారి. Hypothyroidism BMR ను 15-40% తగ్గిస్తుంది, hyperthyroidism దానిని 15-50% పెంచుతుంది. Subclinical thyroid dysfunction కూడా metabolic rate లో కొలవగల మార్పులను ఉత్పత్తి చేస్తుంది."
        study="Energy metabolism పై thyroid hormone ప్రభావాల సమగ్ర review"
        source="Kim (2008) Thyroid"
        details="ఈ review thyroid disorders ఉన్న patients లో indirect calorimetry ఉపయోగించి అనేక studies ను విశ్లేషించింది. Hypothyroid patients లో oxygen consumption తగ్గడం, thermogenesis తగ్గడం, మరియు fat oxidation rates తగ్గడం కనిపించాయి. ముఖ్యంగా, hypothyroidism వల్ల బరువు పెరుగుదల సాధారణంగా తక్కువగా ఉంటుంది (2-5 kg), ఇది ఎక్కువగా fat accumulation కాకుండా fluid retention వల్ల, అయితే తగ్గిన metabolic rate కాలక్రమేణా మరింత బరువు పెరుగుదలను సులభతరం చేస్తుంది."
      />

      <h2>Hypothyroidism: నెమ్మదైన Metabolism</h2>

      <p>
        Hypothyroidism (underactive thyroid) hyperthyroidism కంటే చాలా ఎక్కువ సాధారణం, ఇది
        భారతీయ వయోజనులలో దాదాపు 10% మందిని ప్రభావితం చేస్తుంది — మహిళలు, వృద్ధులు, మరియు
        iodine-లోపం ఉన్న ప్రాంతాలలో ఎక్కువ rates ఉంటాయి. Iodine-సమృద్ధ ప్రాంతాలలో
        Hashimoto&apos;s thyroiditis (autoimmune) అత్యంత సాధారణ కారణం.
      </p>

      <h3>బరువుకు సంబంధించిన లక్షణాలు</h3>
      <ul>
        <li>బరువు పెరుగుదల (సాధారణంగా 2-5 kg, ఎక్కువగా water/mucopolysaccharides)</li>
        <li>అలసట మరియు బద్ధకం (exercise tolerance తగ్గడం)</li>
        <li>చలిని తట్టుకోలేకపోవడం (thermogenesis తగ్గడం)</li>
        <li>మలబద్ధకం (gut motility నెమ్మదించడం)</li>
        <li>పొడి చర్మం మరియు జుట్టు రాలడం</li>
        <li>Cholesterol పెరగడం (LDL clearance తగ్గడం)</li>
      </ul>

      <NoteBlock
        title="Hypothyroidism మరియు బరువు: వాస్తవం"
        content="Hypothyroidism metabolism ను నెమ్మదించినా, ఇది obesity కి ప్రధాన కారణం కాదు. చికిత్స చేయని hypothyroidism వల్ల బరువు పెరుగుదల సాధారణంగా 2-5 kg (ఎక్కువగా fluid), 20-30 kg కాదు. ఎవరైనా గణనీయంగా బరువు పెరిగితే, thyroid dysfunction ఒక contributing factor అయి ఉండవచ్చు కానీ ఏకైక కారణం అయ్యే అవకాశం తక్కువ. సరైన thyroid replacement (levothyroxine) metabolic rate ను సాధారణ స్థాయికి తీసుకువస్తుంది కానీ స్వయంచాలకంగా బరువు తగ్గదు — caloric balance ఇంకా వర్తిస్తుంది."
      />

      <h2>Hyperthyroidism: వేగవంతమైన Metabolism</h2>
      <p>
        Hyperthyroidism (overactive thyroid) metabolic rate ను పెంచుతుంది, ఆకలి పెరిగినా తరచుగా
        ఉద్దేశపూర్వక బరువు తగ్గుదలకు కారణమవుతుంది. Graves&apos; disease అత్యంత సాధారణ కారణం.
        లక్షణాలలో బరువు తగ్గడం, వేడిని తట్టుకోలేకపోవడం, వేగవంతమైన గుండె చప్పుడు, ఆందోళన,
        వణుకు, మరియు తరచుగా మలవిసర్జన ఉన్నాయి. కొంతమంది &quot;వేగవంతమైన metabolism&quot;
        కోరుకున్నా, hyperthyroidism అనేది heart arrhythmias మరియు bone loss కలిగించే
        తీవ్రమైన వ్యాధి.
      </p>

      <h2>Thyroid మరియు భారతీయ జనాభా</h2>

      <EvidenceBlock
        title="భారతదేశంలో Thyroid Disorders"
        finding="అంచనా ప్రకారం 42 మిలియన్ల భారతీయులకు thyroid disorders ఉన్నాయి, hyperthyroidism కంటే hypothyroidism చాలా ఎక్కువ సాధారణం. మహిళలలో prevalence ఎక్కువ (11% vs పురుషులలో 6.2%) మరియు వయసుతో పాటు పెరుగుతుంది. Salt iodization program ఉన్నప్పటికీ కొన్ని ప్రాంతాలలో iodine deficiency ఇంకా ఆందోళన కలిగిస్తోంది."
        study="భారతీయ రాష్ట్రాల్లో thyroid disorders యొక్క epidemiological survey"
        source="Unnikrishnan & Menon (2011) Indian Journal of Endocrinology and Metabolism"
        details="ఈ study గణనీయమైన geographic variation ను హైలైట్ చేసింది — తీరప్రాంత జనాభాలో seafood నుండి సహజ iodine తీసుకోవడం వల్ల తక్కువ rates ఉన్నాయి. Iodized salt ప్రవేశపెట్టడం iodine deficiency disorders ను నాటకీయంగా తగ్గించింది కానీ కొన్ని ప్రాంతాలలో autoimmune thyroiditis ను విరుద్ధంగా పెంచింది, బహుశా genetically susceptible వ్యక్తులలో immune responses ను trigger చేయడం వల్ల."
      />

      <ExampleBlock
        title="భారతీయ ఆహారం ద్వారా Thyroid ఆరోగ్యానికి తోడ్పాటు"
        description="Thyroid function కోసం ముఖ్యమైన nutrients: (1) Iodine — iodized salt వాడండి; non-vegetarian అయితే seafood చేర్చండి. ఒక teaspoon iodized salt దాదాపు 150mcg iodine అందిస్తుంది (రోజువారీ అవసరం). (2) Selenium — T4 నుండి T3 conversion కి చాలా అవసరం. మూలాలు: Brazil nuts, eggs, garlic, mushrooms. (3) Zinc — thyroid hormone synthesis కి అవసరం. మూలాలు: pumpkin seeds, chickpeas, cashews. (4) Thyroid function దెబ్బతిన్నప్పుడు అధిక goitrogens ను అవాయిడ్ చేయండి — raw cruciferous vegetables (cabbage, cauliflower) iodine uptake కు అడ్డుపడవచ్చు, కానీ వంట చేయడం goitrogens ను చాలావరకు निష్క్రియం చేస్తుంది."
      />

      <WarningBlock
        title="Thyroid ఎప్పుడు test చేయించుకోవాలి"
        content="వివరించలేని బరువు మార్పు, నిరంతర అలసట, చలి/వేడి తట్టుకోలేకపోవడం, menstrual irregularities, లేదా స్థిరమైన ప్రయత్నం ఉన్నా బరువు తగ్గడంలో ఇబ్బంది అనుభవిస్తే thyroid testing (TSH, free T4) కోసం డాక్టర్ ను సంప్రదించండి. Thyroid dysfunction ను సాధారణ blood test తో సులభంగా నిర్ధారించవచ్చు మరియు medication తో సమర్థవంతంగా చికిత్స చేయవచ్చు. Thyroid hormones లేదా iodine mega-doses ను మీరే supplement చేసుకోకండి."
      />

      <h2>ముఖ్యమైన అంశాలు</h2>
      <ul>
        <li>Thyroid hormones (T3/T4) ప్రతి cell లో metabolic rate ను నియంత్రిస్తాయి, BMR ను 15-50% ప్రభావితం చేస్తాయి.</li>
        <li>Hypothyroidism metabolism ను నెమ్మదిస్తుంది కానీ తక్కువ బరువు పెరుగుదలకు కారణమవుతుంది (2-5 kg, ఎక్కువగా fluid) — తీవ్రమైన obesity కాదు.</li>
        <li>అంచనా ప్రకారం 42 మిలియన్ల భారతీయులకు thyroid disorders ఉన్నాయి; వివరించలేని బరువు మార్పులకు screening సిఫార్సు చేయబడింది.</li>
        <li>Iodine, selenium, మరియు zinc thyroid function కోసం అవసరమైన nutrients.</li>
        <li>Thyroid hormone replacement metabolic rate ను సాధారణ స్థాయికి తీసుకువస్తుంది కానీ caloric balance అవసరాన్ని తొలగించదు.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
