import DefinitionBlock from '../../../components/content/DefinitionBlock';
import EvidenceBlock from '../../../components/content/EvidenceBlock';
import ExampleBlock from '../../../components/content/ExampleBlock';
import NoteBlock from '../../../components/content/NoteBlock';
import WarningBlock from '../../../components/content/WarningBlock';
import ReferenceList from '../../../components/content/ReferenceList';

const references = [
  {
    id: 1,
    authors: 'Yajnik CS, Fall CH, Coyaji KJ, et al.',
    year: 2003,
    title: 'Neonatal anthropometry: the thin-fat Indian baby. The Pune Maternal Nutrition Study',
    journal: 'International Journal of Obesity',
    volume: '27(2)',
    pages: '173-180',
  },
  {
    id: 2,
    authors: 'Misra A, Vikram NK',
    year: 2004,
    title: 'Insulin resistance syndrome (metabolic syndrome) and obesity in Asian Indians: evidence and implications',
    journal: 'Nutrition',
    volume: '20(5)',
    pages: '482-491',
  },
  {
    id: 3,
    authors: 'Lohman TG, Going SB',
    year: 2006,
    title: 'Body composition assessment for development of an international growth standard for preadolescent and adolescent children',
    journal: 'Food and Nutrition Bulletin',
    volume: '27(4 Suppl)',
    pages: 'S314-S325',
  },
  {
    id: 4,
    authors: 'Dulloo AG, Jacquet J, Solinas G, Montani JP, Schutz Y',
    year: 2010,
    title: 'Body composition phenotypes in pathways to obesity and the metabolic syndrome',
    journal: 'International Journal of Obesity',
    volume: '34(Suppl 2)',
    pages: 'S4-S17',
  },
  {
    id: 5,
    authors: 'Kalra S, Unnikrishnan AG',
    year: 2012,
    title: 'Obesity in India: the weight of the matter',
    journal: 'Journal of Medical Nutrition and Nutraceuticals',
    volume: '1(1)',
    pages: '37-41',
  },
  {
    id: 6,
    authors: 'Wells JCK',
    year: 2007,
    title: 'Sexual dimorphism of body composition',
    journal: 'Best Practice & Research Clinical Endocrinology & Metabolism',
    volume: '21(3)',
    pages: '415-430',
  },
];

export default function BodyFatLeanMassTe() {
  return (
    <div className="prose-health">
      <h1>Body Fat మరియు Lean Mass</h1>

      <p>
        శరీర బరువు మాత్రమే పూర్తి కథ చెప్పదు. 75 kg ఉన్న ఇద్దరు వ్యక్తులు
        పూర్తిగా భిన్నంగా కనిపించవచ్చు, వేర్వేరు ఆరోగ్య ప్రమాదాలు కలిగి
        ఉండవచ్చు, మరియు diet మరియు exercise కి వేర్వేరుగా స్పందించవచ్చు —
        ఇదంతా వారి fat mass మరియు lean mass నిష్పత్తి మీద ఆధారపడి ఉంటుంది.
        అర్థవంతమైన weight management కోసం body composition ని అర్థం చేసుకోవడం
        చాలా అవసరం.
      </p>

      <DefinitionBlock term="Body composition">
        శరీరంలో fat mass మరియు fat-free (lean) mass యొక్క నిష్పత్తి. Fat mass లో
        essential fat మరియు storage fat ఉంటాయి. Lean mass లో skeletal muscle,
        ఎముకలు, అవయవాలు, నీరు, మరియు connective tissue ఉంటాయి.
      </DefinitionBlock>

      <h2>Body Fat రకాలు</h2>

      <h3>Essential Fat</h3>
      <p>
        Essential fat సాధారణ శారీరక పనితీరుకు అవసరం. ఇది మెదడు, bone marrow,
        నాడులు, మరియు cell membranes లో ఉంటుంది. పురుషులకు essential fat గా
        సుమారు 3% body fat అవసరం, మహిళలకు రొమ్ములు, తుంటిలు, మరియు
        reproductive organs లో అదనపు sex-specific fat కారణంగా సుమారు 12%
        అవసరం.
      </p>

      <h3>Storage Fat</h3>
      <p>
        Storage fat చర్మం కింద (subcutaneous) మరియు అంతర్గత అవయవాల చుట్టూ
        (visceral) adipose tissue లో పేరుకుపోతుంది. దీనిని తరచుగా
        ప్రతికూలంగా చూస్తారు కానీ, మితమైన storage fat శక్తి నిల్వగా,
        insulation గా, మరియు అవయవాలను రక్షించే cushion గా పనిచేస్తుంది.
      </p>

      <DefinitionBlock term="Visceral fat">
        కడుపు గుహలో, కాలేయం, pancreas, మరియు పేగులు వంటి అవయవాల చుట్టూ
        నిల్వ చేయబడిన కొవ్వు. Visceral fat metabolically active గా ఉంటుంది,
        inflammatory cytokines ను విడుదల చేస్తుంది మరియు subcutaneous fat తో
        పోలిస్తే insulin resistance, type 2 diabetes, మరియు cardiovascular
        disease కి అసమానంగా ఎక్కువ దోహదం చేస్తుంది.
      </DefinitionBlock>

      <DefinitionBlock term="Subcutaneous fat">
        చర్మం కింద నేరుగా నిల్వ చేయబడిన కొవ్వు. అధిక subcutaneous fat
        అనుకూలమైనది కాదు, కానీ ఇది సాధారణంగా visceral fat కంటే తక్కువ
        metabolically హానికరం. తుంటిలు మరియు తొడల మీద ఉన్న subcutaneous fat
        కొన్ని రక్షణాత్మక metabolic ప్రభావాలు కూడా కలిగి ఉండవచ్చు.
      </DefinitionBlock>

      <h2>Lean Mass భాగాలు</h2>

      <p>
        Lean mass (fat-free mass అని కూడా పిలుస్తారు) అనేక భాగాలను కలిగి
        ఉంటుంది, ప్రతి దానికి ప్రత్యేక విధులు ఉన్నాయి:
      </p>

      <ul>
        <li><strong>Skeletal muscle:</strong> అతిపెద్ద భాగం, ఆరోగ్యకరమైన వ్యక్తులలో శరీర బరువులో సాధారణంగా 40-50%. ఇది resting metabolic rate మరియు glucose disposal యొక్క ప్రాథమిక చోదకం.</li>
        <li><strong>Bone mass:</strong> శరీర బరువులో సుమారు 15% ఉంటుంది, bone density నిర్మాణ మద్దతు మరియు గాయాల నివారణకు కీలకం.</li>
        <li><strong>Organ mass:</strong> మెదడు, కాలేయం, మూత్రపిండాలు, మరియు గుండె వాటి సాపేక్షంగా తక్కువ బరువు ఉన్నప్పటికీ metabolically ఖరీదైన tissues.</li>
        <li><strong>Body water:</strong> పురుషులలో మొత్తం శరీర బరువులో సుమారు 60% మరియు మహిళలలో 50%. నీటి పరిమాణం hydration, glycogen stores, మరియు sodium తీసుకోవడంతో మారుతుంది.</li>
      </ul>

      <NoteBlock title="Weight management కోసం lean mass ఎందుకు ముఖ్యం">
        ప్రతి కిలోగ్రాము skeletal muscle విశ్రాంతిలో రోజుకు సుమారు 13 kcal
        కాలుస్తుంది, ఇది fat tissue కిలోగ్రాముకు రోజుకు సుమారు 4.5 kcal తో
        పోలిస్తే ఎక్కువ. ప్రతి కిలోగ్రాముకు ఈ తేడా చిన్నదిగా అనిపించినా,
        10 kg ఎక్కువ muscle ఉన్న వ్యక్తి విశ్రాంతిలో రోజుకు సుమారు 85
        అదనపు calories కాలుస్తాడు. మరింత ముఖ్యంగా, muscle tissue శారీరక
        కార్యకలాపాల సమయంలో glucose uptake మరియు fatty acid oxidation కోసం
        ప్రాథమిక ప్రదేశం, ఇది metabolic health కి కేంద్రంగా ఉంటుంది.
      </NoteBlock>

      <h2>Indian Thin-Fat Phenotype</h2>

      <p>
        భారతీయ జనాభా ఆరోగ్యం మరియు weight management కి గణనీయమైన
        ప్రభావాలు కలిగిన ఒక ప్రత్యేకమైన body composition pattern ను
        ప్రదర్శిస్తుంది. ఈ pattern మొదట నవజాత శిశువులలో వర్ణించబడింది
        మరియు తర్వాత పెద్దవారిలో ధృవీకరించబడింది — సాపేక్షంగా తక్కువ శరీర
        బరువు మరియు BMI ఉన్నప్పటికీ అసమానంగా ఎక్కువ body fat percentage
        మరియు visceral fat ఉంటాయి.
      </p>

      <EvidenceBlock source="Yajnik et al., 2003 (Pune Maternal Nutrition Study)" level="landmark">
        భారతీయ నవజాత శిశువులు, తెల్లజాతి యూరోపియన్ నవజాత శిశువులతో
        పోలిస్తే, మొత్తంగా తక్కువ బరువు ఉన్నప్పటికీ subscapular skinfold
        thickness — central adiposity యొక్క సూచిక — సంరక్షించబడింది లేదా
        ఎక్కువగా ఉంది. ఈ "thin-fat" phenotype గర్భంలోనే program అయినట్లు
        కనిపిస్తుంది మరియు పెద్దవయసు వరకు కొనసాగుతుంది, ఇది భారతీయులను
        Western జనాభా కంటే తక్కువ శరీర బరువుల వద్ద metabolic syndrome కి
        గురి చేస్తుంది.
      </EvidenceBlock>

      <EvidenceBlock source="Misra & Vikram, 2004" level="strong">
        Asian Indians తెల్లజాతి యూరోపియన్లతో పోలిస్తే ఏ ఇచ్చిన BMI వద్ద
        అయినా ఎక్కువ body fat percentages, ఎక్కువ visceral fat, మరియు ఎక్కువ
        insulin resistance కలిగి ఉంటారు. BMI 23 ఉన్న భారతీయ పురుషుడు BMI
        27-28 ఉన్న యూరోపియన్ పురుషుడితో సమానమైన metabolic risk కలిగి
        ఉండవచ్చు. అందుకే అంతర్జాతీయ BMI cutoffs భారతీయ జనాభాలో
        obesity-related risk ని తక్కువగా అంచనా వేస్తాయి.
      </EvidenceBlock>

      <ExampleBlock title="బయటకు సన్నగా, లోపల లావుగా">
        రాహుల్ 170 cm పొడవు మరియు 68 kg బరువు (BMI 23.5 — WHO ప్రమాణాల
        ప్రకారం "సాధారణం"). అయితే, అతని body fat percentage 28%, మరియు అతని
        waist circumference 92 cm. బట్టల్లో సన్నగా కనిపించినప్పటికీ, అతను
        గణనీయమైన visceral fat కలిగి ఉన్నాడు మరియు prediabetic fasting glucose
        levels ఉన్నాయి. ఈ పరిస్థితి sedentary గా ఉండి refined-carbohydrate-heavy
        diets తీసుకునే urban Indian పురుషులలో చాలా సాధారణం.
      </ExampleBlock>

      <h2>ఆరోగ్యకరమైన Body Fat Ranges</h2>

      <p>
        ఆరోగ్యకరంగా పరిగణించబడే body fat percentage ranges లింగం మరియు వయసు
        ప్రకారం మారుతాయి. భారతీయ జనాభాకు, తక్కువ fat levels వద్ద ఎక్కువ
        metabolic risk ఉన్నందున "overfat" thresholds యొక్క దిగువ భాగం
        మరింత సముచితంగా ఉండవచ్చు.
      </p>

      <ul>
        <li><strong>పురుషులు (సాధారణంగా):</strong> 10-20% body fat ఆరోగ్యకరంగా పరిగణించబడుతుంది; 25% పైన obese గా వర్గీకరించబడుతుంది.</li>
        <li><strong>మహిళలు (సాధారణంగా):</strong> 18-28% body fat ఆరోగ్యకరంగా పరిగణించబడుతుంది; 32% పైన obese గా వర్గీకరించబడుతుంది.</li>
        <li><strong>భారతీయ పురుషులు:</strong> Thin-fat phenotype దృష్ట్యా, metabolic health కోసం body fat ని 20% కంటే తక్కువగా ఉంచడం మంచిది.</li>
        <li><strong>భారతీయ మహిళలు:</strong> Body fat ని 30% కంటే తక్కువగా ఉంచడం సిఫార్సు చేయబడింది, waist circumference పై ప్రత్యేక శ్రద్ధ అవసరం.</li>
      </ul>

      <WarningBlock>
        చాలా తక్కువ body fat ఆరోగ్యకరం కాదు. 5% కంటే తక్కువ body fat ఉన్న
        పురుషులు మరియు 15% కంటే తక్కువ ఉన్న మహిళలు hormonal disruption,
        immune suppression, bone loss, మరియు reproductive dysfunction
        ప్రమాదంలో ఉంటారు. మహిళలలో, menstrual cycles కోల్పోవడం
        (amenorrhoea) body fat సురక్షితమైన స్థాయిల కంటే తగ్గిపోయిందని
        స్పష్టమైన హెచ్చరిక సంకేతం.
      </WarningBlock>

      <h2>Fat Distribution Patterns</h2>

      <p>
        కొవ్వు ఎక్కడ నిల్వ చేయబడుతుందో అనేది ఎంత కొవ్వు నిల్వ
        చేయబడుతుందో అనేంతే ముఖ్యం:
      </p>

      <ul>
        <li><strong>Android (apple-shaped):</strong> కడుపు చుట్టూ కేంద్రీకృతమైన కొవ్వు. పురుషులలో మరియు menopause తర్వాత మహిళలలో ఎక్కువగా కనిపిస్తుంది. Metabolic disease తో బలంగా సంబంధం కలిగి ఉంటుంది.</li>
        <li><strong>Gynoid (pear-shaped):</strong> తుంటిలు మరియు తొడల మీద కేంద్రీకృతమైన కొవ్వు. Menopause ముందు మహిళలలో ఎక్కువగా కనిపిస్తుంది. సాపేక్షంగా తక్కువ metabolic risk కలిగి ఉంటుంది.</li>
        <li><strong>Indian pattern:</strong> భారతీయులు లింగంతో సంబంధం లేకుండా android distribution వైపు మొగ్గు చూపుతారు, సాధారణ బరువులో కూడా preferential visceral fat deposition ఉంటుంది.</li>
      </ul>

      <NoteBlock title="Indian body composition కోసం ఆహార సూచనలు">
        Indian thin-fat phenotype resistance training (lean mass పెంచడానికి)
        తో కలిపి తగినంత protein తీసుకోవడం (1.2-1.6 g/kg/day) కి ప్రత్యేకంగా
        బాగా స్పందిస్తుంది. సాంప్రదాయ భారతీయ ఆహారాలు, తరచుగా protein తక్కువగా
        మరియు refined carbohydrates (white rice, maida-based products) ఎక్కువగా
        ఉంటాయి, ఇవి phenotype ని మరింత తీవ్రం చేయవచ్చు. ఎక్కువ dal, paneer,
        eggs, మరియు ఇతర protein-rich foods ని చేర్చడం మరియు refined grains
        తగ్గించడం body composition ని అనుకూలంగా మార్చడంలో సహాయపడుతుంది.
      </NoteBlock>

      <h2>ముఖ్యమైన అంశాలు</h2>

      <ul>
        <li>Body composition — శరీర బరువు మాత్రమే కాదు — metabolic health మరియు వ్యాధి ప్రమాదాన్ని నిర్ణయిస్తుంది.</li>
        <li>Visceral fat subcutaneous fat కంటే చాలా ప్రమాదకరం, మరియు భారతీయులు దీనిని అసమానంగా పేరుకుపోతారు.</li>
        <li>Indian thin-fat phenotype అంటే సాధారణ BMI ఆరోగ్యకరమైన body composition కి హామీ ఇవ్వదు.</li>
        <li>Weight loss సమయంలో resistance training మరియు తగినంత protein ద్వారా lean mass ని కాపాడటం మరియు పెంచడం చాలా కీలకం.</li>
        <li>Body fat percentage targets ని Indian-specific risk profiles సందర్భంలో అర్థం చేసుకోవాలి.</li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
