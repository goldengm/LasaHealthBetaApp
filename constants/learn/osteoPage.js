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

export function osteoPage({ navigation, ...rest }) {
  const condName = "Osteoporosis";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Osteoporosis.jpg?VersionId=dmXOgu_iTMEyJPMSW6FWM6Xw9ZGcYnkd";
  const condDescription =
    "Osteoporosis is a disease of the bones that causes bones to become weak and break easily. Osteoporosis affects mostly older women, but prevention starts when you are younger. No matter your age, you can take steps to build bone mass and prevent bone loss. Broken bones from osteoporosis cause serious health problems and disability in older women.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Osteoporosis.jpg?VersionId=dmXOgu_iTMEyJPMSW6FWM6Xw9ZGcYnkd"></div>  -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Osteoporosis</h1>  -->
            <p><strong><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="OS-tee-oh-poh-ROH-sis">Osteoporosis</a> is a disease of the bones that causes bones to become weak and break easily. </strong>Osteoporosis affects mostly older women, but prevention starts when you are younger. No matter your age, you can take steps to build bone mass and prevent bone loss. Broken bones from osteoporosis cause serious health problems and disability in older women.</p>

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
      title: "What is osteoporosis?",
      content: `

    <div class="answer"><p>Osteoporosis is a disease of the bones. People with osteoporosis have bones that are weak and break easily.</p>

<p>Osteoporosis is called a “silent” disease. You may have bone loss for many years without any symptoms until you break a bone. A broken bone can cause severe pain and disability. It can make it harder to do daily tasks on your own, such as walking.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is bone loss?",
      content: `

    <div class="answer"><p>Bone loss is the amount of minerals, such as calcium, that your body absorbs (takes) from your bones.</p>

<p>Bone loss can happen for several reasons. Some of the most common reasons include:</p>

<ul>
	<li><strong>You do not get enough calcium from food.</strong> Your body uses calcium to build healthy bones and teeth and stores calcium in your bones. Your body also uses calcium to send messages through your nervous system, help your muscles contract, and regulate your heart's rhythm. But your body does not make calcium. You have to get all the calcium your body needs from the foods you eat and drink (or from supplements). If you don't get enough calcium each day, your body will take the calcium it needs from your bones.</li>
	<li><strong>You are past <a href="/menopause" title="Menopause | womenshealth.gov">menopause</a>.</strong> As you get older, your bones don't make new bone fast enough to keep up with your body's needs. The calcium taken from your bones causes you to lose bone density. Bone loss also speeds up after menopause and can lead to weak, brittle bones.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets osteoporosis?",
      content: `

    <div class="answer"><p>Osteoporosis affects more women than men. Of the estimated 10 million Americans with osteoporosis, more than 8 million (or 80%) are women.<sup><a href="#references">1</a></sup></p>

<p>Women are more likely to get osteoporosis because:<sup><a href="#references">2,3</a></sup></p>

<ul>
	<li>Women usually have smaller, thinner, less dense bones than men.</li>
	<li>Women often live longer than men. <a href="#2">Bone loss</a> happens naturally as we age.</li>
	<li>Women also lose more bone mass after <a href="/menopause">menopause</a> with very low levels of the hormone <a href="/glossary#estrogen" title="glossary">estrogen</a>. Higher estrogen levels before menopause helps protect bone density.</li>
</ul>

<p>Osteoporosis is most common in older women. In the United States, osteoporosis affects one in four women 65 or older.<sup><a href="#references">4</a></sup> But younger women can get osteoporosis. And girls and women of all ages need to take steps to protect their bones.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Are some women more at risk for osteoporosis?",
      content: `

    <div class="answer"><p>Yes. Your risk for osteoporosis is higher if you:</p>

<ul>
	<li><strong>Are past menopause.</strong> After <a href="/menopause">menopause</a>, your ovaries make very little of the hormone <a href="/glossary#estrogen" title="glossary">estrogen</a>. Estrogen helps protect bone density. Some women lose up to 25% of bone mass in the first 10 years after menopause.<sup><a href="#references">5</a></sup></li>
	<li><strong>Have a small, thin body</strong> (weigh less than 127 pounds)</li>
	<li><strong>Have a family history of osteoporosis</strong></li>
	<li><strong>Are Mexican-American or white.</strong> One in four Mexican-American women and about one in six white women over 50 years old have osteoporosis.<sup><a href="#references">6</a></sup> Asian-American women also have a higher risk for osteoporosis because they are usually smaller and thinner than other women and therefore may have less bone density.</li>
	<li><strong>Do not get enough calcium and vitamin D.</strong> Calcium and vitamin D work together to build and maintain strong bones.</li>
	<li><strong>Do not get enough physical activity.</strong> Women of all ages need to get regular weight-bearing physical activity, such as walking, dancing, or playing tennis, to help build and maintain bone density.</li>
	<li><strong>Have not gotten your menstrual period for three months in a row</strong> (called amenorrhea). If you have amenorrhea and you are not pregnant, breastfeeding, or taking a medicine that stops your periods, talk to your doctor or nurse. Not getting your period means your ovaries may have stopped making estrogen.</li>
	<li><strong>Have an eating disorder.</strong> Eating disorders, especially <a href="/node/">anorexia nervosa</a> and <a href="/node/">bulimia nervosa</a>, can weaken your bones. Anorexia can also lead to amenorrhea.</li>
	<li><strong>Smoke.</strong> Women who smoke have lower bone density and often go through menopause earlier than nonsmokers.<sup><a href="#references">7</a></sup> Studies also suggest that smoking raises your risk for broken bones, and this risk goes up the longer you smoke and the more cigarettes you smoke.<sup><a href="#references">8</a></sup></li>
	<li><strong>Have a health problem that raises your risk of getting osteoporosis.</strong> These include <a href="/a-z-topics/diabetes" title="glossary">diabetes</a>,<sup><a href="#references">9</a></sup> <a href="/menopause/early-or-premature-menopause">premature ovarian failure</a>,<sup><a href="#references">10</a></sup><strong> &nbsp;</strong><a href="/glossary#celiac_disease" title="glossary">celiac disease</a> and <a href="/a-z-topics/inflammatory-bowel-disease">inflammatory bowel disease</a>,<sup><a href="#references">11</a></sup> and <a href="/a-z-topics/depression">depression</a>.<sup><a href="#references">12</a></sup></li>
	<li><strong>Take certain medicines to treat long-term health problems,</strong> such as <a href="/glossary#arthritis" title="glossary">arthritis</a>,&nbsp;<a href="/glossary#asthma" title="glossary">asthma</a>,&nbsp;<a href="/lupus" title="glossary">lupus</a>, or <a href="/a-z-topics/thyroid-disease">thyroid disease</a>.</li>
	<li><strong>Drink too much alcohol.</strong> For women, experts recommend no more than one alcoholic drink a day if you choose to drink alcohol.<sup><a href="#references">13</a></sup> Long-term, heavy drinking can cause many health problems, including <a href="#2">bone loss</a>, <a href="/heart-disease-and-stroke/heart-disease">heart disease</a>, and <a href="/heart-disease-and-stroke/stroke">stroke</a>.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of osteoporosis?",
      content: `

    <div class="answer"><p><img alt="Osteoporosis in the vertebrae" class="img-responsive" data-entity-type="" data-entity-uuid="" src="https://owh-wh-d9-dev.s3.amazonaws.com/s3fs-public/drupal7/images/fibromyalgia_vertebrae.jpg"></p>

<p>You may not have any symptoms of osteoporosis until you break (fracture) a bone. A fracture can happen in any bone of the body. But fractures are most common in the hip, wrist, and spine (<a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="VUR-tuh-bray">vertebrae</a>). Vertebrae support your body, helping you to stand and sit up. See the picture.</p>

<p>Osteoporosis in the vertebrae can cause serious problems for women. A fracture in this area can happen during day-to-day activities like climbing stairs, lifting objects, or bending forward when you have osteoporosis.</p>

<p>Fractures in the vertebrae can cause it to collapse and bend forward. If this happens, you may get any or all of these symptoms:</p>

<ul>
	<li>Sloping shoulders</li>
	<li>Curve in the back</li>
	<li>Height loss</li>
	<li>Back pain</li>
	<li>Hunched posture</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes osteoporosis?",
      content: `

    <div class="answer"><p>Osteoporosis is caused by <a href="#2">bone loss</a>. Most often, the reason for bone loss is very low levels of the hormone <a href="/glossary#estrogen" title="glossary">estrogen</a>. Estrogen plays an important role in building and maintaining your bones.</p>

<p>The most common cause of low estrogen levels is menopause. After menopause, your ovaries make very little estrogen.</p>

<p>Also, your risk for developing osteoporosis is higher if you did not develop strong bones when you were young. Girls develop 90% of bone mass by age 18.<sup><a href="#references">14</a></sup> If an eating disorder, poor eating, lack of physical activity, or another health problem prevents you from building bone mass early in life, you will have less bone mass to draw on later in life.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is osteoporosis diagnosed?",
      content: `

    <div class="answer"><p>Your doctor will do a bone density test to see how strong or weak your bones are. A common test is a central dual-energy x-ray absorptiometry (DXA). A DXA is a special type of x-ray of your bones. This test uses a very low amount of radiation.</p>

<p>Your doctor may also use other screening tools to predict your risk of having low bone density or breaking a bone.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Do I need to be tested for osteoporosis?",
      content: `

    <div class="answer"><p>Your doctor may suggest a bone density test for osteoporosis if:<sup><a href="#references">15</a></sup></p>

<ul>
	<li>You are 65 or older</li>
	<li>You are younger than 65 and have risk factors for osteoporosis. Bone density testing is recommended for older women whose risk of breaking a bone is the same or greater than that of a 65‑year‑old white woman with no risk factors other than age. Ask your doctor or nurse whether you need a bone density test before age 65.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I get free or low-cost osteoporosis screening tests? ",
      content: `

    <div class="answer"><p>Screening for osteoporosis is covered by most insurance plans, including Medicare Part B. Depending on your insurance plan, you may be able to get screenings at no cost to you.</p>

<ul>
	<li>If you have insurance, check with your insurance provider to find out what's included in your plan.</li>
	<li>If you have Medicare, find out about <a href="https://www.medicare.gov/coverage/bone-density.html">Medicare coverage</a> for bone density tests.</li>
	<li>If you have Medicaid, the benefits covered are different in each state, but certain benefits must be covered. <a href="https://www.medicaid.gov/about-us/contact-us/contact-state-page.html">Check with your state's Medicaid program</a> to find out what's covered.</li>
	<li>If you don't have insurance, you may be able to get a no-cost or low-cost bone density test. To learn more, find a health center near you by entering your ZIP code in our <a href="https://findahealthcenter.hrsa.gov/">health clinic finder</a>&nbsp;on the top left side (desktop view) or bottom (mobile view) of this page. To see whether you are eligible for low-cost or no-cost health insurance, visit <a href="http://www.healthcare.gov">HealthCare.gov</a>.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is osteoporosis treated?",
      content: `

    <div class="answer"><p>If you have osteoporosis, your doctor may prescribe medicine to prevent more bone loss or build new bone mass. The most common types of medicine to prevent or treat osteoporosis include:</p>

<ul>
	<li><strong><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="bis-FOS-fo-nates">Bisphosphonates</a>. </strong>Bisphosphonates help treat bone loss. They may also help build bone mass.</li>
	<li><strong>Selective estrogen receptor modulators (SERMs). </strong>SERMs may help slow the rate of bone loss after menopause.</li>
	<li><strong>Denosumab.</strong> This injectable drug may help reduce bone loss and improve bone strength if you are past menopause and at higher risk for broken bones from osteoporosis.</li>
	<li><strong><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="kal-si-TOE-nin">Calcitonin</a>.</strong> Calcitonin is a hormone made by your thyroid gland that helps regulate calcium levels in your body and build bone mass. Taking calcitonin can help slow the rate of bone loss.</li>
	<li><strong>Menopausal hormone therapy. </strong>Often used to treat menopausal symptoms, menopausal hormone therapy may also help prevent bone loss. The Food and Drug Administration recommends taking menopausal hormone therapy at the lowest dose that works for your menopause symptoms for the shortest time needed.</li>
	<li><strong>Parathyroid hormone or <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="terr-ih-PAR-a-tyd">teriparatide</a>.</strong> Teriparatide is an injectable form of human parathyroid hormone. It helps the body build up new bone faster than the old bone is broken down.</li>
</ul>

<p>Your doctor may also suggest getting more calcium, vitamin D, and physical activity.</p>

<p>All medicines have risks. For example, menopausal hormone therapy may raise your risk of a blood clot, heart attack, stroke, breast cancer, or gallbladder disease. Talk to your doctor or nurse about the benefits and risks of all medicines.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I prevent osteoporosis?",
      content: `

    <div class="answer"><p>One of the best ways to prevent weak bones is to work on building strong ones. Building strong bones during childhood and the teen years is important to help prevent osteoporosis later.</p>

<p>As you get older, your bones don't make new bone fast enough to keep up with the <a href="#2">bone loss</a>. And after&nbsp;<a href="/menopause">menopause</a>, bone loss happens even more quickly. But you can take steps to slow the natural bone loss with aging and to prevent your bones from becoming weak and brittle.</p>

<ul>
	<li>Get enough <a href="#13">calcium</a> and <a href="#19">vitamin D</a> each day.</li>
	<li>Get active. Choose weight-bearing physical activities like running or dancing to build and strengthen your bones.</li>
	<li>Don't smoke. Smoking raises your risk for broken bones.</li>
	<li>If you drink alcohol, drink in moderation (for women, this is one drink a day at most). Too much alcohol can harm your bones. Also, too much at one time or mixed with certain medicines can affect your balance and lead to falls.</li>
	<li>Talk to your doctor about whether you need <a href="#10">medicine to prevent bone loss</a>.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does calcium help prevent osteoporosis?",
      content: `

    <div class="answer"><p>Calcium is found in your bones and teeth. It helps build bones and keep them healthy. Your body also uses calcium to help your blood clot and your muscles contract. If you don't get enough calcium each day from the foods you eat, your body will take the calcium it needs from your bones, making your bones weak.</p>

<p>You can get calcium through <a href="#14">food</a> or <a href="#17">calcium supplements</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How much calcium do women need each day?",
      content: `

    <div class="answer"><p>How much calcium you need depends on your age:<sup><a href="#references">16</a></sup></p>

<ul>
	<li>9–18 years: 1,300 mg per day</li>
	<li>19–50 years: 1,000 mg per day</li>
	<li>51 and older: 1,200 mg per day</li>
</ul>

<p>Pregnant or nursing women need the same amount of calcium as other women of the same age.</p>

<p>You can get the calcium you need each day from food and/or calcium supplements.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What foods contain calcium?",
      content: `

    <div class="answer"><p>Calcium is found naturally in some foods:<sup><a href="#references">13</a></sup></p>

<ul>
	<li>Milk</li>
	<li>Cheese</li>
	<li>Yogurt</li>
	<li>Leafy green vegetables, such as broccoli, kale, and mustard greens</li>
</ul>

<p>Calcium is sometimes added to certain foods, such as:</p>

<ul>
	<li>Breakfast cereals (some have up to 100% of the recommended daily value — or 1,000 milligrams — of calcium in each ¾ cup serving)</li>
	<li>Orange juice</li>
	<li>Tofu</li>
	<li>Soymilk</li>
	<li>Breads and pastas</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What should I look for when buying food with calcium?",
      content: `

    <div class="answer"><p><img alt="Nutrition label with Calcium highlighted" class="img-responsive" data-entity-type="" data-entity-uuid="" src="https://owh-wh-d9-dev.s3.amazonaws.com/s3fs-public/drupal7/images/fibromyalgia_nutrition-label.gif" style="padding: 20px;">When buying food with calcium, look at the <a href="/healthy-eating/how-eat-health/food-labels">Nutrition Facts label</a> to see how much calcium is in the food. Food labels show the amount of calcium as a percentage of the Daily Value (written as %DV). Foods providing 20%DV or more are high sources of calcium, but foods with lower percentages (5% or more) are still good sources of calcium.<sup><a href="#references">16</a></sup></p>

<p>See the example of calcium on a food label here. Learn how to read food labels on a package.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What if dairy foods make me sick or I don't like to eat them? How can I get enough calcium?",
      content: `

    <div class="answer"><p>If you have problems eating foods with dairy or don't like to eat them, try the following tips to make sure you get enough calcium:</p>

<ul>
	<li>Try lactose-reduced or lactose-free products, such as milk or yogurt.</li>
	<li>Take a lactose supplement (in pill or liquid form) before eating dairy foods to help you digest them.</li>
	<li>Choose other food sources of calcium. Other good sources of calcium include tofu or orange juice with calcium added, and vegetables such as bok choy, kale, collard greens, mustard greens, and broccoli.</li>
	<li>Ask your doctor or nurse if you need to take <a href="#17">calcium supplements</a>.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Should I take a calcium supplement?",
      content: `

    <div class="answer"><p>The answer depends on how much <a href="#13">calcium you need each day</a> and how much calcium you get from the <a href="#14">foods</a> you eat.</p>

<p>It's best to get the calcium your body needs from food. But if you don't get enough calcium from the foods you eat, you may want to consider taking a calcium supplement.</p>

<p>You can get calcium supplements at the grocery store or drug store. Talk with your doctor or nurse before taking calcium supplements to see which kind is best for you and how much you need to take.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does vitamin D help prevent osteoporosis?",
      content: `

    <div class="answer"><p>Vitamin D helps your body absorb calcium from the food you eat. Just eating foods with calcium is not enough. You also need to get enough vitamin D to help your body use the calcium it gets.</p>

<p>Your skin makes vitamin D when it is exposed to sunlight. In general, you need 10 to 15 minutes of sunlight to the hands, arms, and face, two to three times a week to make enough vitamin D. The amount of time depends on how sensitive your skin is to light. It also depends on your use of sunscreen, your skin color, the season, the latitude (how far north or south) where you live, and the amount of pollution in the air.</p>

<p>You can also get vitamin D from foods such as milk or from vitamin supplements. The vitamin D you get from food or supplements is measured in international units (IU).</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How much vitamin D do women need each day?",
      content: `

    <div class="answer"><p>How much vitamin D you need each day depends on your age:<sup><a href="#references">17</a></sup></p>

<ul>
	<li>Women up to age 70: 600 international units (IU)</li>
	<li>Women 71 and older: 800 IU each day</li>
</ul>

<p>Pregnant and breastfeeding women need the same amount of vitamin D (600 IU) as other women of the same age.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What foods contain vitamin D?",
      content: `

    <div class="answer"><p>Although it's hard to get enough vitamin D through food alone, foods with vitamin D include:<sup><a href="#references">13</a></sup></p>

<ul>
	<li>Salmon</li>
	<li>Tuna fish</li>
	<li>Egg yolks</li>
</ul>

<p>Vitamin D is often added to certain foods, including:</p>

<ul>
	<li>Breakfast cereals</li>
	<li>Milk</li>
	<li>Orange juice</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What types of physical activity help prevent osteoporosis? ",
      content: `

    <div class="answer"><p>Regular physical activity of any type can help slow bone loss, improve muscle strength, and help your balance. But weight-bearing physical activity is especially important to build bone and help prevent bone loss. Weight-bearing physical activity is any activity in which your body works against gravity.</p>

<p>Weight-bearing activities you can try include:</p>

<ul>
	<li>Dancing</li>
	<li>Gardening</li>
	<li>Lifting weights</li>
	<li>Tennis</li>
	<li>Tai chi</li>
	<li>Yoga</li>
	<li>Running</li>
	<li>Walking</li>
</ul>

<p>Learn more about physical activity and how much you need in our <a href="/node/">Fitness and Nutrition</a> section.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What can happen if osteoporosis is not treated?",
      content: `

    <div class="answer"><p>Osteoporosis that is not treated can lead to serious bone breaks (fractures), especially in the hip and spine. One in three women is likely to have a fracture caused by osteoporosis in her lifetime.<sup><a href="#references">18</a></sup></p>

<ul>
	<li>Hip fractures can cause serious pain and disability and require surgery.</li>
	<li>Spinal fractures can cause you to lose height or get a stooped back. They often cause serious pain and require surgery.</li>
</ul>

<p>Fractures can happen after minor falls, stumbles, or bumps into furniture. Falls are the leading cause of injuries in older adults over age 65.<sup><a href="#references'">19</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Does pregnancy affect bone density?",
      content: `

    <div class="answer"><p>Maybe. Your unborn baby needs calcium to help his or her bones grow. While in the womb, babies get calcium from what you eat (or the supplements you take). If you don't get enough calcium from food or supplements, your baby will use the calcium in your bones.</p>

<p>You can lose some bone density during pregnancy, but any bone mass lost is usually restored after childbirth (or after breastfeeding). Also, during pregnancy, you absorb calcium from food and supplements (like prenatal vitamins) better than women who are not pregnant. Your body also makes more of the hormone estrogen, which protects bone.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Does breastfeeding affect bone density?",
      content: `

    <div class="answer"><p>Yes, women often lose some bone density during breastfeeding. But this loss is temporary. Several studies have shown that when women lose bone mass during breastfeeding, they recover full bone density within six months after breastfeeding stops.<sup><a href="#references">20</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about osteoporosis?",
      content: `

    <div class="answer"><p>For more information about osteoporosis, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="https://www.fda.gov/"><strong>Food and Drug Administration (FDA), HHS</strong></a><br>
	Phone Number: 888-463-6332</li>
	<li><a href="https://www.nia.nih.gov/"><strong>National Institute on Aging (NIA), NIH, HHS</strong></a><br>
	Phone Number:&nbsp;301-496-1752&nbsp;</li>
	<li><a href="http://www.niams.nih.gov/Health_Info/Bone/"><strong>NIH Osteoporosis and Related Bone Diseases ­– National Resource Center, NIAMS, NIH, HHS</strong></a><br>
	Phone Number: 800-624-BONE</li>
	<li><a href="https://americanbonehealth.org" class="external-link external-popup" target="_blank"><strong>American Bone Health</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 888-266-3015 (Bone Health Hotline)</li>
	<li><a href="https://www.nof.org/" class="external-link external-popup" target="_blank"><strong>National Osteoporosis Foundation</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number:&nbsp;800-231-4222&nbsp;</li>
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
	<li>Wright, N.C., Looker, A.C., Saag, K.G., Curtis, J.R., Delzell, E.S., Randall, S., et al. (2014). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4757905/">The Recent Prevalence of Osteoporosis and Low Bone Mass in the United States Based on Bone Mineral Density at the Femoral Neck or Lumbar Spine.</a> <em>J Bone Miner Res; </em>29(11): 2520-2526.</li>
	<li>Cawthon, P.M. (2011). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3111766/">Gender Differences in Osteoporosis and Fractures.</a> <em>Clin Orthop Relat Res; </em>469(7): 1900-1905.</li>
	<li>Schutte, H.E. (1995). <a href="http://www.sciencedirect.com/science/article/pii/0720048X95006284" class="external-link external-popup" target="_blank">Social and economic impact of osteoporosis. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> <em>European Journal of Radiology; </em>20(3): 165-169.</li>
	<li>Looker, A.C., Frenk, S.M. (2015). <a href="http://www.cdc.gov/nchs/data/hestat/osteoporsis/osteoporosis2005_2010.htm">Percentage of Adults Aged 65 and Over with Osteoporosis or Low Bone Mass at the Femur Neck or Lumbar Spine: United States, 2005-2010.</a></li>
	<li>Finkelstein, J.S., Brockwell, S.E., Mehta, V., Greendale, G.A., Sowers, M.R., Ettinger, B. et al. (2008). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2266953/">Bone Mineral Density Changes during the Menopause Transition in a Multiethnic Cohort of Women.</a> <em>The Journal of Clinical Endocrinology &amp; Metabolism; </em>93(3): 861-868.</li>
	<li value="6">Looker, A.C., Borrud, L.G., Dawson-Hughes, B., Shepherd, J.A., Wright, N.C. (2012). <a href="http://www.cdc.gov/nchs/data/databriefs/db93.pdf">Osteoporosis or Low Bone Mass at the Femur Neck or Lumbar Spine in Older Adults: United States, 2005–2008</a>. NCHS Data Brief, No. 93. Hyattsville, MD: National Center for Health Statistics.</li>
	<li value="7">smokefreewomen. (n.d.). <a href="http://women.smokefree.gov/11-harmful-effects-of-smoking-on-women%E2%80%99s-health.aspx">11 Harmful Effects of Smoking on Women's Health</a>.</li>
	<li value="8">Abate, M., Vanni, D., Pantalone, A., Salini, V. (2013). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3711704/">Cigarette smoking and musculoskeletal disorders.</a> <em>Muscle, Ligaments and Tendons Journal. </em>3(2): 63-69.</li>
	<li value="9">Paschou, S.A., Dede, A.D., Anagnostis, P.G., Vryonidou, A., Morganstein, D., Goulis, D.G. (2017). <a href="https://academic.oup.com/jcem/article-abstract/doi/10.1210/jc.2017-00042/3882598/Type-2-diabetes-and-osteoporosis-a-guide-to?redirectedFrom=fulltext" class="external-link external-popup" target="_blank">Type 2 diabetes and osteoporosis: a guide to optimal management. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> <em>The Journal of Clinical Endocrinology &amp; Metabolism; </em>jc.20174-00042.</li>
	<li value="10">Shuster, L.T., Rhodes, D.J., Gostout, B.S., Grossardt, B.R., Rocca, W.A. (2010). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2815011/">Premature menopause or early menopause: long-term health consequences.</a> <em>Maturitas; </em>65(2): 161.</li>
	<li value="11">Katz, S., Weinerman, S. (2010). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2950667/">Osteoporosis and Gastrointestinal Disease.</a> <em>Gastroenterology &amp; Hepatology; </em>6(8): 506-517.</li>
	<li value="12">Schweiger, J.U., Schweiger, U., Huppe, M., Kahl, K.G., Greggersen, W., Fassbinder, E. (2016). <a href="http://onlinelibrary.wiley.com/doi/10.1002/brb3.489/full" class="external-link external-popup" target="_blank">Bone density and depressive disorder: a meta-analysis. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> <em>Brain and Behavior; </em>6(8): e00489, doi:&nbsp;10.1002/brb3.489.</li>
	<li value="13">U.S. Department of Health and Human Services, U.S. Department of Agriculture.&nbsp;(2015). <a href="https://health.gov/dietaryguidelines/2015/guidelines/">Dietary Guidelines for Americans 2015–2020</a>. 8th&nbsp;Edition.</li>
	<li value="14">Moretto, M.R., Silva, C.C., Kurokawa, C.S., Fortes, C.M., Capela, R.C., Teixeira, A.S., et al. (2011). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3178934/">Bone Mineral Density in Healthy Female Adolescents According to Age, Bone Age, and Pubertal Breast Stage.</a> <em>Open Orthopaedics Journal; </em>5:324-330.</li>
	<li value="15">U.S. Preventive Services Task Force. (2011). <a href="http://www.uspreventiveservicestaskforce.org/uspstf/uspsoste.htm" class="external-link external-popup" target="_blank">Osteoporosis Screening <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li value="16">Office of Dietary Supplements. (2016). <a href="http://ods.od.nih.gov/factsheets/Calcium-Consumer/">Calcium.</a></li>
	<li value="17">Office of Dietary Supplements. (2016). <a href="http://ods.od.nih.gov/factsheets/VitaminD-Consumer/">Vitamin D</a>.</li>
	<li value="18">World Health Organization. (2016). <a href="http://www.who.int/nutrition/topics/ageing/en/" class="external-link external-popup" target="_blank">Nutrition for Older Persons <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li value="19">Bergen, G., Stevens, M.R., Burns, E.R. (2016). <a href="https://www.cdc.gov/mmwr/volumes/65/wr/mm6537a2.htm?s_cid=mm6537a2_w">Falls and Fall Injuries Among Adults Aged ≥ 65 Years – United States, 2014</a>. <em>Morbidity and Mortality Weekly Report; </em>65(37): 993-998.</li>
	<li value="20">Salari, P., Abdollahi, M. (2014). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4266784/">The Influence of Pregnancy and Lactation on Maternal Bone Health: A Systematic Review.</a> <em>Journal of Family and Reproductive Health; </em>8(4): 135-148.</li>
</ol>
</div>
`,
    },
  ];
  return [condName, condImURL, condDescription, condHeader, condQA];
}

export function osteoScreening({ navigation, ...rest }) {
  const screeningTree = [
    {
      title: "Osteoprorosis Question1",
      content: (
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            p
            style={{
              // marginVertical: theme.SIZES.BASE / 2,
              textAlign: "center",
            }}
            color={theme.COLORS.DEFAULT}
          >
            PCOS is hormonal disorder involving infrequent, irregular or
            prolonged menstrual periods, and often excess male hormone
            (androgen) levels. The ovaries develop numerous small collections of
            fluid — called follicles — and may fail to regularly release eggs.​
          </Text>
        </View>
      ),
    },
    {
      title: "Osteoprorosis Question2",
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
