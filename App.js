import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import ListConatainer from './app/containers/ListContainer';
import ListItem from './app/components/ListItem';
import store from './store';

const RootStack = createStackNavigator(
  {
    Cards: ListConatainer,
    Images: ListItem,
    // preview screen is not used but navigation is set up in case
    // ImagePreview: Preview
  },
  {
    initialRouteName: 'Cards',
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
