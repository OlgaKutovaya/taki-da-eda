import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {SafeAreaView, ScrollView, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../styles/screens/auth/SignUpStyles';
import ItemInput from './ItemInput';
import AuthBtn from '../../components/AuthButton';
import {signUpUser} from '../../redux/actionCreators/authActions';

const SignUp = props => {
  const dispatch = useDispatch();
  const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [signUpState, setSignUpState] = useState(initialState);
  const handleInputChange = (inputName, text) => {
    setSignUpState(prevState => ({...prevState, [inputName]: text}));
  };
  const handlePress = () => {
    dispatch(signUpUser(signUpState));
    setSignUpState(initialState);
    props.navigation.navigate('AppInner');
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
          secureTextEntry
        />
        <ItemInput
          label="Повторите пароль"
          name="confirmPassword"
          inputValue={signUpState.confirmPassword}
          onInputChange={handleInputChange}
          secureTextEntry
        />
        <AuthBtn label="Зарегистрироваться" onPress={handlePress} />
        <TouchableOpacity
          style={styles.LoginBtn}
          onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.LoginBtnText}>Я уже зарегистрирован(а)</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
