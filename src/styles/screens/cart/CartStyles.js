import {Dimensions, StyleSheet} from 'react-native';
import {palette} from '../../palette';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    cartScreenWrapper: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 30 : 0,
    },
    cartContentWrapper: {
        alignItems: 'center'
    },
    headerWrapper: {
        alignItems: 'center',
        width: width * 0.9,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: palette.seaGreen,
        marginBottom: 30
    },
    innerHeaderWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 22,
        letterSpacing: 1
    },
    headerTitleCount: {
        fontSize: 22,
        textAlign: 'center',
        color: palette.seaGreen,
    },
    headerText: {
        marginTop: 12,
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 19,
        color: palette.seaGreen,
        fontStyle: 'italic'
    },
    // Footer
    footerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 10
    },
    footerTitle: {
        color: palette.seaGreen,
        fontSize: 20,
        letterSpacing: 1,
        fontWeight: 'bold'
    },
    footerTotalPriceWrapper: {
        backgroundColor: palette.coconutCream,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 50
    },
    footerTotalPriceCount: {
        color: palette.burntUmber,
        fontSize: 17,
        letterSpacing: 1,
        fontWeight: 'bold'
    },
    // Cart buttons
    cartButtonsWrapper: {
        marginTop: 30,
        marginBottom: 50
    },
    cartBtn: {
        justifyContent: 'center',
        height: 60,
        marginBottom: 20,
        borderRadius: 3
    },
    cartBtnCheckout: {
        backgroundColor: palette.seaGreen
    },
    cartBtnCancel: {
        backgroundColor: palette.starDust
    },
    cartBtnText: {
        fontSize: 16,
        letterSpacing: 1,
        textAlign: 'center',
        textTransform: 'uppercase',
        color: palette.coconutCream
    },
    // Empty cart
    emptyCartWrapper: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyCartText: {
        fontSize: 20,
        color: palette.seaGreen,
        marginBottom: 15
    },
    emptyCartImg: {
        width: 400,
        height: 200
    },
    cartEmptyBtn: {
        paddingVertical: 20,
        paddingHorizontal: 50,
        borderRadius: 5,
        backgroundColor: palette.seaGreen
    }
});
