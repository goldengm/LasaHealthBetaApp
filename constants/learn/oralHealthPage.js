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

export function oralHealthPage({ navigation, ...rest }) {
  const condName = "Oral Health";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Oralhealth.jpg?VersionId=uofg9tUsVcSVkfJ_Hk.tgNUo4xyIyBdF";
  const condDescription =
    "Oral health is the health of your mouth, including your teeth, gums, throat, and the bones around the mouth. \n Oral health problems, such as gum disease, might be a sign that you have other health problems. Gum diseases are infections caused by plaque, which is a sticky film of bacteria that forms on your teeth. If left untreated, the bacteria in plaque can destroy the tissue and bone around your teeth, leading to tooth loss. The bacteria can travel throughout your body and make you sick. Infections in your mouth can also affect your unborn baby if you are pregnant.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Oralhealth.jpg?VersionId=uofg9tUsVcSVkfJ_Hk.tgNUo4xyIyBdF"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Oral health</h1>  -->
            <p><strong>Women have unique oral health concerns. </strong>Changing hormone levels during your menstrual cycle, pregnancy, and menopause can raise your risk of problems in your mouth, teeth, or gums. Health issues such as diabetes can also affect your oral health. Regular brushing, flossing, and dentist visits can help prevent disease in your mouth and the rest of your body.</p>

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
      title: "What is oral health?",
      content: `

    <div class="answer"><p>Oral health is the health of your mouth, including your teeth, gums, throat, and the bones around the mouth.</p>

<p>Oral health problems, such as gum disease, might be a sign that you have other health problems. Gum diseases are infections caused by plaque, which is a sticky film of bacteria that forms on your teeth. If left untreated, the bacteria in plaque can destroy the tissue and bone around your teeth, leading to tooth loss. The bacteria can travel throughout your body and make you sick. Infections in your mouth can also affect your unborn baby if you are pregnant.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How often should I brush and floss my teeth?",
      content: `

    <div class="answer"><p>Dentists recommend that everyone brush their teeth at least twice a day with fluoride toothpaste and floss once a day.<a href="#references"><sup>1</sup></a> Flossing removes plaque between your teeth, a place that you can't reach by brushing. You can also remove this plaque with tools other than floss. These tools, called <a href="http://www.ada.org/en/press-room/news-releases/2016-archive/august/statement-from-the-american-dental-association-about-interdental-cleaners" title="Federal Government, ADA Emphasize Importance of Flossing and Interdental Cleaners" class="external-link external-popup" target="_blank">interdental cleaners <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>, include wooden or plastic picks and water flossers.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How often should I visit the dentist?",
      content: `

    <div class="answer"><p>Most people should go to the dentist once or twice a year.</p>

<p>Your dentist may suggest that you come more often if you have a health problem such as diabetes or a weakened immune system. These health problems can make you more likely to develop gum disease or other dental diseases.</p>

<p>Women are also at higher risk of gum disease during pregnancy. And gum problems and bone loss may happen more quickly in women after menopause. Talk to your dentist about how often you should visit.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do women's hormones affect oral health?",
      content: `

    <div class="answer"><p>Changing <a href="/glossary#hormone">hormone</a> levels at different stages of a woman's life can affect oral health. When your hormone levels change, your gums can get swollen and irritated. Your gums may also bleed, especially during pregnancy, when your body's immune system is more sensitive than usual. This can cause inflammation (redness, swelling, and sometimes pain) in the gums. Regular, careful brushing and flossing can lessen gum irritation and bleeding.</p>

<p>Other causes of changing hormone levels that may affect your oral health include:</p>

<ul>
	<li><a href="#5">Your menstrual cycle</a></li>
	<li><a href="#6">Hormonal birth control</a></li>
	<li><a href="#9">Menopause</a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does my menstrual cycle affect oral health?",
      content: `

    <div class="answer"><p><a href="/glossary#hormone">Hormone</a> levels go up and down throughout your <a href="/menstrual-cycle">menstrual cycle</a>. During ovulation and a few days before you start your period, higher levels of the hormone <a href="/glossary#progesterone">progesterone</a> may cause swelling in your gums. Your gums may be red and bleed more than usual.</p>

<p>You may also get canker sores more often during your menstrual period. Canker sores are small ulcers that have a white or gray base and a red border. Canker sores are not the same thing as cold sores, which are caused by <a href="/a-z-topics/genital-herpes">herpes simplex virus type 1</a> (HSV-1). Canker sores are inside the mouth. Herpes cold sores are on the mouth and lips. You can't pass canker sores to another person, but you can pass herpes cold sores to another person.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does birth control affect oral health?",
      content: `

    <div class="answer"><p><a href="/a-z-topics/birth-control-methods">Hormonal birth control</a>, such as the pill, shot, vaginal ring, or hormonal intrauterine device (IUD), can raise the levels of the hormones <a href="/glossary#estrogen">estrogen</a> and <a href="/glossary#progesterone">progesterone</a> in your body. These higher levels of hormones may make your gums sensitive, red, or swollen.</p>

<p>Hormones can also affect how your mouth heals after getting teeth pulled or having other dental treatments. After the dentist pulls a tooth, a clot forms over the empty space, or socket. Women who take hormonal birth control have a higher risk of this clot falling out (called dry socket), which exposes the nerves in your gums and can be painful.<a href="#references"><sup>2</sup></a><sup>,</sup><a href="#references"><sup>3</sup></a> If you are going to have a tooth removed, tell your dentist about all the medicines you take, including birth control. You can also ask your dentist if you can reschedule your visit for a time when you are taking the inactive pills or have removed the ring or patch.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does pregnancy affect oral health?",
      content: `

    <div class="answer"><p>Pregnancy can make brushing difficult. Some women experience nausea from strongly flavored toothpastes. Switching to a neutral-flavored toothpaste may help.</p>

<p>During pregnancy, your hormone levels also go up and down. This raises your risk for several oral health problems:<a href="#references"><sup>4</sup></a></p>

<ul>
	<li><strong>Severe gum disease (<a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="pair-ee-oh-don-TEYE-tuhss">periodontitis</a>).</strong> Changing hormone levels during pregnancy can make gum disease worse or lead to severe gum disease in as many as 2 in 5 pregnant women.<a href="#references"><sup>5</sup></a> Periodontitis is an infection of the tissues that hold your teeth in place. It's usually caused by not brushing and flossing, or brushing and flossing in a way that allows plaque — a sticky film of bacteria — to build up on the teeth and harden. Periodontitis can cause sore, bleeding gums, painful chewing, and tooth loss.<a href="#references"><sup>6</sup></a> Women who do not get regular dental care and women who smoke are more likely to have periodontitis.<a href="#references"><sup>7</sup></a></li>
	<li><strong>Loose teeth. </strong>The tissue supporting your teeth may loosen during pregnancy since many of your joints and tissues loosen in preparation for childbirth. Taking good care of your mouth can help prevent tooth loss.</li>
	<li><strong>Wearing down of your tooth enamel. </strong>If you have morning sickness that causes vomiting, the stomach acid that comes up during vomiting can erode tooth enamel (the hard, protective coating on the outside of your teeth). Heartburn, another common pregnancy discomfort, can also wear down your tooth enamel over time if stomach acid is coming up into your throat and mouth. To prevent this erosion, the American Dental Association recommends rinsing your mouth with 1 teaspoon of baking soda mixed in a cup of water 30 minutes before brushing your teeth.<a href="#references"><sup>8</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "I'm pregnant. Is it safe for me to get a dental checkup?",
      content: `

    <div class="answer"><p>Yes. You need to continue your regular dentist visits to help protect your teeth during pregnancy.</p>

<ul>
	<li><strong>Tell your doctor you are pregnant.</strong> Because you are pregnant, your dentist might not take routine x-rays. But the health risk to your unborn baby is very small. If you need emergency treatment or specific dental x-rays to treat a serious problem, your doctor can take extra care to protect your baby.</li>
	<li><strong>Schedule your dental exam early in your pregnancy. </strong>After your 20th week of pregnancy, you may be uncomfortable sitting in a dental chair.</li>
	<li><strong>Have all needed dental treatments.</strong> If you avoid treatment, you may risk your own health and your baby's health.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does menopause affect oral health?",
      content: `

    <div class="answer"><p>Very low levels of the hormone <a href="/glossary#estrogen">estrogen</a> after menopause can affect your oral health. You may experience:<a href="#references"><sup>9</sup></a></p>

<ul>
	<li><strong>Pain. </strong>Many women feel new pain or a burning sensation in their mouth during or after menopause. Researchers are not sure if this pain is related to menopause.<a href="#references"><sup>9</sup></a></li>
	<li><strong>Dry mouth.</strong> The lower levels of estrogen after menopause also decrease the amount of saliva, or spit, you have in your mouth. Dry mouth can cause sore and sensitive gums, cavities, ulcers, infections, and tooth decay.<a href="#references"><sup>10</sup></a><sup>,</sup><a href="#references"><sup>11</sup></a></li>
	<li><a href="/a-z-topics/osteoporosis"><strong>Osteoporosis</strong></a><strong>. </strong>Osteoporosis happens when your bones become weak and break easily. A very low level of the hormone estrogen after menopause raises every woman's risk of osteoporosis. When your bones are weakened from osteoporosis, gum disease can happen more quickly. If you lose bone in your jaw, you could lose your teeth.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How are oral health problems related to other health problems? ",
      content: `

    <div class="answer"><p>Oral health problems can be a sign of other health problems, such as diabetes. Your risk for oral health problems is also higher if you have certain health problems, such as HIV and eating disorders.</p>

<ul>
	<li><a href="/a-z-topics/diabetes"><strong>Diabetes.</strong></a> Gum disease can make diabetes worse.<a href="#references"><sup>12</sup></a> People with diabetes have a higher risk of gum disease. If you have diabetes, your risk is also higher for dry mouth. Thirst is often a symptom of undiagnosed diabetes. If you have high blood sugar, you are more likely to develop problems in your mouth. By managing your blood sugar, brushing and flossing every day, and visiting a dentist regularly, you can help prevent gum disease.</li>
	<li><strong>Eating disorders.</strong> Vomiting, or purging, and eating only small amounts of food can affect your oral health.<a href="#references"><sup>13</sup></a> Stomach acids from throwing up can stain and erode your teeth. If you aren't getting enough to eat, your teeth and jawbone may also become brittle and weak because you aren't getting enough calcium.</li>
	<li><a href="/hiv-and-aids"><strong>HIV.</strong></a> HIV weakens the immune system, which can lead to oral infections. These problems can make it difficult to eat because they can cause mouth pain or tenderness and difficulty chewing and swallowing, and they can lessen your ability to taste the flavors of food. Talk to your doctor or dentist if mouth pain makes it difficult to eat.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I prevent oral health problems?",
      content: `

    <div class="answer"><p>You can help prevent oral health problems by taking the following steps:</p>

<ul>
	<li><strong>Visit your dentist once or twice a year.</strong> Your dentist may recommend more or fewer visits depending on your oral health. At most routine visits, the dentist and a dental hygienist (assistant) will treat you. During regular checkups, dentists look for signs of disease, infections, and injuries.</li>
	<li><strong>Choose healthy foods.</strong> Limit the amount of sugary foods and drinks you have. Lower your risk for tooth decay by brushing after meals and flossing once a day.</li>
	<li><strong>Don't smoke.</strong> Smoking raises your risk of gum disease and mouth and throat cancers. It can also stain your teeth and cause bad breath.</li>
	<li><strong>Drink less soda.</strong> If you drink soda, try to drink less, and replace it with water. Even diet soda has acids that can erode tooth enamel.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What if I am afraid to go to the dentist?",
      content: `

    <div class="answer"><p>Some people avoid the dentist because they are afraid of the physical pain. Women who experienced trauma or violence may also have trouble sitting or lying in a dentist's chair because of post-traumatic stress or fear.</p>

<p>Talk with your dentist about your concerns and ways to make you more comfortable before the exam begins. For example, you may prefer to see a female dentist or to have a female assistant in the room during the visit. It may also help to bring a friend or loved one to the dentist with you.</p>

<p>Your dentist can also make you feel more in control by:</p>

<ul>
	<li>Explaining what will happen next throughout the visit</li>
	<li>Agreeing to stop at any time if you signal to do so. You may want to decide upon a signal beforehand. You can tap your leg or raise your hand.</li>
</ul>

<p>Your dentist can also help you relax by playing music, having a TV in the room, or using other relaxation techniques. Some dentists may suggest giving you medicine to help you relax. One common type of medicine is nitrous oxide, also known as laughing gas. Nitrous oxide can help relieve pain and anxiety, but it may not be a good option if you worry about losing control.<a href="#references"><sup>14</sup></a></p>

<p>If anxiety prevents you from going to the dentist, you may want to talk to a mental health professional, such as a psychologist. Therapy may help reduce your fear. Oral health is a vital part of overall health, so removing fear or anxiety about the dentist is worth the time and effort.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I get help paying for dental care?",
      content: `

    <div class="answer"><p>Sometimes dental insurance is included in your health insurance plan. Sometimes dental coverage comes from a separate, stand-alone dental plan. Low-cost options may also be available in your area.</p>

<ul>
	<li>In the Health Insurance Marketplace, you can get <a href="https://www.healthcare.gov/coverage/dental-coverage/" title="Dental coverage in the Marketplace">dental coverage</a> as part of a health plan or as a separate, stand-alone dental plan.</li>
	<li>If you have insurance that is not part of the Marketplace, check with your insurance provider to find out whether dental care is included or whether you can purchase more dental coverage.</li>
	<li>Most Medicare plans (Parts A, B, and D) do not cover dental care, but Medicare Advantage plans (also called Part C) usually do. Check with your Medicare insurance provider to find out if dental care is included.</li>
	<li>If you have Medicaid, the benefits are different in each state, but dental care must be covered for children under 18 and in many states for people under 21. With Medicaid, dental visits may also be covered during pregnancy. <a href="https://www.medicaid.gov/about-us/contact-us/contact-state-page.html" title="Contact Your State With Questions | Medicaid.gov">Check with your state's program</a> to find out what coverage is available.</li>
	<li>For low-cost options in your area, contact <a href="http://www.ada.org/en/about-the-ada/national-state-local-dental-societies/" title="National, State and Local Dental Societies">your state dental association</a>.</li>
	<li>For free or low-cost options for older adults in your state, search the <a href="https://oralhealth.acl.gov/find4" title="Find a Program">Oral Health database</a> and click or tap on the PDF to view the program's website.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about oral health?",
      content: `

    <div class="answer"><p>If you need more information about oral health, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.cdc.gov/OralHealth" title="Oral Health"><strong>Division of Oral Health, National Center for Chronic Disease Prevention and Health Promotion, CDC, HHS</strong></a><strong> </strong><br>
	Phone Number: 770-488-6054</li>
	<li><a href="https://www.nidcr.nih.gov/" title="National Institute of Dental and Craniofacial Research"><strong>National Institute of Dental and Craniofacial Research, NIH, HHS</strong></a><br>
	Phone Number: 1-866-232-4528</li>
	<li><a href="http://www.agd.org/" class="external-link external-popup" target="_blank"><strong>Academy of General Dentistry</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 1-888-243-3368</li>
	<li><a href="http://www.aapd.org/" class="external-link external-popup" target="_blank"><strong>American Academy of Pediatric Dentistry</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 312-337-2169</li>
	<li><a href="http://www.perio.org/" class="external-link external-popup" target="_blank"><strong>American Academy of Periodontology</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 312-787-5518</li>
	<li><a href="http://www.ada.org/" class="external-link external-popup" target="_blank"><strong>American Dental Association</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 312-440-2500</li>
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
	<li>American Dental Association. (2016). <a href="http://www.ada.org/en/member-center/oral-health-topics/toothbrushes" class="external-link external-popup" target="_blank">Toothbrushes <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>Ogata, Y., Hur, Y. (2016). <a href="http://jada.ada.org/article/S0002-8177(16)30671-7/fulltext" class="external-link external-popup" target="_blank">A higher incidence of dry socket may be related to the use of oral contraceptives after impacted mandibular third-molar extraction <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><em>. Journal of the American Dental Association; </em>147(10): 840–842.</li>
	<li>Bienek, D., Filliben, J.J. (2016). <a href="http://jada.ada.org/article/S0002-8177(16)00066-0/fulltext" class="external-link external-popup" target="_blank">Risk assessment and sensitivity meta-analysis of alveolar osteitis occurrence in oral contraceptive users <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><em>. Journal of the American Dental Association; </em>147(6): 394–404.</li>
	<li>Hamalatha, V.T., Manigandan, T., Sarumathi, T., Aarthi Nisha, V., Amudhan, A. (2013). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3681080/">Dental Considerations in Pregnancy-A Critical Review on the Oral Care</a>. <em>Journal of Clinical &amp; Diagnostic Research; </em>7(5): 948–953.</li>
	<li>Silk, H., Douglass, A.B., Douglass, J.M., Silk, L. (2008). <a href="https://www.ncbi.nlm.nih.gov/pubmed/18481562?dopt=Abstract">Oral health during pregnancy</a>. <em>American Family Physician</em>; 77(8): 1139–44.</li>
	<li>Lieff, S., Boggess, K.A., Murtha, A.P., Jared, H., Madianos, P.N., Moss, K., et al. (2004). <a href="http://www.ncbi.nlm.nih.gov/pubmed/15025223">The oral conditions and pregnancy study: periodontal status of a cohort of pregnant women</a>. <em>Journal of Periodontology</em>; 75(1): 116–26.</li>
	<li>Jeffcoat, M., Parry, S., Sammel, M., Clothier, B., Catlin, A., Macones, G. (2011). <a href="http://onlinelibrary.wiley.com/doi/10.1111/j.1471-0528.2010.02713.x/full" class="external-link external-popup" target="_blank">Periodontal infection and preterm birth: successful periodontal therapy reduces the risk of preterm birth <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>BJOG: An International Journal of Obstetrics and Gynecology; </em>118(2): 250–256.</li>
	<li>American Dental Association. (n.d.). <a href="http://www.mouthhealthy.org/en/pregnancy-slideshow" class="external-link external-popup" target="_blank">Pregnant? 9 Questions You May Have About Your Dental Health <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>Suri, V., Suri, V. (2014). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC4195183/">Menopause and oral health</a>. <em>Journal of Mid-Life Health; </em>5(3): 115–120.</li>
	<li>Friedlander, A.H. (2002). <a href="https://www.ncbi.nlm.nih.gov/pubmed/11811747/">The physiology, medical management and oral implications of menopause.</a> <em>Journal of the American Dental Association; </em>133(1): 73–81.</li>
	<li>Cao, M., Shu, L., Li, J., Su, J., Zhang, W., Wang, Q., et al. (2007). <a href="https://www.ncbi.nlm.nih.gov/pubmed/17805434/">The expression of estrogen receptors and the effects of estrogen on human periodontal ligament cells.</a> <em>Methods and Findings in Experimental and Clinical Pharmacology;</em> 29(5): 329–35.</li>
	<li>Gurav, A., Jadhav, V. (2011). <a href="http://www.ncbi.nlm.nih.gov/pubmed/20923503">Periodontitis and risk of diabetes mellitus</a>. <em>Journal of Diabetes; </em>3(1): 21–8.</li>
	<li>Kisely, S., Baghale, H., Lalloo, R., Johnson, N.W. (2015). <a href="https://www.ncbi.nlm.nih.gov/pubmed/26429686">Association between poor oral health and eating disorders: systematic review and meta-analysis</a>. <em>British Journal of Psychiatry; </em>207(4): 299–305.</li>
	<li>American Dental Association. (2015). <a href="http://www.mouthhealthy.org/en/az-topics/n/nitrous-oxide" class="external-link external-popup" target="_blank">Nitrous Oxide <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
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
