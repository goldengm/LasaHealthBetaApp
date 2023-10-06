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

export function anxietyPage({ navigation, ...rest }) {
  const condName = "Anxiety disorders";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Anxietydisorders.jpg?VersionId=CgQ9rfK56Ubdinf4H3SmFpTXUlB.geVw";
  const condDescription =
    "Anxiety is a feeling of worry, nervousness, or fear about an event or situation. It is a normal reaction to stress. It helps you stay alert for a challenging situation at work, study harder for an exam, or remain focused on an important speech. In general, it helps you cope. \n But anxiety can be disabling if it interferes with daily life, such as making you dread nonthreatening day-to-day activities like riding the bus or talking to a coworker. Anxiety can also be a sudden attack of terror when there is no threat.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--   <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Anxietydisorders.jpg?VersionId=CgQ9rfK56Ubdinf4H3SmFpTXUlB.geVw"></div> -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Anxiety disorders</h1>  -->
            <p><strong>Anxiety is a normal response to stress.</strong>&nbsp;But when it becomes hard to control and affects your day-to-day life, it can be disabling. Anxiety disorders affect nearly 1 in 5 adults in the United States.<sup><a href="#">1</a></sup>&nbsp;Women are more than twice as likely as men to get an anxiety disorder in their lifetime.<sup><a href="#">2</a>&nbsp;</sup>Anxiety disorders are often treated with counseling, medicine, or a combination of both. Some women also find that yoga or meditation helps with anxiety disorders.</p>

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
      title: "What is anxiety?",
      content: `

    <div class="answer"><p>Anxiety is a feeling of worry, nervousness, or fear about an event or situation. It is a normal reaction to stress. It helps you stay alert for a challenging situation at work, study harder for an exam, or remain focused on an important speech. In general, it helps you cope.</p>

<p>But anxiety can be disabling if it interferes with daily life, such as making you dread nonthreatening day-to-day activities like riding the bus or talking to a coworker. Anxiety can also be a sudden attack of terror when there is no threat.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are anxiety disorders?",
      content: `

    <div class="answer"><p>Anxiety disorders happen when excessive anxiety interferes with your everyday activities such as going to work or school or spending time with friends or family. Anxiety disorders are serious mental illnesses. They are the most common mental disorders in the United States. Anxiety disorders are more than twice as common in women as in men.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the major types of anxiety disorder?",
      content: `

    <div class="answer"><p>The major types of anxiety disorder are:</p>

<ul>
	<li><strong>Generalized anxiety disorder (GAD)</strong><strong>.</strong>&nbsp;People with&nbsp;GAD&nbsp;worry excessively about ordinary, day-to-day issues, such as health, money, work, and family. With GAD, the mind often jumps to the worst-case scenario, even when there is little or no reason to worry. Women with GAD may be anxious about just getting through the day. They may have muscle tension and other stress-related physical symptoms, such as trouble sleeping or upset stomach. At times, worrying keeps people with GAD from doing everyday tasks. Women with GAD have a higher risk of depression and other anxiety disorders than men with GAD. They also are more likely to have a family history of depression.<a href="#references"><sup>3</sup></a></li>
	<li><strong>Panic disorder</strong><strong>.</strong>&nbsp;Panic disorders are twice as common in women as in men.<a href="#references"><sup>4</sup></a>&nbsp;People with&nbsp;panic disorder&nbsp;have sudden attacks of terror when there is no actual danger. Panic attacks may cause a sense of unreality, a fear of impending doom, or a fear of losing control. A fear of one’s own unexplained physical symptoms is also a sign of panic disorder. People having panic attacks sometimes believe they are having heart attacks, losing their minds, or dying.</li>
	<li><strong>Social phobia.&nbsp;</strong>Social phobia, also called social anxiety disorder, is diagnosed when people become very anxious and self-conscious in everyday social situations. People with social phobia have a strong fear of being watched and judged by others. They may get embarrassed easily and often have panic attack symptoms.</li>
	<li><strong>Specific phobia.</strong>&nbsp;A&nbsp;specific phobia&nbsp;is an intense fear of something that poses little or no actual danger. Specific phobias could be fears of closed-in spaces, heights, water, objects, animals, or specific situations. People with specific phobias often find that facing, or even thinking about facing, the feared object or situation brings on a panic attack or severe anxiety.</li>
</ul>

<p>Some other conditions that are not considered anxiety disorders but are similar include:</p>

<ul>
	<li><strong>Obsessive-compulsive disorder (OCD)</strong><strong>.</strong>&nbsp;People with&nbsp;OCD&nbsp;have unwanted thoughts (obsessions) or behaviors (compulsions) that cause anxiety. They may check the oven or iron again and again or perform the same routine over and over to control the anxiety these thoughts cause. Often, the rituals end up controlling the person.</li>
	<li><strong>Post-traumatic stress disorder (PTSD).</strong>&nbsp;PTSD&nbsp;starts after a scary event that involved physical harm or the threat of physical harm. The person who gets PTSD may have been the one who was harmed, or the harm may have happened to a loved one or even a stranger.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets anxiety disorders?",
      content: `

    <div class="answer"><p>Anxiety disorders affect about 40 million American adults every year. Anxiety disorders also affect&nbsp;<a href="https://www.girlshealth.gov/feelings/anxious/index.html" target="_blank" title="Girlshealth.gov - Feeling anxious or worried">children and teens</a>. About 8% of teens ages 13 to 18 have an anxiety disorder, with symptoms starting around age 6.<a href="#references"><sup>5</sup></a></p>

<p>Women are more than twice as likely as men to get an anxiety disorder in their lifetime.<a href="#references"><sup>2</sup></a>&nbsp;Also, some types of anxiety disorders affect some women more than others:</p>

<ul>
	<li><strong>Generalized anxiety disorder</strong>&nbsp;(GAD) affects more American Indian/Alaskan Native women than women of other races and ethnicities. GAD also affects more white women and Hispanic women than Asian or African-American women.<sup><a href="#">6</a></sup></li>
	<li><strong>Social phobia</strong>&nbsp;and&nbsp;<strong>panic disorder</strong>&nbsp;affect more white women than women of other races and ethnicities.<a href="#references"><sup>7</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes anxiety disorders?",
      content: `

    <div class="answer"><p>Researchers think anxiety disorders are caused by a combination of factors, which may include:</p>

<ul>
	<li>Hormonal changes during the menstrual cycle</li>
	<li>Genetics. Anxiety disorders may run in families.</li>
	<li>Traumatic events. Experiencing abuse, an attack, or&nbsp;<a href="/relationships-and-safety/sexual-assault-and-rape/sexual-assault">sexual assault</a>&nbsp;can lead to serious health problems, including anxiety,&nbsp;<a href="/mental-health/mental-health-conditions/post-traumatic-stress-disorder" title="glossary - P">post-traumatic stress disorder</a>, and&nbsp;<a href="/mental-health/mental-health-conditions/depression" title="Depresion fact sheet">depression</a>.&nbsp;</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the signs and symptoms of an anxiety disorder?",
      content: `

    <div class="answer"><p>Women with anxiety disorders experience a combination of anxious thoughts or beliefs, physical symptoms, and changes in behavior, including avoiding everyday activities they used to do. Each anxiety disorder has different symptoms. They all involve a fear and dread about things that may happen now or in the future.</p>

<p>Physical symptoms may include:</p>

<ul>
	<li>Weakness</li>
	<li>Shortness of breath</li>
	<li>Rapid heart rate</li>
	<li>Nausea</li>
	<li>Upset stomach</li>
	<li>Hot flashes</li>
	<li>Dizziness</li>
</ul>

<p>Physical symptoms of anxiety disorders often happen along with other mental or physical illnesses. This can cover up your anxiety symptoms or make them worse.<a href="#references"><sup>2</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How are anxiety disorders diagnosed?",
      content: `

    <div class="answer"><p>Your doctor or nurse will ask you questions about your symptoms and your medical history. Your doctor may also do a physical exam or other tests to rule out other health problems that could be causing your symptoms.</p>

<p>Anxiety disorders are diagnosed when fear and dread of nonthreatening situations, events, places, or objects become excessive and are uncontrollable. Anxiety disorders are also diagnosed if the anxiety has lasted for at least six months and it interferes with social, work, family, or other aspects of daily life.<a href="#references"><sup>2</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How are anxiety disorders treated?",
      content: `

    <div class="answer"><p>Treatment for anxiety disorders depends on the type of anxiety disorder you have and your personal history of health problems, violence, or abuse.</p>

<p>Often, treatment may include:</p>

<ul>
	<li><a href="/mental-health/mental-health-conditions/anxiety-disorders/#9">Counseling (called psychotherapy)</a></li>
	<li><a href="/mental-health/mental-health-conditions/anxiety-disorders/#10">Medicine</a></li>
	<li>A combination of counseling and medicine &nbsp;</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does counseling help treat anxiety disorders?",
      content: `

    <div class="answer"><p>Your doctor may refer you for a type of counseling for anxiety disorders called cognitive behavioral therapy (CBT). You can talk to a trained mental health professional about what caused your anxiety disorder and how to deal with the symptoms.<a href="#references"><sup>2</sup></a></p>

<p>For example, you can talk to a psychiatrist, psychologist, social worker, or counselor. CBT can help you change the thinking patterns around your fears. It may help you change the way you react to situations that may create anxiety. You may also learn ways to reduce feelings of anxiety and improve specific behaviors caused by chronic anxiety. These strategies may include relaxation therapy and problem solving.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What types of medicine treat anxiety disorders?",
      content: `

    <div class="answer"><p>Several types of medicine treat anxiety disorders. These include:</p>

<ul>
	<li><strong>Antianxiety (benzodiazepines).</strong>&nbsp;These medicines are usually prescribed for short periods of time because they are addictive. Stopping this medicine too quickly can cause withdrawal symptoms.</li>
	<li><strong>Beta blockers.</strong>&nbsp;These medicines can help prevent the physical symptoms of an anxiety disorder, like trembling or sweating.<a href="#references"><sup>8</sup></a></li>
	<li><strong>Selective serotonin reuptake inhibitors (SSRIs).</strong>&nbsp;SSRIs change the level of serotonin in the brain.<a href="#references"><sup>2</sup></a>&nbsp;They increase the amount of serotonin available to help brain cells communicate with each other. Common side effects can include insomnia or sedation, stomach problems, and a lack of sexual desire.</li>
	<li><strong>Tricyclics</strong>. Tricylics work like SSRIs. But sometimes they cause more side effects than SSRIs. They may cause dizziness, drowsiness, dry mouth, constipation, or weight gain.</li>
	<li><strong>Monoamine oxidase inhibitors (MAOIs).</strong>&nbsp;People who take MAOIs must avoid certain foods and drinks (like Parmesan or cheddar cheese and red wine) that contain an amino acid called tyramine. Taking an MAOI and eating these foods can cause blood pressure levels to spike dangerously. Women who take MAOIs must also avoid certain medicines, such as some types of birth control pills, pain relievers, and cold and allergy medicines.<sup><a href="#">12</a>&nbsp;</sup>Talk to your doctor about any medicine you take.</li>
</ul>

<p>All medicines have risks. You should talk to your doctor about the benefits and risks of all medicines. Learn more about&nbsp;<a href="http://www.nimh.nih.gov/health/topics/anxiety-disorders/index.shtml#part3" target="_blank" title="NIMH » Anxiety Disorders">medicines to treat anxiety disorders</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What if my anxiety disorder treatment is not working?",
      content: `

    <div class="answer"><p>Sometimes, you may need to work with your doctor to try several different treatments or combinations of treatments before you find one that works for you.</p>

<p>If you are having trouble with side effects from medicines, talk to your doctor or nurse. Do not stop taking your medicine without talking to a doctor or nurse. Your doctor may adjust how much medicine you take and when you take it.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What if my anxiety disorder comes back?",
      content: `

    <div class="answer"><p>Sometimes symptoms of an anxiety disorder come back after you have finished treatment. This may happen during or after a stressful event. It may also happen without any warning.</p>

<p>Many people with anxiety disorders do get better with treatment. But, if your symptoms come back, your doctor will work with you to change or adjust your medicine or treatment plan.</p>

<p>You can also talk to your doctor about ways to identify and prevent anxiety from coming back. This may include writing down your feelings or meeting with your counselor if you think your anxiety is uncontrollable.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Can complementary or alternative medicine help manage anxiety disorders?",
      content: `

    <div class="answer"><p>Maybe. Some women say that&nbsp;<a href="https://nccih.nih.gov/health/integrative-health" target="_blank" title="Complementary, Alternative, or Integrative Health: What's In a Name? | NCCIH">complementary or alternative medicine (CAM)</a>&nbsp;therapies helped lower their anxiety.</p>

<p>CAM therapies that may help anxiety include:</p>

<ul>
	<li><strong>Physical activity.</strong>&nbsp;Regular physical activity raises the level of brain chemicals that control mood and affect anxiety and depression.<sup><a href="/a-z-topics/anxiety-disorders#references">9</a></sup>&nbsp;Many studies show that all types of physical activity, including yoga and Tai Chi, help reduce anxiety.<a href="#references"><sup>10</sup></a></li>
	<li><strong>Meditation.</strong>&nbsp;Studies show meditation may improve anxiety.<a href="#references"><sup>11</sup></a>&nbsp;Regular meditation may help by boosting activity in the area of your brain responsible for feelings of serenity and joy.</li>
</ul>

<p><a href="https://nccih.nih.gov/health/moreinfo/41/3888" target="_blank" title="Information for Consumers About Anxiety | NCCIH">Learn more about CAM therapies for anxiety disorders</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Will my anxiety disorder treatment affect my pregnancy?",
      content: `

    <div class="answer"><p>If your treatment is counseling, it will not affect your pregnancy.</p>

<p>If you are on medicine to treat your anxiety disorder, talk to your doctor. Some medicines used to treat anxiety can affect your unborn baby.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "If I take medicine to treat my anxiety disorder, can I breastfeed my baby?",
      content: `

    <div class="answer"><p>It depends. Some medicines used to treat anxiety can pass through breastmilk. Certain antidepressants, such as some SSRIs, are safe to take during breastfeeding.</p>

<p>Do not stop taking your medicine too quickly. Talk to your doctor to find out what medicine is best for you and your baby. Learn more about medicines and breastfeeding in our&nbsp;<a href="/breastfeeding" title="Breastfeeding and everyday life">Breastfeeding</a>&nbsp;section. You can also enter your medicine into the&nbsp;<a href="http://toxnet.nlm.nih.gov/newtoxnet/lactmed.htm" target="_blank" title="LactMed">LactMed® database</a>&nbsp;to find out if your medicine passes through your breastmilk and any possible side effects for your nursing baby.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do anxiety disorders affect other health conditions?",
      content: `

    <div class="answer"><p>Anxiety disorders may affect other health problems that are common in women. These include:</p>

<ul>
	<li><strong><a href="/mental-health/mental-health-conditions/depression">Depression</a>.</strong>&nbsp;Anxiety disorders can happen at the same time as depression. When this happens, treatment for both anxiety and depression may not be as effective. You may need a combination of treatments, such as counseling and medicine.</li>
	<li><strong><a href="/a-z-topics/irritable-bowel-syndrome">Irritable bowel syndrome (IBS)</a>.</strong>&nbsp;IBS symptoms are common in people with anxiety disorders. Generalized anxiety disorder is also common among people with IBS.<sup><a href="#">12</a>&nbsp;</sup>Worry can make IBS symptoms worse, especially gastrointestinal (GI) symptoms such as upset stomach or gas. GI symptoms can also be stressful and lead to more anxiety. Although treatments for IBS can help treat anxiety, it’s important that you treat both conditions.<a href="#references"><sup>13</sup></a></li>
	<li><strong>Chronic pain.</strong>&nbsp;Anxiety disorders are common in women with certain diseases that cause chronic pain, including&nbsp;rheumatoid arthritis,&nbsp;<a href="/a-z-topics/fibromyalgia">fibromyalgia</a>, and&nbsp;<a href="/a-z-topics/migraine">migraine</a>.</li>
	<li><a href="/heart-disease-and-stroke"><strong>Cardiovascular disease</strong></a><strong>.</strong>&nbsp;Anxiety and depression increase the risk for heart disease, the leading cause of death for American women. Anxiety can also make recovery harder after a heart attack or stroke.</li>
	<li><strong>Asthma.</strong>&nbsp;Studies link asthma to anxiety disorders. Stress and anxiety can trigger asthma attacks while the shortness of breath and wheezing during asthma attacks can cause anxiety. Studies show that breathing retraining may help asthma control and ease anxiety.<a href="#references"><sup>14</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is the latest research on anxiety disorders and women?",
      content: `

    <div class="answer"><p>Researchers are studying why women are more than twice as likely as men to develop anxiety disorders and depression. Changes in levels of the hormone estrogen throughout a woman's menstrual cycle and reproductive life (during the years a woman can have a baby) probably play a role.</p>

<p>Researchers also recently studied the male hormone testosterone, which is found in women and men but typically in higher levels in men. They found that treatment with testosterone had similar effects as antianxiety and antidepressant medicine for the women in the study.<a href="#references"><sup>15</sup></a></p>

<p>Other research focuses on anxiety disorders and depression during and after pregnancy and among overweight and obese women. For more clinical trials related to anxiety disorders and women, visit&nbsp;<a href="http://clinicaltrials.gov/ct2/results?term=anxiety+disorders+and+women&amp;Search=Search" target="_blank" title="ClinicalTrials search results anxiety disorders and women">ClinicalTrials.gov</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about anxiety disorders?",
      content: `

    <div class="answer"><p>For more information on anxiety disorders, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.mentalhealth.gov/" title="Mentalhealth.gov - Lets talk about">MentalHealth.gov, HHS</a></li>
	<li><a href="http://www.nimh.nih.gov/health/topics/anxiety-disorders/" title="What are anxiety disorders?">National Institute of Mental Health (NIMH), NIH, HHS</a>&nbsp;<br>
	Phone Number:&nbsp;866-615-6464</li>
	<li><a href="http://www.adaa.org/" title="Anxiety and Depression Association of America, ADAA | Anxiety Disorders are real, serious, and treatable" class="external-link external-popup" target="_blank">Anxiety and Depression Association of America <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;<br>
	&nbsp;Phone Number:&nbsp;240-485-1001</li>
	<li><a href="http://www.nami.org/" title="NAMI: The National Alliance on Mental Illness<br />
                    " class="external-link external-popup" target="_blank">National Alliance on Mental Illness <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 800-950-6264</li>
	<li><a href="http://www.mhselfhelp.org/" title="National Mental Health Clearinghouse - Home" class="external-link external-popup" target="_blank">National Mental Health Consumers' Self-Help Clearinghouse <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;<br>
	Phone Number:&nbsp;800-553-4539</li>
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
	<li>McLean, C.P., Asnaani, A., Litz, B.T., Hofmann, S.G. (2011).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3135672/#__abstractid681120title">Gender Differences in Anxiety Disorders: Prevalence, Course of Illness, Comorbidity and Burden of Illness</a>.&nbsp;<em>Journal of Psychiatric Research;&nbsp;</em>45(8): 1027-1035.</li>
	<li>National Institute of Mental Health. (2015).&nbsp;<a href="http://www.nimh.nih.gov/health/topics/anxiety-disorders/index.shtml">What are Anxiety Disorders?</a></li>
	<li>Vesga-Lopez, O., Schneier, F.R., Wang, S., Heimberg, R.G., Liu, S.M., Hasin, D.S., Blanco, C. (2008).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/19192444">Gender differences in generalized anxiety disorder: results from the National Epidemiologic Survey on Alcohol and Related Conditions (NESARC)</a>.&nbsp;<em>Journal of Clinical Psychiatry;&nbsp;</em>69(10): 1606-16.</li>
	<li>National Library of Medicine. (2013).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmedhealth/PMH0001922/">Panic disorder</a>.</li>
	<li>National Institute of Mental Health. (n.d.)&nbsp;<a href="http://www.nimh.nih.gov/health/publications/anxiety-disorders-in-children-and-adolescents/index.shtml">Anxiety Disorders in Children and Adolescents (Fact Sheet)</a>.</li>
	<li>Centers for Disease Control and Prevention. (2011).&nbsp;<a href="http://www.cdc.gov/mmwr/preview/mmwrhtml/su6003a1.htm">Mental illness surveillance among adults in the United States</a>.&nbsp;<em>Morbidity and Mortality Weekly Report, 60</em>(3), 1–32.</li>
	<li>Asnaani, A., Richey, J.A., Dimaite, R., Hinton, D.E., Hofmann, S.G. (2010).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2931265/">A Cross-Ethnic Comparison of Lifetime Prevalence Rates of Anxiety Disorders</a>.&nbsp;<em>J Nerv Ment Dis;&nbsp;</em>198(8): 551-555.</li>
	<li>National Institute of Mental Health. (2015).&nbsp;<a href="http://www.nimh.nih.gov/health/publications/mental-health-medications/index.shtml#pub7">Mental health medications.</a></li>
	<li>Anderson, E., Shivakumar, G. (2013).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3632802/">Effects of Exercise and Physical Activity on Anxiety</a>.&nbsp;<em>Frontiers in Psychiatry;&nbsp;</em>4:27.</li>
	<li>Harner, H., Hanlon, A.L., Garfinkel, M. (2010).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/20842067">Effect of lyengar yoga on mental health of incarcerated women: a feasibility study</a>.&nbsp;<em>Nursing Research;&nbsp;</em>59(6): 389-99.</li>
	<li>National Center for Complementary and Integrative Health. (2014).&nbsp;<a href="https://nccih.nih.gov/health/meditation/overview.htm">Meditation: What You Need to Know</a>.</li>
	<li>Lackner, J. M., Ma, C. X., Keefer, L., Brenner, D. M.,&nbsp;Gudleski, G. D.,&nbsp;Satchidanand, N., … Mayer, E. A. (2013<em>).&nbsp;</em><a href="http://www.ncbi.nlm.nih.gov/pubmed/23524278">Type, rather than number, of mental and physical comorbidities increases the severity of symptoms in patients with irritable bowel syndrome</a>.&nbsp;<em>Clinical Gastroenterology and Hepatology, 11</em>(9), 1147–1157.</li>
	<li>Kaplan, A., Franzen, M. D., Nickell, P. V., Ransom, D., &amp; Lebovitz, P. J. (2014).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/23980534">An open-label trial of duloxetine in patients with irritable bowel syndrome and comorbid generalized anxiety disorder</a>.&nbsp;<em>International Journal of Psychiatry in Clinical Practice,</em><em>&nbsp;18</em>(1), 11–15.</li>
	<li>American Psychological Association. (2013).&nbsp;<a href="http://www.apa.org/monitor/2013/11/breathing.aspx" class="external-link external-popup" target="_blank">Breathing easier <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>McHenry, J., Carrier, N., Hull, E., &amp; Kabbaj, M. (2014).&nbsp;<a href="http://www.ncbi.nlm.nih.gov/pubmed/24076484">Sex differences in anxiety and depression: role of testosterone</a>.&nbsp;<em>Frontiers in Neuroendocrinology, 35</em>(1), 42–57.</li>
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
