/**
 * Sportify
 * Group 5
 * CS360 - Spring 2018
 * Copyright - 19100034@lums.edu.pk
 */


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
  StyleSheet,
} from 'react-native';
import { Font } from 'expo'


class ScreenBG extends Component{
  render() {
    return(
      <View style={styles.screenBG}>
          <Image
            style={styles.imageBG}
            source={require('./assets/images/screensLogoNew.png')}
          />
      </View>
    );
  }
}


class CustomButtonforgotpassword extends Component{
  constructor(props) {
    super(props)
    this.state = {text: ''}
  }
  render(){
    return(
      <View style={styles.buttonforgetpassword}>
        <TouchableOpacity
          style={styles.buttonStyleforgotpassword}
          onPress={this.props.onPress}
        >
          <Text style={styles.buttonTextforgotpassword}>
            {this.props.title}
          </Text>
        </TouchableOpacity>
      </View>
    )
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
            top: 130,
            // borderColor: '#ff6c00', borderWidth: 1.5,
          }}
          underlineColorAndroid='#ff6c00'
          // underlineColorAndroid='transparent'
          autoCorrect={false}
          maxLength = {this.props.maxLength}
          placeholder={this.props.placeholder}
          // onChangeText={(text) => this.setState({text})}
          onChangeText={this.props.onChangeText}
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
      campusID: "",
      password: ""
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
          <UserInput
            placeholder = "Campus ID - @lums.edu.pk"
            maxLength = {8}
            onChangeText = {
            (inp) => {
              this.setState({campusID: inp})
              //console.warn(this.state.campusID)
            }
          }
          />
          <UserInput
            placeholder = "Enter Password"
            maxLength = {14}
            secureTextEntry={true}
            onChangeText = {
            (inp) => {
              this.setState({password: inp})
              //console.warn(this.state.password)
            }
          }
          />


          <CustomButtonforgotpassword
            title = "Forgot Password? Do not worry, click here"
          />

          {
              this.state.fontLoaded ? (
                <CustomButton
                  title = "Log In"
                  onPress = { () => {
                    //firebase.auth().signInWithEmailAndPassword('123@lums.edu.pk', 'hello123').catch(function(error) {
                    firebase.auth().signInWithEmailAndPassword(this.state.campusID + '@lums.edu.pk', this.state.password).catch(function(error) {
                      // Handle Errors here.
                      const errorCode = error.code;
                      const errorMessage = error.message;
                      console.warn(error.message)
                      // ...
                    });
                    //console.warn("auth")
                    }
                  }
                />
              ) : null
            }


        </View>

      </View>
    );
  }
}


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
    opacity: 0.06,
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
    top: 100,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    // justifyContent: 'space-around',
    // alignItems: 'center',
  },
  text: {
    padding: 10,
    // fontFamily: "DenkOne-Regular",
    //fontFamily: "Arial",
    fontSize: 20,
    color: "#000000",
    textAlign: 'center',
    alignItems: 'center',
  },
  textforgotpassword: {
    padding: 10,
    // fontFamily: "DenkOne-Regular",
    //fontFamily: "Arial",
    fontSize: 18,
    color: "#D3D3D3",
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
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'center',
  },
  buttonforgetpassword: {
    paddingHorizontal: 10,
    top: 140,
    flex: 1,
    justifyContent: 'center',
  },
  buttonStyle: {
    padding: 10,
    backgroundColor: "#ff6c00",
    alignItems: 'center',
  },
  buttonStyleforgotpassword: {
    padding: 10,
    //backgroundColor: ,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: "DenkOne-Regular",
    //fontFamily: "Arial",
    fontSize: 20,
    textAlign: 'center',
  },
  buttonTextforgotpassword: {
    fontSize: 17,
    textAlign: 'center',
    color: "#A9A9A9",
    //fontFamily: 'DenkOne-Regular',

  }
})
