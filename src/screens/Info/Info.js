import React, {Component} from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import {styles} from '../../styles/screens/info/InfoStyles';

class Info extends Component {
  render() {
    return (
      <SafeAreaView style={styles.cartScreenWrapper}>
        <ScrollView>
          <View style={styles.infoContentWrapper}>
            <Text>Полезная информация</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Info;
