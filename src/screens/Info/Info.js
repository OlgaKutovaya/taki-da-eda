import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from '../../styles/screens/info/InfoStyles';

class Info extends Component {
  render() {
    return (
      <ScrollView style={styles.cartScreenWrapper}>
        <View style={styles.infoContentWrapper}>
          <Text>Полезная информация</Text>
        </View>
      </ScrollView>
    );
  }
}

export default Info;
