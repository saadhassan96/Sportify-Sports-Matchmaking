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

class CustomButtoncb extends Component{
  constructor(props) {
    super(props)
    this.state = {text: ''}
  }
  render(){
    return(
      <View style={
        {
          paddingHorizontal: 10,
          flex: 1,
          justifyContent: 'center',
        }
      }>
          <Text style={
            {
              fontSize: 15,
              textAlign: 'center',
            }
          }>
            {this.props.title}
          </Text>
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

class IncomingRequest extends Component{
  constructor(props){
    super(props)
    this.state={
      fontLoaded: false,
      name: '',
      campusID: '',
      sport: '',
      userSelected:'',
      usersList:{},
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      'DenkOne-Regular': require('../assets/fonts/DenkOne-Regular.ttf'),
    })
    this.setState({ fontLoaded: true })
  }
  static navigationOptions = {
    title: 'Choose partner',
    headerStyle:{
      // fontFamily: 'DenkOne-Regular',
      backgroundColor: '#ff6c00'
    }
  }

  render() {
    // const { params } = this.props.navigation.state;
    // let campusId = params.campusID;
    // let rollNum = campusId.substring(0,8)
    // // console.log(rollNum)




    return (
      <View style={styles.mainContainer}>

        <View style={styles.imageContainer}>
          <ScreenBG/>
        </View>

        <View style={styles.contentContainer}>

          {
            this.state.fontLoaded ? (
              <Text style={{
                padding: 10,
                fontFamily: "DenkOne-Regular",
                fontSize: 30,
                color: "#ff6c00",
                textAlign: 'center',
                alignItems: 'center',
                top: 30
              }}>
              Hey, we have a request for you!
              </Text>
            ) : null
          }
          {
            this.state.fontLoaded ? (
              <Text style={{
                padding: 10,
                fontFamily: "DenkOne-Regular",
                fontSize: 30,
                color: "#00000",
                textAlign: 'center',
                alignItems: 'center',
                top: 30
              }}>
              Hamza - (Male)
              </Text>
            ) : null
          }
          {
            this.state.fontLoaded ? (
              <Text style={{
                padding: 10,
                fontFamily: "DenkOne-Regular",
                fontSize: 30,
                color: "#00000",
                textAlign: 'center',
                alignItems: 'center',
                top: 30
              }}>
              2019-10-0034
              </Text>
            ) : null
          }
          {
          this.state.fontLoaded ? (
            <Text style={{
              padding: 10,
              fontFamily: "DenkOne-Regular",
              fontSize: 30,
              color: "#ff6c00",
              textAlign: 'center',
              alignItems: 'center',
              top: 30
            }}>
            wants to play Badminton with you
            </Text>
          ) : null
        }


          <View style={styles.contentContainer}>
          <RadioGroup
            size={20}
            thickness={2}
            color='#ff6c00'
            highlightColor='ff6c00'
            //top:30
            //onSelect = {(index, value) => this.setState({gender: value})}
          >
            <RadioButton value={'play'} >
              <Text>Lets play!</Text>
            </RadioButton>
            <RadioButton value={'miss'} >
              <Text>I do not feel like it</Text>
            </RadioButton>



          </RadioGroup>
          </View>


        </View>

      </View>
    );
  }
}

module.exports = IncomingRequest
