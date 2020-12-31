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


class Report extends Component<Props>{

  constructor(props){
    super(props)
    this.state={
      fontLoaded: false,
      reportedID:'',
      reported_rollNum:'',
      allUsers:{},
      reportedUsers:{}
    }
  }


  async componentDidMount() {
    await Font.loadAsync({
      'DenkOne-Regular': require('../assets/fonts/DenkOne-Regular.ttf'),
    })

    this.setState({ fontLoaded: true})
  }


  static navigationOptions = {
    title: 'Report',
    headerStyle:{
      // fontFamily: 'DenkOne-Regular'
      backgroundColor: '#ff6c00'
    }
  }


  render() {
    const { params } = this.props.navigation.state;
    //this.setState({reporterID: params.campusID})

    reportU = () => {
      //let idreported=this.state.reporterID
    //  alert("IN FUNCTION1")
      let id_reported=this.state.reportedID
      this.setState({reported_rollNum:id_reported.substring(0,8)})
      let rollNum = this.state.reported_rollNum
      firebaseConf.database().ref('users/').once('value').then( (snapshot) =>
      {

      let list = (snapshot.val()) || 'Anonymous'
      this.setState({allUsers: list})

      })
      let user_exists=0
    //  alert("IN FUNCTION2")
      let users_present=this.state.allUsers
      for (var user in users_present){
        console.log(user)
      //  console.log(user["campusID"])
      let current_user=users_present[user]
    //  console.log(id_user)
        if (current_user["campusID"]==id_reported){
          user_exists=1
        // console.log("--------------------------")
          //alert("user_exists")
          break
        }
      //  else{console.log("user nor present")}
      }

      if (user_exists==1){
        firebaseConf.database().ref('report/').once('value').then( (snapshot) =>
        {

        let report_list = (snapshot.val()) || 'Anonymous'
        this.setState({reportedUsers: report_list})

        })
        var r_present=0
        let rU=this.state.reportedUsers
        for (var r_user in rU){
          let current_reported=rU[r_user]
          if (current_reported["campusID"]==id_reported){
            r_present=1
          //  console.log("r_present",r_present)
            //console.warn("**************************")
            //alert(r_present)
            let count=current_reported["reportCount"]
            count=count+1
            firebaseConf.database().ref('report/' + rollNum).set({
              campusID: id_reported,
              reportCount: count
              })
              break
          }
        }

        if(r_present==0){
      //  console.log("r_present",r_present)
      //  console.log(rollNum)
          let count=1
          firebaseConf.database().ref('report/' + rollNum).set({
            campusID: id_reported,
            reportCount: count
            })
        }
        alert("The user has been reported to Sportify!")

      }
      else{
        alert("This player is not registered with us!")
      }
    }


    return (
      <View style={styles.mainContainer}>

        <View style={styles.imageContainer}>
          <ScreenBG/>
        </View>

        <UserInput
          placeholder = "Enter the campus ID you want to report - @lums.edu.pk"
          maxLength = {8}
          onChangeText = {
          (inp) => {
              this.setState({reportedID: inp+"@lums.edu.pk"})
            }
          }
        />

        <View style={styles.contentContainer}>

              {
                  this.state.fontLoaded ? (
                    <CustomButton
                      title = "Report!"
                      onPress = {reportU}
                    />
                  ) : null
                }
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

module.exports = Report
