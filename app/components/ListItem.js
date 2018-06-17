import React, { Component } from 'react';
import { FlatList, Alert, Image, Dimensions } from 'react-native';
import { connect } from "react-redux";
import { getImagesfromFirebase } from "../../redux/actions";

class ListItem extends Component {

  componentWillMount() {
    const { navigation } = this.props;
    let date = navigation.getParam('date', 'NO_DATE')
    this.props.dispatch(getImagesfromFirebase(date))

    Alert.alert(
      'Important Notice:',
      "Some images may take a while to load if an image is not loaded, \n\n\please click on the download button",
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
    <Image
      style={{ width, height }}
      source={{ uri: item }}
      resizeMethod={"resize"}
    />
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

const { width, height } = Dimensions.get("window");

export default connect(mapStateToProps)(ListItem);
