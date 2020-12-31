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
import { Font, ImagePicker } from 'expo'
import { CheckBox } from 'react-native-elements';
import firebaseConf from '../firebaseConf';

console.disableYellowBox = true

class CustomCheckBox extends Component{
  constructor(props){
    super(props)
    this.state={
      checked: true
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


class SignUp2 extends Component{

  constructor(props){
    super(props)
    this.state={
      fontLoaded: false,
      conditionsAgreed: false,
      image: null,
    }
  }

  callback = (datafromchild) => {
    this.setState({conditionsAgreed: datafromchild})
  }


  async componentDidMount() {
    await Font.loadAsync({
      'DenkOne-Regular': require('../assets/fonts/DenkOne-Regular.ttf'),
    })

    this.setState({ fontLoaded: true })
  }


  static navigationOptions = {
    title: 'Upload Picture',
    headerStyle:{
      // fontFamily: 'DenkOne-Regular',
      backgroundColor: '#ff6c00' 
    }
  }


  render() {
    const { params } = this.props.navigation.state;

    completeSignUp = async () => {
      console.log(this.state)
      console.log(params)
      let campusID = params.params.campusID
      let rollNum = campusID.substring(0,8)
      let password = params.params.password
      let name = params.params.name
      let gender = params.params.gender
      let sports = {
        Badminton: params.badminton,
        Boxing: params.boxing,
        Chess: params.chess,
        Squash: params.squash,
        TableTennis: params.tabletennis,
        Tennis: params.tennis,
      }

      firebaseConf.database().ref('users').child(rollNum).update({
          name: name,
          campusID: campusID,
          password: password,
          gender: gender,
          sports: sports,
          // image: null
        }
      )

      firebaseConf.auth().createUserWithEmailAndPassword(campusID, password).catch( (error) => {
        console.log("Error creating user")
      })

      firebaseConf.auth().onAuthStateChanged( (user) => {
        if (user) {
          console.log("User is signed in")
          user.sendEmailVerification().then( () => {
            console.log("Email sent.")
            // this.props.navigation.navigate('verify')
          }).catch( (error) => {
            console.log("An error happened sending email.")
            // this.props.navigation.navigate('homeScreen')
          })
        } else {
          console.log("No user is signed in")
        }
      })

      this.props.navigation.navigate('verify') 
    }

    imagePicker = async () => {

      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [1, 1],
      })

      console.log("image selected",result);

      if (!result.cancelled) {
          this.setState({ image: result.uri })
        }
      
    }

    uploadAsFile = async (uri, progressCallback) => {
      uri = this.state.image 
      let rollNum = params.params.campusID.substring(0,8)
      console.log("uploadAsFile", uri)
      const response = await fetch(uri);
      const blob = await response.blob();

      var metadata = {
        contentType: 'image/jpeg',
      };

      let picName = rollNum + "-media.jpg"
      const ref = firebaseConf
        .storage()
        .ref()
        .child('assets/' + picName)

      const task = ref.put(blob, metadata);

      return new Promise((resolve, reject) => {
        task.on(
          'state_changed',
          (snapshot) => {
            progressCallback && progressCallback(snapshot.bytesTransferred / snapshot.totalBytes)

            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            if (progress == 100){
              alert("Upload done!")
            }
          },
          (error) => {
            console.log("error")
            reject(error)
          },
          () => {
            var downloadURL = task.snapshot.downloadURL;
            console.log("_uploadAsByteArray ", task.snapshot.downloadURL)

            // save a reference to the image for listing purposes
            let ref = firebaseConf.database().ref('users/'+rollNum)
            ref.set({
              name: '',
              campusID: '',
              password: '',
              gender: '',
              sports: '',
              image: {
              'URL': downloadURL,
              'name': picName,}
            })
          }
        )
      })
    }

    return (
      <View style={styles.mainContainer}>

        <View style={styles.imageContainer}>
          <ScreenBG/>
        </View>


        <View style={styles.contentContainer}>
        <View>
        <Text style={{ top: 5, fontWeight: 'bold',fontSize: 20,textAlign: 'center',alignItems: 'center'}}>
        Upload a picture so your buddies can recognize you!
        </Text>
        </View>

        <View style={styles.contentContainer}>
          {
            this.state.fontLoaded ? (
              <CustomPictureButton
                title = "Search for your picture"
                onPress = {imagePicker}
              />
            ) : null
          }

          {
            this.state.image &&
            <Image source={{ uri: this.state.image }} style={{top: 10, width: 120, height: 120 }} />
          }

          {
            this.state.fontLoaded ? (
              <CustomButton
                title = "Upload"
                onPress = {uploadAsFile}
              />
            ) : null
          }


          <CustomCheckBox
           title="I have read and agree to all terms and conditions."
           callbackFromParent = {this.callback}
          />

          <CustomButtontnc
            title="View Terms and Conditions"
            onPress={ () => {}}
          />


          {
            this.state.fontLoaded ? (
              <CustomButton
                title = "Sign Up"
                onPress = {completeSignUp}
              />
            ) : null
          }
          </View>
        </View>
      </View>
    )
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
    // top:10,
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
    top:60,
  }
})

module.exports = SignUp2