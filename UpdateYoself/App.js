/**
 * Sportify
 * Group 5
 * CS360 - Spring 2018
 */

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import React, { Component } from 'react';
import { Platform, StatusBar, Navigator, Image, Text, View, ListView, TextInput, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Permissions, Notifications } from 'expo';

console.disableYellowBox = true

const HomeScreen = require('./screens/HomeScreen.js')
const SignUp = require('./screens/SignUp.js')
const SignUp1 = require('./screens/SignUp1.js')
const SignUp2 = require('./screens/SignUp2.js')
const Verify = require('./screens/Verify.js')
const LogIn = require('./screens/LogIn.js')

const HomePage = require('./screens/HomePage.js')
const ChangeStatus = require('./screens/ChangeStatus.js')
const AboutUs = require('./screens/AboutUs.js')
const ChooseSports = require('./screens/ChooseSports.js')

const EditDetails = require('./screens/EditDetails.js')
const EditDetails1 = require('./screens/EditDetails1.js')
const EditDetails2 = require('./screens/EditDetails2.js')
const Report = require('./screens/Report.js')
const ChangePassword = require('./screens/ChangePassword.js')
const InterestedUser = require('./screens/InterestedUser.js')

const IncomingRequest = require('./screens/IncomingRequest.js')
const Waiting = require('./screens/Waiting.js')

const MatchMade = require('./screens/MatchMade.js')

registerForPushNotificationsAsync = async (user) => {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }

  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();
  let update = {}
  updates['/expoToken'] = token
  firebaseConf.database().ref('users').child(user).update(updates)
}


const RootStack = StackNavigator(
  {
    homeScreen: {
      screen: HomeScreen
    },
    signUp: {
      screen: SignUp,
    },
    signUp1: {
      screen: SignUp1,
    },
    signUp2: {
      screen: SignUp2,
    },
    verify: {
      screen: Verify,
    },
    logIn: {
      screen: LogIn,
    },
    homePage: {
      screen: HomePage
    },
    changeStatus: {
      screen: ChangeStatus
    },
    aboutUs: {
      screen: AboutUs
    },
    chooseSports: {
      screen: ChooseSports
    },
    interestedUser: {
      screen: InterestedUser
    },
    report: {
      screen: Report
    },
    incomingRequest: {
      screen: IncomingRequest,
    },
    waiting: {
      screen: Waiting,
    },
    editDetails: {
      screen: EditDetails
    },
    editDetails1: {
      screen: EditDetails1
    },
    editDetails2: {
      screen: EditDetails2
    },
    changePassword: {
      screen: ChangePassword
    },
    matchMade: {
      screen: MatchMade
    }
  },
  {
    initialRouteName: 'homeScreen',
  }
)

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}
