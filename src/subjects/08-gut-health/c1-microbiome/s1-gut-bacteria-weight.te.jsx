import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock';
import EvidenceBlock from '../../../components/content/EvidenceBlock';
import ExampleBlock from '../../../components/content/ExampleBlock';
import NoteBlock from '../../../components/content/NoteBlock';
import WarningBlock from '../../../components/content/WarningBlock';
import ReferenceList from '../../../components/content/ReferenceList';

const references = [
  {
    id: 1,
    authors: "Ley RE, Turnbaugh PJ, Klein S, Gordon JI",
    year: 2006,
    title: "Microbial ecology: human gut microbes associated with obesity",
    journal: "Nature",
    volume: "444(7122)",
    pages: "1022-1023",
    doi: "10.1038/4441022a"
  },
  {
    id: 2,
    authors: "Turnbaugh PJ, Ley RE, Mahowald MA, Magrini V, Mardis ER, Gordon JI",
    year: 2006,
    title: "An obesity-associated gut microbiome with increased capacity for energy harvest",
    journal: "Nature",
    volume: "444(7122)",
    pages: "1027-1031",
    doi: "10.1038/nature05414"
  },
  {
    id: 3,
    authors: "Ridaura VK, Faith JJ, Rey FE, et al.",
    year: 2013,
    title: "Gut microbiota from twins discordant for obesity modulate metabolism in mice",
    journal: "Science",
    volume: "341(6150)",
    pages: "1241214",
    doi: "10.1126/science.1241214"
  },
  {
    id: 4,
    authors: "Dhakan DB, Maji A, Sharma AK, et al.",
    year: 2019,
    title: "The unique composition of Indian gut microbiome, gene catalogue, and associated fecal metabolome deciphered using multi-omics approaches",
    journal: "GigaScience",
    volume: "8(3)",
    pages: "giz004",
    doi: "10.1093/gigascience/giz004"
  },
  {
    id: 5,
    authors: "Canfora EE, Jocken JW, Blaak EE",
    year: 2015,
    title: "Short-chain fatty acids in control of body weight and insulin sensitivity",
    journal: "Nature Reviews Endocrinology",
    volume: "11(10)",
    pages: "577-591",
    doi: "10.1038/nrendo.2015.128"
  },
  {
    id: 6,
    authors: "Le Chatelier E, Nielsen T, Qin J, et al.",
    year: 2013,
    title: "Richness of human gut microbiome correlates with metabolic markers",
    journal: "Nature",
    volume: "500(7464)",
    pages: "541-546",
    doi: "10.1038/nature12506"
  },
  {
    id: 7,
    authors: "Allegretti JR, Kassam Z, Mullish BH, et al.",
    year: 2020,
    title: "Effects of fecal microbiota transplantation with oral capsules in obese patients",
    journal: "Clinical Gastroenterology and Hepatology",
    volume: "18(4)",
    pages: "855-863",
    doi: "10.1016/j.cgh.2019.07.006"
  }
];

export default function GutBacteriaWeightTe() {
  return (
    <div className="prose-health">
      <h1>Gut Bacteria and Weight</h1>
      <p>
        మనిషి పేగులో trillions of microorganisms ఉంటాయి — వీటిని మొత్తంగా gut microbiome
        అంటారు — ఇవి metabolism, ఆహారం నుండి energy తీయడం, fat నిల్వ, మరియు ఆకలి
        నియంత్రణలో చాలా ముఖ్యమైన పాత్ర పోషిస్తాయి. తాజా పరిశోధనల ప్రకారం, నీ పేగు
        bacteria కూర్పు నువ్వు ఏం తింటావో అనేదానికి సమానంగా నీ శరీర బరువును
        నిర్ణయించడంలో ముఖ్యమైనదిగా ఉండవచ్చు.
      </p>

      <DefinitionBlock
        term="Gut Microbiome"
        definition="Gastrointestinal tract లో నివసించే trillions of bacteria, archaea, fungi, మరియు viruses యొక్క సమష్టి సమాజం. ఆరోగ్యకరమైన వయోజనుడిలో, gut microbiome సుమారు 1.5 నుండి 2 kg బరువు ఉంటుంది మరియు 1,000 కంటే ఎక్కువ విభిన్నమైన bacterial species ఉంటాయి, ఇవి human genome కంటే 100 రెట్లు ఎక్కువ genes ను encode చేస్తాయి."
      />

      <h2>The Firmicutes-to-Bacteroidetes Ratio</h2>
      <p>
        మనిషి పేగులో రెండు ప్రధాన phyla ఆధిపత్యం చెలాయిస్తాయి: Firmicutes మరియు
        Bacteroidetes. ఈ రెండు గ్రూపుల మధ్య సమతుల్యత శరీర బరువు మరియు metabolic
        ఆరోగ్యంతో అనుసంధానించబడిన ముఖ్యమైన marker గా ఉద్భవించింది.
      </p>

      <EvidenceBlock
        level="strong"
        source="Ley et al., 2006"
        finding="ఊబకాయం ఉన్న వ్యక్తులలో Firmicutes నిష్పత్తి గణనీయంగా ఎక్కువగా మరియు Bacteroidetes నిష్పత్తి తక్కువగా ఉంది, సన్నగా ఉన్న వ్యక్తులతో పోలిస్తే. ఊబకాయం ఉన్న వ్యక్తులు calorie-restricted diets ద్వారా బరువు తగ్గినప్పుడు, వారి Firmicutes-to-Bacteroidetes ratio సన్నగా ఉన్న వ్యక్తులలో కనిపించే pattern వైపు మారింది."
      />

      <EvidenceBlock
        level="strong"
        source="Turnbaugh et al., 2006"
        finding="'Obese microbiome' ఆహారం నుండి energy harvest చేసే సామర్థ్యం ఎక్కువగా ఉన్నట్లు కనుగొనబడింది. ఊబకాయం ఉన్న ఎలుకల gut microbiota తో colonize చేసిన germ-free ఎలుకలు, సన్నగా ఉన్న donors నుండి microbiota అందుకున్న ఎలుకలతో పోలిస్తే, అదే diet నుండి గణనీయంగా ఎక్కువ calories absorb చేశాయి, దీని వలన ఎక్కువ fat నిల్వ జరిగింది."
      />

      <NoteBlock title="What This Means">
        <p>
          ఒకే భోజనం తిన్నా ఇద్దరు వ్యక్తులు వారి gut bacteria కూర్పు ఆధారంగా వేర్వేరు
          మొత్తాల calories absorb చేయవచ్చు. Obese-type microbiome అదే ఆహారం నుండి రోజుకు
          150 అదనపు calories వరకు తీయగలదు — ఒక సంవత్సరంలో చాలా కిలోల బరువు పెరుగుదలకు
          ఇది సరిపోతుంది.
        </p>
      </NoteBlock>

      <h2>Microbiome Diversity and Leanness</h2>
      <p>
        నిర్దిష్ట bacterial groups నిష్పత్తి కాకుండా, మొత్తం microbial diversity
        metabolic ఆరోగ్యానికి ఒక శక్తివంతమైన సూచికగా కనిపిస్తోంది.
      </p>

      <EvidenceBlock
        level="strong"
        source="Le Chatelier et al., 2013"
        finding="తక్కువ bacterial gene richness (తక్కువ diversity) ఉన్న వ్యక్తులలో ఎక్కువ adiposity, insulin resistance, dyslipidemia, మరియు ఎక్కువ inflammatory phenotype కనిపించింది, ఎక్కువ gene richness ఉన్న వ్యక్తులతో పోలిస్తే. ఊబకాయం లేని జనాభాలో కూడా సుమారు 23% మందిలో తక్కువ microbial diversity ఉంది మరియు భవిష్యత్తులో metabolic complications వచ్చే ప్రమాదం ఎక్కువగా ఉంది."
      />

      <ExampleBlock title="Gut Diversity తగ్గించే అంశాలు">
        <ul>
          <li><strong>Antibiotic అతిగా వాడటం:</strong> తరచుగా antibiotic courses వాడటం, India లో over-the-counter లభ్యత వల్ల సాధారణమైనది, మంచి bacterial populations ను నాశనం చేయగలదు.</li>
          <li><strong>Ultra-processed foods:</strong> Packaged namkeens, instant noodles, bakery biscuits, మరియు ready-to-eat meals లో diverse bacteria కి ఆహారమయ్యే fiber ఉండదు.</li>
          <li><strong>తక్కువ fiber తీసుకోవడం:</strong> Refined atta, polished rice, మరియు maida-based foods మంచి gut bacteria ను ఆకలితో ఉంచుతాయి.</li>
          <li><strong>దీర్ఘకాలిక stress:</strong> ఎక్కువైన cortisol gut bacterial కూర్పును మార్చి diversity ని తగ్గిస్తుంది.</li>
          <li><strong>కదలిక లేని జీవనశైలి:</strong> శారీరక నిష్క్రియత తక్కువ microbial diversity తో స్వతంత్రంగా అనుసంధానించబడింది.</li>
        </ul>
      </ExampleBlock>

      <h2>Fecal Transplant Studies: Proof of Causation</h2>
      <p>
        Observational studies gut bacteria మరియు బరువు మధ్య correlation చూపించాయి,
        కానీ fecal microbiota transplant (FMT) ప్రయోగాలు causal evidence అందించాయి.
      </p>

      <EvidenceBlock
        level="moderate"
        source="Ridaura et al., 2013"
        finding="ఊబకాయంలో భిన్నంగా ఉన్న human twins నుండి gut microbiota ని germ-free ఎలుకలకు transplant చేయడం వల్ల సన్నగా లేదా ఊబకాయం phenotype బదిలీ అయింది. ఊబకాయం ఉన్న twin యొక్క microbiota అందుకున్న ఎలుకలు గణనీయంగా ఎక్కువ fat పెరిగాయి. ఆశ్చర్యకరంగా, కలిసి ఉంచినప్పుడు, సన్నగా ఉన్న ఎలుకల bacteria ఊబకాయం ఉన్న ఎలుకల పేగులోకి చేరి fat పెరుగుదలను నివారించాయి — కానీ ఎలుకలు high-fiber, low-fat diet తిన్నప్పుడు మాత్రమే."
      />

      <EvidenceBlock
        level="moderate"
        source="Allegretti et al., 2020"
        finding="సన్నగా ఉన్న donors నుండి ఊబకాయం ఉన్న recipients కి fecal microbiota transplantation చేయడం వల్ల insulin sensitivity లో మితమైన మెరుగుదల మరియు bile acid profiles లో మార్పులు కనిపించాయి, అయితే గణనీయమైన బరువు తగ్గుదల స్థిరంగా కనిపించలేదు, ఇది ఆహార మార్పులు లేకుండా microbiome modification మాత్రమే సరిపోదని సూచిస్తుంది."
      />

      <WarningBlock title="FMT Is Not a Weight Loss Treatment">
        <p>
          ఆశాజనకమైన పరిశోధన ఉన్నప్పటికీ, fecal microbiota transplantation ఊబకాయానికి
          ఆమోదించబడిన చికిత్స కాదు. దీనిలో infection transmission మరియు ఊహించలేని
          ఫలితాలతో సహా ప్రమాదాలు ఉన్నాయి. పరిశోధన విలువ ఏమిటంటే gut bacteria metabolism ని
          causally ప్రభావితం చేస్తాయని నిరూపించడం, బరువు తగ్గడానికి shortcut అందించడం కాదు.
        </p>
      </WarningBlock>

      <h2>Short-Chain Fatty Acids: The Microbial Metabolites</h2>
      <p>
        Gut bacteria dietary fiber ను ferment చేసినప్పుడు, అవి short-chain fatty acids
        (SCFAs) ఉత్పత్తి చేస్తాయి — ప్రధానంగా acetate, propionate, మరియు butyrate —
        ఇవి విస్తృతమైన metabolic ప్రభావాలు కలిగి ఉంటాయి.
      </p>

      <DefinitionBlock
        term="Short-Chain Fatty Acids (SCFAs)"
        definition="Colon లో dietary fiber యొక్క bacterial fermentation వల్ల వచ్చే metabolic byproducts. Butyrate colonocytes కి ప్రధాన energy source గా పనిచేస్తుంది, propionate liver లో gluconeogenesis లో పాల్గొంటుంది, మరియు acetate peripheral circulation లోకి ప్రవేశించి ఆకలి మరియు fat metabolism ని ప్రభావితం చేస్తుంది."
      />

      <EvidenceBlock
        level="strong"
        source="Canfora et al., 2015"
        finding="SCFAs అనేక mechanisms ద్వారా శరీర బరువును నియంత్రిస్తాయి: satiety hormones GLP-1 మరియు PYY స్రావాన్ని ప్రేరేపించడం, fat oxidation పెంచడం, systemic inflammation తగ్గించడం, gut barrier integrity మెరుగుపరచడం, మరియు insulin sensitivity పెంచడం. ముఖ్యంగా butyrate fatty acid oxidation మరియు thermogenesis లో పాల్గొన్న genes ను activate చేస్తుంది."
      />

      <ExampleBlock title="SCFA Production పెంచే Indian Foods">
        <ul>
          <li><strong>Whole dals మరియు legumes:</strong> రాజ్మా, చనా, మూంగ్, మరియు మసూర్ లో resistant starch మరియు soluble fiber ఉంటాయి, వీటిని bacteria SCFAs గా ferment చేస్తాయి.</li>
          <li><strong>Raw banana (కచ్చా కేలా):</strong> Resistant starch పుష్కలంగా ఉంటుంది, ఇది butyrate production కి శక్తివంతమైన substrate.</li>
          <li><strong>Barley (జావ):</strong> Beta-glucan fiber ఉంటుంది, ఇది SCFA production ని గణనీయంగా పెంచుతుంది. Roasted barley నుండి తయారు చేసిన సాంప్రదాయ సత్తు అద్భుతమైన ఎంపిక.</li>
          <li><strong>ఉల్లిపాయ మరియు వెల్లుల్లి:</strong> వీటిలో inulin మరియు fructo-oligosaccharides ఉంటాయి, ఇవి ఎంపిక చేసి మంచి bacteria కి ఆహారం అందిస్తాయి.</li>
          <li><strong>Whole grains:</strong> బాజ్రా, జొవ్వర్, రాగి, మరియు unpolished rice లో fiber substrates ఉంటాయి, ఇవి refined alternatives లో ఉండవు.</li>
        </ul>
      </ExampleBlock>

      <h2>The Indian Microbiome: Unique Characteristics</h2>

      <EvidenceBlock
        level="moderate"
        source="Dhakan et al., 2019"
        finding="Indian gut microbiome Western populations కంటే భిన్నమైన ప్రత్యేక లక్షణాలను చూపించింది, plant-based diets తో అనుసంధానించబడిన Prevotella ఎక్కువగా ఉంది మరియు complex plant carbohydrates విడగొట్టే genes పుష్కలంగా ఉన్నాయి. Indian subjects లో ఆహార patterns తో correlate అయిన గణనీయమైన regional variation కనిపించింది — tribal మరియు rural populations లో ఎక్కువ processed foods తినే urban populations కంటే ఎక్కువ diversity ఉంది."
      />

      <NoteBlock title="Urbanization and the Indian Gut">
        <p>
          Indians సాంప్రదాయ ఆహారాలైన millets, legumes, మరియు fermented foods నుండి
          refined grains, processed snacks, మరియు తక్కువ fiber తో కూడిన urban diets వైపు
          మారుతున్నప్పుడు, microbiome diversity తగ్గుతోంది. Indian cities లో వేగంగా
          జరుగుతున్న ఈ ఆహార మార్పు, urban India లో పెరుగుతున్న obesity, diabetes, మరియు
          metabolic syndrome రేట్లను కొంతవరకు వివరించవచ్చు. సాంప్రదాయ ఆహార అంశాలను
          కాపాడుకోవడం కేవలం సాంస్కృతికమైనది కాదు — ఇది ఒక microbiome preservation
          వ్యూహం.
        </p>
      </NoteBlock>

      <h2>Key Takeaways</h2>
      <ExampleBlock title="Weight-Friendly Microbiome కి సహాయపడే చర్యలు">
        <ul>
          <li>రోజుకు 25-30 grams fiber వివిధ whole food sources నుండి తీసుకో — dals, కూరగాయలు, whole grains, మరియు పండ్లు.</li>
          <li>మంచి bacteria ని పరిచయం చేయడానికి పెరుగు, idli, దోశ, మరియు కాంజీ వంటి fermented foods ని క్రమంగా తీసుకో.</li>
          <li>అనవసరమైన antibiotics వాడకు — self-medication చేయకుండా డాక్టర్ ని సంప్రదించు.</li>
          <li>Microbial diversity తగ్గించే ultra-processed మరియు packaged foods ను తగ్గించు.</li>
          <li>శారీరకంగా active గా ఉండు — రోజూ మితమైన నడక కూడా gut bacterial diversity ని మెరుగుపరుస్తుంది.</li>
        </ul>
      </ExampleBlock>

      <ReferenceList references={references} />
    </div>
  );
}
