import React from "react";
//import { useSafeArea } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, Image, View } from "react-native";
import { Text } from "react-native-elements";
import { theme } from "../../constants";
import supScript from "../../shared/TextUtils";

import Images from "../Images";
import {
  DrawerItem as DrawerCustomItem,
  Button,
  CheckBox,
} from "../../components";

export function healthyEatPage({ navigation, ...rest }) {
  const condName = "Nutrition / Healthy Eating";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Healthyeatingandwomen.jpg?VersionId=4TaOhZNuUK7we3uOtO6_CYCDEQyvP3Sr";
  const condDescription =
    "The basics of healthy eating and good nutrition are the same for women and men: Choose healthy foods most of the time and limit the amount of unhealthy foods you eat. But women have some unique nutritional needs, especially in different stages of life. And healthy eating can be difficult to fit into your everyday life. We've got answers to your questions about healthy eating.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Healthyeatingandwomen.jpg?VersionId=4TaOhZNuUK7we3uOtO6_CYCDEQyvP3Sr"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Healthy eating and women</h1>  -->
            <p><strong>The food and drink choices you make every day affect your health now and later in life.</strong><strong> </strong>Choosing healthy foods and drinks more often can help prevent or manage many health problems that affect women. And studies show that when a woman eats healthy, everyone in her household is more likely to eat healthy.<sup><a href="#references">1</a>,<a href="#references">2</a></sup></p>

                    </div>
    </div>

<div style="text-align: right; padding: 1rem 0px;"><button class="usa-button">Expand All</button></div><div class="qa-wrapper">
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
      </div>
      </div>
          </div>
        </div>
      
      </article>`; //  this is html
  const condQA = [
    {
      title: "What is healthy eating?",
      content: `

    <div class="answer"><p>Healthy eating is a way of eating that improves your health and helps prevent disease. It means choosing different types of <a href="/healthy-eating/how-eat-health/healthy-eating-plan-women">healthy food from all of the food groups</a>&nbsp;(fruits, vegetables, grains, dairy, and proteins), most of the time, in the correct amounts for you. Healthy eating also means not eating a lot of foods with added sugar, sodium (salt), and saturated and trans fats.</p>

<p>Healthy eating also means getting nutrients primarily from food rather than from vitamins or other supplements. Some women might need vitamins, minerals, or other supplements at certain times in life like before or during pregnancy. But most women, most of the time, should get their essential nutrients from what they eat and drink.</p>

<p>What you eat and drink is influenced by where you live, the types of foods available in your community and in your budget, your culture and background, and your personal preferences. Often, healthy eating is affected by things that are not directly under your control, like how close the grocery store is to your house or job. Focusing on the choices you can control will help you make small changes in your daily life to eat healthier.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How many calories do I need?",
      content: `

    <div class="answer"><p>The amount of calories you need is based on your physical activity level, age, height, weight, and other unique health considerations, such as whether you are pregnant or breastfeeding.</p>

<p>To get a personalized calorie recommendation, use the&nbsp;<a href="https://www.choosemyplate.gov/myplateplan">MyPlate Plan</a> tool.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What does healthy eating look like?",
      content: `

    <div class="answer"><p>Use <a href="https://choosemyplate-prod.azureedge.net/sites/default/files/printablematerials/mini_poster.pdf" title="My Plate, My Wins: Make It Yours" class="external-link external-popup" target="_blank">MyPlate <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;(PDF, 281 KB) as a guide to build a healthy diet. Think about filling your plate with foods from the five&nbsp;food groups — fruits, vegetables, grains, proteins, and dairy — at each meal. Snacks can be a good way to fill in fruits and whole grains you might have missed at meals. Most of us don’t need complicated calorie counting programs or special recipes for healthy eating.</p>

<p>Some simple tips to improve your eating habits are to eat more vegetables, snack on fruit more often, and cook at home more each week.</p>

<ul>
	<li><strong>Fruits and vegetables.</strong> Everyone needs to eat fruits and vegetables every day. Try to fill about half of your plate with fruits or vegetables at meals. Most women do not get enough fruits and vegetables.<a href="#references"><sup>3</sup></a> Eat whole fruit (not juice) and try different types of vegetables during the week.</li>
	<li><strong>Protein.</strong> Eat different types of foods with protein, including seafood, lean meats, poultry, eggs, legumes (beans and peas), nuts, seeds, and soy products. Most women do not eat enough seafood to meet weekly recommendations of 8 to 10 ounces (or about two servings a week).<sup><a href="#references">4</a></sup></li>
	<li><strong>Grains.</strong> Make at least half your grains whole grains, such as brown rice, whole-wheat pasta, or whole-wheat bread. Most women do not eat enough whole grains.<sup><a href="#references">5</a></sup></li>
	<li><strong>Dairy.</strong> Women should get 3 cups of dairy each day, but most women get only half that amount.<a href="#references"><sup>6</sup></a> If you can’t drink milk, try to eat low-fat plain yogurt or low-fat cheese. Dairy products are among the best food sources of the mineral calcium, but some vegetables such as kale and broccoli also have calcium, as do some fortified foods such as fortified soymilk, fortified cereals, and many fruit juices. Most girls ages 9 to 18 and women older than 50 need more calcium for good bone health.</li>
	<li><strong>Oils.</strong> When cooking try to use oils from plants instead of solid fats like butter, margarine, or coconut oil. See this <a href="https://health.gov/dietaryguidelines/2015/guidelines/chapter-1/a-closer-look-inside-healthy-eating-patterns/#callout-dietary-fats" title="A Closer Look Inside Healthy Eating Patterns">list of oils and fats</a>&nbsp;to see how healthy each type of cooking oil and solid fat is. Most women eat too much solid fat through packaged foods like chips or salad dressing, and not enough healthy fats like olive oil or the type of fat in seafood.</li>
</ul>

<p>Healthy eating means not eating a lot of food with added sugars, saturated and trans fat, and sodium (salt). Healthy eating means eating fruits, vegetables, whole grains, healthy types of protein and dairy and not eating or drinking too many calories for your body type.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Does healthy eating include a specific diet or type of food? ",
      content: `

    <div class="answer"><p>No. There is no one special ingredient or vitamin that will make you healthy and cure illness. One of the keys to healthy eating is your overall pattern of eating.</p>

<p>You don’t have to spend a lot of money, follow a very strict diet, or eat only specific types of food to eat healthy. Healthy eating is <strong>not</strong> about skipping meals or certain nutrients. Healthy eating is not limited to certain types of food, like organic, gluten-free, or enriched food. It is not limited to certain patterns of eating, such as high protein.</p>

<p>You also do not have to stop eating all of your favorite foods. You can eat a variety of foods, including less healthy favorites, as long as you don’t eat them all the time and keep the amount small.</p>

<p>Some diets have been shown by researchers to prevent disease and help people reach and maintain a healthy weight. Get started with one of these:</p>

<ul>
	<li><a href="https://health.gov/dietaryguidelines/2015/guidelines/appendix-3/" title="Appendix 3. USDA Food Patterns: Healthy U.S.-Style Eating Pattern">Healthy U.S.-style eating plan</a></li>
	<li><a href="https://health.gov/dietaryguidelines/2015/guidelines/appendix-4/" title="Appendix 4. USDA Food Patterns: Healthy Mediterranean-Style Eating Pattern">Mediterranean-style eating plan</a></li>
	<li><a href="https://health.gov/dietaryguidelines/2015/guidelines/appendix-5/" title="Appendix 5. USDA Food Patterns: Healthy Vegetarian Eating Pattern">Vegetarian eating plan</a>&nbsp;</li>
	<li><a href="https://www.nhlbi.nih.gov/health-topics/dash-eating-plan" title="DASH Eating Plan">DASH diet</a>&nbsp;(Dietary Approaches to Stop Hypertension)</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Why is healthy eating important for everyone? ",
      content: `

    <div class="answer expanded"><p>Healthy eating helps:</p>

<ul>
	<li>Your body and brain get the energy you need to think and be physically active</li>
	<li>Your body get the essential vitamins and minerals you need to stay alive and healthy. For example, your body needs iron to help deliver oxygen to all of your muscles and organs. Vitamin C helps your body make new skin cells and collagen. Vitamin A helps you see better at night.</li>
	<li>You reach and maintain a healthy weight</li>
	<li>Lower your risk of diseases, such as <a href="/heart-disease-and-stroke/heart-disease">heart disease</a> and <a href="/a-z-topics/diabetes">diabetes</a></li>
</ul>

<p>The old saying “you are what you eat” is true. What you eat and drink become the building blocks for all of the cells in your body. Over time, your food and drink choices make a difference in your health.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What unique nutritional needs do women have?",
      content: `

    <div class="answer"><p>Women have some unique nutritional needs, including needing more of certain vitamins and minerals during pregnancy or after menopause.</p>

<ul>
	<li><strong>Calories. </strong>Most times, women need fewer <a href="/glossary#calorie">calories</a>. That’s because women naturally have less muscle, more body fat, and are usually smaller. On average, adult women need between 1,600 and 2,400 calories a day. Women who are more physically active may need more calories. <a href="https://www.choosemyplate.gov/MyPlate-Daily-Checklist-input" title="ChooseMyPlate.gov">Find out how many calories you need each day</a>, based on your age, height, weight, and activity level.</li>
	<li><a href="/healthy-eating/how-eat-health/vitamins-and-minerals-women"><strong>Vitamins and minerals.</strong></a> Calcium, iron, and folic acid are particularly important for women.</li>
	<li><strong>Reproductive health.</strong> Women have different nutritional needs&nbsp;during different stages of life, such as during <a href="/pregnancy/index.html">pregnancy</a> and <a href="/breastfeeding/breastfeeding-home-work-and-public/breastfeeding-and-everyday-life">breastfeeding</a> or after <a href="/menopause/">menopause</a>.&nbsp;</li>
	<li><strong>Health problems. </strong>Women are more likely to have some health problems related to nutrition, such as <a href="/healthy-eating/food-allergies-and-sensitivities/celiac-disease-and-gluten-intolerance">celiac disease</a>&nbsp;and <a href="/healthy-eating/food-allergies-and-sensitivities/lactose-intolerance">lactose intolerance</a>, and vitamin and mineral deficiencies, such as <a href="/a-z-topics/iron-deficiency-anemia">iron-deficiency anemia</a>.&nbsp;</li>
	<li><strong>Metabolism.</strong> Women process some substances differently and burn fewer calories at rest and during exercise than men do.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do my nutritional needs change throughout life?",
      content: `

    <div class="answer"><p>Women’s nutritional needs change as our bodies change during different stages of our lives.</p>

<ul>
	<li><strong>During the teen years.</strong><sup><a href="#references">7</a></sup> Girls ages 9 to 18 need more calcium and vitamin D to build strong bones and help prevent <a href="/glossary#osteoporosis">osteoporosis</a> later in life. Girls need 1,300 milligrams (mg) of calcium and 600 international units (IUs) of vitamin D every day.<sup><a href="#references">8</a>,<a href="#references">9</a></sup> Girls ages 14 to 18 also need more <a href="/healthy-eating/how-eat-health/vitamins-and-minerals-women">iron</a>&nbsp;than boys (15 mg compared to 11 mg).<sup><a href="#references">10</a></sup></li>
	<li><strong>Young adults.</strong> Teen girls and young women usually need more calories than when they were younger, to support their growing and developing bodies. After about age 25, a woman’s resting metabolism (the number of calories her body needs to sustain itself at rest) goes down. To maintain a healthy weight after age 25, women need to gradually reduce their calories and increase their physical activity.</li>
	<li><strong>Before and during pregnancy. </strong>You need more of certain nutrients than usual to support your health and your baby’s development. These nutrients include protein, calcium, iron, and <a href="/a-z-topics/folic-acid">folic acid</a>. Many doctors recommend prenatal vitamins or a folic acid supplement during this time. Many health insurance plans also <a href="https://www.healthcare.gov/preventive-care-women/" title="Preventive care benefits for women">cover folic acid supplements</a>&nbsp;prescribed by your doctor during pregnancy. You also need to avoid some foods, such as <a href="https://www.fda.gov/Food/FoodborneIllnessContaminants/Metals/ucm393070.htm" title="Eating Fish: What Pregnant Women and Parents Should Know">certain kinds of fish</a>. Learn more about <a href="http://www.womenshealth.gov/pregnancy/you-are-pregnant/staying-healthy-safe.html">healthy eating during pregnancy</a> in our Pregnancy section.</li>
	<li><strong>During breastfeeding. </strong>Continue eating healthy foods while breastfeeding. You may also need to drink more water. Nursing mothers may need about 13 cups of water a day. Try drinking a glass of water every time you nurse and with each meal. Read more about <a href="/breastfeeding/breastfeeding-home-work-and-public/breastfeeding-and-everyday-life">healthy eating during breastfeeding</a> in our Breastfeeding section.&nbsp;</li>
	<li><strong>After menopause.</strong> Lower levels of <a href="/glossary#estrogen">estrogen</a> &nbsp;after menopause raise your risk for chronic diseases such as heart disease, stroke, and diabetes, and <a href="/a-z-topics/osteoporosis">osteoporosis</a>, a condition that causes your bones to become weak and break easily. What you eat also affects these chronic diseases. Talk to your doctor about healthy eating plans and whether you need more calcium and vitamin D to protect your bones. Read more about how very low <a href="/menopause/menopause-basics/index.html">estrogen levels affect your health</a> in our Menopause section. Most women also need fewer calories as they age, because of less muscle and less physical activity. Use the MyPlate Plan tool to find out&nbsp;<a href="https://www.choosemyplate.gov/MyPlate-Daily-Checklist-input" target="_blank" title="ChooseMyPlate">how many calories you need</a>&nbsp;based on your level of activity.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How much fiber should I eat?",
      content: `

    <div class="answer"><p>Fiber is an important part of an overall healthy eating plan. Good sources of fiber include fortified cereal, many whole-grain breads, beans, fruits (especially berries), dark green leafy vegetables, all types of squash, and nuts. Look on the Nutrition Facts label for fiber content in processed foods like cereals and breads. Use the search tool on <a href="https://ndb.nal.usda.gov/ndb/search/list" title="Food Composition Databases Show Foods List">this USDA page</a>&nbsp;to find the amount of fiber in whole foods like fruits and vegetables.</p>

<p>Most women do not get enough fiber.<sup><a href="#references">11</a></sup></p>

<ul>
	<li>Women ages 19 to 30 need 28 grams of fiber every day.</li>
	<li>Women ages 31 to 50 need 25 grams of fiber every day.</li>
	<li>Women age 51 or older need 22 grams of fiber every day.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Why is fiber good for women’s health?",
      content: `

    <div class="answer"><p>Not getting enough fiber can lead to constipation and can raise your risk for other health problems. Part of healthy eating is choosing fiber-rich foods, including beans, berries, and dark green leafy vegetables, every day. Fiber helps lower your risk for diseases that affect many women, such as <a href="/heart-disease-and-stroke/heart-disease">heart disease</a>, <a href="/a-z-topics/diabetes">diabetes</a>, <a href="/a-z-topics/irritable-bowel-syndrome">irritable bowel syndrome</a>, and <a href="/glossary#colon_cancer">colon cancer</a>. Fiber also helps you feel full, so it can help you reach and maintain a healthy weight.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Why is seafood good for women’s health?",
      content: `

    <div class="answer"><p>In addition to other nutrients, seafood has two important omega-3 fatty acids: eicosapentaenoic acid and docosahexaenoic acid, more commonly called EPA and DHA. These fatty acids may affect:<sup><a href="#references">12</a>,<a href="#references">13</a></sup></p>

<ul>
	<li>Risk for heart disease</li>
	<li>Risk for <a href="/glossary#preterm_birth">preterm birth</a> (also called premature birth)</li>
	<li>Growth and development in unborn babies and breastfed infants</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I get enough omega-3 fatty acids?",
      content: `

    <div class="answer"><p>Here are some ways to get omega-3 fatty acids:</p>

<ul>
	<li><strong>Eat seafood.</strong> Salmon, tuna, trout, anchovies, and sardines have high amounts of omega-3 fatty acids. One way to get more seafood is to make it your main protein choice a couple of times a week.</li>
	<li><strong>Eat nuts, seeds, and oils with omega-3 fatty acids.</strong> Foods high in omega-3 fatty acids include walnuts, flaxseeds, flaxseed oil, soybean oil and canola oil.</li>
	<li><strong>Eat foods with added omega-3 fatty acids.</strong> Some foods may have added omega-3 fatty acids (called “fortified” on the label), including some types of eggs, yogurt, juices, milk, or soy beverages.&nbsp;</li>
	<li><strong>Take a fish oil supplement.</strong> If it’s difficult to get enough omega-3 fatty acids from food, your doctor or nurse may recommend a supplement (an over-the-counter pill). Vegetarian women who do not eat seafood especially may benefit from vegetarian omega-3 supplements.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Are low-fat or low-carb diets safe for women?",
      content: `

    <div class="answer"><p>Yes, low-fat and low-carbohydrate (carb) diets can be safe, but you should always talk to your doctor or nurse before limiting the amount of any specific nutrient like fat or carbs. Fats and carbs are essential, which means your body needs them to work correctly and for good health.</p>

<ul>
	<li><strong>Low-carb diets can help you lose weight,</strong><sup><a href="#references">14</a></sup> but they can also limit the amount of fiber you get each day. Most women do not get enough fiber. Low-carb diets can also be difficult to continue for the long term.<sup><a href="#references">15</a></sup> Carbohydrates are a type of essential nutrient, meaning that your body has to have carbs to work correctly.</li>
	<li><strong>Low-fat diets also can help you lose weight.</strong><sup>16</sup> But the amount of weight lost is usually small. You can lose weight and lower your risk for heart disease and stroke if you follow an overall healthy pattern of eating that includes more fruits, vegetables, whole grains and beans that are high in fiber, nuts, low-fat dairy and fish, in addition to staying away from <a href="/glossary#trans_fats">trans fat</a> and <a href="/glossary#saturated_fats">saturated fat</a>.</li>
</ul>

<p>For weight loss, what is more important is eating healthy carbs and unsaturated fats and limiting the amount of calories you take in. It helps to cut out or eat less of foods that don’t have essential vitamins, minerals, or nutrients. Make sure you read the <a href="/healthy-eating/how-eat-health/food-labels">Nutrition Facts label</a>&nbsp;carefully. Learn more in our <a href="/healthy-weight">Healthy Weight</a> section.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about healthy eating and women? ",
      content: `

    <div class="answer"><p>For more information about healthy eating, call the OWH Helpline at 1-800-994-9662 or check out the following resources from other organizations:</p>

<ul>
	<li><a href="https://www.choosemyplate.gov/ten-tips" title="MyPlate Tip Sheets">10 Tips Nutrition Series</a> — Information from ChooseMyPlate.gov.</li>
	<li><a href="https://healthyeating.nhlbi.nih.gov/">Delicious Heart-Healthy Recipes</a> — Information from the National Heart, Lung, and Blood Institute (NHLBI).</li>
	<li><a href="http://www.choosemyplate.gov/food-groups/" title="MyPlate">Food Groups</a> — Information on the five food groups from ChooseMyPlate.gov.</li>
	<li><a href="http://www.heart.org/HEARTORG/GettingHealthy/NutritionCenter/HealthyEating/Healthy-Eating_UCM_310436_SubHomePage.jsp" title="Nutrition" class="external-link external-popup" target="_blank">Healthy Eating <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Information from the American Heart Association.</li>
	<li><a href="https://www.nhlbi.nih.gov/files/docs/public/heart/cooking.pdf">Heart Healthy Home Cooking African American Style</a> (PDF – 3.35 MB) — Information from the NHLBI.</li>
	<li><a href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/mediterranean-diet/art-20047801" title="Mediterranean diet for heart health" class="external-link external-popup" target="_blank">Mediterranean diet: A heart-healthy eating plan <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Information from the Mayo Clinic.</li>
	<li><a href="http://www.cdc.gov/healthyweight/healthy_eating/drinks.html">Rethink Your Drink</a> — Information from the Centers for Disease Control and Prevention.&nbsp;</li>
	<li><a href="https://www.choosemyplate.gov/MyPlate-Daily-Checklist-input" title="ChooseMyPlate.gov">MyPlate Checklist Calculator</a> — Personalized healthy eating plans from ChooseMyPlate.gov.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Sources",
      content: `

    <div class="answer"><ol>
	<li>Salvy, S-J., Elmo, A., Nitecki, L.A., Kluczynski, M.A., Roemmich, J.N. (2011). <a href="http://ajcn.nutrition.org/content/93/1/87.full" class="external-link external-popup" target="_blank">Influence of parents and friends on children’s and adolescents’ food intake and food selection. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> <em>American Journal of Clinical Nutrition;</em> 93(1): 87-92.</li>
	<li>Perry, B., Ciciurkaite, G., Brady, C.F., Garcia, J. (2016). <a href="http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0169193" class="external-link external-popup" target="_blank">Partner Influence in Diet and Exercise Behaviors: Testing Behavior Modeling, Social Control, and Normative Body Size. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> <em>PLoS ONE; </em>11(12): e0169193.</li>
	<li>U.S. Department of Agriculture. (2016). <a href="http://health.gov/dietaryguidelines/2015/guidelines/" title="2015-2020 Dietary Guidelines">Dietary Guidelines for Americans</a>, Chapter 2, Figure 2-3.</li>
	<li>U.S. Department of Agriculture. (2016). <a href="http://health.gov/dietaryguidelines/2015/guidelines/" title="2015-2020 Dietary Guidelines">Dietary Guidelines for Americans</a>, Chapter 2, Figure 2-6.</li>
	<li>U.S. Department of Agriculture. (2016). <a href="http://health.gov/dietaryguidelines/2015/guidelines/" title="2015-2020 Dietary Guidelines">Dietary Guidelines for Americans</a>, Chapter 2, Figure 2-5.</li>
	<li>U.S. Department of Agriculture. (2016). <a href="http://health.gov/dietaryguidelines/2015/guidelines/" title="2015-2020 Dietary Guidelines">Dietary Guidelines for Americans</a>, Chapter 2, Figure 2-3.</li>
	<li>U.S. Department of Agriculture. (2016). Dietary Guidelines for Americans. <a href="https://health.gov/dietaryguidelines/2015/guidelines/appendix-7/">Appendix 7: Nutritional Goals for Age-Sex Groups Based on Dietary Reference Intakes and Dietary Guidelines Recommendations.</a></li>
	<li>Office of Dietary Supplements. (2016). <a href="https://ods.od.nih.gov/factsheets/Calcium-Consumer/" title="Calcium — Consumer">Calcium.</a></li>
	<li>Office of Dietary Supplements. (2016). <a href="http://ods.od.nih.gov/factsheets/VitaminD-Consumer/" title="Vitamin D — Consumer">Vitamin D.</a></li>
	<li>Office of Dietary Supplements. (2016). <a href="https://ods.od.nih.gov/factsheets/Iron-Consumer/" title="Iron — Consumer">Iron.</a></li>
	<li>U.S. Department of Agriculture. (2016). <a href="https://health.gov/dietaryguidelines/2015/guidelines/" title="2015-2020 Dietary Guidelines">Dietary Guidelines for Americans</a>, Chapter 2.</li>
	<li>Bourre, J.M. (2007). <a href="https://www.ncbi.nlm.nih.gov/pubmed/17254747">Dietary omega-3 fatty acids for women.</a> <em>Biomedicine &amp; Pharmacotherapy; </em>61(2-3): 105-112.</li>
	<li>National Institutes of Health, Office of Dietary Supplements. (2016). <a href="https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/" title="Omega-3 Fatty Acids — Health Professional Fact Sheet">Omega-3 Fatty Acids: Fact Sheet for Health Professionals.</a></li>
	<li>Bravata, D. M., Sanders, L., Huang, J., Krumholz, H. M., Olkin, I., Gardner, C. D., Bravata, D. M. (2003). <a href="https://www.ncbi.nlm.nih.gov/pubmed/12684364">Efficacy and Safety of Low-Carbohydrate Diets: A Systematic Review.</a> <em>JAMA</em>, 289(14):1837–1850.</li>
	<li>Clifton, P. M., Condo, D., Keogh, J. B. (2014). <a href="https://www.ncbi.nlm.nih.gov/pubmed/24472635">Long term weight maintenance after advice to consume low carbohydrate, higher protein diets: A systematic review and meta analysis.</a> <em>Nutrition, Metabolism, and Cardiovascular Diseases</em>, 24(3), 224-235.</li>
	<li>Tobias, D. K., Chen, M., Manson, J. E., Ludwig, D. S., Willett, W., &amp; Hu, F. B. (2015). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4667723/">Effect of Low-Fat vs. Other Diet Interventions on Long-Term Weight Change in Adults: A Systematic Review and Meta-Analysis.</a> <em>The Lancet. Diabetes &amp; Endocrinology</em>, 3(12), 968–979.</li>
</ol>
</div>
`,
    },
  ];
  return [condName, condImURL, condDescription, condHeader, condQA];
}

export function pcosScreening({ navigation, ...rest }) {
  const screeningTree = [
    {
      title: "PCOS Question1",
      content: (
        <Text
          h2
          style={{
            // marginVertical: theme.SIZES.BASE / 2,
            textAlign: "center",
            color: theme.COLORS.DEFAULT,
          }}
        >
          PCOS is hormonal disorder involving infrequent, irregular or prolonged
          menstrual periods, and often excess male hormone (androgen) levels.
          The ovaries develop numerous small collections of fluid — called
          follicles — and may fail to regularly release eggs.​,
        </Text>
      ),
    },
    {
      title: "PCOS Question2",
      content: (
        <View
          style={{
            flex: 1,
          }}
        >
          <Text>Do you ever have irregular periods?​ </Text>
        </View>
      ),
    },
  ];
  return screeningTree;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 75,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: "center",
  },
  headerIcon: {
    justifyContent: "center",
    alignItems: "center",
  },

  outlinedButton: {
    marginBottom: theme.SIZES.BASE,
    // width: width - theme.SIZES.BASE * 8,

    borderRadius: theme.SIZES.BASE * 1.75,
    borderWidth: 1,
    borderColor: theme.COLORS.BASE,
  },
  outlinedButton: {
    marginBottom: theme.SIZES.BASE,
    // width: width - theme.SIZES.BASE * 8,
    borderRadius: theme.SIZES.BASE * 1.75,
    borderWidth: 2,
    borderColor: theme.COLORS.BASE,
    // backgroundColor: theme.COLORS.SECONDARY,
  },
});

// export default getTopic1;

//  use with getTopic1(...props)
