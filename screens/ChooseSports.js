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

class ChooseSports extends Component{
  constructor(props){
    super(props)
    this.state={
      fontLoaded: false,
      name: '',
      campusID: '',
      sport: '',
      sportslist: {},
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      'DenkOne-Regular': require('../assets/fonts/DenkOne-Regular.ttf'),
    })
    this.setState({ fontLoaded: true })
  }
  static navigationOptions = {
    title: 'Choose Sports',
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

    clickOnPlaySport = () => {
      this.props.navigation.navigate('interestedUser', {campusID: params.campusID, sport: this.state.sport})
    }

      firebaseConf.database().ref('users/' +rollNum).once('value').then( (snapshot) => {
      // console.log(rollNum)

      var list = (snapshot.val() && snapshot.val().sports) || 'Anonymous'
      //let list = snapshot.val().sports
      this.setState({ sportslist: list })
      // console.log("Printing state",this.state)


    })


      let mysports=[]
      let savedsports=this.state.sportslist
      // console.log("savedsports",savedsports)
      for (var key in savedsports){
        // console.log(key)
        if (savedsports.hasOwnProperty(key)){
          if (savedsports[key]==true){
            mysports.push(key)
            // console.log(key)
          }
        }
        // if(savedsports[i] )
      }

      // console.log(mysports)



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
            onSelect = {(index, value) => this.setState({sport: value})}>

            {
              mysports.map(buttoninfo => (
                <RadioButton value={buttoninfo} >
                  <CustomButtoncb
                    title = {buttoninfo}
                  />
                  
                </RadioButton>
              ))
            }

          </RadioGroup>
          </View>


          {
            this.state.fontLoaded ? (
              <CustomButton
              title = "Play!"
              onPress={clickOnPlaySport}
              />
            ) : null
          }

        </View>

      </View>
    );
  }
}

module.exports = ChooseSports
