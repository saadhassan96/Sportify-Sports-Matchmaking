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

class CustomCheckBox extends Component{
  constructor(props){
    super(props)
    this.state={
      // checked: false,
      // ischecked:false
      checked: true
      // list: ""

    }
  }

  render(){
    return (
  <CheckBox
    title={this.props.title}
    checked={! this.state.checked}
    containerStyle={styles.checkboxStyle}
    textStyle={styles.text}
    onPress={() =>{
      this.setState({checked: !(this.state.checked)})
      this.props.callbackFromParent(this.state.checked)
    }
    }
  />

)}

}


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

class SignUpButton extends Component{
  constructor(props) {
    super(props)
    this.state = {text: ''}
  }
  render(){
    return(
      <View style={styles.signupbutton}>
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


class CustomPictureButton extends Component{
  constructor(props) {
    super(props)
    this.state = {text: ''}
  }
  render(){
    return(
      <View style={styles.buttonBG}>
        <TouchableOpacity
          style={styles.subStyle}
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

class CustomButtontnc extends Component{
  constructor(props) {
    super(props)
    this.state = {text: ''}
  }
  render(){
    return(
      <View style={styles.buttontnc}>
        <TouchableOpacity
          style={styles.buttonStyletnc}
          onPress={this.props.onPress}
        >
          <Text style={styles.buttonTexttnc}>
            {this.props.title}
          </Text>
        </TouchableOpacity>
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


class UserInput extends Component{
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (

      <View style={{padding: 10}}>
        <TextInput
          style={{
            height: 40,
            top: 10,
            width:330,

            // borderColor: '#ff6c00', borderWidth: 1.5,
          }}
          underlineColorAndroid='#ff6c00'
          // underlineColorAndroid='transparent'
          autoCorrect={false}
          maxLength = {this.props.maxLength}
          placeholder={this.props.placeholder}
          //onChangeText={(text) => this.setState({text})}
          onChangeText= {this.props.onChangeText}
          secureTextEntry={this.props.secureTextEntry}
          userInp={this.state.text}
        />

      </View>
    );
  }
}


class EditDetails2 extends Component<Props>{

  constructor(props){
    super(props)
    this.state={
      fontLoaded: false,
      newPass:'',
      oldPass:''
    }
  }




  async componentDidMount() {
    await Font.loadAsync({
      'DenkOne-Regular': require('../assets/fonts/DenkOne-Regular.ttf'),
    })

    this.setState({ fontLoaded: true })
  }


  static navigationOptions = {
    title: 'Upload New Picture',
    headerStyle:{
      // fontFamily: 'DenkOne-Regular',
      backgroundColor: '#ff6c00'
    }
  }


  render() {
    const { params } = this.props.navigation.state;

    changePassword = ()=>{
      let campusID = params.params.campusID
      let pass=this.state.oldPass
      let newpass=this.state.newPass
      let rollNum = campusID.substring(0,8)
      // let password = "hellocow"
    //  let password = params.params.password
      let name = params.params.name
      let gender = params.params.gender
      // let name = "shaarif"
      let sports = {
        badminton: params.badminton,
        boxing: params.boxing,
        chess: params.chess,
        squash: params.squash,
        tabletennis: params.tabletennis,
        tennis: params.tennis,
      }
    this.props.navigation.navigate('ChangePassword', {campusID:campusID,rollNum:rollNum,name:name,gender:gender,sports:sports})


}
    completeSave = () => {
      console.log(this.state)
      console.log(params)
      // let email = "19100034@lums.edu.pk"
    //  var user = firebaseConf.auth().currentUser
      //let password=user.password
      let campusID = params.params.campusID
      let pass=this.state.oldPass
      let newpass=this.state.newPass
      let rollNum = campusID.substring(0,8)
      // let password = "hellocow"
    //  let password = params.params.password
      let name = params.params.name
      let gender = params.params.gender
      // let name = "shaarif"
      let sports = {
        badminton: params.badminton,
        boxing: params.boxing,
        chess: params.chess,
        squash: params.squash,
        tabletennis: params.tabletennis,
        tennis: params.tennis,
      }
      firebaseConf.auth().signInWithEmailAndPassword(campusID, pass)
      .then( (result) => {
        firebaseConf.database().ref('users/' + rollNum).set({
            campusID: rollNum,
            name: name,
            gender: gender,
            sports: sports,
            password: pass
          }
        )
        this.props.navigation.navigate('homePage', {campusID: this.state.campusID})
      }, (err) => {
        console.log(err)
        alert("Invalid username or password! Could not save changes")
      })



      this.props.navigation.navigate('')
    }

    return (
      <View style={styles.mainContainer}>

        <View style={styles.imageContainer}>
          <ScreenBG/>
        </View>


        <View style={styles.contentContainer}>
        <View>
        <Text style={{ top: 5, fontWeight: 'bold',fontSize: 20,textAlign: 'center',alignItems: 'center'}}>
        Upload a new picture for your buddies!
        </Text>
        </View>

        <View style={styles.contentContainer}>
          {
              this.state.fontLoaded ? (
                <CustomPictureButton
                  title = "Search for your picture"
                  onPress = { () => {}
                      }
                />
              ) : null
            }

            {
                this.state.fontLoaded ? (
                  <CustomPictureButton
                    title = "Change Password"
                    onPress = {changePassword}
                  />
                ) : null
              }

            <UserInput
              placeholder = "Enter your old password to save changes!"
              maxLength = {14}
              secureTextEntry={true}
              onChangeText = {
                  (inp) => {
                    this.setState({oldPass: inp})
                  }
                 }
            />

              {
                  this.state.fontLoaded ? (
                    <CustomButton
                      title = "Save Changes!"
                      onPress = {completeSave}
                    />
                  ) : null
                }
                </View>
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

module.exports = EditDetails2
