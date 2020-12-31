import React, { Component } from 'react';
import { Platform, StatusBar, Navigator, Image, Text, View, 
	ListView, TextInput, TouchableOpacity} from 'react-native';

const styles = require('../../styles.js')

class Wallpaper extends Component{
  render() {
    return(
      <Image
        style={styles.image}
        source={require('../images/Wallpaper.jpg')}
      />
    );
  }
}

module.exports = Wallpaper