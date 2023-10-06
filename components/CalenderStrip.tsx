// @ts-nocheck
import React from 'react';
import {
  Text,
  View,
  Animated,
  Modal,
  NativeModules,
  StyleSheet,
  LayoutAnimation,
} from 'react-native';
import TouchableOpacity from './TouchableOpacity';

const {UIManager} = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

// //// @ts-expect-error
import {extractComponentProps} from 'react-native-calendars/src/componentUpdater';
import {parseDate, toMarkingFormat} from 'react-native-calendars/src/interface';
import CalendarList from 'react-native-calendars/src/calendar-list';
import XDate from 'xdate';
import memoize from 'memoize-one';
import Button from './Button';
import {theme} from '../constants';

const minCalHeight = 80;
const maxCalHeight = 380;

class HeaderMissing extends React.Component {
  render() {
    let indexCount = 0;

    return (
      <View
        style={{
          backgroundColor: theme.COLORS.WHITE,
          height: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 0,
          marginBottom: 0,
          marginHorizontal: theme.SIZES.BASE,
          zIndex: 1,
        }}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => {
          indexCount = indexCount + 1;
          return (
            <View
              style={{
                textAlign: 'center',
                textAlignVertical: 'center',
                marginTop: 12,
                flex: 1,
                alignContent: 'center',
                alignItems: 'center',
              }}
              key={indexCount}>
              <Text
                allowFontScaling={false}
                style={styles.weekday}
                numberOfLines={1}>
                {day}
              </Text>
            </View>
          );
        })}
      </View>
    );
  }
}

class InvisibleHeader extends React.Component {
  render() {
    return <View></View>;
  }
}

export default class CalenderStrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calenderHeight: minCalHeight,
      translateXY: new Animated.ValueXY({x: 0, y: 0}),
      calendarScrollable: false,
      selectedDay: parseDate(props.current) || new XDate(Date.now()),
      // headerMissingHeight: 30,
      isHeaderMissingVisible: true,
      //   topDay: parseDate(props.selected) || new XDate(Date.now()),
      legendModalVisible: false,
    };

    this.translateXYTracker = {x: 0, y: 0};
    this._unsubscribe = this.state.translateXY.addListener(value => {
      this.translateXYTracker = value;
    });

    this.currentMonth = this.state.selectedDay.clone();
  }

  componentWillUnmount() {
    this._unsubscribe.remove();
  }

  setLegendModalVisible = visible => {
    this.setState({legendModalVisible: visible});
  };

  legendModal = () => {
    const {legendModalVisible} = this.state;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={legendModalVisible}
          customOnBackdropPress={() => {
            this.setLegendModalVisible(!legendModalVisible);
          }}
          onRequestClose={() => {
            this.setLegendModalVisible(!legendModalVisible);
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 22,
            }}>
            <View
              style={{
                margin: 20,
                backgroundColor: theme.COLORS.WHITE,
                borderRadius: 20,
                padding: 35,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}>
              <Text style={styles.subTitle}>Calendar Legend:</Text>
              <View
                style={{
                  alignItems: 'flex-start',
                  marginBottom: theme.SIZES.BASE,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: theme.SIZES.BASE * 0.5,
                  }}>
                  <View
                    style={{
                      width: theme.SIZES.BASE * 1.2,
                      borderRadius: theme.SIZES.BASE,
                      backgroundColor: theme.COLORS.TRACK_SECONDARY,
                      marginRight: theme.SIZES.BASE * 0.5,
                    }}></View>
                  <Text>Menstruation Logged</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: theme.SIZES.BASE * 0.5,
                  }}>
                  <View
                    style={{
                      width: theme.SIZES.BASE * 1.2,
                      borderRadius: theme.SIZES.BASE,
                      backgroundColor: theme.COLORS.HEAL_SECONDARY,
                      marginRight: theme.SIZES.BASE * 0.5,
                    }}></View>
                  <Text>Symptom Logged</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: theme.SIZES.BASE * 0.5,
                  }}>
                  <View
                    style={{
                      width: theme.SIZES.BASE * 1.2,
                      borderRadius: theme.SIZES.BASE,
                      backgroundColor: appStyle.todayBackgroundColor,
                      marginRight: theme.SIZES.BASE * 0.5,
                    }}></View>
                  <Text>Today's Date</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: theme.SIZES.BASE * 0.5,
                  }}>
                  <View
                    style={{
                      width: theme.SIZES.BASE * 1.2,
                      borderRadius: theme.SIZES.BASE,
                      backgroundColor: appStyle.selectedDayBackgroundColor,
                      marginRight: theme.SIZES.BASE * 0.5,
                    }}></View>
                  <Text>Selected Date</Text>
                </View>
              </View>

              <Button
                style={{
                  borderRadius: 20,
                  padding: 10,
                  // elevation: 2,
                  backgroundColor: theme.COLORS.DEFAULT,
                  fontFamily: theme.FONTS.TEXT,
                }}
                onPress={() => {
                  this.setLegendModalVisible(!legendModalVisible);
                }}>
                <Text
                  style={{
                    color: theme.COLORS.WHITE,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontFamily: theme.FONTS.TEXT,
                  }}>
                  close
                </Text>
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  toggleCal = () => {
    LayoutAnimation.easeInEaseOut();
    const [
      calenderHeight,
      calendarScrollable,
      calendarDisplayFunc,
      isHeaderMissingVisible,
    ] =
      this.state['calenderHeight'] > minCalHeight
        ? [minCalHeight, false, this.displayWeeklyCalenderLayoutFromState, true]
        : [maxCalHeight, true, this.displayMonthlyCalenderLayout, false];
    this.setState({calenderHeight});
    this.setState({calendarScrollable});
    this.setState({isHeaderMissingVisible});

    calendarDisplayFunc();
  };

  renderCalendarList = () => {
    const {markedDates, customCalendarWidth} = this.props;
    const calendarListProps = extractComponentProps(CalendarList, this.props);
    const isMaxToggled = this.state['calenderHeight'] > minCalHeight;

    return (
      <Animated.View
        style={{
          transform: [
            {translateX: this.state['translateXY'].x},
            {translateY: this.state['translateXY'].y},
          ],
        }}>
        <CalendarList
          {...calendarListProps}
          ref={this.calendar}
          onDayPress={dayVal => {
            this.chooseDayFromCalendar(dayVal);
            if (!(this.props.customOnDayPress == null)) {
              this.props.customOnDayPress(dayVal);
            }
          }}
          scrollEnabled={this.state.calendarScrollable}
          current={this.currentMonth}
          markedDates={this.generateMarkings(
            this.state.selectedDay,
            markedDates,
          )}
          removeClippedSubviews={false}
          horizontal={true}
          pagingEnabled={true}
          customHeader={isMaxToggled ? null : InvisibleHeader}
          calendarWidth={customCalendarWidth}
          theme={{...appStyle}}
        />
      </Animated.View>
    );
  };

  enableCalendarScrolling = (enable = true) => {
    this.setState({
      calendarScrollable: enable,
    });

    // Enlarge calendarOffset here as a workaround on iOS to force repaint.
    // Otherwise the month after current one or before current one remains invisible.
    // The problem is caused by overflow: 'hidden' style, which we need for dragging
    // to be performant.
    // Another working solution for this bug would be to set removeClippedSubviews={false}
    // in CalendarList listView, but that might impact performance when scrolling
    // month list in expanded CalendarList.
    // Further info https://github.com/facebook/react-native/issues/1831
    // this.calendar?.current?.scrollToDay(this.state.selectedDay, 0 + 1, true);
  };

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
      [key]: {...(markedDates[key] || {}), ...{selected: true}},
    };
  });

  chooseDayFromCalendar = (d: any) => {
    this.chooseDay(d, !this.state.calendarScrollable);
  };

  chooseDay = (d: any, optimisticScroll: boolean) => {
    const day = parseDate(d);

    LayoutAnimation.easeInEaseOut();
    this.setState({
      calendarScrollable: false,
      selectedDay: day.clone(),
      calenderHeight: minCalHeight,
      isHeaderMissingVisible: true,
    });
    this.calendar?.current?.scrollToDay(day, 0, true);

    this.displayWeeklyCalenderLayout(day);
  };

  displayWeeklyCalenderLayoutFromState = () => {
    const day = this.state.selectedDay;
    this.displayWeeklyCalenderLayout(day);
  };

  displayWeeklyCalenderLayout = day => {
    const monthStartStr =
      day.getFullYear() +
      '-' +
      (day.getMonth() + 1).toString().padStart(2, '0') +
      '-01';
    const monthStartWeek = parseDate(monthStartStr).getWeek();

    this.scrollToWeekIndex(day.getWeek() - monthStartWeek);
  };

  displayMonthlyCalenderLayout = () => {
    this.scrollToWeekIndex(0);
  };

  scrollToWeekIndex = newWeekIndex => {
    const yWeeklyTransAmounts = [
      0, -45, -90, -135, -180, -225, -270, -315, -360,
    ];
    const newYValue = yWeeklyTransAmounts[newWeekIndex];

    Animated.timing(this.state['translateXY'], {
      toValue: {x: 0, y: newYValue},
      duration: 1000,
      useNativeDriver: false, // <-- Add this
    }).start();
  };

  renderToggleButton = () => {
    return (
      <View
        style={{
          alignContent: 'center',
          alignItems: 'center',
          flex: 1,
          height: 14,
          bottom: 0,
          alignItems: 'center',
          backgroundColor: appStyle.calendarBackground,
        }}>
        <TouchableOpacity
          style={{
            width: 38,
            height: 20,
            marginTop: 3,
            borderRadius: 3,
            backgroundColor: theme.COLORS.TRANSPARENT,
          }}
          onPress={() => {
            this.toggleCal();
          }}>
          <View
            style={{
              width: 38,
              height: 7,
              marginTop: 3,
              borderRadius: 3,
              backgroundColor: appStyle.agendaKnobColor,
            }}></View>
        </TouchableOpacity>
      </View>
    );
  };

  renderLegend = () => {
    return (
      <View
        style={{
          alignContent: 'flex-end',
          alignItems: 'flex-end',
          flex: 1,
          height: 14,
          width: 58,
          bottom: 0,
          top: 0,
          alignItems: 'flex-end',
          backgroundColor: theme.COLORS.TRANSPARENT,
        }}>
        <TouchableOpacity
          style={{
            width: 58,
            height: 20,
            backgroundColor: theme.COLORS.TRANSPARENT,
          }}
          onPress={() => {
            this.setLegendModalVisible(!this.state.legendModalVisible);
          }}>
          <View
            style={{
              width: 58,
              height: 17,
              backgroundColor: appStyle.textInactiveColor,
              alignItems: 'center',
            }}>
            <Text style={{color: theme.COLORS.DARK_SECONDARY}}>Legend</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        {this.legendModal()}
        <Animated.ScrollView
          style={[
            styles.animatedContainer,
            {height: this.state['calenderHeight']},
          ]}
          overScrollMode="never"
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={8}
          scrollsToTop={false}>
          {this.state.isHeaderMissingVisible && (
            <View
              style={{
                height: 30,
              }}>
              <HeaderMissing />
            </View>
          )}
          {this.renderCalendarList()}
        </Animated.ScrollView>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: theme.SIZES.BASE * 2,
          }}>
          <View style={{flex: 2}}></View>
          {this.renderToggleButton()}
          <View style={{flex: 1}}></View>
          {this.renderLegend()}
        </View>
      </View>
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
  textSecondaryColor: theme.COLORS.PRIMARY, // not in us,
  textDefaultColor: theme.COLORS.DEFAULT,
  textColor: theme.COLORS.DEFAULT,
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
  dayTextColor: theme.COLORS.DEFAULT,
  textDisabledColor: theme.COLORS.MUTED,
  textInactiveColor: theme.COLORS.MUTED,
  dotColor: theme.COLORS.INFO,
  selectedDotColor: theme.COLORS.WHITE,
  disabledDotColor: theme.COLORS.MUTED,
  inactiveDotColor: theme.COLORS.MUTED,
  todayDotColor: theme.COLORS.DEFAULT,
  arrowColor: theme.COLORS.INFO,
  disabledArrowColor: theme.COLORS.MUTED,
  monthTextColor: theme.COLORS.DEFAULT,
  indicatorColor: theme.COLORS.DEFAULT, // use the default color of React Native ActivityIndicato,
  agendaDayTextColor: theme.COLORS.PRIMARY,
  agendaDayNumColor: theme.COLORS.PRIMARY,
  agendaTodayColor: theme.COLORS.INFO,
  agendaKnobColor: theme.COLORS.INFO,
  todayButtonTextColor: theme.COLORS.INFO,
  todayButtonPosition: undefined, // right' / 'left'(default,
};

const styles = StyleSheet.create({
  subTitle: {
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    color: theme.COLORS.HEADER,
    fontFamily: theme.FONTS.TEXT,
  },
  container: {
    flex: 1,
    overflow: 'hidden',
    fontFamily: theme.FONTS.TEXT,
  },
  animatedContainer: {
    flex: 1,
    fontFamily: theme.FONTS.TEXT,
  },
  knob: {
    width: 38,
    height: 7,
    marginTop: 10,
    borderRadius: 3,
    backgroundColor: appStyle.agendaKnobColor,
    fontFamily: theme.FONTS.TEXT,
  },
  weekdays: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 15,
    paddingBottom: 7,
    backgroundColor: appStyle.calendarBackground,
    fontFamily: theme.FONTS.TEXT,
  },
  header: {
    overflow: 'hidden',
    justifyContent: 'flex-end',
    position: 'absolute',
    height: '100%',
    width: '100%',
    fontFamily: theme.FONTS.TEXT,
  },
  knobContainer: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    height: 24,
    bottom: 0,
    alignItems: 'center',
    backgroundColor: appStyle.calendarBackground,
    fontFamily: theme.FONTS.TEXT,
  },
  weekday: {
    width: 32,
    textAlign: 'center',
    color: appStyle.textSectionTitleColor,
    fontSize: appStyle.textDayHeaderFontSize,
    fontWeight: appStyle.textDayHeaderFontWeight,
    fontFamily: theme.FONTS.TEXT,
  },
  scrollPadStyle: {
    position: 'absolute',
    width: 80,
    fontFamily: theme.FONTS.TEXT,
  },
});
