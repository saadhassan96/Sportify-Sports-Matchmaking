import React, { Component } from 'react';
import { Platform, StatusBar, Navigator, Image, Text, View, 
	ListView, TextInput, TouchableOpacity} from 'react-native';

const styles = require('../../styles.js')

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
            // borderColor: '#ff6c00', borderWidth: 1.5,
          }}
          underlineColorAndroid='#ff6c00' 
          // underlineColorAndroid='transparent' 
          autoCorrect={false}
          maxLength = {this.props.maxLength}
          placeholder={this.props.placeholder}
          // onChangeText={(text) => this.setState({text})}
          onChangeText={this.props.onChangeText}
          secureTextEntry={this.props.secureTextEntry}
          userInp={this.state.text}
        />
        
      </View>
    );
  }
}

module.exports = UserInput