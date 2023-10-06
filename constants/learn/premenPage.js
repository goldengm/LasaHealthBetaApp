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

export function premenPage({ navigation, ...rest }) {
  const condName = "Premenstrual syndrome (PMS)";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/PremenstrualsyndromePMS.jpg?VersionId=XN.Y5ZRYRJVzIBfBwfbfsSkAcnt7cpbw";
  const condDescription =
    "PMS is a combination of physical and emotional symptoms that many women get after ovulation and before the start of their menstrual period. Researchers think that PMS happens in the days after ovulation because estrogen and progesterone levels begin falling dramatically if you are not pregnant. PMS symptoms go away within a few days after a woman’s period starts as hormone levels begin rising again. \n Some women get their periods without any signs of PMS or only very mild symptoms. For others, PMS symptoms may be so severe that it makes it hard to do everyday activities like go to work or school. Severe PMS symptoms may be a sign of premenstrual dysphoric disorder (PMDD). PMS goes away when you no longer get a period, such as after menopause. After pregnancy, PMS might come back, but you might have different PMS symptoms.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/PremenstrualsyndromePMS.jpg?VersionId=XN.Y5ZRYRJVzIBfBwfbfsSkAcnt7cpbw"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Premenstrual syndrome (PMS)</h1>  -->
            <p><strong><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="pree-MEN-struhl">Premenstrual</a> syndrome (PMS) is a combination of symptoms that many women get about a week or two before their period.&nbsp;</strong>Most women, over 90%, say they get some premenstrual symptoms, such as bloating, headaches, and moodiness.<a href="#references"><sup>3</sup></a> For some women, these symptoms may be so severe that they miss work or school, but other women are not bothered by milder symptoms. On average, women in their 30s are most likely to have PMS.<a href="#references"><sup>4</sup></a> Your doctor can help you find ways to relieve your symptoms. &nbsp;&nbsp;&nbsp;</p>

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
      title: "What is PMS? ",
      content: `

    <div class="answer"><p>PMS is a combination of physical and emotional symptoms that many women get after ovulation and before the start of their menstrual period. Researchers think that PMS happens in the days after ovulation because estrogen and progesterone levels begin falling dramatically if you are not pregnant. PMS symptoms go away within a few days after a woman’s period starts as hormone levels begin rising again.</p>

<p>Some women get their periods without any signs of PMS or only very mild symptoms. For others, PMS symptoms may be so severe that it makes it hard to do everyday activities like go to work or school. Severe PMS symptoms may be a sign of <a href="/menstrual-cycle/premenstrual-syndrome/premenstrual-dysphoric-disorder-pmdd" title="Premenstrual dysphoric disorder (PMDD)">premenstrual dysphoric disorder (</a><a href="/menstrual-cycle/premenstrual-syndrome/premenstrual-dysphoric-disorder-pmdd" title="PMDD">PMDD</a><a href="/menstrual-cycle/premenstrual-syndrome/premenstrual-dysphoric-disorder-pmdd" title="PMDD">)</a>. PMS goes away when you no longer get a period, such as after <a href="http://www.womenshealth.gov/glossary#menopause" title="glossary">menopause</a>. After pregnancy, PMS might come back, but you might have different PMS symptoms.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets PMS?",
      content: `

    <div class="answer"><p>As many as three in four women say they get PMS symptoms at some point in their lifetime.<a href="#references"><sup>5</sup></a> For most women, PMS symptoms are mild.</p>

<p>Less than 5% of women of childbearing age get a more severe form of PMS, called <a href="/menstrual-cycle/premenstrual-syndrome/premenstrual-dysphoric-disorder-pmdd" title="Premenstrual dysphoric disorder (PMDD)">premenstrual dysphoric disorder (PMDD)</a>.<a href="#references"><sup>6</sup></a></p>

<p>PMS may happen more often in women who:</p>

<ul>
	<li>Have high levels of stress<a href="#references" title="references"><sup>7</sup></a></li>
	<li>Have a family history of <a href="http://www.womenshealth.gov/publications/our-publications/fact-sheet/depression.html" title="depression">depression</a><a href="#references"><sup>8 </sup></a></li>
	<li>Have a personal history of either <a href="/glossary#pPD">postpartum depression</a>&nbsp;or depression<sup><a href="#references">9</a>,<a href="#references">10</a></sup></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Does PMS change with age? ",
      content: `

    <div class="answer"><p>Yes. PMS symptoms may get worse as you reach your late 30s or 40s and approach <a href="http://www.womenshealth.gov/menopause/menopause-basics/index.html" title="menopause">menopause</a>&nbsp;and are in the transition to menopause, called perimenopause.<a href="#references"><sup>11</sup></a></p>

<p>This is especially true for women whose moods are sensitive to changing hormone levels during the menstrual cycle. In the years leading up to menopause, your hormone levels also go up and down in an unpredictable way as your body slowly transitions to menopause. You may get the same mood changes, or they may get worse.</p>

<p>PMS stops after menopause when you no longer get a period.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the symptoms of PMS?",
      content: `

    <div class="answer"><p>PMS symptoms are different for every woman. You may get physical symptoms, such as bloating or gassiness, or emotional symptoms, such as sadness, or both. Your symptoms may also change throughout your life.</p>

<p><strong>Physical symptoms</strong> of PMS can include:<a href="#references"><sup>12</sup></a></p>

<ul>
	<li>Swollen or tender breasts</li>
	<li><a href="http://www.womenshealth.gov/glossary#constipation" title="glossary">Constipation</a>&nbsp;or <a href="http://www.womenshealth.gov/glossary#diarrhea" title="glossary">diarrhea</a></li>
	<li>Bloating or a gassy feeling</li>
	<li>Cramping</li>
	<li>Headache or backache</li>
	<li>Clumsiness</li>
	<li>Lower tolerance for noise or light</li>
</ul>

<p><strong>Emotional or mental symptoms</strong> of PMS include:<a href="#references"><sup>12</sup></a></p>

<ul>
	<li>Irritability or hostile behavior</li>
	<li>Feeling tired</li>
	<li>Sleep problems (sleeping too much or too little)</li>
	<li>Appetite changes or food cravings</li>
	<li>Trouble with concentration or memory</li>
	<li>Tension or anxiety</li>
	<li>Depression, feelings of sadness, or crying spells</li>
	<li>Mood swings</li>
	<li>Less interest in sex</li>
</ul>

<p>Talk to your doctor or nurse if your symptoms bother you or affect your daily life.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What causes PMS?",
      content: `

    <div class="answer"><p>Researchers do not know exactly what causes PMS. Changes in <a href="http://www.womenshealth.gov/glossary#hormone" title="glossary">hormone</a>&nbsp;levels during the menstrual cycle may play a role.<a href="#references" title="glossary"><sup>13</sup></a> These changing hormone levels may affect some women more than others.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is PMS diagnosed?",
      content: `

    <div class="answer"><p>There is no single test for PMS. Your doctor will talk with you about your symptoms, including when they happen and how much they affect your life.</p>

<p>You probably have PMS if you have symptoms that:<a href="#references" title="references"><sup>12</sup></a></p>

<ul>
	<li>Happen in the five days before your period for at least three menstrual cycles in a row</li>
	<li>End within four days after your period starts</li>
	<li>Keep you from enjoying or doing some of your normal activities</li>
</ul>

<p>Keep track of which PMS symptoms you have and how severe they are for a few months. Write down your symptoms each day on a calendar or with an app on your phone. Take this information with you when you see your doctor.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does PMS affect other health problems? ",
      content: `

    <div class="answer"><p>About half of women who need relief from PMS also have another health problem, which may get worse in the time before their menstrual period.<sup>12</sup> These health problems share many symptoms with PMS and include:</p>

<ul>
	<li><strong><a href="http://www.womenshealth.gov/publications/our-publications/fact-sheet/depression.html" title="depression">Depression</a>&nbsp;</strong><strong>and </strong><a href="http://www.womenshealth.gov/publications/our-publications/fact-sheet/anxiety-disorders.html" title="anxiety disorders"><strong>anxiety disorders</strong></a><strong>.</strong>These are the most common conditions that overlap with PMS. Depression and anxiety symptoms are similar to PMS and may get worse before or during your period.</li>
	<li><strong><a href="http://www.womenshealth.gov/publications/our-publications/fact-sheet/chronic-fatigue-syndrome.html" title="Chronic fatigue syndrome">Myalgic encephalomyelitis/chronic fatigue syndrome (ME/CFS)</a></strong><strong>.&nbsp;</strong>Some women report that their symptoms often get worse right before their period. Research shows that women with ME/CFS may also be more likely to have <a href="/menstrual-cycle/period-problems" title="period problems">heavy menstrual bleeding</a>&nbsp;and early or <a href="/menopause/early-or-premature-menopause" title="menopause: early or premature menopause">premature menopause</a>.<a href="#references"><sup>14</sup></a></li>
	<li><a href="http://www.womenshealth.gov/publications/our-publications/fact-sheet/irritable-bowel-syndrome.html" title="irritable bowel syndrome"><strong>Irritable bowel syndrome (IBS)</strong></a><strong>.</strong> IBS causes cramping, bloating, and gas. Your IBS symptoms may get worse right before your period.</li>
	<li><a href="http://www.womenshealth.gov/publications/our-publications/fact-sheet/interstitial-cystitis.html" title="Bladder pain"><strong>Bladder pain syndrome</strong></a><strong>.&nbsp;</strong>Women with bladder pain syndrome are more likely to have painful cramps during PMS.</li>
</ul>

<p>PMS may also worsen some health problems, such as asthma, allergies, and migraines.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What can I do at home to relieve PMS symptoms? ",
      content: `

    <div class="answer"><p>These tips will help you be healthier in general, and may relieve some of your PMS symptoms.</p>

<ul>
	<li><strong>Get regular aerobic physical activity throughout the month.</strong><a href="#references" title="references"><sup>15</sup></a> Exercise can help with symptoms such as depression, difficulty concentrating, and fatigue.<a href="#references"><sup>16</sup></a></li>
	<li><strong>Choose healthy foods most of the time.</strong><a href="#references"><sup>17</sup></a> Avoiding foods and drinks with caffeine, salt, and sugar in the two weeks before your period may lessen many PMS symptoms. Learn more about <a href="http://womenshealth.gov/fitness-nutrition/index.html">healthy eating for women</a>.</li>
	<li><strong>Get enough sleep.</strong> Try to get about eight hours of sleep each night. Lack of sleep is linked to depression and anxiety and can make PMS symptoms such as moodiness worse.<a href="#references" title="references"><sup>12</sup></a></li>
	<li><strong>Find healthy ways to cope with stress.</strong> Talk to your friends or write in a journal. Some women also find yoga,<a href="#references" title="references"><sup>18</sup></a> massage,<a href="#references" title="references"><sup>19</sup></a> or meditation<a href="#references" title="references"><sup>20</sup></a> helpful.</li>
	<li><strong>Don’t smoke.</strong> In one large study, women who smoked reported more PMS symptoms and worse PMS symptoms than women who did not smoke.<a href="#references" title="references"><sup>21</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What medicines can treat PMS symptoms?",
      content: `

    <div class="answer"><p>Over-the-counter and prescription medicines can help treat some PMS symptoms.</p>

<p><strong>Over-the-counter </strong>pain relievers you can buy in most stores may help lessen physical symptoms, such as cramps, headaches, backaches, and breast tenderness. These include:</p>

<ul>
	<li><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="eye-byu-PROH-fuhn">Ibuprofen</a></li>
	<li><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="nuh-PROK-suhn">Naproxen</a></li>
	<li>Aspirin</li>
</ul>

<p>Some women find that taking an over-the-counter pain reliever right before their period starts lessens the amount of pain and bleeding they have during their period.</p>

<p><strong>Prescription medicines</strong> may help if over-the-counter pain medicines don’t work:<a href="#references" title="references"><sup>22</sup></a></p>

<ul>
	<li><strong>Hormonal </strong><a href="/a-z-topics/birth-control-methods#12" title="birth control ">birth control</a> may help with the physical symptoms of PMS,<a href="#references"><sup>12</sup></a> but it may make other symptoms worse. You may need to try several different types of birth control before you find one that helps your symptoms.</li>
	<li><strong>Antidepressants</strong> can help relieve emotional symptoms of PMS for some women when other medicines don’t help. Selective serotonin reuptake inhibitors, or SSRIs, are the most common type of antidepressant used to treat PMS.<a href="#references" title="references"><sup>23</sup></a></li>
	<li><strong>Diuretics</strong> (“water pills”) may reduce symptoms of bloating and breast tenderness.</li>
	<li><strong>Anti-anxiety medicine</strong> may help reduce feelings of anxiousness.</li>
</ul>

<p>All medicines have risks. Talk to your doctor or nurse about the benefits and risks.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Should I take vitamins or minerals to treat PMS symptoms? ",
      content: `

    <div class="answer"><p>Maybe. Studies show that certain vitamins and minerals may help relieve some PMS symptoms. The Food and Drug Administration (FDA) does not regulate vitamins or mineral and herbal supplements in the same way they regulate medicines. Talk to your doctor before taking any supplement.</p>

<p>Studies have found benefits for:</p>

<ul>
	<li><a href="https://ods.od.nih.gov/factsheets/Calcium-Consumer/" title="Calcium Fact Sheet for Consumers"><strong>Calcium</strong></a><strong>. </strong>Studies show that calcium can help reduce some PMS symptoms, such as fatigue, cravings, and depression.<sup><a href="#references">24</a><a href="#references">,</a><a href="#references" title="references">25</a></sup> Calcium is found in foods such as milk, cheese, and yogurt. Some foods, such as orange juice, cereal, and bread, have calcium added (fortified). You can also take a calcium supplement.</li>
	<li><a href="https://ods.od.nih.gov/factsheets/VitaminB6-Consumer/" title="Vitamin B6 Fact Sheet for Consumers"><strong>Vitamin B6</strong></a><strong>.&nbsp;</strong>Vitamin B6 may help with PMS symptoms, including moodiness, irritability, forgetfulness, bloating, and anxiety. Vitamin B6 can be found in foods such as fish, poultry, potatoes, fruit (except for citrus fruits), and fortified cereals. You can also take it as a dietary supplement.</li>
</ul>

<p>Studies have found mixed results for:</p>

<ul>
	<li><a href="https://ods.od.nih.gov/factsheets/Magnesium-Consumer/" title="Magnesium Fact Sheet for Consumers"><strong>Magnesium</strong></a><strong>.</strong><a href="#references" title="#references"><sup>24</sup></a> Magnesium may help relieve some PMS symptoms, including migraines. If you get <a href="/menstrual-cycle/period-problems" title="period problems">menstrual migraines</a>, talk to your doctor about whether you need more magnesium.<a href="#references" title="#references"><sup>26</sup></a> Magnesium is found in green, leafy vegetables such as spinach, as well as in nuts, whole grains, and fortified cereals. You can also take a supplement.</li>
	<li><strong>Polyunsaturated fatty acids (omega-3 and omega-6).</strong> Studies show that taking a supplement with 1 to 2 grams of polyunsaturated fatty acids may help reduce cramps and other PMS symptoms.<a href="#references" title="references"><sup>27</sup></a> Good sources of polyunsaturated fatty acids include flaxseed, nuts, fish, and green leafy vegetables.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What complementary or alternative medicines may help relieve PMS symptoms?",
      content: `

    <div class="answer"><p>Some women report relief from their PMS symptoms with yoga or meditation. Others say herbal supplements help relieve symptoms. Talk with your doctor or nurse before taking any of these supplements. They may interact with other medicines you take, making your other medicine not work or cause dangerous side effects. The Food and Drug Administration (FDA) does not regulate herbal supplements at the same level that it regulates medicines.</p>

<p>Some research studies show relief from PMS symptoms with these herbal supplements, but other studies do not. Many herbal supplements should not be used with other medicines. Some herbal supplements women use to ease PMS symptoms include:</p>

<ul>
	<li><strong><a href="https://nccih.nih.gov/health/blackcohosh" title="Black Cohosh">Black cohosh</a>.</strong><sup><a href="#references" title="references">28</a>&nbsp;</sup>The underground stems and root of black cohosh are used fresh or dried to make tea, capsules, pills, or liquid extracts. Black cohosh is most often used to help treat menopausal symptoms,<a href="#references" title="references"><sup>29</sup></a> and some women use it to help relieve PMS symptoms.</li>
	<li><a href="https://nccih.nih.gov/health/chasteberry" title="chasteberry"><strong>Chasteberry</strong></a><a href="https://nccih.nih.gov/health/chasteberry" title="chasteberry"> </a><strong>.</strong><sup><a href="#references" title="references">3</a></sup><a href="#references" title="references"><sup>0</sup></a>&nbsp;Dried ripe chasteberry is used to prepare liquid extracts or pills that some women take to relieve PMS symptoms. Women taking hormonal birth control or hormone therapy for menopause symptoms should not take chasteberry.</li>
	<li><a href="https://nccih.nih.gov/health/eveningprimrose" title="evening primose oil "><strong>Evening primrose oil</strong></a><strong>.&nbsp;</strong>The oil is taken from the plant’s seeds and put into capsules. Some women report that the pill helps relieve PMS symptoms, but the research results are mixed.<a href="#references"><sup>29</sup></a></li>
</ul>

<p>Researchers continue to search for new ways to treat PMS. Learn more about current PMS treatment studies at <a href="https://clinicaltrials.gov/" title="clinicaltrials.gov">clinicaltrials.gov</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about PMS?",
      content: `

    <div class="answer"><p>For more information about PMS, call the OWH Helpline at 1-800-994-9662 or check out the following resources from other organizations:</p>

<ul>
	<li><a href="http://www.acog.org/Patients/FAQs/Premenstrual-Syndrome-PMS" title="premenstrual syndrome" class="external-link external-popup" target="_blank">Premenstrual Syndrome (PMS) <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> — Information from the American Congress of Obstetricians and Gynecologists</li>
	<li><a href="http://www.nlm.nih.gov/medlineplus/premenstrualsyndrome.html" title="premenstrual syndrome">Premenstrual Syndrome</a> — Information from the National Library of Medicine</li>
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
	<li>Freeman, E., Halberstadt, M., Sammel, M. (2011). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3017419/#__abstractid464289title" title=" Journal of Women’s Health">Core Symptoms That Discriminate Premenstrual Syndrome</a>.&nbsp;<em>Journal of Women’s Health; </em>20(1): 29–35.</li>
	<li>Dennerstein, L., Lehert, P., Bäckström, T.C., Heinemann, K. (2009). <a href="http://www.ncbi.nlm.nih.gov/pubmed/19723682" title="PubMed.gov: Premenstrual symptoms – severity, duration and typology: an international cross-sectional study">Premenstrual symptoms—severity, duration and typology: an international cross-sectional study</a>.&nbsp;<em>Menopause International</em>; 15: 120–126.</li>
	<li>Winer, S. A., Rapkin, A. J. (2006). <a href="https://www.ncbi.nlm.nih.gov/pubmed/16734317">Premenstrual disorders: prevalence, etiology and impact</a>. <em>Journal of Reproductive Medicine</em>; 51(4 Suppl):339-347.</li>
	<li>Dennerstein, L., Lehert, P., Heinemann, K. (2011). <a href="https://www.ncbi.nlm.nih.gov/pubmed/21903712">Global study of women's experiences of premenstrual symptoms and their effects on daily life</a>.&nbsp;<em>Menopause International;</em> 17: 88–95.</li>
	<li>Steiner, M. (2000). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC1408015/" title="PMC Premenstrual syndrome and premenstrual dyspohoric disorder: guidelines for management">Premenstrual syndrome and premenstrual dysphoric disorder: guidelines for management</a>.&nbsp;<em>Journal of Psychiatry and Neuroscience; </em>25(5): 459–468.</li>
	<li>Potter, J., Bouyer, J., Trussell, J., Moreau, C. (2009). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3196060/" title="Premenstrual Syndrome Prevalence and Fluctuation over Time: Results from a French Population-Based Survey">Premenstrual Syndrome Prevalence and Fluctuation over Time: Results from a French Population Survey</a>.&nbsp;<em>Journal of Women’s Health; </em>18(1): 31–39.</li>
	<li>Gollenberg, A.L., Hediger, M.L., Mumford, S.L., Whitcomb, B.W., Hovey, K.M., Wactawski-Wende, J., et al. (2010). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2875955/" title="perceived stress and severity of perimenstrual symptoms: the biocycle study">Perceived Stress and Severity of Perimenstrual Symptoms: The BioCycle Study.</a>&nbsp;<em>Journal of Women’s Health; </em>19(5): 959-967.</li>
	<li>Endicott, J., Amsterdam, J., Eriksson, E., Frank, E., Freeman, E., Hirschfeld, R. et al. (1999). <a href="https://www.ncbi.nlm.nih.gov/pubmed/10839653/" title="PubMed: Is premenstrual dysphoric disorder a distinct clinical entity?">Is premenstrual dysphoric disorder a distinct clinical entity?</a> <em>Journal&nbsp;of Women's Health &amp; Gender-Based Medicine; </em>8(5): 663-79.</li>
	<li>Richards, M., Rubinow, D.R., Daly, R.C., Schmidt, P.J. (2006). <a href="https://www.ncbi.nlm.nih.gov/pubmed/16390900/" title="PubMed: Premenstrual symptoms and perimenopausal depression">Premenstrual symptoms and perimenopausal depression.</a>&nbsp;<em>American Journal of Psychiatry; </em>163(1): 133-7<em>.</em></li>
	<li>Bloch, M., Schmidt, P.J., Danaceau, M., Murphy, J., Nieman, L., Rubinow, D.R. (2000). <a href="https://www.ncbi.nlm.nih.gov/pubmed/10831472/" title="Effects of gonadal steroids in women with a history of postpartum depression">Effects of gonadal steroids in women with a history of postpartum depression.</a>&nbsp;<em>American Journal of Psychiatry; </em>157(6): 924-30.</li>
	<li>Pinkerton, J.V., Guico-Pabia, C.J., Taylor, H.S. (2010). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3107848/" title="Menstrual cycle-related exacerbation of disease">Menstrual cycle-related exacerbation of disease.</a>&nbsp;<em>American Journal of Obstetrics and Gynecology; </em>202(3): 221-231.</li>
	<li>American College of Obstetricians and Gynecologists. (2015). <a href="http://acog.org/Patients/FAQs/Premenstrual-Syndrome-PMS" title="The American College of Obstetricians and Gynecologists Premenstrual Syndrome FAQs" class="external-link external-popup" target="_blank">Premenstrual Syndrome (PMS) <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>Dickerson, L., Mazyck, P., Hunter, M. (2002). <a href="http://www.aafp.org/afp/2003/0415/p1743.html" title="American Family Physician Premenstrual Syndrome" class="external-link external-popup" target="_blank">Premenstrual Syndrome <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.&nbsp;<em>American Family Physician; </em>67(8): 1743–1752.</li>
	<li>Boneva, R. S., Lin, J. M., &amp; Unger, E. R. (2015). <a href="http://www.ncbi.nlm.nih.gov/pubmed/25647777">Early menopause and other gynecologic risk indicators for chronic fatigue syndrome in women.</a>&nbsp;<em>Menopause, 22,</em> 826–834.</li>
	<li>El-Lithy, A., El-Mazny, A., Sabbour, A., El-Deeb, A. (2014). <a href="http://www.ncbi.nlm.nih.gov/pubmed/25279689" title="PubMed: Effect of aerobic exercise on premenstrual symptoms, haematological and hormonal parameters in young women">Effect of aerobic exercise on premenstrual symptoms, haemotological and hormonal parameters in young women.</a>&nbsp;<em>Journal of Obstetrics and Gynaecology; </em>3: 1–4.</li>
	<li>Aganoff, J. A., Boyle, G. J. (1994). <a href="http://www.pubmed.gov/8027958" title="Aerobic exercise, mood states and menstrual cycle symptoms">Aerobic exercise, mood states and menstrual cycle symptoms</a>.&nbsp;<em>Journal of Psychosomatic Research</em>; 38: 183–92.</li>
	<li>Kaur, G., Gonsalves, L., Thacker, H. L. (2004). <a href="https://www.ncbi.nlm.nih.gov/pubmed/15117171" title="PubMed: Premenstrual dysphoric disorder: a review for the treating practitioner">Premenstrual dysphoric disorder: a review for the treating practitioner</a>.&nbsp;<em>Cleveland Clinic Journal of Medicine</em>; 71: 303–5, 312–3, 317–8.</li>
	<li>Tsai, S.Y. (2016). <a href="http://www.pubmed.gov/27438845" title="PubMed: Effect of Yoga Exercise on Premenstrual Symptoms among Female Employees in Taiwan">Effect of Yoga Exercise on Premenstrual Symptoms among Female Employees in Taiwan</a>.&nbsp;<em>Int J Environ Res Public Health</em>; 13(7).</li>
	<li>Hernandez-Reif, M., Martinez, A., Field, T., Quintero, O., Hart, S., Burman, I. (2000). <a href="https://www.ncbi.nlm.nih.gov/pubmed/10907210" title="PubMed: Premenstrual symptoms are relieved by massage therapy">Premenstrual symptoms are relieved by massage therapy</a>.&nbsp;<em>J Psychosom Obstet Gynaecol</em>; 21(1):9-15.</li>
	<li>Arias, A. J., Steinberg, K., Banga, A., Trestman, R. L. (2006). <a href="http://www.pubmed.gov/17034289" title="Systematic review of the efficacy of meditation techniques as treatments for medical illness">Systematic review of the efficacy of meditation techniques as treatments for medical illness</a>.&nbsp;<em>Journal</em><em> of Alternative and Complementary Medicine</em>; 12(8):817-32.</li>
	<li>Dennerstein, L., Lehert, P., Heinemann, K. (2011). <a href="http://www.ncbi.nlm.nih.gov/pubmed/21903713" title="Global epidemiological study of variation on premenstrual symptoms with age and sociodemographic factors">Global epidemiological study of variation of premenstrual symptoms with age and sociodemographic factors</a>.&nbsp;<em>Menopause International; </em>17(3): 96–101.</li>
	<li>Rapkin A. (2003). <a href="http://www.pubmed.gov/12892989" title="PubMed: A review of treatment of premenstrual syndrome and premenstrual dysphoric disorder">A review of treatment of premenstrual syndrome and premenstrual dysphoric disorder</a>.&nbsp;<em>Psychoneuroendocrinology</em>; Suppl 3:39-53.</li>
	<li>The Medical Letter. (2003). <a href="https://www.ncbi.nlm.nih.gov/pubmed/14627946" title="PubMed: Which SSRI?">Which SSRI?</a>.&nbsp;<em>Med Lett Drugs Ther</em>; 45(1170):93-5.&nbsp;</li>
	<li>National Institute for Health Research, U.K. (2008). <a href="http://www.crd.york.ac.uk/crdweb/ShowRecord.asp?LinkFrom=OAI&amp;ID=12006007749#.VKLNyv8HDQA" title="University of York Centre for Reviews and Dissemination" class="external-link external-popup" target="_blank">Dietary supplements and herbal remedies for premenstrual syndrome (PMS): a systematic research review of the evidence for their efficacy <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.&nbsp;</li>
	<li>Ghanbari, Z., Haghollahi, F., Shariat, M., Foroshani, A.R., Ashrafi, M. (2009). <a href="http://www.ncbi.nlm.nih.gov/pubmed/19574172" title="Effects of calcium supplement therapy in women with premenstrual syndrome">Effects of calcium supplement therapy in women with premenstrual syndrome.</a> <em>Taiwanese Journal of Obstetrics and Gynecology; </em>48(2): 124–129.</li>
	<li>Office of Dietary Supplements. (2016). <a href="http://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/" title="National Institutes of Health&nbsp; Office of Dietary Supplements: Magnesium">Magnesium</a>.&nbsp;</li>
	<li>Rocha Filho, F., Lima, J.C., Pinho Neto, J.S., Montarroyos, U. (2011). <a href="http://www.ncbi.nlm.nih.gov/pubmed/21241460" title="PubMed: Essential fatty acids for premenstrual syndrome and their effect on prolactin and total cholesterol levels: a randomized, double blind, placebo-controlled study">Essential fatty acids for premenstrual syndrome and their effect on prolactin and total cholesterol levels: a randomized, double blind, placebo-controlled study</a>.&nbsp;<em>Reproductive Health; </em>8: 2. doi: 10.1186/1742-4755-8-2.</li>
	<li>Johnson, T. L., Fahey, J. W. (2012). <a href="https://www.ncbi.nlm.nih.gov/pubmed/22504147" title="PubMed: Black cohosh: coming full circle? ">Black cohosh: coming full circle?</a> <em>Journal of Ethnopharmacolgy</em>, 141(3): 775-9. doi: 10.1016/j.jep.2012.03.050.</li>
	<li>Dietz, B. M., Hajirahimkhan, A., Dunlap, T. L., Bolton, J. L. (2016). <a href="https://www.ncbi.nlm.nih.gov/pubmed/27677719" title="Botanicals and their bioactive phytochemicals for women’s health">Botanicals and their bioactive phytochemicals for women’s health</a>. <em>Pharmacological Reviews</em>, 68(4): 1026-1073. doi: <a href="https://doi.org/10.1124/pr.115.010843" title="doi" class="external-link external-popup" target="_blank">https://doi.org/10.1124/pr.115.010843 <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>Girman, A., Lee, R., Kligler, B. (2003). <a href="https://www.ncbi.nlm.nih.gov/pubmed/12748452" title="PubMed: An integrative medicine approach to premenstrual syndrome">An integrative medicine approach to premenstrual syndrome</a>.&nbsp;<em>American Journal of Obstetrics and Gynecology</em>, 188 (5), S56–S65.</li>
</ol>

<div>&nbsp;</div>
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
