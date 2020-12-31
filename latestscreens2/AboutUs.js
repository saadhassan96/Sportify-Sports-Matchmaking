import React, { Component } from 'react';
import { Platform, StatusBar, Navigator, Image, Text,
  View, ListView, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { Font } from 'expo';
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

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


class CustomButtoncentral extends Component{
  constructor(props) {
    super(props)
    this.state = {text: ''}
  }
  render(){
    return(
      <View style={styles.buttonBG}>
        <TouchableOpacity
          style={styles.buttonStylemain}
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


class HomePage extends Component{

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
    title: 'Go Back',
    headerStyle:{
      // fontFamily: 'DenkOne-Regular',
      backgroundColor: '#ff6c00',
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerTitleStyle: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    // headerLeft:
    // headerRight:
      // <Button
        // title="Log Out"
        // color="#ff6c00"
      // />,
  }



  render() {
    // goToChangeStatus = () => {
    //   this.props.navigation.navigate('changeStatus')
    //}

    const about="Sportify is a platform intended for students of  who play sports but are unable to find a partner. The product allows users to connect to other players on the basis of relevant sport and availability of potential partner within the campus. '\n' Interested users fill in their personal details as well as the sports they are interested in to make an account. This user information will be used to send requests to the players when someone wants to play a particular sport. A match results in user details to be shared a match to be set up."

    return (
      <View style={styles.mainContainer}>

        <View style={styles.imageContainer}>
          <ScreenBG/>
        </View>

        <View style={styles.contentContainer}>
        {
              this.state.fontLoaded ? (
              <Text style={styles.text}>
                About Sportify
              </Text>
            ) : null
          }
          {
                this.state.fontLoaded ? (
                <Text style={styles.textsubtext}>
                Sportify is a platform intended for students of who play sports but are unable to find a partner. The product allows users to connect to other players on the basis of relevant sport and availability of potential partner within the campus.
                </Text>
              ) : null
          }
          {
                this.state.fontLoaded ? (
                <Text style={styles.textsubtext}>
                Interested users fill in their personal details as well as the sports they are interested in to make an account. This user information will be used to send requests to the players when someone wants to play a particular sport. A match results in user details to be shared a match to be set up.
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
  contentContainermain: {
    flex: 1,
    backgroundColor: 'transparent',
    borderColor: 'transparent' ,
    flexDirection: 'column',
    padding: 10,
    // justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    padding: 15,
    fontFamily: "DenkOne-Regular",
    fontSize: 30,
    color: "orange",
    textAlign: 'center',
    alignItems: 'center',
  },
  textsubtext: {
    padding: 10,
    fontFamily: "DenkOne-Regular",
    fontSize: 20,
    color: "darkorange",
    textAlign: 'center',
    alignItems: 'center',
  },
  textcap: {
    padding: 15,
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
    borderColor: "#000000",
    borderRadius: 20,
    backgroundColor: "#ff6c00",
    alignItems: 'center',
  },
  buttonStylemain: {
    padding: 10,
    height: 50,
    width: 200,
    borderColor: "#000000",
    borderRadius: 20,
    backgroundColor: "#ff6c00",
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: "DenkOne-Regular",
    fontSize: 20,
    textAlign: 'center',
  }
})

module.exports = HomePage
