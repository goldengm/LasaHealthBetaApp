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

export function ovarianCanPage({ navigation, ...rest }) {
  const condName = "Ovarian Cancer";
  const condImURL =
    "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Ovariancancer.jpg?VersionId=KzWs4IjJN2BfNLiyV6uVzAmadDlu5I8G";
  const condDescription =
    "Ovarian cancer is cancer that begins in the ovaries. The ovaries make female hormones and produce a woman's eggs. Ovarian cancer is a serious cancer that is more common in older women. Treatment is most effective when the cancer is found early. Screening for ovarian cancer is not recommended for most women. \n Learn more about ovarian cancer at the National Cancer Institute.";
  const condHeader = `<article role="article" class="content-page-article">

  <div>
    
<div class="landing-page-header">
<!--    <div class="background"><img src="https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Ovariancancer.jpg?VersionId=KzWs4IjJN2BfNLiyV6uVzAmadDlu5I8G"></div>   -->
                <div class="heading-description heading-description--half-width">
            <!-- <h1>Ovarian Cancer</h1>  -->
            <p><strong><a class="hint top-left" data-placement="top" data-toggle="tooltip" href="#" rel="tooltip" title="OS-tee-oh-poh-ROH-sis">Ovarian Cancer</a> is cancer that begins in the ovaries. The ovaries make female hormones and produce a woman's eggs. Ovarian cancer is a serious cancer that is more common in older women. Treatment is most effective when the cancer is found early. Screening for ovarian cancer is not recommended for most women. \n Learn more about ovarian cancer at the National Cancer Institute.</p>

                    </div>
    </div>

<div style="text-align: right; padding: 1rem 0px;"><button class="usa-button">Expand All</button></div><div class="qa-wrapper">
            <div class="qa-container">  <div class="paragraph paragraph--type--blog-qa paragraph--view-mode--default">
          
      </div>
      </div>
          </div>
        </div>
      
      </article>`;

  const condQA = [
    {
      title: "Overview",
      content: `
    <div class="clearfix ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content accordion-content-active" id="ui-id-3" aria-labelledby="ui-id-2" role="tabpanel" aria-hidden="true" style=""><div class="cardBody">
      <p>Ovarian epithelial cancer, fallopian tube cancer, and primary peritoneal cancer form in the same kind of tissue and are treated in the same way. These cancers are often advanced at diagnosis. Less common types of ovarian tumors include ovarian germ cell tumors and ovarian low malignant potential tumors. Explore the links on this page to learn more about treatment, prevention, screening, research, and clinical trials for these conditions.</p>
    </div></div>
  </div>

      </div>
        <div class="large-6 columns cthpCard no-resize">
        <div class="equalheight bgWhite cthp-treatment">
        `,
    },
    {
      title: "Treatment",
      content: `
    <div class="clearfix ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content accordion-content-active" id="ui-id-5" aria-labelledby="ui-id-4" role="tabpanel" aria-hidden="true" style=""><div class="cardBody">

              <h4 class="cthp-pdq-label">
          PDQ Treatment Information for Patients
        </h4>

      <ul>
        <li>
    <a href="/types/ovarian/patient/ovarian-epithelial-treatment-pdq">Treatment of Ovarian Epithelial, Fallopian, &amp; Peritoneal Cancer</a>
  </li>
  <li>
    <a href="/types/ovarian/patient/ovarian-germ-cell-treatment-pdq">Treatment of Ovarian Germ Cell Tumors</a>
  </li>
  <li>
    <a href="/types/ovarian/patient/ovarian-low-malignant-treatment-pdq">Treatment of Ovarian Low Malignant Potential Tumors</a>
  </li>
  <li>
    <a href="/types/ovarian/patient/child-ovarian-treatment-pdq">Childhood Ovarian Cancer Treatment</a>
  </li>

      </ul>

      <div class="more-info list cthp-dropdown">
    <input type="checkbox" id="checkbox_toggle0"><label for="checkbox_toggle0" tabindex="0">View more information</label><h5>More information</h5>
    <ul>

              <li class="general-list-item general list-item title-only">
      <div class="title-and-desc title desc container">
            <a class="title" href="/types/extracranial-germ-cell/patient/germ-cell-treatment-pdq">Childhood Extracranial Germ Cell Tumors Treatment (PDQ®)</a>

      </div>
    </li>

              <li class="general-list-item general list-item title-only">
      <div class="title-and-desc title desc container">
            <a class="title" href="/types/childhood-cancers/late-effects-pdq">Late Effects of Treatment for Childhood Cancer (PDQ®)</a>

      </div>
    </li>

              <li class="general-list-item general list-item title-only">
      <div class="title-and-desc title desc container">
            <a class="title" href="/about-cancer/treatment/drugs/ovarian">Drugs Approved for Ovarian, Fallopian Tube, or Primary Peritoneal Cancer</a>

      </div>
    </li>

              <li class="general-list-item general list-item title-only">
      <div class="title-and-desc title desc container">
            <a class="title" href="/about-cancer/treatment/clinical-trials/search">Find NCI-Supported Clinical Trials</a>

      </div>
    </li>

        </ul>
  </div>

    </div></div>
  </div>

      </div>
        <div class="large-6 columns cthpCard no-resize">
        <div class="equalheight bgWhite cthp-causes">
        `,
    },
    {
      title: "Causes &amp; Prevention",
      content: `
    <div class="clearfix ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content accordion-content-active" id="ui-id-7" aria-labelledby="ui-id-6" role="tabpanel" aria-hidden="true" style=""><div class="cardBody">

              <h4 class="cthp-pdq-label">
          PDQ Prevention Information for Patients
        </h4>

      <ul>
        <li>
    <a href="/types/ovarian/patient/ovarian-prevention-pdq">Ovarian, Fallopian Tube, &amp; Primary Peritoneal Cancer Prevention</a>
  </li>

      </ul>

      <div class="more-info list">
    <h5>More information</h5>
    <ul>

              <li class="general-list-item general list-item title-only">
      <div class="title-and-desc title desc container">
            <a class="title" href="/about-cancer/causes-prevention/genetics/brca-fact-sheet">BRCA Gene Mutations: Cancer Risk and Genetic Testing</a>

      </div>
    </li>

        </ul>
  </div>

    </div></div>
  </div>

      </div>
        <div class="large-6 columns cthpCard no-resize">
        <div class="equalheight bgWhite cthp-screening">`,
    },
    {
      title: "Screening",
      content: `
    <div class="clearfix ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content accordion-content-active" id="ui-id-9" aria-labelledby="ui-id-8" role="tabpanel" aria-hidden="true" style=""><div class="cardBody">

              <h4 class="cthp-pdq-label">
          PDQ Screening Information for Patients
        </h4>

      <ul>
        <li>
    <a href="/types/ovarian/patient/ovarian-screening-pdq">Ovarian, Fallopian Tube, and Primary Peritoneal Cancer Screening</a>
  </li>

      </ul>

    </div></div>
  </div>

      </div>
        <div class="large-6 columns cthpCard no-resize">

  <div class="equalheight bgWhite cthp-survival">`,
    },
    //   {
    //     title: "Statistics</Text>,
    //     content: `
    //   <div class="clearfix ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content accordion-content-active" id="ui-id-11" aria-labelledby="ui-id-10" role="tabpanel" aria-hidden="true" style=""><div>
    //                 <figure class="video cthp-mm-video-player">
    //                         <div id="ytplayer-jC8CUIID2HA" class="flex-video widescreen rendered" data-video-url="/media/oembed?url=https%3A//www.youtube.com/watch%3Fv%3DL0gw3Vy7PDI&amp;max_width=0&amp;max_height=0&amp;hash=8qXzsRpLi-RXtcQP-B97Fkkk_xYsEEE0_Y_Mdsd0aW8" data-video-title="Ovarian Cancer | Did You Know?">
    //         <div class="video-preview--container" tabindex="0">
    //             <img src="/sites/g/files/xnrzdm211/files/oembed_thumbnails/mH2bw4FgAju_h69H3iOKv-eVAloAHkVQJf-aUSEVYTg.jpg" width="480" height="360" alt="" loading="lazy">

    //           <div class="video-preview--play-button">
    //             <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
    //               <path class="play-button--bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#212121" fill-opacity="0.8"></path>
    //               <path d="M 45,24 27,14 27,34" fill="#fff"></path>
    //             </svg>
    //           </div>
    //           <p>Ovarian Cancer | Did You Know?</p>
    //         </div>
    //       </div>
    //                 </figure>

    //           <div class="cardBody">
    //         <a href="http://seer.cancer.gov/statfacts/html/ovary.html" class="arrow-link cthp-mm-text-area">Find more information about trends in ovarian cancer on the Cancer Stat Facts: Ovarian Cancer page.</a>
    //       </div>
    //       </div></div>
    // </div>

    //     </div>
    //       <div class="large-6 columns cthpCard no-resize">
    //       <div class="equalheight bgWhite cthp-general">`,
    //   },
    //   {
    //     title: "Coping with Cancer</Text>,
    //     content: `
    //   <div class="clearfix ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content" id="ui-id-13" aria-labelledby="ui-id-12" role="tabpanel" aria-hidden="true" style="display: none;"><div class="cardBody">
    //   <p>
    //   The information in this section is meant to help you cope with the many issues and concerns that occur when you have cancer.
    //   </p>
    //   <a class="arrow-link" href="/about-cancer/coping/feelings">Feelings and Cancer</a>
    //   <a class="arrow-link" href="/about-cancer/coping/adjusting-to-cancer">Adjusting to Cancer</a>
    //   <a class="arrow-link" href="/about-cancer/coping/caregiver-support">Support for Caregivers</a>
    //   <a class="arrow-link" href="/about-cancer/coping/survivorship">Survivorship</a>
    //   <a class="arrow-link" href="/about-cancer/advanced-cancer">Advanced Cancer</a>
    //   <a class="arrow-link" href="/about-cancer/managing-care">Managing Cancer Care</a>
    // </div></div>

    // </div>

    //     </div>
    //       <div class="large-6 columns cthpCard no-resize">
    //       <div class="equalheight bgWhite cthp-research">`,
    //   },
    //   {
    //     title: "Research</Text>,
    //     content: `
    //   <div class="clearfix ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content" id="ui-id-15" aria-labelledby="ui-id-14" role="tabpanel" aria-hidden="true" style="display: none;"><div class="cardBody">

    //   <p>
    //         <a class="title" href="/news-events/cancer-currents-blog/2020/ovarian-cancer-form-microrna">How Does Ovarian Cancer Form? A New Study Points to MicroRNA</a>

    //   </p>

    //   <p>
    //         <a class="title" href="/news-events/cancer-currents-blog/2020/ovarian-cancer-racial-disparities-studies">Ovarian Cancer Studies Aim to Reduce Racial Disparities, Improve Outcomes</a>

    //   </p>

    //   <p>
    //         <a class="title" href="/news-events/cancer-currents-blog/2019/ovarian-cancer-surgery-recurrent-survival">Surgery for Recurrent Ovarian Cancer Does Not Improve Survival</a>

    //   </p>

    //   <p>
    //         <a class="title" href="/news-events/cancer-currents-blog/2019/parp-inhibitors-ovarian-cancer-initial-treatment">PARP Inhibitors Show Promise as Initial Treatment for Ovarian Cancer</a>

    //   </p>

    //     <a href="/types/ovarian/research" class="arrow-link">
    //     View more research  </a>

    //   </div></div>
    // `,
    //   },
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
