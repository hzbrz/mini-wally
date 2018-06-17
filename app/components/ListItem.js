import React, { Component } from 'react';
import { View, Text, } from 'react-native';

export default class ListItem extends Component {
  static navigationOptions = {
    title: 'Images',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}
