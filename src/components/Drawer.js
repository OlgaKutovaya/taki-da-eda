import React from 'react';
import {useSelector} from 'react-redux';
import {styles} from '../styles/components/DrawerStyles';
import userIcon from '../../assets/images/user/user.png';
import {
  Image,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

const Drawer = ({navigation}) => {
  const user = useSelector(state => state.auth.currentUser);

  const handleItemPress = screenName => {
    navigation.navigate(screenName);
    navigation.closeDrawer();
  };

  // const handleCloseDrawerPress = () => {
  //   navigation.closeDrawer();
  // };

  const registeredUser = (
    <>
      <View style={styles.userInfoContainer}>
        <Image source={userIcon} style={styles.userImg} resizeMode="contain" />
        <Text style={styles.userName}>{user.name}</Text>
      </View>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => handleItemPress('Dashboard')}>
        <Text>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => handleItemPress('Orders')}>
        <Text>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => handleItemPress('Bonuses')}>
        <Text>Bonuses</Text>
      </TouchableOpacity>
    </>
  );

  const unregisteredUser = (
    <View style={styles.unregisteredUserInfoContainer}>
      <Text style={styles.title}>Таки Да Еда</Text>
      <View style={styles.loginBtnContainer}>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>Вход</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>Регистрация</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.drawerContainer}>
      <ScrollView>
        {/*<TouchableOpacity*/}
        {/*  style={styles.closeDrawerContainer}*/}
        {/*  onPress={handleCloseDrawerPress}>*/}
        {/*  <Image*/}
        {/*    source={require('../../assets/images/icon-close.png')}*/}
        {/*    style={styles.closeDrawerBtn}*/}
        {/*  />*/}
        {/*</TouchableOpacity>*/}
        {Object.entries(user).length === 0 && user.constructor === Object
          ? unregisteredUser
          : registeredUser}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Drawer;
