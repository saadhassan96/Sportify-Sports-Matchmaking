/**
 * Sportify
 * Group 5
 * CS360 - Spring 2018
 * Copyright - 19100023@lums.edu.pk
 */

import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements';
import {Button} from 'react-native-elements';
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

class InARow extends Component{


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


export default class App extends Component<Props>{

  constructor(props){
    super(props)
    this.state={
      fontLoaded: false,

    }
  }


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
            <Button
              icon={

              }
              />
            }

            {
              this.state.fontLoaded ? (
              <Text style={styles.text}>
                Welcome to Sportify
              </Text>
            ) : null
            }

            {
              this.state.fontLoaded ? (
              <Text style={styles.textsubtext}>
                An easy way to find your buddy!
              </Text>
            ) : null
            }

              {
                this.state.fontLoaded ? (
                <CustomButton
                  title = "Change Status"
                />
                ) : null
              }

              {
                this.state.fontLoaded ? (
                <Text style={styles.textcap}>
                  Are you available to play?
                </Text>
              ) : null
              }

              {
                this.state.fontLoaded ? (
                <CustomButton
                  title = "Report"
                />
                ) : null
              }
              {
                this.state.fontLoaded ? (
                <Text style={styles.textcap}>
                  Report an unpleasant experience
                </Text>
              ) : null
              }
              {
                this.state.fontLoaded ? (
                <CustomButton
                  title = "Play!"
                />
                ) : null
              }
              {
                this.state.fontLoaded ? (
                <Text style={styles.textcap}>
                  Find a sport partner
                </Text>
              ) : null
              }
              {
                this.state.fontLoaded ? (
                <CustomButton
                  title = "About"
                />
                ) : null
              }
              {
                this.state.fontLoaded ? (
                <Text style={styles.textcap}>
                  About Sportify
                </Text>
              ) : null
              }
              {
                this.state.fontLoaded ? (
                <CustomButton
                  title = "Edit Details"
                />
                ) : null
              }
              {
                this.state.fontLoaded ? (
                <Text style={styles.textcap}>
                  Update your personal details
                </Text>
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
  textsubtext: {
    padding: 10,
    fontFamily: "DenkOne-Regular",
    fontSize: 15,
    color: "#000000",
    textAlign: 'center',
    alignItems: 'center',
  },
  textcap: {
    padding: 10,
    fontFamily: "DenkOne-Regular",
    fontSize: 12,
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
    paddingHorizontal: 30,
    backgroundColor: "#ff6c00",
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: "DenkOne-Regular",
    fontSize: 20,
    textAlign: 'center',
  }
})
