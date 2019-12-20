import React from 'react';
import {Text, View} from 'react-native';
import HeaderLeft from '../../components/HeaderLeft';

const Bonuses = ({navigation}) => {
  return (
    <View>
      <HeaderLeft navigation={navigation} />
      <Text>Bonuses</Text>
    </View>
  );
};

export default Bonuses;
