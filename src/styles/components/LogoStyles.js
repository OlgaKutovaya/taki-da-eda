import {Dimensions, StyleSheet} from 'react-native';
import {palette} from '../palette';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 40,
        width: width * 0.9
    },
    menuIcon: {
        width: 45,
        height: 45
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: palette.seaGreen
    },
});
