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

export function asthmaPage({ navigation, ...rest }) {
  const condName = "Asthma";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Asthma.jpg?VersionId=zelYSqXrx1o9HuyFZmC8fhWJVAAj_vNQ";
  const condDescription =
    "Asthma is a chronic lung disease that affects the bronchial tubes. Your bronchial tubes carry air into and out of your lungs. When you breathe, your lungs take in oxygen. The oxygen travels through your bloodstream to all parts of your body. \n In people who have asthma, the lungs and walls of the bronchial tubes become inflamed and oversensitive. When people with asthma breathe in 'asthma triggers,' such as smoke, air pollution, cold air, mold, or chemicals, the bronchial tubes tighten in response. This limits airflow and makes it difficult to breathe. Asthma triggers may be different for each person and may change over time";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--  <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Asthma.jpg?VersionId=zelYSqXrx1o9HuyFZmC8fhWJVAAj_vNQ"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Asthma</h1>  -->
            <p><strong>Asthma is a chronic lung disease that causes episodes of wheezing, breathlessness, tightness in the chest, or coughing. </strong>After age 15, asthma is more common in girls and women than in boys and men. Women with asthma may have more symptoms during certain times in the menstrual cycle. Asthma may cause problems during pregnancy. You can help prevent or stop asthma attacks with medicine and by staying away from your asthma triggers, such as pollen, mold, or air pollution.</p>

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
      title: "What is asthma?",
      content: `

    <div class="answer"><p>Asthma is a chronic lung disease that affects the bronchial tubes. Your bronchial tubes carry air into and out of your lungs. When you breathe, your lungs take in oxygen. The oxygen travels through your bloodstream to all parts of your body.</p>

<p>In people who have asthma, the lungs and walls of the bronchial tubes become inflamed and oversensitive. When people with asthma breathe in "asthma triggers," such as smoke, air pollution, cold air, mold, or chemicals, the bronchial tubes tighten in response. This limits airflow and makes it difficult to breathe. <a href="#10">Asthma triggers</a> may be different for each person and may change over time.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets asthma?",
      content: `

    <div class="answer"><p>Before age 15, asthma affects more boys than girls. After age 15, asthma is more common among girls and women than among boys and men.</p>

<p>Researchers believe the hormones <a href="/glossary#estrogen">estrogen</a> and <a href="/glossary#progesterone">progesterone</a> might affect women's airways. Changing hormone levels throughout the menstrual cycle and during pregnancy and menopause may affect airways in women with asthma.<a href="#references"><sup>1</sup></a></p>

<p>Some women are more at risk for asthma:</p>

<ul>
	<li><strong>African-American and Puerto Rican women.</strong> Asthma is more likely to affect Puerto Rican and African-American women than women of other racial and ethnic groups.<a href="#references"><sup>2</sup></a></li>
	<li><strong>Women who live in cities, especially in low-income areas.</strong> Air pollution, indoor allergens (such as cockroaches), and tobacco smoke are more common in urban, low-income areas.<a href="#references"><sup>3</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does asthma affect women?",
      content: `

    <div class="answer"><p>Studies show that asthma may affect women differently than men.<a href="#references"><sup>4</sup></a></p>

<ul>
	<li>Women may experience more asthma symptoms than men do. Women with asthma go to the hospital for asthma treatment more often and use more <a href="#8">quick-relief or "rescue" medicines</a> than men with asthma do.<a href="#references"><sup>1</sup></a></li>
	<li>Women with asthma report more trouble sleeping and more anxiety than men with asthma do.<a href="#references"><sup>1</sup></a></li>
	<li>Women's lungs are smaller than men's. This may make women more sensitive to asthma triggers and make it harder for women to breathe during an asthma attack.<sup><a href="#references">4</a></sup></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of asthma?",
      content: `

    <div class="answer"><p>Asthma symptoms include:</p>

<ul>
	<li><a href="/glossary#wheezing">Wheezing</a></li>
	<li>Coughing</li>
	<li>Shortness of breath</li>
	<li>Chest tightness</li>
</ul>

<p>You may have only one or two of these symptoms, or you may get all of them. You may also get asthma symptoms only at night or in cold weather. Or you may get asthma symptoms after exposure to an allergen or other trigger, or when you have a cold or are exercising.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is asthma diagnosed?",
      content: `

    <div class="answer"><p>Many people develop asthma during childhood, but asthma can happen at any age. Asthma can be difficult to diagnose. Asthma symptoms can be similar to those of other conditions, such as chronic obstructive pulmonary disease (COPD), <a href="/glossary#pneumonia">pneumonia</a>, <a href="/glossary#bronchitis">bronchitis</a>, <a href="/glossary#anxiety_disorder">anxiety disorders</a>, and <a href="/heart-disease-and-stroke/heart-disease">heart disease</a>.</p>

<p>To diagnose asthma, your doctor or nurse may:</p>

<ul>
	<li>Ask about your symptoms and what seems to trigger them</li>
	<li>Ask about your health history</li>
	<li>Do a physical exam</li>
	<li>Ask about your daily habits</li>
	<li>Ask what types of allergens or irritants might be in your workplace or home that could trigger your asthma symptoms</li>
</ul>

<p>Your doctor or nurse may also do tests including:</p>

<ul>
	<li><strong><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="speye-ROM-eh-tree">Spirometry</a>. </strong>A machine called a spirometer measures how much air you can breathe. It also measures how fast you can blow air out. Your doctor or nurse may give you medicines and then retest you to see if the results are better after you take the medicines.</li>
	<li><strong><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="bron-KOH-prah-vuh-KAY-shun">Bronchoprovocation</a>.</strong> Your doctor or nurse tests your lung function using spirometry. During the test, you will put stress on your lungs by exercising or breathing in increasing doses of a special chemical or cold air.</li>
</ul>

<p>Your doctor or nurse may want to test for other problems that might be causing your symptoms. These include <a href="/glossary#sleep_apnea">sleep apnea</a>, vocal cord problems, or stomach acid backing up into the throat.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is asthma treated?",
      content: `

    <div class="answer"><p>Asthma is a chronic disease. This means that it can be treated but not cured. However, some people are able to manage asthma so that symptoms do not happen again or happen rarely.</p>

<p>You can <a href="https://www.cdc.gov/asthma/faqs.htm" title="Learn How to Control Asthma">take steps to control asthma</a> and prevent problems by:</p>

<ul>
	<li>Working with your doctor or nurse to set up and follow a <a href="#7">personal asthma action plan</a></li>
	<li><a href="#8">Taking medicines</a> as your doctor or nurse prescribes them for you</li>
	<li>Staying away from your <a href="#10">asthma triggers</a></li>
	<li>Getting a flu shot. The <a href="https://www.cdc.gov/flu/asthma/index.htm" title="Flu and People with Asthma">flu can be very dangerous for women with asthma</a>.&nbsp;Find a clinic near you where you can <a href="https://vaccinefinder.org/" title="HealthMap Vaccine Finder" class="external-link external-popup" target="_blank">get the flu shot <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is an asthma action plan?",
      content: `

    <div class="answer"><p>Your doctor or nurse will work with you to come up with an action plan for treating your asthma. The action plan includes:</p>

<ul>
	<li>What <a href="#8">medicines</a> to take</li>
	<li>When to take your medicines</li>
	<li>How to monitor your asthma, such as with a special tool called a "peak flow meter," which measures how well air is flowing out of your lungs</li>
	<li>Ways to stay away from <a href="#10">asthma triggers</a></li>
	<li>When to call your doctor or nurse or go to the emergency room</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What types of medicines treat asthma?",
      content: `

    <div class="answer"><p>Asthma medicines work by opening the lung airways or by reducing the inflammation in the lungs. Some asthma medicines are pills, but most come from an inhaler (you breathe the medicine in).</p>

<p>Asthma medicines fall into two groups: long-term control medicines and quick-relief or "rescue" medicines.</p>

<p><strong>Long-term control medicines</strong> help you have fewer and less severe asthma attacks. But they don't work to stop an asthma attack that has already started. You take long-term control medicines every day to relieve inflammation and help open the airways.</p>

<p>Common types of long-term control medicines include inhaled corticosteroids and long-acting beta agonists. Inhaled corticosteroids help reduce inflammation in the lungs so that you are less likely to have an asthma attack. They will probably be the first type of long-term asthma control medicine your doctor will give you. If your asthma is not controlled with an inhaled corticosteroid, the Food and Drug Administration (FDA) approves adding a long-acting beta agonist to your long-term control treatment. Beta agonists help open your airways but you should only use long-acting beta agonists alongside an inhaled corticosteroid.</p>

<p><strong>Quick-relief or "rescue" medicines</strong> help stop attacks once they start. Quick-relief medicines include short-acting inhaled beta agonists like albuterol. Quick-relief medicines usually make your symptoms go away within minutes. They do this by quickly relaxing tightened muscles around the airways.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Are complementary or alternative therapies safe to treat asthma?",
      content: `

    <div class="answer"><p>Research has not shown complementary (add-on) or alternative treatments to stop an asthma attack or prevent asthma symptoms. More research is needed about whether complementary or alternative therapies work or are safe for asthma treatment.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are common asthma triggers?",
      content: `

    <div class="answer"><p>Many different things can trigger an asthma attack. And what triggers one person's asthma may not trigger another person's asthma. Common <a href="https://www.epa.gov/asthma/asthma-triggers-gain-control" title="Asthma Triggers: Gain Control">asthma triggers</a> include:</p>

<ul>
	<li>Tobacco smoke</li>
	<li>Animal urine, saliva, and dander (dead skin that comes from pets like cats and dogs)</li>
	<li>Dust mites</li>
	<li>Cockroaches</li>
	<li>Air pollution</li>
	<li>Mold</li>
	<li>Pollens and other allergens in the air (such as from trees and grass)</li>
	<li>Fragrances (including personal care products like lotions or household products like candles that have fragrance added)</li>
	<li>Physical activity (called exercise-induced asthma)</li>
	<li>Cold air</li>
	<li>Wood smoke</li>
	<li>Preservatives in alcohol called "sulfites"</li>
	<li>Certain chemicals in cleaning products or other types of chemicals you might use at work or at home</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I prevent an asthma attack?",
      content: `

    <div class="answer"><p>You can take <a href="#8">medicines</a> to help prevent and stop asthma attacks. You can also help prevent attacks by staying away from <a href="#10">asthma triggers</a> and following these steps:<a href="#references"><sup>5</sup></a></p>

<ul>
	<li><strong>Monitor the air quality and pollen counts.</strong> If you have asthma, get updates on the air quality index and pollen count in your local area. Air quality tells you how much pollution will be in the air based on the weather. Pollen levels are higher during certain times of the year when different types of plants release pollen into the air.

	<ul>
		<li>Tune in to news media and weather reports on television, the radio, or online for air quality and pollen counts.</li>
		<li><a href="http://www.enviroflash.info/" title="Air Quality Notifications" class="external-link external-popup" target="_blank">Sign up <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> to get a text message, email, or notification when the air quality is bad in your community.</li>
		<li>Download a free app for your phone that tells you what the pollen count is in your community. Search for the keywords, "pollen" or "asthma" in your app store.</li>
	</ul>
	</li>
	<li><strong>Stay inside when pollen is high or air quality is bad. </strong>If you have asthma, you are probably more sensitive to bad air quality and high pollen counts. Bad air quality or pollen may trigger asthma symptoms or an asthma attack. Try not to work or play hard outside when pollen or air pollution levels are high.</li>
	<li><strong>Use air conditioning.</strong> If you have air conditioning, use it when outdoor asthma triggers (pollution or pollen) are high or to keep the humidity lower in your home. If mold triggers your asthma, using a dehumidifier to keep the humidity level low (between 30% and 50% humidity) in your home can help prevent symptoms.</li>
	<li><strong>Ask your doctor about taking medicine right before you exercise. </strong>This may help you prevent asthma symptoms. Fatigue, wheezing, and coughing brought on by exercise can be signs of asthma that is not controlled. Talk to your doctor or nurse about your symptoms. You may need to adjust your medicine.</li>
	<li><strong>Don't use household products with chemical irritants.</strong> Some cleaners, paints, pesticides, or air fresheners can trigger asthma symptoms. Try "fragrance-free" products if fragrances trigger your asthma.</li>
	<li><strong>Keep cockroaches away.</strong> Clean up food spills and clutter right away. Seal cracks that cockroaches and other pests can get through. Keep all food in airtight containers. Use traps or bait, not sprays, to kill cockroaches.</li>
	<li><strong>Vacuum once a week.</strong> If you can, use a vacuum with a HEPA (high-efficiency particulate air) filter. Leave the room and have someone without asthma vacuum rugs, upholstered furniture, and curtains. Dust with a damp cloth to trap dust mites.</li>
	<li><strong>Stay away from pet dander.</strong> If pet dander triggers asthma, keep your pet out of your bedroom and regularly vacuum areas where they spend time.</li>
	<li><strong>Don't smoke.</strong> Don't allow anyone to smoke inside your home or car.</li>
	<li><strong>Use the exhaust fan when cooking.</strong> The exhaust fan helps move away dangerous gasses created by burning wood, natural gas, and kerosene.</li>
	<li><strong>Wash off allergens or pollutants.</strong> Shower after going outside, so that you wash off any allergens or pollution. Wash bedding in hot water regularly to kill dust mites.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does my menstrual cycle affect asthma?",
      content: `

    <div class="answer"><p>Changing hormone levels throughout your menstrual cycle may make your asthma symptoms worse during some parts of the cycle.</p>

<p>If your asthma symptoms get worse during certain parts of your cycle every month, track your symptoms and menstrual cycle on a calendar. After a few months, you might be able to predict when your asthma symptoms will flare up based on your menstrual cycle. You can then stay away from other <a href="#10">asthma triggers</a> during these times.</p>

<p>Tell your doctor or nurse:</p>

<ul>
	<li>If your asthma attacks happen during a certain time in your menstrual cycle</li>
	<li>If you take birth control</li>
	<li>If you take any kind of hormones</li>
	<li>About any over-the-counter medicines you take. Some common pain medicines that women take to relieve menstrual cramps, such as aspirin and <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="eye-byoo-PROH-fuhn">ibuprofen</a>, can trigger asthma attacks in some women.<a href="#references"><sup>6</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does asthma affect pregnancy?",
      content: `

    <div class="answer"><p>Many women who have asthma do not have any problems during pregnancy. But asthma can cause problems for you and your baby during pregnancy because of changing hormone levels. Your unborn baby depends on the air you breathe in for oxygen. Asthma attacks during pregnancy can prevent your unborn baby from getting enough oxygen.</p>

<p>Pregnant women with asthma have a higher risk for:<a href="#references"><sup>7</sup></a></p>

<ul>
	<li><a href="/glossary#preeclampsia">Preeclampsia</a></li>
	<li><a href="/glossary#gestational_diabetes">Gestational diabetes</a></li>
	<li>Problems with the placenta, including <a href="/glossary#placental_abruption">placental abruption</a></li>
	<li><a href="/glossary#preterm_birth">Premature</a> birth (babies born before 37 weeks of pregnancy)</li>
	<li>Low birth weight baby (less than 5 and a half pounds)</li>
	<li><a href="/glossary#cesarean">Cesarean section</a> (C-section)</li>
	<li>Serious bleeding after childbirth (called postpartum hemorrhage)</li>
</ul>

<p>Pregnancy may also make asthma symptoms seem worse due to acid reflux or heartburn. If you have asthma and are thinking about becoming pregnant, talk to your doctor or nurse. Having your asthma under control before you get pregnant can help prevent problems during pregnancy.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Is asthma medicine safe to take during pregnancy?",
      content: `

    <div class="answer"><p>Some asthma medicines may be safe to take during pregnancy. Talk to your doctor or nurse about whether it is safe to continue taking your medicine during pregnancy.</p>

<p>Your doctor or nurse may suggest a different medicine to take. Don't stop taking your medicine or change your medicine without talking to your doctor or nurse first. Not using medicine that you need may be more harmful to you and your baby than using the medicine. Untreated asthma can cause <a href="#13">serious problems during pregnancy</a>.</p>

<p>Also, talk with your doctor or nurse about getting a flu shot. The flu can be very dangerous for women with asthma, especially during pregnancy when your immune system is different from normal.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does menopause affect asthma?",
      content: `

    <div class="answer"><p>For some women, asthma symptoms do not change after menopause.<a href="#references"><sup>8</sup></a></p>

<p>However, other women report that their asthma symptoms get better after menopause. Researchers think very low levels of <a href="/glossary#estrogen">estrogen</a> after menopause may be a reason why asthma symptoms can get better and why fewer women develop asthma after menopause. This may also explain why women who take <a href="/menopause/menopause-treatment">menopausal hormone therapy</a> for menopause symptoms are at higher risk for developing asthma.<a href="#references"><sup>8</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about asthma?",
      content: `

    <div class="answer"><p>For more information about asthma, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="https://www.cdc.gov/asthma/default.htm" title="Asthma"><strong>Centers for Disease Control and Prevention (CDC), HHS</strong></a><br>
	Phone Number: 1-800-232-4636</li>
	<li><a href="https://www.epa.gov/asthma" title="Asthma"><strong>Environmental Protection Agency (EPA)</strong></a><br>
	Phone Number: 202-564-4700</li>
	<li><a href="https://www.nhlbi.nih.gov/health/health-topics/topics/asthma/" title="What Is Asthma?"><strong>National Heart, Lung, and Blood Institute (NHLBI), NIH, HHS</strong></a><br>
	Phone Number: 301-592-8573</li>
	<li><a href="https://www.niaid.nih.gov/diseases-conditions/asthma" title="Asthma"><strong>National Institute of Allergy and Infectious Diseases (NIAID), NIH, HHS</strong></a><br>
	Phone Number: 1-866-284-4107</li>
	<li><a href="https://www.aaaai.org/home.aspx" class="external-link external-popup" target="_blank"><strong>American Academy of Allergy, Asthma &amp;&nbsp;Immunology</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 414-272-6071</li>
	<li><a href="http://www.lungusa.org/" class="external-link external-popup" target="_blank"><strong>American Lung Association</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 1-800-586-4872</li>
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
	<li>Zein, J.G., Erzurum, S.C. (2015). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4572514/">Asthma is Different in Women</a>. <em>Current Allergy and Asthma Reports; </em>15(6): 28.</li>
	<li>Centers for Disease Control and Prevention. (2017). <a href="https://www.cdc.gov/asthma/nhis/2015/table4-1.htm">2015 National Health Interview Survey Data. Table 4-1</a>.</li>
	<li>Forno, E., Celedón, J.C. (2009). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3920741/">Asthma and Ethnic Minorities: Socioeconomic Status and Beyond</a>. <em>Current Opinion in Allergy and Clinical Immunology</em>; 9(2): 154–160.</li>
	<li>Pignataroa, F.S., Bonini, M., Forgione, A., Melandri, S., Usmani, O.S. (2017). <a href="http://www.sciencedirect.com/science/article/pii/S1043661816311446" class="external-link external-popup" target="_blank">Asthma and gender: The female lung <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Pharmacological Research</em>; 119: 384–390.</li>
	<li>National Heart, Lung, and Blood Institute. (2007). <a href="https://www.nhlbi.nih.gov/files/docs/guidelines/asthgdln.pdf">Expert Panel Report 3: Guidelines for the Diagnosis and Management of Asthma.</a> (PDF, 3.87 MB)</li>
	<li>Levy, S., Volans, G. (2001). <a href="https://www.ncbi.nlm.nih.gov/pubmed/11665870">The use of analgesics in patients with asthma</a>. <em>Drug Safety; </em>24(11): 829–41.</li>
	<li>Mendola, P., Laughon, S.K., Mannisto, T.I., Leishear, K., Reddy, U.M., Chen, Z., Zhang, J. (2013). <a href="http://www.ajog.org/article/S0002-9378%2812%2902062-5/abstract" class="external-link external-popup" target="_blank">Obstetric Complications Among U.S. Women with Asthma <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>American Journal of Obstetrics &amp; Gynecology; </em>208(2): 127.e1–127.e8.</li>
	<li>Baptist, A.P., Hamad, A., Patel, M.R. (2014). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4153393/">Older Women with Asthma: Special Challenges in Treatment and Self-Management</a>. <em>Annals of Allergy, Asthma &amp; Immunology; </em>113(2): 125–130.</li>
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
