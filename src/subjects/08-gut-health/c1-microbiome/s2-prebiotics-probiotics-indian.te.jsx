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
    authors: "Hill C, Guarner F, Reid G, et al.",
    year: 2014,
    title: "Expert consensus document: The International Scientific Association for Probiotics and Prebiotics consensus statement on the scope and appropriate use of the term probiotic",
    journal: "Nature Reviews Gastroenterology & Hepatology",
    volume: "11(8)",
    pages: "506-514",
    doi: "10.1038/nrgastro.2014.66"
  },
  {
    id: 2,
    authors: "Senan S, Prajapati JB, Joshi CG",
    year: 2015,
    title: "Feasibility of genome-wide screening for biosafety assessment of probiotics: a case study of Lactobacillus helveticus MTCC 5463",
    journal: "Probiotics and Antimicrobial Proteins",
    volume: "7(4)",
    pages: "249-258",
    doi: "10.1007/s12602-015-9199-1"
  },
  {
    id: 3,
    authors: "Tamang JP, Shin DH, Jung SJ, Chae SW",
    year: 2016,
    title: "Functional properties of microorganisms in fermented foods",
    journal: "Frontiers in Microbiology",
    volume: "7",
    pages: "578",
    doi: "10.3389/fmicb.2016.00578"
  },
  {
    id: 4,
    authors: "Gibson GR, Hutkins R, Sanders ME, et al.",
    year: 2017,
    title: "Expert consensus document: The International Scientific Association for Probiotics and Prebiotics (ISAPP) consensus statement on the definition and scope of prebiotics",
    journal: "Nature Reviews Gastroenterology & Hepatology",
    volume: "14(8)",
    pages: "491-502",
    doi: "10.1038/nrgastro.2017.75"
  },
  {
    id: 5,
    authors: "Sánchez B, Delgado S, Blanco-Míguez A, Lourenço A, Gueimonde M, Margolles A",
    year: 2017,
    title: "Probiotics, gut microbiota, and their influence on host health and disease",
    journal: "Molecular Nutrition & Food Research",
    volume: "61(1)",
    pages: "1600240",
    doi: "10.1002/mnfr.201600240"
  },
  {
    id: 6,
    authors: "Ray M, Ghosh K, Singh S, Mondal KC",
    year: 2016,
    title: "Folk to functional: An explorative overview of rice-based fermented foods and beverages in India",
    journal: "Journal of Ethnic Foods",
    volume: "3(1)",
    pages: "5-18",
    doi: "10.1016/j.jef.2016.02.002"
  },
  {
    id: 7,
    authors: "Wastyk HC, Fragiadakis GK, Perelman D, et al.",
    year: 2021,
    title: "Gut-microbiota-targeted diets modulate human immune status",
    journal: "Cell",
    volume: "184(16)",
    pages: "4137-4153",
    doi: "10.1016/j.cell.2021.06.019"
  }
];

export default function PrebioticsProbioticsIndianTe() {
  return (
    <div className="prose-health">
      <h1>Prebiotics and Probiotics in the Indian Diet</h1>
      <p>
        భారతదేశానికి fermented మరియు fiber అధికంగా ఉన్న ఆహారాల్లో ప్రపంచంలోనే అత్యంత
        సమృద్ధమైన సంప్రదాయం ఉంది. "Probiotic" మరియు "prebiotic" అనే పదాలు శాస్త్రీయ
        పదజాలంలోకి రాకముందే, భారతీయ ఇళ్ళలో పెరుగు, ఊరగాయ, ఇడ్లీ, మరియు కాంజీ ని
        రోజువారీ ఆహారంలో భాగంగా వాడేవారు. ఇప్పుడు ఆధునిక సైన్స్ భారతీయ సంప్రదాయ
        ఆహార జ్ఞానం శతాబ్దాలుగా ఆచరించిన విషయాలను ధృవీకరిస్తోంది.
      </p>

      <DefinitionBlock
        term="Probiotics"
        definition="తగినంత మోతాదులో తీసుకున్నప్పుడు host కి ఆరోగ్య ప్రయోజనం కలిగించే సజీవ సూక్ష్మజీవులు. ఆహారంలో, ఇవి fermented ఉత్పత్తులలో కనిపిస్తాయి, అక్కడ ప్రయోజనకరమైన bacteria తినే సమయంలో సజీవంగా ఉంటాయి."
      />

      <DefinitionBlock
        term="Prebiotics"
        definition="Host సూక్ష్మజీవులు ఎంపిక చేసుకుని వాడే substrates, ఇవి ఆరోగ్య ప్రయోజనం కలిగిస్తాయి. ఇవి ప్రధానంగా జీర్ణం కాని dietary fibers, ఇవి ప్రయోజనకరమైన gut bacteria కి ఆహారంగా పనిచేసి, వాటి పెరుగుదల మరియు activity ని ప్రోత్సహిస్తాయి."
      />

      <h2>Dahi and Curd: India's Probiotic Powerhouse</h2>
      <p>
        పెరుగు (దహీ/yogurt) భారతదేశంలో అత్యధికంగా వినియోగించే fermented ఆహారం అని
        చెప్పవచ్చు, ప్రతి ప్రాంతీయ వంటకంలో దాదాపుగా ఉంటుంది. ఇది ప్రయోజనకరమైన
        Lactobacillus మరియు Streptococcus species కి సహజ మూలం.
      </p>

      <EvidenceBlock
        level="moderate"
        source="Senan et al., 2015"
        finding="Indian homemade dahi contains diverse strains of Lactobacillus, including L. helveticus, L. rhamnosus, and L. fermentum, many of which demonstrate probiotic properties including acid tolerance, bile salt resistance, and antimicrobial activity against pathogens."
      />

      <ExampleBlock title="Getting the Most from Dahi">
        <ul>
          <li><strong>Homemade over commercial:</strong> సంప్రదాయ starter (జామన్) ఉపయోగించి ఇంట్లో తోడుపెట్టిన పెరుగులో, fermentation తర్వాత pasteurize చేయబడే commercial varieties కంటే ఎక్కువ వైవిధ్యమైన మరియు సజీవమైన bacteria ఉంటాయి.</li>
          <li><strong>Avoid heating:</strong> పెరుగును వేడి కూరల్లో వేస్తే ప్రయోజనకరమైన bacteria చచ్చిపోతాయి. దీన్ని రాయత, మజ్జిగ, లేదా లస్సీ గా room temperature లేదా చల్లగా తాగు.</li>
          <li><strong>Daily consistency:</strong> రోజూ ఒక చిన్న గిన్నె (100-150 ml) తాజా పెరుగు తినడం, అప్పుడప్పుడు ఎక్కువ మోతాదులో తినడం కంటే మంచిది.</li>
          <li><strong>Pair with prebiotics:</strong> Synbiotic combination కోసం పెరుగులో అరటిపండు ముక్కలు, flaxseeds, లేదా ఒక చెంచా తేనె కలుపు — ఇది నువ్వు తింటున్న bacteria నే పోషిస్తుంది.</li>
        </ul>
      </ExampleBlock>

      <h2>Idli and Dosa: Fermented Grain-Legume Magic</h2>
      <p>
        ఇడ్లీ మరియు దోశ పిండి Leuconostoc mesenteroides మరియు Lactobacillus species
        ద్వారా సహజంగా ferment అవుతుంది, ఈ South Indian ప్రధాన ఆహారాలను probiotic-rich గా
        మరియు ferment కాని పదార్థాల కంటే ఎక్కువ పోషకమైనవిగా చేస్తుంది.
      </p>

      <EvidenceBlock
        level="moderate"
        source="Tamang et al., 2016"
        finding="Fermentation of rice-lentil batter for idli and dosa increases B-vitamin content (particularly B12 and folate), improves protein digestibility, reduces antinutrients like phytic acid, and introduces beneficial lactic acid bacteria. The natural fermentation process produces organic acids that create a favorable environment for probiotic survival."
      />

      <NoteBlock title="Maximizing Fermentation Benefits">
        <p>
          Chemical leavening agents వాడే commercial instant mixes కాకుండా, పిండిని 12-16
          గంటలు సహజంగా ferment కానివ్వు. ఆ ప్రత్యేకమైన పులిసిన వాసన మరియు ఉబ్బిన
          volume active microbial activity ని సూచిస్తాయి. వండడం వల్ల live bacteria తగ్గుతాయి,
          కానీ fermentation process ఇప్పటికే nutrient bioavailability ని మెరుగుపరిచి
          antinutrients ని తగ్గించేసింది.
        </p>
      </NoteBlock>

      <h2>Traditional Pickles (Achaar) and Kanji</h2>
      <p>
        సంప్రదాయ lacto-fermentation ద్వారా తయారు చేసిన భారతీయ ఊరగాయలు — oil-and-spice
        తో preserve చేసిన commercial varieties కాదు — ప్రయోజనకరమైన bacteria కి గొప్ప మూలాలు.
      </p>

      <EvidenceBlock
        level="moderate"
        source="Ray et al., 2016"
        finding="Traditional Indian fermented foods including kanji (fermented black carrot drink), gundruk (fermented leafy vegetables), and naturally fermented pickles harbor diverse lactic acid bacteria populations with demonstrable probiotic properties, including Lactobacillus plantarum and L. brevis strains with cholesterol-lowering and immunomodulatory capabilities."
      />

      <ExampleBlock title="Traditional Fermented Foods of India">
        <ul>
          <li><strong>Kanji:</strong> నల్ల carrots, ఆవాలు, మరియు నీటితో తయారు చేసే ఒక North Indian fermented drink. Lactobacillus species తో నిండి ఉంటుంది, సంప్రదాయంగా హోలీ సీజన్ లో తాగుతారు.</li>
          <li><strong>Naturally fermented achaar:</strong> ఉప్పు, ఆవాలు, మరియు ఎండలో ఆరబెట్టడంతో (oil లో మునగకుండా) తయారు చేసిన ఊరగాయలు నిజమైన lacto-fermentation జరుగుతుంది. మామిడి, నిమ్మ, మరియు mixed vegetable varieties సాధారణం.</li>
          <li><strong>Ambali:</strong> Karnataka మరియు Tamil Nadu లో సాధారణమైన South Indian fermented millet porridge. రాగి (finger millet) మరియు మజ్జిగతో తయారు చేస్తారు.</li>
          <li><strong>Selroti:</strong> సహజంగా కనిపించే lactic acid bacteria కలిగిన Northeast India నుండి వచ్చిన fermented rice-based bread.</li>
          <li><strong>Dhokla:</strong> Gujarat నుండి వచ్చిన fermented chickpea flour preparation, ఇందులో పిండి రాత్రంతా bacterial fermentation జరుగుతుంది.</li>
        </ul>
      </ExampleBlock>

      <WarningBlock title="Not All Pickles Are Probiotic">
        <p>
          దుకాణాల్లో అమ్మే చాలా commercial Indian pickles (achaar) oil లో preserve చేసి,
          preservatives కలిపి ఉంటాయి — ఇవి నిజంగా fermented కాదు. వాటిలో live
          ప్రయోజనకరమైన bacteria ఉండవు. Probiotic benefits కోసం, ఉప్పు మరియు సహజ
          ఎండలో ఆరబెట్టడంతో సంప్రదాయంగా ferment చేసిన ఊరగాయలు వెతుకు, లేదా ఇంట్లో
          lacto-fermentation పద్ధతుల్లో తయారు చేసుకో. అలాగే, దుకాణాల్లో దొరికే చాలా
          "probiotic" drinks లో చాలా ఎక్కువ చక్కెర ఉంటుంది, ఇది gut health benefits ని
          counteract చేయవచ్చు.
        </p>
      </WarningBlock>

      <h2>Prebiotic-Rich Indian Foods</h2>

      <EvidenceBlock
        level="strong"
        source="Gibson et al., 2017"
        finding="Prebiotic fibers including inulin, fructo-oligosaccharides (FOS), and galacto-oligosaccharides (GOS) selectively stimulate the growth of beneficial Bifidobacterium and Lactobacillus species, leading to increased short-chain fatty acid production, improved mineral absorption, enhanced immune function, and favorable modulation of appetite-regulating hormones."
      />

      <ExampleBlock title="Top Indian Prebiotic Foods">
        <ul>
          <li><strong>Raw banana (కచ్చా కేలా):</strong> ప్రయోజనకరమైన bacteria ని పోషించే resistant starch అత్యధికంగా ఉంటుంది. South మరియు East India లో సబ్జీ మరియు chips లో వాడతారు.</li>
          <li><strong>Garlic (వెల్లుల్లి) and onion (ఉల్లిపాయ):</strong> Inulin మరియు FOS కలిగి ఉంటాయి. Indian వంటల్లో విస్తృతంగా వాడతారు — తాళింపు సంప్రదాయం రోజువారీ intake ని నిర్ధారిస్తుంది.</li>
          <li><strong>Chicory root (కాస్నీ):</strong> Inulin యొక్క అత్యంత సమృద్ధ మూలాల్లో ఒకటి. Supplement గా అందుబాటులో ఉంటుంది, సంప్రదాయంగా Unani medicine లో వాడతారు.</li>
          <li><strong>Whole wheat and barley:</strong> Arabinoxylan fibers కలిగి ఉంటాయి. Refined varieties కంటే stone-ground atta ఎంచుకో.</li>
          <li><strong>Dals and legumes:</strong> రాజ్మా, చనా, మూంగ్, మరియు లోబియా Bifidobacteria ని పోషించే galacto-oligosaccharides అందిస్తాయి.</li>
          <li><strong>Asparagus (శతావరి):</strong> Inulin అధికంగా ఉంటుంది, భారతదేశంలో వంటకాల్లో మరియు Ayurvedic medicine లో రెండింటిలోనూ వాడతారు.</li>
          <li><strong>Jackfruit (పనస):</strong> గణనీయమైన prebiotic fiber కలిగి ఉంటుంది, ముఖ్యంగా పచ్చిగా లేదా అర్ధ పక్వంగా తినినప్పుడు.</li>
        </ul>
      </ExampleBlock>

      <h2>Commercial Probiotics vs Traditional Foods</h2>

      <EvidenceBlock
        level="strong"
        source="Wastyk et al., 2021"
        finding="A diet high in fermented foods (six servings per day) significantly increased microbiota diversity and decreased markers of inflammation in a 10-week randomized controlled trial. The fermented food diet outperformed a high-fiber diet in improving microbial diversity, suggesting that regular consumption of diverse fermented foods may be more effective than isolated probiotic supplements."
      />

      <ExampleBlock title="Commercial Probiotics vs Traditional Foods: A Comparison">
        <ul>
          <li><strong>Strain specificity:</strong> Commercial probiotics లో specific, బాగా అధ్యయనం చేసిన strains ఉంటాయి. Traditional foods లో వైవిధ్యమైన, కొన్నిసార్లు అధ్యయనం చేయని కానీ కాలపరీక్షకు నిలిచిన microbial communities ఉంటాయి.</li>
          <li><strong>Viability:</strong> నాణ్యమైన supplements colony-forming unit (CFU) counts ని guarantee చేస్తాయి. Traditional foods లో live bacteria content తయారీ, నిల్వ, మరియు తాజాదనం ఆధారంగా మారుతుంది.</li>
          <li><strong>Cost:</strong> రోజువారీ ఇంట్లో తోడుపెట్టిన పెరుగు ఖర్చు, నెలకు Rs 500-2000 ఉండే commercial probiotic capsules కంటే చాలా తక్కువ.</li>
          <li><strong>Whole-food matrix:</strong> Fermented foods live bacteria కంటే ఎక్కువగా nutrients, enzymes, మరియు metabolites అందిస్తాయి. Probiotic capsule కేవలం organisms మాత్రమే అందిస్తుంది.</li>
          <li><strong>Sustainability:</strong> దశాబ్దాలపాటు రోజువారీ పెరుగు అలవాటు కొనసాగించడం, supplements ఎప్పటికీ కొనుగోలు చేస్తూ ఉండటం కంటే చాలా సులువు.</li>
        </ul>
      </ExampleBlock>

      <EvidenceBlock
        level="moderate"
        source="Sánchez et al., 2017"
        finding="While specific probiotic strains have demonstrated benefits in clinical trials for conditions like antibiotic-associated diarrhea and irritable bowel syndrome, evidence for weight loss from probiotic supplementation alone remains inconsistent. The most robust metabolic benefits appear when probiotics are consumed as part of a diverse, fiber-rich diet."
      />

      <NoteBlock title="A Practical Indian Gut Health Plan">
        <p>
          Supplements మరియు traditional foods మధ్య ఎంపిక చేసుకోవడం కాకుండా, రెండింటినీ
          వ్యూహాత్మకంగా ఉపయోగించు. రోజూ పెరుగు లేదా మజ్జిగ foundation గా ఉంచు, వారంలో
          చాలా సార్లు ఇడ్లీ లేదా ధోక్లా వంటి fermented foods చేర్చు, మరియు ప్రతి భోజనంలో
          ఉల్లిపాయలు, వెల్లుల్లి, అరటిపళ్ళు, మరియు పప్పుల నుండి prebiotic fiber ని
          నిర్ధారించు. Antibiotic courses తర్వాత recovery సమయంలో లేదా gastrointestinal
          illness సమయంలో commercial probiotics వాడు, అప్పుడు targeted strains నిర్దిష్ట
          clinical benefit అందిస్తాయి.
        </p>
      </NoteBlock>

      <ReferenceList references={references} />
    </div>
  );
}
