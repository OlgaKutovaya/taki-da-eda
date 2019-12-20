import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from '../../styles/screens/auth/ItemInputStyles';

const ItemInput = props => {
  return (
    <View style={{...styles.inputContainer, ...props.style}}>
      <Text style={{...styles.inputLabel, ...props.style}}>{props.label}</Text>
      <TextInput
        style={styles.input}
        value={props.inputValue}
        onChangeText={text => props.onInputChange(props.name, text)}
        autoCapitalize="none"
        autoCorrect={false}
        {...props}
      />
    </View>
  );
};

export default ItemInput;
