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

export function sexualAsltPage({ navigation, ...rest }) {
  const condName = "Sexual Assault";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Sexualassault.jpg?VersionId=cOj9GZv6XRm1_GcGu9SgghfnYnYdLPc8";
  const condDescription =
    "Sexual assault is any type of sexual activity or contact, including rape, that happens without your consent. Sexual assault can include non-contact activities, such as someone “flashing” you (exposing themselves to you) or forcing you to look at sexual images.2 \n Sexual assault is also called sexual violence or abuse. Legal definitions of sexual assault and other crimes of sexual violence can vary slightly from state to state. If you’ve been assaulted, it is never your fault.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Sexualassault.jpg?VersionId=cOj9GZv6XRm1_GcGu9SgghfnYnYdLPc8"></div>  -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Sexual assault</h1>  -->
            <p><strong>Sexual assault is any type of sexual activity or contact that you do not consent to.</strong> Sexual assault can happen through physical force or threats of force or if the attacker gave the victim drugs or alcohol as part of the assault. Sexual assault includes rape and sexual coercion. In the United States, one in three women has experienced some type of sexual violence.<sup><a href="#references">1</a></sup> If you have been sexually assaulted, it is not your fault, regardless of the circumstances.</p>

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
      title: "What is sexual assault?",
      content: `

    <div class="answer"><p>Sexual assault is any type of sexual activity or contact, including <a href="/relationships-and-safety/sexual-assault-and-rape/rape" title="Rape">rape</a>, that happens without your <a href="#3">consent</a>. Sexual assault can include non-contact activities, such as someone “flashing” you (exposing themselves to you) or forcing you to look at sexual images.<sup><a href="#references">2</a></sup></p>

<p>Sexual assault is also called sexual violence or abuse. Legal definitions of sexual assault and other crimes of sexual violence can vary slightly from state to state. If you’ve been assaulted, it is never your fault.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What does sexual assault include?",
      content: `

    <div class="answer"><p>Sexual assault can include:<sup><a href="#references">3</a></sup></p>

<ul>
	<li>Any type of sexual contact with someone who <strong>cannot</strong> <a href="#3">consent</a>, such as someone who is underage (as defined by state laws), has an intellectual disability, or is passed out (such as from drugs or alcohol) or unable to respond (such as from sleeping)</li>
	<li>Any type of sexual contact with someone who <strong>does not</strong> <a href="#3">consent</a></li>
	<li><a href="/relationships-and-safety/sexual-assault-and-rape/rape" title="Rape">Rape</a></li>
	<li>Attempted rape</li>
	<li><a href="/relationships-and-safety/other-types/sexual-coercion" title="Sexual coercion">Sexual coercion</a></li>
	<li>Sexual contact with a child</li>
	<li>Fondling or unwanted touching above or under clothes</li>
</ul>

<p>Sexual assault can also be verbal, visual, or non-contact. It is anything that forces a person to join in unwanted sexual activities or attention. Other examples can include:<sup><a href="#references">4</a></sup></p>

<ul>
	<li>Voyeurism, or peeping (when someone watches private sexual acts without consent)</li>
	<li>Exhibitionism (when someone exposes himself or herself in public)</li>
	<li><a href="/relationships-and-safety/other-types/harassment" title="Harassment">Sexual harassment</a> or threats</li>
	<li>Forcing someone to pose for sexual pictures</li>
	<li>Sending someone unwanted texts or “sexts” (texting sexual photos or messages)</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What does “consent” mean?",
      content: `

    <div class="answer"><p>Consent is a clear “yes” to sexual activity. Not saying “no” does not mean you have given consent. Sexual contact without consent is sexual assault or rape.</p>

<p>Your consent means:</p>

<ul>
	<li>You know and understand what is going on (you are not unconscious, blacked out, asleep, underage, or have an intellectual disability).</li>
	<li>You know what you want to do.</li>
	<li>You are able to say what you want to do or don’t want to do.</li>
	<li>You are aware that you are giving consent (and are not impaired by alcohol or drugs).</li>
</ul>

<p>Sometimes you <em>cannot</em> give legal consent to sexual activity or contact — for example, if you are:</p>

<ul>
	<li>Threatened, forced, coerced, or manipulated into agreeing</li>
	<li>Not physically able to (you are drunk, high, drugged, passed out, or asleep)</li>
	<li>Not mentally able to (due to illness or disability)</li>
	<li>Under the age of legal consent, which varies <a href="https://www.ageofconsent.net/states" title="United States Age of Consent Laws By State" class="external-link external-popup" target="_blank">by state <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
</ul>

<p>Remember:</p>

<ul>
	<li><strong>Consent is an ongoing process,</strong> not a one-time question. If you consent to sexual activity, you can change your mind and choose to stop at any time, even after sexual activity has started.</li>
	<li><strong>Past consent does not mean future consent.</strong> Giving consent in the <em>past</em> to sexual activity does not mean your past consent applies <em>now</em> or in the <em>future.</em></li>
	<li><strong>Saying “yes” to a sexual activity is not consent for all types of sexual activity.</strong> If you consent to sexual activity, it is only for types of sexual activities that you are comfortable with at that time with that partner. For example, giving consent for kissing does not mean you are giving consent for someone to remove your clothes.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is NOT considered consent in sexual activity?",
      content: `

    <div class="answer"><ul>
	<li><strong>Silence.</strong> Just because someone does not say “no” doesn’t mean she is saying “yes.”</li>
	<li><strong>Having consented before.</strong> Just because someone said “yes” in the past does not mean she is saying “yes” now. Consent must be part of every sexual activity, every time.</li>
	<li><strong>Being in a relationship.</strong> Being married, dating, or having sexual contact with someone before does not mean that there is consent now.</li>
	<li><strong>Being drunk or high.</strong> Read more about <a href="#12">alcohol, drugs, and sexual assault</a>.</li>
	<li><strong>Not fighting back.</strong> Not putting up a physical fight does not mean that there is consent.</li>
	<li><strong>Sexy clothing, dancing, or flirting.</strong> What a woman or girl wears or how she behaves does not show consent for sexual activity. Only a verbal “yes” means “yes” to sexual activity.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who commits sexual assault?",
      content: `

    <div class="answer"><p>Sexual assault is most often committed by someone the victim knows.<sup><a href="#references">1</a></sup> This may be a friend, an acquaintance, an ex, a relative, a date, or a partner. Less often, a stranger commits sexual assault.</p>

<p>Women and men commit sexual assault, but more than 90% of people who commit sexual violence against women are men.<sup><a href="#references">1</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is the average age a woman is sexually assaulted?",
      content: `

    <div class="answer"><p>Four of every five women who are raped&nbsp;are raped before age 25. About 40% of women who have been raped, or two in every five, were assaulted before age 18.<sup><a href="#references">1</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can I be sexually assaulted by my partner or spouse? ",
      content: `

    <div class="answer"><p>Yes. Sexual assault is any sexual activity you do not consent to — no matter whom it is with.</p>

<p>Sexual assault by an intimate partner (someone you have a sexual or romantic relationship with) is common. Nearly half of female rape victims were raped by a current or former partner.<sup><a href="#references">1</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What do I do if I’ve been sexually assaulted?",
      content: `

    <div class="answer"><p><strong>If you are in danger or need medical care, call 911.</strong> If you can, get away from the person who assaulted you and get to a safe place as fast as you can. You can call the <a href="https://www.rainn.org/about-national-sexual-assault-telephone-hotline" title="RAINN" class="external-link external-popup" target="_blank">National Sexual Assault Hotline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> at 800-656-HOPE (4673) to connect with a sexual assault service provider in your area who can direct you to local resources.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What do I do if I’ve been raped?",
      content: `

    <div class="answer"><ul>
	<li><strong>Get to a safe place. </strong>Call 911 if you can. The most important thing after a rape is your safety.</li>
	<li><strong>Don’t wash or clean your body.</strong> If you shower, bathe, or wash after an assault, you might wash away important evidence. Don’t brush, comb, or clean any part of your body, including your teeth. Don’t change clothes, if possible. Don’t touch or change anything at the scene of the assault. That way, the local police will have physical evidence from the person who assaulted you.</li>
	<li><strong>Get medical care. </strong>Call 911 or go to your nearest hospital emergency room. You need to be examined and treated for injuries. The doctor or nurse may give you medicine to prevent HIV and some other <a href="/publications/our-publications/fact-sheet/sexually-transmitted-infections.html">sexually transmitted infections (STIs)</a>&nbsp;and <a href="/a-z-topics/emergency-contraception" title="Emergency contraception">emergency contraception</a> to prevent pregnancy.<br>
	The <a href="https://www.rainn.org/about-national-sexual-assault-telephone-hotline" title="RAINN" class="external-link external-popup" target="_blank">National Sexual Assault Hotline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> at 800-656-HOPE (4673) can help you find a hospital with staff members who are trained to collect evidence of sexual assault. Ask for a <a href="https://www.rainn.org/articles/what-sanesart" title="What is a SANE/SART?" class="external-link external-popup" target="_blank">sexual assault forensic examiner (SAFE) or a sexual assault nurse examiner (SANE) <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. A doctor or nurse will use a rape kit to collect evidence. This might be fibers, hairs, saliva, semen, or clothing left behind by the attacker. <strong>You do not have to decide whether to press charges while at the hospital. You do not need to press charges in order to have evidence collected with a rape kit.</strong></li>
	<li><strong>If you think you were drugged, talk to the hospital staff</strong> about testing for <a href="/a-z-topics/date-rape-drugs" title="Date rape drugs">date rape drugs</a>, such as Rohypnol and GHB (gamma-hydroxybutyric acid). Date rape drugs pass through the body quickly and may not be detectable by the time you get tested.</li>
	<li><strong>Reach out for help.</strong> The hospital staff can connect you with the local rape crisis center. Staff there can help you make choices about reporting the sexual assault and getting help through counseling and support groups. You can also call a friend or family member you trust to call a crisis center or hotline for you. Crisis centers and hotlines have trained volunteers and other professionals (such as mental health professionals) who can help you find support and resources near you. One hotline is the <a href="https://www.rainn.org/about-national-sexual-assault-telephone-hotline" title="RAINN" class="external-link external-popup" target="_blank">National Sexual Assault Hotline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;at 800-656-HOPE (4673). If you are in the military, you may also call the <a href="https://www.safehelpline.org/" title="Army, Navy, Marine Corps, Air Force and Coast Guard rape, sexual assault help" class="external-link external-popup" target="_blank">Department of Defense&nbsp;Safe Helpline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;at 877-995-5247.</li>
	<li><strong>Report the sexual assault to the police.</strong> If you want to report the assault to the police, hospital workers can help you contact the local police. If you are in immediate danger, call 911. If you want to report sexual assault that happened in the past, call your local police non-emergency number or make a report in person at the police station.</li>
	<li><strong>Talk to someone about reporting the assault to the police. </strong>If you want to talk to someone first about reporting the assault, you can call the <a href="https://www.rainn.org/about-national-sexual-assault-telephone-hotline" title="RAINN" class="external-link external-popup" target="_blank">National Sexual Assault Hotline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;at 800-656-HOPE (4673). An advocate or counselor can help you understand how to report the crime. Even though these calls are free, they may appear on your phone bill. If you think that the person who sexually assaulted you may check your phone bill, try to call from a friend’s phone or a public phone.</li>
	<li><strong>If the person who assaulted you was a stranger, write down as many details as you can remember</strong> about the person and what happened. This will help you make a clear statement to police and medical providers about the sexual assault. With good information, they will be better able to help you and find the person who assaulted you.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I get help after a sexual assault?",
      content: `

    <div class="answer"><p>After a sexual assault, you may feel fear, shame, guilt, or shock. All of these feelings are normal, and each survivor can feel a different range of emotions at different times in the recovery process. Sexual assault is never your fault. It may be frightening to think about talking about the assault, but it is important to get help. You can call these organizations any time, day or night. The calls are free and confidential.</p>

<ul>
	<li><a href="https://www.rainn.org/about-national-sexual-assault-telephone-hotline" title="RAINN" class="external-link external-popup" target="_blank"><strong>National Sexual Assault Hotline</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><strong>, 800-656-HOPE (4673)</strong></li>
	<li><a href="http://www.thehotline.org/" title="The National Domestic Violence Hotline" class="external-link external-popup" target="_blank"><strong>National Domestic Violence Hotline</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><strong>, 800-799-SAFE (7233) </strong></li>
</ul>

<p>Each state and territory has <a href="/relationships-and-safety/get-help/state-resources" title="Get help">organizations and hotlines</a>&nbsp;to help people who have been sexually assaulted. These numbers can show up on your phone bill or history, so try to use a public phone or a friend’s cellphone.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What steps can I take to be safer in social situations?",
      content: `

    <div class="answer"><p>If you are assaulted, or if you find yourself in a situation that feels unsafe, it is not your fault. Sexual assault is never the victim’s fault, no matter what she was wearing, drinking, or doing at the time of the assault. You can’t prevent sexual assault, but you can take steps to be safer around others:<sup><a href="#references">5</a>,<a href="#references">6</a></sup></p>

<ul>
	<li><strong>Go to parties or gatherings with friends.</strong> Arrive together, check in with each other, and leave together. Talk about your plans for the evening so that everyone knows what to expect.</li>
	<li><strong>Meet first dates or new people in a public place. </strong></li>
	<li><strong>Listen to your instincts or “gut feelings.”</strong> Many women who are sexually assaulted know the abuser. If you find yourself alone with someone you don’t trust, leave. Don’t worry about hurting someone’s feelings or being disliked. If you feel uncomfortable in any situation for any reason, leave. If the person is preventing you from leaving, try to get someone else’s attention who can help you get to safety. You are the only person who gets to say whether you feel safe.</li>
	<li><strong>Look out for your friends, and ask them to look out for you.</strong> You can play a powerful role in preventing sexual assault of other people. If a friend seems out of it, seems much too drunk for the amount of alcohol she drank, is acting out of character, or seems too drunk to stay safe in general, get her to a safe place. Ask your friends to do the same for you. Learn more about how you can <a href="https://www.rainn.org/articles/your-role-preventing-sexual-assault" title="RAINN" class="external-link external-popup" target="_blank">help prevent sexual assault as a bystander <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li><strong>Have a code word with your family and friends</strong> that means “Come get me; I need help” or “Call me with a fake emergency.” Call or text them and use the code word to let them know you need help.</li>
	<li><strong>Download an app on your phone.</strong> Search in your phone’s app store for free women’s safety apps you can download and use if you feel unsafe or are threatened. Some apps share your location with your friends or the police if you need help. You can also set up an app to send you texts throughout the night to make sure you’re safe. If you don’t respond, the app will notify police.</li>
	<li><strong>Be aware of how much you drink.</strong> Research shows that about half of sexual assault victims had been drinking when the attack happened.<sup><a href="#references">7</a></sup> Drinking alcohol does not make the attack your fault, but alcohol — and drugs — can make it more likely that you will be drunk or high later on. If you are drunk or high, you cannot consent to sexual activity or you may not understand what is happening.</li>
	<li><strong>Keep control of your own drink,</strong> because someone could add alcohol or <a href="/a-z-topics/date-rape-drugs" title="Date rape drugs">date rape drug</a><a href="/a-z-topics/date-rape-drugs" title="Date rape drugs">s</a>&nbsp;to it.</li>
	<li><strong>Get help or leave right away</strong> if you feel drunk and haven’t drunk any alcohol or if the effects of alcohol feel stronger than usual. This can happen if someone put a date rape drug or any kind of drug into your drink. Many drugs have no smell or taste and can cause you to pass out and not remember what happened.</li>
	<li><strong>Be aware of your surroundings.</strong> If you’re walking alone, don’t wear headphones so you can hear what’s happening around you. Also, as much as you can, stay in busy, well-lit areas, especially at night.</li>
	<li><strong>Have a plan to get home.</strong> If you plan to use a ride share service from an app, make sure your phone is charged or bring a charger. It can help to have a credit card or cash on hand if you need to leave quickly.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Is there a link between alcohol and drugs and sexual assault? ",
      content: `

    <div class="answer"><p>Yes. Research shows that up to three out of four attackers had been drinking alcohol when they sexually assaulted someone.<sup><a href="#references">8</a></sup></p>

<p>Research also shows that about half of sexual assault victims had been drinking.<sup><a href="#references">8</a></sup> However, this does not mean that drinking causes sexual assault or that the violence is the victim’s fault. Many attackers use alcohol as a way to make you drunk and unable to consent, understand what is happening, or remember the assault. They may take advantage of a victim who has already been drinking or encourage her to drink more than she might normally drink. If someone sexually assaulted you while you were drunk or passed out, they have committed a crime, no matter how much you had to drink or how old you are.</p>

<p>Some attackers also use drugs called <a href="/a-z-topics/date-rape-drugs" title="Date rape drugs">date rape drugs</a>. These drugs are put into drinks — even nonalcoholic drinks — or food without the victim’s knowledge. The drugs can cause memory loss, so victims may not know what happened. Some attackers also use other drugs, such as ecstasy, marijuana, or prescription pills. They may give drugs to someone who takes them willingly or may drug someone without her knowledge.</p>

<p>Someone who is drunk, drugged, or high on drugs cannot give consent. Without consent, any sexual activity is sexual assault.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Does sexual assault have long-term health effects?",
      content: `

    <div class="answer"><p>Yes, sexual assault can have long-term health effects. People who have experienced sexual violence or stalking by any person or physical violence by an intimate partner are more likely to report:<sup><a href="#references">1</a></sup></p>

<ul>
	<li>Headaches</li>
	<li>Long-term pain</li>
	<li>Trouble sleeping</li>
	<li>Poor physical and mental health</li>
	<li>Asthma</li>
	<li>Irritable bowel syndrome</li>
</ul>

<p style="margin-left:.25in;">Other health effects can include:<sup><a href="#references">9</a></sup></p>

<ul>
	<li>Severe <a href="/a-z-topics/anxiety-disorders" title="Anxiety disorders">anxiety</a>, stress, or fear</li>
	<li>Abuse of alcohol or drugs</li>
	<li><a href="/a-z-topics/depression" title="Depression">Depression</a></li>
	<li>Eating disorders</li>
	<li><a href="/a-z-topics/sexually-transmitted-infections" title="Sexually transmitted infections">Sexually transmitted infections</a><strong>&nbsp;</strong></li>
	<li><a href="/pregnancy" title="Pregnancy">Pregnancy</a></li>
	<li>Self-injury or <a href="/mental-health/preventing-suicide/index.html" title="Preventing suicide">suicide</a></li>
</ul>

<p>Getting support after a sexual assault can help. You are not alone. Reach out to friends or family, talk to a counselor or advocate, or join a support group in person or online.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I help someone who was sexually assaulted?",
      content: `

    <div class="answer"><p>You can help a friend or family member who was sexually assaulted by listening and offering comfort. Remind this person you believe them. Reinforce the message that she or he is not at fault. A victim never causes sexual assault or “asks for it.” You can also explain that it is natural to experience confusion, have problems remembering what happened, or feel angry, numb, or ashamed.</p>

<p>Ask the person whether she would like you to go with her to the hospital or to counseling. If she decides to report the crime to the police, ask whether she would like you to go with her. Let her know that she can get help. Let her know about the <a href="/relationships-and-safety/get-help" title="Get help">hotlines</a>&nbsp;to call to talk to someone. Get more <a href="/relationships-and-safety/get-help/how-help-friend" title="How to help a friend who is being abused">tips</a>&nbsp;on helping someone who has been sexually assaulted or abused.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about sexual assault?",
      content: `

    <div class="answer"><p>For more information about sexual assault, call the OWH Helpline at 1-800-994-9662 or check out the following resources from other organizations:</p>

<ul>
	<li><a href="http://changingourcampus.org/about-us/not-alone/" title="Protecting Students from Sexual Assault" class="external-link external-popup" target="_blank">Not Alone <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Information from the Center for Changing Our Campus Culture.</li>
	<li><a href="https://www.rainn.org/articles/reporting-law-enforcement" title="Reporting to Law Enforcement" class="external-link external-popup" target="_blank">Reporting to Law Enforcement <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Information from the Rape, Abuse &amp; Incest National Network (RAINN).</li>
	<li><a href="http://www.cdc.gov/violenceprevention/pdf/sv-factsheet.pdf">Understanding Sexual Violence</a>&nbsp;(PDF, 382 KB)&nbsp;— Fact sheet from the Centers for Disease Control and Prevention.</li>
	<li><a href="https://victimconnect.org/" title="Connect Directory – VictimConnect" class="external-link external-popup" target="_blank">Victims Connect Resource Center <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Program of the National Center for Victims of Crime.</li>
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
	<li>Smith, S.G., Chen, J., Basile, K.C., Gilbert, L.K., Merrick, M.T., Patel, N., et al. (2017). <a href="https://www.cdc.gov/violenceprevention/pdf/NISVS-StateReportBook.pdf">The National Intimate Partner and Sexual Violence Survey: 2010-2012 State Report</a>. Atlanta, GA: National Center for Injury Prevention and Control, Centers for Disease Control and Prevention.</li>
	<li>Breiding, M.J., Basile, K.C., Smith, S.G., Black, M.C., Mahendra, R.R. (2015). <a href="https://www.cdc.gov/violenceprevention/pdf/intimatepartnerviolence.pdf">Intimate Partner Violence Surveillance: Uniform Definitions and Recommended Data Elements, Version 2.0</a>. Atlanta, GA: National Center for Injury Prevention and Control, Centers for Disease Control and Prevention.</li>
	<li>Department of Justice. (2016). <a href="https://www.justice.gov/ovw/sexual-assault">Sexual Assault</a>.</li>
	<li>Centers for Disease Control and Prevention. (2014). <a href="http://www.cdc.gov/violenceprevention/pdf/sv-factsheet.pdf">Understanding Sexual Violence</a>.</li>
	<li>Rape, Abuse &amp; Incest National Network. (2016). <a href="https://www.rainn.org/safety-prevention" class="external-link external-popup" target="_blank">Safety &amp; Prevention <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>University of Michigan Sexual Assault Prevention and Awareness Center. (2016). <a href="https://sapac.umich.edu/article/51" class="external-link external-popup" target="_blank">Drugs &amp; Sexual Assault <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>National Institute on Alcohol Abuse and Alcoholism. (n.d.).&nbsp;<a href="https://pubs.niaaa.nih.gov/publications/arh25-1/43-51.htm">Alcohol and Sexual Assault</a>.</li>
	<li>Abbey, A., Zawacki, T., Buck, P.O., Clinton, A.M., McAuslan, P. (n.d.). <a href="http://pubs.niaaa.nih.gov/publications/arh25-1/43-51.htm">Alcohol and Sexual Assault</a>. National Institute on Alcohol Abuse and Alcoholism.</li>
	<li>Krug, E.G., Dahlberg, L.L., Mercy, J.A., Zwi, A.B., Lozano R. (2002). <a href="http://apps.who.int/iris/bitstream/10665/42495/1/9241545615_eng.pdf" class="external-link external-popup" target="_blank">World report on violence and health <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. World Health Organization.</li>
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
