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

export function bladderPage({ navigation, ...rest }) {
  const condName = "Bladder Control / Urinary Incontinence";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Urinaryincontinence.jpg?VersionId=KcRXKmImSAcnv_828KblzHFiYdpXRO26";
  const condDescription =
    "Urinary incontinence is the loss of bladder control, or leaking urine. \n Urine is made by the kidneys and stored in the bladder. The bladder has muscles that tighten when you need to urinate. When the bladder muscles tighten, urine is forced out of your bladder through a tube called the urethra. At the same time, sphincter muscles around the urethra relax to let the urine out of your body. \n Incontinence can happen when the bladder muscles suddenly tighten and the sphincter muscles are not strong enough to pinch the urethra shut. This causes a sudden, strong urge to urinate that you may not be able to control. Pressure caused by laughing, sneezing, or exercising can cause you to leak urine. Urinary incontinence may also happen if there is a problem with the nerves that control the bladder muscles and urethra. Urinary incontinence can mean you leak a small amount of urine or release a lot of urine all at once.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--   <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Urinaryincontinence.jpg?VersionId=KcRXKmImSAcnv_828KblzHFiYdpXRO26"></div>  -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Urinary incontinence</h1>  -->
            <p><strong>Urinary incontinence is the loss of bladder control. </strong>The two most common types of urinary incontinence that affect women are stress incontinence and urge incontinence, also called overactive bladder. Incontinence affects twice as many women as men. This may be because pregnancy, childbirth, and menopause may make urinary incontinence more likely. Urinary incontinence is not a normal part of aging, and it can be treated.</p>

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
      title: "What is urinary incontinence?",
      content: `

    <div class="answer"><p>Urinary incontinence is the loss of bladder control, or leaking urine.</p>

<p>Urine is made by the kidneys and stored in the bladder. The bladder has muscles that tighten when you need to urinate. When the bladder muscles tighten, urine is forced out of your bladder through a tube called the <a href="/glossary#urethra" title="glossary | womenshealth.gov">urethra</a>. At the same time, <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="SFINK-ter">sphincter</a> muscles around the urethra relax to let the urine out of your body.</p>

<p>Incontinence can happen when the bladder muscles suddenly tighten and the sphincter muscles are not strong enough to pinch the urethra shut. This causes a sudden, strong urge to urinate that you may not be able to control. Pressure caused by laughing, sneezing, or exercising can cause you to leak urine. Urinary incontinence may also happen if there is a problem with the nerves that control the bladder muscles and urethra. Urinary incontinence can mean you leak a small amount of urine or release a lot of urine all at once.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets urinary incontinence?",
      content: `

    <div class="answer"><p>Urinary incontinence affects <a href="#3">twice as many women as men</a>. This is because reproductive health events unique to women, like <a href="/pregnancy">pregnancy</a>, childbirth, and <a href="/menopause">menopause</a>, affect the bladder, urethra, and other muscles that support these organs.</p>

<p>Urinary incontinence can happen to women at any age, but it is more common in older women. This is probably because of hormonal changes during menopause. More than 4 in 10 women 65 and older have urinary incontinence.<a href="#references"><sup>1</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Why does urinary incontinence affect more women than men? ",
      content: `

    <div class="answer"><p>Women have unique health events, such as pregnancy, childbirth, and menopause, that may affect the urinary tract and the surrounding muscles. The pelvic floor muscles that support the bladder, urethra, uterus (womb), and bowels may become weaker or damaged. When the muscles that support the urinary tract are weak, the muscles in the urinary tract must work harder to hold urine until you are ready to urinate. This extra stress or pressure on the bladder and urethra can cause urinary incontinence or leakage.</p>

<p>Also, the female urethra is shorter than the male urethra. Any weakness or damage to the urethra in a woman is more likely to cause urinary incontinence. This is because there is less muscle keeping the urine in until you are ready to urinate.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the types of urinary incontinence that affect women? ",
      content: `

    <div class="answer"><p>The two most common types of urinary incontinence in women are:</p>

<ul>
	<li><strong>Stress incontinence. </strong>This is the most common type of incontinence. It is also the most common type of incontinence that affects younger women.<a href="#references"><sup>2</sup></a> Stress incontinence happens when there is stress or pressure on the bladder. Stress incontinence can happen when weak pelvic floor muscles put pressure on the bladder and urethra by making them work harder. With stress incontinence, everyday actions that use the pelvic floor muscles, such as coughing, sneezing, or laughing, can cause you to leak urine. Sudden movements and physical activity can also cause you to leak urine.</li>
	<li><strong>Urge incontinence.</strong> With urge incontinence, urine leakage usually happens after a strong, sudden urge to urinate and before you can get to a bathroom. Some women with urge incontinence are able to get to a bathroom in time but feel the urge to urinate more than eight times a day. They also do not urinate much once they get to the bathroom. Urge incontinence is sometimes called “overactive bladder.” Urge incontinence is more common in older women.<a href="#references"><sup>3</sup></a> It can happen when you don’t expect it, such as during sleep, after drinking water, or when you hear or touch running water.</li>
</ul>

<p>Many women with urinary incontinence have both stress and urge incontinence. This is called “mixed” incontinence.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of urinary incontinence?",
      content: `

    <div class="answer"><p>Urinary incontinence is not a disease by itself. Urinary incontinence is a symptom of another health problem, usually weak pelvic floor muscles. In addition to urinary incontinence, some women have other urinary symptoms:<a href="#references"><sup>4</sup></a></p>

<ul>
	<li>Pressure or spasms in the pelvic area that causes a strong urge to urinate</li>
	<li>Going to the bathroom more than usual (more than eight times a day or more than twice at night)</li>
	<li>Urinating while sleeping (bedwetting)</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes urinary incontinence?",
      content: `

    <div class="answer"><p>Urinary incontinence is usually caused by problems with the muscles and nerves that help the bladder hold or pass urine. Certain health events unique to women, such as <a href="#7">pregnancy</a>, <a href="#8">childbirth</a>, and <a href="#9">menopause</a>, can cause problems with these muscles and nerves.</p>

<p>Other causes of urinary incontinence include:</p>

<ul>
	<li><strong>Overweight.</strong>&nbsp;Having overweight puts pressure on the bladder, which can weaken the muscles over time. A weak bladder cannot hold as much urine.</li>
	<li><strong><a href="/glossary#constipation">Constipation.</a> </strong>Problems with bladder control can happen to people with long-term (chronic) constipation. Constipation, or straining to have a bowel movement, can put stress or pressure on the bladder and pelvic floor muscles. This weakens the muscles and can cause urinary incontinence or leaking.</li>
	<li><strong>Nerve damage. </strong>Damaged nerves may send signals to the bladder at the wrong time or not at all. Childbirth and health problems such as <a href="/a-z-topics/diabetes">diabetes</a> and <a href="/glossary#MS">multiple sclerosis</a> can cause nerve damage in the bladder, urethra, or pelvic floor muscles.</li>
	<li><strong>Surgery. </strong>Any surgery that involves a woman’s reproductive organs, such as a <a href="/a-z-topics/hysterectomy">hysterectomy</a>, can damage the supporting pelvic floor muscles, especially if the uterus is removed.<a href="#references"><sup>5</sup></a> If the pelvic floor muscles are damaged, a woman’s bladder muscles may not work like they should. This can cause urinary incontinence.</li>
</ul>

<p>Sometimes urinary incontinence lasts only for a short time and happens because of other reasons, including:</p>

<ul>
	<li><strong>Certain medicines.</strong> Urinary incontinence may be a side effect of medicines such as diuretics (“water pills” used to treat heart failure, liver cirrhosis, hypertension, and certain kidney diseases). The incontinence often goes away when you stop taking the medicine.</li>
	<li><strong>Caffeine. </strong>Drinks with caffeine can cause the bladder to fill quickly, which can cause you to leak urine. Studies suggest that women who drink more than two cups of drinks with caffeine per day may be more likely to have problems with incontinence.<a href="#references"><sup>6</sup></a> Limiting caffeine may help with incontinence because there is less strain on your bladder.</li>
	<li><strong>Infection. </strong>Infections of the <a href="/a-z-topics/urinary-tract-infections">urinary tract</a> and bladder may cause incontinence for a short time. Bladder control often returns when the infection goes away.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does pregnancy cause urinary incontinence?",
      content: `

    <div class="answer"><p>As many as 4 in 10 women get urinary incontinence during pregnancy.<a href="#references"><sup>7</sup></a> During pregnancy, as your unborn baby grows, he or she pushes down on your bladder, urethra, and pelvic floor muscles. Over time, this pressure may weaken the pelvic floor muscles and lead to leaks or problems passing urine.</p>

<p>Most problems with bladder control during pregnancy go away after childbirth when the muscles have had some time to heal. If you’re still having bladder problems 6&nbsp;weeks after childbirth, talk to your doctor, nurse, or midwife.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does childbirth cause urinary incontinence?",
      content: `

    <div class="answer"><p>Problems during <a href="/pregnancy/childbirth-and-beyond/labor-and-birth" title="Labor and birth">labor</a> and childbirth, especially vaginal birth, can weaken pelvic floor muscles and damage the nerves that control the bladder. Most problems with bladder control that happen as a result of labor and delivery go away after the muscles have had some time to heal. If you’re still having bladder problems 6&nbsp;weeks after childbirth, talk to your doctor, nurse, or midwife.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does menopause cause urinary incontinence?",
      content: `

    <div class="answer"><p>Some women have bladder control problems after they stop having periods. Researchers think having low levels of the hormone estrogen after <a href="/menopause">menopause</a> may weaken the <a href="/glossary#urethra">urethra</a>.<a href="#references"><sup>8</sup></a> The urethra helps keep urine in the bladder until you are ready to urinate.</p>

<p>Also, like all muscles, the bladder and urethra muscles lose some of their strength as you get older. This means you may not be able to hold as much urine as you get older.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What type of doctor or nurse should I go to for help with urinary incontinence? ",
      content: `

    <div class="answer"><p>If you have urinary incontinence, you can make an appointment with your primary care provider, your OB/GYN, or a nurse practitioner. Your doctor or nurse will work with you to treat your urinary incontinence or refer you to a specialist if you need different treatment.</p>

<p>The specialist may be a urologist, who treats urinary problems in both men and women, or a urogynecologist, who has special training in the female urinary system. You might also need to see a pelvic floor specialist, a type of physical therapist, who will work with you to strengthen your pelvic floor muscles that support the urinary tract.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is urinary incontinence diagnosed?",
      content: `

    <div class="answer"><p>Your doctor or nurse will ask you about your symptoms and your medical history, including:</p>

<ul>
	<li>How often you empty your bladder</li>
	<li>How and when you leak urine</li>
	<li>How much urine you leak</li>
	<li>When your symptoms started</li>
	<li>What medicines you take</li>
	<li>If you have ever been pregnant and what your labor and delivery experience was like</li>
</ul>

<p>Your doctor or nurse will do a physical exam to look for signs of health problems that can cause incontinence.</p>

<p>Your doctor or nurse also may do other tests such as:</p>

<ul>
	<li><strong>Urine test.</strong> After you urinate into a cup, the doctor or nurse will send your urine to a lab. At the lab, your urine will be checked for infection or other causes of incontinence.</li>
	<li><strong>Ultrasound</strong><strong>.</strong> Your doctor will use an ultrasound wand on the outside of your abdomen to take pictures of the kidneys, bladder, and urethra. Your doctor will look for anything unusual that may be causing urinary incontinence.</li>
	<li><strong>Bladder stress test.</strong> During this test, you will cough or bear down as if pushing during childbirth as your doctor watches for loss of urine.</li>
	<li><strong>Cystoscopy</strong><strong>.</strong> Your doctor inserts a thin tube with a tiny camera into your urethra and bladder to look for damaged tissue. Depending on the type of cystoscopy you need, your doctor may use medicine to numb your skin and urinary organs while you are still awake, or you may be fully sedated.</li>
	<li><strong>Urodynamics</strong><strong>.</strong> Your doctor inserts a thin tube into your bladder and fills your bladder with water. This allows your doctor to measure the pressure in your bladder to see how much fluid your bladder can hold.</li>
</ul>

<p>Your doctor or nurse may ask you to keep a diary for 2&nbsp;to 3&nbsp;days to track when you empty your bladder or leak urine. The diary may help your doctor or nurse see patterns in the incontinence that give clues about the possible cause and treatments that might work for you.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is urinary incontinence treated?",
      content: `

    <div class="answer"><p>You and your doctor or nurse will work together to create a treatment plan. You may start with <a href="#13">steps you can take at home</a>. If these steps do not improve your symptoms, your doctor or nurse may recommend other treatments depending on whether you have <a href="#18">stress incontinence</a> or <a href="#19">urge incontinence</a> or both.</p>

<p>Be patient as you work with your doctor or nurse on a treatment plan. It may take a month or longer for different treatments to begin working.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What steps can I take at home to treat urinary incontinence? ",
      content: `

    <div class="answer"><p>Your doctor or nurse may suggest some things you can do at home to help treat urinary incontinence. Some people do not think that such simple actions can treat urinary incontinence. But for many women, these steps make urinary incontinence go away entirely, or help leak less urine. These steps may include:</p>

<ul>
	<li><strong>Doing Kegel exercises. </strong>If you have stress incontinence, <a href="#15">Kegel exercises</a> to strengthen your pelvic floor muscles may help. Some women have urinary symptoms because the pelvic floor muscles are always tightened. In this situation, Kegel exercises will not help your urinary symptoms and may cause more problems. Talk to your doctor or nurse about your urinary symptoms before doing Kegel exercises.</li>
	<li><strong>Training your bladder. </strong>You can help control overactive bladder or urge incontinence by going to the bathroom at set times. Start by tracking how often you go to the bathroom each day in a <a href="http://www.niddk.nih.gov/health-information/health-topics/urologic-disease/daily-bladder-diary/Pages/facts.aspx">bladder diary</a>&nbsp;(PDF, 499 KB). Then slowly add about 15 minutes between bathroom visits. Urinate each time, even if you do not feel the urge to go. By gradually increasing the amount of time between visits, your bladder learns to hold more urine before it signals the need to go again.</li>
	<li><strong>Losing weight. </strong>Extra weight puts more pressure on your bladder and nearby muscles, which can lead to problems with bladder control. If you have overweight, your doctor or nurse can help you create a plan to lose weight by choosing healthy foods and getting regular physical activity. Your doctor or nurse may refer you to a dietitian or physical therapist to create a healthy eating and exercise plan.</li>
	<li><strong>Changing your eating habits. </strong>Drinks with caffeine, carbonation (such as sodas), or alcohol may make bladder leakage or urinary incontinence worse. Your doctor might suggest that you stop drinking these drinks for a while to see if that helps.</li>
	<li><strong>Quitting smoking. </strong>Smoking can make many health problems, including urinary incontinence, worse.</li>
	<li><strong>Treating constipation.</strong> Your doctor might recommend that you eat more fiber, since constipation can make urinary incontinence worse. Eating <a href="https://www.accessdata.fda.gov/scripts/InteractiveNutritionFactsLabel/factsheets/Dietary_Fiber.pdf">foods with a lot of fiber</a>&nbsp;(PDF, 166 KB) can make you less constipated.</li>
</ul>

<p>You can also buy pads or protective underwear while you take other steps to treat urinary incontinence. These are sold in many stores that also sell feminine hygiene products like tampons and pads.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are Kegel exercises?",
      content: `

    <div class="answer"><p>Kegel exercises, also called Kegels or pelvic floor muscle training, are exercises for your pelvic floor muscles to help prevent or reduce stress urinary incontinence. Your pelvic floor muscles support your uterus, bladder, small intestine, and rectum.</p>

<p>Four in 10 women improved their symptoms after trying Kegels.<a href="#references"><sup>9</sup></a> Kegels can be done daily and may be especially helpful during pregnancy. They can help prevent the weakening of pelvic floor muscles, which often happens during pregnancy and childbirth. Your pelvic floor muscles may also weaken with age and less physical activity.</p>

<p>Some women have urinary symptoms because the pelvic floor muscles are always tightened. In this situation, Kegel exercises will not help your urinary symptoms and may cause more problems. Talk to your doctor or nurse about your urinary symptoms before doing Kegel exercises.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do I do Kegel exercises?",
      content: `

    <div class="answer"><p>To do Kegels:</p>

<ol>
	<li><strong>Lie down.</strong> It may be easier to learn how to do Kegels correctly while lying down. You don’t have to lie down once you learn to do Kegels correctly.&nbsp;</li>
	<li><strong>Squeeze the muscles in your genital area</strong> as if you were trying to stop the flow of urine or passing gas. Try not to squeeze the muscles in your belly or legs at the same time. Try to squeeze only the pelvic muscles. Be extra careful not to tighten your stomach, legs, or buttocks (because then you will not be using your pelvic floor muscles).</li>
	<li><strong>Relax.</strong> <strong>Squeeze the muscles again </strong>and hold for 3&nbsp;seconds. Then relax for 3&nbsp;seconds. Work up to 3&nbsp;sets of 10 each day.</li>
	<li><strong>Practice Kegels anywhere.</strong> When your muscles get stronger, try doing Kegels while sitting or standing. You can do these exercises at any time, such as while sitting at your desk or in the car, waiting in line, or doing the dishes. Don’t do Kegel exercises at the same time you are urinating. This can weaken your pelvic floor muscles over time.<a href="#references"><sup>10</sup></a></li>
</ol>

<p>If you are uncomfortable or uncertain about doing Kegel exercises on your own, a doctor or nurse can also teach you how to do Kegels. A pelvic floor physical therapist or other specialist may also be available in your area to help teach you how to strengthen these muscles.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "How soon after starting Kegel exercises will urinary incontinence get better? ",
      content: `

    <div class="answer"><p>It may take 4 to 6 weeks before you notice any improvement in your symptoms.<a href="#references"><sup>10</sup></a></p>

<p>Kegel exercises work differently for each person. Your symptoms may go away totally, you may notice an improvement in your symptoms but still have some leakage, or you may not see any improvement at all. But even if your symptoms don’t get better, Kegel exercises can help prevent your incontinence from getting worse.</p>

<p>You may need to continue doing Kegel exercises for the rest of your life. Even if your symptoms improve, urinary incontinence can come back if you stop doing the exercises.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Should I drink less water or other fluids if I have urinary incontinence? ",
      content: `

    <div class="answer"><p>No. Many people with urinary incontinence think they need to drink less to reduce how much urine leaks out. But you need fluids, especially water, for good health. (But alcohol and caffeine can irritate or stress the bladder and make urinary incontinence worse.)</p>

<p>Women need 91 ounces (about 11 cups) of fluids a day from food and drinks.<a href="#references"><sup>11</sup></a> Getting enough fluids helps keep your kidneys and bladder healthy, prevents <a href="/a-z-topics/urinary-tract-infections">urinary tract infections</a>, and prevents constipation, which may make urinary incontinence worse.</p>

<p>After age 60, people are less likely to get enough water, putting them at risk for dehydration and conditions that make urinary incontinence worse.<a href="#references"><sup>12</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are some medical treatments for stress incontinence? ",
      content: `

    <div class="answer"><p>If steps you can take at home do not work to improve your stress incontinence, your doctor may talk to you about other options:</p>

<ul>
	<li><strong>Medicine. </strong>After menopause, applying vaginal creams, rings, or patches with estrogen (called topical estrogen) can help strengthen the muscles and tissues in the urethra and vaginal areas. A stronger urethra will help with bladder control. <a href="/menopause/menopause-treatment">Learn more about menopause treatments.</a></li>
	<li><strong>Vaginal pessary. </strong>A reusable <a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="PESS-uh-ree">pessary</a> is a small plastic or silicone device (shaped like a ring or small donut) that you put into your vagina. The pessary pushes up against the wall of the vagina and the urethra to support the pelvic floor muscles and help reduce stress incontinence. Pessaries come in different sizes, so your doctor or nurse must write a prescription for the size that will fit you. Another type of pessary looks like a tampon and is used once and then thrown away. You can get this type of pessary at a store that also sells feminine hygiene products.</li>
	<li><strong>Bulking agents. </strong>Your doctor can inject a bulking agent, such as collagen, into tissues around the bladder and urethra to cause them to thicken. This helps keep the bladder opening closed and reduces the amount of urine that can leak out.</li>
	<li><strong>Surgery. </strong>Surgery for urinary incontinence is not recommended if you plan to get pregnant in the future. Pregnancy and childbirth can cause leakage to happen again. The two most common types of surgery for urinary incontinence are:<a href="#references"><sup>13</sup></a>
	<ul style="list-style-type:circle;">
		<li><strong>Sling procedures. </strong>The mid-urethral sling is the most common type of surgery to treat stress incontinence. The sling is either a narrow piece of synthetic (man-made) mesh or a piece of tissue from your own body that your doctor places under your urethra. The sling acts like a hammock to support the urethra and hold the bladder in place. Serious complications from the sling procedure include pain, infection, pain during sex, and damage to nearby organs, such as the bladder. The Food and Drug Administration (FDA) reports that in 1 out of every 50 patients who have synthetic mesh for urinary incontinence, the mesh moves after surgery and stick outs, into the vagina, causing pain.<a href="#references"><sup>14</sup></a> The FDA <a href="https://www.fda.gov/MedicalDevices/ProductsandMedicalProcedures/ImplantsandProsthetics/UroGynSurgicalMesh/ucm345230.htm">recommends</a> discussing treatment options with your doctor before surgery, and asking specific questions about side effects.</li>
		<li><strong><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="cohl-poh-suss-PEN-shun">Colposuspension</a>.</strong> This surgery also helps hold the bladder in place with stitches on either side of the urethra. This is often referred to as a Burch procedure.</li>
	</ul>
	</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are some nonsurgical treatments for urge incontinence? ",
      content: `

    <div class="answer"><p>If steps you can take at home do not work to improve your urge incontinence, your doctor may suggest one or more of the following treatments:</p>

<ul>
	<li><strong>Medicines. </strong>Medicines to treat urge incontinence help relax the bladder muscle and increase the amount of urine your bladder can hold. Common side effects of these medicines include constipation and dry eyes and mouth.</li>
	<li><strong>Botox. </strong>Botox injections in the bladder can help if other treatments don’t work. Botox helps relax the bladder and increases the amount of urine your bladder can hold. You may need to get Botox treatments about once every 3&nbsp;months.</li>
	<li><strong>Nerve stimulation.</strong> This treatment uses mild electric pulses to stimulate nerves in the bladder. The pulses may increase blood flow to the bladder and strengthen the muscles that help control the bladder. Talk to your doctor about the different types of nerve stimulation.</li>
	<li><strong>Biofeedback. </strong>Biofeedback helps you see how your bladder responds on a screen. A therapist puts an electrical patch on the skin over your bladder and urethral muscles. A wire connected to the patch is linked to a screen. You and your therapist watch the screen to see when these muscles contract so you can learn to control them.</li>
	<li><strong>Surgery. </strong>If you have severe urge incontinence, your doctor may recommend surgery to help increase the amount of urine your bladder can hold or to remove your bladder. Removing your bladder is a serious surgery and is an option only when no other treatments work and the quality of your life is seriously affected.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I prevent urinary incontinence?",
      content: `

    <div class="answer"><p>Although you can’t always prevent urinary incontinence, you can take steps to lower your risk:</p>

<ul>
	<li>Practice <a href="#15">Kegels</a> daily, especially during pregnancy and after talking to your doctor, nurse, or midwife.</li>
	<li>Reach or stay at a <a href="/healthy-weight">healthy weight</a>.</li>
	<li>Eat foods with fiber to help prevent constipation.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your questions about urinary incontinence?",
      content: `

    <div class="answer"><p>For more information about urinary incontinence, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.nia.nih.gov/"><strong>National Institute on Aging (NIA), NIH, HHS</strong></a><br>
	Phone Number: 1-800-222-2225</li>
	<li><a href="http://www.niddk.nih.gov/Pages/default.aspx"><strong>National Kidney and Urologic Diseases Information Clearinghouse, NIDDK, NIH, HHS</strong></a><br>
	Phone Number:&nbsp;301-496-3583</li>
	<li><a href="http://www.augs.org/" class="external-link external-popup" target="_blank"><strong>American Urogynecologic Society</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number:&nbsp;202-367-1167</li>
	<li><a href="http://www.nafc.org/" class="external-link external-popup" target="_blank"><strong>National Association for Continence</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number:&nbsp;1-800-BLADDER</li>
	<li><a href="http://www.urologyhealth.org/" class="external-link external-popup" target="_blank"><strong>Urology Care Foundation</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 410-689-3998</li>
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
	<li>Centers for Disease Control and Prevention. (2014). <a href="http://www.cdc.gov/nchs/data/series/sr_03/sr03_036.pdf">Prevalence of Incontinence Among Older Americans (PDF, 1.3 MB).</a> National Center for Health Statistics. <em>Vital Health Statistics; </em>3(36).&nbsp;</li>
	<li>Reddy, J., &amp; Paraiso, M.F.R. (2010). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3046739/">Primary Stress Urinary Incontinence: What to Do and Why</a>. <em>Reviews in Obstetrics &amp; Gynecology; </em>3(4): 150–155.</li>
	<li>Stewart, W.F., et al. (2003). <a href="http://www.ncbi.nlm.nih.gov/pubmed/12811491/">Prevalence and Burden of Overactive Bladder in the United States.</a> <em>World Journal of Urology; </em>20(6): 327–336.</li>
	<li>American College of Obstetricians and Gynecologists. (2016). <a href="http://www.acog.org/-/media/For-Patients/faq081.pdf?dmc=1&amp;ts=20151007T1257588919" class="external-link external-popup" target="_blank">Urinary Incontinence (PDF, 84 KB). <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li>Altman, D., Granath, F., Cnattingius, S., &amp; Falconer, C. (2007). <a href="http://www.thelancet.com/journals/lancet/article/PIIS0140-6736%2807%2961635-3/abstract" class="external-link external-popup" target="_blank">Hysterectomy and Risk of Stress-Urinary-Incontinence Surgery: Nationwide Cohort Study. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> <em>Lancet; </em>370(9597): 1494–1499.</li>
	<li>Gleason, J.L., Richter, H.E., Redden, D.T., Goode, P.S., Burgio, K.L., &amp; Markland, A.D. (2013). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3505252/">Caffeine and Urinary Incontinence in Women.</a> <em>International Urogynecology Journal; </em>24(2): 295–302.</li>
	<li>Sangsawang, B., &amp; Sangsawang, N. (2013). <a href="http://www.ncbi.nlm.nih.gov/pubmed/23436035">Stress Urinary Incontinence in Pregnant Women: A Review of Prevalence, Pathophysiology, and Treatment.</a> <em>International Urogynecology Journal; </em>24(6): 901–912.</li>
	<li>Kim, D.K., &amp; Chancellor, M.B. (2006). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC1578535/">Is Estrogen for Urinary Incontinence Good or Bad?</a> <em>Reviews in Urology</em>; 8(2): 91–92.</li>
	<li>Health Resources and Services Administration, Agency for Healthcare Research and Quality. (2012). <a href="https://effectivehealthcare.ahrq.gov/sites/default/files/pdf/urinary-incontinence-treatment_research.pdf">Nonsurgical Treatments for Urinary Incontinence in Adult Women: Diagnosis and Comparative Effectiveness (PDF, 12.9 MB).</a> <em>Comparative Effectiveness Review</em>; 36.</li>
	<li>U.S. National Library of Medicine. (2017). <a href="https://medlineplus.gov/ency/patientinstructions/000141.htm">Kegel exercises – self-care.</a></li>
	<li>Institute of Medicine. (2004). <a href="https://iom.nationalacademies.org/Reports/2004/Dietary-Reference-Intakes-Water-Potassium-Sodium-Chloride-and-Sulfate.aspx" class="external-link external-popup" target="_blank">Dietary References Intakes: Water, Potassium, Sodium, Chloride, and Sulfate <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>Rosinger, A. and Herrick, K. (2016). <a href="http://www.cdc.gov/nchs/products/databriefs/db242.htm">Daily water intake among U.S. men and women, 2009–2012</a>. <em>National Center for Health Statistics Data Brief</em>; 242.</li>
	<li>American College of Obstetricians and Gynecologists. (2017). <a href="http://www.acog.org/-/media/For-Patients/faq166.pdf?dmc=1&amp;ts=20151007T1250145628" class="external-link external-popup" target="_blank">Surgery for Stress Urinary Incontinence (PDF, 85 KB). <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li>Food and Drug Administration. (2018). <a href="https://www.fda.gov/MedicalDevices/ProductsandMedicalProcedures/ImplantsandProsthetics/UroGynSurgicalMesh/ucm345219.htm">Considerations about surgical mesh for SUI</a>.</li>
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
