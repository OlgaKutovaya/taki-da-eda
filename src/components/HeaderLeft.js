import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import BackIcon from '../../assets/images/icons/icon-back.png';

const HeaderLeft = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={BackIcon} style={styles.itemImg} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemImg: {
    width: 40,
    height: 40,
    marginLeft: 15,
  },
});

export default HeaderLeft;
