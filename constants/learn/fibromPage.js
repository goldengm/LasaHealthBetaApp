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

export function fibromPage({ navigation, ...rest }) {
  const condName = "Fibromyalgia";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Fibromyalgia.jpg?VersionId=r5zBIi7DpcAAPNyBddx50oqznjbsi24C";
  const condDescription =
    "Fibromyalgia is also called fibromyalgia syndrome. A syndrome is a group of symptoms that happen together. People with fibromyalgia experience aches and pain all over the body, fatigue (extreme tiredness that does not get better with sleep or rest), and problems sleeping. \n Fibromyalgia may be caused by a problem in the brain with nerves and pain signals. In other words, in people with fibromyalgia, the brain misunderstands everyday pain and other sensory experiences, making the person more sensitive to pressure, temperature (hot or cold), bright lights, and noise compared to people who do not have fibromyalgia. \n Fibromyalgia has been compared to arthritis. Like arthritis, fibromyalgia causes pain and fatigue. But, unlike arthritis, fibromyalgia does not cause redness and swelling, or damage to your joints.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Fibromyalgia.jpg?VersionId=r5zBIi7DpcAAPNyBddx50oqznjbsi24C"></div>    -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Fibromyalgia</h1>  -->
            <p><strong><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="(fye-bro-mye-AL-ja)">Fibromyalgia</a>, or fibromyalgia syndrome, is a condition that causes aches and pain all over the body. </strong>People with fibromyalgia often experience other symptoms, such as extreme tiredness or sleeping, mood, or memory problems. Fibromyalgia affects more women than men. The pain, extreme tiredness, and lack of sleep that fibromyalgia causes can affect your ability to work or do daily activities. Treatment can help relieve pain and help prevent flare-ups of symptoms.</p>

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
      title: "What is fibromyalgia?",
      content: `

    <div class="answer"><p>Fibromyalgia&nbsp;is also called fibromyalgia syndrome. A syndrome is a group of symptoms that happen together. People with fibromyalgia experience aches and pain all over the body, fatigue (extreme tiredness that does not get better with sleep or rest), and problems sleeping.</p>

<p>Fibromyalgia may be caused by a problem in the brain with nerves and pain signals. In other words, in people with fibromyalgia, the brain misunderstands everyday pain and other sensory experiences, making the person more sensitive to pressure, temperature (hot or cold), bright lights, and noise compared to people who do not have fibromyalgia.</p>

<p>Fibromyalgia has been compared to arthritis. Like arthritis, fibromyalgia causes pain and fatigue. But, unlike arthritis, fibromyalgia does not cause redness and swelling, or damage to your joints.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets fibromyalgia?",
      content: `

    <div class="answer"><p>Fibromyalgia affects as many as 4 million Americans 18 and older.<a href="#references"><sup>1</sup></a>&nbsp;The average age range at which fibromyalgia is diagnosed is 35 to 45 years old, but most people have had symptoms, including chronic pain, that started much earlier in life.</p>

<p>Fibromyalgia is more common in women than in men.<a href="#references"><sup>1,2</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Are some women more at risk for fibromyalgia?",
      content: `

    <div class="answer"><p>Maybe. Fibromyalgia is more common in people who:<a href="#references"><sup>1</sup></a></p>

<ul>
	<li>Have obesity</li>
	<li>Smoke</li>
	<li>Have another rheumatic (related to the joints) condition, such as <a href="/glossary#rheumatoid" title="glossary">rheumatoid arthritis</a>&nbsp;or <a href="/glossary#lupus" title="glossary">lupus</a></li>
	<li>Have a close relative with fibromyalgia. Researchers think a gene or genes may cause pain when pain would not normally happen.</li>
	<li>Have or had trauma to the brain or spinal cord. Physical trauma may come from an injury or repeated injuries, illness, or an accident. Emotional stress or trauma, such as post-traumatic stress disorder, may also lead to fibromyalgia.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of fibromyalgia?",
      content: `

    <div class="answer"><p>Chronic (long-term), widespread pain is the most common symptom of fibromyalgia. You may feel the pain all over your body. Or, you may feel it more in the muscles you use most often, like in your back or legs. The pain may feel like a deep muscle ache, or it may throb or burn. Your pain may also be worse in the morning.</p>

<p>Other symptoms of fibromyalgia include:<a href="#references"><sup>3,4,5</sup></a></p>

<ul>
	<li>Extreme tiredness, called fatigue, that does not get better with sleep or rest</li>
	<li>Cognitive and memory problems (sometimes called “fibro fog”)<a href="#references"><sup>3</sup></a></li>
	<li>Trouble sleeping<a href="#references"><sup>6</sup></a></li>
	<li>Mood problems</li>
	<li>Morning <a href="/glossary#fatigue" title="glossary">fatigue</a></li>
	<li>Muscle fatigue, causing them to twitch or cramp</li>
	<li>Headaches</li>
	<li><a href="/a-z-topics/irritable-bowel-syndrome">Irritable bowel syndrome</a> (IBS)</li>
	<li>Painful menstrual periods</li>
	<li>Numbness or tingling of hands and feet</li>
	<li><a href="/glossary#restless_leg_syndrome" title="glossary">Restless legs syndrome</a></li>
	<li>Temperature sensitivity</li>
	<li>Sensitivity to loud noises or bright lights</li>
	<li><a href="/a-z-topics/depression">Depression</a>&nbsp;or <a href="/node/">anxiety</a><a href="#references"><sup>7</sup></a></li>
</ul>

<p>Women with fibromyalgia often have more morning fatigue, pain all over the body, and IBS symptoms than men with fibromyalgia have.<a href="#references"><sup>8</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes fibromyalgia symptoms to flare?",
      content: `

    <div class="answer"><p>Fibromyalgia symptoms can happen without warning. But certain events may trigger flare-ups, including:</p>

<ul>
	<li><strong>Hormonal changes during the menstrual cycle or pregnancy.</strong> You may have more trouble sleeping, more widespread pain, or headaches just before your period when your hormone levels drop. Your periods may also be more painful.<a href="#references"><sup>9</sup></a></li>
	<li><strong><a href="/a-z-topics/stress-and-your-health">Stress</a><strong>.</strong> </strong>Chronic (long-term) stress may raise your risk for getting fibromyalgia.<a href="#references"><sup>7</sup></a> Also, short-term stress, such as work stress, or stressful events, such as a death of a loved one, can trigger flare-ups in people who have fibromyalgia.</li>
	<li><strong>Changes in weather.</strong> Some women report pain with changes in barometric pressure (such as when the temperature drops from warm to cold) or on hot, humid days.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes fibromyalgia?",
      content: `

    <div class="answer"><p>Researchers are not sure exactly what causes fibromyalgia. Genetics may play a role.</p>

<p>Studies also show that the brains of people with fibromyalgia may not process pain in the same way as people who do not have fibromyalgia. Lower levels of certain brain neurotransmitters, such as serotonin or norepinephrine, may cause you to be more sensitive to pain and have a more severe reaction to pain. Imaging studies of the brain show that people with fibromyalgia feel pain when people without fibromyalgia do not.<a href="#references"><sup>10</sup></a> Some medicines prescribed to treat fibromyalgia try to bring the levels of those neurotransmitters back into balance.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is fibromyalgia diagnosed?",
      content: `

    <div class="answer"><p>Your doctor or nurse will ask about your symptoms and your medical history. There is no lab test for fibromyalgia. Instead, your doctor will make a diagnosis based upon two criteria:</p>

<ol>
	<li><strong>You have experienced widespread (in many places on the body) pain for longer than three months. </strong></li>
	<li><strong>You have other symptoms, such as fatigue, or memory or sleep problems. </strong></li>
</ol>

<p>You may have to see several doctors before getting a diagnosis. One reason for this may be that pain and fatigue, the main symptoms of fibromyalgia, also are symptoms of many other conditions, such as <a href="/a-z-topics/chronic-fatigue-syndrome">myalgic encephalomyelitis/chronic fatigue syndrome</a>, <a href="/glossary#rheumatoid">rheumatoid arthritis</a>, and <a href="/glossary#lupus">lupus</a>. Doctors try to figure out if fibromyalgia or another health problem is causing your symptoms.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is fibromyalgia treated?",
      content: `

    <div class="answer"><p>Treatment for fibromyalgia may include:</p>

<ul>
	<li><strong>Medicine to treat your pain. </strong>The Food and Drug Administration has approved <a href="http://www.fda.gov/ForConsumers/ConsumerUpdates/ucm107802.htm" title="Living with Fibromyalgia: Drugs Approved to Manage Pain">three medicines to treat fibromyalgia</a>: pregabalin, duloxetine, and milnacipran. Your doctor may also suggest pain relievers or antidepressants to treat certain symptoms or to prevent flare-ups.</li>
	<li><strong>Talk therapy. </strong>Counseling sessions with a trained counselor can teach you different skills and techniques you can use to better control your pain. This type of therapy can be either one on one or in groups with a therapist. Living with a chronic condition like fibromyalgia can be difficult. Support groups may also give you emotional support and help you cope.</li>
</ul>

<p>Your doctor or nurse may also suggest <a href="#9">taking steps at home</a> to relieve your symptoms.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What steps can I take at home to relieve fibromyalgia symptoms? ",
      content: `

    <div class="answer"><p>You can take the following steps at home to help relieve your symptoms:</p>

<ul>
	<li><strong>Getting enough sleep.</strong> Most adults should try to get seven to eight hours of sleep every night. But fibromyalgia can make it hard to fall asleep and stay asleep. Talk to your doctor about any sleep problems you have and ways to treat them. Your doctor may recommend:

	<ul>
		<li>Going to bed at the same time and getting up at the same time every day</li>
		<li>Not drinking caffeine, alcohol, or eating spicy meals before bedtime</li>
		<li>Not taking daytime naps</li>
		<li>Doing relaxing activities, such as listening to soft music or taking a warm bath, that prepare your body for sleep.</li>
	</ul>
	</li>
	<li><strong>Reducing stress.</strong> Stress can trigger a flare-up of fibromyalgia symptoms. Strategies such as meditation, massage, and talk therapy may help. Get <a href="/a-z-topics/stress-and-your-health">tips on relieving stress</a>.</li>
	<li><strong>Getting regular physical activity.</strong> Pain and fatigue may make exercise and daily activities harder to do. But studies show that for many women with fibromyalgia, regular physical activity can reduce pain.<a href="#references"><sup>11</sup></a> Any activity, even walking around your home or neighborhood, can help relieve your symptoms. Start at a very low level, and slowly increase the amount of activity you get.</li>
	<li><strong>Trying complementary or alternative therapies. </strong>Some women say their symptoms got better from trying complementary or alternative therapies, such as:
	<ul>
		<li>Physical therapy</li>
		<li>Massage</li>
		<li>Myofascial release therapy</li>
		<li>Acupuncture</li>
		<li>Relaxation exercises</li>
		<li>Tai chi</li>
		<li>Yoga</li>
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
      title: "Will fibromyalgia get better with time?",
      content: `

    <div class="answer"><p>Maybe. Fibromyalgia is a chronic disease that is often a lifelong condition. But fibromyalgia is not a progressive disease, meaning it will not get worse over time. It also does not cause damage to your joints, muscles, or organs.</p>

<p>Taking steps to <a href="#8">treat fibromyalgia</a> can help relieve your symptoms.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does fibromyalgia affect pregnancy?",
      content: `

    <div class="answer"><p>Many women with fibromyalgia have no problems getting pregnant, and some women report that their symptoms get better during pregnancy.</p>

<p>But, for some women, fibromyalgia can cause problems during pregnancy. Your symptoms may flare or get worse, especially in the first few months of pregnancy. Also, some normal pregnancy complaints, such as fatigue, stress, and mood swings caused by changing hormones, may be worse for women with fibromyalgia.</p>

<p>Talk to your doctor about any medicines you take to treat fibromyalgia, as they may cause other health problems for you or your unborn baby.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What is the difference between fibromyalgia and chronic fatigue syndrome?",
      content: `

    <div class="answer"><p><a href="/a-z-topics/chronic-fatigue-syndrome">Myalgic encephalomyelitis/chronic fatigue syndrome</a>&nbsp;(ME/CFS) and fibromyalgia are similar in many ways. A person can have&nbsp;fibromyalgia and ME/CFS. Both ME/CFS and fibromyalgia have pain and fatigue as symptoms.</p>

<p>But the main symptom of fibromyalgia is pain, and the main symptom of ME/CFS is extreme tiredness that does not get better with sleep and rest, also called fatigue.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Will I still be able to work with fibromyalgia?",
      content: `

    <div class="answer"><p>Usually. Most people with fibromyalgia continue to work, but you may have to make changes to do so. You can cut down the number of hours you work, switch to a less demanding job, or adapt a current job. If you face challenges at work, an occupational therapist can help you design a more comfortable workstation or find more efficient and less painful ways to do your job. A number of federal laws&nbsp;<a href="https://www.ada.gov/cguide.htm" title="A Guide to Disability Rights Laws">protect your rights</a>.</p>

<p>However, if you cannot work because of your fibromyalgia, you may qualify for disability benefits through your employer or the <a href="http://www.ssa.gov/" title="The United States Social Security Administration">Social Security Administration</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about fibromyalgia?",
      content: `

    <div class="answer"><p>For more information about fibromyalgia, call the OWH Helpline at&nbsp;800-994-9662&nbsp;or contact the following organizations:</p>

<ul>
	<li><strong><a href="http://www.cdc.gov/arthritis/basics/fibromyalgia.htm" title="Fibromyalgia Fact Sheet">Centers for Disease Control and Prevention</a> (CDC), HHS</strong><br>
	Phone Number:&nbsp;800-232-4636</li>
	<li><strong><a href="https://www.niams.nih.gov/Health_Info/Fibromyalgia/default.asp" title="Questions and Answers About Fibromyalgia">National Institute of Arthritis and Musculoskeletal and Skin Diseases</a> (NIAMS), NIH, HHS</strong><br>
	Phone Number:&nbsp;877-226-4267</li>
	<li><strong><a href="http://www.arthritis.org/" title="Arthritis Foundation" class="external-link external-popup" target="_blank">Arthritis Foundation <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	Phone Number:&nbsp;800-283-7800</li>
	<li><strong><a href="http://www.fmaware.org/" title="National Fibromyalgia Association" class="external-link external-popup" target="_blank">National Fibromyalgia Association <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;(NFA)</strong></li>
	<li><strong><a href="http://www.fmpartnership.org/" title="Fibromyalgia Partnership, Inc." class="external-link external-popup" target="_blank">National Fibromyalgia Partnership, Inc. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	Phone Number: 866-725-4404</li>
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
	<li>Walitt, B., Nahin, R.L., Katz, R.S., Bergman, M.J., Wolfe, F. (2015). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC4575027/#__ffn_sectitle">The Prevalence and Characteristics of Fibromyalgia in the 2012 National Health Interview Survey.</a> <em>PLoS One; </em>10(9): e0138024.</li>
	<li>Lawrence, R.C., Felson, T., Helmick, C.G., et al. (2008). <a href="https://www.ncbi.nlm.nih.gov/pubmed/18163497">Estimates of the prevalence of arthritis and other rheumatic conditions in the United States.&nbsp;</a><em>Arthritis Rheum.</em>&nbsp;2008;<em>58</em>(1):26-35.&nbsp;</li>
	<li>Wolfe, F., Clauw, D.J., Fitzcharles, M.A., et al. (2010). <a href="https://www.ncbi.nlm.nih.gov/pubmed/20461783">The American College of Rheumatology preliminary diagnostic criteria for fibromyalgia and measurement of symptom severity.&nbsp;</a><em>Arthritis Care Res (Hoboken)</em>;<em>62</em>(5):600-610.&nbsp;</li>
	<li>Bennett, R.M. (2009). <a href="https://www.ncbi.nlm.nih.gov/pubmed/19647138">Clinical manifestations and diagnosis of fibromyalgia.</a>&nbsp;<em>Rheum Dis Clin North Am</em>;35(2):215-232.</li>
	<li>Smith, H.S., Harris, R., Clauw, D. (2011). <a href="https://www.ncbi.nlm.nih.gov/pubmed/21412381">Fibromyalgia: an afferent processing disorder leading to a complex pain generalized syndrome.</a>&nbsp;<em>Pain Physician</em>;<em>14</em>(2):E217-E245.</li>
	<li>Moldofsky, H. (2009). <a href="https://www.ncbi.nlm.nih.gov/pubmed/19647142">The significance of dysfunctions of the sleep/waking brain to the pathogenesis and treatment of fibromyalgia syndrome.&nbsp;</a><em>Rheum Dis Clin North Am.</em>&nbsp;2009;<em>35</em>(2):275-283.&nbsp;</li>
	<li>Hawkins, R.A. (2013). <a href="http://jaoa.org/article.aspx?articleid=2094606" class="external-link external-popup" target="_blank">Fibromyalgia: A Clinical Update. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> <em>The Journal of the American Osteopathic Association; </em>113:680-689.</li>
	<li>Yunus, M.B. (2002). <a href="https://www.ncbi.nlm.nih.gov/labs/articles/11974674/">Gender Differences in Fibromyalgia and Other Related Syndromes.</a> <em>J Gend Specif Med; </em>5(2): 42-47.</li>
	<li>Alonso, C. (2004). <a href="http://www.sciencedirect.com/science/article/pii/S0022399904004842" class="external-link external-popup" target="_blank">Menstrual cycle influences on pain and emotion in women with fibromyalgia. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> <em>Journal of Psychosomatic Research; </em>57(5): 451-458.</li>
	<li>Clauw, D.J., Arnold, L.M., McCarberg, B.H. (2011). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3258006/">The Science of Fibromyalgia</a>. <em>Mayo Clinic Proceedings; </em>86(9): 907-911.&nbsp;</li>
	<li>Busch, A.J., Webber, S.C., Richards, R.S., Bidonde, J., Schachter, C.L., Danyliw, A., et al. (2013). <a href="http://www.ncbi.nlm.nih.gov/pubmed/24362925">Resistance exercise training for fibromyalgia</a>. <em>Cochrane Database Syst Rev; </em>12: CD010884.</li>
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
