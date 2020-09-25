import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import BigCard from '../components/BigCard';

export default class Details extends Component {
  render() {
    const {navigation, route} = this.props;
    const {title, image, data} = route.params;

    return (
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
          <BigCard title={title} image={image} data={data} />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalContent: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: 30,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeText: {
    color: '#333',
    paddingRight: 10,
  },
};
