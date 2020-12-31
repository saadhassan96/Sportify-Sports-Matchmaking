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

class InterestedUser extends Component{
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
    const { params } = this.props.navigation.state;
    let campusId = params.campusID;
    let rollNum = campusId.substring(0,8)
    // console.log(rollNum)

    clickOnPlayWith = () => {
      //code for making match table
      firebaseConf.database().ref('matches/'+ rollNum).set({
          sender: rollNum,
          receiver: this.state.userSelected.substring(0,8),
          sport: params.sport,
          status: "pending"
        }
      )
      this.props.navigation.navigate('interestedUser', {campusID: params.campusID, sport: this.state.sport, userSelected: this.state.userSelected })
    }

    firebaseConf.database().ref('users/').once('value').then( (snapshot) => {

    let list = (snapshot.val()) || 'Anonymous'
    this.setState({usersList: list})


    })
    let savedUserList=this.state.usersList
    let interestedusers = [];
    for (var user in savedUserList){
      let studentEntry=savedUserList[user]
      if (studentEntry["campusID"].substring(0,8)!=rollNum){
        if (studentEntry["available"] == true){
          let thesports=studentEntry["sports"]
          if (thesports[params.sport]==true){
              var nameGenderId = []
              // console.log("here")
              nameGenderId.push(studentEntry["name"])
              nameGenderId.push(studentEntry["gender"])
              nameGenderId.push(studentEntry["campusID"])
              interestedusers.push(nameGenderId)
              // interestedusers[studentEntry["campusID"]]=nameGenderId
              }
            }
          }
        }

        console.log(interestedusers[0])



    return (
      <View style={styles.mainContainer}>

        <View style={styles.imageContainer}>
          <ScreenBG/>
        </View>

        <View style={styles.contentContainer}>

          {
            this.state.fontLoaded ? (
              <Text style={styles.text}>
              The following players are available right now to play with you! Please select one:
              </Text>
            ) : null
          }


          <View style={styles.contentContainer}>
          <RadioGroup
            size={20}
            thickness={2}
            color='#ff6c00'
            highlightColor='ff6c00'
            onSelect = {(index, value) => this.setState({userSelected: value})}>

            {interestedusers.map(buttoninfo => (
                <RadioButton value={buttoninfo[2]} >
                  <CustomButtoncb
                    title = {buttoninfo[0]+" - (" + buttoninfo[1] + ")"}
                  />
                </RadioButton>

              ))}

          </RadioGroup>
          </View>


          {
            this.state.fontLoaded ? (
              <CustomButton
              title = "Lets play!"
              onPress={clickOnPlayWith}
              />
            ) : null
          }

        </View>

      </View>
    );
  }
}

module.exports = InterestedUser
