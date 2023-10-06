import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {connect, useSelector, useDispatch} from 'react-redux';
import XDate from 'xdate';

// screens
import ConnectScreen from '../screens/Connect/ConnectScreen';
import FindANewAmieScreen from '../screens/Connect/FindANewAmieScreen';
import ProposedMatchesScreen from '../screens/Connect/ProposedMatchesScreen';
import UserProfileScreen from '../screens/Connect/UserProfileScreen';
import AmieProfileScreen from '../screens/Connect/AmieProfileScreen';
import ReportUserScreen from '../screens/Connect/ReportUserScreen';
import ChatScreen from '../screens/Connect/ChatScreen';
import ChatbotScreen from '../screens/Connect/ChatbotScreen';
import CustomerSupportScreen from '../screens/CustomerSupportScreen';
import FindAFriendScreen from '../screens/Connect/FindAFriendScreen';
import ViewFriendsScreen from '../screens/Connect/ViewFriendsScreen';
import LearnScreen from '../screens/Learn/LearnScreen';
import LearnConditionScreen from '../screens/Learn/LearnConditionScreen';

//  Q&A
import QnAScreen from '../screens/Learn/qna/QnAScreen';
import QnADiscussionScreen from '../screens/Learn/qna/QnADiscussionScreen';
import QnAReplyScreen from '../screens/Learn/qna/QnAReplyScreen';

//  settings
import AppSettingsScreen from '../screens/Settings/AppSettingsScreen';
import NotificationSettingsScreen from '../screens/Settings/NotificationSettingsScreen';
import BasicInfoSettingsScreen from '../screens/Settings/BasicInfoSettingsScreen';
import HealthProfileSettingsScreen from '../screens/Settings/HealthProfileSettingsScreen';
import ContraceptionSettingsScreen from '../screens/Settings/ContraceptionSettingsScreen';
import PillDetailsSettingsScreen from '../screens/Settings/PillDetailsSettingsScreen';
import PatchDetailsSettingsScreen from '../screens/Settings/PatchDetailsSettingsScreen';
import VaginalRingDetailsSettingsScreen from '../screens/Settings/VaginalRingDetailsSettingsScreen';
import InitialSymptomSettingsScreen from '../screens/Settings/InitialSymptomSettingsScreen';
import InitialConditionsSettingsScreen from '../screens/Settings/InitialConditionsSettingsScreen';
import ConditionDetailsSettingsScreen from '../screens/Settings/ConditionDetailsSettingsScreen';

// //  premium
// import PremiumOptionsScreen from '../screens/Premium/PremiumOptionsScreen';
// import PremiumAccessScreen from '../screens/Premium/PremiumAccessScreen';

//  endo101 course
import Endo101ProgressScreen from '../screens/Learn/courses/endo101/Endo101ProgressScreen';
//  endo101 week 1
import Endo101Week1Screen from '../screens/Learn/courses/endo101/week1/Endo101Week1Screen';
import Endo101Week1CitationsScreen from '../screens/Learn/courses/endo101/week1/Endo101Week1CitationsScreen';
import Endo101Week1Module1Page1 from '../screens/Learn/courses/endo101/week1/module1/Endo101Week1Module1Page1';
import Endo101Week1Module1Page2 from '../screens/Learn/courses/endo101/week1/module1/Endo101Week1Module1Page2';
import Endo101Week1Module1Page3 from '../screens/Learn/courses/endo101/week1/module1/Endo101Week1Module1Page3';
import Endo101Week1Module1Page4 from '../screens/Learn/courses/endo101/week1/module1/Endo101Week1Module1Page4';
import Endo101Week1Module1Page5 from '../screens/Learn/courses/endo101/week1/module1/Endo101Week1Module1Page5';

import Endo100Week1Screen from '../screens/Learn/courses/endo100/week1/Endo100Week1Screen';
import Endo100Week1CitationsScreen from '../screens/Learn/courses/endo100/week1/Endo100Week1CitationsScreen';
import Endo100Week1Module1 from '../screens/Learn/courses/endo100/week1/module1/Endo100Week1Module1';

import Endo101Week1Module2Page1 from '../screens/Learn/courses/endo101/week1/module2/Endo101Week1Module2Page1';
import Endo101Week1Module2Page2 from '../screens/Learn/courses/endo101/week1/module2/Endo101Week1Module2Page2';
import Endo101Week1Module2Page3 from '../screens/Learn/courses/endo101/week1/module2/Endo101Week1Module2Page3';
import Endo101Week1Module2Page4 from '../screens/Learn/courses/endo101/week1/module2/Endo101Week1Module2Page4';

import Endo101Week1Module3Page1 from '../screens/Learn/courses/endo101/week1/module3/Endo101Week1Module3Page1';
import Endo101Week1Module3Page2 from '../screens/Learn/courses/endo101/week1/module3/Endo101Week1Module3Page2';
import Endo101Week1Module3Page3 from '../screens/Learn/courses/endo101/week1/module3/Endo101Week1Module3Page3';

import Endo101Week1Module4Page1 from '../screens/Learn/courses/endo101/week1/module4/Endo101Week1Module4Page1';
import Endo101Week1Module4Page2 from '../screens/Learn/courses/endo101/week1/module4/Endo101Week1Module4Page2';
import Endo101Week1Module4Page3 from '../screens/Learn/courses/endo101/week1/module4/Endo101Week1Module4Page3';
import Endo101Week1Module4Page4 from '../screens/Learn/courses/endo101/week1/module4/Endo101Week1Module4Page4';
import Endo101Week1Module4Page5 from '../screens/Learn/courses/endo101/week1/module4/Endo101Week1Module4Page5';

import Endo101Week1Module5Page1 from '../screens/Learn/courses/endo101/week1/module5/Endo101Week1Module5Page1';
import Endo101Week1Module5Page2 from '../screens/Learn/courses/endo101/week1/module5/Endo101Week1Module5Page2';
import Endo101Week1Module5Page3 from '../screens/Learn/courses/endo101/week1/module5/Endo101Week1Module5Page3';
import Endo101Week1Module5Page4 from '../screens/Learn/courses/endo101/week1/module5/Endo101Week1Module5Page4';

import Endo101Week1Module6Page1 from '../screens/Learn/courses/endo101/week1/module6/Endo101Week1Module6Page1';
import Endo101Week1Module6Page2 from '../screens/Learn/courses/endo101/week1/module6/Endo101Week1Module6Page2';
import Endo101Week1Module6Page3 from '../screens/Learn/courses/endo101/week1/module6/Endo101Week1Module6Page3';
import Endo101Week1Module6Page4 from '../screens/Learn/courses/endo101/week1/module6/Endo101Week1Module6Page4';
import Endo101Week1Module6Page5 from '../screens/Learn/courses/endo101/week1/module6/Endo101Week1Module6Page5';
import Endo101Week1Module6Page6 from '../screens/Learn/courses/endo101/week1/module6/Endo101Week1Module6Page6';

//  endo101 week 2

import Endo101Week2Screen from '../screens/Learn/courses/endo101/week2/Endo101Week2Screen';
import Endo101Week2CitationsScreen from '../screens/Learn/courses/endo101/week2/Endo101Week2CitationsScreen';
import Endo101Week2Module1Page1 from '../screens/Learn/courses/endo101/week2/module1/Endo101Week2Module1Page1';
import Endo101Week2Module1Page2 from '../screens/Learn/courses/endo101/week2/module1/Endo101Week2Module1Page2';
import Endo101Week2Module1Page3 from '../screens/Learn/courses/endo101/week2/module1/Endo101Week2Module1Page3';
import Endo101Week2Module1Page4 from '../screens/Learn/courses/endo101/week2/module1/Endo101Week2Module1Page4';
import Endo101Week2Module1Page5 from '../screens/Learn/courses/endo101/week2/module1/Endo101Week2Module1Page5';

import Endo101Week2Module2Page1 from '../screens/Learn/courses/endo101/week2/module2/Endo101Week2Module2Page1';
import Endo101Week2Module2Page2 from '../screens/Learn/courses/endo101/week2/module2/Endo101Week2Module2Page2';
import Endo101Week2Module2Page3 from '../screens/Learn/courses/endo101/week2/module2/Endo101Week2Module2Page3';

import Endo101Week2Module3Page1 from '../screens/Learn/courses/endo101/week2/module3/Endo101Week2Module3Page1';
import Endo101Week2Module3Page2 from '../screens/Learn/courses/endo101/week2/module3/Endo101Week2Module3Page2';
import Endo101Week2Module3Page3 from '../screens/Learn/courses/endo101/week2/module3/Endo101Week2Module3Page3';
import Endo101Week2Module3Page4 from '../screens/Learn/courses/endo101/week2/module3/Endo101Week2Module3Page4';

import Endo101Week2Module4Page1 from '../screens/Learn/courses/endo101/week2/module4/Endo101Week2Module4Page1';
import Endo101Week2Module4Page2 from '../screens/Learn/courses/endo101/week2/module4/Endo101Week2Module4Page2';
import Endo101Week2Module4Page3 from '../screens/Learn/courses/endo101/week2/module4/Endo101Week2Module4Page3';
import Endo101Week2Module4Page4 from '../screens/Learn/courses/endo101/week2/module4/Endo101Week2Module4Page4';
import Endo101Week2Module4Page5 from '../screens/Learn/courses/endo101/week2/module4/Endo101Week2Module4Page5';
import Endo101Week2Module4Page6 from '../screens/Learn/courses/endo101/week2/module4/Endo101Week2Module4Page6';
import Endo101Week2Module4Page7 from '../screens/Learn/courses/endo101/week2/module4/Endo101Week2Module4Page7';

import Endo101Week2Module5Page1 from '../screens/Learn/courses/endo101/week2/module5/Endo101Week2Module5Page1';
import Endo101Week2Module5Page2 from '../screens/Learn/courses/endo101/week2/module5/Endo101Week2Module5Page2';

import Endo101Week2Module6Page1 from '../screens/Learn/courses/endo101/week2/module6/Endo101Week2Module6Page1';
import Endo101Week2Module6Page2 from '../screens/Learn/courses/endo101/week2/module6/Endo101Week2Module6Page2';
import Endo101Week2Module6Page3 from '../screens/Learn/courses/endo101/week2/module6/Endo101Week2Module6Page3';
import Endo101Week2Module6Page4 from '../screens/Learn/courses/endo101/week2/module6/Endo101Week2Module6Page4';
import Endo101Week2Module6Page5 from '../screens/Learn/courses/endo101/week2/module6/Endo101Week2Module6Page5';
import Endo101Week2Module6Page6 from '../screens/Learn/courses/endo101/week2/module6/Endo101Week2Module6Page6';
import Endo101Week2Module6Page7 from '../screens/Learn/courses/endo101/week2/module6/Endo101Week2Module6Page7';

//  endo101 week 3

import Endo101Week3Screen from '../screens/Learn/courses/endo101/week3/Endo101Week3Screen';
import Endo101Week3CitationsScreen from '../screens/Learn/courses/endo101/week3/Endo101Week3CitationsScreen';
import Endo101Week3Module1Page1 from '../screens/Learn/courses/endo101/week3/module1/Endo101Week3Module1Page1';
import Endo101Week3Module1Page2 from '../screens/Learn/courses/endo101/week3/module1/Endo101Week3Module1Page2';
import Endo101Week3Module1Page3 from '../screens/Learn/courses/endo101/week3/module1/Endo101Week3Module1Page3';
import Endo101Week3Module1Page4 from '../screens/Learn/courses/endo101/week3/module1/Endo101Week3Module1Page4';
import Endo101Week3Module1Page5 from '../screens/Learn/courses/endo101/week3/module1/Endo101Week3Module1Page5';

import Endo101Week3Module2Page1 from '../screens/Learn/courses/endo101/week3/module2/Endo101Week3Module2Page1';
import Endo101Week3Module2Page2 from '../screens/Learn/courses/endo101/week3/module2/Endo101Week3Module2Page2';
import Endo101Week3Module2Page3 from '../screens/Learn/courses/endo101/week3/module2/Endo101Week3Module2Page3';
import Endo101Week3Module2Page4 from '../screens/Learn/courses/endo101/week3/module2/Endo101Week3Module2Page4';
import Endo101Week3Module2Page5 from '../screens/Learn/courses/endo101/week3/module2/Endo101Week3Module2Page5';
import Endo101Week3Module2Page6 from '../screens/Learn/courses/endo101/week3/module2/Endo101Week3Module2Page6';

import Endo101Week3Module3Page1 from '../screens/Learn/courses/endo101/week3/module3/Endo101Week3Module3Page1';
import Endo101Week3Module3Page2 from '../screens/Learn/courses/endo101/week3/module3/Endo101Week3Module3Page2';
import Endo101Week3Module3Page3 from '../screens/Learn/courses/endo101/week3/module3/Endo101Week3Module3Page3';

import Endo101Week3Module4Page1 from '../screens/Learn/courses/endo101/week3/module4/Endo101Week3Module4Page1';
import Endo101Week3Module4Page2 from '../screens/Learn/courses/endo101/week3/module4/Endo101Week3Module4Page2';
import Endo101Week3Module4Page3 from '../screens/Learn/courses/endo101/week3/module4/Endo101Week3Module4Page3';

import Endo101Week3Module5Page1 from '../screens/Learn/courses/endo101/week3/module5/Endo101Week3Module5Page1';
import Endo101Week3Module5Page2 from '../screens/Learn/courses/endo101/week3/module5/Endo101Week3Module5Page2';
import Endo101Week3Module5Page3 from '../screens/Learn/courses/endo101/week3/module5/Endo101Week3Module5Page3';
import Endo101Week3Module5Page4 from '../screens/Learn/courses/endo101/week3/module5/Endo101Week3Module5Page4';
import Endo101Week3Module5Page5 from '../screens/Learn/courses/endo101/week3/module5/Endo101Week3Module5Page5';
import Endo101Week3Module5Page6 from '../screens/Learn/courses/endo101/week3/module5/Endo101Week3Module5Page6';
import Endo101Week3Module5Page7 from '../screens/Learn/courses/endo101/week3/module5/Endo101Week3Module5Page7';
import Endo101Week3Module5Page8 from '../screens/Learn/courses/endo101/week3/module5/Endo101Week3Module5Page8';

import Endo101Week3Module6Page1 from '../screens/Learn/courses/endo101/week3/module6/Endo101Week3Module6Page1';
import Endo101Week3Module6Page2 from '../screens/Learn/courses/endo101/week3/module6/Endo101Week3Module6Page2';

import Endo101Week3Module7Page1 from '../screens/Learn/courses/endo101/week3/module7/Endo101Week3Module7Page1';
import Endo101Week3Module7Page2 from '../screens/Learn/courses/endo101/week3/module7/Endo101Week3Module7Page2';
import Endo101Week3Module7Page3 from '../screens/Learn/courses/endo101/week3/module7/Endo101Week3Module7Page3';
import Endo101Week3Module7Page4 from '../screens/Learn/courses/endo101/week3/module7/Endo101Week3Module7Page4';
import Endo101Week3Module7Page5 from '../screens/Learn/courses/endo101/week3/module7/Endo101Week3Module7Page5';
import Endo101Week3Module7Page6 from '../screens/Learn/courses/endo101/week3/module7/Endo101Week3Module7Page6';
import Endo101Week3Module7Page7 from '../screens/Learn/courses/endo101/week3/module7/Endo101Week3Module7Page7';

//  endo101 week 4

import Endo101Week4Screen from '../screens/Learn/courses/endo101/week4/Endo101Week4Screen';
import Endo101Week4CitationsScreen from '../screens/Learn/courses/endo101/week4/Endo101Week4CitationsScreen';
import Endo101Week4Module1Page1 from '../screens/Learn/courses/endo101/week4/module1/Endo101Week4Module1Page1';
import Endo101Week4Module1Page2 from '../screens/Learn/courses/endo101/week4/module1/Endo101Week4Module1Page2';
import Endo101Week4Module1Page3 from '../screens/Learn/courses/endo101/week4/module1/Endo101Week4Module1Page3';
import Endo101Week4Module1Page4 from '../screens/Learn/courses/endo101/week4/module1/Endo101Week4Module1Page4';

import Endo101Week4Module2Page1 from '../screens/Learn/courses/endo101/week4/module2/Endo101Week4Module2Page1';
import Endo101Week4Module2Page2 from '../screens/Learn/courses/endo101/week4/module2/Endo101Week4Module2Page2';
import Endo101Week4Module2Page3 from '../screens/Learn/courses/endo101/week4/module2/Endo101Week4Module2Page3';
import Endo101Week4Module2Page4 from '../screens/Learn/courses/endo101/week4/module2/Endo101Week4Module2Page4';

import Endo101Week4Module3Page1 from '../screens/Learn/courses/endo101/week4/module3/Endo101Week4Module3Page1';
import Endo101Week4Module3Page2 from '../screens/Learn/courses/endo101/week4/module3/Endo101Week4Module3Page2';
import Endo101Week4Module3Page3 from '../screens/Learn/courses/endo101/week4/module3/Endo101Week4Module3Page3';
import Endo101Week4Module3Page4 from '../screens/Learn/courses/endo101/week4/module3/Endo101Week4Module3Page4';
import Endo101Week4Module3Page5 from '../screens/Learn/courses/endo101/week4/module3/Endo101Week4Module3Page5';

import Endo101Week4Module4Page1 from '../screens/Learn/courses/endo101/week4/module4/Endo101Week4Module4Page1';
import Endo101Week4Module4Page2 from '../screens/Learn/courses/endo101/week4/module4/Endo101Week4Module4Page2';

import Endo101Week4Module5Page1 from '../screens/Learn/courses/endo101/week4/module5/Endo101Week4Module5Page1';
import Endo101Week4Module5Page2 from '../screens/Learn/courses/endo101/week4/module5/Endo101Week4Module5Page2';
import Endo101Week4Module5Page3 from '../screens/Learn/courses/endo101/week4/module5/Endo101Week4Module5Page3';

import Endo101Week4Module6Page1 from '../screens/Learn/courses/endo101/week4/module6/Endo101Week4Module6Page1';
import Endo101Week4Module6Page2 from '../screens/Learn/courses/endo101/week4/module6/Endo101Week4Module6Page2';

import Endo101Week4Module7Page1 from '../screens/Learn/courses/endo101/week4/module7/Endo101Week4Module7Page1';
import Endo101Week4Module7Page2 from '../screens/Learn/courses/endo101/week4/module7/Endo101Week4Module7Page2';
import Endo101Week4Module7Page3 from '../screens/Learn/courses/endo101/week4/module7/Endo101Week4Module7Page3';

import Endo101Week4Module8Page1 from '../screens/Learn/courses/endo101/week4/module8/Endo101Week4Module8Page1';
import Endo101Week4Module8Page2 from '../screens/Learn/courses/endo101/week4/module8/Endo101Week4Module8Page2';
import Endo101Week4Module8Page3 from '../screens/Learn/courses/endo101/week4/module8/Endo101Week4Module8Page3';
import Endo101Week4Module8Page4 from '../screens/Learn/courses/endo101/week4/module8/Endo101Week4Module8Page4';
import Endo101Week4Module8Page5 from '../screens/Learn/courses/endo101/week4/module8/Endo101Week4Module8Page5';

import Endo101Week4Module9Page1 from '../screens/Learn/courses/endo101/week4/module9/Endo101Week4Module9Page1';
import Endo101Week4Module9Page2 from '../screens/Learn/courses/endo101/week4/module9/Endo101Week4Module9Page2';
import Endo101Week4Module9Page3 from '../screens/Learn/courses/endo101/week4/module9/Endo101Week4Module9Page3';
import Endo101Week4Module9Page4 from '../screens/Learn/courses/endo101/week4/module9/Endo101Week4Module9Page4';
import Endo101Week4Module9Page5 from '../screens/Learn/courses/endo101/week4/module9/Endo101Week4Module9Page5';
import Endo101Week4Module9Page6 from '../screens/Learn/courses/endo101/week4/module9/Endo101Week4Module9Page6';

//  endo101 week 5

import Endo101Week5Screen from '../screens/Learn/courses/endo101/week5/Endo101Week5Screen';
import Endo101Week5CitationsScreen from '../screens/Learn/courses/endo101/week5/Endo101Week5CitationsScreen';

import Endo101Week5Module1Page1 from '../screens/Learn/courses/endo101/week5/module1/Endo101Week5Module1Page1';
import Endo101Week5Module1Page2 from '../screens/Learn/courses/endo101/week5/module1/Endo101Week5Module1Page2';
import Endo101Week5Module1Page3 from '../screens/Learn/courses/endo101/week5/module1/Endo101Week5Module1Page3';
import Endo101Week5Module1Page4 from '../screens/Learn/courses/endo101/week5/module1/Endo101Week5Module1Page4';
import Endo101Week5Module1Page5 from '../screens/Learn/courses/endo101/week5/module1/Endo101Week5Module1Page5';

import Endo101Week5Module2Page1 from '../screens/Learn/courses/endo101/week5/module2/Endo101Week5Module2Page1';
import Endo101Week5Module2Page2 from '../screens/Learn/courses/endo101/week5/module2/Endo101Week5Module2Page2';
import Endo101Week5Module2Page3 from '../screens/Learn/courses/endo101/week5/module2/Endo101Week5Module2Page3';
import Endo101Week5Module2Page4 from '../screens/Learn/courses/endo101/week5/module2/Endo101Week5Module2Page4';

import Endo101Week5Module3Page1 from '../screens/Learn/courses/endo101/week5/module3/Endo101Week5Module3Page1';
import Endo101Week5Module3Page2 from '../screens/Learn/courses/endo101/week5/module3/Endo101Week5Module3Page2';
import Endo101Week5Module3Page3 from '../screens/Learn/courses/endo101/week5/module3/Endo101Week5Module3Page3';
import Endo101Week5Module3Page4 from '../screens/Learn/courses/endo101/week5/module3/Endo101Week5Module3Page4';
import Endo101Week5Module3Page5 from '../screens/Learn/courses/endo101/week5/module3/Endo101Week5Module3Page5';

import Endo101Week5Module4Page1 from '../screens/Learn/courses/endo101/week5/module4/Endo101Week5Module4Page1';
import Endo101Week5Module4Page2 from '../screens/Learn/courses/endo101/week5/module4/Endo101Week5Module4Page2';
import Endo101Week5Module4Page3 from '../screens/Learn/courses/endo101/week5/module4/Endo101Week5Module4Page3';
import Endo101Week5Module4Page4 from '../screens/Learn/courses/endo101/week5/module4/Endo101Week5Module4Page4';

import Endo101Week5Module5Page1 from '../screens/Learn/courses/endo101/week5/module5/Endo101Week5Module5Page1';
import Endo101Week5Module5Page2 from '../screens/Learn/courses/endo101/week5/module5/Endo101Week5Module5Page2';
import Endo101Week5Module5Page3 from '../screens/Learn/courses/endo101/week5/module5/Endo101Week5Module5Page3';

import Endo101Week5Module6Page1 from '../screens/Learn/courses/endo101/week5/module6/Endo101Week5Module6Page1';
import Endo101Week5Module6Page2 from '../screens/Learn/courses/endo101/week5/module6/Endo101Week5Module6Page2';
import Endo101Week5Module6Page3 from '../screens/Learn/courses/endo101/week5/module6/Endo101Week5Module6Page3';
import Endo101Week5Module6Page4 from '../screens/Learn/courses/endo101/week5/module6/Endo101Week5Module6Page4';
import Endo101Week5Module6Page5 from '../screens/Learn/courses/endo101/week5/module6/Endo101Week5Module6Page5';
import Endo101Week5Module6Page6 from '../screens/Learn/courses/endo101/week5/module6/Endo101Week5Module6Page6';

import Endo101Week5Module7Page1 from '../screens/Learn/courses/endo101/week5/module7/Endo101Week5Module7Page1';
import Endo101Week5Module7Page2 from '../screens/Learn/courses/endo101/week5/module7/Endo101Week5Module7Page2';
import Endo101Week5Module7Page3 from '../screens/Learn/courses/endo101/week5/module7/Endo101Week5Module7Page3';
import Endo101Week5Module7Page4 from '../screens/Learn/courses/endo101/week5/module7/Endo101Week5Module7Page4';
import Endo101Week5Module7Page5 from '../screens/Learn/courses/endo101/week5/module7/Endo101Week5Module7Page5';
import Endo101Week5Module7Page6 from '../screens/Learn/courses/endo101/week5/module7/Endo101Week5Module7Page6';
import Endo101Week5Module7Page7 from '../screens/Learn/courses/endo101/week5/module7/Endo101Week5Module7Page7';

//  endo101 week 6

import Endo101Week6Screen from '../screens/Learn/courses/endo101/week6/Endo101Week6Screen';
import Endo101Week6CitationsScreen from '../screens/Learn/courses/endo101/week6/Endo101Week6CitationsScreen';
import Endo101Week6Module1Page1 from '../screens/Learn/courses/endo101/week6/module1/Endo101Week6Module1Page1';
import Endo101Week6Module1Page2 from '../screens/Learn/courses/endo101/week6/module1/Endo101Week6Module1Page2';
import Endo101Week6Module1Page3 from '../screens/Learn/courses/endo101/week6/module1/Endo101Week6Module1Page3';
import Endo101Week6Module1Page4 from '../screens/Learn/courses/endo101/week6/module1/Endo101Week6Module1Page4';
import Endo101Week6Module1Page5 from '../screens/Learn/courses/endo101/week6/module1/Endo101Week6Module1Page5';
import Endo101Week6Module1Page6 from '../screens/Learn/courses/endo101/week6/module1/Endo101Week6Module1Page6';

import Endo101Week6Module2Page1 from '../screens/Learn/courses/endo101/week6/module2/Endo101Week6Module2Page1';
import Endo101Week6Module2Page2 from '../screens/Learn/courses/endo101/week6/module2/Endo101Week6Module2Page2';
import Endo101Week6Module2Page3 from '../screens/Learn/courses/endo101/week6/module2/Endo101Week6Module2Page3';
import Endo101Week6Module2Page4 from '../screens/Learn/courses/endo101/week6/module2/Endo101Week6Module2Page4';
import Endo101Week6Module2Page5 from '../screens/Learn/courses/endo101/week6/module2/Endo101Week6Module2Page5';
import Endo101Week6Module2Page6 from '../screens/Learn/courses/endo101/week6/module2/Endo101Week6Module2Page6';

import Endo101Week6Module3Page1 from '../screens/Learn/courses/endo101/week6/module3/Endo101Week6Module3Page1';
import Endo101Week6Module3Page2 from '../screens/Learn/courses/endo101/week6/module3/Endo101Week6Module3Page2';
import Endo101Week6Module3Page3 from '../screens/Learn/courses/endo101/week6/module3/Endo101Week6Module3Page3';
import Endo101Week6Module3Page4 from '../screens/Learn/courses/endo101/week6/module3/Endo101Week6Module3Page4';
import Endo101Week6Module3Page5 from '../screens/Learn/courses/endo101/week6/module3/Endo101Week6Module3Page5';

import Endo101Week6Module4Page1 from '../screens/Learn/courses/endo101/week6/module4/Endo101Week6Module4Page1';
import Endo101Week6Module4Page2 from '../screens/Learn/courses/endo101/week6/module4/Endo101Week6Module4Page2';
import Endo101Week6Module4Page3 from '../screens/Learn/courses/endo101/week6/module4/Endo101Week6Module4Page3';
import Endo101Week6Module4Page4 from '../screens/Learn/courses/endo101/week6/module4/Endo101Week6Module4Page4';

import Endo101Week6Module5Page1 from '../screens/Learn/courses/endo101/week6/module5/Endo101Week6Module5Page1';
import Endo101Week6Module5Page2 from '../screens/Learn/courses/endo101/week6/module5/Endo101Week6Module5Page2';

import Endo101Week6Module6Page1 from '../screens/Learn/courses/endo101/week6/module6/Endo101Week6Module6Page1';
import Endo101Week6Module6Page2 from '../screens/Learn/courses/endo101/week6/module6/Endo101Week6Module6Page2';
import Endo101Week6Module6Page3 from '../screens/Learn/courses/endo101/week6/module6/Endo101Week6Module6Page3';
import Endo101Week6Module6Page4 from '../screens/Learn/courses/endo101/week6/module6/Endo101Week6Module6Page4';

import Endo101Week6Module7Page1 from '../screens/Learn/courses/endo101/week6/module7/Endo101Week6Module7Page1';
import Endo101Week6Module7Page2 from '../screens/Learn/courses/endo101/week6/module7/Endo101Week6Module7Page2';
import Endo101Week6Module7Page3 from '../screens/Learn/courses/endo101/week6/module7/Endo101Week6Module7Page3';
import Endo101Week6Module7Page4 from '../screens/Learn/courses/endo101/week6/module7/Endo101Week6Module7Page4';
import Endo101Week6Module7Page5 from '../screens/Learn/courses/endo101/week6/module7/Endo101Week6Module7Page5';
import Endo101Week6Module7Page6 from '../screens/Learn/courses/endo101/week6/module7/Endo101Week6Module7Page6';
import Endo101Week6Module7Page7 from '../screens/Learn/courses/endo101/week6/module7/Endo101Week6Module7Page7';

//  endo101 week 7

import Endo101Week7Screen from '../screens/Learn/courses/endo101/week7/Endo101Week7Screen';
import Endo101Week7CitationsScreen from '../screens/Learn/courses/endo101/week7/Endo101Week7CitationsScreen';
import Endo101Week7Module1Page1 from '../screens/Learn/courses/endo101/week7/module1/Endo101Week7Module1Page1';
import Endo101Week7Module1Page2 from '../screens/Learn/courses/endo101/week7/module1/Endo101Week7Module1Page2';
import Endo101Week7Module1Page3 from '../screens/Learn/courses/endo101/week7/module1/Endo101Week7Module1Page3';
import Endo101Week7Module1Page4 from '../screens/Learn/courses/endo101/week7/module1/Endo101Week7Module1Page4';
import Endo101Week7Module1Page5 from '../screens/Learn/courses/endo101/week7/module1/Endo101Week7Module1Page5';

import Endo101Week7Module2Page1 from '../screens/Learn/courses/endo101/week7/module2/Endo101Week7Module2Page1';
import Endo101Week7Module2Page2 from '../screens/Learn/courses/endo101/week7/module2/Endo101Week7Module2Page2';

import Endo101Week7Module3Page1 from '../screens/Learn/courses/endo101/week7/module3/Endo101Week7Module3Page1';
import Endo101Week7Module3Page2 from '../screens/Learn/courses/endo101/week7/module3/Endo101Week7Module3Page2';
import Endo101Week7Module3Page3 from '../screens/Learn/courses/endo101/week7/module3/Endo101Week7Module3Page3';
import Endo101Week7Module3Page4 from '../screens/Learn/courses/endo101/week7/module3/Endo101Week7Module3Page4';
import Endo101Week7Module3Page5 from '../screens/Learn/courses/endo101/week7/module3/Endo101Week7Module3Page5';
import Endo101Week7Module3Page6 from '../screens/Learn/courses/endo101/week7/module3/Endo101Week7Module3Page6';
import Endo101Week7Module3Page7 from '../screens/Learn/courses/endo101/week7/module3/Endo101Week7Module3Page7';
import Endo101Week7Module3Page8 from '../screens/Learn/courses/endo101/week7/module3/Endo101Week7Module3Page8';
import Endo101Week7Module3Page9 from '../screens/Learn/courses/endo101/week7/module3/Endo101Week7Module3Page9';
import Endo101Week7Module3Page10 from '../screens/Learn/courses/endo101/week7/module3/Endo101Week7Module3Page10';

import Endo101Week7Module4Page1 from '../screens/Learn/courses/endo101/week7/module4/Endo101Week7Module4Page1';
import Endo101Week7Module4Page2 from '../screens/Learn/courses/endo101/week7/module4/Endo101Week7Module4Page2';
import Endo101Week7Module4Page3 from '../screens/Learn/courses/endo101/week7/module4/Endo101Week7Module4Page3';
import Endo101Week7Module4Page4 from '../screens/Learn/courses/endo101/week7/module4/Endo101Week7Module4Page4';

import Endo101Week7Module5Page1 from '../screens/Learn/courses/endo101/week7/module5/Endo101Week7Module5Page1';
import Endo101Week7Module5Page2 from '../screens/Learn/courses/endo101/week7/module5/Endo101Week7Module5Page2';
import Endo101Week7Module5Page3 from '../screens/Learn/courses/endo101/week7/module5/Endo101Week7Module5Page3';
import Endo101Week7Module5Page4 from '../screens/Learn/courses/endo101/week7/module5/Endo101Week7Module5Page4';
import Endo101Week7Module5Page5 from '../screens/Learn/courses/endo101/week7/module5/Endo101Week7Module5Page5';

import Endo101Week7Module6Page1 from '../screens/Learn/courses/endo101/week7/module6/Endo101Week7Module6Page1';
import Endo101Week7Module6Page2 from '../screens/Learn/courses/endo101/week7/module6/Endo101Week7Module6Page2';

import Endo101Week7Module7Page1 from '../screens/Learn/courses/endo101/week7/module7/Endo101Week7Module7Page1';
import Endo101Week7Module7Page2 from '../screens/Learn/courses/endo101/week7/module7/Endo101Week7Module7Page2';
import Endo101Week7Module7Page3 from '../screens/Learn/courses/endo101/week7/module7/Endo101Week7Module7Page3';
import Endo101Week7Module7Page4 from '../screens/Learn/courses/endo101/week7/module7/Endo101Week7Module7Page4';
import Endo101Week7Module7Page5 from '../screens/Learn/courses/endo101/week7/module7/Endo101Week7Module7Page5';
import Endo101Week7Module7Page6 from '../screens/Learn/courses/endo101/week7/module7/Endo101Week7Module7Page6';
import Endo101Week7Module7Page7 from '../screens/Learn/courses/endo101/week7/module7/Endo101Week7Module7Page7';

//  endo101 week 8

import Endo101Week8Screen from '../screens/Learn/courses/endo101/week8/Endo101Week8Screen';
import Endo101Week8CitationsScreen from '../screens/Learn/courses/endo101/week8/Endo101Week8CitationsScreen';
import Endo101Week8Module1Page1 from '../screens/Learn/courses/endo101/week8/module1/Endo101Week8Module1Page1';
import Endo101Week8Module1Page2 from '../screens/Learn/courses/endo101/week8/module1/Endo101Week8Module1Page2';
import Endo101Week8Module1Page3 from '../screens/Learn/courses/endo101/week8/module1/Endo101Week8Module1Page3';
import Endo101Week8Module1Page4 from '../screens/Learn/courses/endo101/week8/module1/Endo101Week8Module1Page4';

import Endo101Week8Module2Page1 from '../screens/Learn/courses/endo101/week8/module2/Endo101Week8Module2Page1';
import Endo101Week8Module2Page2 from '../screens/Learn/courses/endo101/week8/module2/Endo101Week8Module2Page2';
import Endo101Week8Module2Page3 from '../screens/Learn/courses/endo101/week8/module2/Endo101Week8Module2Page3';
import Endo101Week8Module2Page4 from '../screens/Learn/courses/endo101/week8/module2/Endo101Week8Module2Page4';
import Endo101Week8Module2Page5 from '../screens/Learn/courses/endo101/week8/module2/Endo101Week8Module2Page5';

import Endo101Week8Module3Page1 from '../screens/Learn/courses/endo101/week8/module3/Endo101Week8Module3Page1';
import Endo101Week8Module3Page2 from '../screens/Learn/courses/endo101/week8/module3/Endo101Week8Module3Page2';
import Endo101Week8Module3Page3 from '../screens/Learn/courses/endo101/week8/module3/Endo101Week8Module3Page3';
import Endo101Week8Module3Page4 from '../screens/Learn/courses/endo101/week8/module3/Endo101Week8Module3Page4';
import Endo101Week8Module3Page5 from '../screens/Learn/courses/endo101/week8/module3/Endo101Week8Module3Page5';
import Endo101Week8Module3Page6 from '../screens/Learn/courses/endo101/week8/module3/Endo101Week8Module3Page6';
import Endo101Week8Module3Page7 from '../screens/Learn/courses/endo101/week8/module3/Endo101Week8Module3Page7';

import Endo101Week8Module4Page1 from '../screens/Learn/courses/endo101/week8/module4/Endo101Week8Module4Page1';
import Endo101Week8Module4Page2 from '../screens/Learn/courses/endo101/week8/module4/Endo101Week8Module4Page2';
import Endo101Week8Module4Page3 from '../screens/Learn/courses/endo101/week8/module4/Endo101Week8Module4Page3';
import Endo101Week8Module4Page4 from '../screens/Learn/courses/endo101/week8/module4/Endo101Week8Module4Page4';
import Endo101Week8Module4Page5 from '../screens/Learn/courses/endo101/week8/module4/Endo101Week8Module4Page5';
import Endo101Week8Module4Page6 from '../screens/Learn/courses/endo101/week8/module4/Endo101Week8Module4Page6';
import Endo101Week8Module4Page7 from '../screens/Learn/courses/endo101/week8/module4/Endo101Week8Module4Page7';
import Endo101Week8Module4Page8 from '../screens/Learn/courses/endo101/week8/module4/Endo101Week8Module4Page8';

import Endo101Week8Module5Page1 from '../screens/Learn/courses/endo101/week8/module5/Endo101Week8Module5Page1';
import Endo101Week8Module5Page2 from '../screens/Learn/courses/endo101/week8/module5/Endo101Week8Module5Page2';
import Endo101Week8Module5Page3 from '../screens/Learn/courses/endo101/week8/module5/Endo101Week8Module5Page3';

import Endo101Week8Module6Page1 from '../screens/Learn/courses/endo101/week8/module6/Endo101Week8Module6Page1';
import Endo101Week8Module6Page2 from '../screens/Learn/courses/endo101/week8/module6/Endo101Week8Module6Page2';
import Endo101Week8Module6Page3 from '../screens/Learn/courses/endo101/week8/module6/Endo101Week8Module6Page3';
import Endo101Week8Module6Page4 from '../screens/Learn/courses/endo101/week8/module6/Endo101Week8Module6Page4';
import Endo101Week8Module6Page5 from '../screens/Learn/courses/endo101/week8/module6/Endo101Week8Module6Page5';
import Endo101Week8Module6Page6 from '../screens/Learn/courses/endo101/week8/module6/Endo101Week8Module6Page6';

//  endo101 week 9

import Endo101Week9Screen from '../screens/Learn/courses/endo101/week9/Endo101Week9Screen';
import Endo101Week9CitationsScreen from '../screens/Learn/courses/endo101/week9/Endo101Week9CitationsScreen';
import Endo101Week9Module1Page1 from '../screens/Learn/courses/endo101/week9/module1/Endo101Week9Module1Page1';
import Endo101Week9Module1Page2 from '../screens/Learn/courses/endo101/week9/module1/Endo101Week9Module1Page2';
import Endo101Week9Module1Page3 from '../screens/Learn/courses/endo101/week9/module1/Endo101Week9Module1Page3';
import Endo101Week9Module1Page4 from '../screens/Learn/courses/endo101/week9/module1/Endo101Week9Module1Page4';
import Endo101Week9Module1Page5 from '../screens/Learn/courses/endo101/week9/module1/Endo101Week9Module1Page5';

import Endo101Week9Module2Page1 from '../screens/Learn/courses/endo101/week9/module2/Endo101Week9Module2Page1';
import Endo101Week9Module2Page2 from '../screens/Learn/courses/endo101/week9/module2/Endo101Week9Module2Page2';
import Endo101Week9Module2Page3 from '../screens/Learn/courses/endo101/week9/module2/Endo101Week9Module2Page3';
import Endo101Week9Module2Page4 from '../screens/Learn/courses/endo101/week9/module2/Endo101Week9Module2Page4';

import Endo101Week9Module3Page1 from '../screens/Learn/courses/endo101/week9/module3/Endo101Week9Module3Page1';
import Endo101Week9Module3Page2 from '../screens/Learn/courses/endo101/week9/module3/Endo101Week9Module3Page2';
import Endo101Week9Module3Page3 from '../screens/Learn/courses/endo101/week9/module3/Endo101Week9Module3Page3';
import Endo101Week9Module3Page4 from '../screens/Learn/courses/endo101/week9/module3/Endo101Week9Module3Page4';
import Endo101Week9Module3Page5 from '../screens/Learn/courses/endo101/week9/module3/Endo101Week9Module3Page5';
import Endo101Week9Module3Page6 from '../screens/Learn/courses/endo101/week9/module3/Endo101Week9Module3Page6';
import Endo101Week9Module3Page7 from '../screens/Learn/courses/endo101/week9/module3/Endo101Week9Module3Page7';
import Endo101Week9Module3Page8 from '../screens/Learn/courses/endo101/week9/module3/Endo101Week9Module3Page8';
import Endo101Week9Module3Page9 from '../screens/Learn/courses/endo101/week9/module3/Endo101Week9Module3Page9';
import Endo101Week9Module3Page10 from '../screens/Learn/courses/endo101/week9/module3/Endo101Week9Module3Page10';
import Endo101Week9Module3Page11 from '../screens/Learn/courses/endo101/week9/module3/Endo101Week9Module3Page11';
import Endo101Week9Module3Page12 from '../screens/Learn/courses/endo101/week9/module3/Endo101Week9Module3Page12';

import Endo101Week9Module4Page1 from '../screens/Learn/courses/endo101/week9/module4/Endo101Week9Module4Page1';

import Endo101Week9Module5Page1 from '../screens/Learn/courses/endo101/week9/module5/Endo101Week9Module5Page1';
import Endo101Week9Module5Page2 from '../screens/Learn/courses/endo101/week9/module5/Endo101Week9Module5Page2';
import Endo101Week9Module5Page3 from '../screens/Learn/courses/endo101/week9/module5/Endo101Week9Module5Page3';

import Endo101Week9Module6Page1 from '../screens/Learn/courses/endo101/week9/module6/Endo101Week9Module6Page1';
import Endo101Week9Module6Page2 from '../screens/Learn/courses/endo101/week9/module6/Endo101Week9Module6Page2';
import Endo101Week9Module6Page3 from '../screens/Learn/courses/endo101/week9/module6/Endo101Week9Module6Page3';
import Endo101Week9Module6Page4 from '../screens/Learn/courses/endo101/week9/module6/Endo101Week9Module6Page4';
import Endo101Week9Module6Page5 from '../screens/Learn/courses/endo101/week9/module6/Endo101Week9Module6Page5';
import Endo101Week9Module6Page6 from '../screens/Learn/courses/endo101/week9/module6/Endo101Week9Module6Page6';
import Endo101Week9Module6Page7 from '../screens/Learn/courses/endo101/week9/module6/Endo101Week9Module6Page7';

//  endo101 week 10

import Endo101Week10Screen from '../screens/Learn/courses/endo101/week10/Endo101Week10Screen';
import Endo101Week10CitationsScreen from '../screens/Learn/courses/endo101/week10/Endo101Week10CitationsScreen';
import Endo101Week10Module1Page1 from '../screens/Learn/courses/endo101/week10/module1/Endo101Week10Module1Page1';
import Endo101Week10Module1Page2 from '../screens/Learn/courses/endo101/week10/module1/Endo101Week10Module1Page2';
import Endo101Week10Module1Page3 from '../screens/Learn/courses/endo101/week10/module1/Endo101Week10Module1Page3';
import Endo101Week10Module1Page4 from '../screens/Learn/courses/endo101/week10/module1/Endo101Week10Module1Page4';
import Endo101Week10Module1Page5 from '../screens/Learn/courses/endo101/week10/module1/Endo101Week10Module1Page5';

import Endo101Week10Module2Page1 from '../screens/Learn/courses/endo101/week10/module2/Endo101Week10Module2Page1';
import Endo101Week10Module2Page2 from '../screens/Learn/courses/endo101/week10/module2/Endo101Week10Module2Page2';
import Endo101Week10Module2Page3 from '../screens/Learn/courses/endo101/week10/module2/Endo101Week10Module2Page3';
import Endo101Week10Module2Page4 from '../screens/Learn/courses/endo101/week10/module2/Endo101Week10Module2Page4';
import Endo101Week10Module2Page5 from '../screens/Learn/courses/endo101/week10/module2/Endo101Week10Module2Page5';
import Endo101Week10Module2Page6 from '../screens/Learn/courses/endo101/week10/module2/Endo101Week10Module2Page6';
import Endo101Week10Module2Page7 from '../screens/Learn/courses/endo101/week10/module2/Endo101Week10Module2Page7';

import Endo101Week10Module3Page1 from '../screens/Learn/courses/endo101/week10/module3/Endo101Week10Module3Page1';
import Endo101Week10Module3Page2 from '../screens/Learn/courses/endo101/week10/module3/Endo101Week10Module3Page2';
import Endo101Week10Module3Page3 from '../screens/Learn/courses/endo101/week10/module3/Endo101Week10Module3Page3';
import Endo101Week10Module3Page4 from '../screens/Learn/courses/endo101/week10/module3/Endo101Week10Module3Page4';
import Endo101Week10Module3Page5 from '../screens/Learn/courses/endo101/week10/module3/Endo101Week10Module3Page5';

import Endo101Week10Module4Page1 from '../screens/Learn/courses/endo101/week10/module4/Endo101Week10Module4Page1';
import Endo101Week10Module4Page2 from '../screens/Learn/courses/endo101/week10/module4/Endo101Week10Module4Page2';
import Endo101Week10Module4Page3 from '../screens/Learn/courses/endo101/week10/module4/Endo101Week10Module4Page3';

import Endo101Week10Module5Page1 from '../screens/Learn/courses/endo101/week10/module5/Endo101Week10Module5Page1';
import Endo101Week10Module5Page2 from '../screens/Learn/courses/endo101/week10/module5/Endo101Week10Module5Page2';
import Endo101Week10Module5Page3 from '../screens/Learn/courses/endo101/week10/module5/Endo101Week10Module5Page3';

import Endo101Week10Module6Page1 from '../screens/Learn/courses/endo101/week10/module6/Endo101Week10Module6Page1';
import Endo101Week10Module6Page2 from '../screens/Learn/courses/endo101/week10/module6/Endo101Week10Module6Page2';
import Endo101Week10Module6Page3 from '../screens/Learn/courses/endo101/week10/module6/Endo101Week10Module6Page3';
import Endo101Week10Module6Page4 from '../screens/Learn/courses/endo101/week10/module6/Endo101Week10Module6Page4';
import Endo101Week10Module6Page5 from '../screens/Learn/courses/endo101/week10/module6/Endo101Week10Module6Page5';
import Endo101Week10Module6Page6 from '../screens/Learn/courses/endo101/week10/module6/Endo101Week10Module6Page6';
import Endo101Week10Module6Page7 from '../screens/Learn/courses/endo101/week10/module6/Endo101Week10Module6Page7';

//  endo101 week 11

import Endo101Week11Screen from '../screens/Learn/courses/endo101/week11/Endo101Week11Screen';
import Endo101Week11CitationsScreen from '../screens/Learn/courses/endo101/week11/Endo101Week11CitationsScreen';
import Endo101Week11Module1Page1 from '../screens/Learn/courses/endo101/week11/module1/Endo101Week11Module1Page1';
import Endo101Week11Module1Page2 from '../screens/Learn/courses/endo101/week11/module1/Endo101Week11Module1Page2';
import Endo101Week11Module1Page3 from '../screens/Learn/courses/endo101/week11/module1/Endo101Week11Module1Page3';
import Endo101Week11Module1Page4 from '../screens/Learn/courses/endo101/week11/module1/Endo101Week11Module1Page4';
import Endo101Week11Module1Page5 from '../screens/Learn/courses/endo101/week11/module1/Endo101Week11Module1Page5';

import Endo101Week11Module2Page1 from '../screens/Learn/courses/endo101/week11/module2/Endo101Week11Module2Page1';
import Endo101Week11Module2Page2 from '../screens/Learn/courses/endo101/week11/module2/Endo101Week11Module2Page2';
import Endo101Week11Module2Page3 from '../screens/Learn/courses/endo101/week11/module2/Endo101Week11Module2Page3';
import Endo101Week11Module2Page4 from '../screens/Learn/courses/endo101/week11/module2/Endo101Week11Module2Page4';

import Endo101Week11Module3Page1 from '../screens/Learn/courses/endo101/week11/module3/Endo101Week11Module3Page1';
import Endo101Week11Module3Page2 from '../screens/Learn/courses/endo101/week11/module3/Endo101Week11Module3Page2';
import Endo101Week11Module3Page3 from '../screens/Learn/courses/endo101/week11/module3/Endo101Week11Module3Page3';
import Endo101Week11Module3Page4 from '../screens/Learn/courses/endo101/week11/module3/Endo101Week11Module3Page4';
import Endo101Week11Module3Page5 from '../screens/Learn/courses/endo101/week11/module3/Endo101Week11Module3Page5';

import Endo101Week11Module4Page1 from '../screens/Learn/courses/endo101/week11/module4/Endo101Week11Module4Page1';
import Endo101Week11Module4Page2 from '../screens/Learn/courses/endo101/week11/module4/Endo101Week11Module4Page2';
import Endo101Week11Module4Page3 from '../screens/Learn/courses/endo101/week11/module4/Endo101Week11Module4Page3';
import Endo101Week11Module4Page4 from '../screens/Learn/courses/endo101/week11/module4/Endo101Week11Module4Page4';
import Endo101Week11Module4Page5 from '../screens/Learn/courses/endo101/week11/module4/Endo101Week11Module4Page5';
import Endo101Week11Module4Page6 from '../screens/Learn/courses/endo101/week11/module4/Endo101Week11Module4Page6';
import Endo101Week11Module4Page7 from '../screens/Learn/courses/endo101/week11/module4/Endo101Week11Module4Page7';

import Endo101Week11Module5Page1 from '../screens/Learn/courses/endo101/week11/module5/Endo101Week11Module5Page1';
import Endo101Week11Module5Page2 from '../screens/Learn/courses/endo101/week11/module5/Endo101Week11Module5Page2';
import Endo101Week11Module5Page3 from '../screens/Learn/courses/endo101/week11/module5/Endo101Week11Module5Page3';
import Endo101Week11Module5Page4 from '../screens/Learn/courses/endo101/week11/module5/Endo101Week11Module5Page4';
import Endo101Week11Module5Page5 from '../screens/Learn/courses/endo101/week11/module5/Endo101Week11Module5Page5';
import Endo101Week11Module5Page6 from '../screens/Learn/courses/endo101/week11/module5/Endo101Week11Module5Page6';

//  endo101 week 12

import Endo101Week12Screen from '../screens/Learn/courses/endo101/week12/Endo101Week12Screen';
import Endo101Week12CitationsScreen from '../screens/Learn/courses/endo101/week12/Endo101Week12CitationsScreen';
import Endo101Week12Module1Page1 from '../screens/Learn/courses/endo101/week12/module1/Endo101Week12Module1Page1';
import Endo101Week12Module1Page2 from '../screens/Learn/courses/endo101/week12/module1/Endo101Week12Module1Page2';
import Endo101Week12Module1Page3 from '../screens/Learn/courses/endo101/week12/module1/Endo101Week12Module1Page3';
import Endo101Week12Module1Page4 from '../screens/Learn/courses/endo101/week12/module1/Endo101Week12Module1Page4';
import Endo101Week12Module1Page5 from '../screens/Learn/courses/endo101/week12/module1/Endo101Week12Module1Page5';
import Endo101Week12Module1Page6 from '../screens/Learn/courses/endo101/week12/module1/Endo101Week12Module1Page6';

import Endo101Week12Module2Page1 from '../screens/Learn/courses/endo101/week12/module2/Endo101Week12Module2Page1';
import Endo101Week12Module2Page2 from '../screens/Learn/courses/endo101/week12/module2/Endo101Week12Module2Page2';
import Endo101Week12Module2Page3 from '../screens/Learn/courses/endo101/week12/module2/Endo101Week12Module2Page3';
import Endo101Week12Module2Page4 from '../screens/Learn/courses/endo101/week12/module2/Endo101Week12Module2Page4';
import Endo101Week12Module2Page5 from '../screens/Learn/courses/endo101/week12/module2/Endo101Week12Module2Page5';
import Endo101Week12Module2Page6 from '../screens/Learn/courses/endo101/week12/module2/Endo101Week12Module2Page6';

import Endo101Week12Module3Page1 from '../screens/Learn/courses/endo101/week12/module3/Endo101Week12Module3Page1';
import Endo101Week12Module3Page2 from '../screens/Learn/courses/endo101/week12/module3/Endo101Week12Module3Page2';
import Endo101Week12Module3Page3 from '../screens/Learn/courses/endo101/week12/module3/Endo101Week12Module3Page3';
import Endo101Week12Module3Page4 from '../screens/Learn/courses/endo101/week12/module3/Endo101Week12Module3Page4';
import Endo101Week12Module3Page5 from '../screens/Learn/courses/endo101/week12/module3/Endo101Week12Module3Page5';
import Endo101Week12Module3Page6 from '../screens/Learn/courses/endo101/week12/module3/Endo101Week12Module3Page6';

import Endo101Week12Module4Page1 from '../screens/Learn/courses/endo101/week12/module4/Endo101Week12Module4Page1';
import Endo101Week12Module4Page2 from '../screens/Learn/courses/endo101/week12/module4/Endo101Week12Module4Page2';
import Endo101Week12Module4Page3 from '../screens/Learn/courses/endo101/week12/module4/Endo101Week12Module4Page3';

import Endo101Week12Module5Page1 from '../screens/Learn/courses/endo101/week12/module5/Endo101Week12Module5Page1';
import Endo101Week12Module5Page2 from '../screens/Learn/courses/endo101/week12/module5/Endo101Week12Module5Page2';
import Endo101Week12Module5Page3 from '../screens/Learn/courses/endo101/week12/module5/Endo101Week12Module5Page3';

import Endo101Week12Module6Page1 from '../screens/Learn/courses/endo101/week12/module6/Endo101Week12Module6Page1';
import Endo101Week12Module6Page2 from '../screens/Learn/courses/endo101/week12/module6/Endo101Week12Module6Page2';

import Endo101Week12Module7Page1 from '../screens/Learn/courses/endo101/week12/module7/Endo101Week12Module7Page1';
import Endo101Week12Module7Page2 from '../screens/Learn/courses/endo101/week12/module7/Endo101Week12Module7Page2';
import Endo101Week12Module7Page3 from '../screens/Learn/courses/endo101/week12/module7/Endo101Week12Module7Page3';
import Endo101Week12Module7Page4 from '../screens/Learn/courses/endo101/week12/module7/Endo101Week12Module7Page4';
import Endo101Week12Module7Page5 from '../screens/Learn/courses/endo101/week12/module7/Endo101Week12Module7Page5';
import Endo101Week12Module7Page6 from '../screens/Learn/courses/endo101/week12/module7/Endo101Week12Module7Page6';
import Endo101Week12Module7Page7 from '../screens/Learn/courses/endo101/week12/module7/Endo101Week12Module7Page7';

import HealthSurveyFollowUpScreen from '../screens/Learn/research/HealthSurveyFollowUpScreen';

import LoginScreen from '../screens/Onboarding/LoginScreen';
import RememberLoginScreen from '../screens/Onboarding/RememberLoginScreen';
import RegisterScreen from '../screens/Onboarding/RegisterScreen';
import PasswordRecoveryScreen from '../screens/Onboarding/PasswordRecoveryScreen';
import AppIntroScreen from '../screens/Onboarding/AppIntroScreen';
import ChatbotIntroScreen from '../screens/Onboarding/ChatbotIntroScreen';
import ProfileSetupScreen from '../screens/Onboarding/ProfileSetupScreen';
import ReferAFriendScreen from '../screens/ReferAFriendScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import TodoScreen from '../screens/Home/TodoScreen';
import TrackScreen from '../screens/Track/TrackScreen';
import TrackSymptomsScreen from '../screens/Track/TrackSymptomsScreen';
import TrackSymptomsAddScreen from '../screens/Track/TrackSymptomsAddScreen';
import TrackSymptomsAddNewScreen from '../screens/Track/TrackSymptomsAddNewScreen';
import TrackLogHistoryScreen from '../screens/Track/TrackLogHistoryScreen';
import GardenScreen from '../screens/Garden/GardenScreen';
import GardenStoreScreen from '../screens/Garden/GardenStoreScreen';

import AssessmentResultScreen from '../screens/Learn/assessment/AssessmentResultScreen';
import AssessmentScreenNew from '../screens/Learn/assessment/AssessmentScreenNew';

// drawer
import CustomDrawerContent from './Menu';

// header for screens
import {Icon, Header} from '../components';
import {tabs, communityTabs, theme} from '../constants';

import {foregroundPushNotificationManager} from '../shared/NotificationManager';

const {width, height} = Dimensions.get('screen');

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function TrackStack(props) {
  const timestampStagingTmp = useSelector(
    state => state.trackLogStaging.timestamp,
  );
  const dateObjStagingTmp = new XDate(parseInt(timestampStagingTmp) * 60000);
  const dateStrStagingTmp = dateObjStagingTmp.toString('MMM dd, yyyy');

  return (
    <Stack.Navigator
      screenOptions={{
        presentation: 'card',
        headerMode: 'screen',
      }}>
      <Stack.Screen
        name="TrackMain"
        component={TrackScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Track"
              navigation={navigation}
              scene={scene}
              back={false}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="TrackSymptoms"
        component={TrackSymptomsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title={dateStrStagingTmp}
              navigation={navigation}
              scene={scene}
              back={true}
              chatShortcut={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="TrackSymptomsAdd"
        component={TrackSymptomsAddScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Track Symptoms"
              navigation={navigation}
              scene={scene}
              back={true}
              chatShortcut={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="TrackSymptomsAddNew"
        component={TrackSymptomsAddNewScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Track Symptoms - Add New"
              navigation={navigation}
              scene={scene}
              back={true}
              chatShortcut={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="TrackLogHistoryScreen"
        component={TrackLogHistoryScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Log History"
              navigation={navigation}
              scene={scene}
              back={true}
              chatShortcut={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function LearnStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: 'card',
        headerMode: 'screen',
      }}>
      <Stack.Screen
        name="LearnMain"
        component={LearnScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn"
              navigation={navigation}
              scene={scene}
              back={false}
              disableTitle={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="LearnCondition"
        component={LearnConditionScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title=""
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="QnAScreen"
        component={QnAScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Q&A"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="QnADiscussionScreen"
        component={QnADiscussionScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Discussion"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="QnAReplyScreen"
        component={QnAReplyScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Replies"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101ProgressScreen"
        component={Endo101ProgressScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Screen"
        component={Endo101Week1Screen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1CitationsScreen"
        component={Endo101Week1CitationsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Module1Page1"
        component={Endo101Week1Module1Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.2}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Module1Page2"
        component={Endo101Week1Module1Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.4}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Module1Page3"
        component={Endo101Week1Module1Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.6}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Module1Page4"
        component={Endo101Week1Module1Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.8}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Module1Page5"
        component={Endo101Week1Module1Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      {/* For LearnScreen Refactoring */}

      <Stack.Screen
        name="Endo100Week1Screen"
        component={Endo100Week1Screen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo100Week1CitationsScreen"
        component={Endo100Week1CitationsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo100Week1Module1"
        component={Endo100Week1Module1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      {/* For LearnScreen Refactoring */}

      <Stack.Screen
        name="Endo101Week1Module2Page1"
        component={Endo101Week1Module2Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.25}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Module2Page2"
        component={Endo101Week1Module2Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Module2Page3"
        component={Endo101Week1Module2Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.75}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Module2Page4"
        component={Endo101Week1Module2Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Module3Page1"
        component={Endo101Week1Module3Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.33}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Module3Page2"
        component={Endo101Week1Module3Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.66}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Module3Page3"
        component={Endo101Week1Module3Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Module4Page1"
        component={Endo101Week1Module4Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.2}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Module4Page2"
        component={Endo101Week1Module4Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.4}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Module4Page3"
        component={Endo101Week1Module4Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.6}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Module4Page4"
        component={Endo101Week1Module4Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.8}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Module4Page5"
        component={Endo101Week1Module4Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Module5Page1"
        component={Endo101Week1Module5Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.25}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Module5Page2"
        component={Endo101Week1Module5Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Module5Page3"
        component={Endo101Week1Module5Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.75}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Module5Page4"
        component={Endo101Week1Module5Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Module6Page1"
        component={Endo101Week1Module6Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.166}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Module6Page2"
        component={Endo101Week1Module6Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.33}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Module6Page3"
        component={Endo101Week1Module6Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Module6Page4"
        component={Endo101Week1Module6Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.66}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Module6Page5"
        component={Endo101Week1Module6Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.83}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week1Module6Page6"
        component={Endo101Week1Module6Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Screen"
        component={Endo101Week2Screen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2CitationsScreen"
        component={Endo101Week2CitationsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Module1Page1"
        component={Endo101Week2Module1Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.2}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Module1Page2"
        component={Endo101Week2Module1Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.4}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Module1Page3"
        component={Endo101Week2Module1Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.6}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Module1Page4"
        component={Endo101Week2Module1Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.8}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Module1Page5"
        component={Endo101Week2Module1Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Module2Page1"
        component={Endo101Week2Module2Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.33}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Module2Page2"
        component={Endo101Week2Module2Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.66}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Module2Page3"
        component={Endo101Week2Module2Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Module3Page1"
        component={Endo101Week2Module3Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.25}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Module3Page2"
        component={Endo101Week2Module3Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Module3Page3"
        component={Endo101Week2Module3Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.75}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Module3Page4"
        component={Endo101Week2Module3Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Module4Page1"
        component={Endo101Week2Module4Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.14}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Module4Page2"
        component={Endo101Week2Module4Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.28}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Module4Page3"
        component={Endo101Week2Module4Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.42}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Module4Page4"
        component={Endo101Week2Module4Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.56}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Module4Page5"
        component={Endo101Week2Module4Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.7}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Module4Page6"
        component={Endo101Week2Module4Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.84}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Module4Page7"
        component={Endo101Week2Module4Page7}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Module5Page1"
        component={Endo101Week2Module5Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Module5Page2"
        component={Endo101Week2Module5Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Module6Page1"
        component={Endo101Week2Module6Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.25}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Module6Page2"
        component={Endo101Week2Module6Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Module6Page3"
        component={Endo101Week2Module6Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.75}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Module6Page4"
        component={Endo101Week2Module6Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week2Module6Page5"
        component={Endo101Week2Module6Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Endo101Week2Module6Page6"
        component={Endo101Week2Module6Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Endo101Week2Module6Page7"
        component={Endo101Week2Module6Page7}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Screen"
        component={Endo101Week3Screen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
              // progress={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3CitationsScreen"
        component={Endo101Week3CitationsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module1Page1"
        component={Endo101Week3Module1Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.2}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module1Page2"
        component={Endo101Week3Module1Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.4}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module1Page3"
        component={Endo101Week3Module1Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.6}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module1Page4"
        component={Endo101Week3Module1Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.8}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module1Page5"
        component={Endo101Week3Module1Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module2Page1"
        component={Endo101Week3Module2Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.16}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module2Page2"
        component={Endo101Week3Module2Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.32}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module2Page3"
        component={Endo101Week3Module2Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.48}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module2Page4"
        component={Endo101Week3Module2Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.64}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module2Page5"
        component={Endo101Week3Module2Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.8}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module2Page6"
        component={Endo101Week3Module2Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module3Page1"
        component={Endo101Week3Module3Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.33}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module3Page2"
        component={Endo101Week3Module3Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.66}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module3Page3"
        component={Endo101Week3Module3Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module4Page1"
        component={Endo101Week3Module4Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.33}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module4Page2"
        component={Endo101Week3Module4Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.66}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module4Page3"
        component={Endo101Week3Module4Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module5Page1"
        component={Endo101Week3Module5Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.125}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module5Page2"
        component={Endo101Week3Module5Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.25}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module5Page3"
        component={Endo101Week3Module5Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.37}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module5Page4"
        component={Endo101Week3Module5Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module5Page5"
        component={Endo101Week3Module5Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.62}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module5Page6"
        component={Endo101Week3Module5Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.75}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module5Page7"
        component={Endo101Week3Module5Page7}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.87}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module5Page8"
        component={Endo101Week3Module5Page8}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module6Page1"
        component={Endo101Week3Module6Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module6Page2"
        component={Endo101Week3Module6Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module7Page1"
        component={Endo101Week3Module7Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.25}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module7Page2"
        component={Endo101Week3Module7Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module7Page3"
        component={Endo101Week3Module7Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.75}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module7Page4"
        component={Endo101Week3Module7Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week3Module7Page5"
        component={Endo101Week3Module7Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Endo101Week3Module7Page6"
        component={Endo101Week3Module7Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Endo101Week3Module7Page7"
        component={Endo101Week3Module7Page7}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Screen"
        component={Endo101Week4Screen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4CitationsScreen"
        component={Endo101Week4CitationsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module1Page1"
        component={Endo101Week4Module1Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.25}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module1Page2"
        component={Endo101Week4Module1Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module1Page3"
        component={Endo101Week4Module1Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.75}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module1Page4"
        component={Endo101Week4Module1Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module2Page1"
        component={Endo101Week4Module2Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.25}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module2Page2"
        component={Endo101Week4Module2Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module2Page3"
        component={Endo101Week4Module2Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.75}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module2Page4"
        component={Endo101Week4Module2Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module3Page1"
        component={Endo101Week4Module3Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.2}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module3Page2"
        component={Endo101Week4Module3Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.4}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module3Page3"
        component={Endo101Week4Module3Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.6}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module3Page4"
        component={Endo101Week4Module3Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.8}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module3Page5"
        component={Endo101Week4Module3Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module4Page1"
        component={Endo101Week4Module4Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module4Page2"
        component={Endo101Week4Module4Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module5Page1"
        component={Endo101Week4Module5Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.33}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module5Page2"
        component={Endo101Week4Module5Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.66}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module5Page3"
        component={Endo101Week4Module5Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module6Page1"
        component={Endo101Week4Module6Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module6Page2"
        component={Endo101Week4Module6Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module7Page1"
        component={Endo101Week4Module7Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.33}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module7Page2"
        component={Endo101Week4Module7Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.66}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module7Page3"
        component={Endo101Week4Module7Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module8Page1"
        component={Endo101Week4Module8Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.2}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module8Page2"
        component={Endo101Week4Module8Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.4}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module8Page3"
        component={Endo101Week4Module8Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.6}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module8Page4"
        component={Endo101Week4Module8Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.8}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module8Page5"
        component={Endo101Week4Module8Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module9Page1"
        component={Endo101Week4Module9Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.33}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module9Page2"
        component={Endo101Week4Module9Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.66}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module9Page3"
        component={Endo101Week4Module9Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week4Module9Page4"
        component={Endo101Week4Module9Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Endo101Week4Module9Page5"
        component={Endo101Week4Module9Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Endo101Week4Module9Page6"
        component={Endo101Week4Module9Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5Screen"
        component={Endo101Week5Screen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5CitationsScreen"
        component={Endo101Week5CitationsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5Module1Page1"
        component={Endo101Week5Module1Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.2}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5Module1Page2"
        component={Endo101Week5Module1Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.4}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5Module1Page3"
        component={Endo101Week5Module1Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.6}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5Module1Page4"
        component={Endo101Week5Module1Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.8}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Endo101Week5Module1Page5"
        component={Endo101Week5Module1Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5Module2Page1"
        component={Endo101Week5Module2Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.25}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5Module2Page2"
        component={Endo101Week5Module2Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5Module2Page3"
        component={Endo101Week5Module2Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.75}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5Module2Page4"
        component={Endo101Week5Module2Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5Module3Page1"
        component={Endo101Week5Module3Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.2}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5Module3Page2"
        component={Endo101Week5Module3Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.4}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5Module3Page3"
        component={Endo101Week5Module3Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.6}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5Module3Page4"
        component={Endo101Week5Module3Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.8}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5Module3Page5"
        component={Endo101Week5Module3Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5Module4Page1"
        component={Endo101Week5Module4Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.25}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5Module4Page2"
        component={Endo101Week5Module4Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Endo101Week5Module4Page3"
        component={Endo101Week5Module4Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.75}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Endo101Week5Module4Page4"
        component={Endo101Week5Module4Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5Module5Page1"
        component={Endo101Week5Module5Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.33}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5Module5Page2"
        component={Endo101Week5Module5Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.66}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5Module5Page3"
        component={Endo101Week5Module5Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5Module6Page1"
        component={Endo101Week5Module6Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.1666}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5Module6Page2"
        component={Endo101Week5Module6Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.3333}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Endo101Week5Module6Page3"
        component={Endo101Week5Module6Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.49999}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Endo101Week5Module6Page4"
        component={Endo101Week5Module6Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.6666}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Endo101Week5Module6Page5"
        component={Endo101Week5Module6Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.833}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Endo101Week5Module6Page6"
        component={Endo101Week5Module6Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5Module7Page1"
        component={Endo101Week5Module7Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.1428}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5Module7Page2"
        component={Endo101Week5Module7Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.2856}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5Module7Page3"
        component={Endo101Week5Module7Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.4284}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5Module7Page4"
        component={Endo101Week5Module7Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5712}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Endo101Week5Module7Page5"
        component={Endo101Week5Module7Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.714}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Endo101Week5Module7Page6"
        component={Endo101Week5Module7Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.8568}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week5Module7Page7"
        component={Endo101Week5Module7Page7}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Screen"
        component={Endo101Week6Screen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6CitationsScreen"
        component={Endo101Week6CitationsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module1Page1"
        component={Endo101Week6Module1Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.16}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module1Page2"
        component={Endo101Week6Module1Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.32}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module1Page3"
        component={Endo101Week6Module1Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.486}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module1Page4"
        component={Endo101Week6Module1Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.646}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module1Page5"
        component={Endo101Week6Module1Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.81}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module1Page6"
        component={Endo101Week6Module1Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module2Page1"
        component={Endo101Week6Module2Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.16}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module2Page2"
        component={Endo101Week6Module2Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.32}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module2Page3"
        component={Endo101Week6Module2Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.48}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module2Page4"
        component={Endo101Week6Module2Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.66}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module2Page5"
        component={Endo101Week6Module2Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.81}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module2Page6"
        component={Endo101Week6Module2Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module3Page1"
        component={Endo101Week6Module3Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.2}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module3Page2"
        component={Endo101Week6Module3Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.4}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module3Page3"
        component={Endo101Week6Module3Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.6}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module3Page4"
        component={Endo101Week6Module3Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.8}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module3Page5"
        component={Endo101Week6Module3Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module4Page1"
        component={Endo101Week6Module4Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.25}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module4Page2"
        component={Endo101Week6Module4Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module4Page3"
        component={Endo101Week6Module4Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.75}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module4Page4"
        component={Endo101Week6Module4Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module5Page1"
        component={Endo101Week6Module5Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module5Page2"
        component={Endo101Week6Module5Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module6Page1"
        component={Endo101Week6Module6Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.25}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module6Page2"
        component={Endo101Week6Module6Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module6Page3"
        component={Endo101Week6Module6Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.75}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module6Page4"
        component={Endo101Week6Module6Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module7Page1"
        component={Endo101Week6Module7Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.14}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module7Page2"
        component={Endo101Week6Module7Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.28}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module7Page3"
        component={Endo101Week6Module7Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.42}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module7Page4"
        component={Endo101Week6Module7Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.56}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module7Page5"
        component={Endo101Week6Module7Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.7}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module7Page6"
        component={Endo101Week6Module7Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.84}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week6Module7Page7"
        component={Endo101Week6Module7Page7}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Screen"
        component={Endo101Week7Screen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7CitationsScreen"
        component={Endo101Week7CitationsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module1Page1"
        component={Endo101Week7Module1Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.2}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module1Page2"
        component={Endo101Week7Module1Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.4}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module1Page3"
        component={Endo101Week7Module1Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.6}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module1Page4"
        component={Endo101Week7Module1Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.8}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module1Page5"
        component={Endo101Week7Module1Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module2Page1"
        component={Endo101Week7Module2Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module2Page2"
        component={Endo101Week7Module2Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module3Page1"
        component={Endo101Week7Module3Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.1}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module3Page2"
        component={Endo101Week7Module3Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.2}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module3Page3"
        component={Endo101Week7Module3Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.3}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module3Page4"
        component={Endo101Week7Module3Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.4}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module3Page5"
        component={Endo101Week7Module3Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module3Page6"
        component={Endo101Week7Module3Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.6}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module3Page7"
        component={Endo101Week7Module3Page7}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.7}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module3Page8"
        component={Endo101Week7Module3Page8}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.8}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module3Page9"
        component={Endo101Week7Module3Page9}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.9}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module3Page10"
        component={Endo101Week7Module3Page10}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module4Page1"
        component={Endo101Week7Module4Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.25}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module4Page2"
        component={Endo101Week7Module4Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module4Page3"
        component={Endo101Week7Module4Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.75}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module4Page4"
        component={Endo101Week7Module4Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module5Page1"
        component={Endo101Week7Module5Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.2}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module5Page2"
        component={Endo101Week7Module5Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.4}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module5Page3"
        component={Endo101Week7Module5Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.6}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module5Page4"
        component={Endo101Week7Module5Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.8}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module5Page5"
        component={Endo101Week7Module5Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module6Page1"
        component={Endo101Week7Module6Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module6Page2"
        component={Endo101Week7Module6Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module7Page1"
        component={Endo101Week7Module7Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.14}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module7Page2"
        component={Endo101Week7Module7Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.28}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module7Page3"
        component={Endo101Week7Module7Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.42}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module7Page4"
        component={Endo101Week7Module7Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.56}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module7Page5"
        component={Endo101Week7Module7Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.7}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module7Page6"
        component={Endo101Week7Module7Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.84}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week7Module7Page7"
        component={Endo101Week7Module7Page7}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Screen"
        component={Endo101Week8Screen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
              // progress={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8CitationsScreen"
        component={Endo101Week8CitationsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module1Page1"
        component={Endo101Week8Module1Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.25}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module1Page2"
        component={Endo101Week8Module1Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module1Page3"
        component={Endo101Week8Module1Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.75}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module1Page4"
        component={Endo101Week8Module1Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module2Page1"
        component={Endo101Week8Module2Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.2}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module2Page2"
        component={Endo101Week8Module2Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.4}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module2Page3"
        component={Endo101Week8Module2Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.6}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module2Page4"
        component={Endo101Week8Module2Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.8}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module2Page5"
        component={Endo101Week8Module2Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module3Page1"
        component={Endo101Week8Module3Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.14}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module3Page2"
        component={Endo101Week8Module3Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.28}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module3Page3"
        component={Endo101Week8Module3Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.42}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module3Page4"
        component={Endo101Week8Module3Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.56}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module3Page5"
        component={Endo101Week8Module3Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.7}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module3Page6"
        component={Endo101Week8Module3Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.84}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module3Page7"
        component={Endo101Week8Module3Page7}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module4Page1"
        component={Endo101Week8Module4Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.125}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module4Page2"
        component={Endo101Week8Module4Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.25}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module4Page3"
        component={Endo101Week8Module4Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.375}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module4Page4"
        component={Endo101Week8Module4Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module4Page5"
        component={Endo101Week8Module4Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.625}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module4Page6"
        component={Endo101Week8Module4Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.75}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module4Page7"
        component={Endo101Week8Module4Page7}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.875}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module4Page8"
        component={Endo101Week8Module4Page8}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module5Page1"
        component={Endo101Week8Module5Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.33}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module5Page2"
        component={Endo101Week8Module5Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.66}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module5Page3"
        component={Endo101Week8Module5Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module6Page1"
        component={Endo101Week8Module6Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.166}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module6Page2"
        component={Endo101Week8Module6Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.33}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week8Module6Page3"
        component={Endo101Week8Module6Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Endo101Week8Module6Page4"
        component={Endo101Week8Module6Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.66}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Endo101Week8Module6Page5"
        component={Endo101Week8Module6Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.83}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Endo101Week8Module6Page6"
        component={Endo101Week8Module6Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Screen"
        component={Endo101Week9Screen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9CitationsScreen"
        component={Endo101Week9CitationsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module1Page1"
        component={Endo101Week9Module1Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.2}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module1Page2"
        component={Endo101Week9Module1Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.4}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module1Page3"
        component={Endo101Week9Module1Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.6}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module1Page4"
        component={Endo101Week9Module1Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.8}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module1Page5"
        component={Endo101Week9Module1Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module2Page1"
        component={Endo101Week9Module2Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.25}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module2Page2"
        component={Endo101Week9Module2Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module2Page3"
        component={Endo101Week9Module2Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.75}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module2Page4"
        component={Endo101Week9Module2Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module3Page1"
        component={Endo101Week9Module3Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.08}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module3Page2"
        component={Endo101Week9Module3Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.16}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module3Page3"
        component={Endo101Week9Module3Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.24}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module3Page4"
        component={Endo101Week9Module3Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.32}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module3Page5"
        component={Endo101Week9Module3Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.4}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module3Page6"
        component={Endo101Week9Module3Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module3Page7"
        component={Endo101Week9Module3Page7}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.58}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module3Page8"
        component={Endo101Week9Module3Page8}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.66}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module3Page9"
        component={Endo101Week9Module3Page9}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.74}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module3Page10"
        component={Endo101Week9Module3Page10}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.82}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module3Page11"
        component={Endo101Week9Module3Page11}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.91}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module3Page12"
        component={Endo101Week9Module3Page12}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module4Page1"
        component={Endo101Week9Module4Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module5Page1"
        component={Endo101Week9Module5Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.33}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module5Page2"
        component={Endo101Week9Module5Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.66}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module5Page3"
        component={Endo101Week9Module5Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module6Page1"
        component={Endo101Week9Module6Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.14}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module6Page2"
        component={Endo101Week9Module6Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.28}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module6Page3"
        component={Endo101Week9Module6Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.42}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module6Page4"
        component={Endo101Week9Module6Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.56}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module6Page5"
        component={Endo101Week9Module6Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.7}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module6Page6"
        component={Endo101Week9Module6Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.84}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week9Module6Page7"
        component={Endo101Week9Module6Page7}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Screen"
        component={Endo101Week10Screen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
              // progress={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10CitationsScreen"
        component={Endo101Week10CitationsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module1Page1"
        component={Endo101Week10Module1Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.2}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module1Page2"
        component={Endo101Week10Module1Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.4}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module1Page3"
        component={Endo101Week10Module1Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.6}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module1Page4"
        component={Endo101Week10Module1Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.8}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module1Page5"
        component={Endo101Week10Module1Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module2Page1"
        component={Endo101Week10Module2Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.14}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module2Page2"
        component={Endo101Week10Module2Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.28}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module2Page3"
        component={Endo101Week10Module2Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.42}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module2Page4"
        component={Endo101Week10Module2Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.56}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module2Page5"
        component={Endo101Week10Module2Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.7}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module2Page6"
        component={Endo101Week10Module2Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.84}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module2Page7"
        component={Endo101Week10Module2Page7}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module3Page1"
        component={Endo101Week10Module3Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.2}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module3Page2"
        component={Endo101Week10Module3Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.4}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module3Page3"
        component={Endo101Week10Module3Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.6}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module3Page4"
        component={Endo101Week10Module3Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.8}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module3Page5"
        component={Endo101Week10Module3Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module4Page1"
        component={Endo101Week10Module4Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.33}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module4Page2"
        component={Endo101Week10Module4Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.66}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module4Page3"
        component={Endo101Week10Module4Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module5Page1"
        component={Endo101Week10Module5Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.33}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module5Page2"
        component={Endo101Week10Module5Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.66}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module5Page3"
        component={Endo101Week10Module5Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module6Page1"
        component={Endo101Week10Module6Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.14}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module6Page2"
        component={Endo101Week10Module6Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.28}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module6Page3"
        component={Endo101Week10Module6Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.42}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Endo101Week10Module6Page4"
        component={Endo101Week10Module6Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.56}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Endo101Week10Module6Page5"
        component={Endo101Week10Module6Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.7}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Endo101Week10Module6Page6"
        component={Endo101Week10Module6Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.84}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week10Module6Page7"
        component={Endo101Week10Module6Page7}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Screen"
        component={Endo101Week11Screen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
              // progress={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11CitationsScreen"
        component={Endo101Week11CitationsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module1Page1"
        component={Endo101Week11Module1Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.2}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module1Page2"
        component={Endo101Week11Module1Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.4}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module1Page3"
        component={Endo101Week11Module1Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.6}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module1Page4"
        component={Endo101Week11Module1Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.8}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module1Page5"
        component={Endo101Week11Module1Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module2Page1"
        component={Endo101Week11Module2Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.25}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module2Page2"
        component={Endo101Week11Module2Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module2Page3"
        component={Endo101Week11Module2Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.75}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module2Page4"
        component={Endo101Week11Module2Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module3Page1"
        component={Endo101Week11Module3Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.2}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module3Page2"
        component={Endo101Week11Module3Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.4}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module3Page3"
        component={Endo101Week11Module3Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.6}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module3Page4"
        component={Endo101Week11Module3Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.8}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module3Page5"
        component={Endo101Week11Module3Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module4Page1"
        component={Endo101Week11Module4Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.14}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module4Page2"
        component={Endo101Week11Module4Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.28}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module4Page3"
        component={Endo101Week11Module4Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.42}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module4Page4"
        component={Endo101Week11Module4Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.56}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module4Page5"
        component={Endo101Week11Module4Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.7}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module4Page6"
        component={Endo101Week11Module4Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.84}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module4Page7"
        component={Endo101Week11Module4Page7}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module5Page1"
        component={Endo101Week11Module5Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.166}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module5Page2"
        component={Endo101Week11Module5Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.33}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module5Page3"
        component={Endo101Week11Module5Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module5Page4"
        component={Endo101Week11Module5Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.66}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module5Page5"
        component={Endo101Week11Module5Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.82}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week11Module5Page6"
        component={Endo101Week11Module5Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Screen"
        component={Endo101Week12Screen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
              // progress={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12CitationsScreen"
        component={Endo101Week12CitationsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              disableTitle={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module1Page1"
        component={Endo101Week12Module1Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.16}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module1Page2"
        component={Endo101Week12Module1Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.32}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module1Page3"
        component={Endo101Week12Module1Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.48}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module1Page4"
        component={Endo101Week12Module1Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.64}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module1Page5"
        component={Endo101Week12Module1Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.8}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Endo101Week12Module1Page6"
        component={Endo101Week12Module1Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module2Page1"
        component={Endo101Week12Module2Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.16}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module2Page2"
        component={Endo101Week12Module2Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.32}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module2Page3"
        component={Endo101Week12Module2Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.48}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module2Page4"
        component={Endo101Week12Module2Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.64}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module2Page5"
        component={Endo101Week12Module2Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.8}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module2Page6"
        component={Endo101Week12Module2Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module3Page1"
        component={Endo101Week12Module3Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.16}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module3Page2"
        component={Endo101Week12Module3Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.32}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module3Page3"
        component={Endo101Week12Module3Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.48}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module3Page4"
        component={Endo101Week12Module3Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.64}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module3Page5"
        component={Endo101Week12Module3Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.8}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module3Page6"
        component={Endo101Week12Module3Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module4Page1"
        component={Endo101Week12Module4Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.33}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module4Page2"
        component={Endo101Week12Module4Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.66}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module4Page3"
        component={Endo101Week12Module4Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module5Page1"
        component={Endo101Week12Module5Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.33}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module5Page2"
        component={Endo101Week12Module5Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.66}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module5Page3"
        component={Endo101Week12Module5Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module6Page1"
        component={Endo101Week12Module6Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.5}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module6Page2"
        component={Endo101Week12Module6Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module7Page1"
        component={Endo101Week12Module7Page1}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.14}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module7Page2"
        component={Endo101Week12Module7Page2}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.28}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module7Page3"
        component={Endo101Week12Module7Page3}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.42}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module7Page4"
        component={Endo101Week12Module7Page4}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.56}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module7Page5"
        component={Endo101Week12Module7Page5}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.7}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module7Page6"
        component={Endo101Week12Module7Page6}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={0.84}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Endo101Week12Module7Page7"
        component={Endo101Week12Module7Page7}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Learn Course"
              navigation={navigation}
              scene={scene}
              back={true}
              progress={true}
              progressPercent={1.0}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="HealthSurveyFollowUpScreen"
        component={HealthSurveyFollowUpScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Health Survey"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="AssessmentResult"
        component={AssessmentResultScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Assessment Survey"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="AssessmentNew"
        component={AssessmentScreenNew}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Assessment Survey"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: false,
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: 'card',
        headerMode: 'screen',
      }}>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title=""
              navigation={navigation}
              scene={scene}
              back={false}
              chatShortcut={true}
            />
          ),
          cardStyle: {
            //  FIXMETUNA:  I can add background colors for specific pages here
            //  FIXMETUNA:  I can even change the page shape here
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Todo"
        component={TodoScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title=""
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            //  FIXMETUNA:  I can add background colors for specific pages here
            //  FIXMETUNA:  I can even change the page shape here
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function ReferAFriendStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: 'card',
        headerMode: 'screen',
      }}>
      <Stack.Screen
        name="Refer a Friend Main"
        component={ReferAFriendScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Refer a Friend"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function SettingsStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: 'card',
        headerMode: 'screen',
      }}>
      <Stack.Screen
        name="AppSettings"
        component={AppSettingsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="App Settings"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="NotificationSettingsScreen"
        component={NotificationSettingsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Notification Settings"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="BasicInfoSettings"
        component={BasicInfoSettingsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Basic Info"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="HealthProfileSettings"
        component={HealthProfileSettingsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Health Profile"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ContraceptionSettingsScreen"
        component={ContraceptionSettingsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Contraception"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="PatchDetailsSettingsScreen"
        component={PatchDetailsSettingsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Patch Details"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="VaginalRingDetailsSettingsScreen"
        component={VaginalRingDetailsSettingsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Vaginal Ring Details"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="PillDetailsSettingsScreen"
        component={PillDetailsSettingsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Pill Details"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="InitialSymptomSettingsScreen"
        component={InitialSymptomSettingsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Initial Symptoms"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="InitialConditionsSettingsScreen"
        component={InitialConditionsSettingsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Health Conditions"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ConditionDetailsSettingsScreen"
        component={ConditionDetailsSettingsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Conditions Details"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="CustomerSupport"
        component={CustomerSupportScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Customer Support"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      {/* <Stack.Screen
        name="PremiumOptions"
        component={PremiumOptionsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header title="Premium" navigation={navigation} scene={scene} />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="PremiumAccess"
        component={PremiumAccessScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header title="Premium" navigation={navigation} scene={scene} />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      /> */}
    </Stack.Navigator>
  );
}

function ConnectStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: 'card',
        headerMode: 'screen',
      }}>
      <Stack.Screen
        name="ConnectMain"
        component={ConnectScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Community"
              navigation={navigation}
              scene={scene}
              back={false}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.TRANSPARENT,
            fontFamily: theme.FONTS.TEXT,
          },
          unmountOnBlur: true,
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="ViewFriendsScreen"
        component={ViewFriendsScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Friends"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.TRANSPARENT,
            fontFamily: theme.FONTS.TEXT,
          },
          unmountOnBlur: true,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="FindAFriendScreen"
        component={FindAFriendScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Find a Friend"
              navigation={navigation}
              scene={scene}
              back={true}
              chatShortcut={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.TRANSPARENT,
            fontFamily: theme.FONTS.TEXT,
          },
          unmountOnBlur: true,
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="FindANewAmie"
        component={FindANewAmieScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Find a New Amie"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ProposedMatches"
        component={ProposedMatchesScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Proposed Matches"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Public User Profile"
              navigation={navigation}
              scene={scene}
              back={true}
              chatShortcut={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="AmieProfile"
        component={AmieProfileScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Community Profile"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Chat"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          unmountOnBlur: true,
        }}
      />

      <Stack.Screen
        name="Chatbot"
        component={ChatbotScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Lasa"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          unmountOnBlur: true,
        }}
      />
      <Stack.Screen
        name="ReportUser"
        component={ReportUserScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Report User"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          unmountOnBlur: true,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function LoginStack(props) {
  useEffect(() => {
    console.log('FCM FOREGROUND BEFORE');
    const unsubscribe = foregroundPushNotificationManager(props.dispatch);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Stack.Navigator
      screenOptions={({route}) => {
        return {
          presentation: 'card',
          headerShown: route.name == 'PasswordRecovery' ? true : false,
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,

            fontFamily: theme.FONTS.TEXT,
          },
        };
      }}>
      <Stack.Screen
        name="RememberLogin"
        component={RememberLoginScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="AppIntro"
        component={AppIntroScreen}
        option={{
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="LoginMain"
        component={LoginScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="PasswordRecovery"
        component={PasswordRecoveryScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title=""
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          unmountOnBlur: true,
        }}
      />

      <Stack.Screen
        name="ChatbotIntro"
        component={ChatbotIntroScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ProfileSetup"
        component={ProfileSetupScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="AssessmentResult"
        component={AssessmentResultScreen}
        options={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="AssessmentNew"
        component={AssessmentScreenNew}
        options={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}

function GardenStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: 'card',
        headerMode: 'screen',
      }}>
      <Stack.Screen
        name="GardenMain"
        component={GardenScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title=""
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          unmountOnBlur: true,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="GardenStore"
        component={GardenStoreScreen}
        options={{
          header: ({navigation, scene}) => (
            <Header
              title="Garden Shop"
              navigation={navigation}
              scene={scene}
              back={true}
            />
          ),
          cardStyle: {
            backgroundColor: theme.COLORS.WHITE,
            fontFamily: theme.FONTS.TEXT,
          },
          unmountOnBlur: true,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  const localState = useSelector(state => state);
  useEffect(() => {
    return () => {
      // componentwillunmount in functional component.
      // Anything in here is fired on component unmount.
      // this._unsubscribe =
      // componentWillUnmount() {
      //   this._unsubscribe();
      // }
      // _unsubscribe.remove();
    };
  }, []);

  return (
    <Drawer.Navigator
      // useLegacyImplementation={true}
      style={{
        flex: 1,
        fontFamily: theme.FONTS.TEXT,
      }}
      drawerContent={props => (
        <CustomDrawerContent
          localState={localState}
          dispatchPassed={useDispatch}
          sessionControlComponent={() => {}}
          {...props}
        />
      )}
      drawerStyle={{
        backgroundColor: theme.COLORS.WHITE,
        width: width * 0.8,
        fontFamily: theme.FONTS.TEXT,
      }}
      screenOptions={{
        headerShown: false,
        activeTintcolor: theme.COLORS.WHITE,
        inactiveTintColor: theme.COLORS.BLACK,
        activeBackgroundColor: theme.COLORS.TRANSPARENT,
        itemStyle: {
          width: width * 0.75,
          backgroundColor: theme.COLORS.TRANSPARENT,
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          fontFamily: theme.FONTS.TEXT,
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: 'normal',
          fontFamily: theme.FONTS.TEXT,
        },
      }}
      initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Track" component={TrackStack} />
      <Drawer.Screen name="Learn" component={LearnStack} />
      <Drawer.Screen name="Connect" component={ConnectStack} />
      <Drawer.Screen name="Refer a Friend" component={ReferAFriendStack} />
      <Drawer.Screen name="Settings" component={SettingsStack} />
      <Drawer.Screen name="Garden" component={GardenStack} />
      <Drawer.Screen name="Login" component={LoginStack} />
    </Drawer.Navigator>
  );
}

const mapStateToProps = (state, props) => {
  return {
    connect: state.connect,
    endoCourse: state.learn.endo101Course,
  };
};
export default connect(mapStateToProps)(LoginStack);
