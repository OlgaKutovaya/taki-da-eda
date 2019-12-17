import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import {palette} from '../styles/palette';

const {width} = Dimensions.get('window');
const AuthBtn = props => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={props.onPress}>
      <Text>{props.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: width * 0.8,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: palette.seaGreen,
    borderRadius: 30,
  },
});

export default AuthBtn;
