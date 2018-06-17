import React, { Component } from 'react';
import { FlatList, Alert } from 'react-native';
import { connect } from "react-redux";
import { getImagesfromFirebase } from "../../redux/actions";
import ImageItem from "./ImageItem";

class ListItem extends Component {

  componentWillMount() {
    const { navigation } = this.props;
    let date = navigation.getParam('date', 'NO_DATE')
    this.props.dispatch(getImagesfromFirebase(date))

    Alert.alert(
      'Important Notice:',
      "Some images may take a while to load if an image is not loaded, \n\n\click on the white space to download",
      [
        // hooks on which you can trigger animation
        // { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        // { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    )
  }

  static navigationOptions = {
    title: 'Images',
    headerStyle: {
      backgroundColor: '#f4511e',
      height: 50
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  _keyExtractor = (item, index) => item;

  _renderItem = ({ item }) => (
    <ImageItem image={item} />
  );

  render() {
    // {this.init()}
    return (
      <FlatList
        data={this.props.image_arr}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        horizontal={true}
        removeClippedSubviews={true}
      />
    )
  }
}

const mapStateToProps = state => ({
  image_arr: state.image.images
})


export default connect(mapStateToProps)(ListItem);
