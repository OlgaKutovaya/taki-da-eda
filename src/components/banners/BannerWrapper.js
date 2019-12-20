import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
const {width} = Dimensions.get('window');

const BannerWrapper = props => {
  return (
    <TouchableOpacity style={{...styles.bannerContainer, ...props.style}}>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    width: width * 0.9,
    height: 170,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default BannerWrapper;
