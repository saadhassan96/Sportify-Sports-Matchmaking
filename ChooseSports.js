import React, { Component } from 'react';
import { Platform, StatusBar, Navigator, Image, Text,
  View, ListView, TextInput, TouchableOpacity} from 'react-native';
import { Font } from 'expo';
import firebaseConf from '../firebaseConf';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

console.disableYellowBox = true

const styles = require('../styles.js')
const ScreenBG = require('../assets/components/ScreenBG.js')
const Wallpaper = require('../assets/components/Wallpaper.js')
const UserInput = require('../assets/components/UserInput.js')

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

class SignUp extends Component{
  constructor(props){
    super(props)
    this.state={
      fontLoaded: false,
      name: '',
      campusID: '',
      firstPass: '',
      secondPass: '',
      // finalPass: '',
      // allValid: false,
      gender: ''
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      'DenkOne-Regular': require('../assets/fonts/DenkOne-Regular.ttf'),
    })
    this.setState({ fontLoaded: true })
  }
  static navigationOptions = {
    title: 'Sign-Up Screen',
    headerStyle:{
      // fontFamily: 'DenkOne-Regular',
      backgroundColor: '#ff6c00'
    }
  }

  render() {

    clickOnNext = () => {
      // {this.state.allValid ? (console.log("same")) : (console.log("not same"))}
      console.log(this.state)
      this.props.navigation.navigate('signUp1',{
        name: this.state.name,
        campusID: this.state.campusID,
        password: this.state.firstPass,
        gender: this.state.gender
      })
    }


    firebaseConf.database().ref('users/' + '19100023').once('value').then(function(snapshot){
      var sportslist = (snapshot.val() && snapshot.val().sports) || 'Anonymous';
      console.log(username);
    });

    return (
      <View style={styles.mainContainer}>

        <View style={styles.imageContainer}>
          <ScreenBG/>
        </View>

        <View style={styles.contentContainer}>

          {
            this.state.fontLoaded ? (
              <Text style={styles.text}>
              Which sport do you wish to play right now?
              </Text>
            ) : null
          }


          <View style={styles.contentContainer}>
          <RadioGroup
            size={20}
            thickness={2}
            color='#ff6c00'
            highlightColor='ff6c00'
            onSelect = {(index, value) => this.setState({gender: value})}
          >
            <RadioButton value={'Male'} >
              <Text>Male</Text>
            </RadioButton>
            <RadioButton value={'Female'} >
              <Text>Female</Text>
            </RadioButton>
            <RadioButton value={'Other'} >
              <Text>Other</Text>
            </RadioButton>


          </RadioGroup>
          </View>


          {
            this.state.fontLoaded ? (
              <CustomButton
              title = "Play!"
              onPress={clickOnNext}
              />
            ) : null
          }

        </View>

      </View>
    );
  }
}

module.exports = SignUp
