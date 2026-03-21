import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import NutritionFactBlock from '../../../components/content/NutritionFactBlock.jsx';
import ComparisonTable from '../../../components/content/ComparisonTable.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';

export default function FermentedFoodsTe() {
  return (
    <div className="prose-health">
      <h1>ఆవిరిలో వేయడం ఆహారాలు — ప్రోబియోటిక్ ప్రయోజనాలు</h1>

      <p>
        దక్షిణ భారతదేశం ఆహారం ఆవిరిలో వేయడం యొక్క ఒక సంపన్న ఐతిహ్యాన్ని కలిగి ఉంది. సర్వవ్యాపక ఇడ్లీ మరియు చెపాతీ బేటర్ నుండి కర్ద, పిక్లెస్ మరియు సాంప్రదాయిక పానీయాల వరకు, ఆవిరిలో వేయడం ఆహారాలు దాదాపు ప్రతిটి భోజనంలో సేవించబడుతుంది. ఆధునిక నిజసత్యం ఈ సాంప్రదాయిక ఆచరణలు ఆవిరిలో వేయడం సూక్ష్మీకరణ, పోషక నిలుపుదల మరించిన అంచనా మరియు ఆంత్రస్థ సూక్ష్మ జీవన సమర్థనను నిర్ధారిస్తుంది.
      </p>

      <DefinitionBlock
        term="Fermentation"
        definition="సూక్ష్మ జీవనాలు (బ్యాక్టీరియా, పూర్తిలు, ఫలకాలు) కార్బోహైడ్రేట్‌లను సేంద్రీయ ఆసిడ్‌లుగా, వాయువులుగా, లేదా ఆల్కహాల్‌లుగా మార్చే ఒక జీవక్రియ ప్రక్రియ."
      />

      <DefinitionBlock
        term="Probiotics"
        definition="సజీవ సూక్ష్మ జీవనాలు, తగిన మొత్తంలో నిర్వహించినప్పుడు, హోస్ట్‌కు ఆరోగ్య ప్రయోజనం కలిగి ఉంటాయి. సాధారణ ప్రోబియోటిక్ జన్మ Lactobacillus, Bifidobacterium, మరియు Streptococcus thermophilus."
      />

      {/* IDLI/DOSA FERMENTATION */}
      <h2>ఇడ్లీ/చెపాతీ బేటర్ ఆవిరిలో వేయడం</h2>

      <p>
        ఎర్రసు-తండేలు బేటర్ ఆవిరిలో వేయడం సాంప్రదాయిక భారతీయ ఆహారం ప్రక్రియ, ఇది సర్వకాలిక నిజసత్య అధ్యయనం చేయబడిన ఒకటి. 12-18 గంటల ఆవిరిలో వేయడం సమయంలో ఒక రూపాంతర అంతర్దృష్టీయమైనది మరియు బహుమూలక.
      </p>

      <EvidenceBlock
        level="strong"
        title="Leuconostoc mesenteroides ఇడ్లీ బేటర్ ఆవిరిలో వేయడం నడిపిస్తుంది"
      >
        సంశోధన ఇడ్లీ బేటర్ ఆవిరిలో వేయడం కోసం ప్రాధమిక సూక్ష్మ జీవనంను Leuconostoc mesenteroides గా గుర్తించింది, హెటెరోఫర్మెంటేటివ్ ల్యాక్టిక్ ఆసిడ్ బ్యాక్టీరియం. ఈ జీవనం ల్యాక్టిక్ ఆసిడ్ (pH ను ~6.0 నుండి ~4.0 కు తగ్గిస్తుంది), కార్బన్ డయాక్సైడ్ (బేటర్‌ను ఎక్కువ చేస్తుంది) మరియు డయాసెటిల్ (లక్షణ సువాసన) ఉత్పత్తి చేస్తుంది. ఆవిరిలో వేయడం పురోగమిస్తున్నప్పుడు, Streptococcus faecalis మరియు Pediococcus cerevisiae కూడా సహకారం చేస్తాయి.
      </EvidenceBlock>

      <ComparisonTable
        title="ఇడ్లీ బేటర్ ఆవిరిలో వేయడం సమయంలో పోషక మార్పులు"
        headers={['పారామితి', 'ఆవిరిలో వేయడం ముందు', 'ఆవిరిలో వేయడం తరువాత (18h)', 'మార్పు']}
        rows={[
          ['pH', '6.0-6.2', '3.8-4.2', 'తగ్గిన (acidified)'],
          ['Phytic acid', '100% (baseline)', '60-80%', '20-40% తగ్గుదల'],
          ['Iron bioavailability', 'బేస్‌లైన్', 'గణనీయంగా మెరుగైనది', '+40-60% మరించిన absorption'],
          ['Riboflavin (B2)', 'బేస్‌లైన్', '2-3x పెరిగినది', 'బ్యాక్టీరియా చేత సంశ్లేషణ'],
          ['Niacin (B3)', 'బేస్‌లైన్', '1.5-2x పెరిగినది', 'బ్యాక్టీరియా చేత సంశ్లేషణ'],
          ['Protein digestibility', '~65%', '~82%', '+17% మెరుగుదల'],
        ]}
      />

      <EvidenceBlock
        level="strong"
        title="ఆవిరిలో వేయడం నాటకీయంగా ఖనిజ జీర్ణక్ష్రమతను సరిగా చేస్తుంది"
      >
        సూక్ష్మ జీవన ఫిటేజ్ ఆవిరిలో వేయడం సమయంలో ఫిటిక్ ఆసిడ్‌ను విభజించే భిన్నమైన ఆసిడ్‌లను ఉత్పత్తి చేస్తుంది. ఆవిరిలో వేయడం నుండి సమర్థవంతమైన ఇనుము శోషణ ఆవిరిలో వేయకుండా పోల్చిన ఉపాదానాల నుండి 40-60% ఎక్కువ. భారతదేశం కోసం చాలా ముఖ్యమైనది, ఎక్కువ 50% జనాభా శరీరంలో లోహ లోపం ఉందని నిర్దేశిస్తుంది.
      </EvidenceBlock>

      <h2>ఆవిరిలో వేయడం ఆహారాలు మరియు ఆంత్రస్థ సూక్ష్మ జీవన</h2>

      <EvidenceBlock
        level="strong"
        title="ఆవిరిలో వేయడం ఆహారాలు ఆంత్రస్థ సూక్ష్మ జీవన వైవిధ్యాన్ని పెంచుతాయి"
      >
        స్టానఫోర్డ్ అధ్యయనం (2021) ఆవిరిలో వేయడం ఆహారం (రోజుకు 6 సేవనలు) గణనీయంగా ఆంత్రస్థ సూక్ష్మ జీవన వైవిధ్యాన్ని పెంచిందని చేసిందని నిర్దేశిస్తుంది. దక్షిణ భారతీయ ఆహార నమూనా దాని గుర్తిచ్చిన సంఖ్య ఆవిరిలో వేయడం సేవన కోసం సరఫరా చేస్తుంది.
      </EvidenceBlock>

      <ReferenceList
        references={[
          'Blandino, A., Al-Aseeri, M. E., Pandiella, S. S., Cantero, D., & Webb, C. (2003). Cereal-based fermented foods and beverages. Food Research International, 36(6), 527-543.',
          'Sonnenburg, J. L., et al. (2021). Gut-microbiota-targeted diets modulate human immune status. Cell, 184(16), 4137-4153.',
          'Marco, M. L., et al. (2017). Health benefits of fermented foods: microbiota and beyond. Current Opinion in Biotechnology, 44, 94-102.',
          'ICMR-NIN. (2024). Dietary Guidelines for Indians — A Manual. National Institute of Nutrition, Hyderabad.',
        ]}
      />
    </div>
  );
}
