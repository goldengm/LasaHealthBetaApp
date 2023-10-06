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

export function violencePage({ navigation, ...rest }) {
  const condName = "Relationships and Safety";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Signsofdomesticviolenceorabuse.jpg?VersionId=4BbtHlFB3qjn7T1YP6qgV6wgKrAucPTg";
  const condDescription =
    "Every woman has the right to live her life safely and free of violence. Yet one in four women in the United States experiences violence from an intimate partner. Intimate partner violence includes domestic abuse, sexual assault, verbal and emotional abuse, coercion, and stalking. Violence and abuse can cause physical and emotional problems that last long after the abuse. If you've experienced violence or abuse, it is never your fault, and you can get help.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/AmIbeingabused.jpg?VersionId=CyxbCvFcsgRxmwYzvA3GL4c_N_cFuwi9"></div>  -->
                <div class="heading-description heading-description--half-width">
            <h1>Am I being abused?</h1>
            <p><strong>In a close relationship, it can be difficult to know whether you are being abused</strong>, especially if your partner says they love you, gives you a lot of attention, or pays for the groceries or rent. People who are abusive sometimes act loving and supportive as a way to keep you in the relationship. A partner's loving behavior does not make their abusive behavior OK. Forced sex and cruel or threatening words are forms of abuse. Learn more about how to recognize abuse.</p>

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
      title: "Signs of abuse",
      content: `
  
      <div class="answer"><p>There are many types of violence and abuse. Some of these signs are signs of <a href="/relationships-and-safety/other-types/physical-abuse" title="Physical abuse">physical abuse</a>&nbsp;or <a href="/relationships-and-safety/domestic-violence" title="Domestic or intimate partner violence">domestic violence</a>. Some are signs of <a href="/relationships-and-safety/other-types/emotional-and-verbal-abuse" title="Emotional and verbal abuse">emotional and verbal abuse</a>&nbsp;or <a href="/relationships-and-safety/sexual-assault-and-rape" title="Sexual assault and rape">sexual abuse</a>. &nbsp;</p>
  
  <p>Signs of abuse include:</p>
  
  <ul>
    <li><strong>Keeping track of everything you do</strong>
  
    <ul style="list-style-type:circle;">
      <li>Monitoring what you’re doing all the time&nbsp;or asking where you are and who you’re with every second of the day</li>
      <li>Demanding your passwords to social media sites and email accounts</li>
      <li>Demanding that you reply right away to texts, emails, or calls</li>
      <li>Preventing or discouraging you from seeing friends or family</li>
      <li>Preventing or discouraging you from going to work or school</li>
    </ul>
    </li>
    <li><strong>Being jealous, controlling, or angry</strong>
    <ul style="list-style-type:circle;">
      <li>Acting very jealous, including constantly accusing you of cheating</li>
      <li>Having a quick temper, so you never know what you will do or say that may cause a problem</li>
      <li>Controlling how you spend your money</li>
      <li>Controlling your use of medicines or&nbsp;<a href="/a-z-topics/birth-control-methods" title="Birth control methods">birth control</a></li>
      <li>Making everyday decisions for you that you normally decide for yourself (like what to wear or eat)</li>
    </ul>
    </li>
    <li><strong>Demeaning you</strong>
    <ul style="list-style-type:circle;">
      <li>Putting you down, such as insulting your appearance, intelligence, or activities</li>
      <li>Humiliating you in front of others</li>
      <li>Destroying your property or things that you care about</li>
      <li>Blaming you for his or her violent outbursts</li>
    </ul>
    </li>
    <li><strong>Physically hurting&nbsp;or threatening to hurt&nbsp;you or loved ones</strong>
    <ul style="list-style-type:circle;">
      <li>Threatening to hurt you, the children, or other people or pets in your household</li>
      <li>Hurting you physically (such as hitting, beating, pushing, shoving, punching, slapping, kicking, or biting)</li>
      <li>Using (or threatening to use) a weapon against you</li>
      <li>Threatening to harm himself or herself when upset with you</li>
      <li>Threatening to turn you in to authorities for illegal activity if you report physical abuse</li>
    </ul>
    </li>
    <li><strong>Forcing you to have sex or other intimate activity</strong>
    <ul style="list-style-type:circle;">
      <li>Forcing you to have sex when you don’t want to through physical force or threats</li>
      <li>Assuming that consent for a sex act in the past means that you must participate in the same acts in the future</li>
      <li>Assuming that consent for one activity means consent for future activity or increased levels of intimacy (for example, assuming that kissing should lead to sex every time)</li>
    </ul>
    </li>
  </ul>
  
  <p>If you think someone is abusing you, <a href="/relationships-and-safety/get-help" title="Get help">get help</a>. Abuse can have serious <a href="/relationships-and-safety/effects-violence-against-women" title="Effects of violence against women">physical and emotional effects</a>.</p>
  </div>
  
        </div>
  </div>
              <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
            
      `,
    },
    {
      title: "Signs of an unhealthy relationship",
      content: `
  
      <div class="answer"><p>Sometimes a romantic relationship may not be abusive but may have serious problems that make it unhealthy. If you think you might be in an unhealthy relationship, try talking with your partner about your concerns. If that seems difficult, you might also talk to a trusted friend, family member, counselor, or religious leader.</p>
  
  <p>You might be in an unhealthy relationship if you:</p>
  
  <ul>
    <li>Focus all your energy on your partner</li>
    <li>Drop friends, family, or activities you enjoy</li>
    <li>Feel pressured or controlled by this person</li>
    <li>Have more bad times than good in the relationship</li>
    <li>Often feel sad or scared when with this person</li>
    <li>Know that this person does not support you and what you want to do in life</li>
    <li>Do not feel comfortable being yourself or making your own decisions</li>
    <li>Cannot speak honestly to work out conflicts in the relationship</li>
    <li>Cannot talk about your needs or changes in your life that are important</li>
  </ul>
  </div>
  
        </div>
  </div>
      </div>
    </div>
  
  </article>
  <article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
        <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Emotionalandverbalabuse.jpg?VersionId=C1Gc1Hjg2U1nBFmUGd.5ZY6RMztLLpst"></div>
                <div class="heading-description heading-description--half-width">
            <h1>Emotional and verbal abuse</h1>
            <p><strong>You may not think you are being abused if you're not being hurt physically.</strong> But emotional and verbal abuse can have short-term and long-lasting effects that are just as serious as the effects of physical abuse. Emotional and verbal abuse includes insults and attempts to scare, isolate, or control you. It is also often a sign that physical abuse may follow. Emotional and verbal abuse may also continue if physical abuse starts. If you have been abused, it is never your fault.</p>

                    </div>
    </div>

<div style="text-align: right; padding: 1rem 0px;"><button class="usa-button">Expand All</button></div><div class="qa-wrapper">
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I tell if I’m being emotionally or verbally abused? ",
      content: `

    <div class="answer expanded"><p>You may be experiencing emotional or verbal abuse if someone:</p>

<ul>
	<li>Wants to know what you’re doing all the time and wants you to be in constant contact</li>
	<li>Demands passwords to things like your phone, email, and social media and shows other <a href="/relationships-and-safety/other-types/dating-violence-and-abuse#3">signs of digital abuse</a></li>
	<li>Acts very jealous, including constantly accusing you of cheating</li>
	<li>Prevents or discourages you from seeing friends or family</li>
	<li>Tries to stop you from going to work or school</li>
	<li>Gets angry in a way that is frightening to you</li>
	<li>Controls all your finances or how you spend your money</li>
	<li>Stops you from seeing a doctor</li>
	<li>Humiliates you in front of others</li>
	<li>Calls you insulting names (such as “stupid,” “disgusting,” “worthless,” “whore,” or “fat”)</li>
	<li>Threatens to hurt you, people you care about, or pets</li>
	<li>Threatens to call the authorities to report you for wrongdoing</li>
	<li>Threatens to harm himself or herself when upset with you</li>
	<li>Says things like, “If I can’t have you, then no one can”</li>
	<li>Decides things for you that you should decide (like what to wear or eat)</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does emotional and verbal abuse start?",
      content: `

    <div class="answer"><p>Emotional and verbal abuse may begin suddenly. Some abusers may start out behaving normally and then begin abuse after a relationship is established. Some abusers may purposefully give a lot of love and attention, including compliments and requests to see you often, in the beginning of a relationship. Often, the abuser tries to make the other person feel strongly bonded to them, as though it is the two of them “against the world.”</p>

<p>Over time, abusers begin to insult or threaten their victims and begin controlling different parts of their lives. When this change in behavior happens, it can leave victims feeling shocked and confused. You may feel embarrassed or foolish for getting into the relationship. If someone else abuses you, it’s never your fault.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the effects of emotional or verbal abuse?",
      content: `

    <div class="answer"><p>Staying in an emotionally or verbally abusive relationship can have long-lasting effects on your physical and mental health, including leading to chronic pain, <a href="/a-z-topics/depression">depression</a>, or <a href="/node/">anxiety</a>. <a href="/relationships-and-safety/effects-violence-against-women">Read more about the effects on your health</a>.</p>

<p>You may also:</p>

<ul>
	<li>Question your memory of events: “Did that really happen?” (See <a href="#4">Gaslighting</a>.)</li>
	<li>Change your behavior for fear of upsetting your partner or act more aggressive or more passive than you would be otherwise</li>
	<li>Feel ashamed or guilty</li>
	<li>Feel constantly afraid of upsetting your partner</li>
	<li>Feel powerless and hopeless</li>
	<li>Feel manipulated, used, and controlled</li>
	<li>Feel unwanted</li>
</ul>

<p>Your partner’s behavior may leave you feeling as though you need to do anything possible to restore peace and end the abuse. This can feel stressful and overwhelming.</p>

<p>Learn ways to cope and where to <a href="/relationships-and-safety/get-help">get help</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is gaslighting?",
      content: `

    <div class="answer"><p>“Gaslighting” is the word used when an abuser makes you feel like you are losing your mind or memory.</p>

<p>An abuser might:<a href="#references"><sup>1</sup></a></p>

<ul>
	<li>Deny an event happened</li>
	<li>Call you crazy or overly sensitive</li>
	<li>Describe an event as completely different from how you remember it</li>
</ul>

<p>Gaslighting is a form of emotional abuse that abusers use to maintain power and control. When a victim is questioning her memories or her mind, she may be more likely to feel dependent on the abuser and stay in the relationship.</p>

<p>Gaslighting happens over time, and you may not notice it at first. Learn how to <a href="/relationships-and-safety/get-help">get help</a>&nbsp;if you feel gaslighting is happening in your relationship.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I get help for emotional or verbal abuse?",
      content: `

    <div class="answer"><p>If you are in immediate danger, call 911.</p>

<p>If you aren’t in immediate danger, reach out to a trusted friend or family member, therapist, or volunteer with an abuse shelter or <a href="http://www.thehotline.org/" title="The Domestic Violence Hotline" class="external-link external-popup" target="_blank">domestic violence hotline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. Learn more about how to <a href="/relationships-and-safety/get-help">get help</a>&nbsp;if you are in an emotionally or verbally abusive relationship.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about emotional and verbal abuse? ",
      content: `

    <div class="answer"><p>For more information about emotional and verbal abuse, call the OWH Helpline at 1-800-994-9662 or check out the following resources from other organizations:</p>

<ul>
	<li><a href="http://www.womenslaw.org/simple.php?sitemap_id=38" class="external-link external-popup" target="_blank">Am I Being Abused? <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Checklist from WomensLaw.org.</li>
	<li><a href="http://www.helpguide.org/articles/abuse/domestic-violence-and-abuse.htm" class="external-link external-popup" target="_blank">Domestic Violence and Abuse: Signs of Abuse and Abusive Relationships <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Fact sheet from HelpGuide.org.</li>
	<li><a href="https://www.med.umich.edu/abusehurts/abuse_emotional.pdf" class="external-link external-popup" target="_blank">Emotional Abuse Hurts <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> (PDF, 57 KB) — Information on patterns of emotional abuse from the University of Michigan Health System.</li>
	<li><a href="http://www.ncdsv.org/images/powercontrolwheelnoshading.pdf" class="external-link external-popup" target="_blank">Power and Control Wheel <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> (PDF, 84 KB) — Examples of physical, verbal, and sexual abuse and violence developed by the Domestic Abuse Intervention Project.</li>
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
	<li>National Domestic Violence Hotline. (2014). <a href="http://www.thehotline.org/2014/05/what-is-gaslighting/" class="external-link external-popup" target="_blank">What is Gaslighting? <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
</ol>
</div>

      </div>
</div>
    </div>
  </div>

</article>
<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
        <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Gethelp.jpg?VersionId=UOK2Wm2g2MpB8pW8eqFWrPgMCT13LjVD"></div>
                <div class="heading-description heading-description--half-width">
            <h1>Get help</h1>
            <p><strong>The resources on this page are free and confidential.</strong> Find support, guidance, and help if you have been abused in any way.</p>

                    </div>
    </div>

<div style="text-align: right; padding: 1rem 0px;"><button class="usa-button">Expand All</button></div><div class="qa-wrapper">
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "The National Domestic Violence Hotline",
      content: `

    <div class="answer"><ul>
	<li>Call 800-799-SAFE (7233).</li>
	<li>Staff is available 24 hours a day, 7 days a week.</li>
	<li>Get information in more than 170 languages.</li>
	<li>You will hear a recording and may have to wait for a short time.</li>
	<li>Hotline staff offer safety planning and crisis help. They can connect you to shelters and services in your area.</li>
	<li>Staff can send out written information on topics such as domestic violence, sexual assault, and the legal system.</li>
	<li>You can also get help through email or live chat on the hotline’s&nbsp;<a href="http://www.thehotline.org/help/" title="The National Domestic Violence Hotline" class="external-link external-popup" target="_blank">contact page <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;(link is external).</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "The National Dating Abuse Helpline",
      content: `

    <div class="answer"><ul>
	<li>Call 866-331-9474 or 866-331-8453 (TDD).</li>
	<li>Staff is available 24 hours a day, 7 days a week.</li>
	<li>You will hear a recording and may have to wait for a short time.</li>
	<li>You can get help through a live online chat from 5 p.m. to 3 a.m. ET. Learn more about the&nbsp;<a href="http://www.loveisrespect.org/" title="Loveisrespect" class="external-link external-popup" target="_blank">National Dating Abuse Helpline live chat <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>You can also chat with helpline staff via email or text “loveis” to 22522.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "The National Sexual Assault Hotline",
      content: `

    <div class="answer"><ul>
	<li>Call 800-656-4673.</li>
	<li>Staff is available 24 hours a day, 7 days a week.</li>
	<li>You will hear a recording that asks whether you prefer English or Spanish and whether you want to talk to a hotline staff member.</li>
	<li>You can get live online help through the&nbsp;<a href="https://www.rainn.org/get-help" title="RAINN" class="external-link external-popup" target="_blank">National Sexual Assault&nbsp;Online&nbsp;Hotline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> in English or Spanish.</li>
</ul>
</div>

      </div>
</div>
    </div>
  </div>

</article>
<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
        <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Howtohelpafriendwhoisbeingabused.jpg?VersionId=IXYDLL_mXAHSoJSIYkTCd9E1AdUohnLs"></div>
                <div class="heading-description heading-description--half-width">
            <h1>How to help a friend who is being abused</h1>
            <p><strong>Whether you suspect that a friend or family member is being abused</strong> or you witnessed someone being abused, you can take steps to help.</p>

                    </div>
    </div>

<div style="text-align: right; padding: 1rem 0px;"><button class="usa-button">Expand All</button></div><div class="qa-wrapper">
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are signs that someone may be abused?",
      content: `

    <div class="answer"><p>According to the National Domestic Violence Hotline, some warning signs include the following:<sup><a href="#references">1</a></sup></p>

<ul>
	<li>Their partner insults them in front of other people.</li>
	<li>They are constantly worried about making their partner angry.</li>
	<li>They make excuses for their partner’s behavior.</li>
	<li>Their partner is extremely jealous or possessive.</li>
	<li>They have unexplained marks or injuries.</li>
	<li>They’ve stopped spending time with friends and family.</li>
	<li>They are depressed or anxious, or you notice changes in their personality.</li>
</ul>

<p>If you think your friend or family member is being abused, be supportive by listening to them and asking questions about how they’re doing. The person being abused may not be ready or able to leave the relationship right now.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I help someone who is being abused?",
      content: `

    <div class="answer"><p>Knowing or thinking that someone you care about is in a violent relationship can be very hard. You may fear for her safety — and maybe for good reason. You may want to rescue her or insist she leave, but every adult must make her own decisions.</p>

<p>Each situation is different, and the people involved are all different too. Here are some ways to help a loved one who is being abused:</p>

<ul>
	<li><strong>Set</strong>&nbsp;<strong>up</strong>&nbsp;<strong>a time to talk.</strong>&nbsp;Try to make sure you have privacy and won’t be distracted or interrupted. Visit your loved one in person if possible.</li>
	<li><strong>Let her know you’re concerned about her safety.</strong>&nbsp;Be honest. Tell her about times when you were worried about her. Help her see that abuse is wrong. She may not respond right away, or she may even get defensive or deny the abuse. Let her know you want to help and will be there to support her in whatever decision she makes.</li>
	<li><strong>Be supportive.</strong>&nbsp;Listen to your loved one. Keep in mind that it may be very hard for her to talk about the abuse. Tell her that she is not alone and that people want to help. If she wants help, ask her what you can do.</li>
	<li><strong>Offer specific help.</strong>&nbsp;You might say you are willing to just listen, to help her with child care, or to provide transportation, for example.</li>
	<li><strong>Don’t place shame, blame, or guilt on her.</strong>&nbsp;Don’t say, “You just need to leave.” Instead, say something like, “I get scared thinking about what might happen to you.” Tell her you understand that her situation is very difficult.</li>
	<li><strong>Help her make a safety plan.</strong>&nbsp;<a href="/relationships-and-safety/domestic-violence/leaving-abusive-relationship" title="Leaving an abusive relationship">Safety planning</a>&nbsp;might include packing important items and helping her find a “safe” word. This is a code word she can use to let you know she is in danger without an abuser knowing. It might also include agreeing on a place to meet her if she has to leave in a hurry.</li>
	<li><strong>Encourage her to talk to someone who can help.</strong>&nbsp;Offer to help her find a local domestic violence agency. Offer to go with her to the agency, the police, or court. The <a href="http://www.thehotline.org/" title="The National Domestic Violence Hotline" class="external-link external-popup" target="_blank">National Domestic Violence Hotline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>, 800-799-SAFE (7233); the <a href="https://www.rainn.org/about-national-sexual-assault-telephone-hotline" title="RAINN" class="external-link external-popup" target="_blank">National Sexual Assault Hotline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>, 800-656-HOPE (4673); and the <a href="http://www.loveisrespect.org/" title="Loveisrespect" class="external-link external-popup" target="_blank">National Teen Dating Abuse Helpline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>, 866-331-9474, are all available 24 hours a day, 7 days a week. They can offer advice based on experience and can help find local support and services.</li>
	<li><strong>If she decides to stay, continue to be supportive.</strong>&nbsp;She may decide to stay in the relationship, or she may leave and then go back many times. It may be hard for you to understand, but people stay in abusive relationships for many reasons. Be supportive, no matter what she decides to do.</li>
	<li><strong>Encourage her to do things outside of the relationship.</strong>&nbsp;It’s important for her to see friends and family.</li>
	<li><strong>If she decides to leave, continue to offer help.</strong>&nbsp;Even though the relationship was abusive, she may feel sad and lonely once it is over. She may also need help getting services from agencies or community groups.</li>
	<li><strong>Let her know that you will always be there no matter what.</strong> It can be very frustrating to see a friend or loved one stay in an abusive relationship. But if you end your relationship, she has one less safe place to go in the future. You cannot force a person to leave a relationship, but you can let them know you’ll help, whatever they decide to do.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do I report domestic violence or abuse?",
      content: `

    <div class="answer"><p>If you see or hear domestic violence or child abuse in your neighborhood or in a public place, call 911. Don’t worry about whether the couple or person will be angry with you for calling. It could be a matter of life and death, and it’s better to be safe than sorry. You don’t have to give your name if you are afraid for your own safety.</p>

<p>If you want to report abuse but there is no immediate danger, ask local police or child/adult protective services to make a welfare check. This surprise check-in by local authorities may help the person being abused.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Did we answer your question about helping someone who is being abused? ",
      content: `

    <div class="answer"><p>For more information about helping someone who is being abused, call the OWH Helpline at 1-800-994-9662 or check out the following resources from other organizations:</p>

<ul>
	<li><a href="https://foh.psc.gov/NYCU/domesticviolence2.asp" title="Tips for Helping a Loved One or Friend Get Out of an Abusive Relationship">Tips for Helping a Loved One or Friend Get Out of an Abusive Relationship</a>&nbsp;— Information from Federal Occupational Health.</li>
	<li><a href="http://www.loveisrespect.org/for-someone-else/help-a-friend/" title="Help a Friend" class="external-link external-popup" target="_blank">Get Help for Someone Else <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Information from loveisrespect.org.</li>
	<li><a href="http://www.thehotline.org/help/help-for-friends-and-family/" title="The National Domestic Violence Hotline" class="external-link external-popup" target="_blank">Help a Friend or Family Member <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Information from the National Domestic Violence Hotline.</li>
	<li><a href="https://www.rainn.org/warning-signs" title="Warning Signs" class="external-link external-popup" target="_blank">Warning Signs <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Information from the Rape, Abuse &amp; Incest National Network (RAINN) on the warning signs of abuse.</li>
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
	<li>National Domestic Violence Hotline. (n.d.). <a href="http://www.thehotline.org/help/help-for-friends-and-family/" class="external-link external-popup" target="_blank">Help a Friend or Family Member <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
</ol>
</div>

      </div>
</div>
    </div>
  </div>

</article>
<article role="article">

  
    

  
  <div>
    
<div class="landing-page-header">
        <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Othertypesofviolenceandabuseagainstwomen.jpg?VersionId=w..RF2ADP19k58ZuQJ6wEuZOMlF1LURS"></div>
                <div class="heading-description heading-description--half-width">
            <h1>Other types of violence and abuse against women</h1>
            <p><strong>Women experience violence in many ways, from physical abuse to sexual assault and from financial abuse to sexual harassment or trafficking. </strong>Whatever form it takes, violence against women can have serious long-term physical and emotional effects.</p>

                    </div>
    </div>

  </div>

</article>
<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
        <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Helpendviolenceagainstwomen.jpg?VersionId=GSbe3zU1a9WDaX22_jV3lDQlVQKrWQHp"></div>
                <div class="heading-description heading-description--half-width">
            <h1>Help end violence against women</h1>
            <p><strong>Every woman has the right to live her life safely and free of violence.</strong> A life without violence is essential to women's health. You can take steps to protect women and to help promote a culture that does not allow or accept violence against women.</p>

                    </div>
    </div>

<div style="text-align: right; padding: 1rem 0px;"><button class="usa-button">Expand All</button></div><div class="qa-wrapper">
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the challenges to ending violence against women? ",
      content: `

    <div class="answer expanded"><p>Ending violence against women and girls is an effort that includes everyone in our society. Violence is a violation of a basic human right for safety. Violence against women has been happening for a long time, but we can work together to prevent it in the future.</p>

<p>Violence against women can be prevented by strengthening women’s access to basic human rights and resources. Research shows that communities with more access to education, jobs, housing, health care, affordable child care and elder care, and equality for both men and women have lower rates of violence against women.<sup><a href="#references">1</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What are the challenges to ending sexual violence against women? ",
      content: `

    <div class="answer"><p>In addition to challenges in ending all violence against women, ending sexual violence against women requires more gender equality in all parts of society. Part of being human is our sexuality. Sex and gender influence many different parts of a person’s life. Sexual violence against women can happen when a woman’s value in society is seen only through her sexuality. When women are not seen as equals to men, they are more likely to be victimized through their sexuality.</p>

<p>Women who have experienced sexual assault are often blamed for the assault. Blaming a woman for another person’s choice to assault her is wrong. Many women who report sexual assault are asked questions about what they were wearing, whether they were drinking or using drugs, or where they were during the assault. These questions imply that the sexual assault was the victim’s fault. Sexual assault is always the responsibility of the person who committed the assault. It is never the victim’s fault.</p>

<p>In order to end sexual violence against women, we must agree as a society that sexual contact between people cannot happen unless there is clear consent.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I help end violence against women?",
      content: `

    <div class="answer"><p>Violence against women hurts the whole community. Learn ways you can work to help end violence against women in your community.</p>

<p>Here are some suggestions:</p>

<ul>
	<li><strong>Call the police</strong>&nbsp;if you see or hear evidence of domestic violence.</li>
	<li><strong>Learn about </strong><a href="https://www.rainn.org/articles/steps-you-can-take-prevent-sexual-assault" title="Steps You Can Take to Prevent Sexual Assault" class="external-link external-popup" target="_blank"><strong>bystander intervention</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><strong>.</strong> You can help prevent sexual assault from happening.</li>
	<li><a href="/relationships-and-safety/get-help/how-help-friend" title="How to help a friend who is being abused"><strong>Support</strong> <strong>a friend or family member</strong></a>&nbsp;who may be in an abusive relationship.</li>
	<li><strong>Volunteer</strong>&nbsp;at a local domestic violence shelter or other organization that helps survivors or works to prevent violence.</li>
	<li><strong>Teach your children early on that they are the ones who decide who gets to touch them and where</strong><strong>.</strong> Consider teaching them the proper names for the parts of their body at a young age so that they can clearly communicate about their bodies. Teach children that it’s their choice whether they want to hug or kiss others, even family.</li>
	<li><strong>Raise children to respect others.</strong> Teach children to treat others as they would like to be treated. Talk to your children about healthy relationships and the importance of treating their dating partners and others with respect. Teach them that consent from a dating partner is a clear “yes” for sexual activity.</li>
	<li><strong>Lead by example.</strong>&nbsp;Work to create a culture that rejects violence as a way to deal with problems. Speak up against messages that say that violence against or mistreatment of women is OK. Don’t be violent or abusive yourself.</li>
	<li><strong>Become an activist.</strong>&nbsp;Participate in an anti-violence event like a local Take Back the Night march. Support domestic violence services and violence prevention programs by donating your time.</li>
	<li><strong>Volunteer in youth programs.</strong>&nbsp;Become a mentor. Get involved in programs that teach young people to solve problems without violence. Get involved with programs that teach teens about healthy relationships and healthy masculinity and femininity.</li>
	<li><strong>Ask about anti-violence policies and programs at work and school.</strong>&nbsp;At work, ask about policies that deal with sexual harassment, for example. On campus, ask about services to escort students to dorms safely at night, emergency call boxes on campus, campus security, and other safety measures. Ask about any bystander intervention training programs that may be happening on campus or at work.</li>
</ul>

<p>Learn more about <a href="http://www.cdc.gov/violenceprevention/sexualviolence/prevention.html" title="Prevention Strategies">national programs</a> to end sexual violence in communities.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Did we answer your question about helping to end violence against women?",
      content: `

    <div class="answer"><p>For more information about ending violence against women, call the OWH Helpline at 1-800-994-9662 or check out the following resources from other organizations:</p>

<ul>
	<li><a href="https://www.cdc.gov/ViolencePrevention/index.html" title="Violence Prevention">Violence Prevention</a>&nbsp;— Information from the Centers for Disease Control and Prevention.</li>
	<li><a href="https://www.rainn.org/articles/your-role-preventing-sexual-assault" title="Your Role in Preventing Sexual Assault" class="external-link external-popup" target="_blank">Your Role in Preventing Sexual Assault <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Information on bystander intervention from the Rape, Abuse &amp; Incest National Network (RAINN).</li>
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
	<li>Centers for Disease Control and Prevention. (2017). <a href="https://www.cdc.gov/violenceprevention/pub/technical-packages.html">Technical Packages for Violence Prevention: Using Evidence-based Strategies in Your Violence Prevention Efforts</a></li>
</ol>
</div>

      </div>
</div>
    </div>
  </div>

</article>
<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
        <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Sexualassaultoncollegecampuses.jpg?VersionId=4_wK8715CEkBuQQHaH9hxg7w6Fg9zoxx"></div>
                <div class="heading-description heading-description--half-width">
            <h1>Sexual assault on college campuses</h1>
            <p><strong>Sexual assault on college campuses is a common problem that often goes unreported.</strong> It includes any unwanted sexual activity, from unwanted touching to rape. Alcohol and drugs often play a role in sexual assault on campuses. If you have been sexually assaulted, it is not your fault. You are not alone, and you can get help.</p>

                    </div>
    </div>

<div style="text-align: right; padding: 1rem 0px;"><button class="usa-button">Expand All</button></div><div class="qa-wrapper">
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How common is sexual assault on college campuses?",
      content: `

    <div class="answer"><p>Sexual assault is common among female students of all ages, races, and ethnicities. One in five women in college experiences sexual assault.<sup><a href="#references">1</a></sup></p>

<p>Studies show that students are at the highest risk of sexual assault in the first few months of their first and second semesters in college.<sup><a href="#references">2</a></sup></p>

<p>Women who identify as lesbian, bisexual, or gay are more likely to experience sexual assault on college campuses than heterosexual women.<sup><a href="#references">1</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Why is sexual assault on college campuses so common?",
      content: `

    <div class="answer"><p>Sexual assault happens everywhere and to women and men of all ages. But it is common on college campuses, and, among adults, sexual assault happens most often to traditionally college-age&nbsp;women (18–24). Colleges that get federal funding are required to publicly report sexual assault.</p>

<ul>
	<li><strong>Alcohol and drugs. </strong>Campus sexual assault often involves alcohol and drugs. One study found that 15% of young women experienced incapacitated rape during their first year of college.<sup><a href="#references">3</a></sup> Being incapacitated means these young women were raped when they could not give consent because they did not know what was happening. Many young adults use alcohol or drugs for the first time during college. Using drugs or drinking too much alcohol can make you unaware of what is happening around you and to you.</li>
	<li><strong>Reporting sexual assault. </strong>Only one in five college-age women who are sexually assaulted report the attack to the police.<sup><a href="#references">4</a></sup> Talking about sexual assault to strangers can be difficult, but reporting sexual assault can prevent attackers from hurting others and help you feel more in control. Reporting also helps school officials make arrangements so you do not have to have contact with someone who assaulted you.</li>
	<li><strong>Peer pressure.</strong> College-age women often live with people their own age on campus, rather than parents or other older adults. Students may feel peer pressure to participate in social activities like drinking, using drugs, going to parities, or engaging in sexual activities that make them uncomfortable. Being forced into unwanted sexual activity for social acceptance is a type of <a href="/relationships-and-safety/other-types/sexual-coercion" title="Sexual coercion">sexual coercion</a>.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What steps can I take to be safer on a college campus?",
      content: `

    <div class="answer"><p>You cannot prevent sexual assault because violent or abusive behavior is always the responsibility of the person who is violent or abusive. However, you can take steps to be safer around others and help keep others safe from potential perpetrators:<sup><a href="#references">5</a>,<a href="#references">6</a>,<a href="#references">7</a></sup></p>

<ul>
	<li><strong>Get to know someone well before spending time alone with him or her.</strong> College is often about meeting new people and making new friends. But do not rely only on someone you just met to keep you safe.</li>
	<li><strong>Go to parties or hangouts with friends.</strong> Arrive together, check in with each other, and leave together. Talk about your plans for the evening so that everyone knows what to expect.</li>
	<li><strong>Meet first dates or new people in a public place. </strong></li>
	<li><strong>Listen to your instincts or “gut feelings.”</strong> Most women who are sexually assaulted know the person who assaults them. If you find yourself alone with someone you don’t trust, leave. If you feel uncomfortable in any situation for any reason, leave. You are the only person who gets to say whether you feel safe.</li>
	<li><strong>Be aware of your alcohol or drug intake.</strong> Research shows that about half of sexual assault victims had been drinking when the attack happened.<sup><a href="#references">8</a></sup> Drinking alcohol does not make the attack your fault, but using alcohol and drugs can lead to being unaware of what is happening around you or to you.</li>
	<li><strong>Keep control of your own drink,</strong> because someone could put drugs or alcohol in it without you knowing.</li>
	<li><strong>Get help right away</strong> if you feel drunk and haven’t drunk any alcohol or if the effects of alcohol feel stronger than usual. This can happen if someone put a <a href="/a-z-topics/date-rape-drugs" title="Date rape drugs">date rape drug</a> into your drink. Date rape drugs have no smell or taste and can cause you to pass out and not remember what happened.</li>
	<li><strong>Be aware of your surroundings.</strong> Especially if walking alone, avoid talking on your phone or listening to music with headphones. Know where you are as you move around the campus. At night, stay in lighted areas, or ask a friend or campus security to go with you.</li>
	<li><strong>Know your resources.</strong> You need to know where you can get help if you need it. Know where the campus sexual assault center, the campus police, and the campus health center are. Find the campus emergency phones and put the campus security number into your cellphone.</li>
	<li><strong>Have a plan to get home.</strong> If you are going to use a ride sharing app, make sure your phone is charged. Consider keeping a credit card or cash as a backup for a taxi.</li>
</ul>

<p>Find other tips for safety on campus at the <a href="https://www.rainn.org/articles/staying-safe-campus" title="RAINN" class="external-link external-popup" target="_blank">Rape, Abuse &amp; Incest National Network <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What should I do if I am sexually assaulted while in college? ",
      content: `

    <div class="answer"><p>If you are sexually assaulted, it is not your fault, regardless of the circumstances. If you are in immediate danger, call 911. If you are in a safe place, you can call 911 to report the sexual assault to the police as soon as possible.</p>

<p>If the sexual assault happened on campus or the person who harmed you was a student, you can also report it to school authorities for additional support. The school <a href="http://knowyourix.org/title-ix/title-ix-the-basics/" title="Title IX - Know Your IX" class="external-link external-popup" target="_blank">is required <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> to help you continue your education. There are options to help you feel safe on campus, such as requesting to change class schedules, changing dorms, or obtaining a no-contact order. Schools that receive federal funding may provide other forms of support, such as counseling or tutoring, if you need it because of a sexual assault on campus.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are some effects of sexual assault on campus?",
      content: `

    <div class="answer"><p>Women who are sexually assaulted may face health problems that include <a href="/a-z-topics/depression" title="Depression">depression</a>, <a href="/a-z-topics/anxiety-disorders" title="Anxiety disorders">anxiety</a>, and <a href="/mental-health/illnesses/post-traumatic-stress-disorder.html" title="Post-traumatic stress disorder">post-traumatic stress disorder</a>. But they may also have trouble reporting the assault or getting help they are entitled to from the school. Women may also see the person who harmed them regularly in classes, dorms, or other places on campus, which can make it harder to recover from the assault.</p>

<p>One study found that among rape survivors who stayed on campus, nearly one in three had academic problems and more than one in five considered leaving school.<sup><a href="#references">1</a></sup></p>

<p>If you’ve been sexually assaulted, know that you are not alone. <a href="/relationships-and-safety/sexual-assault-and-rape/sexual-assault#8" title="What do I do if I’ve been sexually assaulted?">Learn what you can do if you’ve been sexually assaulted</a>. This includes going to school authorities and getting help. Your school is required to help you if you’ve been assaulted on campus.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I be safer when studying abroad?",
      content: `

    <div class="answer"><p>The risk of rape may be up to five times higher during a semester studying abroad than on a college campus in the United States.<sup><a href="#references">9</a></sup></p>

<p>When studying abroad, you can follow the same tips that can help you be safer at your home campus. These include being aware of your surroundings, always going out and staying with a group, either not drinking or limiting your drinking to a level at which you still feel in control, and watching your drink at all times.</p>

<p>Before you go, check out information about the country in which you will be living on the U.S. Department of State website <a href="https://travel.state.gov/content/studentsabroad/en.html" title="Students Abroad">Students Abroad</a>. You can enroll in a program called the <a href="https://step.state.gov/step/" title="Smart Traveler Enrollment Program">Smart Traveler Enrollment Program</a> to get safety information and connect with the U.S. embassy in the country where you will be studying.</p>

<p><a href="https://sashaa.org/" title="SASHAA (Sexual Assault Support and Help for Americans Abroad)" class="external-link external-popup" target="_blank">Sexual Assault Support and Help for Americans Abroad <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> offers <a href="https://sashaa.org/knowb4ugo/" title="Know Before You Go | SASHAA" class="external-link external-popup" target="_blank">pre-travel information <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>, <a href="https://sashaa.org/staying-safe-studying-abroad/" title="Study Abroad | SASHAA" class="external-link external-popup" target="_blank">tips for staying safe <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>, and an international <a href="https://sashaa.org/crisis-center/" title="Crisis Center | SASHAA" class="external-link external-popup" target="_blank">crisis line <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about sexual assault on campus? ",
      content: `

    <div class="answer"><p>For more information about sexual assault on campus, call the OWH Helpline at 1-800-994-9662 or check out these resources from the following organizations:</p>

<ul>
	<li><a href="http://endrapeoncampus.org/" title="End Rape on Campus" class="external-link external-popup" target="_blank">End Rape on Campus <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Resources and information about sexual assault and rape on college campuses.</li>
	<li><a href="https://www.rainn.org/articles/reporting-law-enforcement" title="Reporting to Law Enforcement" class="external-link external-popup" target="_blank">Reporting to Law Enforcement <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Information from the Rape, Abuse &amp; Incest National Network (RAINN).</li>
	<li><a href="http://www.cdc.gov/violenceprevention/pdf/sv-factsheet.pdf">Understanding Sexual Violence</a> (PDF, 382 KB) — Fact sheet from the Centers for Disease Control and Prevention.</li>
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
	<li>Krebs, C., Lindquist, C., Berzofsky, M., Shook-Sa, B., Peterson, K. (2016). <a href="https://www.bjs.gov/content/pub/pdf/ccsvsftr.pdf">Campus Climate Survey Validation Study Final Technical Report</a>. Bureau of Justice Statistics, U.S. Department of Justice.&nbsp;</li>
	<li>Rape, Abuse &amp; Incest National Network. (2016). <a href="https://www.rainn.org/statistics/campus-sexual-violence" class="external-link external-popup" target="_blank">Campus Sexual Violence Statistics <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>Carey, K.B., Durney, S.E., Shepardson, R.L., Carey, M.P. (2015). <a href="http://www.ncbi.nlm.nih.gov/pubmed/26562590">Precollege Predictors of Incapacitated Rape Among Female Students in Their First Year of College</a>. <em>Journal of Studies on Alcohol and Drugs;</em> 76, 829-837. &nbsp;</li>
	<li>U.S. Department of Justice, Office of Justice Programs, Bureau of Justice Statistics. (2014). <a href="https://www.bjs.gov/content/pub/pdf/rsavcaf9513.pdf">Rape and Sexual Victimization Among College-Aged Females, 1995-2013</a>.</li>
	<li>RAINN. (2016). <a href="https://www.rainn.org/safety-prevention" class="external-link external-popup" target="_blank">Safety &amp; Prevention <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>University of Michigan Sexual Assault Prevention and Awareness Center. (2016). <a href="https://sapac.umich.edu/article/51" class="external-link external-popup" target="_blank">Drugs &amp; Sexual Assault <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>RAINN. (2016). <a href="https://www.rainn.org/articles/staying-safe-campus" class="external-link external-popup" target="_blank">Staying Safe on Campus <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>National Institute on Alcohol Abuse and Alcoholism. (n.d.).&nbsp;<a href="https://pubs.niaaa.nih.gov/publications/arh25-1/43-51.htm">Alcohol and Sexual Assault</a>.</li>
	<li>Kimble, M., Flack, W.F., Jr., Burbridge, E. (2013). <a href="http://changingourcampus.org/application/files/6514/5927/8544/Relevant-Research-Sexual-Assault-and-Study-Abroad.pdf" class="external-link external-popup" target="_blank">Study abroad increases risk of sexual assault in female undergraduates: A preliminary report <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Psychological Trauma: Theory, Research, Practice, and Policy; </em>5: 426-430.</li>
</ol>
</div>

      </div>
</div>
    </div>
  </div>

</article>
<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
        <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Rape.jpg?VersionId=LSZIWHmP3WPxXdg1WCVTt3bMi653uyTC"></div>
                <div class="heading-description heading-description--half-width">
            <h1>Rape</h1>
            <p><strong>Rape is a type of sexual assault that includes sexual penetration, no matter how slight, without consent. </strong>Although other types of sexual assault may be done by men or women, rape is almost always done by men.<sup><a href="#references">1</a> </sup>Most women who are raped are raped by someone they know, such as a former or current intimate partner, an acquaintance, or a family member.<sup><a href="#references">1</a> </sup>Rape is never the victim's fault.</p>

                    </div>
    </div>

<div style="text-align: right; padding: 1rem 0px;"><button class="usa-button">Expand All</button></div><div class="qa-wrapper">
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is rape?",
      content: `

    <div class="answer"><p>The U.S. Department of Justice defines rape as “the penetration, no matter how slight, of the vagina or anus with any body part or object, or oral penetration by a sex organ of another person, without the consent of the victim.”<sup><a href="#references">3</a></sup> The federal government uses this legal definition to collect information from local police about rape. The legal definition of rape may be slightly different in your community.</p>

<p>Giving your consent means giving <a href="/relationships-and-safety/sexual-assault-and-rape/sexual-assault#3">a clear “yes”</a>&nbsp;to any type of sexual activity, though the laws about consent vary from state to state. It is also rape when penetration takes place when you are drunk, high, drugged, passed out, or asleep and cannot give consent. People under the age of 18 (in most states) cannot give consent to sexual activity with an adult.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I tell if I have been raped?",
      content: `

    <div class="answer"><p>You may not be sure if you were raped. The definition of rape is different in different states. But you may have been raped if you were penetrated — even partially — by a body part or object without your permission. In some states, penetration by other body parts, such as fingers or objects, is also rape. If you were drinking, were drugged, or were unconscious, you may not know if you were raped.</p>

<p>Find out more and get help by calling the Rape, Abuse &amp; Incest National Network (<a href="https://www.rainn.org/" title="RAINN" class="external-link external-popup" target="_blank">RAINN <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>) at 800-656-HOPE (4673).</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What should I do if I have been raped?",
      content: `

    <div class="answer"><ul>
	<li><strong>Get to a safe place. </strong>Call 911 if you can. The most important thing after a rape is your safety.</li>
	<li><strong>Don’t wash or clean your body.</strong> If you shower, bathe, or wash after an assault, you might wash away important evidence. Don’t brush, comb, or clean any part of your body, including your teeth. Don’t change clothes, if possible. Don’t touch or change anything at the scene of the assault. That way, the local police will have physical evidence from the person who assaulted you.</li>
	<li><strong>Get medical care. </strong>Call 911 or go to your nearest hospital emergency room. You need to be examined and treated for injuries. A doctor or nurse may give you medicine to prevent HIV and some other <a href="/a-z-topics/sexually-transmitted-infections" title="Sexually transmitted infections">sexually transmitted infections (STIs)</a><strong> </strong>and <a href="/a-z-topics/emergency-contraception" title="Emergency contraception">emergency contraception</a><strong> </strong>to prevent pregnancy.<br>
	The <a href="https://www.rainn.org/about-national-sexual-assault-telephone-hotline" title="RAINN" class="external-link external-popup" target="_blank">National Sexual Assault Hotline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> at 800-656-HOPE (4673) can help you find a hospital with staff members who are trained to collect evidence of sexual assault. Ask for a <a href="https://www.rainn.org/articles/what-sanesart" title="What is a SAFE/SANE?" class="external-link external-popup" target="_blank">sexual assault forensic examiner (SAFE) or a sexual assault nurse examiner (SANE) <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. A doctor or nurse will use a rape kit to collect evidence. This might be fibers, hairs, saliva, semen, or clothing left behind by the attacker. <strong>You do not have to decide whether to press charges while at the hospital. You do not need to press charges in order to have evidence collected with a rape kit.</strong></li>
	<li><strong>If you think you were drugged, talk to the hospital staff</strong> about being tested for <a href="/a-z-topics/date-rape-drugs" title="Date rape drugs">date rape drugs</a>, such as Rohypnol and GHB (gamma-hydroxybutyric acid). Date rape drugs pass through the body quickly and may not be detectable by the time you get tested.</li>
	<li><strong>Reach out for help.</strong> The hospital staff can connect you with the local rape crisis center. Staff there can help you make choices about reporting the sexual assault and getting help through counseling and support groups. You can also call a friend or family member you trust to call a crisis center or hotline for you. Crisis centers and hotlines have trained volunteers and other professionals (such as mental health professionals) who can help you find support and resources near you. One hotline is the <a href="https://www.rainn.org/about-national-sexual-assault-telephone-hotline" title="RAINN" class="external-link external-popup" target="_blank">National Sexual Assault Hotline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;at 800-656-HOPE (4673). If you are in the military, you may also call the <a href="https://www.safehelpline.org/" title="Army, Navy, Marine Corps, Air Force and Coast Guard rape, sexual assault help" class="external-link external-popup" target="_blank">Department of Defense (DOD) Safe Helpline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;at 877-995-5247.</li>
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
      title: "Why do I need medical care after a rape?",
      content: `

    <div class="answer"><p>After a rape, it can be difficult to think about being touched in personal areas by doctors or nurses. But it’s important that you <a href="#5">get examined</a> by health professionals who can look for internal injuries and get you medicines to prevent <a href="/a-z-topics/sexually-transmitted-infections" title="Sexually transmitted infections">sexually transmitted infections (STIs)</a> and pregnancy.</p>

<p>Go to a hospital emergency room or a special clinic where staff are specially trained to treat rape and sexual assault victims. To find a special clinic in your community, call the Rape, Abuse &amp; Incest National Network (<a href="http://www.rainn.org" title="RAINN" class="external-link external-popup" target="_blank">RAINN <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>) at 800-656-HOPE (4673). The police can also tell you where to find a clinic in your area.</p>

<p>If you think you were drugged, ask the hospital or clinic to take a urine sample. This will make it possible to test for <a href="/a-z-topics/date-rape-drugs" title="Date rape drugs">date rape drugs</a> like Rohypnol or GHB (gamma-hydroxybutyric acid). But these drugs pass through the body quickly and may not be detectable by the time you are tested.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What happens at the hospital?",
      content: `

    <div class="answer"><p>Even if you were not physically injured, you may need a full and complete medical exam. This type of medical exam is called a sexual assault forensic exam. It should be very thorough and might take several hours.</p>

<p>If you give permission for the doctors and nurses to do a sexual assault exam, that does not mean you are required to report the rape to the police. Giving your permission for the exam only means the doctors and nurses have your permission to collect DNA and other evidence from your body.</p>

<p>You might have heard of something called a rape kit. This is a container with several things in it that help a doctor, nurse, or examiner collect evidence of rape. These kits usually include a checklist. This helps to make sure all procedures are followed correctly. They may also include forms for collecting the facts and tubes and envelopes for physical evidence and DNA.</p>

<p>Collecting this evidence is important. If the rapist is caught and prosecuted, the evidence will be used in court. Even if the attacker is not identified or arrested, his DNA can be added to a national database. This can make it possible to connect the attacker to a future crime if he does it again.</p>

<p>The hospital or clinic will usually set up a follow-up appointment. This will help to make sure any injury continues to be treated and that you are getting any other care, such as counseling, that you might need.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Can I get medicine to prevent sexually transmitted infections and HIV after a rape?",
      content: `

    <div class="answer"><p>Yes. The hospital or clinic can give you medicines that can help keep you from getting many <a href="/a-z-topics/sexually-transmitted-infections" title="Sexually transmitted infections">sexually transmitted infections</a>. This is called a prophylactic (proh-fuh-LAK-tik) treatment. It helps to keep you from getting an infection in case you have been exposed. Medicines should be given as soon as possible.</p>

<p>The hospital or clinic can also give you medicine, called <a href="https://www.hiv.gov/hiv-basics/hiv-prevention/using-hiv-medication-to-reduce-risk/post-exposure-prophylaxis" title="Post-Exposure Prophylaxis">post-exposure prophylaxis (PEP)</a>, to help keep you from getting HIV. PEP should be given within 72 hours of the rape.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can I get medicine to prevent pregnancy after a rape?",
      content: `

    <div class="answer"><p>Most hospitals or clinics can give you <a href="/a-z-topics/emergency-contraception" title="Emergency contraception">emergency contraception pills</a>&nbsp;to keep you from getting pregnant, or you can buy them over the counter at the drugstore. These pills are sometimes called morning-after pills. Emergency contraception is not the same thing as the abortion pill. Emergency contraception has the same hormones found in regular <a href="/a-z-topics/birth-control-methods" title="Birth control methods">birth control pills</a>. Emergency contraception prevents you from ovulating (releasing an egg from the ovary) or prevents sperm from fertilizing an egg. Emergency contraception works best when taken as soon as possible.<sup><a href="#references">4</a></sup> <a href="/a-z-topics/emergency-contraception" title="Emergency contraception">Learn more about emergency contraception</a>.</p>

<p><a href="http://www.pandys.org/articles/rapeandpregnancy.html" title="Rape and Pregnancy" class="external-link external-popup" target="_blank">Get help <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> if you are raped and become pregnant.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What if I can’t afford to pay?",
      content: `

    <div class="answer"><p>Under the <a href="https://www.gpo.gov/fdsys/pkg/BILLS-113s47enr/pdf/BILLS-113s47enr.pdf">Violence Against Women Act</a> (PDF, 410 KB), your medical exam after sexual assault should be free. Every state also has a crime victim compensation program. The <a href="http://www.nacvcb.org/index.asp?sid=6" title="State Links" class="external-link external-popup" target="_blank">National Association of Crime Victim Compensation Boards <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> provides links to every state’s program. These programs can help you with medical expenses, counseling, and lost pay from missing work.</p>

<p>You can get more information and counseling from the Rape, Abuse &amp; Incest National Network (<a href="https://www.rainn.org/" title="RAINN" class="external-link external-popup" target="_blank">RAINN <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>) at 800-656-HOPE (4673).</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What happens if I decide to report a rape?",
      content: `

    <div class="answer"><p>If you decide to report a rape to the police, they may begin an investigation to collect evidence of the crime. The police will file an official report. Sometimes the police arrest the attacker if they believe the attacker is an immediate danger to you or anyone else in the community. If the evidence is strong enough, the lawyer for the state government, the prosecutor, will charge the attacker with a crime.</p>

<p>You will have to answer questions from the police and lawyers about the rape. You may be asked to testify in court if the attacker is charged with a crime.</p>

<p>Consider asking a friend, relative, or advocate to come with you to the police station. Having someone else present with you when you report the rape may help the situation feel less scary or overwhelming.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How common are false rape charges?",
      content: `

    <div class="answer"><p>Many women are afraid to report a rape or sexual assault because they fear no one will believe them. And false rape charges are often talked about in the media. But researchers think that less than 10% of reported rapes are false.<sup><a href="#references">5</a></sup></p>

<p>Just as it is impossible to know the exact number of rapes or sexual assaults, it is impossible to know the exact number of false accusations. Sexual assault is a serious crime, and charges must be taken seriously by everyone involved.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about rape?",
      content: `

    <div class="answer"><p>For more information about rape, call the OWH Helpline at 1-800-994-9662 or check out the following resources from other organizations:</p>

<ul>
	<li><a href="http://changingourcampus.org/about-us/not-alone/" title="Protecting Students from Sexual Assault" class="external-link external-popup" target="_blank">Not Alone <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Information from the Center for Changing Our Campus Culture.</li>
	<li><a href="http://www.pandys.org/articles/rapeandpregnancy.html" title="Rape and Pregnancy" class="external-link external-popup" target="_blank">Rape and Pregnancy <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Information from Pandora’s Project.</li>
	<li><a href="http://endsexualviolence.org/where-we-stand/rape-exemptions-and-abortions" title="Rape Exemptions and Abortions" class="external-link external-popup" target="_blank">Rape Exemptions and Abortions <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;— Information from End Sexual Violence.</li>
	<li><a href="https://www.rainn.org/articles/reporting-law-enforcement" title="Reporting to Law Enforcement" class="external-link external-popup" target="_blank">Reporting to Law Enforcement <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Information from the Rape, Abuse &amp; Incest National Network (RAINN).</li>
	<li><a href="http://www.cdc.gov/violenceprevention/pdf/sv-factsheet.pdf">Understanding Sexual Violence</a> (PDF, 382 KB) — Fact sheet from the Centers for Disease Control and Prevention.</li>
	<li><a href="https://www.rainn.org/articles/rape-kit" title="What Is a Rape Kit?" class="external-link external-popup" target="_blank">What Is a Rape Kit? <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Information from RAINN.</li>
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
	<li>Walters, M. L., Chen, J., Breiding, M. J. (2013). <a href="http://www.cdc.gov/violenceprevention/pdf/nisvs_sofindings.pdf">The National Intimate Partner and Sexual Violence Survey: 2010 Findings on Victimization by Sexual Orientation</a>.</li>
	<li>U.S. Department of Justice. (2012).&nbsp;<a href="https://www.justice.gov/archives/opa/blog/updated-definition-rape">An Updated Definition of Rape</a>.</li>
	<li>American College of Obstetricians and Gynecologists. (2015). <a href="https://www.acog.org/-/media/For-Patients/faq114.pdf?dmc=1&amp;ts=20160801T1131273290" class="external-link external-popup" target="_blank">Emergency Contraception. FAQ 114 <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>Lisak, D., Gardinier, L., Nicksa, S. C., Cote, A. M. (2010).&nbsp; <a href="https://www.ncbi.nlm.nih.gov/pubmed/21164210">False allegations of sexual assault: An analysis of ten years of reported cases</a>. <em>Violence Against Women, </em>16(12): 1318-34. doi: 10.1177/1077801210387747.</li>
</ol>
</div>

      </div>
</div>
    </div>
  </div>

</article>
<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
        <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Signsofdomesticviolenceorabuse.jpg?VersionId=4BbtHlFB3qjn7T1YP6qgV6wgKrAucPTg"></div>
                <div class="heading-description heading-description--half-width">
            <h1>Signs of domestic violence or abuse</h1>
            <p><strong>Intimate partner violence, or domestic violence</strong>, can be difficult to see if it starts little by little, if your partner says they love you, or if they support you financially. Domestic violence can include forced sex, physical abuse, and emotional abuse, such as cruel words or threats. It can happen between married people, to a couple who lives together or apart, or to a same-sex couple. Abuse is never OK.</p>

                    </div>
    </div>

<div style="text-align: right; padding: 1rem 0px;"><button class="usa-button">Expand All</button></div><div class="qa-wrapper">
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
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

      </div>
</div>
    </div>
  </div>

</article>
<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
        <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Leavinganabusiverelationship.jpg?VersionId=2jlu8.BeR9tEcA_.gCdjmQ2ZS38j6k2d"></div>
                <div class="heading-description heading-description--half-width">
            <h1>Leaving an abusive relationship</h1>
            <p><strong>No one should feel unsafe.</strong> If you are in an unsafe, violent relationship, you might be thinking of leaving. You do not have to leave today or do it all at once. But a safety plan can help you know what to do when you are ready to leave. Having a plan in place can help you get out safely later if you do decide to leave.</p>

                    </div>
    </div>

<div style="text-align: right; padding: 1rem 0px;"><button class="usa-button">Expand All</button></div><div class="qa-wrapper">
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are some things to consider as I decide whether to leave? ",
      content: `

    <div class="answer"><p>Leaving an abusive relationship can seem overwhelming. Women often leave several times before finally deciding to end the relationship. There are many complicated reasons why it is difficult to leave an abusive partner.</p>

<p>You may have doubts or fears or just feel overwhelmed at the thought of leaving. That’s normal. But consider the following as you make your decision:</p>

<ul>
	<li><strong>Domestic violence often starts as emotional abuse and becomes physical later.</strong> It’s important to ask for help as soon as possible.</li>
	<li><strong>Your partner may try to make you think the violence is your fault.</strong> It’s not. You cannot make someone hurt or mistreat you. Your partner is responsible for his or her own behavior. Violence and abuse are never the victim’s fault.</li>
	<li><strong>Abuse is not normal or OK.</strong> You may think that abuse is a sign that your partner loves you. It’s not. Your partner may love you, but abuse is not a sign of that love. You may think that romantic love is passionate and that physical abuse is a sign of passion. It’s not. A healthy relationship is one in which you feel safe and which has no physical, sexual, emotional, or verbal abuse.</li>
	<li><strong>Abuse can happen to anyone. </strong>Some women and men believe that abuse is not something that could happen to them. Abuse can happen to anyone, regardless of whether you have a college education, which neighborhood you live in, your age, your gender, your sexual orientation, or whether you’re married, dating, or single.</li>
	<li><strong>Your partner may be very good to you at times.</strong> Most abusers have a pattern of abuse followed by making it up to you or making you feel special and loved. It’s most likely that the abuse will happen again. Abuse usually gets worse over time, not better. Learn about how to <a href="/relationships-and-safety/get-help" title="Get help">get help</a> even if your partner promises to stop the abuse.</li>
	<li><strong>You cannot help or fix an abusive partner.</strong> It’s not your responsibility to convince a violent or abusive partner to get help. Your responsibility is to your own safety and the safety of any children in the household. Some abusive partners say they will get help as a way to “make it up to you” after violence. But getting help does not always mean the violence will stop.</li>
	<li><strong>Intimate partner violence is linked to <a href="/relationships-and-safety/effects-violence-against-women">serious physical and emotional problems</a>.</strong> The longer it continues, the more damage it can cause.</li>
</ul>

<p>Also, if you have children, consider their safety. Consider whether you are willing to allow your partner to visit them if you decide to leave the relationship. Many abusers get even more violent after their victims leave. That’s why a safety plan, agreed on with others in your life, can help keep you safe after you leave.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who can I talk to about leaving an abusive relationship?",
      content: `

    <div class="answer"><p>Many people can help you think about your options to leave an abusive relationship safely. It might be unsafe if an abusive partner finds out you’re thinking about leaving. Try to talk only to people who will not tell the abuser about your plans:</p>

<ul>
	<li><strong>Your doctor or nurse.</strong> Most people visit the doctor at least once a year for a checkup, so try to visit the doctor or nurse without your partner. If your partner insists on going with you, try to write a note to the office staff saying that you want to see the doctor or nurse alone. Or, tell your partner that you need privacy to speak about a woman’s health issue that you’re too embarrassed to talk about. Or, tell your partner, where others can hear you, that the doctor’s policy is patients only in the exam room.</li>
	<li><strong>A teacher, counselor, or principal at your child’s school.</strong> An adult at your child’s school can help connect you to shelters and other safe places in your community. Teachers and others at your child’s school want to help the families of the children they teach.</li>
	<li><strong>Human resources.</strong> If you work outside the home, the human resources (HR) department at your workplace may be able to connect you to an Employee Assistance Program (EAP) or other resources in your community.</li>
	<li><strong>Family or friends.</strong> Family or friends who knew you before you met an abusive partner might be able to help you. If more than one family member or friend can help you, it might be good for a few people to work together to help.</li>
	<li><strong>A free 1-800 telephone hotline.</strong> You can talk to trained advocates at the <a href="http://www.thehotline.org/" title="The National Domestic Violence Hotline" class="external-link external-popup" target="_blank">National Domestic Violence Hotline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>, for free 24 hours a day, 7 days a week without giving your name or address. The counselors can help you talk through the steps of leaving an abusive relationship. You can call a hotline as many times as you need to.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I plan to leave and keep myself safe?",
      content: `

    <div class="answer"><p>Even if you don’t leave right away, creating a <a href="http://www.thehotline.org/help/path-to-safety/" title="The National Domestic Violence Hotline" class="external-link external-popup" target="_blank">safety plan <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;can help you know what to do if your partner abuses you again. It can help you be more independent when you leave.</p>

<p>Your safety plan will help you be prepared:</p>

<ul>
	<li><strong>Identify a safe friend or friends and safe places to go. </strong>Create a code word to use with friends, family, or neighbors to let them know you are in danger without the abuser finding out. If possible, agree on a secret location where they can pick you up.</li>
	<li><strong>Keep an alternate cellphone nearby.</strong> Try not to call for help on your home phone or on a shared cellphone. Your partner might be able to trace the numbers. If you don’t have a cellphone, you can get a prepaid cellphone. Some domestic violence shelters offer free cellphones.</li>
	<li><strong>Memorize the phone numbers of friends, family, or shelters.</strong> If your partner takes your phone, you will still be able to contact loved ones or shelters for a safe place to stay.</li>
	<li><strong>Make a list of things to take if you have to leave quickly.</strong> Important identity documents and money are probably the top priority. See the <a href="#4">Safety Packing List</a> for a detailed list of items to pack. Get these items together, and keep them in a safe place where your partner will not find them. If you are in immediate danger, leave without them.</li>
	<li><strong>If you can, hide an extra set of car keys</strong> so you can leave if your partner takes away your usual keys.</li>
	<li><strong>Ask your doctor how to get extra medicine or glasses, hearing aids, or other medically necessary items for you or your children. </strong></li>
	<li><strong>Contact your local family court</strong> (or domestic violence court, if your state has one) for information about getting a <a href="/relationships-and-safety/partner-violence/getting-restraining-order#5" title="What is a protection order or restraining order?">restraining order</a>. If you need legal help but don’t have much money, your local domestic violence agency may be able to help you find a lawyer who will work for free or on a sliding scale based on what you can pay.</li>
	<li><strong>Protect your online security</strong> as you collect information and prepare. Use a computer at a public library to download information, or use a friend’s computer or cellphone. Your partner might be able to track your planning otherwise.</li>
	<li><strong>Try to take with you any evidence of abuse or violence</strong> if you leave your partner. This might include threatening notes from your partner. It might be copies of police and medical reports. It might include pictures of your injuries or damage to your property.</li>
	<li><strong>Keep copies of all paper and electronic documents on an external thumb drive.</strong></li>
</ul>

<p>Advocates at the <a href="http://www.thehotline.org/" title="The National Domestic Violence Hotline" class="external-link external-popup" target="_blank">National Domestic Violence Hotline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>, 800-799-SAFE (7233), can help you develop your safety plan. The National Center on Domestic and Sexual Violence provides <a href="http://www.ncdsv.org/images/NCDSV_DVSafetyPlan_updated2013.pdf" class="external-link external-popup" target="_blank">a form <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;(PDF, 193 KB)&nbsp;for developing your own safety plan. You can also find more <a href="http://www.thehotline.org/help/path-to-safety/" title="The National Domestic Violence Hotline" class="external-link external-popup" target="_blank">tips on developing your safety plan <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. Every person deserves to be safe.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What do I need to include in my safety packing list?",
      content: `

    <div class="answer"><p>When you leave an abuser, the most important thing is your life and safety as well as your children’s. If you are able to plan ahead, it will help you to have important information with you, in addition to money, clothing, medicine, and other basic items.</p>

<p>Even if you are not sure you want to or are ready to leave, go ahead and make copies of as many of the following documents as you can, or secure them in a safe place outside of the home:</p>

<ul>
	<li>Birth certificates, Social Security cards, and passports or immigration papers for you and your children</li>
	<li>Health insurance cards for you and your children</li>
	<li>Financial records, including recent bank statements and stocks or mutual fund records</li>
	<li>Housing documents, such as rental agreements, mortgage statements, or the title or deed</li>
	<li>Your most recent credit report (you can <a href="https://www.freecreditreport.com/homepage2?sc=678446&amp;bcd=ad_c_sem_427_96494731924&amp;k_id=a0ef759c-87ca-4d84-97eb-1f65a5110006&amp;k_kw=free%20online%20credit%20score&amp;k_mt=e&amp;pc=sem_fcr_google&amp;cc=sem_fcr_google_ad_379283524_25662593524_96494731924_free%20online%20credit%20score_e_1t3_a0ef759c-87ca-4d84-97eb-1f65a5110006&amp;gclid=Cj0KEQjwipi4BRD7t6zGl6m75IgBEiQAn7CfF9jtB0HemSAJae5U4pw6v0Fag4lIGqRUVEWbIWKFDRwaAg2Y8P8HAQ" title="Free Credit Report: No Credit Card Needed" class="external-link external-popup" target="_blank">request one for free <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>)</li>
	<li>The title or lease paperwork for your car</li>
	<li>Statements for any retirement plans</li>
	<li>The past two years’ tax returns</li>
	<li>A written copy of phone numbers or important addresses in case you cannot get to your cellphone or address book</li>
</ul>

<p>Many of these records are available online, so try to keep access to these accounts if you do not have paper copies.</p>

<p>You may also want to take photos of any valuable assets in the home (anything you think may be worth some money). Also, if you have any family heirlooms (such as jewelry), take them with you or put them in a safe place before you leave. You can get a safe deposit box at the bank to store copies of the paperwork listed, as well as small valuable items. If you have a joint checking account, consider opening your own checking account and storing money there. Any adult has the right to open their own bank account, even if they are married or dependent on another person.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What if I’m too scared to leave?",
      content: `

    <div class="answer"><p>Leaving a relationship is not easy. You may still care about your partner or have hope that things will get better. It may also be difficult or frightening to leave because:</p>

<ul>
	<li>Your partner may be a co-parent to your children.</li>
	<li>Your partner may have isolated you from your friends and family so you feel you have no place to go.</li>
	<li>Your partner may control the money so you feel you have no resources to leave.</li>
	<li>Your partner may have threatened you or your children.</li>
	<li>You don’t want to disrupt your children’s lives.</li>
	<li>You may have an elderly relative or disabled child needing care.</li>
	<li>Your health may be poor because you were injured in the domestic violence or because of illness.</li>
	<li>You may still have feelings for your partner or worry that you’ll be alone for the rest of your life.</li>
</ul>

<p>You can get help dealing with all of these issues. Talk to a friend, a loved one, or a counselor at the <a href="http://www.thehotline.org/" title="The National Domestic Violence Hotline" class="external-link external-popup" target="_blank">National Domestic Violence Hotline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>, 800-799-SAFE (7233). People want to help you.</p>

<p>Even if it seems like the only way you can be safe is to leave, you may still be feeling confused and frightened about leaving. That is normal. You don’t have to decide to leave today. But if you are in an abusive relationship, you need to get help.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I leave if I don’t have any money?",
      content: `

    <div class="answer"><p>In abusive or controlling relationships, it is common for the abusive partner to get control of all of the money. Often, an abusive partner will not allow a woman to work outside of the home or talk to family and friends.</p>

<p>Even if you do not have any money, you can find the closest women’s shelter by calling the 24-hour <a href="http://www.thehotline.org/" title="The National Domestic Violence Hotline" class="external-link external-popup" target="_blank">National Domestic Violence Hotline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;at 800-799-SAFE (7233) for free. You do not have to pay money to stay at a domestic violence shelter.</p>

<p>Many domestic violence shelters can help you pay for a ride to the shelter. If you are already in a temporary but safe place, call the shelter to ask about help with transportation.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Where can I go if I decide to leave?",
      content: `

    <div class="answer"><p>Even if you don’t have a friend or family member to go to, you still have a safe option. A domestic violence shelter, also sometimes called a women’s shelter, is a safe place for a woman who has a violent partner. Its location is usually not public, making it harder for an abusive partner to find. These shelters have rooms for women and children.</p>

<p><a href="https://www.domesticshelters.org/" title="Find Domestic Violence and Abuse Help, Information and Stats" class="external-link external-popup" target="_blank">Find a women’s shelter near you <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. If your safety and well-being depend on leaving your violent partner, help is available. Go online or call the <a href="http://www.thehotline.org/" title="The National Domestic Violence Hotline" class="external-link external-popup" target="_blank">National Domestic Violence Hotline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>, 800-799-SAFE (7233); or the <a href="http://www.rainn.org/" title="RAINN" class="external-link external-popup" target="_blank">National Sexual Assault Hotline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>, 800-656-HOPE (4673), 24 hours a day, 7 days a week.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What happens after I arrive at a domestic violence or women’s shelter? ",
      content: `

    <div class="answer"><p>Domestic violence shelters provide basic items for women who have to leave in a hurry and arrive with nothing. They may also provide food and child care. These services are usually free.</p>

<p>Domestic violence shelters often provide:</p>

<ul>
	<li>Individual and family counseling and support groups</li>
	<li>Help enrolling children in school</li>
	<li>Job training and help finding work</li>
	<li>Legal help</li>
	<li>Help getting financial aid</li>
	<li>Help finding permanent housing</li>
</ul>

<p>Housing in a domestic violence shelter is usually short-term and limited. The shelter can help you with the <a href="#8">next step in housing</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What happens after my time in a shelter is up?",
      content: `

    <div class="answer"><p>The next step can be transitional housing. This type of housing is usually independent, separate apartments for each family. It allows a family to find safety and time to recover from domestic violence. The shelter can help you find transitional housing.</p>

<p>Services offered by these facilities may include:</p>

<ul>
	<li>Counseling</li>
	<li>Support groups</li>
	<li>Job training</li>
	<li>Legal help</li>
	<li>Child care</li>
	<li>Help finding permanent and affordable housing</li>
</ul>
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

    <div class="answer"><p>For more information about domestic or intimate partner violence, call the OWH Helpline at 1-800-994-9662 or check out the following resources from other organizations:</p>

<ul>
	<li><a href="https://www.acf.hhs.gov/fysb/fv-centers" title="Family Violence Prevention &amp; Services Resource Centers">Family Violence Prevention &amp; Services Resource Centers</a> &nbsp;— Information from the U.S. Department of Health and Human Services.</li>
	<li><a href="http://www.thehotline.org/help/help-for-friends-and-family/" title="The National Domestic Violence Hotline" class="external-link external-popup" target="_blank">Help a Friend or Family Member <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> &nbsp;— Information from the National Domestic Violence Hotline.</li>
	<li><a href="https://www.cdc.gov/violenceprevention/intimatepartnerviolence/index.html" title="Intimate Partner Violence">Intimate Partner Violence</a> — Information from the Centers for Disease Control and Prevention.</li>
	<li><a href="http://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/domestic-violence/art-20048397?p=1" title="Know the signs of an abusive relationship" class="external-link external-popup" target="_blank">Know the signs of an abusive relationship and how to leave a dangerous situation. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Information from the Mayo Clinic.</li>
	<li><a href="http://www.nctsn.org/nctsn_assets/pdfs/QA_Groves_final.pdf" title="Domestic violence against women: Recognize patterns, seek help - Mayo Clinic" class="external-link external-popup" target="_blank">Questions and Answers About Domestic Violence <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> &nbsp;— Publication from the National Child Traumatic Stress Network.</li>
</ul>
</div>

      </div>
</div>
    </div>
  </div>

</article>
<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
        <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Datingviolenceandabuse.jpg?VersionId=myyyPzkb4fbrtzk1Zl7loxn5zbLtOvKt"></div>
                <div class="heading-description heading-description--half-width">
            <h1>Dating violence and abuse</h1>
            <p><strong>Dating violence is when someone you are seeing romantically harms you in some way, whether it is physically, sexually, emotionally, or all three.</strong> It can happen on a first date, or once you've fallen deeply in love. Dating violence is never your fault. Learn the signs of dating violence or abuse and how to get help.</p>

                    </div>
    </div>

<div style="text-align: right; padding: 1rem 0px;"><button class="usa-button">Expand All</button></div><div class="qa-wrapper">
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is dating violence?",
      content: `

    <div class="answer"><p>Dating violence is physical, sexual, emotional, or verbal abuse from a romantic or sexual partner. It happens to women of all races and ethnicities, incomes, and education levels. It also happens across all age groups and in heterosexual and same-sex relationships. Some people call dating violence domestic abuse, especially when you live with your partner.</p>

<p>Dating violence includes:</p>

<ul>
	<li><a href="/relationships-and-safety/other-types/emotional-and-verbal-abuse"><strong>Emotional and verbal abuse</strong></a>&nbsp;— yelling, name-calling, bullying, isolating you from your family and friends, saying you deserve the abuse or are to blame for it, and then giving gifts to “make up” for the abuse or making promises to change</li>
	<li><a href="/relationships-and-safety/sexual-assault-and-rape"><strong>Sexual assault and rape</strong></a>&nbsp;— forcing you to do any sexual act you do not want to do or doing something sexual when you’re not able to consent, such as when you’ve been drinking heavily</li>
	<li><a href="/relationships-and-safety/other-types/physical-abuse"><strong>Physical abuse</strong></a>&nbsp;— hitting, shoving, kicking, biting, throwing objects, choking, or any other aggressive contact</li>
</ul>

<p>It can also include forcing you to get pregnant against your will, trying to influence what happens during your pregnancy, or interfering with your birth control.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are signs of dating abuse?",
      content: `

    <div class="answer"><p>Some signs of dating abuse include:<a href="#references"><sup>1</sup></a></p>

<ul>
	<li>Forcing you to have sex when you don’t want to</li>
	<li>Telling you that you owe them sex in exchange for taking you out on a date</li>
	<li>Acting overly jealous, including constantly accusing you of cheating</li>
	<li>Being extremely controlling, such as telling you what to wear, forbidding you from seeing friends and family, or demanding to check your phone, email, and social media</li>
	<li>Constantly checking in with you and getting angry if you don’t check in with him or her</li>
	<li>Putting you down, including your appearance (clothes, makeup, hair, weight), intelligence, and activities</li>
	<li>Trying to isolate you from other people, including by insulting them</li>
	<li>Blaming you for the abusive behavior and listing the ways you “made him or her do it”</li>
	<li>Refusing to take responsibility for their own actions</li>
	<li>Apologizing for abuse and promising to change again and again</li>
	<li>Having a quick temper, so you never know what you will do or say that may cause a problem</li>
	<li>Not allowing you to end the relationship or making you feel guilty for leaving</li>
	<li>Threatening to call the authorities (police, deportation officials, child protective services, etc.) as a way to control your behavior</li>
	<li>Stopping you from using birth control or going to the doctor or nurse</li>
	<li>Committing any physical violence, such as hitting, pushing, or slapping you</li>
</ul>

<p>None of the behavior described above is OK. Even if your partner does only a few of these things, it’s still abuse. It is never OK for someone to hit you or be cruel to you in any way.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is digital abuse?",
      content: `

    <div class="answer"><p>Digital abuse is a type of abuse that uses technology, especially texting or social media. Digital abuse is more common among younger adults, but it can happen to anyone who uses technology, such as smartphones or computers.</p>

<p>Digital abuse can include:</p>

<ul>
	<li>Repeated unwanted calls or texts</li>
	<li>Harassment on social media</li>
	<li>Pressure to send nude or private pictures (called “sexting”)</li>
	<li>Using texts or social media to check up on you, insult you, or control whom you can see or be friends with</li>
	<li>Demanding your passwords to social media sites and email</li>
	<li>Demanding that you reply right away to texts, emails, and calls</li>
</ul>

<p>In a healthy relationship, both partners respect relationship boundaries. You do not have to send any photos that make you uncomfortable. Once you send a revealing photo, you have no control over who sees it. The other person can forward it or show it to others.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does dating violence or abuse start?",
      content: `

    <div class="answer"><p>Dating violence or abuse often starts with emotional and verbal abuse. The person may start calling you names, constantly checking on you, or demanding your time. This is your partner’s attempt to gain power and control over you.</p>

<p>These behaviors can lead to more serious kinds of abuse, such as hitting or stalking, or preventing you from using <a href="/a-z-topics/birth-control-methods">birth control</a> or protection against <a href="/a-z-topics/sexually-transmitted-infections">sexually transmitted infections (STIs)</a>.</p>

<p>Dating violence can happen even on the first date.&nbsp;If a date pays for the date, that does not mean you owe them sex. Any sexual activity that is without your consent is rape or sexual assault.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How common is dating violence?",
      content: `

    <div class="answer"><p>Dating violence is very common in the United States. It can happen at any age, but young women are most likely to experience dating violence.<a href="#references"><sup>2</sup></a> More than four in 10 college women have experienced violence or abuse in a dating relationship.<a href="#references"><sup>3</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What can happen if I don’t end an abusive dating or romantic relationship?",
      content: `

    <div class="answer"><p>Staying in an abusive relationship can have long-lasting effects on your mental and physical health, including chronic pain and <a href="/a-z-topics/depression">depression</a>&nbsp;or <a href="/node/">anxiety</a>.&nbsp;<a href="/relationships-and-safety/effects-violence-against-women">Read more about the effects on your health</a>.</p>

<p>Abusive partners may also pressure you into having unprotected sex or prevent you from using birth control. Or you may think that getting pregnant will stop the abuse. Abuse can actually get worse during pregnancy. It’s a good idea to talk with your doctor about types of birth control you can use. If you are concerned about your partner knowing or becoming aware of your birth control use, talk to your doctor. If a male partner refuses to wear a condom, get tested for <a href="/a-z-topics/sexually-transmitted-infections">sexually transmitted infections (STIs)</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about dating violence or abuse? ",
      content: `

    <div class="answer"><p>For more information about dating violence or abuse, call the OWH Helpline at 1-800-994-9662 or check out the following resources from other organizations:</p>

<ul>
	<li><a href="http://avp.sectorlink.org/documents/SafeDating.pdf" class="external-link external-popup" target="_blank">General and Internet Safe Dating Tips <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;(PDF, 174 KB) — Publication from the National Coalition of Anti-Violence Programs offering safety tips for gay, lesbian, bisexual, and transgender people.</li>
	<li><a href="https://www.breakthecycle.org/learn-about-dating-abuse" class="external-link external-popup" target="_blank">Learn About Dating Abuse <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Information from Break the Cycle.</li>
	<li><a href="https://www.rainn.org/articles/using-technology-hurt-others" class="external-link external-popup" target="_blank">Using Technology to Hurt Others <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Information from the Rape, Abuse &amp; Incest National Network.</li>
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
	<li>National Center on Domestic and Sexual Violence. (2012). <a href="http://www.ncdsv.org/images/WarningSignsofTeenDatingViolence.pdf" class="external-link external-popup" target="_blank">What Are the Early Warning Signs of Teen Dating Violence? <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li>Breiding, M.J., Smith, S.G., Basile, K.C., Walters, M.L., Chen, J., Merrick, M.T. (2014). <a href="https://www.cdc.gov/mmwr/preview/mmwrhtml/ss6308a1.htm">Prevalence and Characteristics of Sexual Violence, Stalking, and Intimate Partner Violence Victimization — National Intimate Partner and Sexual Violence Survey, United States, 2011</a>. Morbidity and Mortality Weekly Report: Surveillance Summaries; September 5, 2014 / 63(SS08); 1-18.</li>
	<li>Break The Cycle. (2011). <a href="https://www.breakthecycle.org/dating-violence-research/college-dating-violence-and-abuse-poll" class="external-link external-popup" target="_blank">College Dating Violence and Abuse Poll. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
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
