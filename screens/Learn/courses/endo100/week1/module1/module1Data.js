import React from 'react';
import {Dimensions, View} from 'react-native';
import {Text} from 'react-native-elements';
import {theme} from '../../../../../../constants';
import {getOS} from '../../../../../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';

const {width} = Dimensions.get('screen');

//  FIXMETUNA:  this might cause problems ignoring this warning, scrolling or windowing
//  errors possible, watch out
import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.',
]);

export const dummyJson = [
    {   
        'id': 'page1',
        'title': 'What to expect new',
        'content': {
            'common_content': [
                "Welcome to our introductory guide to endometriosis! This course has been designed to provide you with a deeper understanding of endometriosis and give you the confidence to manage your health. \n\nAs everyone’s health is unique, we aren’t going to tell you what to do. Instead, we are going to give you the information that you need to make the best decisions about your health. We will support you in achieving your health goals and making progress towards a healthier you. \n\nBy taking this course, you are one step closer to taking control of your health and living the life you want."
            ]
        }    
    },
    {   
        'id': 'page2',
        'title': 'Starting your journey',
        'content': {
            'common_content': [
                `This 12- week course will walk you through all the
                    basics of managing endometriosis and provide insights
                    into living with endometriosis. Specifically, the
                    goals of this course are to help you:
                    {'\u000A'}`,
                `{'\u000A'}
                    Each week of the course, we’ll open up several modules
                    for you to complete on your own time. Each module will
                    be short, between 2 and 5 minutes. In total, there
                    will be about 15-20 minutes worth of learning each
                    week; however, if you are interested in diving deep
                    into a particular topic. We understand that you have a
                    lot going on in your life and designed this program to
                    fit your schedule.
                    {'\u000A'}
                    {'\u000A'}
                    We encourage you to thoughtfully complete one module
                    each day to promote lasting change and sustainable
                    habits. However, you’re in control and can finish
                    modules whenever it is convenient for you. By taking
                    this course, you are one step closer to taking control
                    of your health and living the life you want.`
            ],
            'dot_content': [
                `Gain a deeper understanding of endometriosis
                    including types, causes, symptoms, and stages`,
                `Explore treatment options so that you can be fully
                    informed before making decisions with your medical provider`,
                `Improve your ability to navigate the healthcare
                    system and select qualified health providers`,
                `Hearing stories of other endometriosis patients and
                    advice from endometriosis experts`,
                `Learn at-home pain management techniques and create
                    a plan to manage flare-ups`,
                `Increase confidence in your ability to manage your
                    endometriosis`
            ]
        }    
    },
    {   
        'id': 'page3',
        'title': 'Course overview',
        'content': {
            'common_content': [
                `Endometriosis can have a profound impact on your life,
                    affecting everything from your relationships,
                    education, work, mental health, and overall
                    well-being.
                    {'\u000A'}`
            ],
            'table_content': [
                [
                    'Introduction',
                    'Learn about this course and set goals.',
                ],
                [
                    'Hormones',
                    'Learn about basic medical concepts essential for understanding endometriosis including pelvic anatomical structures and hormones.',
                ],
                [
                    'Stages & Symptoms',
                    'Learn about the condition, stages, symptoms, and causes.',
                ],
                [
                    'Diagnosis',
                    'Learn about getting diagnosed with endometriosis and some of the challenges that patients face.',
                ],
                [
                    'Laparoscopy',
                    'Learn about the value of laparoscopic surgery, how to decide the right time to have one and what to expect.',
                ],
                [
                    'Medications',
                    'Learn about medication options available and considerations when choosing a medication strategy.',
                ],
                [
                    'Physical Therapy',
                    'Learn about pelvic floor therapy and at-home exercises to reduce your pain.',
                ],
                [
                    'Nutrition',
                    'Learn about foods that might trigger endometriosis flare-ups and foods that might improve symptoms. ',
                ],
                [
                    'Alternative Therapies',
                    'Learn about alternative therapies that some patients found have been helpful including acupuncture, traditional Chinese medicine, and electrotherapy.',
                ],
                [
                    'Life Stages',
                    'Learn about how endometriosis impacts different life stages including puberty, fertility, pregnancy, and menopause.',
                ],
                [
                    'Related Conditions',
                    'Learn about other conditions that commonly exist with endometriosis.',
                ],
                [
                    'Thriving',
                    'Learn how to thrive with endometriosis including work and relationships.',
                ]
            ]
        }    
    },
    {   
        'id': 'page4',
        'title': 'Course Features',
        'content': {
            'common_content': [
                `Throughout each week, you’ll have the opportunity to
                    participate in several types of activities, including:
                    {'\u000A'}`,
                `{'\u000A'}
                    This program has been built based on peer-reviewed
                    research. Citations for each week’s module can be
                    found at the end of each module.
                    {'\u000A'}
                    {'\u000A'}
                    There is a lot of misinformation about endometriosis
                    and it can be difficult to know who to trust. Our
                    mission is to provide you with the most up-to-date and
                    evidence-based information available.
                    {'\u000A'}
                    {'\u000A'}
                    Some of the concepts that we cover might be new to you
                    but we do our best to explain things as simple as
                    possible. If you need a refresher on a concept, you
                    can always go back and review past modules.
                    {'\u000A'}
                    {'\u000A'}
                    We also underline terms that people might find
                    confusing. If you click on an underlined word, you’ll
                    see the definition.`
            ],
            'dot_content': [
                `Reading short and simple passages of text that
                    explain course concepts`,
                `Reflecting on your own experiences with
                    endometriosis through short writing tasks or quizzes`,
                `Picking and working on goals or habits to improve
                    your health and well-being`,
                `Hearing stories of other patients with endometriosis
                    and advice from endometriosis experts`,
                `Answering multiple choice questions to check your
                    understanding of course concepts`
            ]
        }
    },
    {   
        'id': 'page5',
        'title': 'Is this course right for you?',
        'content': {
            'common_content': [
                `This course is designed for patients who have
                    endometriosis or suspect that they have endometriosis.
                    {'\u000A'}
                    {'\u000A'}
                    Perhaps you haven’t been diagnosed with endometriosis
                    but you have symptoms and wonder if you might have
                    endometriosis. Because of the delays in diagnosis and
                    lack of awareness of endometriosis, this is very
                    common and you’ve come to the right place. The most
                    common symptoms of endometriosis are:
                    {'\u000A'}`,
                `{'\u000A'}
                    You may also experience fatigue, diarrhea,
                    constipation, bloating or nausea, especially during
                    menstrual periods. Less common symptoms include
                    bleeding between menstrual cycles, pelvic pain during
                    exercise, ovulation pain, and acid reflux.
                    {'\u000A'}
                    {'\u000A'}
                    In rare cases, endometriosis is found on or around the
                    lungs, called thoracic endometriosis. Symptoms can
                    include coughing up blood, chest pain, and/or
                    shortness of breath with menstrual cycles.
                    {'\u000A'}
                    {'\u000A'}
                    Each case of endometriosis is unique. You might
                    experience one or several of these symptoms. Please
                    note that not all people with endometriosis menstruate
                    and you can still experience endometriosis symptoms
                    without menstruating.
                    {'\u000A'}
                    {'\u000A'}
                    Throughout this course, you will learn more about the
                    signs and symptoms of endometriosis as well as the
                    process for getting diagnosed. We will guide you
                    through finding the right providers to help you get
                    diagnosed and start a treatment plan.
                    {'\u000A'}
                    {'\u000A'}
                    Let’s get started!`
            ],
            'dot_content': [
                `Pelvic pain during menstruation and/or any other
                    time of the cycle, called dysmenorrhea`,
                `Painful sex, known as dyspareunia`,
                `Painful urination, known as dysuria`,
                `Painful bowel movements, known as dyschezia`
            ]
        }
    }
];

export function renderTextWithCommonFormat(text) {
    return (
        <Text style={{fontSize: theme.SIZES.B1}}>
            {text}
        </Text>
    );
}

export function renderTextWithDotFormat(texts) {
    return texts.map((text, index) => {
        return (
            <View
                style={{
                flexDirection: 'row',
                width: width - theme.SIZES.BASE * 6,
                }}>
                <Text
                style={{
                    fontSize: theme.SIZES.B2,
                    marginLeft: theme.SIZES.BASE,
                    color: theme.COLORS.PRIMARY2,
                }}>
                ●
                </Text>
                <Text
                style={{
                    fontSize: theme.SIZES.B1,
                    marginLeft: theme.SIZES.BASE * 0.5,
                }}>
                {text}
                </Text>
            </View>
        );
    });
}

export function renderTextWithTableFormat(texts) {
    let i = 0;
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {texts.map(datuRow => {
          i = i + 1;
          let j = 0;
          return (
            <View
              key={i}
              style={{
                flex: 1,
                alignSelf: 'stretch',
                flexDirection: 'row',
                borderWidth: 1,
                bottomBorderWidth: 0,
                topBorderWidth: 0,
                padding: theme.SIZES.BASE * 0.5,
              }}>
              {datuRow.map(dataItem => {
                j = j + 1;
                if (j <= 1) {
                  return (
                    <View key={j} style={{flex: 1, alignSelf: 'stretch'}}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: theme.COLORS.PRIMARY2,
                        }}>
                        {dataItem}
                      </Text>
                    </View>
                  );
                } else {
                  return (
                    <View key={j} style={{flex: 2, alignSelf: 'stretch'}}>
                      <Text>{dataItem}</Text>
                    </View>
                  );
                }
              })}
            </View>
          );
        })}
      </View>
    );
  }