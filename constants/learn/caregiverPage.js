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

export function caregiverPage({ navigation, ...rest }) {
  const condName = "Caregiver Stress";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Caregiverstress.jpg?VersionId=gpVZDs9DYRmP2aigx3yYA_kXY08W7MMX";
  const condDescription =
    "Caregivers care for someone with an illness, injury, or disability. Caregiving can be rewarding, but it can also be challenging. Stress from caregiving is common. Women especially are at risk for the harmful health effects of caregiver stress. These health problems may include depression or anxiety. There are ways to manage caregiver stress.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Caregiverstress.jpg?VersionId=gpVZDs9DYRmP2aigx3yYA_kXY08W7MMX"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Caregiver stress</h1>  -->
            <p><strong>Caregivers care for someone with an illness, injury, or disability.</strong> Caregiving can be rewarding, but it can also be challenging. Stress from caregiving is common. Women especially are at risk for the harmful health effects of caregiver stress. These health problems may include depression or anxiety. There are ways to manage caregiver stress.</p>

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
      title: "What is a caregiver?",
      content: `

    <div class="answer"><p>A caregiver is anyone who provides care for another person in need, such as a child, an aging parent, a husband or wife, a relative, friend, or neighbor. A caregiver also may be a paid professional who provides care in the home or at a place that is not the person's home.</p>

<p>People who are not paid to give care are called informal caregivers or family caregivers. This fact sheet focuses on family caregivers who provide care on a regular basis for a loved one with an injury, an illness such as <a href="/glossary#dementia" title="glossary - Dementia">dementia</a>, or a disability. The family caregiver often has to manage the person's daily life. This can include helping with daily tasks like bathing, eating, or taking medicine. It can also include arranging activities and making health and financial decisions.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who are caregivers?",
      content: `

    <div class="answer"><p>Most Americans will be informal caregivers at some point during their lives. A 2012 survey found that 36% of Americans provided unpaid care to another adult with an illness or disability in the past year.<sup><a href="#references">1</a></sup> That percentage is expected to go up as the proportion of people in the United States who are elderly increases. Also, changes in health care mean family caregivers now provide more home-based medical care. Nearly half of family caregivers in the survey said they give injections or manage medicines daily.</p>

<p>Also, most caregivers are women.<sup><a href="#references">2</a></sup> And nearly three in five family caregivers have paid jobs in addition to their caregiving.<sup><a href="#references">2</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is caregiver stress?",
      content: `

    <div class="answer"><p>Caregiver stress is due to the emotional and physical strain of caregiving. Caregivers report much higher levels of stress than people who are not caregivers. Many caregivers are providing help or are "on call" almost all day. Sometimes, this means there is little time for work or other family members or friends. Some caregivers may feel overwhelmed by the amount of care their aging, sick or disabled family member needs.<sup><a href="#references" title="View Source">3</a></sup></p>

<p>Although caregiving can be very challenging, it also has its rewards. It feels good to be able to care for a loved one. Spending time together can give new meaning to your relationship.</p>

<p>Remember that you need to take care of yourself to be able to care for your loved one. Learn some ways to <a href="#7">manage caregiver stress</a> and find <a href="#8">resources</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets caregiver stress?",
      content: `

    <div class="answer"><p>Anyone can get caregiver stress, but more women caregivers say they have stress and other health problems than men caregivers.<sup><a href="#references">2</a></sup> And some women have a higher risk for health problems from caregiver stress, including those who:</p>

<ul>
	<li><strong>Care for a loved one who needs constant medical care and supervision.</strong> Caregivers of people with <a href="/glossary#Alzheimes_disease" title="glossary - Alzheimers Disease">Alzheimer's disease</a> or <a href="/glossary#dementia" title="glossary - Dementia">dementia</a> are more likely to have health problems and to be depressed than caregivers of people with conditions that do not require constant care.<sup><a href="#references">4</a></sup></li>
	<li><strong>Care for a spouse.</strong> Women who are caregivers of spouses are more likely to have high blood pressure, diabetes, and high cholesterol and are twice as likely to have heart disease as women who provide care for others, such as parents or children.<sup><a href="#references">5</a></sup></li>
</ul>

<p>Women caregivers also may be less likely to get regular screenings, and they may not get enough sleep or regular physical activity.<sup><a href="#references">3</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the signs and symptoms of caregiver stress?",
      content: `

    <div class="answer"><p>Caregiver stress can take many forms. For instance, you may feel frustrated and angry one minute and helpless the next. You may make mistakes when giving medicines. Or you may turn to unhealthy behaviors like smoking or drinking too much alcohol.<sup><a href="#references">6,7</a></sup></p>

<p>Other signs and symptoms include:</p>

<ul>
	<li>Feeling overwhelmed</li>
	<li>Feeling alone, isolated, or deserted by others</li>
	<li>Sleeping too much or too little</li>
	<li>Gaining or losing a lot of weight</li>
	<li>Feeling tired most of the time</li>
	<li>Losing interest in activities you used to enjoy</li>
	<li>Becoming easily irritated or angered</li>
	<li>Feeling worried or sad often</li>
	<li>Having headaches or body aches often</li>
</ul>

<p>Talk to your doctor about your symptoms and <a href="#7">ways to relieve stress</a>. Also, let others give you a break. Reach out to family, friends, or a <a href="http://www.eldercare.gov/Eldercare.NET/Public/Index.aspx" title="Eldercare Locator">local resource</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does caregiver stress affect my health?",
      content: `

    <div class="answer"><p>Some stress can be good for you, as it helps you cope and respond to a change or challenge. But long-term stress of any kind, including caregiver stress, can lead to serious health problems.</p>

<p>Some of the ways stress affects caregivers include:</p>

<ul>
	<li><strong>Depression and anxiety. </strong>Women who are caregivers are more likely than men to develop symptoms of <a href="https://www.womenshealth.gov/files/documents/fact-sheet-anxiety-disorders.pdf" title="Anxiety Disorders fact sheet">anxiety</a> and <a href="/publications/our-publications/fact-sheet/depression.html" title="Depression fact sheet">depression</a>.<sup><a href="#references">8</a></sup> Anxiety and depression also raise your risk for other health problems, such as <a href="/heart-health-stroke/index.html" title="Heart Health and Stroke">heart disease</a> and <a href="/heart-health-stroke/index.html" title="Heart Health and Stroke">stroke</a>.</li>
	<li><strong>Weak immune system.</strong> Stressed caregivers may have weaker immune systems than noncaregivers and spend more days sick with the cold or flu. <sup><a href="#references">9</a></sup> A weak immune system can also make vaccines such as flu shots less effective. Also, it may take longer to recover from surgery.</li>
	<li><strong>Obesity</strong>. Stress causes weight gain in more women than men.<sup><a href="#references">10</a></sup> Obesity raises your risk for other health problems, including heart disease, stroke, and <a href="/publications/our-publications/fact-sheet/diabetes.html" title="Diabetes fact sheet">diabetes</a>.</li>
	<li><strong>Higher risk for chronic diseases.</strong> High levels of stress, especially when combined with depression, can raise your risk for health problems, such as heart disease, cancer, diabetes, or arthritis.<sup><a href="#references">9</a></sup></li>
	<li><strong>Problems with short-term memory or paying attention.</strong><sup><a href="#references">11</a></sup> Caregivers of spouses with Alzheimer's disease are at higher risk for problems with short-term memory and focusing.</li>
</ul>

<p>Caregivers also report <a href="#5">symptoms of stress</a> more often than people who are not caregivers.<sup><a href="#references">3</a></sup> Learn more about how <a href="/publications/our-publications/fact-sheet/stress-your-health.html">stress affects women's health</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What can I do to prevent or relieve caregiver stress?",
      content: `

    <div class="answer"><p>Taking steps to relieve caregiver stress helps prevent health problems. Also, taking care of yourself helps you take better care of your loved one and enjoy the rewards of caregiving.</p>

<p>Here are some tips to help you prevent or manage caregiver stress:</p>

<ul>
	<li><strong>Learn ways to better help your loved one.</strong> Some hospitals offer classes that can teach you how to care for someone with an injury or illness. To find these classes, ask your doctor or call your local <a href="http://www.n4a.org/about-n4a/?fa=aaa-title-VI" title="n4a | National Association of Area Agencies on Aging" class="external-link external-popup" target="_blank">Area Agency on Aging <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li><strong>Find caregiving resources in <a href="http://www.eldercare.gov/Eldercare.NET/Public/Index.aspx" title="Eldercare locator">your community</a> to help you.</strong> Many communities have adult daycare services or respite services to give primary caregivers a break from their caregiving duties.</li>
	<li><strong>Ask for and accept help.</strong> Make a list of ways others can help you. Let helpers choose what they would like to do. For instance, someone might sit with the person you care for while you do an errand. Someone else might pick up groceries for you.</li>
	<li><strong>Join a support group for caregivers.</strong> You can find a general <a href="https://caregiver.org/support-groups" title="Support Groups | Family Caregiver Alliance" class="external-link external-popup" target="_blank">caregiver support group <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a> or a group with caregivers who care for someone with the same illness or disability as your loved one. You can share stories, pick up caregiving tips, and get support from others who face the same challenges as you do.</li>
	<li><strong>Get organized.</strong> Make to-do lists, and set a daily routine.</li>
	<li><strong>Take time for yourself. </strong>Stay in touch with family and friends, and do things you enjoy with your loved ones.</li>
	<li><strong>Take care of your health.</strong> Find time to be physically active on most days of the week, choose healthy foods, and get enough sleep.</li>
	<li><strong>See your doctor for regular checkups.</strong> Make sure to tell your doctor or nurse you are a caregiver. Also, tell her about any symptoms of depression or sickness you may have.</li>
</ul>

<p>If you work outside the home and are feeling overwhelmed, consider taking a break from your job. Under the federal <a href="http://www.dol.gov/whd/fmla/" title="Family and Medical Leave Act - Wage and Hour Division (WHD) - U.S. Department of Labor">Family and Medical Leave Act</a>, eligible employees can take up to 12 weeks of unpaid leave per year to care for relatives. Ask your human resources office about your options.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What caregiving services can I find in my community?",
      content: `

    <div class="answer"><p>Caregiving services include:</p>

<ul>
	<li>Meal delivery</li>
	<li>Home health care services, such as nursing or physical therapy</li>
	<li>Nonmedical home care services, such as housekeeping, cooking, or companionship</li>
	<li>Making changes to your home, such as installing ramps or modified bathtubs</li>
	<li>Legal and financial counseling</li>
	<li>Respite care, which is substitute caregiving (someone comes to your home, or you may take your loved one to an adult day care center or day hospital)</li>
</ul>

<p>The <a href="http://www.eldercare.gov/Eldercare.NET/Public/Index.aspx" title="Eldercare locator">National Eldercare Locator</a>, a service of the U.S. Administration on Aging, can help you find caregiving services in your area. You also can contact your local <a href="http://www.n4a.org/about-n4a/?fa=aaa-title-VI" title="n4a | National Association of Area Agencies on Aging" class="external-link external-popup" target="_blank">Area Agency on Aging <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "How can I pay for home health care and other caregiving services? ",
      content: `

    <div class="answer"><p>Medicare, Medicaid, and private insurance companies will cover some costs of home health care. Other costs you will have to pay for yourself.</p>

<ul>
	<li>If the person who needs care has insurance, check with the person's insurance provider to find out what's included in the plan.</li>
	<li>If the person who needs care has Medicare, find out <a href="http://www.medicare.gov/coverage/home-health-services.html">what home health services are covered</a>.</li>
	<li>If the person who needs care has Medicaid, coverage of home health services vary between states. <a href="https://www.medicaid.gov/about-us/contact-us/contact-state-page.html" title="Contact Your State With Questions | Medicaid.gov">Check with your state's Medicaid program</a> to learn what the benefits are.</li>
</ul>

<p>If you or the person who needs caregiving also needs health insurance, learn about services covered under Marketplace plans at <a href="http://www.healthcare.gov">HealthCare.gov</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about caregiver stress?",
      content: `

    <div class="answer"><p>For more information about caregiver stress, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><a href="http://www.cms.hhs.gov/"><strong>Centers for Medicare and Medicaid Services (CMS), HHS</strong></a><br>
	<strong>Phone Number:</strong> 800-633-4227</li>
	<li><a href="http://www.eldercare.gov/"><strong>Eldercare Locator, Administration on Aging, HHS</strong></a><br>
	<strong>Phone Number:</strong> 800-677-1116</li>
	<li><a href="http://www.nia.nih.gov/health/publication?body_value=caregiver+health&amp;=Search"><strong>National Institute on Aging (NIA), NIH, HHS</strong></a><br>
	<strong>Phone Number:</strong> 800-222-2225</li>
	<li><a href="http://www.caregiver.org/" class="external-link external-popup" target="_blank"><strong>Family Caregiver Alliance</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone Number:</strong> 800-445-8106</li>
	<li><a href="http://www.caregiving.org/" class="external-link external-popup" target="_blank"><strong>National Alliance for Caregiving</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone Number: </strong>301-718-8444</li>
	<li><a href="http://www.nfcacares.org/" class="external-link external-popup" target="_blank"><strong>National Family Caregivers Association</strong> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a><br>
	<strong>Phone Number:</strong> 800-896-3650</li>
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
	<li>Pew Research Center. (2013). <a href="http://www.pewresearch.org/fact-tank/2013/07/18/as-population-ages-more-americans-becoming-caregivers/" class="external-link external-popup" target="_blank">As population ages, more Americans becoming caregivers <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>FactTank: News in the Numbers.</em></li>
	<li>National Alliance for Caregiving, in collaboration with AARP. (2015). <a href="http://www.caregiving.org/wp-content/uploads/2015/05/2015_CaregivingintheUS_Final-Report-June-4_WEB.pdf" class="external-link external-popup" target="_blank"><em>Caregiving in the U.S., 2015</em> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li>American Psychological Association. (2012). <a href="https://www.apa.org/news/press/releases/stress/2011/final-2011.pdf" class="external-link external-popup" target="_blank"><em>Stress in America: Our Health at Risk</em> <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. APA: Washington, DC.</li>
	<li>Pinquart, M., &amp; Sorensen, S. (2003). <a href="http://www.ncbi.nlm.nih.gov/pubmed/12825775">Differences between caregivers and noncaregivers in psychological health and physical health: A meta-analysis</a>. <em>Psychology and Aging,</em> <em>18</em>(2), 250–267.</li>
	<li>Lee, S., Colditz, G. A., Berkman, L. F., &amp; Kawachi, I. (2003). <a href="http://www.ncbi.nlm.nih.gov/pubmed/12568816">Caregiving and risk of coronary heart disease in U.S. women: A prospective study</a>. <em>American Journal of Preventive Medicine,</em> <em>24</em>(2), 113–119.</li>
	<li>Lokk, J. (2008). <a href="http://www.ncbi.nlm.nih.gov/pubmed/18385627?dopt=Abstract&amp;holding=f1000,f1000m,isrctn">Caregiver strain in Parkinson's disease and the impact of disease duration</a>. <em>European Journal of Physical and Rehabilitation Medicine, 44</em>(1), 39–45.</li>
	<li>Rivera, H. R. (2009). <a href="http://www.medscape.com/viewarticle/704042" class="external-link external-popup" target="_blank">Depression symptoms in cancer caregivers <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Clinical Journal of Oncology Nursing, 13</em>(2), 195—202</li>
	<li>Mahoney, R., Regan, C., Katona, C., &amp; Livingston, G. (2005). <a href="http://www.ncbi.nlm.nih.gov/pubmed/16166409">Anxiety and depression in family caregivers of people with Alzheimer's disease: the LASER-AD study</a>. <em>American Journal of Geriatric Psychiatry, 13</em>(9), 795–801.</li>
	<li>Godbout, J. P., &amp; Glaser, R. (2006). <a href="http://www.ncbi.nlm.nih.gov/pubmed/18040814">Stress-induced immune dysregulation: Implications for wound healing, infectious disease, and cancer</a>. <em>Journal of Neuroimmune Pharmacology, 1</em>(4), 421–427.</li>
	<li>Udo, T., Grilo, C. M., &amp; McKee, S. A. (2014). <a href="http://www.ncbi.nlm.nih.gov/pubmed/25204986">Gender differences in the impact of stressful life events on changes in body mass index</a>. <em>Preventive Medicine. </em>Epub ahead of print.</li>
	<li>Vitaliano, P. P., Echeverria, D., Yi, J., Phillips, P. E., Young, H., &amp; Siegler, I. C. (2005). <a href="http://www.ncbi.nlm.nih.gov/pubmed/16248700">Psychophysiological mediators of caregiver stress and differential cognitive decline</a>. <em>Psychology and Aging, 20</em>(3), 402–411.</li>
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
