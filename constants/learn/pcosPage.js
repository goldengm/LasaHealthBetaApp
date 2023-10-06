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
import styles from "../Style";

export function pcosPage({ navigation, ...rest }) {
  const condName = "Polycystic Ovary Syndrome (PCOS)";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Polycysticovarysyndrome.jpg?VersionId=45Ed28MPD5_w4zTMFzbu5xed8p_jcXCL";
  const condDescription =
    "Polycystic ovary syndrome (PCOS), also known as polycystic ovarian syndrome, is a common health problem caused by an imbalance of reproductive hormones. The hormonal imbalance creates problems in the ovaries. The ovaries make the egg that is released each month as part of a healthy menstrual cycle. With PCOS, the egg may not develop as it should or it may not be released during ovulation as it should be. \n PCOS can cause missed or irregular menstrual periods. Irregular periods can lead to: \n Infertility (inability to get pregnant). In fact, PCOS is one of the most common causes of infertility in women. \n Development of cysts (small fluid-filled sacs) in the ovaries";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Polycysticovarysyndrome.jpg?VersionId=45Ed28MPD5_w4zTMFzbu5xed8p_jcXCL"></div>  -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Polycystic ovary syndrome</h1>  -->
            <p><strong>Polycystic ovary syndrome (PCOS) is a health problem that affects 1 in 10 women of childbearing age.</strong> Women with PCOS have a hormonal imbalance and metabolism problems that may affect their overall health and appearance. PCOS is also a common and treatable cause of infertility.</p>

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
      title: "What is polycystic ovary syndrome (PCOS)?",
      content: `

    <div class="answer"><p><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="pah-lee-SIS-tik">Polycystic</a> ovary syndrome (PCOS), also known as polycystic ovarian syndrome, is a common health problem caused by an imbalance of reproductive <a href="/glossary#hormone">hormones</a>. The hormonal imbalance creates problems in the <a href="/glossary#ovaries">ovaries</a>. The ovaries make the egg that is released each month as part of a healthy menstrual cycle. With PCOS, the egg may not develop as it should or it may not be released during <a href="/glossary#ovulation">ovulation</a> as it should be.</p>

<p>PCOS can cause missed or irregular menstrual periods. Irregular periods can lead to:</p>

<ul>
	<li>Infertility (inability to get pregnant). In fact, PCOS is one of the most common causes of infertility in women.</li>
	<li>Development of <a href="/a-z-topics/ovarian-cysts">cysts</a> (small fluid-filled sacs) in the ovaries</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets PCOS?",
      content: `

    <div class="answer"><p>Between 5% and 10% of women between 15 and 44, or during the years you can have children, have PCOS.<a href="#references"><sup>1</sup></a> Most women find out they have PCOS in their 20s and 30s, when they have problems getting pregnant and see their doctor. But PCOS can happen at any age after puberty.<a href="#references"><sup>2</sup></a></p>

<p>Women of all races and ethnicities are at risk of PCOS. Your risk of PCOS may be higher if you have obesity or if you have a mother, sister, or aunt with PCOS.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of PCOS?",
      content: `

    <div class="answer"><p>Some of the symptoms of PCOS include:</p>

<ul>
	<li><strong>Irregular menstrual cycle</strong>. Women with PCOS may miss periods or have fewer periods (fewer than eight in a year). Or, their periods may come every 21 days or more often. Some women with PCOS stop having menstrual periods.</li>
	<li><strong>Too much hair</strong> on the face, chin, or parts of the body where men usually have hair. This is called "hirsutism." Hirsutism affects up to 70% of women with PCOS.<a href="#references"><sup>3</sup></a></li>
	<li><strong>Acne</strong> on the face, chest, and upper back</li>
	<li><strong>Thinning hair</strong> or hair loss on the scalp; male-pattern baldness</li>
	<li><strong>Weight gain</strong> or difficulty losing weight</li>
	<li><strong>Darkening of skin</strong>, particularly along neck creases, in the groin, and underneath breasts</li>
	<li><strong>Skin tags</strong>, which are small excess flaps of skin in the armpits or neck area</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes PCOS?",
      content: `

    <div class="answer"><p>The exact cause of PCOS is not known. Most experts think that several factors, including genetics, play a role:</p>

<ul>
	<li><strong>High levels of <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="AN-druh-junz">androgens</a>.</strong> Androgens are sometimes called "male hormones," although all women make small amounts of androgens. Androgens control the development of male traits, such as male-pattern baldness. Women with PCOS have more androgens than normal. Higher than normal androgen levels in women can prevent the ovaries from releasing an egg (ovulation) during each menstrual cycle, and can cause extra hair growth and acne, two signs of PCOS.</li>
	<li><strong>High levels of insulin.</strong> Insulin is a hormone that controls how the food you eat is changed into energy. Insulin resistance is when the body's cells do not respond normally to insulin. As a result, your insulin blood levels become higher than normal. Many women with PCOS have insulin resistance, especially those who have overweight or obesity, have unhealthy eating habits, do not get enough physical activity, and have a family history of <a href="/a-z-topics/diabetes">diabetes</a> (usually type 2 diabetes). Over time, insulin resistance can lead to type 2 diabetes.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can I still get pregnant if I have PCOS?",
      content: `

    <div class="answer"><p>Yes. Having PCOS does not mean you can't get pregnant. PCOS is one of the most common, but treatable, causes of infertility in women. In women with PCOS, the hormonal imbalance interferes with the growth and release of eggs from the ovaries (ovulation). If you don't ovulate, you can't get pregnant.</p>

<p>Your doctor can talk with you about ways to help you ovulate and to <a href="#11">raise your chance of getting pregnant</a>.&nbsp;You can also use our <a href="/ovulation-calculator">Ovulation Calculator</a> to see which days in your menstrual cycle you are most likely to be fertile.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Is PCOS linked to other health problems?",
      content: `

    <div class="answer"><p>Yes, studies have found links between PCOS and other health problems, including:</p>

<ul>
	<li><strong>Diabetes.</strong> More than half of women with PCOS will have diabetes or prediabetes (glucose intolerance) before the age of 40.<a href="#references"><sup>4</sup></a> Learn more about diabetes on our <a href="/a-z-topics/diabetes">Diabetes page</a>.</li>
	<li><strong>High blood pressure.</strong> Women with PCOS are at greater risk of having high blood pressure compared with women of the same age without PCOS. High blood pressure is a leading cause of heart disease and stroke. Learn more about <a href="/heart-disease-and-stroke">heart disease and stroke</a>.</li>
	<li><strong>Unhealthy cholesterol.</strong> Women with PCOS often have higher levels of LDL (bad) cholesterol and low levels of HDL (good) cholesterol. High cholesterol raises your risk of heart disease and stroke.</li>
	<li><strong>Sleep apnea.</strong> This is when momentary and repeated stops in breathing interrupt sleep. Many women with PCOS have overweight or obesity, which can cause sleep apnea. Sleep apnea raises your risk of heart disease and diabetes.</li>
	<li><strong>Depression and anxiety.</strong> <a href="/mental-health/mental-health-conditions/depression">Depression</a> and <a href="/mental-health/mental-health-conditions/anxiety-disorders">anxiety</a> are common among women with PCOS.</li>
	<li><strong>Endometrial cancer.</strong> Problems with ovulation, obesity, insulin resistance, and diabetes (all common in women with PCOS) increase the risk of developing cancer of the endometrium (lining of the uterus or womb).</li>
</ul>

<p>Researchers do not know if PCOS causes some of these problems, if these problems cause PCOS, or if there are other conditions that cause PCOS and other health problems.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Will my PCOS symptoms go away at menopause?",
      content: `

    <div class="answer"><p>Yes and no. PCOS affects many systems in the body. Many women with PCOS find that their menstrual cycles become more regular as they get closer to <a href="/menopause">menopause</a>. However, their PCOS hormonal imbalance does not change with age, so they may continue to have symptoms of PCOS.</p>

<p>Also, the risks of PCOS-related health problems, such as diabetes, stroke, and heart attack, increase with age. These risks may be higher in women with PCOS than those without.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is PCOS diagnosed?",
      content: `

    <div class="answer"><p>There is no single test to diagnose PCOS. To help diagnose PCOS and rule out other causes of your symptoms, your doctor may talk to you about your medical history and do a physical exam and different tests:</p>

<ul>
	<li><strong>Physical exam.</strong> Your doctor will measure your blood pressure, <a href="/glossary#bmi">body mass index (BMI)</a>, and waist size. They will also look at your skin for extra hair on your face, chest or back, acne, or skin discoloration. Your doctor may look for any hair loss or signs of other health conditions (such as an enlarged thyroid gland).</li>
	<li><strong>Pelvic exam.</strong> Your doctor may do a pelvic exam for signs of extra male hormones (for example, an enlarged clitoris) and check to see if your ovaries are enlarged or swollen.</li>
	<li><strong>Pelvic ultrasound (sonogram).</strong> This test uses sound waves to examine your ovaries for cysts and check the endometrium (lining of the uterus or womb).</li>
	<li><strong>Blood tests.</strong> Blood tests check your androgen hormone levels, sometimes called "male hormones." Your doctor will also check for other hormones related to other common health problems that can be mistaken for PCOS, such as <a href="/a-z-topics/thyroid-disease">thyroid disease</a>. Your doctor may also test your cholesterol levels and test you for diabetes.</li>
</ul>

<p>Once other conditions are ruled out, you may be diagnosed with PCOS if you have at least two of the following symptoms:<a href="#references"><sup>5</sup></a></p>

<ul>
	<li>Irregular periods, including periods that come too often, not often enough, or not at all</li>
	<li>Signs that you have high levels of androgens:
	<ul>
		<li>Extra hair growth on your face, chin, and body (hirsutism)</li>
		<li>Acne</li>
		<li>Thinning of scalp hair</li>
	</ul>
	</li>
	<li>Higher than normal blood levels of androgens</li>
	<li>Multiple cysts on one or both ovaries</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is PCOS treated?",
      content: `

    <div class="answer"><p>There is no cure for PCOS, but you can manage the symptoms of PCOS. You and your doctor will work on a treatment plan based on your symptoms, your plans for having children, and your risk of long-term health problems such as diabetes and heart disease. Many women will need a combination of treatments, including:</p>

<ul>
	<li><a href="#9">Steps you can take at home</a> to help relieve your symptoms</li>
	<li><a href="#10">Medicines</a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What steps can I take at home to improve my PCOS symptoms? ",
      content: `

    <div class="answer"><p>You can take steps at home to help your PCOS symptoms, including:</p>

<ul>
	<li><strong>Losing weight.</strong> Healthy eating habits and regular physical activity can help relieve PCOS-related symptoms. Losing weight may help to lower your blood glucose levels, improve the way your body uses insulin, and help your hormones reach normal levels. Even a 10% loss in body weight (for example, a 150-pound woman losing 15 pounds) can help make your menstrual cycle more regular and improve your chances of getting pregnant.<a href="#references"><sup>3</sup></a> Learn more about <a href="/healthy-weight">healthy weight</a>.</li>
	<li><strong>Removing hair.</strong> You can try facial hair removal creams, laser hair removal, or electrolysis to remove excess hair. You can find hair removal creams and products at drugstores. Procedures like laser hair removal or electrolysis must be done by a doctor and may not be covered by health insurance.</li>
	<li><strong>Slowing hair growth.</strong> A prescription skin treatment (eflornithine HCl cream) can help slow down the growth rate of new hair in unwanted places.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What types of medicines treat PCOS?",
      content: `

    <div class="answer"><p>The types of medicines that treat PCOS and its symptoms include:</p>

<ul>
	<li><strong>Hormonal birth control, including the pill, patch, shot, vaginal ring, and hormone intrauterine device (IUD).</strong> For women who don't want to get pregnant, hormonal <a href="/a-z-topics/birth-control-methods">birth control</a> can:

	<ul>
		<li>Make your menstrual cycle more regular</li>
		<li>Lower your risk of <a href="/glossary#endometrial_cancer">endometrial cancer</a></li>
		<li>Help improve acne and reduce extra hair on the face and body (Ask your doctor about birth control with both estrogen and progesterone.)</li>
	</ul>
	</li>
	<li><strong>Anti-androgen medicines.</strong> These medicines block the effect of androgens and can help reduce scalp hair loss, facial and body hair growth, and acne. They are not approved by the Food and Drug Administration (FDA) to treat PCOS symptoms. These medicines can also cause problems during pregnancy.</li>
	<li><strong>Metformin.</strong> Metformin is often used to treat type 2 diabetes and may help some women with PCOS symptoms. It is not approved by the FDA to treat PCOS symptoms. Metformin improves insulin's ability to lower your blood sugar and can lower both insulin and androgen levels. After a few months of use, metformin may help restart ovulation, but it usually has little effect on acne and extra hair on the face or body. Recent research shows that metformin may have other positive effects, including lowering body mass and improving cholesterol levels.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What are my treatment options for PCOS if I want to get pregnant? ",
      content: `

    <div class="answer"><p>You have several options to help your chances of getting pregnant if you have PCOS:</p>

<ul>
	<li><strong>Losing weight.</strong>&nbsp;If you have overweight or obesity, losing weight through healthy eating and regular physical activity can help make your menstrual cycle more regular and improve your fertility. Find a personalized healthy eating plan using the&nbsp;<a href="https://www.choosemyplate.gov/MyPlatePlan">MyPlate Plan</a>&nbsp;tool.</li>
	<li><strong>Medicine.</strong> After ruling out other causes of infertility in you and your partner, your doctor might prescribe medicine to help you ovulate, such as clomiphene (Clomid).</li>
	<li><strong>In vitro fertilization (IVF).</strong> IVF may be an option if medicine does not work. In IVF, your egg is fertilized with your partner's sperm in a laboratory and then placed in your uterus to implant and develop. Compared to medicine alone, IVF has higher pregnancy rates and better control over your risk of having twins and triplets (by allowing your doctor to transfer a single fertilized egg into your uterus).</li>
	<li><strong>Surgery.</strong> Surgery is also an option, usually only if the other options do not work. The outer shell (called the <em>cortex</em>) of ovaries is thickened in women with PCOS and thought to play a role in preventing spontaneous ovulation. Ovarian drilling is a surgery in which the doctor makes a few holes in the surface of your ovary using lasers or a fine needle heated with electricity. Surgery usually restores ovulation, but only for 6 to 8 months.</li>
</ul>

<p>Read more about <a href="http://www.nichd.nih.gov/health/topics/PCOS/conditioninfo/Pages/infertility.aspx" target="_blank">treating infertility in PCOS</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does PCOS affect pregnancy?",
      content: `

    <div class="answer"><p>PCOS can cause problems during pregnancy for you and for your baby. Women with PCOS have higher rates of:<a href="#references"><sup>6</sup></a></p>

<ul>
	<li>Miscarriage</li>
	<li><a href="/a-z-topics/diabetes#2">Gestational diabetes</a></li>
	<li><a href="/glossary#preeclampsia">Preeclampsia</a></li>
	<li>Cesarean section (C-section)</li>
</ul>

<p>Your baby also has a higher risk of being heavy (macrosomia) and of spending more time in a neonatal intensive care unit (NICU).</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I prevent problems from PCOS during pregnancy?",
      content: `

    <div class="answer"><p>You can lower your risk of problems during pregnancy by:</p>

<ul>
	<li><strong>Reaching a healthy weight before you get pregnant.</strong> Use this <a href="http://resources.nationalacademies.org/Pregnancy/WhatToGain.html" target="_blank" class="external-link external-popup">interactive tool <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> to see your healthy weight before pregnancy and what to gain during pregnancy.</li>
	<li><strong>Reaching healthy blood sugar levels before you get pregnant.</strong> You can do this through a combination of healthy eating habits, regular physical activity, weight loss, and medicines such as metformin.</li>
	<li><strong>Taking <a href="/a-z-topics/folic-acid">folic acid</a></strong><strong>.</strong> Talk to your doctor about how much folic acid you need.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is the latest research on PCOS?",
      content: `

    <div class="answer"><p>Researchers continue to search for new ways to treat PCOS. Some current studies focus on:</p>

<ul>
	<li>Genetics and PCOS</li>
	<li>Environmental exposure and PCOS risk</li>
	<li>Ethnic and racial differences in PCOS symptoms</li>
	<li>Medicines and supplements to restart ovulation</li>
	<li>Obesity and its link to PCOS</li>
	<li>Health risks for children of women with PCOS</li>
</ul>

<p>To learn more about current PCOS treatment studies, visit&nbsp;<a href="http://clinicaltrials.gov/" target="_blank">ClinicalTrials.gov</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about PCOS?",
      content: `

    <div class="answer"><p>For more information on PCOS, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="https://www.nichd.nih.gov/health/topics/pcos/Pages/default.aspx"><em>Eunice Kennedy Shriver</em> National Institute of Child Health and Human Development (NICHD), NIH, HHS</a><br>
	Phone Number: 1-800-370-2943</li>
	<li><a href="http://www.aace.com/" class="external-link external-popup" target="_blank">American Association of Clinical Endocrinologists <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 904-353-7878</li>
	<li><a href="http://www.acog.org/" class="external-link external-popup" target="_blank">American College of Obstetricians and Gynecologists <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 1-800-673-8444</li>
	<li><a href="http://www.asrm.org/" class="external-link external-popup" target="_blank">American Society for Reproductive Medicine <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 205-978-5000</li>
	<li><a href="http://www.inciid.org/" class="external-link external-popup" target="_blank">InterNational Council on Infertility Information Dissemination, Inc. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 703-379-9178</li>
	<li><a href="http://www.pcosfoundation.org/contact" class="external-link external-popup" target="_blank">PCOS Foundation <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 713-487-7267</li>
	<li><a href="http://www.pcosaa.org/" class="external-link external-popup" target="_blank">PCOS Awareness Association <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li><a href="http://www.pcoschallenge.com/" class="external-link external-popup" target="_blank">PCOS Challenge <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
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
	<li>Trivax, B., &amp; Azziz, R. (2007). <a href="http://www.ncbi.nlm.nih.gov/pubmed/17304034">Diagnosis of polycystic ovary syndrome</a>. <em>Clinical Obstetrics and Gynecology, </em><em>50</em>(1), 168–177.</li>
	<li>Bremer, A. A. (2010). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3125559/">Polycystic ovary syndrome in the pediatric population</a>. <em>Metabolic Syndrome and Related Disorders,</em><em> 8</em>(5), 375–394.</li>
	<li>American College of Obstetricians and Gynecologists. (2015). <a href="http://www.acog.org/Patients/FAQs/Polycystic-Ovary-Syndrome-PCOS" class="external-link external-popup" target="_blank">Polycystic ovary syndrome <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>Lorenz, L. B., &amp; Wild, R. A. (2007). <a href="http://www.ncbi.nlm.nih.gov/pubmed/17304038">Polycystic ovarian syndrome: an evidence-based approach to evaluation and management of diabetes and cardiovascular risks for today's clinician</a>. <em>Clinical Obstetrics and Gynecology,</em> <em>50,</em> 226–243.</li>
	<li>Goodman, N. F., Cobin, R. H., Futterweit, W., Glueck, J. S., Legro, R. S., &amp; Carmina, E. (2015). <a href="http://www.ncbi.nlm.nih.gov/pubmed/26509855">American Association of Clinical Endocrinologists, American College of Endocrinology, and Androgen Excess and PCOS Society disease state clinical review: guide to the best practices in the evaluation and treatment of polycystic ovary syndrome - part 1</a>. <em>Endocrine Practice,</em><em> 11,</em> 1291–300.</li>
	<li>Boomsma, C. M., Fauser, B. C., &amp; Macklon, N.S. (2008). <a href="http://www.ncbi.nlm.nih.gov/pubmed/18181085">Pregnancy complications in women with polycystic ovary syndrome</a>. <em>Seminars in Reproductive Medicine,</em><em> 26</em>, 72–84.</li>
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
          style={[
            styles.paragraph,
            {
              textAlign: "center",
            },
          ]}
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     paddingHorizontal: 75,
//     paddingBottom: theme.SIZES.BASE,
//     paddingTop: theme.SIZES.BASE * 3,
//     justifyContent: "center",
//   },
//   headerIcon: {
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   outlinedButton: {
//     marginBottom: theme.SIZES.BASE,
//     // width: width - theme.SIZES.BASE * 8,

//     borderRadius: theme.SIZES.BASE * 1.75,
//     borderWidth: 1,
//     borderColor: theme.COLORS.BASE,
//   },
//   outlinedButton: {
//     marginBottom: theme.SIZES.BASE,
//     // width: width - theme.SIZES.BASE * 8,
//     borderRadius: theme.SIZES.BASE * 1.75,
//     borderWidth: 2,
//     borderColor: theme.COLORS.BASE,
//     // backgroundColor: theme.COLORS.SECONDARY,
//   },
// });

// // export default getTopic1;

// //  use with getTopic1(...props)
