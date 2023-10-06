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

export function breastReconPage({ navigation, ...rest }) {
  const condName = "Breast Reconstruction After Mastectomy";
  const condImURL =
    "https://pbs.twimg.com/media/E_0dWdmVIAUGhuq?format=jpg&name=360x360";
  const condDescription =
    "Many women who have a mastectomy—surgery to remove an entire breast to treat or prevent breast cancer—have the option of having the shape of the removed breast rebuilt. \n Women who choose to have their breasts rebuilt have several options for how it can be done. Breasts can be rebuilt using implants (saline or silicone). They can also be rebuilt using autologous tissue (that is, tissue from elsewhere in the body). Sometimes both implants and autologous tissue are used to rebuild the breast. \n Surgery to reconstruct the breasts can be done (or started) at the time of the mastectomy (which is called immediate reconstruction) or it can be done after the mastectomy incisions have healed and breast cancer therapy has been completed (which is called delayed reconstruction). Delayed reconstruction can happen months or even years after the mastectomy. \n In a final stage of breast reconstruction, a nipple and areola may be re-created on the reconstructed breast, if these were not preserved during the mastectomy. \n Sometimes breast reconstruction surgery includes surgery on the other, or contralateral, breast so that the two breasts will match in size and shape.";
  const condHeader = `<article role="article" class="content-page-article">

  
    

  
  <div>
    
<div class="landing-page-header">
                <div class="heading-description">
            <!-- <h1>Breast Reconstruction After Mastectomy</h1>
            <p><strong>This content is reproduced</strong> from the National Cancer Institute. <a href="https://www.cancer.gov/types/breast/reconstruction-fact-sheet">View the original fact sheet.</a></p>

<p>&nbsp;</p>

                    </div>
    </div>

<div style="text-align: right; padding: 1rem 0px;"><button class="usa-button">Expand All</button></div><div class="qa-wrapper">
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
            </div>
      
            </div>
          
          </article>`; //  this is html
  const condQA = [
    {
      title: "What is breast reconstruction?",
      content: `

    <div class="answer"><p>Many women who have a mastectomy—surgery to remove an entire breast to treat or prevent breast cancer—have the option of having the shape of the removed breast rebuilt.</p>

<p>Women who choose to have their breasts rebuilt have several options for how it can be done. Breasts can be rebuilt using implants (saline or silicone). They can also be rebuilt using autologous tissue (that is, tissue from elsewhere in the body). Sometimes both implants and autologous tissue are used to rebuild the breast.</p>

<p>Surgery to reconstruct the breasts can be done (or started) at the time of the mastectomy (which is called immediate reconstruction) or it can be done after the mastectomy incisions have healed and breast cancer therapy has been completed (which is called delayed reconstruction). Delayed reconstruction can happen months or even years after the mastectomy.</p>

<p>In a final stage of breast reconstruction, a nipple and areola may be re-created on the reconstructed breast, if these were not preserved during the mastectomy.</p>

<p>Sometimes breast reconstruction surgery includes surgery on the other, or contralateral, breast so that the two breasts will match in size and shape.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do surgeons use implants to reconstruct a woman's breast? ",
      content: `

    <div class="answer"><p>Implants are inserted underneath the skin or chest muscle following the mastectomy. (Most mastectomies are performed using a technique called skin-sparing mastectomy, in which much of the breast skin is saved for use in reconstructing the breast.)</p>

<p>Implants are usually placed as part of a two-stage procedure.</p>

<ul>
	<li>In the first stage, the surgeon places a device, called a tissue expander, under the skin that is left after the mastectomy or under the chest muscle.<a href="#references"><sup>(1, 2)</sup></a>&nbsp;The expander is slowly filled with saline during periodic visits to the doctor after surgery.</li>
	<li>In the second stage, after the chest tissue has relaxed and healed enough, the expander is removed and replaced with an implant. The chest tissue is usually ready for the implant 2 to 6 months after mastectomy.</li>
</ul>

<p>In some cases, the implant can be placed in the breast during the same surgery as the mastectomy—that is, a tissue expander is not used to prepare for the implant.<a href="#references"><sup>(3)</sup></a></p>

<p>Surgeons are increasingly using material called acellular dermal matrix as a kind of scaffold or "sling" to support tissue expanders and implants. Acellular dermal matrix is a kind of mesh that is made from donated human or pig skin that has been sterilized and processed to remove all cells to eliminate the risks of rejection and infection.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "How do surgeons use tissue from a woman's own body to reconstruct the breast?",
      content: `

    <div class="answer"><p>In autologous tissue reconstruction, a piece of tissue containing skin, fat, blood vessels, and sometimes muscle is taken from elsewhere in a woman's body and used to rebuild the breast. This piece of tissue is called a flap.</p>

<p>Different sites in the body can provide flaps for breast reconstruction. Flaps used for breast reconstruction most often come from the abdomen or back. However, they can also be taken from the thigh or buttocks.</p>

<p>Depending on their source, flaps can be pedicled or free.</p>

<ul>
	<li>With a pedicled flap, the tissue and attached blood vessels are moved together through the body to the breast area. Because the blood supply to the tissue used for reconstruction is left intact, blood vessels do not need to be reconnected once the tissue is moved.</li>
	<li>With free flaps, the tissue is cut free from its blood supply. It must be attached to new blood vessels in the breast area, using a technique called microsurgery. This gives the reconstructed breast a blood supply.</li>
</ul>

<p>Abdominal and back flaps include:</p>

<ul>
	<li>DIEP flap: Tissue comes from the abdomen and contains only skin, blood vessels, and fat, without the underlying muscle. This type of flap is a free flap.</li>
	<li>Latissimus dorsi (LD) flap: Tissue comes from the middle and side of the back. This type of flap is pedicled when used for breast reconstruction. (LD flaps can be used for other types of reconstruction as well.)</li>
	<li>SIEA flap (also called SIEP flap): Tissue comes from the abdomen as in a DIEP flap but includes a different set of blood vessels. It also does not involve cutting of the abdominal muscle and is a free flap. This type of flap is not an option for many women because the necessary blood vessels are not adequate or do not exist.</li>
	<li>TRAM flap: Tissue comes from the lower abdomen as in a DIEP flap but includes muscle. It can be either pedicled or free.</li>
</ul>

<p>Flaps taken from the thigh or buttocks are used for women who have had previous major abdominal surgery or who don't have enough abdominal tissue to reconstruct a breast. These types of flaps are free flaps. With these flaps an implant is often used as well to provide sufficient breast volume.</p>

<ul>
	<li>IGAP flap: Tissue comes from the buttocks and contains only skin, blood vessels, and fat.</li>
	<li>PAP flap: Tissue, without muscle, that comes from the upper inner thigh.</li>
	<li>SGAP flap: Tissue comes from the buttocks as in an IGAP flap, but includes a different set of blood vessels and contains only skin, blood vessels, and fat.</li>
	<li>TUG flap: Tissue, including muscle, that comes from the upper inner thigh.</li>
</ul>

<p>In some cases, an implant and autologous tissue are used together. For example, autologous tissue may be used to cover an implant when there isn't enough skin and muscle left after mastectomy to allow for expansion and use of an implant.<a href="#references"><sup>(1, 2)</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "How do surgeons reconstruct the nipple and areola?",
      content: `

    <div class="answer"><p>After the chest heals from reconstruction surgery and the position of the breast mound on the chest wall has had time to stabilize, a surgeon can reconstruct the nipple and areola. Usually, the new nipple is created by cutting and moving small pieces of skin from the reconstructed breast to the nipple site and shaping them into a new nipple. A few months after nipple reconstruction, the surgeon can re-create the areola. This is usually done using tattoo ink. However, in some cases, skin grafts may be taken from the groin or abdomen and attached to the breast to create an areola at the time of the nipple reconstruction.<a href="#references"><sup>(1)</sup></a></p>

<p>Some women who do not have surgical nipple reconstruction may consider getting a realistic picture of a nipple created on the reconstructed breast from a tattoo artist who specializes in 3-D nipple tattooing.</p>

<p>A mastectomy that preserves a woman's own nipple and areola, called nipple-sparing mastectomy, may be an option for some women, depending on the size and location of the breast cancer and the shape and size of the breasts.<a href="#references"><sup>(4, 5)</sup></a></p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "What factors can affect the timing of breast reconstruction? ",
      content: `

    <div class="answer"><p>One factor that can affect the timing of breast reconstruction is whether a woman will need radiation therapy. Radiation therapy can sometimes cause wound healing problems or infections in reconstructed breasts, so some women may prefer to delay reconstruction until after radiation therapy is completed. However, because of improvements in surgical and radiation techniques, immediate reconstruction with an implant is usually still an option for women who will need radiation therapy. Autologous tissue breast reconstruction is usually reserved for after radiation therapy, so that the breast and chest wall tissue damaged by radiation can be replaced with healthy tissue from elsewhere in the body.</p>

<p>Another factor is the type of breast cancer. Women with inflammatory breast cancer usually require more extensive skin removal. This can make immediate reconstruction more challenging, so it may be recommended that reconstruction be delayed until after completion of adjuvant therapy.</p>

<p>Even if a woman is a candidate for immediate reconstruction, she may choose delayed reconstruction. For instance, some women prefer not to consider what type of reconstruction to have until after they have recovered from their mastectomy and subsequent adjuvant treatment. Women who delay reconstruction (or choose not to undergo the procedure at all) can use external breast prostheses, or breast forms, to give the appearance of breasts.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What factors can affect the choice of breast reconstruction method? ",
      content: `

    <div class="answer"><p>Several factors can influence the type of reconstructive surgery a woman chooses. These include the size and shape of the breast that is being rebuilt, the woman's age and health, her history of past surgeries, surgical risk factors (for example, smoking history and obesity), the availability of autologous tissue, and the location of the tumor in the breast.<a href="#references"><sup>(2, 6)</sup></a> Women who have had past abdominal surgery may not be candidates for an abdominally based flap reconstruction. &nbsp;&nbsp;&nbsp;</p>

<p>Each type of reconstruction has factors that a woman should think about before making a decision. Some of the more common considerations are listed below.</p>

<p><strong>Reconstruction with Implants</strong></p>

<p>Surgery and recovery</p>

<ul>
	<li>Enough skin and muscle must remain after mastectomy to cover the implant</li>
	<li>Shorter surgical procedure than for reconstruction with autologous tissue; little blood loss</li>
	<li>Recovery period may be shorter than with autologous reconstruction</li>
	<li>Many follow-up visits may be needed to inflate the expander and insert the implant</li>
</ul>

<p>Possible complications</p>

<ul>
	<li>Infection</li>
	<li>Accumulation of clear fluid causing a mass or lump (seroma) within the reconstructed breast<a href="#references"><sup>(7)</sup></a></li>
	<li>Pooling of blood (hematoma) within the reconstructed breast</li>
	<li>Blood clots</li>
	<li>Extrusion of the implant (the implant breaks through the skin)</li>
	<li>Implant rupture (the implant breaks open and saline or silicone leaks into the surrounding tissue)</li>
	<li>Formation of hard scar tissue around the implant (known as a contracture)</li>
	<li>Obesity, diabetes, and smoking may increase the rate of complications</li>
	<li>Possible increased risk of developing a very rare form of immune system cancer called anaplastic large cell lymphoma<a href="#references"><sup>(8, 9)</sup></a></li>
</ul>

<p>Other considerations</p>

<ul>
	<li>May not be an option for patients who have previously undergone radiation therapy to the chest</li>
	<li>May not be adequate for women with very large breasts</li>
	<li>Will not last a lifetime; the longer a woman has implants, the more likely she is to have complications and to need to have her implants removed or replaced</li>
	<li>Silicone implants may feel more natural&nbsp;than saline implants</li>
	<li>The Food and Drug Administration (FDA) recommends that women with silicone implants undergo periodic MRI screenings to detect possible "silent" rupture of the implants</li>
</ul>

<p>More information about implants can be found on FDA's <a href="http://www.fda.gov/breastimplants">Breast Implants</a> page.</p>

<p><strong>Reconstruction with Autologous Tissue</strong></p>

<p>Surgery and recovery</p>

<ul>
	<li>Longer surgical procedure than for implants</li>
	<li>The initial recovery period may be longer than for implants</li>
	<li>Pedicled flap reconstruction is usually a shorter operation than free flap reconstruction and usually requires a shorter hospitalization</li>
	<li>Free flap reconstruction is a longer, highly technical operation compared with pedicled flap reconstruction that requires a surgeon who has experience with microsurgery to re-attach blood vessels</li>
</ul>

<p>Possible complications</p>

<ul>
	<li>Necrosis (death) of the transferred tissue</li>
	<li>Blood clots may be more frequent with some flap sources</li>
	<li>Pain and weakness at the site from which the donor tissue was taken</li>
	<li>Obesity, diabetes, and smoking may increase the rate of complications</li>
</ul>

<p>Other considerations</p>

<ul>
	<li>May provide a more natural breast shape than implants</li>
	<li>May feel softer and more natural to the touch than implants</li>
	<li>Leaves a scar at the site from which the donor tissue was taken</li>
	<li>Can be used to replace tissue that has been damaged by radiation therapy</li>
</ul>

<p>All women who undergo mastectomy for breast cancer experience varying degrees of breast numbness and loss of sensation (feeling) because nerves that provide sensation to the breast are cut when breast tissue is removed during surgery. However, a woman may regain some sensation as the severed nerves grow and regenerate, and breast surgeons continue to make technical advances that can spare or repair damage to nerves.</p>

<p>Any type of breast reconstruction can fail if healing does not occur properly. In these cases, the implant or flap will have to be removed. If an implant reconstruction fails, a woman can usually have a second reconstruction using an alternative approach.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Will health insurance pay for breast reconstruction?",
      content: `

    <div class="answer"><p>The Women's Health and Cancer Rights Act of 1998 (WHCRA) is a federal law that requires group health plans and health insurance companies that offer mastectomy coverage to also pay for reconstructive surgery after mastectomy. This coverage must include all stages of reconstruction and surgery to achieve symmetry between the breasts, breast prostheses, and treatment of complications that result from the mastectomy, including lymphedema. More information about WHCRA is available from the <a href="http://www.dol.gov/ebsa/publications/whcra.html">Department of Labor</a> and the <a href="https://www.cms.gov/CCIIO/Programs-and-Initiatives/Other-Insurance-Protections/whcra_factsheet.html">Centers for Medicare &amp; Medicaid Services</a>.</p>

<p>Some health plans sponsored by religious organizations and some government health plans may be exempt from WHCRA. Also, WHCRA does not apply to Medicare and Medicaid. However, <a href="https://www.medicare.gov/coverage/breast-prostheses.html">Medicare</a> may cover breast reconstruction surgery as well as external breast prostheses (including a post-surgical bra) after a medically necessary mastectomy.</p>

<p>Medicaid benefits vary by state; a woman should <a href="https://www.medicaid.gov/about-us/contact-us/contact-state-page.html" title="Contact Your State With Questions | Medicaid.gov">contact her state Medicaid office</a> for information on whether, and to what extent, breast reconstruction is covered.</p>

<p>A woman considering breast reconstruction may want to discuss costs and health insurance coverage with her doctor and insurance company before choosing to have the surgery. Some insurance companies require a second opinion before they will agree to pay for a surgery.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What type of follow-up care and rehabilitation is needed after breast reconstruction?",
      content: `

    <div class="answer"><p>Any type of reconstruction increases the number of side effects a woman may experience compared with those after a mastectomy alone. A woman's medical team will watch her closely for complications, some of which can occur months or even years after surgery.<a href="#references"><sup>(1, 2, 10)</sup></a></p>

<p>Women who have either autologous tissue or implant-based reconstruction may benefit from physical therapy to improve or maintain shoulder range of motion or help them recover from weakness experienced at the site from which the donor tissue was taken, such as abdominal weakness.<a href="#references"><sup>(11, 12)</sup></a> A physical therapist can help a woman use exercises to regain strength, adjust to new physical limitations, and figure out the safest ways to perform everyday activities.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "Does breast reconstruction affect the ability to check for breast cancer recurrence? ",
      content: `

    <div class="answer"><p>Studies have shown that breast reconstruction does not increase the chances of breast cancer coming back or make it harder to check for recurrence with mammography.<a href="#references"><sup>(13)</sup></a></p>

<p>Women who have one breast removed by mastectomy will still have mammograms of the other breast. Women who have had a skin-sparing mastectomy or who are at high risk of breast cancer recurrence may have mammograms of the reconstructed breast if it was reconstructed using autologous tissue. However, mammograms are generally not performed on breasts that are reconstructed with an implant after mastectomy.</p>

<p>A woman with a breast implant should tell the radiology technician about her implant before she has a mammogram. Special procedures may be necessary to improve the accuracy of the mammogram and to avoid damaging the implant.</p>

<p>More information about mammograms can be found in the NCI fact sheet <a href="http://www.cancer.gov/types/breast/mammograms-fact-sheet">Mammograms</a>.</p>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title:
        "What are some new developments in breast reconstruction after mastectomy? ",
      content: `

    <div class="answer"><ul>
	<li><strong>Oncoplastic surgery.</strong> In general, women who have lumpectomy or partial mastectomy for early-stage breast cancer do not have reconstruction. However, for some of these women the surgeon may use plastic surgery techniques to reshape the breast at the time of cancer surgery. This type of breast-conserving surgery, called oncoplastic surgery, may use local tissue rearrangement, reconstruction through breast reduction surgery, or transfer of tissue flaps. Long-term outcomes of this type of surgery are comparable to those for standard breast-conserving surgery.<a href="#references"><sup>(14)</sup></a></li>
	<li><strong>Autologous fat grafting. </strong>A newer type of breast reconstruction technique involves the transfer of fat tissue from one part of the body (usually the thighs, abdomen, or buttocks) to the reconstructed breast. The fat tissue is harvested by liposuction, washed, and liquified so that it can be injected into the area of interest. Fat grafting is mainly used to correct deformities and asymmetries that may appear after breast reconstruction. It is also sometimes used to reconstruct an entire breast. Although concern has been raised about the lack of long-term outcome studies, this technique is considered safe.<a href="#references"><sup>(1, 6)</sup></a></li>
</ul>
</div>

      </div>
</div>
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
    `,
    },
    {
      title: "Selected References",
      content: `

    <div class="answer"><ol>
	<li>Mehrara BJ, Ho AY. Breast Reconstruction. In: Harris JR, Lippman ME, Morrow M, Osborne CK, eds. <em>Diseases of the Breast</em>. 5th ed. Philadelphia: Wolters Kluwer Health; 2014.</li>
	<li>Cordeiro PG. Breast reconstruction after surgery for breast cancer. <em>New England Journal of Medicine 2</em>008;359(15):1590–1601. DOI: <a href="http://www.nejm.org/doi/full/10.1056/NEJMct0802899" class="external-link external-popup" target="_blank">10.1056/NEJMct0802899 <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li>Roostaeian J, Pavone L, Da Lio A, et al. Immediate placement of implants in breast reconstruction: patient selection and outcomes. <em>Plastic and Reconstructive Surgery</em> 2011; 127(4):1407-1416. [<a href="http://www.ncbi.nlm.nih.gov/pubmed/21460648">PubMed Abstract</a>]</li>
	<li>Petit JY, Veronesi U, Lohsiriwat V, et al. Nipple-sparing mastectomy—is it worth the risk? <em>Nature Reviews Clinical Oncology</em> 2011;8(12):742–747. <a href="http://www.ncbi.nlm.nih.gov/pubmed/22024947">[PubMed Abstract]</a></li>
	<li>Gupta A, Borgen PI. Total skin sparing (nipple sparing) mastectomy: what is the evidence? <em>Surgical Oncology Clinics of North America</em> 2010;19(3):555–566. <a href="http://www.ncbi.nlm.nih.gov/pubmed/20620927">[PubMed Abstract]</a></li>
	<li>Schmauss D, Machens HG, Harder Y. Breast reconstruction after mastectomy. <em>Frontiers in Surgery</em> 2016; 2:71-80. [<a href="http://www.ncbi.nlm.nih.gov/pubmed/26835456">PubMed Abstract</a>]</li>
	<li>Jordan SW, Khavanin N, Kim JY. Seroma in prosthetic breast&nbsp;reconstruction. <em>Plastic and Reconstructive Surgery</em> 2016; 137(4):1104-1116. [<a href="http://www.ncbi.nlm.nih.gov/pubmed/27018665">PubMed Abstract</a>]</li>
	<li>Gidengil CA, Predmore Z, Mattke S, van Busum K, Kim B. Breast implant-associated anaplastic large cell lymphoma: a systematic review. <em>Plastic and Reconstructive Surgery</em> 2015; 135(3):713-720. [<a href="http://www.ncbi.nlm.nih.gov/pubmed/25490539">PubMed Abstract</a>]</li>
	<li>U. S. Food and Drug Administration. <a href="http://www.fda.gov/MedicalDevices/ProductsandMedicalProcedures/ImplantsandProsthetics/BreastImplants/ucm239995.htm">Anaplastic Large Cell Lymphoma (ALCL)</a>. Accessed August 31. 2016.</li>
	<li>D'Souza N, Darmanin G, Fedorowicz Z. Immediate versus delayed reconstruction following surgery for breast cancer. <em>Cochrane Database of Systematic Reviews</em> 2011(7): CD008674. <a href="http://www.ncbi.nlm.nih.gov/pubmed/21735435">[PubMed Abstract]</a></li>
	<li>Monteiro M. Physical therapy implications following the TRAM procedure. <em>Physical Therapy</em> 1997; 77(7):765–770. <a href="http://www.ncbi.nlm.nih.gov/pubmed/9225848">[PubMed Abstract]</a></li>
	<li>McAnaw MB, Harris KW. The role of physical therapy in the rehabilitation of patients with mastectomy and breast reconstruction. <em>Breast Disease</em> 2002; 16:163–174. <a href="http://www.ncbi.nlm.nih.gov/pubmed/15687670">[PubMed Abstract]</a></li>
	<li>Agarwal T, Hultman CS. Impact of radiotherapy and chemotherapy on planning and outcome of breast reconstruction. <em>Breast Disease</em> 2002; 16:37–42. DOI: <a href="http://content.iospress.com/download/breast-disease/bd000108?id=breast-disease%2Fbd000108" class="external-link external-popup" target="_blank">10.3233/BD-2002-16107 <img class="disclaimer" src="/themes/custom/owh_uswds/assets/img/exit-disclaimer.png"></a></li>
	<li>De La Cruz L, Blankenship SA, Chatterjee A, et al. Outcomes after oncoplastic breast-conserving surgery in breast cancer patients: A systematic literature review. <em>Annals of Surgical Oncology</em> 2016; 23(10):3247-3258. [<a href="http://www.ncbi.nlm.nih.gov/pubmed/27357177">PubMed Abstract</a>]</li>
</ol>
</div>

      </div>
</div>
    </div>
            <div class="field__item"><script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script><script>$(document).ready(function(){$.getJSON('https://api.digitalmedia.hhs.gov/api/v2/resources/media/1754/syndicate.json?stripStyles=true&stripScripts=true&stripBreaks=true&stripImages=true&stripClasses=true&stripIds=true&displayMethod=undefined&autoplay=false&userId=3188&callback=?', function(data){$('#syndicatedContent_1754_303442708412648').html(data.results[0].content);});});</script>
<div id="syndicatedContent_1754_303442708412648">
 <div class="syndicate"> 
  <!-- ********************************* BEGIN Page Content ********************************** --> 
  <h1 autofocus="true">Breast Reconstruction After Mastectomy</h1> 
  <div> 
   <div> 
    <nav role="navigation"> 
     <h6>On This Page</h6> 
     <ul> 
      <li> <a href="#what-is-breast-reconstruction"> <p>What is breast reconstruction?</p> </a> </li> 
      <li> <a href="#how-do-surgeons-use-implants-to-reconstruct-a-womans-breast"> <p>How do surgeons use implants to reconstruct a woman's breast?</p> </a> </li> 
      <li> <a href="#how-do-surgeons-use-tissue-from-a-womans-own-body-to-reconstruct-the-breast"> <p>How do surgeons use tissue from a woman's own body to reconstruct the breast?</p> </a> </li> 
      <li> <a href="#how-do-surgeons-reconstruct-the-nipple-and-areola"> <p>How do surgeons reconstruct the nipple and areola?</p> </a> </li> 
      <li> <a href="#what-factors-can-affect-the-timing-of-breast-reconstruction"> <p>What factors can affect the timing of breast reconstruction?</p> </a> </li> 
      <li> <a href="#what-factors-can-affect-the-choice-of-breast-reconstruction-method"> <p>What factors can affect the choice of breast reconstruction method?</p> </a> </li> 
      <li> <a href="#will-health-insurance-pay-for-breast-reconstruction"> <p>Will health insurance pay for breast reconstruction?</p> </a> </li> 
      <li> <a href="#what-type-of-follow-up-care-and-rehabilitation-is-needed-after-breast-reconstruction"> <p>What type of follow-up care and rehabilitation is needed after breast reconstruction?</p> </a> </li> 
      <li> <a href="#does-breast-reconstruction-affect-the-ability-to-check-for-breast-cancer-recurrence"> <p>Does breast reconstruction affect the ability to check for breast cancer recurrence?</p> </a> </li> 
      <li> <a href="#what-are-some-new-developments-in-breast-reconstruction-after-mastectomy"> <p>What are some new developments in breast reconstruction after mastectomy?</p> </a> </li> 
     </ul> 
    </nav> 
    <section itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question"> 
     `,
    },
    {
      title: "What is breast reconstruction?",
      content: ` 
     <div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"> 
      <div itemprop="text"> 
       <p>Many women who have a mastectomy—surgery to remove an entire breast to treat or prevent breast cancer—have the option of having the shape of the removed breast rebuilt.</p> 
       <p>Women who choose to have their breasts rebuilt have several options for how it can be done. Breasts can be rebuilt using implants (<a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000046152&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000046152&amp;version=Patient&amp;language=English'); return false;">saline</a> or <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000044725&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000044725&amp;version=Patient&amp;language=English'); return false;">silicone</a>). They can also be rebuilt using <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000044912&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000044912&amp;version=Patient&amp;language=English'); return false;">autologous</a> tissue (that is, tissue from elsewhere in the body). Sometimes both implants and autologous tissue are used to rebuild the breast.</p> 
       <p>Surgery to reconstruct the breasts can be done (or started) at the time of the mastectomy (which is called immediate reconstruction) or it can be done after the mastectomy <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000046353&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000046353&amp;version=Patient&amp;language=English'); return false;">incisions</a> have healed and breast cancer therapy has been completed (which is called delayed reconstruction). Delayed reconstruction can happen months or even years after the mastectomy.</p> 
       <p>In a final stage of breast reconstruction, a <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000304735&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000304735&amp;version=Patient&amp;language=English'); return false;">nipple</a> and <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000046525&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000046525&amp;version=Patient&amp;language=English'); return false;">areola</a> may be re-created on the reconstructed breast, if these were not preserved during the mastectomy.</p> 
       <p>Sometimes breast reconstruction surgery includes surgery on the other, or <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000044169&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000044169&amp;version=Patient&amp;language=English'); return false;">contralateral</a>, breast so that the two breasts will match in size and shape.</p> 
      </div> 
     </div> 
    </section> 
    <section itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question"> 
     `,
    },
    {
      title: "How do surgeons use implants to reconstruct a woman's breast? ",
      content: ` 
     <div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"> 
      <div itemprop="text"> 
       <p>Implants are inserted underneath the skin or chest muscle following the mastectomy. (Most mastectomies are performed using a technique called skin-sparing mastectomy, in which much of the breast skin is saved for use in reconstructing the breast.)</p> 
       <p>Implants are usually placed as part of a two-stage procedure.</p> 
       <ul> 
        <li>In the first stage, the surgeon places a device, called a tissue expander, under the skin that is left after the mastectomy or under the chest muscle (<a href="#r1">1</a>,<a href="#r2">2)</a>. The expander is slowly filled with <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000046152&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000046152&amp;version=Patient&amp;language=English'); return false;">saline</a> during periodic visits to the doctor after surgery.</li> 
        <li>In the second stage, after the chest tissue has relaxed and healed enough, the expander is removed and replaced with an implant. The chest tissue is usually ready for the implant 2 to 6 months after mastectomy.</li> 
       </ul> 
       <p>In some cases, the implant can be placed in the breast during the same surgery as the mastectomy—that is, a tissue expander is not used to prepare for the implant (<a href="#r3">3</a>).</p> 
       <p>Surgeons are increasingly using material called acellular dermal matrix as a kind of scaffold or “sling” to support tissue expanders and implants. Acellular dermal matrix is a kind of mesh that is made from donated human or pig skin that has been sterilized and processed to remove all cells to eliminate the risks of rejection and infection.</p> 
      </div> 
     </div> 
    </section> 
    <section itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question"> 
     `,
    },
    {
      title:
        "How do surgeons use tissue from a woman's own body to reconstruct the breast?",
      content: ` 
     <div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"> 
      <div itemprop="text"> 
       <p>In <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000044912&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000044912&amp;version=Patient&amp;language=English'); return false;">autologous</a> tissue reconstruction, a piece of tissue containing skin, fat, blood vessels, and sometimes muscle is taken from elsewhere in a woman’s body and used to rebuild the breast. This piece of tissue is called a flap.</p> 
       <p>Different sites in the body can provide flaps for breast reconstruction. Flaps used for breast reconstruction most often come from the abdomen or back. However, they can also be taken from the thigh or buttocks.</p> 
       <p>Depending on their source, flaps can be pedicled or free.</p> 
       <ul> 
        <li>With a <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000745791&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000745791&amp;version=Patient&amp;language=English'); return false;">pedicled flap</a>, the tissue and attached blood vessels are moved together through the body to the breast area. Because the blood supply to the tissue used for reconstruction is left intact, blood vessels do not need to be reconnected once the tissue is moved.</li> 
        <li>With <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000745789&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000745789&amp;version=Patient&amp;language=English'); return false;">free flaps</a>, the tissue is cut free from its blood supply. It must be attached to new blood vessels in the breast area, using a technique called microsurgery. This gives the reconstructed breast a blood supply.</li> 
       </ul> 
       <p>Abdominal and back flaps include:</p> 
       <ul> 
        <li><a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000044496&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000044496&amp;version=Patient&amp;language=English'); return false;">DIEP flap</a>: Tissue comes from the abdomen and contains only skin, blood vessels, and fat, without the underlying muscle. This type of flap is a free flap.</li> 
        <li><a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000745787&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000745787&amp;version=Patient&amp;language=English'); return false;">Latissimus dorsi (LD) flap</a>: Tissue comes from the middle and side of the back. This type of flap is pedicled when used for breast reconstruction. (LD flaps can be used for other types of reconstruction as well.)</li> 
        <li>SIEA flap (also called SIEP flap): Tissue comes from the abdomen as in a DIEP flap but includes a different set of blood vessels. It also does not involve cutting of the abdominal muscle and is a free flap. This type of flap is not an option for many women because the necessary blood vessels are not adequate or do not exist.</li> 
        <li><a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000745784&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000745784&amp;version=Patient&amp;language=English'); return false;">TRAM flap</a>: Tissue comes from the lower abdomen as in a DIEP flap but includes muscle. It can be either pedicled or free.</li> 
       </ul> 
       <p>Flaps taken from the thigh or buttocks are used for women who have had previous major abdominal surgery or who don’t have enough abdominal tissue to reconstruct a breast. These types of flaps are free flaps. With these flaps an implant is often used as well to provide sufficient breast volume.</p> 
       <ul> 
        <li>IGAP flap: Tissue comes from the buttocks and contains only skin, blood vessels, and fat.</li> 
        <li>PAP flap: Tissue, without muscle, that comes from the upper inner thigh.</li> 
        <li>SGAP flap: Tissue comes from the buttocks as in an IGAP flap, but includes a different set of blood vessels and contains only skin, blood vessels, and fat.</li> 
        <li>TUG flap: Tissue, including muscle, that comes from the upper inner thigh.</li> 
       </ul> 
       <p>In some cases, an implant and autologous tissue are used together. For example, autologous tissue may be used to cover an implant when there isn’t enough skin and muscle left after mastectomy to allow for expansion and use of an implant (<a href="#r1">1</a>,<a href="#r2">2</a>).</p> 
      </div> 
     </div> 
    </section> 
    <section itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question"> 
     `,
    },
    {
      title: "How do surgeons reconstruct the nipple and areola? ",
      content: ` 
     <div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"> 
      <div itemprop="text"> 
       <p>After the chest heals from reconstruction surgery and the position of the breast mound on the chest wall has had time to stabilize, a surgeon can reconstruct the <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000304735&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000304735&amp;version=Patient&amp;language=English'); return false;">nipple</a> and <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000046525&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000046525&amp;version=Patient&amp;language=English'); return false;">areola</a>. Usually, the new nipple is created by cutting and moving small pieces of skin from the reconstructed breast to the nipple site and shaping them into a new nipple. A few months after nipple reconstruction, the surgeon can re-create the areola. This is usually done using tattoo ink. However, in some cases, <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000046581&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000046581&amp;version=Patient&amp;language=English'); return false;">skin grafts</a> may be taken from the groin or abdomen and attached to the breast to create an areola at the time of the nipple reconstruction (<a href="#r1">1</a>).</p> 
       <p>Some women who do not have surgical nipple reconstruction may consider getting a realistic picture of a nipple created on the reconstructed breast from a tattoo artist who specializes in <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000044486&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000044486&amp;version=Patient&amp;language=English'); return false;">3-D</a> nipple tattooing.</p> 
       <p>A mastectomy that preserves a woman's own nipple and areola, called nipple-sparing mastectomy, may be an option for some women, depending on the size and location of the breast cancer and the shape and size of the breasts (<a href="#r4">4</a>,<a href="#r5">5</a>).</p> 
      </div> 
     </div> 
    </section> 
    <section itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question"> 
     `,
    },
    {
      title: "What factors can affect the timing of breast reconstruction? ",
      content: ` 
     <div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"> 
      <div itemprop="text"> 
       <p>One factor that can affect the timing of breast reconstruction is whether a woman will need <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000044971&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000044971&amp;version=Patient&amp;language=English'); return false;">radiation therapy</a>.&nbsp;Radiation therapy can sometimes cause wound healing problems or infections in reconstructed breasts, so some women may prefer to delay reconstruction until after radiation therapy is completed. However, because of improvements in surgical and radiation techniques, immediate reconstruction with an implant is usually still an option for women who will need radiation therapy. Autologous tissue breast reconstruction is usually reserved for after radiation therapy, so that the breast and <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000044996&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000044996&amp;version=Patient&amp;language=English'); return false;">chest wall</a> tissue damaged by radiation can be replaced with healthy tissue from elsewhere in the body.</p> 
       <p>Another factor is the type of breast cancer. Women with <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000045313&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000045313&amp;version=Patient&amp;language=English'); return false;">inflammatory breast cancer</a> usually require more extensive skin removal. This can make immediate reconstruction more challenging, so it may be recommended that reconstruction be delayed until after completion of <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000045587&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000045587&amp;version=Patient&amp;language=English'); return false;">adjuvant therapy</a>.</p> 
       <p>Even if a woman is a candidate for immediate reconstruction, she may choose delayed reconstruction. For instance, some women prefer not to consider what type of reconstruction to have until after they have recovered from their mastectomy and subsequent adjuvant treatment. Women who delay reconstruction (or choose not to undergo the procedure at all) can use external breast prostheses, or breast forms, to give the appearance of breasts.&nbsp;</p> 
       <p>&nbsp;</p> 
      </div> 
     </div> 
    </section> 
    <section itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question"> 
     `,
    },
    {
      title:
        "What factors can affect the choice of breast reconstruction method? ",
      content: ` 
     <div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"> 
      <div itemprop="text"> 
       <p>Several factors can influence the type of <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000044722&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000044722&amp;version=Patient&amp;language=English'); return false;">reconstructive surgery</a> a woman chooses. These include the size and shape of the breast that is being rebuilt, the woman’s age and health, her history of past surgeries, surgical <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000045873&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000045873&amp;version=Patient&amp;language=English'); return false;">risk factors</a> (for example, smoking history and obesity), the availability of <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000044912&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000044912&amp;version=Patient&amp;language=English'); return false;">autologous</a> tissue, and the location of the tumor in the breast (<a href="#r2">2</a>,<a href="#r6">6</a>). Women who have had past abdominal surgery may not be candidates for an abdominally based flap reconstruction.</p> 
       <p>Each type of reconstruction has factors that a woman should think about before making a decision. Some of the more common considerations are listed below.</p> 
       <p><strong>Reconstruction with Implants</strong></p> 
       <p>Surgery and recovery</p> 
       <ul> 
        <li>Enough skin and muscle must remain after mastectomy to cover the implant</li> 
        <li>Shorter surgical procedure than for reconstruction with autologous tissue; little blood loss</li> 
        <li>Recovery period may be shorter than with autologous reconstruction</li> 
        <li>Many follow-up visits may be needed to inflate the expander and insert the implant</li> 
       </ul> 
       <p>Possible complications</p> 
       <ul> 
        <li>Infection</li> 
        <li>Accumulation of clear fluid causing a mass or lump (<a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000703281&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000703281&amp;version=Patient&amp;language=English'); return false;">seroma</a>) within the reconstructed breast (<a href="#r7">7</a>)</li> 
        <li>Pooling of blood (<a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000449931&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000449931&amp;version=Patient&amp;language=English'); return false;">hematoma</a>) within the reconstructed breast</li> 
        <li><a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000476017&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000476017&amp;version=Patient&amp;language=English'); return false;">Blood clots</a></li> 
        <li>Extrusion of the implant (the implant breaks through the skin)</li> 
        <li>Implant rupture (the implant breaks open and <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000046152&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000046152&amp;version=Patient&amp;language=English'); return false;">saline</a> or <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000044725&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000044725&amp;version=Patient&amp;language=English'); return false;">silicone</a> leaks into the surrounding tissue)</li> 
        <li>Formation of hard <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000640078&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000640078&amp;version=Patient&amp;language=English'); return false;">scar tissue</a> around the implant (known as a <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000723866&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000723866&amp;version=Patient&amp;language=English'); return false;">contracture</a>)</li> 
        <li>Obesity, <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000044911&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000044911&amp;version=Patient&amp;language=English'); return false;">diabetes</a>, and smoking may increase the rate of complications</li> 
        <li>Possible increased risk of developing a very rare form of immune system cancer called <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000045552&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000045552&amp;version=Patient&amp;language=English'); return false;">anaplastic large cell lymphoma</a> (<a href="#r8">8</a>,<a href="#r9">9</a>)</li> 
       </ul> 
       <p>Other considerations</p> 
       <ul> 
        <li>May not be an option for patients who have previously undergone <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000044971&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000044971&amp;version=Patient&amp;language=English'); return false;">radiation therapy</a> to the chest</li> 
        <li>May not be adequate for women with very large breasts</li> 
        <li>Will not last a lifetime; the longer a woman has implants, the more likely she is to have complications and to need to have her implants removed or replaced</li> 
        <li>Silicone implants may feel more natural than saline implants to the touch&nbsp;</li> 
        <li>The Food and Drug Administration (FDA) recommends that women with silicone implants undergo periodic <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000045788&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000045788&amp;version=Patient&amp;language=English'); return false;">MRI</a> screenings to detect possible “silent” rupture of the implants</li> 
       </ul> 
       <p>More information about implants can be found on FDA’s <a href="http://www.fda.gov/breastimplants">Breast Implants</a> page.</p> 
       <p><strong>Reconstruction with Autologous Tissue</strong></p> 
       <p>Surgery and recovery</p> 
       <ul> 
        <li>Longer surgical procedure than for implants</li> 
        <li>The initial recovery period may be longer than for implants</li> 
        <li>Pedicled flap reconstruction is usually a shorter operation than free flap reconstruction and usually requires a shorter hospitalization</li> 
        <li>Free flap reconstruction is a longer, highly technical operation compared with pedicled flap reconstruction that requires a surgeon who has experience with microsurgery to re-attach blood vessels</li> 
       </ul> 
       <p>Possible complications</p> 
       <ul> 
        <li><a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000044290&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000044290&amp;version=Patient&amp;language=English'); return false;">Necrosis</a> (death) of the transferred tissue</li> 
        <li>Blood clots may be more frequent with some flap sources</li> 
        <li>Pain and weakness at the site from which the donor tissue was taken</li> 
        <li>Obesity, diabetes, and smoking may increase the rate of complications</li> 
       </ul> 
       <p>Other considerations</p> 
       <ul> 
        <li>May provide a more natural breast shape than implants</li> 
        <li>May feel softer and more natural to the touch than implants</li> 
        <li>Leaves a scar at the site from which the donor tissue was taken</li> 
        <li>Can be used to replace tissue that has been damaged by radiation therapy</li> 
       </ul> 
       <p>All women who undergo mastectomy for breast cancer experience varying degrees of breast numbness and loss of sensation (feeling) because <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000373935&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000373935&amp;version=Patient&amp;language=English'); return false;">nerves</a> that provide sensation to the breast are cut when breast tissue is removed during surgery. However, a woman may regain some sensation as the severed nerves grow and regenerate, and breast surgeons continue to make technical advances that can&nbsp;spare or repair damage to nerves.</p> 
       <p>Any type of breast reconstruction can fail if healing does not occur properly. In these cases, the implant or flap will have to be removed. If an implant reconstruction fails, a woman can usually have a second reconstruction using an alternative approach.</p> 
      </div> 
     </div> 
    </section> 
    <section itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question"> 
     `,
    },
    {
      title: "Will health insurance pay for breast reconstruction? ",
      content: ` 
     <div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"> 
      <div itemprop="text"> 
       <p>The Women’s Health and Cancer Rights Act of 1998 (WHCRA) is a federal law that requires group health plans and health insurance companies that offer mastectomy coverage to also pay for reconstructive surgery after mastectomy. This coverage must include all stages of reconstruction and surgery to achieve symmetry between the breasts, breast prostheses, and treatment of complications that result from the mastectomy, including <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000045359&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000045359&amp;version=Patient&amp;language=English'); return false;">lymphedema</a>. More information about WHCRA is available from the <a href="https://www.dol.gov/sites/dolgov/files/ebsa/about-ebsa/our-activities/resource-center/publications/your-rights-after-a-mastectomy.pdf">Department of Labor</a> and the <a href="https://www.cms.gov/CCIIO/Programs-and-Initiatives/Other-Insurance-Protections/whcra_factsheet.html">Centers for Medicare &amp; Medicaid Services</a>.</p> 
       <p>Some health plans sponsored by religious organizations and some government health plans may be exempt from WHCRA. Also, WHCRA does not apply to Medicare and Medicaid. However, <a href="https://www.medicare.gov/coverage/breast-prostheses.html">Medicare</a> may cover breast reconstruction surgery as well as external breast prostheses (including a post-surgical bra) after a medically necessary mastectomy.</p> 
       <p>Medicaid benefits vary by state; a woman should contact her state Medicaid office for information on whether, and to what extent, breast reconstruction is covered.</p> 
       <p>A woman considering breast reconstruction may want to discuss costs and health insurance coverage with her doctor and insurance company before choosing to have the surgery. Some insurance companies require a <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000774692&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000774692&amp;version=Patient&amp;language=English'); return false;">second opinion</a> before they will agree to pay for a surgery.</p> 
      </div> 
     </div> 
    </section> 
    <section itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question"> 
     `,
    },
    {
      title:
        "What type of follow-up care and rehabilitation is needed after breast reconstruction?",
      content: ` 
     <div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"> 
      <div itemprop="text"> 
       <p>Any type of reconstruction increases the number of <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000046580&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000046580&amp;version=Patient&amp;language=English'); return false;">side effects</a> a woman may experience compared with those after a mastectomy alone. A woman’s medical team will watch her closely for <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000463706&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000463706&amp;version=Patient&amp;language=English'); return false;">complications</a>, some of which can occur months or even years after surgery (<a href="#r1">1</a>,<a href="#r2">2</a>,<a href="#r10">10</a>).</p> 
       <p>Women who have either autologous tissue or implant-based reconstruction may benefit from <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000044708&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000044708&amp;version=Patient&amp;language=English'); return false;">physical therapy</a> to improve or maintain shoulder range of motion or help them recover from weakness experienced at the site from which the donor tissue was taken, such as abdominal weakness (<a href="#r11">11</a>,<a href="#r12">12</a>). A <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000044707&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000044707&amp;version=Patient&amp;language=English'); return false;">physical therapist</a> can help a woman use exercises to regain strength, adjust to new physical limitations, and figure out the safest ways to perform everyday activities.</p> 
      </div> 
     </div> 
    </section> 
    <section itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question"> 
     `,
    },
    {
      title:
        "Does breast reconstruction affect the ability to check for breast cancer recurrence?",
      content: ` 
     <div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"> 
      <div itemprop="text"> 
       <p>Studies have shown that breast reconstruction does not increase the chances of breast cancer coming back or make it harder to check for <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000045861&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000045861&amp;version=Patient&amp;language=English'); return false;">recurrence</a> with <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000045996&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000045996&amp;version=Patient&amp;language=English'); return false;">mammography</a> (<a href="#r13">13</a>).</p> 
       <p>Women who have one breast removed by mastectomy will still have mammograms of the other breast. Women who have had a skin-sparing mastectomy or who are at high risk of breast cancer recurrence may have mammograms of the reconstructed breast if it was reconstructed using autologous tissue. However, mammograms are generally not performed on breasts that are reconstructed with an implant after mastectomy.</p> 
       <p>A woman with a breast implant should tell the radiology technician about her implant before she has a mammogram. Special procedures may be necessary to improve the accuracy of the mammogram and to avoid damaging the implant.</p> 
       <p>More information about mammograms can be found in the NCI fact sheet <a data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="c3988b1e-e7ba-4b5f-bfed-a516b75193fc" href="https://www.cancer.gov/types/breast/mammograms-fact-sheet">Mammograms</a>.</p> 
      </div> 
     </div> 
    </section> 
    <section itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question"> 
     `,
    },
    {
      title:
        "What are some new developments in breast reconstruction after mastectomy?",
      content: ` 
     <div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"> 
      <div itemprop="text"> 
       <ul> 
        <li><strong>Oncoplastic surgery.</strong> In general, women who have <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000045758&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000045758&amp;version=Patient&amp;language=English'); return false;">lumpectomy</a> or <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000045105&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000045105&amp;version=Patient&amp;language=English'); return false;">partial mastectomy</a> for <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000446564&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000446564&amp;version=Patient&amp;language=English'); return false;">early-stage breast cancer</a> do not have reconstruction. However, for some of these women the surgeon may use <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000269468&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000269468&amp;version=Patient&amp;language=English'); return false;">plastic surgery</a> techniques to reshape the breast at the time of cancer surgery. This type of <a href="https://www.cancer.gov/Common/PopUps/popDefinition.aspx?id=CDR0000045626&amp;version=Patient&amp;language=English" onclick="javascript:popWindow('defbyid','CDR0000045626&amp;version=Patient&amp;language=English'); return false;">breast-conserving surgery</a>, called oncoplastic surgery, may use local tissue rearrangement, reconstruction through breast reduction surgery, or transfer of tissue flaps. Long-term outcomes of this type of surgery are comparable to those for standard breast-conserving surgery (<a href="#r14">14</a>).</li> 
        <li> <p><strong>Autologous fat grafting. </strong>A newer type of breast reconstruction technique involves the transfer of fat tissue from one part of the body (usually the thighs, abdomen, or buttocks) to the reconstructed breast. The fat tissue is harvested by liposuction, washed, and liquified so that it can be injected into the area of interest. Fat grafting is mainly used to correct deformities and asymmetries that may appear after breast reconstruction. It is also sometimes used to reconstruct an entire breast. Although concern has been raised about the lack of long-term outcome studies, this technique is considered safe (<a href="#r1">1</a>,<a href="#r6">6</a>).</p> </li> 
       </ul> 
       <p>&nbsp;</p> 
      </div> 
     </div> 
    </section> 
   </div> 
  </div> 
  <div> 
   <div> 
    <div> 
     <h6> Selected References </h6> 
     <ol> 
      <li> <p>Mehrara BJ, Ho AY. Breast Reconstruction. In: Harris JR, Lippman ME, Morrow M, Osborne CK, eds. <em>Diseases of the Breast</em>. 5th ed. Philadelphia: Wolters Kluwer Health; 2014.</p> </li> 
      <li> <p>Cordeiro PG. Breast reconstruction after surgery for breast cancer. <em>New England Journal of Medicine 2</em>008; 359(15):1590–1601. DOI: <a href="http://www.nejm.org/doi/full/10.1056/NEJMct0802899">10.1056/NEJMct0802899</a></p> </li> 
      <li> <p>Roostaeian J, Pavone L, Da Lio A, et al. Immediate placement of implants in breast reconstruction: patient selection and outcomes. <em>Plastic and Reconstructive Surgery</em> 2011; 127(4):1407-1416.</p> <a href="https://www.ncbi.nlm.nih.gov/pubmed/21460648">[PubMed Abstract]</a> </li> 
      <li> <p>Petit JY, Veronesi U, Lohsiriwat V, et al. Nipple-sparing mastectomy—is it worth the risk? <em>Nature Reviews Clinical Oncology</em> 2011; 8(12):742–747.</p> <a href="https://www.ncbi.nlm.nih.gov/pubmed/22024947">[PubMed Abstract]</a> </li> 
      <li> <p>Gupta A, Borgen PI. Total skin sparing (nipple sparing) mastectomy: what is the evidence? <em>Surgical Oncology Clinics of North America</em> 2010; 19(3):555–566.</p> <a href="https://www.ncbi.nlm.nih.gov/pubmed/20620927">[PubMed Abstract]</a> </li> 
      <li> <p>Schmauss D, Machens HG, Harder Y. Breast reconstruction after mastectomy. <em>Frontiers in Surgery</em> 2016; 2:71-80.</p> <a href="https://www.ncbi.nlm.nih.gov/pubmed/26835456">[PubMed Abstract]</a> </li> 
      <li> <p>Jordan SW, Khavanin N, Kim JY. Seroma in prosthetic breast reconstruction. <em>Plastic and Reconstructive Surgery</em> 2016; 137(4):1104-1116.</p> <a href="https://www.ncbi.nlm.nih.gov/pubmed/27018665">[PubMed Abstract]</a> </li> 
      <li> <p>Gidengil CA, Predmore Z, Mattke S, van Busum K, Kim B. Breast implant-associated anaplastic large cell lymphoma: a systematic review. <em>Plastic and Reconstructive Surgery</em> 2015; 135(3):713-720.</p> <a href="https://www.ncbi.nlm.nih.gov/pubmed/25490539">[PubMed Abstract]</a> </li> 
      <li> <p>U.S. Food and Drug Administration. <a href="http://www.fda.gov/MedicalDevices/ProductsandMedicalProcedures/ImplantsandProsthetics/BreastImplants/ucm239995.htm">Anaplastic Large Cell Lymphoma (ALCL)</a>. Accessed August 31, 2016.</p> </li> 
      <li> <p>D'Souza N, Darmanin G, Fedorowicz Z. Immediate versus delayed reconstruction following surgery for breast cancer. <em>Cochrane Database of Systematic Reviews</em> 2011; (7):CD008674.</p> <a href="https://www.ncbi.nlm.nih.gov/pubmed/21735435">[PubMed Abstract]</a> </li> 
      <li> <p>Monteiro M. Physical therapy implications following the TRAM procedure. <em>Physical Therapy </em>1997; 77(7):765-770.</p> <a href="https://www.ncbi.nlm.nih.gov/pubmed/9225848">[PubMed Abstract]</a> </li> 
      <li> <p>McAnaw MB, Harris KW. The role of physical therapy in the rehabilitation of patients with mastectomy and breast reconstruction. <em>Breast Disease</em> 2002; 16:163–174.</p> <a href="https://www.ncbi.nlm.nih.gov/pubmed/15687670">[PubMed Abstract]</a> </li> 
      <li> <p>Agarwal T, Hultman CS. Impact of radiotherapy and chemotherapy on planning and outcome of breast reconstruction. <em>Breast Disease.</em> 2002;16:37–42. DOI: <a href="http://content.iospress.com/download/breast-disease/bd000108?id=breast-disease%2Fbd000108">10.3233/BD-2002-16107</a></p> </li> 
      <li> <p>De La Cruz L, Blankenship SA, Chatterjee A, et al. Outcomes after oncoplastic breast-conserving surgery in breast cancer patients: A systematic literature review. <em>Annals of Surgical Oncology</em> 2016; 23(10):3247-3258.</p> <a href="https://www.ncbi.nlm.nih.gov/pubmed/27357177">[PubMed Abstract]</a> </li> 
     </ol> 
    </div> 
   </div> 
   <div> 
    <div> 
     <aside> 
      <h6>Related Resources</h6> 
      <ul> 
       <li> 
        <div> 
         <a href="https://www.cancer.gov/types/breast">Breast Cancer—Patient Version</a> 
        </div> </li> 
       <li> 
        <div> 
         <a href="https://www.cancer.gov/publications/patient-education/facing-forward">Facing Forward: Life After Cancer Treatment</a> 
        </div> </li> 
       <li> 
        <div> 
         <a href="https://www.cancer.gov/types/breast/mammograms-fact-sheet">Mammograms</a> 
        </div> </li> 
       <li> 
        <div> 
         <a href="https://www.cancer.gov/types/breast/risk-reducing-surgery-fact-sheet">Surgery to Reduce the Risk of Breast Cancer</a> 
        </div> </li> 
       <li> 
        <div> 
         <a href="https://www.cancer.gov/publications/patient-education/surgery-choices">Surgery Choices for Women with DCIS or Breast Cancer</a> 
        </div> </li> 
      </ul> 
     </aside> 
    </div> 
   </div> 
   <div> 
    <p>Posted: <time datetime="2016-10-17T12:00:00Z">Mon, 10/17/2016 - 12:00</time> </p> 
    <p>Updated: <time datetime="2013-02-12T12:00:00Z">Tue, 02/12/2013 - 12:00</time> </p> 
    <p>Reviewed: <time datetime="2017-02-24T12:00:00Z">Fri, 02/24/2017 - 12:00</time> </p> 
   </div> 
   <span>This content is provided by the National Cancer Institute (<a href="http://www.cancer.gov">www.cancer.gov</a>)</span> 
  </div> 
 </div>
 <script type="application/ld+json">{"@context":"http://schema.org","@type":"Article","headline":"Breast Reconstruction After Mastectomy","datePublished":"2013-00-06T15:00:12Z","description":"A fact sheet that describes breast reconstruction after mastectomy, including surgical options, follow-up care, and breast cancer screening after reconstruction.","about":"breast, surgery, reconstruction, mastectomy, 7.57, reconstruct, reconstructive, implant, autogenous, autogeneous, autologous, saline, silicone, nipple, areola, aureola, tattoo, graft, TRAM, flap","audience":"","dateCreated":"2013-00-06T15:00:12Z","dateModified":"2019-42-05T19:42:12Z","sourceOrganization":"National Cancer Institute"}</script>
<div class="syndicate"><span><strong>Syndicated Content Details:</strong></span><br><span>Source URL: <a href="https://www.cancer.gov/node/479707/syndication">https://www.cancer.gov/node/479707/syndication</a></span><br><span>Source Agency: <a href="http://www.cancer.gov">National Cancer Institute (NCI)</a></span><br><span>Captured Date: 2013-12-06 15:00:12.0</span><br></div><iframe src="//www.googletagmanager.com/ns.html?id=GTM-KT9TM9&amp;mediaId=1754&amp;mediaType=html&amp;sourceUrl=https%3A%2F%2Fwww.cancer.gov%2Fnode%2F479707%2Fsyndication&amp;userId=-1&amp;sourceId=5&amp;sourceAcronym=NCI&amp;campaignId=-1&amp;campaignName=null&amp;languageId=1&amp;isoCode=eng" height="0" width="0" style="display:none;visibility:hidden"></iframe><noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-KT9TM9&mediaId=1754&mediaType=html&sourceUrl=https%3A%2F%2Fwww.cancer.gov%2Fnode%2F479707%2Fsyndication&userId=-1&sourceId=5&sourceAcronym=NCI&campaignId=-1&campaignName=null&languageId=1&isoCode=eng" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript></div>
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
