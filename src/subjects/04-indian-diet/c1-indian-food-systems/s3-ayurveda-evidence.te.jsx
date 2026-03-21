import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import NutritionFactBlock from '../../../components/content/NutritionFactBlock.jsx';
import ComparisonTable from '../../../components/content/ComparisonTable.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

export default function AyurvedaEvidenceTe() {
  return (
    <div className="prose-health">
      <h1>ఆయువేద నిబంధనలు — ఆధారభూత రూపాంతర</h1>

      <p>
        ఆయువేద, భారతదేశం యొక్క సుమారుగా 3,000 సంవత్సర పూర్వ సంప్రదాయ ఔషధ వ్యవస్థ, ఆహారం, జీర్ణక్రియ మరియు ఆరోగ్యం గురించి విస్తారమైన జ్ఞానం కలిగి ఉంది. దీని నిబంధనల కొన్ని గుణాలు ఆధునిక విజ్ఞానం ద్వారా వాస్తవానికి నిర్ధారితమైనవి, ఇతరాలు కఠినమైన ఆధారం లేనివి. ఈ విభాగం సమకాలీన సాక్ష్య-ఆధారిత చికిత్సా నిబంధనల కటిబిల్లు ఆయువేద నిబంధనల శీర్షక భావనలను మూల్యాంకనం చేస్తుంది.
      </p>

      <DefinitionBlock
        term="Ayurveda"
        definition="'జీవన శాస్త్రం' (ayus = జీవితం, veda = జ్ఞానం), ఆయువేద ఒక సామ్రాజ్య చర్య వ్యవస్థ, యక్ష భారతీయ గ్రంథాలలో సంకలితం, ఇది సక్రియ పదార్థాల ద్వారా ఆహారం మరియు జీర్ణక్రియని నమూనా చేస్తుంది."
      />

      {/* TURMERIC */}
      <h2>మంచరి (Turmeric) — శక్తివంతమైన ఆధారం</h2>

      <NutritionFactBlock
        title="మంచరి పొడి — 100g"
        servingSize="100g (సాధారణ వాడకం: 1-3g/day)"
        calories={312}
        protein={9.7}
        carbs={67.1}
        fat={3.3}
        fiber={22.7}
        extras={[
          { label: 'Curcumin Content', value: 'మంచరి బరువులో 2-5%' },
          { label: 'Iron', value: '55 mg' },
          { label: 'Manganese', value: '19.8 mg' },
        ]}
      />

      <EvidenceBlock
        level="strong"
        title="కర్కుమిన్: సర్వతోముఖ విరోధ సూత్రం"
      >
        కర్కుమిన్, మంచరిలోని ప్రాధమిక సక్రియ సమ్మిళితం, 120 కంటే ఎక్కువ క్లినికల్ ట్రయల్‌లలో అధ్యయనం చేయబడింది. బహు విశ్లేషణ నిర్ధారిస్తుంది కర్కుమిన్ NF-kB నిరోధం, COX-2 మరియు ఆయిల్ సంబంధిత సిటోకిన్‌లను నిరోధించడం ద్వారా గణనీయమైన వాపు-నిరోధక కార్యకలాపం. కర్కుమిన్ కీ పరిమితి: అత్యల్ప జీవక్రియ (సుమారుగా 1% శోషణ). నల్ల మిరియలు నుండి పిపెరిన్‌తో సమ్మిళితం చేస్తే శోషణ 2000% పెరుతుంది. భారతీయ కూర్చీలలో మంచరిని నల్ల మిరియలు మరియు కొవ్వుతో సమ్మిళితం చేయటం అనేది ఈ జీవక్రియ సమస్యకు అద్భుత వాస్తవానికి సంఖ్య.
      </EvidenceBlock>

      {/* AMLA */}
      <h2>నెల్లికాయ (Amla) — విటమిన్ C కోసం శక్తివంతమైన ఆధారం</h2>

      <NutritionFactBlock
        title="నెల్లికాయ (తాజా) — 100g"
        servingSize="100g (1 మధ్యమ ఫలం ≈ 40-50g)"
        calories={58}
        protein={0.9}
        carbs={13.7}
        fat={0.1}
        fiber={3.4}
        extras={[
          { label: 'Vitamin C', value: '600-700 mg (నారింజ కంటే 8-10 రెట్లు)' },
          { label: 'Polyphenols', value: 'అత్యంత ఉన్నత (gallic acid, ellagic acid)' },
          { label: 'Chromium', value: 'ట్రేస్ మొత్తాలు' },
        ]}
      />

      <EvidenceBlock
        level="strong"
        title="నెల్లికాయ: బహుశా విటమిన్ C యొక్క సంపన్నమైన సరఫరాదారు"
      >
        నెల్లికాయ 600-700 mg విటమిన్ C ను 100g తాజా ఫలంలో కలిగి ఉంటుంది — ప్రపంచంలో సర్వసామాన్య సేవిస్తున్న ఫలాలలో అత్యధిక సాంద్రత. విటామిన్ C విషయంలో, నెల్లికాయలో బిన్‌లు తన్నే కాగితం-సంపూర్ణ సమ్మిళితాలను సమర్థవంతంగా పక్క పర్యవేక్ష్యమైన చెట్ల తిండిలో ఉపయోగించినప్పుడు తెల్లటి బ్యాటరీ ఎంపికలకు విటామిన్ C నిలుపుతలు.
      </EvidenceBlock>

      {/* EVIDENCE SUMMARY */}
      <h2>ఆధారం సారాంశం</h2>

      <ComparisonTable
        title="ఆయువేద సమగ్రాలు — ఆధారం స్కోర్‌కార్డ్"
        headers={['సమగ్రం', 'ఆధారం స్థాయి', 'ఆధారిత పూర్వులు', 'ఎక్కువ పూర్వులు']}
        rows={[
          ['మంచరి/కర్కుమిన్', 'శక్తివంతమైనది', 'వాపు-నిరోధక, జోడిందీ ఆపు', '"క్యాన్సర్‌ను నయం చేస్తుంది," వైద్య పరిస్థితుల కోసం చానెల్ చేస్తుంది'],
          ['నెల్లికాయ', 'శక్తివంతమైనది', 'విటామిన్ C సరఫరాదారు, ఆక్సిడేటివ్', '"వయస్సు రివర్స్" చేస్తుంది, విషపూర్ణకరణ జరుగుతుంది'],
        ]}
      />

      <ReferenceList
        references={[
          'Aggarwal, B. B., & Harikumar, K. B. (2009). Potential therapeutic effects of curcumin. International Journal of Biochemistry & Cell Biology, 41(1), 40-59.',
          'Longvah, T., Ananthan, R., Bhaskarachary, K., & Venkaiah, K. (2017). Indian Food Composition Tables. National Institute of Nutrition, ICMR, Hyderabad.',
          'ICMR-NIN. (2024). Dietary Guidelines for Indians — A Manual. National Institute of Nutrition, Hyderabad.',
        ]}
      />
    </div>
  );
}
