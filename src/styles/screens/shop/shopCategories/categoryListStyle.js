import {StyleSheet } from 'react-native';
import {palette} from '../../../palette';

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    contentWrapper: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    categoryListWrapper: {
        width: '100%',
        marginVertical: 15,
    },
    categoryWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderTopColor: palette.gallery,
        borderTopWidth: 1,
    },
    categoryIcon: {
        width: 65,
        height: 65,
        marginLeft: 10,
        borderRadius: 20
    },
    categoryTitle: {
        marginLeft: 40,
        fontSize: 16,
        color: palette.seaGreen,
        fontWeight: 'bold',
        fontStyle: 'italic',
        letterSpacing: 1,
    },
    countProductWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        width: 60,
        height: 30,
        backgroundColor: palette.drover,
        borderRadius: 20,
    },
    countProductText: {
        color: palette.burntUmber,
        fontSize: 15,
    },
});
