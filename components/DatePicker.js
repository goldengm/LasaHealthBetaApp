import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {theme} from '../constants';
import Button from './Button';
import Icon from './Icon';
import XDate from 'xdate';

import {getOS} from '../shared/PlatformUtils';
const iosPlatform = () => getOS() == 'ios';

const {width} = Dimensions.get('screen');

const convertToDateString = dateRaw => {
  //  if the date is already formatted as a string, make sure it's correctly formatted
  //  this makes a lot of assumptions, either the date is formatted as "mm-dd-yyy", "mm/dd/yyyy",
  //  "yyyy/mm/dd", "yyyy-mm-dd", or is a timestamp
  if (dateRaw.toString()[2] == '/') {
    let strParts = dateRaw.split('/');
    return strParts[2] + '-' + strParts[0] + '-' + strParts[1];
  } else if (dateRaw.toString()[2] == '-') {
    let strParts = dateRaw.split('-');
    return strParts[2] + '-' + strParts[0] + '-' + strParts[1];
  } else if (dateRaw.toString()[4] == '/') {
    // correct, just need to update dividing character to -
    return dateRaw.replace('/', '-');
  } else if (dateRaw.toString()[4] == '-') {
    // the date is already correctly formatted
    return dateRaw;
  } else {
    const date1 = new XDate(dateRaw);
    return date1.toString('yyyy-MM-dd');
  }
};

const convertToTimeString = dateRaw => {
  const date1 = new XDate(dateRaw);
  const hoursStr = date1.getHours() < 13 ? 'AM' : 'PM';
  return date1.toString('h:mm ') + hoursStr;
};

const initialDateValue = new Date();

isDateStrValid = dateStr => {
  if (!(dateStr == null) && dateStr != '') {
    return true;
  } else {
    return false;
  }
};

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    const {currentDate, customDatePickerMode, customOnDateChange} = this.props;

    let convertedDate = null;
    let convertedDateMessage = null;
    if (customDatePickerMode == 'time') {
      convertedDate = isDateStrValid(currentDate)
        ? convertToTimeString(currentDate)
        : convertToTimeString(initialDateValue);
      convertedDateMessage = 'Change time: ' + convertedDate;
    } else {
      convertedDate = isDateStrValid(currentDate)
        ? convertToDateString(currentDate)
        : convertToDateString(initialDateValue);
      convertedDateMessage = 'Change date: ' + convertedDate;
    }
    this.state = {
      value: convertedDateMessage,
      startDate: isDateStrValid(currentDate)
        ? new Date(convertedDate)
        : initialDateValue,
      showDate: false,
    };

    if (customOnDateChange) {
      customOnDateChange(convertedDate);
    }
  }

  componentDidMount() {
    
  }

  setDatePickerValue = async valueP => {
    this.setState({value: valueP});
  };

  setStartDate = date => {
    this.setState({startDate: date});
  };

  setShowDate = showDate => {
    this.setState({showDate: showDate});
  };

  onChangeDate = (event, selectedDate = this.state.startDate) => {
    const {customOnDateChange, customDatePickerMode} = this.props;

    let convertedSelectedDate = null;
    if (customDatePickerMode == 'time') {
      convertedSelectedDate = convertToTimeString(selectedDate);
    } else {
      convertedSelectedDate = convertToDateString(selectedDate);
    }

    const currentDate = convertedSelectedDate;

    this.setShowDate(false);
    this.setStartDate(new Date(selectedDate));
    let datePickerPromptStr =
      customDatePickerMode == 'time'
        ? 'Change time: '
        : 'Change date: '
    this.setDatePickerValue(datePickerPromptStr + currentDate);
    if (customOnDateChange) {
      customOnDateChange(currentDate);
    }
    console.log('Date changed: ', currentDate);
  };

  render() {
    const {
      iconName,
      iconFamily,
      style,
      customIconColor,
      customTextStyle,
      customButtonStyle,
      testID,
      customOnDateChange,
      customDatePickerMode = 'date',
      ...props
    } = this.props;

    return (
      <View>
        {iosPlatform() && (
          <DateTimePicker
            display="spinner"
            testID="dateTimePicker"
            value={this.state.startDate}
            mode={customDatePickerMode}
            is24Hour={false}
            onChange={this.onChangeDate}
            style={{width: width - theme.SIZES.BASE * 6}}
          />
        )}

        {!iosPlatform() && (
          <View>
            <Button
              testID={testID}
              onPress={() => {
                console.log(
                  'Change data pressed TMP: ',
                  this.state.startDate,
                  customDatePickerMode,
                );

                this.setShowDate(true);
              }}
              title={this.state.value}
              style={{
                ...styles.dropdown,
                marginBottom: theme.SIZES.BASE,
                ...customButtonStyle,
              }}
              titleStyle={{
                color: theme.COLORS.WHITE,
                marginRight: 6,
                fontSize: 14,
                ...customTextStyle,
              }}
              icon={
                <Icon
                  name={
                    customDatePickerMode == 'date'
                      ? 'calendar-outline'
                      : 'alarm-outline'
                  }
                  family="ionicon"
                  width={24}
                  height={24}
                  style={{top: -1}}
                  color={customIconColor ? customIconColor : theme.COLORS.WHITE}
                />
              }
              iconRight
            />
            {this.state.showDate && (
              <DateTimePicker
                testID="dateTimePicker"
                value={this.state.startDate}
                mode={customDatePickerMode}
                is24Hour={false}
                onChange={this.onChangeDate}
              />
            )}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dropdown: {
    marginTop: 0,
    marginLeft: -16,
    width: '100%',
    backgroundColor: theme.COLORS.DEFAULT,
    fontFamily: theme.FONTS.TEXT,
    borderRadius: 10,
  },
});

export default DatePicker;
