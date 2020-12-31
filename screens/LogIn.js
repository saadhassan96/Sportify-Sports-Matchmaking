import React, { Component } from 'react';
import { Platform, StatusBar, Navigator, Image, Text, 
  View, ListView, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { Font } from 'expo';  
import firebaseConf from '../firebaseConf';
import { StackNavigator } from 'react-navigation';

// const styles = require('../styles.js')
const ScreenBG = require('../assets/components/ScreenBG.js')

const firebaseConfig = {
  apiKey: "AIzaSyDBXYsGvYSY-kw4-m3uhaeKt8QOiRmZruE",
  authDomain: "sportify-a0b6e.firebaseapp.com",
  databaseURL: "https://sportify-a0b6e.firebaseio.com",
  storageBucket: "sportify-a0b6e.appspot.com",
}

// firebase.initializeApp(firebaseConfig)
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

class LogIn extends Component{
  constructor(props){
    super(props)
    this.state={
      fontLoaded: false,
      campusID: '',
      password: ''
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      'DenkOne-Regular': require('../assets/fonts/DenkOne-Regular.ttf'),
    })
    this.setState({ fontLoaded: true })
  }
  static navigationOptions = {
    title: 'Log-In Screen',
    headerStyle:{
      // fontFamily: 'DenkOne-Regular',
      backgroundColor: '#ff6c00' 
    }
  }

  
  
  render() {
    clickOnLogIn = () => {
      let campusID = this.state.campusID
      let password = this.state.password
      
      firebaseConf.auth().signInWithEmailAndPassword(campusID, password)
      .then( (result) => {
        this.props.navigation.navigate('homePage', {campusID: campusID})
      }, (err) => {
        console.log(err)
        alert("Invalid username or password!")
      })
                
    }

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
                this.setState({campusID: inp+"@lums.edu.pk"})
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
                onPress = {clickOnLogIn}
              />
            ) : null
          }


        </View>

      </View>
    )
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
    top: 70,
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

module.exports = LogIn