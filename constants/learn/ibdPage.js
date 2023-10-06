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

export function ibdPage({ navigation, ...rest }) {
  const condName = "Inflammatory bowel disease";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Inflammatoryboweldisease.jpg?VersionId=jIF7nx5AHhW70pKdhuwY_I2lIkHskXzF";
  const condDescription =
    "IBD is the name for a group of conditions that cause the digestive system to become inflamed (red, swollen, and sometimes painful). \n Your digestive system runs from your mouth to your anus. If your digestive system is healthy, food moves smoothly through your digestive system and out of your body. Your body absorbs the nutrients it needs from food. The rest passes through your body and leaves as urine (pee) or stool (poop). \n If you have IBD, part of your digestive system is inflamed. Over time, the inflammation can cause severe pain, diarrhea, and sometimes bloody stool. IBD symptoms come and go in episodes or flares. Because of the inflammation in your digestive system from IBD, your body cannot absorb all of the nutrients it needs. This can lead to malnutrition, other symptoms of IBD, or other health problems, such as anemia.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Inflammatoryboweldisease.jpg?VersionId=jIF7nx5AHhW70pKdhuwY_I2lIkHskXzF"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Inflammatory bowel disease</h1>  -->
            <p><strong>Inflammatory bowel disease (IBD) is the name for a group of conditions that cause the digestive system to become inflamed (red, swollen, and sometimes painful).</strong> The most common types of IBD are <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="UHL-sur-uh-tiv koh-LEYE-tiss">ulcerative colitis</a> and <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="krohnz">Crohn's</a> disease. These cause similar symptoms, including diarrhea, abdominal pain, and fever. IBD affects women in unique ways. IBD symptoms can get worse during your menstrual period and can cause problems getting pregnant.</p>

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
      title: "What is IBD?",
      content: `

    <div class="answer"><p>IBD is the name for a group of conditions that cause the digestive system to become inflamed (red, swollen, and sometimes painful).</p>

<p>Your digestive system runs from your mouth to your <a href="/glossary#anus">anus</a>. If your digestive system is healthy, food moves smoothly through your digestive system and out of your body. Your body absorbs the nutrients it needs from food. The rest passes through your body and leaves as urine (pee) or stool (poop).</p>

<p>If you have IBD, part of your digestive system is inflamed. Over time, the inflammation can cause severe pain, diarrhea, and sometimes bloody stool. IBD symptoms come and go in episodes or flares. Because of the inflammation in your digestive system from IBD, your body cannot absorb all of the nutrients it needs. This can lead to malnutrition, other symptoms of IBD, or other health problems, such as <a href="/a-z-topics/iron-deficiency-anemia">anemia</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the different types of IBD?",
      content: `

    <div class="answer"><p>The most common types of IBD are ulcerative colitis and Crohn's disease. The diseases are similar but affect different parts of the digestive system.</p>

<ul>
	<li>Ulcerative colitis affects the large intestine and rectum. The disease causes swelling and tiny open sores, or ulcers, on the surface of the lining of the large intestine or rectum. The ulcers can bleed and produce pus. With ulcerative colitis, there is a continuous area of damage along the large intestine and rectum rather than patches of damage.</li>
	<li>Crohn's disease can affect any part of the digestive system, from the mouth to the anus. Inflammation in Crohn's disease often happens in patches on digestive organs such as the stomach or intestines. With Crohn's, there is normal tissue next to an inflamed area, or patches of damage.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets IBD?",
      content: `

    <div class="answer"><p>More than 3 million people in the United States have IBD.<a href="#references"><sup>1</sup></a> IBD is more common in people who are over age 45.<a href="#references"><sup>1</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Are some women more at risk of IBD?",
      content: `

    <div class="answer"><p>Yes. Your risk of IBD is higher if you:</p>

<ul>
	<li><strong>Are Hispanic or non-Hispanic white.</strong><a href="#references"><sup>1</sup></a> In the past, studies have shown that non-Hispanic black people have the lowest rates, although recent studies have found that IBD is increasing in people who are African-American or Hispanic.<a href="#references"><sup>2</sup></a></li>
	<li><strong>Are Jewish of European descent (Ashkenazi)</strong><a href="#references"><sup>3</sup></a></li>
	<li><strong>Smoke.</strong> If you smoke, you are more likely to get Crohn's disease.</li>
	<li><strong>Have a family member with IBD.</strong><a href="#references"><sup>4</sup></a> Researchers think certain genes you inherit from family members may cause the immune systems in people with IBD to overreact and may cause pain and inflammation.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does IBD affect women?",
      content: `

    <div class="answer"><p>IBD affects women in unique ways. IBD can cause:</p>

<ul>
	<li><strong>More menstrual symptoms.</strong> Women with IBD are more likely to experience premenstrual symptoms, such as headache<a href="#references"><sup>5</sup></a> and menstrual pain.<a href="#references"><sup>6</sup></a> Diarrhea, abdominal pain, and other IBD symptoms may be more severe before and during your period.<a href="#references"><sup>7</sup></a> Keep track of your symptoms so you can talk with your doctor or nurse about ways to manage them.</li>
	<li><a href="/a-z-topics/iron-deficiency-anemia"><strong>Iron-deficiency anemia</strong></a><strong>.</strong> The risk of iron-deficiency anemia is higher for women who have IBD than for women who do not have IBD. If you have IBD, your body may not absorb iron well, and you have a higher risk of bleeding in the digestive system.</li>
	<li><strong>Trouble getting pregnant. </strong>During a flare-up of your IBD symptoms, you may have trouble getting pregnant.<a href="#references"><sup>8</sup></a> <a href="#17">Read more about pregnancy and IBD</a>.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of IBD?",
      content: `

    <div class="answer"><p>The symptoms of IBD are often similar for ulcerative colitis and Crohn's disease. Symptoms include:<a href="#references"><sup>9</sup></a><sup>,</sup><a href="#references"><sup>10</sup></a></p>

<ul>
	<li>Diarrhea (often loose and watery with Crohn's disease or bloody with ulcerative colitis)</li>
	<li>Severe or chronic cramping pain in the abdomen</li>
	<li>Loss of appetite, leading to weight loss</li>
	<li>Fatigue</li>
	<li>Fever</li>
	<li>Rectal bleeding</li>
	<li>Joint pain</li>
	<li>Skin problems, such as rashes</li>
</ul>

<p>Symptoms can range from mild to severe. Your symptoms can sometimes go away for months or even years (called remission) before coming back (called a flare-up).</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes IBD?",
      content: `

    <div class="answer"><p>Researchers do not know exactly what causes IBD. The body's immune (defense) system may trigger IBD. Usually, the immune system protects the body from infections caused by viruses or bacteria (germs). Once the infection is gone, that part of the immune system "shuts off" until it is needed again.</p>

<p>But in people with IBD, the immune system may overreact to normal bacteria in the digestive system. Once the immune system starts, it does not shut off when it should. Over time, this leads to inflammation, which damages the digestive system.</p>

<p>While researchers do not know why IBD starts, some studies suggest that the risk of developing IBD may be higher for women who take antibiotics,<a href="#references"><sup>11</sup></a> birth control pills,<a href="#references"><sup>12</sup></a> or nonsteroidal anti-inflammatories (NSAIDs), such as aspirin or ibuprofen.<a href="#references"><sup>13</sup></a></p>

<p>Stress does not cause IBD. But it may make IBD symptoms worse.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is IBD diagnosed?",
      content: `

    <div class="answer"><p>If you think you have IBD, talk to your doctor or nurse. Your doctor will ask you questions about your symptoms and do tests to find out whether you have IBD and, if so, which type.</p>

<p>Some tests used to diagnose IBD include:</p>

<ul>
	<li><strong>Blood tests.</strong> Your doctor will send a blood sample to a lab to test for inflammation, other signs of IBD, or <a href="/a-z-topics/iron-deficiency-anemia">anemia</a>.</li>
	<li><strong>Stool (poop) sample.</strong> Your doctor will send a sample of stool to test for blood and other signs of inflammation related to IBD.</li>
	<li><strong>Colonoscopy or sigmoidoscopy.</strong> For both of these tests, doctors insert a long, thin tube with a lighted camera into the anus while you are under sedation (unconscious). The image appears on a screen. During a sigmoidoscopy, your doctor looks at the lining of the lower part of your large intestine. During a colonoscopy, your doctor looks at the lining of the entire large intestine and sometimes a small part of the small intestine. Your doctor looks for any inflammation, bleeding, or ulcers. During the exam, your doctor may do a biopsy to take a tissue sample from the lining of the digestive tract and view it under a microscope.</li>
	<li><strong>Upper endoscopy. </strong>While you are under light sedation, your doctor puts an endoscope, a flexible tube with a camera, through the esophagus (food pipe) and stomach and into the small intestine to look at its lining. Your doctor may take a sample of tissue during this procedure.</li>
	<li><strong>Small bowel follow-through. </strong>You will drink a liquid that contains a special dye that shows up on X-rays. As the dye moves from the stomach to the intestine, a radiologist will take X-rays to look for problems. This procedure is sometimes done after an upper endoscopy.</li>
	<li><strong>Computerized axial tomography (CT scan).</strong> A CT scan takes X-rays from several different angles around your body. Your doctor studies the X-rays for signs of inflammation.</li>
	<li><strong>CT or magnetic resonance (MR) enterography.</strong> CT enterography uses a special type of X-ray to look for problems in the digestive tract. An MR enterograph is another way to look at the digestive tract, but it does not use X-ray radiation. For both of these procedures, you drink a liquid with a dye or contrast solution. The solution colors your digestive tract and lets doctors see problem areas by using X-rays or magnetic fields.</li>
	<li><strong>Capsule endoscopy.</strong> A capsule endoscope is a small, pill-shaped camera that you swallow. The camera then travels through your digestive system. It records video of the small intestine and sends the video to a screen where your doctor can watch it.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is IBD treated?",
      content: `

    <div class="answer"><p>Treatments for IBD may include:</p>

<ul>
	<li><strong><a href="#10">Medicines</a>.</strong> Most people with IBD take medicine to control their symptoms.</li>
	<li><strong>Surgery.</strong> Surgery may be an option if medicine does not work to control your symptoms. Learn more about <a href="#11">surgery for Crohn's disease</a> and <a href="#12">surgery for ulcerative colitis</a>.</li>
	<li><strong><a href="#13">Steps you can take at home</a>.</strong> Your doctor can talk to you about steps you can take at home to help control your symptoms and prevent flare-ups.</li>
	<li><strong><a href="#14">Changes to your eating habits</a>.</strong> Avoiding certain foods, changing other eating habits, and limiting or avoiding alcohol may help control your symptoms during flare-ups.</li>
</ul>

<p>Some forms of psychotherapy, sometimes called "talk therapy," may also help you cope with stress related to IBD symptoms and help make your pain less severe.<a href="#references"><sup>14</sup></a> Your doctor can refer you to a counselor or therapist, or you can find one at <a href="https://findtreatment.samhsa.gov/">https://findtreatment.samhsa.gov/</a>.</p>

<p>Some counselors specialize in working with people who have IBD. A counselor can help you talk about any distressing emotions you might have about IBD symptoms. A counselor can also treat anxiety, depression, or other mental health concerns. Ask your doctor or nurse for a referral or recommendation for a counselor in your area.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What medicines treat IBD?",
      content: `

    <div class="answer"><p>Medicines used to treat IBD help reduce inflammation, relieve symptoms, and prevent future flare-ups. Your doctor may give you:<a href="#references"><sup>10</sup></a><sup>,</sup><a href="#references"><sup>15</sup></a></p>

<ul>
	<li><strong>Medicines to control inflammation, such as:</strong>

	<ul style="list-style-type:circle;">
		<li><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="uh-MEE-noh-suh-LISS-uh-layts">Aminosalicylates</a>, which may also help prevent flare-ups. Most people with mild to moderate ulcerative colitis and some people with Crohn's disease are treated with aminosalicylates.</li>
		<li>Biologic therapies, which block substances in your body that cause inflammation</li>
		<li>Antibiotics, which may help if you have an infection or overgrowth of bacteria</li>
	</ul>
	</li>
	<li><strong>Medicines to calm your immune system, such as:</strong>
	<ul style="list-style-type:circle;">
		<li><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="KOR-tih-koh-STAIR-oids">Corticosteroids</a>, which are strong, fast-acting drugs to treat IBD flare-ups. You will take these for short periods of time only. If taken for too long, corticosteroids can cause serious side effects, including bone loss.</li>
		<li>Immunosuppressants, which can take up to 6 months to work. But unlike corticosteroids, immunosuppressants can be taken long-term to prevent flare-ups.</li>
	</ul>
	</li>
</ul>

<p>You may need to try several different medicines before you find what works best for you.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Will I need surgery for Crohn's disease?",
      content: `

    <div class="answer"><p>Maybe. More than half of people with Crohn's disease need surgery within 20 years of being diagnosed.<a href="#references"><sup>16</sup></a> Surgery can relieve your symptoms, but it cannot cure the disease.</p>

<p>Surgeries for Crohn's disease include:<a href="#references"><sup>15</sup></a></p>

<ul>
	<li><strong>Bowel resection.</strong> In this surgery, your doctor removes the damaged part of your small or large intestine and sews the two healthy ends together.</li>
	<li><strong>Removal of your large intestine, including your rectum.</strong> After this procedure, your body can no longer get rid of solid waste on its own. Your doctor will make a small opening in the front of your abdominal wall. Then your doctor will bring the end of your small intestine through the hole. This allows waste to drain out of your body. A pouch is worn over the opening to collect waste. You will need to empty the pouch several times a day.</li>
	<li><strong>Fistula surgery. </strong>Some patients develop a collection of pus (an abscess) or drainage of pus from an opening (a fistula) around the anus. Surgery may be required to drain the pus and put in a small wire (a seton) to keep the pus from recollecting.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Will I need surgery for ulcerative colitis?",
      content: `

    <div class="answer"><p>Maybe. Almost 1 in 3 people with ulcerative colitis may need surgery to treat the ulcerative colitis at some point.<a href="#references"><sup>17</sup></a></p>

<p>Surgery to remove your entire large intestine and rectum may cure ulcerative colitis. After your large intestine and rectum are removed, your body can no longer get rid of solid waste on its own. Your doctor will do one of two types of procedures to allow your body to get rid of waste:<a href="#references"><sup>10</sup></a></p>

<ul>
	<li>Your doctor will make a small opening in the front of your abdominal wall. Then your doctor will bring the end of your small intestine through the hole. This allows waste to drain out of your body. A pouch is worn over the opening to collect waste. You will need to empty the pouch several times a day.</li>
	<li>Your doctor will attach the end of your small intestine to the inside of your anus, where the rectum used to be, creating an internal pouch. This procedure is also called <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="IL-ee-oh-AY-nuhl uh-NASS-toh-MOH-sis">ileoanal anastomosis</a>. Waste is stored in the pouch and passes out of the anus in the usual way.</li>
</ul>

<p>The type of procedure your doctor does depends on your symptoms and how severe they are, your age, and how the procedure will affect your quality of life, such as the types of activities you do.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What can I do at home to relieve my IBD symptoms?",
      content: `

    <div class="answer"><p>Your doctor will talk to you about steps you can take at home to relieve your IBD symptoms. Some steps may include:</p>

<ul>
	<li><strong>Reducing stress</strong><strong>.</strong> Stress does not cause IBD, but it can make your IBD symptoms worse. Some studies show that mindfulness therapy, hypnotherapy, and psychotherapy may help.<a href="#references"><sup>18</sup></a> <a href="/mental-health/good-mental-health/stress-and-your-health">Get tips on relieving stress</a>.</li>
	<li><strong>Changing your eating habits</strong><strong>.</strong> Some women report that limiting or avoiding <a href="#14">certain foods</a> helps relieve symptoms.<a href="#references"><sup>19</sup></a></li>
	<li><strong>Taking vitamin supplements.</strong> Your doctor may suggest vitamin supplements if your body does not get all of the nutrients you need from food because of IBD. You may need to take vitamin B12, folic acid, vitamin D, calcium, or iron.</li>
	<li><strong>Taking probiotics.</strong> Some research suggests that probiotics, which are live bacteria similar to what is found naturally in the body, may help some people with IBD.<a href="#references"><sup>20</sup></a> Probiotics are in foods such as yogurt that indicate there are "live and active cultures" on the label. Probiotics also come as a supplement you can buy in many stores. Vitamins and supplements are not regulated by the Food and Drug Administration (FDA) in the same way as medicines. Talk to your doctor or nurse about any supplements you take, including probiotics.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can changing my eating habits help treat IBD?",
      content: `

    <div class="answer"><p>Maybe. Researchers don't have enough evidence yet to show which specific diets, foods, or ingredients may make IBD symptoms worse or better. Some women say that changing the foods they eat helps relieve their symptoms during flare-ups. Most doctors recommend avoiding processed foods and foods with a lot of additives, such as carrageenan and maltodextrin (thickeners).</p>

<p>Talk to your doctor about specific foods you may want to eat or avoid.<a href="#references"><sup>21</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can IBD lead to other health problems?",
      content: `

    <div class="answer"><p>Yes. IBD can lead to other health problems. Some of the conditions include:</p>

<ul>
	<li><a href="/a-z-topics/iron-deficiency-anemia"><strong>Iron-deficiency anemia</strong></a><strong>.</strong><a href="#references"><sup>22</sup></a> Iron-deficiency anemia happens when your level of healthy red blood cells, which carry oxygen to all the parts of your body, is below normal. This can happen because of blood loss from your digestive system.</li>
	<li><strong>Dehydration or malnutrition.</strong><a href="#references"><sup>23</sup></a> Diarrhea and cramping pain can make it harder to eat or for your body to get the nutrients it needs. You may need an IV or feeding tube to replace lost fluids or nutrients.</li>
	<li><strong>Toxic megacolon.</strong> Toxic megacolon happens when the large intestine swells quickly and stops working. Toxic megacolon is serious and can cause severe pain and even death.<a href="#references"><sup>24</sup></a></li>
	<li><strong>Colon cancer. </strong>Crohn's disease can <a href="#16">raise your risk of colon cancer</a>.<a href="#references"><sup>25</sup></a> Talk to your doctor about your risk.</li>
	<li><strong>Weak bones.</strong><a href="#references"><sup>26</sup></a> Crohn's disease can cause bone loss and <a href="/glossary#osteoporosis">osteoporosis</a>. Medicines to treat ulcerative colitis may also lead to bone loss.</li>
	<li><strong>Inflammation inside your body. </strong>IBD can cause liver problems, <a href="/glossary#gallstone">gallstones</a>, and pancreatitis (inflammation of the pancreas).<a href="#references"><sup>27</sup></a></li>
	<li><strong>Kidney stones. </strong>Kidney stones are small, painful stones, sometimes formed from oxalate (a type of salt) in the kidneys. They are more common in people with Crohn's disease.<a href="#references"><sup>28</sup></a></li>
</ul>

<p>Some of these other health problems get better when IBD is treated. Some other health problems must be treated separately from IBD.</p>

<p>Although these conditions are not necessarily caused by IBD, people with IBD are more likely to also have depression and anxiety, especially during flare-ups.<a href="#references"><sup>29</sup></a> Depression and anxiety are serious mental health problems that can be treated. Talk to your doctor, nurse, or counselor. Find a counselor at <a href="https://findtreatment.samhsa.gov/">https://findtreatment.samhsa.gov/</a> by entering your location.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Do I need to be screened for colon cancer?",
      content: `

    <div class="answer"><p>Yes. Everyone needs to be screened for colon cancer beginning at 50 years old. But if you have IBD, your risk of colon cancer is higher. You might need to be screened at a younger age or more often than people without IBD.</p>

<ul>
	<li>Talk to your doctor about when to begin colon cancer screening, what tests to get, and how often to have them.</li>
	<li>Your doctor's suggestions will depend on your family health history, how long you have had IBD, whether your colon is affected by your IBD, and how severe it is.</li>
	<li>If you have had IBD for 8 to 10 years, your doctor may recommend a colonoscopy with biopsies every 1 to 2 years. This test checks for early warning signs of cancer.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does IBD affect pregnancy?",
      content: `

    <div class="answer"><p>IBD can affect your chances of getting pregnant and your symptoms during pregnancy. Pregnant women with IBD may have a high-risk pregnancy.</p>

<ul>
	<li><strong>Before you get pregnant:</strong> You may have more trouble getting pregnant during a flare-up (when symptoms come back after being gone for a while). Also, if you have IBD, talk to your doctor about your risk of problems during pregnancy. If you have a flare-up during pregnancy, you have a slightly higher risk of premature birth, low birth weight, and cesarean delivery (C-section) than women who do not have IBD.<a href="#references"><sup>30</sup></a></li>
</ul>

<p>Your doctor may also change the type or amount of the medicine you take. Some medicines, such as methotrexate and thalidomide, cause birth defects and other health problems and should not be taken while you are pregnant or breastfeeding.<a href="#references"><sup>31</sup></a> If you might become pregnant, talk to your doctor about any medicines you take.</p>

<ul>
	<li><strong>During pregnancy:</strong> Some women say their symptoms get better during pregnancy, but others say they get worse. Women whose IBD is in remission (when symptoms go away for months or even years) before getting pregnant are more likely to stay symptom-free during pregnancy.<a href="#references"><sup>31</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can I treat IBD if I am pregnant or breastfeeding?",
      content: `

    <div class="answer"><p>Yes, but your doctor may change the type or amount of the medicine you take. Some medicines, such as methotrexate and thalidomide, cause birth defects and other health problems and should not be taken while you are pregnant or breastfeeding.<a href="#references"><sup>31</sup></a></p>

<p>Before you get pregnant, make a plan with your obstetrician and gastroenterologist about the medicines you will take during and after pregnancy. Take your medicines as your doctor tells you to. If you stop taking your medicines and your symptoms come back (flare up), it may be difficult to get them back under control.<a href="#references"><sup>31</sup></a></p>

<p>Talk with your doctor about your medicines and breastfeeding before you give birth. You can search for your medicine in the&nbsp;<a href="http://toxnet.nlm.nih.gov/newtoxnet/lactmed.htm" target="_blank">LactMed database</a>&nbsp;to find out if your medicine passes through your breastmilk and, if so, if it has any possible side effects for your nursing baby.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How will IBD affect my sexual health?",
      content: `

    <div class="answer"><p>IBD and the surgery and medicines used to treat it can affect your sexual health. Sometimes you may just feel too tired to have sex. You may also have emotional concerns related to the disease. For instance, you may not feel as confident about your body as you did before you began to have IBD symptoms.</p>

<ul>
	<li><strong>If you have pain during sex, </strong>talk to your doctor or nurse. Your doctor may prescribe a hormonal cream or suppository for your vagina.</li>
	<li><strong>If you have an external pouch</strong> after surgery, here are some tips:
	<ul style="list-style-type:circle;">
		<li>Empty the pouch before sex.</li>
		<li>Use deodorizers — one in the pouch and perhaps a pill or liquid you take by mouth (ask your doctor or nurse about them).</li>
		<li>Make sure the pouch is secure.</li>
		<li>If the pouch is in the way or causes pain during sex, experiment with different positions.</li>
		<li>Find a pouch cover you're comfortable wearing during sex, or look for different pieces of clothing that could cover the pouch.</li>
	</ul>
	</li>
	<li><strong>Talk to your partner</strong> <strong>about how you feel.</strong> This can help build intimacy and clear up misunderstandings.</li>
	<li><strong>Consider talking to a counselor or therapist.</strong> Some counselors specialize in working with people who have IBD. A counselor can help you cope with distressing emotions caused by IBD symptoms. Counseling can also treat anxiety, depression, or other mental health concerns. Ask your doctor or nurse for a referral or recommendation for a counselor in your area.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your questions about IBD?",
      content: `

    <div class="answer"><p>For more information about IBD, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.niddk.nih.gov"><strong>National Institute of Diabetes and Digestive and Kidney Diseases</strong></a><strong>, NIH, HHS</strong><br>
	Phone Number: 301-496-3583</li>
	<li><a href="http://www.gastro.org/" class="external-link external-popup" target="_blank"><strong>American Gastroenterological Association</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 301-654-2055</li>
	<li><a href="http://www.ccfa.org/" class="external-link external-popup" target="_blank"><strong>Crohn's &amp; Colitis Foundation</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 1-800-932-2423</li>
	<li><a href="http://www.naspghan.org/" class="external-link external-popup" target="_blank"><strong>North American Society for Pediatric Gastroenterology, Hepatology, and Nutrition</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 215-233-0808</li>
	<li><a href="http://patients.gi.org/" class="external-link external-popup" target="_blank"><strong>American College of Gastroenterology</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 301-263-9000</li>
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
	<li>Dahlhamer, J. M., Zammitti, E. P., Ward, B. W., Wheaton, A. G., &amp; Croft, J. B. (2016). <a href="https://www.cdc.gov/mmwr/volumes/65/wr/mm6542a3.htm">Prevalence of inflammatory bowel disease among adults aged ≥18 years—United States, 2015</a>.&nbsp;<em>MMWR Morbidity and Mortality Weekly Report, </em><em>65</em>(42), 1166–1169.</li>
	<li>Afzali, A., &amp; Cross, R. K. (2016). <a href="http://www.ncbi.nlm.nih.gov/pubmed/27379446">Racial and Ethnic Minorities with Inflammatory Bowel Disease in the United States: A Systematic Review of Disease Characteristics and Differences</a>. <em>Inflammatory Bowel Diseases, 22</em>(8), 2023–2040.</li>
	<li>Lynch, H. T., Brand, R. E., &amp; Locker, G. Y. (2004). <a href="http://www.ncbi.nlm.nih.gov/pubmed/15516846">Inflammatory bowel disease in Ashkenazi Jews: implications for familial colorectal cancer</a>. <em>Familial Cancer,</em> <em>3</em>(3–4), 229–232.</li>
	<li>Nunes, T., Fiorino, G., Danese, S., &amp; Sans, M. (2011). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3123468/">Familial aggregation in inflammatory bowel disease: Is it genes or environment?</a>. <em>World Journal of Gastroenterology, 17</em>(22), 2715–2722.</li>
	<li>Lim, S. M., Nam, C. M., Kim, Y. N., Lee, S. A., Kim, E. H., Hong, S. P., … Cheon, J. H. (2013). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3572320/">The Effect of the Menstrual Cycle on Inflammatory Bowel Disease: A Prospective Study</a>. <em>Gut and Liver,</em> <em>7</em>(1), 51–57.</li>
	<li>Heitkemper, M. M., &amp; Chang, L. (2009). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3322543/">Do Fluctuations in Ovarian Hormones Affect Gastrointestinal Symptoms in Women With Irritable Bowel Syndrome?</a>. <em>Gender Medicine,</em>&nbsp;<em>6</em>(Suppl 2), 152–167.</li>
	<li>Bharadwaj, S., Barber, M. D., Graff, L. A., &amp; Shen, B. (2015). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4527267/">Symptomatology of irritable bowel syndrome and inflammatory bowel disease during the menstrual cycle</a>.&nbsp;<em>Gastroenterology Report,</em>&nbsp;<em>3</em>(3), 185–193.</li>
	<li>Hosseini-Carroll, P., Mutyala, M., Seth, A., Nageeb, S., Soliman, D., Boktor, M., … Alexander, J.S. (2015). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4635156/">Pregnancy and inflammatory bowel diseases: Current perspectives, risks and patient management</a>.&nbsp;<em>World Journal of Gastrointestinal Pharmacology and Therapeutics,</em>&nbsp;<em>6</em>(4), 156–171.</li>
	<li>National Institute of Diabetes and Digestive and Kidney Diseases. (2016). <a href="https://www.niddk.nih.gov/health-information/digestive-diseases/crohns-disease/symptoms-causes">Symptoms &amp; Causes of Crohn's Disease</a>.</li>
	<li>National Institute of Diabetes and Digestive and Kidney Diseases. (2014). <a href="https://www.niddk.nih.gov/health-information/digestive-diseases/ulcerative-colitis">Ulcerative Colitis</a>.</li>
	<li>Ko, Y., Butcher, R., &amp; Leong, R. W. (2014). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3921506/">Epidemiological studies of migration and environmental risk factors in the inflammatory bowel diseases</a>. <em>World Journal of Gastroenterology,</em> <em>20</em>(5), 1238–1247.</li>
	<li>Molodecky, N. A., &amp; Kaplan, G. G. (2010). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2886488/">Environmental Risk Factors for Inflammatory Bowel Disease</a>.&nbsp;<em>Gastroenterology &amp; Hepatology,</em>&nbsp;<em>6</em>(5), 339–346.</li>
	<li>Ananthakrishnan, A. N., Higuchi, L. M., Huang, E. S., Khalili, H., Richter, J. M., Fuchs, C. S., &amp; Chan, A. T. (2012). <a href="https://www.ncbi.nlm.nih.gov/pubmed/22393130">Aspirin, nonsteroidal anti-inflammatory drug use, and risk for Crohn's disease and ulcerative colitis: a cohort study</a>.&nbsp;<em>Annals of Internal Medicine,</em> <em>156</em>(5), 350–359.</li>
	<li>McCombie, A. M., Mulder, R. T., &amp; Gearry, R. B. (2013). <a href="https://www.ncbi.nlm.nih.gov/pubmed/23466412">Psychotherapy for inflammatory bowel disease: a review and update</a>. <em>Journal of Crohn's and Colitis,</em> <em>7</em>(12), 935–949.</li>
	<li>National Institute of Diabetes and Digestive and Kidney Diseases. (2016). <a href="https://www.niddk.nih.gov/health-information/digestive-diseases/crohns-disease/treatment">Treatment for Crohn's Disease</a>.</li>
	<li>Peyrin-Biroulet, L., Harmsen, W. S., Tremaine, W. J., Zinsmeister, A. R., Sandborn, W. J., &amp; Loftus, E. V., Jr. (2012). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3572861/">Surgery in a population-based cohort of Crohn's disease from Olmsted County, Minnesota (1970–2004)</a>.&nbsp;<em>American Journal of Gastroenterology,</em> <em>107</em>(11), 1639–1701.</li>
	<li>Crohn's &amp; Colitis Foundation. (2010). <a href="http://www.ccfa.org/resources/surgery-for-crohns-uc.html" class="external-link external-popup" target="_blank">Surgery for Crohn's Disease &amp; Ulcerative Colitis <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>Ballou, S., &amp; Keefer, L. (2017). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5288603/">Psychological Interventions for Irritable Bowel Syndrome and Inflammatory Bowel Diseases</a>.&nbsp;<em>Clinical and Translational Gastroenterology,</em>&nbsp;<em>8</em>(1), e214.</li>
	<li>Cox, S. R., Prince, A. C., Myers, C. E., Irving, P. M., Lindsay, J. O., Lomer, M. C., &amp; Whelan, K. (2017). <a href="https://www.ncbi.nlm.nih.gov/pubmed/28525543">Fermentable Carbohydrates (FODMAPs) Exacerbate Functional Gastrointestinal Symptoms in Patients With Inflammatory Bowel Disease: A Randomized, Double-blind, Placebo-controlled, Cross-over, Re-challenge Trial</a>. <em>Journal of Crohn's and Colitis, 11</em>(12), 1420–1429.</li>
	<li>Steed, H., Macfarlane, G. T., &amp; Macfarlane, S. (2008). <a href="https://www.ncbi.nlm.nih.gov/pubmed/18383235">Prebiotics, synbiotics, and inflammatory bowel disease</a>. <em>Molecular Nutrition &amp; Food Research, 52</em>(8), 898–905.</li>
	<li>Charlebois, A., Rosenfeld, G., &amp; Bressler, B. (2016). <a href="http://www.ncbi.nlm.nih.gov/pubmed/25569442">The Impact of Dietary Interventions on the Symptoms of Inflammatory Bowel Disease: A Systematic Review</a>. <em>Critical Reviews in Food Science and Nutrition, 56</em>(8), 1370–1378.</li>
	<li>Kaitha, S., Bashir, M., &amp; Ali, T. (2015). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4540708/">Iron deficiency anemia in inflammatory bowel disease.</a> <em>World Journal of Gastrointestinal Pathophysiology,</em> <em>6</em>(3), 62–72.</li>
	<li>Scaldaferri, F., Pizzoferrato, M., Lopetuso, L. R., Musca, T., Ingravalle, F., Sicignano, L. L., … Gasbarrini, A. (2017). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5239980/">Nutrition and IBD: Malnutrition and/or Sarcopenia? A Practical Guide</a>. <em>Gastroenterology Research and Practice, 2017</em>.</li>
	<li>Autenrieth, D. M., &amp; Baumgart, D. C. (2011). <a href="http://onlinelibrary.wiley.com/doi/10.1002/ibd.21847/full" class="external-link external-popup" target="_blank">Toxic megacolon. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> <em>Inflammatory Bowel Diseases, 18</em>(3), 584–591.</li>
	<li>Triantafillidis, J. K., Nasioulas, G., &amp; Kosmidis, P. A. (2009). <a href="https://www.ncbi.nlm.nih.gov/pubmed/19596953">Colorectal cancer and inflammatory bowel disease: epidemiology, risk factors, mechanisms of carcinogenesis and prevention strategies.</a> <em>Anticancer Research, 29</em>(7), 2727–2737.</li>
	<li><a href="http://www.crohnscolitisfoundation.org/resources/bone-loss.html" class="external-link external-popup" target="_blank">Crohn's &amp; Colitis Foundation. (2012). Bone Loss in IBD. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li>Parente, F., Pastore, L., Bargiggia, S., Cucino, C., Greco, S., Molteni, M., … Gallus, S. (2007). <a href="http://www.ncbi.nlm.nih.gov/pubmed/17464998">Incidence and risk factors for gallstones in patients with inflammatory bowel disease: a large case-control study</a>. <em>Hepatology, 45</em>(5), 1267–1274.</li>
	<li>Crohn's &amp; Colitis Foundation. (2009). <a href="http://www.ccfa.org/resources/kidney-disorders.html" class="external-link external-popup" target="_blank">Extraintestinal Complications: Kidney Disorders <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>Neuendorf, R., Harding, A., Stello, N., Hanes, D., &amp; Wahbeh, H. (2016). <a href="http://www.sciencedirect.com/science/article/pii/S0022399916303178" class="external-link external-popup" target="_blank">Depression and anxiety in patients with Inflammatory Bowel Disease: A systematic review <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Journal of Psychosomatic Research, 87</em>, 70–80.</li>
	<li>Cornish, J., Tan, E., Teare, J., Teoh, T. G., Rai, R., Clark, S. K., … Tekkis, P. P. (2007). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1954859/">A meta-analysis on the influence of inflammatory bowel disease on pregnancy.</a>&nbsp;<em>Gut,</em> <em>56</em>(6), 830–837.</li>
	<li>Crohn's &amp; Colitis Foundation. (2010). <a href="http://www.ccfa.org/resources/pregnancy-and-ibd.html" class="external-link external-popup" target="_blank">Pregnancy and IBD <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
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
