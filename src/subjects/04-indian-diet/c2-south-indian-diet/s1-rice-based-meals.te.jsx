import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import NutritionFactBlock from '../../../components/content/NutritionFactBlock.jsx';
import ComparisonTable from '../../../components/content/ComparisonTable.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

export default function RiceBasedMealsTe() {
  return (
    <div className="prose-health">
      <h1>ఎర్రసు-ఆధారిత భోజనాలు — పోషక విశ్లేషణ</h1>

      <p>
        దక్షిణ భారతీయ రసోదా ఎర్రసుపై కేంద్రీకృతమైనది - ఆవిరిలో వేయడం, ఆవిరిలో ఎర్రసు, సూక్ష్మమైన చేపలు, లేదా పప్పులతో సమ్మిళితం చేయడం. ఈ విభాగం అత్యంత సాధారణమైన దక్షిణ భారతీయ ఎర్రసు-ఆధారిత భోజనాల యొక్క వివరణాత్మక పోషక విభజన అందిస్తుంది, భాగం నియంత్రణ, glycemic నిర్వహణ మరియు బరువు నిర్వహణ కేలోరీ సర్వोత్తమీకరణ కోసం ఆచరణాత్మక సూచన ఉంటుంది.
      </p>

      <DefinitionBlock
        term="Glycemic Index (GI)"
        definition="ఒక ఆహారం సేవన తర్వాత రక్త చక్కెర స్థాయిలను ఎంతవరకు అందజేస్తుందో లేదా 0 నుండి 100 స్కేలలో కొలుస్తుంది. GI 55 కంటే ఎక్కువ తక్కువ, 55-69 మధ్యమ, 70+ అధికంగా గణించబడుతుంది."
      />

      {/* IDLI */}
      <h2>ఎర్రసు-పల్‌ఎలి గంధం: ఇడ్లీ</h2>

      <p>
        ఇడ్లీ ఒక పరిమితమైన ఆహారం, దీనిని అందిస్తుంది. తండేలతో సమ్మిళితమైన ఎర్రసు (సాధారణంగా 3:1 లేదా 4:1 నిష్పత్తి) నుండి తయారు చేయబడిన, ఫెర్మెంటేషన ప్రక్రియ ఈ సాధారణ ధాన్యం-దాల సమ్మిళితమైన ఆహారాన్ని ఎన్ని అంతర్దృష్టియైన జీర్ణక్ష్రమత సుదీర్ఘమైన ఆరోగ్యవంతమైన ఆహారంగా మార్పు చేస్తుంది.
      </p>

      <NutritionFactBlock
        title="ఇడ్లీ (2 ముక్కలు, మధ్యమ పరిమాణం) — సుమారుగా 120g"
        servingSize="2 idlis (~120g)"
        calories={120}
        protein={4.0}
        carbs={24.0}
        fat={0.5}
        fiber={1.2}
        extras={[
          { label: 'Glycemic Index', value: '55-65 (మధ్యమ)' },
          { label: 'Iron', value: '1.4 mg' },
          { label: 'Calcium', value: '18 mg' },
          { label: 'Riboflavin (B2)', value: '0.04 mg (ఫెర్మెంటేషన్‌లో 2-3 రెట్లు అధికం)' },
        ]}
      />

      <EvidenceBlock
        level="strong"
        title="ఫెర్మెంటేషన్ ఇడ్లీ యొక్క పోషక ప్రొఫైల్‌ను మెరుగుపరుస్తుంది"
      >
        ఇడ్లీ బేటర్ యొక్క 12-18 గంటల ఫెర్మెంటేషన్ పోషక నిబంధనలలో పలు కొలుచువార్లను కలిగి ఉంది: ఫిటిక్ ఆసిడ్ 20-40% తగ్గుతుంది (ఇనుము మరియు జింక్ జీర్ణక్ష్రమతను సరిగా కుదిపుతుంది), B విటామిన్ కంటెంట్ పెరుతుంది (ముఖ్యంగా రిబోఫ్లేవిన్ మరియు నియాసిన్), ప్రోటీన్ జీర్ణక్ష్రమత సుమారుగా 65% నుండి 82% వరకు సరిగా ఎలుకబెట్టుతుంది.
      </EvidenceBlock>

      {/* DOSA */}
      <h2>చెపాతీ-ఆధారిత: చెపాతీ</h2>

      <NutritionFactBlock
        title="సాధారణ చెపాతీ (1 మధ్యమ, ~80g)"
        servingSize="1 medium dosa (~80g)"
        calories={120}
        protein={3.2}
        carbs={20.0}
        fat={3.5}
        fiber={0.8}
        extras={[
          { label: 'Oil Used', value: '1-2 tsp (జోడిత 45-90 kcal)' },
          { label: 'Glycemic Index', value: '60-70 (మధ్యమ-అధికం)' },
        ]}
      />

      <NutritionFactBlock
        title="మసాలా చెపాతీ (1 బంగారు సక్కెర నిండాయిన పిడిపోయిన)"
        servingSize="1 masala dosa (~180g)"
        calories={250}
        protein={5.5}
        carbs={35.0}
        fat={10.0}
        fiber={2.0}
        extras={[
          { label: 'అలుగడ నిండిపోయిన', value: '~100g (జోడిత 100-120 kcal)' },
          { label: 'చెపాతీ + నిండ కోసం నీల', value: '~12-15g మొత్తం' },
        ]}
      />

      <ComparisonTable
        title="చెపాతీ రకాలు — కేలోరీ పోల్చిక"
        headers={['చెపాతీ రకం', 'కేలోరీలు', 'ప్రోటీన్ (g)', 'చర్బి (g)', 'ఆరోగ్య']}
        rows={[
          ['సాధారణ చెపాతీ (సన్నని, తక్కువ నీల)', '100-120', '3.2', '2-3', 'బరువు నిర్వహణ'],
          ['సాధారణ చెపాతీ (రెస్తరాँ, పెదవిగా)', '150-180', '3.2', '6-8', 'అప్పుడప్పుడే చికిత్స'],
          ['మసాలా చెపాతీ (ఇంట)', '200-250', '5.5', '8-10', 'సంప‌డిచిన సమాస‌ర'],
          ['మసాలా చెపాతీ (రెస్తరాँ)', '300-400', '5.5', '15-20', 'చాలా ఎక్కువ కేలోరీ — పరిమితం'],
        ]}
      />

      <h2>దక్షిణ భారతీయ భోజన నిర్వహణ ఆచరణాత్మక చేపటవలసిన చర్యలు</h2>

      <ExampleBlock title="కేలోరీ నియంత్రణ కోసం దక్షిణ భారతీయ భోజనాలను సర్వోత్తమీకరణ చేయడం">
        <ul>
          <li><strong>ఉదయం:</strong> 2 ఇడ్లీ + 1 గిన్నె సాంబార్ = ~200 kcal, 10g ప్రోటీన్ (ఆరోగ్యకరమైన హాలు కోసం 1 గుడ్డు జోడించండి)</li>
          <li><strong>లంచ్:</strong> 1 కప్ ఎర్రసు + భరిస్తున్న సాంబార్ + రస + పోరియాల్ + కర్ద = ~450 kcal</li>
          <li><strong>తెల్లటి ఎర్రసుకు భూరిణ/ఇండియన్ ఎర్రసుతో భర్తీ చేయండి</strong> GI ను 15-20 పాయింట్‌ల నుండి తగ్గించడానికి</li>
          <li><strong>సాంబార్ సేవన్ను పెంచండి, ఎర్రసు సేవన్ను తగ్గించండి</strong> — కేలోరీకు ఎక్కువ ప్రోటీన్</li>
          <li><strong>ఆలూ అచ్చం, బెజజీ, కోకోనట్ చట్నీని స్కిప్ చేయండి లేదా కనిష్ఠం చేయండి</strong></li>
        </ul>
      </ExampleBlock>

      <ReferenceList
        references={[
          'Longvah, T., Ananthan, R., Bhaskarachary, K., & Venkaiah, K. (2017). Indian Food Composition Tables. National Institute of Nutrition, ICMR, Hyderabad.',
          'Kalpana, K., Lal, R., & Kusuma, D. L. (2019). Nutritional evaluation of traditional South Indian breakfast and lunch meals. Journal of Food Science and Technology, 56(8), 3567-3575.',
          'Jenkins, D. J., Wolever, T. M., Taylor, R. H., et al. (1981). Glycemic index of foods. American Journal of Clinical Nutrition, 34(3), 362-366.',
          'ICMR-NIN. (2024). Dietary Guidelines for Indians — A Manual. National Institute of Nutrition, Hyderabad.',
        ]}
      />
    </div>
  );
}
