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

export function thyroidPage({ navigation, ...rest }) {
  const condName = "Thyroid Disease";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Thyroiddisease.jpg?VersionId=Mw72H2AyOP7I75wQYgtJSBfOcHSZb47O";
  const condDescription =
    "Your thyroid produces thyroid hormone, which controls many activities in your body, including how fast you burn calories and how fast your heart beats. Diseases of the thyroid cause it to make either too much or too little of the hormone. Depending on how much or how little hormone your thyroid makes, you may often feel restless or tired, or you may lose or gain weight. Women are more likely than men to have thyroid diseases, especially right after pregnancy and after menopause.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Thyroiddisease.jpg?VersionId=Mw72H2AyOP7I75wQYgtJSBfOcHSZb47O"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Thyroid disease</h1>  -->
            <p><strong>Your thyroid produces thyroid hormone, </strong>which controls many activities in your body, including how fast you burn calories and how fast your heart beats. Diseases of the thyroid cause it to make either too much or too little of the hormone. Depending on how much or how little hormone your thyroid makes, you may often feel restless or tired, or you may lose or gain weight. Women are more likely than men to have thyroid diseases, especially right after pregnancy and after menopause.</p>

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
      title: "What is the thyroid?",
      content: `

    <div class="answer"><p>Your thyroid is a small butterfly-shaped gland found at the base of your neck, just below your Adam's apple. This gland makes thyroid <a href="/glossary#hormone" title="glossary definition of hormone">hormone</a> that travels in your blood to all parts of your body. The thyroid hormone controls your body's <a href="/glossary#metabolism" title="glossary definition of metabolism">metabolism</a> in many ways, including how fast you burn calories and how fast your heart beats.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do thyroid problems affect women?",
      content: `

    <div class="answer"><p>Women are more likely than men to have thyroid disease. One in eight women will develop thyroid problems during her lifetime.<sup><a href="#references">1</a></sup> In women, thyroid diseases can cause:</p>

<ul>
	<li><strong>Problems with your menstrual period.</strong> Your thyroid helps control your menstrual cycle. Too much or too little thyroid hormone can make your periods very light, heavy, or irregular. Thyroid disease also can cause your periods to stop for several months or longer, a condition called <a href="/publications/our-publications/fact-sheet/menstruation.html" title="Menstruation and the menstrual cycle fact sheet">amenorrhea</a>. If your body's immune system causes thyroid disease, other glands, including your ovaries, may be involved. This can lead to <a href="/menopause/early-premature-menopause/" title="Early menopause (premature menopause)">early menopause</a> (before age 40).</li>
	<li><strong>Problems getting pregnant.</strong> When thyroid disease affects the menstrual cycle, it also affects ovulation. This can make it <a href="#24" title="Can thyroid disease cause problems getting pregnant?">harder for you to get pregnant</a>.</li>
	<li><strong>Problems during pregnancy.</strong> <a href="#25" title="How does thyroid disease affect pregnancy?">Thyroid problems during pregnancy</a> can cause health problems for the mother and the baby.</li>
</ul>

<p>Sometimes, symptoms of thyroid problems are mistaken for <a href="/menopause/" title="Menopause">menopause</a>&nbsp;symptoms. Thyroid disease, especially hypothyroidism, is more likely to develop after menopause.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Are some women more at risk for thyroid disease?",
      content: `

    <div class="answer"><p>Yes. You may want to talk to your doctor about getting tested if you:</p>

<ul>
	<li>Had a thyroid problem in the past</li>
	<li>Had surgery or radiotherapy affecting the thyroid gland</li>
	<li>Have a condition such as <a href="#15" title="What is a goiter?">goiter</a>, <a href="/publications/our-publications/fact-sheet/anemia.html" title="Anemia fact sheet">anemia</a>, or <a href="/publications/our-publications/fact-sheet/diabetes.html" title="Diabetes fact sheet">type 1 diabetes</a></li>
</ul>

<p>Screening for thyroid disease is not recommended for most women.<sup><a href="#references">2</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What kinds of thyroid disease affect women?",
      content: `

    <div class="answer"><p>These thyroid diseases affect more women than men:</p>

<ul>
	<li>Disorders that cause <a href="#5" title="What is hypothyroidism?">hypothyroidism</a></li>
	<li>Disorders that cause <a href="#8" title="What is hyperthyroidism?">hyperthyroidism</a></li>
	<li><a href="#11" title="What is thyroiditis?">Thyroiditis</a>, especially <a href="#l" title="What is postpartum thyroiditis?">postpartum thyroiditis</a></li>
	<li><a href="#15" title="What is a goiter?">goiter</a></li>
	<li><a href="#17" title="What are thyroid nodules?">Thyroid nodules</a></li>
	<li><a href="#20" title="What is thyroid cancer?">Thyroid cancer</a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is hypothyroidism?",
      content: `

    <div class="answer"><p><span class="pronounce-blue pronounce-blueJS"><a href="#">Hypothyroidism</a> <span class="sound-out-blue sound-out-bluejs" style="display: none;"> (hy-poh-THY-roi-diz-uhm)</span></span> is when your thyroid does not make enough thyroid hormones. It is also called underactive thyroid. This slows down many of your body's functions, like your metabolism.</p>

<p>The most common cause of hypothyroidism in the United States is <a href="/publications/our-publications/fact-sheet/hashimoto-disease.html" title="Hashimoto's disease fact sheet">Hashimoto's disease</a>. In people with Hashimoto's disease, the immune system mistakenly attacks the thyroid. This attack damages the thyroid so that it does not make enough hormones.</p>

<p>Hypothyroidism also can be caused by:</p>

<ul>
	<li>Hyperthyroidism treatment (<a href="#10" title="How is hyperthyroidism treated?">radioiodine</a>)</li>
	<li>Radiation treatment of certain cancers</li>
	<li>Thyroid removal</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the signs and symptoms of hypothyroidism?",
      content: `

    <div class="answer"><p>Symptoms of hypothyroidism develop slowly, often over several years. At first, you may feel tired and sluggish. Later, you may develop other signs and symptoms of a slowed-down metabolism, including:</p>

<ul>
	<li>Feeling cold when other people do not</li>
	<li>Constipation</li>
	<li>Muscle weakness</li>
	<li>Weight gain, even though you are not eating more food</li>
	<li>Joint or muscle pain</li>
	<li>Feeling sad or depressed</li>
	<li>Feeling very tired</li>
	<li>Pale, dry skin</li>
	<li>Dry, thinning hair</li>
	<li>Slow heart rate</li>
	<li>Less sweating than usual</li>
	<li>A puffy face</li>
	<li>A hoarse voice</li>
	<li>More than usual menstrual bleeding</li>
</ul>

<p>You also may have high LDL or "bad" cholesterol, which can raise your risk for <a href="/publications/our-publications/fact-sheet/heart-disease.html" title="Heart disease fact sheet">heart disease</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is hypothyroidism treated?",
      content: `

    <div class="answer"><p>Hypothyroidism is treated with medicine that gives your body the thyroid hormone it needs to work normally. The most common medicines are man-made forms of the hormone that your thyroid makes. You will likely need to take thyroid hormone pills for the rest of your life. When you take the pills as your doctor tells you to, the pills are very safe.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is hyperthyroidism?",
      content: `

    <div class="answer"><p><span class="pronounce-blue pronounce-blueJS"><a href="#">Hyperthyroidism,</a> <span class="sound-out-blue sound-out-bluejs" style="display: none;"> (hy-pur-THY-roi-diz-uhm)</span></span> or overactive thyroid, causes your thyroid to make more thyroid hormone than your body needs. This speeds up many of your body's functions, like your metabolism and heart rate.</p>

<p>The most common cause of hyperthyroidism is <a href="/publications/our-publications/fact-sheet/graves-disease.html" title="Graves' disease fact sheet">Graves' disease</a>. Graves' disease is a problem with the immune system.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the signs and symptoms of hyperthyroidism?",
      content: `

    <div class="answer"><p>At first, you might not notice the signs or symptoms of hyperthyroidism. Symptoms usually begin slowly. But, over time, a faster metabolism can cause symptoms such as:</p>

<ul>
	<li>Weight loss, even if you eat the same or more food (most but not all people lose weight)</li>
	<li>Eating more than usual</li>
	<li>Rapid or irregular heartbeat or pounding of your heart</li>
	<li>Feeling nervous or anxious</li>
	<li>Feeling irritable</li>
	<li>Trouble sleeping</li>
	<li>Trembling in your hands and fingers</li>
	<li>Increased sweating</li>
	<li>Feeling hot when other people do not</li>
	<li>Muscle weakness</li>
	<li>Diarrhea or more bowel movements than normal</li>
	<li>Fewer and lighter menstrual periods than normal</li>
	<li>Changes in your eyes that can include bulging of the eyes, redness, or irritation</li>
</ul>

<p>Hyperthyroidism raises your risk for <a href="/publications/our-publications/fact-sheet/osteoporosis.html" title="Osteoporosis fact sheet">osteoporosis</a>, a condition that causes weak bones that break easily. In fact, hyperthyroidism might affect your bones before you have any of the other symptoms of the condition. This is especially true of women who have gone through menopause or who are already at high risk of osteoporosis.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is hyperthyroidism treated?",
      content: `

    <div class="answer"><p>Your doctor's choice of treatment will depend on your symptoms and the cause of your hyperthyroidism. Treatments include:</p>

<ul>
	<li><strong>Medicine.</strong>

	<ul>
		<li><strong>Antithyroid medicines</strong> block your thyroid from making new thyroid hormone. These drugs do not cause lasting damage to the thyroid.</li>
		<li><strong>Beta-blockers</strong> block the effects of thyroid hormone on your body. These medicines can be helpful in slowing your heart rate and treating other symptoms until one of the other forms of treatment can take effect. Beta-blockers do not reduce the amount of thyroid hormones that are made.</li>
	</ul>
	</li>
	<li><strong>Radioiodine.</strong> This treatment kills the thyroid cells that make thyroid hormones. Often, this causes permanent <a href="#7" title="What is hypothyroidism?">hypothyroidism</a>.</li>
	<li><strong>Surgery.</strong> Thyroid surgery removes most or all of the thyroid. This may cause permanent hypothyroidism.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is thyroiditis?",
      content: `

    <div class="answer"><p><span class="pronounce-blue pronounce-blueJS"><a href="#">Thyroiditis</a> <span class="sound-out-blue sound-out-bluejs" style="display: none;"> (thy-roi-DY-tiss)</span></span> is inflammation of the thyroid. It happens when the body's immune system makes <a href="/glossary#antibodies" title="glossary definition of antibodies">antibodies</a> that attack the thyroid.</p>

<p>Causes of thyroiditis include:</p>

<ul>
	<li><a href="/publications/our-publications/fact-sheet/autoimmune-diseases.html" title="Autoimmune diseases fact sheet">Autoimmune diseases</a>, like type 1 <a href="/glossary#diabetes" title="glossary definition of diabetes">diabetes</a> and rheumatoid arthritis</li>
	<li>Genetics</li>
	<li>Viral or bacterial infection</li>
	<li>Certain types of medicines</li>
</ul>

<p>Two common types of thyroiditis are <a href="/publications/our-publications/fact-sheet/hashimoto-disease.html" title="Hashimoto's disease fact sheet">Hashimoto's disease</a> and <a href="#12" title="What is postpartum thyroiditis?">postpartum thyroiditis</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is postpartum thyroiditis?",
      content: `

    <div class="answer"><p>Postpartum thyroiditis, or inflammation of the thyroid after giving birth, affects 10% of women.<sup><a href="#references">3</a></sup> It often goes undiagnosed because symptoms are much like the "baby blues" that may follow delivery. Women with postpartum thyroiditis may feel very tired and moody.</p>

<p>Postpartum thyroiditis typically happens in two phases, though not everyone with the condition goes through both phases:<sup><a href="#references">4</a></sup></p>

<ul>
	<li>The first phase starts 1 to 4 months after giving birth and typically last 1 to 2 months. In this phase, you may have <a href="#9" title="What are the signs and symptoms of hyperthyroidism?">signs and symptoms of hyperthyroidism</a> because the damaged thyroid leaks thyroid hormones out into the bloodstream.</li>
	<li>The second phase starts about 4 to 8 months after delivery and lasts 6 to 12 months. In this phase, you may have <a href="#6" title="What are the signs and symptoms of hypothyroidism?">signs and symptoms of hypothyroidism</a> because the thyroid has lost most of its hormones or because the immune attack is over and the thyroid may recover later.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who is at risk for postpartum thyroiditis?",
      content: `

    <div class="answer"><p>Your immune system may cause postpartum thyroiditis. If you have an autoimmune disease, like type 1 <a href="/glossary#diabetes" title="glossary definition of diabetes">diabetes</a>, your risk is higher.</p>

<p>Your risk is also higher if:<sup><a href="#references">5</a></sup></p>

<ul>
	<li>Have a personal history or family history of thyroid disorders</li>
	<li>Had postpartum thyroiditis after a previous pregnancy</li>
	<li>Have chronic <a href="/publications/our-publications/fact-sheet/viral-hepatitis.html" title="Viral hepatitis fact sheet">viral hepatitis</a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is postpartum thyroiditis treated?",
      content: `

    <div class="answer"><p>Treatment for postpartum thyroiditis depends on the phase of the disease and what symptoms you have. For example, if you get symptoms of hyperthyroidism in the first phase, your treatment may include medicines to slow down the heart rate.</p>

<p>In most women who have postpartum thyroiditis, the thyroid returns to normal within 12 to 18 months after symptoms start. But if you have a history of postpartum thyroiditis, your risk is higher for developing permanent hypothyroidism within 5 to 10 years.<sup><a href="#references">5</a></sup></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is a goiter?",
      content: `

    <div class="answer"><p>A goiter is an unusually enlarged thyroid gland. It may happen only for a short time and may go away on its own without treatment. Or it could be a symptom of another thyroid disease that requires treatment. goiter is more common in women than in men and especially in women before menopause.<sup><a href="#references">6</a></sup></p>

<p>Some common causes of goiter include:</p>

<ul>
	<li><a href="/publications/our-publications/fact-sheet/hashimoto-disease.html" title="Hashimoto's disease fact sheet">Hashimoto's disease</a></li>
	<li><a href="/publications/our-publications/fact-sheet/graves-disease.html" title="Graves' disease fact sheet">Graves' disease</a></li>
	<li><a href="#17" title="What are thyroid nodules?">Thyroid nodules</a></li>
	<li><a href="#11" title="What is thyroiditis?">Thyroiditis</a></li>
	<li><a href="#20" title="What is thyroid cancer?">Thyroid cancer</a></li>
</ul>

<p>Usually, the only symptom of a goiter is a swelling in your neck. It may be large enough that you can see it or feel the lump with your hand. A very large goiter can also cause a tight feeling in your throat, coughing, or problems swallowing or breathing.</p>

<p>Your doctor will do <a href="#23" title="How are thyroid diseases diagnosed?">tests</a> to see if it is caused by another thyroid disease.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is goiter treated?",
      content: `

    <div class="answer"><p>You may not need treatment if your thyroid works normally and the symptoms do not bother you.</p>

<p>If you do need treatment, medicine should make the thyroid shrink back to near normal size. You may need surgery to take out part or most of the thyroid.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are thyroid nodules?",
      content: `

    <div class="answer"><p>A thyroid <span class="pronounce-blue pronounce-blueJS"><a href="#">nodule</a> <span class="sound-out-blue sound-out-bluejs" style="display: none;"> (NAHD-yool)</span></span> is a swelling in one section of the thyroid gland. The nodule may be solid or filled with fluid or blood. You may have just one thyroid nodule or many.</p>

<p>Thyroid nodules are common and affect four times as many women as men.<sup><a href="#references">7</a></sup> Researchers do not know why nodules form in otherwise normal thyroids.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are the signs and symptoms of thyroid nodules?",
      content: `

    <div class="answer"><p>Most thyroid nodules do not cause symptoms and are not cancerous.<sup><a href="#references">8</a></sup> Some thyroid nodules make too much thyroid hormone, causing hyperthyroidism. Sometimes, nodules grow so big that they cause problems with swallowing or breathing. About one-third of nodules are found by the patient, another third by the doctor, and the other third through an imaging test of the neck.</p>

<p>You can sometimes see or feel a thyroid nodule yourself. Stand in front of a mirror and raise your chin slightly. Look for a bump on either side of your windpipe below your Adam's apple. If the bump moves up and down when you swallow, it may be a thyroid nodule. Ask your doctor to look at it.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How are thyroid nodules treated?",
      content: `

    <div class="answer"><p>Treatment depends on the type of nodule or nodules that you have. Treatments include:</p>

<ul>
	<li><strong>Watchful waiting.</strong> If your nodule is not cancerous, your doctor may decide to just watch your condition. You will get regular physical exams, blood tests, and perhaps thyroid ultrasound tests. If your nodule does not change, you may not need further treatment.</li>
	<li><strong>Surgery.</strong> Surgery may be necessary to take out nodules that may be cancerous or large nodules that cause problems breathing or swallowing.</li>
	<li><strong>Radioiodine.</strong> This type of treatment is helpful if you have nodules that make too much thyroid hormone. Radioiodine causes nodules to shrink and make smaller amounts of thyroid hormone.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What is thyroid cancer?",
      content: `

    <div class="answer"><p>Thyroid cancer happens when cancer cells form from the tissues of the thyroid gland.</p>

<p>Most people with thyroid cancer have a thyroid nodule that does not cause any symptoms. If you do have symptoms, you may have swelling or a lump in your neck. The lump may cause problems swallowing. Some people get a hoarse voice.</p>

<p>To tell if the lump or nodule is cancerous, your doctor will order <a href="#23" title="How are thyroid diseases diagnosed?">certain tests</a>. Most thyroid nodules are not cancerous.</p>

<p>For more information about thyroid cancer, visit the National Cancer Institute's <a href="http://www.cancer.gov/cancertopics/pdq/treatment/thyroid/Patient/page1" title="Thyroid Cancer Treatment (PDQ®) - National Cancer Institute">thyroid cancer</a> page.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who is at risk for thyroid cancer?",
      content: `

    <div class="answer"><p>About three times as many women get thyroid cancer as men. The number of women with thyroid cancer is also going up. By 2020, the number of women with thyroid cancer is expected to double, from 34,000 women to more than 70,000 women.<sup><a href="#references">9</a></sup></p>

<p>Thyroid cancer is more common in women who:<sup><a href="#references">10</a></sup></p>

<ul>
	<li>Are between the ages of 25 and 65</li>
	<li>Had radiation therapy to the head or neck, especially in childhood, to treat cancer</li>
	<li>Have a history of <a href="#15" title="What is a goiter?">goiter</a></li>
	<li>Have a family history of thyroid cancer</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How is thyroid cancer treated?",
      content: `

    <div class="answer"><p>The main treatment for thyroid cancer is surgery to take out the whole thyroid gland or as much of it as can be safely removed. Surgery alone can cure thyroid cancer if the cancer is small and has not yet spread to lymph nodes.</p>

<p>Your doctor may also use radioiodine therapy after surgery. Radioiodine therapy destroys any thyroid cancer cells that were not removed during surgery or that have spread to other parts of the body.</p>

<p>Your doctor may also talk with you about other treatments for thyroid cancer. Learn more about <a href="http://www.cancer.gov/cancertopics/pdq/treatment/thyroid/Patient/page4" title="Thyroid Cancer Treatment (PDQ®) - National Cancer Institute">thyroid cancer treatments</a> at the National Cancer Institute.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How are thyroid diseases diagnosed?",
      content: `

    <div class="answer"><p>It can be hard to tell if you have a thyroid disease. The symptoms are the same as many other health problems. Your doctor may start by asking about your health history and if any of your family members has had thyroid disease. Your doctor may also give you a physical exam and check your neck for thyroid nodules.</p>

<p>Depending on your symptoms, your doctor may also do other tests, such as:</p>

<ul>
	<li><strong>Blood tests.</strong> Testing the level of thyroid stimulating hormone (TSH) in your blood can help your doctor figure out if your thyroid is overactive or underactive. TSH tells your thyroid to make thyroid hormones. Depending on the results, your doctor might do another blood test to check levels of one or both thyroid hormones in your blood.</li>
	<li><strong>Radioactive iodine uptake test.</strong> For this test, you swallow a liquid or capsule that holds a small dose of radioactive iodine (radioiodine). The radioiodine collects in your thyroid because your thyroid uses iodine to make thyroid hormone.</li>
</ul>

<p>High levels of radioiodine mean that your thyroid makes too much of the thyroid hormone. Low levels mean that your thyroid does not make enough thyroid hormone.</p>

<ul>
	<li><strong>Thyroid scan.</strong> A thyroid scan uses the same radioiodine dose that was given by mouth for your uptake test. You lie on a table while a special camera makes an image of your thyroid on a computer screen. This test shows the pattern of iodine uptake in the thyroid.

	<p>Three types of nodules show up in this test:</p>

	<ul>
		<li><strong>"Hot" nodules.</strong> These thyroid nodules show up on the scan more brightly than normal thyroid nodules. They take up more radioiodine than the surrounding thyroid. They also make more hormone than normal thyroids. Less than 1% of these nodules are cancerous.<sup><a href="#references">11</a></sup></li>
		<li><strong>"Warm" nodules.</strong> These nodules take up the same amount of radioiodine as normal thyroid and make a normal amount of hormones. Only 5% to 8% of these nodules are cancerous.<sup><a href="#references">11</a></sup></li>
		<li><strong>"Cold" nodules.</strong> These nodules show up as as dark areas on the scan. They do not take up much radioiodine and do not make thyroid hormones. Many nodules are cold. Up to 15% of these nodules are cancerous.<sup><a href="#references">11</a></sup><br>
		&nbsp;</li>
	</ul>
	</li>
	<li><strong>Thyroid ultrasound.</strong> The thyroid ultrasound uses sound waves to make a picture of the thyroid on a computer screen. This test can help your doctor tell what type of nodule you have and how large it is. You may need more thyroid ultrasounds over time to see if your nodule is growing or shrinking.</li>
</ul>

<p>Ultrasound may also be helpful in finding thyroid cancer, although by itself it cannot be used to diagnose thyroid cancer.</p>

<ul>
	<li><strong>Thyroid fine needle biopsy.</strong> This test tells whether thyroid nodules have normal cells in them. Your doctor may numb an area on your neck. Your doctor will then stick a very thin needle into the thyroid to take out some cells and fluid. A doctor will then look at the cells under a microscope to see if they are normal. Cells that are not normal could mean thyroid cancer.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Can thyroid disease cause problems getting pregnant?",
      content: `

    <div class="answer"><p>Both hyperthyroidism and hypothyroidism can make it harder for you to get <a href="/pregnancy/index.html" title="Pregnancy">pregnant</a>. This is because problems with the thyroid hormone can upset the balance of the hormones that cause ovulation. Hypothyroidism can also cause your body to make more prolactin, the hormone that tells your body to make breastmilk. Too much prolactin can prevent <a href="/pregnancy/before-you-get-pregnant/trying-to-conceive.html" title="Trying to conceive">ovulation</a>.</p>

<p>Thyroid problems can also affect the <a href="/publications/our-publications/fact-sheet/menstruation.html" title="Menstruation and the menstrual cycle fact sheet">menstrual cycle</a>. Your periods may be heavier or irregular, or you may not have any periods at all for several months or longer (called amenorrhea).</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How does thyroid disease affect pregnancy?",
      content: `

    <div class="answer"><p>Pregnancy-related hormones raise the level of thyroid hormones in the blood. Thyroid hormones are necessary for the baby's brain development while in the womb.</p>

<p>It can be harder to diagnose thyroid problems during pregnancy because of the change in hormone levels that normally happen during pregnancy. But it is especially important to check for problems before getting pregnant and during pregnancy. Uncontrolled hyperthyroidism and hypothyroidism can cause problems for both mother and baby.</p>

<p><strong>Hyperthyroidism</strong> that is not treated with medicine during pregnancy can cause:<sup><a href="#references">4</a></sup></p>

<ul>
	<li>Premature birth (birth of the baby before 39 to 40 weeks, or full-term)</li>
	<li><span class="pronounce-blue pronounce-blueJS"><a href="/glossary#preeclampsia">Preeclampsia,</a> <span class="sound-out-blue sound-out-bluejs" style="display: none;"> (pre-ee-CLAMP-see-uh)</span></span> a serious condition starting after 20 weeks of pregnancy. Preeclampsia causes high blood pressure and problems with the kidneys and other organs. The only cure for preeclampsia is childbirth.</li>
	<li>Thyroid storm (sudden, severe worsening of symptoms)</li>
	<li>Fast heart rate in the newborn, which can lead to heart failure, poor weight gain, or an enlarged thyroid that can make it hard to breathe</li>
	<li>Low birth weight (smaller than 5 pounds)</li>
	<li>Miscarriage</li>
</ul>

<p><strong>Hypothyroidism</strong> that is not treated with medicine during pregnancy can cause:<sup><a href="#references">4</a></sup></p>

<ul>
	<li>Anemia (lower than normal number of healthy red blood cells)</li>
	<li>Preeclampsia</li>
	<li>Low birth weight (smaller than 5 pounds)</li>
	<li>Miscarriage</li>
	<li>Stillbirth</li>
	<li>Problems with the baby's growth and brain development</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Did we answer your question about thyroid diseases?",
      content: `

    <div class="answer"><p>For more information about thyroid diseases, call the OWH Helpline at 1-800-994-9662 or contact the following organizations:</p>

<ul>
	<li><strong><a href="http://www.cancer.gov/" title="Comprehensive Cancer Information - National Cancer Institute">National Cancer Institute (NCI), NIH</a></strong><br>
	<strong>Phone Number:</strong> 800-422-6237</li>
	<li><strong><a href="http://www.endocrine.niddk.nih.gov/" onclick="trackOutboundLink(this, 'Outbound Links', 'http://www.endocrine.niddk.nih.gov/'); return false;" title="Home Page - National Endocrine and Metabolic Diseases Information Service">National Endocrine and Metabolic Diseases Information Service, NIDDK, NIH</a></strong><br>
	<strong>Phone Number:</strong> 800-860-8747</li>
	<li><strong><a href="http://www.thyroid.org/" onclick="trackOutboundLink(this, 'Outbound Links', 'http://www.thyroid.org/'); return false;" title="American Thyroid Association | ATA" class="external-link external-popup" target="_blank">American Thyroid Association <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong></li>
	<li><strong><a href="http://www.hormone.org/" onclick="trackOutboundLink(this, 'Outbound Links', 'http://www.hormone.org/'); return false;" title="Home | Hormone Health Network" class="external-link external-popup" target="_blank">Hormone Health Network <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	<strong>Phone Number:</strong> 800-467-6663</li>
	<li><strong><a href="http://www.thyca.org/" onclick="trackOutboundLink(this, 'Outbound Links', 'http://www.thyca.org/'); return false;" title="ThyCa: Thyroid Cancer Survivors' Association, Inc." class="external-link external-popup" target="_blank">Thyroid Cancer Survivors' Association, Inc. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong><br>
	<strong>Phone Number:</strong> 877-588-7904</li>
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
	<li>American Thyroid Association (2014). <a href="http://www.thyroid.org/media-main/about-hypothyroidism/" title="General Information/Press Room | American Thyroid Association" class="external-link external-popup" target="_blank">Prevalence and Impact of Thyroid Disease <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li>U.S. Preventive Services Task Force. (2004). <a href="http://www.uspreventiveservicestaskforce.org/3rduspstf/thyroid/thyrrs.htm" title="Recommendation Summary - US Preventive Services Task Force" class="external-link external-popup" target="_blank">Screening for Thyroid Disease <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li>Balovich, M., Amino, N., Barbour, L.A. (2007). <a href="http://www.thyroidresearchjournal.com/content/pdf/1756-6614-6-2.pdf" title="Managing thyroid dysfunction in selected special situations" class="external-link external-popup" target="_blank">Management of thyroid dysfunction during pregnancy and postpartum: an Endocrine Society Clinical Practice Guideline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;(PDF, 351 KB). <em>J Clin Endocrinol Metab;</em> 92:S1–S47.</li>
	<li>National Institute of Diabetes and Digestive and Kidney Diseases. (2012). <a href="https://www.niddk.nih.gov/health-information/health-topics/endocrine/pregnancy-and-thyroid-disease/Pages/fact-sheet.aspx" title="Pregnancy and Thyroid Disease">Pregnancy and Thyroid Disease</a>.</li>
	<li>De Groot, L., Abalovich, M., Alexander, E., Amino, N., Barbour, L., et al.&nbsp;(2012). <a href="https://academic.oup.com/jcem/article/97/8/2543/2823170" class="external-link external-popup" target="_blank">Management of Thyroid Dysfunction during Pregnancy and Postpartum: An Endocrine Society Clinical Practice Guideline <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;&nbsp;</li>
	<li>Vanderpump, M.P., Tunbridge, M., French, J.M., Appleton, D., Bates, D., et al. (1995). <a href="http://onlinelibrary.wiley.com/doi/10.1111/j.1365-2265.1995.tb01894.x/abstract" title="The incidence of thyroid disorders in the community: a twenty-year follow-up of the Whickham Survey - Vanderpump - 1995 - Clinical Endocrinology -  Wiley Online Library" class="external-link external-popup" target="_blank">The incidence of thyroid disorders in the community: a twenty-year follow-up of the Whickham Survey <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>Clin Endocrinol (Oxf);</em> 43(1):55–68. Accessed from: Vanderpump, M. (2011). <a href="http://bmb.oxfordjournals.org/content/99/1/39.full" title="The epidemiology of thyroid disease" class="external-link external-popup" target="_blank">The epidemiology of thyroid disease <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>. <em>British Medical Bulletin;</em> 99(1): 39–51.</li>
	<li>Mazzaferri EL. (1993). Management of a solitary thyroid nodule. <em>N Engl J Med.;</em> 328:553–9.</li>
	<li>American Thyroid Association. (2014). <a href="http://www.thyroid.org/what-are-thyroid-nodules/" title="What Are Thyroid Nodules | American Thyroid Association" class="external-link external-popup" target="_blank">Thyroid nodules <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>.</li>
	<li>Rahib, L., Smith, B. D., Aizenberg, R., Rosenzweig, A. B., Fleshman, J. M., Matrisian, L. M. (2014). <a href="http://cancerres.aacrjournals.org/content/74/11/2913.full.pdf" title="Projecting Cancer Incidence and Deaths to 2030: The Unexpected Burden of Thyroid, Liver, and Pancreas Cancers in the United States" class="external-link external-popup" target="_blank">Projecting Cancer incidence and Deaths to 2030: The Unexpected Burden of Thyroid, Liver, and Pancreas Cancers in the United States <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a>&nbsp;(PDF, 268 KB). <em>Cancer Research;</em> 74(11): 2913–2921.</li>
	<li>National Cancer Institute. (2014). <a href="http://www.cancer.gov/cancertopics/pdq/treatment/thyroid/Patient/page1" title="Thyroid Cancer Treatment (PDQ®) - National Cancer Institute">Thyroid Cancer</a>.</li>
	<li>Bomeli, S.R., LeBeau, S.O., Ferris, R.L. (2010). <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2879398/" title="Evaluation of a thyroid nodule">Evaluation of a Thyroid Nodule</a>. <em>Otolarnygol Clin North Am;</em> 43(2): 229–238.</li>
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
