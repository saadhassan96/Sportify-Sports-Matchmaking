/**
 * Sportify
 * Group 5
 * CS360 - Spring 2018
 * Copyright - 19100093@lums.edu.pk
 */
 /*Change Password*/

 import * as firebase from 'firebase';

 const firebaseConfig = {
  apiKey: "AIzaSyDBXYsGvYSY-kw4-m3uhaeKt8QOiRmZruE",
  authDomain: "sportify-a0b6e.firebaseapp.com",
  databaseURL: "https://sportify-a0b6e.firebaseio.com",
  storageBucket: "sportify-a0b6e.appspot.com",
}

firebase.initializeApp(firebaseConfig)

import React, { Component } from 'react';
import {
  Platform,
  Image,
  Text,
  View,
  Button,
  ListView,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Font } from 'expo'
console.disaleYellowBox = true

//const styles = require('./styles.js');

class ScreenBG extends Component{
  render() {
    return(
      <View style={styles.screenBG}>
          <Image
            style={styles.imageBG}
            source={require('./assets/images/homescreen.png')}
          />
      </View>
    );
  }
}




class CustomButton extends Component{
  constructor(props) {
    super(props)
    this.state = {text: ''}
  }
  render(){
    return(
      <View style={styles.buttonBG}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={this.props.onPress}
        >
          <Text style={styles.buttonText}>
            {this.props.title}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class CustomButtonLogin extends Component{
  constructor(props) {
    super(props)
    this.state = {text: ''}
  }
  render(){
    return(
      <View style={styles.buttonBGLogin}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={this.props.onPress}
        >
          <Text style={styles.buttonText}>
            {this.props.title}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}


class UserInput extends Component{
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (

      <View style={{padding: 10}}>
        <TextInput
          style={{
            height: 40,
            top: 10,
            width:330,

            // borderColor: '#ff6c00', borderWidth: 1.5,
          }}
          underlineColorAndroid='#ff6c00'
          // underlineColorAndroid='transparent'
          autoCorrect={false}
          maxLength = {this.props.maxLength}
          placeholder={this.props.placeholder}
          //onChangeText={(text) => this.setState({text})}
          onChangeText= {this.props.onChangeText}
          secureTextEntry={this.props.secureTextEntry}
          userInp={this.state.text}
        />

      </View>
    );
  }
}


export default class App extends Component<Props>{

  constructor(props){
    super(props)
    this.state={
      fontLoaded: false,
      campusID: ''
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'DenkOne-Regular': require('./assets/fonts/DenkOne-Regular.ttf'),
    })

    this.setState({ fontLoaded: true })
  }


  static navigationOptions = {
    title: 'Change Password',
    fontFamily: 'DenkOne-Regular'
  }


  render() {
    return (
      <View style={styles.mainContainer}>

        <View style={styles.imageContainer}>
          <ScreenBG/>
        </View>


        <View style={styles.contentContainer}>

        {
          this.state.fontLoaded ? (
          <CustomButtonLogin
            title = "Log In"
          />
        ): null

        }

        {
          this.state.fontLoaded ? (
          <CustomButton
            title = "Sign Up"
          />
        ): null

        }




        </View>

      </View>
    );
  }
}





// const React = require('react-native')
// const {StyleSheet} = React



const styles = StyleSheet.create({
  screenBG: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor : '#FFE6D5',
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',
    // height: '100%',
  },
  imageBG: {
    // flex: 1,
    // justifyContent: 'center',
    // aspectRatio: 1,
    // alignItems: 'center',
    opacity: 1,
    flex: 1,
    // width: null,
    // height: null,
    resizeMode: 'contain'
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    top: 30,
    // /left:20,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    // justifyContent: 'space-around',
    // alignItems: 'center',
  },
  text: {
    padding: 10,
    fontSize: 20,
    color: 'transparent',
    textAlign: 'center',
    alignItems: 'center',


  },

  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
  },
  buttonBG: {
    paddingHorizontal: 18,
    //flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    top: 110+300,
    left: 10,
  },
  buttonBGLogin: {
    paddingHorizontal: 18,
    //flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    top: 220+300,
    left: 10,
  },

  buttonStyle: {
    padding: 10,
    //backgroundColor: "#ff6c00",
    backgroundColor: 'transparent',
    alignItems: 'center',
  },

  buttonText: {
    fontFamily: 'DenkOne-Regular',
    fontSize: 20,
    color: 'transparent',
    backgroundColor: '#D3D3D3',
    textAlign: 'center',
  }
})

