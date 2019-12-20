import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';
import {styles} from '../../styles/screens/auth/LoginStyles';
import ItemInput from './ItemInput';
import AuthBtn from '../../components/AuthButton';

const Login = props => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.innerWrapper}>
        <Text style={styles.title}>Вход в аккаунт</Text>
        <ItemInput label="Электронная почта" />
        <ItemInput label="Пароль" />
        <AuthBtn label="Войти" />
        <View style={styles.accessoryBtnWrapper}>
          <TouchableOpacity style={styles.forgotPasswordBtn}>
            <Text style={styles.forgotPasswordBtnText}>Забыл(а) пароль</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
            <Text style={styles.signUpBtnText}>Регистрация</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
