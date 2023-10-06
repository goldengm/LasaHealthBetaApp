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

export function sicklePage({ navigation, ...rest }) {
  const condName = "Sickle Cell Disease";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Sicklecelldisease_0.jpg?VersionId=hCdcaUB1TG8MfD4RzNZbdvVokeRlJTMp";
  const condDescription =
    "Sickle cell disease is a group of red blood cell disorders that are passed down from your parents. This means that it is a genetic disease, and you are born with it.2 \n People with sickle cell disease have some red blood cells that are shaped like a 'sickle' or crescent, instead of round. Normal, round red blood cells are flexible enough to move through blood vessels to carry oxygen to the body. Sickle-shaped red blood cells can stick to each other inside blood vessels, blocking blood flow and causing pain and problems in many different parts of the body. People with sickle cell disease also have fewer red blood cells, because sickle cells die sooner than normal red blood cells. Over time, blocked blood flow and lack of oxygen can cause serious health problems and organ damage.2";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Sicklecelldisease_0.jpg?VersionId=hCdcaUB1TG8MfD4RzNZbdvVokeRlJTMp"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Sickle cell disease</h1>  -->
            <p><strong>Sickle cell disease is a serious health condition that runs in families and can shorten life.</strong><strong> </strong>In the United States, it affects more people who are black or African-American than other racial or ethnic groups.<a href="#references"><sup>1</sup></a> Sickle cell disease, sometimes called sickle cell anemia, causes episodes or crises of intense pain. It can also cause pregnancy problems and other serious health problems throughout life. Treatment can lower the chance of complications and lengthen life.</p>

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
      title: "What is sickle cell disease?",
      content: `

    <div class="answer"><p>Sickle cell disease is a group of red blood cell disorders that are passed down from your parents. This means that it is a genetic disease, and you are born with it.<sup><a href="#references">2</a></sup></p>

<p>People with sickle cell disease have some red blood cells that are shaped like a "sickle" or crescent, instead of round. Normal, round red blood cells are flexible enough to move through blood vessels to carry oxygen to the body. Sickle-shaped red blood cells can stick to each other inside blood vessels, blocking blood flow and causing pain and problems in many different parts of the body. People with sickle cell disease also have fewer red blood cells, because sickle cells die sooner than normal red blood cells. Over time, blocked blood flow and lack of oxygen can cause serious health problems and organ damage.<a href="#references"><sup>2</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes sickle cell disease?",
      content: `

    <div class="answer"><p>All red blood cells have <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="HEE-moh-gloh-bin">hemoglobin</a>, which makes the cell red and helps carry oxygen to different parts of the body. Red blood cells with normal hemoglobin are round and flexible. If you have sickle cell disease, your red blood cells have abnormal hemoglobin and are crescent- or sickle-shaped.</p>

<p>Abnormal hemoglobin genes (sickle cell genes) run in families. Having two sickle cell genes causes sickle cell disease. If you get one sickle cell gene from each of your parents, then you have sickle cell disease. If you get one sickle cell gene and one normal gene from your parents, you have <a href="#5">sickle cell trait</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Why does sickle cell disease cause health problems?",
      content: `

    <div class="answer"><p>Red blood cells that are crescent- or sickle-shaped cannot slide smoothly through small blood vessels like normal, round red blood cells.<a href="#references"><sup>3</sup></a> Sickle cells can get stuck in small blood vessels and block blood flow to organs and tissues in the body. When organs do not get enough blood, they do not get enough oxygen. This can cause organ damage and pain. When organs are damaged, they do not work properly. Many of the <a href="#13">complications</a> or health problems caused by sickle cell disease are caused by organ damage or inflammation.<a href="#references"><sup>3,4,5</sup></a></p>

<p>Sickle cells also die sooner than normal red blood cells. Not having enough healthy red blood cells causes <a href="/a-z-topics/iron-deficiency-anemia">anemia</a>, which can make you feel tired or weak because there is less oxygen in your body.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are common types of sickle cell disease?",
      content: `

    <div class="answer"><p>There are different types of sickle cell disease because there are different types of sickle cell genes. You can inherit different types of abnormal hemoglobin genes that cause different types of sickle cell disease. Hemoglobin is what gives red blood cells their red color and is the part of the cell that helps carry oxygen to different parts of the body. In sickle cell disease, the type of disease you have is named after the type of abnormal hemoglobin genes you have. The most common types of sickle cell disease are:</p>

<ul>
	<li><strong>Hemoglobin (Hb) SS or sickle cell anemia. </strong>This is usually the most severe type of sickle cell disease, when you inherit two HbS genes, one from each parent.<a href="#references"><sup>6</sup></a> Sickle cells break apart or die more easily than normal red blood cells, causing severe anemia. Severe means that <a href="#13">problems can happen more often and be more serious</a>.<a href="#references"><sup>7</sup></a> Anemia happens when you have low numbers of red blood cells, which can make you feel tired and weak and cause other serious health problems.</li>
	<li><strong>Hemoglobin (Hb) SC disease.</strong> People with HbSC sickle cell have inherited one hemoglobin S gene and one hemoglobin C gene. Both genes are abnormal, but HbSC is usually a less severe or serious type of sickle cell disease compared with HbSS. Less severe means that it may lead to fewer problems or that problems may show up later in life compared with more severe types of the disease.<a href="#references"><sup>6,8</sup></a></li>
	<li><strong>Hemoglobin (Hb) S beta thalassemia.</strong> People with HbS beta thalassemia inherit one hemoglobin S gene and one gene for beta thalassemia, another type of anemia. Anemia is when you have low numbers of red blood cells. There are two types of beta thalassemia, called zero and plus, written as "0" or "+." People with HbS beta 0 thalassemia usually have a more severe or serious type of sickle cell disease. People with HbS beta + thalassemia usually have a less severe type of sickle cell disease.<a href="#references"><sup>9</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What is the difference between sickle cell trait and sickle cell disease?",
      content: `

    <div class="answer"><p>People who have sickle cell trait have one gene that causes sickle cell disease and one normal gene. Because they have only one sickle cell gene, they do not have the disease. Most people who have sickle cell trait, or just one sickle cell gene, do not have any symptoms of the disease and can live a normal, active life.<a href="#references"><sup>10,11</sup></a></p>

<p>People who have sickle cell trait may be at a slightly higher risk of:</p>

<ul>
	<li>Kidney disease</li>
	<li>Blood clots, especially in the lungs (called pulmonary embolism)</li>
	<li>Sudden death from very intense exercise<a href="#references"><sup>12,13</sup></a></li>
</ul>

<p>People with sickle cell trait can pass the gene that causes sickle cell disease on to their children. If a mother and a father both have sickle cell trait, there is a 1 in 4 chance that both sickle cell genes will be passed on and their child will have sickle cell disease.<a href="#references"><sup>2</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets sickle cell disease?",
      content: `

    <div class="answer"><p>Researchers are not sure how many people are living with sickle cell disease. In the United States, researchers think as many as 100,000 people may have the disease.<a href="#references"><sup>14</sup></a></p>

<p>Sickle cell disease happens more often in people whose families came from Africa, India, the Middle East, and Southeast Asia.<a href="#references"><sup>15,16</sup></a> In the United States, it is most common among people who are black or African-American. About 1 out of every 365 black or African-American newborns has sickle cell disease. Hispanic-Americans are also at higher risk. Sickle cell disease happens in about 1 out of every 16,300 Hispanic-American newborns.<a href="#references"><sup>1,17</sup></a></p>

<p>Researchers estimate that more than 2 million Americans have <a href="#5">sickle cell trait</a>.<a href="#references"><sup>17</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does sickle cell disease affect women?",
      content: `

    <div class="answer"><p>Sickle cell disease can cause unique problems in women. In addition to the major <a href="#13">complications</a> of sickle cell disease, if you are a woman with sickle cell disease, you may also have:</p>

<ul>
	<li>Delayed puberty<a href="#references"><sup>18</sup></a></li>
	<li>More pain crises during the years you have your period and before and during your period<a href="#references"><sup>18</sup></a></li>
	<li>Increased sickle cell disease complications during <a href="#22">pregnancy</a><a href="#references"><sup>19</sup></a></li>
	<li>Problems during pregnancy for you and for your baby<a href="#references"><sup>20</sup></a></li>
	<li><a href="#21">Problems getting pregnant</a> due to sickle cell disease treatments<a href="#references"><sup>21</sup></a></li>
	<li>Pain during <a href="#20">sex</a><a href="#references"><sup>22</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of sickle cell disease?",
      content: `

    <div class="answer"><p>Symptoms can be different for each person with sickle cell disease. People who have mild types of sickle cell disease may start having symptoms and complications at older ages than those with severe sickle cell disease.<a href="#references"><sup>8</sup></a></p>

<p>The most common symptom is pain caused by sickle cells blocking blood flow in blood vessels. When blood vessels are blocked, organs and tissue do not get oxygen, which causes pain. Having fewer red blood cells than normal causes anemia or not enough oxygen in the blood, making you feel tired and weak. You may also have symptoms of other health problems if the disease causes damage to a part of the body, such as the spleen, heart, lungs, eyes, kidneys, liver, or other organs.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "When should I go to the hospital for my sickle cell disease symptoms? ",
      content: `

    <div class="answer"><p>You may have to go to the hospital for treatment you cannot get at home or at a doctor's office. Anyone having a medical emergency should call 911. Everyone with sickle cell disease should make a <a href="#16">pain management plan</a> with their doctor. The pain management plan helps you know when to go to the hospital for a pain crisis. You may need to go to the hospital for other health problems caused by sickle cell disease.</p>

<p>People with sickle cell disease should go to the hospital for:</p>

<ul>
	<li>A pain crisis (also called a pain episode) that cannot be treated with over-the-counter pain medicines or your own prescription pain medicine</li>
	<li>A fever over 101 degrees Fahrenheit<a href="#references"><sup>9</sup></a></li>
	<li><a href="https://www.womenshealth.gov/heart-disease-and-stroke/stroke">Stroke</a> symptoms, such as:
	<ul style="list-style-type:circle;">
		<li>Numbness or weakness in the face, arm, or leg, especially on only one side of the body</li>
		<li>Confusion or trouble speaking or understanding</li>
		<li>Trouble seeing in one or both eyes</li>
		<li>Trouble walking, dizziness, or loss of balance or coordination</li>
		<li>Severe headache with no known cause</li>
	</ul>
	</li>
	<li>Problems breathing</li>
	<li>Signs that the spleen, an organ near the stomach, is getting bigger (when sickle cells get trapped in the spleen). This is a medical emergency if it causes anemia, or not enough red blood cells in your body. A spleen that is larger than normal can cause pain in the left side of your stomach.</li>
	<li>Sudden loss of vision</li>
	<li>Symptoms of severe anemia, such as shortness of breath, feeling very tired or dizzy, or having very pale skin compared with normal</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is sickle cell disease diagnosed?",
      content: `

    <div class="answer"><p>In the United States, all newborn babies are tested for sickle cell disease.<a href="#references"><sup>17</sup></a></p>

<p>Your doctor or nurse may do tests to diagnose sickle cell disease if you were not diagnosed as a baby but have symptoms as an adult. These tests may include:</p>

<ul>
	<li><strong>Blood tests.</strong> Your doctor may do a complete blood test to screen for anemia. To identify the type of hemoglobin that is in your blood, your doctor will do a high performance liquid chromatography (HPLC) or hemoglobin electrophoresis test.<a href="#references"><sup>8</sup></a></li>
	<li><strong>Genetic testing.</strong> The genetic test confirms the results of the HPLC or hemoglobin electrophoresis test. With this information, your doctor will be able to tell whether you have the two genes for sickle cell disease or a different abnormal hemoglobin gene.<a href="#references"><sup>8</sup></a></li>
</ul>

<p>If you are pregnant, you may choose to have <a href="/glossary#amniocentesis">a test</a> called <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="am-nee-oh-sen-TEE-sis">amniocentesis</a> to see if your unborn baby has sickle cell disease. The doctor uses a needle to take a small amount of fluid from around the fetus inside your uterus (womb).<a href="#references"><sup>23</sup></a> Health risks for the unborn baby during amniocentesis are very rare but can be serious. Talk to your doctor, nurse, or midwife about the risks and benefits of testing.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What medicines treat sickle cell disease?",
      content: `

    <div class="answer"><p>Medicines for sickle cell disease include:</p>

<ul>
	<li><strong><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="hye-drox-ee-you-REE-uh">Hydroxyurea</a>. </strong>The most commonly used medicine for sickle cell disease is a prescription medicine you take every day, called hydroxyurea. Hydroxyurea may help prevent <a href="#13">problems</a> from sickle cell disease, such as pain crises, stroke, and acute chest syndrome.<a href="#references"><sup>24</sup></a> Hydroxyurea may also make these problems less serious when they happen. Experts recommend that children with sickle cell disease over 9 months old and all adults who have severe sickle cell disease take hydroxyurea, unless there is a medical reason they should not take it. Most people do not have any serious side effects from the medicine. Hydroxyurea may lower the number of white blood cells and platelets in your body, which is usually higher in people with sickle cell disease and may cause pain crises.<a href="#references"><sup>25</sup></a> Lowering the number of white blood cells and platelets may put you at higher risk of infection and bleeding. White blood cells help you fight infections. Platelets help your blood clot when you get a cut or other injury. The long-term effects of this medicine are still unknown. Pregnant women, or women trying to become pregnant, should not take hydroxyurea.<a href="#references"><sup>9</sup></a></li>
	<li><strong>L-glutamine. </strong>In 2017, the Food and Drug Administration (FDA) approved a new prescription medicine called L-glutamine for anyone over age 5 with sickle cell disease. It may help prevent sickle cell crises, which include pain crises and acute chest syndrome.<a href="#references"><sup>26</sup></a> Your doctor may prescribe this medicine if hydroxyurea does not work for you.</li>
	<li><strong>Pain medicines.</strong> Most people with sickle cell disease use over-the-counter pain medicine to relieve pain along with other at-home pain treatments, such as warm baths, relaxation training, or distracting activities. Sometimes these treatments are not strong enough. You may need stronger opioid pain medicine from your doctor or a hospital. Talk to your doctor or nurse about a <a href="#16">pain management plan</a> so that you know how best to treat pain when a pain crisis happens.<a href="#references"><sup>8</sup></a></li>
	<li><strong>Medicines for infections. </strong>People with sickle cell disease are more likely to get infections, and the infections are more likely to be serious. A doctor or nurse will usually treat an infection with antibiotics.<a href="#references"><sup>8</sup></a> Children younger than 5 with sickle cell disease should take penicillin every day to prevent serious infections. Many children 5 and older and adults with sickle cell disease do not need to take penicillin every day. Talk to your sickle cell disease doctor about your medical history and if you need to take penicillin every day.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What medical procedures treat sickle cell disease?",
      content: `

    <div class="answer"><p>Some medical procedures can treat problems caused by sickle cell disease or cure sickle cell disease.</p>

<ul>
	<li><strong>Blood transfusions. </strong>You may get a red blood cell transfusion if you have sickle cell disease <a href="#13">complications</a> or health problems caused by sickle cell disease, such as anemia, acute chest syndrome, or stroke. Some people with sickle cell disease who had a stroke in the past may need regular blood transfusions to help prevent another stroke.<a href="#references"><sup>9</sup></a><sup>,</sup><a href="#references"><sup>27</sup></a> Regular blood transfusions are also used to prevent crises in people who can't take hydroxyurea. But blood transfusions can lead to dangerously high iron levels in the blood that can damage the heart and lungs. If this happens, you may need a medicine called iron <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="key-LAY-shun">chelation</a> therapy to lower the iron levels in your blood.<a href="#references"><sup>9</sup></a></li>
	<li>
	<p><strong>Bone marrow transplant. </strong>A bone marrow transplant, or <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="hee-mat-oh-po-ET-ik">hematopoietic</a> stem cell transplant (HSCT), is currently the only cure for sickle cell disease. But a bone marrow transplant is not an option for many people with sickle cell disease because there is no matched bone marrow donor available. Also, a bone marrow transplant is a risky medical procedure that can cause serious health problems.</p>

	<p>During a bone marrow transplant, a person's bone marrow stem cells are replaced with bone marrow stem cells from a healthy, matched donor. The bone marrow (the tissue inside of bones) makes new red blood cells for the body. The healthy new bone marrow stem cells make healthy red blood cells instead of sickle cells.</p>

	<p>Finding a matched donor can be difficult. The bone marrow has to come from a donor who has matching proteins on their cells, usually a brother or sister.<a href="#references"><sup>28</sup></a> More than 90% of transplants are successful when the bone marrow comes from a matched brother or sister.<a href="#references"><sup>29</sup></a></p>

	<p>Severe complications can happen if the cells are not matched. Complications can include severe infections, seizures, or possibly death. Graft-versus-host disease, where the transplanted cells attack the recipient's organs, can happen if the donor is not well-matched. Sometimes these complications happen with a well-matched donor. Having a stem cell transplant may mean that you cannot get pregnant in the future.<a href="#references"><sup>30</sup></a></p>

	<p><a href="#25">Researchers</a> are looking for ways to make bone marrow transplants safer for more people.</p>
	</li>
</ul>

<p>&nbsp;</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the major complications of sickle cell disease?",
      content: `

    <div class="answer"><p>Complications of sickle cell disease depend on your age, your medical history, and the type of disease you have. Sickle cell disease complications are not always the same in different people and can happen at any time in life. People with mild types of sickle cell disease usually have complications at an older age compared with people who have severe types of the disease.</p>

<p>Serious complications include:</p>

<ul>
	<li>
	<p><strong>Pain. </strong>This includes pain crises, also called acute pain. A pain crisis is sharp and intense pain that comes on suddenly. It is the most common complication in sickle cell disease. Pain crises can happen anywhere in the body and in more than one place. They are often in the back, hands and feet, chest, or abdomen.<a href="#references"><sup>31</sup></a></p>

	<p>Triggers for acute pain crises include infection, dehydration, asthma, cold temperatures, and sometimes your menstrual period.<a href="#references"><sup>31</sup></a> People can also have a pain crisis without a trigger. Pain crises are more common in people 10 to 39 years old, especially women.<sup><a href="#references">18</a></sup></p>

	<p>Many people with sickle cell disease also develop chronic (long-term) pain that can last for months or longer.<a href="#references"><sup>32</sup></a></p>
	</li>
	<li><strong>Acute chest syndrome.</strong> This condition happens when sickle cells block blood flow and oxygen to the lungs, causing damage to the lungs. Symptoms of acute chest syndrome are chest pain, fast or difficult breathing, fever, or a cough. This condition is a medical emergency.<a href="#references"><sup>8</sup></a><sup>,</sup><a href="#references"><sup>9</sup></a><sup>,</sup><a href="#references"><sup>32</sup></a></li>
	<li><strong>Lung problems.</strong> Adults with sickle cell disease are more likely to have high blood pressure in the lungs (called pulmonary hypertension).<a href="#references"><sup>8</sup></a></li>
	<li>
	<p><strong>Anemia, including acute anemia that comes on suddenly.</strong> Anemia is when you have fewer red blood cells than normal. Since red blood cells carry oxygen to the body, anemia can make you feel tired and weak because your body is not getting enough oxygen. Severe anemia can cause shortness of breath, dizziness, and pale skin. A normal red blood cell lives for 120 days. A sickle cell may live as few as 12 days.<a href="#references"><sup>8</sup></a> Because the sickle cells die so quickly, people with sickle cell anemia do not always have enough red blood cells.</p>

	<p>A common infection called "slapped cheek syndrome" or "fifth disease" can also cause severe anemia in people with sickle cell disease. The infection stops new blood cells from being made, leading to anemia.<a href="#references"><sup>33</sup></a></p>
	</li>
	<li><strong>Stroke. </strong>Sickle cells can block blood vessels in the brain, cutting off oxygen and causing a <a href="/heart-disease-and-stroke/stroke">stroke</a>. In people without sickle cell disease, stroke is much more common in older people. But people with sickle cell disease are at high risk of stroke starting in early childhood and continuing through older ages. Signs of a stroke include:
	<ul>
		<li>Numbness or weakness in the face, arm, or leg, especially on only one side of the body</li>
		<li>Confusion or trouble speaking or understanding</li>
		<li>Trouble seeing in one or both eyes</li>
		<li>Trouble walking, dizziness, or loss of balance or coordination</li>
		<li>Severe headache with no known cause</li>
	</ul>

	<p>Some specialists do not recommend combination hormonal birth control (containing a combination of two different hormones) for women with sickle cell disease, because it adds to your higher risk of stroke.</p>
	</li>
</ul>

<p>Other complications include:</p>

<ul>
	<li><strong>Kidney problems, </strong>such as damage to kidneys. Many people with sickle cell disease urinate more often because the kidneys cannot remove as much water from the urine as normal. As a result, people with sickle cell disease have more urine than normal and may experience bed-wetting or <a href="/a-z-topics/urinary-incontinence">urinary incontinence</a>. Urinating often can also make someone with sickle cell disease more likely to become dehydrated, which can trigger a sickle cell crisis.<a href="#references"><sup>6</sup></a><sup>,</sup><a href="#references"><sup>8</sup></a> Even if urinary incontinence is a problem, people with sickle cell disease should drink water and other drinks without caffeine often, to stay hydrated and prevent a sickle cell crisis.</li>
	<li><strong>Gallstones.</strong> Gallstones affect about half of women who have sickle cell disease.<a href="#references"><sup>8</sup></a> Gallstones can cause pain, nausea, and vomiting. Gallstones can also lead to serious infections in the gallbladder and pancreas.<a href="#references"><sup>34</sup></a> People with sickle cell disease may need to have their gallbladder removed with surgery.</li>
	<li><strong>Bone and joint problems. </strong>Acute or sudden, sharp pain or inflammation (redness, swelling, and pain) can happen from infection or lack of blood flow within bones.<a href="#references"><sup>8</sup></a> Teenagers and adults with sickle cell disease may develop chronic or long-term bone problems such as arthritis, bone tissue death, decreased bone growth, and loss of bone density.<a href="#references"><sup>32</sup></a> Hip and shoulder problems are more common in people with sickle cell disease.</li>
	<li><strong>Heart failure</strong><a href="#references"><sup>35</sup></a><strong> and abnormal heart rhythms</strong><a href="#references"><sup>6</sup></a></li>
	<li><strong>Eye problems. </strong>Sickle cell disease can damage the blood vessels in your eye, causing vision problems or loss.<a href="#references"><sup>6</sup></a></li>
	<li><strong>Liver damage. </strong>A rare, but severe, kind of liver damage can happen when sickle cells block blood vessels in the liver. The liver filters toxins from the blood, so liver damage can be a serious health problem. People with sickle cell disease who have had many blood transfusions can also get liver damage caused by high levels of iron in their blood.<a href="#references"><sup>8</sup></a></li>
	<li><strong>Leg ulcers,</strong> which are open sores that take a long time to heal<a href="#references"><sup>36</sup></a></li>
	<li><strong><a href="/mental-health/mental-health-conditions">Mental health conditions</a></strong><strong>, </strong>such as anxiety disorder or depression<a href="#references"><sup>31</sup></a></li>
	<li><strong>Problems with <a href="#22">pregnancy</a></strong><a href="#references"><sup>23</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What triggers sickle cell pain?",
      content: `

    <div class="answer"><p>Any activity or situation that limits or decreases blood flow, or lowers the amount of oxygen in your blood, can trigger sickle cell pain. Often, you won't know what triggered a pain crisis. But, there are some known triggers for sickle cell pain.<a href="#references"><sup>37</sup></a></p>

<ul>
	<li>High altitudes (above 2,000 meters, or about 6,500 feet), where there is less oxygen in the air</li>
	<li>Low-oxygen activities, such as scuba diving or flying in an unpressurized plane<a href="#references"><sup>2</sup></a></li>
	<li>Sudden temperature changes, such as jumping into a cold pool or becoming overheated</li>
	<li>Being in cold weather (without wearing a coat, scarf, gloves, and a hat) for longer than a few minutes<a href="#references"><sup>31</sup></a></li>
	<li>Dehydration, or not drinking enough water<a href="#references"><sup>38</sup></a></li>
	<li>Intense exercise, especially if you become overheated, don't take breaks, or don't drink enough water<a href="#references"><sup>39</sup></a></li>
	<li>Stress.<a href="#references"><sup>38</sup></a> Sometimes stress can cause your blood vessels to narrow, limiting blood flow and causing pain. Having sickle cell disease can be stressful, in addition to everyday stressors. Learn <a href="/mental-health/good-mental-health/stress-and-your-health#8">ways to manage stress</a>.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I manage pain from sickle cell disease?",
      content: `

    <div class="answer"><p>You can take steps to manage different kinds of sickle cell disease pain.</p>

<ul>
	<li><strong>Mild to moderate pain.</strong> You can treat mild or moderate sickle cell pain at home with over-the-counter pain relievers.<a href="#references"><sup>9</sup></a> Also, it's important to drink enough water to prevent dehydration, which can <a href="#14">trigger a pain crisis</a>.</li>
	<li>
	<p><strong>Severe pain.</strong> Severe pain crises may need prescription pain medicine. The standard pain medicines for severe pain are opioids.<a href="#references"><sup>9</sup></a> Opioids are powerful pain medicine, but they can have serious risks and side effects. You can take your own prescription pain medicine at home if your doctor prescribed it for you. A doctor who specializes in sickle cell disease can work with you to figure out a schedule for how much prescription pain medicine you should take and how often you should take it. It can be difficult to describe your pain, but the more you can tell doctors and nurses, the more they may be able to help treat your pain.</p>

	<p>You might need to go to a hospital if you do not have your own prescription pain medicine or if it does not work during a pain crisis. In the hospital, the doctors and nurses can give you pain medicine and intravenous (IV) fluids to help you feel better.<a href="#references"><sup>31</sup></a></p>
	</li>
	<li><strong>Chronic (long-term) pain.</strong> Talk to your doctor or nurse if you have ongoing pain 3 or more days a week. Researchers think that some acute or sudden and intense sickle cell pain may make your nerves overly sensitive to pain in the future. Overly sensitive nerves may cause chronic sickle cell pain. Chronic pain can get in the way of everyday activities like going to work or school. Chronic pain can also make mental health conditions like anxiety and depression worse.<a href="#references"><sup>40</sup></a> Have regular visits with a doctor or nurse you are comfortable with and who knows about your sickle cell disease. Each person has different needs for pain management, including different doses of medicine that work for them.<a href="#references"><sup>31</sup></a></li>
</ul>

<p>No matter what kind of pain you have, sometimes anxiety, depression, and not getting enough sleep can make pain worse. Get help and treatment for any <a href="/mental-health/good-mental-health/how-do-i-know-whether-i-have-mental-health-condition">mental health condition</a> or <a href="/mental-health/good-mental-health/sleep-and-your-health">sleep problems</a>. Managing your mental health can help you manage your physical health.<a href="#references"><sup>31</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "How can a pain management plan help me with my sickle cell disease? ",
      content: `

    <div class="answer"><p>A pain management plan has clear, written instructions for when to take medicine, which medicine to take, what dose to take, and what to do if the pain gets worse. You can work with your doctor or nurse to develop the plan.</p>

<p>With a pain management plan, you might not have to go to the emergency room or hospital as often. If you do go to the hospital, take the plan and your doctor's or nurse's contact information with you.<a href="#references"><sup>31</sup></a> Some pain management plans and health information include results from a genetic test showing that you have sickle cell disease and which type it is. This information can also help doctors and nurses in the hospital find the right treatment for you.</p>

<p>A pain management plan may also have instructions for managing chronic or long-term pain. Your plan may suggest ways to treat less serious, but ongoing, sickle cell pain with nonmedical treatments such as a heating pad; hot bath; relaxing activities, such as watching TV or reading; or <a href="/mental-health/good-mental-health/stress-and-your-health#8">stress management methods</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I stay well with sickle cell disease?",
      content: `

    <div class="answer"><p>Sickle cell disease is a chronic (long-term) disease, but you can live a full and active life by learning how to stay as healthy as possible. Follow these tips to manage your sickle cell disease:<a href="#references"><sup>41</sup></a></p>

<ul>
	<li><strong>Find a doctor who specializes in sickle cell disease.</strong> You will probably need to see a hematologist, a doctor who specializes in blood diseases. You may have other types of doctors who treat certain complications from organ damage, such as a nephrologist for kidney problems. Some places in the United States have special centers at hospitals or doctors' offices for people with sickle cell disease. At a special center, you might be able to see different types of doctors in one location, or the center might be open later, to help treat a pain crisis.</li>
	<li><strong>Get an annual checkup. </strong>Your doctor or nurse can help you coordinate health care among different specialists or locations. An annual checkup can help you keep track of other health conditions or concerns.</li>
	<li><strong>Prevent infections.</strong> Infections can cause complications from sickle cell disease, so it is important to get all of the vaccines your doctor or nurse recommends.</li>
	<li><strong>Try to have healthy habits.</strong> Staying hydrated is very important. Try to drink 8 to 10 glasses of water a day. Choose healthy foods and get regular physical activity, while being careful not to overdo it. Take care not to get too hot or too cold. Get enough sleep. Do not smoke.</li>
	<li><strong>Get support.</strong> Your mental and emotional health are important. Find a support system. Support can come from friends and family or patient groups and community organizations. Talk to a professional counselor or therapist if you are <a href="/mental-health/good-mental-health/how-do-i-know-whether-i-have-mental-health-condition">feeling overwhelmed or depressed</a>.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does sickle cell disease affect the menstrual cycle?",
      content: `

    <div class="answer"><p>Sickle cell disease is different in every person, but women and girls may experience unique complications.</p>

<ul>
	<li><strong>Delayed puberty.</strong> Girls who have sickle cell anemia may get their period about 2 years later than girls who do not have sickle cell anemia, while those with milder types of sickle cell disease may have less of a delay.<a href="#references"><sup>18</sup></a></li>
	<li><strong>More pain crises before and during your period.</strong> Many women experience more pain crises just before and during their period.<a href="#references"><sup>42</sup></a> This may be caused by changes in hormone levels. Hormonal treatment such as progesterone injections may help.<a href="#references"><sup>18</sup></a></li>
	<li><strong>Heavy periods.</strong> Many women with sickle cell disease do not have heavy periods. But, if you have heavy periods, heavy bleeding may increase your risk of <a href="/a-z-topics/iron-deficiency-anemia">iron-deficiency anemia</a>. Doctors often prescribe birth control pills to lessen heavy menstrual bleeding.<a href="#references"><sup>18</sup></a> But not all birth control pills are OK for women with sickle cell disease due to a higher risk of stroke. Talk to your doctor or nurse about progesterone-only birth control. Birth control with progesterone combined with estrogen may increase your risk of stroke.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does sickle cell disease affect older women?",
      content: `

    <div class="answer"><p>Older women are more likely to have <a href="#15">chronic pain</a> but may have fewer pain crises than younger women. Researchers think that older women with sickle cell disease are also more likely to have organ and tissue damage, which causes complications. Sickle cell disease complications that may be more common in older women include:<a href="#references"><sup>43</sup></a></p>

<ul>
	<li>Pulmonary hypertension, or high blood pressure in the lungs</li>
	<li>Chronic kidney disease</li>
	<li>High levels of iron in the blood because of many blood transfusions in the past. High levels of iron can cause liver disease, heart problems, organ failure, and cancer.</li>
	<li>Leg ulcers or open sores</li>
	<li>Blood clots in the legs or lungs</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does sickle cell disease affect sexual health?",
      content: `

    <div class="answer"><p>Women who often experience acute pain crises, or women with chronic pain, may be more likely to have pain during sex. If you are taking opioids to manage sickle cell disease pain, they may affect hormone levels. Abnormal hormone levels may cause pain during sex.<a href="#references"><sup>22</sup></a></p>

<p>Women who have sickle cell disease can use normal <a href="/a-z-topics/birth-control-methods">birth control methods</a>. Some doctors do not recommend combination hormonal birth control (with a combination of two types of hormones), because it slightly increases the risk of blood clots and stroke in all women. Some women who have sickle cell disease have reported pain crises that happen more often with combination hormonal birth control.<a href="#references"><sup>44</sup></a> Birth control methods using only one type of hormone, like progesterone, may lower risk and may help control sickle cell disease pain crises.<a href="#references"><sup>42</sup></a><sup>,</sup><a href="#references"><sup>44</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does sickle cell disease affect fertility?",
      content: `

    <div class="answer"><p>Complications from sickle cell disease may make it more difficult to get pregnant. Scientists still do not fully understand the effects of sickle cell disease treatments on women's fertility. Some of the <a href="#11">common treatments</a> for sickle cell disease and pain medicines may affect fertility:<a href="#references"><sup>21</sup></a></p>

<ul>
	<li><strong>Hydroxyurea.</strong> Researchers think that hydroxyurea might damage the ovaries, the part of your body that makes hormones and releases an egg each month during your menstrual cycle.<a href="#references"><sup>21</sup></a> Talk to your doctor or nurse about the benefits and risks for you.</li>
	<li><strong>Blood transfusions</strong> cause high iron levels. Too much iron in your body can make it harder for you to get pregnant because it may cause your ovaries to stop working normally.<a href="#references"><sup>21</sup></a></li>
	<li><strong>Opioids</strong> may make it harder for you to get pregnant by lowering your hormone levels.<a href="#references"><sup>21</sup></a></li>
	<li><strong>Nonsteroidal anti-inflammatory drugs (NSAIDs).</strong> NSAIDs are a type of pain medicine that are usually available over the counter without a prescription. Common NSAIDs include medicines with naproxen or ibuprofen. Some research shows that taking NSAIDs regularly makes it less likely that a woman will ovulate, or release an egg, every month.<a href="#references"><sup>21</sup></a></li>
	<li><strong>Bone marrow transplants.</strong> To prepare for a bone marrow transplant, you will have radiation or chemotherapy to kill the bone marrow stem cells that make sickle-shaped red blood cells. This allows the new, healthy, transplanted bone marrow cells to make normal, round, healthy red blood cells. But the radiation and chemotherapy can damage your ovaries and eggs. Your doctor can try to shield your ovaries to protect them during radiation treatments.<a href="#references"><sup>21</sup></a> Some women may choose to freeze their eggs, or their fertilized embryos, or tissue from their ovaries to try to become pregnant after a bone marrow transplant. It may be possible to get pregnant after a bone marrow transplant, but there is not a lot of information about how well these options work for women who have sickle cell disease.<a href="#references"><sup>21,42</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does sickle cell disease affect pregnancy?",
      content: `

    <div class="answer"><p>If you have sickle cell disease and want to have a child, talk to your doctor or nurse about how to prepare. Your doctor or nurse will give you steps to take before pregnancy to reduce the risk of complications for you or your baby. These may include:<a href="#references"><sup>19</sup></a></p>

<ul>
	<li>Stopping hydroxyurea several months before trying to get pregnant, or as soon as pregnancy is confirmed, as hydroxyurea can hurt an unborn baby</li>
	<li>Stopping other medicines, such as iron chelation therapy or angiotensin-converting enzyme (ACE) inhibitors</li>
	<li>Getting vaccinations and vaccine boosters</li>
</ul>

<p>Women who have sickle cell disease have a higher risk of problems during pregnancy. These include:<a href="#references"><sup>20</sup></a><sup>,</sup><a href="#references"><sup>45</sup></a></p>

<ul>
	<li>Babies who are smaller than expected during pregnancy and at birth</li>
	<li>Birth defects in the baby, such as problems with the heart, abdomen, or lungs<a href="#references"><sup>20</sup></a></li>
	<li>Having your baby or going into labor before the expected due date</li>
	<li>Cesarean section (C-section) delivery<a href="#references"><sup>20</sup></a></li>
	<li>Infection, including blood infections and pneumonia</li>
	<li>Pregnancy loss, miscarriage, or stillbirth</li>
	<li>Preeclampsia (a serious condition with dangerously high blood pressure during pregnancy)</li>
	<li>Hemolytic disease of the newborn, where the baby's blood is attacked by antibodies in the mother's blood. Mothers who have sickle cell disease are more likely to have these antibodies because of past blood transfusions.<a href="#references"><sup>19</sup></a></li>
	<li>Death</li>
</ul>

<p>Women who have sickle cell disease and become pregnant are at greater risk of experiencing sickle cell disease complications during pregnancy. The risks are higher for those with more severe sickle cell disease. Possible sickle cell complications during pregnancy include:<a href="#references"><sup>19</sup></a><sup>,</sup><a href="#references"><sup>20</sup></a></p>

<ul>
	<li>Anemia getting worse</li>
	<li>Higher risk of blood clots</li>
	<li>Higher risk of infections, such as urinary tract infections</li>
	<li>More frequent pain crises</li>
	<li>Acute chest syndrome</li>
	<li>Stroke</li>
</ul>

<p>To reduce the chance of sickle cell–related complications during pregnancy, it is especially important to avoid <a href="#14">conditions that can trigger complications</a>.<a href="#references"><sup>19</sup></a> Learn <a href="#17">how to stay well when you have sickle cell disease</a>.</p>

<p>Your baby will be tested for sickle cell disease after birth. If you and the baby's father have sickle cell disease, then the baby will too. If you have sickle cell disease and the baby's father has sickle cell trait, or just one sickle cell gene and one normal gene, then there is a 1 in 2 chance the baby will have sickle cell disease. If both parents have sickle cell trait, there is a 1 in 4 chance the baby will have sickle cell disease.<a href="#references"><sup>2</sup></a> If your baby is diagnosed with sickle cell disease, your doctor or nurse will talk to you about what to expect. <a href="https://www.nhlbi.nih.gov/health-topics/sickle-cell-disease" title="Sickle Cell Disease | National Heart, Lung, and Blood Institute">Learn what symptoms to watch for in your child.</a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is sickle cell disease treated during and after pregnancy? ",
      content: `

    <div class="answer"><p>When you have sickle cell disease and are pregnant, you have a higher risk of health problems and pregnancy problems. While you are pregnant, you may see different doctors, including a hematologist, a doctor who specializes in blood diseases. You may need to see a maternal-fetal medicine specialist who is trained in managing high-risk pregnancies. Your doctor, nurse, or midwife may send you to other specialists, depending on your medical history.<a href="#references"><sup>20</sup></a></p>

<p>Staying healthy is important for any pregnancy, but if you have sickle cell disease, you will need special care during your pregnancy to help you and your unborn baby stay healthy.</p>

<ul>
	<li><strong>More frequent visits to your doctor or midwife.</strong> Your doctor, nurse, or midwife will need to monitor you and your growing baby closely during your pregnancy. During the first two trimesters, you will probably have appointments every other week. Starting at 18 weeks, your doctor, nurse, or midwife will use ultrasound imaging each month to make sure the baby is growing normally.<a href="#references"><sup>19</sup></a></li>
	<li><strong>Changes to your treatment. </strong>Your doctor or midwife will tell you not to take <a href="#11">hydroxyurea</a> because it may cause birth defects in the baby. You may not be able to take hydroxyurea after pregnancy if you are breastfeeding because it crosses into breastmilk.<a href="#references"><sup>19</sup></a> Learn more about medicines and breastfeeding in our <a href="/breastfeeding/breastfeeding-home-work-and-public/breastfeeding-and-everyday-life/#9">Breastfeeding</a> section.</li>
	<li><strong>Tests.</strong> Around 32 weeks, your doctor, nurse, or midwife may do tests to make sure the placenta is delivering enough oxygen to the baby. The doctor may need to induce labor if the pregnancy goes as long as 40 weeks.<a href="#references"><sup>19</sup></a></li>
	<li><strong>Pain medicines.</strong> Your doctor may still prescribe opioids for pain. Opioids have not been shown to hurt a developing baby, although the baby may have symptoms of withdrawal after delivery. This withdrawal is called neonatal abstinence syndrome (NAS).<a href="#references"><sup>19</sup></a> Studies suggest that NAS may be more likely if the mother takes daily or long-acting opioids.<a href="#references"><sup>46</sup></a></li>
	<li><strong>Blood transfusions.</strong> You may need blood transfusions throughout your pregnancy, which may help prevent sickle cell disease complications and pregnancy complications.<a href="#references"><sup>47</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What should I know about the transition from childhood to adult care for sickle cell disease?",
      content: `

    <div class="answer"><p>Adults with sickle cell disease are more likely to experience chronic or long-term pain and health problems that happen because of organ damage.</p>

<p>Moving from pediatric (childhood) to adult medical care is a high-risk period for people with sickle cell disease. This might be because damage from sickle cell disease builds up over time and might not cause health problems until you are an adult. Or, it may be difficult to find a doctor who specializes in sickle cell disease in adults.</p>

<p>Teens and young adults should prepare ahead of time for living on their own with sickle cell disease. Some doctors and nurses begin talking about the transition to adult care as young as 13. Discussions between doctors, nurses, social workers, the patient, and family members about the transition should start at least one year before the transition to adult care.<a href="#references"><sup>48</sup></a> Healthy eating, regular exercise (not intense exercise), getting enough sleep, and dealing with stress in healthy ways can help prevent sickle cell crises. Find a specialist as soon as possible if you move to a new area. Figure out which hospital or center is closest if you have a medical emergency. Tell friends or loved ones who are nearby about the type of support you might need if you have a sickle cell crisis.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What research is being done on sickle cell disease?",
      content: `

    <div class="answer"><p>Research and new medicines such as vaccines are helping people with sickle cell disease live decades longer, with fewer health problems, than in the past. Doctors and researchers are working on better ways to treat sickle cell pain and on cures for all people with sickle cell disease.<a href="#references"><sup>49</sup></a> Current sickle cell disease research areas include:</p>

<ul>
	<li><strong>Bone marrow transplants.</strong> Many people with sickle cell disease do not have a bone marrow donor who is a good match, so they cannot get a bone marrow transplant. Researchers are studying how more people could donate bone marrow, how to make bone marrow transplants safer for people with sickle cell disease, and how to stop side effects from bone marrow transplants, such as infertility.<a href="#references"><sup>50</sup></a></li>
	<li><strong>Gene therapy.</strong> Changing the genes of someone with sickle cell disease could cure the disease. Researchers are exploring whether gene therapy can help sickle blood cells make a healthy type of hemoglobin.<a href="#references"><sup>21</sup></a></li>
	<li><strong>Clinical trials.</strong> Clinical trials or studies are how researchers test new medicines and procedures to treat sickle cell disease. Some medicines work slightly differently in people who have different backgrounds, so it's helpful to have as many people as possible participate to find new cures. Go to <a href="https://clinicaltrials.gov">ClinicalTrials.gov</a> to find a study in your area.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about sickle cell disease?",
      content: `

    <div class="answer"><p>For more information about sickle cell disease, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="https://www.cdc.gov/ncbddd/sicklecell/index.html" title="Learn More About Sickle Cell Disease"><strong>Centers for Disease Control and Prevention, HHS</strong></a><br>
	Phone Number: 1-800-232-4636</li>
	<li><a href="https://www.nhlbi.nih.gov/health-topics/sickle-cell-disease" title="Sickle Cell Disease"><strong>National Heart, Lung, and Blood Institute, NIH, HHS</strong></a><br>
	Phone Number: 301-592-8573</li>
	<li><a href="https://www.sicklecelldisease.org/" class="external-link external-popup" target="_blank"><strong>Sickle Cell Disease Association of America</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 1-800-421-8453</li>
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
	<li>Centers for Disease Control and Prevention (CDC). (2017). <a href="https://www.cdc.gov/ncbddd/sicklecell/data.html">Sickle Cell Disease (SCD): Data &amp; Statistics</a>.</li>
	<li>National Heart, Lung, and Blood Institute (NHLBI). (n.d.). <a href="https://www.nhlbi.nih.gov/health-topics/sickle-cell-disease">Sickle Cell Disease</a>.</li>
	<li>National Human Genome Research Institute (NHGRI). (2016). <a href="https://www.genome.gov/10001219/">Learning About Sickle Cell Disease</a>.</li>
	<li>Owusu-Ansah, A., Ihunnah, C. A., Walker, A. L., Ofori-Acquah, S. F. (2016). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4684475/">Inflammatory targets of therapy in sickle cell disease</a>. <em>Translational Research; 167</em>(1): 281–297.</li>
	<li>Conran, N., Belcher, J. D. (2018). <a href="https://www.ncbi.nlm.nih.gov/pubmed/29614637">Inflammation in sickle cell disease</a>. <em>Clinical hemorheology and microcirculation; 68</em>(2–3): 263–299.</li>
	<li>Piel, F. B., Steinberg, M. H., &amp; Rees, D. C. (2017). <a href="https://www.ncbi.nlm.nih.gov/pubmed/28423290">Sickle cell disease</a>. <em>New England Journal of Medicine, 376</em>, 1561–1573.</li>
	<li>Kato, G. J., Piel, F. B., Reid, C. D., Gaston, M. H., Ohene-Frempong, K., Krishnamurti, L., … Vichinsky, E. P. (2018). <a href="https://www.ncbi.nlm.nih.gov/pubmed/29542687">Sickle cell disease</a>. <em>Nature Reviews Disease Primers, 4</em>(18011), 18010.</li>
	<li>Quinn, C. T. (2013). <a href="https://www.ncbi.nlm.nih.gov/pubmed/24237976">Sickle cell disease in childhood: from newborn screening through transition to adult medical care</a>. <em>Pediatric Clinics of North America, 60</em>(6), 1363–1381.</li>
	<li>Yawn, B. P., Buchanan, G. R., Afenyi-Annan, A. N., Ballas, S. K., Hassell, K. L. James, A. H., … &amp; John-Sowah, J. (2014). <a href="https://www.ncbi.nlm.nih.gov/pubmed/25203083">Management of sickle cell disease: Summary of the 2014 evidence-based report by expert panel members</a>. <em>JAMA, 312</em>(10), 1033–1048.</li>
	<li>Liem, R. I., Chan, C., Vu., T. T., Fornage, M., Thompson, A. A., Liu, K., &amp; Carnethon, M. R. (2017). <a href="https://www.ncbi.nlm.nih.gov/pubmed/27856464">Association among sickle cell trait, fitness, and cardiovascular risk factors in CARDIA</a>. <em>Blood, 129</em>(6), 723–728.</li>
	<li>CDC. (2017). <a href="https://www.cdc.gov/ncbddd/sicklecell/traits.html">Sickle Cell Trait</a>.</li>
	<li>Key, N. S., Connes, P., &amp; Derebail, V. K. (2015).&nbsp;<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4478149/">Negative health implications of sickle cell trait in high income countries: from the football field to the laboratory</a>.&nbsp;<em>British Journal of Haematology</em><em>, 170</em>(1), 5–14.</li>
	<li>Naik, R. P., &amp; Haywood, C. Jr. (2015).&nbsp;<a href="https://www.ncbi.nlm.nih.gov/pubmed/26637716">Sickle cell trait diagnosis: clinical and social implications</a>.&nbsp;<em>Hematology/the Education Program of the American Society of Hematology</em><em>, 2015</em>, 160–167.</li>
	<li>Hassell, K.L. (2010). <a href="https://www.ncbi.nlm.nih.gov/pubmed/20331952">Population estimates of sickle cell disease in the U.S.</a> <em>American Journal of Preventive Medicine</em>, 38(4 Suppl), S512–21.</li>
	<li>Vichinsky, E.P. (2005). <a href="https://nyaspubs.onlinelibrary.wiley.com/doi/abs/10.1196/annals.1345.003" class="external-link external-popup" target="_blank">Changing patterns of thalassemia worldwide <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Annals of the New York Academy of Sciences</em>, 1054, 18-24.</li>
	<li>Solovieff, N., Hartley, S. W., Baldwin, C. T., Klings, E. S., Gladwin, M. T., Taylor, J. G., … Sebastiani, P. (2011). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3116635/">Ancestry of African Americans with sickle cell disease</a>.&nbsp;<em>Blood Cells, Molecules &amp; Diseases</em>,&nbsp;<em>47</em>(1), 41–45.</li>
	<li>Therrell, B. L., Lloyd-Puryear, M. A., Eckman, J. R., &amp; Mann, M. Y. (2015). <a href="https://www.ncbi.nlm.nih.gov/pubmed/25979783">Newborn screening for sickle cell diseases in the United States: a review of data spanning 2 decades</a>. <em>Seminars in Perinatology, 39</em>(3), 238–251.</li>
	<li>Stimpson, S. J., Rebele, E. C., &amp; DeBaun, M. R. (2016). <a href="https://www.ncbi.nlm.nih.gov/pubmed/26613137">Common gynecological challenges in adolescents with sickle cell disease.</a> <em>Expert Review of Hematology, 9</em>(2), 187–196.</li>
	<li>Andemariam, B., &amp; Browning, S. L. (2013). <a href="https://www.ncbi.nlm.nih.gov/pubmed/23702119">Current management of&nbsp;sickle&nbsp;cell&nbsp;disease in pregnancy.</a> <em>Clinics in Laboratory Medicine, 33</em>(2), 293–310.</li>
	<li>Kuo, K., &amp; Caughey, A. B. (2016). <a href="https://www.ncbi.nlm.nih.gov/pubmed/27242200">Contemporary outcomes of sickle cell disease in pregnancy</a>. <em>American Journal of Obstetrics and Gynecology, 215</em>(4), 505.e1–505.e5.</li>
	<li>Ghafuri, D. L., Stimpson, S. J., Day, M. E., James, A., DeBaun, M. R., &amp; Sharma, D. (2017). <a href="https://www.ncbi.nlm.nih.gov/pubmed/28891355">Fertility challenges for women with sickle cell disease</a>. <em>Expert Review of Hematology, 10</em>(10), 891–901.</li>
	<li>Karafin, M. S., Singh, M., Ceesay, M., Koduri, S., Zhang, L., Simpson, P., &amp; Field, J. J. (2018). <a href="https://www.ncbi.nlm.nih.gov/pubmed/29376481">Dyspareunia is associated with chronic pain in premenopausal women with sickle cell disease</a>.</li>
	<li>American College of Obstetricians and Gynecologists. (2016). <a href="https://www.acog.org/-/media/For-Patients/faq164.pdf" class="external-link external-popup" target="_blank">Prenatal Genetic Diagnostic Tests: Frequently Asked Questions (FAQ 164) <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> (PDF, 480 KB).</li>
	<li>Nevitt, S. J., Jones, A. P., &amp; Howard, J. (2017). <a href="http://www.cochrane.org/CD002202/CF_hydroxyurea-also-known-hydroxycarbamide-people-sickle-cell-disease" class="external-link external-popup" target="_blank">Hydroxyurea (also known as hydroxycarbamide) for people with sickle cell disease <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Cochrane Database of Systematic Reviews</em>, <em>4</em>, CD002202.</li>
	<li>Curtis, S. A., Danda, N., Etzion, Z., Cohen, H. W., &amp; Billett, H. H. (2015). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4527736/">Elevated steady state WBC and platelet counts are associated with frequent emergency room use in adults with sickle cell anemia</a>. <em>PLoS One, 10</em>(8), e0133116.</li>
	<li>Food and Drug Administration (FDA). 2017. <a href="https://www.fda.gov/Drugs/InformationOnDrugs/ApprovedDrugs/ucm566097.htm">FDA approved L-glutamine powder for the treatment of sickle cell disease</a>.</li>
	<li>Dastgiri, S., &amp; Dolatkhah, R.&nbsp;(2016). <a href="https://www.ncbi.nlm.nih.gov/pubmed/27574910">Blood transfusions for treating acute chest syndrome in people with sickle cell disease</a>. <em>Cochrane Database of Systematic Reviews, 8</em>, CD007843.</li>
	<li>Fitzhugh, C. D., &amp; Walters, M. C. (2017). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5728630/">The case for HLA-identical sibling hematopoietic stem cell transplantation in children with symptomatic sickle cell anemia</a>.&nbsp;<em>Blood Advances</em>,&nbsp;<em>1</em>(26), 2563–2567.</li>
	<li>Kassim, A. A., &amp; Sharma, D. (2017). <a href="https://www.ncbi.nlm.nih.gov/pubmed/28641096">Hematopoietic stem cell transplantation for sickle cell disease: The changing landscape</a>. <em>Hematology/Oncology and Stem Cell Therapy, 10</em>, 259–266.</li>
	<li>Joshi, S., Savani, B., Chow, E., Gilleece, M., Halter, J., Jacobsohn, D., … Majhail, N. (2014). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4071767/">Clinical guide to fertility preservation in hematopoietic cell transplant recipients</a>.&nbsp;<em>Bone Marrow Transplantation</em>,&nbsp;<em>49</em>(4), 477–484.</li>
	<li>Brandow, A. M., &amp; DeBaun, M. R. (2018). <a href="https://www.ncbi.nlm.nih.gov/pubmed/29729787">Key components of pain management for children and adults with sickle cell disease</a>. <em>Hematology/Oncology</em><em> Clinics of North America, 32</em>(3), 535–550.</li>
	<li>Thein, M. S., Igbineweka, N. E., &amp; Then, S. L. (2017). <a href="https://www.ncbi.nlm.nih.gov/pubmed/27914684">Sickle cell disease in the older adult</a>. <em>Pathology, 49</em>(1), 1–9.</li>
	<li>Hankins, J., Penkert, R. R., Lavoie, P., Tang, L., Sun, Y., &amp; Hurwitz, J. L. (2016). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4950380/">Parvovirus B19 infection in children with sickle cell disease in the hydroxyurea era</a>.&nbsp;<em>Experimental Biology and Medicine (Maywood, N.J.)</em>,&nbsp;<em>241</em>(7), 749–754.</li>
	<li>NHLBI. (2014). <a href="https://www.nhlbi.nih.gov/health-topics/evidence-based-management-sickle-cell-disease">Evidence-based management of sickle cell disease: Expert panel report, 2014</a>.</li>
	<li>Wood, J. C. (2016). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5024582/">The heart in sickle cell disease, a model for heart failure with preserved ejection fraction</a>.&nbsp;<em>Proceedings of the National Academy of Sciences of the United States of America</em>,&nbsp;<em>113</em>(35), 9670–9672.</li>
	<li>Delaney, K.-M. H., Axelrod, K. C., Buscetta, A., Hassell, K. L., Adams-Graves, P. E., Seamon, C., … Minniti, C. P. (2013). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3864012/">Leg ulcers in sickle cell disease: current patterns and practices</a>. <em>Hemoglobin</em>,&nbsp;<em>37</em>(4), 10.3109/03630269.2013.789968.</li>
	<li>Tewari, S., Brousse, V., Piel, F. B., Menzel, S., &amp; Rees, D. C. (2015). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4800688/">Environmental determinants of severity in sickle cell disease</a>.&nbsp;<em>Haematologica</em>,&nbsp;<em>100</em>(9), 1108–1116.</li>
	<li>Ballas, S. K., Kesen, M. R., Goldberg, M. F., Lutty, G. A., Dampier, C., Osunkwo, I., … Malik, P. (2012). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3415156/">Beyond the definitions of the phenotypic complications of sickle cell disease: An update on management</a>.&nbsp;<em>The Scientific World Journal</em>,&nbsp;<em>2012</em>, 949535.</li>
	<li>Connes, P., Machado, R., Hue, O., &amp; Reid, H. (2018). <a href="https://www.researchgate.net/publication/51979005_Exercise_limitation_exercise_testing_and_exercise_recommendations_in_sickle_cell_anemia" class="external-link external-popup" target="_blank">Exercise limitation, exercise testing and exercise recommendations in sickle cell anemia <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Clinical Hemorheology and Microcirculation, 49</em>(2011), 151–163.</li>
	<li>Bakshi, N., Ross, D., &amp; Krishnamurti, L. (2018). <a href="https://www.ncbi.nlm.nih.gov/pubmed/?term=PMC5810514">Presence of pain on three or more days of the week is associated with worse patient reported outcomes in adults with sickle cell disease</a>. <em>Journal of Pain Research, 2018</em>(11), 313–318.</li>
	<li>CDC. <a href="https://www.cdc.gov/ncbddd/sicklecell/documents/tipsheets_living.pdf">Sickle Cell Disease: Tips for Healthy Living</a> (PDF, 2 MB).</li>
	<li>Smith-Whitley, K. (2014). <a href="http://www.bloodjournal.org/content/124/24/3538.long?sso-checked=true" class="external-link external-popup" target="_blank">Reproductive issues in sickle cell disease <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Blood, 124</em>, 3538–3543.</li>
	<li>Sandhu, M. &amp; Cohen, A. (2015). <a href="https://www.ncbi.nlm.nih.gov/pubmed/26182337">Aging in sickle cell disease: co-morbidities and new issues in management</a>. <em>Hemoglobin, 39</em>(4), 221–224.</li>
	<li>Haddad, L. B., Curtis, K. M., Legardy-Williams, J. K., Cwiak, C., &amp; Jamieson, D. J. (2012). <a href="https://www.contraceptionjournal.org/article/S0010-7824(11)00581-6/abstract" class="external-link external-popup" target="_blank">Contraception for individuals with sickle cell disease: a systematic review of the literature <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Contraception, 85</em>(6), 527–537.</li>
	<li>Oteng-Ntim, E., Meeks, D., Seed, P. T., Webster, L., Howard, J., Doyle, P., &amp; Chappell, L. C. (2015). <a href="https://www.ncbi.nlm.nih.gov/pubmed/25800049">Adverse maternal and perinatal outcomes in pregnant women with sickle cell disease: systematic review and meta-analysis</a>. <em>Blood, 125</em>(21), 3316–3325.</li>
	<li>Nnoli, A., Seligman, N. S., Dysart, K., Baxter, J. K., &amp; Ballas, S. K. (2018). <a href="https://www.sciencedirect.com/science/article/pii/S0027968416301067" class="external-link external-popup" target="_blank">Opioid utilization by pregnant women with sickle cell disease and the risk of neonatal abstinence syndrome <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>JAMA, 110</em>(2), 163–168.</li>
	<li>Malinowski, A. K., Shehata, N., D'Souza, R., Kuo, K. H., Ward, R., Shah, P. S., &amp; Murphy, K. (2015). <a href="https://www.ncbi.nlm.nih.gov/pubmed/26302758">Prophylactic transfusion for pregnant women with sickle cell disease: a systematic review and meta-analysis</a>. <em>Blood, 126</em>(21), 2424–2435.</li>
	<li>Jordan, L., Swerdlow, P., &amp; Coates, T. D. (2013). <a href="http://www.ncbi.nlm.nih.gov/pubmed/23511487">Systematic review of transition from adolescent to adult care in patients with sickle cell disease</a>. <em>Journal of Pediatric Hematology/Oncology, 35</em>(3), 165-169.</li>
	<li>American Society of Hematology. (n.d.). <a href="http://www.hematology.org/Research/Recommendations/Sickle-Cell/" class="external-link external-popup" target="_blank">ASH Priorities for Sickle Cell Disease and Sickle Cell Trait <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>Shenoy, S., Angelucci, E., Arnold, S. D., Baker, K. S., Bhatia, M., Bresters, D., … Walters, M. C. (2017). <a href="https://www.ncbi.nlm.nih.gov/pubmed/28065838">Current results and future research priorities in late effects after hematopoietic stem cell transplantation for children with sickle cell disease and thalassemia: a consensus statement from the second pediatric blood and marrow transplant consortium international conference on late effects after pediatric hematopoietic stem cell transplantation</a>. <em>Biology of Blood Marrow Transplantation, 23</em>(4), 552–561.</li>
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
