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




class Waiting extends Component{
  constructor(props){
    super(props)
    this.state={
      fontLoaded: false,
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      'DenkOne-Regular': require('../assets/fonts/DenkOne-Regular.ttf'),
    })
    this.setState({ fontLoaded: true })
  }
  static navigationOptions = {
    title: 'Waiting',
    headerStyle:{
      // fontFamily: 'DenkOne-Regular',
      backgroundColor: '#ff6c00'
    }
  }

  render() {
    const { params } = this.props.navigation.state
    let list = ''
    firebaseConf.database().ref('matches/').once('value').then( (snapshot) => {

      list = (snapshot.val()) || 'Anonymous'
      this.setState({usersList: list})
      
    })

    let ulist=this.state.usersList
    console.log("list", ulist)
    for (var val in ulist){
        let entry = ulist[val]
        // console.log("entry", entry)
        if (entry["sender"] === params.rollNum){
          if(entry["status"] === "accepted"){
            let opp = entry["receiver"]
            this.props.navigation.navigate('matchMade', {against: opp, sport: params.sport})

          } 
        }

      }


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
                fontSize: 40,
                color: "#ff6c00",
                textAlign: 'center',
                alignItems: 'center',
                top: 100
              }}>
              Waiting for your opponent to reply...
              </Text>
            ) : null
          }
          {
            this.state.fontLoaded ? (
              <Text style={{
                padding: 10,
                fontFamily: "DenkOne-Regular",
                fontSize: 22,
                color: "#ff6c00",
                textAlign: 'center',
                alignItems: 'center',
                top: 300
              }}>
              You can minimize the application, we will notify you as soon as your opponent replies!
              </Text>
            ) : null
          }
        </View>

      </View>
    );
  }
}

module.exports = Waiting
