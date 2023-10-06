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

export function copdPage({ navigation, ...rest }) {
  const condName = "Chronic obstructive pulmonary disease";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/ChronicobstructivepulmonarydiseaseCOPD.jpg?VersionId=VNf35DnUua7NiOJCzf58N3bHYS4m5stG";
  const condDescription =
    "COPD is a name for a group of illnesses that include emphysema and, often, chronic bronchitis. Chronic bronchitis and emphysema often happen at the same time in the same person. \n COPD is a progressive, chronic disease that makes it difficult to breathe. Chronic means that people with COPD will have COPD for the rest of their lives. Progressive means that symptoms will continue to get worse. \n A person with COPD has airways that don’t allow as much air into the lungs as healthy airways and lungs. The airways may also be inflamed, which causes cells that make mucus to grow more than normal. This can lead to chronic coughing to get rid of the extra mucus.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/ChronicobstructivepulmonarydiseaseCOPD.jpg?VersionId=VNf35DnUua7NiOJCzf58N3bHYS4m5stG"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Chronic obstructive pulmonary disease (COPD)</h1>  -->
            <p><strong>Chronic obstructive pulmonary disease (COPD) is a type of chronic (long-term) lung disease that includes emphysema and, often, chronic bronchitis.</strong> COPD can make it difficult to breathe. Women may be more likely to develop COPD from smoking or, very rarely, from exposure to pollution or chemicals. You can treat COPD with medicines, but COPD is a lifelong disease that usually gets worse over time. You can also take steps to prevent COPD.</p>

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
      title: "What is COPD?",
      content: `

    <div class="answer"><p>COPD is a name for a group of illnesses that include <a href="#3">emphysema</a> and, often, <a href="#2">chronic bronchitis</a>. Chronic bronchitis and emphysema often happen at the same time in the same person.</p>

<p>COPD is a progressive, chronic disease that makes it difficult to breathe. Chronic means that people with COPD will have COPD for the rest of their lives. Progressive means that symptoms will continue to get worse.</p>

<p>A person with COPD has airways that don’t allow as much air into the lungs as healthy airways and lungs. The airways may also be <a href="/glossary#inflammation">inflamed</a>, which causes cells that make mucus to grow more than normal. This can lead to chronic coughing to get rid of the extra mucus.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is chronic bronchitis?",
      content: `

    <div class="answer"><p>Chronic <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="brong-KEYE-tuhss">bronchitis</a> is <a href="/glossary#inflammation">inflammation</a> of the lining of the bronchial tubes, the airways you use to breathe. The inflammation makes it difficult for air to flow to and from the lungs. This causes you to cough up thick mucus or phlegm. A person with chronic bronchitis coughs up mucus on most days.</p>

<p>Over time, the irritation from the inflammation and coughing also causes the walls of the bronchial tubes to thicken and develop scars. If the walls become too thick or scarred, they can block airflow to and from your lungs. This causes shortness of breath, coughing, and wheezing.</p>

<p>Most people with chronic bronchitis have COPD. Cigarette smoking is the most common cause of chronic bronchitis in women and men.<a href="#references"><sup>1</sup></a> Women are twice as likely as men to be diagnosed with chronic bronchitis.<a href="#references"><sup>2</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is emphysema?",
      content: `

    <div class="answer"><p><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="em-fuh-ZEE-muh">Emphysema</a> is a type of COPD. In emphysema, the lung tissue gets weak, and the walls of the air sacs (alveoli) break down. Normally, oxygen from the air goes into the blood through the air sac walls in the lungs. If you have emphysema, the damaged air sac walls means less oxygen can get into your blood. This causes shortness of breath.</p>

<p>Cigarette smoking is the most common cause of emphysema.<a href="#references"><sup>3</sup></a> There are more men living with emphysema than women, but that may be changing. Women are now diagnosed with emphysema almost as often as men.<a href="#references"><sup>4</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets COPD?",
      content: `

    <div class="answer"><p>COPD usually happens to people who are 40 and older. More women than men have COPD.<a href="#references"><sup>5</sup></a> Women also develop COPD at a younger age (often between 45 and 64). Also, the number of men dying from COPD is going down, while the number of women dying from COPD continues to go up.<a href="#references"><sup>6</sup></a></p>

<p>Researchers are not exactly sure why COPD affects women more. Researchers think it may be because:</p>

<ul>
	<li>The number of women who smoke is now almost as high as the number of men who smoke.<a href="#references"><sup>7</sup></a> Experts think that cigarette smoke may be more damaging to women’s lungs.<a href="#references"><sup>8</sup></a> Women have smaller lungs and bronchial tubes than men, so the same amount of inhaled smoke may cause more damage.</li>
	<li>The hormone <a href="/glossary#estrogen">estrogen</a> may make women’s lungs more sensitive to tobacco smoke exposure.<a href="#references"><sup>9</sup></a></li>
	<li>Some studies show that breathing in pollutants such as dust may affect women more than men.<a href="#references"><sup>10</sup></a> Women usually have smaller lungs and bronchial tubes, so the same amount of inhaled pollutants may cause more damage.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does COPD affect women’s health?",
      content: `

    <div class="answer"><p>Women living with COPD often have other health problems, including:</p>

<ul>
	<li><a href="/a-z-topics/asthma"><strong>Asthma</strong></a><strong>.</strong> Many women with COPD also have asthma, another type of lung disease.<a href="#references"><sup>8</sup></a></li>
	<li><a href="/a-z-topics/osteoporosis"><strong>Osteoporosis</strong></a><strong>.</strong> This condition is more common in women, but more than half of people with COPD have osteoporosis. Experts are not sure why this is. It may be related to steroid medicines that are sometimes used to treat COPD. But some studies show that COPD is a risk factor for osteoporosis even without medicine.<a href="#references"><sup>11</sup></a></li>
	<li><strong><a href="/mental-health/mental-health-conditions/anxiety-disorders">Anxiety</a> and <a href="/mental-health/mental-health-conditions/depression">depression</a>.</strong> Anxiety and depression also affect many women with COPD. In one study, women with COPD had higher levels of anxiety and depression compared with both men with COPD and women who did not have COPD.<a href="#references"><sup>12</sup></a></li>
	<li><a href="/heart-disease-and-stroke"><strong>Heart disease</strong></a><strong>.</strong> Researchers think that COPD may cause inflammation throughout the body, including the blood vessels. This inflammation can make blood vessels stiff and increase the risk for plaque buildup. Over time, this can lead to heart disease.<a href="#references"><sup>13</sup></a><sup>,</sup><a href="#references"><sup>14</sup></a></li>
</ul>

<p>Women with COPD may also have other health problems caused by smoking or secondhand smoke. These include lung cancer, high blood pressure, and heart disease.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are symptoms of COPD?",
      content: `

    <div class="answer"><p>At first, COPD may cause no symptoms. Or you may have mild symptoms that you think are some other illness. As COPD gets worse, symptoms usually become more serious.</p>

<p>Common symptoms of COPD include:</p>

<ul>
	<li>An ongoing cough or coughing up lots of mucus or phlegm (often called “smoker’s cough”)</li>
	<li>Shortness of breath, especially with moderate physical activity</li>
	<li>Wheezing (a whistling or squeaky sound when you breathe)</li>
	<li>Chest tightness</li>
</ul>

<p>Studies show that COPD may be underdiagnosed in women.<a href="#references"><sup>8</sup></a> That may be because COPD was more common in men until recently. If you have symptoms of COPD, talk to your doctor about tests for COPD.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is COPD diagnosed?",
      content: `

    <div class="answer"><p>To find out whether you have COPD, your doctor will:</p>

<ul>
	<li><strong>Ask you questions</strong> about your symptoms, health, and family health history</li>
	<li><strong>Ask about your exposure,</strong> now or in the past, to things that can cause COPD, such as tobacco smoke, air pollution, dust, or chemicals</li>
	<li><strong>Do a physical exam, </strong>including using a stethoscope to listen for wheezing or other unusual chest sounds</li>
	<li><strong>Do a <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="speye-ROM-eh-tree">spirometry</a> test.</strong> For this test, your doctor will ask you to take a deep breath and blow as hard as you can into a machine that measures how much air you breathe out and how fast.</li>
</ul>

<p>Other tests can include:</p>

<ul>
	<li><strong>Chest X-ray or chest computed tomography (CT) scan.</strong>&nbsp;These tests create pictures of the heart and lungs. The pictures can show signs of COPD. They can also show whether your symptoms are caused by another health problem, such as <a href="/heart-disease-and-stroke/heart-disease/heart-disease-and-women#3">heart failure</a>.</li>
	<li><strong>Arterial blood gas test.</strong>&nbsp;This blood test measures the oxygen and carbon dioxide levels in your blood. It can help determine whether&nbsp;you need <a href="https://www.nhlbi.nih.gov/health-topics/oxygen-therapy">oxygen therapy</a>.</li>
	<li><strong>Pulse oximetry.</strong> This test also measures the oxygen levels in your blood but uses a painless clip, called a probe, on your finger or earlobe. The probe uses light to tell your doctor whether you need extra oxygen.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is COPD treated?",
      content: `

    <div class="answer"><p>Quitting smoking is the only proven way to slow down COPD.<a href="#references"><sup>15</sup></a> Get free help to quit smoking at 1-800-QUIT-NOW (1-800-784-8669) or at the <a href="https://women.smokefree.gov/">Smokefree Women</a> website. Medicines and other treatments can relieve some of your symptoms for some time. But treatments will not fix any lung damage you already have.</p>

<p>Your doctor will work with you on a treatment plan that may include:</p>

<ul>
	<li><a href="#10"><strong>Steps to take</strong></a> at home, such as stopping smoking, to prevent further damage to your lungs</li>
	<li><strong>Medicines</strong> to open airways and lessen inflammation. Common medicines for COPD include inhaled corticosteroids, other anti-inflammatory drugs, and bronchodilators. Since people with COPD are at risk for developing lung infections, you may also need antibiotics.</li>
	<li><strong>Pulmonary rehabilitation</strong> to help you cope physically and mentally with COPD. Rehabilitation can include exercise, training to manage the disease, and counseling about nutrition and exercise.</li>
	<li><a href="https://www.nhlbi.nih.gov/health-topics/oxygen-therapy"><strong>Oxygen therapy</strong></a> through a tube or mask, if you have severe COPD</li>
	<li><strong>Surgery </strong>to remove the damaged parts of your lungs or to replace your lungs (lung transplant)</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "If I have COPD, will I need a lung transplant?",
      content: `

    <div class="answer"><p>Maybe. If your symptoms from COPD are very severe and medicines no longer work for you, your doctor may talk to you about a lung transplant. Lung transplants are used only as a last resort and may not help with your COPD. A lung transplant can have serious side effects, including rejection (the new lung does not work) and death.</p>

<p>Researchers are still studying how useful lung transplants are for people with COPD.<a href="#references"><sup>16</sup></a> A transplant may or may not make you live longer than if you did not get the transplant. Also, not everyone with COPD is eligible for a lung transplant; it depends on your age and if you have other health problems. About 1 in 3 lung transplants is for people who have COPD.<a href="#references"><sup>17</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What steps can I take to help relieve my COPD symptoms?",
      content: `

    <div class="answer"><p>If you have COPD, you can take steps to relieve your symptoms and prevent further damage to your lungs:</p>

<ul>
	<li><strong>Stop smoking </strong>if you smoke. <a href="http://women.smokefree.gov/">Get help to quit.</a> Researchers found that women benefit even more from quitting than men do. Women showed twice as much improvement in breathing one year after quitting smoking.<a href="#references"><sup>18</sup></a> Also, quitting smoking can slow down how quickly your lungs age. One year after quitting, the rate of aging is almost back to normal.<a href="#references"><sup>19</sup></a> Quitting smoking can improve your COPD symptoms, but it cannot make COPD go away.</li>
	<li><strong>Talk to your doctor about the flu and pneumonia shots.</strong> The flu and pneumonia can cause serious problems for people with COPD because these illnesses make it difficult to breathe. People with COPD already have trouble breathing, so getting the flu or pneumonia can cause very serious health problems, including death.&nbsp;Find a clinic near you where you can <a href="https://vaccinefinder.org/" title="HealthMap Vaccine Finder" class="external-link external-popup" target="_blank">get the vaccines you need <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li><strong>Limit your exposure</strong> to smoke, dust, fumes, and chemicals at home and work.</li>
	<li><strong>Limit outdoor activities</strong> during air pollution alerts. <a href="https://www3.epa.gov/enviro/myenviro/">Get local information on pollution.</a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I prevent COPD?",
      content: `

    <div class="answer"><p>You can help prevent COPD with the following steps:</p>

<ul>
	<li>
	<p><strong>Stop smoking and avoid secondhand smoke.</strong>&nbsp;Lungs continue to develop into a person’s early 20s. Smoking at a young age increases the chance of having COPD later in life because it can damage growing lungs.<a href="#references"><sup>20</sup></a> Smoke from cigarettes, cigars, and pipes is the number one cause of lung disease.</p>

	<p>Quitting smoking greatly reduces the risk of developing COPD.<a href="#references"><sup>21</sup></a> Among people with COPD, research shows that those who quit smoking have fewer symptoms and less lung damage over time than those who kept smoking.<a href="#references"><sup>19</sup></a> Women who quit smoking also say they have better health-related quality of life than women who continue to smoke.<a href="#references"><sup>22</sup></a></p>

	<p>If you smoke now, quit. <a href="http://women.smokefree.gov">Get help to quit.</a> If you live, drive, or work with people who smoke, ask them to smoke outside and only when they are away from you.</p>
	</li>
	<li><strong>Protect yourself from dust and chemical fumes.</strong> Exposure over time to dust, pollution, and chemicals raises the risk for COPD, especially for women who work in places where they are exposed to chemicals, such as textile mills, hair and nail salons, or drycleaners.<a href="#references"><sup>23</sup></a> Read labels and carefully follow instructions for use on any chemical product you use (like cleaning products). If possible, do not use products that cause eye, nose, or throat irritation. If you have to use them, use them as little as possible and only in a well-ventilated area. Wear protective equipment, such as a ventilator mask.</li>
	<li><strong>Talk to your doctor</strong> if you have a cough that won’t go away, trouble breathing, or pain or discomfort in your chest.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about COPD?",
      content: `

    <div class="answer"><p>For more information about COPD, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.cdc.gov/"><strong>Centers for Disease Control and Prevention (CDC), HHS</strong></a><br>
	Phone Number:&nbsp;1-800-232-4636</li>
	<li><a href="http://www.nhlbi.nih.gov/"><strong>National Heart, Lung, and Blood Institute (NHLBI), NIH, HHS</strong></a><br>
	Phone Number:&nbsp;301-592-8573</li>
	<li><a href="http://www.niaid.nih.gov/"><strong>National Institute of Allergy and Infectious Diseases (NIAID), NIH, HHS</strong></a><br>
	Phone Number:&nbsp;1-866-284-4107</li>
	<li><a href="http://www.lungusa.org/" class="external-link external-popup" target="_blank"><strong>American Lung Association</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number:&nbsp;1-800-586-4872</li>
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
	<li>Centers for Disease Control and Prevention (CDC). (2014). <a href="http://www.cdc.gov/tobacco/data_statistics/sgr/50th-anniversary/index.htm">2014 Surgeon General’s Report: The Health Consequences of Smoking—50 Years of Progress</a>.</li>
	<li>American Lung Association. (2013). <a href="http://www.lung.org/assets/documents/research/copd-trend-report.pdf" class="external-link external-popup" target="_blank">Trends in COPD (Chronic Bronchitis and Emphysema): Morbidity and Mortality <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. (PDF, 622 KB)</li>
	<li>Forey, B.A., Thornton, A.J., Lee, P.N. (2011). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3128042/">Systematic review with meta-analysis of the epidemiological evidence relating smoking to COPD, chronic bronchitis and emphysema</a>. <em>BMC Pulmonary Medicine</em>; 11: 36.</li>
	<li>CDC. (2017). <a href="https://ftp.cdc.gov/pub/Health_Statistics/NCHS/NHIS/SHS/2015_SHS_Table_A-2.pdf" target="_blank">Summary Health Statistics Tables for U.S. Adults: National Health Interview Survey, 2015, Table A-2.</a> (PDF, 186 KB) National Center for Health Statistics.</li>
	<li>Blackwell, D.L., Lucas, J.W., Clarke, T.C. (2014). <a href="http://www.cdc.gov/nchs/data/series/sr_10/sr10_260.pdf">Summary Health Statistics for U.S. Adults: National Health Interview Survey, 2012</a>. (PDF, 3.49 MB) National Center for Health Statistics. <em>Vital and Health Statistics</em>; 10(260).</li>
	<li>American Lung Association. (2013). <a href="http://www.lung.org/assets/documents/research/rise-of-copd-in-women-full.pdf" class="external-link external-popup" target="_blank">Taking her breath away: The rise of COPD in women <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. (PDF, 6.02 MB)</li>
	<li>CDC. (2016). <a href="http://www.cdc.gov/tobacco/data_statistics/fact_sheets/adult_data/cig_smoking/index.htm#national">Current Cigarette Smoking Among Adults in the United States</a>.</li>
	<li>Aryal, S., Diaz-Guzman, E., Mannino, D.M. (2014). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC4206206/">Influence of sex on chronic obstructive pulmonary disease risk and treatment outcomes</a>. <em>International Journal of Chronic Obstructive Pulmonary Disease</em>; 9: 1145–1154.</li>
	<li>Van Winkle, L.S., Gunderson, A.D., Shimizu, J.A., Baker, G.L., Brown, C.D. (2002). <a href="http://www.ncbi.nlm.nih.gov/pubmed/11943679/">Gender differences in naphthalene metabolism and naphthalene-induced acute lung injury</a>. <em>American Journal of Physiology. Lung, Cellular, and Molecular Physiology</em>; 282(5): L1122–L1134.</li>
	<li>Kennedy, S.M., Chambers, R., Du, W., Dimich-Ward, H. (2007). <a href="http://www.ncbi.nlm.nih.gov/pubmed/18073405">Environmental and occupational exposures: do they affect chronic obstructive pulmonary disease differently in women and men?</a> <em>Proceedings of the American Thoracic Society</em>; 4(8):692–694.</li>
	<li>Barnes, P.J. (2010). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2838746/">Chronic Obstructive Pulmonary Disease: Effects beyond the Lungs</a>. <em>PLoS Medicine</em>; 7(3): e1000220.</li>
	<li>Di Marco, F., Verga, M., Reggente, M., Maria Casanova, F., Santus, P., Blasi, F., et al. (2006). <a href="http://www.ncbi.nlm.nih.gov/pubmed/16531031">Anxiety and depression in COPD patients: The roles of gender and disease severity</a>. <em>Respiratory Medicine</em>; 100(10): 1767–1774.</li>
	<li>Maclay, J.D., MacNee, W. (2013). <a href="https://www.ncbi.nlm.nih.gov/pubmed/23460157?dopt=Abstract">Cardiovascular Disease in COPD: Mechanisms</a>. <em>Chest</em>; 143(3): 798–807.</li>
	<li>Fisk, M., McEniery, C.M., Gale, N., Mäki-Petäjä, K., Forman, J. R., Munnery, M. et al. (2018). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5805278/">Surrogate Markers of Cardiovascular Risk and Chronic Obstructive Pulmonary Disease: A Large Case-Controlled Study</a>.&nbsp;<em>Hypertension (Dallas, Tex.: 1979)</em>;&nbsp;71(3): 499–506.</li>
	<li>Wu, J., Sin, D. D. (2011). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3144846/">Improved patient outcome with smoking cessation: when is it too late?</a>&nbsp;<em>International Journal of Chronic Obstructive Pulmonary Disease</em>;&nbsp;6: 259–267.</li>
	<li>Lane, C.R., Tonelli, A.R. (2015). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4608618/">Lung transplantation in chronic obstructive pulmonary disease: patient selection and special considerations</a>. <em>International Journal of Chronic Obstructive Pulmonary Disease</em>; 10: 2137–2146.</li>
	<li>Yusen, R.D., Edwards, L.B., Dipchand, A.I., Goldfarb, S.B., Kucheryavaya, A.Y., Levvey, B.J., et al. (2016). <a href="http://www.jhltonline.org/article/S1053-2498(16)30309-6/pdf" class="external-link external-popup" target="_blank">The Registry of the International Society for Heart and Lung Transplantation: Thirty-third Adult Lung and Heart–Lung Transplant Report—2016; Focus Theme: Primary Diagnostic Indications for Transplant <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. (PDF, 2.44 MB) <em>The Journal of Heart and Lung Transplantation</em>; 35(10): 1170–1184.</li>
	<li>Connett, J.E., Murray, R.P., Buist, A.S., Wise, R.A., Bailey, W.C., Lindgren, P.G., et al. (2003). <a href="http://www.ncbi.nlm.nih.gov/pubmed/12777360">Changes in smoking status affect women more than men: Results of the Lung Health Study</a>. <em>American Journal of Epidemiology</em>; 157(11): 973–979.</li>
	<li>Scanlon, P.D., Connett, J.E., Waller, L.A., Altose, M.D., Bailey, W.C., Buist, A.S., et al. (2000). <a href="https://www.ncbi.nlm.nih.gov/pubmed/10673175">Smoking cessation and lung function in mild-to-moderate chronic obstructive pulmonary disease. The Lung Health Study</a>. <em>American Journal of Respiratory and Critical Care Medicine</em>. 161(2 Pt 1): 381–90.</li>
	<li>Lange P., Celli, B., Agustí, A., Boje Jensen, G., Divo, M., Faner, R., et al. (2015). <a href="http://www.ncbi.nlm.nih.gov/pubmed/26154786">Lung-Function Trajectories Leading to Chronic Obstructive Pulmonary Disease</a>. <em>New England Journal of Medicine</em>; 373(2): 111–122.</li>
	<li>Godtfredsen, N., Vestbo, J., Osler, M., Prescott, E. (2002). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1746230/">Risk of hospital admission for COPD following smoking cessation and reduction: a Danish population study</a>.&nbsp;<em>Thorax</em>;&nbsp;57(11): 967–972.</li>
	<li>Sarna, L., Bialous, S. A., Cooley, M. E., Jun, H.-J., Feskanich, D. (2008). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4729379/">Impact of smoking and smoking cessation on health-related quality of life in women in the Nurses’ Health Study</a>.&nbsp;<em>Quality of Life Research: An International Journal of Quality of Life Aspects of Treatment, Care and Rehabilitation</em>;&nbsp;17(10): 1217–1227.</li>
	<li>Matheson, M.C., Benke, G., Raven, J., Sim, M.R., Kromhout, H., Vermeulen, R., et al. (2005). <a href="http://www.ncbi.nlm.nih.gov/pubmed/16061705">Biological dust exposure in the workplace is a risk factor for chronic obstructive pulmonary disease</a>. <em>Thorax</em>; 60(8): 645–651.</li>
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
