import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

export default class ListItem extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}