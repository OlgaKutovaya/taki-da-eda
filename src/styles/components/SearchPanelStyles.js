import {Dimensions, StyleSheet} from 'react-native';
import {palette} from '../palette';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    wrapper: {
        width: width,
        alignItems: 'center'
    },
    searchPanelWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
        width: width * 0.9,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '75%',
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'rgba(142, 142, 147, 0.06)',
        borderColor: palette.nobel,
    },
    input: {
        flex: 1,
        fontSize: 14,
        width: 300,
        fontWeight: '400',
        letterSpacing: 0.3,
    },
    inputIconContainer: {},
    inputIcon: {
        width: 35,
        height: 35,
        opacity: 0.3,
    },
    searchButton: {
        width: '20%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: palette.seaGreen,
        borderColor: 'rgba(142, 142, 147, 0.5)',
    },
    searchButtonText: {
        color: palette.drover,
        fontSize: 16,
    },
});
