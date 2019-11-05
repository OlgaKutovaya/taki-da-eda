import {Dimensions, StyleSheet} from 'react-native';
import {palette} from '../palette';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    swiperContainer: {
        height: 200,
        alignItems: 'center',
    },
    wrapper: {
        width: width,
        justifyContent: 'center',
    },
    slide: {
        width: width,
        height: 200,
        alignItems: 'center',
        borderRadius: 5,
    },
    slideInner: {
        flex: 1,
        width: width * 0.9,
        justifyContent: 'center',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(21,28,31,0.6)',
    },
    title: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 17,
        lineHeight: 23,
        fontWeight: 'bold',
    },
    dotInactive: {
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
        borderWidth: 1,
        borderColor: 'black',
    },
    dotActive: {
        backgroundColor: palette.coconutCream,
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
        borderWidth: 1,
        borderColor: palette.codGray,
    },
});
