import React from 'react';
import {Text, View} from 'react-native';
import HeaderLeft from '../../components/HeaderLeft';

const Orders = ({navigation}) => {
  return (
    <View>
      <HeaderLeft navigation={navigation} />
      <Text>Orders</Text>
    </View>
  );
};

export default Orders;
