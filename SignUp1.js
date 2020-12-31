/**
 * Sportify
 * Group 5
 * CS360 - Spring 2018
 * Copyright - 19100023@lums.edu.pk
 */

import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements';
// console.disableYellowBox=true
import {Font} from 'expo';
import { StackNavigator } from 'react-navigation';

import {
  Platform,
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
  TextInput,
  TouchableOpacity
} from 'react-native';


type Props = {};

const genderOpts = [
  {label: 'Male', value: 0},
  {label: 'Female', value: 1},
  {label: 'Other', value: 1}
];

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


class CustomCheckBox extends Component{
  constructor(props){
    super(props)
    this.state={
      checked: false,
      // list: ""

    }
  }


  render() {

    return (
      <CheckBox
        title={this.props.title}
        checked={this.state.checked}
        containerStyle={styles.contentContainer}
        onPress={() =>{
          this.setState({checked: !(this.state.checked)})
          this.props.callbackFromParent(this.props.title,this.state.checked)
        }
        }
      />

    )}

}


export default class App extends Component<Props>{

  constructor(props){
    super(props)
    this.state={
      fontLoaded: false,
      badminton: false,
      chess: false,
      squash: false,
      tabletennis:false,
      boxing: false,

    }
  }
  //
  callback=(thetitle, datafromchild)=>{
    console.warn(thetitle)
    console.warn(datafromchild);
    if (thetitle=="Badminton"){
      this.setState({badminton: datafromchild})

    }
    else if (thetitle=="Chess"){
      this.setState({chess: datafromchild})

    }
    else if (thetitle=="Squash"){
      this.setState({squash: datafromchild})

    }
    else if (thetitle=="Table tennis"){
      this.setState({tabletennis: datafromchild})

    }
    else if (thetitle=="Tennis"){
      this.setState({tennis: datafromchild})
    }
    else if (thetitle=="Boxing"){
      this.setState({boxing: datafromchild})
    }
    console.warn(this.state)


  }

  // updateState=()=>{
  //   this.setState({
  //     checked: !this.state.checked
  //
  //   })
  // }

  async componentDidMount() {
    await Font.loadAsync({
      'DenkOne-Regular': require('./assets/fonts/DenkOne-Regular.ttf'),
    })

    this.setState({ fontLoaded: true })
  }


  static navigationOptions = {
    title: 'Select Sports',
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
              <Text style={styles.text}>
                Select the sports you want to play:
              </Text>
            ) : null
            }

           <CustomCheckBox
             title="Badminton"
             callbackFromParent = {this.callback}
             // updateState={this.updateState}
             // onIconPress={pressedFunc}
              />
            <CustomCheckBox
              title="Chess"
              callbackFromParent = {this.callback}

               />

            <CustomCheckBox
              title="Squash"
              callbackFromParent = {this.callback}

               />

             <CustomCheckBox
               title="Table tennis"
               callbackFromParent = {this.callback}

                />
              <CustomCheckBox
                title="Tennis"
                callbackFromParent = {this.callback}

                 />
             <CustomCheckBox
               title="Boxing"
               callbackFromParent = {this.callback}

                />


              {
                this.state.fontLoaded ? (
                <CustomButton
                  title = "Next"
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
    backgroundColor: 'transparent',
    borderColor: 'transparent' ,
    flexDirection: 'column',
    // justifyContent: 'space-around',
    // alignItems: 'center',
  },
  text: {
    padding: 10,
    fontFamily: "DenkOne-Regular",
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
  buttonBG: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'center',
  },
  buttonStyle: {
    padding: 10,
    backgroundColor: "#ff6c00",
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: "DenkOne-Regular",
    fontSize: 20,
    textAlign: 'center',
  }
})

