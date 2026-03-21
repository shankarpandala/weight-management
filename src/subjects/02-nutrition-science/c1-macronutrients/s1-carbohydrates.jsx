import React from 'react';
import DefinitionBlock from '../../../components/content/DefinitionBlock.jsx';
import EvidenceBlock from '../../../components/content/EvidenceBlock.jsx';
import ExampleBlock from '../../../components/content/ExampleBlock.jsx';
import NoteBlock from '../../../components/content/NoteBlock.jsx';
import WarningBlock from '../../../components/content/WarningBlock.jsx';
import ReferenceList from '../../../components/content/ReferenceList.jsx';
import ComparisonTable from '../../../components/content/ComparisonTable.jsx';
import NutritionFactBlock from '../../../components/content/NutritionFactBlock.jsx';

const references = [
  {
    authors: 'Ludwig DS, Hu FB, Tappy L, Brand-Miller J',
    year: 2018,
    title: 'Dietary carbohydrates: role of quality and quantity in chronic disease',
    source: 'BMJ, 361, k2340',
    type: 'review',
  },
  {
    authors: 'Jenkins DJ, Wolever TM, Taylor RH, Barker H, Fielden H, Baldwin JM, Bowling AC, Newman HC, Jenkins AL, Goff DV',
    year: 1981,
    title: 'Glycemic index of foods: a physiological basis for carbohydrate exchange',
    source: 'American Journal of Clinical Nutrition, 34(3), 362-366',
    type: 'foundational',
  },
  {
    authors: 'Reynolds A, Mann J, Cummings J, Winter N, Mete E, Te Morenga L',
    year: 2019,
    title: 'Carbohydrate quality and human health: a series of systematic reviews and meta-analyses',
    source: 'The Lancet, 393(10170), 434-445',
    type: 'review',
  },
  {
    authors: 'Misra A, Sharma R, Gulati S, Joshi SR, Sharma V, Ibrahim A, Joshi S, Laxmaiah A, Kurpad A, Raj RK, Mohan V',
    year: 2011,
    title: 'Consensus dietary guidelines for healthy living and prevention of obesity, the metabolic syndrome, diabetes, and related disorders in Asian Indians',
    source: 'Diabetes Technology & Therapeutics, 13(6), 683-694',
    type: 'clinical',
  },
  {
    authors: 'Atkinson FS, Brand-Miller JC, Foster-Powell K, Buyken AE, Goletzke J',
    year: 2021,
    title: 'International tables of glycemic index and glycemic load values 2021: a systematic review',
    source: 'American Journal of Clinical Nutrition, 114(5), 1625-1632',
    type: 'review',
  },
  {
    authors: 'Slavin JL',
    year: 2005,
    title: 'Dietary fiber and body weight',
    source: 'Nutrition, 21(3), 411-418',
    type: 'review',
  },
  {
    authors: 'National Institute of Nutrition (NIN)',
    year: 2020,
    title: 'Dietary Guidelines for Indians - A Manual',
    source: 'Indian Council of Medical Research, Hyderabad',
    type: 'foundational',
  },
];

export default function Carbohydrates() {
  return (
    <div className="prose-health">
      <h1>Carbohydrates</h1>

      <p>
        Carbohydrates are the body's primary and preferred source of energy, providing
        4 kilocalories per gram. They are the most abundant macronutrient in most diets
        worldwide, and this is particularly true for Indian diets, where carbohydrates
        typically contribute 60-70% of total caloric intake. Understanding the different
        types of carbohydrates, their metabolic effects, and their role in weight management
        is essential for making evidence-based dietary choices.
      </p>

      <DefinitionBlock
        title="Carbohydrates"
        definition="Organic compounds composed of carbon, hydrogen, and oxygen atoms, typically with a hydrogen-to-oxygen ratio of 2:1. They serve as the body's primary fuel source and are classified by their molecular structure into simple carbohydrates (monosaccharides and disaccharides) and complex carbohydrates (oligosaccharides and polysaccharides)."
        notation="Energy yield: 4 kcal/g (17 kJ/g). RDA: 130 g/day minimum for adults (based on brain glucose requirements). ICMR recommends 55-60% of total energy from carbohydrates for Indians."
      />

      <h2>Simple vs Complex Carbohydrates</h2>

      <h3>Simple Carbohydrates</h3>
      <p>
        Simple carbohydrates consist of one or two sugar units. Monosaccharides include
        glucose (blood sugar), fructose (fruit sugar), and galactose (milk sugar).
        Disaccharides include sucrose (table sugar, composed of glucose and fructose),
        lactose (milk sugar, composed of glucose and galactose), and maltose (malt sugar,
        composed of two glucose units). These sugars are rapidly digested and absorbed,
        causing a quick rise in blood glucose levels.
      </p>

      <p>
        While simple carbohydrates from whole fruits come packaged with fiber, vitamins,
        and phytochemicals that moderate their metabolic impact, added sugars and refined
        simple carbohydrates lack these protective co-nutrients. The WHO recommends limiting
        free sugars to less than 10% of total energy intake, with additional health benefits
        seen at less than 5%.
      </p>

      <h3>Complex Carbohydrates</h3>
      <p>
        Complex carbohydrates are polysaccharides composed of long chains of glucose units.
        Starch, the primary storage form of energy in plants, is found abundantly in grains,
        legumes, and tubers. Glycogen is the animal storage form, found in small amounts in
        meat and liver. Complex carbohydrates generally require more time for enzymatic
        breakdown, leading to a more gradual release of glucose into the bloodstream.
      </p>

      <p>
        However, the simple-versus-complex distinction is an oversimplification. Highly
        refined complex carbohydrates such as white rice and maida (refined wheat flour)
        can be digested almost as rapidly as simple sugars, while some simple carbohydrates
        in whole fruit are absorbed slowly due to their fiber matrix. This limitation led
        to the development of the glycemic index as a more nuanced classification system.
      </p>

      <ComparisonTable
        title="Simple vs Complex Carbohydrates"
        headers={['Property', 'Simple Carbohydrates', 'Complex Carbohydrates']}
        rows={[
          ['Structure', '1-2 sugar units', 'Long chains of sugar units'],
          ['Digestion speed', 'Rapid', 'Generally slower'],
          ['Blood sugar impact', 'Quick spike', 'More gradual rise'],
          ['Satiety', 'Lower', 'Generally higher'],
          ['Examples (Indian)', 'Jaggery, sugar, honey, fruit juice', 'Rice, roti, dal, oats, bajra'],
          ['Fiber content', 'Usually low (except whole fruits)', 'Variable (high in whole grains)'],
        ]}
      />

      <h2>The Glycemic Index</h2>

      <p>
        The glycemic index (GI) is a ranking system that classifies carbohydrate-containing
        foods based on their effect on blood glucose levels in the two hours after consumption.
        Pure glucose is assigned a GI of 100, and all other foods are ranked relative to it.
        Foods are classified as low GI (55 or less), medium GI (56-69), or high GI (70 or above).
      </p>

      <DefinitionBlock
        title="Glycemic Index (GI)"
        definition="A numerical scale from 0 to 100 that ranks carbohydrate-containing foods by how much they raise blood glucose levels compared to a reference food (glucose or white bread). It is measured by feeding a portion of food containing 50 g of available carbohydrate to healthy volunteers and measuring the incremental area under the blood glucose response curve over two hours."
        notation="Low GI: 55 or less. Medium GI: 56-69. High GI: 70 or above. Glycemic Load (GL) = GI x grams of carbohydrate per serving / 100."
      />

      <EvidenceBlock
        title="Glycemic Index: The Original Research"
        finding="Different carbohydrate-containing foods, even with the same amount of carbohydrate, produce vastly different blood glucose responses. The glycemic index provides a physiological basis for classifying carbohydrates that is more meaningful than the simple-versus-complex distinction."
        study="Landmark study establishing the glycemic index concept using controlled feeding trials"
        source="Jenkins et al. (1981) American Journal of Clinical Nutrition"
        details="Jenkins and colleagues fed 62 commonly eaten foods to groups of 5-10 healthy volunteers and measured blood glucose responses over 2 hours. They found that the blood glucose response to foods like white bread and potatoes was as high as or higher than many simple sugars, while legumes produced remarkably low responses despite being starch-rich. This finding challenged the prevailing assumption that complex carbohydrates universally produced slower glucose responses than simple sugars."
      />

      <h3>GI of Common Indian Foods</h3>

      <ComparisonTable
        title="Glycemic Index of Common Indian Foods"
        headers={['Food', 'GI Value', 'Category', 'Typical Serving']}
        rows={[
          ['White rice (polished)', '73', 'High', '1 katori (150 g cooked)'],
          ['Brown rice', '50', 'Low', '1 katori (150 g cooked)'],
          ['Whole wheat roti', '62', 'Medium', '1 medium (30 g flour)'],
          ['White bread', '75', 'High', '2 slices (60 g)'],
          ['Bajra (pearl millet) roti', '55', 'Low', '1 medium (30 g flour)'],
          ['Jowar (sorghum) roti', '62', 'Medium', '1 medium (30 g flour)'],
          ['Rajma (kidney beans)', '28', 'Low', '1 katori (100 g cooked)'],
          ['Chana dal', '11', 'Low', '1 katori (100 g cooked)'],
          ['Potato (boiled)', '78', 'High', '1 medium (150 g)'],
          ['Sweet potato (boiled)', '63', 'Medium', '1 medium (150 g)'],
        ]}
      />

      <ExampleBlock
        title="Glycemic Index in Indian Meals"
        problem="A typical South Indian breakfast of idli (GI ~70) with sambar significantly lowers the overall glycemic response compared to idli alone. The protein and fiber from dal in sambar, along with fat, slow gastric emptying and glucose absorption. Similarly, adding a tablespoon of ghee to rice reduces the GI of the meal. This demonstrates why the GI of a mixed meal is more relevant than the GI of individual foods. Traditional Indian meal structures — combining cereals with dal, vegetables, and a fat source — naturally moderate glycemic responses."
      />

      <h2>Glycemic Load</h2>

      <p>
        While the glycemic index measures the quality of carbohydrate, it does not account
        for the quantity consumed. A food may have a high GI but contain very little
        carbohydrate per typical serving. Glycemic load (GL) addresses this by multiplying
        the GI by the grams of carbohydrate in a serving and dividing by 100. A GL of 10 or
        less is considered low, 11-19 is medium, and 20 or above is high.
      </p>

      <p>
        Watermelon, for example, has a high GI of about 76, but a typical serving contains
        only about 6 grams of carbohydrate, giving it a GL of just 5 (low). In contrast,
        a large serving of white rice (300 g cooked) has both a high GI (73) and a high GL
        (approximately 43), making it a major contributor to postprandial glucose spikes.
      </p>

      <h2>Dietary Fiber</h2>

      <p>
        Dietary fiber comprises the non-digestible carbohydrate components of plant foods.
        Unlike starch and sugars, fiber passes through the small intestine without being
        broken down by human digestive enzymes. Despite providing minimal direct energy
        (approximately 2 kcal/g from short-chain fatty acid production via colonic
        fermentation), fiber plays a critical role in health and weight management.
      </p>

      <h3>Soluble Fiber</h3>
      <p>
        Soluble fiber dissolves in water to form a viscous gel in the digestive tract. This
        gel slows gastric emptying, delays glucose absorption (lowering postprandial blood
        sugar), and binds bile acids (helping reduce LDL cholesterol). Good Indian sources
        include oats, barley, rajma, chana, methi (fenugreek) seeds, and fruits like guava
        and apples. The ICMR recommends a total fiber intake of 40 g/day for Indians.
      </p>

      <h3>Insoluble Fiber</h3>
      <p>
        Insoluble fiber adds bulk to stool and accelerates intestinal transit, preventing
        constipation and reducing the risk of colorectal cancer. It is found in whole wheat
        bran, the skins of fruits and vegetables, and whole millets. Insoluble fiber also
        contributes to satiety by adding volume to meals without adding calories.
      </p>

      <EvidenceBlock
        title="Fiber and Health Outcomes"
        finding="Each 8 g/day increase in dietary fiber intake was associated with a 5-27% reduction in the risk of coronary heart disease, type 2 diabetes, colorectal cancer, and all-cause mortality. Higher fiber intake was also associated with lower body weight."
        study="Series of systematic reviews and meta-analyses of prospective studies and clinical trials spanning nearly 40 years of evidence"
        source="Reynolds et al. (2019) The Lancet"
        details="This comprehensive review, commissioned by the WHO, analyzed 185 prospective studies and 58 clinical trials. The greatest risk reductions were observed with daily fiber intakes of 25-29 g, with dose-response curves suggesting further benefits at higher intakes. Whole grains showed the strongest and most consistent protective associations. The authors concluded that dietary fiber intake is a critical determinant of long-term health outcomes."
      />

      <EvidenceBlock
        title="Fiber and Body Weight"
        finding="Increased dietary fiber intake consistently reduces body weight and body fat. Fiber promotes satiety through multiple mechanisms: adding bulk and volume to meals, slowing gastric emptying, and triggering release of satiety hormones (GLP-1, PYY)."
        study="Review of clinical and epidemiological evidence on dietary fiber and body weight regulation"
        source="Slavin (2005) Nutrition"
        details="The review found that most interventional studies demonstrated that increasing fiber intake by 14 g/day was associated with a 10% decrease in energy intake and a body weight loss of approximately 1.9 kg over 3.8 months. The effects were more pronounced in obese individuals. Viscous soluble fibers (such as those in oats and legumes) were particularly effective at reducing appetite and energy intake."
      />

      <h2>Carbohydrates in the Indian Diet</h2>

      <p>
        The traditional Indian diet is carbohydrate-dominant, with rice and wheat serving as
        dietary staples across different regions. In many Indian diets, carbohydrates contribute
        65-75% of total calories, which exceeds the ICMR recommendation of 55-60%. This high
        carbohydrate load, particularly from refined sources like polished rice and maida, is
        considered a contributing factor to the high prevalence of type 2 diabetes in India.
      </p>

      <NutritionFactBlock
        food="Whole Wheat Roti (1 medium)"
        serving="30 g flour, ~40 g cooked"
        calories={100}
        protein={3.5}
        carbs={20}
        fat={0.5}
        fiber={3}
        highlights={[
          'Medium GI (62) - better than white bread',
          'Good source of B vitamins and iron (when unrefined)',
          'Pair with dal for complementary amino acids',
        ]}
      />

      <NutritionFactBlock
        food="Cooked White Rice (1 katori)"
        serving="150 g cooked (approx 50 g raw)"
        calories={180}
        protein={3.5}
        carbs={40}
        fat={0.3}
        fiber={0.5}
        highlights={[
          'High GI (73) - causes rapid blood sugar rise',
          'Very low fiber due to removal of bran',
          'Consider replacing with brown rice, millets, or reducing portion size',
        ]}
      />

      <WarningBlock
        title="The Indian Diabetes Epidemic and Carbohydrate Quality">
        India has over 100 million adults with type 2 diabetes, and carbohydrate quality is a significant modifiable risk factor. Asian Indians show insulin resistance at lower BMI values than Western populations, making them more susceptible to the metabolic effects of high-GI, refined carbohydrates. The ICMR consensus guidelines recommend replacing refined cereals with whole grains and millets, increasing dal and vegetable intake, and limiting total carbohydrate to 55-60% of calories for diabetes prevention.
      </WarningBlock>

      <ExampleBlock
        title="Practical Swaps for Better Carbohydrate Quality"
        problem="Replace polished white rice with hand-pounded rice, brown rice, or a mix of rice and millets (bajra, jowar, ragi). Use whole wheat atta instead of maida for rotis and parathas. Choose traditional preparations like dalia (broken wheat porridge), poha made from flattened rice with vegetables, or ragi mudde. Increase the proportion of dal relative to rice in meals. Add vegetables like lauki, bhindi, or beans to parathas and rice dishes to increase fiber content and reduce the glycemic load of the meal."
      />

      <h2>Carbohydrates and Weight Management</h2>

      <p>
        The role of carbohydrates in weight management has been debated extensively. Some
        popular diets advocate severe carbohydrate restriction (ketogenic and low-carb diets),
        while others emphasize carbohydrate quality rather than quantity. The scientific
        evidence suggests that both total caloric intake and carbohydrate quality matter, but
        that the overall energy balance remains the primary determinant of weight change.
      </p>

      <p>
        High-fiber, low-GI carbohydrate sources promote weight management through several
        mechanisms: greater satiety per calorie, slower digestion leading to sustained energy,
        lower insulin responses (reducing lipogenesis), and beneficial effects on the gut
        microbiome. Conversely, refined, high-GI carbohydrates tend to promote overeating
        through rapid blood sugar spikes and crashes, low satiety, and hyperinsulinemia.
      </p>

      <NoteBlock
        title="Resistant Starch">
        Resistant starch is a type of starch that resists digestion in the small intestine and functions like soluble fiber. It is found naturally in raw potatoes, green bananas, and legumes, and is also formed when starchy foods like rice and potatoes are cooked and then cooled (retrogradation). This is why leftover cold rice has a lower glycemic impact than freshly cooked rice. In Indian cooking, dishes like cold rice salads or day-old roti may provide additional resistant starch benefits.
      </NoteBlock>

      <h2>Key Takeaways</h2>

      <ul>
        <li>
          Carbohydrates provide 4 kcal/g and are the body's preferred energy source, particularly
          for the brain and during high-intensity exercise.
        </li>
        <li>
          The simple-versus-complex classification is less useful than the glycemic index and
          glycemic load for predicting metabolic effects.
        </li>
        <li>
          Dietary fiber (both soluble and insoluble) is consistently associated with lower body
          weight, reduced disease risk, and improved satiety. Aim for at least 25-40 g/day.
        </li>
        <li>
          Indian diets tend to be carbohydrate-heavy; focusing on quality (whole grains, millets,
          legumes) over quantity is critical for metabolic health.
        </li>
        <li>
          Traditional Indian meal structures — combining cereals with dal, vegetables, and fat
          — naturally moderate glycemic responses and should be preserved.
        </li>
        <li>
          For weight management, carbohydrate quality and total caloric intake both matter;
          neither extreme restriction nor unlimited consumption of refined carbohydrates is optimal.
        </li>
      </ul>

      <ReferenceList references={references} />
    </div>
  );
}
