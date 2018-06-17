import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import ListItem from '../components/ListItem';
  
console.ignoredYellowBox = ['Setting a timer'];

export default class ListContainer extends Component {
  
  render() {
    return (
      <View>
        <ListItem text={"Hello there"}/>
      </View>
    );
  }
}
