import React from 'react';
import { WebBrowser } from 'expo';
import { TouchableHighlight, Dimensions, Image } from 'react-native';


export default class ImageItem extends React.PureComponent {

  openLink = (item) => {
    WebBrowser.openBrowserAsync(item)
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this.openLink.bind(this, this.props.image)}>
        <Image
          style={{ width: width, height: height }}
          source={{ uri: this.props.image }}
          resizeMethod={"resize"}
        />
      </TouchableHighlight>
    );
  }
}

const { width, height } = Dimensions.get("window");
