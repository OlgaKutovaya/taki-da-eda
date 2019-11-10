import React, { Component } from "react";
import {StyleSheet, View} from "react-native";
import SwiperWelcome from '../../components/SwiperWelcome';



class WelcomeScreen extends Component {
    render() {
        return (
            <View style={styles.welcomeScreenWrapper}>
                <SwiperWelcome />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcomeScreenWrapper: {
        flex: 1,
        justifyContent: "flex-end"
    }
});

export default WelcomeScreen;
