import {Dimensions, StyleSheet} from 'react-native';
import {palette} from '../../../palette';

const {width} = Dimensions.get('window');
const countTextSize = 23;

export const styles = StyleSheet.create({
    productDetailsWrapper: {
        alignItems: 'center',
    },
    content: {
        width: width * 0.9,
    },
    productImg: {
        marginTop: 10,
        height: 270,
        width: width * 0.9,
        borderRadius: 5,
    },
    productDetailsInnerWrapper: {
        marginTop: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    productName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: palette.zuccini,
        lineHeight: 35,
    },
    productWeight: {
        color: palette.tamarillo,
        lineHeight: 20,
    },
    productPriceContainer: {
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: palette.coconutCream,
        borderRadius: 50,
    },
    productPrice: {
        fontSize: 17,
        fontWeight: 'bold',
        color: palette.tamarillo,
    },

    // ShortDescription
    consistDescriptionWrapper: {
        borderColor: palette.zuccini,
        borderWidth: 1,
        marginTop: 10,
        paddingHorizontal: 7,
        paddingVertical: 10,

    },
    consistDescriptionTitle: {
        textAlign: 'justify',
        color: palette.zuccini,
        fontWeight: 'bold',
        fontSize: 17,

    },
    consistDescriptionText: {
        color: palette.codGray,
        fontWeight: 'normal',
        fontSize: 14,
    },
    goToFullDescriptionBtn: {
        alignSelf: 'flex-end',
        marginTop: 15,
        backgroundColor: palette.zuccini,
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 5,
    },
    goToFullDescriptionBtnText: {
        color: palette.coconutCream,
    },
    // Content
    pricePerGrText: {
        fontSize: 16,
        color: palette.tamarillo,
        fontStyle: 'italic',
    },
    minWeightOrderText: {
        fontSize: 16,
        paddingVertical: 5,
        color: palette.zuccini,
    },
    addToFavouriteWrapper: {
        marginVertical: 15
    },
    // Counter
    counterContentWrapper: {
        marginTop: 30,
        paddingVertical: 25,
        borderTopColor: palette.zuccini,
        borderTopWidth: 1
    },
    counterContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    counterTitle: {
        color: palette.zuccini,
        textTransform: 'uppercase',
        fontSize: countTextSize
    },
    counter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    countImg: {
        width: 35,
        height: 35
    },
    counterQuantity: {
        fontSize: countTextSize,
        fontWeight: 'bold',
        color: palette.tamarillo,
        marginHorizontal: 7
    },
    measureText: {
        marginLeft: 7,
        fontSize: countTextSize,
        color: palette.zuccini
    },
    addToCartBtn: {
        marginTop: 20,
        marginBottom: 5,
        paddingVertical: 20,
        alignItems: 'center',
        backgroundColor: palette.zuccini,
        borderRadius: 5
    },
    addToCartBtnText: {
        fontSize: 20,
        textTransform: 'uppercase',
        color: palette.coconutCream
    }
});
