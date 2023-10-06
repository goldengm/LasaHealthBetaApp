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

export function drDrugsPage({ navigation, ...rest }) {
  const condName = "Date rape drugs";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Daterapedrugs.jpg?VersionId=xUoFLDli25qUC3T7KNAdyLNbISZ9p_II";
  const condDescription =
    "Date rape drugs are any type of drug or alcohol used to make rape or sexual assault easier. Drugs or alcohol can make a person confused about what is happening, less able to defend themselves against unwanted sexual contact, or unable to remember what happened. Learn more about how date rape drugs are used. \n Many people use the phrase 'date rape.' But the person who commits the crime might not be in a relationship, or on a date, with the victim. Someone who commits date rape can be someone you know well, someone you know through friends, or someone you just met.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Daterapedrugs.jpg?VersionId=xUoFLDli25qUC3T7KNAdyLNbISZ9p_II"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Date rape drugs</h1>  -->
            <p><strong>Date rape drugs are any type of drug used to make <a href="/relationships-and-safety/sexual-assault-and-rape/rape">rape</a> or <a href="/relationships-and-safety/sexual-assault-and-rape/sexual-assault">sexual assault</a> easier.</strong> Alcohol is often used this way.<sup><a href="#references">1</a></sup> Or date rape drugs can be put into a drink without you knowing. Drugs or alcohol can make a person confused about what is happening, less able to defend themselves against unwanted sexual contact, or unable to remember what happened. Nearly 11 million women in the United States have been raped while drunk, drugged, or high.<sup><a href="#references">2</a></sup> If you've been assaulted, it is never your fault.</p>

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
      title: "What are date rape drugs?",
      content: `

    <div class="answer"><p>Date rape drugs are any type of drug or alcohol used to make rape or sexual assault easier. Drugs or alcohol can make a person confused about what is happening, less able to defend themselves against unwanted sexual contact, or unable to remember what happened. Learn more about <a href="#3">how date rape drugs are used</a>.</p>

<p>Many people use the phrase "date rape." But the person who commits the crime might not be in a relationship, or on a date, with the victim. Someone who commits date rape can be someone you know well, someone you know through friends, or someone you just met.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the most common date rape drugs?",
      content: `

    <div class="answer"><p>People who use date rape drugs or alcohol to commit sexual assault most often use alcohol alone or in combination with other drugs.<sup><a href="#references">1</a></sup> Learn more about <a href="#6">how alcohol is linked to sexual assault</a>.</p>

<p>Someone could use any type of drug, including marijuana, cocaine, or prescription or over-the-counter drugs like antidepressants, tranquilizers, or sleeping aids to overpower a victim or make them not remember an assault.<sup><a href="#references">1,3,4</a></sup></p>

<p>Other date rape drugs include flunitrazepam (Rohypnol), gamma-hydroxybutyric acid (GHB), gamma-butyrolactone (GBL), and ketamine.<sup><a href="#references">5</a> </sup>These drugs are sometimes called "club drugs" because they are often used at dance clubs, concerts, bars, or parties. Most drugs, including club drugs, have nicknames that change over time or are different in different areas of the country.</p>

<p>Learn more about <a href="https://www.drugabuse.gov/drugs-abuse/commonly-abused-drugs-charts">commonly misused drugs and how they can affect you</a> from the National Institute on Drug Abuse website.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How are date rape drugs used?",
      content: `

    <div class="answer"><p>Someone can use date rape drugs or alcohol to overpower you so you do not know what is happening or remember the assault. Sometimes date rape drugs are put into a drink without you knowing. Or, you may be drinking alcohol or taking a drug, but someone else makes it stronger without you knowing.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What do date rape drugs look like?",
      content: `

    <div class="answer"><p>Some date rape drugs look like regular drinks or other drugs you may be used to seeing. Drugs such as Rohypnol, GHB, GBL, and ketamine may look like pills, liquid, or powders. Often date rape drugs have no color, no smell, and no taste when added to a drink or food. Learn about the <a href="#2">most common date rape drugs</a>.</p>

<p>If someone adds a date rape drug to a drink, it may change the color of a clear drink or make your drink look cloudy. But changes can be hard to see if the drink is dark (such as cola or beer) or if the room is dark. You can’t always tell if a drug has been added to your drink just by looking at it or tasting it. Read <a href="#7">steps you can take to be safer in social situations</a> where there are drinks.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do date rape drugs and alcohol affect the body?",
      content: `

    <div class="answer"><p>Drugs such as Rohypnol, GHB, GBL, and ketamine are very powerful. They can affect you very quickly, and you might not know that something is wrong. The length of time that the effects last varies. It depends on how much of the drug is in your body and if the drug is mixed with other drugs or alcohol. Alcohol can make the effects of drugs even stronger and can cause serious health problems — even death.</p>

<p>Date rape drugs or too much alcohol can make you:<sup><a href="#references">5,6</a> </sup></p>

<ul>
	<li>Dizzy</li>
	<li>Have problems talking or slurred speech</li>
	<li>Have trouble moving or controlling your muscles</li>
	<li>Feel nauseous or vomit</li>
	<li>Have a very slow or very fast heartbeat</li>
	<li>Sleepy</li>
	<li>Confused</li>
	<li>Have trouble breathing</li>
	<li>Pass out</li>
</ul>

<p>Drugs and alcohol can cause problems thinking, making decisions, and remembering what happened.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is alcohol linked to sexual assault?",
      content: `

    <div class="answer"><p>People who use date rape drugs or alcohol to commit <a href="/relationships-and-safety/sexual-assault-and-rape">sexual assault</a> most often use alcohol alone or in combination with other drugs.<sup><a href="#references">1</a></sup> They may use alcohol as a way to make someone drunk and unable to consent, understand what is happening, or remember the assault. They may take advantage of someone who has already been drinking or pressure them to drink more than they might normally drink. They may also use drugs to increase the alcohol’s effects. Drinking alcohol and taking drugs at the same time increases the risk of sexual assault.<sup><a href="#references">7</a></sup></p>

<p>Using alcohol is sometimes linked to sexual assault because:</p>

<ul>
	<li><strong>The attacker was drinking.</strong> Research shows that up to 3 out of 4 attackers had been drinking alcohol when they sexually assaulted someone.<sup><a href="#references">7</a> </sup></li>
	<li><strong>The victim was drinking.</strong> Research also shows that about half of sexual assault victims had been drinking.<sup><a href="#references">7</a></sup> However, this does not mean that drinking causes sexual assault or that the assault is the victim’s fault.</li>
</ul>

<p>If you are drunk or passed out you cannot give consent for sexual activity. Without consent, any sexual activity is illegal, no matter how much you had to drink, if you took drugs, or how old you are.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What steps can I take to be safer in social situations?",
      content: `

    <div class="answer"><p>Anyone can take steps to be as safe as possible around others:<sup><a href="#references">8,9,10</a></sup></p>

<ul>
	<li><strong>Be aware of drinks in punchbowls or other containers that can be easily “spiked” </strong>(when alcohol or another drug is added to a drink without permission).</li>
	<li><strong>Don’t accept drinks from other people.</strong> If someone offers to get you a drink from a bar or at a party, go with the person to order your drink. Watch your drink as it is poured and carry it yourself.</li>
	<li><strong>Open your drink yourself.</strong> Keep control of it at all times.</li>
	<li><strong>Don’t drink anything that smells strange. </strong>Stop drinking any drink that tastes strange. Some date rape drugs may taste salty or bitter, but most are tasteless and odorless.</li>
	<li><strong>Don’t drink more than you want to </strong>just because someone else wants you to. Don’t drink more than you want to so that someone else will like you or be impressed.</li>
	<li><strong>Get help right away</strong> if you feel drunk and haven’t had any alcohol or if you feel like the effects of drinking alcohol are stronger than usual. Find a friend who can help you get to a safe place.</li>
	<li><strong>Look out for your friends, and ask them to look out for you.</strong> You can play a powerful role in helping other people stay safe. If a friend seems out of it, seems much too drunk for the amount of alcohol she drank, is acting out of character, or seems too drunk to stay safe in general, get her to a safe place. Ask your friends to do the same for you. Learn more from the Rape, Abuse, &amp; Incest National Network (RAINN) about how you can <a href="https://www.rainn.org/articles/your-role-preventing-sexual-assault" class="external-link external-popup" target="_blank">help prevent sexual assault as a bystander <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
</ul>

<p>If you think someone has drugged you or a friend, call 911 or go to a hospital emergency room. Even though it may be difficult, it is important to tell a doctor or nurse what happened and that you might have been drugged so they can test for the right drugs.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Are there ways to tell if I might have been drugged and raped? ",
      content: `

    <div class="answer"><p>Date rape drugs can make you feel drunk even if you haven’t drunk any alcohol. You may also feel like the effects of drinking alcohol are much stronger than usual or more than you expect based on how much you drank.</p>

<p>Date rape drugs also affect your memory. This can make it difficult to tell if you were drugged and raped. You might not be aware of an attack until many hours later, or you may not remember what happened.</p>

<p>You might have been drugged and raped if:</p>

<ul>
	<li>You don’t know why your clothes are on wrong, torn, or have unusual stains. Or, you wake up without clothes and don’t remember taking them off.</li>
	<li>Your body feels like you had sex, but you cannot remember it.</li>
	<li>You have unexpected bruises, bleeding, pain, scrapes, or cuts, especially after waking up after a party, date, or other social event.</li>
</ul>

<p>If you notice any of these signs, and also wake up having no memory of a period of time, or remember having a drink but cannot recall anything after that, you may have been drugged and assaulted.</p>

<p>Learn <a href="#9">what to do if you think you have been drugged and raped</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What should I do if I think I've been drugged and raped?",
      content: `

    <div class="answer"><p>If you think you may have been drugged and raped, get medical care right away. Call 911 or have a trusted friend take you to a hospital emergency room. Even though it may feel very difficult at the time, it is important that you try not to urinate, douche, bathe, shower, wash your hands, brush your teeth or hair, change clothes, or eat or drink before you go. A doctor or nurse may be able to collect evidence of the assault from your body. <a href="/relationships-and-safety/sexual-assault-and-rape/sexual-assault">Learn more about what to do if you are sexually assaulted</a>.</p>

<p>Ask the hospital to take a urine sample to test for date rape drugs. Some date rape drugs leave the body very quickly. If you wait to get help, it may be difficult to prove that drugs were involved. For this reason, it is important to get medical help as quickly as possible.</p>

<p>After a sexual assault, you may feel fear, shame, guilt, or shock. All of these feelings are normal. Each survivor can feel a different range of emotions at different times in the healing process. Even if you wanted to drink alcohol or take drugs at the time, sexual assault is never your fault. You may be afraid to think about talking about the assault, but it is important to get help. You can call these organizations anytime, day or night. The calls are free and confidential.</p>

<ul>
	<li><a href="https://www.rainn.org/about-national-sexual-assault-telephone-hotline" class="external-link external-popup" target="_blank"><strong>National Sexual Assault Hotline</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><strong>, 1-800-656-HOPE (4673).</strong> You can also chat online in English or Spanish with a trained hotline specialist on the <a href="https://hotline.rainn.org/online/terms-of-service.jsp" class="external-link external-popup" target="_blank">National Sexual Assault Online Hotline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li><a href="http://www.thehotline.org/" class="external-link external-popup" target="_blank"><strong>National Domestic Violence Hotline</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><strong>, 1-800-799-SAFE (7233)</strong></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about date rape drugs?",
      content: `

    <div class="answer"><p>For more information about date rape drugs, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.dea.gov/index.shtml"><strong>Drug Enforcement Administration (DEA), DOJ</strong></a><br>
	Phone Number: 202-307-1000</li>
	<li><a href="http://www.fda.gov/"><strong>Food and Drug Administration (FDA), HHS</strong></a><br>
	Phone Number: 1-888-INFO-FDA (463-6332)</li>
	<li><a href="http://www.drugabuse.gov/"><strong>National Institute on Drug Abuse (NIDA), NIH, HHS</strong></a><br>
	Phone Number: 301-443-1124</li>
	<li><a href="http://changingourcampus.org/" class="external-link external-popup" target="_blank"><strong>Center for Changing Our Campus Culture</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li><a href="http://www.rainn.org/" class="external-link external-popup" target="_blank"><strong>Rape, Abuse, and Incest National Network</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 1-800-656-4673</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: " Sources",
      content: `

    <div class="answer"><ol>
	<li>Anderson L. J.,&nbsp;Flynn A.,&nbsp;&amp; Pilgrim J. L.&nbsp;(2017). <a href="https://www.ncbi.nlm.nih.gov/pubmed/28284121">A global epidemiological perspective on the toxicology of drug-facilitated sexual assault: A systematic review</a>.&nbsp;<em>Journal of Forensic and Legal Medicine</em><em>, 47,</em>&nbsp;46-54.&nbsp;</li>
	<li>Smith, S. G., Chen, J., Basile, K. C., Gilbert, L. K., Merrick, M. T., Patel, N., … Jain, A. (2017). <a href="https://www.cdc.gov/violenceprevention/pdf/NISVS-StateReportBook.pdf">The National Intimate Partner and Sexual Violence Survey: 2010-2012 state report</a> (PDF, 4.5 MB). Atlanta, GA: National Center for Injury Prevention and Control, Centers for Disease Control and Prevention.</li>
	<li>Rape, Abuse, and Incest National Network. (n.d.). <a href="https://rainn.org/articles/drug-facilitated-sexual-assault" class="external-link external-popup" target="_blank">Drug-facilitated sexual assault <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>Hall, J.A. &amp; Moore, C.B.T. (2008). <a href="https://www.sciencedirect.com/science/article/pii/S1752928X08000024" class="external-link external-popup" target="_blank">Drug-facilitated sexual assault: A review <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Journal of Forensic and Legal Medicine</em>, <em>15</em>, 291-297.</li>
	<li>Victim Witness Assistance Program. (2017). <a href="https://www.campusdrugprevention.gov/sites/default/files/DFSA.pdf">Drug-facilitated sexual assault</a>. U.S. Department of Justice, Drug Enforcement Administration (PDF, 14.8 MB).</li>
	<li>Pelissier, A. L., &amp; Raul, J. S. (2014). <a href="https://www.sciencedirect.com/science/article/pii/B9780124167483000116" class="external-link external-popup" target="_blank">Clinical aspects of drug-facilitated sexual assault <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. In P. Kintz (Ed.), <em>Toxicological Aspects of Drug-Facilitated Crimes</em> (283-286). Academic Press.</li>
	<li>Abbey, A., Zawacki, T., Buck, P. O., Clinton, A. M., McAuslan, P. (n.d.).&nbsp;<a href="http://pubs.niaaa.nih.gov/publications/arh25-1/43-51.htm" target="_blank">Alcohol and sexual assault</a>. National Institute on Alcohol Abuse and Alcoholism.</li>
	<li>RAINN. (2018). <a href="https://rainn.org/articles/alcohol-safety" class="external-link external-popup" target="_blank">Alcohol safety <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>RAINN. (2016). <a href="https://www.rainn.org/safety-prevention" class="external-link external-popup" target="_blank">Safety and prevention <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>University of Michigan Sexual Assault Prevention and Awareness Center. (2016). <a href="https://sapac.umich.edu/article/51" class="external-link external-popup" target="_blank">Drugs &amp; sexual assault <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
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
