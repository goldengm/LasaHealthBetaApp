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

export function cervicalCancerPage({ navigation, ...rest }) {
  const condName = "Cervical Cancer";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Cervicalcancer.jpg?VersionId=rHfLDVuDvbd8Cl3p27xJnagemZuSNocN";
  const condDescription =
    "Cancer is a disease in which cells in the body grow out of control. Cancer is always named for the part of the body where it starts, even if it spreads to other body parts later. When cancer starts in the cervix, it is called cervical cancer. The cervix connects the vagina (birth canal) to the upper part of the uterus. The uterus (or womb) is where a baby grows when a woman is pregnant. \n All women are at risk for cervical cancer. It occurs most often in women over age 30. Long-lasting infection with certain types of human papillomavirus (HPV) is the main cause of cervical cancer. HPV is a common virus that is passed from one person to another during sex. At least half of sexually active people will have HPV at some point in their lives, but few women will get cervical cancer. \n Screening tests and the HPV vaccine can help prevent cervical cancer. When cervical cancer is found early, it is highly treatable and associated with long survival and good quality of life.";
  const condHeader = `<div class="syndicate">
  <div class="row "><div class="col-md-12">
  <!--   <div class="w-md-col5 float-md-right ml-md-3"><div class="card ds-5 mb-3"><img src="/cancer/gynecologic/images/gyn-diagram-350.jpg" class="card-img-top img-fluid p-0 img-fluid" alt="Diagram of the female reproductive system showing the fallopian tubes, ovaries, uterus, cervix, vagina, and vulva" title=""><div class="card-body image-with-caption"><p>This diagram shows different parts of a woman’s reproductive system.</p>   -->
</div></div></div>
<p></p><p><em>Cancer</em> is a disease in which cells in the body grow out of control. Cancer is always named for the part of the body where it starts, even if it spreads to other body parts later. When cancer starts in the cervix, it is called <em>cervical cancer.</em> The cervix connects the vagina (birth canal) to the upper part of the uterus. The <em>uterus</em> (or womb) is where a baby grows when a woman is pregnant.</p>
<p>All women are at risk for cervical cancer. It occurs most often in women over age 30. Long-lasting infection with certain <a href="/cancer/hpv/basic_info/">types of human papillomavirus (HPV)</a> is the main cause of cervical cancer. HPV is a common virus that is passed from one person to another during sex. At least half of sexually active people will have HPV at some point in their lives, but few women will get cervical cancer.</p>
<p><a href="/cancer/cervical/basic_info/screening.htm">Screening tests</a> and the <a href="/hpv/parents/vaccine.html">HPV vaccine</a> can help prevent cervical cancer. When cervical cancer is found early, it is highly treatable and associated with long survival and good quality of life.</p>
<div class="card mb-3"><div class="card-body bg-quaternary"><p><strong>Are you worried about the cost?</strong> CDC offers free or low-cost cervical cancer screening tests. <a href="/cancer/nbccedp/screenings.htm">Find out if you qualify.</a></p>
</div>`; //  this is html
  const condQA = [
    {
      title: "What Are the Risk Factors for Cervical Cancer?",
      content: `<div class="language-link"><a href="/spanish/cancer/cervical/basic_info/risk_factors.htm">Español (Spanish)</a></div>										<div class="mb-3 card tp-related-pages fourth-level-nav d-none">
						<div class="card-header collapse-icon">
							<a class="collapse-link float-right nav-minus fs0875" data-toggle="collapse" href="#collapse_3773602c076036784" aria-expanded="false" aria-controls="collapse_3773602c076036784">
								<svg viewBox="0 0 24 24" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<title>minus</title>
									<path d="M19,13H5V11H19V13Z">
									</path>
								</svg>
							</a>
							<div class="h4">Related Pages</div>
						</div>
						<div class="card-body collapse show" id="collapse_3773602c076036784"><ul class="block-list"></ul></div>
					</div>
										<div class="syndicate">
						<div class="row "><div class="col-md-12">
<div class="w-md-col5 float-md-right ml-md-3"><div class="card ds-5 mb-3"><img src="/cancer/cervical/images/3women-350.jpg" class="card-img-top img-fluid p-0 img-fluid" alt="Photo of three women" title=""><div class="card-body image-with-caption"><p>Almost all cervical cancers are caused by HPV. Other things also can increase your risk of cervical cancer.</p>
</div></div></div>
<p></p><p>Almost all <a href="/cancer/hpv/basic_info/">cervical cancers are caused by human papillomavirus (HPV),</a> a common virus that can be passed from one person to another during sex. There are many types of HPV. Some HPV types can cause changes on a woman’s cervix that can lead to cervical cancer over time, while other types can cause genital or skin warts.</p>
<p><a href="/hpv/">HPV</a> is so common that most people get it at some time in their lives. HPV usually causes no symptoms so you can’t tell that you have it. For most women, HPV will go away on its own; however, if it does not, there is a chance that over time it may cause cervical cancer.</p>
<p>Other things can increase your risk of cervical cancer—</p>
<ul>
<li>Having <a href="/hiv/basics/">HIV</a> (the virus that causes AIDS) or another condition that makes it hard for your body to fight off health problems.</li>
<li><a href="/cancer/tobacco/">Smoking.</a></li>
<li>Using birth control pills for a long time (five or more years).</li>
<li>Having given birth to three or more children.</li>
<li>Having several sexual partners.</li>
</ul>
</div></div>
					</div>
													</div>




`,
    },
    {
      title: "What Can I Do to Reduce My Risk of Cervical Cancer? ",
      content: `<div class="language-link"><a href="/spanish/cancer/cervical/basic_info/prevention.htm">Español (Spanish)</a></div>										<div class="mb-3 card tp-related-pages fourth-level-nav d-none">
						<div class="card-header collapse-icon">
							<a class="collapse-link float-right nav-minus fs0875" data-toggle="collapse" href="#collapse_3769602c07610f8bb" aria-expanded="false" aria-controls="collapse_3769602c07610f8bb">
								<svg viewBox="0 0 24 24" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<title>minus</title>
									<path d="M19,13H5V11H19V13Z">
									</path>
								</svg>
							</a>
							<div class="h4">Related Pages</div>
						</div>
						<div class="card-body collapse show" id="collapse_3769602c07610f8bb"><ul class="block-list"></ul></div>
					</div>
										<div class="syndicate">
						<div class="row "><div class="col-md-12"><div class="w-md-col6 float-md-right ml-md-3"><div class="card mb-3"><div class="card-header h4 bg-white">Cote de Pablo</div><div class="card-body bg-white"><div class="mb-3 video-container"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="//www.youtube-nocookie.com/embed/GZsjpJWLfxU?autohide=0&amp;enablejsapi=1&amp;playerapiid=3769&amp;modestbranding=1&amp;rel=0&amp;origin=https://www.cdc.gov&amp;showinfo=0//www.youtube-nocookie.com/embed/GZsjpJWLfxU?autohide=0&amp;enablejsapi=1&amp;playerapiid=3769&amp;modestbranding=1&amp;rel=0&amp;origin=https://www.cdc.gov&amp;showinfo=0&amp;wmode=opaque?enablejsapi=1" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen" title="Cote de Pablo for Inside Knowledge PSA (:60) Version A"></iframe><noscript><div class="noscript"><a href="//www.youtube-nocookie.com/embed/GZsjpJWLfxU?autohide=0&amp;enablejsapi=1&amp;playerapiid=3769&amp;modestbranding=1&amp;rel=0&amp;origin=https://www.cdc.gov&amp;showinfo=0//www.youtube-nocookie.com/embed/GZsjpJWLfxU?autohide=0&amp;enablejsapi=1&amp;playerapiid=3769&amp;modestbranding=1&amp;rel=0&amp;origin=https://www.cdc.gov&amp;showinfo=0&amp;wmode=opaque?enablejsapi=1" target="_blank">Cote de Pablo for Inside Knowledge PSA (:60) Version A</a></div></noscript></div><div class="video-links mt-3"><div class="small video-transcript"><a class="nonHtml noDecoration" href="http://www.cdc.gov/wcms/videos/low-res/NCCDPHP/2015/cote_video_english_60_925629.mp4" target="new"><span class="sr-only">media icon</span><span class="fi cdc-icon-media x16 ml-2 mr-2 fill-media" aria-hidden="true"></span>Low Resolution Video</a></div></div></div>
<p>“Please pay attention to your health—for you and the people who care about you,” says&nbsp;<a href="https://www.youtube.com/watch?v=GZsjpJWLfxU">Cote de Pablo.</a></p>
</div></div></div><p><strong>The most important thing you can do to help prevent cervical cancer is to get vaccinated early and have regular screening tests.</strong></p>
<h2>HPV Vaccine</h2>
<p>The <a href="/hpv/parents/vaccine.html">HPV vaccine</a> protects against the <a href="/cancer/hpv/basic_info/">types of HPV</a> that most often cause cervical, vaginal, and vulvar cancers.</p>
<ul>
<li>HPV vaccination is recommended for preteens aged 11 to 12 years, but can be given starting at age 9.</li>
<li>HPV vaccine also is recommended for everyone through age 26 years, if they are not vaccinated already.</li>
<li>HPV vaccination is not recommended for everyone older than age 26 years. However, some adults age 27 through 45 years who are not already vaccinated may decide to get the HPV vaccine after speaking with their doctor about their risk for new HPV infections and the possible benefits of vaccination. HPV vaccination in this age range provides less benefit, as more people have already been exposed to HPV.</li>
</ul>
<p>If vaccination is started before age 15, a two-dose schedule is recommended, with the doses given 6 to 12 months apart. For people who start the series after their 15th birthday, the vaccine is given in a series of three shots.</p>
<p>HPV vaccination prevents new HPV infections, but does not treat existing infections or diseases. This is why the HPV vaccine works best when given before any exposure to HPV. You should get screened for cervical cancer regularly, even if you received an HPV vaccine.</p>
<h2>Screening Tests</h2>
<p>Two <a href="/cancer/cervical/basic_info/screening.htm">screening tests</a> can help prevent cervical cancer or find it early—</p>
<ul>
<li>The Pap test (or Pap smear) looks for <em>precancers,</em> cell changes on the cervix that might become cervical cancer if they are not treated appropriately.</li>
<li>The HPV test looks for the virus (<a href="/cancer/hpv/basic_info/">human papillomavirus</a>) that can cause these cell changes.</li>
</ul>
<p>Both tests can be done in a doctor’s office or clinic. If you have a low income or do not have health insurance, you may be able to get free or low-cost screening tests through CDC’s National Breast and Cervical Cancer Early Detection Program. <a href="/cancer/nbccedp/screenings.htm">Find out if you qualify.</a></p>
<h2>More Steps to Help Prevent Cervical Cancer</h2>
<p>These things may also help lower your risk for cervical cancer—</p>
<ul>
<li><a href="/tobacco/basic_information/health_effects/cancer/">Don’t smoke.</a></li>
<li>Use condoms during sex.*</li>
<li>Limit your number of sexual partners.</li>
</ul>
<p>*HPV infection can occur in both male and female genital areas that are covered or protected by a latex condom, as well as in areas that are not covered. While the effect of condoms in preventing HPV infection is unknown, condom use has been associated with a lower rate of cervical cancer.</p>
</div></div><div class="row "><div class="col-md-12"><div class="card mb-3"><div class="card-header h4 bg-primary">More Information</div><div class="card-body bg-white"><ul class="bullet-list">
<li><a href="/cancer/nbccedp/screenings.htm">Find out if you qualify for free or low-cost cervical cancer screening tests.</a></li>
<li>Video: <a href="http://www.youtube.com/watch?v=Du1dnKppn-s">Why HPV Vaccine Is Important to My Family: The Story of a Cervical Cancer Survivor</a></li>
</ul>
</div></div></div></div>
					</div>
													</div>





`,
    },
    {
      title: "What Are the Symptoms of Cervical Cancer?",
      content: `<div class="language-link"><a href="/spanish/cancer/cervical/basic_info/symptoms.htm">Español (Spanish)</a></div>										<div class="mb-3 card tp-related-pages fourth-level-nav d-none">
						<div class="card-header collapse-icon">
							<a class="collapse-link float-right nav-minus fs0875" data-toggle="collapse" href="#collapse_3763602c07644687f" aria-expanded="false" aria-controls="collapse_3763602c07644687f">
								<svg viewBox="0 0 24 24" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<title>minus</title>
									<path d="M19,13H5V11H19V13Z">
									</path>
								</svg>
							</a>
							<div class="h4">Related Pages</div>
						</div>
						<div class="card-body collapse show" id="collapse_3763602c07644687f"><ul class="block-list"></ul></div>
					</div>
										<div class="syndicate">
						<div class="row "><div class="col-md-12">
<div class="w-md-col5 float-md-right ml-md-3"><div class="card mb-3"><h2 class="card-header h4 bg-white">Not Just Words</h2><div class="card-body bg-white"><div class="mb-3 video-container with-audio">
<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="//www.youtube-nocookie.com/embed/UGwd7QfjkbI?autohide=0&amp;enablejsapi=1&amp;playerapiid=3763&amp;modestbranding=1&amp;rel=0&amp;origin=https://www.cdc.gov&amp;showinfo=0//www.youtube-nocookie.com/embed/UGwd7QfjkbI?autohide=0&amp;enablejsapi=1&amp;playerapiid=3763&amp;modestbranding=1&amp;rel=0&amp;origin=https://www.cdc.gov&amp;showinfo=0&amp;wmode=opaque?enablejsapi=1" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen" title="Not Just Words PSA (:60)"></iframe><noscript>
<div class="noscript"><a href="//www.youtube-nocookie.com/embed/UGwd7QfjkbI?autohide=0&amp;enablejsapi=1&amp;playerapiid=3763&amp;modestbranding=1&amp;rel=0&amp;origin=https://www.cdc.gov&amp;showinfo=0//www.youtube-nocookie.com/embed/UGwd7QfjkbI?autohide=0&amp;enablejsapi=1&amp;playerapiid=3763&amp;modestbranding=1&amp;rel=0&amp;origin=https://www.cdc.gov&amp;showinfo=0&amp;wmode=opaque?enablejsapi=1" target="_blank">Not Just Words PSA (:60)</a></div>
<p></p></noscript></div>
<div class="video-links mt-3">
<div class="small video-transcript"><a class="nonHtml noDecoration" href="/cancer/videos/gynecologic/not-just-words/not-just-words-60sec/not-just-words-60sec-AD-transcript.pdf" target="new"><span class="sr-only">pdf icon</span><span class="fi cdc-icon-pdf x16 mr-2 fill-pdf" aria-hidden="true"></span>View Transcript</a> <a class="nonHtml noDecoration" href="/cancer/videos/gynecologic/not-just-words/not-just-words-60sec/not-just-words-60sec-AD.mp3" target="new"><span class="sr-only">txt icon</span><span class="fi cdc-icon-txt x16 ml-2 mr-2 fill-txt" aria-hidden="true"></span>Audio Description</a> <a class="nonHtml noDecoration" href="https://www.cdc.gov/wcms/video/low-res/cancer/2019/1048210482not-just-words-60sec.mp4" target="new"><span class="sr-only">media icon</span><span class="fi cdc-icon-media x16 ml-2 mr-2 fill-media" aria-hidden="true"></span>Low Resolution Video</a></div>
</div>
</div>
<p><a href="https://www.youtube.com/watch?v=UGwd7QfjkbI">This video</a> discusses the importance of knowing the signs and symptoms of gynecologic cancer.</p>
</div></div></div>
<p></p><p>Early on, cervical cancer may not cause signs and symptoms. Advanced cervical cancer may cause bleeding or discharge from the vagina that is not normal for you, such as bleeding after sex. If you have any of these signs, see your doctor. They may be caused by something other than cancer, but the only way to know is to see your doctor.</p>
<p>Use our Symptoms Diaries to track possible symptoms over a two-week timespan.</p>
<ul>
<li><a href="/cancer/knowledge/pdf/cdc_gyn_symptomsdiary.pdf" target="_blank" rel="noopener noreferrer">Gynecologic Cancer Symptoms Diary <span class="sr-only">pdf icon</span><span class="fi cdc-icon-pdf x16 fill-pdf" aria-hidden="true"></span><span class="file-details">[PDF-114KB]</span></a> (9 inches wide and 6 inches tall, 2 pages)</li>
<li><a href="/cancer/knowledge/pdf/symptoms_diary_wallet_card.pdf" target="_blank" rel="noopener noreferrer">Gynecologic Cancer Symptoms Diary Wallet Card <span class="sr-only">pdf icon</span><span class="fi cdc-icon-pdf x16 fill-pdf" aria-hidden="true"></span><span class="file-details">[PDF-507KB]</span></a> (11.25 inches wide and 3.5 inches tall, 2 pages)</li>
</ul>
</div></div>
					</div>
													</div>
  
  `,
    },
    {
      title: "What Should I Know About Screening?",
      content: `<div class="language-link"><a href="/spanish/cancer/cervical/basic_info/screening.htm">Español (Spanish)</a></div>										<div class="mb-3 card tp-related-pages fourth-level-nav d-none">
                          <div class="card-header collapse-icon">
                            <a class="collapse-link float-right nav-minus fs0875" data-toggle="collapse" href="#collapse_3767602c07626eee1" aria-expanded="false" aria-controls="collapse_3767602c07626eee1">
                              <svg viewBox="0 0 24 24" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <title>minus</title>
                                <path d="M19,13H5V11H19V13Z">
                                </path>
                              </svg>
                            </a>
                            <div class="h4">Related Pages</div>
                          </div>
                          <div class="card-body collapse show" id="collapse_3767602c07626eee1"><ul class="block-list"></ul></div>
                        </div>
                                  <div class="syndicate">
                          <div class="row "><div class="col-md-12">
              <div class="w-md-col6 float-md-right ml-md-3"><div class="card mb-3"><div class="card-header h4 bg-white">Knowledge Is Power: Cervical Cancer</div><div class="card-body "><div class="mb-3 video-container">
              <div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="//www.youtube-nocookie.com/embed/fXwvdN4XnKU?autohide=0&amp;enablejsapi=1&amp;playerapiid=3767&amp;modestbranding=1&amp;rel=0&amp;origin=https://www.cdc.gov&amp;showinfo=0//www.youtube-nocookie.com/embed/fXwvdN4XnKU?autohide=0&amp;enablejsapi=1&amp;playerapiid=3767&amp;modestbranding=1&amp;rel=0&amp;origin=https://www.cdc.gov&amp;showinfo=0&amp;wmode=opaque?enablejsapi=1" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen" title="Knowledge is Power: Cervical Cancer"></iframe><noscript>
              <div class="noscript"><a href="//www.youtube-nocookie.com/embed/fXwvdN4XnKU?autohide=0&amp;enablejsapi=1&amp;playerapiid=3767&amp;modestbranding=1&amp;rel=0&amp;origin=https://www.cdc.gov&amp;showinfo=0//www.youtube-nocookie.com/embed/fXwvdN4XnKU?autohide=0&amp;enablejsapi=1&amp;playerapiid=3767&amp;modestbranding=1&amp;rel=0&amp;origin=https://www.cdc.gov&amp;showinfo=0&amp;wmode=opaque?enablejsapi=1" target="_blank">Knowledge is Power: Cervical Cancer</a></div>
              <p></p></noscript></div>
              <div class="video-links mt-3">
              <div class="small video-transcript"><a class="nonHtml noDecoration" href="/cancer/videos/gynecologic/knowledge-is-power/knowledge-is-power-cervical/knowledge-is-power-Cervical-AD-transcript.pdf" target="new"><span class="sr-only">pdf icon</span><span class="fi cdc-icon-pdf x16 mr-2 fill-pdf" aria-hidden="true"></span>View Transcript</a> <a class="nonHtml noDecoration" href="https://www.cdc.gov/wcms/video/low-res/cancer/2018/28842884knowledge-is-power-cervical.mp4" target="new"><span class="sr-only">media icon</span><span class="fi cdc-icon-media x16 ml-2 mr-2 fill-media" aria-hidden="true"></span>Low Resolution Video</a></div>
              </div>
              </div>
              <p>
              <a href="https://www.youtube.com/watch?v=fXwvdN4XnKU">This short animated video</a>&nbsp;reminds women that getting screened for cervical cancer helps prevent the disease.</p>
              </div></div></div>
              <p></p><p>Two screening tests can help prevent cervical cancer or find it early—</p>
              <ul>
              <li>The Pap test (or Pap smear) looks for <em>precancers,</em> cell changes on the cervix that might become cervical cancer if they are not treated appropriately.</li>
              <li>The HPV test looks for the virus (<a href="/cancer/hpv/basic_info/">human papillomavirus</a>) that can cause these cell changes.</li>
              </ul>
              <p>Both tests can be done in a doctor’s office or clinic. During the Pap test, the doctor will use a plastic or metal instrument, called a <em>speculum,</em> to widen your vagina. This helps the doctor examine the vagina and the cervix, and collect a few cells and mucus from the cervix and the area around it. The cells are sent to a laboratory.</p>
              <ul class="bullet-list">
              <li>If you are getting a Pap test, the cells will be checked to see if they look normal.</li>
              <li>If you are getting an HPV test, the cells will be tested for HPV.</li>
              </ul>
              </div></div><div class="row "><div class="col-md-12"><div class="w-md-col4 float-md-right ml-md-3"><div class="card mb-3"><div class="card-header h4 bg-tertiary">How to Prepare for Your Pap or HPV Test</div><div class="card-body bg-tertiary"><p>You should not schedule your test for a time when you are having your period. If you are going to have a test in the next two days—</p>
              <ul class="bullet-list">
              <li>You should not douche (rinse the vagina with water or another fluid).</li>
              <li>You should not use a tampon.</li>
              <li>You should not have sex.</li>
              <li>You should not use a birth control foam, cream, or jelly.</li>
              <li>You should not use a medicine or cream in your vagina.</li>
              </ul>
              </div></div></div><h2><a id="screen" name="screen"></a>When to Get Screened</h2>
              <h3>If You Are 21 to 29 Years Old</h3>
              <p>You should start getting Pap tests at age 21. If your Pap test result is normal, your doctor may tell you that you can wait three years until your next Pap test.</p>
              <h3>If You Are 30 to 65 Years Old</h3>
              <p>Talk to your doctor about which testing option is right for you—</p>
              <ul class="bullet-list">
              <li><strong>A Pap test only.</strong> If your result is normal, your doctor may tell you that you can wait three years until your next Pap test.</li>
              <li><strong>An HPV test only.</strong> This is called <em>primary HPV testing.</em> If your result is normal, your doctor may tell you that you can wait five years until your next screening test.</li>
              <li><strong>An HPV test along with the Pap test.</strong> This is called <em>co-testing.</em> If both of your results are normal, your doctor may tell you that you can wait five years until your next screening test.</li>
              </ul>
              <h3>If You Are Older Than 65</h3>
              <p>Your doctor may tell you that you don’t need to be screened anymore if—</p>
              <ul class="bullet-list">
              <li>You have had normal screening test results for several years, or</li>
              <li>You have had your cervix removed as part of a total hysterectomy for non-cancerous conditions, like fibroids.</li>
              </ul>
              </div></div><div class="row "><div class="col-md-12"><div class="w-md-col4 float-md-right ml-md-3"><div class="card mb-3"><div class="card-body bg-white"><p>If you have a low income or do not have health insurance, you may be able to get a free or low-cost screening test through the National Breast and Cervical Cancer Early Detection Program.&nbsp;<a href="/cancer/nbccedp/screenings.htm">Find out if you qualify.</a></p>
              </div></div></div><h2>Test Results</h2>
              <p>It can take as long as three weeks to receive your <a href="/cancer/cervical/basic_info/test-results.htm">test results.</a> If your test shows that something might not be normal, your doctor will contact you and figure out how best to follow up. There are many reasons why test results might not be normal. It usually does not mean you have cancer.</p>
              <p>If your test results show cells that are not normal and may become cancer, your doctor will let you know if you need to be treated. In most cases, treatment prevents cervical cancer from developing. It is important to follow up with your doctor right away to learn more about your test results and receive any treatment that may be needed.</p>
              <p>If your test results are normal, your chance of getting cervical cancer in the next few years is very low. Your doctor may tell you that you can wait several years for your next cervical cancer screening test. But you should still go to the doctor regularly for a checkup.</p>
              </div></div>
                        </div>
                                        </div>

`,
    },
    {
      title: "What Do My Cervical Cancer Screening Test Results Mean?",
      content: `<div class="language-link"><a href="/spanish/cancer/cervical/basic_info/test-results.htm">Español (Spanish)</a></div>										<div class="mb-3 card tp-related-pages fourth-level-nav d-none">
                                        <div class="card-header collapse-icon">
                                          <a class="collapse-link float-right nav-minus fs0875" data-toggle="collapse" href="#collapse_3753616de6c27fcd1" aria-expanded="false" aria-controls="collapse_3753616de6c27fcd1">
                                            <svg viewBox="0 0 24 24" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                              <title>minus</title>
                                              <path d="M19,13H5V11H19V13Z">
                                              </path>
                                            </svg>
                                          </a>
                                          <div class="h4">Related Pages</div>
                                        </div>
                                        <div class="card-body collapse show" id="collapse_3753616de6c27fcd1"><ul class="block-list"></ul></div>
                                      </div>
                                                <div class="syndicate">
                                        <div class="row "><div class="col-md-12 splash-col">
                            <div class="w-md-col5 float-md-right ml-md-3"><div class="card ds-5  "><img src="/cancer/cervical/images/confused-350.jpg?_=15351" class="card-img-top img-fluid p-0 img-fluid" alt="Photo of a confused woman reading a letter" title=""><div class="card-body image-with-caption"><p>A Pap test result can be normal, unclear, or abnormal. An HPV test result can be positive or negative.</p>
                            </div></div></div>
                            <p></p><p>Two <a href="/cancer/cervical/basic_info/screening.htm">screening tests</a> can help prevent cervical cancer or find it early—</p>
                            <ul class="bullet-list">
                            <li>The Pap test (or Pap smear) looks for <em>precancers,</em> cell changes on the cervix that might become cervical cancer if they are not treated appropriately.</li>
                            <li>The HPV test looks for the virus (<a href="/cancer/hpv/basic_info/">human papillomavirus</a>) that can cause these cell changes.</li>
                            </ul>
                            <p>The Pap test is recommended for all women between the ages of 21 and 65 years old. If you are 30 years old or older, you may choose to get a Pap test only, an HPV test only, or both tests together.</p>
                            <h2>Pap Test Result</h2>
                            <p>A Pap test result can be normal, unclear, or abnormal.</p>
                            <h3>Normal</h3>
                            <p>A normal (or “negative”) result means that no cell changes were found on your cervix. This is good news. But you still need to get Pap tests in the future. New cell changes can still form on your cervix.</p>
                            <p>Your doctor may tell you that you can wait three years for your next screening test if you received a Pap test only. If you also received an HPV test, and the result is negative, your doctor may tell you that you can wait five years for your next screening test.</p>
                            <h3>Unclear (ASC-US)</h3>
                            <p>It is common for test results to come back unclear. Your doctor may use other words to describe this result, like equivocal, inconclusive, or ASC-US. These all mean the same thing—that your cervical cells look like they could be abnormal. It is not clear if it’s related to HPV. It could be related to life changes like pregnancy, menopause, or an infection. The HPV test can help find out if your cell changes are related to HPV. Ask your doctor what to do next.</p>
                            <h3>Abnormal</h3>
                            <p>An abnormal result means that cell changes were found on your cervix. This usually does not mean that you have cervical cancer. Abnormal changes on your cervix are likely caused by HPV. The changes may be minor (low-grade) or serious (high-grade). Most of the time, minor changes go back to normal on their own. But more serious changes can turn into cancer if they are not removed. The more serious changes are often called “precancer” because they are not yet cancer, but they can turn into cancer over time. In rare cases, an abnormal Pap test can show that you may have cancer. You will need other tests to be sure. The earlier you find cervical cancer, the easier it is to treat.</p>
                            <h2>HPV Test Result</h2>
                            <p>An HPV test result can be positive or negative.</p>
                            <h3>Negative</h3>
                            <p>A negative HPV test means you <strong>do not</strong> have an HPV type that is linked to cervical cancer. Your doctor may tell you that you can wait five years for your next screening test.</p>
                            <h3>Positive</h3>
                            <p>A positive HPV test means you <strong>do</strong> have an HPV type that may be linked to cervical cancer. This does not mean you have cervical cancer now. But it could be a warning. The specific HPV type may be identified to determine the next step.</p>
                            </div></div><div class="row "><div class="col-md-12 splash-col"><div class="card card-multi mb-3"><div class="card-header h4 bg-primary">More Information</div><div class="card-body "><div class="card "><div class="card-body p-0"><ul>
                            <li><a href="https://www.cancer.gov/types/cervical/understanding-abnormal-hpv-and-pap-test-results" class="tp-link-policy" data-domain-ext="gov">Next Steps after an Abnormal Cervical Cancer Screening Test: Understanding HPV and Pap Test Results<span class="sr-only">external icon</span><span class="fi cdc-icon-external x16 fill-external" aria-hidden="true"></span></a> (National Cancer Institute)</li>
                            </ul>
                            </div></div></div></div></div></div>
                                      </div>
                                                      </div>





`,
    },
    {
      title: "How Is Cervical Cancer Diagnosed and Treated?",
      content: `<div class="language-link"><a href="/spanish/cancer/cervical/basic_info/diagnosis_treatment.htm">Español (Spanish)</a></div>										<div class="mb-3 card tp-related-pages fourth-level-nav d-none">
                                                      <div class="card-header collapse-icon">
                                                        <a class="collapse-link float-right nav-minus fs0875" data-toggle="collapse" href="#collapse_3761616de6c17d325" aria-expanded="false" aria-controls="collapse_3761616de6c17d325">
                                                          <svg viewBox="0 0 24 24" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                            <title>minus</title>
                                                            <path d="M19,13H5V11H19V13Z">
                                                            </path>
                                                          </svg>
                                                        </a>
                                                        <div class="h4">Related Pages</div>
                                                      </div>
                                                      <div class="card-body collapse show" id="collapse_3761616de6c17d325"><ul class="block-list"></ul></div>
                                                    </div>
                                                              <div class="syndicate">
                                                      <div class="row "><div class="col-md-12 splash-col">
                                          <div class="w-md-col5 float-md-right ml-md-3"><div class="card ds-5  "><img src="/cancer/cervical/images/hospital-350.jpg?_=15353" class="card-img-top img-fluid p-0 img-fluid" alt="Photo of a woman in a hospital talking to her doctor" title=""><div class="card-body image-with-caption"><p>Cervical cancer treatments include surgery, chemotherapy, and radiation therapy.</p>
                                          </div></div></div>
                                          <p></p><p>If your doctor says that you have cervical cancer, ask to be referred to a <em>gynecologic oncologist</em>—a doctor who has been trained to treat cancers of a woman’s reproductive system. This doctor will work with you to create a treatment plan.</p>
                                          <p>The extent of disease is referred to as the <a href="https://www.cancer.gov/types/cervical/patient/cervical-treatment-pdq#_142" class="tp-link-policy" data-domain-ext="gov">stage.<span class="sr-only">external icon</span><span class="fi cdc-icon-external x16 fill-external" aria-hidden="true"></span></a>&nbsp;Information about the size of the cancer or how far it has spread is often used to determine the stage. Doctors use this information to plan treatment and to monitor progress.</p>
                                          <h2><a id="types" name="types"></a> Types of Treatment</h2>
                                          <p>Cervical cancer is treated in several ways. It depends on the kind of cervical cancer and how far it has spread. Treatments include surgery, chemotherapy, and radiation therapy.</p>
                                          <ul>
                                          <li><strong>Surgery:</strong> Doctors remove cancer tissue in an operation.</li>
                                          <li><strong>Chemotherapy:</strong> Using special medicines to shrink or kill the cancer. The drugs can be pills you take or medicines given in your veins, or sometimes both.</li>
                                          <li><strong>Radiation:</strong> Using high-energy rays (similar to X-rays) to kill the cancer.</li>
                                          </ul>
                                          <p>Different treatments may be provided by different doctors on your medical team.</p>
                                          <ul>
                                          <li><em>Gynecologic oncologists</em> are doctors who have been trained to treat cancers of a woman’s reproductive system.</li>
                                          <li><em>Surgeons</em> are doctors who perform operations.</li>
                                          <li><em>Medical oncologists</em> are doctors who treat cancer with medicine.</li>
                                          <li><em>Radiation oncologists</em> are doctors who treat cancer with radiation.</li>
                                          </ul>
                                          <p>For more information, visit the National Cancer Institute’s <a href="https://www.cancer.gov/types/cervical/patient/cervical-treatment-pdq" class="tp-link-policy" data-domain-ext="gov">Cervical Cancer Treatment.<span class="sr-only">external icon</span><span class="fi cdc-icon-external x16 fill-external" aria-hidden="true"></span></a></p>
                                          </div></div><div class="row "><div class="col-md-12 splash-col">
                                          <div class="card bg-transparent border-0 rounded-0 mb-3"><div class="card-body p-0 bg-transparent"><h2><a id="ct" name="ct"></a>Clinical Trials</h2>
                                          
                                          <p><a href="/cancer/survivors/patients/clinical-trials.htm"><em>Clinical trials</em></a> use new treatment options to see if they are safe and effective. If you have cancer, you may want to take part. Visit the sites listed below for more information.</p>
                                          
                                          <ul>
                                          <li><a href="https://www.nih.gov/health-information/nih-clinical-research-trials-you" class="tp-link-policy" data-domain-ext="gov">NIH Clinical Research Trials and You<span class="sr-only">external icon</span><span class="fi cdc-icon-external x16 fill-external" aria-hidden="true"></span></a> (National Institutes of Health)</li>
                                          
                                          <li><a href="https://www.cancer.gov/about-cancer/treatment/clinical-trials" class="tp-link-policy" data-domain-ext="gov">Learn About Clinical Trials<span class="sr-only">external icon</span><span class="fi cdc-icon-external x16 fill-external" aria-hidden="true"></span></a> (National Cancer Institute)</li>
                                          
                                          <li><a href="https://www.cancer.gov/about-cancer/treatment/clinical-trials/search/" class="tp-link-policy" data-domain-ext="gov">Search for Clinical Trials<span class="sr-only">external icon</span><span class="fi cdc-icon-external x16 fill-external" aria-hidden="true"></span></a> (National Cancer Institute)</li>
                                          
                                          <li><a href="https://www.clinicaltrials.gov/" class="tp-link-policy" data-domain-ext="gov">ClinicalTrials.gov<span class="sr-only">external icon</span><span class="fi cdc-icon-external x16 fill-external" aria-hidden="true"></span></a> (National Institutes of Health)</li>
                                          </ul>
                                          
                                          <h2><a id="ca" name="ca"></a>Complementary and Alternative Medicine</h2>
                                          
                                          <p><a href="/cancer/survivors/patients/complementary-alternative-medicine.htm">Complementary and alternative medicine</a> are medicines and health practices that are not standard cancer treatments. Complementary medicine is used <em>in addition to</em> standard treatments, and alternative medicine is used <em>instead of</em> standard treatments. Meditation, yoga, and supplements like vitamins and herbs are some examples.</p>
                                          
                                          <p>Many kinds of complementary and alternative medicine have not been tested scientifically and may not be safe. Talk to your doctor about the risks and benefits before you start any kind of complementary or alternative medicine.</p>
                                          
                                          <h2><a id="tr" name="tr"></a>Which Treatment Is Right for Me?</h2>
                                          
                                          <p>Choosing the treatment that is right for you may be hard. Talk to your cancer doctor about the treatment options available for your type and stage of cancer. Your doctor can explain the risks and benefits of each treatment and their side effects. <a href="/cancer/survivors/patients/side-effects-of-treatment.htm"><em>Side effects</em></a> are how your body reacts to drugs or other treatments.</p>
                                          
                                          <p>Sometimes people get an opinion from more than one cancer doctor. This is called a “second opinion.” Getting a <a href="https://www.cancer.gov/about-cancer/managing-care/services" class="tp-link-policy" data-domain-ext="gov">second opinion<span class="sr-only">external icon</span><span class="fi cdc-icon-external x16 fill-external" aria-hidden="true"></span></a> may help you choose the treatment that is right for you.</p>
                                          </div></div></div>
                                          <p></p></div><div class="row "><div class="col-md-12 splash-col"><div class="card card-multi mb-3"><div class="card-header h4 bg-primary">More Information</div><div class="card-body "><div class="card "><div class="card-body p-0"><ul>
                                          <li><a href="https://www.cancer.gov/publications/patient-education/understanding-cervical-changes" class="tp-link-policy" data-domain-ext="gov">Understanding Cervical Changes: A Health Guide for Women<span class="sr-only">external icon</span><span class="fi cdc-icon-external x16 fill-external" aria-hidden="true"></span></a> (National Cancer Institute)</li>
                                          </ul>
                                          </div></div></div></div></div></div>
                                                    </div>
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
