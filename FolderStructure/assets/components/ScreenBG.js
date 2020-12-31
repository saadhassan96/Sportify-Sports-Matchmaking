import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

const styles = require('../../styles.js')

class ScreenBG extends Component{
  render() {
    return(
      <View style={styles.screenBG}>
          <Image
            style={styles.imageBG}
            source={require('../images/screensLogoNew.png')}
          />
      </View>
    );
  }
}

module.exports = ScreenBG