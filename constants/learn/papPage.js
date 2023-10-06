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

export function papPage({ navigation, ...rest }) {
  const condName = "Pap and HPV tests";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/PapandHPVtests.jpg?VersionId=BsvF7ZHsst0kdcSA_Hm4ke47NCb2whXm";
  const condDescription =
    "Pap tests (or Pap smears) look for cancers and precancers in the cervix. Precancers are cell changes that can be caused by the human papillomavirus (HPV). If not treated, these abnormal cells could lead to cervical cancer. An HPV test looks for HPV in cervical cells. Most women 21 to 65 years old need to get Pap tests or a Pap test and HPV test together. Not all women need to be tested every year.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/PapandHPVtests.jpg?VersionId=BsvF7ZHsst0kdcSA_Hm4ke47NCb2whXm"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Pap and HPV tests</h1>  -->
            <p><strong>Pap tests (or Pap smears) look for cancers and precancers in the cervix.</strong> Precancers are cell changes that can be caused by the <a href="/a-z-topics/human-papillomavirus">human papillomavirus (HPV)</a>. If not treated, these abnormal cells could lead to <a href="/cancer/cervical-cancer">cervical cancer</a>. An HPV test looks for HPV in cervical cells. Most women 21 to 65 years old need to get Pap tests or a Pap test and HPV test together. Not all women need to be tested every year.</p>

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
      title: "What is a Pap test?",
      content: `

    <div class="answer"><p>A Pap test is a test your doctor or nurse does to check your cervix for any cells that are not normal. The cervix is the lower part of the <a href="/glossary#uterus">uterus</a> (womb), which opens into the vagina. Abnormal cervical cells, if not found and treated, can lead to cervical cancer.</p>

<p><a href="/a-z-topics/pap-hpv-tests#13">During a Pap test</a>&nbsp;your doctor or nurse puts a speculum (a tool that helps your doctor or nurse see your cervix) into your vagina and uses a special stick or soft brush to collect cells from the outside of your cervix. The cells are sent to a laboratory for testing.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is an HPV test?",
      content: `

    <div class="answer"><p>An HPV test looks for DNA from HPV in cells from your cervix. The cervix is the lower part of the uterus (womb), which opens into the vagina. <a href="https://www.womenshealth.gov/a-z-topics/human-papillomavirus">HPV</a> is a sexually transmitted infection (STI) that goes away on its own in most people.<a href="#references"><sup>1</sup></a> If it does not go away, HPV can cause abnormal cervical cells that can lead to cervical cancer.</p>

<p>Certain types of HPV are more likely to cause cervical cancer.<sup><a href="#references">2</a></sup> The HPV test can tell your doctor if you have HPV and which type it is.</p>

<p><a href="/a-z-topics/pap-hpv-tests#13">During an HPV test</a>, your doctor or nurse puts a speculum (a tool that helps your doctor or nurse see your cervix) into your vagina and uses a soft brush to collect cells from the outside of your cervix. The cells are tested in a laboratory.</p>

<p>Pap tests and HPV tests can be done at the same time (called co-testing).</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Why do I need a Pap and HPV test?",
      content: `

    <div class="answer"><p>A Pap test can save your life. It can find cervical cancer cells early. The chance of successful treatment of cervical cancer is very high if the disease is caught early. Pap tests can also find abnormal cervical cells before they become cancer (precancers). Removing these precancers prevents cervical cancer over 95% of the time.<sup><a href="#references">3</a></sup></p>

<p>An HPV test can give your doctor more information about the cells from your cervix. For example, if the Pap test shows abnormal cervical cells, the HPV test can show whether you have a type of HPV that causes cervical cancer.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who should get regular Pap or HPV tests?",
      content: `

    <div class="answer"><p>Most women 21 to 65 years old should get Pap tests as part of routine health care. Even if you are not currently sexually active, got the HPV vaccine, or have gone through <a href="/menopause">menopause</a>, you still need regular Pap tests. Experts recommend:<a href="#references"><sup>4</sup></a></p>

<ul>
	<li>Women 21–29 get a Pap test every 3 years</li>
	<li>Women 30–65 get:
	<ul>
		<li>A Pap test every 3 years, <strong>or</strong></li>
		<li>An HPV test every 5 years, <strong>or </strong></li>
		<li>A Pap and HPV test together (called co-testing) every 5 years</li>
	</ul>
	</li>
</ul>

<p>Women older than 65 need a Pap test if they have never been tested, or if they have not been tested after age 60.<a href="#references"><sup>4</sup></a></p>

<p>HPV tests are recommended for women 30 and older. Although HPV is common in women younger than 30, it usually goes away on its own in these women. Pap tests combined with HPV tests, or HPV tests alone, are most useful for women 30 and older.<a href="#references"><sup>4</sup></a></p>

<p><a href="#8">Some women may need Pap or HPV testing more often.</a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who does not need to get regular Pap or HPV tests?",
      content: `

    <div class="answer"><p>The only women who may not need regular Pap or HPV tests are:<a href="#references"><sup>4</sup></a></p>

<ul>
	<li>Women older than 65 who have had three normal Pap tests or two normal co-tests in a row within the last 10 years, with the most recent test happening within the last 5 years, and who have been told by their doctors that they don’t need to be tested anymore</li>
	<li>Women who do not have a cervix (usually because of a hysterectomy) and who do not have a history of cervical cancer or abnormal Pap test results</li>
</ul>

<p>Always talk to your doctor or nurse before stopping regular Pap and HPV tests.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "I had a hysterectomy. Do I still need Pap and HPV tests?",
      content: `

    <div class="answer"><p>Even if you have had a <a href="/a-z-topics/hysterectomy">hysterectomy</a>, you may need a Pap and HPV test. It depends on the type of hysterectomy you had and your health history. Talk to your doctor or nurse about whether you need Pap and HPV tests.<a href="#references"><sup>4</sup></a></p>

<ul>
	<li>If you no longer have a cervix because you had a hysterectomy for reasons other than abnormal cervical cells or cervical cancer, you do not need Pap and HPV tests.</li>
	<li>If you had a hysterectomy because of abnormal cervical cells or cervical cancer, you should continue to get Pap and HPV tests. Talk to your doctor or nurse about how often you should have Pap and HPV tests.</li>
	<li>If you had your <a href="/glossary#uterus">uterus</a> removed but you still have a cervix (this type of hysterectomy is not common), you need regular Pap and HPV tests until you are 65 and have had three normal Pap tests or two normal co-tests in a row within the last 10 years with the last test happening within 5 years.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "How often do I need to get a Pap test or Pap and HPV tests together? ",
      content: `

    <div class="answer"><p>It depends on your age and health history. Talk with your doctor or nurse to find out how often you need to get a Pap test or Pap and HPV tests together. Most women can follow these current recommendations from the U.S. Preventive Services Task Force:<a href="#references"><sup>4</sup></a></p>

<ul>
	<li>If you are 21 to 29 years old, you should get a Pap test every 3 years.</li>
	<li>If you are 30 to 65 years old, you should get:
	<ul>
		<li>A Pap test every 3 years, <strong>or</strong></li>
		<li>An HPV test every 5 years, <strong>or</strong></li>
		<li>A Pap test and HPV test together (called co-testing) every 5 years</li>
	</ul>
	</li>
	<li>If you are older than 65, ask your doctor whether you can stop having Pap and HPV tests.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who needs Pap and HPV tests more often?",
      content: `

    <div class="answer"><p>Your doctor or nurse may recommend getting Pap and HPV tests more often if:<a href="#references"><sup>4</sup></a></p>

<ul>
	<li>You have had treatment for abnormal Pap results or cervical cancer in the past. Women with a medical history of precancerous cells or cervical cancer may need to be tested more often, because their medical history puts them at higher risk in the future.</li>
	<li>You are living with HIV. Women who are living with <a href="/hiv-and-aids">HIV</a> (the virus that leads to AIDS) are at higher risk of cervical cancer and other cervical diseases because of a weakened immune system. All women living with HIV should get an initial Pap test at the time of the HIV diagnosis and a second Pap test (or Pap and HPV test if you are older than 30) 12 months later. Some experts recommend a second Pap test or Pap and HPV test 6 months later, so talk to your doctor or nurse. After three normal Pap tests in a row, women living with HIV can get follow-up Pap tests every 3 years.<a href="#references"><sup>5</sup></a></li>
	<li>Your mother was exposed to diethylstilbestrol (DES) while pregnant with you. Daughters, and possibly granddaughters, of women who took DES while pregnant with them have a higher risk of cervical cancer and some other types of cancer. <a href="https://www.cancer.gov/about-cancer/causes-prevention/risk/hormones/des-fact-sheet">Learn more about DES and cancer from the National Cancer Institute website.</a></li>
	<li>You have a weakened immune system because of organ transplant, chemotherapy, or steroid use. HPV may not go away on its own in a person with a weakened immune system.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Are Pap and HPV tests painful?",
      content: `

    <div class="answer"><p>Some women find Pap and HPV tests uncomfortable, but the tests should not be painful. You will feel pressure as your doctor or nurse puts the speculum (a tool that helps your doctor or nurse see your cervix) into your vagina.</p>

<p>If you have never had sexual intercourse or if you have had pain when something is put into your vagina, you can ask your doctor or nurse to use a smaller speculum.</p>

<p>You can also help lessen or prevent pain by urinating before the test to empty your bladder or by taking an over-the-counter pain reliever, such as aspirin, acetaminophen, or ibuprofen, about an hour before your Pap or HPV test.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Can I get a Pap or HPV test if I’ve been sexually assaulted in the past?",
      content: `

    <div class="answer"><p>Yes. If you were sexually assaulted or abused in the past, and this experience makes medical exams difficult for you, talk to your doctor or nurse first.</p>

<p>Before the test, while you are still fully clothed, tell your doctor or nurse that you’ve been assaulted in the past and that you have concerns about the test. It may be difficult to lie on an exam table with your legs in footrests (cradles for your feet that help keep your legs bent and open) or to have a doctor or nurse put a speculum (a tool that helps your doctor or nurse see your cervix) into your vagina. Your doctor or nurse will talk with you about ways to make the Pap or HPV test easier.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do I prepare for a Pap or HPV test?",
      content: `

    <div class="answer"><p>You do not have to do anything special to prepare for a Pap or HPV test. Also, you should not <a href="/a-z-topics/douching">douche</a> before a Pap or HPV test. Most doctors do not recommend douching for any reason. You also should not put anything in or around your vagina to clean it, other than soap and water on the outside of your vagina.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can I get a Pap or HPV test when I am having my period?",
      content: `

    <div class="answer"><p>Yes, you can get a Pap or HPV test during your period. It’s better to schedule the test for a time when you do not expect to have your period. But it’s also better to get a Pap test at any time than to miss your appointment because of your period.&nbsp;</p>

<p>Depending on how heavy your flow is, your period may affect the results of the Pap or HPV test. If you’re uncomfortable or not sure, call your doctor or nurse before your appointment.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What happens during Pap and HPV tests?",
      content: `

    <div class="answer"><p>Your doctor or nurse can do a Pap test in the exam room of a doctor’s office. You will lie down on your back on an exam table. You will place your feet on either side of the table in footrests (cradles for your feet that help keep your legs bent and open). Your doctor or nurse will put a tool called a speculum into your vagina (you may feel pressure) and will open it to see your cervix.</p>

<p>Your doctor or nurse will use a special stick or soft brush to take a few cells from the surface of and inside your cervix and vagina. Your doctor or nurse will put the cells on a glass slide or in a small container and send them to a lab for testing. If your doctor or nurse orders an HPV test, the cells taken for your Pap test are tested for HPV at the same time.</p>

<p>Pap and HPV tests usually last about 5 minutes. You may have some spotting (light bleeding from the vagina) afterward.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "When will I get my Pap and HPV test results?",
      content: `

    <div class="answer"><p>Usually, it takes 1 to 3 weeks to get Pap and HPV test results. Most of the time, test results are normal.</p>

<p>If you do not get the results of your Pap and HPV tests 3 weeks after the test, call your doctor’s office to get the results. If the doctor or nurse tells you to schedule another appointment to follow up on abnormal results, be sure to go to the appointment.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What do my Pap test results mean?",
      content: `

    <div class="answer"><p>Your Pap test results will say one of these three things:</p>

<ul>
	<li><strong>Normal.</strong> The cells collected from your cervix during the Pap test look like they should and you do not have to do anything until your next Pap test.</li>
	<li><strong>Unclear.</strong> Your doctor does not know whether the cells collected from your cervix are normal or abnormal. If results are unclear, your doctor may do more testing right away to rule out any problems, or your doctor may have you come back in 6 months or a year for another Pap test.</li>
	<li><strong>Abnormal.</strong> The cells collected from your cervix during your Pap test look abnormal. Abnormal Pap test results do not mean you have cancer, so your doctor must do other tests to find out what should happen next. Your doctor may do another Pap test right away or, if the cell changes are minor, wait 6 months or a year before doing another Pap test. If the test finds more serious changes in the cells of your cervix, your doctor will do more tests, such as a&nbsp;<a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="kol-POS-kuh-pee">colposcopy</a> and biopsy.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is a colposcopy?",
      content: `

    <div class="answer"><p>During a colposcopy, your doctor or nurse takes a closer look at abnormal areas on your cervix and uses an instrument with a light and magnifier (called a colposcope) to make the abnormal areas easier to see. Your doctor or nurse might use a small amount of vinegar on your cervix to make any abnormal areas stand out.</p>

<p>If there is an abnormal area on the cervix, your doctor or nurse will perform a biopsy (remove a sample of tissue from your cervix) to check for cancer cells. Results of these tests will help your doctor or nurse decide on the best treatment to recommend.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes “unclear” or “abnormal” Pap test results?",
      content: `

    <div class="answer"><p>A Pap test could come back “unclear” or “abnormal” for many reasons. Most often, abnormal cell changes are caused by <a href="/a-z-topics/human-papillomavirus">HPV</a>. HPV is an <a href="/a-z-topics/sexually-transmitted-infections">STI</a> that can lead to cervical cancer.</p>

<p>Other reasons you may have Pap test results that are “unclear” or “abnormal” include:<a href="#references"><sup>6</sup></a></p>

<ul>
	<li>An infection, such as a <a href="/a-z-topics/vaginal-yeast-infections">yeast infection</a>, or inflammation</li>
	<li>Growths or cysts that are benign (not cancerous)</li>
	<li>Changes in hormones, such as during pregnancy or menopause</li>
	<li>Smoking, which may increase the risk of an HPV infection developing into cervical cancer. Get tips for women about quitting smoking at <a href="https://women.smokefree.gov" title="Smokefree Women">women.smokefree.gov</a>.</li>
	<li>Problems with your immune system caused by certain medicines or health problems, such as <a href="/a-z-topics/diabetes">diabetes</a>, <a href="/cancer">cancer</a>, <a href="/hiv-and-aids">HIV</a>, or <a href="/a-z-topics/autoimmune-diseases">autoimmune diseases</a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Do Pap tests have risks?",
      content: `

    <div class="answer"><p>Yes. Although Pap tests are very safe, they do have limits.</p>

<ul>
	<li><strong>The Pap test may not find abnormal cells that are actually there.</strong> This means your doctor may tell you your cervical cells are normal, but the test missed a problem with the cells. This can delay the discovery and treatment of abnormal cells of the cervix. But having regular Pap tests increases your chances of finding problems. Cervical cancer usually takes many years — on average 10 to 20 years — to develop.<a href="#references"><sup>7</sup></a> If a Pap test misses abnormal cells, your doctor or nurse will probably find them on your next Pap test. Therefore, it is important to have Pap tests on the recommended schedule for your age and medical history.</li>
	<li><strong>The Pap test results may report abnormal cells that are not really there.</strong> This means your doctor may tell you that your cervical cells are abnormal, but they are actually normal. There is no way to know that the cells are normal without further testing. Therefore, your doctor may do another Pap test or a different test to find out more. If the next Pap test or other test comes back normal, you don’t have to do anything until your next Pap test is scheduled.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What do my HPV test results mean?",
      content: `

    <div class="answer"><p>Your HPV test results will show whether you have HPV and what type of HPV it is. Researchers know of about a dozen types of HPV, out of more than 200, that can cause cervical cancer.<a href="#references"><sup>8</sup></a></p>

<p>HPV test results are usually given with Pap test results. Having the two tests together (called co-testing) can help your doctor figure out if you need to be tested more often or need different tests.</p>

<p>If you do not have HPV and your Pap test results are normal, you can probably wait to be tested again for 5 years.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Can a Pap test tell me whether I have a sexually transmitted infection (STI)?",
      content: `

    <div class="answer"><p>No. A Pap test is not used to find <a href="https://www.womenshealth.gov/a-z-topics/sexually-transmitted-infections">STIs</a>. A Pap test is used to find abnormal cells that may cause cervical cancer. You must ask your doctor to test you for STIs if you want to have STI testing.</p>

<p>If you tell your doctor you would like to be tested for other STIs, your doctor can collect samples of fluid from your cervix to test for common STIs, such as <a href="https://www.womenshealth.gov/a-z-topics/chlamydia">chlamydia</a> and <a href="https://www.womenshealth.gov/a-z-topics/gonorrhea">gonorrhea</a>. You will need blood tests to test for other STIs.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I lower my chances of getting cervical cancer?",
      content: `

    <div class="answer"><p>You can lower your chances of getting cervical cancer in several ways:</p>

<ul>
	<li><strong>Get regular Pap tests.</strong> Regular Pap tests help your doctor find cell changes and treat any unhealthy cells before they turn into cancer.</li>
	<li><strong>Get regular Pap and HPV tests together or an HPV test alone (if you are between 30 and 65 years old).</strong> Doctors recommend getting an HPV test or co-testing (getting a Pap and HPV test together) for most women between 30 and 65.</li>
	<li><strong>Get the HPV vaccine.</strong> Cervical cancer is usually caused by types of <a href="/a-z-topics/human-papillomavirus">HPV</a> that are passed from person to person through genital contact. Most women do not have symptoms of HPV, and HPV sometimes goes away on its own. If HPV does not go away on its own, it can cause changes in the cells of the cervix that can lead to cervical cancer. The HPV vaccine prevents you from getting most cancer-causing types of HPV. The Food and Drug Administration (FDA) approved the HPV vaccine for people ages 9 through 45.</li>
	<li><strong>Take steps to lower your risk.</strong> If you have sex, lower your risk of getting HPV with the following steps:
	<ul>
		<li><strong>Use condoms.</strong> Condoms are the best way to prevent <a href="/a-z-topics/sexually-transmitted-infections">STIs</a> when you have sex. HPV can happen in female and male genital areas that are not protected by condoms. But research shows that condom use is linked to lower cervical cancer rates.<sup><a href="#references">9,10</a></sup> Also, the HPV vaccine does not replace or decrease the need to wear condoms. Make sure to put the condom on before the penis touches the vagina, mouth, or anus. Other <a href="/a-z-topics/birth-control-methods">methods of birth control</a>, like birth control pills, shots, implants, or <a href="/glossary#diaphragm">diaphragms</a>, will not protect you from HPV or other STIs.</li>
		<li><strong>Get tested.</strong> Be sure you and your partner are tested for STIs. Talk to each other about the test results before you have sex.</li>
		<li><strong>Be monogamous.</strong> Having sex with only one partner can lower your risk of STIs. After being tested for STIs, be faithful to each other. That means that you have sex only with each other and no one else.</li>
		<li><strong>Limit your number of sex partners.</strong> Your risk of getting STIs goes up with the number of sexual partners you have.</li>
		<li><strong>Do not douche. </strong><a href="/a-z-topics/douching">Douching</a> removes some of the normal bacteria in the vagina that protect you from infection. This may increase your risk of getting STIs.</li>
		<li><strong>Be aware of how much alcohol you drink and keep control of your own drink.</strong> Some people use alcohol or drugs as a way to make a person drunk or high. Someone who is drunk, drugged, or high on drugs is unable to consent or understand what is happening. This puts you at risk of sexual assault and possible exposure to STIs.</li>
	</ul>
	</li>
</ul>

<p>These steps work best when used together. No single step can protect you from cervical cancer.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I get free or low-cost Pap and HPV tests? ",
      content: `

    <div class="answer"><p>Most insurance plans cover Pap and HPV tests with no copay, coinsurance, or deductible.</p>

<ul>
	<li>If you have insurance, check with your insurance provider to find out what’s included in your plan.</li>
	<li>If you don’t have insurance, <a href="https://www.cdc.gov/cancer/nbccedp/">find a program near you that offers free or low-cost Pap and HPV tests.</a></li>
	<li>If you have Medicare, find out <a href="https://www.medicare.gov/coverage/cervical-vaginal-cancer-screenings" title="Cervical &amp; Vaginal Cancer Screenings - Medicare">how often Medicare covers Pap and HPV tests and pelvic exams</a>.</li>
	<li>If you have Medicaid, the benefits covered are different in each state, but certain benefits must be covered. <a href="https://www.medicaid.gov/about-us/contact-us/contact-state-page.html">Check with your state’s Medicaid program to find out what’s covered.</a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about Pap and HPV tests?",
      content: `

    <div class="answer"><p>For more information about Pap and HPV tests, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><strong><a href="https://www.cdc.gov/cancer/nbccedp/">National Breast and Cervical Cancer Early Detection Program, CDC, HHS</a></strong><br>
	Phone number: 1-800-232-4636</li>
	<li><strong><a href="https://www.cancer.gov/">National Cancer Institute (NCI), NIH, HHS</a></strong><br>
	Phone number: 1-800-422-6237</li>
	<li><strong><a href="https://www.cancer.org/" class="external-link external-popup" target="_blank">American Cancer Society <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	Phone number: 1-800-227-2345</li>
	<li><strong><a href="http://www.nccc-online.org/" class="external-link external-popup" target="_blank">National Cervical Cancer Coalition <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	Phone number: 1-800-685-5531</li>
	<li><strong><a href="https://www.plannedparenthood.org/" class="external-link external-popup" target="_blank">Planned Parenthood <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	Phone number: 1-800-230-7526</li>
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
	<li>Van Dyne, E. A., Henley, S. J., Saraiya, M., Thomas, C. C., Markowitz, L. E., Benard, V. B. (2018). <a href="https://www.cdc.gov/mmwr/volumes/67/wr/mm6733a2.htm">Trends in human papillomavirus–associated cancers — United States, 1999–2015</a>. <em>Morbidity and Mortality Weekly Report (MMWR)</em>, <em>67</em>, 918–924.</li>
	<li>Viens, L. J., Henley, S. J., Watson, M., Markowitz, L. E., Thomas, C. C., Thompson, T. D., … Saraiya, M. (2016). <a href="https://www.cdc.gov/mmwr/volumes/65/wr/mm6526a1.htm">Human papillomavirus–associated cancers – United States, 2008-2012</a>. <em>Morbidity and Mortality Weekly Report (MMWR), 65</em>(26), 661–666.</li>
	<li>Dobbs, S. P., Asmussen, T., Nunns, D., Hollingworth, J., Brown, L. J., &amp; Ireland, D. (2000). <a href="https://www.ncbi.nlm.nih.gov/pubmed/11028584">Does histological incomplete excision of cervical intraepithelial neoplasia following large loop excision of transformation zone increase recurrence rates? A six year cytological follow up.</a> <em>Obstetrics &amp; Gynaecology, 107</em>(10), 1298–1301.</li>
	<li>U.S. Preventive Services Task Force. (2018). <a href="https://www.uspreventiveservicestaskforce.org/Page/Document/UpdateSummaryFinal/cervical-cancer-screening2" class="external-link external-popup" target="_blank">Cervical cancer: Screening <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>AIDSinfo. (2018). <a href="https://aidsinfo.nih.gov/guidelines/html/4/adult-and-adolescent-oi-prevention-and-treatment-guidelines/343/hpv">Guidelines for the prevention and treatment of opportunistic infections in HIV-infected adults and adolescents</a>.</li>
	<li>National Cancer Institute. (2017). <a href="http://www.cancer.gov/types/cervical/understanding-cervical-changes">Understanding cervical changes: Next steps after an abnormal screening test</a>.</li>
	<li>Basu, P., Mittal, S., Vale, D. B., &amp; Kharaji, Y. C. (2018). <a href="https://www.sciencedirect.com/science/article/pii/S152169341730130X" class="external-link external-popup" target="_blank">Secondary prevention of cervical cancer <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Best Practice &amp; Research Clinical Obstetrics and Gynaecology, 47</em>, 73–85.</li>
	<li>Schiffman, M., Wentzensen, N., Wacholder, S., Kinney, W., Gage, J. C., &amp; Castle, P. E. (2011). <a href="https://www.ncbi.nlm.nih.gov/pubmed/21282563">Human papillomavirus testing in the prevention of cervical cancer</a>. <em>Journal of the National Cancer Institute, 103</em>(5), 368–383.</li>
	<li>Winer, R. L., Hughes, J. P., Feng, Q., O’Reilly, S., Kiviat, N. B., Holmes, K. K., &amp; Koutsky, L. A. (2006). <a href="http://www.ncbi.nlm.nih.gov/pubmed/16790697">Condom use and the risk of genital human papillomavirus infection in young women.</a> <em>New England Journal of Medicine</em><em>, 354</em>(25), 2645–2654.</li>
	<li>Munk, A. C., Gudlaugsson, E., Malpica, A., Fiane, B., Lovslett, K. I., Kruse, A-J., … Baak, J. P. A. (2012). <a href="http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0045114" class="external-link external-popup" target="_blank">Consistent condom use increases the regression rate of cervical intraepithelial neoplasia 2-3 <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>PLoS One, 7</em>(9), 45114.</li>
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
