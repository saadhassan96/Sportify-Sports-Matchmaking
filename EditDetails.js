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

class EditDetails extends Component{
  constructor(props){
    super(props)
    this.state={
      fontLoaded: false,
      name: '',
      campusID: '',
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
    title: 'Edit Details Screen',
    headerStyle:{
      // fontFamily: 'DenkOne-Regular',
      backgroundColor: '#ff6c00'
    }
  }

  render() {

    clickOnNext = () => {
      // {this.state.allValid ? (console.log("same")) : (console.log("not same"))}
      console.log(this.state)
      this.props.navigation.navigate('EditDetails1',{
        name: this.state.name,
        campusID: this.state.campusID,
        gender: this.state.gender
      })
    }

    return (
      <View style={styles.mainContainer}>

        <View style={styles.imageContainer}>
          <ScreenBG/>
        </View>

        <View style={styles.contentContainer}>

          {
            this.state.fontLoaded ? (
              <Text style={styles.text}>
              Please enter the following details
              </Text>
            ) : null
          }
          <UserInput
            placeholder = "Name"
            maxLength = {25}
            onChangeText = {
                (inp) => {
                  this.setState({name: inp})
                }
               }

          />
          <UserInput
            placeholder = "Campus ID - @lums.edu.pk"
            maxLength = {8}
            onChangeText = {
                (inp) => {
                  this.setState({campusID: inp+"@lums.edu.pk"})
                }
               }
          />

          {
            this.state.fontLoaded ? (
              <Text style={styles.Gtext}>
              Gender
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
              title = "Next"
              onPress={clickOnNext}
              />
            ) : null
          }

        </View>

      </View>
    );
  }
}

module.exports = EditDetails
