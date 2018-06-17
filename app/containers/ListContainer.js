import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from "react-redux";
import { createPicObj } from "../../redux/actions";

console.ignoredYellowBox = ['Setting a timer'];

class ListContainer extends Component {

  componentWillMount() {
    this.props.dispatch(createPicObj())
  }
  
  static navigationOptions = {
    // making it so that this screen does not have a header
    header: null
  }

  _keyExtractor = (item, index) => item.date;

  _renderItem = ({ item }) => (
    <Card
      containerStyle={{ padding: 0 }}
      title={"PICS FROM: " + item.date + "\t\t\t\t\t\t\t\t" + item.length + " pics"}
      image={{ uri: item.image}}
      imageStyle={{ height: 400 }}>
      <Button
        large
        backgroundColor='#f4511e'
        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        title="See More"
        onPress={() => this.props.navigation.navigate('Images', { date: item.date })}
      />
    </Card>
  );

  render() {
    return (
      <FlatList
        data={this.props.pic_object}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )
  }
}

const mapStateToProps = state => ({
  pic_object: state.image.pic_obj_arr
})

export default connect(mapStateToProps)(ListContainer);