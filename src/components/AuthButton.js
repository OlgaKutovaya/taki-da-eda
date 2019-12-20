import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from '../styles/components/AuthButton';

const AuthBtn = props => {
  return (
    <TouchableOpacity
      style={{...styles.wrapper, ...props.style}}
      onPress={props.onPress}>
      <Text style={styles.btnText}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default AuthBtn;
