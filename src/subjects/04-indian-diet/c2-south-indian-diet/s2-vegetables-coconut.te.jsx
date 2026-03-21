import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import NutritionFactBlock from '../../../components/content/NutritionFactBlock.jsx';
import ComparisonTable from '../../../components/content/ComparisonTable.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

export default function VegetablesCoconutTe() {
  return (
    <div className="prose-health">
      <h1>దక్షిణ భారతీయ కూర, కొబ్బరి మరియు కరీ ఆకులు</h1>

      <p>
        దక్షిణ భారతీయ రసోదా ఒక విభిన్న సమూహం కూరగాయలు మరియు సమగ్రాలను కూర్చీలు చేస్తుంది. పోషక శక్తి యొక్క మరింజీ నుండి కొబ్బరి యొక్క యోగాలకు, ఈ సమగ్రాలు అనన్য ఆరోగ్య ప్రయోజనాలను అందిస్తాయి. ఈ విభాగం బరువు-నిర్వహణ ఆహారానికి ఈ సమగ్రాలను చేర్చుకోవడానికి సాక్ష్య-ఆధారిత పోషక ప్రొఫైల్‌లను మరియు ఆచరణాత్మక సూచన ఇస్తుంది.
      </p>

      {/* DRUMSTICK */}
      <h2>సక్కటీ (Moringa oleifera) — పోషక శక్తిపీఠం</h2>

      <DefinitionBlock
        term="Moringa"
        definition="Moringa oleifera, సక్కటీ చెట్టుగా లేదా 'మిరాకిల్ ట్రీ'గా సాధారణంగా పిలువబడుతుంది, భారతీయ ఉపఖండంకు సంబంధించినది. చెట్టు యొక్క ప్రతిభాగం ఉపయోగించబడుతుంది — ఆకులు సబ్జీ లేదా పొడిగా, చిన్న విత్తనాలు (సక్కటీ) సాంబార్‌లో మరియు కూర్చీలలో."
      />

      <NutritionFactBlock
        title="సక్కటీ పాడ్‌లు (Moringa Pods) — 100g"
        servingSize="100g edible portion (2-3 pieces)"
        calories={37}
        protein={2.1}
        carbs={8.5}
        fat={0.2}
        fiber={3.2}
        extras={[
          { label: 'Vitamin C', value: '120 mg' },
          { label: 'Calcium', value: '30 mg' },
          { label: 'Iron', value: '0.4 mg' },
          { label: 'Potassium', value: '259 mg' },
        ]}
      />

      <NutritionFactBlock
        title="సక్కటీ ఆకులు (తాజా) — 100g"
        servingSize="100g fresh leaves"
        calories={64}
        protein={9.4}
        carbs={8.3}
        fat={1.4}
        fiber={2.0}
        extras={[
          { label: 'Vitamin A', value: '6780 mcg (బీటా-కరోటిన్‌గా)' },
          { label: 'Vitamin C', value: '220 mg' },
          { label: 'Calcium', value: '185 mg' },
          { label: 'Iron', value: '4.0 mg' },
          { label: 'Protein', value: '9.4g (సాధారణ ఆకు కూర కంటే అధికం)' },
        ]}
      />

      <EvidenceBlock
        level="moderate"
        title="సక్కటీ యొక్క అసాధారణ పోషక సాంద్రత బాగా-నిర్థారితమైనది"
      >
        సక్కటీ ఆకులు, పోషక సంబంధితమైనవి, నారింజ కంటే 7 రెట్లు విటమిన్ C, పాలు కంటే 4 రెట్లు కాల్షియం, క్యారెట్‌ల కంటే 4 రెట్లు విటామిన్ A, యోగర్ట్ కంటే 2 రెట్లు ప్రోటీన్ ఒరలు, కలిగి ఉంటాయి. ఈ పోల్చిక శుష్క బరువు ఆధారంగా ఉంటుంది, అయితే సక్కటీ దృఢంగా అత్యంత పోషక-సాంద్రమైన ఆహారాలలో ఒకటి. క్లినికల్ ట్రయల్‌లు సక్కటీ ఆకు పొడిని సేవించిన డయాబెటిక్ రోగులలో హైపోగ్లైసెమిక్ ఫలితాలు చూపించాయి.
      </EvidenceBlock>

      {/* COCONUT */}
      <h2>కొబ్బరి — అనేక రూపాల సర్వ-ఉపయోగకరమైన సమగ్రం</h2>

      <ComparisonTable
        title="కొబ్బరి రూపాలు — కేలోరీ పోల్చిక"
        headers={['రూపం', 'ప్రతి 100g / 100ml', 'సాధారణ సేవన', 'సేవన కేలోరీలు', 'సేవన చర్బి']}
        rows={[
          ['తాజా కొబ్బరి (కరకలు)', '354 kcal', '2 tbsp (20g)', '71 kcal', '6.7g'],
          ['కొబ్బరి నీలు (గాఢం)', '230 kcal', '100ml కూర్చీలో', '230 kcal', '24g'],
          ['కొబ్బరి నీలు (సన్నని)', '100 kcal', '100ml కూర్చీలో', '100 kcal', '10g'],
          ['కొబ్బరి నీలు', '884 kcal', '1 tbsp (15ml)', '130 kcal', '14g'],
          ['కొబ్బరి నీరు', '19 kcal', '200ml', '38 kcal', '0.2g'],
        ]}
      />

      <WarningBlock title="కొబ్బరి నీల విపణనం vs విజ్ఞానం">
        కొబ్బరి నీలు 'సూపర్‌ఫూడ్' మరియు 'ఫ్యాట్ బర్నర్'గా సమర్థవంతంగా వర్ణించబడుతుంది. వాస్తవం చాలా సూక్ష్మమైనది. స్వచ్ఛమైన MCT నీలు (సాంద్రీకృత C8 మరియు C10 కొవ్వు ఆసిడ్‌లు) చిన్న థర్మోజెనిక్ మరియు ఆకలి-అణచివేయటం ప్రభావాలను చూపిస్తుంది, కానీ కొబ్బరి నీలు స్వచ్ఛమైన MCT నీలు కాదు. కొబ్బరి నీల 86.5% సంతృప్త కొవ్వుతో, అమెరికన్ కరెక్ట్ ఆసోసియేషన్ సంతృప్త కొవ్వు గ్రహణం పరిమితం చేయమని నిర్దేశిస్తుంది. బరువు-సంబంధిత దావాలు చలిలీ నీలుకు అర్హతలు అందులేవు. 130 కేలోరీలు వర్తమానం (1 టేబిల్‌స్పూన్) చర్బిలో, కొబ్బరి నీలు మధ్యమ మొత్తంలో ఉపయోగించాలి.
      </WarningBlock>

      {/* CURRY LEAVES */}
      <h2>కరీ ఆకులు (Karivepillai) — గార్నిష్‌కన్నా చాలా ఎక్కువ</h2>

      <NutritionFactBlock
        title="కరీ ఆకులు (తాజా) — 100g"
        servingSize="100g (సాధారణ వాడకం: 8-10 ఆకులు = ~2g)"
        calories={108}
        protein={6.1}
        carbs={18.7}
        fat={1.0}
        fiber={6.4}
        extras={[
          { label: 'Iron', value: '7.0 mg' },
          { label: 'Calcium', value: '810 mg' },
          { label: 'Vitamin A', value: '12,600 IU (బీటా-కరోటిన్‌గా)' },
          { label: 'Folic acid', value: '93.9 mcg' },
        ]}
      />

      <NoteBlock title="కరీ ఆకులు: గార్నిష్ కంటే ఎక్కువ">
        100g కరీ ఆకులకు, కాల్షియం (810 mg), ఇనుము (7 mg) మరియు విటామిన్ A (12,600 IU) యొక్క సంపన్న స్రోతాలు సాధారణ ఆకు కూర రకాలలో ఉన్నాయి. సాధారణ సేవన (8-10 ఆకులు) ఈ మూలాలలో కేవలం భిన్నమైన సరఫరాను అందిస్తుంది, అయితే ప్రతిదిన సేవన పలు భోజనాలలో (తడ్డా, సాంబార్, రస, చట్నీలు) సంచిత ఫలితం అర్థవంతమైనది.
      </NoteBlock>

      <h2>బరువు నిర్వహణ కోసం ఆచరణాత్మక చేపటవలసిన చర్యలు</h2>

      <ExampleBlock title="ఉన్నత-ప్రభావం, తక్కువ-కేలోరీ దక్షిణ భారతీయ కూర">
        <ul>
          <li><strong>అష్‌ గౌర్డ్:</strong> 12 kcal/100g — కూటులో మరియు సాంబార్‌లో గరిష్ఠ వాల్యూమ్ కోసం</li>
          <li><strong>సక్కటీ:</strong> 37 kcal/100g — పోషక-సాంద్రమైనది, సాంబార్‌కు రుచిని జోడిస్తుంది</li>
          <li><strong>కూర కూర:</strong> 24 kcal/100g — చిన్న కేలోరీ, రుచిలు బాగా నిర్వహిస్తుంది</li>
          <li><strong>గుండె పూలు:</strong> 34 kcal/100g — ఎక్కువ ఫైబర్, ఐరన్ సరఫరా</li>
          <li><strong>కొబ్బరి (తాజా కరకలు):</strong> చట్నీలలో 2 tbsp కుదిపిన కొబ్బరిని 1 tbsp తాజా కొబ్బరిలో ఉపయోగించండి</li>
        </ul>
      </ExampleBlock>

      <ReferenceList
        references={[
          'Longvah, T., Ananthan, R., Bhaskarachary, K., & Venkaiah, K. (2017). Indian Food Composition Tables. National Institute of Nutrition, ICMR, Hyderabad.',
          'Fuglie, L. J. (2001). The Miracle Tree: Moringa oleifera. Church World Service, Dakar, Senegal.',
          'ICMR-NIN. (2024). Dietary Guidelines for Indians — A Manual. National Institute of Nutrition, Hyderabad.',
        ]}
      />
    </div>
  );
}
