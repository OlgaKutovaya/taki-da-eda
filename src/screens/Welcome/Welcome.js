import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import SwiperWelcome from '../../components/SwiperWelcome';

class WelcomeScreen extends Component {
  componentDidMount() {
    fetch('http://localhost:3001/users', {method: 'GET'})
      .then(data => data.json())
      .then(data => {
        console.warn(data);
      });
  }

  render() {
    return (
      <View style={styles.welcomeScreenWrapper}>
        <SwiperWelcome />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcomeScreenWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default WelcomeScreen;
