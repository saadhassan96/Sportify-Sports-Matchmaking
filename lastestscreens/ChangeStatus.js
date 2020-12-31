import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements';
import {Font} from 'expo';
import { StackNavigator } from 'react-navigation';
import firebaseConf from '../firebaseConf';


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


class CustomCheckBox extends Component{
  constructor(props){
    super(props)
    this.state={
      checked: true,

      // list: ""

    }
  }


  render() {

    return (
      <CheckBox
        center
        title={this.props.title}

        textStyle={styles.availText}
        fontFamily="DenkOne-Regular"
        // onePress={}
        iconRight
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checkedColor='#ff6c00'
        // size=30
        checked={! this.state.checked}
        containerStyle={styles.contentContainer}
        onPress={() =>{
          this.setState({checked: ! this.state.checked})
          this.props.callbackFromParent(this.state.checked)
        }
        }
      />

    )}

}


class ChangeStatus extends Component<Props>{

  constructor(props){
    super(props)
    this.state={
      fontLoaded: false,
      availability: false

    }
  }
  //
  callback=(datafromchild)=>{

    this.setState({availability: datafromchild})
    console.warn(this.state)

  }



  async componentDidMount() {
    await Font.loadAsync({
      'DenkOne-Regular': require('../assets/fonts/DenkOne-Regular.ttf'),
    })

    this.setState({ fontLoaded: true })
  }


  static navigationOptions = {
    title: 'Change Status',
    headerStyle:{
      // fontFamily: 'DenkOne-Regular',
      backgroundColor: '#ff6c00'
    }
  }



  render() {

    const { params } = this.props.navigation.state
    // console.log("the id is", params.campusID)
  	goToHome = () => {
      console.log(this.state)
  		this.props.navigation.navigate('homePage')
  	}

    let rollNum=params.campusID.substring(0,8)
    console.log(rollNum)

    firebaseConf.database().ref().child('users').child(rollNum).update({available: true})





    return (
      <View style={styles.mainContainer}>

        <View style={styles.imageContainer}>
          <ScreenBG/>
        </View>

        <View style={styles.contentContainer}>

        {
          this.state.fontLoaded ? (
           <CustomCheckBox
             title="Available"
             callbackFromParent = {this.callback}
             // updateState={this.updateState}
             // onIconPress={pressedFunc}
              />
            ) : null
            }

            {
              this.state.fontLoaded ? (
              <Text style={styles.text}>
                By becoming Available, you will be open to receiving requests from the other users.
                By unchecking, you become invisible to other users.
              </Text>
            ) : null
            }

              {
                this.state.fontLoaded ? (
                <CustomButton
                  title = "Done"
                  onPress = {goToHome}
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
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderColor: 'transparent',
    alignItems: 'center',
  },
  text: {
    padding: 10,
    // fontFamily: "DenkOne-Regular",
    fontWeight: 'bold',
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
    paddingHorizontal: 35,
    backgroundColor: "#ff6c00",
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: "DenkOne-Regular",
    fontSize: 25,
    textAlign: 'center',
  },
  availText: {
  	fontFamily: "DenkOne-Regular",
  	color: "#000000",
    fontSize: 20,
    textAlign: 'center',
  }
})

module.exports = ChangeStatus
