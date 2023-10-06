import React from 'react';

import {CalendarList as RNCalendar} from 'react-native-calendars';
import {parseDate, toMarkingFormat} from 'react-native-calendars/src/interface';

import XDate from 'xdate';
import memoize from 'memoize-one';
import {theme} from '../constants';

import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['en'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul.',
    'Aug',
    'Sep.',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: [
    'S       ',
    'M     ',
    'T   ',
    'W',
    '   T',
    '     F',
    '       S',
  ],
  today: 'Today',
};
LocaleConfig.defaultLocale = 'en';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: parseDate(props.current) || new XDate(),
    };
  }

  componentWillUnmount() {}

  generateMarkings = memoize((selectedDay, markedDates, items = {}) => {
    if (!markedDates) {
      markedDates = {};
      Object.keys(items).forEach(key => {
        if (items[key] && items[key].length) {
          markedDates[key] = {
            marked: true,
          };
        }
      });
    }

    const key = toMarkingFormat(selectedDay);

    return {
      ...markedDates,
      [key]: {
        ...(markedDates[key] || {}),
        ...{
          endingDay: true,
          startingDay: true,
          color: theme.COLORS.SECONDARY1,
          textColor: theme.COLORS.WHITE,
        },
      },
    };
  });

  chooseDayFromCalendar = d => {
    this.chooseDay(d);
  };

  chooseDay = d => {
    const day = parseDate(d);

    this.setState({
      selectedDay: day.clone(),
    });
  };

  render() {
    const {
      style,
      testID,
      customOnDayPress,
      markedDates,
      calendarWidth,
      // calendarHeight,
      ...props
    } = this.props;
    return (
      <RNCalendar
        testID={testID}
        style={{...style}}
        hideArrows={false}
        hideExtraDays={false}
        markedDates={this.generateMarkings(this.state.selectedDay, markedDates)}
        onDayPress={dayVal => {
          //  onDayPress always chooses a day in UTC time, need to adjust selection
          //  to local timezone
          this.chooseDayFromCalendar(dayVal);
          if (!(customOnDayPress == null)) {
            customOnDayPress(
              Math.floor(dayVal.timestamp / 60000.0) +
                XDate(Date.now()).getTimezoneOffset(),
            );
          }
        }}
        markingType={'period'}
        horizontal={true}
        animateScroll={true}
        pagingEnabled={true}
        calendarWidth={calendarWidth}
        theme={{
          ...appStyle,
        }}
        {...props}
      />
    );
  }
}

const appStyle = {
  foregroundColor: theme.COLORS.WHITE,
  backgroundColor: theme.COLORS.WHITE, // Agenda's reservations bg colo,
  separatorColor: theme.COLORS.WHITE, // not in us,
  processedColor: '#a7e0a3', // not in us,
  processingColor: '#ffce5c', // not in us,
  failedColor: '#f67e7e', // not in us,
  markedColor: theme.COLORS.SUCCESS,
  textSecondaryColor: theme.COLORS.TEXT1, // not in us,
  textDefaultColor: theme.COLORS.TEXT1,
  textColor: theme.COLORS.TEXT1,
  textLinkColor: theme.COLORS.INFO,
  textDayFontFamily: theme.FONTS.TEXT,
  textMonthFontFamily: theme.FONTS.TEXT,
  textDayHeaderFontFamily: theme.FONTS.TEXT,
  todayButtonFontFamily: theme.FONTS.TEXT,
  textDayFontWeight: '300',
  textMonthFontWeight: '300',
  textDayHeaderFontWeight: undefined,
  todayButtonFontWeight: '600',
  textDayFontSize: 16,
  textMonthFontSize: 16,
  textDayHeaderFontSize: 13,
  todayButtonFontSize: 14,
  textDayStyle: undefined,
  dotStyle: undefined,
  arrowStyle: undefined,
  calendarBackground: theme.COLORS.WHITE,
  textSectionTitleColor: theme.COLORS.DARK_SECONDARY,
  textSectionTitleDisabledColor: theme.COLORS.MUTED,
  selectedDayBackgroundColor: theme.COLORS.INFO,
  selectedDayTextColor: theme.COLORS.WHITE,
  todayBackgroundColor: theme.COLORS.DEFAULT,
  todayTextColor: theme.COLORS.WHITE,
  dayTextColor: theme.COLORS.TEXT1,
  textDisabledColor: theme.COLORS.MUTED,
  textInactiveColor: theme.COLORS.MUTED,
  dotColor: theme.COLORS.INFO,
  selectedDotColor: theme.COLORS.WHITE,
  disabledDotColor: theme.COLORS.MUTED,
  inactiveDotColor: theme.COLORS.MUTED,
  todayDotColor: theme.COLORS.DEFAULT,
  arrowColor: theme.COLORS.TEXT2,
  disabledArrowColor: theme.COLORS.MUTED,
  monthTextColor: theme.COLORS.TEXT1,
  indicatorColor: theme.COLORS.DEFAULT, // use the default color of React Native ActivityIndicato,
  agendaDayTextColor: theme.COLORS.TEXT1,
  agendaDayNumColor: theme.COLORS.TEXT1,
  agendaTodayColor: theme.COLORS.INFO,
  agendaKnobColor: theme.COLORS.INFO,
  todayButtonTextColor: theme.COLORS.INFO,
  todayButtonPosition: undefined, // right' / 'left'(default,
  textSectionTitleColor: '#b6c1cd',
};
