import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import MenuIcon from '../../assets/images/logo.png';
import {styles} from '../styles/components/LogoStyles';


const Logo = () => {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Image source={MenuIcon} style={styles.menuIcon} resizeMode='contain'/>
            </TouchableOpacity>
            <View style={styles.logoContainer}>
                <Text style={styles.logoTitle}>Таки Да Еда</Text>
            </View>
        </View>
    )
};

export default Logo;
