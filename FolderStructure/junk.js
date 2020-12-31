class RadioButtons extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return(
      <View>
        <RadioForm
          formHorizontal={true}
          animation={true}
          radio_props={genderOpts}
        >
          {/* To create radio buttons, loop through your array of options */}
          {genderOpts.map((obj, i) => {
            <RadioButton labelHorizontal={true} key={i} >
              {/*  You can set RadioButtonLabel before RadioButtonInput */}
              <RadioButtonInput
                obj={obj}
                index={i}
                isSelected={this.state.value3Index === i}
                onPress={()=>{}}
                borderWidth={0.2}
                buttonInnerColor={'#ff6c00'}
                // buttonOuterColor={this.state.value3Index === i ? '#ffs6c00' : '#000'}
                buttonOuterColor={'#ff6c00'}
                buttonSize={20}
                buttonOuterSize={20}
                buttonStyle={{}}
                buttonWrapStyle={{marginLeft: 10}}
              />
              <RadioButtonLabel
                obj={obj}
                index={i}
                labelHorizontal={true}
                onPress={()=>{}}
                labelStyle={{fontSize: 10, color: '#000000'}}
                labelWrapStyle={{}}
              />
            </RadioButton>
          })}
        </RadioForm>
      </View>
    )
  }

  
}

FIREBASE

firebase.database().ref('posts/' + postId).on('value', function(snapshot) {
    var post = snapshot.val();
    // …
});

SCREENBG

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

//////

export default class App extends Component{
  render() {
    return(
      <SignUp/>
    )
  }
}

///

onChangeText = { 
                (nameInp) => {
                  this.setState({name: nameInp})
                  console.warn(this.state)
                }
               }

               //

/////


{
            this.state.fontLoaded && this.state.allValid ? (
              <CustomButton 
              title = "Next"
              onPress={() => this.props.navigation.navigate('signUp1')}
              />
            ) : null
          }


else{
                    <Text style={styles.text}>
                      Passwords are not same!
                    </Text>
                  }


/////////////
        {
            this.state.fontLoaded ? (
              
                
                  if(this.state.firstPass == this.state.secondPass){
                    console.warn(this.state)
                    this.setState({allValid: true})
                  }
                  else{
                    <Text style={styles.text}>
                      Passwords are not same!
                    </Text>
                  }
                
              
            ) : null
          }

          ////////

    this.state.allValid ? (null) : (
              console.warn(this.state)
            )

    ///



    firebase.database().ref('users/' + this.state.campusID).set({
          campusID: this.state.campusID,
        }
      )


////////// FIREBASE CODE

// firebase.auth().signInWithEmailAndPassword("19100034@lums.edu.pk", "hello123")
      //   .catch( (error) => {
      //     var errorCode = error.code
      //     var errorMessage = error.message
      //     console.log(error)
      //   })

// var user = firebase.auth().currentUser;

// user.sendEmailVerification().then(function() {
//   // Email sent.
// }).catch(function(error) {
//   console.log("email was not sent")
//   // An error happened.
// });


 clickOnSignIn = () => {
      firebase.auth().signInWithEmailAndPassword("19100034@lums.edu.pk", "hello123")
        .catch( (error) => {
          var errorCode = error.code
          var errorMessage = error.message
          console.warn(error)
        })

      firebase.auth().onAuthStateChanged( (user) => {
        if (user) {
          // User is signed in.
          console.warn("user is signed in")
        } else {
          console.warn("user is not signed in")
          // No user is signed in.
        }
      })
    }



    clickOnSignOut = () => {
      firebase.auth().signOut()

      firebase.auth().onAuthStateChanged( (user) => {
        if (user) {
          // User is signed in.
          console.warn("user is signed in")
        } else {
          console.warn("user is not signed in")
          // No user is signed in.
        }
      })
    }



     firebase.database().ref('users/' + this.state.campusID).set({
          name: this.state.name,
          campusID: this.state.campusID,
          password: this.state.firstPass
        }
      )
     /////////////////////


     class ScreenBG extends Component{
  render() {
    return(
      <View style={styles.screenBG}>
          <Image
            style={styles.imageBG}
            source={require('./assets/images/homescreen.png')}
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

class CustomButtonSignUp extends Component{
  constructor(props) {
    super(props)
    this.state = {text: ''}
  }
  render(){
    return(
      <View style={styles.buttonBGSignUp}>
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


export default class HomeScreen extends Component<Props>{

  constructor(props){
    super(props)
    this.state={
      fontLoaded: false,
      campusID: ''
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'DenkOne-Regular': require('../assets/fonts/DenkOne-Regular.ttf'),
    })

    this.setState({ fontLoaded: true })
  }


  static navigationOptions = {
    title: 'Change Password',
    fontFamily: 'DenkOne-Regular'
  }


  render() {
    clickOnLogIn = () => {
      console.warn(this.state)
      this.props.navigation.navigate('logIn')
    }

    clickOnSignUp = () => {
      console.warn("signing up")
      this.props.navigation.navigate('signUp')
    }
    return (
      <View style={styles.mainContainer}>

        <View style={styles.imageContainer}>
          <ScreenBG/>
        </View>


        <View style={styles.contentContainer}>


        {
          this.state.fontLoaded ? (
          <CustomButton
            title = "Log In"
            onPress={clickOnLogIn}
          />
        ): null

        }

        {
          this.state.fontLoaded ? (
          <CustomButtonSignUp
            title = "Sign Up"
            onPress={clickOnSignUp}
          />
        ): null

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
    opacity: 1,
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
    top: 30,
    // /left:20,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    // justifyContent: 'space-around',
    // alignItems: 'center',
  },
  text: {
    padding: 10,
    fontSize: 20,
    color: 'transparent',
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
    paddingHorizontal: 18,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    top: 400,
    left: 10,
  },
  buttonBGSignUp: {
    paddingHorizontal: 18,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    top: 0,
    left: 10,
  },

  buttonStyle: {
    padding: 10,
    //backgroundColor: "#ff6c00",
    backgroundColor: 'transparent',
    alignItems: 'center',
  },

  buttonText: {
    fontFamily: 'DenkOne-Regular',
    fontSize: 20,
    color: 'transparent',
    backgroundColor: 'transparent',
    textAlign: 'center',
  }
})

module.exports = HomeScreen



clickOnLogIn = () => {
      console.warn("logging in")
      this.props.navigation.navigate('logIn')
    }

    clickOnSignUp = () => {
      console.warn("signing up")
      this.props.navigation.navigate('signUp')
    }





    ///

  