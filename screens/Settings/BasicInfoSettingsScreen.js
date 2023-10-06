import React from 'react';
import {ScrollView, Dimensions, View, Modal} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {connect} from 'react-redux';

import {theme, styles, Images} from '../../constants';
import {
  EditableListitemCard,
  Footer,
  RoundedTopContainer,
} from '../../components';
import {KeyboardAvoidingView} from 'react-native';
import ScreenTemplateWrapper from '../../shared/ScreenTemplateWrapper';
import {getOS} from '../../shared/PlatformUtils';

const iosPlatform = () => getOS() == 'ios';
const {width, height} = Dimensions.get('screen');

const allCountriesList = [
  {title: 'Afghanistan'},
  {title: 'Albania'},
  {title: 'Algeria'},
  {title: 'Andorra'},
  {title: 'Angola'},
  {title: 'Antigua and Barbuda'},
  {title: 'Argentina'},
  {title: 'Armenia'},
  {title: 'Australia'},
  {title: 'Austria'},
  {title: 'Azerbaijan'},
  {title: 'Bahamas'},
  {title: 'Bahrain'},
  {title: 'Bangladesh'},
  {title: 'Barbados'},
  {title: 'Belarus'},
  {title: 'Belgium'},
  {title: 'Belize'},
  {title: 'Benin'},
  {title: 'Bhutan'},
  {title: 'Bolivia'},
  {title: 'Bosnia and Herzegovina'},
  {title: 'Botswana'},
  {title: 'Brazil'},
  {title: 'Brunei'},
  {title: 'Bulgaria'},
  {title: 'Burkina Faso'},
  {title: 'Burundi'},
  {title: "Côte d'Ivoire"},
  {title: 'Cabo Verde'},
  {title: 'Cambodia'},
  {title: 'Cameroon'},
  {title: 'Canada'},
  {title: 'Central African Republic'},
  {title: 'Chad'},
  {title: 'Chile'},
  {title: 'China'},
  {title: 'Colombia'},
  {title: 'Comoros'},
  {title: 'Congo (Congo-Brazzaville)'},
  {title: 'Costa Rica'},
  {title: 'Croatia'},
  {title: 'Cuba'},
  {title: 'Cyprus'},
  {title: 'Czechia (Czech Republic)'},
  {title: 'Democratic Republic of the Congo'},
  {title: 'Denmark'},
  {title: 'Djibouti'},
  {title: 'Dominica'},
  {title: 'Dominican Republic'},
  {title: 'Ecuador'},
  {title: 'Egypt'},
  {title: 'El Salvador'},
  {title: 'Equatorial Guinea'},
  {title: 'Eritrea'},
  {title: 'Estonia'},
  {title: "Eswatini (fmr, 'Swaziland')"},
  {title: 'Ethiopia'},
  {title: 'Fiji'},
  {title: 'Finland'},
  {title: 'France'},
  {title: 'Gabon'},
  {title: 'Gambia'},
  {title: 'Georgia'},
  {title: 'Germany'},
  {title: 'Ghana'},
  {title: 'Greece'},
  {title: 'Grenada'},
  {title: 'Guatemala'},
  {title: 'Guinea'},
  {title: 'Guinea-Bissau'},
  {title: 'Guyana'},
  {title: 'Haiti'},
  {title: 'Holy See'},
  {title: 'Honduras'},
  {title: 'Hungary'},
  {title: 'Iceland'},
  {title: 'India'},
  {title: 'Indonesia'},
  {title: 'Iran'},
  {title: 'Iraq'},
  {title: 'Ireland'},
  {title: 'Israel'},
  {title: 'Italy'},
  {title: 'Jamaica'},
  {title: 'Japan'},
  {title: 'Jordan'},
  {title: 'Kazakhstan'},
  {title: 'Kenya'},
  {title: 'Kiribati'},
  {title: 'Kuwait'},
  {title: 'Kyrgyzstan'},
  {title: 'Laos'},
  {title: 'Latvia'},
  {title: 'Lebanon'},
  {title: 'Lesotho'},
  {title: 'Liberia'},
  {title: 'Libya'},
  {title: 'Liechtenstein'},
  {title: 'Lithuania'},
  {title: 'Luxembourg'},
  {title: 'Madagascar'},
  {title: 'Malawi'},
  {title: 'Malaysia'},
  {title: 'Maldives'},
  {title: 'Mali'},
  {title: 'Malta'},
  {title: 'Marshall Islands'},
  {title: 'Mauritania'},
  {title: 'Mauritius'},
  {title: 'Mexico'},
  {title: 'Micronesia'},
  {title: 'Moldova'},
  {title: 'Monaco'},
  {title: 'Mongolia'},
  {title: 'Montenegro'},
  {title: 'Morocco'},
  {title: 'Mozambique'},
  {title: 'Myanmar (formerly Burma)'},
  {title: 'Namibia'},
  {title: 'Nauru'},
  {title: 'Nepal'},
  {title: 'Netherlands'},
  {title: 'New Zealand'},
  {title: 'Nicaragua'},
  {title: 'Niger'},
  {title: 'Nigeria'},
  {title: 'North Korea'},
  {title: 'North Macedonia'},
  {title: 'Norway'},
  {title: 'Oman'},
  {title: 'Pakistan'},
  {title: 'Palau'},
  {title: 'Palestine State'},
  {title: 'Panama'},
  {title: 'Papua New Guinea'},
  {title: 'Paraguay'},
  {title: 'Peru'},
  {title: 'Philippines'},
  {title: 'Poland'},
  {title: 'Portugal'},
  {title: 'Qatar'},
  {title: 'Romania'},
  {title: 'Russia'},
  {title: 'Rwanda'},
  {title: 'Saint Kitts and Nevis'},
  {title: 'Saint Lucia'},
  {title: 'Saint Vincent and the Grenadines'},
  {title: 'Samoa'},
  {title: 'San Marino'},
  {title: 'Sao Tome and Principe'},
  {title: 'Saudi Arabia'},
  {title: 'Senegal'},
  {title: 'Serbia'},
  {title: 'Seychelles'},
  {title: 'Sierra Leone'},
  {title: 'Singapore'},
  {title: 'Slovakia'},
  {title: 'Slovenia'},
  {title: 'Solomon Islands'},
  {title: 'Somalia'},
  {title: 'South Africa'},
  {title: 'South Korea'},
  {title: 'South Sudan'},
  {title: 'Spain'},
  {title: 'Sri Lanka'},
  {title: 'Sudan'},
  {title: 'Suriname'},
  {title: 'Sweden'},
  {title: 'Switzerland'},
  {title: 'Syria'},
  {title: 'Tajikistan'},
  {title: 'Tanzania'},
  {title: 'Thailand'},
  {title: 'Timor-Leste'},
  {title: 'Togo'},
  {title: 'Tonga'},
  {title: 'Trinidad and Tobago'},
  {title: 'Tunisia'},
  {title: 'Turkey'},
  {title: 'Turkmenistan'},
  {title: 'Tuvalu'},
  {title: 'Uganda'},
  {title: 'Ukraine'},
  {title: 'United Arab Emirates'},
  {title: 'United Kingdom'},
  {title: 'United States of America'},
  {title: 'Uruguay'},
  {title: 'Uzbekistan'},
  {title: 'Vanuatu'},
  {title: 'Venezuela'},
  {title: 'Vietnam'},
  {title: 'Yemen'},
  {title: 'Zambia'},
  {title: 'Zimbabwe'},
];

const basicInfoKeys = {
  nickname: {
    visibleName: 'Nickname',
    inputName: 'nickname',
    inputType: 'textInput',
    singleOptionList: [],
    multiOptionList: [],
    iconName: 'person-outline',
    iconType: 'ionicon',
  },
  birthday: {
    visibleName: 'Birthday',
    inputName: 'birthday',
    inputType: 'datePicker',
    singleOptionList: [],
    multiOptionList: [],
    iconName: 'calendar-outline',
    iconType: 'ionicon',
  },
  country: {
    visibleName: 'Country',
    inputName: 'country',
    inputType: 'singleOption',
    singleOptionList: allCountriesList,
    multiOptionList: [],
    iconName: 'flag-outline',
    iconType: 'ionicon',
  },
  zipCode: {
    visibleName: 'Zip Code',
    inputName: 'zipCode',
    inputType: 'textInput',
    singleOptionList: [],
    multiOptionList: [],
    iconName: 'business-outline',
    iconType: 'ionicon',
  },
  schoolStatus: {
    visibleName: 'School Status',
    inputName: 'schoolStatus',
    inputType: 'singleOption',
    singleOptionList: [{title: 'Full-time'}, {title: 'Part-time'}],
    multiOptionList: [],
    iconName: 'school-outline',
    iconType: 'ionicon',
  },
  workingStatus: {
    visibleName: 'Working Status',
    inputName: 'workingStatus',
    inputType: 'singleOption',
    singleOptionList: [
      {title: 'Full-time'},
      {title: 'Part-time'},
      {title: 'Self Employed'},
      {title: 'Retired'},
      {title: 'No'},
    ],
    multiOptionList: [],
    iconName: 'construct-outline',
    iconType: 'ionicon',
  },
  preferredPronouns: {
    visibleName: 'Preferred Pronouns',
    inputName: 'preferredPronouns',
    inputType: 'singleOption',
    singleOptionList: [
      {title: 'She/her/hers'},
      {title: 'He/him/his'},
      {title: 'They/them/their'},
      {title: 'Other'},
    ],
    multiOptionList: [],
    iconName: 'person-outline',
    iconType: 'ionicon',
  },
  sexAtBirth: {
    visibleName: 'Sex At Birth',
    inputName: 'sexAtBirth',
    inputType: 'singleOption',
    singleOptionList: [{title: 'Female'}, {title: 'Male'}],
    multiOptionList: [],
    iconName: 'transgender-outline',
    iconType: 'ionicon',
  },
};

class BasicInfoSettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderTMP: false,
    };
  }

  getIconColor = index => {
    if (index % 3 == 0) {
      return theme.COLORS.PRIMARY4;
    } else if (index % 3 == 1) {
      return theme.COLORS.SECONDARY3;
    } else {
      return theme.COLORS.TERTIARY2;
    }
  };

  renderSettings = navigation => {
    return (
      <RoundedTopContainer
        style={{
          ...styles.group,
          minHeight: height - theme.SIZES.BASE * 8.6,
          marginTop: theme.SIZES.BASE * 0.8,
        }}>
        <View
          style={{
            marginHorizontal: theme.SIZES.BASE,
            marginVertical: theme.SIZES.BASE * 0.5,
          }}>
          {Object.entries(
            this.props.userProfile.OnboardingAnswers.onboarding,
          ).map((val, index) => {
            if (Object.keys(basicInfoKeys).includes(val[0])) {
              return (
                <View
                  key={index}
                  style={{marginVertical: theme.SIZES.BASE * 0.5}}>
                  <EditableListitemCard
                    name={basicInfoKeys[val[0]]['visibleName']}
                    value={val[1]}
                    iconName={basicInfoKeys[val[0]]['iconName']}
                    iconType={basicInfoKeys[val[0]]['iconType']}
                    iconBackgroundColor={this.getIconColor(index)}
                    dispatch={this.props.dispatch}
                    inputName={basicInfoKeys[val[0]]['inputName']}
                    inputType={basicInfoKeys[val[0]]['inputType']}
                    singleOptionList={basicInfoKeys[val[0]]['singleOptionList']}
                    multiOptionList={basicInfoKeys[val[0]]['multiOptionList']}
                  />
                </View>
              );
            } else {
              return null;
            }
          })}
        </View>
      </RoundedTopContainer>
    );
  };

  render() {
    const {navigation} = this.props;

    return (
      <ScreenTemplateWrapper
        headerPadding={true}
        width={width}
        customImageName={Images.ui.BackgroundGradient1}>
        <View
          style={{
            flex: 1,
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <StatusBar
              style={{
                backgroundColor: theme.COLORS.TRANSPARENT,
                fontFamily: theme.FONTS.TEXT,
              }}
              backgroundColor={theme.COLORS.TRANSPARENT}
            />

            <KeyboardAvoidingView
              style={{
                flex: 1,
              }}
              behavior="padding"
              enabled={iosPlatform()}>
              <ScrollView
                testID="pageScrollview"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{width}}>
                {this.renderSettings(navigation)}
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
          <Footer navigation={navigation} tabName="Settings" />
        </View>
      </ScreenTemplateWrapper>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    userProfile: state.userProfile,
    connect: state.connect,
    localState: state,
  };
};
export default connect(mapStateToProps)(BasicInfoSettingsScreen);
