import React, {Component} from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Slider from '../components/Slider';


class Home extends Component {

    render() {
        return (
            <View style={styles.homeWrapper}>
                <View style={styles.header}>
                    <View style={styles.logoWrapper}/>
                    <Text style={styles.title}>
                        Таки Да Еда
                    </Text>
                </View>
                <Slider/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    homeWrapper: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 60 : 0
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginHorizontal: 40
    },
    logoWrapper: {
        width: 70,
        height: 30,
        borderRadius: 5,
        opacity: 0.6,
        backgroundColor: 'darkgreen'
    },
    title: {
        fontSize: 25,
        color: 'darkgreen'
    }
});

export default Home;
