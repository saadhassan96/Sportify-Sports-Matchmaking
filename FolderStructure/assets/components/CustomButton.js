import React, { Component } from 'react';
import { Platform, StatusBar, Navigator, Image, Text, View, 
  ListView, TextInput, TouchableOpacity} from 'react-native';

const styles = require('../../styles.js')

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

module.exports = CustomButton