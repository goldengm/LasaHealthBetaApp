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

export function folicPage({ navigation, ...rest }) {
  const condName = "Folic Acid";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Folicacid.jpg?VersionId=UX9NZ2fw.H0CBGf4U17CtMoki3I1BZIC";
  const condDescription =
    "Folic acid is a form of folate (a B vitamin) that everyone needs. If you can get pregnant or are pregnant, folic acid is especially important. Folic acid protects unborn babies against serious birth defects. You can get folic acid from vitamins and fortified foods, such as breads, pastas and cereals. Folate is found naturally in foods such as leafy green vegetables, oranges, and beans.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Folicacid.jpg?VersionId=UX9NZ2fw.H0CBGf4U17CtMoki3I1BZIC"></div>  -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Folic acid</h1>  -->
            <p><strong>Folic acid is a form of folate (a B vitamin) that everyone needs.</strong> If you can get pregnant or are pregnant, folic acid is especially important. Folic acid protects unborn babies against serious birth defects. You can get folic acid from vitamins and fortified foods, such as breads, pastas and cereals. Folate is found naturally in foods such as leafy green vegetables, oranges, and beans.</p>

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
      title: "What are folic acid and folate?",
      content: `

    <div class="answer"><p><strong>Folic acid</strong> is the man-made form of <strong>folate,</strong> a B vitamin. Folate is found naturally in certain fruits, vegetables, and nuts. Folic acid is found in vitamins and fortified foods.</p>

<p>Folic acid and folate help the body make healthy new red blood cells. Red blood cells carry oxygen to all the parts of your body. If your body does not make enough red blood cells, you can develop <a href="/a-z-topics/iron-deficiency-anemia">anemia</a>. Anemia happens when your blood cannot carry enough oxygen to your body, which makes you pale, tired, or weak. Also, if you do not get enough folic acid, you could develop a type of anemia called <a href="#13">folate-deficiency anemia</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Why do women need folic acid?",
      content: `

    <div class="answer"><p>Everyone needs folic acid to be healthy. But it is especially important for women:</p>

<ul>
	<li><strong><em>Before</em> and <em>during</em> pregnancy.</strong> Folic acid protects unborn children against serious birth defects called neural tube defects. These birth defects happen in the first few weeks of pregnancy, often before a woman knows she is pregnant. Folic acid might also help prevent other types of birth defects and early pregnancy loss (miscarriage). Since about half of all pregnancies in the United States are unplanned<sup><a href="#references">1</a></sup>, experts recommend all women get enough folic acid even if you are not trying to get pregnant.</li>
	<li><strong>To keep the blood healthy by helping red blood cells form and grow.</strong> Not getting enough folic acid can lead to a type of <a href="/a-z-topics/iron-deficiency-anemia">anemia</a> called <a href="#13">folate-deficiency anemia</a>. Folate-deficiency anemia is more common in women of childbearing age than in men.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do I get folic acid?",
      content: `

    <div class="answer"><p>You can get folic acid in two ways.</p>

<ol>
	<li><strong>Through the foods you eat.</strong> Folate is <a href="#9">found naturally in some foods</a>, including spinach, nuts, and beans. Folic acid is found in fortified foods (called "enriched foods"), such as breads, pastas, and cereals. Look for the term "enriched" on the ingredients list to find out whether the food has added folic acid.</li>
	<li><strong>As a vitamin.</strong> Most multivitamins sold in the United States contain 400 micrograms, or 100% of the daily value, of folic acid. Check the label to make sure.</li>
</ol>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How much folic acid do women need?",
      content: `

    <div class="answer"><p>All women need 400 micrograms of folic acid every day. Women who can get pregnant should get 400 to 800 micrograms of folic acid from a vitamin or from food that has added folic acid, such as breakfast cereal.<a href="#references"><sup>2</sup></a> This is in addition to the folate you get naturally from food.</p>

<p>Some women may need more folic acid each day. See the chart to find out how much folic acid you need.</p>

<table style="border:1px solid #9b9b9b">
	<thead>
		<tr>
			<th style="border:1px solid #9b9b9b; padding:5px; background-color: #582C83; color:#FFF; font-weight:bold;">If you:</th>
			<th style="border:1px solid #9b9b9b; padding:5px; background-color: #582C83; color:#FFF; font-weight:bold;">Amount of folic acid you may need daily<sup><a href="#references">2</a></sup></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border:1px solid #9b9b9b; padding:5px;">Could get pregnant or are pregnant</td>
			<td style="border:1px solid #9b9b9b; padding:5px;">400–800 micrograms.<a href="#references"><sup>2</sup></a> Your doctor may prescribe a prenatal vitamin with more.</td>
		</tr>
		<tr>
			<td style="border:1px solid #9b9b9b; padding:5px;">Had a baby with a neural tube defect (such as <span class="pronounce-blue pronounce-blueJS"><a href="/glossary#Spina_bifida">spina bifida</a><span class="sound-out-blue sound-out-bluejs" style="display: none;">(SPEYE-nuh BIF-ih-duh)</span></span>) and want to get pregnant again</td>
			<td style="border:1px solid #9b9b9b; padding:5px;">4,000 micrograms. Your doctor may prescribe this amount. Research shows taking this amount may lower the risk of having another baby with spina bifida.<sup><a href="#references">3</a></sup></td>
		</tr>
		<tr>
			<td style="border:1px solid #9b9b9b; padding:5px;">Have a family member with spina bifida and could get pregnant</td>
			<td style="border:1px solid #9b9b9b; padding:5px;">4,000 micrograms. Your doctor may prescribe this amount.</td>
		</tr>
		<tr>
			<td style="border:1px solid #9b9b9b; padding:5px;">Have spina bifida and want to get pregnant</td>
			<td style="border:1px solid #9b9b9b; padding:5px;">4,000 micrograms. Your doctor may prescribe this amount. Women with spina bifida have a higher risk of having children with the condition.</td>
		</tr>
		<tr>
			<td style="border:1px solid #9b9b9b; padding:5px;">Take medicines to treat <a href="/glossary#epilepsy">epilepsy</a>, type 2 <a href="/glossary#diabetes">diabetes</a>, <a href="/glossary#rheumatoid">rheumatoid arthritis</a>, or <a href="/glossary#sle">lupus</a></td>
			<td style="border:1px solid #9b9b9b; padding:5px;">Talk to your doctor or nurse. Folic acid supplements can interact with these medicines.</td>
		</tr>
		<tr>
			<td style="border:1px solid #9b9b9b; padding:5px;">Are on dialysis for kidney disease</td>
			<td style="border:1px solid #9b9b9b; padding:5px;">Talk to your doctor or nurse.</td>
		</tr>
		<tr>
			<td style="border:1px solid #9b9b9b; padding:5px;">Have a health condition, such as <a href="/glossary#ibd">inflammatory bowel disease</a> or <a href="/illnesses-disabilities/types-illnesses-disabilities/celiac-disease.html">celiac disease</a>, that affects how your body absorbs folic acid</td>
			<td style="border:1px solid #9b9b9b; padding:5px;">Talk to your doctor or nurse.</td>
		</tr>
	</tbody>
</table>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Are some women at risk for not getting enough folic acid? ",
      content: `

    <div class="answer"><p>Yes, certain groups of women do not get enough folic acid each day.<sup><a href="#references">4</a></sup></p>

<ul>
	<li>Women who can get pregnant need more folic acid (400 to 800 micrograms).<a href="#references"><sup>2</sup></a></li>
	<li>Nearly one in three African-American women does not get enough folic acid each day.</li>
	<li>Spanish-speaking Mexican-American women often do not get enough folic acid. However, Mexican-Americans who speak English usually get enough folic acid.<sup><a href="#references">5</a></sup></li>
</ul>

<p>Not getting enough folic acid can cause health problems, including <a href="#13">folate-deficiency anemia</a>, and <a href="#6">problems during pregnancy</a> for you and your unborn baby.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What can happen if I do not get enough folic acid during pregnancy? ",
      content: `

    <div class="answer"><p>If you do not get enough folic acid before and during pregnancy, your baby is at higher risk for neural tube defects.</p>

<p>Neural tube defects are serious birth defects that affect the spine, spinal cord, or brain and may cause death. These include:</p>

<ul>
	<li><strong>Spina bifida</strong>.<sup><a href="#references">6</a></sup> This condition happens when an unborn baby's spinal column does not fully close during development in the womb, leaving the spinal cord exposed. As a result, the nerves that control the legs and other organs do not work. Children with spina bifida often have lifelong disabilities. They may also need many surgeries.</li>
	<li><span class="pronounce-blue pronounce-blueJS"><a href="#"><strong>Anencephaly</strong></a><span class="sound-out-blue sound-out-bluejs" style="display: none;">(an-en-SEF-uh-lee)</span></span>.<sup><a href="#references">7</a></sup> This means that most or all of the brain and skull does not develop in the womb. Almost all babies with this condition die before or soon after birth.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Do I need to take folic acid every day even if I'm not planning to get pregnant?",
      content: `

    <div class="answer"><p>Yes. All women who can get pregnant need to take 400 to 800 micrograms of folic acid every day, even if you're not planning to get pregnant.<sup><a href="#references">2</a></sup> There are several reasons why:</p>

<ul>
	<li>Your birth control may not work or you may not use birth control correctly every time you have sex. In a survey by the Centers for Disease Control and Prevention, almost 40% of women with unplanned pregnancies were using birth control.<sup><a href="#references">8</a></sup></li>
	<li>Birth defects of the brain and spine can happen in the first few weeks of pregnancy, often before you know you are pregnant. By the time you find out you are pregnant, it might be too late to prevent the birth defects.</li>
	<li>You need to take folic acid every day because it is a water soluble B-vitamin. Water soluble means that it does not stay in the body for a long time. Your body metabolizes (uses) folic acid quickly, so your body needs folic acid each day to work properly.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What foods contain folate?",
      content: `

    <div class="answer"><p>Folate is found naturally in some foods. Foods that are naturally high in folate include:</p>

<ul>
	<li>Spinach and other dark green, leafy vegetables</li>
	<li>Oranges and orange juice</li>
	<li>Nuts</li>
	<li>Beans</li>
	<li>Poultry (chicken, turkey, etc.) and meat</li>
	<li>Whole grains</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What foods contain folic acid?",
      content: `

    <div class="answer"><p>Folic acid is added to foods that are refined or processed (not whole grain):</p>

<ul>
	<li>Breakfast cereals (Some have 100% of the recommended daily value — or 400 micrograms — of folic acid in each serving.)</li>
	<li>Breads and pasta</li>
	<li>Flours</li>
	<li>Cornmeal</li>
	<li>White rice</li>
</ul>

<p>Since 1998, the Food and Drug Administration (FDA) has required food manufacturers to add folic acid to processed breads, cereals, flours, cornmeal, pastas, rice, and other grains.<sup><a href="#references">9</a></sup> For other foods, check the <a href="/fitness-nutrition/how-to-eat-for-health/food-labels.html">Nutrition Facts label</a> on the package to see if it has folic acid. The label will also tell you how much folic acid is in each serving. Sometimes, the label will say "folate" instead of folic acid.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I be sure I get enough folic acid?",
      content: `

    <div class="answer"><p>You can get enough folic acid from food alone. Many breakfast cereals have 100% of your recommended daily value (400 micrograms) of folic acid.</p>

<p>If you are at <a href="#7">risk for not getting enough folic acid</a>, your doctor or nurse may recommend that you take a vitamin with folic acid every day. Most U.S. multivitamins have at least 400 micrograms of folic acid. Check the label on the bottle to be sure. You can also take a pill that contains only folic acid.</p>

<p>If swallowing pills is hard for you, try a chewable or liquid product with folic acid.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What should I look for when buying vitamins with folic acid? ",
      content: `

    <div class="answer"><p>Look for "USP" or "NSF" on the label when choosing vitamins. These "seals of approval" mean the pills are made properly and have the amounts of vitamins it says on the label. Also, make sure the pills have not expired. If the bottle has no expiration date, do not buy it.</p>

<p>Ask your pharmacist for help with selecting a vitamin or folic acid-only pill. If you are pregnant and already take a daily prenatal vitamin, you probably get all the folic acid you need. Check the label to be sure.</p>

`,
    },
    {
      title: "Vitamin label",
      content: `

<p>Check the "Supplement Facts" label to be sure you are getting 400 to 800 micrograms (mcg) of folic acid.<a href="#references"><sup>2</sup></a></p>

<p><img 400="" alt="Sample multivitamin nutrition label. Find folic acid: choose a vitamin that says " data-entity-type="" data-entity-uuid="" mcg="" src="null"></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can I get enough folic acid from food alone?",
      content: `

    <div class="answer"><p>Yes, many people get enough folic acid from food alone. Some foods have high amounts of folic acid. For example, many breakfast cereals have 100% of the recommended daily value (400 micrograms) of folic acid in each serving. Check the label to be sure.</p>

<p>Some women, especially women who could get pregnant, may not get enough folic acid from food. African-American women and Mexican Americans are also at higher risk for not getting enough folic acid each day. Talk to your doctor or nurse about whether you should take a vitamin to get the 400 micrograms of folic acid you need each day.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is folate-deficiency anemia?",
      content: `

    <div class="answer"><p>Folate-deficiency anemia is a type of <a href="/publications/our-publications/fact-sheet/anemia.html">anemia</a> that happens when you do not get enough folate. Folate-deficiency anemia is most common during pregnancy. Other causes of folate-deficiency anemia include alcoholism and certain medicines to treat seizures, anxiety, or arthritis.</p>

<p>The&nbsp;symptoms of folate-deficiency anemia include:</p>

<ul>
	<li>Fatigue</li>
	<li>Headache</li>
	<li>Pale skin</li>
	<li>Sore mouth and tongue</li>
</ul>

<p>If you have folate-deficiency anemia, your doctor may recommend taking folic acid vitamins and eating more foods with folate.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can I get too much folic acid?",
      content: `

    <div class="answer"><p>Yes, you can get too much folic acid, but only from man-made products such as multivitamins and fortified foods, such as breakfast cereals. You can't get too much from foods that naturally contain folate.</p>

<p>You should not get more than 1,000 micrograms of folic acid a day, unless your doctor prescribes a higher amount. Too much folic acid can hide signs that you lack vitamin B12, which can cause nerve damage.<sup><a href="#references">10</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Do I need folic acid after menopause?",
      content: `

    <div class="answer"><p>Yes. Women who have gone through menopause still need 400 micrograms of folic acid every day for good health. Talk to your doctor or nurse about how much folic acid you need.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Are folic acid pills covered under insurance?",
      content: `

    <div class="answer"><p>Yes. Under the Affordable Care Act (the health care law), all Health Insurance Marketplace plans and most other insurance plans cover <a href="https://www.healthcare.gov/preventive-care-women/" target="_blank" title="Preventive care benefits for women | HealthCare.gov">folic acid pills</a> for women who could get pregnant at no cost to you. Check with your insurance provider to find out what's included in your plan.</p>

<p>For information about other services covered by the Affordable Care Act, visit <a href="http://www.healthcare.gov/" target="_blank" title="Health Insurance Marketplace | HealthCare.gov">HealthCare.gov</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about folic acid?",
      content: `

    <div class="answer"><p>For more information about folic acid, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.cdc.gov/ncbddd/index.html" target="_blank">National Center for Birth Defects and Developmental Disabilities, CDC, HHS</a><br>
	<strong>Phone Number:</strong> 800-232-4636</li>
	<li><a href="http://www.ninds.nih.gov/disorders/anencephaly/anencephaly.htm" target="_blank" title="Anencephaly Information Page: National Institute of Neurological Disorders and Stroke (NINDS)">National Institute of Neurological Disorders and Stroke (NINDS), NIH, HHS</a><br>
	<strong>Phone Number:</strong> 800-352-9424</li>
	<li><a href="http://ods.od.nih.gov/factsheets/Folate-Consumer/" target="_blank" title="Folate — Consumer | NIH">Office of Dietary Supplements (ODS), NIH, HHS</a><br>
	<strong>Phone Number:</strong> 301-435-2920</li>
	<li><a href="http://www.modimes.org/" target="_blank" class="external-link external-popup">March of Dimes Foundation <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone Number:</strong> 914-997-4488</li>
	<li><a href="http://spinabifidaassociation.org/" target="_blank" class="external-link external-popup">Spina Bifida Association of America <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone Number:</strong> 800-621-3141</li>
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
	<li>Finer, L.B., Zolna, M.R. (2016).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/22018121" title="Unintended pregnancy in the United States: incidence and disparities, 2006">Declines in unintended pregnancy in the United States, 2008-2011.</a>&nbsp;<em>The New England Journal of Medicine; 374</em>(9):843–52.</li>
	<li>U.S. Preventive Services Task Force. (2016). <a href="https://www.uspreventiveservicestaskforce.org/Page/Document/RecommendationStatementFinal/folic-acid-for-the-prevention-of-neural-tube-defects-preventive-medication" class="external-link external-popup" target="_blank">Final Recommendation Statement: Folic Acid for the Prevention of Neural Tube Defects: Preventive Medication <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>CDC. (2016). <a href="http://www.cdc.gov/ncbddd/folicacid/recommendations.html" target="_blank">Folic Acid Recommendations</a>.</li>
	<li>Bailey, R.L., Dodd, K.W., Gahche, J.J., Dwyer, J.T., McDowell, M.A., Yetley, E.A., et al. (2010). <a href="http://www.ncbi.nlm.nih.gov/pubmed/19923379?dopt=Abstract" target="_blank">Total folate and folic acid intake from foods and dietary supplements in the United States: 2003–2006</a>. <em>American Journal of Clinical Nutrition;</em> 91(1): 231–237.</li>
	<li>Hamner, H.C., Cogswell, M.E., Johnson, M.A. (2011). <a href="http://www.ncbi.nlm.nih.gov/pubmed/21865570" target="_blank">Acculturation factors are associated with folate intakes among Mexican American women</a>. <em>The Journal of Nutrition;</em> 141(10): 1889–97.</li>
	<li>CDC. (2016). <a href="http://www.cdc.gov/ncbddd/spinabifida/facts.html" target="_blank">Spina Bifida</a>.</li>
	<li>CDC. (2015). <a href="http://www.cdc.gov/ncbddd/birthdefects/anencephaly.html" target="_blank">Facts about Anencephaly</a>.</li>
	<li>Mosher, W.D., Jones, J., Abma, J.C. (2012). <a href="http://www.cdc.gov/nchs/data/nhsr/nhsr055.pdf" target="_blank">Intended and Unintended Births in the United States: 1982–2010</a> (PDF, 404 KB). <em>National Health Statistics Reports;</em> no. 55.</li>
	<li>U.S. Government Printing Office. (1996). <a href="http://www.gpo.gov/fdsys/pkg/FR-1996-03-05/pdf/96-5014.pdf" target="_blank">Food Standards: Amendment of Standards of Identity For Enriched Grain Products to Require Addition of Folic Acid</a> (PDF, 215 KB). <em>Federal Register;</em> 61(44): 8781.</li>
	<li>Morris, M.S., Jacques, P.F., Rosenberg, I.H., et al. (2007).&nbsp; <a href="https://www.ncbi.nlm.nih.gov/pubmed/17209196">Folate and vitamin B12 status in relation to anemia, macrocytosis and cognitive impairment in older Americans in the age of folic acid fortification.&nbsp;</a><em>Am J Clin Nutr; </em>85(1):193–200.</li>
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
