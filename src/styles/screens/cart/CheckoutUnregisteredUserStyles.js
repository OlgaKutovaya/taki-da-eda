import {Dimensions, StyleSheet} from 'react-native';
import {palette} from '../../palette';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    checkoutScreenWrapper: {
        flex: 1
    },
    checkoutContentWrapper: {
        alignItems: 'center'
    },
    // header
    checkoutHeaderWrapper: {
        width: width * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: palette.seaGreen
    },
    checkoutHeaderImage: {
        width: 120,
        height: 120
    },
    checkoutHeaderContent: {

    },
    checkoutHeaderText: {
        fontSize: 17,
        lineHeight: 30
    },
    checkoutHeaderCountText: {
        color: palette.seaGreen,
        fontWeight: 'bold'

    },
    checkoutHeaderPriceText: {
        color: palette.burntUmber,
        fontWeight: 'bold'
    }
});
