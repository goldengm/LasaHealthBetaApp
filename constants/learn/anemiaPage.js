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

export function anemiaPage({ navigation, ...rest }) {
  const condName = "Iron-deficiency anemia";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Irondeficiencyanemia.jpg?VersionId=Eqgvkvax32fgiOqoffLa1eSv9pH5UBjU";
  const condDescription =
    "Iron-deficiency anemia is the most common type of anemia, a condition that happens when your body does not make enough healthy red blood cells or the blood cells do not work correctly. \n Iron-deficiency anemia happens when you don’t have enough iron in your body. Your body needs iron to make hemoglobin, the part of the red blood cell that carries oxygen through your blood to all parts of your body.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--  <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Irondeficiencyanemia.jpg?VersionId=Eqgvkvax32fgiOqoffLa1eSv9pH5UBjU"></div> -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Iron-deficiency anemia</h1>  -->
            <p><strong>Iron-deficiency anemia means that your body does not have enough iron. </strong>Your body needs iron to help carry oxygen through your blood to all parts of your body. Iron-deficiency anemia affects more women than men and is more common during <a href="/pregnancy" title="Pregnancy | womenshealth.gov">pregnancy</a>.</p>

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
      title: "What is iron-deficiency anemia?",
      content: `

    <div class="answer"><p>Iron-deficiency anemia is the most common type of <a href="/a-z-topics/iron-deficiency-anemia" title="glossary | womenshealth.gov">anemia</a>, a condition that happens when your body does not make enough healthy red blood cells or the blood cells do not work correctly.</p>

<p>Iron-deficiency anemia happens when you don’t have enough iron in your body. Your body needs iron to make hemoglobin, the part of the red blood cell that carries oxygen through your blood to all parts of your body.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets iron-deficiency anemia?",
      content: `

    <div class="answer"><p>Iron-deficiency anemia affects more women than men. The risk of iron-deficiency anemia is highest for women who:</p>

<ul>
	<li><strong>Are pregnant.</strong> Iron-deficiency anemia affects one in six pregnant women.<a href="#references"><sup>1</sup></a> You need more iron during pregnancy to support your unborn baby’s development.</li>
	<li><strong>Have heavy menstrual periods.</strong> Up to 5% of women of childbearing age develop iron-deficiency anemia because of heavy bleeding during their periods.<a href="#references"><sup>2</sup></a></li>
</ul>

<p>Infants, small children, and teens are also at high risk for iron-deficiency anemia. <a href="http://ods.od.nih.gov/factsheets/Iron-Consumer/" title="Office of Dietary Supplements- Iron">Learn how much iron children need at different ages.</a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of iron-deficiency anemia?",
      content: `

    <div class="answer"><p>Iron-deficiency anemia often develops slowly. In the beginning, you may not have any symptoms, or they may be mild. As it gets worse, you may notice one or more of these symptoms:<a href="#references"><sup>3</sup></a></p>

<ul>
	<li>Fatigue (very common)</li>
	<li>Weakness (very common)</li>
	<li>Dizziness</li>
	<li>Headaches</li>
	<li>Low body temperature</li>
	<li>Pale or yellow "sallow" skin</li>
	<li>Rapid or irregular heartbeat</li>
	<li>Shortness of breath or chest pain, especially with physical activity</li>
	<li>Brittle nails</li>
	<li>Pica (unusual cravings for ice, very cold drinks, or non-food items like dirt or paper)<a href="#references"><sup>4</sup></a></li>
</ul>

<p>If you think you may have iron-deficiency anemia, talk to your doctor or nurse.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes iron-deficiency anemia?",
      content: `

    <div class="answer"><p>Women can have low iron levels for several reasons:</p>

<ul>
	<li><strong>Iron lost through bleeding. </strong>Bleeding can cause you to lose more blood cells and iron than your body can replace. Women may have low iron levels from bleeding caused by:

	<ul>
		<li>Digestive system problems, such as ulcers, colon polyps, or colon cancer</li>
		<li>Regular, long-term use of aspirin and other over-the-counter pain relievers</li>
		<li>Donating blood too often or without enough time in between donations for your body to recover<a href="#references"><sup>5</sup></a></li>
		<li>Heavier or longer than normal menstrual periods</li>
		<li><a href="/a-z-topics/uterine-fibroids" title="Uterine fibroids | womenshealth.gov">Uterine fibroids</a>, which are noncancerous growths in the uterus that can cause heavy bleeding</li>
	</ul>
	</li>
	<li><strong>Increased need for iron during pregnancy. </strong>During pregnancy, your body needs more iron than normal to support your developing baby.</li>
	<li><strong>Not eating enough food that contains iron.</strong> Your body absorbs the iron in animal-based foods, such as meat, chicken, and fish, two to three times better than the iron in plant-based foods. Vegetarians or vegans, who eat little or no animal-based foods, need to choose other <a href="#12">good sources of iron</a>&nbsp;to make sure they get enough.<a href="#references"><sup>6</sup></a> Your body also absorbs iron from plant-based foods better when you eat them with foods that have vitamin C, such as oranges and tomatoes. But most people in the United States get enough iron from food.</li>
	<li><strong>Problems absorbing iron. </strong>Certain health conditions, such as Crohn's disease or celiac disease, or gastric bypass surgery for weight loss can make it harder for your body to absorb iron from food.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is iron-deficiency anemia diagnosed?",
      content: `

    <div class="answer"><p>Talk to your doctor if you think you might have iron-deficiency anemia. Your doctor may:</p>

<ul>
	<li>Ask you questions about your health history, including how regular or heavy your menstrual periods are. Your doctor may also ask you about any digestive system problems you may have, such as blood in your stool.</li>
	<li>Do a physical exam</li>
	<li>Talk to you about the foods you eat, the medicines you take, and your family health history</li>
	<li>Do blood tests. Your doctor will do a complete blood count (CBC). The CBC measures many parts of your blood. If the CBC test shows that you have anemia, your doctor will likely do another blood test to measure the iron levels in your blood and confirm that you have iron-deficiency anemia.&nbsp;&nbsp;</li>
</ul>

<p>If you have iron-deficiency anemia, your doctor may want to do other tests to find out what is causing it.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Do I need to be tested for iron-deficiency anemia?",
      content: `

    <div class="answer"><p>Maybe. Talk to your doctor about getting tested as part of your regular health exam if you have heavy menstrual periods or a health problem such as Crohn's disease or celiac disease.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is iron-deficiency anemia treated?",
      content: `

    <div class="answer"><p>Treatment for iron-deficiency anemia depends on the cause:</p>

<ul>
	<li><strong>Blood loss from a digestive system problem. </strong>If you have an ulcer, your doctor may give you antibiotics or other medicine to treat the ulcer. If your bleeding is caused by a polyp or cancerous tumor, you may need surgery to remove it.&nbsp;</li>
	<li><strong>Blood loss from heavy menstrual periods. </strong>Your doctor may give you hormonal birth control to help relieve heavy periods. If your heavy bleeding does not get better, your doctor may recommend surgery. Types of surgery to control heavy bleeding include endometrial ablation, which removes or destroys your uterine lining, and <a href="/a-z-topics/hysterectomy" title="Hysterectomy | womenshealth.gov">hysterectomy</a>, which removes all or parts of your uterus.</li>
	<li><strong>Increased need for iron. </strong>If you have problems absorbing iron or have lower iron levels but do not have severe anemia, your doctor may recommend:
	<ul>
		<li><a href="#8">Iron pills</a>&nbsp;to build up your iron levels as quickly as possible. Do not take any iron pills without first talking to your doctor or nurse.</li>
		<li>Eating more foods that contain iron.&nbsp;<a href="#12">Good sources of iron</a>&nbsp;include meat, fish, eggs, beans, peas, and fortified foods (look for cereals fortified with 100% of the daily value for iron).</li>
		<li>Eating more foods with vitamin C. Vitamin C helps your body absorb iron. Good sources of vitamin C include oranges, broccoli, and tomatoes.</li>
	</ul>
	</li>
</ul>

<p>If you have severe bleeding or symptoms of chest pain or shortness of breath, your doctor may recommend iron or red blood cell transfusions. Transfusions are for severe iron deficiencies only and are much less common.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What do I need to know about iron pills?",
      content: `

    <div class="answer"><p>Your doctor may recommend iron pills to help build up your iron levels. Do not take these pills without talking to your doctor or nurse first. Taking iron pills can cause side effects, including an upset stomach, constipation, and diarrhea. If taken as a liquid, iron supplements may stain your teeth.</p>

<p>You can reduce side effects from iron pills by taking these steps:</p>

<ul>
	<li>Start with half of the recommended dose. Gradually increase to the full dose.</li>
	<li>Take iron in divided doses. For example, if you take two pills daily, take one in the morning with breakfast and the other after dinner.</li>
	<li>Take iron with food (especially something with vitamin C, such as a glass of orange juice, to help your body absorb the iron).</li>
	<li>If one type of iron pill causes side effects, ask your doctor for another type.</li>
	<li>If you take iron as a liquid instead of as a pill, aim it toward the back of your mouth. This will prevent the liquid from staining your teeth. You can also brush your teeth after taking the medicine to help prevent staining.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What can happen if iron-deficiency anemia is not treated?",
      content: `

    <div class="answer"><p>If left untreated, iron-deficiency anemia can cause serious health problems. Having too little oxygen in the body can damage organs. With anemia, the heart must work harder to make up for the lack of red blood cells or hemoglobin. This extra work can harm the heart.</p>

<p>Iron-deficiency anemia can also cause <a href="#13">problems during pregnancy</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I prevent iron-deficiency anemia?",
      content: `

    <div class="answer"><p>You can help prevent iron-deficiency anemia with the following steps:</p>

<ul>
	<li><strong>Treat the cause of blood loss.</strong> Talk to your doctor if you have heavy menstrual periods or if you have digestive system problems, such as frequent diarrhea or blood in your stool.</li>
	<li><strong>Eat foods with iron. </strong><a href="#12">Good sources of iron</a> include lean meat and chicken, dark, leafy vegetables, and beans.</li>
	<li><strong>Eat and drink foods that help your body absorb iron,</strong> like orange juice, strawberries, broccoli, or other fruits and vegetables with vitamin C.</li>
	<li><strong>Make healthy food choices.</strong> Most people who make healthy, balanced food choices get the iron and vitamins their bodies need from the foods they eat.</li>
	<li><strong>Avoid drinking coffee or tea with meals.</strong> These drinks make it harder for your body to absorb iron.</li>
	<li><strong>Talk to your doctor if you take calcium pills.</strong> Calcium can make it harder for your body to absorb iron. If you have a hard time getting enough iron, talk to your doctor about the best way to also get enough calcium.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How much iron do I need every day?",
      content: `

    <div class="answer"><p>The chart below lists how much iron you need every day. The recommended amounts are listed in milligrams (mg). See a list of <a href="#12">good sources of iron</a>.</p>

<table summary="This table shows the recommended dietary allowances for iron in milligrams for different age groups(row headings) of infants, children, and women (column headings)">
	<tbody>
		<tr>
			<th>
			<p><strong>Age</strong></p>
			</th>
			<th>
			<p><strong>Women</strong></p>
			</th>
			<th>
			<p><strong>Pregnant women</strong></p>
			</th>
			<th>
			<p><strong>Breastfeeding women</strong></p>
			</th>
			<th>
			<p><strong>Vegetarian women* </strong></p>
			</th>
		</tr>
		<tr>
			<th>
			<p><strong>14–18 years</strong></p>
			</th>
			<td>
			<p>15 mg</p>
			</td>
			<td>
			<p>27 mg</p>
			</td>
			<td>
			<p>10 mg</p>
			</td>
			<td>
			<p>27 mg</p>
			</td>
		</tr>
		<tr>
			<th>
			<p><strong>19–50 years</strong></p>
			</th>
			<td>
			<p>18 mg</p>
			</td>
			<td>
			<p>27 mg</p>
			</td>
			<td>
			<p>9 mg</p>
			</td>
			<td>
			<p>32 mg</p>
			</td>
		</tr>
		<tr>
			<th>
			<p><strong>51+ years</strong></p>
			</th>
			<td>
			<p>8 mg</p>
			</td>
			<td>
			<p>n/a</p>
			</td>
			<td>
			<p>n/a</p>
			</td>
			<td>
			<p>14 mg</p>
			</td>
		</tr>
	</tbody>
</table>

<p><strong><em>Source: </em></strong>Adapted from Institute of Medicine, Food and Nutrition Board<a href="#references"><sup>6</sup></a></p>

<p>*Vegetarians need more iron from food than people who eat meat do. This is because the body can absorb iron from meat better than from plant-based foods.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What foods contain iron?",
      content: `

    <div class="answer"><p>Food sources of iron include:</p>

<ul>
	<li>Fortified breakfast cereals (18 milligrams per serving)</li>
	<li>Oysters (8 milligrams per 3-ounce serving)</li>
	<li>Canned white beans (8 milligrams per cup)</li>
	<li>Dark chocolate (7 milligrams per 3-ounce serving)</li>
	<li>Beef liver (5 milligrams per 3-ounce serving)</li>
	<li>Spinach (3 milligrams per ½ cup)</li>
	<li>Tofu, firm (3 milligrams per ½ cup)</li>
	<li>Kidney beans (2 milligrams per ½ cup)</li>
	<li>Canned tomatoes (2 milligrams per ½ cup)</li>
	<li>Lean beef (2 milligrams for a 3-ounce serving)</li>
	<li>Baked potato (2 milligrams for a medium potato)</li>
</ul>

<p><a href="http://ods.od.nih.gov/factsheets/Iron-HealthProfessional/" title="Dietary Supplement Fact Sheet: Iron — Health Professional Fact Sheet">Find more sources of iron.</a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Do I need more iron during pregnancy?",
      content: `

    <div class="answer"><p>Yes. During pregnancy, your body needs more iron to support your growing baby. In fact, pregnant women need almost twice as much iron as women who are not pregnant do. Not getting enough iron during pregnancy raises your risk for <a href="/glossary#premature_birth" title="glossary | womenshealth.gov">premature</a> birth or a low-birth-weight baby (less than 5 ½ pounds). Premature birth is the most common cause of infant death. Both premature birth and low birth weight raise your baby's risk for health and developmental problems at birth and during childhood.</p>

<p>If you're pregnant, talk to your doctor about these steps:</p>

<ul>
	<li>Getting 27 milligrams of iron every day. Take a prenatal vitamin with iron every day, or talk to your doctor about taking an iron supplement (pill).</li>
	<li>Testing for iron-deficiency anemia<a href="#references"><sup>7</sup></a></li>
	<li>Testing for iron-deficiency anemia four to six weeks after childbirth</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Do I need more iron if I am breastfeeding?",
      content: `

    <div class="answer"><p>No, you do not need more iron during breastfeeding. In fact, you need less iron than before you were pregnant. The amount of iron women need during breastfeeding is 10 milligrams per day for young mothers 14 to 18 and 9 milligrams per day for breastfeeding women older than 18.</p>

<p>You need less iron while breastfeeding because you likely will not lose a lot through your menstrual cycle. Many breastfeeding women do not have a period or may have only a light period. Also, if you got enough iron during pregnancy (27 milligrams a day), your breastmilk will supply enough iron for your baby.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Does menopausal hormone therapy affect how much iron I need to take?",
      content: `

    <div class="answer"><p>It might. If you still get your period and take menopausal hormone therapy, you may need more iron than women who are postmenopausal and do not take menopausal hormone therapy. Talk to your doctor or nurse.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Does birth control affect my risk for iron-deficiency anemia?",
      content: `

    <div class="answer"><p>It could. Hormonal birth control, such as the pill, the patch, the shot, or the hormonal intrauterine device (IUD), is often used to treat women with heavy menstrual periods. Lighter menstrual periods may reduce your risk for iron-deficiency anemia.</p>

<p>Also, the non-hormonal, copper IUD (Paragard) may make your menstrual flow heavier. This raises your risk for iron-deficiency anemia.</p>

<p>Talk to your doctor or nurse about your risk for anemia and whether hormonal birth control may help.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "I am a vegetarian. How can I make sure I get enough iron?",
      content: `

    <div class="answer"><p>You can help make sure you get enough iron by choosing foods that contain iron more often. Vegetarians need more iron from food than people who eat meat. This is because the body can absorb iron from meat better than from plant-based foods.</p>

<p>Vegetarian sources of iron include:<a href="#references"><sup>8</sup></a></p>

<ul>
	<li>Cereals and bread with added iron</li>
	<li>Lentils and beans</li>
	<li>Dark chocolate</li>
	<li>Dark green leafy vegetables, such as spinach and broccoli</li>
	<li>Tofu</li>
	<li>Chickpeas</li>
	<li>Canned tomatoes</li>
</ul>

<p>Talk to your doctor or nurse about whether you get enough iron. Most people get enough iron from food.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can I get more iron than my body needs?",
      content: `

    <div class="answer"><p>Yes, your body can get too much iron. Extra iron can damage the liver, heart, and pancreas. Try to get no more than 45 milligrams of iron a day, unless your doctor prescribes more.</p>

<p>Some people get too much iron because of a condition called hemochromatosis that runs in families. Learn more about <a href="http://digestive.niddk.nih.gov/ddISeases/pubs/hemochromatosis/index.aspx" title="Hemochromatosis">hemochromatosis</a>, who is at risk, and how it is treated.</p>

<p>You can also get too much iron from iron pills (if you also get iron from food) or from repeated blood transfusions.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about iron-deficiency anemia?",
      content: `

    <div class="answer"><p>For more information about iron-deficiency anemia, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.nhlbi.nih.gov"><strong>National Heart, Lung, and Blood Institute (NHLBI), NIH, HHS</strong></a><br>
	Phone Number: 301-592-8573</li>
	<li><a href="http://www.eatright.org/" class="external-link external-popup" target="_blank"><strong>Academy of Nutrition and Dietetics</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 800-877-1600</li>
	<li><a href="http://www.irondisorders.org/" class="external-link external-popup" target="_blank"><strong>Iron Disorders Institute</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 888-565-4766</li>
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
	<li>U.S. Preventive Services Task Force. (2015). <a href="http://www.uspreventiveservicestaskforce.org/Page/Document/RecommendationStatementFinal/iron-deficiency-anemia-in-pregnant-women-screening-and-supplementation#citation1" class="external-link external-popup" target="_blank">Iron Deficiency Anemia in Pregnant Women: Screening and Supplementation. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li>Cogswell, M.E. Looker, A.C., Pfeiffer, C.M., Cook, J.D., Lacher, D.A., Beard, J.L. et al. (2009). <a href="http://ajcn.nutrition.org/content/89/5/1334.full" class="external-link external-popup" target="_blank">Assessment of iron deficiency in U.S. preschool children and nonpregnant females of childbearing age: National Health and Nutrition Examination Survey 2003-2006 <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>American Journal of Clinical Nutrition; </em>89: 1334–1342.</li>
	<li>National Heart, Lung, and Blood Institute. (2014). <a href="http://www.nhlbi.nih.gov/health/health-topics/topics/ida/signs">What Are the Signs and Symptoms of Iron-Deficiency Anemia? </a></li>
	<li>Bryant, B.J., Yau, Y.Y., Arceo, S.M., Hopkins, J.A., and Leitman, S.F. (2013). <a href="http://www.ncbi.nlm.nih.gov/pubmed/23305102">Ascertainment of iron deficiency and depletion in blood donors through screening questions for pica and restless legs syndrome</a>. <em>Transfusion</em>, 53(8):1637-44.</li>
	<li>Cable, R.G., Glynn, S.A., Kiss, J.A., Mast, A.E., Whitney, R.S., Murphy, E.L., et al. (2012). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3618489/">Iron Deficiency in Blood Donors: The REDS-II Donor Iron Status Evaluation (RISE) Study.</a> <em>Transfusion; </em>52(4): 702–711.</li>
	<li>National Institutes of Health Office of Dietary Supplements. (2016). <a href="https://ods.od.nih.gov/factsheets/Iron-Consumer/">Iron.</a></li>
	<li>U.S. Preventive Services Task Force. (2015).&nbsp;<a href="https://www.uspreventiveservicestaskforce.org/Page/Document/RecommendationStatementFinal/iron-deficiency-anemia-in-pregnant-women-screening-and-supplementation" target="_blank" class="external-link external-popup">Iron Deficiency Anemia in Pregnant Women: Screening and Supplementation. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li>National Institutes of Health Office of Dietary Supplements. (2016). <a href="http://ods.od.nih.gov/factsheets/Iron-HealthProfessional/">Iron: Health Professional Fact Sheet.</a> Bethesda, MD: National Institutes of Health Office of Dietary Supplements.</li>
</ol>

<div>
<div>
<div id="_com_1" uage="JavaScript">&nbsp;</div>
</div>
</div>
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
