/**
 * Sportify
 * Group 5
 * CS360 - Spring 2018
 * Copyright - 19100034@lums.edu.pk
 */

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import React, { Component } from 'react';
import { Platform, StatusBar, Navigator, Image, Text, View, ListView, TextInput, TouchableOpacity} from 'react-native';
// import { Font } from 'expo';
// import * as firebase from 'firebase';
import { StackNavigator } from 'react-navigation';


const firebaseConfig = {
  apiKey: "AIzaSyDBXYsGvYSY-kw4-m3uhaeKt8QOiRmZruE",
  authDomain: "sportify-a0b6e.firebaseapp.com",
  databaseURL: "https://sportify-a0b6e.firebaseio.com",
  storageBucket: "sportify-a0b6e.appspot.com",
}

// const firebaseApp = firebase.initializeApp(firebaseConfig)
// firebase.initializeApp(firebaseConfig)

console.disableYellowBox = true

// const styles = require('./styles.js')
// const ScreenBG = require('./assets/components/ScreenBG.js')
// const CustomButton = require('./assets/components/CustomButton.js')
// const Wallpaper = require('./assets/components/Wallpaper.js')
// const UserInput = require('./assets/components/UserInput.js')

const SignUp = require('./screens/SignUp.js')
const SignUp1 = require('./screens/SignUp1.js')
const SignUp2 = require('./screens/SignUp2.js')
const Verify = require('./screens/Verify.js')
const HomePage = require('./screens/HomePage.js')
const LogIn = require('./screens/LogIn.js')
const HomeScreen = require('./screens/HomeScreen.js')
const ChangeStatus = require('./screens/ChangeStatus.js')
const AboutUs = require('./screens/AboutUs.js')
const ChooseSports = require('./screens/ChooseSports.js')
const InterestedUser = require('./screens/InterestedUser.js')
const EditDetails = require ('./screens/EditDetails.js')
const EditDetails1 = require ('./screens/EditDetails1.js')
const EditDetails2 = require ('./screens/EditDetails2.js')
const ChangePassword = require ('./screens/ChangePassword.js')
const MatchMade = require ('./screens/MatchMade.js')
const Report = require ('./screens/Report.js')

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
    chooseSports: {
      screen: ChooseSports
    },
    interestedUser: {
      screen: InterestedUser
    },
    aboutUs: {
      screen: AboutUs
    },
    EditDetails: {
      screen: EditDetails
    },
    EditDetails1: {
      screen: EditDetails1
    },
    EditDetails2: {
      screen: EditDetails2
    },
    MatchMade:{
      screen: MatchMade
    },
    ChangePassword:{
      screen: ChangePassword
    },
    Report:{
      screen: Report
    }
  },
  {
    initialRouteName: 'homeScreen'
  }
)

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}
