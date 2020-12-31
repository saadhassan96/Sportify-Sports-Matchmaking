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
import { CheckBox } from 'react-native-elements';
import firebaseConf from '../firebaseConf';

console.disableYellowBox = true


class ScreenBG extends Component{
  render() {
    return(
      <View style={styles.screenBG}>
          <Image
            style={styles.imageBG}
            source={require('../assets/images/screensLogoNew.png')}
          />
      </View>
    );
  }
}


class MatchMade extends Component<Props>{

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

    this.setState({ fontLoaded: true})
  }


  static navigationOptions = {
    title: 'Player Matched!',
    headerStyle:{
      // fontFamily: 'DenkOne-Regular'
      backgroundColor: '#ff6c00'
    }
  }


  render() {
    // const { params } = this.props.navigation.state;
    // let campusID=params.campusID
    let campusID = "19100034@lums.edu.pk"
    let rollNum = campusID.substring(0,8)
    let sport='Squash'
    return (
      <View style={styles.mainContainer}>

        <View style={styles.imageContainer}>
          <ScreenBG/>
        </View>

      <View style={styles.contentContainer}>
      {
            this.state.fontLoaded ? (
            <Text style={styles.textsubtext}>
              You have been matched with {rollNum}
            </Text>
          ) : null
      }

      {this.state.fontLoaded && sport=='Tennis'? <Text style={styles.textsubtext}> Meet your partner at the Tennis Courts! Here is what they look like: </Text>:null }
      {this.state.fontLoaded && sport=='Badminton' || sport=='Table Tennis' || sport=='Chess' ? <Text style={styles.textsubtext}>  Meet your partner at the Sports Complex entrance! Here is what they look like:</Text>:null}
      {this.state.fontLoaded && sport=='Boxing' ? <Text style={styles.textsubtext}>Meet your partner at in the Cricket ground! Here is what they look like:  </Text> :null }
      {this.state.fontLoaded && sport=='Squash' ? <Text style={styles.textsubtext}>Meet your partner at the Squash courts! Here is what they look like:  </Text>:null}


      <Image
        style={{width:200,height:200}}
        source={require('../assets/images/cat.jpg')}
      />

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
  textsubtext: {
    padding: 10,
    fontFamily: "DenkOne-Regular",
    fontSize: 20,
    color: "darkorange",
    textAlign: 'center',
    alignItems: 'center',
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
    // top: 87,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    borderColor: 'transparent' ,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  text: {
    padding: 10,
    fontSize: 20,
    color: "#000000",
    textAlign: 'center',
    alignItems: 'center',
  },

  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
  },
  signupbutton:{
    // top:250,
    paddingHorizontal:10,

  },
  subStyle:{
    backgroundColor:"#ff6c00",
    padding:10,
    justifyContent:'center',
    borderWidth:0,
    borderColor:"#D3D3D3",
  },

  buttonBG: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    top:10,
  },

  buttonStyle: {
    padding: 10,
    backgroundColor: "#ff6c00",
    alignItems: 'center',
  },

  buttonText: {
    fontFamily: 'DenkOne-Regular',
    fontSize: 20,
    textAlign: 'center',
  },
  buttontnc: {
    // paddingHorizontal: 10,
    top: 10,
  //  flex: 1,
    justifyContent: 'center',
  },

  buttonStyletnc: {
   padding: 10,
    //backgroundColor: ,
    alignItems: 'center',
  },
  buttonTexttnc: {
    fontSize: 20,
    textAlign: 'center',
    color: "#A9A9A9",
    //fontFamily: 'DenkOne-Regular',

  },
  checkboxStyle:{

    backgroundColor:'transparent',
    borderColor: 'transparent',
    paddingHorizontal: 10,
    justifyContent: 'center',
    top:100,
  }
})

module.exports = MatchMade
