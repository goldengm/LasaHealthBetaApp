import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Image,
  View,
  ScrollView,
  ActivityIndicator,
  DeviceEventEmitter,
} from 'react-native';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';
import {v4 as uuidv4} from 'uuid';
import {theme, styles, Animations} from '../constants';
import {Text, Overlay, Chip} from 'react-native-elements';
import {
  Button,
  Card,
  Footer,
  CheckBox,
  Icon,
  TouchableOpacity,
} from '../components';
import {setAppIntroTutorialCompleteAction} from '../redux/actions/userProfileActions';
import {addFollowUpHealthSurveyAction} from '../redux/actions/userProfileActions';
import {IconButton} from 'react-native-paper';
import {auth} from '../shared/firebaseUtils';

const {width, height} = Dimensions.get('screen');

export class SurveyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorialReadyToAdvance: true,
    };
  }

  componentWillUnmount() {}

  sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  closeTutorial = () => {
    this.props.setModalVisible(false);
  };

  getTutorialDescription = () => {
    if (this.props.surveyModalKey == 'followUpHealthSurveys') {
      return (
        <View>
          <Text
            style={{
              ...styles.boldTitle,
              textAlign: 'center',
              marginTop: 0,
              paddingTop: 0,
              color: theme.COLORS.PRIMARY2,
            }}>
            Health Survey
          </Text>
          <Text>
            Would you be willing to take a quick health survey to help us
            improve Lasa Health?
          </Text>
        </View>
      );
    } else if (this.props.surveyModalKey == 'ceapsFollowup2WeeksPrior') {
      return (
        <View>
          <Text
            style={{
              ...styles.boldTitle,
              textAlign: 'center',
              marginTop: 0,
              paddingTop: 0,
              color: theme.COLORS.PRIMARY2,
            }}>
            Important reminder for your upcoming surgery!
          </Text>
          <Text>
            Only two weeks until your surgery! It's okay to have mixed feelings
            about your upcoming surgery. Whether you're feeling anxious or
            hopeful, it's completely natural. We are here to support you every
            step of the way. 🌟
          </Text>

          <Text></Text>
          <Text>
            Now is the time to stop certain medications including herbal
            supplements, weight loss medications, Aspirin, and NSAIDs (like
            Ibuprofen). There might be other medications like blood-thinning
            medications that your doctor may have asked you to stop. If you
            can’t remember, you can contact your care team.
          </Text>
        </View>
      );
    } else if (this.props.surveyModalKey == 'ceapsFollowup1WeekPrior') {
      return (
        <View>
          <Text
            style={{
              ...styles.boldTitle,
              textAlign: 'center',
              marginTop: 0,
              paddingTop: 0,
              color: theme.COLORS.PRIMARY2,
            }}>
            Questions about surgery next week? Here’s what you need to know.
          </Text>
          <Text>
            Getting ready for your surgery? Here's a handy checklist of what to
            pack for your hospital stay:
          </Text>

          <Text></Text>
          <Text>
            Essential Documents: Don't forget your identification, insurance
            cards, and any necessary medical documents your doctor provided.
          </Text>
          <Text></Text>
          <Text>
            Comfortable Clothing: Pack loose, comfortable clothes for your
            journey to and from the hospital. You'll also want comfy pajamas or
            loungewear for your stay.
          </Text>
          <Text></Text>
          <Text>
            Toiletries: Bring your toothbrush, toothpaste, shampoo, soap, and
            any other personal hygiene items you prefer. Hospitals often provide
            basic toiletries, but having your own can be more comforting.
          </Text>
          <Text></Text>
          <Text>
            Glasses/Contact Lenses: If you wear glasses or contacts, make sure
            to pack them.
          </Text>
          <Text></Text>
          <Text>
            Chargers: Bring chargers for your phone and any other electronic
            devices you'll want to use during your stay.
          </Text>
          <Text></Text>
          <Text>
            Entertainment: Books, magazines, or electronic devices with
            headphones can help pass the time.
          </Text>
          <Text></Text>
          <Text>
            Medications: Bring any prescribed medications in their original
            containers.
          </Text>
          <Text></Text>
          <Text>
            Comfort Items: Consider bringing a favorite pillow, blanket, or
            other comfort items from home.
          </Text>
          <Text></Text>
          <Text>
            Snacks: Pack some light, non-perishable snacks for when you're
            allowed to eat after surgery. Packing a water bottle is also highly
            recommended!
          </Text>
          <Text></Text>
          <Text>
            List of Contacts: Have a list of important phone numbers ready in
            case you need to reach someone during your stay.
          </Text>
          <Text></Text>
          <Text>
            Remember, you may not need all these items, but having them can help
            make your hospital stay more comfortable. If you have any specific
            instructions from your doctor or hospital, be sure to follow those
            as well.
          </Text>
        </View>
      );
    } else if (this.props.surveyModalKey == 'ceapsFollowup1DayPrior') {
      return (
        <View>
          <Text
            style={{
              ...styles.boldTitle,
              textAlign: 'center',
              marginTop: 0,
              paddingTop: 0,
              color: theme.COLORS.PRIMARY2,
            }}>
            Tomorrow is the big day! Here's the final checklist.
          </Text>
          <Text>Tomorrow is the big day! Here's the final checklist:</Text>

          <Text></Text>
          <Text>
            Avoid eating anything after midnight on the night before surgery.
          </Text>
          <Text>Stay hydrated with clear liquids until the cutoff time.</Text>
          <Text>
            Start drinking clear liquids like Gatorade, water, or clear juices
            as instructed.
          </Text>
          <Text>
            You can take your regular medications on the morning of surgery with
            a sip of water unless advised otherwise.
          </Text>
          <Text>
            Remember to wash with chlorhexidine soap the night before and
            morning of your surgery for infection prevention.
          </Text>
          <Text>
            Take your regular medications with a sip of water unless advised
            otherwise.
          </Text>
          <Text>
            Arrive at the hospital at your scheduled time, and remember to have
            someone drive you home afterward.
          </Text>
          <Text>
            After surgery, please follow wound care instructions, avoid douching
            or tampons, and use a mini pad or sanitary napkin as needed.
          </Text>
          <Text></Text>
          <Text>
            You're in good hands, and we're here to support you every step of
            the way. Wishing you a smooth surgery and a speedy recovery! 🌼🏨
          </Text>
        </View>
      );
    } else if (this.props.surveyModalKey == 'ceapsFollowupDayOf') {
      return (
        <View>
          <Text
            style={{
              ...styles.boldTitle,
              textAlign: 'center',
              marginTop: 0,
              paddingTop: 0,
              color: theme.COLORS.PRIMARY2,
            }}>
            Day of Surgery
          </Text>
          <Text>
            We hope your surgery went well. Remember, everyone heals
            differently, and specific instructions may have been provided upon
            discharge. Here are some general post-operative guidelines:
          </Text>

          <Text></Text>
          <Text>Rest as much as needed during the first 2 weeks.</Text>
          <Text>Avoid heavy lifting and strenuous activities.</Text>
          <Text>Walking is encouraged for gentle exercise.</Text>
          <Text>Follow your doctor's pain management instructions.</Text>
          <Text>Don’t do any activity that causes pain or discomfort.</Text>
          <Text>Ensure a balanced diet with plenty of protein and fiber.</Text>
          <Text></Text>
          <Text>
            We're here to support you on your healing journey. Take it easy and
            let your care team know if you have any immediate concerns. 🏨💪
          </Text>
        </View>
      );
    } else if (this.props.surveyModalKey == 'ceapsFollowup1DayAfter') {
      return (
        <View>
          <Text
            style={{
              ...styles.boldTitle,
              textAlign: 'center',
              marginTop: 0,
              paddingTop: 0,
              color: theme.COLORS.PRIMARY2,
            }}>
            1 Day After Surgery
          </Text>
          <Text>
            We hope you were able to rest up after your surgery! Here are some
            tips that can be helpful in the first few days:
          </Text>

          <Text></Text>
          <Text>
            Many patients have vaginal discharge or bleeding after surgery. This
            might continue for weeks and is a normal part of the healing
            process. Make sure to not place anything in your vagina (tampons,
            menstrual cups, douching, sexual acitivity, etc.) until after your
            postoperative appointment.
          </Text>
          <Text></Text>
          <Text>
            Your sensation of having a full bladder might be altered from
            anesthesia, swelling, surgery, or catheter use. Avoid having the
            bladder become too full by emptying every 2-3 hours during the day.
            If you have pain or burning with urination, make sure to call your
            care team!
          </Text>
          <Text></Text>
          <Text>
            You might feel constipated or struggle to have a bowel movement.
            This is normal for the first 2 days after surgery, but here are some
            things that can help move your bowels:
          </Text>
          <Text></Text>
          <Text>
            Take a stool softener 1-3 times per day. You can get this medication
            over-the-counter at any pharmacy.
          </Text>
          <Text>
            Eat a high fiber diet with lots of fruits, veggies, and whole
            grains.
          </Text>
          <Text>Drink plenty of liquids.</Text>
          <Text>Chew gum!</Text>
          <Text></Text>
          <Text>
            Even if it is uncomfortable, make sure not to strain during bowel
            movements. If you still haven’t had a bowel movement after 3 days,
            take a laxative.
          </Text>
        </View>
      );
    } else if (this.props.surveyModalKey == 'ceapsFollowup3DaysAfter') {
      return (
        <View>
          <Text
            style={{
              ...styles.boldTitle,
              textAlign: 'center',
              marginTop: 0,
              paddingTop: 0,
              color: theme.COLORS.PRIMARY2,
            }}>
            3 Days After Surgery
          </Text>
          <Text>
            Hello again! It's been a few days since your surgery. Here are some
            additional reminders:
          </Text>

          <Text></Text>
          <Text>
            Pay attention to incision care based on the type of surgery you had.
          </Text>
          <Text>Take prescribed pain medication as directed.</Text>
          <Text>
            If needed, you can also take acetaminophen (Tylenol) and ibuprofen
            (Advil) unless advised otherwise.
          </Text>
          <Text>
            Constipation can be common due to pain meds, so follow the
            recommended steps to prevent it.
          </Text>
          <Text></Text>
          <Text>
            Remember, it's okay to take it slow during your recovery. You're
            doing great! 💊🍏
          </Text>
        </View>
      );
    } else if (this.props.surveyModalKey == 'ceapsFollowup1WeekAfter') {
      return (
        <View>
          <Text
            style={{
              ...styles.boldTitle,
              textAlign: 'center',
              marginTop: 0,
              paddingTop: 0,
              color: theme.COLORS.PRIMARY2,
            }}>
            One Week After Surgery
          </Text>
          <Text>
            Hey there, it's been a week since your surgery! Here's what to keep
            in mind:
          </Text>

          <Text></Text>
          <Text>
            Continue to monitor incisions for any signs of infection or issues.
          </Text>
          <Text>Keep following your pain management plan.</Text>
          <Text>
            Maintain a well-balanced diet with lots of protein and fiber.
          </Text>
          <Text>
            If you haven't had a bowel movement yet, consider taking a laxative
            as instructed.
          </Text>
          <Text></Text>
          <Text>
            Your body is on the road to recovery, and we're here to assist you
            along the way. Don't hesitate to reach out if you have any questions
            or concerns. 🌼🚶‍♀️
          </Text>
        </View>
      );
    } else if (this.props.surveyModalKey == 'ceapsFollowup2WeeksAfter') {
      return (
        <View>
          <Text
            style={{
              ...styles.boldTitle,
              textAlign: 'center',
              marginTop: 0,
              paddingTop: 0,
              color: theme.COLORS.PRIMARY2,
            }}>
            Two Weeks After Surgery
          </Text>
          <Text>
            Time flies! It's been two weeks since your surgery. Here's a quick
            reminder:
          </Text>

          <Text></Text>
          <Text>
            Continue to be mindful of your activity level, avoiding heavy
            lifting and strenuous activities.
          </Text>
          <Text>Keep an eye on your incisions and any changes.</Text>
          <Text>
            Follow your pain management plan, but you may find that you need
            pain meds less frequently.
          </Text>
          <Text>Stick to a healthy, balanced diet.</Text>
          <Text></Text>
          <Text>
            You're making progress, and we're proud of your dedication to
            recovery. If you have any questions or need support, we're just a
            call away! 🏥🌟
          </Text>
        </View>
      );
    } else if (this.props.surveyModalKey == 'ceapsFollowup1MonthAfter') {
      return (
        <View>
          <Text
            style={{
              ...styles.boldTitle,
              textAlign: 'center',
              marginTop: 0,
              paddingTop: 0,
              color: theme.COLORS.PRIMARY2,
            }}>
            One Month After Surgery
          </Text>
          <Text>
            Congratulations on reaching the one-month mark! Here's what to focus
            on now:
          </Text>

          <Text></Text>
          <Text>
            Gradually introduce light activities as advised by your doctor.
          </Text>
          <Text>
            Maintain good incision care and report any unusual symptoms.
          </Text>
          <Text>You may need pain meds less frequently or not at all.</Text>
          <Text>Keep enjoying a well-balanced diet and staying hydrated.</Text>
          <Text></Text>
          <Text>
            Your body is getting stronger every day. Keep up the great work, and
            don't hesitate to reach out if you need assistance or have any
            concerns. Your post operative appointment is approaching, too! 🌈📅
          </Text>
        </View>
      );
    } else if (this.props.surveyModalKey == 'ceapsFollowupPostOp') {
      return (
        <View>
          <Text
            style={{
              ...styles.boldTitle,
              textAlign: 'center',
              marginTop: 0,
              paddingTop: 0,
              color: theme.COLORS.PRIMARY2,
            }}>
            Preparing for Your Post Operative Appointment
          </Text>
          <Text>
            Your post operative appointment is just around the corner! Here's a
            reminder:
          </Text>

          <Text></Text>
          <Text>
            Your specific appointment details were provided in your preoperative
            packet.
          </Text>
          <Text></Text>
          <Text>Our nurses will call you to confirm the date and time.</Text>
          <Text>It's a crucial step to assess your recovery progress.</Text>
          <Text></Text>
          <Text>
            We're looking forward to seeing you and discussing your healing
            journey. If you have any questions before the appointment, feel free
            to reach out. Keep up the positive momentum! 🏨👩‍⚕️
          </Text>
        </View>
      );
    } else if (this.props.surveyModalKey == 'ceapsFollowupOngoingSupport') {
      return (
        <View>
          <Text
            style={{
              ...styles.boldTitle,
              textAlign: 'center',
              marginTop: 0,
              paddingTop: 0,
              color: theme.COLORS.PRIMARY2,
            }}>
            Ongoing Support and Emergencies
          </Text>
          <Text>As you continue your recovery, remember:</Text>

          <Text></Text>
          <Text>
            For routine questions, prescription refills, or non-life-threatening
            concerns, contact us during office hours at 786-882-9966.
          </Text>
          <Text>
            After hours, there's always a physician available by calling the
            same number.
          </Text>
          <Text>
            In case of a life-threatening emergency, call 911 or your local
            emergency medical service.
          </Text>
          <Text></Text>

          <Text>
            Your well-being is our priority, and we're here whenever you need
            assistance. Keep following your recovery plan! 🌼👨‍⚕️
          </Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text
            style={{
              ...styles.boldTitle,
              textAlign: 'center',
              marginTop: 0,
              paddingTop: 0,
              color: theme.COLORS.PRIMARY2,
            }}>
            Health Survey - Key Missing (TEST)
          </Text>
          <Text>Seems like the specific survey was not specified</Text>
        </View>
      );
    }
  };

  render() {
    const {
      navigation,
      modalVisible,
      setModalVisible,
      surveyModalKey,
      ...props
    } = this.props;

    return (
      <Overlay
        testID="surveyModalID"
        isVisible={modalVisible}
        onBackdropPress={() => {
          console.log('Overlay background pressed');
          this.closeTutorial();
        }}
        fullScreen={false}
        animationType="slide"
        backdropStyle={{
          backgroundColor: theme.COLORS.OVERLAY_BACKGROUND,
        }}
        overlayStyle={{
          backgroundColor: theme.COLORS.TRANSPARENT,
          elevation: 0,
          flex: 1,
          paddingVertical: 0,
          marginVertical: 0,
        }}>
        <View style={{flex: 1}}>
          <View
            style={{
              backgroundColor: theme.COLORS.TRANSPARENT,
            }}></View>

          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: theme.COLORS.TRANSPARENT,
              alignItems: 'center',
            }}>
            <ScrollView>
              <View>
                <View
                  style={{
                    backgroundColor: theme.COLORS.TRANSPARENT,
                    height: theme.SIZES.BASE * 4,
                  }}></View>

                <View
                  style={{
                    backgroundColor: theme.COLORS.WHITE,
                    borderRadius: 20,
                    marginHorizontal: theme.SIZES.BASE,
                    padding: theme.SIZES.BASE,
                    alignItems: 'center',
                    shadowColor: theme.COLORS.BLACK,
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5,
                  }}>
                  {this.getTutorialDescription()}

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      marginTop: theme.SIZES.BASE,

                      width: width - theme.SIZES.BASE * 8,
                    }}>
                    <View
                      style={{
                        alignContent: 'center',
                        alignItems: 'center',
                        paddingTop: 0,
                        marginTop: 0,
                      }}>
                      <Button
                        style={{
                          ...styles.button,
                          width: width / 2.0 - theme.SIZES.BASE * 5.0,
                          fontSize: 16,
                          fontWeight: '700',
                          textAlign: 'center',
                        }}
                        titleStyle={{
                          color: theme.COLORS.WHITE,
                          fontFamily: theme.FONTS.TEXT,
                        }}
                        title="No thank you"
                        onPress={() => {
                          this.props.dispatch(
                            addFollowUpHealthSurveyAction(
                              this.setupBeginTS,
                              {},
                            ),
                          );
                          this.closeTutorial();
                        }}></Button>
                    </View>
                    <View
                      style={{
                        alignContent: 'center',
                        alignItems: 'center',
                        paddingTop: 0,
                        marginTop: 0,
                      }}>
                      <Button
                        style={{
                          ...styles.button,
                          width: width / 2.0 - theme.SIZES.BASE * 5.0,
                          fontSize: 16,
                          fontWeight: '700',
                          textAlign: 'center',
                        }}
                        titleStyle={{
                          color: theme.COLORS.WHITE,
                          fontFamily: theme.FONTS.TEXT,
                        }}
                        title="Sure"
                        onPress={() => {
                          this.closeTutorial();
                          this.props.navigation.navigate({
                            name: 'Learn',
                            params: {
                              screen: 'HealthSurveyFollowUpScreen',
                            },
                          });
                        }}></Button>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </Overlay>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {};
};
export default connect(mapStateToProps)(SurveyModal);
