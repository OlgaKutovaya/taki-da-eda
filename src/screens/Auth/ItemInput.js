import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

const ItemInput = props => {
  return (
    <View style={styles.inputContainer}>
      <Text>{props.label}</Text>
      <TextInput
        style={styles.input}
        value={props.inputValue}
        onChangeText={text => props.onInputChange(props.name, text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  btnContainer: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 7,
  },
  btn: {
    width: '40%',
  },
});

export default ItemInput;
