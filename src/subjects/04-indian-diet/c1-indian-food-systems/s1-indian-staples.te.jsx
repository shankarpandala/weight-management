import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import NutritionFactBlock from '../../../components/content/NutritionFactBlock.jsx';
import ComparisonTable from '../../../components/content/ComparisonTable.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

export default function IndianStaplesTe() {
  return (
    <div className="prose-health">
      <h1>భారతీయ ప్రధాన ఆహారాల పోషక విశ్లేషణ</h1>

      <p>
        భారతదేశం యొక్క ఆహార నిర్మాణం ధాన్యాలు, పప్పులు మరియు వంట నీలు (cooking fats) ఆధారంగా నిర్మితమైనది, ఈ ఆహారాలు సహస్రాబ్దాలుగా భారతదేశం యొక్క భారీ జనాభాసను సమర్థించాయి. ఈ ప్రధాన ఆహారాల యొక్క ఖచ్చితమైన పోషక సంరచనను అర్థం చేసుకోవడం అనేది కేవలం కేలోరీ సంఖ్యా కంటే చాలా ఎక్కువ విషయం - ఇది బరువు నిర్వహణ మరియు ఆరోగ్య నిర్ణయాలకు ఆధారమైన సూచన.
      </p>

      <DefinitionBlock
        term="Indian Food Composition Tables (IFCT)"
        definition="IFCT 2017 అనేది ICMR ఆధ్వర్యములో నేషనల్ ఇన్‌స్టిట్యూట్ ఆఫ్ న్యూట్రిషన్ (NIN) హైదరాబాద్ చేత ప్రకాశితమైన సర్వకాలిక సమ్మిళిత భారతీయ ఆహారాల పోషక సూచన గ్రంథం. ఇది 528 ఆహారాలను కవర్ చేస్తుంది మరియు 151 పోషక పారామితులపై డేటాను అందిస్తుంది."
      />

      {/* ============ RICE ============ */}
      <h2>భారతదేశం యొక్క ప్రధాన ధాన్యం: ఎర్రసు (Rice)</h2>

      <p>
        ఎర్రసు భారతదేశం యొక్క 65% కంటే ఎక్కువ జనాభా కోసం ప్రధాన ఆహారం, ముఖ్యంగా దక్షిణ, తూర్పు మరియు ఈశాన్య రాష్ట్రాలలో. భారతదేశం ప్రపంచంలో రెండవ పెద్ద ఎర్రసు ఉత్పాదకం. అయితే, సేవించిన ఎర్రసు రకం దాని పోషక ప్రభావాన్ని గణనీయంగా మార్చుతుంది.
      </p>

      <NutritionFactBlock
        title="తెల్లటి ఎర్రసు (Polished Rice) — 100 గ్రాము"
        servingSize="100g raw"
        calories={356}
        protein={6.8}
        carbs={78.2}
        fat={0.5}
        fiber={0.2}
        extras={[
          { label: 'Glycemic Index', value: '70-73 (అధికం)' },
          { label: 'Iron', value: '0.7 mg' },
          { label: 'Thiamine (B1)', value: '0.06 mg' },
          { label: 'Zinc', value: '1.2 mg' },
        ]}
      />

      <NutritionFactBlock
        title="నిండా ఎర్రసు (Brown Rice) — 100 గ్రాము"
        servingSize="100g raw"
        calories={362}
        protein={7.9}
        carbs={76.0}
        fat={2.7}
        fiber={3.5}
        extras={[
          { label: 'Glycemic Index', value: '50-55 (తక్కువ-మధ్యమ)' },
          { label: 'Iron', value: '1.5 mg' },
          { label: 'Thiamine (B1)', value: '0.34 mg' },
          { label: 'Magnesium', value: '143 mg' },
          { label: 'Zinc', value: '2.0 mg' },
        ]}
      />

      <NutritionFactBlock
        title="ఉడికిన ఎర్రసు (Parboiled Rice) — 100 గ్రాము"
        servingSize="100g raw"
        calories={358}
        protein={7.4}
        carbs={77.4}
        fat={1.0}
        fiber={1.4}
        extras={[
          { label: 'Glycemic Index', value: '55-65 (మధ్యమ)' },
          { label: 'Iron', value: '1.2 mg' },
          { label: 'Thiamine (B1)', value: '0.21 mg' },
          { label: 'Resistant Starch', value: 'తెల్లటి ఎర్రసు కంటే ఎక్కువ' },
        ]}
      />

      <EvidenceBlock
        level="strong"
        title="ఉడికిన ఎర్రసు పోషక పదార్థ నిలుపుదలని మెరుగుపరుస్తుంది"
      >
        ఉడికిన ఎర్రసులో నీటিలో కరిగే B విటమిన్‌లు (విశేషంగా థియామిన్) తెల్లటి ఎర్రసు కంటే 2-3 రెట్లు ఎక్కువ నిలిచిపోతాయి. అదనంగా, ఉడికిన ఎర్రసు రెసిస్టెంట్ స్టార్చ్ కలిగి ఉంటుంది, ఇది సాధారణ ఎర్రసు కంటే glycemic index ను 10-15 పాయింట్‌ల నుండి తగ్గిస్తుంది.
      </EvidenceBlock>

      {/* ============ WHEAT ============ */}
      <h2>ఉత్తర భారతదేశం యొక్క ప్రధాన ఆహారం: గోధుమ</h2>

      <p>
        గోధుమ ఉత్తర, మధ్య మరియు పశ్చిమ భారతదేశం యొక్క ఆహారం. ఇది ప్రాధానికంగా రోటీ/చపాతీ రూపంలో సేవించబడుతుంది. ప్రాసెసింగ్ స్థాయి - సమ్పూర్ణ గోధుమ అట్ట నుండి సమరూప మైదా వరకు - పోషక విలువను నాటకీయంగా ప్రభావితం చేస్తుంది.
      </p>

      <NutritionFactBlock
        title="సమ్పూర్ణ గోధుమ కూర అట్ట (Whole Wheat Flour) — 100 గ్రాము"
        servingSize="100g"
        calories={341}
        protein={12.1}
        carbs={71.2}
        fat={1.7}
        fiber={11.2}
        extras={[
          { label: 'Glycemic Index', value: '55-65 (మధ్యమ)' },
          { label: 'Iron', value: '4.9 mg' },
          { label: 'Folate', value: '36.6 mcg' },
          { label: 'Zinc', value: '2.7 mg' },
        ]}
      />

      <NutritionFactBlock
        title="సమరూప గోధుమ కూర (Refined Wheat Flour - Maida) — 100 గ్రాము"
        servingSize="100g"
        calories={348}
        protein={11.0}
        carbs={73.9}
        fat={0.9}
        fiber={2.7}
        extras={[
          { label: 'Glycemic Index', value: '70-75 (అధికం)' },
          { label: 'Iron', value: '2.7 mg' },
          { label: 'Folate', value: '20.3 mcg' },
        ]}
      />

      <WarningBlock title="మైదా: పోషక విలువ క్షీణత">
        గోధుమను మైదాలో ప్రక్రియ చేయడం సంపూర్ణ గోధుమ కూర నుండి 75% వరకు ఫైబర్, 60% ఇనుము మరియు 80% B విటమిన్‌లను తీసివేస్తుంది. నాన్, పరాతా, బిస్కెట్‌లు, పేస్ట్రీలు మరియు తెల్లటి రొట్టెలు - ఇవన్నీ మైదా నుండి తయారవుతాయి మరియు పోషకంగా నీచమైనవి, రక్త చక్కెర స్పైక్‌లను కూడా సృష్టిస్తాయి. ప్రతిదిన రోటీ కోసం ఎల్లప్పుడూ సమ్పూర్ణ గోధుమ కూరను ఉపయోగించండి.
      </WarningBlock>

      {/* ============ MILLETS ============ */}
      <h2>పూర్వీకుల ధాన్యాలు: నువ్వుల పోషక శక్తి</h2>

      <p>
        ఈ సాధారణ నువ్వులు భారతదేశం యొక్క అసలైన ఆహారాలు. సమ్మిట్ 2023లో ఐక్యరాష్ట్రసంఘం నువ్వుల సంవత్సరాన్ని ఘోషించింది. ఇవి సాధారణ ధాన్యాలకన్నా ఎక్కువ పోషక పదార్థాలను కలిగి ఉంటాయి, తక్కువ నీటిని కోరతాయి మరియు జలవాయు సందర్భానికి తగిన పంటలు.
      </p>

      <NutritionFactBlock
        title="వేలిముర (Finger Millet - Ragi) — 100 గ్రాము"
        servingSize="100g"
        calories={328}
        protein={7.3}
        carbs={72.0}
        fat={1.3}
        fiber={11.5}
        extras={[
          { label: 'Calcium', value: '344 mg (ధాన్యాలలో అత్యధికం)' },
          { label: 'Iron', value: '3.9 mg' },
          { label: 'Glycemic Index', value: '54-68 (మధ్యమ)' },
        ]}
      />

      <NutritionFactBlock
        title="జావారం (Sorghum - Jowar) — 100 గ్రాము"
        servingSize="100g"
        calories={349}
        protein={10.4}
        carbs={72.6}
        fat={1.9}
        fiber={10.7}
        extras={[
          { label: 'Iron', value: '4.1 mg' },
          { label: 'Zinc', value: '1.6 mg' },
          { label: 'Glycemic Index', value: '50-62 (తక్కువ-మధ్యమ)' },
          { label: 'Phenolic Compounds', value: 'ఎక్కువ (ఆక్సిడేటివ్ విరోధం)' },
        ]}
      />

      <NutritionFactBlock
        title="బజ్ర (Pearl Millet) — 100 గ్రాము"
        servingSize="100g"
        calories={361}
        protein={11.6}
        carbs={67.5}
        fat={5.0}
        fiber={11.3}
        extras={[
          { label: 'Iron', value: '8.0 mg (నువ్వుల మధ్య అత్యధికం)' },
          { label: 'Zinc', value: '3.1 mg' },
          { label: 'Glycemic Index', value: '52-60 (తక్కువ-మధ్యమ)' },
        ]}
      />

      <ComparisonTable
        title="నువ్వులు vs ఎర్రసు vs గోధుమ — 100గ్రాము ఆధారంగా"
        headers={['పోషక పదార్థం', 'తెల్లటి ఎర్రసు', 'సమ్పూర్ణ గోధుమ', 'వేలిముర', 'జావారం', 'బజ్ర']}
        rows={[
          ['కేలరీలు (kcal)', '356', '341', '328', '349', '361'],
          ['ప్రోటీన్ (g)', '6.8', '12.1', '7.3', '10.4', '11.6'],
          ['ఫైబర్ (g)', '0.2', '11.2', '11.5', '10.7', '11.3'],
          ['ఇనుము (mg)', '0.7', '4.9', '3.9', '4.1', '8.0'],
          ['కాల్షియం (mg)', '10', '48', '344', '27', '42'],
          ['జింక్ (mg)', '1.2', '2.7', '2.3', '1.6', '3.1'],
          ['Glycemic Index', '70-73', '55-65', '54-68', '50-62', '52-60'],
          ['Gluten', 'లేదు', 'ఉంది', 'లేదు', 'లేదు', 'లేదు'],
        ]}
      />

      <EvidenceBlock
        level="strong"
        title="నువ్వులు మరియు రక్త చక్కెర నియంత్రణ"
      >
        ICRISAT నుండి 65 అధ్యయనాల యొక్క వ్యవస్థితమైన సమీక్ష, చక్కెర నియంత్రణ సంబంధితమైన రక్త చక్కెరను సగటున 12% తగ్గిస్తుందని మరియు HbA1c ను 0.36% తగ్గిస్తుందని కనుగొంది. ఇది నువ్వుల యొక్క అధిక ఫైబర్ కంటెంట్, నిమ్నతర స్టార్చ్ జీర్ణక్ష్రమత మరియు పాలిఫెనాల్‌ల ఉనికి కారణంగా ఉంటుంది.
      </EvidenceBlock>

      {/* ============ DALS ============ */}
      <h2>దాల రకాలు — భారతదేశం యొక్క ప్రోటీన్ ఆధారం</h2>

      <p>
        పప్పులు (dals) భారతదేశం యొక్క పెద్ద సంఖ్యలో శాకాహారී జనాభా కోసం ప్రోటీన్ ఆధారం. భారతదేశం ఎక్కువ పప్పులను ఉత్పత్తి చేస్తుంది మరియు సేవిస్తుంది. అయితే, ప్రోటీన్ కంటెంట్, జీర్ణక్ష్రమత మరియు యాంటీ-నిউట్రియంట్ స్థాయిలు రకాల కారణంగా గణనీయంగా భిన్నంగా ఉంటాయి.
      </p>

      <NutritionFactBlock
        title="తూర్ దాల (Pigeon Pea, Split) — 100 గ్రాము శుష్క"
        servingSize="100g dry"
        calories={343}
        protein={22.3}
        carbs={57.6}
        fat={1.7}
        fiber={15.0}
        extras={[
          { label: 'Iron', value: '5.2 mg' },
          { label: 'Folate', value: '456 mcg' },
          { label: 'Limiting Amino Acid', value: 'Methionine + Cysteine' },
        ]}
      />

      <NutritionFactBlock
        title="మూంగ దాల (Green Gram, Split) — 100 గ్రాము శుష్క"
        servingSize="100g dry"
        calories={348}
        protein={24.0}
        carbs={59.9}
        fat={1.2}
        fiber={8.2}
        extras={[
          { label: 'Iron', value: '4.4 mg' },
          { label: 'Digestibility', value: 'పప్పుల మధ్య అత్యధికం (82-85%)' },
          { label: 'GI (ఉడకబెట్టిన)', value: '25-38 (తక్కువ)' },
        ]}
      />

      <NutritionFactBlock
        title="మసూర దాల (Red Lentil, Split) — 100 గ్రాము శుష్క"
        servingSize="100g dry"
        calories={343}
        protein={25.1}
        carbs={56.5}
        fat={0.7}
        fiber={10.8}
        extras={[
          { label: 'Iron', value: '7.6 mg' },
          { label: 'Cooking Time', value: 'పప్పుల మధ్య వేగవంతమైనది (15-20 నిమిషాలు)' },
        ]}
      />

      <NutritionFactBlock
        title="చానా దాల (Bengal Gram, Split) — 100 గ్రాము శుష్క"
        servingSize="100g dry"
        calories={360}
        protein={20.8}
        carbs={59.8}
        fat={5.3}
        fiber={18.3}
        extras={[
          { label: 'Iron', value: '5.3 mg' },
          { label: 'GI (ఉడకబెట్టిన)', value: '8-12 (చాలా తక్కువ — అత్యల్ప GI ఆహారాలలో ఒకటి)' },
          { label: 'Zinc', value: '3.3 mg' },
        ]}
      />

      <ExampleBlock title="ప్రాయోగిక దాల ప్రోటీన్ గణన">
        ఒక సాధారణ గిన్నె ఉడకబెట్టిన దాల (సుమారుగా 200 మిలీలీటర్ లేదా 150 గ్రాము ఉడకబెట్టిన, ~50 గ్రాము శుష్క నుండి) సుమారుగా 10-12 గ్రాముల ప్రోటీన్‌ను అందిస్తుంది. దాల నుండి మాత్రమే తగిన ప్రోటీన్‌ను పొందాలంటే, మీకు రోజుకు 6-7 గిన్నెలు సేవించవలసి ఉంటుంది - స్పష్టంగా అసాధ్యం. ఈ కారణంగా దాలను ధాన్యాలతో (amino acid complementation కోసం) మరియు పంటకూర, గుడ్డు మరియు ఇతర ప్రోటీన్ వనరులతో సమ్మిళితం చేయాలి.
      </ExampleBlock>

      {/* ============ GHEE ============ */}
      <h2>ఘీ — స్వచ్ఛమైన నెయ్యి</h2>

      <NutritionFactBlock
        title="ఘీ (గోవు నీలు) — 100 గ్రాము"
        servingSize="100g"
        calories={897}
        protein={0.0}
        carbs={0.0}
        fat={99.7}
        fiber={0.0}
        extras={[
          { label: 'Saturated Fat', value: '61.9g' },
          { label: 'Monounsaturated Fat', value: '28.7g' },
          { label: 'Short-chain fatty acids (butyrate)', value: '3-4g' },
          { label: 'Vitamin A', value: '840 mcg RE' },
          { label: 'Cholesterol', value: '256 mg' },
          { label: 'Smoke Point', value: '250°C (వంట నీలలలో అత్యధికం)' },
        ]}
      />

      <EvidenceBlock
        level="moderate"
        title="మధ్యమ మొత్తంలో ఘీ హానికరం కాదు"
      >
        సంతృప్త కొవ్వులో ఉన్నప్పటికీ, మధ్యమ ఘీ సేవన (రోజుకు 1-2 చెంచాలు) భారతీయ జనాభా యొక్క పర్యవేక్షణ అధ్యయనాలలో వर్ధిత హృదయ ఆఘాత ప్రమాధం సంబంధితం కాలేదు. ఘీ బ్యూటిరేట్ కలిగి ఉంటుంది, ఇది వాపు-నిరోధక లక్షణాలను కలిగి ఉంది మరియు ప్రేగు ఆరోగ్యానికి మద్దతు ఇస్తుంది. అయితే, ఘీ చాలా కేలోరీ-సాంద్రమైనది, చెంచాకు 45 కేలోరీలు ఉంటాయి, కాబట్టి బరువు నిర్వహణ సమయంలో భాగం నియంత్రణ చాలా ముఖ్యమైనది.
      </EvidenceBlock>

      {/* ============ COCONUT ============ */}
      <h2>కొబ్బరి — దక్షిణ భారతదేశం యొక్క ముఖ్యమైన సమగ్రం</h2>

      <NutritionFactBlock
        title="తాజా కొబ్బరి కెర్నల్ — 100 గ్రాము"
        servingSize="100g"
        calories={354}
        protein={3.4}
        carbs={15.2}
        fat={33.5}
        fiber={9.0}
        extras={[
          { label: 'MCT Content', value: '~15g (ముఖ్యంగా లారిక్ ఆసిడ్)' },
          { label: 'Potassium', value: '356 mg' },
          { label: 'Manganese', value: '1.5 mg' },
        ]}
      />

      <NoteBlock title="కొబ్బరి రూపాలు మరియు వాటి కేలోరీ ప్రభావం">
        కొబ్బరి యొక్క కేలోరీ సాంద్రత రూపం ఆధారంగా చాలా వేరుగా ఉంటుంది. చટ్నీ మరియు కూర్చీలలో ఉపయోగించిన తాజా కొబ్బరి కరకలు (2 టేబిల్‌స్పూన్‌, ~20 గ్రాము) సుమారుగా 70 కేలోరీలను జోడిస్తాయి. కొబ్బరి నీలు (1 టేబిల్‌స్పూన్) 120 కేలోరీలు. కొబ్బరి నీలు (100 మిలీలీటర్) 150-200 కేలోరీల మధ్య ఉంటుంది. బరువు నిర్వహణ కోసం, ఉపయోగించిన కొబ్బరి రూపం గురించి స్పష్టమైన సూచన ఉండటం చాలా ముఖ్యమైనది.
      </NoteBlock>

      <h2>బరువు నిర్వహణ కోసం ప్రధాన దిశలు</h2>

      <ExampleBlock title="మెరుగైన పోషణ కోసం ఆచరణాత్మక ప్రధాన ఆహారాల మార్పులు">
        <ul>
          <li>తెల్లటి ఎర్రసు (polished rice) ను ఉడికిన ఎర్రసు లేదా 50:50 ఎర్రసు-నువ్వుల మిశ్రణ ఉపయోగించండి</li>
          <li>ఇంట వంటకు ఎల్లప్పుడూ సమ్పూర్ణ గోధుమ కూర ఉపయోగించండి</li>
          <li>రోజుకు కనీసం ఒక నువ్వుల ఆధారిత భోజనం చేర్చండి (రాగీ చెపాతీ, జవారం రోటీ, బజ్ర ఖిచ్డీ)</li>
          <li>రోజుకు 2-3 భిన్న దాల సేవనాలను లక్ష్యం చేయండి, ధాన్యాలతో సమ్మిళితం చేయండి</li>
          <li>ఘీని రోజుకు 1-2 చెంచాలకు పరిమితం చేయండి — వంట మాధ్యమంగా కాదు, రుచిని కోసం ఉపయోగించండి</li>
          <li>కొబ్బరి ఉపయోగించేటప్పుడు, కొబ్బరి నీలు లేదా క్రీమ్ కంటే తాజా కరకలను ఎంచుకోండి</li>
        </ul>
      </ExampleBlock>

      <ReferenceList
        references={[
          'Longvah, T., Ananthan, R., Bhaskarachary, K., & Venkaiah, K. (2017). Indian Food Composition Tables. National Institute of Nutrition, ICMR, Hyderabad.',
          'ICMR-NIN. (2020). Nutrient Requirements and Recommended Dietary Allowances for Indians. National Institute of Nutrition, Hyderabad.',
          'ICMR-NIN. (2024). Dietary Guidelines for Indians — A Manual. National Institute of Nutrition, Hyderabad.',
          'National Nutrition Monitoring Bureau (NNMB). (2017). Diet and Nutritional Status of Urban Population in India. NIN, Hyderabad.',
          'Kam, J., Puranik, S., Yadav, R., Manwaring, H. R., Pierre, S., Srivastava, R. K., & Yadav, R. S. (2016). Dietary interventions for type 2 diabetes: how millet comes to help. Frontiers in Plant Science, 7, 1454.',
        ]}
      />
    </div>
  );
}
