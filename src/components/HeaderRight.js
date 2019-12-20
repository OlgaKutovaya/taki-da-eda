import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import MenuIcon from '../../assets/images/icons/menuIcon.png';

const HeaderRight = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Image source={MenuIcon} style={styles.itemImg} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemImg: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
});

export default HeaderRight;
