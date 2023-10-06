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

export function myastheniaPage({ navigation, ...rest }) {
  const condName = "Myasthenia gravis";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Myastheniagravis.jpg?VersionId=jbdgP8acz7Ej_HRt62n6U1smLXyk4UB.";
  const condDescription =
    "Myasthenia gravis (MG) is an autoimmune disease that weakens the muscles. The name comes from Greek and Latin words meaning 'grave muscle weakness.' But most cases of MG are not as 'grave' as the name implies. In fact, most people with MG can expect to live normal lives.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Myastheniagravis.jpg?VersionId=jbdgP8acz7Ej_HRt62n6U1smLXyk4UB."></div>  -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Myasthenia gravis</h1>  -->
            <p><strong>Myasthenia gravis (MG) is an&nbsp;<a href="/a-z-topics/autoimmune-diseases">autoimmune disease</a>&nbsp;that weakens the muscles.</strong> The name comes from Greek and Latin words meaning "grave muscle weakness." But most cases of MG are not as "grave" as the name implies. In fact, most people with MG can expect to live normal lives.</p>

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
      title: "What is MG?",
      content: `

    <div class="answer"><p>When you have MG, your muscles weaken with activity. Muscle strength returns with rest. MG usually affects the muscles that control:</p>

<ul>
	<li>Eye and eyelid movement</li>
	<li>Facial expression</li>
	<li>Chewing</li>
	<li>Talking</li>
	<li>Swallowing</li>
	<li>Arms and legs</li>
</ul>

<p>The muscles that control breathing and neck movements also may be affected.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes MG?",
      content: `

    <div class="answer"><p>With MG, normal communication between the nerve and muscle is stopped at the place where nerve endings connect with the muscles they control — the nerve-muscle junction. Normally, the nerve endings release a substance called&nbsp;<em>acetylcholine</em>&nbsp;(uh-SET-uhl-KOH-LEEN), which binds to the muscle tissue at the nerve-muscle junction, causing the muscle to contract (move). In someone with MG, the body's own immune system makes&nbsp;<a href="/glossary#antibodies">antibodies</a>&nbsp;that block the binding of acetylcholine to the muscle.</p>

<p>The thymus gland, part of the immune system, is abnormal in most MG cases. Some people with MG have&nbsp;<a href="/glossary#benign">benign</a>&nbsp;tumors of the thymus gland called&nbsp;<em>thymomas.</em>&nbsp;Doctors do not fully understand the relationship between the thymus gland and MG.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets MG?",
      content: `

    <div class="answer"><p>Estimates of the number of people affected by MG vary, ranging from 5 to 14 people per 100,000. It occurs in all ethnic groups and both sexes. It most commonly occurs in:</p>

<ul>
	<li>Young adult women (under 40)</li>
	<li>Older men (over 60)</li>
</ul>

<p>MG can occur at any age. Children sometimes develop it as well.</p>

<p>MG is not passed down through the family. You can't "catch it" from someone who has it. The disease rarely occurs in more than one member of the same family. If a woman with MG becomes pregnant, sometimes the baby gets antibodies from the mother and has MG symptoms for a few weeks or months after birth. This is called&nbsp;<em>neonatal myasthenia</em>. The symptoms can be treated and the baby does not have permanent MG.</p>

<p>A group of rare disorders called&nbsp;<em>congenital myasthenic syndromes (CMS)</em>&nbsp;can produce symptoms similar to MG. Unlike MG, these disorders are not autoimmune disorders but are caused by defective genes. Because of these genes, the nerve-muscle junctions in the body cannot work properly. CMS usually starts at or near birth. But it can start in childhood or even adulthood.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the signs and symptoms of MG?",
      content: `

    <div class="answer"><p>MG can affect any muscle, but the muscles that control eye and eyelid movement, facial expression, and swallowing are most often affected. In some people, the first symptom is weakness of the eye muscles. In others, having a hard time swallowing, talking, and breathing can be the first signs. Different people have different levels of muscle weakness. Symptoms may include:</p>

<ul>
	<li>Drooping of one or both eyelids</li>
	<li>Blurred or double vision</li>
	<li>Problems walking</li>
	<li>Weakness in arms, hands, fingers, legs, and neck</li>
	<li>Change in facial expression</li>
	<li>Having a hard time swallowing</li>
	<li>Trouble talking</li>
	<li>Shortness of breath (feeling like you can't get enough air)</li>
</ul>

<p>The onset of the disorder may be sudden. And the symptoms often are not immediately recognized as MG.</p>

<p>Some drugs can trigger or worsen MG symptoms.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is MG diagnosed?",
      content: `

    <div class="answer"><p>MG is hard to diagnose because weakness is a common symptom of many disorders.</p>

<p>Your doctor will ask you about your symptoms, take a medical history, and perform a physical exam. If your doctor thinks you may have MG, she or he may run some tests:</p>

<ul>
	<li><strong>Antibody blood tests.</strong>&nbsp;Blood tests can detect the presence of high levels of abnormal antibodies that prevent normal nerve-to-muscle transmission. Most people with MG have abnormally high levels of acetylcholine receptor antibodies. But some people with MG test negative for these antibodies. Recently, another type of antibody, called MuSK antibodies, has been found in some MG patients who test negative for acetylcholine receptor antibodies. For these patients, a blood test that detects MuSK antibodies can be a useful diagnostic tool. Just how MuSK antibodies alter or damage nerve-muscle transmission isn't clear. But patients who test positive for MuSK antibodies often have symptoms involving face muscles, swallowing, speech, and breathing. Abnormal antibodies may not be found if only eye muscles are affected by MG.</li>
	<li><strong>Edrophonium test.</strong>&nbsp;When this drug is injected into someone with MG, his or her normally weak eye muscles will get stronger for a few minutes.</li>
	<li><strong>Nerve conduction test/repetitive stimulation.</strong>&nbsp;With this test, a nerve linked with a specific muscle is stimulated to see if the muscle action is weakened.</li>
	<li><strong>Single fiber&nbsp;<em>electromyography</em>&nbsp;(EMG).</strong>&nbsp;In this test, single muscle fibers are stimulated by electrical impulses. Muscle fibers of people with MG do not respond to repeated electrical stimulation as well as muscles that function normally. With this test, the EMG can detect problems with nerve-to-muscle transmission.</li>
	<li><em><strong>Computed tomography</strong></em>&nbsp;<strong>(CT) or&nbsp;<em>magnetic resonance imaging</em>&nbsp;(MRI).</strong>&nbsp;This test can show if you have an abnormal thymus gland or a thymus gland tumor.</li>
</ul>

<p>It is important for you to see a neurologist who is an expert in diagnosing MG. Diagnosis can take a long time (sometimes even years), so try to be patient with your doctor.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is the treatment for MG?",
      content: `

    <div class="answer"><p>There are several therapies that can help strengthen the muscles of someone with MG. Most people with MG have good results from treatment. In some people, MG may go into remission for a while and muscle weakness may go away completely. In rare cases, people go into remission or improve without treatment.</p>

<p>Treatment for MG may include:</p>

<ul>
	<li><strong>Medications.</strong>&nbsp;Drugs used include&nbsp;<em>cholinesterase inhibitors</em>, such as&nbsp;<em>pyridostigmine</em>. These drugs help improve nerve signals to muscles and increase muscle strength.&nbsp;<em>Immunosuppressive</em>&nbsp;<em>drugs</em>&nbsp;frequently are used to suppress the production of abnormal antibodies. They must be used with careful medical supervision because they can cause major side effects.</li>
	<li><strong>Thymectomy.</strong>&nbsp;This is the surgical removal of the thymus gland, which is abnormal in most persons with MG. This surgery is done for people with MG who have tumors, as well as for some who don't have tumors. The surgery improves symptoms in most MG patients who receive it.</li>
</ul>

<p>Other therapies sometimes used to treat MG when weakness is very acute include:</p>

<ul>
	<li><strong>Plasmapheresis</strong>&nbsp;(PLAZ-muh-FUR-uh-suhss)&nbsp;<strong>or plasma exchange.</strong>&nbsp;This procedure removes abnormal antibodies from the blood. This provides relief from MG symptoms in many patients for a few weeks.</li>
	<li><strong>High-dose intravenous immune globulin.</strong>&nbsp;This treatment keeps the immune system from damaging the nerve-muscle junction for a short time. This provides relief from MG symptoms in many patients for weeks to months.</li>
</ul>

<p>Your doctor will decide which treatment is best for you depending on the severity of the weakness, which muscles are affected, and your age and other medical problems. With treatment, many people with MG can expect to lead normal lives.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is a myasthenic crisis?",
      content: `

    <div class="answer"><p>A&nbsp;<em>myasthenic crisis</em>&nbsp;occurs when weakness affects the muscles that control breathing. This can create a medical emergency requiring either a respirator to help the person breathe or measures to prevent a person from taking too much air into their lungs. Weak respiratory muscles, infection, fever, or a bad reaction to medication can also trigger a crisis. The treatments described above — in particular, intravenous immune globulin and plasma exchange — can reverse the severe weakness of a myasthenic crisis.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I help take care of myself if I have MG?",
      content: `

    <div class="answer"><p>To help ease fatigue:</p>

<ul>
	<li>Get plenty of rest.</li>
	<li>Budget your energy.</li>
	<li>Rest your eyes or lie down briefly a few times a day.</li>
	<li>Work with your neurologist.</li>
	<li>Work with your doctor to limit medication side effects and keep your general health good.</li>
	<li>Eat healthy foods from all the major food groups.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What research is being done?",
      content: `

    <div class="answer"><p>The National Institute of Neurological Disorders and Stroke, within the National Institutes of Health, conducts and supports research on MG. Research findings have led to more timely and accurate diagnoses. New and enhanced therapies have improved management of the disorder.</p>

<p>Despite these advances, there is still much to learn. The ultimate goal of MG research is to increase understanding of the disorder. Researchers are seeking to learn what causes the autoimmune response in MG and to better define the relationship between the thymus gland and MG.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about myasthenia gravis?",
      content: `

    <div class="answer"><p>For more information about myasthenia gravis, call the OWH Helpline&nbsp;at 1-800-994-9662&nbsp;or contact the following organizations:</p>

<ul>
	<li><a href="http://www.aarda.org/" class="external-link external-popup" target="_blank"><strong>American Autoimmune Related Diseases Association, Inc.</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;<br>
	Phone number:&nbsp;800-598-4668, 586-776-3900, or 202-466-8511</li>
	<li><a href="http://www.myasthenia.org/" class="external-link external-popup" target="_blank"><strong>Myasthenia Gravis Foundation of America</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;<br>
	Phone number:&nbsp;800-541-5454 or 212-297-2156</li>
	<li><a href="http://www.ninds.nih.gov/"><strong>National Institute of Neurological Disorders and Stroke, NIH</strong></a>&nbsp;<br>
	Phone number:&nbsp;800-352-9424 or 301-496-5751 (TDD: 301-468-5981)</li>
</ul>
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
