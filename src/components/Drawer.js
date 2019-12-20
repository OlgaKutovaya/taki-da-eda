import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
  Image,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Drawer = ({navigation}) => {
  const user = useSelector(state => state.auth.currentUser);

  const handleItemPress = screenName => {
    navigation.navigate(screenName);
    navigation.closeDrawer();
  };

  const handleCloseDrawerPress = () => {
    navigation.closeDrawer();
  };

  return (
    <ScrollView style={styles.drawerContainer}>
      <TouchableOpacity
        style={styles.closeDrawerContainer}
        onPress={handleCloseDrawerPress}>
        <Image
          source={require('../../assets/images/icon-close.png')}
          style={styles.closeDrawerBtn}
        />
      </TouchableOpacity>
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
      <Text>{JSON.stringify(user)}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  closeDrawerContainer: {
    marginTop: 10,
    marginRight: 10,
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
  },
  closeDrawerBtn: {
    width: 40,
    height: 40,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#000',
  },
});

export default Drawer;
