import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import ListItem from '../components/ListItem';
import { db_value, db_images_value } from '../ListFromFb';

console.ignoredYellowBox = ['Setting a timer'];

export default class ListContainer extends Component {
  
  componentDidMount() {
    db_images_value()
  }

  render() {
    return (
      <View>
        <ListItem text={"Hello there"}/>
      </View>
    );
  }
}
