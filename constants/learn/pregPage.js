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

export function pregPage({ navigation, ...rest }) {
  const condName = "Pregnancy";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Pregnancy.jpg?VersionId=L1oHCz6xzk830aC1DRzJb.DBX2eLpW_6";
  const condDescription =
    "Get answers to all of your pregnancy questions and learn what you can do before, during, and after pregnancy to give your baby a heathy start to life.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Preconceptionhealth.jpg?VersionId=3jvMp12btMKFnMVK17IMkDo7Br_L1n1K"></div>     -->
                <div class="heading-description heading-description--half-width">
                <!--  <h1>Preconception health</h1>   -->
            <p><strong>Preconception health is a woman's health before she becomes pregnant. </strong>It means knowing how health conditions and risk factors could affect a woman or her unborn baby if she becomes pregnant. For example, some foods, habits, and medicines can harm your baby — even before he or she is conceived. Some health problems, such as diabetes, also can affect pregnancy.</p>

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
      title: "Why preconception health matters",
      content: `

    <div class="answer"><p>Every woman should be thinking about her health whether or not she is planning pregnancy. One reason is that about half of all pregnancies are not planned. Unplanned pregnancies are at greater risk of <a href="/glossary#preterm_birth">preterm birth</a> and <a href="/glossary#low_birth_weight">low birth weight</a> babies. Another reason is that, despite important advances in medicine and prenatal care, about 1 in 8 babies is born too early. Researchers are trying to find out why and how to prevent preterm birth. But experts agree that women need to be healthier before becoming pregnant. By taking action on health issues and risks before pregnancy, you can prevent problems that might affect you or your baby later.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Five most important things to boost your preconception health ",
      content: `

    <div class="answer"><p>Women and men should prepare for pregnancy before becoming sexually active — or at least three months before getting pregnant. Some actions, such as quitting smoking, reaching a healthy weight, or adjusting medicines you are using, should start even earlier. The five most important things you can do for preconception health are:</p>

<ol>
	<li>Take 400 to 800 micrograms (400 to 800 mcg or 0.4 to 0.8 mg) of <a href="/publications/our-publications/fact-sheet/folic-acid.html">folic acid</a> every day if you are planning or capable of pregnancy to lower your risk of some birth defects of the brain and spine, including <a href="/glossary#spina_bifida">spina bifida</a>. All women need folic acid every day. Talk to your doctor about your folic acid needs. Some doctors prescribe prenatal vitamins that contain higher amounts of folic acid.</li>
	<li>Stop smoking and drinking alcohol.</li>
	<li>If you have a medical condition, be sure it is under control. Some conditions that can affect pregnancy or be affected by it include <a href="/glossary#asthma">asthma</a>, <a href="../../glossary#diabetes">diabetes</a>, oral health, <a href="/glossary#obesity">obesity</a>, or <a href="/glossary#epilepsy">epilepsy</a>.</li>
	<li>Talk to your doctor about any over-the-counter and prescription medicines you are using. These include dietary or herbal supplements. Be sure your vaccinations are up to date.</li>
	<li>Avoid contact with toxic substances or materials that could cause infection at work and at home. Stay away from chemicals and cat or rodent feces.</li>
</ol>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Talk to your doctor before you become pregnant",
      content: `

    <div class="answer"><p>Preconception care can improve your chances of getting pregnant, having a healthy pregnancy, and having a healthy baby. If you are sexually active, talk to your doctor about your preconception health now. Preconception care should begin at least three months before you get pregnant. But some women need more time to get their bodies ready for pregnancy. Be sure to discuss your partner's health too. Ask your doctor about:</p>

<ul>
	<li>Family planning and birth control.</li>
	<li>Taking folic acid.</li>
	<li>Vaccines and screenings you may need, such as a <a href="/glossary#pap">Pap test</a> and screenings for <a href="/glossary#sti">sexually transmitted infections</a> (STIs), including HIV.</li>
	<li>Managing health problems, such as diabetes, high blood pressure, thyroid disease, obesity, depression, eating disorders, and asthma. Find out how pregnancy may affect, or be affected by, health problems you have.</li>
	<li>Medicines you use, including over-the-counter, herbal, and prescription drugs and supplements.</li>
	<li>Ways to improve your overall health, such as reaching a healthy weight, making healthy food choices, being physically active, caring for your teeth and gums, reducing stress, quitting smoking, and avoiding alcohol.</li>
	<li>How to avoid illness.</li>
	<li>Hazards in your workplace or home that could harm you or your baby.</li>
	<li>Health problems that run in your or your partner's family.</li>
	<li>Problems you have had with prior pregnancies, including preterm birth.</li>
	<li>Family concerns that could affect your health, such as domestic violence or lack of support.</li>
</ul>

<p>Bring <a href="https://owh-wh-d9-dev.s3.amazonaws.com/s3fs-public/drupal7/documents/preconception-visit.pdf">a list of talking points</a> (PDF, 182 KB) to be sure you don't forget anything. If you run out of time at your visit, schedule a follow-up visit to make sure everything is covered.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Your partner's role in preparing for pregnancy",
      content: `

    <div class="answer"><p>Your partner can do a lot to support and encourage you in every aspect of preparing for pregnancy. Here are some ways:</p>

<ul>
	<li>Make the decision about pregnancy together. When both partners intend for pregnancy, a woman is more likely to get early prenatal care and avoid risky behaviors such as smoking and drinking alcohol.</li>
	<li>Screening for and treating <a href="/glossary#sti">sexually transmitted infections</a> (STIs) can help make sure infections are not passed to female partners.</li>
	<li>Male partners can improve their own reproductive health and overall health by limiting alcohol, quitting smoking or illegal drug use, making healthy food choices, and reducing stress. Studies show that men who drink a lot, smoke, or use drugs can have problems with their sperm. These might cause you to have problems getting pregnant. If your partner won't quit smoking, ask that he not smoke around you, to avoid harmful effects of secondhand smoke.</li>
	<li>Your partner should also talk to his doctor about his own health, his family health history, and any medicines he uses.</li>
	<li>People who work with chemicals or other toxins can be careful not to expose women to them. For example, people who work with fertilizers or pesticides should change out of dirty clothes before coming near women. They should handle and wash soiled clothes separately.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Genetic counseling",
      content: `

    <div class="answer"><p>The genes your baby is born with can affect your baby's health in these ways:</p>

<ul>
	<li>Single gene disorders are caused by a problem in a single gene. Genes contain the information your body's cells need to function. Single gene disorders run in families. Examples of single gene disorders are <a href="/glossary#cystic_fibrosis">cystic fibrosis</a> and <a href="/glossary#scanemia">sickle cell anemia</a>.</li>
	<li>Chromosome disorders occur when all or part of a chromosome is missing or extra, or if the structure of one or more chromosomes is not normal. Chromosomes are structures where genes are located. Most chromosome disorders that involve whole chromosomes do not run in families.</li>
</ul>

<p>Talk to your doctor about your and your partner's family health histories before becoming pregnant. This information can help your doctor find out any genetic risks you might have.</p>

<p>Depending on your genetic risk factors, your doctor might suggest you meet with a genetic professional. Some reasons a person or couple might seek genetic counseling are:</p>

<ul>
	<li>A family history of a genetic condition, birth defect, chromosomal disorder, or cancer</li>
	<li>Two or more pregnancy losses, a <a href="/glossary#stillbirth">stillbirth</a>, or a baby who died</li>
	<li>A child with a known inherited disorder, birth defect, or intellectual disability</li>
	<li>A woman who is pregnant or plans to become pregnant at 35 years or older</li>
	<li>Test results that suggest a genetic condition is present</li>
	<li>Increased risk of getting or passing on a genetic disorder because of one's ethnic background</li>
	<li>People related by blood who want to have children together</li>
</ul>

<p>During a consultation, the genetics professional meets with a person or couple to discuss genetic risks or to diagnose, confirm, or rule out a genetic condition. Sometimes, a couple chooses to have genetic testing. Some tests can help couples to know the chances that a person will get or pass on a genetic disorder. The genetics professional can help couples decide if genetic testing is the right choice for them.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Related information",
      content: `

    <div class="answer"><ul>
	<li><a href="/publications/our-publications/fact-sheet/folic-acid.html">Folic acid fact sheet</a></li>
	<li><a href="https://owh-wh-d9-dev.s3.amazonaws.com/s3fs-public/drupal7/documents/preconception-visit.pdf">Preconception visit – print-and-go guide</a> (PDF, 182 KB)</li>
	<li><a href="/aging/wellness/quitting-smoking.html">Quitting smoking</a></li>
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
      <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Tryingtoconceive.jpg?VersionId=.bgy9g.NqA6OaSjXZu9j8W3fe2BwgqX9"></div>
              <div class="heading-description heading-description--half-width">
          <h1>Trying to conceive</h1>
          <p><strong>How do you figure out when you're fertile and when you're not?</strong> Wondering if you or your partner is infertile? Read on to boost your chances of conception and get help for fertility problems.</p>

                  </div>
  </div>

<div style="text-align: right; padding: 1rem 0px;"><button class="usa-button">Expand All</button></div><div class="qa-wrapper">
          <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
        
  `,
    },
    {
      title: "Fertility awareness: The menstrual cycle",
      content: `

  <div class="answer"><p>Being aware of your menstrual cycle and the changes in your body that happen during this time can help you know when you are most likely to get pregnant. <a href="/pregnancy-0/menstrual-cycle">See how the menstrual cycle works.</a></p>

<p>The average menstrual cycle lasts 28 days. But normal cycles can vary from 21 to 35 days. The amount of time before ovulation occurs is different in every woman and even can be different from month to month in the same woman, varying from 13 to 20 days long. Learning about this part of the cycle is important because it is when ovulation and pregnancy can occur. After ovulation, every woman (unless she has a health problem that affects her periods or becomes pregnant) will have a period within 14 to 16 days.</p>
</div>

    </div>
</div>
          <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
        
  `,
    },
    {
      title: "Charting your fertility pattern",
      content: `

  <div class="answer"><p>Knowing when you're most fertile will help you plan pregnancy. There are three ways you can keep track of your fertile times. They are:</p>

<ul>
<li>
<p><strong>Basal body temperature method</strong> – Basal body temperature is your temperature at rest as soon as you awake in the morning. A woman's basal body temperature rises slightly with ovulation. So by recording this temperature daily for several months, you'll be able to predict your most fertile days.</p>

<p>Basal body temperature differs slightly from woman to woman. Anywhere from 96 to 98 degrees Fahrenheit orally is average before ovulation. After ovulation most women have an oral temperature between 97 and 99 degrees Fahrenheit. The rise in temperature can be a sudden jump or a gradual climb over a few days.</p>

<p>Usually a woman's basal body temperature rises by only 0.4 to 0.8 degrees Fahrenheit. To detect this tiny change, women must use a basal body thermometer. These thermometers are very sensitive. Most pharmacies sell them for about $10.</p>

<p>The rise in temperature doesn't show exactly when the egg is released. But almost all women have ovulated within three days after their temperatures spike. Body temperature stays at the higher level until your period starts.</p>

<p>You are most fertile and most likely to get pregnant:</p>

<ul>
  <li>Two to three days before your temperature hits the highest point (ovulation)<br>
  <strong>and</strong></li>
  <li>12 to 24 hours after ovulation</li>
</ul>

<p>A man's sperm can live for up to three days in a woman's body. The sperm can fertilize an egg at any point during that time. So if you have unprotected sex a few days before ovulation, you could get pregnant.</p>

<p>Many things can affect basal body temperature. For your chart to be useful, make sure to take your temperature every morning at about the same time. Things that can alter your temperature include:</p>

<ul>
  <li>Drinking alcohol the night before</li>
  <li>Smoking cigarettes the night before</li>
  <li>Getting a poor night's sleep</li>
  <li>Having a fever</li>
  <li>Doing anything in the morning before you take your temperature — including going to the bathroom and talking on the phone<br>
  &nbsp;</li>
</ul>
</li>
<li>
<p><strong>Calendar method</strong> – This involves recording your menstrual cycle on a calendar for eight to 12 months. The first day of your period is Day 1. Circle Day 1 on the calendar. The length of your cycle may vary from month to month. So write down the total number of days it lasts each time. Using this record, you can find the days you are most fertile in the months ahead:</p>

<ol>
  <li>To find out the first day when you are most fertile, subtract 18 from the total number of days in your shortest cycle. Take this new number and count ahead that many days from the first day of your next period. Draw an X through this date on your calendar. The X marks the first day you're likely to be fertile.</li>
  <li>To find out the last day when you are most fertile, subtract 11 from the total number of days in your longest cycle. Take this new number and count ahead that many days from the first day of your next period. Draw an X through this date on your calendar. The time between the two Xs is your most fertile window.</li>
</ol>

<p>This method always should be used along with other fertility awareness methods, especially if your cycles are not always the same length.</p>
</li>
</ul>

<ul>
<li>
<p><strong>Cervical mucus method</strong> (also known as the ovulation method) – This involves being aware of the changes in your cervical mucus throughout the month. The hormones that control the menstrual cycle also change the kind and amount of mucus you have before and during ovulation. Right after your period, there are usually a few days when there is no mucus present or "dry days." As the egg starts to mature, mucus increases in the <a href="/glossary#vagina">vagina</a>, appears at the vaginal opening, and is white or yellow and cloudy and sticky. The greatest amount of mucus appears just before ovulation. During these "wet days" it becomes clear and slippery, like raw egg whites. Sometimes it can be stretched apart. This is when you are most fertile. About four days after the wet days begin the mucus changes again. There will be much less and it becomes sticky and cloudy. You might have a few more dry days before your period returns. Describe changes in your mucus on a calendar. Label the days, "Sticky," "Dry," or "Wet." You are most fertile at the first sign of wetness after your period or a day or two before wetness begins.</p>

<p>The cervical mucus method is less reliable for some women. Women who are breastfeeding, taking hormonal birth control (like the pill), using feminine hygiene products, have <a href="/glossary#vaginitis">vaginitis</a> or <a href="/glossary#sti">sexually transmitted infections</a> (STIs), or have had surgery on the cervix should not rely on this method.</p>
</li>
<li>
<p>To most accurately track your fertility, use a combination of all three methods. This is called the <span class="pronounce-blue pronounce-blueJS"><a href="/glossary#symptothermal_method">symptothermal</a><span class="sound-out-blue sound-out-bluejs" style="display: none;">(SIMP-toh-thur-muhl)</span></span><a href="/glossary#symptothermal_method"> method</a>. You can also purchase over-the-counter ovulation kits or fertility monitors to help find the best time to conceive. These kits work by detecting surges in a specific hormone called <a href="/glossary#luteinizing_hormone">luteinizing hormone</a>, which triggers ovulation.</p>
</li>
</ul>
</div>

    </div>
</div>
          <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
        
  `,
    },
    {
      title: "Infertility",
      content: `

  <div class="answer"><p>Some women want children but either cannot conceive or keep miscarrying. This is called <strong>infertility</strong>. Lots of couples have infertility problems. About one-third of the time, it is a female problem. In another one-third of cases, it is the man with the fertility problem. For the remaining one-third, both partners have fertility challenges or no cause is found.</p>
</div>

    </div>
</div>
          <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
        
  `,
    },
    {
      title: "Causes of infertility",
      content: `

  <div class="answer"><p>Some common reasons for infertility in women include:</p>

<p><strong>Age</strong> – Women generally have some decrease in fertility starting in their early 30s. And while many women in their 30s and 40s have no problems getting pregnant, fertility especially declines after age 35. As a woman ages, normal changes that occur in her ovaries and eggs make it harder to become pregnant. Even though menstrual cycles continue to be regular in a woman's 30s and 40s, the eggs that ovulate each month are of poorer quality than those from her 20s. It is harder to get pregnant when the eggs are poorer in quality. As a woman nears menopause, the ovaries may not release an egg each month, which also can make it harder to get pregnant. Also, as a woman and her eggs age, she is more likely to miscarry, as well as have a baby with genetic problems, such as <a href="/glossary#down_syndrome">Down syndrome</a>.</p>

<p><strong>Health problems</strong> – Some women have diseases or conditions that affect their hormone levels, which can cause infertility.</p>

<ul>
<li>Women with <a href="../../glossary#pcos">polycystic ovary syndrome</a> (PCOS) rarely or never ovulate. Failure to ovulate is the most common cause of infertility in women.</li>
<li>With primary ovarian insufficiency (POI), a woman's ovaries stop working normally before she is 40. It is not the same as early menopause. Some women with POI get a period now and then. But getting pregnant is hard for women with POI.</li>
<li>A condition called luteal phase defect (LPD) is a failure of the uterine lining to be fully prepared for pregnancy. This can keep a fertilized egg from implanting or result in miscarriage.</li>
</ul>

<p>Common problems with a woman's reproductive organs, like <a href="/glossary#u_fibroids">uterine fibroids</a>, <a href="/glossary#endometriosis">endometriosis</a>, and <a href="/glossary#PID">pelvic inflammatory disease</a> can worsen with age and also affect fertility. These conditions might cause the fallopian tubes to be blocked, so the egg can't travel through the tubes into the uterus.</p>

<p><strong>Lifestyle factors</strong> – Certain lifestyle factors also can have a negative effect on a woman's fertility. Examples include smoking, alcohol use, weighing much more or much less than an ideal body weight, a lot of strenuous exercise, and having an eating disorder. Stress also can affect fertility.</p>

<p>Unlike women, some men remain fertile into their 60s and 70s. But as men age, they might begin to have problems with the shape and movement of their sperm. They also have a slightly higher risk of sperm gene defects. Or they might produce no sperm, or too few sperm. Lifestyle choices also can affect the number and quality of a man's sperm. Alcohol and drugs can temporarily reduce sperm quality. And researchers are looking at whether environmental toxins, such as <a href="/glossary#pesticides">pesticides</a> and <a href="../../glossary#lead">lead</a>, also may be to blame for some cases of infertility. Men also can have health problems that affect their sexual and reproductive function. These can include <a href="/glossary#sti">sexually transmitted infections</a> (STIs), <a href="/glossary#diabetes">diabetes</a>, surgery on the <a href="/glossary#prostate">prostate gland</a>, or a severe <a href="/glossary#testicle">testicle</a> injury or problem.</p>
</div>

    </div>
</div>
          <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
        
  `,
    },
    {
      title: "When to see your doctor",
      content: `

  <div class="answer"><p>You should talk to your doctor about your fertility if:</p>

<ul>
<li>You are younger than 35 and have not been able to conceive after one year of frequent sex without birth control.</li>
<li>You are age 35 or older and have not been able to conceive after six months of frequent sex without birth control.</li>
<li>You believe you or your partner might have fertility problems in the future (even before you begin trying to get pregnant).</li>
<li>You or your partner has a problem with sexual function or <a href="/glossary#libido">libido</a>.</li>
</ul>

<p>Happily, doctors are able to help many infertile couples go on to have babies.</p>
</div>

    </div>
</div>
          <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
        
  `,
    },
    {
      title: "Options for infertile couples",
      content: `

  <div class="answer"><p>If you are having fertility issues, your doctor can refer you to a fertility specialist, a doctor who treats infertility. The doctor will need to test both you and your partner to find out what the problem is. Depending on the problem, your doctor might recommend treatment. About 9 in 10 cases of infertility are treated with drugs or surgery. <em>Don't delay seeing your doctor, as age also affects the success rates of these treatments.</em> For some couples, adoption or foster care offers a way to share their love with a child and to build a family.</p>
</div>

    </div>
</div>
          <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
        
  `,
    },
    {
      title: "Infertility treatment",
      content: `

  <div class="answer"><p>Some treatments include:</p>

<ul>
<li><strong>Drugs</strong> – Various fertility drugs may be used for women with ovulation problems. It is important to talk with your doctor about the drug to be used. You should understand the drug's benefits and side effects. Depending on the type of fertility drug and the dosage of the drug used, multiple births (such as twins) can occur.</li>
<li><strong>Surgery</strong> – Surgery is done to repair damage to a woman's ovaries, fallopian tubes, or uterus. Sometimes a man has an infertility problem that can be corrected by surgery.</li>
<li><strong><span class="pronounce-blue pronounce-blueJS"><a href="#">Intrauterine</a><span class="sound-out-blue sound-out-bluejs" style="display: none;">(in-truh-YOOT-uh-ruhn)</span></span> insemination (IUI), also called artificial insemination</strong> – Male sperm is injected into part of the woman's reproductive tract, such as into the uterus or fallopian tube. IUI often is used along with drugs that cause a woman to ovulate.</li>
<li><strong>Assisted reproductive technology (ART)</strong> – ART involves stimulating a woman's ovaries; removing eggs from her body; mixing them with sperm in the laboratory; and putting the embryos back into a woman's body. Success rates of ART vary and depend on many factors.</li>
<li><strong>Third party assistance</strong> – Options include donor eggs (eggs from another woman are used), donor sperm (sperm from another man are used), or surrogacy (when another woman carries a baby for you).</li>
</ul>

<p>Finding the cause of infertility is often a long, complex, and emotional process. And treatment can be expensive. Many health insurance companies do not provide coverage for infertility or provide only limited coverage. Check your health insurance contract carefully to learn about what is covered. Some states have laws that mandate health insurance policies to provide infertility coverage.</p>
</div>

    </div>
</div>
          <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
        
  `,
    },
    {
      title: "Adoption",
      content: `

  <div class="answer"><p>If infertility is a problem for you, another option may be adoption. Adopting a baby or child can be one of the most rewarding experiences of your life. So many babies, children, and adolescents in the United States and around the world need a family. Some of these are healthy infants, and many are children with special needs, including physical, emotional, or mental disabilities. If you do adopt a child with special needs, there are both federal and state sources of financial assistance available to help you afford the child's care.</p>

<p>There are two types of adoptions:</p>

<ul>
<li><strong>Open adoption</strong> – The birth mother, and possibly the birth father, know something about the adoptive parents. They might even meet and exchange names or addresses.</li>
<li><strong>Closed adoption</strong> – The birth mother and adoptive parents do not meet each other or know each others' names.</li>
</ul>

<p>The laws of each state differ on whether, after a period of time, the files of a closed adoption can be opened later to reveal this information. State laws also differ on whether adoptions can be handled by an adoption agency or independently (such as through a doctor, lawyer, counselor or independent organization). Most adoption agencies carefully screen and study the adoptive parents. You can learn more about adoption through the resources at the end of this section.</p>
</div>

    </div>
</div>
          <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
        
  `,
    },
    {
      title: "Foster care",
      content: `

  <div class="answer"><p>Another option for couples who have a lot of love to share with a child is foster care. Unlike adoption, foster care is a temporary service that responds to crises in the lives of children and families. But it also can be the first step to adopting a child. Many foster children have been abused or neglected, or removed by a court order. Foster families are people who take these children into their homes to provide day-to-day care and nurturing. Children in foster care may live with unrelated foster parents, with relatives, with families who plan to adopt them, or in group homes or residential treatment centers. Even though foster care is viewed as a temporary service, many children have to stay in foster care for long periods of time.</p>

<p>Each child in foster care should have a plan that will let him or her grow up in a permanent family. For many children, the plan is to return to the birth parents. In these cases, foster families may work with the birth parents and the child to help them both learn the skills they need to live together again. Foster parents need to be able to love the children who live in their home, and let go of them when it is time to send them back to their parents. For other children, going back to their parents will not be possible, and the foster parents may become adoptive parents. Or they can keep other kinds of formal or informal ties with the children they parent.</p>

<p>Every state has its own rules about foster parenting. But, the chances are good that you can be a foster parent in your state. There are many more children in need of care than there are foster parents available. To fill this gap, states are looking for people who want to help children and can share their time and their homes. States also give foster parents many different forms of support, like training and financial assistance.</p>
</div>

    </div>
</div>
          <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
        
  `,
    },
    {
      title: "Counseling and support groups",
      content: `

  <div class="answer"><p>If you've been having problems getting pregnant, you know how frustrating it can feel. Not being able to get pregnant can be one of the most stressful experiences a couple has. Both counseling and support groups can help you and your partner talk about your feelings and help you meet other couples struggling with the same issues. You will learn that anger, grief, blame, guilt, and depression are all normal. Couples do survive infertility, and can become closer and stronger in the process. Ask your doctor for the names of counselors or therapists with an interest in fertility.</p>
</div>

    </div>
</div>
  </div>
</div>

</article>
<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
        <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Stagesofpregnancy.jpg?VersionId=Ue4lvJSPC.EwZme3oWc_9D031yHctuCx"></div>
                <div class="heading-description heading-description--half-width">
            <h1>Stages of pregnancy</h1>
            <p><strong>Pregnancy lasts about 40 weeks, counting from the first day of your last normal period.</strong> The weeks are grouped into three <span class="pronounce-blue pronounce-blueJS"><a href="#">trimesters.</a><span class="sound-out-blue sound-out-bluejs" style="display: none;">(TREYE-mess-turs)</span></span> Find out what's happening with you and your baby in these three stages.</p>

                    </div>
    </div>

<div style="text-align: right; padding: 1rem 0px;"><button class="usa-button">Expand All</button></div><div class="qa-wrapper">
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "First trimester (week 1–week 12)",
      content: `

    <div class="answer"><p>During the first trimester your body undergoes many changes. Hormonal changes affect almost every organ system in your body. These changes can trigger symptoms even in the very first weeks of pregnancy. Your period stopping is a clear sign that you are pregnant. Other changes may include:</p>

<ul>
	<li>Extreme tiredness</li>
	<li>Tender, swollen breasts. Your nipples might also stick out.</li>
	<li>Upset stomach with or without throwing up (morning sickness)</li>
	<li>Cravings or distaste for certain foods</li>
	<li>Mood swings</li>
	<li>Constipation (trouble having bowel movements)</li>
	<li>Need to pass urine more often</li>
	<li>Headache</li>
	<li>Heartburn</li>
	<li>Weight gain or loss</li>
</ul>

<p>As your body changes, you might need to make changes to your daily routine, such as going to bed earlier or eating frequent, small meals. Fortunately, most of these discomforts will go away as your pregnancy progresses. And some women might not feel any discomfort at all! If you have been pregnant before, you might feel differently this time around. Just as each woman is different, so is each pregnancy.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Second trimester (week 13–week 28)",
      content: `

    <div class="answer"><p>Most women find the second trimester of pregnancy easier than the first. But it is just as important to stay informed about your pregnancy during these months.</p>

<p>You might notice that symptoms like nausea and fatigue are going away. But other new, more noticeable changes to your body are now happening. Your abdomen will expand as the baby continues to grow. And before this trimester is over, you will feel your baby beginning to move!</p>

<p>As your body changes to make room for your growing baby, you may have:</p>

<ul>
	<li>Body aches, such as back, abdomen, groin, or thigh pain</li>
	<li>Stretch marks on your abdomen, breasts, thighs, or buttocks</li>
	<li>Darkening of the skin around your nipples</li>
	<li>A line on the skin running from belly button to pubic hairline</li>
	<li>Patches of darker skin, usually over the cheeks, forehead, nose, or upper lip. Patches often match on both sides of the face. This is sometimes called the mask of pregnancy.</li>
	<li>Numb or tingling hands, called carpal tunnel syndrome</li>
	<li>Itching on the abdomen, palms, and soles of the feet. <em>(Call your doctor if you have nausea, loss of appetite, vomiting, jaundice or fatigue combined with itching. These can be signs of a serious liver problem.)</em></li>
	<li>Swelling of the ankles, fingers, and face. <em>(If you notice any sudden or extreme swelling or if you gain a lot of weight really quickly, call your doctor right away. This could be a sign of <a href="/glossary#preeclampsia">preeclampsia</a>.)</em></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Third trimester (week 29–week 40)",
      content: `

    <div class="answer"><p>You're in the home stretch! Some of the same discomforts you had in your second trimester will continue. Plus, many women find breathing difficult and notice they have to go to the bathroom even more often. This is because the baby is getting bigger and it is putting more pressure on your organs. Don't worry, your baby is fine and these problems will lessen once you give birth.</p>

<p>Some new body changes you might notice in the third trimester include:</p>

<ul>
	<li>Shortness of breath</li>
	<li>Heartburn</li>
	<li>Swelling of the ankles, fingers, and face. <em>(If you notice any sudden or extreme swelling or if you gain a lot of weight really quickly, call your doctor right away. This could be a sign of <a href="/glossary#preeclampsia">preeclampsia</a>.)</em></li>
	<li><a href="/glossary#hemorrhoids">Hemorrhoids</a></li>
	<li>Tender breasts, which may leak a watery pre-milk called colostrum (kuh-LOSS-struhm)</li>
	<li>Your belly button may stick out</li>
	<li>Trouble sleeping</li>
	<li>The baby "dropping", or moving lower in your abdomen</li>
	<li>Contractions, which can be a sign of <a href="/pregnancy/childbirth-beyond/labor-birth.html">real or false labor</a></li>
</ul>

<p>As you near your due date, your cervix becomes thinner and softer (called effacing). This is a normal, natural process that helps the birth canal (vagina) to open during the birthing process. Your doctor will check your progress with a vaginal exam as you near your due date. Get excited — the final countdown has begun!</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Your developing baby",
      content: `

    <div class="answer"><h3>First trimester (week 1-week 12)</h3>

<p>At <strong>four to five</strong> weeks:</p>

<div class="row">
<div class="col-md-4 col-sm-12"><img alt="Illustration of a fetus at 4 weeks" data-entity-type="" data-entity-uuid="" src="https://owh-wh-d9-dev.s3.amazonaws.com/s3fs-public/images/01months.jpg" style="margin-bottom:20px; border: 1px #ccc solid;"></div>

<div class="col-md-8 col-sm-12">
<ul>
	<li>Your baby's brain and spinal cord have begun to form.</li>
	<li>The heart begins to form.</li>
	<li>Arm and leg buds appear.</li>
	<li>Your baby is now an embryo and one-twenty-fifth inch long.</li>
</ul>
</div>
</div>

<p>At <strong>eight</strong> weeks:</p>

<div class="row">
<div class="col-md-4 col-sm-12"><img alt="Illustration of a fetus at 8 weeks" data-entity-type="" data-entity-uuid="" src="https://owh-wh-d9-dev.s3.amazonaws.com/s3fs-public/images/02months.jpg" style="margin-bottom:20px; border: 1px #ccc solid;"></div>

<div class="col-md-8 col-sm-12">
<ul>
	<li>All major organs and external body structures have begun to form.</li>
	<li>Your baby's heart beats with a regular rhythm.</li>
	<li>The arms and legs grow longer, and fingers and toes have begun to form.</li>
	<li>The sex organs begin to form.</li>
	<li>The eyes have moved forward on the face and eyelids have formed.</li>
	<li>The <a href="/glossary#umbilical">umbilical cord</a> is clearly visible.</li>
	<li>At the end of eight weeks, your baby is a fetus and looks more like a human. Your baby is nearly 1 inch long and weighs less than one-eighth ounce.</li>
</ul>
</div>
</div>

<p>At <strong>12</strong> weeks:</p>

<div class="row">
<div class="col-md-4 col-sm-12"><img alt="Illustration of a fetus at 12 weeks" data-entity-type="" data-entity-uuid="" src="https://owh-wh-d9-dev.s3.amazonaws.com/s3fs-public/images/03months.jpg" style="margin-bottom:20px; border: 1px #ccc solid;"></div>

<div class="col-md-8 col-sm-12">
<ul>
	<li>The nerves and muscles begin to work together. Your baby can make a fist.</li>
	<li>The external sex organs show if your baby is a boy or girl. A woman who has an ultrasound in the second trimester or later might be able to find out the baby's sex.</li>
	<li>Eyelids close to protect the developing eyes. They will not open again until the 28th week.</li>
	<li>Head growth has slowed, and your baby is much longer. Now, at about 3 inches long, your baby weighs almost an ounce.</li>
</ul>
</div>
</div>

<h3>Second trimester (week 13-week 28)</h3>

<p>At <strong>16</strong> weeks:</p>

<div class="row">
<div class="col-md-4 col-sm-12"><img alt="Illustration of a fetus at 16 weeks" data-entity-type="" data-entity-uuid="" src="https://owh-wh-d9-dev.s3.amazonaws.com/s3fs-public/images/04months.jpg" style="margin-bottom:20px; border: 1px #ccc solid;"></div>

<div class="col-md-8 col-sm-12">
<ul>
	<li>Muscle tissue and bone continue to form, creating a more complete skeleton.</li>
	<li>Skin begins to form. You can nearly see through it.</li>
	<li>Meconium (mih-KOH-nee-uhm) develops in your baby's intestinal tract. This will be your baby's first bowel movement.</li>
	<li>Your baby makes sucking motions with the mouth (sucking reflex).</li>
	<li>Your baby reaches a length of about 4 to 5 inches and weighs almost 3 ounces.</li>
</ul>
</div>
</div>

<p>At <strong>20</strong> weeks:</p>

<div class="row">
<div class="col-md-4 col-sm-12"><img alt="Illustration of a fetus at 20 weeks" data-entity-type="" data-entity-uuid="" src="https://owh-wh-d9-dev.s3.amazonaws.com/s3fs-public/images/05months.jpg" style="margin-bottom:20px; border: 1px #ccc solid;"></div>

<div class="col-md-8 col-sm-12">
<ul>
	<li>Your baby is more active. You might feel slight fluttering.</li>
	<li>Your baby is covered by fine, downy hair called lanugo (luh-NOO-goh) and a waxy coating called vernix. This protects the forming skin underneath.</li>
	<li>Eyebrows, eyelashes, fingernails, and toenails have formed. Your baby can even scratch itself.</li>
	<li>Your baby can hear and swallow.</li>
	<li>Now halfway through your pregnancy, your baby is about 6 inches long and weighs about 9 ounces.</li>
</ul>
</div>
</div>

<p>At <strong>24</strong> weeks:</p>

<div class="row">
<div class="col-md-4 col-sm-12"><img alt="Illustration of a fetus at 24 weeks" data-entity-type="" data-entity-uuid="" src="https://owh-wh-d9-dev.s3.amazonaws.com/s3fs-public/images/06months.jpg" style="margin-bottom:20px; border: 1px #ccc solid;"></div>

<div class="col-md-8 col-sm-12">
<ul>
	<li>Bone marrow begins to make blood cells.</li>
	<li>Taste buds form on your baby's tongue.</li>
	<li>Footprints and fingerprints have formed.</li>
	<li>Real hair begins to grow on your baby's head.</li>
	<li>The lungs are formed, but do not work.</li>
	<li>The hand and startle reflex develop.</li>
	<li>Your baby sleeps and wakes regularly.</li>
	<li>If your baby is a boy, his testicles begin to move from the abdomen into the scrotum. If your baby is a girl, her uterus and ovaries are in place, and a lifetime supply of eggs have formed in the ovaries.</li>
	<li>Your baby stores fat and has gained quite a bit of weight. Now at about 12 inches long, your baby weighs about 1½ pounds.</li>
</ul>
</div>
</div>

<h3>Third trimester (week 29-week 40)</h3>

<p>At <strong>32</strong> weeks:</p>

<div class="row">
<div class="col-md-4 col-sm-12"><img alt="Illustration of a fetus at 32 weeks" data-entity-type="" data-entity-uuid="" src="https://owh-wh-d9-dev.s3.amazonaws.com/s3fs-public/images/07months.jpg" style="margin-bottom:20px; border: 1px #ccc solid;"></div>

<div class="col-md-8 col-sm-12">
<ul>
	<li>Your baby's bones are fully formed, but still soft.</li>
	<li>Your baby's kicks and jabs are forceful.</li>
	<li>The eyes can open and close and sense changes in light.</li>
	<li>Lungs are not fully formed, but practice "breathing" movements occur.</li>
	<li>Your baby's body begins to store vital minerals, such as iron and calcium.</li>
	<li>Lanugo begins to fall off.</li>
	<li>Your baby is gaining weight quickly, about one-half pound a week. Now, your baby is about 15 to 17 inches long and weighs about 4 to 4½ pounds.</li>
</ul>
</div>
</div>

<p>At <strong>36</strong> weeks:</p>

<div class="row">
<div class="col-md-4 col-sm-12"><img alt="Illustration of a fetus at 36 weeks" data-entity-type="" data-entity-uuid="" src="https://owh-wh-d9-dev.s3.amazonaws.com/s3fs-public/images/08months.jpg" style="margin-bottom:20px; border: 1px #ccc solid;"></div>

<div class="col-md-8 col-sm-12">
<ul>
	<li>The protective waxy coating called vernix gets thicker.</li>
	<li>Body fat increases. Your baby is getting bigger and bigger and has less space to move around. Movements are less forceful, but you will feel stretches and wiggles.</li>
	<li>Your baby is about 16 to 19 inches long and weighs about 6 to 6½ pounds.</li>
</ul>
</div>
</div>

<p>Weeks <strong>37–40</strong>:</p>

<div class="row">
<div class="col-md-4 col-sm-12"><img alt="Illustration of a fetus at 39 weeks" data-entity-type="" data-entity-uuid="" src="https://owh-wh-d9-dev.s3.amazonaws.com/s3fs-public/images/09months.jpg" style="margin-bottom:20px; border: 1px #ccc solid;"></div>

<div class="col-md-8 col-sm-12">
<ul>
	<li>At 39 weeks, your baby is considered full-term. Your baby's organs are ready to function on their own.</li>
	<li>As you near your due date, your baby may turn into a head-down position for birth. Most babies "present" head down.</li>
	<li>At birth, your baby may weigh somewhere between 6 pounds 2 ounces and 9 pounds 2 ounces and be 19 to 21 inches long. Most full-term babies fall within these ranges. But healthy babies come in many different sizes.</li>
</ul>
</div>
</div>
</div>

      </div>
</div>
    </div>
  </div>

</article>
<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
        <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Prenatalcareandtests.jpg?VersionId=45vOPoSbKX9N.i6EBOSUe5ovGOO3f0wk"></div>
                <div class="heading-description heading-description--half-width">
            <h1>Prenatal care and tests</h1>
            <p><strong>Medical checkups and screening tests help keep you and your baby healthy during pregnancy.</strong> This is called prenatal care. It also involves education and counseling about how to handle different aspects of your pregnancy. During your visits, your doctor may discuss many issues, such as healthy eating and physical activity, screening tests you might need, and what to expect during labor and delivery.</p>

                    </div>
    </div>

<div style="text-align: right; padding: 1rem 0px;"><button class="usa-button">Expand All</button></div><div class="qa-wrapper">
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Choosing a prenatal care provider",
      content: `

    <div class="answer"><p>You will see your prenatal care provider many times before you have your baby. So you want to be sure that the person you choose has a good reputation, and listens to and respects you. You will want to find out if the doctor or midwife can deliver your baby in the <a href="#2">place you want to give birth</a>, such as a specific hospital or birthing center. Your provider also should be willing and able to give you the information and support you need to make an informed choice about whether to <a href="/pregnancy/getting-ready/breastfeeding.html">breastfeed</a> or bottle-feed.</p>

<p>Health care providers that care for women during pregnancy include:</p>

<ul>
	<li><strong>Obstetricians (OB)</strong> are medical doctors who specialize in the care of pregnant women and in delivering babies. OBs also have special training in surgery so they are also able to do a <a href="/glossary#cesarean">cesarean delivery</a>. Women who have health problems or are at risk for pregnancy complications should see an obstetrician. Women with the highest risk pregnancies might need special care from a <strong>maternal-fetal medicine specialist</strong>.</li>
	<li><strong>Family practice doctors</strong> are medical doctors who provide care for the whole family through all stages of life. This includes care during pregnancy and delivery, and following birth. Most family practice doctors cannot perform cesarean deliveries.</li>
	<li>A <strong>certified nurse-midwife (CNM)</strong> and <strong>certified professional midwife (CPM)</strong> are trained to provide pregnancy and postpartum care. Midwives can be a good option for healthy women at low risk for problems during pregnancy, labor, or delivery. A CNM is educated in both nursing and midwifery. Most CNMs practice in hospitals and birth centers. A CPM is required to have experience delivering babies in home settings because most CPMs practice in homes and birthing centers. All midwives should have a back-up plan with an obstetrician in case of a problem or emergency.</li>
</ul>

<p>Ask your primary care doctor, friends, and family members for provider recommendations. When making your choice, think about:</p>

<ul>
	<li>Reputation</li>
	<li>Personality and bedside manner</li>
	<li>The provider's gender and age</li>
	<li>Office location and hours</li>
	<li>Whether you always will be seen by the same provider during office checkups and delivery</li>
	<li>Who covers for the provider when she or he is not available</li>
	<li>Where you want to deliver</li>
	<li>How the provider handles phone consultations and after-hour calls</li>
</ul>

<h3>What is a doula?</h3>

<p>A <span class="pronounce-blue pronounce-blueJS"><a href="#">doula</a> <span class="sound-out-blue sound-out-bluejs" style="display: none;">(DOO-luh)</span></span> is a professional labor coach, who gives physical and emotional support to women during labor and delivery. They offer advice on breathing, relaxation, movement, and positioning. Doulas also give emotional support and comfort to women and their partners during labor and birth. Doulas and midwives often work together during a woman's labor. A recent study showed that continuous doula support during labor was linked to shorter labors and much lower use of:</p>

<ul>
	<li>Pain medicines</li>
	<li><span class="pronounce-blue pronounce-blueJS"><a href="#">Oxytocin</a> <span class="sound-out-blue sound-out-bluejs" style="display: none;">(ok-see-TOHS-uhn)</span></span> (medicine to help labor progress)</li>
	<li>Cesarean delivery</li>
</ul>

<p>Check with your health insurance company to find out if they will cover the cost of a doula. When choosing a doula, find out if she is certified by Doulas of North America (DONA) or another professional group.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Places to deliver your baby",
      content: `

    <div class="answer"><p>Many women have strong views about where and how they'd like to deliver their babies. In general, women can choose to deliver at a hospital, birth center, or at home. You will need to contact your health insurance provider to find out what options are available. Also, find out if the doctor or midwife you are considering can deliver your baby in the place you want to give birth.</p>

<ul>
	<li>
	<p><strong>Hospitals</strong> are a good choice for women with health problems, pregnancy complications, or those who are at risk for problems during labor and delivery. Hospitals offer the most advanced medical equipment and highly trained doctors for pregnant women and their babies. In a hospital, doctors can do a cesarean delivery if you or your baby is in danger during labor. Women can get <a href="/glossary#epidural">epidurals</a> or many other pain relief options. Also, more and more hospitals now offer on-site birth centers, which aim to offer a style of care similar to standalone birth centers.</p>

	<p>Questions to ask when choosing a hospital:</p>

	<ul>
		<li>Is it close to your home?</li>
		<li>Is a doctor who can give pain relief, such as an epidural, at the hospital 24-hours a day?</li>
		<li>Do you like the feel of the labor and delivery rooms?</li>
		<li>Are private rooms available?</li>
		<li>How many support people can you invite into the room with you?</li>
		<li>Does it have a neonatal intensive care unit (NICU) in case of serious problems with the baby?</li>
		<li>Can the baby stay in the room with you?</li>
		<li>Does the hospital have the staff and set-up to support successful breastfeeding?</li>
		<li>Does it have an on-site birth center?</li>
	</ul>
	</li>
	<li>
	<p><strong>Birth or birthing centers</strong> give women a "homey" environment in which to labor and give birth. They try to make labor and delivery a natural and personal process by doing away with most high-tech equipment and routine procedures. So, you will not automatically be hooked up to an IV. Likewise, you won't have an electronic fetal monitor around your belly the whole time. Instead, the midwife or nurse will check in on your baby from time to time with a handheld machine. Once the baby is born, all exams and care will occur in your room. Usually certified nurse-midwives, not obstetricians, deliver babies at birth centers. Healthy women who are at low risk for problems during pregnancy, labor, and delivery may choose to deliver at a birth center.</p>

	<p>Women can not receive epidurals at a birth center, although some pain medicines may be available. If a cesarean delivery becomes necessary, women must be moved to a hospital for the procedure. After delivery, babies with problems can receive basic emergency care while being moved to a hospital.</p>

	<p>Many birthing centers have showers or tubs in their rooms for laboring women. They also tend to have comforts of home like large beds and rocking chairs. In general, birth centers allow more people in the delivery room than do hospitals.</p>

	<p>Birth centers can be inside of hospitals, a part of a hospital or completely separate facilities. If you want to deliver at a birth center, make sure it meets the standards of the Accreditation Association for Ambulatory Health Care, The Joint Commission, or the American Association of Birth Centers. Accredited birth centers must have doctors who can work at a nearby hospital in case of problems with the mom or baby. Also, make sure the birth center has the staff and set-up to support successful breastfeeding.</p>
	</li>
	<li>
	<p><strong>Homebirth</strong> is an option for healthy pregnant women with no risk factors for complications during pregnancy, labor or delivery. It is also important women have a strong after-care support system at home. Some certified nurse midwives and doctors will deliver babies at home. Many health insurance companies do not cover the cost of care for homebirths. So check with your plan if you'd like to deliver at home.</p>

	<p>Homebirths are common in many countries in Europe. But in the United States, planned homebirths are not supported by the American Congress of Obstetricians and Gynecologists (ACOG). ACOG states that hospitals are the safest place to deliver a baby. In case of an emergency, says ACOG, a hospital's equipment and highly trained doctors can provide the best care for a woman and her baby.</p>

	<p>If you are thinking about a homebirth, you need to weigh the pros and cons. The main advantage is that you will be able to experience labor and delivery in the privacy and comfort of your own home. Since there will be no routine medical procedures, you will have control of your experience.</p>

	<p>The main disadvantage of a homebirth is that in case of a problem, you and the baby will not have immediate hospital/medical care. It will have to wait until you are transferred to the hospital. Plus, women who deliver at home have no options for pain relief.</p>

	<p>To ensure your safety and that of your baby, you must have a highly trained and experienced midwife along with a fail-safe back-up plan. You will need fast, reliable transportation to a hospital. If you live far away from a hospital, homebirth may not be the best choice. Your midwife must be experienced and have the necessary skills and supplies to start emergency care for you and your baby if need be. Your midwife should also have access to a doctor 24 hours a day.</p>
	</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Prenatal checkups",
      content: `

    <div class="answer"><p>During pregnancy, regular checkups are very important. This consistent care can help keep you and your baby healthy, spot problems if they occur, and prevent problems during delivery. Typically, routine checkups occur:</p>

<ul>
	<li>Once each month for weeks four through 28</li>
	<li>Twice a month for weeks 28 through 36</li>
	<li>Weekly for weeks 36 to birth</li>
</ul>

<p>Women with <a href="#6">high-risk pregnancies</a> need to see their doctors more often.</p>

<p>At your first visit your doctor will perform a full physical exam, take your blood for lab tests, and calculate your due date. Your doctor might also do a breast exam, a pelvic exam to check your uterus (womb), and a cervical exam, including a Pap test. During this first visit, your doctor will ask you lots of questions about your lifestyle, relationships, and health habits. It's important to be honest with your doctor.</p>

<p>After the first visit, most prenatal visits will include:</p>

<ul>
	<li>Checking your blood pressure and weight</li>
	<li>Checking the baby's heart rate</li>
	<li>Measuring your abdomen to check your baby's growth</li>
</ul>

<p>You also will have some routine <a href="#5">tests</a> throughout your pregnancy, such as tests to look for <a href="/a-z-topics/iron-deficiency-anemia">anemia</a>, tests to measure risk of <a href="/glossary#gestational_diabetes">gestational diabetes</a>, and tests to look for harmful infections.</p>

<p>Become a partner with your doctor to manage your care. Keep all of your appointments — every one is important! Ask questions and read to educate yourself about this exciting time.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Monitor your baby's activity",
      content: `

    <div class="answer"><p>After 28 weeks, keep track of your baby's movement. This will help you to notice if your baby is moving less than normal, which could be a sign that your baby is in distress and needs a doctor's care. An easy way to do this is the "count-to-10" approach. Count your baby's movements in the evening — the time of day when the fetus tends to be most active. Lie down if you have trouble feeling your baby move. Most women count 10 movements within about 20 minutes. But it is rare for a woman to count less than 10 movements within two hours at times when the baby is active. Count your baby's movements every day so you know what is normal for you. Call your doctor if you count less than 10 movements within two hours or if you notice your baby is moving less than normal. If your baby is not moving at all, call your doctor right away.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Prenatal tests",
      content: `

    <div class="answer"><p>Tests are used during pregnancy to check your and your baby's health. At your fist prenatal visit, your doctor will use tests to check for a number of things, such as:</p>

<ul>
	<li>Your blood type and <a href="/glossary#rh_factor">Rh factor</a></li>
	<li><a href="/a-z-topics/iron-deficiency-anemia">Anemia</a></li>
	<li>Infections, such as <a href="/glossary#toxoplasmosis">toxoplasmosis</a> and <a href="/glossary#sti">sexually transmitted infections</a> (STIs), including <a href="/glossary#hepatitis_B">hepatitis B</a>, <a href="/glossary#syphilis">syphilis</a>, <a href="/glossary#chlamydia">chlamydia</a>, and <a href="/glossary#hiv">HIV</a></li>
	<li>Signs that you are immune to <a href="/glossary#rubella">rubella</a> (German measles) and <a href="/glossary#chicken_pox">chicken pox</a></li>
</ul>

<p>Throughout your pregnancy, your doctor or midwife may suggest a number of other tests, too. Some tests are suggested for all women, such as screenings for gestational diabetes, Down syndrome, and HIV. Other tests might be offered based on your:</p>

<ul>
	<li>Age</li>
	<li>Personal or family health history</li>
	<li>Ethnic background</li>
	<li>Results of routine tests</li>
</ul>

<p>Some tests are screening tests. They detect risks for or signs of <em>possible</em> health problems in you or your baby. Based on screening test results, your doctor might suggest diagnostic tests. Diagnostic tests confirm or rule out health problems in you or your baby.</p>

<table border="1" summary="This table of common Common Prenatal tests shows different tests (row headings) along with what it is and how it is done (column headings)">
	<caption align="top">Common prenatal tests</caption>
	<tbody>
		<tr style="background-color:#582C83; color: #fff;">
			<th scope="col" width="26%"><strong>Test</strong></th>
			<th scope="col" width="37%">What it is</th>
			<th scope="col" width="37%">How it is done</th>
		</tr>
		<tr>
			<td align="left" valign="top"><strong>Amniocentesis (AM-nee-oh-sen-TEE-suhss)</strong></td>
			<td valign="top">
			<p>This test can diagnosis certain birth defects, including:</p>

			<ul>
				<li><a href="/glossary#down_syndrome">Down syndrome</a></li>
				<li><a href="/glossary#cystic_fibrosis">Cystic fibrosis</a></li>
				<li><a href="/glossary#Spina_bifida">Spina bifida</a></li>
			</ul>

			<p>It is performed at 14 to 20 weeks.</p>

			<p>It may be suggested for couples at higher risk for genetic disorders. It also provides DNA for paternity testing.</p>
			</td>
			<td valign="top">A thin needle is used to draw out a small amount of amniotic fluid and cells from the sac surrounding the fetus. The sample is sent to a lab for testing.</td>
		</tr>
		<tr>
			<td align="left" valign="top"><strong><a id="bpp" name="bpp"></a>Biophysical profile (BPP)</strong></td>
			<td valign="top">This test is used in the third trimester to monitor the overall health of the baby and to help decide if the baby should be delivered early.</td>
			<td valign="top">BPP involves an ultrasound exam along with a <a href="#nonstress">nonstress test</a>. The BPP looks at the baby's breathing, movement, muscle tone, heart rate, and the amount of amniotic fluid.</td>
		</tr>
		<tr>
			<td align="left" valign="top"><strong>Chorionic villus (KOR-ee-ON-ihk VIL-uhss) sampling (CVS)</strong></td>
			<td valign="top">
			<p>A test done at 10 to 13 weeks to diagnose certain birth defects, including:</p>

			<ul>
				<li>Chromosomal disorders, including <a href="/glossary#down_syndrome">Down syndrome</a></li>
				<li>Genetic disorders, such as <a href="/glossary#cystic_fibrosis">cystic fibrosis</a></li>
			</ul>

			<p>CVS may be suggested for couples at higher risk for genetic disorders. It also provides DNA for paternity testing.</p>
			</td>
			<td valign="top">A needle removes a small sample of cells from the placenta to be tested.</td>
		</tr>
		<tr>
			<td align="left" valign="top"><strong><a id="firstscreen" name="firstscreen"></a>First trimester screen</strong></td>
			<td valign="top">
			<p>A screening test done at 11 to 14 weeks to detect higher risk of:</p>

			<ul>
				<li>Chromosomal disorders, including <a href="/glossary#down_syndrome">Down syndrome</a> and <a href="/glossary#trisomy_18">trisomy 18</a></li>
				<li>Other problems, such as heart defects</li>
			</ul>

			<p>It also can reveal multiple births. Based on test results, your doctor may suggest other tests to diagnose a disorder.</p>
			</td>
			<td valign="top">This test involves both a blood test and an ultrasound exam called nuchal translucency (NOO-kuhl trans-LOO-sent-see) screening. The blood test measures the levels of certain substances in the mother's blood. The ultrasound exam measures the thickness at the back of the baby's neck. This information, combined with the mother's age, help doctors determine risk to the fetus.</td>
		</tr>
		<tr>
			<td align="left" valign="top"><strong>Glucose challenge screening</strong></td>
			<td valign="top">
			<p>A screening test done at 26 to 28 weeks to determine the mother's risk of <a href="/glossary#gestational_diabetes">gestational diabetes</a>.</p>

			<p>Based on test results, your doctor may suggest a <a href="#gt">glucose tolerance test</a>.</p>
			</td>
			<td valign="top">First, you consume a special sugary drink from your doctor. A blood sample is taken one hour later to look for high blood sugar levels.</td>
		</tr>
		<tr>
			<td align="left" valign="top"><strong><a id="gt" name="gt"></a>Glucose tolerance test</strong></td>
			<td valign="top">This test is done at 26 to 28 weeks to diagnose <a href="/glossary#gestational_diabetes">gestational diabetes</a>.</td>
			<td valign="top">Your doctor will tell you what to eat a few days before the test. Then, you cannot eat or drink anything but sips of water for 14 hours before the test. Your blood is drawn to test your "fasting blood glucose level." Then, you will consume a sugary drink. Your blood will be tested every hour for three hours to see how well your body processes sugar.</td>
		</tr>
		<tr>
			<td align="left" valign="top"><strong>Group B streptococcus (STREP-tuh-KOK-uhss) infection</strong></td>
			<td valign="top">This test is done at 36 to 37 weeks to look for bacteria that can cause <a href="/glossary#pneumonia">pneumonia</a> or serious infection in newborn.</td>
			<td valign="top">A swab is used to take cells from your vagina and rectum to be tested.</td>
		</tr>
		<tr>
			<td align="left" valign="top"><strong>Maternal serum screen (also called quad screen, triple test, triple screen, multiple marker screen, or AFP)</strong></td>
			<td valign="top">
			<p>A screening test done at 15 to 20 weeks to detect higher risk of:</p>

			<ul>
				<li>Chromosomal disorders, including <a href="/glossary#down_syndrome">Down syndrome</a> and <a href="/glossary#trisomy_18">trisomy 18</a></li>
				<li>Neural tube defects, such as <a href="/glossary#spina_bifida">spina bifida</a></li>
			</ul>

			<p>Based on test results, your doctor may suggest other tests to diagnose a disorder.</p>
			</td>
			<td valign="top">Blood is drawn to measure the levels of certain substances in the mother's blood.</td>
		</tr>
		<tr>
			<td align="left" valign="top"><strong><a id="nonstress" name="nonstress"></a>Nonstress test (NST)</strong></td>
			<td valign="top">This test is performed after 28 weeks to monitor your baby's health. It can show signs of fetal distress, such as your baby not getting enough oxygen.</td>
			<td valign="top">A belt is placed around the mother's belly to measure the baby's heart rate in response to its own movements.</td>
		</tr>
		<tr>
			<td align="left" valign="top"><strong><a id="ultrasound" name="ultrasound"></a>Ultrasound exam</strong></td>
			<td valign="top">
			<p>An ultrasound exam can be performed at any point during the pregnancy. Ultrasound exams are not routine. But it is not uncommon for women to have a standard ultrasound exam between 18 and 20 weeks to look for signs of problems with the baby's organs and body systems and confirm the age of the fetus and proper growth. It also might be able to tell the sex of your baby.</p>

			<p>Ultrasound exam is also used as part of the <a href="#firstscreen">first trimester screen</a> and <a href="#bpp">biophysical profile</a> (BPP).</p>

			<p>Based on exam results, your doctor may suggest other tests or other types of ultrasound to help detect a problem.</p>
			</td>
			<td valign="top">Ultrasound uses sound waves to create a "picture" of your baby on a monitor. With a standard ultrasound, a gel is spread on your abdomen. A special tool is moved over your abdomen, which allows your doctor and you to view the baby on a monitor.</td>
		</tr>
		<tr>
			<td align="left" valign="top"><strong>Urine test</strong></td>
			<td valign="top">
			<p>A urine sample can look for signs of health problems, such as:</p>

			<ul>
				<li><a href="/glossary#UTI">Urinary tract infection</a></li>
				<li><a href="/glossary#diabetes">Diabetes</a></li>
				<li><a href="/glossary#preeclampsia">Preeclampsia</a></li>
			</ul>

			<p>If your doctor suspects a problem, the sample might be sent to a lab for more in-depth testing.</p>
			</td>
			<td valign="top">You will collect a small sample of clean, midstream urine in a sterile plastic cup. Testing strips that look for certain substances in your urine are dipped in the sample. The sample also can be looked at under a microscope.</td>
		</tr>
	</tbody>
</table>

<p style="color:#582c83;">&nbsp;</p>

<p style="color:#582c83;"><strong>Understanding prenatal tests and test results</strong></p>

<p>If your doctor suggests certain prenatal tests, don't be afraid to ask lots of questions. Learning about the test, why your doctor is suggesting it for you, and what the test results could mean can help you cope with any worries or fears you might have. Keep in mind that screening tests do not diagnose problems. They evaluate risk. So if a screening test comes back abnormal, this doesn't mean there is a problem with your baby. More information is needed. Your doctor can explain what test results mean and possible next steps.</p>

<p style="color:#582c83;"><strong>Avoid keepsake ultrasounds</strong></p>

<p>You might think a keepsake <a href="#ultrasound">ultrasound</a> is a must-have for your scrapbook. But, doctors advise against ultrasound when there is no medical need to do so. Some companies sell "keepsake" ultrasound videos and images. Although ultrasound is considered safe for medical purposes, exposure to ultrasound energy for a keepsake video or image may put a mother and her unborn baby at risk. Don't take that chance.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "High-risk pregnancy",
      content: `

    <div class="answer"><p>Pregnancies with a greater chance of complications are called "high-risk." But this doesn't mean there will be problems. The following factors may increase the risk of problems during pregnancy:</p>

<ul>
	<li>Very young age or older than 35</li>
	<li>Overweight or underweight</li>
	<li>Problems in previous pregnancy</li>
	<li>Health conditions you have before you become pregnant, such as <a href="/glossary#BP">high blood pressure</a>, <a href="/glossary#diabetes">diabetes</a>, <a href="/glossary#autoimmune">autoimmune disorders</a>, <a href="/glossary#cancer">cancer</a>, and <a href="/glossary#hiv">HIV</a></li>
	<li>Pregnancy with twins or other multiples</li>
</ul>

<p>Health problems also may develop during a pregnancy that make it high-risk, such as <a href="/glossary#gestational_diabetes">gestational diabetes</a> or <a href="/glossary#preeclampsia">preeclampsia</a>. See <a href="/pregnancy/you-are-pregnant/pregnancy-complications.html">Pregnancy complications</a> to learn more.</p>

<p>Women with high-risk pregnancies need prenatal care more often and sometimes from a specially trained doctor. A maternal-fetal medicine specialist is a medical doctor that cares for high-risk pregnancies.</p>

<p>If your pregnancy is considered high risk, you might worry about your unborn baby's health and have trouble enjoying your pregnancy. Share your concerns with your doctor. Your doctor can explain your risks and the chances of a real problem. Also, be sure to follow your doctor's advice. For example, if your doctor tells you to take it easy, then ask your partner, family members, and friends to help you out in the months ahead. You will feel better knowing that you are doing all you can to care for your unborn baby.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Paying for prenatal care",
      content: `

    <div class="answer"><p>Pregnancy can be stressful if you are worried about affording health care for you and your unborn baby. For many women, the extra expenses of prenatal care and preparing for the new baby are overwhelming. The good news is that women in every state can get help to pay for medical care during their pregnancies. Every state in the United States has a program to help. Programs give medical care, information, advice, and other services important for a healthy pregnancy.</p>

<p><a href="https://www.hhs.gov/answers/health-care/are-there-health-assistance-programs-for-pregnant-women-mothers-children/index.html">Learn more about programs available in your state.</a></p>

<p>You may also find help through these places:</p>

<ul>
	<li><strong>Local hospital or social service agencies</strong> – Ask to speak with a social worker on staff. She or he will be able to tell you where to go for help.</li>
	<li><strong>Community clinics</strong> – Some areas have free clinics or clinics that provide free care to women in need.</li>
	<li><a href="http://www.fns.usda.gov/wic/"><strong>Women, Infants and Children (WIC) Program</strong></a> – This government program is available in every state. It provides help with food, nutritional counseling, and access to health services for women, infants, and children.</li>
	<li><strong>Places of worship</strong></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "More information on prenatal care and tests",
      content: `

    <div class="answer"><h3>Read more from womenshealth.gov</h3>

<ul>
	<li><a href="/publications/our-publications/fact-sheet/pregnancy-medicines.html">Pregnancy and Medicines Fact Sheet</a> - This fact sheet provides information on the safety of using medicines while pregnant.</li>
</ul>

<h3>Explore other publications and websites</h3>

<ul>
	<li><a href="http://www.marchofdimes.com/professionals/14332_1165.asp" class="external-link external-popup" target="_blank">Chorionic Villus Sampling (CVS) (Copyright © March of Dimes) <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> - Chorionic villus sampling (CVS) is a prenatal test that can diagnose or rule out certain birth defects. The test is generally performed between 10 and 12 weeks after a woman's last menstrual period. This fact sheet provides information about this test, and how the test sample is taken.</li>
	<li><a href="http://www.marchofdimes.com/pnhec/173_769.asp" class="external-link external-popup" target="_blank">Folic Acid (Copyright © March of Dimes) <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> - This fact sheet stresses the importance of getting higher amounts of folic acid during pregnancy in order to prevent neural tube defects in unborn children.</li>
	<li><a href="http://www.cdc.gov/ncbddd/folicacid/faqs.html">Folic Acid: Questions and Answers</a> - The purpose of this question and answer sheet is to educate women of childbearing age on the importance of consuming folic acid every day to reduce the risk of spina bifida.</li>
	<li><a href="http://www.diabetes.niddk.nih.gov/dm/pubs/pregnancy/">For Women With Diabetes: Your Guide to Pregnancy</a> - This booklet discusses pregnancy in women with diabetes. If you have type 1 or type 2 diabetes and you are pregnant or hoping to get pregnant soon, you can learn what to do to have a healthy baby. You can also learn how to take care of yourself and your diabetes before, during, and after your pregnancy.</li>
	<li><a href="http://ghr.nlm.nih.gov/">Genetics Home Reference</a> - This website provides information on specific genetic conditions and the genes or chromosomes responsible for these conditions.</li>
	<li><a href="http://www.cdc.gov/vaccines/pubs/preg-guide.htm">Guidelines for Vaccinating Pregnant Women</a> - This publication provides information on routine and other vaccines and whether they are recommended for use during pregnancy.</li>
	<li><a href="http://www.marchofdimes.com/pnhec/28699_2134.asp" class="external-link external-popup" target="_blank">How Your Baby Grows (Copyright © March of Dimes) <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> - This site provides information on the development of your baby and the changes in your body during each month of pregnancy. In addition, for each month, it provides information on when to go for prenatal care appointments and general tips to take care of yourself and your baby.</li>
	<li><a href="http://www.fda.gov/ScienceResearch/SpecialTopics/WomensHealthResearch/ucm251314.htm">Pregnancy Registries</a> - Pregnancy registries help women make informed and educated decisions about using medicines during pregnancy. If you are pregnant and currently taking medicine — or have been exposed to a medicine during your pregnancy — you may be able to participate and help in the collection of this information. This website provides a list of pregnancy registries that are enrolling pregnant women.</li>
	<li><a href="http://www.niams.nih.gov/Health_Info/Bone/Bone_Health/Pregnancy/default.asp">Pregnancy, Breastfeeding, and Bone Health</a> - This publication provides information on pregnancy-associated osteoporosis, lactation and bone loss, and what you can do to keep your bones healthy during pregnancy.</li>
	<li><a href="http://www.mayoclinic.com/print/prenatal-care/PR00008/METHOD=print" class="external-link external-popup" target="_blank">Prenatal Care: First-Trimester Visits (Copyright © Mayo Foundation) <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> - This fact sheet explains what to expect during routine exams with your doctor. In addition, if you have a condition that makes your pregnancy high-risk, special tests may be performed on a regular basis to check the baby's health.</li>
	<li><a href="http://www.lamaze.org/ExpectantParents/PregnancyandBirthResources/MoreTipsandTools/HealthyPregnancy/tabid/252/Default.aspx" class="external-link external-popup" target="_blank">Ten Tips for a Healthy Pregnancy (Copyright © Lamaze International) <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> - This easy-to-read fact sheet provides 10 simple recommendations to help mothers have a healthy pregnancy.</li>
	<li><a href="http://www.marchofdimes.com/printableArticles/159_523.asp" class="external-link external-popup" target="_blank">Ultrasound (Copyright © March of Dimes) <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> - This fact sheet discusses the use of an ultrasound in prenatal care at each trimester.</li>
</ul>

<h3>Connect with other organizations</h3>

<ul>
	<li><a href="http://familydoctor.org/online/famdocen/home.html" class="external-link external-popup" target="_blank">American Academy of Family Physicians <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li><a href="http://www.birthcenters.org/" class="external-link external-popup" target="_blank">American Association of Birth Centers <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li><a href="http://www.acog.org/" class="external-link external-popup" target="_blank">American College of Obstetricians and Gynecologists <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li><a href="http://www.med.upenn.edu/crrwh/" class="external-link external-popup" target="_blank">Center for Research on Reproduction and Women's Health, University of Pennsylvania Medical Center <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li><a href="http://www.dona.org/" class="external-link external-popup" target="_blank">Dona International <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li><a href="http://www.marchofdimes.com/" class="external-link external-popup" target="_blank">March of Dimes <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li><a href="http://www.mchb.hrsa.gov/">Maternal and Child Health Bureau, HRSA, HHS</a></li>
	<li><a href="http://www.nads.org/" class="external-link external-popup" target="_blank">National Association for Down Syndrome <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li><a href="http://www.cdc.gov/ncbddd/index.html">National Center on Birth Defects and Developmental Disabilities, CDC</a></li>
	<li><a href="http://www.nichd.nih.gov/">Public Information and Communications Branch, NICHD, NIH, HHS</a></li>
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
        <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Birthingbreastfeedingandparentingclasses.jpg?VersionId=qit4RCvOsIqRkPnDYPmJOk3hR.wYTl90"></div>
                <div class="heading-description heading-description--half-width">
            <h1>Birthing, breastfeeding, and parenting classes</h1>
            <p><strong>First-time mothers-to-be often have lots of questions and even some worries:</strong> How will I know I'm in labor? Will it hurt? Will my baby know how to breastfeed? How do I care for a newborn? Classes to prepare you for childbirth, breastfeeding, infant care, and parenting are great ways to lessen anxiety and build confidence. In some cities, classes might be offered in different languages.</p>

                    </div>
    </div>

<div style="text-align: right; padding: 1rem 0px;"><button class="usa-button">Expand All</button></div><div class="qa-wrapper">
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Birthing classes",
      content: `

    <div class="answer"><p>Birthing classes often are offered through local hospitals and birthing centers. Some classes follow a specific method, such as Lamaze or the Bradley method. Others review labor techniques from a variety of methods. You might want to read about the different methods beforehand to see if one appeals more to you than others. That way, you will know what to sign up for if more than one type of birthing class if offered. Try to sign up for a class several months before your due date. Classes sometimes fill up quickly. Also, make sure the instructor is qualified.</p>

<p>Most women attend the class with the person who will provide support during labor, such as a spouse, sister, or good friend. This person is sometimes called the labor coach. During class, the instructor will go over the signs of labor and review the stages of labor. She will talk about positioning for labor and birth, and ways to control pain. She also will give you strategies to work through labor pains and to help you stay relaxed and in control. You will practice many of these strategies in class, so you are ready when the big day arrives. Many classes also provide a tour of the birthing facility.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Breastfeeding classes",
      content: `

    <div class="answer"><p>Like any new skill, <a href="/pregnancy/getting-ready/breastfeeding.html">breastfeeding</a> takes knowledge and practice to be successful. Pregnant women who learn about how to breastfeed are more likely to be successful than those who do not. Breastfeeding classes offer pregnant women and their partners the chance to prepare and ask questions before the baby's arrival. Classes may be offered through hospitals, breastfeeding support programs, La Leche League, or local lactation consultants. Ask your doctor for help finding a breastfeeding class in your area.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Parenting classes",
      content: `

    <div class="answer"><p>Many first-time parents have never cared for a newborn. Hospitals, community education centers, and places of worship sometimes offer baby care classes. These classes cover the basics, such as diapering, feeding, and bathing your newborn. You also will learn these basic skills in the hospital before you are discharged.</p>

<p>In some communities parenting classes are available. Children don't come with how-to manuals. So some parents appreciate learning about the different stages of child development, as well as practical skills for dealing with common issues, such as discipline or parent-child power struggles. Counselors and social workers often teach this type of class. If you are interested in parenting programs, ask your child's doctor for help finding a class in your area.</p>
</div>

      </div>
</div>
    </div>
  </div>

</article>
<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
        <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Breastfeeding.jpg?VersionId=nITRdrYpouXKwHS6vU0qYgexW4AA8KhC"></div>
                <div class="heading-description heading-description--half-width">
            <h1>Breastfeeding</h1>
            <p><strong>Whether to breastfeed or bottle-feed is an important choice to think about before you have your baby. </strong>Ask your doctor about the benefits of breastfeeding for both you and your baby and who can help you learn how to breastfeed.</p>

                    </div>
    </div>

<div class="qa-wrapper">
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
      </div>
</div>
    </div>
            <div class="field__item"><p>You can leave the Pregnancy section to visit our <a href="/breastfeeding/">Breastfeeding</a> section, which will give you the information you need to make an informed choice. Don't forget to come back to the Pregnancy section for more great information on getting ready for parenthood.</p>

<p><a href="/breastfeeding/">Check out our Breastfeeding section.</a></p>

`,
    },
    {
      title: "Have basic breastfeeding questions? ",
      content: `

<p>Our trained breastfeeding peer counselors can help! Call us at 800-994-9662 (TDD 888-220-5446) today or learn more about the <a href="/breastfeeding/finding-support-and-information/national-breastfeeding-helpline.html">National Breastfeeding Helpline</a>.</p>
</div>
      
  </div>

</article>
<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
        <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Laborandbirth.jpg?VersionId=AeXktUUhXh3scIUFFg0wSQDbWG.yRFyB"></div>
                <div class="heading-description heading-description--half-width">
            <h1>Labor and birth</h1>
            <p><strong>Soon, you'll experience the amazing process of childbirth! </strong>Find out how to spot the signs of labor, and get the facts on pain management, cesarean delivery, and more.</p>

                    </div>
    </div>

<div style="text-align: right; padding: 1rem 0px;"><button class="usa-button">Expand All</button></div><div class="qa-wrapper">
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Spot the signs of labor",
      content: `

    <div class="answer"><p>As you approach your due date, you will be looking for any little sign that labor is about to start. You might notice that your baby has "dropped" or moved lower into your pelvis. This is called "lightening." If you have a pelvic exam during your prenatal visit, your doctor might report changes in your <a href="/glossary#cervix">cervix</a> that you cannot feel, but that suggest your body is getting ready. For some women, a flurry of energy and the impulse to cook or clean, called "nesting," is a sign that labor is approaching.</p>

<p>Some signs suggest that labor will begin very soon. Call your doctor or midwife if you have any of the following signs of labor. Call your doctor even if it's weeks before your due date — you might be going into <a href="/glossary#pretermlabor">preterm labor</a>. Your doctor or midwife can decide if it's time to go to the hospital or if you should be seen at the office first.</p>

<ul>
	<li>You have <a href="/glossary#uterine_contractions">contractions</a> that become stronger at regular and increasingly shorter intervals.</li>
	<li>You have lower back pain and cramping that does not go away.</li>
	<li>Your water breaks (can be a large gush or a continuous trickle).</li>
	<li>You have a bloody (brownish or red-tinged) mucus discharge. This is probably the mucus plug that blocks the cervix. Losing your mucus plug usually means your cervix is dilating (opening up) and becoming thinner and softer (effacing). Labor could start right away or may still be days away.</li>
</ul>

<p style="color:#582c83;"><strong>Did my water break?</strong></p>

<p>It's not always easy to know. If your water breaks, it could be a gush or a slow trickle of <span class="pronounce-blue pronounce-blueJS"><a href="/glossary#amniotic_fluid">amniotic </a><span class="sound-out-blue sound-out-bluejs" style="display: none;">(AM-nee-OT-ihk)</span></span><a href="/glossary#amniotic_fluid"> fluid</a>. Rupture of membranes is the medical term for your water breaking. Let your doctor know the time your water breaks and any color or odor. Also, call your doctor if you think your water broke, but are not sure. An easy test can tell your doctor if the leaking fluid is urine (many pregnant women leak urine) or amniotic fluid. Often a woman will go into labor soon after her water breaks. When this doesn't happen, her doctor may want to induce (bring about) labor. This is because once your water breaks, your risk of getting an infection goes up as labor is delayed.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "False labor",
      content: `

    <div class="answer"><p>Many women, especially first-time mothers-to-be, think they are in labor when they're not. This is called false labor. "Practice" <a href="/glossary#uterine_contractions">contractions</a> called Braxton Hicks contractions are common in the last weeks of pregnancy or earlier. The tightening of your <a href="/glossary#uterus">uterus</a> might startle you. Some might even be painful or take your breath away. It's no wonder that many women mistake&nbsp;Braxton Hicks contractions for the real thing. So don't feel embarrassed if you go to the hospital thinking you're in labor, only to be sent home.</p>

<p>So, how can you tell if your contractions are true labor?</p>

<p>Time them. Use a watch or clock to keep track of the time one contraction starts to the time the next contraction starts, as well as how long each contraction lasts. With true labor, contractions become regular, stronger, and more frequent. Braxton Hicks contractions are not in a regular pattern, and they taper off and go away. Some women find that a change in activity, such as walking or lying down, makes Braxton Hicks contractions go away. This won't happen with true labor. Even with these guidelines, it can be hard to tell if labor is real. <em>If you ever are unsure if contractions are true labor, call your doctor.</em></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Stages of labor",
      content: `

    <div class="answer"><p>Labor occurs in three stages. When regular <a href="/glossary#uterine_contractions">contractions</a> begin, the baby moves down into the pelvis as the <a href="/glossary#cervix">cervix</a> both effaces (thins) and dilates (opens). How labor progresses and how long it lasts are different for every woman. But each stage features some milestones that are true for every woman.</p>

<p style="color:#582c83;"><strong>First stage</strong></p>

<p><img alt="Diagram of a baby in the birth canal." class="img-responsive" data-entity-type="" data-entity-uuid="" src="https://owh-wh-d9-dev.s3.amazonaws.com/s3fs-public/images/first-stage-labor-illustation.jpg"></p>

<p><em>Most babies' heads enter the pelvis facing to one side, and then rotate to face down.</em></p>

<p>The first stage begins with the onset of labor and ends when the cervix is fully opened. It is the longest stage of labor, usually lasting about 12 to 19 hours. Many women spend the early part of this first stage at home. You might want to rest, watch TV, hang out with family, or even go for a walk. Most women can drink and eat during labor, which can provide needed energy later. Yet some doctors advise laboring women to avoid solid food as a precaution should a <a href="/glossary#cesarean">cesarean delivery</a> be needed. Ask your doctor about eating during labor. While at home, time your contractions and keep your doctor up to date on your progress. Your doctor will tell you when to go to the hospital or birthing center.</p>

<p>At the hospital, your doctor will monitor the progress of your labor by periodically checking your cervix, as well as the baby's position and station (location in the birth canal). Most babies' heads enter the pelvis facing to one side, and then rotate to face down. Sometimes, a baby will be facing up, towards the mother's abdomen. Intense back labor often goes along with this position. Your doctor might try to rotate the baby, or the baby might turn on its own.</p>

<p>As you near the end of the first stage of labor, contractions become longer, stronger, and closer together. Many of the positioning and relaxation tips you learned in <a href="/pregnancy/getting-ready/birthing-parenting-class.html">childbirth class</a> can help now. Try to find the most comfortable position during contractions and to let your muscles go limp between contractions. Let your support person know how he or she can be helpful, such as by rubbing your lower back, giving you ice chips to suck, or putting a cold washcloth on your forehead.</p>

<p>Sometimes, medicines and other methods are used to help speed up labor that is progressing slowly. Many doctors will rupture the membranes. Although this practice is widely used, studies show that doing so during labor does not help shorten the length of labor.</p>

<p>Your doctor might want to use an electronic fetal monitor to see if blood supply to your baby is okay. For most women, this involves putting two straps around the mother's abdomen. One strap measures the strength and frequency of your contractions. The other strap records how the baby's heartbeat reacts to the contraction.</p>

<p>The most difficult phase of this first stage is the transition. Contractions are very powerful, with very little time to relax in between, as the cervix stretches the last, few centimeters. Many women feel shaky or nauseated. The cervix is fully dilated when it reaches 10 centimeters.</p>

<p style="color:#582c83;"><strong>Second stage</strong></p>

<p><img alt="Diagram of a baby in the birth canal crowning." class="img-responsive" data-entity-type="" data-entity-uuid="" src="https://owh-wh-d9-dev.s3.amazonaws.com/s3fs-public/images/second-stage-labor-illustation.jpg"></p>

<p><em>The baby twists and turns through the birth canal.</em></p>

<p>The second stage involves pushing and delivery of your baby. It usually lasts 20 minutes to two hours. You will push hard during contractions, and rest between contractions. Pushing is hard work, and a support person can really help keep you focused. A woman can give birth in many positions, such as squatting, sitting, kneeling, or lying back. Giving birth in an upright position, such as squatting, appears to have some benefits, including shortening this stage of labor and helping to keep the tissue near the birth canal intact. You might find pushing to be easier or more comfortable one way, and you should be allowed to choose the birth position that feels best to you.</p>

<p>When the top of your baby's head fully appears (crowning), your doctor will tell you when to push and deliver your baby. Your doctor may make a small cut, called an <span class="pronounce-blue pronounce-blueJS"><a href="/glossary#episiotomy">episiotomy,</a> <span class="sound-out-blue sound-out-bluejs" style="display: none;">(uh-peez-ee-OT-oh-mee)</span></span> to enlarge the <a href="/glossary#vagina">vaginal</a> opening. Most women in childbirth do not need episiotomy. Sometimes, forceps (tool shaped like salad-tongs) or suction is used to help guide the baby through the birth canal. This is called assisted vaginal delivery. After your baby is born, the <a href="/glossary#umbilical">umbilical cord</a> is cut. Make sure to tell your doctor if you or your partner would like to cut the umbilical cord.</p>

<p style="color:#582c83;"><strong>Third stage</strong></p>

<p>The third stage involves delivery of the <a href="/glossary#placenta">placenta</a> (afterbirth). It is the shortest stage, lasting five to 30 minutes. Contractions will begin five to 30 minutes after birth, signaling that it's time to deliver the placenta. You might have chills or shakiness. Labor is over once the placenta is delivered. Your doctor will repair the episiotomy and any tears you might have. Now, you can rest and enjoy your newborn!</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Managing labor pain",
      content: `

    <div class="answer"><p>Virtually all women worry about how they will cope with the pain of labor and delivery. Childbirth is different for everyone. So no one can predict how you will feel. The amount of pain a woman feels during labor depends partly on the size and position of her baby, the size of her pelvis, her emotions, the strength of the <a href="/glossary#uterine_contractions">contractions</a>, and her outlook.</p>

<p>Some women do fine with natural methods of pain relief alone. Many women blend natural methods with medications that relieve pain. Building a positive outlook on childbirth and managing fear may also help some women cope with the pain. It is important to realize that labor pain is not like pain due to illness or injury. Instead, it is caused by contractions of the <a href="/glossary#uterus">uterus</a> that are pushing your baby down and out of the birth canal. In other words, labor pain has a purpose.</p>

<p>Try the following to help you feel positive about childbirth:</p>

<ul>
	<li>Take a <a href="/pregnancy/getting-ready/birthing-parenting-class.html">childbirth class</a>. Call the doctor, midwife, hospital, or birthing center for class information.</li>
	<li>Get information from your doctor or midwife. Write down your questions and talk about them at your regular visits.</li>
	<li>Share your fears and emotions with friends, family, and your partner.</li>
</ul>

<p style="color:#582c83;"><strong>Natural methods of pain relief</strong></p>

<p>Many natural methods help women to relax and make pain more manageable. Things women do to ease the pain include:</p>

<ul>
	<li>Trying breathing and relaxation techniques</li>
	<li>Taking warm showers or baths</li>
	<li>Getting massages</li>
	<li>Using heat and cold, such as heat on lower back and cold washcloth on forehead</li>
	<li>Having the supportive care of a loved one, nurse, or doula</li>
	<li>Finding comfortable positions while in labor (stand, crouch, sit, walk, etc.)</li>
	<li>Using a labor ball</li>
	<li>Listening to music</li>
</ul>

<p style="color:#582c83;"><strong>Water and childbirth</strong></p>

<p>More and more women in the United States are using water to find comfort during labor. This is called <em>hydrotherapy</em>. Laboring in a tub of warm water helps women feel physically supported, and keeps them warm and relaxed. Plus, it is easier for laboring women to move and find comfortable positions in the water.</p>

<p>In <em>waterbirthing</em>, a woman remains in the water for delivery. The American Academy of Pediatrics has expressed concerns about <em>delivering</em> in water because of a lack of studies showing its safety and because of the rare but reported chance of complications. Ask your doctor or midwife if you want to know more about waterbirthing.</p>

<p style="color:#582c83;"><strong>Medical methods of pain relief</strong></p>

<p>While you're in labor, your doctor, midwife, or nurse should ask if you need pain relief. It is her job to help you decide what option is best for you. Nowadays women in labor have many pain relief options that work well and pose small risks when given by a trained and experienced doctor. Doctors also can use different methods for pain relief at different stages of labor. Still, not all options are available at every hospital and birthing center. Plus your health history, allergies, and any problems with your pregnancy will make some methods better than others.</p>

<p>Methods of relieving pain commonly used for labor are described in the chart below. Keep in mind that rare, but serious complications sometimes occur. Also, most medicines used to manage pain during labor pass freely into the <a href="/glossary#placenta">placenta</a>. Ask your doctor how pain relief methods might affect your baby or your ability to <a href="/pregnancy/getting-ready/breastfeeding.html">breastfeed</a> after delivery.</p>

<table border="1" summary="This table of Medical Methods of Pain Relief shows different methods (row headings) along with how it can help and some disadvantages (column headings)">
	<tbody>
		<tr style="background-color:#582C83; color:#fff;">
			<th scope="col" width="30%">Method</th>
			<th scope="col" width="30%">How it can help</th>
			<th scope="col" width="40%">Some disadvantages</th>
		</tr>
		<tr>
			<td><strong><span class="pronounce-blue pronounce-blueJS"><a href="#">Opioids</a> <span class="sound-out-blue sound-out-bluejs" style="display: none;">(OH-pee-oids) </span></span></strong> – also called narcotics, are medicines given through a tube inserted in a vein or by injecting the medicine into a muscle. Sometimes, opioids also are given with epidural or spinal blocks.</td>
			<td>Opioids can make the pain bearable, and don't affect your ability to push. After getting this kind of pain relief, you can still get an epidural or spinal block later.</td>
			<td>
			<ul>
				<li>Opioids don't get rid of all the pain, and they are short-acting.</li>
				<li>They can make you feel sleepy and drowsy.</li>
				<li>They can cause nausea and vomiting.</li>
				<li>They can make you feel very itchy.</li>
				<li>Opioids cannot be given right before delivery because they may slow the baby's breathing and heart rate at birth.</li>
			</ul>
			</td>
		</tr>
		<tr>
			<td><strong>Epidural and spinal blocks</strong> – An epidural involves placing a tube (catheter) into the lower back, into a small space below the spinal cord. Small doses of medicine can be given through the tube as needed throughout labor. With a spinal block, a small dose of medicine is given as a shot into the spinal fluid in the lower back. Spinal blocks usually are given only once during labor.</td>
			<td>Epidural and spinal blocks allow most women to be awake and alert with very little pain during labor and childbirth. With epidural, pain relief starts 10 to 20 minutes after the medicine has been given. The degree of numbness you feel can be adjusted throughout your labor. With spinal block, good pain relief starts right away, but it only lasts 1 to 2 hours.</td>
			<td>
			<ul>
				<li>Although you can move, you might not be able to walk if the medicine used affects motor function.</li>
				<li>It can lower your blood pressure, which can slow your baby's heartbeat. Fluids given through IV are given to lower this risk. Fluids can make you shiver. But women in labor often shiver with or without epidural.</li>
				<li>If the covering of the spinal chord is punctured, you can get a bad headache. Treatment can help the headache.</li>
				<li>Backache for a few days after labor.</li>
				<li>Epidural can prolong the first and second stages of labor. If given late in labor or if too much medicine is used, it might be hard to push when the time comes. Studies show that epidural increases risk of assisted <a href="/glossary#vagina">vaginal</a> delivery.</li>
			</ul>
			</td>
		</tr>
		<tr>
			<td><strong>Pudendal block</strong> – A doctor injects numbing medicine into the vagina and the nearby pudendal nerve. This nerve carries sensation to the lower part of your vagina and <a href="/glossary#vulva">vulva</a>.</td>
			<td>This is only used late in labor, usually right before the baby's head comes out. With a pudendal block, you have some pain relief but remain awake, alert, and able to push the baby out.</td>
			<td>
			<ul>
				<li>The baby is not affected by this medicine and it has very few disadvantages.</li>
			</ul>
			</td>
		</tr>
	</tbody>
</table>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Inducing labor",
      content: `

    <div class="answer"><p>Sometimes, a doctor or midwife might need to induce (bring about) labor. The decision to induce labor often is made when a woman is past her due date but labor has not yet begun or when there is concern about the baby or mother's health. Some specific reasons why labor might be induced include:</p>

<ul>
	<li>A woman's water has broken (ruptured membranes), but labor has not begun on its own</li>
	<li>Infection inside the <a href="/glossary#uterus">uterus</a></li>
	<li>Baby is growing too slowly</li>
	<li>Complications that arise when the mother's <a href="/glossary#rh_factor">Rh factor</a> is negative and her unborn baby's is positive</li>
	<li>Not enough <a href="/glossary#amniotic_fluid">amniotic fluid</a></li>
	<li>Complications, such as <a href="/glossary#hypertension">high blood pressure</a> or <a href="/glossary#preeclampsia">preeclampsia</a></li>
	<li>Health problems in the mother, such as kidney disease or <a href="/glossary#diabetes">diabetes</a></li>
</ul>

<p>The doctor or midwife can use medicines and other methods to open a pregnant woman's <a href="/glossary#cervix">cervix</a>, stimulate <a href="/glossary#uterine_contractions">contractions</a>, and prepare for <a href="/glossary#vagina">vaginal</a> birth.</p>

<p>Elective labor induction has become more common in recent years. This is when labor is induced at term but for no medical reason. Some doctors may suggest elective induction due to a woman's discomfort, scheduling issues, or concern that waiting may lead to complications. But the benefits and harms of elective induction are not well understood. For instance, we do not know if elective labor induction leads to higher or lower rates of <a href="/glossary#cesarean">cesarean delivery</a> compared to waiting for labor to start on its own. Yet, doctors have ways to assess risk of cesarean delivery, such as a woman's age, whether it is her first pregnancy, and the status of her cervix. Elective induction (not before 39 weeks) does not appear to affect the health of the baby.</p>

<p>If your doctor suggests inducing labor, talk to your doctor about the possible harms and benefits for both mother and baby, such as the risk of c-section and the risk of low birth weight. You will want to be sure the benefits of inducing labor outweigh the risks of induction and the risks of continuing the pregnancy.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Cesarean birth",
      content: `

    <div class="answer"><p>Cesarean delivery, also called c-section, is surgery to deliver a baby. The baby is taken out through the mother's abdomen. Most cesarean births result in healthy babies and mothers. But c-section is major surgery and carries risks. Healing also takes longer than with <a href="/glossary#vagina">vaginal</a> birth.</p>

<p>Most healthy pregnant women with no risk factors for problems during labor or delivery have their babies vaginally. Still, the cesarean birth rate in the United States has risen greatly in recent decades. Today, nearly 1 in 3 women have babies by c-section in this country. The rate was 1 in 5 in 1995.</p>

<p>Public heath experts think that many c-sections are unnecessary. So it is important for pregnant women to get the facts about c-sections before they deliver. Women should find out what c-sections are, why they are performed, and the pros and cons of this surgery.</p>

<p style="color:#582c83;"><strong>Reasons for c-sections</strong></p>

<p>Your doctor might recommend a c-section if she or he thinks it is safer for you or your baby than vaginal birth. Some c-sections are planned. But most c-sections are done when unexpected problems happen during delivery. Even so, there are risks of delivering by c-section. Limited studies show that the benefits of having a c-section may outweigh the risks when:</p>

<ul>
	<li>The mother is carrying more than one baby (<a href="/pregnancy/you-are-pregnant/twins-multiples.html">twins, triplets, etc.</a>)</li>
	<li>The mother has health problems including <a href="/glossary#HIV">HIV</a> infection, <a href="/glossary#herpes">herpes</a> infection, and <a href="/glossary#heartdisease">heart disease</a></li>
	<li>The mother has dangerously <a href="/glossary#hypertension">high blood pressure</a></li>
	<li>The mother has problems with the shape of her pelvis</li>
	<li>There are problems with the <a href="/glossary#placenta">placenta</a></li>
	<li>There are problems with the <a href="/glossary#umbilical">umbilical cord</a></li>
	<li>There are problems with the position of the baby, such as breech</li>
	<li>The baby shows signs of distress, such as a slowed heart rate</li>
	<li>The mother has had a previous c-section</li>
</ul>

<p style="color:#582c83;"><strong>Patient-requested c-section: Can a woman choose?</strong></p>

<p>A growing number of women are asking their doctors for c-sections when there is no medical reason. Some women want a c-section because they fear the pain of childbirth. Others like the convenience of being able to decide when and how to deliver their baby. Still others fear the risks of vaginal delivery including tearing and sexual problems.</p>

<p>But is it safe and ethical for doctors to allow women to choose c-section? The answer is unclear. Only more research on both types of deliveries will provide the answer. In the meantime, many obstetricians feel it is their ethical obligation to talk women out of elective c-sections. Others believe that women should be able to choose a c-section if they understand the risks and benefits.</p>

<p>Experts who believe c-sections should only be performed for medical reasons point to the risks. These include infection, dangerous bleeding, blood transfusions, and blood clots. Babies born by c-section have more breathing problems right after birth. Women who have c-sections stay at the hospital for longer than women who have vaginal births. Plus, recovery from this surgery takes longer and is often more painful than that after a vaginal birth. C-sections also increase the risk of problems in future pregnancies. Women who have had c-sections have a higher risk of <a href="/glossary#uterus">uterine</a> rupture. If the uterus ruptures, the life of the baby and mother is in danger.</p>

<p>Supporters of elective c-sections say that this surgery may protect a woman's pelvic organs, reduces the risk of bowel and bladder problems, and is as safe for the baby as vaginal delivery.</p>

<p>The National Institutes of Health (NIH) and American College of Obstetricians (ACOG) agree that a doctor's decision to perform a c-section at the request of a patient should be made on a case-by-case basis and be consistent with ethical principles. ACOG states that "if the physician believes that (cesarean) delivery promotes the overall health and welfare of the woman and her fetus more than vaginal birth, he or she is ethically justified in performing" a c-section. Both organizations also say that c-section should never be scheduled before a pregnancy is 39 weeks, or the lungs are mature, unless there is medical need.</p>

<p style="color:#582c83;"><strong>The c-section experience</strong></p>

<p>Most c-sections are unplanned. So, learning about c-sections is important for all women who are pregnant. Whether a c-section is planned or comes up during labor, it can be a positive birth experience for many women. The overview that follows will help you to know what to expect during a nonemergency c-section and what questions to ask.</p>

<p style="color:#582c83;"><em>Before surgery</em></p>

<p>Cesarean delivery takes about 45 to 60 minutes. It takes place in an operating room. So if you were in a labor and delivery room, you will be moved to an operating room. Often, the mood of the operating room is unhurried and relaxed. A doctor will give you medicine through an epidural or spinal block, which will block the feeling of pain in part of your body but allow you to stay awake and alert. The spinal block works right away and completely numbs your body from the chest down. The epidural takes away pain, but you might be aware of some tugging or pushing. See <a href="/pregnancy/childbirth-beyond/labor-birth.html#methods">Medical methods of pain relief</a> for more information. Medicine that makes you fall asleep and lose all awareness is usually only used in emergency situations. Your abdomen will be cleaned and prepped. You will have an IV for fluids and medicines. A nurse will insert a catheter to drain urine from your bladder. This is to protect the bladder from harm during surgery. Your heart rate, blood pressure, and breathing also will be monitored. Questions to ask:</p>

<ul>
	<li>Can I have a support person with me during the operation?</li>
	<li>What are my options for blocking pain?</li>
	<li>Can I have music played during the surgery?</li>
	<li>Will I be able to watch the surgery if I want?</li>
</ul>

<p style="color:#582c83;"><em>During surgery</em></p>

<p>The doctor will make two incisions. The first is about 6 inches long and goes through the skin, fat, and muscle. Most incisions are made side to side and low on the abdomen, called a bikini incision. Next, the doctor will make an incision to open the uterus. The opening is made just wide enough for the baby to fit through. One doctor will use a hand to support the baby while another doctor pushes the uterus to help push that baby out. Fluid will be suctioned out of your baby's mouth and nose. The doctor will hold up your baby for you to see. Once your baby is delivered, the umbilical cord is cut, and the placenta is removed. Then, the doctor cleans and stitches up the uterus and abdomen. The repair takes up most of the surgery time. Questions to ask:</p>

<ul>
	<li>Can my partner cut the umbilical cord?</li>
	<li>What happens to my baby right after delivery?</li>
	<li>Can I hold and touch my baby during the surgery repair?</li>
	<li>When is it okay for me to try to breastfeed?</li>
	<li>When can my partner take pictures or video?</li>
</ul>

<p style="color:#582c83;"><em>After surgery</em></p>

<p>You will be moved to a recovery room and monitored for a few hours. You might feel shaky, nauseated, and very sleepy. Later, you will be brought to a hospital room. When you and your baby are ready, you can hold, snuggle, and nurse your baby. Many people will be excited to see you. But don't accept too many visitors. Use your time in the hospital, usually about four days, to rest and bond with your baby. C-section is major surgery, and recovery takes about six weeks (not counting the fatigue of new motherhood). In the weeks ahead, you will need to focus on healing, getting as much rest as possible, and bonding with your baby — nothing else. Be careful about taking on too much and accept help as needed. Questions to ask:</p>

<ul>
	<li>Can my baby be brought to me in the recovery room?</li>
	<li>What are the best positions for me to breastfeed?</li>
</ul>

<p style="color:#582c83;"><strong>Vaginal birth after c-section (VBAC)?</strong></p>

<p>Some women who have delivered previous babies by c-section would like to have their next baby vaginally. This is called vaginal delivery after c-section or VBAC. Women give many reasons for wanting a VBAC. Some want to avoid the risks and long recovery of surgery. Others want to experience vaginal delivery.</p>

<p>Today, VBAC is a reasonable and safe choice for most women with prior cesarean delivery, including some women who have had more than one cesarean delivery. Moreover, emerging evidence suggests that multiple c-sections can cause serious harm. If you are interested in trying VBAC, ask your doctor if you are a good candidate. A key factor in this decision is the type of incision made to your uterus with previous c-sections.</p>

<p>Your doctor can explain the risks of both repeat cesarean delivery and VBAC. With VBAC, the most serious danger is the chance that the c-section scar on the uterus will open up during labor and delivery. This is called uterine rupture. Although very rare, uterine rupture is very dangerous for the mother and baby. Less than 1 percent of VBACs lead to uterine rupture. But doctors cannot predict if uterine rupture is likely to occur in a woman. This risk, albeit very small, is unacceptable to some women.</p>

<p>The percent of VBACs is dropping in the United States for many reasons. Some doctors, hospitals, and patients have concerns about the safety of VBAC. Some hospitals and doctors are unwilling to do VBACs because of fear of lawsuits and insurance or staffing expenses. Many doctors, however, question if this trend is in the best interest of women's health.</p>

<p>Choosing to try a VBAC is complex. If you are interested in a VBAC, talk to your doctor and read up on the subject. Only you and your doctor can decide what is best for you. VBACs and planned c-sections both have their benefits and risks. Learn the pros and cons and be aware of possible problems before you make your choice.</p>
</div>

      </div>
</div>
    </div>
  </div>

</article>
<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
        <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Recoveringfrombirth.jpg?VersionId=ry8UjS5k6JwjYt_FOBQpatoEgIqYF_UY"></div>
                <div class="heading-description heading-description--half-width">
            <h1>Recovering from birth</h1>
            <p><strong>Right now, you are focused on caring for your new baby. </strong>But new mothers must take special care of their bodies after giving birth and while breastfeeding, too. Doing so will help you to regain your energy and strength. When you take care of yourself, you are able to best care for and enjoy your baby.</p>

                    </div>
    </div>

<div style="text-align: right; padding: 1rem 0px;"><button class="usa-button">Expand All</button></div><div class="qa-wrapper">
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Getting rest",
      content: `

    <div class="answer"><p>The first few days at home after having your baby are a time for rest and recovery — physically and emotionally. You need to focus your energy on yourself and on getting to know your new baby. Even though you may be very excited and have requests for lots of visits from family and friends, try to limit visitors and get as much rest as possible. Don't expect to keep your house perfect. You may find that all you can do is eat, sleep, and care for your baby. And that is perfectly okay. Learn to pace yourself from the first day that you arrive back home. Try to lie down or nap while the baby naps. Don't try to do too much around the house. Allow others to help you and don't be afraid to ask for help with cleaning, laundry, meals, or with caring for the baby.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Physical changes",
      content: `

    <div class="answer"><p>After the birth of your baby, your doctor will talk with you about things you will experience as your body starts to recover.</p>

<ul>
	<li>You will have <a href="/glossary#vagina">vaginal</a> discharge called <span class="pronounce-blue pronounce-blueJS"><a href="#">lochia.</a> <span class="sound-out-blue sound-out-bluejs" style="display: none;">(LOH-kee-uh)</span></span> It is the tissue and blood that lined your <a href="/glossary#uterus">uterus</a> during pregnancy. It is heavy and bright red at first, becoming lighter in flow and color until it goes aware after a few weeks.</li>
	<li>You might also have swelling in your legs and feet. You can reduce swelling by keeping your feet elevated when possible.</li>
	<li>You might feel constipated. Try to drink plenty of water and eat fresh fruits and vegetables.</li>
	<li>Menstrual-like cramping is common, especially if you are breastfeeding. Your breast milk will come in within three to six days after your delivery. Even if you are not breastfeeding, you can have milk leaking from your nipples, and your breasts might feel full, tender, or uncomfortable.</li>
	<li>Follow your doctor's instructions on how much activity, like climbing stairs or walking, you can do for the next few weeks.</li>
</ul>

<p>Your doctor will check your recovery at your postpartum visit, about six weeks after birth. Ask about resuming normal activities, as well as eating and fitness plans to help you return to a healthy weight. Also ask your doctor about having sex and birth control. Your period could return in six to eight weeks, or sooner if you do not breastfeed. If you breastfeed, your period might not resume for many months. Still, using reliable birth control is the best way to prevent pregnancy until you want to have another baby.</p>

<p>Some women develop <a href="/glossary#thyroid">thyroid</a> problems in the first year after giving birth. This is called postpartum <span class="pronounce-blue pronounce-blueJS"><a href="#">thyroiditis.</a> <span class="sound-out-blue sound-out-bluejs" style="display: none;">(theye-royd-EYET-uhss)</span></span> It often begins with overactive thyroid, which lasts two to four months. Most women then develop symptoms of an underactive thyroid, which can last up to a year. Thyroid problems are easy to overlook as many symptoms, such as fatigue, sleep problems, low energy, and changes in weight, are common after having a baby. Talk to your doctor if you have symptoms that do not go away. An underactive thyroid needs to be treated. In most cases, thyroid function returns to normal as the thyroid heals. But some women develop permanent underactive thyroid disease, called Hashimoto's disease, and need lifelong treatment.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Regaining a healthy weight and shape",
      content: `

    <div class="answer"><p>Both pregnancy and labor can affect a woman's body. After giving birth, you will lose about 10 pounds right away and a little more as body fluid levels decrease. Don't expect or try to lose additional pregnancy weight right away. Gradual weight loss over several months is the safest way, especially if you are breastfeeding. Nursing mothers can safely lose a moderate amount of weight without affecting their milk supply or their babies' growth.</p>

<p>A healthy eating plan along with regular physical fitness might be all you need to return to a healthy weight. If you are not losing weight or losing weight too slowly, cut back on foods with added sugars and fats, like soft drinks, desserts, fried foods, fatty meats, and alcohol. Keep in mind, nursing mothers should avoid alcohol. By cutting back on "extras,"&nbsp;you can focus on healthy, well-balanced food choices that will keep your energy level up and help you get the nutrients you and your baby need for good health. Make sure to talk to your doctor before you start any type of diet or exercise plan.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Feeling blue",
      content: `

    <div class="answer"><p>After childbirth you may feel sad, weepy, and overwhelmed for a few days. Many new mothers have the "baby blues" after giving birth. Changing <a href="/glossary#hormone">hormones</a>, anxiety about caring for the baby, and lack of sleep all affect your emotions.</p>

<p>Be patient with yourself. These feelings are normal and usually go away quickly. But if sadness lasts more than two weeks, go see your doctor. Don't wait until you postpartum visit to do so. You might have a serious but treatable condition called <a href="/glossary#PPD">postpartum depression</a>. Postpartum depression can happen any time within the first year after birth.</p>

<p>Signs of <a href="/publications/our-publications/fact-sheet/depression-pregnancy.html">postpartum depression</a> include:</p>

<ul>
	<li>Feeling restless or irritable</li>
	<li>Feeling sad, depressed, or crying a lot</li>
	<li>Having no energy</li>
	<li>Having headaches, chest pains, heart palpitations (the heart being fast and feeling like it is skipping beats), numbness, or hyperventilation (fast and shallow breathing)</li>
	<li>Not being able to sleep, being very tired, or both</li>
	<li>Not being able to eat and weight loss</li>
	<li>Overeating and weight gain</li>
	<li>Trouble focusing, remembering, or making decisions</li>
	<li>Being overly worried about the baby</li>
	<li>Not having any interest in the baby</li>
	<li>Feeling worthless and guilty</li>
	<li>Having no interest or getting no pleasure from activities like sex and socializing</li>
	<li>Thoughts of harming your baby or yourself</li>
</ul>

<p>Some women don't tell anyone about their symptoms because they feel embarrassed or guilty about having these feelings at a time when they think they should be happy. Don't let this happen to you! Postpartum depression can make it hard to take care of your baby. Infants with mothers with postpartum depression can have delays in learning how to talk. They can have problems with emotional bonding. Your doctor can help you feel better and get back to enjoying your new baby. Therapy and/or medicine can treat postpartum depression. Get more details on postpartum depression in our <a href="/publications/our-publications/fact-sheet/depression-pregnancy.html">Depression during and after pregnancy fact sheet</a>.</p>

<p>Emerging research suggests that 1 in 10 new fathers may experience depression during or after pregnancy. Although more research is needed, having depression may make it harder to be a good father and perhaps affect the baby's development. Having depression may also be related to a mother's depression. Expecting or new fathers with emotional problems or symptoms of depression should talk to their doctors. Depression is a treatable illness.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "More information on recovering from birth",
      content: `

    <div class="answer"><h3>Explore other publications and websites</h3>

<ul>
	<li><a href="http://www.mayoclinic.com/health/c-section/MY00214/rss=1" class="external-link external-popup" target="_blank">C-section (Copyright © Mayo Foundation) <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> - This publication briefly explains what to expect during a cesarean section. It goes into more detail explaining recovering afterward, both in the hospital and at home.</li>
</ul>

<h3>Connect with other organizations</h3>

<ul>
	<li><a href="http://familydoctor.org/online/famdocen/home.html" class="external-link external-popup" target="_blank">American Academy of Family Physicians <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li><a href="http://www.midwife.org/" class="external-link external-popup" target="_blank">American College of Nurse-Midwives <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li><a href="http://www.acog.org/" class="external-link external-popup" target="_blank">American College of Obstetricians and Gynecologists <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li><a href="http://kidshealth.org/" class="external-link external-popup" target="_blank">KidsHealth <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
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
