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

export default function GutBacteriaWeight() {
  return (
    <div className="prose-health">
      <h1>Gut Bacteria and Weight</h1>
      <p>
        The human gut harbors trillions of microorganisms — collectively known as the
        gut microbiome — that play a profound role in metabolism, energy extraction from
        food, fat storage, and appetite regulation. Emerging research reveals that the
        composition of your gut bacteria may be as important as what you eat in
        determining your body weight.
      </p>

      <DefinitionBlock
        term="Gut Microbiome"
        definition="The collective community of trillions of bacteria, archaea, fungi, and viruses residing in the gastrointestinal tract. In a healthy adult, the gut microbiome weighs approximately 1.5 to 2 kg and contains over 1,000 distinct bacterial species, encoding 100 times more genes than the human genome."
      />

      <h2>The Firmicutes-to-Bacteroidetes Ratio</h2>
      <p>
        Two major phyla dominate the human gut: Firmicutes and Bacteroidetes. The balance
        between these groups has emerged as a key marker associated with body weight and
        metabolic health.
      </p>

      <EvidenceBlock
        level="strong"
        source="Ley et al., 2006"
        finding="Obese individuals had a significantly higher proportion of Firmicutes and lower proportion of Bacteroidetes compared to lean individuals. When obese subjects lost weight through calorie-restricted diets, their Firmicutes-to-Bacteroidetes ratio shifted toward the pattern observed in lean subjects."
      />

      <EvidenceBlock
        level="strong"
        source="Turnbaugh et al., 2006"
        finding="The 'obese microbiome' demonstrated an increased capacity for energy harvest from food. Germ-free mice colonized with gut microbiota from obese mice extracted significantly more calories from the same diet compared to mice receiving microbiota from lean donors, resulting in greater fat deposition."
      />

      <NoteBlock title="What This Means">
        <p>
          Two people eating the exact same meal may absorb different amounts of
          calories based on their gut bacterial composition. An obese-type microbiome
          can extract up to 150 additional calories per day from the same food — enough
          to drive several kilograms of weight gain over a year.
        </p>
      </NoteBlock>

      <h2>Microbiome Diversity and Leanness</h2>
      <p>
        Beyond the ratio of specific bacterial groups, overall microbial diversity
        appears to be a powerful indicator of metabolic health.
      </p>

      <EvidenceBlock
        level="strong"
        source="Le Chatelier et al., 2013"
        finding="Individuals with low bacterial gene richness (low diversity) had more pronounced overall adiposity, insulin resistance, dyslipidemia, and a more marked inflammatory phenotype compared to high gene richness individuals. Approximately 23% of the non-obese population also had low microbial diversity and were at higher risk of future metabolic complications."
      />

      <ExampleBlock title="Factors That Reduce Gut Diversity">
        <ul>
          <li><strong>Antibiotic overuse:</strong> Frequent antibiotic courses, common in India due to over-the-counter availability, can devastate beneficial bacterial populations.</li>
          <li><strong>Ultra-processed foods:</strong> Packaged namkeens, instant noodles, bakery biscuits, and ready-to-eat meals lack the fiber that feeds diverse bacteria.</li>
          <li><strong>Low fiber intake:</strong> Refined atta, polished rice, and maida-based foods starve beneficial gut bacteria.</li>
          <li><strong>Chronic stress:</strong> Elevated cortisol alters gut bacterial composition and reduces diversity.</li>
          <li><strong>Sedentary lifestyle:</strong> Physical inactivity is independently associated with lower microbial diversity.</li>
        </ul>
      </ExampleBlock>

      <h2>Fecal Transplant Studies: Proof of Causation</h2>
      <p>
        While observational studies showed correlation between gut bacteria and weight,
        fecal microbiota transplant (FMT) experiments provided causal evidence.
      </p>

      <EvidenceBlock
        level="moderate"
        source="Ridaura et al., 2013"
        finding="Transplanting gut microbiota from human twins discordant for obesity into germ-free mice transmitted the lean or obese phenotype. Mice receiving the obese twin's microbiota gained significantly more fat. Remarkably, when co-housed, bacteria from the lean mice invaded the obese mice's guts and prevented fat gain — but only when the mice consumed a high-fiber, low-fat diet."
      />

      <EvidenceBlock
        level="moderate"
        source="Allegretti et al., 2020"
        finding="Fecal microbiota transplantation from lean donors to obese recipients showed modest improvements in insulin sensitivity and shifts in bile acid profiles, though significant weight loss was not consistently observed, suggesting that microbiome modification alone is insufficient without concurrent dietary changes."
      />

      <WarningBlock title="FMT Is Not a Weight Loss Treatment">
        <p>
          Despite promising research, fecal microbiota transplantation is not an
          approved treatment for obesity. It carries risks including infection
          transmission and unpredictable outcomes. The research value lies in proving
          that gut bacteria causally influence metabolism, not in providing a shortcut
          to weight loss.
        </p>
      </WarningBlock>

      <h2>Short-Chain Fatty Acids: The Microbial Metabolites</h2>
      <p>
        When gut bacteria ferment dietary fiber, they produce short-chain fatty acids
        (SCFAs) — primarily acetate, propionate, and butyrate — that have wide-ranging
        metabolic effects.
      </p>

      <DefinitionBlock
        term="Short-Chain Fatty Acids (SCFAs)"
        definition="Metabolic byproducts of bacterial fermentation of dietary fiber in the colon. Butyrate serves as the primary energy source for colonocytes, propionate participates in gluconeogenesis in the liver, and acetate enters peripheral circulation to influence appetite and fat metabolism."
      />

      <EvidenceBlock
        level="strong"
        source="Canfora et al., 2015"
        finding="SCFAs regulate body weight through multiple mechanisms: stimulating secretion of the satiety hormones GLP-1 and PYY, increasing fat oxidation, reducing systemic inflammation, improving gut barrier integrity, and enhancing insulin sensitivity. Butyrate in particular activates genes involved in fatty acid oxidation and thermogenesis."
      />

      <ExampleBlock title="Indian Foods That Boost SCFA Production">
        <ul>
          <li><strong>Whole dals and legumes:</strong> Rajma, chana, moong, and masoor provide resistant starch and soluble fiber that bacteria ferment into SCFAs.</li>
          <li><strong>Raw banana (kachha kela):</strong> Rich in resistant starch, a potent substrate for butyrate production.</li>
          <li><strong>Barley (jau):</strong> Contains beta-glucan fiber that significantly increases SCFA production. Traditional sattu made from roasted barley is an excellent choice.</li>
          <li><strong>Onion and garlic:</strong> Contain inulin and fructo-oligosaccharides that selectively feed beneficial bacteria.</li>
          <li><strong>Whole grains:</strong> Bajra, jowar, ragi, and unpolished rice provide fiber substrates absent in refined alternatives.</li>
        </ul>
      </ExampleBlock>

      <h2>The Indian Microbiome: Unique Characteristics</h2>

      <EvidenceBlock
        level="moderate"
        source="Dhakan et al., 2019"
        finding="The Indian gut microbiome showed unique characteristics distinct from Western populations, with higher abundance of Prevotella (associated with plant-based diets) and enrichment of genes for degradation of complex plant carbohydrates. Indian subjects showed significant regional variation correlated with dietary patterns — tribal and rural populations had greater diversity compared to urban populations consuming more processed foods."
      />

      <NoteBlock title="Urbanization and the Indian Gut">
        <p>
          As Indians shift from traditional diets rich in millets, legumes, and
          fermented foods toward urban diets dominated by refined grains, processed
          snacks, and reduced fiber intake, microbiome diversity declines. This dietary
          transition, occurring rapidly across Indian cities, may partly explain the
          rising rates of obesity, diabetes, and metabolic syndrome in urban India.
          Preserving traditional dietary elements is not just cultural — it is a
          microbiome preservation strategy.
        </p>
      </NoteBlock>

      <h2>Key Takeaways</h2>
      <ExampleBlock title="Actions to Support a Weight-Friendly Microbiome">
        <ul>
          <li>Eat 25-30 grams of fiber daily from diverse whole food sources — dals, vegetables, whole grains, and fruits.</li>
          <li>Include fermented foods like dahi, idli, dosa, and kanji regularly to introduce beneficial bacteria.</li>
          <li>Avoid unnecessary antibiotics — consult a doctor rather than self-medicating.</li>
          <li>Minimize ultra-processed and packaged foods that reduce microbial diversity.</li>
          <li>Stay physically active — even moderate daily walking improves gut bacterial diversity.</li>
        </ul>
      </ExampleBlock>

      <ReferenceList references={references} />
    </div>
  );
}
