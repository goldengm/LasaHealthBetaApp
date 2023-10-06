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

export function diabetesPage({ navigation, ...rest }) {
  const condName = "Diabetes";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Diabetes.jpg?VersionId=KrFwusUwP3BzA64a.66m2ZICHYvFAq5_";
  const condDescription =
    "Diabetes is a disease caused by high levels of blood sugar (glucose) in your body. This can happen when your body does not make insulin or does not use insulin correctly. \n Insulin is a hormone made in the pancreas, an organ near your stomach. Insulin helps the glucose from food get into your body's cells for energy. If your body does not make enough insulin, or your body does not use the insulin correctly, the glucose stays and builds up in your blood. \n Over time, this extra glucose can lead to prediabetes or diabetes. Diabetes puts you at risk for other serious and life-threatening health problems, such as heart disease, stroke, blindness, and kidney damage.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Diabetes.jpg?VersionId=KrFwusUwP3BzA64a.66m2ZICHYvFAq5_"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Diabetes</h1>  -->
            <p><strong>Diabetes is a disease in which blood sugar (glucose) levels in your body are too high.</strong> Diabetes can cause serious health problems, including heart attack or stroke, blindness, problems during pregnancy, and kidney failure. About 15 million women in the United States have diabetes, or about 1 in every 9 adult women.<sup><a href="#references">1</a></sup></p>

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
      title: "What is diabetes?",
      content: `

    <div class="answer"><p>Diabetes is a disease caused by high levels of blood sugar (glucose) in your body. This can happen when your body does not make insulin or does not use insulin correctly.</p>

<p>Insulin is a hormone made in the pancreas, an organ near your stomach. Insulin helps the glucose from food get into your body's cells for energy. If your body does not make enough insulin, or your body does not use the insulin correctly, the glucose stays and builds up in your blood.</p>

<p>Over time, this extra glucose can lead to prediabetes or diabetes. Diabetes puts you at risk for other serious and life-threatening health problems, such as&nbsp;<a href="/heart-disease-and-stroke/heart-disease" title="Heart health and stroke">heart disease</a>, stroke, blindness, and kidney damage.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the different types of diabetes?",
      content: `

    <div class="answer"><p>The three main types of diabetes are:</p>

<ul>
	<li><strong>Type 1 diabetes.</strong>&nbsp;Type 1 diabetes is an autoimmune disease, meaning the body's immune (defense) system attacks and destroys the cells in the pancreas that make insulin. If you have type 1 diabetes, your body does not make insulin, so you must take insulin every day.</li>
	<li><strong>Type 2 diabetes.</strong>&nbsp;This is the most common type of diabetes. You can get type 2 diabetes at any age, even during childhood. With type 2 diabetes, your body does not make enough insulin or is not able to use its own insulin correctly. When this happens, blood glucose levels rise.</li>
	<li><strong>Gestational&nbsp;diabetes.</strong>&nbsp;Gestational diabetes is a type of diabetes that happens only during pregnancy. Gestational diabetes can cause health problems for the baby and the mother if not controlled. Although gestational diabetes goes away after your baby is born, having diabetes during pregnancy raises your risk for type 2 diabetes later on.<sup><a href="#references">2</a></sup>&nbsp;Learn more about&nbsp;<a href="http://diabetes.niddk.nih.gov/dm/pubs/gestational/" title="What I need to know about Gestational Diabetes">gestational diabetes</a>&nbsp;at the National Diabetes Information Clearinghouse.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Am I at risk for diabetes?",
      content: `

    <div class="answer"><p>A risk factor is something that puts you at a higher risk for a disease compared to the average person.</p>

<p>Risk factors for&nbsp;<strong>type 1 diabetes</strong>&nbsp;in women and girls include:</p>

<ul>
	<li>Age: It often develops in childhood.</li>
	<li>Family health history: Having a parent or brother or sister with type 1 diabetes</li>
	<li>Certain viral infections or illnesses, such as&nbsp;coxsackie&nbsp;virus B (a common cause of hand, foot, and mouth disease), rotavirus (also called stomach flu), and mumps<sup><a href="#references">3</a></sup></li>
	<li>Where you live: It is more common in people who live in colder climates.</li>
</ul>

<p>Risk factors for&nbsp;<strong>type 2 diabetes</strong>&nbsp;in women and girls include:<sup><a href="#references">4</a></sup></p>

<ul>
	<li>Overweight or obesity: Body mass index (BMI) of 25 or higher for adults.&nbsp;<a href="http://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/english_bmi_calculator/bmi_calculator.html" title="Adult BMI calculator">Find out your BMI</a>. Children and teens weighing above the 85th percentile based on their BMI are at risk for type 2 diabetes.&nbsp;<a href="http://www.cdc.gov/healthyweight/assessing/bmi/childrens_bmi/about_childrens_bmi.html#HowIsBMICalculated" title="About Child &amp; Teen BMI">Find BMI charts for children and teens.</a></li>
	<li>Older age: 45 or older. After&nbsp;<a href="/menopause/" title="Menopause">menopause,</a>&nbsp;women are at higher risk for weight gain, especially more weight around the waist, which raises the risk for type 2 diabetes.</li>
	<li>Family health history: Having a mother, father, brother, or sister with diabetes</li>
	<li>Race/ethnicity: Family background of African-American, American Indian/Alaska Native, Hispanic, Asian-American, and Native Hawaiian/Pacific Islander</li>
	<li>Having a baby that weighed 9 pounds or more at birth</li>
	<li>Having diabetes during pregnancy (gestational diabetes)</li>
	<li>High blood pressure: Taking medicine for high blood pressure or having a blood pressure of 140/90 mmHg or higher. (Both numbers are important. If one or both numbers are usually high, you have high blood pressure.)</li>
	<li>High cholesterol: HDL cholesterol of 35 mg/dL or lower and triglycerides of 250 mg/dL or higher</li>
	<li>Lack of physical activity: Women who are active less than three times a week</li>
	<li>Having&nbsp;<a href="/publications/our-publications/fact-sheet/polycystic-ovary-syndrome.html" title="Polycystic ovary syndrome (PCOS) fact sheet">polycystic ovary syndrome</a>&nbsp;(PCOS)</li>
	<li>Personal history of&nbsp;<a href="/heart-disease-and-stroke" title="Heart Health and Stroke">heart disease or stroke</a></li>
</ul>

<p>If you have any of these risk factors, talk to your doctor about ways to lower your risk for diabetes. You can also take the&nbsp;<a href="http://ndep.nih.gov/am-i-at-risk/diabetes-risk-test.aspx" title="Diabetes Risk Test">Diabetes Risk Test</a>&nbsp;and talk about the results with your doctor.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets diabetes?",
      content: `

    <div class="answer"><p><strong>Type 1</strong> diabetes&nbsp;usually develops in children and young adults, but it can happen at any age.<a href="#references"><sup>5</sup></a> It is more common in non-Hispanic whites and non-Hispanic blacks than in Hispanic populations.<a href="#references"><sup>6</sup></a> About 5% of people with diabetes have type 1 diabetes.<a href="#references"><sup>1</sup></a>&nbsp;If you have a parent or sibling with the disease you may be more likely to develop type 1 diabetes.</p>

<p><strong>Type 2</strong> diabetes&nbsp;is more common in adults, especially in people who are 45 and older, have a family history of diabetes, or have overweight or obesity. About 90–95% of people with diabetes have type 2 diabetes.&nbsp;Type 2 diabetes is becoming more common in children and teens, which may be because more of them have overweight and obesity.<sup><a href="#references">7,8,9</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Do women of color need to worry about diabetes?",
      content: `

    <div class="answer"><p>Yes. It is more common for certain racial and ethnic groups to have diabetes. This affects women who are:</p>

<ul>
	<li><strong>American Indian/Alaska Native.&nbsp;</strong>American Indian/Alaska Native women have the highest rate of diabetes among all racial and ethnic groups in the United States. It is more than twice as common for American Indian/Alaska Native women to be diagnosed with diabetes compared to white women. But rates of diabetes are different in different regions of the United States. Rates are lowest in Alaska Native people and highest in people who are American Indian and live in certain areas of the Southwest.<sup><a href="#references">1</a></sup></li>
	<li><strong>Black.</strong>&nbsp;Diabetes is almost twice as common in non-Hispanic black women compared to non-Hispanic white women.<sup><a href="#references">1</a></sup></li>
	<li><strong>Hispanic.</strong>&nbsp;It is more common for Hispanic women than non-Hispanic white women to be diagnosed with diabetes. Among Hispanic women in the United States, it may be more or less common for women of different heritage groups to be diagnosed with diabetes.<sup><a href="#references">1</a></sup> For example, Mexican-American women have almost twice the rate of diabetes diagnosis compared to white women. But Cuban-American women have a lower rate compared to white women.<sup><a href="#references">1</a></sup></li>
	<li><strong>Asian.&nbsp;</strong>Diabetes is the fifth-leading cause of death for Asian or Pacific Islander women in the United States.<sup><a href="#references">10</a></sup> However, it may be more or less common for women of different Asian heritage groups to be diagnosed with diabetes. One in every 33 Chinese-American women is diagnosed with diabetes compared to 1 in every 10 Asian Indian women.<sup><a href="#references">1</a></sup> It is also more common for Asian women to develop <a href="#2">gestational diabetes</a> compared to white women.<sup><a href="#references">11</a></sup></li>
</ul>

<p><a href="#3">Learn more about risk factors for diabetes.</a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does diabetes affect women differently than men?",
      content: `

    <div class="answer"><p>Diabetes affects women and men in almost equal numbers. However, diabetes affects women differently than men.</p>

<p>Compared with men with diabetes, women with diabetes have:<sup><a href="#references">12</a></sup></p>

<ul>
	<li>A higher risk for heart disease. Heart disease is the most common complication of diabetes.&nbsp;<a href="/heart-disease-and-stroke" title="Heart Health and Stroke">Learn more about the link between heart disease and stroke and diabetes in women</a></li>
	<li>Lower survival rates and a poorer quality of life after heart attack</li>
	<li>A higher risk for blindness</li>
	<li>A higher risk for depression. Depression, which affects twice as many women as men, also raises the risk for diabetes in women.<sup><a href="#references">13</a></sup></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Does diabetes raise my risk for other health problems?",
      content: `

    <div class="answer"><p>Yes. The longer you have type 2 diabetes, the higher your risk for developing serious medical problems from diabetes. Also, if you smoke and have diabetes, you are even more likely to develop serious medical problems from diabetes, compared with people who have diabetes and do not smoke.<sup><a href="#references">14</a></sup></p>

<p>The extra glucose in the blood that leads to diabetes can damage your nerves and blood vessels. Nerve damage from diabetes can lead to pain or a permanent loss of feeling in your hands, feet, and other parts of your body.<sup><a href="#references">15</a></sup></p>

<p>Blood vessel damage from diabetes can also lead to:</p>

<ul>
	<li>Heart disease</li>
	<li>Stroke</li>
	<li>Blindness</li>
	<li>Kidney failure</li>
	<li>Leg or foot amputation</li>
	<li>Hearing loss</li>
</ul>

<p>Women with diabetes are also at higher risk for: &nbsp;</p>

<ul>
	<li>Problems getting pregnant</li>
	<li>Problems during pregnancy, including possible health problems for you and your baby</li>
	<li>Repeated urinary and vaginal infections</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes diabetes?",
      content: `

    <div class="answer"><p>Researchers do not know the exact causes of type 1 and type 2 diabetes. Researchers do know that inheriting certain genes from your family can raise your risk for developing diabetes. Obesity is also a major risk factor for type 2 diabetes. Smoking can also cause type 2 diabetes. And the more you smoke the higher your risk for type 2 diabetes and other serious health problems if you already have diabetes.<sup><a href="#references">16</a></sup></p>

<p>Weight loss can help control type 2 diabetes so that you are healthier. Quitting smoking can also help you control your blood sugar levels. Being a healthy weight and not smoking can help all women be healthier.</p>

<p>But, obesity and smoking do not always cause diabetes. Some women who are overweight or obese or smoke never develop diabetes. Also, women who are a normal weight or only slightly overweight can develop diabetes if they have other&nbsp;<a href="#3">risk factors</a>, such as a family history of diabetes.&nbsp;</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the signs and symptoms of diabetes?",
      content: `

    <div class="answer"><p><strong>Type 1 diabetes</strong>&nbsp;symptoms are usually more severe and may develop suddenly.</p>

<p><strong>Type 2 diabetes</strong>&nbsp;may not cause any signs or symptoms at first. Symptoms can develop slowly over time. You may not notice them right away.</p>

<p>Common signs and symptoms of type 1 and type 2 diabetes include:</p>

<ul>
	<li>Feeling more tired than usual</li>
	<li>Extreme thirst</li>
	<li>Urinating more than usual</li>
	<li>Blurry vision</li>
	<li>Feeling hungrier than usual</li>
	<li>Losing weight without trying</li>
	<li>Sores that are slow to heal</li>
	<li>Dry, itchy skin</li>
	<li>Tingling in the hands or feet</li>
	<li>More infections, such as&nbsp;<a href="/a-z-topics/urinary-tract-infections" title="Urinary tract infection fact sheet">urinary tract infections</a>&nbsp;and&nbsp;<a href="/a-z-topics/vaginal-yeast-infections" title="Vaginal yeast infections fact sheet">vaginal yeast infections</a>, than usual</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Do I need to be tested for diabetes?",
      content: `

    <div class="answer"><p>Maybe. You should be tested for diabetes if you are between 40 and 70 years old and are overweight or obese. Your doctor may recommend testing earlier than age 40 if you also have other&nbsp;<a href="#3" title="Am I at risk for diabetes?">risk factors for diabetes</a>. Also, talk to your doctor about diabetes testing if you have&nbsp;<a href="#9" title="What are the signs and symptoms of diabetes?">signs or symptoms</a>&nbsp;of diabetes. Your doctor will use a blood test to see if you have diabetes.</p>

<p>If the testing shows that your blood sugar levels are high, you can begin making healthy changes to your eating habits and getting more physical activity to help prevent diabetes.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is prediabetes?",
      content: `

    <div class="answer"><p>Prediabetes means your blood sugar (glucose) level is higher than normal, but it is lower than the diabetes range. It also means you are at higher risk of getting type 2 diabetes and&nbsp;<a href="/heart-disease-and-stroke/heart-disease" title="Heart health and stroke">heart disease</a>.</p>

<p>As many as 27 million American women have prediabetes.<sup><a href="#references">17</a></sup> If you have prediabetes, you can make healthy changes, such as doing some type of physical activity on most days, to lower your risk of getting diabetes and return to normal blood sugar levels. Losing 7% of your body weight (or 14 pounds if you weigh 200 pounds) can lower your risk for type 2 diabetes by more than half. If you have prediabetes, get your blood glucose checked every year by a doctor or nurse.<sup><a href="#references">4</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is diabetes treated?",
      content: `

    <div class="answer"><p>Diabetes treatment includes managing your blood sugar levels to control your symptoms. You can help control your blood sugar levels by eating healthy and getting regular physical activity.</p>

<p><strong>With type 1 diabetes, you also will need to take insulin&nbsp;</strong>through shots or an insulin pump. Insulin cannot be taken as a pill.</p>

<p><strong>Type 2 diabetes treatment also may include taking medicine to control your blood sugar.</strong>&nbsp;Over time, people with type 2 diabetes make less and less of their own insulin. This may mean that you will need to increase your medicines or start taking insulin shots to keep your diabetes in control.</p>

<p>Learn more about controlling diabetes at the&nbsp;<a href="http://ndep.nih.gov/index.aspx" title="National Diabetes Education Program Homepage">National Diabetes Education Program</a>&nbsp;website.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Is there anything I can do to prevent type 1 diabetes?",
      content: `

    <div class="answer"><p>Researchers do not know how to prevent type 1 diabetes. Researchers are still looking for ways to prevent type 1 diabetes in women and girls by studying their close relatives who have diabetes.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Is there anything I can do to prevent type 2 diabetes?",
      content: `

    <div class="answer"><p>Yes. Many studies, including the large&nbsp;<a href="http://ndep.nih.gov/media/dpp_overview_508.pdf" title="Diabetes Prevention Program and Outcomes Study Overview">Diabetes Prevention Program</a>&nbsp;study, have proven that you can prevent diabetes by losing weight. Weight loss through healthy eating and more physical activity improves the way your body uses insulin and glucose.</p>

<ul>
	<li><strong>Weight loss. </strong>Obesity is a leading risk factor for diabetes.&nbsp;<a href="http://www.cdc.gov/nccdphp/dnpa/healthyweight/assessing/bmi/adult_BMI/english_bmi_calculator/bmi_calculator.htm" title="Adult BMI Calculator">Calculate your BMI</a>&nbsp;to see whether you’re at a healthy weight. If you’re overweight or obese, start making small changes to your eating habits and get more physical activity. Even a small amount of weight loss (7%, or about 14 pounds for a 200-pound woman) can delay or even prevent type 2 diabetes.</li>
	<li><strong><a href="http://www.cdc.gov/diabetes/consumer/eatright.htm" title="Eat Right Living with Diabetes">Eating healthy</a>.</strong> Choose vegetables, whole grains (such as whole wheat or rye bread, whole grain cereal, or brown rice), beans, and fruit. Read&nbsp;<a href="http://www.fda.gov/Food/IngredientsPackagingLabeling/LabelingNutrition/ucm274593.htm" title="How to Understand and Use the Nutrition Facts Label">food labels</a>&nbsp;to help you choose foods low in saturated fat, trans fat, and sodium. Limit processed foods and sugary foods and drinks.</li>
	<li><strong>Getting active</strong><strong>.</strong> Aim for 30 minutes of physical activity most days of the week and limit the amount of time you spend sitting.</li>
</ul>

<p>Learn&nbsp;<a href="/fitness-and-nutrition" title="Fitness and nutrition">how to eat healthier and get more physical activity</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Is it safe for women with diabetes to get pregnant?",
      content: `

    <div class="answer"><p>Yes. If you have type 1 or type 2 diabetes, you can have a healthy pregnancy. If you have diabetes and you want to have a baby, you need to plan ahead,&nbsp;<strong>before</strong>&nbsp;you get pregnant.</p>

<p>Talk to your doctor before you get pregnant. He or she can talk to you about steps you can take to keep your baby healthy. This may include a diabetes education program to help you better understand your diabetes and how to control it during pregnancy.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about diabetes?",
      content: `

    <div class="answer"><p>For more information about diabetes, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.cdc.gov/diabetes/prevention/index.htm" title="National Diabetes Prevention Program Homepage"><strong>National Diabetes Education Program, CDC, HHS</strong></a>&nbsp;<br>
	Phone Number:&nbsp;800-232-4636</li>
	<li><a href="http://diabetes.niddk.nih.gov/" title="Diabetes A-Z"><strong>National Diabetes Information Clearinghouse, NIDDK, NIH, HHS</strong></a>&nbsp;<br>
	Phone Number:&nbsp;800-860-8747</li>
	<li><a href="http://www.diabetes.org/" title="American Diabetes Association Homepage" class="external-link external-popup" target="_blank"><strong>American Diabetes Association</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;<br>
	Phone Number:&nbsp;800-342-2383</li>
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
	<li>Centers for Disease Control and Prevention (CDC). (2017).&nbsp;<a href="https://www.cdc.gov/diabetes/pdfs/data/statistics/national-diabetes-statistics-report.pdf" title="National Diabetes Statistices Report, 2014">National diabetes statistics report, 2017</a> (PDF, 1.4 MB).</li>
	<li>Coustan, D. R. (Ed). (2013). Medical management of pregnancy complicated by diabetes. 5th edition. Alexandria, VA: American Diabetes Association.</li>
	<li>Filippi, C. M., &amp; von Herrath, M. G. (2008).&nbsp;<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2570378/">Viral trigger for type 1&nbsp;diabetes</a>.&nbsp;<em>Diabetes,&nbsp;</em><em>57</em>(11), 2863–2871.</li>
	<li>American Diabetes Association. (2013). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3537269/">Standards of medical care in diabetes — 2013</a>.&nbsp;<em>Diabetes Care,&nbsp;</em><em>36</em>(Suppl. 1), S11–66.</li>
	<li>National Institute of Diabetes and Digestive and Kidney Diseases. (NIDDK). (2017). <a href="https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/type-1-diabetes">Type 1 diabetes</a>.</li>
	<li>Menke, A., Orchard, T. J., Imperatore, G., Bullard, K. M., Mayer-Davis, E., &amp; Cowie, C. C. (2013). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4562437/">The prevalence of type 1 diabetes in the United States</a>. <em>Epidemiology, 24</em>(5), 773–774.</li>
	<li>Pulgaron, E. R., &amp; Delamater, A. M. (2014). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4099943/">Obesity and type 2 diabetes in children: Epidemiology and treatment</a>. <em>Current Diabetes Reports, 14</em>(8), 508.</li>
	<li>Dabelea, D., Mayer-Davis, E. J., Saydah, S., Imperatore, G., Linder, B., Divers, J., … Hamman, R. F., for the SEARCH for Diabetes in Youth Study. (2014). <a href="https://www.ncbi.nlm.nih.gov/pubmed/24794371">Prevalence of type 1 and type 2 diabetes among children and adolescents from 2001 to 2009</a>. <em>JAMA, 311</em>(17), 1778–1786.</li>
	<li>Mayer-Davis, E. J., Lawrence, J. M., Dabelea, D., Divers, J., Ison, S., Dolan, L., … Wagenknecht, L., for the SEARCH for Diabetes in Youth Study. (2017). <a href="https://www.ncbi.nlm.nih.gov/pubmed/28402773">Incidence trends of type 1 and type 2 diabetes among youths, 2002-2012</a>. <em>New England Journal of Medicine, 376</em>(15), 1419–1429.</li>
	<li>CDC. (2018). <a href="https://www.cdc.gov/women/lcod/2015/race-ethnicity/index.htm">Leading causes of death in females, 2015 (current listing)</a>.</li>
	<li>Blatt, A. J., Nakamoto, J. M., &amp; Kaufman, H. W. (2011).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/21173645" target="_blank" title="Gaps in diabetes screening during pregnancy and  postpartum.">Gaps in diabetes screening during pregnancy and postpartum.</a><em>&nbsp;Obstetrics &amp; Gynecology,&nbsp;</em><em>117</em>, 61–68.</li>
	<li>American Diabetes Association. (n.d.). <a href="http://www.diabetes.org/living-with-diabetes/treatment-and-care/women/depression.html" target="_blank" title="Depression in Women With Diabetes" class="external-link external-popup">Depression <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>Pan, A., Lucas, M., Sun, Q., van Dam, R., Franco, O., Manson, J., … &nbsp;Hu, F. (2010).&nbsp;<a href="http://archinte.jamanetwork.com/article.aspx?articleid=226243" target="_blank" title="Bidirectional Association Between  Depression and Type 2 Diabetes Mellitus in Women" class="external-link external-popup">Bidirectional association between depression and type 2 diabetes mellitus in women <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.&nbsp;<em>JAMA Internal Medicine,&nbsp;</em><em>170</em>(21), 1884–1891.</li>
	<li>Eliasson, B. (2003).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/12704597" target="_blank" title="Cigarette smoking and diabetes">Cigarette smoking and diabetes</a>.&nbsp;<em>Progress in Cardiovascular Diseases,&nbsp;</em><em>45</em>(5), 405–413.</li>
	<li>NIDDK. (2013).&nbsp;<a href="http://www.niddk.nih.gov/health-information/health-topics/Diabetes/diabetic-neuropathies-nerve-damage-diabetes/Pages/diabetic-neuropathies-nerve-damage.aspx" target="_blank" title="Diabetic Neuropathies: The Nerve  Damage of Diabetes.">Diabetic neuropathies: The nerve damage of diabetes.</a></li>
	<li>U.S. Department of Health and Human Services. (2014).&nbsp;<a href="http://www.surgeongeneral.gov/library/reports/50-years-of-progress/index.html" target="_blank" title="The Health Consequences of Smoking"><em>The health consequences of smoking—50 years of progress: A report of the Surgeon General</em></a>. Atlanta: U.S. Department of Health and Human Services, Centers for Disease Control and Prevention, National Center for Chronic Disease Prevention and Health Promotion, Office on Smoking and Health, 537–545.</li>
	<li>CDC. (2013).&nbsp;<a href="http://www.cdc.gov/diabetes/pubs/pdf/womenHighRiskDiabetes.pdf" target="_blank" title="Women at High Risk for Diabetes:<br /> Physical Activity, Healthy Eating, and Weight Loss">Women at high risk for diabetes: Physical activity, healthy eating, and weight loss</a> (PDF, 865 KB).</li>
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
