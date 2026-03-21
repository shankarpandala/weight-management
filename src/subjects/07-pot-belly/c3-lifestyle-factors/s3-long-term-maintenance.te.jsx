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
    authors: "Thomas JG, Bond DS, Phelan S, Hill JO, Wing RR",
    year: 2014,
    title: "Weight-loss maintenance for 10 years in the National Weight Control Registry",
    journal: "American Journal of Preventive Medicine",
    volume: "46(1)",
    pages: "17-23",
    doi: "10.1016/j.amepre.2013.08.019"
  },
  {
    id: 2,
    authors: "Lally P, van Jaarsveld CHM, Potts HWW, Wardle J",
    year: 2010,
    title: "How are habits formed: Modelling habit formation in the real world",
    journal: "European Journal of Social Psychology",
    volume: "40(6)",
    pages: "998-1009",
    doi: "10.1002/ejsp.674"
  },
  {
    id: 3,
    authors: "Burke LE, Wang J, Sevick MA",
    year: 2011,
    title: "Self-monitoring in weight loss: a systematic review of the literature",
    journal: "Journal of the American Dietetic Association",
    volume: "111(1)",
    pages: "92-102",
    doi: "10.1016/j.jada.2010.10.008"
  },
  {
    id: 4,
    authors: "Ramachandran A, Snehalatha C, Mary S, Mukesh B, Bhaskar AD, Vijay V",
    year: 2006,
    title: "The Indian Diabetes Prevention Programme shows that lifestyle modification and metformin prevent type 2 diabetes in Asian Indian subjects with impaired glucose tolerance",
    journal: "Diabetologia",
    volume: "49(2)",
    pages: "289-297",
    doi: "10.1007/s00125-005-0097-z"
  },
  {
    id: 5,
    authors: "Poulimeneas D, Yannakoulia M, Kavouras SA, et al.",
    year: 2019,
    title: "Behavioral and psychological factors associated with long-term weight loss maintenance: a systematic review",
    journal: "Psychology Research and Behavior Management",
    volume: "12",
    pages: "1089-1103",
    doi: "10.2147/PRBM.S225425"
  },
  {
    id: 6,
    authors: "Misra A, Vikram NK, Gupta R, Pandey RM, Wasir JS, Gupta VP",
    year: 2006,
    title: "Waist circumference cutoff points and action levels for Asian Indians for identification of abdominal obesity",
    journal: "International Journal of Obesity",
    volume: "30(1)",
    pages: "106-111",
    doi: "10.1038/sj.ijo.0803111"
  }
];

export default function LongTermMaintenanceTe() {
  return (
    <div className="prose-health">
      <h1>పొట్ట కొవ్వు దీర్ఘకాలిక నిర్వహణ</h1>
      <p>
        పొట్ట చుట్టూ ఉన్న కొవ్వును తగ్గించడం అనేది సగం యుద్ధం మాత్రమే. పరిశోధనలు
        స్పష్టంగా చూపిస్తున్నాయి — చాలామంది వ్యక్తులు రెండు నుండి ఐదు సంవత్సరాలలో
        తగ్గించిన బరువులో గణనీయమైన భాగాన్ని తిరిగి పెంచుకుంటారు. దీర్ఘకాలిక
        నిర్వహణ యొక్క సైన్స్‌ను అర్థం చేసుకోవడం, ముఖ్యంగా visceral fat తగ్గింపు
        విషయంలో, శాశ్వతమైన ఆరోగ్య ఫలితాలకు చాలా అవసరం.
      </p>

      <DefinitionBlock
        term="Weight Maintenance"
        definition="ఉద్దేశపూర్వక బరువు తగ్గింపు తర్వాత బరువు తిరిగి పెరగకుండా నిరంతరం నిరోధించడం — సాధారణంగా మొదటి శరీర బరువులో కనీసం 10% తగ్గింపును ఒక సంవత్సరం లేదా అంతకంటే ఎక్కువ కాలం నిలుపుకోవడంగా నిర్వచిస్తారు. పొట్ట ఊబకాయం విషయంలో, నడుము చుట్టుకొలతను సిఫార్సు చేసిన cutoff కంటే తక్కువగా ఉంచడం కూడా ఇందులో భాగం — భారతీయ పురుషులకు 90 cm కంటే తక్కువ, భారతీయ మహిళలకు 80 cm కంటే తక్కువ."
      />

      <h2>National Weight Control Registry నుండి పాఠాలు</h2>
      <p>
        National Weight Control Registry (NWCR) 10,000 మందికి పైగా వ్యక్తులను
        track చేస్తోంది — వీరంతా గణనీయమైన బరువు తగ్గింపును నిలుపుకున్నవారే.
        విజయవంతమైన maintainers లో స్థిరమైన ప్రవర్తనా నమూనాలు కనిపిస్తాయి.
      </p>

      <EvidenceBlock
        level="strong"
        source="Thomas et al., 2014"
        finding="NWCR participants who maintained weight loss for 10+ years reported continued high levels of physical activity (averaging 60 minutes per day), regular self-weighing, and consistent eating patterns including breakfast consumption. Importantly, the effort required to maintain these behaviors decreased over time."
      />

      <ExampleBlock title="NWCR ముఖ్య అంశాలు — భారతీయ సందర్భంలో">
        <ul>
          <li><strong>అల్పాహారం క్రమబద్ధత:</strong> క్రమంగా సమతుల్యమైన అల్పాహారం తీసుకోండి — కూరగాయలతో poha, sambar తో idli, లేదా upma వంటివి — దాన్ని skip చేయడం లేదా రోజూ వెన్నతో భారీగా parathas తినడం కంటే ఇది మంచిది.</li>
          <li><strong>శారీరక వ్యాయామం:</strong> రోజుకు 60 నిమిషాల మోతాదు వ్యాయామం, ఇందులో రాత్రి భోజనం తర్వాత వేగంగా నడక (భారతీయులలో సాధారణ అలవాటు), yoga, లేదా cycling ఉంటాయి.</li>
          <li><strong>తూకం వేసుకోవడం:</strong> వారానికి ఒకసారి బరువు తూకం వేసుకోవడం మరియు నెలకు ఒకసారి సాధారణ measuring tape తో నడుము చుట్టుకొలత track చేయడం.</li>
          <li><strong>ఆహార స్థిరత్వం:</strong> వారపు రోజులు మరియు వారాంతాల్లో ఒకే రకమైన ఆహార పద్ధతులను పాటించండి, పండగల సమయంలో అతిగా తినడాన్ని అలవాటుగా మార్చుకోకండి.</li>
        </ul>
      </ExampleBlock>

      <h2>అలవాటు ఏర్పాటు యొక్క సైన్స్</h2>
      <p>
        దీర్ఘకాలిక నిర్వహణ అనేది స్పృహతో చేసే ఎంపికలను automatic అలవాట్లుగా
        మార్చడంపై ఆధారపడి ఉంటుంది. అలవాటు ఏర్పాటు ఊహించగలిగే patterns ను
        అనుసరిస్తుందని పరిశోధన చూపిస్తుంది, వీటిని దీర్ఘకాలిక విజయం కోసం
        ఉపయోగించుకోవచ్చు.
      </p>

      <EvidenceBlock
        level="moderate"
        source="Lally et al., 2010"
        finding="On average, it takes 66 days for a new behavior to become automatic, though the range varies from 18 to 254 days depending on the complexity of the behavior. Simpler actions like drinking water before meals become habitual faster than complex ones like a full exercise routine."
      />

      <NoteBlock title="భారతీయ జీవనశైలికి తగిన అలవాట్లు నిర్మించడం">
        <p>
          చిన్న చిన్న, సాంస్కృతికంగా సరిపోయే మార్పులతో మొదలుపెట్టండి. రోజుకు ఒక
          కప్పు chai ని green tea తో భర్తీ చేయండి. పొడవాటి నడకలకు ముందు 15 నిమిషాల
          రాత్రి భోజనం తర్వాత నడకతో మొదలుపెట్టండి. rice మరియు dal వడ్డించేటప్పుడు
          చిన్న katoris వాడండి. ఈ చిన్న మార్పులు రెండు నుండి మూడు నెలల్లో
          automatic అవుతాయి మరియు కాలక్రమేణా నడుము చుట్టుకొలతలో గణనీయమైన
          తగ్గింపులకు దారితీస్తాయి.
        </p>
      </NoteBlock>

      <h2>Self-Monitoring: నిర్వహణకు మూలస్తంభం</h2>
      <p>
        స్థిరమైన self-monitoring అనేది దీర్ఘకాలిక బరువు మరియు నడుము చుట్టుకొలత
        నిర్వహణకు అత్యంత నమ్మదగిన predictor గా మిగిలి ఉంది.
      </p>

      <EvidenceBlock
        level="strong"
        source="Burke et al., 2011"
        finding="A systematic review of 22 studies found that self-monitoring of diet and physical activity was consistently associated with weight loss maintenance. Those who tracked food intake and body measurements were two to three times more likely to maintain their weight loss compared to non-trackers."
      />

      <ExampleBlock title="ఆచరణాత్మక Self-Monitoring వ్యూహాలు">
        <ul>
          <li><strong>వారపు నడుము కొలత:</strong> ప్రతి ఆదివారం ఉదయం అల్పాహారానికి ముందు నాభి స్థాయిలో కొలవండి. సాధారణ డైరీ లేదా phone app లో రికార్డ్ చేయండి.</li>
          <li><strong>ఆహార journaling:</strong> ప్రధాన భోజనాలు మరియు oil/ghee వాడకం నోట్ చేయండి. భారతీయ వంటలో tempering (tadka) మరియు ఎక్కువగా oil వాడటం వల్ల దాచిన calories తరచుగా జోడించబడతాయి.</li>
          <li><strong>అడుగుల లెక్కింపు:</strong> రోజుకు 8,000-10,000 steps లక్ష్యంగా పెట్టుకోండి. చాలామంది భారతీయులు sedentary office jobs మరియు కారుపై ఆధారపడిన ప్రయాణం వల్ల తక్కువగా నడుస్తారు.</li>
          <li><strong>నెలవారీ progress photos:</strong> scale లో మార్పు లేకపోయినా body composition మెరుగుపడినప్పుడు visual records ప్రేరణ ఇస్తాయి.</li>
        </ul>
      </ExampleBlock>

      <h2>భారతీయ జీవనశైలికి అనుకూలమైన నిలకడ వ్యూహాలు</h2>

      <EvidenceBlock
        level="strong"
        source="Ramachandran et al., 2006"
        finding="The Indian Diabetes Prevention Programme demonstrated that lifestyle modification including dietary changes and increased physical activity reduced diabetes incidence by 28.5% in Asian Indians with impaired glucose tolerance, with sustained benefits observed over the follow-up period."
      />

      <ExampleBlock title="నిలకడగా ఉండే భారతీయ ఆహార మార్పులు">
        <ul>
          <li><strong>రాత్రి భోజనంలో rice కంటే roti:</strong> sabzi తో ఒకటి లేదా రెండు multigrain rotis రెండు నుండి మూడు rice servings కంటే ఎక్కువ fiber మరియు తక్కువ calories అందిస్తాయి.</li>
          <li><strong>Protein anchor గా dal:</strong> ఆకలి తీర్చడానికి మరియు refined carbohydrate వినియోగాన్ని తగ్గించడానికి ప్రతి ప్రధాన భోజనంలో dal లేదా legume వంటకాన్ని చేర్చండి.</li>
          <li><strong>seasonal కూరగాయల వైవిధ్యం:</strong> పోషకాహార వైవిధ్యాన్ని కొనసాగించడానికి lauki, turai, bhindi, palak మరియు ఇతర స్థానిక కూరగాయలను మార్చి మార్చి వాడండి.</li>
          <li><strong>పండగల వ్యూహం:</strong> పండగల సమయంలో రోజుల తరబడి అనియంత్రితంగా తినడం కాకుండా ఒకటి లేదా రెండు ప్రత్యేక items ఆనందించండి. mithai ఇంట్లో దాచుకోకుండా పంచుకోండి.</li>
          <li><strong>Oil నిర్వహణ:</strong> మొత్తం ఇంటి వంటకం కోసం ఒక్కో భోజనానికి రెండు tablespoons oil కి పరిమితం చేయండి. స్వేచ్ఛగా పోయకుండా కొలిచి వాడండి.</li>
        </ul>
      </ExampleBlock>

      <WarningBlock title="'అంతా లేదా ఏమీ లేదు' అనే ఉచ్చు జాగ్రత్త">
        <p>
          చాలామంది ఒక్క అతిగా తినడం తర్వాత — ఒక పెళ్లి విందు లేదా దీపావళి
          సందర్భంగా అతిగా తినడం — నిర్వహణ ప్రయత్నాలను పూర్తిగా వదిలేస్తారు.
          పరిశోధన చూపిస్తుంది — విజయవంతమైన maintainers తాత్కాలిక జారుడులను
          వైఫల్యంగా చూడరు. ఒక భారీ భోజనం నెలల ప్రగతిని రద్దు చేయదు. కీలకమైన
          విషయం ఏమిటంటే, ఆ జారుడును relapse గా మార్చకుండా మరుసటి రోజు సాధారణ
          అలవాట్లకు తిరిగి రావడం.
        </p>
      </WarningBlock>

      <h2>నడుము చుట్టుకొలత నిర్వహణ: భారతీయ-నిర్దిష్ట లక్ష్యాలు</h2>

      <EvidenceBlock
        level="strong"
        source="Misra et al., 2006"
        finding="Asian Indians develop metabolic complications at lower waist circumferences than Western populations. Recommended cutoffs for abdominal obesity are 90 cm for men and 80 cm for women, significantly lower than the Western thresholds of 102 cm and 88 cm respectively."
      />

      <NoteBlock title="దీర్ఘకాలిక Monitoring Framework">
        <p>
          స్పష్టమైన నిర్వహణ లక్ష్యాలను పెట్టుకోండి: నడుము చుట్టుకొలతను 90 cm
          (పురుషులు) లేదా 80 cm (మహిళలు) కంటే తక్కువగా ఉంచండి. కొలతలు 2 cm
          కంటే ఎక్కువ పెరిగితే, మరింత బరువు పెరగడానికి ముందే portion sizes
          తగ్గించడం మరియు activity పెంచడం ద్వారా తక్షణ corrective action
          తీసుకోండి. బరువు తిరిగి పెరగకుండా నిరోధించడం, మళ్ళీ బరువు తగ్గించడం
          కంటే చాలా సులభం.
        </p>
      </NoteBlock>

      <h2>నిర్వహణలో మానసిక అంశాలు</h2>
      <p>
        దీర్ఘకాలిక నిర్వహణ అనేది శారీరక సవాలు అయినంతగానే మానసిక సవాలు కూడా.
        నిలకడగా ఉండే మార్పుకు మద్దతు ఇచ్చే ప్రవర్తనా నమూనాలను అర్థం చేసుకోవడం
        చాలా అవసరం.
      </p>

      <EvidenceBlock
        level="moderate"
        source="Poulimeneas et al., 2019"
        finding="A systematic review identified internal motivation, self-efficacy, positive body image, and flexible (rather than rigid) dietary restraint as key psychological factors associated with successful long-term weight maintenance."
      />

      <ExampleBlock title="నిర్వహణ మానసికతను నిర్మించడం">
        <ul>
          <li><strong>ఆరోగ్య markers పై దృష్టి:</strong> బరువు మీద మాత్రమే ఆబ్సెస్ అవ్వకుండా energy levels, నిద్ర నాణ్యత మరియు blood sugar ను track చేయండి.</li>
          <li><strong>Flexible restraint:</strong> 80/20 విధానం అనుసరించండి — 80% సమయం బాగా తినండి మరియు 20% సమయం సహేతుకమైన indulgences కి అనుమతించండి.</li>
          <li><strong>సామాజిక మద్దతు:</strong> పొరుగువారితో నడవండి, స్థానిక yoga group లో చేరండి, లేదా కుటుంబ సభ్యులను కలిసి ఆరోగ్యకరమైన భోజనం వండడంలో భాగస్వామ్యం చేయండి.</li>
          <li><strong>Identity shift:</strong> "నేను dieting చేస్తున్నాను" అనే ఆలోచన నుండి "నేను బాగా తినే మరియు active గా ఉండే వ్యక్తిని" అనే ఆలోచనకు మారండి. self-concept లో ఈ మార్పు నిలకడగా ఉండే ప్రవర్తన మార్పుకు అత్యంత బలమైన predictor.</li>
        </ul>
      </ExampleBlock>

      <ReferenceList references={references} />
    </div>
  );
}
