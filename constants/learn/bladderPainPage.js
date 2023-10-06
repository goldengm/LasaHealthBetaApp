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

export function bladderPainPage({ navigation, ...rest }) {
  const condName = "Bladder Pain (Interstitial cystitis)";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Bladderpain.jpg?VersionId=rYv5MnwHN0LEPnhk_PCM1kIOH_Gy664x";
  const condDescription =
    "Bladder pain syndrome (also called interstitial cystitis or painful bladder syndrome) is a chronic (long-term) pain condition that affects the bladder. Your bladder is the organ that holds urine from the kidneys until the urine travels down the urethra and out of the body. A syndrome is a group of symptoms that are related to a certain illness or health problem. \n Bladder pain syndrome can be difficult to diagnose in a woman because not every doctor agrees on the exact definition. Also, women with bladder pain syndrome might have other types of pain in their pelvis, genital area, or in other areas of their body.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--   <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Bladderpain.jpg?VersionId=rYv5MnwHN0LEPnhk_PCM1kIOH_Gy664x"></div>  -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Bladder pain</h1>  -->
            <p><strong>Bladder pain syndrome (also called interstitial cystitis or painful bladder syndrome)</strong> is a chronic (long-term) pain condition that affects the bladder. Bladder pain syndrome affects more women than men. Some women have severe symptoms that can lead to other health problems such as depression. Bladder pain syndrome may also affect your sex life. There is no cure, but there is treatment to help relieve your symptoms, including pain. Sometimes symptoms get better without treatment.</p>

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
      title: "What is bladder pain syndrome?",
      content: `

    <div class="answer"><p>Bladder pain syndrome (also called interstitial cystitis or painful bladder syndrome) is a chronic (long-term) pain condition that affects the <a href="/glossary#bladder">bladder</a>. Your bladder is the organ that holds urine from the kidneys until the urine travels down the <a href="/glossary#urethra">urethra</a> and out of the body. A syndrome is a group of symptoms that are related to a certain illness or health problem.&nbsp;</p>

<p>Bladder pain syndrome can be difficult to diagnose in a woman because not every doctor agrees on the exact definition. Also, women with bladder pain syndrome might have other types of pain in their pelvis, genital area, or in other areas of their body.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "How is bladder pain syndrome different from a bladder infection (urinary tract infection)? ",
      content: `

    <div class="answer"><p>Bladder pain syndrome is often mistaken for a <a href="/publications/our-publications/fact-sheet/urinary-tract-infection.html?from=AtoZ">urinary tract infection</a> (UTI), also called a bladder infection. But bladder pain syndrome and UTIs are not the same health problem.</p>

<p>Bladder pain syndrome and UTIs can have some of the same symptoms, including pain near the bladder and the need to go to the bathroom often. But UTIs are caused by germs that get into the bladder, and are treated with antibiotics. Bladder pain syndrome cannot be treated with antibiotics. Experts aren’t sure what causes bladder pain syndrome, and there is no cure. But there are treatments that can improve the symptoms.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets bladder pain syndrome?",
      content: `

    <div class="answer"><p>Bladder pain syndrome affects more women than men.<sup><a href="#references">1</a> </sup>Between 3 million and 8 million women in the United States may have bladder pain syndrome.<sup><a href="#references">1</a>&nbsp;</sup>Some studies show that white women are more likely to have bladder pain syndrome compared to other racial and ethnic groups.<sup><a href="#references">1</a>,<a href="#references">2</a>&nbsp;&nbsp; </sup></p>

<p>Studies show that bladder pain can happen at any age, but symptoms may be different depending on your age.<a href="#references"><sup>3</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of bladder pain syndrome?",
      content: `

    <div class="answer"><p>Symptoms of bladder pain syndrome can include:</p>

<ul>
	<li>Pain or discomfort in the lower abdomen. Pain may get worse as the bladder fills up. Your pain may go away for a short time when you urinate and empty the bladder.</li>
	<li>Feeling like you need to urinate right away (urgency), often (frequency), or both. Most people urinate between four and seven times a day. People with severe bladder pain syndrome may urinate as often as 40 times a day, including during the night.</li>
	<li>Pain, pressure, or tenderness in the bladder, urethra, vulva, vagina, or rectum</li>
	<li>Pain in the muscles of the pelvic floor, lower abdomen, and lower back</li>
	<li>Pain that may get worse during your menstrual period</li>
	<li>Pain during sexual intercourse</li>
	<li>Ulcers, sores, and/or bleeding in the bladder</li>
</ul>

<p>Your symptoms may be different from other women depending on your age and how long you have had bladder pain syndrome.<a href="#references"><sup>3</sup></a> Bladder pain syndrome symptoms also “flare,” meaning the symptoms get worse suddenly and then get better on their own.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does bladder pain syndrome affect a woman’s health?",
      content: `

    <div class="answer"><p>Some women with bladder pain syndrome may feel only mild discomfort from symptoms. Others have severe pain and symptoms. Symptoms can also change over time.</p>

<p>Some ways that severe symptoms of bladder pain syndrome may affect a woman’s health include:</p>

<ul>
	<li><strong>Lack of high-quality sleep.</strong> Women with severe symptoms might get up throughout the night to urinate. Interrupted sleep can lead to extreme fatigue and sometimes <a href="/glossary#depression">depression</a>.<sup> <a href="#references">4</a></sup></li>
	<li><strong>Depression.</strong> Living with a chronic pain condition raises your risk of depression.<a href="#references"><sup>5</sup></a></li>
	<li><strong>Pain during sex.</strong> Many women with bladder pain syndrome report pain during sex. Studies show that women with bladder pain syndrome may also have problems with becoming sexually aroused, vaginal dryness, and reaching orgasm.<a href="#references"><sup>6</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes bladder pain syndrome?",
      content: `

    <div class="answer"><p>Researchers aren’t sure exactly what causes bladder pain syndrome. But some women are more at risk than others.</p>

<p><strong>Your risk for having bladder pain syndrome is higher if you:</strong></p>

<ul>
	<li><strong>Had a bladder infection.</strong> Your bladder is lined with cells that protect your bladder from bacteria (germs) in urine. A bladder infection can damage this lining and cause irritation.</li>
	<li><strong>Have a family history of bladder pain syndrome.</strong> Your genes may play a role in whether you get bladder pain syndrome.<a href="#references"><sup>7</sup></a></li>
	<li><strong>Have certain other conditions.</strong><sup><a href="#references">3</a> </sup>&nbsp;<a href="/publications/our-publications/fact-sheet/irritable-bowel-syndrome.html">Irritable bowel syndrome</a> (IBS), <a href="/glossary#fibromyalgia">fibromyalgia</a>, <a href="/publications/our-publications/fact-sheet/chronic-fatigue-syndrome.html">chronic fatigue syndrome</a>, <a href="/publications/our-publications/fact-sheet/endometriosis.html">endometriosis</a>, <a href="https://www.nichd.nih.gov/health/topics/vulvodynia/Pages/default.aspx">vulvodynia</a>, and allergies<sup><a href="#references">8</a> </sup>are common in women with bladder pain syndrome.</li>
</ul>

<p>Researchers are studying whether bladder pain syndrome may be an autoimmune disease in some people, similar to lupus. In an autoimmune disease, the body’s immune (defense) system incorrectly attacks itself.<a href="#references"><sup>9</sup></a></p>

<p>Autoimmune diseases are on the rise, especially in women. Researchers are studying whether environmental factors, such as exposure to pesticides in foods, may be the cause of the rise in autoimmune diseases and how this may link to bladder pain syndrome.<a href="#references"><sup>9</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is bladder pain syndrome diagnosed?",
      content: `

    <div class="answer"><p>There is no one test to tell whether you have bladder pain syndrome. Your doctor or nurse will do a physical exam to look at your lower abdomen and lower back and ask you questions about your symptoms. Your doctor may give you tests to rule out other health problems, such as <a href="/glossary#UTI">urinary tract infection</a>s, <a href="/glossary#sti">sexually transmitted infections</a> (STIs), bladder cancer, or <a href="/glossary#k_stones">kidney stones</a>.</p>

<p>Some tests your doctor may do include:</p>

<ul>
	<li><strong>Urine test.</strong> Your doctor may test a clean sample of your urine. This means you will first wipe your genital area with a wipe to sterilize the area. Then you will collect your urine mid-stream in a cup. Your doctor will look at your urine under a microscope or send the urine sample to a lab. Urine tests can tell your doctor if you have a UTI or an STI.</li>
	<li><strong>Cystoscopy.</strong> Your doctor may use a cystoscope (SISS-tuh-skohp), which is a thin tube with a tiny camera, to see inside your bladder. The cystoscope can help your doctor find problems such as cancer, kidney or bladder stones, bleeding, or ulcers. The cystoscope is put in the bladder through the urethra while you are sedated and not conscious.</li>
	<li><strong>Bladder distention.</strong> During a cystoscopy, your doctor may fill your bladder with liquid to slowly stretch and expand your bladder. This helps show how much urine your bladder can hold. This procedure is also usually done while you are sedated and not conscious. The procedure may also relieve pain for some women.</li>
	<li><strong>Biopsy.</strong> In a biopsy, your doctor removes a tissue sample and looks at it under a microscope. Samples of the bladder and urethra may be removed during cystoscopy. A biopsy helps your doctor figure out if bladder cancer could be causing your symptoms.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is bladder pain syndrome treated?",
      content: `

    <div class="answer"><p>There is no cure for bladder pain syndrome. But your doctor will try different treatments to figure out how to improve your symptoms.</p>

<p>The first treatment many people try includes <a href="#9">steps you can take at home</a>. Sometimes, by <a href="#10">changing what you eat</a>, you can make your symptoms go away. But even when symptoms do go away, they may return days or years later.</p>

<p>If your symptoms do not get better, other treatments your doctor may suggest include:<a href="#references"><sup>10</sup></a></p>

<ul>
	<li><strong>Physical therapy. </strong>Some or all of the pain that is diagnosed as bladder pain syndrome may be caused by spasm in the pelvic floor, lower abdomen, or back muscles. A physical therapist who specializes in pelvic floor disorders can help treat the pain by teaching you strengthening and relaxation techniques. Ask your doctor or nurse for a referral.</li>
	<li><strong>Over-the-counter pain relievers. </strong>Medicine that you can buy without a prescription from the doctor, such as aspirin and ibuprofen (eye-byoo-PROH-fuhn), may help with mild bladder pain.</li>
	<li><strong>Prescription medicines. </strong>Pentosan (PEN-tuh-san) polysulfate (pol-ee-SUHL-fayt) sodium, also known as Elmiron, may relieve pain and lessen the need to urinate in some people. You may have to take this medicine for up to six months before your symptoms get better. You should not take Elmiron if you are pregnant. Other medicines to help reduce pain include medicines used to treat allergies (called antihistamines) and medicines used to treat depression (called antidepressants).</li>
	<li><strong>Bladder instillation. </strong>During a bladder instillation, also called a bladder bath, your doctor uses a catheter to fill your bladder with a liquid or solution. The liquid washes the inside of your bladder for about 15 minutes before it is emptied. The bladder bath may help prevent muscle spasms that cause bladder pain and the need to urinate.</li>
	<li><strong>Nerve stimulation.</strong> Your doctor uses wires to send mild electric pulses to nerves in the bladder. The pulses may increase blood flow to the bladder and strengthen the muscles that help control the bladder. This may relieve pain and lessen the need to urinate as often.<a href="#references"><sup>11</sup></a></li>
	<li><strong>Botox injections.</strong> Your doctor injects botulinum toxin (Botox) into the muscle in the bladder lining to help the bladder relax and store more urine, or into the pelvic floor muscles if they are in spasm.<a href="#references"><sup>11</sup></a></li>
	<li><strong>Surgery.</strong> If other treatments have not worked, your doctor may suggest surgery to remove the bladder or parts of the bladder. This is usually the last and most serious treatment option. You may still have pain after surgery. An ulcer in the bladder can be treated with a simple surgery that may relieve symptoms for many months. If you have your bladder taken out, you will have to use a bag outside of your body to collect and dispose of urine.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What can I do at home to help relieve my bladder pain symptoms? ",
      content: `

    <div class="answer"><p>Your doctor will talk to you about steps you can take at home to improve your symptoms. These steps may include:<sup> <a href="#references">9</a>,<a href="#references">11</a>,<a href="#references">12</a></sup></p>

<ul>
	<li><strong>Reduce stress.</strong> Stress is the most common cause of symptom flare in women with bladder pain syndrome.<a href="#references"><sup>13</sup></a> Strategies such as meditation, physical activity, massage, and psychotherapy can help. Get tips on relieving stress in our <a href="/publications/our-publications/fact-sheet/stress-your-health.html">Stress and Your Health</a> fact sheet.</li>
	<li><strong>Change your eating habits.</strong> Some women report that limiting or <a href="#10">avoiding certain foods</a>&nbsp;relieves pain.</li>
	<li><strong>Train your bladder to go longer between bathroom visits.</strong> Keep a diary to track how often you go to the bathroom. Start by slowly adding about 15 minutes between bathroom visits. Urinate at each visit, even if you do not have to go. By gradually increasing the amount of time between visits, your bladder learns to hold more urine before it signals the need to go again.</li>
	<li><strong>Do pelvic floor muscle relaxation exercises.</strong> A doctor or physical therapist can teach you how to do this. These exercises include squatting and lying down with your knees against your chest. Pelvic floor muscle relaxation exercises are not the same thing as Kegels (exercises to strengthen pelvic floor muscles). When muscles are not given enough time to relax, Kegels may make your pain worse. If you have bladder pain you should not do Kegels without talking to your doctor first.<sup><a href="#references">9</a>,<a href="#references">11</a></sup></li>
	<li><strong>Wear looser clothing.</strong> Clothes that take pressure off the bladder may make you more comfortable.</li>
	<li><strong>Quit smoking.</strong> Coughing from long-term smoking puts pressure on the abdominal area, which can make symptoms worse. The nicotine and other chemicals absorbed into the body from cigarette smoke are removed in the urine and may also increase pain, affect your quality of sleep, and raise anxiety levels.<sup><a href="#references">14</a> </sup>&nbsp;<a href="http://www.women.smokefree.gov">Find help to quit smoking</a>.</li>
	<li><strong>Get regular physical activity.</strong> Low-impact physical activity, such as stretching, swimming, and walking, may help relieve symptoms. Physical activity can help strengthen the muscles around the bladder and help improve blood flow to the area.<a href="#references"><sup>15</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Can eating certain foods or drinks make my bladder pain symptoms worse?",
      content: `

    <div class="answer"><p>Maybe. Some people report that their symptoms start or get worse after eating certain foods or drinks, such as:<a href="#references"><sup>16</sup></a></p>

<ul>
	<li>Alcohol</li>
	<li>Tomatoes</li>
	<li>Spicy foods</li>
	<li>Chocolate</li>
	<li>Citrus fruits, such as oranges</li>
	<li>Drinks with caffeine, such as coffee or soda</li>
</ul>

<p>Keep a food diary to track your symptoms after eating certain foods or drinks. You can also stop eating foods or drinks one at a time for at least one week to see if your symptoms go away. If not, stop eating other trigger foods or drinks one at a time for one week to see which ones may be causing some of your symptoms.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Should I limit the amount of fluids I drink?",
      content: `

    <div class="answer"><p>No. Many people with bladder pain syndrome think they should drink less to relieve pain and reduce the number of times they go to the bathroom. But you need fluids, especially water, for good health. Getting enough fluids helps keep your kidneys and bladder healthy, prevent <a href="/glossary#UTI">urinary tract infection</a>s, and prevent constipation, which may make your symptoms worse.<a href="#references"><sup>9</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does bladder pain syndrome affect pregnancy?",
      content: `

    <div class="answer"><p>Some women find that their bladder pain symptoms get better during pregnancy. Others find their symptoms get worse. During pregnancy, you need to urinate more often and are at higher risk for <a href="http://www.womenshealth.gov/glossary#UTI">urinary tract infection</a>s and constipation. This can make symptoms worse for some women. Make sure you drink plenty of fluids, especially water.</p>

<p>If you are thinking about becoming pregnant, talk to your doctor about your bladder pain syndrome and any medicines you might be taking. Some medicines and treatments are not safe to use during pregnancy.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Will bladder pain syndrome affect my sex life?",
      content: `

    <div class="answer"><p>Maybe. Some women with bladder pain syndrome say that sex is uncomfortable or painful.<a href="#references"><sup>6</sup></a> Others have problems getting aroused or reaching orgasm. Talk to your doctor or nurse about different positions and lubricants you can get in the drugstore to relieve vaginal dryness during sex and ease pain.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is the latest research on bladder pain syndrome treatment? ",
      content: `

    <div class="answer"><p>Researchers continue to search for new ways to treat bladder pain. Some current studies focus on:</p>

<ul>
	<li>New medicines to treat bladder pain</li>
	<li>Meditation as a way to control bladder pain</li>
	<li>The role of genetics in bladder pain</li>
	<li>Acupuncture treatment</li>
</ul>

<p>To learn more about current bladder pain treatment studies, visit <a href="http://clinicaltrials.gov/">ClinicalTrials.gov</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about bladder pain syndrome?",
      content: `

    <div class="answer"><p>For more information about bladder pain syndrome, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.niddk.nih.gov/Pages/default.aspx">National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK), NIH, HHS</a><br>
	<strong>Phone Number:</strong> 301-496-3583</li>
	<li><a href="https://theacpa.org/" class="external-link external-popup" target="_blank">American Chronic Pain Association <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone Number</strong><strong>:</strong> 800-533-3231</li>
	<li><a href="http://www.urologyhealth.org/" class="external-link external-popup" target="_blank">Urology Care Foundation <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone Number</strong><strong>:</strong> 866-746-4282</li>
	<li><a href="http://www.ichelp.org/" class="external-link external-popup" target="_blank">Interstitial Cystitis Association <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone Number</strong><strong>:</strong> 800-435-7422</li>
	<li><a href="http://www.ic-network.com/" class="external-link external-popup" target="_blank">Interstitial Cystitis Network <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone Number</strong><strong>:</strong> 800-928-7496</li>
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
	<li>Berry, S.H., Elliott, M.N., Suttorp, M., Bogart, L.M., Stoto, M.A., Eggers, P., et al. (2011). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3513327/">Prevalence of symptoms of bladder pain syndrome/interstitial cystitis among adult females in the United States.</a> <em>Journal of Urology;</em> 186(2): 540-544.</li>
	<li>Suskind, A.M., Berry, S.H., Suttorp, M.J., Elliott, M.N., Clemens, J.Q. (2014). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4237653/">Symptom Persistence in a Community Cohort of Women with Interstitial Cystitis/Bladder Pain Syndrome (IC/BPS): 3, 6, 9 and 12 month follow up from the RICE Cohort.</a> <em>Int Urogynecol J; </em>25(12): 1639-1643.</li>
	<li>McLennan, M.T. (2014). <a href="https://www.ncbi.nlm.nih.gov/pubmed/25155120">Interstitial cystitis: epidemiology, pathophysiology, and clinical presentation.</a> <em>Obstetrics and Gynecology Clinics of North America</em>; 41(3): 395-95.</li>
	<li>Nutt, D., Wilson, S., Paterson, L. (2008). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3181883/">Sleep disorders as core symptoms of depression</a>. <em>Dialogues in Clinical Neuroscience;</em> 10(3): 329-336.</li>
	<li>Ohayon, M.M., Schatzberg, A.F. (2003). <a href="http://www.ncbi.nlm.nih.gov/pubmed/12511171">Using pain to predict depressive morbidity in the general population</a>. <em>Archives of General Psychiatry</em><em>;</em> 60(1): 39-47.</li>
	<li>Ottem, D.P., Carr, L.K., Perks, A.E., Lee, P., Teichman, J.M.H. (2007). <a href="https://www.ncbi.nlm.nih.gov/pubmed/17445633">Interstitial cystitis and female sexual dysfunction</a>. <em>Urology</em><em>;</em> 69(4): 608-610.</li>
	<li>Warren, J.W., Jackson, T.L., Langenberg, P., Meyers, D.J., Xu, J. (2004). <a href="https://www.ncbi.nlm.nih.gov/pubmed/14751339">Prevalence of interstitial cystitis in first-degree relatives of patients with interstitial cystitis</a>.&nbsp;<em>Urology</em><em>;</em> 63(1): 17-21.</li>
	<li>Yamada, T. (2003). <a href="https://www.ncbi.nlm.nih.gov/pubmed/14641416">Significance of complications of allergic diseases in young patients with interstitial cystitis</a>. <em>International Journal of Urology; </em>10(Suppl): S56-S58.</li>
	<li>Bosch, P.C., Bosch, D.C. (2014). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC4080853/#__abstractid304603title">Treating interstitial cystitis/bladder pain syndrome as a chronic disease</a>. <em>Reviews in Urology; </em>16(2): 83-87.</li>
	<li>National Kidney and Urologic Diseases Information Clearinghouse. (2017). <a href="http://kidney.niddk.nih.gov/kudiseases/pubs/interstitialcystitis/#treatments">Interstitial Cystitis/Painful Bladder Syndrome</a>.</li>
	<li>Hanno, P.M., Burks, D.A., Clemens, J.Q., Dmochowski, R.R., Erickson, D., FitzGerald, M.P., et al. (2014). <a href="http://www.auanet.org/education/guidelines/ic-bladder-pain-syndrome.cfm" class="external-link external-popup" target="_blank">Diagnosis and Treatment of Interstitial Cystitis/Bladder Pain Syndrome <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>Interstitial Cystitis Association. (2013). <a href="http://www.ichelp.org/sslpage.aspx?pid=1127" class="external-link external-popup" target="_blank">So You Have IC, Now What? <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li>Whitmore, K.E. (1994). <a href="http://www.ncbi.nlm.nih.gov/pubmed/8284835">Self-care regimens for patients with interstitial cystitis</a>. <em>Urologic Clinics of North America;</em> 21(1): 121-130.</li>
	<li>Interstitial Cystitis Association. (2015). <a href="http://www.ichelp.org/page.aspx?pid=931" class="external-link external-popup" target="_blank">Quitting Smoking <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>Interstitial Cystitis Association. (2015). <a href="http://www.ichelp.org/living-with-ic/fitness-ic/exercise-ic/" class="external-link external-popup" target="_blank">Exercise &amp; IC <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>Urology Care Foundation. (n.d.). <a href="http://www.urologyhealth.org/urology/index.cfm?article=67&amp;display=1" class="external-link external-popup" target="_blank">What is Interstitial Cystitis/Bladder Pain Syndrome? <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
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
