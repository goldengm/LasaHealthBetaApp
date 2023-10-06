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

export function domViolencePage({ navigation, ...rest }) {
  const condName = "Domestic violence/abuse";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/AmIbeingabused.jpg?VersionId=CyxbCvFcsgRxmwYzvA3GL4c_N_cFuwi9";
  const condDescription =
    "Every woman has the right to live her life safely and free of violence. Yet one in four women in the United States experiences violence from an intimate partner. Intimate partner violence includes domestic abuse, sexual assault, verbal and emotional abuse, coercion, and stalking. Violence and abuse can cause physical and emotional problems that last long after the abuse. If you've experienced violence or abuse, it is never your fault, and you can get help.";
  const condHeader = `<article role="article">

  
    

  
  <div>
    
<div class="landing-page-header">
                <div class="heading-description">
                <!-- <h1>Relationships and Safety</h1>  -->
            <p><strong>Every woman has the right to live her life safely and free of violence.</strong> Yet one in four women in the United States experiences violence from an intimate partner. Intimate partner violence includes domestic abuse, sexual assault, verbal and emotional abuse, coercion, and stalking. Violence and abuse can cause physical and emotional problems that last long after the abuse. If you've experienced violence or abuse, it is never your fault, and you can get help.</p>

<p><strong>Top questions about violence against women </strong></p>

                        <ul class="questions">
                                    <li><a href="/relationships-and-safety/get-help/help-abused-friend#2">How can I help a friend who is being abused?</a></li>
                                    <li><a href="/relationships-and-safety/signs-abuse">Am I being abused?</a></li>
                                    <li><a href="/relationships-and-safety/other-types/emotional-and-verbal-abuse#1">What are signs of emotional abuse?</a></li>
                            </ul>
                    </div>
    </div>

  </div>

</article>


<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Signsofdomesticviolenceorabuse.jpg?VersionId=4BbtHlFB3qjn7T1YP6qgV6wgKrAucPTg"></div>   -->
                <div class="heading-description heading-description--half-width">
            <h1>Signs of domestic violence or abuse</h1>
            <p><strong>Intimate partner violence, or domestic violence</strong>, can be difficult to see if it starts little by little, if your partner says they love you, or if they support you financially. Domestic violence can include forced sex, physical abuse, and emotional abuse, such as cruel words or threats. It can happen between married people, to a couple who lives together or apart, or to a same-sex couple. Abuse is never OK.</p>

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
      title: "How do I know whether I’m being abused?",
      content: `

    <div class="answer"><p>You may be experiencing domestic violence if your partner:</p>

<ul>
	<li>Controls what you’re doing</li>
	<li>Checks your phone, email, or social networks without your permission</li>
	<li>Forces you to have sex when you don’t want to</li>
	<li>Controls your <a href="/a-z-topics/birth-control-methods" title="Birth control methods">birth control</a> or insists that you get <a href="/pregnancy" title="Pregnancy">pregnant</a></li>
	<li>Decides what you wear or eat&nbsp;or how you spend money</li>
	<li>Prevents or discourages you from going to work or school or seeing your family or friends</li>
	<li>Humiliates you on purpose in front of others</li>
	<li>Unfairly accuses you of being unfaithful</li>
	<li>Destroys your things</li>
	<li>Threatens to hurt you, your children, other loved ones, or your pets</li>
	<li>Hurts you physically (e.g., hitting, beating, punching, pushing, kicking), including with a weapon</li>
	<li>Blames you for his or her violent outbursts</li>
	<li>Threatens to hurt herself or himself because of being upset with you</li>
	<li>Threatens to report you to the authorities for imagined crimes</li>
	<li>Says things like, “If I can’t have you, then no one can”</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What are signs of domestic violence or abuse in same-sex relationships?",
      content: `

    <div class="answer"><p>If you are in a same-sex relationship, many <a href="#1">signs of domestic violence</a> are the same as other people in an abusive relationship. Your partner may hit you, try to control you, or force you to have sex. But you may also experience additional signs of abuse, including:</p>

<ul>
	<li>Threatening to “out you” to your family, friends, employer, or community</li>
	<li>Telling you that you have to be legally married to be considered a victim of domestic violence and to get help</li>
	<li>Saying women aren’t or can’t be violent</li>
	<li>Telling you the authorities won’t help a lesbian, bisexual, transgender, or other nonconforming person</li>
	<li>Forcing you to “prove” your sexuality by performing sex acts that you do not consent to</li>
</ul>

<p>Regardless of your gender identity or sexual orientation, no one has the right to physically hurt you or threaten your safety.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What can I do if I’m being abused?",
      content: `

    <div class="answer"><p>Your safety is the most important concern. <strong>If you are in immediate danger, call 911.</strong></p>

<p>If you are not in immediate danger, consider these options:</p>

<ul>
	<li><strong>Get medical care. </strong>If you have been injured or sexually assaulted, go to a local hospital emergency room or urgent care center. You need medical care and may need medicines after being injured or raped.</li>
	<li><strong>Call a helpline for free, anonymous help. </strong>Call the <a href="http://www.thehotline.org/" title="The National Domestic Violence Hotline" class="external-link external-popup" target="_blank">National Domestic Violence Hotline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> at 800-799-SAFE (7233) or 800-787-3224 (TDD). The hotline offers help 24 hours a day, 7 days a week, in many languages. Hotline staff can give you numbers for other resources, such as local domestic violence shelters. If you are deaf or hard of hearing, there are <a href="http://www.thehotline.org/help/deaf-services/" title="The National Domestic Violence Hotline" class="external-link external-popup" target="_blank">resources available for you <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. The <a href="http://www.avp.org/index.php" title="NYC Anti-Violence Project" class="external-link external-popup" target="_blank">National Coalition of Anti-Violence Programs <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> has a hotline to help LGBTQ victims of violence. Call 212-714-1141 for 24-hour support in English or Spanish.</li>
	<li><a href="/relationships-and-safety/partner-violence/leaving-abusive-relationship#3" title="How can I plan so I can keep myself safe?"><strong>Make a safety plan to leave</strong></a>. Domestic violence usually does not get better. Think about a safe place for you to go and other things you will need. Staff at the <a href="http://www.thehotline.org/" title="The National Domestic Violence Hotline" class="external-link external-popup" target="_blank">National Domestic Violence Hotline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;can help you plan.</li>
	<li><strong>Save the evidence. </strong>Keep evidence of abuse, such as pictures of your injuries or threatening emails or texts, in a safe place the abuser cannot get to.</li>
	<li><strong>Find out where to get help in your community. </strong>Look up <a href="http://victimconnect.org/get-help/connect-directory/" title="Connect Directory – VictimConnect" class="external-link external-popup" target="_blank">local resources <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> for a list of local places to get help.</li>
	<li><strong>Talk to someone. </strong>Reach out to someone you trust. This might be a family member, a friend, a co-worker, or a spiritual leader. Look for ways to get emotional help, like a support group or mental health professional.</li>
	<li><strong>Look into a restraining order. </strong>Consider getting a <a href="/relationships-and-safety/partner-violence/getting-restraining-order#5" title="What is a protection order or restraining order?">protection order</a>.</li>
</ul>

<p>If you are the victim of domestic violence, know that you are not alone. There are people who want to help you and who are trained to respond. See our page on <a href="/relationships-and-safety/domestic-violence/leaving-abusive-relationship" title="Leaving an abusive relationship">leaving an abusive relationship</a>&nbsp;for tips on what to do and where to go.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What can happen if I don’t get help?",
      content: `

    <div class="answer"><p>Domestic violence often results in physical and emotional injuries. It can also lead to other health problems, reproductive health challenges, mental health conditions such as <a href="/a-z-topics/depression" title="Depression">depression</a>, and <a href="/mental-health/preventing-suicide/index.html" title="Preventing suicide">suicide</a>. Women affected by intimate partner violence are also more likely to use drugs or alcohol to cope.</p>

<p>Domestic violence can even end in death. Women who live in a home with guns are five times more likely to be killed.<a href="#references"><sup>1</sup></a> More than half of women murdered with guns are killed by intimate partners.<a href="#references"><sup>2</sup></a></p>

<p><a href="/relationships-and-safety/effects-violence-against-women" title="Effects of violence against women">Read more about the effects on your health</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How common is domestic violence against women?",
      content: `

    <div class="answer"><p>Domestic or intimate partner violence is a very common type of violence against women:</p>

<ul>
	<li>Domestic or intimate partner violence happens in all types of relationships, including dating couples, married couples, same-sex couples, former or ex-couples, and couples who live together but are not married.<a href="#references"><sup>3</sup></a></li>
	<li>Intimate partner violence happens more often among younger couples.<a href="#references"><sup>4</sup></a></li>
	<li>Almost half of American Indian and Alaskan Native women, more than four in 10 African-American women, and more than one in three white and Hispanic women have experienced sexual or physical violence or stalking by their intimate partner.<a href="#references"><sup>3</sup></a></li>
	<li>Nearly 23 million women in the United States have been raped or experienced attempted rape in their lifetimes.<a href="#references"><sup>3</sup></a></li>
	<li>More than 33 million women — including one in three African-American and white women and one in four Hispanic women — have experienced unwanted sexual contact, other than rape, by an intimate partner.<a href="#references"><sup>3</sup></a></li>
	<li>Women who identify as lesbian experience as much or more physical and sexual violence as heterosexual women by an intimate partner.<a href="#references"><sup>5</sup></a> Women who identify as bisexual experience intimate partner violence more often than heterosexual women.<a href="#references"><sup>5</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "How are gender and sexual minority women affected by domestic violence?",
      content: `

    <div class="answer"><p>Gender and sexual minority women, such as lesbian or bisexual women, may be more likely than heterosexual women to experience domestic violence.<a href="#references"><sup>6</sup></a> Two in five lesbian women and three in five bisexual women experience intimate partner violence at some point in their lifetimes.<a href="#references"><sup>6</sup></a></p>

<p>Researchers think women who identify as something other than straight or cisgender (people whose biological sex matches their gender identity) may experience higher levels of domestic violence. But there is not yet enough research on all types of gender and sexual minority women to know for sure.</p>

<p><a href="#2">Learn more about other signs of domestic violence in same-sex relationships</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Did we answer your question about domestic or intimate partner violence?",
      content: `

    <div class="answer"><p>For more information about domestic or intimate partner violence, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.mmgconnect.com/projects/userfiles/file/dce-stop_now/ncadv_lgbt_fact_sheet.pdf" class="external-link external-popup" target="_blank">Domestic Violence and Lesbian, Gay, Bisexual and Transgender Relationships <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;(PDF, 261 KB)&nbsp;— Fact sheet from the National Coalition Against Domestic Violence.</li>
	<li><a href="http://www.acf.hhs.gov/programs/fysb/content/familyviolence/centers.htm" title="Family Violence Prevention &amp; Services Resource Centers">Family Violence Prevention &amp; Services Resource Centers</a> — Information from the U.S. Department of Health and Human Services.</li>
	<li><a href="http://www.thehotline.org/help/help-for-friends-and-family/" title="The National Domestic Violence Hotline" class="external-link external-popup" target="_blank">Help a Friend or Family Member <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Information from the National Domestic Violence Hotline.</li>
	<li><a href="https://www.cdc.gov/violenceprevention/intimatepartnerviolence/index.html" title="Intimate Partner Violence">Intimate Partner Violence</a>&nbsp;— Information from the Centers for Disease Control and Prevention.</li>
	<li><a href="http://www.lessonsfromliterature.org/docs/manual/Power_and_Control_Wheel.pdf" class="external-link external-popup" target="_blank">Power and Control Wheel <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> (PDF, 345 KB)&nbsp;— Tool from the Family Violence Prevention Fund that helps people identify whether they are experiencing relationship abuse.</li>
	<li><a href="http://tcfv.org/pdf/Updated_wheels/LGBT.pdf" class="external-link external-popup" target="_blank">Power and Control Wheel for Lesbian, Gay, Bisexual and Trans Relationships <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;(PDF, 845 KB)&nbsp;— Tool from the Texas Council on Family Violence that helps lesbians, bisexual women, and transgender people identify whether they are experiencing relationship abuse.</li>
	<li><a href="http://www.nctsn.org/nctsn_assets/pdfs/QA_Groves_final.pdf" class="external-link external-popup" target="_blank">Questions and Answers About Domestic Violence <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;(PDF, 368 KB)&nbsp;— Publication from the National Child Traumatic Stress Network.</li>
	<li><a href="https://www.nccafv.org/spouse-partner-abuse" title="National Council on Child Abuse and Family Violence (NCCAFV)" class="external-link external-popup" target="_blank">Spouse/Partner Abuse Information <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Information from the National Council on Child Abuse and Family Violence.</li>
	<li><a href="http://victimsofcrime.org/docs/default-source/src/stalking-fact-sheet-2015_eng.pdf?sfvrsn=2" class="external-link external-popup" target="_blank">Stalking Fact Sheet <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;(PDF, 171 KB)&nbsp;— Fact sheet from the Stalking Resource Center.</li>
	<li><a href="http://www.domesticviolenceroundtable.org/effect-on-children.html" title="Effects of Domestic Violence on Children" class="external-link external-popup" target="_blank">The Effects of Domestic Violence on Children <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Information from the Domestic Violence Roundtable.</li>
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
	<li>Campbell, J.C., Webster, D., Koziol-McLain, J., Block, C., Campbell, D., Curry, M., et al. (2003). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC1447915/">Risk Factors for Femicide in Physically Abusive Intimate Relationships: Results From a Multisite Case Control Study</a>. <em>American Journal of Public Health; </em>93(7): 1089-1097.</li>
	<li>Petrosky, E., Blair, J.M., Betz, C.J., Fowler, K.A., Jack, S.P., Lyons, B.H. (2017). <a href="https://www.cdc.gov/mmwr/volumes/66/wr/mm6628a1.htm?s_cid=mm6628a1_w">Racial and Ethnic Differences in Homicides of Adult Women and the Role of Intimate Partner Violence – United States, 2003-2014.</a> <em>MMWR; </em>66(28): 741-746.</li>
	<li>Smith, S.G., Chen, J., Basile, K.C., Gilbert, L.K., Merrick, M.T., Patel, N., Walling, M., Jain, A. (2017). <a href="https://www.cdc.gov/violenceprevention/pdf/NISVS-StateReportBook.pdf">The National Intimate Partner and Sexual Violence Survey: 2010-2012 State Report</a>. Atlanta, GA: National Center for Injury Prevention and Control, Centers for Disease Control and Prevention.</li>
	<li>Capaldi, D.M., Knoble, N.B., Shortt, J.W., Kim, H.K. (2012). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3384540/">A Systematic Review of Risk Factors for Intimate Partner Violence</a>. <em>Partner Abuse;</em> 3: 231-280.</li>
	<li>Walters, M.L., Chen, J., Breiding, M.J. (2013). <a href="http://www.cdc.gov/violenceprevention/pdf/nisvs_sofindings.pdf">The National Intimate Partner and Sexual Violence Survey: 2010 Findings on Victimization by Sexual Orientation</a>.&nbsp;Atlanta, GA: National Center for Injury Prevention and Control, Centers for Disease Control and Prevention.</li>
	<li>National Coalition of Anti-Violence Programs. (2016). <a href="https://avp.org/wp-content/uploads/2017/04/2015_ncavp_lgbtqipvreport.pdf" class="external-link external-popup" target="_blank">Lesbian, Gay, Bisexual, Transgender, Queer, and HIV-Affected Intimate Partner Violence in 2015 <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. New York, NY: Emily Waters.</li>
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
