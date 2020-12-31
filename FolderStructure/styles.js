const React = require('react-native')
const {StyleSheet} = React

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
    // height: '50',
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    // justifyContent: 'space-around',
    // alignItems: 'center',
  },
  text: {
    padding: 10,
    // fontFamily: "DenkOne-Regular",
    fontSize: 20,
    fontWeight: 'bold',
    color: "#000000",
    textAlign: 'center',
    alignItems: 'center',
  },
  Gtext: {
    padding: 10,
    // fontFamily: "DenkOne-Regular",
    // fontSize: 20,
    color: "#C9C8C8",
    // textAlign: 'center',
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

module.exports = styles