import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, YellowBox} from 'react-native';

import Root from './Root';

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
]);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Root />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
};
