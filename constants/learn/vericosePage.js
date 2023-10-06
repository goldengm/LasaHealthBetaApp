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

export function vericosePage({ navigation, ...rest }) {
  const condName = "Varicose veins and spider veins";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Varicoseveinsandspiderveins.jpg?VersionId=lNL69HkFa1Q4jxXYg2b4aRUknPaRhZGi";
  const condDescription =
    "Varicose veins and spider veins are swollen, twisted veins that usually appear on the legs. Women are more likely to have varicose veins and spider veins. Pregnancy, older age, and obesity can increase your risk of varicose veins and spider veins. Varicose veins and spider veins are often painless and do not usually cause health problems. If they do cause symptoms, or if you want to have them removed, talk to your doctor or nurse about treatment options.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Varicoseveinsandspiderveins.jpg?VersionId=lNL69HkFa1Q4jxXYg2b4aRUknPaRhZGi"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Varicose veins and spider veins</h1>  -->
            <p><strong><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="VAIR-ih-kohs">Varicose</a> veins and spider veins are swollen, twisted veins that usually appear on the legs. </strong>Women are more likely to have varicose veins and spider veins. Pregnancy, older age, and obesity can increase your risk of varicose veins and spider veins. Varicose veins and spider veins are often painless and do not usually cause health problems. If they do cause symptoms, or if you want to have them removed, talk to your doctor or nurse about treatment options.</p>

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
      title: "What are varicose veins?",
      content: `

    <div class="answer"><p>Varicose veins are twisted veins that can be blue, red, or skin-colored. The larger veins may appear ropelike and make the skin bulge out.</p>

<p>Varicose veins are often on the thighs, the backs and fronts of the calves, or the inside of the legs near the ankles and feet. During <a href="/pregnancy">pregnancy</a>, varicose veins can happen around the inner thigh, lower pelvic area, and buttocks.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are spider veins?",
      content: `

    <div class="answer"><p>Spider veins, or thread veins, are smaller than varicose veins. They are usually red. They may look like tree branches or spider webs. Spider veins can usually be seen under the skin, but they do not make the skin bulge out like varicose veins do.</p>

<p>Spider veins are usually found on the legs or the face.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets varicose veins and spider veins?",
      content: `

    <div class="answer"><p>Varicose veins affect almost twice as many women as men and are more common in older women.<sup><a href="#references">1</a></sup> Spider veins may affect more than half of women.<sup><a href="#references">2</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of varicose veins and spider veins? ",
      content: `

    <div class="answer"><p>Some women do not have any symptoms with varicose veins and spider veins. If you do have symptoms, your legs may feel extremely tired, heavy, or achy. Your symptoms may get worse after sitting or standing for long periods of time. Your symptoms may get better after resting and putting your legs up.<sup><a href="#references">3</a></sup></p>

<p>Other symptoms that may be more common with varicose veins include:</p>

<ul>
	<li>Throbbing or cramping</li>
	<li>Swelling</li>
	<li>Itching</li>
</ul>

<p>Changing hormone levels may affect your symptoms. Because of this, you may notice more symptoms during certain times in your menstrual cycle or during pregnancy or menopause.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes varicose veins and spider veins?",
      content: `

    <div class="answer"><p>Problems in the valves in your veins can prevent blood from flowing normally and cause varicose veins or spider veins.</p>

<p>Your heart pumps blood filled with oxygen and nutrients through your <a href="/glossary#arteries">arteries</a> to your whole body. Veins then carry the blood from different parts of your body back to your heart. Normally, your veins have valves that act as one-way flaps. But, if the valves don't close correctly, blood can leak back into the lower part of the vein rather than going toward the heart. Over time, more blood gets stuck in the vein, building pressure that weakens the walls of the vein. This causes the vein to grow larger.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Are some women more at risk of varicose veins and spider veins? ",
      content: `

    <div class="answer"><p>Yes. Varicose veins and spider veins are caused by damaged valves in the veins that prevent blood from flowing normally. Many things can damage your valves, but your risk of varicose veins and spider veins may be higher if you:<sup><a href="#references">1</a></sup></p>

<ul>
	<li><strong>Have a family or personal history of varicose veins or spider veins.</strong> In one small study, more than half of women with varicose veins had a parent with varicose veins too.<sup><a href="#references">4</a></sup></li>
	<li><strong>Sit or stand for long periods.</strong> Sitting or standing for a long time, especially for more than 4 hours at a time, may make your veins work harder against gravity to pump blood to your heart.</li>
	<li><strong>Have overweight or obesity.</strong> Having <a href="/publications/our-publications/fact-sheet/overweight-weight-loss.html?from=AtoZ">overweight or obesity</a> can put extra pressure on your veins. Women who have obesity are more likely to get varicose veins than women with a healthy weight.<sup><a href="#references">5</a></sup></li>
	<li><strong>Are pregnant.</strong> During <a href="/pregnancy/">pregnancy</a>, the amount of blood pumping through your body increases to support your unborn baby. The extra blood causes your veins to swell. Your growing <a href="/glossary#uterus">uterus</a> (womb) also puts pressure on your veins. Varicose veins may go away within a few months after childbirth, or they may remain and continue to cause symptoms. More varicose veins and spider veins may appear with each additional pregnancy.</li>
	<li><strong>Are older</strong><strong>.</strong> As you get older, the valves in your veins may weaken and not work as well. Your calf muscles also weaken as you age. Your calf muscles normally help squeeze veins and send blood back toward the heart as you walk.</li>
	<li><strong>Use hormonal birth control or menopausal hormone therapy</strong><strong>.</strong> The hormone <a href="/glossary#estrogen">estrogen</a> may weaken vein valves and lead to varicose veins. Using hormonal <a href="/a-z-topics/birth-control-methods">birth control</a>, including the pill or a patch, shot, vaginal ring, or intrauterine device (IUD), with estrogen and <a href="/glossary#progesterone">progesterone</a>, or taking <a href="/menopause/menopause-treatment#2">menopausal hormone therapy</a>, may raise your risk of varicose or spider veins.<sup><a href="#references">6,7</a></sup></li>
	<li><strong>Have a condition that damaged the valves.</strong> Blood clots in the legs or scarring of the veins can damage the valves.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Why do varicose veins and spider veins usually appear in the legs? ",
      content: `

    <div class="answer"><p>Varicose veins and spider veins appear most often in the legs. This is because the veins in your legs carry blood to your heart against gravity and for the longest distance of anywhere in the body.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Should I call my doctor or nurse if I have varicose veins or spider veins?",
      content: `

    <div class="answer"><p>Maybe. If you think you have varicose veins or spider veins and they cause you pain or discomfort, talk to your doctor or nurse. Varicose veins and spider veins usually do not cause symptoms. But, you may want to remove or close varicose veins or spider veins if you have symptoms or if you don't like the way they look.</p>

<p>Talk to your doctor or nurse if varicose veins or spider veins cause you pain or if:<sup><a href="#references">1,8</a></sup></p>

<ul>
	<li>The vein has become swollen, red, or very tender or warm to the touch, which can be a sign of a blood clot</li>
	<li>You have sores or a rash on your leg or near your ankle</li>
	<li>The skin on your ankle or calf changes color</li>
	<li>One of the varicose veins begins to bleed</li>
	<li>Your symptoms keep you from doing daily activities</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Will I get varicose veins during pregnancy?",
      content: `

    <div class="answer"><p>Maybe. During <a href="/pregnancy">pregnancy</a>, you have more blood pumping through your body to support your unborn baby. The extra blood can cause your veins to get larger. Your growing <a href="/glossary#uterus">uterus</a> (womb) also puts pressure on the veins. Varicose veins may appear around the vagina and buttocks.</p>

<p>For some women, varicose veins shrink or disappear after childbirth. For others, varicose veins stay after childbirth, and symptoms continue to get worse. Women may also get more varicose veins or spider veins with each additional pregnancy.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How are varicose veins and spider veins diagnosed?",
      content: `

    <div class="answer"><p>Your doctor or nurse will look at your legs while you're standing or sitting down. He or she may ask you about your symptoms, including pain. Sometimes the doctor or nurse may do other tests to rule out other health problems.</p>

<p>Your doctor or nurse may also do one of the following:</p>

<ul>
	<li><strong>Ultrasound.</strong> This test uses sound waves to create pictures of the inside of your body. Your doctor or nurse can check the blood flow in your veins to look for weakened or leaky valves and blood clots.</li>
	<li><strong>Venogram.</strong> Your doctor or nurse may do this test to get a closer look at blood flow through your veins. A venogram is a type of X-ray that uses a dye (called a "contrast") to help your doctor or nurse see the veins in your legs. A venogram is a type of angiogram, a test often used in heart disease. This test is used only if your doctor or nurse thinks you may have a large blood clot.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How are varicose veins and spider veins treated?",
      content: `

    <div class="answer"><ul>
	<li><strong>If your symptoms are mild,</strong> your doctor or nurse may suggest steps <a href="#13">to take at home</a>. Your doctor or nurse may also suggest <a href="#14">compression stockings</a> to wear daily and remove at night to make blood flow better in your legs. These steps may help you manage symptoms of existing varicose veins and spider veins. They can also help prevent new varicose veins and spider veins from forming.</li>
	<li><strong>If compression stockings do not work or if you have pain or other symptoms that bother you,</strong> your doctor or nurse may talk to you about <a href="#15">nonsurgical procedures</a> to treat varicose veins and spider veins.</li>
	<li><strong>If you have very large or severe varicose veins,</strong> <a href="#16">you may need surgery</a>.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Is treatment for varicose veins and spider veins permanent? ",
      content: `

    <div class="answer"><p>Maybe. Some treatments for varicose veins <a href="#15">seal off</a> or <a href="#16">remove</a> the vein permanently. But, over time, new varicose veins or spider veins can develop. You can't control some risk factors for varicose veins and spider veins, like your age and family history. If you get new varicose veins or spider veins, you may need to have a surgery or medical procedure again to remove them or block them off.</p>

<p>Wearing <a href="#14">gradient compression support stockings</a> may help prevent new varicose veins or spider veins from developing.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What can I do at home to help varicose veins and spider veins? ",
      content: `

    <div class="answer"><p>If your varicose veins or spider veins bother you, you can take steps at home or work to make blood flow in your legs better.</p>

<ul>
	<li><strong>Get regular physical activity.</strong> Muscles in the legs help your veins push blood back to the heart, against the force of gravity. If you have varicose veins or spider veins in your legs, any exercise that works the muscles in your legs will help prevent new varicose veins or spider veins from forming.</li>
	<li><strong>Lose weight, if you have overweight or obesity.</strong> Extra weight makes it more difficult for your veins to move blood back up to your heart, against the force of gravity. Losing weight may help prevent new varicose veins or spider veins from forming.</li>
	<li><strong>Do not sit or stand for a long time.</strong> If you have to sit or stand at work or home for a long time, take a break every 30 minutes to stand up and walk around. This makes the muscles in your legs move the blood back up to your heart more than when you are sitting or standing still without moving around.</li>
	<li><strong><a href="#14">Wear compression stockings</a></strong><strong>.</strong> Compression stockings help increase blood flow from your legs.</li>
	<li><strong>Put your feet up. </strong>Rest your feet on a stool as much as possible when sitting to help the blood in your legs flow back to your heart.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "How do compression stockings help treat varicose veins and spider veins?",
      content: `

    <div class="answer"><p>Compression stockings put pressure on your veins, which increases blood flow from your legs. There are three kinds of compression stockings:</p>

<ul>
	<li><strong>Support pantyhose,</strong> which give the least amount of pressure. These are sold in most stores.</li>
	<li><strong>Over-the-counter gradient compression hose,</strong> which give a little more pressure around the foot, ankle, and lower leg, where pressure is needed most to move the blood back toward your heart. These are sold in medical supply stores and some drugstores.</li>
	<li><strong>Prescription-strength gradient compression hose,</strong> which offer the greatest amount of pressure to the feet, ankles, and lower legs. You may need a prescription from your doctor to buy them, especially if your insurance plan covers it. You will also need to be fitted by someone who has been trained to do this. These hose are sold in medical supply stores and some drugstores.</li>
</ul>

<p>Some stronger compression stockings can hurt people with certain medical conditions, such as certain types of heart disease or heart failure. Ask your doctor or nurse if it's safe for you to use prescription-strength compression stockings or what strength would be safe for you.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What else can I do to treat varicose veins and spider veins without having surgery?",
      content: `

    <div class="answer"><p>Your doctor or nurse may give you medicine to treat the symptoms of varicose veins, including swelling, pain, and itching.<sup><a href="#references">9</a></sup></p>

<p>Other nonsurgical treatments for varicose veins and spider veins include:</p>

<ul>
	<li><strong><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="sklair-o-THAIR-a-pee">Sclerotherapy</a>.</strong> Sclerotherapy is the most common treatment for smaller varicose veins and spider veins. The doctor injects a chemical into the vein. The chemical causes the vein walls to swell, stick together, and seal shut. This stops the flow of blood, and the vein turns into scar tissue. Your doctor or nurse may suggest that you wear <a href="#14">gradient compression stockings</a> after sclerotherapy to help with healing. In a few weeks, the vein should fade. You may need multiple treatments for it to work. There is also a chance that varicose veins or spider veins may come back.</li>
	<li><strong>Closure system. </strong>This system works only for veins just beneath the skin's surface. Deeper veins are not treatable with this option. The system closes the vein permanently using a type of adhesive (sticky material) injected into the vein. After the treatment, healthy veins around the closed vein take over the normal flow of blood.</li>
	<li><strong><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="per-kyoo-TAY-nee-us">Percutaneous</a> (skin surface) laser treatments. </strong>Laser treatments can treat spider veins and varicose veins that are smaller than 3 millimeters in diameter (about a 10th of an inch). This procedure sends very strong bursts of light through the skin onto the vein. This makes the vein slowly fade and disappear. You may need several treatments to close spider veins in the legs. There is a chance that varicose veins or spider veins may come back.</li>
	<li><strong>Endovenous thermal therapy (laser and radiofrequency ablation).</strong> This procedure treats the larger bulging surface veins of the legs. During the procedure, the doctor inserts a small tube into the vein. The doctor places a small probe through the tube. A device at the tip of the probe heats up the inside of the vein and closes it off. The device uses radio waves or laser energy to seal the vein permanently. Healthy veins around the sealed vein take over the normal flow of blood.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What types of surgery treat varicose veins?",
      content: `

    <div class="answer"><p>Your doctor or nurse may recommend surgery for very large or severe varicose veins. Types of surgery for varicose veins include:</p>

<ul>
	<li><strong><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="AM-byoo-luh-tohr-ee fluh-BEHK-toh-mee">Ambulatory phlebectomy</a>.</strong> This surgery removes varicose veins that are just beneath the skin's surface. The doctor makes tiny cuts in the skin and uses hooks to pull the vein out of the leg. The doctor usually removes the vein in one treatment and leaves only tiny scars. Many people can return to normal activity the day after treatment. Healthy veins will then take over the normal flow of blood.</li>
	<li><strong>Surgical ligation and stripping</strong><strong>.</strong> This surgery is for larger varicose veins. With this treatment, problem veins are tied shut and completely removed from the leg through small cuts in the skin. Recovery can take up to a month. Healthy veins take over the normal flow of blood.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Does insurance cover varicose veins and spider veins treatment? ",
      content: `

    <div class="answer"><p>Maybe. Your insurance plan may cover certain treatments for varicose veins and spider veins, such as <a href="#14">compression stockings</a>, medicine, or a procedure, if you have symptoms, such as pain or swelling. Insurance may also cover surgery if wearing compression stockings has not helped.</p>

<ul>
	<li>If you have insurance, check with your insurance provider to find out what's included in your plan.</li>
	<li>If you have Medicare, find out about <a href="https://www.medicare.gov/coverage" title="Your Medicare coverage">Medicare coverage</a> for varicose veins.</li>
	<li>If you have Medicaid, the benefits covered are different in each state, but certain benefits must be covered. <a href="https://www.medicaid.gov/about-us/contact-us/contact-state-page.html" title="State Overviews">Check with your state's Medicaid program</a> to find out what's covered.</li>
	<li>If you need health insurance, <a href="https://healthcare.gov" title="Health Insurance Marketplace">check to see if you are eligible</a>.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What can happen if varicose veins and spider veins are not treated? ",
      content: `

    <div class="answer"><p>Most varicose veins and spider veins do not cause any health problems. Larger varicose veins may cause aching, throbbing, and discomfort, especially after you have been sitting or standing for long periods of time.</p>

<p>Sometimes, varicose veins can lead to more serious health problems, including:</p>

<ul>
	<li><strong>Sores or skin ulcers</strong> caused by long-term collection of blood in the veins. These sores or ulcers are painful and difficult to heal. You may need special care to treat these sores or ulcers.</li>
	<li><strong>Bleeding </strong>from damage to the vein. The skin over varicose veins can become thin and easily hurt. Any injury to the vein can cause bleeding.</li>
	<li><strong>Superficial <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="throm-bo-flih-BYT-uhs">thrombophlebitis</a></strong>, or blood clots that form in veins just below the skin. These types of blood clots can cause skin redness; a firm, tender, warm vein; and pain and swelling.</li>
	<li><strong>Deep vein thrombosis (DVT)</strong><strong>,</strong> or blood clots in veins that are deeper under the skin. You may not have any signs or symptoms of DVT, or the blood clot may cause pain, swelling, warmth, and a "pulling" feeling in the calf. Sitting still for a long time, such as when you are traveling more than 8 hours, may increase your risk of a blood clot. The blood clot can then break off and travel to the lungs. It can cause a blockage in the lungs, called a pulmonary embolism, that makes it difficult to breathe, speeds up your heartbeat, and causes chest pain. It can also lead to death. You can help prevent blood clots during long airplane flights, for example, by wearing <a href="#14">compression stockings</a>, staying hydrated, and moving around regularly.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I prevent varicose veins and spider veins?",
      content: `

    <div class="answer"><p>You may not be able to prevent varicose veins and spider veins, especially if they usually happen in your family or when you are pregnant. There are other parts of your life that you cannot control, such as getting older, that can also contribute to varicose veins and spider veins.</p>

<p>There are steps you can <a href="#13">take at home</a>, like exercising and losing extra weight, that can make you healthier and may prevent new varicose veins or spider veins from forming. These steps may also help your legs feel better by relieving pain and discomfort.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Did we answer your questions about varicose veins and spider veins? ",
      content: `

    <div class="answer"><p>For more information about varicose veins and spider veins, call the OWH Helpline at&nbsp;1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="https://www.nhlbi.nih.gov/health-topics/varicose-veins" title="Varicose Veins"><strong>National Heart, Lung, and Blood Institute, NIH, HHS</strong></a><br>
	Phone Number: 301-592-8573</li>
	<li><a href="http://www.aad.org/" class="external-link external-popup" target="_blank"><strong>American Academy of Dermatology</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 1-888-462-DERM (3376)</li>
	<li><a href="http://www.asds.net/" title="Skin Experts" class="external-link external-popup" target="_blank"><strong>American Society for Dermatologic Surgery</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 847-956-0900</li>
	<li><a href="http://www.sirweb.org/" class="external-link external-popup" target="_blank"><strong>Society of Interventional Radiology</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 703-691-1805</li>
	<li><a href="http://www.phlebology.org/" class="external-link external-popup" target="_blank"><strong>American College of Phlebology</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 510-346-6800</li>
	<li><a href="http://veinforum.org/" class="external-link external-popup" target="_blank"><strong>American Venous Forum</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 727-350-1580</li>
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
	<li>Piazza, G. (2014). <a href="https://www.ahajournals.org/doi/full/10.1161/circulationaha.113.008331" class="external-link external-popup" target="_blank">Clinician update: Varicose veins <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Circulation, 130,</em> 582–587.</li>
	<li>Nakano, L. C. U., Cacione, D. G., Baptista-Silva, J. C. C., &amp; Flumignan, R. L. G. (2017). <a href="http://onlinelibrary.wiley.com/doi/10.1002/14651858.CD012723/full" class="external-link external-popup" target="_blank">Treatment for telangiectasias and reticular veins <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Cochrane Database of Systematic Reviews, 7, </em>CD012723.</li>
	<li>Vandy, F., &amp; Wakefield, T. W. (2012). <a href="https://www.medscape.com/viewarticle/778728" class="external-link external-popup" target="_blank">Varicose veins: Evaluating modern treatments, with emphasis on powered phlebectomy for branch varicosities. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> <em>Interventional Cardiology, 4</em>(5), 527–536.</li>
	<li>Krysa, J., Jones, G. T., &amp; van Rij, A. M. (2012). <a href="https://www.researchgate.net/publication/221809030_Evidence_for_a_genetic_role_in_varicose_veins_and_chronic_venous_insufficiency" class="external-link external-popup" target="_blank">Evidence for a genetic role in varicose veins and chronic venous insufficiency <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Phlebology, 27</em>(7), 329–335.</li>
	<li>Van Rij, A. M., De Alwis, C. S., Jiang, P., Christie, R. A., Hill, G. B., Dutton, S. J., &amp; Thomson, I. A. (2008). <a href="https://www.sciencedirect.com/science/article/pii/S1078588408000464" class="external-link external-popup" target="_blank">Obesity and impaired venous function <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>European Journal of Vascular and Endovascular Surgery, 35</em>(6), 739–744.</li>
	<li>U.S. National Library of Medicine. (2018). <a href="http://www.nlm.nih.gov/medlineplus/ency/article/001109.htm">Varicose veins.</a></li>
	<li>Ciardullo, A. V., Panico, S., Bellati, C., Rubba, P., Rinaldi, S., Iannuzzi, A., … Berrino, F. (2000). <a href="http://www.ncbi.nlm.nih.gov/pubmed/10957662">High endogenous estradiol is associated with increased venous distensibility and clinical evidence of varicose veins in menopausal women</a>. <em>Journal of Vascular Surgery, 32</em>(3), 544–549.</li>
	<li>Heller, J. A., &amp; Evans, N. S. (2015). <a href="http://journals.sagepub.com/doi/full/10.1177/1358863X14566224" class="external-link external-popup" target="_blank">Varicose veins <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Vascular Medicine, 20</em>(1), 88–90.</li>
	<li>Gloviczki, P., Comerota, A. J., Dalsing, M. C., Eklof, B. G., Gillespie, D. L, Gloviczki, M., … Wakefield, T. W. (2011). <a href="http://www.jvascsurg.org/article/S0741-5214(11)00327-2/fulltext#sec10.2" class="external-link external-popup" target="_blank">The care of patients with varicose veins and associated chronic venous diseases: Clinical practice guidelines of the Society for Vascular Surgery and the American Venous Forum <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Journal of Vascular Surgery, 53</em>(5), 2S–48S.</li>
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
