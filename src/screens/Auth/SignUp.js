import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import ItemInput from './ItemInput';
import AuthBtn from '../../components/AuthButton';

const {width} = Dimensions.get('window');

const SignUp = props => {
  const initialState = {name: '', email: '', password: '', repeatPassword: ''};
  const [signUpState, setSignUpState] = useState(initialState);
  const handleInputChange = (inputName, text) => {
    setSignUpState(prevState => ({...prevState, [inputName]: text}));
  };
  const handlePress = () => {
    alert(JSON.stringify(signUpState));
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.innerWrapper}>
        <Text style={styles.title}>Регистрация</Text>
        <ItemInput
          label="Имя"
          inputValue={signUpState.name}
          name="name"
          onInputChange={handleInputChange}
        />
        <ItemInput
          label="Электронная почта"
          inputValue={signUpState.email}
          name="email"
          onInputChange={handleInputChange}
        />
        <ItemInput
          label="Пароль"
          inputValue={signUpState.password}
          name="password"
          onInputChange={handleInputChange}
        />
        <ItemInput
          label="Повторите пароль"
          name="repeatPassword"
          inputValue={signUpState.repeatPassword}
          onInputChange={handleInputChange}
        />
        <AuthBtn label="Зарегистрироваться" onPress={handlePress} />
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Text>Вход</Text>
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

export default SignUp;
