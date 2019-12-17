import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import ItemInput from './ItemInput';
import AuthBtn from '../../components/AuthButton';

const {width} = Dimensions.get('window');

const Login = props => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.innerWrapper}>
        <Text style={styles.title}>Вход</Text>
        <ItemInput label="Электронная почта" />
        <ItemInput label="Пароль" />
        <AuthBtn label="Войти" />
        <TouchableOpacity>
          <Text>Забыл(а) пароль</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
          <Text>Регистрация</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerWrapper: {
    width: width * 0.8,
    flexGrow: 0,
  },
  title: {
    textTransform: 'uppercase',
    alignSelf: 'center',
    fontSize: 20,
    marginBottom: 30,
  },
});

export default Login;
