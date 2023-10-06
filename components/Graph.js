import React from 'react';
import {View, Text} from 'react-native';
import {Defs, LinearGradient, Stop} from 'react-native-svg';
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryArea,
} from 'victory-native';
import {styles, theme} from '../constants';

export class LineGraph extends React.Component {
  render() {
    const {
      style,
      testID,
      title,
      data,
      secondPlotData,
      customPadding,
      customAxisProps,
      customDependantAxisProps,
      customTitleComponant,
      ...props
    } = this.props;
    return (
      <View testID={testID}>
        <Text
          style={{
            fontFamily: theme.FONTS.TEXT,
            fontSize: theme.SIZES.H6,
            marginTop: theme.SIZES.BASE * 2,
          }}>
          {title}
        </Text>
        {customTitleComponant && customTitleComponant()}
        <View style={styles.graphContainer}>
          <VictoryChart
            padding={{
              left: theme.SIZES.BASE * 4,
              right: theme.SIZES.BASE * 2,
              top: 0,
              bottom: theme.SIZES.BASE * 3,
              ...customPadding,
            }}
            domainPadding={{x: [0, 0], y: [0, 20]}}>
            <Defs>
              <LinearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
                <Stop
                  offset="0%"
                  stopColor={theme.COLORS.ERROR1}
                  stopOpacity="0.5"
                />
                <Stop
                  offset="75%"
                  stopColor={theme.COLORS.SECONDARY2}
                  stopOpacity="0.5"
                />
                <Stop
                  offset="100%"
                  stopColor={theme.COLORS.SECONDARY2}
                  stopOpacity="0.0"
                />
              </LinearGradient>
            </Defs>

            <VictoryArea
              data={data}
              interpolation="natural"
              style={{
                data: {
                  fill: secondPlotData ? theme.COLORS.TRANSPARENT : 'url(#lg)',
                  stroke: theme.COLORS.SECONDARY1,
                  strokeWidth: secondPlotData ? 10 : 4,
                },
              }}
            />

            {secondPlotData && (
              <VictoryArea
                data={secondPlotData}
                interpolation="natural"
                style={{
                  data: {
                    fill: theme.COLORS.TRANSPARENT,
                    stroke: theme.COLORS.TERTIARY1,
                    strokeWidth: 10,
                  },
                }}
              />
            )}

            <VictoryAxis
              dependentAxis
              style={{
                axis: {stroke: theme.COLORS.TRANSPARENT},
                axisLabel: {stroke: theme.COLORS.TEXT3},
                ticks: {stroke: theme.COLORS.TEXT3},
                tickLabels: {stroke: theme.COLORS.TEXT3},
              }}
              {...customDependantAxisProps}
            />
            <VictoryAxis
              style={{
                grid: {
                  fill: 'none',
                  stroke: theme.COLORS.BACKGROUND3,
                  strokeDasharray: '10, 5',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  pointerEvents: 'painted',
                },
                axis: {stroke: theme.COLORS.TRANSPARENT},
                axisLabel: {stroke: theme.COLORS.TEXT3},
                ticks: {stroke: theme.COLORS.TEXT3},
                tickLabels: {stroke: theme.COLORS.TEXT3},
              }}
              {...customAxisProps}
            />
          </VictoryChart>
        </View>
      </View>
    );
  }
}

export class BarGraph extends React.Component {
  render() {
    const {
      style,
      testID,
      title,
      data,
      customPadding,
      customAxisProps,
      customDependantAxisProps,
      customTitleComponant,
      horizontal = false,
      ...props
    } = this.props;
    return (
      <View testID={testID}>
        <Text
          style={{
            fontFamily: theme.FONTS.TEXT,
            fontSize: theme.SIZES.H6,
            marginTop: theme.SIZES.BASE * 2,
          }}>
          {title}
        </Text>

        {customTitleComponant && customTitleComponant()}
        <View style={styles.graphContainer}>
          <VictoryChart
            padding={{
              left: horizontal ? theme.SIZES.BASE * 7 : theme.SIZES.BASE * 4,
              right: theme.SIZES.BASE * 4,
              top: theme.SIZES.BASE * 2,
              bottom: theme.SIZES.BASE * 3,
            }}
            domainPadding={
              horizontal ? {x: [20, 0], y: [0, -40]} : {x: [20, 0], y: [0, 0]}
            }>
            <VictoryAxis
              dependentAxis
              style={{
                grid: {
                  fill: 'none',
                  stroke: theme.COLORS.BACKGROUND3,
                  strokeDasharray: '10, 5',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  pointerEvents: 'painted',
                },
                axis: {stroke: theme.COLORS.TRANSPARENT},
                axisLabel: {stroke: theme.COLORS.TEXT3},
                ticks: {stroke: theme.COLORS.TEXT3},
                tickLabels: {stroke: theme.COLORS.TEXT3},
              }}
              {...customDependantAxisProps}
            />
            <VictoryAxis
              style={{
                axis: {stroke: theme.COLORS.TRANSPARENT},
                axisLabel: {stroke: theme.COLORS.TEXT3},
                ticks: {stroke: theme.COLORS.TEXT3},
                tickLabels: {stroke: theme.COLORS.TEXT3},
              }}
              {...customAxisProps}
            />
            <VictoryBar
              horizontal={horizontal}
              cornerRadius={{
                topLeft: theme.SIZES.BASE * 0.7,
                topRight: theme.SIZES.BASE * 0.7,
                bottomLeft: theme.SIZES.BASE * 0.7,
                bottomRight: theme.SIZES.BASE * 0.7,
              }}
              style={{
                data: {
                  fill: theme.COLORS.PRIMARY2,
                  width: theme.SIZES.BASE * 2.2,
                  zIndex: 4,
                  elevation: 4,
                  opacity: 0.5,
                },
              }}
              data={
                horizontal ? data.slice(0, data.length - 1).reverse() : data
              }
            />
          </VictoryChart>
        </View>
      </View>
    );
  }
}
