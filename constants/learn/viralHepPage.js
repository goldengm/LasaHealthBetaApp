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

export function viralHepPage({ navigation, ...rest }) {
  const condName = "Viral Hepatitis";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Viralhepatitis.jpg?VersionId=GmIa7AYxiVWgRnondc7qGW4a01sCcC56";
  const condDescription =
    "Viral hepatitis (HEP-uh-TY-tiss) is inflammation of the liver caused by the hepatitis virus. Inflammation happens when your immune system senses a danger, like a virus, and sends white blood cells to surround the area to protect your body. This causes redness, swelling, and sometimes pain. \n Hepatitis damages the liver and can cause scarring of the liver, called cirrhosis (sur-ROH-siss). Cirrhosis can cause liver cancer, liver failure, and death. Your liver changes the food you eat into energy. It also cleans alcohol and other toxins from your blood, helps your stomach and intestines digest food, and makes proteins that your body needs to control and stop bleeding.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Viralhepatitis.jpg?VersionId=GmIa7AYxiVWgRnondc7qGW4a01sCcC56"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Viral hepatitis</h1>  -->
            <p><strong>Hepatitis is inflammation of the liver.</strong> In the United States, viral hepatitis is usually caused by the hepatitis A, B, or C virus. Different types of hepatitis are spread different ways, including having sex, sharing needles, or eating unclean food. Sometimes, viral hepatitis goes away on its own. In others, the virus is life long and can lead to serious health problems. Vaccines can prevent hepatitis A and B, but not C. There are medicines to treat and sometimes cure hepatitis B and C.</p>

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
      title: "What is viral hepatitis?",
      content: `

    <div class="answer"><p>Viral hepatitis (HEP-uh-TY-tiss) is inflammation of the <a href="http://www.womenshealth.gov/glossary#liver" title="glossary">liver</a>&nbsp;caused by the hepatitis virus. Inflammation happens when your immune system senses a danger, like a virus, and sends white blood cells to surround the area to protect your body. This causes redness, swelling, and sometimes pain.</p>

<p>Hepatitis damages the liver and can cause scarring of the liver, called cirrhosis (sur-ROH-siss). Cirrhosis can cause liver cancer, liver failure, and death. Your liver changes the food you eat into energy. It also cleans alcohol and other toxins from your blood, helps your stomach and intestines digest food, and makes proteins that your body needs to control and stop bleeding.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the different types of viral hepatitis?",
      content: `

    <div class="answer"><p>The most common types of viral hepatitis in the United States are:</p>

<ul>
	<li>Hepatitis A</li>
	<li>Hepatitis B</li>
	<li>Hepatitis C</li>
</ul>

<p><a href="http://www.cdc.gov/hepatitis/index.htm" title="Division of Viral Hepatitis Home Page">Learn about other types of hepatitis.</a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Does viral hepatitis affect women differently than men?",
      content: `

    <div class="answer"><p>Yes, certain types of viral hepatitis affect women differently than men.</p>

<p><strong>Hepatitis A </strong>affects women and men in similar ways.</p>

<p><strong>Hepatitis B </strong>affects women differently than men:</p>

<ul>
	<li><strong>Birth control.</strong> Women with severe liver damage may not be able to use <a href="http://www.womenshealth.gov/publications/our-publications/fact-sheet/birth-control-methods.html" title="Birth control methods that contains estrogen">birth control</a>.<a href="#references"><sup>1</sup></a> This is because a damaged liver may have problems breaking down estrogen.</li>
	<li><strong>Pregnancy.</strong> The risk of passing hepatitis B to your baby during pregnancy is high. Hepatitis B raises your risk for pregnancy complications.<a href="#references"><sup>2</sup></a> Talk to your doctor about taking hepatitis B medicine to lower the risk of passing hepatitis B to your baby. Certain hepatitis B medicines are safe to take during pregnancy but are not recommended for everyone. <a href="http://www.cdc.gov/hepatitis/hbv/pdfs/hepbperinatal-protectwhenpregnant.pdf" title="learn more about hepatitis b during pregnancy">Learn more about hepatitis B during pregnancy.</a>&nbsp;[PDF , 839 KB]</li>
</ul>

<p><strong>Hepatitis C</strong> affects women differently than men:</p>

<ul>
	<li><strong>Younger women. </strong>Research shows that acute (short-term) hepatitis C goes away on its own more often for younger women than men. Also, in women with chronic hepatitis C, liver damage usually happens more slowly than it does for men. Researchers think the hormone <a href="http://www.womenshealth.gov/glossary#estrogen" title="glossary">estrogen</a>&nbsp;may help protect the liver from damage.<a href="#references"><sup>3</sup></a></li>
	<li><strong>Menstrual cycles. </strong>You may miss menstrual periods or have shorter periods. This can happen as a side effect of hepatitis medicines. Since hepatitis C is spread through blood, the risk of passing hepatitis C to a partner is higher during your menstrual period.</li>
	<li><strong>Birth control.</strong> Women with severe liver damage may not be able to use birth control that contains estrogen.<a href="#references"><sup>1</sup></a> This is because a damaged liver may have problems breaking down estrogen.</li>
	<li><strong>Pregnancy.</strong> Experts think the risk of passing hepatitis C to your baby during <a href="#20">pregnancy</a>&nbsp;is low. But hepatitis C raises your risk for pregnancy complications such as premature birth and gestational diabetes.<a href="#references"><sup>2</sup></a> Some hepatitis C medicines can also cause serious harm to your baby if taken during pregnancy.</li>
	<li><strong>Menopause.</strong> Liver damage happens more quickly for women after <a href="http://www.womenshealth.gov/glossary#menopause" title="glossary">menopause</a>.<a href="#references"><sup>4</sup></a> Hepatitis C medicines also may not work as well for women after menopause as they do for men.<a href="#references"><sup>5</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets viral hepatitis?",
      content: `

    <div class="answer"><p>Viral hepatitis is common in the United States and affects women and men. Hepatitis B and C are more common than hepatitis A.&nbsp;</p>

<ul>
	<li>In 2015, <strong>hepatitis A</strong> affected an estimated 2,500 Americans.<a href="#references"><sup>6</sup></a> The percentage of people with hepatitis A has gone down by 95% since the hepatitis A vaccine became available in 1995.</li>
	<li>
	<p><strong>Chronic hepatitis B</strong> may affect more than 1 million Americans.<a href="#references"><sup>6</sup></a> Asian-Americans and Pacific Islanders have the highest rates of hepatitis B infection. About 50% of the people living with Hepatitis B are Asian-Americans and Pacific Islanders.<a href="#references"><sup>7</sup></a></p>

	<p>Within this high-risk group, hepatitis B is usually passed from a mother to her baby during pregnancy. Babies born with hepatitis B are likely to have it their entire lives and are at higher risk of liver damage and liver cancer.</p>
	</li>
	<li><strong>Hepatitis C</strong> is the most common type of viral hepatitis infection in the United States. An estimated 3.5 million Americans have chronic hepatitis C.<a href="#references"><sup>6</sup></a> The CDC recommends that everyone born between 1945 and 1965 (also called baby boomers) <a href="#12">get tested at least once</a>&nbsp;for hepatitis C because it is so common in this age group.<a href="#references"><sup>8</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do you get hepatitis A?",
      content: `

    <div class="answer"><p>Hepatitis A is found in an infected person’s stool (poop).<a href="#references"><sup>10</sup></a></p>

<p>Hepatitis A is spread through:<a href="#references"><sup>11</sup></a></p>

<ul>
	<li>Eating or drinking contaminated food or water
	<ul>
		<li>You can get hepatitis A by eating food prepared by a person with the virus who didn’t wash his or her hands after using the bathroom and then touched the food.</li>
		<li>You can get hepatitis A by eating raw or undercooked shellfish that came from sewage-contaminated water.</li>
	</ul>
	</li>
	<li>Vaginal, oral, or anal sex. Hepatitis A can be spread even if the infected person has no symptoms.</li>
	<li>Touching unclean diaper changing areas or toilets. If an infant or toddler had hepatitis A and soiled the changing area, others who come into contact with the stool could become infected.</li>
</ul>

<p>You are more likely to get hepatitis A if you travel out of the country to a developing country with poor sanitation or without access to clean water and have not gotten vaccinated for hepatitis A.<a href="#references"><sup>12</sup></a> Ask your doctor if you need a hepatitis A vaccination.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do you get hepatitis B?",
      content: `

    <div class="answer"><p>Hepatitis B is found in an infected person’s blood and other body fluids, such as semen and vaginal fluid.</p>

<p>Hepatitis B is usually spread through:<a href="#references"><sup>12</sup></a></p>

<ul>
	<li>Vaginal, oral, or anal sex. This is the most common way hepatitis B is spread. Hepatitis B can be spread even if the infected person has no symptoms.</li>
	<li>Birth to a mother who has hepatitis B</li>
	<li>Sharing or reusing needles, syringes, and drug preparation equipment such as cookers and cotton when injecting drugs. Hands or drug preparation equipment that have even tiny amounts of blood on them can spread hepatitis B.</li>
	<li>Accidental needle stick or other sharp instrument injury (higher risk for health care workers)</li>
</ul>

<p>A less common way to spread hepatitis B is through pre-chewed food to a baby from a mother who has hepatitis B.<a href="#references"><sup>12</sup></a> However, hepatitis B cannot be spread through breastfeeding.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do you get hepatitis C?",
      content: `

    <div class="answer"><p>Hepatitis C is found in an infected person’s blood and other body fluids.</p>

<p>Hepatitis C is usually spread through:</p>

<ul>
	<li>Sharing or reusing needles, syringes, and drug preparation equipment such as cookers and cotton&nbsp;when injecting drugs. This is the most common way hepatitis C is spread in the United States. Hands or drug preparation equipment that have even tiny amounts of blood on them can also spread hepatitis C.</li>
	<li>Accidental needle stick or other sharp instrument injury (higher risk for health care workers)</li>
</ul>

<p>Less common ways to spread hepatitis C:<a href="#references"><sup>13 </sup></a></p>

<ul>
	<li>Vaginal, oral, or anal sex</li>
	<li>Birth to a mother who has hepatitis, though this is rare</li>
	<li>Sharing personal items like razors and toothbrushes &nbsp;</li>
	<li>Tattoos or body piercings</li>
	<li>Blood transfusions done in the United States before the 1990s (when hepatitis C testing began) or in other parts of the world where hepatitis C testing is less common</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of viral hepatitis?",
      content: `

    <div class="answer"><p>The symptoms of viral hepatitis are similar for all types of hepatitis.<a href="#references"><sup>9</sup></a>&nbsp;They include:</p>

<ul>
	<li>Low-grade fever (a temperature between 99.5°F and 101°F)</li>
	<li>Fatigue (tiredness)</li>
	<li>Loss of appetite</li>
	<li>Upset stomach</li>
	<li>Vomiting</li>
	<li>Stomach pain</li>
	<li>Dark urine</li>
	<li>Clay-colored bowel movements</li>
	<li>Joint pain</li>
	<li>Jaundice (JAWN-diss), which is when the skin and whites of the eyes turn yellow</li>
</ul>

<p>People who are newly infected are most likely to have one or more of these symptoms, but some people with viral hepatitis do not have any symptoms. New hepatitis A infections usually cause symptoms, but as many as half the people with new hepatitis B and hepatitis C infections do not have symptoms.</p>

<p>Certain blood tests can show if you have hepatitis, even if you do not have symptoms. People with chronic hepatitis B or C often develop symptoms when their liver becomes damaged.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Do I need to get tested for hepatitis A?",
      content: `

    <div class="answer"><p>Maybe. If you have symptoms of viral hepatitis, talk to your doctor or nurse about getting tested for hepatitis A.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Do I need to get tested for hepatitis B?",
      content: `

    <div class="answer"><p>Maybe. All pregnant women need to be tested for hepatitis B during their first trimester of pregnancy. Also, about half the people with hepatitis B have symptoms after infection.<a href="#references"><sup>15</sup></a>&nbsp;This means you might have the infection without knowing it.</p>

<p>The U.S. Preventive Services Task Force recommends getting tested for hepatitis B if you are at high risk of infection:<sup><a href="#references">15</a>,<a href="#references">16</a></sup></p>

<ul>
	<li>You were born in an area with medium or high rates of hepatitis B infection. Those areas are colored medium and dark blue on this&nbsp;<a href="http://www.cdc.gov/hepatitis/HBV/PDFs/HBV_figure3map_08-27-08.pdf" target="_blank" title="map of hepatitis around the world">map of hepatitis B around the world</a>&nbsp;(PDF – 166 KB) from the CDC.</li>
	<li>Your parents were born in one of the high-risk areas, and you were not vaccinated against hepatitis B as a baby</li>
	<li>You live with, have sex with, or share needles with someone who has hepatitis B</li>
	<li>You have ever had sex with more than one partner and did not use a condom</li>
	<li>You inject drugs</li>
	<li>You receive dialysis</li>
	<li>You get medical treatments that weaken your immune system</li>
	<li>You have&nbsp;<a href="/hiv-and-aids" title="HIV">HIV</a><strong>&nbsp;</strong></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Do I need to get tested for hepatitis C?",
      content: `

    <div class="answer"><p>Maybe. Most people with hepatitis C don’t have any symptoms. This means you might have the infection without knowing it. The CDC recommends hepatitis C testing for some women without symptoms.</p>

<p>Ask your doctor about getting tested for hepatitis C if:</p>

<ul>
	<li>You were born between 1945 and 1965<a href="#references"><sup>9</sup></a></li>
	<li>You have ever injected drugs, even once<a href="#references"><sup>17</sup></a></li>
	<li>You had a blood transfusion or organ transplant before 1992</li>
	<li>You received clotting factors made before 1987</li>
	<li>You have sex with or share needles with someone who has hepatitis C</li>
	<li>You have been on dialysis</li>
	<li>Your liver test results were not normal</li>
	<li>You have HIV</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Why do all baby boomers need to be tested for viral hepatitis? ",
      content: `

    <div class="answer"><p>The CDC recommends that all Americans born between 1945 and 1965 (called baby boomers) get a one-time test for hepatitis C. This is because three in four adults with hepatitis C are baby boomers, and most baby boomers do not know they have it.<a href="#references"><sup>18</sup></a></p>

<p>It’s likely that many baby boomers with hepatitis C were infected many years ago before the blood supply was tested for hepatitis C.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is viral hepatitis diagnosed?",
      content: `

    <div class="answer"><p>Talk to your doctor if you have symptoms of viral hepatitis. Your doctor will:</p>

<ul>
	<li>Ask questions about your health history</li>
	<li>Do a physical exam</li>
	<li>Order blood tests that look for parts of the virus or <a href="http://www.womenshealth.gov/glossary#antibodies" title="glossary">antibodies</a>&nbsp;that your body makes in response to the virus. Other tests may measure the amount of the virus in your blood.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do I know if I have acute or chronic viral hepatitis?",
      content: `

    <div class="answer"><p>Hepatitis A, B, and C all start out as an acute (short-term) infection. Some acute infections can develop into lifelong, chronic infections. Your doctor may do a blood test to see if the infection is acute or chronic.</p>

<ul>
	<li><strong>Hepatitis A</strong> causes acute infection only. Most people recover with no lasting health problems.</li>
	<li><strong>Hepatitis B and C</strong> can cause both acute and chronic infections. Some people recover from the acute infection and cannot spread the infection to others. For other people, the infection develops into a chronic infection and can be spread to others.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is acute (short-term) viral hepatitis treated?",
      content: `

    <div class="answer"><p>Acute viral hepatitis usually goes away on its own. Hepatitis A causes only acute infection, but hepatitis B and C often cause <a href="#16">chronic or lifelong infection</a>. If you have acute hepatitis A, B, or C, you may feel sick for a few months before you get better.</p>

<p>Your doctor may recommend rest and making sure you get enough fluids. Avoid alcohol and certain medicines, like the pain reliever acetaminophen, because they can damage the liver during this time. Some people with acute viral hepatitis need to be hospitalized to manage the symptoms.</p>

<p>If you think you have hepatitis, go to the doctor right away.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is chronic (long-term) viral hepatitis treated?",
      content: `

    <div class="answer"><p>If you have chronic viral hepatitis, your treatment depends on the type of hepatitis you have:</p>

<ul>
	<li><strong>Hepatitis B. </strong>You will probably meet with your doctor regularly, every six to 12 months, to watch for signs of liver disease and liver cancer. If you plan to become pregnant in the future, talk to your doctor first. You may need antiviral medicines to treat hepatitis B, but many people do not need medicine. The Food and Drug Administration (FDA) has a <a href="http://www.fda.gov/forpatients/illness/hepatitisbc/ucm408658.htm" title="Hepatitis B and C Treatments">list of approved medicines to treat hepatitis B</a>.</li>
	<li><strong>Hepatitis C.</strong> If you have hepatitis C, talk with your doctor about whether you need medicine. Recently approved antiviral medicines treat and may cure hepatitis C in adults. The FDA has a <a href="http://www.fda.gov/forpatients/illness/hepatitisbc/ucm408658.htm" title="Hepatitis B and C Treatments">list of approved medicines to treat hepatitis </a><a href="http://www.fda.gov/forpatients/illness/hepatitisbc/ucm408658.htm" title="hepatitis B and C Treatments">C</a>. If you have health insurance, ask about your copay or coinsurance and which medicines are covered under your plan.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What can happen if viral hepatitis is not treated?",
      content: `

    <div class="answer"><p>Most people recover from hepatitis A with no treatment or long-lasting health problems.</p>

<p>Chronic hepatitis B and C can lead to serious health problems, such as:<a href="#references"><sup>19</sup></a></p>

<ul>
	<li><a href="/glossary#cirrhosis" title="glossary | womenshealth.gov">Cirrhosis</a>, or scarring of the liver</li>
	<li>Liver cancer</li>
	<li>Liver failure</li>
</ul>

<p>People with liver failure may need a liver transplant to survive. In the United States, cirrhosis caused by chronic hepatitis C is currently the most common reason for needing a liver transplant.<a href="#references"><sup>20</sup></a>&nbsp;Viral hepatitis is also the most common cause of liver cancer.<a href="#references"><sup>21</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What should I do if I think I have been exposed to viral hepatitis? ",
      content: `

    <div class="answer"><p>Call your doctor or your local or state health department if you think you may have been exposed.</p>

<ul>
	<li>If you may have been exposed to <strong>hepatitis A or B</strong>, your doctor may recommend getting a vaccine (shot) to keep you from getting the infection.<sup><a href="#references">22</a>,<a href="#references">23</a></sup></li>
	<li>The CDC recommends that people who are exposed to <strong>hepatitis C</strong>, such as a health care worker after an accidental needle stick, get tested for hepatitis C infection.<a href="#references"><sup>18</sup></a>&nbsp;New antiviral medicines for hepatitis C cure most of the people who take them. If you have health insurance, ask about your copay and coinsurance and which medicines are covered under your plan.</li>
</ul>

<p><a href="http://www.cdc.gov/nchhstp/preventionthroughhealthcare/preventiveservices/hepatitis.htm" title="learn more about hepatitis vaccines and testing">Learn more about hepatitis vaccines and testing</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does viral hepatitis affect pregnancy?",
      content: `

    <div class="answer"><p>Hepatitis B and C can cause problems during pregnancy and can be passed to your baby. The risk of passing the virus to your baby is higher with hepatitis B than C.</p>

<p>Research shows that pregnant women with hepatitis B or C may have a higher risk for certain pregnancy complications:<a href="#references"><sup>2</sup></a></p>

<ul>
	<li><a href="/glossary#gestational_diabetes" title="glossary">Gestational diabetes</a><strong>&nbsp;</strong></li>
	<li>Low-birth-weight baby (less than 5 ½ pounds)</li>
	<li><a href="/glossary#premature_birth" title="glossary">Premature birth</a> (also called preterm birth, or babies born before 37 weeks of pregnancy). Premature birth is the leading cause of infant death and raises the risk of health and developmental problems at birth and later in life.</li>
</ul>

<p>Talk to your doctor if you think you may be pregnant or plan to become pregnant. Some antiviral medicines that treat hepatitis C, such as <a href="http://www.fda.gov/forpatients/illness/hepatitisbc/ucm408658.htm" title="Hepatitis B and C Treatments">ribavirin</a>, can cause serious birth defects if taken during pregnancy.&nbsp;</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "I have viral hepatitis and am pregnant. Will my baby get the virus? ",
      content: `

    <div class="answer"><p>Maybe. Hepatitis B and C can be passed from a pregnant woman to her baby during childbirth.</p>

<ul>
	<li>
	<p><strong>If you have hepatitis B,</strong> the risk of passing the infection to your baby is higher than if you have hepatitis C. Make sure your baby gets HBIG (hepatitis B immune globulin) and the first shot of hepatitis B vaccine within 12 hours of birth. Your baby will need two or three more shots of the vaccine over the next 1 to 15 months to help keep them from getting hepatitis B. The timing and total number of shots will depend on the type of vaccine and your baby’s age and weight. All babies should be vaccinated for hepatitis B. Talk to your doctor.</p>

	<p>The hepatitis B vaccine is very important. Babies who become infected with hepatitis B have a 90% chance of developing chronic (long-term) hepatitis B. One in four people infected at birth will die of hepatitis B-related causes such as liver cancer or liver failure. Your doctor will test your baby after the last shot to make sure he or she is protected from the disease.</p>
	</li>
	<li><strong>If you have hepatitis C,</strong> the risk of passing the virus to your baby is believed to be low, but it is still possible. The only way to know if your baby becomes infected is by doing a test. The CDC recommends testing a child after he or she turns 18 months old. Most infants infected with hepatitis C at birth have no symptoms and do well during childhood.<a href="#references"><sup>17</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can I breastfeed my baby if I have viral hepatitis?",
      content: `

    <div class="answer"><p>Yes, you can breastfeed your baby if you have viral hepatitis. You cannot pass viral hepatitis through breastmilk.</p>

<p>But, if you have hepatitis C and your nipple or the surrounding skin is cracked or bleeding, stop nursing your baby on that breast until the sores heal. You can pump or hand-express your milk from that breast until it heals. Throw any breastmilk from that breast away, because it might have been contaminated with hepatitis C from the cracked or bleeding skin.</p>

<p>Pumping the breast that is cracked or bleeding will help keep up your milk supply and prevent the breast from getting overly full and painful. You can feed your baby your milk from your healthy breast.<a href="#references"><sup>24</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I prevent viral hepatitis?",
      content: `

    <div class="answer"><p>You can lower your risk of getting viral hepatitis with the following steps. The steps work best when used together. No single step can protect you from every kind of viral hepatitis.</p>

<p>Steps to lower your risk of viral hepatitis:<a href="#references"><sup>14</sup></a></p>

<ul>
	<li><strong>Get vaccinated.</strong>&nbsp;Getting vaccinated is the best way to prevent hepatitis A and B. There is no vaccine for hepatitis C. The&nbsp;<a href="http://www.vaccines.gov/" target="_blank" title="Home">hepatitis A and hepatitis B vaccines</a>&nbsp;are recommended for anyone who wants protection from the viruses and for people with certain risk factors and health problems. Ask your doctor if you need the vaccines.</li>
	<li><strong>Wash your hands</strong>&nbsp;after using the bathroom and changing diapers and before preparing or eating food.</li>
	<li><strong>If you have sex, use condoms.&nbsp;</strong>Condoms lower your risk of getting or passing sexually transmitted infections (STIs), including viral hepatitis. Viral hepatitis can be passed through menstrual blood, vaginal fluid, and semen (cum). Make sure to put the condom on before the penis touches your vagina, mouth, or anus. Other methods of&nbsp;<a href="http://womenshealth.gov/publications/our-publications/fact-sheet/birth-control-methods.html" title="Birth control methods">birth control</a>&nbsp;like birth control pills, shots, implants, or&nbsp;<a href="http://womenshealth.gov/glossary#diaphragm" title="glossary">diaphragms</a>, will not protect you from viral hepatitis.</li>
	<li><strong>Limit your number of sex partners.</strong>&nbsp;Your risk of getting viral hepatitis goes up with the number of lifetime sex partners you have.</li>
	<li><strong>If you use needles or syringes for any reason, do not share them with others.</strong></li>
	<li><strong>Do not share personal items that could have blood on them,</strong>&nbsp;such as razors, nail clippers, toothbrushes, or glucose monitors.</li>
	<li><strong>Do not get tattoos or body piercings</strong>&nbsp;from an unlicensed person or facility.</li>
	<li><strong>Wear protective gloves</strong>&nbsp;if you have to touch another person’s blood.<a href="#references"><sup>25</sup></a></li>
	<li><strong>If you are a health care or public safety worker,</strong>&nbsp;get vaccinated for hepatitis A and B, and always follow recommended standard precautions and infection-control principles, including safe injection practices.<a href="#references"><sup>26</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Do I need the viral hepatitis vaccines?",
      content: `

    <div class="answer"><p>Maybe. The hepatitis A and B vaccines can protect you from getting infected. Talk to your doctor or nurse about getting the recommended vaccines.<a href="#references"><sup>22</sup></a></p>

<p>There is no vaccine yet to prevent hepatitis C. But you can take other steps to lower your risk of getting <a href="#22">hepatitis C</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who should get the hepatitis A vaccine?",
      content: `

    <div class="answer"><p>The hepatitis A vaccine is given in two doses, six to 18 months apart. Two doses are needed for lasting protection.</p>

<p>The vaccine is recommended for:<a href="#references"><sup>27</sup></a></p>

<ul>
	<li>All children, starting at 1 year (12 to 23 months old)</li>
	<li>Men who have sex with men</li>
	<li>People who travel or work in a part of the world where hepatitis A is common, such as certain parts of Central or South America, Asia, Africa, and eastern Europe. See the CDC’s <a href="http://www.cdc.gov/hepatitis/HAV/HAVfaq.htm#C1" title=" Hepatitis A Questions and Answers for Health Professionals website">Traveler’s Health Information</a>.</li>
	<li>People who use illegal drugs</li>
	<li>People who are treated with clotting factor concentrates, such as people with hemophilia (HEE-moh-FIL-ee-uh)</li>
	<li>People with chronic liver disease</li>
	<li>People who work with hepatitis A in a laboratory or with hepatitis A–infected primates</li>
	<li>Members of households planning to adopt a child, or care for a newly arriving adopted child, from a country where hepatitis A is common. See the <a href="http://wwwnc.cdc.gov/travel/yellowbook/2016/international-travel-with-infants-children/international-adoption" title="International Adoption - Chapter 7 - 2018 Yellow Book">CDC’s Traveler’s Health information page for international adoptions</a>.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who should get the hepatitis B vaccine?",
      content: `

    <div class="answer"><p>The hepatitis B vaccine is usually given in three doses over six months. The vaccine is recommended for:<a href="#references"><sup>28</sup></a></p>

<ul>
	<li>All children at birth</li>
	<li>All children and teens younger than 19 who have not been vaccinated</li>
	<li>Men who have sex with men</li>
	<li>People who live with or have sex with someone who is infected with hepatitis B</li>
	<li>People with more than one sex partner</li>
	<li>People who share equipment to inject drugs</li>
	<li>People with chronic liver or kidney disease</li>
	<li>People with HIV</li>
	<li>People younger than 60 with diabetes</li>
	<li>People whose jobs expose them to human blood or other body fluids</li>
	<li>Residents and staff of facilities for people with developmental disabilities</li>
	<li>People who travel to parts of the world where hepatitis B is common, such as Southeast Asia, sub-Saharan Africa, the Amazon Basin in South America, the Pacific Islands, parts of Eastern Europe, and parts of the Middle East.<a href="#references"><sup>29</sup></a>&nbsp;See the <a href="http://wwwnc.cdc.gov/travel/yellowbook/2016/infectious-diseases-related-to-travel/hepatitis-b" title="Hepatitis B - Chapter 3 - 2018 Yellow Book">CDC’s Traveler’s Health information page</a>.&nbsp;</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How long do the hepatitis A and B vaccines protect you?",
      content: `

    <div class="answer"><p>During your lifetime, you need:</p>

<ul>
	<li>One series of the hepatitis A vaccine (two shots given at least 6 months apart)</li>
	<li>One series of the hepatitis B vaccine (three or four shots given over a 6-month period)</li>
</ul>

<p>Most people don’t need a booster dose of either vaccine. But if you have had dialysis, a medical procedure to clean your blood, or have a weakened immune system, your doctor might recommend additional doses of the hepatitis B vaccine.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I get free or low-cost hepatitis A and B vaccines? ",
      content: `

    <div class="answer"><p>The hepatitis A and hepatitis B vaccines are covered under most insurance plans.</p>

<ul>
	<li>If you have insurance, check with your insurance provider to find out what’s included in your plan.</li>
	<li>Medicare Part B covers <a href="https://www.medicare.gov/coverage/hepatitis-b-shots.html" title="Hepatitis B shots only">hepatitis B vaccines</a>&nbsp;for people at risk.</li>
	<li>If you have Medicaid, the benefits covered are different in each state.&nbsp;<a href="https://www.medicaid.gov/about-us/contact-us/contact-state-page.html" title="Contact Your State With Questions | Medicaid.gov">Check with your state's program</a>.</li>
</ul>

<p>Find a clinic near you where you can <a href="https://vaccinefinder.org/" title="HealthMap Vaccine Finder" class="external-link external-popup" target="_blank">get vaccines for hepatitis A and B <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about viral hepatitis?",
      content: `

    <div class="answer"><p>For more information about viral hepatitis, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.cdc.gov/nchhstp/" title="National Center for HIV/AIDS, Viral Hepatitis, STD, and TB Prevention (NCHHSTP)"><strong>National Center for HIV/AIDS, Viral Hepatitis, STD, and TB Prevention (NCHHSTP), CDC, HHS</strong></a><br>
	Phone Number: 800-232-4636</li>
	<li><a href="http://www.niddk.nih.gov/health-information/health-topics/digestive-diseases/Pages/default.aspx"><strong>National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK), NIH</strong></a><strong><a href="http://www.niddk.nih.gov/health-information/health-topics/digestive-diseases/Pages/default.aspx" title="Digestive Diseases">, HHS</a></strong><br>
	Phone Number: 800-891-5389</li>
	<li><a href="https://www.niaid.nih.gov/" title="NIH: National Institute of Allergy and Infectious Diseases"><strong>National Institute of Allergy and Infectious Diseases (NIAID), NIH, HHS</strong></a><br>
	Phone Number: 866-284-4107</li>
	<li><strong><a href="https://vaccines.gov" title="Home">Vaccines.gov, HHS</a>&nbsp;</strong></li>
	<li><a href="http://www.liverfoundation.org/" title="American Liver Foundation. Your Liver. Your Life" class="external-link external-popup" target="_blank"><strong>American Liver Foundation</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 800-465-4837</li>
	<li><a href="http://www.globalliver.org/" title="Global Liver Institute" class="external-link external-popup" target="_blank"><strong>Global Liver Institute</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	Phone Number: 202-525-2737</li>
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
	<li>World Health Organization. (2009). <a href="http://www.who.int/reproductivehealth/publications/family_planning/provider_brief_hc_liver_disease.pdf" title="WHO provider brief on hormonal contraception and liver disease" class="external-link external-popup" target="_blank">WHO provider brief on hormonal contraception and liver disease <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Contraception; </em>80(2009): 325–326.</li>
	<li>Reddick, A.L., Jhaveri, R., Gandhi, M., James, A.H., Swamy, G.K. (2011). <a href="http://www.ncbi.nlm.nih.gov/pubmed/21692952" title="Pregnancy outcomes associated with viral hepatitis">Pregnancy outcomes associated with viral hepatitis</a>. <em>Journal of Viral Hepatitis; </em>18(7): e394–8.</li>
	<li>Macaluso, F., Maida, M., Minissale, M.G., Vigni, T.L., Attardo, S., Orlando, E., Petta, S. (2013). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3730187/" title="Metabolic Factors and Chronic Hepatitis C: A Complex Interplay">Metabolic Factors and Chronic Hepatitis C: A Complex Interplay</a>. <em>BioMed Research International; </em>2013: 564645.</li>
	<li>Villa, E., Karampatou, A., Camm, C., et al. (2011). <a href="http://www.ncbi.nlm.nih.gov/pubmed/21167831">Early menopause is associated with lack of response to antiviral therapy in women with chronic hepatitis C</a>. <em>Gastroenterology</em>; 140(3): 818–829.</li>
	<li>Burton, M.J., Brock, J.B., Geraci, S.A. (2013). <a href="http://www.ncbi.nlm.nih.gov/pubmed/23820323">Women With Chronic Hepatitis C Virus Infection</a>. <em>Southern Medical Journal; </em>106(7): 422–426.</li>
	<li>Centers for Disease Control and Prevention. (2017). <a href="https://www.cdc.gov/hepatitis/statistics/2015surveillance/index.htm">Surveillance for Viral Hepatitis – United States, 2015</a>.</li>
	<li>Centers for Disease Control and Prevention. (2016). <a href="http://www.cdc.gov/hepatitis/populations/api.htm">Asian and Pacific Islanders</a>.</li>
	<li>Edlin BR, Eckhardt BJ, Shu MA, Holmberg SD, Swan T. (2015). Toward a more accurate estimate of the prevalence of hepatitis C in the United States. <em>Hepatology</em>; 62(5): 1353–63.</li>
	<li>Centers for Disease Control and Prevention. (2016). <a href="https://www.cdc.gov/knowmorehepatitis/media/pdfs/factsheet-boomers.pdf">Hepatitis C: Why People Born from 1945-1965 Should Get Tested.</a></li>
	<li>Immunization Action Coalition. (2014). <a href="http://www.immunize.org/catg.d/p4075.pdf" class="external-link external-popup" target="_blank">Hepatitis A, B, and C: Learn the Differences <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>Centers for Disease Control and Prevention. (2016). <a href="http://www.cdc.gov/hepatitis/hav/afaq.htm">Hepatitis A Questions and Answers for the Public.</a></li>
	<li>Centers for Disease Control and Prevention. (2015). <a href="http://wwwnc.cdc.gov/travel/yellowbook/2016/infectious-diseases-related-to-travel/hepatitis-a">Infectious Diseases Related to Travel: Hepatitis A</a>.</li>
	<li>Centers for Disease Control and Prevention. (2016). <a href="http://www.cdc.gov/hepatitis/hbv/bfaq.htm#bFAQ10">Hepatitis B FAQs for the Public.</a></li>
	<li>Centers for Disease Control and Prevention. (2016). <a href="http://www.cdc.gov/hepatitis/hcv/cfaq.htm">Hepatitis C FAQs for the Public.</a></li>
	<li>Centers for Disease Control and Prevention. (2016). <a href="http://www.cdc.gov/hepatitis/Resources/Professionals/PDFs/ABCTable.pdf">The ABCs of Hepatitis</a>.</li>
	<li>U.S. Preventive Services Task Force. (2016). <a href="http://www.uspreventiveservicestaskforce.org/Page/Document/UpdateSummaryFinal/hepatitis-b-virus-infection-screening-2014" class="external-link external-popup" target="_blank">Final Recommendation Statement: Hepatitis B, Non Pregnant Adolescents and Adults: Screening, May 2014 <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>Centers for Disease Control and Prevention. (2017). <a href="http://www.cdc.gov/hepatitis/HCV/HCVfaq.htm#c1">Hepatitis C FAQs for Health Professionals</a>.</li>
	<li>Centers for Disease Control and Prevention. (2012). <a href="http://www.cdc.gov/mmwr/pdf/rr/rr6104.pdf">Recommendations for the Identification of Chronic Hepatitis C Virus Infection Among Persons Born During 1945–1965</a>. <em>MMWR; </em>61(4).</li>
	<li>National Institute of Diabetes and Digestive and Kidney Diseases. (2012). <a href="http://www.niddk.nih.gov/health-information/health-topics/liver-disease/viral-hepatitis-a-through-e/Pages/facts.aspx">Viral Hepatitis: A through E and Beyond</a>.</li>
	<li>National Institute of Diabetes and Digestive and Kidney Diseases. (2012). <a href="http://www.niddk.nih.gov/health-information/health-topics/liver-disease/liver-transplant/Pages/facts.aspx">Liver Transplantation</a>.</li>
	<li>Centers for Disease Control and Prevention. (2016). <a href="http://www.cdc.gov/hepatitis/index.htm">Viral Hepatitis</a>.</li>
	<li>Centers for Disease Control and Prevention. (2016). <a href="http://www.cdc.gov/hepatitis/HAV/HAVfaq.htm#general">Hepatitis A Questions and Answers for Health Professionals</a>.</li>
	<li>Centers for Disease Control and Prevention. (2016). <a href="http://www.cdc.gov/hepatitis/HBV/HBVfaq.htm#vaccFAQ">Hepatitis B FAQs for Health Professionals</a>.</li>
	<li>Centers for Disease Control and Prevention. (2015). <a href="http://www.cdc.gov/breastfeeding/disease/hepatitis.htm">Breastfeeding: Hepatitis B and C Infections</a></li>
	<li>National Institute of Diabetes and Digestive and Kidney Diseases. (2012). <a href="http://www.niddk.nih.gov/health-information/health-topics/liver-disease/hepatitis-c/Pages/ez.aspx">What I need to know about hepatitis C.</a></li>
	<li>Centers for Disease Control and Prevention. (2017). <a href="http://www.cdc.gov/hepatitis/populations/healthcaresettings.htm">Viral Hepatitis – CDC Recommendations for Specific Populations and Settings</a>.</li>
	<li>Centers for Disease Control and Prevention. (2016). <a href="http://www.cdc.gov/vaccines/hcp/vis/vis-statements/hep-a.html">Hepatitis A Vaccine Information Statement (VIS)</a>.</li>
	<li>Centers for Disease Control and Prevention. (2016). <a href="http://www.cdc.gov/vaccines/hcp/vis/vis-statements/hep-b.html">Hepatitis B Vaccine Information Statement (VIS)</a>.</li>
	<li>World Health Organization. (2016). <a href="http://www.who.int/mediacentre/factsheets/fs204/en/" class="external-link external-popup" target="_blank">Hepatitis B. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
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
