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

export function autoimPage({ navigation, ...rest }) {
  const condName = "Autoimmune Diseases";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Autoimmunediseases.jpg?VersionId=mv.qLFcqioiT4k6HK5TtWdlWt29.YgNv";
  const condDescription =
    "Our bodies have an immune system, which is a complex network of special cells and organs that defends the body from germs and other foreign invaders. At the core of the immune system is the ability to tell the difference between self and nonself: what's you and what's foreign. A flaw can make the body unable to tell the difference between self and nonself. When this happens, the body makes autoantibodies (AW-toh-AN-teye-bah-deez) that attack normal cells by mistake. At the same time, special cells called regulatory T cells fail to do their job of keeping the immune system in line. The result is a misguided attack on your own body. This causes the damage we know as autoimmune disease. The body parts that are affected depend on the type of autoimmune disease. There are more than 80 known types.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
<!--   <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Autoimmunediseases.jpg?VersionId=mv.qLFcqioiT4k6HK5TtWdlWt29.YgNv"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Autoimmune diseases</h1>  -->
            <p><strong>Our bodies have an immune system, </strong>which is a complex network of special cells and organs that defends the body from germs and other foreign invaders. Many diseases of the immune system, also known as autoimmune diseases, are more common in women than in men.&nbsp;Learn about the different types of autoimmune diseases that affect women.</p>

                    </div>
    </div>

<div style="text-align: right; padding: 1rem 0px;"><button class="usa-button">Expand All</button></div><div class="qa-wrapper">
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
    
			</div>
			</div>
				</div>
			  </div>      
</article>
`; //  this is html
  const condQA = [
    {
      title: "What are autoimmune diseases?",
      content: `

    <div class="answer"><p>Our bodies have an immune system, which is a complex network of special cells and organs that defends the body from germs and other foreign invaders. At the core of the immune system is the ability to tell the difference between self and nonself: what's you and what's foreign. A flaw can make the body unable to tell the difference between self and nonself. When this happens, the body makes&nbsp;<a href="/glossary#autoantibodies">autoantibodies</a>&nbsp;(AW-toh-AN-teye-bah-deez) that attack normal cells by mistake. At the same time, special cells called regulatory T cells fail to do their job of keeping the immune system in line. The result is a misguided attack on your own body. This causes the damage we know as autoimmune disease. The body parts that are affected depend on the type of autoimmune disease. There are more than 80 known types.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How common are autoimmune diseases?",
      content: `

    <div class="answer"><p>Overall, autoimmune diseases are common, affecting more than 23.5 million Americans. They are a leading cause of death and disability. Some autoimmune diseases are rare, while others, such as Hashimoto's disease, affect many people.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Who gets autoimmune diseases?",
      content: `

    <div class="answer"><p>Autoimmune diseases can affect anyone. Yet certain people are at greater risk, including:</p>

<ul>
	<li><strong>Women of childbearing age</strong>&nbsp;— More women than men have autoimmune diseases, which often start during their childbearing years.</li>
	<li><strong>People with a family history</strong>&nbsp;— Some autoimmune diseases run in families, such as lupus and multiple sclerosis. It is also common for different types of autoimmune diseases to affect different members of a single family. Inheriting certain genes can make it more likely to get an autoimmune disease. But a combination of genes and other factors may trigger the disease to start.</li>
	<li><strong>People who are around certain things in the environment</strong>&nbsp;— Certain events or environmental exposures may cause some autoimmune diseases, or make them worse. Sunlight, chemicals called solvents, and viral and bacterial infections are linked to many autoimmune diseases.</li>
	<li><strong>People of certain races or ethnic backgrounds</strong>&nbsp;— Some autoimmune diseases are more common or affect certain groups of people more severely. For instance, type 1 diabetes is more common in white people. Lupus is most severe for African-American and Hispanic people.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What autoimmune diseases affect women, and what are their symptoms? ",
      content: `

    <div class="answer"><p>The diseases listed here either are more common in women than men or affect many women and men. They are listed in alphabetical order.</p>

<p>Although each disease is unique, many share hallmark symptoms, such as fatigue, dizziness, and low-grade fever. For many autoimmune diseases, symptoms come and go, or can be mild sometimes and severe at others. When symptoms go away for a while, it's called remission.&nbsp;<a href="#12">Flares</a>&nbsp;are the sudden and severe onset of symptoms.</p>
<!-- mp_trans_remove_start -->

<table class="chart" summary="This table of common autoimmune diseases shows different diseases (row headings) along with their symptoms and the tests used for diagnosis (column headings)">
	<caption align="Top">Types of autoimmune diseases and their symptoms</caption>
	<thead>
		<tr>
			<th>
			<p align="center"><strong>Disease</strong></p>
			</th>
			<th>
			<p align="center"><strong>Symptoms</strong></p>
			</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
			<p><strong>Alopecia areata</strong> (Al-uh-PEE-shuh AR-ee-AYT-uh)</p>

			<p>The immune system attacks hair follicles (the structures from which hair grows). It usually does not threaten health, but it can greatly affect the way a person looks.</p>
			</td>
			<td>
			<ul>
				<li>Patchy hair loss on the scalp, face, or other areas of your body</li>
			</ul>

			<p align="center">&nbsp;</p>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Antiphospholipid</strong> (an-teye-FOSS-foh-lip-ihd) <strong>antibody syndrome (aPL)</strong></p>

			<p>A disease that causes problems in the inner lining of blood vessels resulting in blood clots in arteries or veins.</p>
			</td>
			<td>
			<ul>
				<li>Blood clots in veins or arteries</li>
				<li>Multiple miscarriages</li>
				<li>Lacy, net-like red rash on the wrists and knees</li>
			</ul>

			<p align="center">&nbsp;</p>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Autoimmune hepatitis</strong></p>

			<p>The immune system attacks and destroys the liver cells. This can lead to scarring and hardening of the liver, and possibly liver failure.</p>
			</td>
			<td>
			<ul>
				<li>Fatigue</li>
				<li>Enlarged liver</li>
				<li>Yellowing of the skin or whites of eyes</li>
				<li>Itchy skin</li>
				<li>Joint pain</li>
				<li>Stomach pain or upset</li>
			</ul>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Celiac disease</strong></p>

			<p>A disease in which people can't tolerate gluten, a substance found in wheat, rye, and barley, and also some medicines. When people with celiac disease eat foods or use products that have gluten, the immune system responds by damaging the lining of the small intestines.</p>
			</td>
			<td>
			<ul>
				<li>Abdominal bloating and pain</li>
				<li>Diarrhea or constipation</li>
				<li>Weight loss or weight gain</li>
				<li>Fatigue</li>
				<li>Missed menstrual periods</li>
				<li>Itchy skin rash</li>
				<li>Infertility or miscarriages</li>
			</ul>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong><a href="/publications/our-publications/fact-sheet/diabetes.html">Diabetes</a> type 1</strong></p>

			<p>A disease in which your immune system attacks the cells that make insulin, a hormone needed to control blood sugar levels. As a result, your body cannot make insulin. Without insulin, too much sugar stays in your blood. High blood sugar can hurt the eyes, kidneys, nerves, and gums and teeth. But the most serious problem caused by diabetes is heart disease.</p>
			</td>
			<td>
			<ul>
				<li>Being very thirsty</li>
				<li>Urinating often</li>
				<li>Feeling very hungry or tired</li>
				<li>Losing weight without trying</li>
				<li>Having sores that heal slowly</li>
				<li>Dry, itchy skin</li>
				<li>Losing the feeling in your feet or having tingling in your feet</li>
				<li>Having blurry eyesight</li>
			</ul>
			</td>
		</tr>
		<tr>
			<td>
			<p><a href="/publications/our-publications/fact-sheet/graves-disease.html"><strong>Graves' disease</strong></a> (overactive thyroid)</p>

			<p>A disease that causes the <a href="/glossary#thyroid">thyroid</a> to make too much thyroid hormone.</p>
			</td>
			<td scope="row">
			<ul>
				<li><a href="/glossary#insomnia">Insomnia</a></li>
				<li>Irritability</li>
				<li>Weight loss</li>
				<li>Heat sensitivity</li>
				<li>Sweating</li>
				<li>Fine brittle hair</li>
				<li>Muscle weakness</li>
				<li>Light menstrual periods</li>
				<li>Bulging eyes</li>
				<li>Shaky hands</li>
				<li>Sometimes there are no symptoms</li>
			</ul>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Guillain-Barre</strong> (GEE-yahn bah-RAY) <strong>syndrome</strong></p>

			<p>The immune system attacks the nerves that connect your brain and spinal cord with the rest of your body. Damage to the nerves makes it hard for them to transmit signals. As a result, the muscles have trouble responding to the brain.</p>
			</td>
			<td>
			<ul>
				<li>Weakness or tingling feeling in the legs that might spread to the upper body</li>
				<li>Paralysis in severe cases</li>
			</ul>

			<p>Symptoms often progress relatively quickly, over a period of days or weeks, and often occur on both sides of the body.</p>
			</td>
		</tr>
		<tr>
			<td>
			<p><a href="/publications/our-publications/fact-sheet/hashimoto-disease.html"><strong>Hashimoto's</strong> (hah-shee-MOH-tohz) <strong>disease</strong></a> (underactive thyroid)</p>

			<p>A disease that causes the thyroid to not make enough thyroid hormone.</p>
			</td>
			<td>
			<ul>
				<li>Fatigue</li>
				<li>Weakness</li>
				<li>Weight gain</li>
				<li>Sensitivity to cold</li>
				<li>Muscle aches and stiff joints</li>
				<li>Facial swelling</li>
				<li>Constipation</li>
			</ul>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Hemolytic anemia</strong> (HEE-moh-lit-ihk uh-NEE-mee-uh)</p>

			<p>The immune system destroys the red blood cells. Yet the body can't make new red blood cells fast enough to meet the body's needs. As a result, your body does not get the oxygen it needs to function well, and your heart must work harder to move oxygen-rich blood throughout the body.</p>
			</td>
			<td>
			<ul>
				<li>Fatigue</li>
				<li>Shortness of breath</li>
				<li>Dizziness</li>
				<li>Headache</li>
				<li>Cold hands or feet</li>
				<li>Paleness</li>
				<li>Yellowish skin or whites of eyes</li>
				<li>Heart problems, including heart failure</li>
			</ul>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Idiopathic thrombocytopenic purpura</strong> (id-ee-oh-PATH-ihk throm-boh-seye-toh-PEE-nik PUR-pur-uh) <strong>(ITP)</strong></p>

			<p>A disease in which the immune system destroys blood platelets, which are needed for blood to clot.</p>
			</td>
			<td>
			<ul>
				<li>Very heavy menstrual period</li>
				<li>Tiny purple or red dots on the skin that might look like a rash.</li>
				<li>Easy bruising</li>
				<li>Nosebleed or bleeding in the mouth</li>
			</ul>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong><a href="/a-z-topics/inflammatory-bowel-disease">Inflammatory bowel disease</a> (IBD)</strong></p>

			<p>A disease that causes chronic inflammation of the digestive tract. Crohn's (krohnz) disease and ulcerative colitis (UHL-sur-uh-tiv koh-LEYE-tuhss) are the most common forms of IBD.</p>
			</td>
			<td>
			<ul>
				<li>Abdominal pain</li>
				<li>Diarrhea, which may be bloody</li>
			</ul>

			<p>Some people also have:</p>

			<ul>
				<li>Rectal bleeding</li>
				<li>Fever</li>
				<li>Weight loss</li>
				<li>Fatigue</li>
				<li>Mouth ulcers (in Crohn's disease)</li>
				<li>Painful or difficult bowel movements (in ulcerative colitis)</li>
			</ul>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Inflammatory myopathies</strong> (meye-OP-uh-theez)</p>

			<p>A group of diseases that involve muscle inflammation and muscle weakness. <strong>Polymyositis</strong> (pol-ee-meye-uh-SYT-uhss) and <strong>dermatomyositis</strong> (dur-muh-toh-meye-uh-SYT-uhss) are 2 types more common in women than men.</p>
			</td>
			<td>
			<ul>
				<li>Slow but progressive muscle weakness beginning in the muscles closest to the trunk of the body. Polymyositis affects muscles involved with making movement on both sides of the body. With dermatomyositis, a skin rash comes before or at the same time as muscle weakness.</li>
			</ul>

			<p>May also have:</p>

			<ul>
				<li>Fatigue after walking or standing</li>
				<li>Tripping or falling</li>
				<li>Difficulty swallowing or breathing</li>
			</ul>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Multiple sclerosis</strong> (MUHL-tip-uhl sklur-OH-suhss) <strong>(MS)</strong></p>

			<p>A disease in which the immune system attacks the protective coating around the nerves. The damage affects the brain and spinal cord.</p>
			</td>
			<td>
			<ul>
				<li>Weakness and trouble with coordination, balance, speaking, and walking</li>
				<li>Paralysis</li>
				<li>Tremors</li>
				<li>Numbness and tingling feeling in arms, legs, hands, and feet</li>
				<li>Symptoms vary because the location and extent of each attack vary</li>
			</ul>
			</td>
		</tr>
		<tr>
			<td>
			<p><a href="/publications/our-publications/fact-sheet/myasthenia-gravis.html"><strong>Myasthenia gravis</strong></a> (meye-uhss-THEEN-ee-uh GRAV-uhss) <strong>(MG)</strong></p>

			<p>A disease in which the immune system attacks the nerves and muscles throughout the body.</p>
			</td>
			<td>
			<ul>
				<li>Double vision, trouble keeping a steady gaze, and drooping eyelids</li>
				<li>Trouble swallowing, with frequent gagging or choking</li>
				<li>Weakness or paralysis</li>
				<li>Muscles that work better after rest</li>
				<li>Drooping head</li>
				<li>Trouble climbing stairs or lifting things</li>
				<li>Trouble talking</li>
			</ul>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Primary biliary cirrhosis</strong> (BIL-ee-air-ee sur-ROH-suhss)</p>

			<p>The immune system slowly destroys the liver's bile ducts. Bile is a substance made in the liver. It travels through the bile ducts to help with digestion. When the ducts are destroyed, the bile builds up in the liver and hurts it. The damage causes the liver to harden and scar, and eventually stop working.</p>
			</td>
			<td>
			<ul>
				<li>Fatigue</li>
				<li>Itchy skin</li>
				<li>Dry eyes and mouth</li>
				<li>Yellowing of skin and whites of eyes</li>
			</ul>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Psoriasis</strong> (suh-REYE-uh-suhss)</p>

			<p>A disease that causes new skin cells that grow deep in your skin to rise too fast and pile up on the skin surface.</p>
			</td>
			<td>
			<ul>
				<li>Thick red patches, covered with scales, usually appearing on the head, elbows, and knees</li>
				<li>Itching and pain, which can make it hard to sleep, walk, and care for yourself</li>
			</ul>

			<p>May have:</p>

			<ul>
				<li>A form of arthritis that often affects the joints and the ends of the fingers and toes. Back pain can occur if the spine is involved.</li>
			</ul>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Rheumatoid arthritis</strong> (ROO-muh-toid ar-THREYE-tuhss)</p>

			<p>A disease in which the immune system attacks the lining of the joints throughout the body.</p>
			</td>
			<td>
			<ul>
				<li>Painful, stiff, swollen, and deformed joints</li>
				<li>Reduced movement and function</li>
			</ul>

			<p>May have:</p>

			<ul>
				<li>Fatigue</li>
				<li>Fever</li>
				<li>Weight loss</li>
				<li>Eye inflammation</li>
				<li>Lung disease</li>
				<li>Lumps of tissue under the skin, often the elbows</li>
				<li><a href="/a-z-topics/iron-deficiency-anemia">Anemia</a></li>
			</ul>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Scleroderma</strong> (sklair-oh-DUR-muh)</p>

			<p>A disease causing abnormal growth of connective tissue in the skin and blood vessels.</p>
			</td>
			<td>
			<ul>
				<li>Fingers and toes that turn white, red, or blue in response to heat and cold</li>
				<li>Pain, stiffness, and swelling of fingers and joints</li>
				<li>Thickening of the skin</li>
				<li>Skin that looks shiny on the hands and forearm</li>
				<li>Tight and mask-like facial skin</li>
				<li>Sores on the fingers or toes</li>
				<li>Trouble swallowing</li>
				<li>Weight loss</li>
				<li>Diarrhea or constipation</li>
				<li>Shortness of breath</li>
			</ul>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Sjögren's</strong> (SHOH-grins) <strong>syndrome</strong></p>

			<p>A disease in which the immune system targets the glands that make moisture, such as tears and saliva.</p>
			</td>
			<td>
			<ul>
				<li>Dry eyes or eyes that itch</li>
				<li>Dryness of the mouth, which can cause sores</li>
				<li>Trouble swallowing</li>
				<li>Loss of sense of taste</li>
				<li>Severe dental cavities</li>
				<li>Hoarse voice</li>
				<li>Fatigue</li>
				<li>Joint swelling or pain</li>
				<li>Swollen glands</li>
				<li>Cloudy eyes</li>
			</ul>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Systemic <a href="/publications/our-publications/fact-sheet/lupus.html">lupus</a> erythematosus</strong> (LOO-puhss ur-ih-thee-muh-TOH-suhss)</p>

			<p>A disease that can damage the joints, skin, kidneys, heart, lungs, and other parts of the body. Also called SLE or lupus.</p>
			</td>
			<td>
			<ul>
				<li>Fever</li>
				<li>Weight loss</li>
				<li>Hair loss</li>
				<li>Mouth sores</li>
				<li>Fatigue</li>
				<li>"Butterfly" rash across the nose and cheeks</li>
				<li>Rashes on other parts of the body</li>
				<li>Painful or swollen joints and muscle pain</li>
				<li>Sensitivity to the sun</li>
				<li>Chest pain</li>
				<li>Headache, dizziness, seizure, memory problems, or change in behavior</li>
			</ul>
			</td>
		</tr>
		<tr>
			<td>
			<p><strong>Vitiligo</strong> (vit-ihl-EYE-goh)</p>

			<p>The immune system destroys the cells that give your skin its color. It also can affect the tissue inside your mouth and nose.</p>
			</td>
			<td>
			<ul>
				<li>White patches on areas exposed to the sun, or on armpits, genitals, and rectum</li>
				<li>Hair turns gray early</li>
				<li>Loss of color inside your mouth</li>
			</ul>
			</td>
		</tr>
	</tbody>
</table>
<!-- mp_trans_remove_end --><!-- mp_trans_add 
														<table class="chart" summary="This table of common autoimmune diseases shows different diseases (row headings) along with their symptoms and the tests used for diagnosis (column headings)"><caption align="Top">Types of autoimmune diseases and their symptoms</caption>
<thead>
<tr>
<th >
<p align="center"><strong>Disease</strong></p>
</th>
<th >
<p align="center"><strong>Symptoms</strong></p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p><strong>Alopecia areata</strong> (Al-uh-PEE-shuh AR-ee-AYT-uh)</p>
<p>			The immune system attacks hair follicles (the structures from which hair grows). It usually does not threaten health, but it can greatly affect the way a person looks.</td>
<td>
<ul>
<li>Patchy hair loss on the scalp, face, or other areas of your body</li>
</ul>
<p align="center"> </p>
</td>
</tr>
<tr>
<td>
<p><strong>Hemolytic anemia</strong> (HEE-moh-lit-ihk uh-NEE-mee-uh)</p>
<p>			The immune system destroys the red blood cells. Yet the body can't make new red blood cells fast enough to meet the body's needs. As a result, your body does not get the oxygen it needs to function well, and your heart must work harder to move oxygen-rich blood throughout the body.</td>
<td>
<ul>
<li>Fatigue</li>
<li>Shortness of breath</li>
<li>Dizziness</li>
<li>Headache</li>
<li>Cold hands or feet</li>
<li>Paleness</li>
<li>Yellowish skin or whites of eyes</li>
<li>Heart problems, including heart failure</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Rheumatoid arthritis</strong> (ROO-muh-toid ar-THREYE-tuhss)</p>
<p>			A disease in which the immune system attacks the lining of the joints throughout the body.</td>
<td>
<ul>
<li>Painful, stiff, swollen, and deformed joints</li>
<li>Reduced movement and function</li>
</ul>
<p>			May have:</p>
<ul>
<li>Fatigue</li>
<li>Fever</li>
<li>Weight loss</li>
<li>Eye inflammation</li>
<li>Lung disease</li>
<li>Lumps of tissue under the skin, often the elbows</li>
<li><a href="/a-z-topics/iron-deficiency-anemia">Anemia</a></li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Primary biliary cirrhosis</strong> (BIL-ee-air-ee sur-ROH-suhss)</p>
<p>			The immune system slowly destroys the liver's bile ducts. Bile is a substance made in the liver. It travels through the bile ducts to help with digestion. When the ducts are destroyed, the bile builds up in the liver and hurts it. The damage causes the liver to harden and scar, and eventually stop working.</td>
<td>
<ul>
<li>Fatigue</li>
<li>Itchy skin</li>
<li>Dry eyes and mouth</li>
<li>Yellowing of skin and whites of eyes</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Diabetes type 1</strong></p>
<p>			A disease in which your immune system attacks the cells that make insulin, a hormone needed to control blood sugar levels. As a result, your body cannot make insulin. Without insulin, too much sugar stays in your blood. Too high blood sugar can hurt the eyes, kidneys, nerves, and gums and teeth. But the most serious problem caused by diabetes is heart disease.</td>
<td>
<ul>
<li>Being very thirsty</li>
<li>Urinating often</li>
<li>Feeling very hungry or tired</li>
<li>Losing weight without trying</li>
<li>Having sores that heal slowly</li>
<li>Dry, itchy skin</li>
<li>Losing the feeling in your feet or having tingling in your feet</li>
<li>Having blurry eyesight</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Celiac disease</strong></p>
<p>			A disease in which people can't tolerate gluten, a substance found in wheat, rye, and barley, and also some medicines. When people with celiac disease eat foods or use products that have gluten, the immune system responds by damaging the lining of the small intestines.</td>
<td>
<ul>
<li>Abdominal bloating and pain</li>
<li>Diarrhea or constipation</li>
<li>Weight loss or weight gain</li>
<li>Fatigue</li>
<li>Missed menstrual periods</li>
<li>Itchy skin rash</li>
<li>Infertility or miscarriages</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Graves' disease</strong> (overactive thyroid)</p>
<p>			A disease that causes the <a href="/glossary#thyroid">thyroid</a> to make too much thyroid hormone.</td>
<td scope="row">
<ul>
<li><a href="/glossary#insomnia">Insomnia</a></li>
<li>Irritability</li>
<li>Weight loss</li>
<li>Heat sensitivity</li>
<li>Sweating</li>
<li>Fine brittle hair</li>
<li>Muscle weakness</li>
<li>Light menstrual periods</li>
<li>Bulging eyes</li>
<li>Shaky hands</li>
<li>Sometimes there are no symptoms</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Hashimoto's</strong> (hah-shee-MOH-tohz) <strong>disease</strong> (underactive thyroid)</p>
<p>			A disease that causes the thyroid to not make enough thyroid hormone.</td>
<td>
<ul>
<li>Fatigue</li>
<li>Weakness</li>
<li>Weight gain</li>
<li>Sensitivity to cold</li>
<li>Muscle aches and stiff joints</li>
<li>Facial swelling</li>
<li>Constipation</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Inflammatory bowel disease (IBD)</strong></p>
<p>			A disease that causes chronic inflammation of the digestive tract. Crohn's (krohnz) disease and ulcerative colitis (UHL-sur-uh-tiv koh-LEYE-tuhss) are the most common forms of IBD.</td>
<td>
<ul>
<li>Abdominal pain</li>
<li>Diarrhea, which may be bloody</li>
</ul>
<p>			Some people also have:</p>
<ul>
<li>Rectal bleeding</li>
<li>Fever</li>
<li>Weight loss</li>
<li>Fatigue</li>
<li>Mouth ulcers (in Crohn's disease)</li>
<li>Painful or difficult bowel movements (in ulcerative colitis)</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Scleroderma</strong> (sklair-oh-DUR-muh)</p>
<p>			A disease causing abnormal growth of connective tissue in the skin and blood vessels.</td>
<td>
<ul>
<li>Fingers and toes that turn white, red, or blue in response to heat and cold</li>
<li>Pain, stiffness, and swelling of fingers and joints</li>
<li>Thickening of the skin</li>
<li>Skin that looks shiny on the hands and forearm</li>
<li>Tight and mask-like facial skin</li>
<li>Sores on the fingers or toes</li>
<li>Trouble swallowing</li>
<li>Weight loss</li>
<li>Diarrhea or constipation</li>
<li>Shortness of breath</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Multiple sclerosis</strong> (MUHL-tip-uhl sklur-OH-suhss) <strong>(MS)</strong></p>
<p>			A disease in which the immune system attacks the protective coating around the nerves. The damage affects the brain and spinal cord.</td>
<td>
<ul>
<li>Weakness and trouble with coordination, balance, speaking, and walking</li>
<li>Paralysis</li>
<li>Tremors</li>
<li>Numbness and tingling feeling in arms, legs, hands, and feet</li>
<li>Symptoms vary because the location and extent of each attack vary</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Autoimmune hepatitis</strong></p>
<p>			The immune system attacks and destroys the liver cells. This can lead to scarring and hardening of the liver, and possibly liver failure.</td>
<td>
<ul>
<li>Fatigue</li>
<li>Enlarged liver</li>
<li>Yellowing of the skin or whites of eyes</li>
<li>Itchy skin</li>
<li>Joint pain</li>
<li>Stomach pain or upset</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Systemic lupus erythematosus</strong> (LOO-puhss ur-ih-thee-muh-TOH-suhss)</p>
<p>			A disease that can damage the joints, skin, kidneys, heart, lungs, and other parts of the body. Also called SLE or lupus.</td>
<td>
<ul>
<li>Fever</li>
<li>Weight loss</li>
<li>Hair loss</li>
<li>Mouth sores</li>
<li>Fatigue</li>
<li>"Butterfly" rash across the nose and cheeks</li>
<li>Rashes on other parts of the body</li>
<li>Painful or swollen joints and muscle pain</li>
<li>Sensitivity to the sun</li>
<li>Chest pain</li>
<li>Headache, dizziness, seizure, memory problems, or change in behavior</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Myasthenia gravis</strong> (meye-uhss-THEEN-ee-uh GRAV-uhss) <strong>(MG)</strong></p>
<p>			A disease in which the immune system attacks the nerves and muscles throughout the body.</td>
<td>
<ul>
<li>Double vision, trouble keeping a steady gaze, and drooping eyelids</li>
<li>Trouble swallowing, with frequent gagging or choking</li>
<li>Weakness or paralysis</li>
<li>Muscles that work better after rest</li>
<li>Drooping head</li>
<li>Trouble climbing stairs or lifting things</li>
<li>Trouble talking</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Inflammatory myopathies</strong> (meye-OP-uh-theez)</p>
<p>			A group of diseases that involve muscle inflammation and muscle weakness. <strong>Polymyositis</strong> (pol-ee-meye-uh-SYT-uhss) and <strong>dermatomyositis</strong> (dur-muh-toh-meye-uh-SYT-uhss) are 2 types more common in women than men.</td>
<td>
<ul>
<li>Slow but progressive muscle weakness beginning in the muscles closest to the trunk of the body. Polymyositis affects muscles involved with making movement on both sides of the body. With dermatomyositis, a skin rash comes before or at the same time as muscle weakness.</li>
</ul>
<p>			May also have:</p>
<ul>
<li>Fatigue after walking or standing</li>
<li>Tripping or falling</li>
<li>Difficulty swallowing or breathing</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Psoriasis</strong> (suh-REYE-uh-suhss)</p>
<p>			A disease that causes new skin cells that grow deep in your skin to rise too fast and pile up on the skin surface.</td>
<td>
<ul>
<li>Thick red patches, covered with scales, usually appearing on the head, elbows, and knees</li>
<li>Itching and pain, which can make it hard to sleep, walk, and care for yourself</li>
</ul>
<p>			May have:</p>
<ul>
<li>A form of arthritis that often affects the joints and the ends of the fingers and toes. Back pain can occur if the spine is involved.</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Idiopathic thrombocytopenic purpura</strong> (id-ee-oh-PATH-ihk throm-boh-seye-toh-PEE-nik PUR-pur-uh) <strong>(ITP)</strong></p>
<p>			A disease in which the immune system destroys blood platelets, which are needed for blood to clot.</td>
<td>
<ul>
<li>Very heavy menstrual period</li>
<li>Tiny purple or red dots on the skin that might look like a rash.</li>
<li>Easy bruising</li>
<li>Nosebleed or bleeding in the mouth</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Antiphospholipid</strong> (an-teye-FOSS-foh-lip-ihd) <strong>antibody syndrome (aPL)</strong></p>
<p>			A disease that causes problems in the inner lining of blood vessels resulting in blood clots in arteries or veins.</td>
<td>
<ul>
<li>Blood clots in veins or arteries</li>
<li>Multiple miscarriages</li>
<li>Lacy, net-like red rash on the wrists and knees</li>
</ul>
<p align="center"> </p>
</td>
</tr>
<tr>
<td>
<p><strong>Guillain-Barre</strong> (GEE-yahn bah-RAY) <strong>syndrome</strong></p>
<p>			The immune system attacks the nerves that connect your brain and spinal cord with the rest of your body. Damage to the nerves makes it hard for them to transmit signals. As a result, the muscles have trouble responding to the brain.</td>
<td>
<ul>
<li>Weakness or tingling feeling in the legs that might spread to the upper body</li>
<li>Paralysis in severe cases</li>
</ul>
<p>			Symptoms often progress relatively quickly, over a period of days or weeks, and often occur on both sides of the body.</td>
</tr>
<tr>
<td>
<p><strong>Sjögren's</strong> (SHOH-grins) <strong>syndrome</strong></p>
<p>			A disease in which the immune system targets the glands that make moisture, such as tears and saliva.</td>
<td>
<ul>
<li>Dry eyes or eyes that itch</li>
<li>Dryness of the mouth, which can cause sores</li>
<li>Trouble swallowing</li>
<li>Loss of sense of taste</li>
<li>Severe dental cavities</li>
<li>Hoarse voice</li>
<li>Fatigue</li>
<li>Joint swelling or pain</li>
<li>Swollen glands</li>
<li>Cloudy eyes</li>
</ul>
</td>
</tr>
<tr>
<td>
<p><strong>Vitiligo</strong> (vit-ihl-EYE-goh)</p>
<p>			The immune system destroys the cells that give your skin its color. It also can affect the tissue inside your mouth and nose.</td>
<td>
<ul>
<li>White patches on areas exposed to the sun, or on armpits, genitals, and rectum</li>
<li>Hair turns gray early</li>
<li>Loss of color inside your mouth</li>
</ul>
</td>
</tr>
</tbody>
</table>
<p>														 -->

<p>&nbsp;</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Are chronic fatigue syndrome and fibromyalgia autoimmune diseases? ",
      content: `

    <div class="answer"><p><a href="/publications/our-publications/fact-sheet/chronic-fatigue-syndrome.html">Chronic fatigue syndrome</a>, also known as myalgic encephalomyelitis, or ME/CFS, and fibromyalgia (feye-broh-meye-AL-juh) (FM) are not autoimmune diseases. But they often have symptoms of some autoimmune disease, like being tired all the time and pain.</p>

<ul>
	<li>ME/CFS can cause you to be very tired, have trouble concentrating, feel weak, and have muscle pain. Symptoms of ME/CFS come and go. The cause of ME/CFS is not known.</li>
	<li>FM is a disorder in which pain or tenderness is felt in multiple places all over the body. These "tender points" are located on the neck, shoulders, back, hips, arms, and legs and are painful when pressure is applied to them. Other symptoms include fatigue, trouble sleeping, and morning stiffness. FM mainly occurs in women of childbearing age. But children, the elderly, and men are sometimes can also get it. The cause is not known.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do I find out if I have an autoimmune disease?",
      content: `

    <div class="answer"><p>Getting a diagnosis can be a long and stressful process. Although each autoimmune disease is unique, many share some of the same symptoms. And many symptoms of autoimmune diseases are the same for other types of health problems too. This makes it hard for doctors to find out if you really have an autoimmune disease, and which one it might be. But if you are having symptoms that bother you, it's important to find the cause. Don't give up if you're not getting any answers. You can take these steps to help find out the cause of your symptoms:</p>

<ul>
	<li>Write down a complete&nbsp;<a href="https://phgkb.cdc.gov/FHH/html/index.html">family health history</a>&nbsp;that includes extended family and share it with your doctor.</li>
	<li>Record any symptoms you have, even if they seem unrelated, and share it with your doctor.</li>
	<li>See a specialist who has experience dealing with your most major symptom. For instance, if you have symptoms of inflammatory bowel disease, start with a gastroenterologist. Ask your regular doctor, friends, and others for suggestions.</li>
	<li>Get a&nbsp;second, third, or fourth opinion&nbsp;if need be. If your doctor doesn't take your symptoms seriously or tells you they are stress-related or in your head, see another doctor.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What types of doctors treat autoimmune diseases?",
      content: `

    <div class="answer"><p>Juggling your health care needs among many doctors and specialists can be hard. But specialists, along with your main doctor, may be helpful in managing some symptoms of your autoimmune disease. If you see a specialist, make sure you have a supportive main doctor to help you. Often, your family doctor may help you coordinate care if you need to see one or more specialists. Here are some specialists who treat autoimmune diseases:</p>

<ul>
	<li><strong>Nephrologist.</strong>&nbsp;A doctor who treats kidney problems, such as inflamed kidneys caused by lupus. Kidneys are organs that clean the blood and produce urine.</li>
	<li><strong>Rheumatologist.</strong>&nbsp;A doctor who treats arthritis and other rheumatic diseases, such as scleroderma and lupus.</li>
	<li><strong>Endocrinologist.</strong>&nbsp;A doctor who treats&nbsp;<a href="/glossary#gland">gland</a>&nbsp;and&nbsp;<a href="/glossary#hormone">hormone</a>&nbsp;problems, such as diabetes and thyroid disease.</li>
	<li><strong>Neurologist.</strong>&nbsp;A doctor who treats nerve problems, such as multiple sclerosis and myasthenia gravis.</li>
	<li><strong>Hematologist.</strong>&nbsp;A doctor who treats diseases that affect blood, such as some forms of&nbsp;<a href="/a-z-topics/iron-deficiency-anemia">anemia</a>.</li>
	<li><strong>Gastroenterologist.</strong>&nbsp;A doctor who treats problems with the digestive system, such as inflammatory bowel disease.</li>
	<li><strong>Dermatologist.</strong>&nbsp;A doctor who treats diseases that affect the skin, hair, and nails, such as psoriasis and lupus.</li>
	<li><strong>Physical therapist.</strong>&nbsp;A health care worker who uses proper types of physical activity to help patients with stiffness, weakness, and restricted body movement.</li>
	<li><strong>Occupational therapist.</strong>&nbsp;A health care worker who can find ways to make activities of daily living easier for you, despite your pain and other health problems. This could be teaching you new ways of doing things or how to use special devices. Or suggesting changes to make in your home or workplace.</li>
	<li><strong>Speech therapist.</strong>&nbsp;A health care worker who can help people with speech problems from illness such as multiple sclerosis.</li>
	<li><strong>Audiologist.</strong>&nbsp;A health care worker who can help people with hearing problems, including inner ear damage from autoimmune diseases.</li>
	<li><strong>Vocational therapist.</strong>&nbsp;A health care worker who offers job training for people who cannot do their current jobs because of their illness or other health problems. You can find this type of person through both public and private agencies.</li>
	<li><strong>Counselor for emotional support.</strong>&nbsp;A health care worker who is specially trained to help you to find ways to cope with your illness. You can work through your feelings of anger, fear, denial, and frustration.</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Are there medicines to treat autoimmune diseases?",
      content: `

    <div class="answer"><p>There are many types of medicines used to treat autoimmune diseases. The type of medicine you need depends on which disease you have, how severe it is, and your symptoms. Treatment can do the following:</p>

<ul>
	<li><strong>Relieve symptoms</strong>. Some people can use over-the-counter drugs for mild symptoms, like aspirin and ibuprofen for mild pain. Others with more severe symptoms may need prescription drugs to help relieve symptoms such as pain, swelling, depression, anxiety, sleep problems, fatigue, or rashes. For others, treatment may be as involved as having surgery.</li>
	<li><strong>Replace vital substances the body can no longer make on its own.</strong>&nbsp;Some autoimmune diseases, like diabetes and thyroid disease, can affect the body's ability to make substances it needs to function. With diabetes, insulin injections are needed to regulate blood sugar. Thyroid hormone replacement restores thyroid hormone levels in people with underactive thyroid.</li>
	<li><strong>Suppress the immune system.</strong>&nbsp;Some drugs can suppress immune system activity. These drugs can help control the disease process and preserve organ function. For instance, these drugs are used to control inflammation in affected kidneys in people with lupus to keep the kidneys working. Medicines used to suppress inflammation include chemotherapy given at lower doses than for cancer treatment and drugs used in patients who have had an organ transplant to protect against rejection. A class of drugs called anti-TNF medications blocks inflammation in some forms of autoimmune arthritis and psoriasis.</li>
</ul>

<p>New treatments for autoimmune diseases are being studied all the time.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Are there alternative treatments that can help?",
      content: `

    <div class="answer"><p>Many people try some form of complimentary and alternative medicine (CAM) at some point in their lives. Some examples of CAM are herbal products,&nbsp;<a href="/glossary#chiropractic">chiropractic</a>,&nbsp;<a href="/glossary#acupuncture">acupuncture</a>, and&nbsp;<a href="/glossary#hypnosis">hypnosis</a>. If you have an autoimmune disease, you might wonder if CAM therapies can help some of your symptoms. This is hard to know. Studies on CAM therapies are limited. Also, some CAM products can cause health problems or interfere with how the medicines you might need work. If you want to try a CAM treatment, be sure to discuss it with your doctor. Your doctor can tell you about the possible benefits and risks of trying CAM.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "I want to have a baby. Does having an autoimmune disease affect pregnancy? ",
      content: `

    <div class="answer"><p>Women with autoimmune diseases can safely have children. But there could be some risks for the mother or baby, depending on the disease and how severe it is. For instance, pregnant women with lupus have a higher risk of preterm birth and stillbirth. Pregnant women with myasthenia gravis (MG) might have symptoms that lead to trouble breathing during pregnancy. For some women, symptoms tend to improve during pregnancy, while others find their symptoms tend to flare up. Also, some medicines used to treat autoimmune diseases might not be safe to use during pregnancy.</p>

<p>If you want to have a baby, talk to your doctor before you start trying to get pregnant. Your doctor might suggest that you wait until your disease is in remission or suggest a change in medicines before you start trying. You also might need to see a doctor who cares for women with high-risk pregnancies.</p>

<p>Some women with autoimmune diseases may have problems getting pregnant. This can happen for many reasons. Tests can tell if fertility problems are caused by an autoimmune disease or an unrelated reason. Fertility treatments are able to help some women with autoimmune disease become pregnant.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I manage my life now that I have an autoimmune disease? ",
      content: `

    <div class="answer"><p>Although most autoimmune diseases don't go away, you can treat your symptoms and learn to manage your disease, so you can enjoy life! Women with autoimmune diseases lead full, active lives. Your life goals should not have to change. It is important, though, to see a doctor who specializes in these types of diseases, follow your treatment plan, and adopt a healthy lifestyle.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How can I deal with flares?",
      content: `

    <div class="answer"><p>Flares are the sudden and severe onset of symptoms. You might notice that certain triggers, such as stress or being out in the sun, cause your symptoms to flare. Knowing your triggers, following your treatment plan, and seeing your doctor regularly can help you to prevent flares or keep them from becoming severe. If you suspect a flare is coming, call your doctor. Don't try a "cure" you heard about from a friend or relative.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What are some things I can do to feel better?",
      content: `

    <div class="answer"><p>If you are living with an autoimmune disease, there are things you can do each day to feel better:</p>

<ul>
	<li><strong>Eat healthy, well-balanced meals.</strong>&nbsp;Make sure to include fruits and vegetables, whole grains, fat-free or low-fat milk products, and lean sources of protein. Limit saturated fat,&nbsp;<em>trans</em>&nbsp;fat, cholesterol, salt, and added sugars. If you follow a healthy eating plan, you will get the nutrients you need from food.</li>
	<li><strong>Get regular physical activity.</strong>&nbsp;<strong>But be careful not to overdo it.</strong>&nbsp;Talk with your doctor about what types of physical activity you can do. A gradual and gentle exercise program often works well for people with long-lasting muscle and joint pain. Some types of yoga or tai chi exercises may be helpful.</li>
	<li><strong>Get enough rest.</strong>&nbsp;Rest allows your body tissues and joints the time they need to repair. Sleeping is a great way you can help both your body and mind. If you don't get enough sleep, your stress level and your symptoms could get worse. You also can't fight off sickness as well when you sleep poorly. When you are well-rested, you can tackle your problems better and lower your risk for illness. Most people need at least 7 to 9 hours of sleep each day to feel well-rested.</li>
	<li><strong>Reduce stress.</strong>&nbsp;Stress and anxiety can trigger symptoms to flare up with some autoimmune diseases. So finding ways to simplify your life and cope with daily stressors will help you to feel your best. Meditation, self-hypnosis, and guided imagery, are simple relaxation techniques that might help you to reduce stress, lessen your pain, and deal with other aspects of living with your disease. You can learn to do these through self-help books, tapes, or with the help of an instructor. Joining a support group or talking with a counselor might also help you to manage your stress and cope with your disease.</li>
</ul>

<p><strong>You have some power to lessen your pain! Try using imagery for 15 minutes, two or three times each day.</strong>&nbsp;</p>

<ol>
	<li>Put on your favorite calming music.</li>
	<li>Lie back on your favorite chair or sofa. Or if you are at work, sit back and relax in your chair.</li>
	<li>Close your eyes.</li>
	<li>Imagine your pain or discomfort.</li>
	<li>Imagine something that confronts this pain and watch it "destroy" the pain.</li>
</ol>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "More information on autoimmune diseases",
      content: `

    <div class="answer"><p>For more information about autoimmune diseases, call the OWH Helpline&nbsp;at 1-800-994-9662 (TDD: 888-220-5446) or contact the following organizations:</p>

<ul>
	<li><strong><a href="http://www.nhlbi.nih.gov/">National Heart, Lung, and Blood Institute (NHLBI), NIH, HHS</a></strong>&nbsp;<br>
	<strong>Phone:</strong>&nbsp;301-592-8573</li>
	<li><strong><a href="http://www.niaid.nih.gov/">National Institute of Allergy and Infectious Diseases (NIAID), NIH, HHS</a></strong>&nbsp;<br>
	<strong>Phone:</strong>&nbsp;866-284-4107</li>
	<li><strong><a href="http://www.niams.nih.gov/">National Institute of Arthritis and Musculoskeletal and Skin Diseases (NIAMS), NIH, HHS</a></strong>&nbsp;<br>
	<strong>Phone:</strong>&nbsp;301-495-4484; Toll-Free: 877-226-4267</li>
	<li><strong><a href="http://www.niddk.nih.gov/">National Institute of Diabetes and Digestive and Kidney Diseases, NIH, HHS</a></strong>&nbsp;<br>
	<strong>Phone:</strong>&nbsp;301-496-3583</li>
	<li><strong><a href="http://www.ninds.nih.gov/">National Institute of Neurological Disorders and Stroke (NINDS), NIH, HHS</a></strong>&nbsp;<br>
	<strong>Phone:&nbsp;</strong>800-352-9424</li>
	<li><strong><a href="http://www.aarda.org/" class="external-link external-popup" target="_blank">American Autoimmune Related Diseases Association (AARDA), Inc. <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></strong>&nbsp;<br>
	<strong>Phone:</strong>&nbsp;586-776-3900; 800-598-4668 (for literature requests)</li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Related fact sheets from womenshealth.gov",
      content: `

    <div class="answer"><ul>
	<li><a href="/publications/our-publications/fact-sheet/chronic-fatigue-syndrome.html">Chronic fatigue syndrome fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/fibromyalgia.html">Fibromyalgia fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/graves-disease.html">Graves' disease fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/hashimoto-disease.html">Hashimoto's disease fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/inflammatory-bowel-disease.html">Inflammatory bowel disease fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/lupus.html">Lupus fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/myasthenia-gravis.html">Myasthenia gravis fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/stress-your-health.html">Stress and your health fact sheet</a></li>
	<li><a href="/publications/our-publications/fact-sheet/thyroid-disease.html">Thyroid disease fact sheet</a></li>
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
