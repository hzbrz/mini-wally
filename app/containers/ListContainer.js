import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import ListItem from '../components/ListItem';

console.ignoredYellowBox = ['Setting a timer'];

export default class ListContainer extends Component {
  static navigationOptions = {
    // making it so that this screen does not have a header
    header: null
  }

  render() {
    return (
      <View style={{ marginTop: '20%', justifyContent: 'center', }}>
        <Button
          large
          backgroundColor='#f4511e'
          buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
          title="Navigate!"
          onPress={() => this.props.navigation.navigate('Images')}
        />
      </View>
    );
  }
}
