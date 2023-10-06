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

export function ibsPage({ navigation, ...rest }) {
  const condName = "Irritable bowel syndrome (IBS)";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Irritablebowelsyndrome.jpg?VersionId=blbNMy_v3nOiNsx5V2I2Q7PW5Qgzd5d8";
  const condDescription =
    "Irritable bowel syndrome (IBS) is a collection of symptoms such as cramping, abdominal pain, bloating, diarrhea, and constipation. People with IBS have some of these symptoms — such as cramping and diarrhea or bloating and constipation — for at least 3 months. \n IBS can be uncomfortable. But it does not lead to serious disease, such as cancer. It also does not permanently harm the large intestine (colon). \n Most people with IBS can ease symptoms with changes in diet, medicine, and stress relief. For some people, IBS symptoms are more severe. They may get in the way of going to work or traveling, even traveling short distances.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Irritablebowelsyndrome.jpg?VersionId=blbNMy_v3nOiNsx5V2I2Q7PW5Qgzd5d8"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Irritable bowel syndrome</h1>  -->
            <p><strong>Irritable bowel syndrome (IBS) is a collection of symptoms such as cramping, abdominal pain, bloating, diarrhea, and constipation.</strong>&nbsp;Most people with IBS can ease symptoms with changes in diet, medicine, and stress relief. For some people, IBS symptoms are more severe. IBS affects more women than men.&nbsp;</p>

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
      title: "What is irritable bowel syndrome (IBS)?",
      content: `

    <div class="answer"><p>Irritable bowel syndrome (IBS) is a collection of symptoms such as cramping, abdominal pain, bloating, diarrhea, and constipation. People with IBS have some of these symptoms — such as cramping and diarrhea or bloating and constipation — for at least 3 months.</p>

<p>IBS can be uncomfortable. But it does not lead to serious disease, such as cancer. It also does not permanently harm the large intestine (colon).</p>

<p>Most people with IBS can ease symptoms with changes in diet, medicine, and stress relief. For some people, IBS symptoms are more severe. They may get in the way of going to work or traveling, even traveling short distances.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes IBS?",
      content: `

    <div class="answer"><p>The cause of IBS is not known. There is also no cure for IBS, but there are <a href="#6">ways to treat the symptoms</a>.&nbsp;</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets IBS?",
      content: `

    <div class="answer"><p>IBS is one of the most common disorders diagnosed by doctors. Up to 20% of U.S. adults have IBS symptoms.</p>

<p>Some people are more likely to have IBS including:</p>

<ul>
	<li>Women</li>
	<li>People younger than 50 (IBS usually begins before age 35)</li>
	<li>People with a family member who has IBS</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of IBS?",
      content: `

    <div class="answer"><p>IBS is defined as abdominal pain or discomfort, along with a changed bowel habit (such as diarrhea or constipation), for 3 months or more. The abdomen is the same as the "stomach area."</p>

<p>The symptoms may be different from person to person and can include:</p>

<ul type="disc">
	<li>Cramps or pain in the stomach area</li>
	<li>Constipation — infrequent stools that may be hard and dry</li>
	<li>Feeling like you haven't finished a bowel movement &nbsp;</li>
	<li>Diarrhea — frequent loose stools</li>
	<li>Alternating between diarrhea and constipation</li>
	<li>Mucus in the stool</li>
	<li>Swollen or bloated stomach area</li>
	<li>Gas</li>
	<li>Discomfort in the upper stomach area or feeling uncomfortably full or nauseous after eating a normal size meal</li>
</ul>

<p>Women with IBS may have more symptoms during their menstrual periods.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is IBS diagnosed?",
      content: `

    <div class="answer"><p>See your doctor if you think you may have IBS. Your doctor will ask you questions about your health, ask about your symptoms, and examine you. He or she may even perform a rectal exam. There are no tests that can show for sure that you have IBS.</p>

<p>Your doctor may also perform medical tests to rule out other diseases if you have “red flag” symptoms such as:</p>

<ul>
	<li>Rectal bleeding</li>
	<li>Weight loss</li>
	<li>Anemia (iron deficiency)</li>
	<li>Nighttime symptoms, like diarrhea that awakens you</li>
	<li>Family history of&nbsp;<a href="/glossary#colorectal-cancer">colorectal cancer</a>,&nbsp;<a href="/glossary#IBD">inflammatory bowel disease</a>, or&nbsp;<a href="/glossary#celiac_disease">celiac disease</a></li>
</ul>

<p>Medical tests include a colonoscopy (KOH-lon-oss-koh-pee). The doctor looks inside the large intestine by inserting a scope with a tiny camera to spot inflamed tissue, abnormal growths, and ulcers. People over age 50 with IBS symptoms should also have a colonoscopy to screen for colorectal cancer, even if they don't have any "red flag" symptoms.</p>

<p>A doctor may also perform a blood test to check for celiac disease if you have certain types of IBS. These types are IBS-D (mostly diarrhea) or IBS-M (mixed type with diarrhea and constipation). A doctor may also check for celiac disease if you have bloating or pass a lot of gas.</p>

<p>Lactose intolerance may also be a concern for some people, and can be checked with a breath test.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is the treatment for IBS?",
      content: `

    <div class="answer"><p>There is no cure for IBS, but there are things you can do to feel better. Treatment may include:</p>

<ul>
	<li>Changing your diet</li>
	<li>Taking medication</li>
	<li>Counseling and stress relief</li>
</ul>

<h3>Changing your diet</h3>

<p>Foods do not cause IBS, but eating certain food may start some IBS symptoms. You can ease the symptoms of IBS by changing some eating habits.</p>

<p>Find out which foods make your symptoms worse by writing in a journal:</p>

<ul>
	<li>What you eat during the day</li>
	<li>What symptoms you have</li>
	<li>When symptoms occur</li>
</ul>

<p>You will want to limit or avoid these foods. Problem foods may be:</p>

<ul>
	<li>Milk and milk products like cheese or ice cream</li>
	<li>Caffeinated drinks like coffee</li>
	<li>Carbonated drinks like soda, especially those that contain artificial sweeteners (like sorbitol) or high-fructose corn syrup</li>
	<li>Alcohol</li>
	<li>Some fruits and vegetables</li>
</ul>

<p>Other ways to ease symptoms are:</p>

<ul>
	<li><strong>Eating a healthy, balanced diet.</strong></li>
	<li><strong>Eating more high-fiber foods such as whole grains, fruits, and vegetables (especially for people with constipation).</strong>&nbsp;Add foods with fiber to your diet a little at a time to let your body get used to them. High-fiber diets may not help with pain or diarrhea, and may make gas and cramping worse. Check the information on foods such as cereals. You should aim to eat 20 grams of fiber per day.</li>
	<li><strong>Drinking 6 to 8 glasses of water a day (especially for people with diarrhea).</strong>&nbsp;It is unclear whether this helps IBS symptoms, but it can help treat dehydration that sometimes happens with diarrhea.</li>
	<li><strong>Avoiding large meals, which can cause cramping and diarrhea in people with IBS.</strong>&nbsp;If this happens to you, try eating 4 or 5 small meals a day. Or, eat less at each of your usual 3 meals.</li>
</ul>

<h3>Taking medicine</h3>

<p>Your doctor may give you medicine to help with symptoms:</p>

<ul>
	<li><strong>Fiber supplements</strong>&nbsp;such as psyllium (Metamucil) to help control constipation.</li>
	<li><strong>Anti-diarrheal medications</strong>, such as loperamide (Imodium), to help control diarrhea.</li>
	<li><strong>Antispasmodic agents</strong>&nbsp;such as peppermint oil or dicyclomine to slow contractions in the bowel, which may help with diarrhea and pain.</li>
	<li><strong>Antidepressant medications</strong>&nbsp;such as a tricylcic antidepressant or a selective serotonin reuptake inhibitor (SSRI) if symptoms include pain or depression.</li>
	<li><strong>IBS medication</strong>. A medication known as Lubiprostone is approved by the FDA for women with severe IBS-C (constipation).</li>
</ul>

<p>Take your medicine exactly as your doctor tells you to. All drugs have side effects and may affect people differently. Tell your doctor about any over-the-counter medicines you take.</p>

<h3>Counseling and stress relief</h3>

<p>Many people who seek care for IBS also have anxiety, panic, or depression. Stress is also an issue for people with IBS because it can make the symptoms worse. Research shows that psychological therapy can help ease IBS symptoms. Therapies that can help reduce feelings of stress and anxiety include:</p>

<ul>
	<li><strong>Cognitive behavioral therapy (CBT)</strong>, a short-term treatment that mixes different types of therapies and behavioral strategies. The type of CBT used to treat IBS may focus on managing life stress. Or, it may focus on changing how a person responds to anxiety about IBS symptoms.</li>
	<li><strong>Dynamic psychotherapy,</strong>&nbsp;an intensive, short-term form of talk therapy. It may focus on in-depth discussions about the link between symptoms and emotions. The therapy may also help people identify and resolve interpersonal conflicts.</li>
	<li><strong>Hypnotherapy</strong>, where people enter an altered state of consciousness. Visual suggestions are made to imagine pain going away, for example.</li>
</ul>

<p>General stress relief is also important. Exercising regularly is a good way to relieve stress. It also helps the bowel function better and improves overall health. Meditation, yoga, and massage may also help.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about IBS?",
      content: `

    <div class="answer"><p>For more information about irritable bowel syndrome (IBS), call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="https://www.niddk.nih.gov/"><strong>National Institute of Diabetes and&nbsp;Digestive and&nbsp;Kidney Diseases</strong></a>&nbsp;&nbsp;<br>
	<strong>Phone:</strong>&nbsp;301-496-3583</li>
	<li><a href="http://www.acg.gi.org/" class="external-link external-popup" target="_blank"><strong>American College of Gastroenterology</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone:</strong>&nbsp;301-263-9000</li>
	<li><a href="http://www.gastro.org/" class="external-link external-popup" target="_blank"><strong>American Gastroenterological Association</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone:</strong>&nbsp;301-654-2055</li>
	<li><a href="http://www.fascrs.org/" class="external-link external-popup" target="_blank"><strong>American Society of Colon and Rectal Surgeons</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone:</strong>&nbsp;847-290-9184</li>
	<li><a href="http://www.iffgd.org/" class="external-link external-popup" target="_blank"><strong>International Foundation for Functional Gastrointestinal Disorders</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone:</strong>&nbsp;888-964-2001 or 414-964-7176</li>
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
