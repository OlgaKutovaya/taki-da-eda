import {Dimensions, StyleSheet} from 'react-native';
import {palette} from '../palette';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    bannerContainer: {
        width: width * 0.9,
        height: 170,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: palette.seaGreen,
    },
    imgWrapper: {
        width: '45%',
        paddingRight: 7
    },
    foodIcon: {
        width: '100%',
        height: 170
    },
    textWrapper: {
        width: '55%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        lineHeight: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: palette.coconutCream,
    },
    subtext: {
        lineHeight: 22,
        marginTop: 2,
        fontStyle: 'italic',
        color: palette.coconutCream,
        fontSize: 16,
    },
    subtext2: {
        color: palette.coconutCream,
        fontSize: 40,
    },
    btn: {
        width: 160,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 7,
    },
    searchButtonText: {
        fontSize: 15,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: palette.coconutCream,
    },
});
