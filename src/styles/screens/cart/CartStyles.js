import {Dimensions, StyleSheet} from 'react-native';
import {palette} from '../../palette';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    cartScreenWrapper: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 30 : 0,
    },
    cartContentWrapper: {
        alignItems: 'center',
        paddingTop: 25
    },
    headerWrapper: {
        alignItems: 'center',
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: palette.zuccini,
        width: width * 0.9
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
        color: palette.zuccini,
    },
    headerText: {
        marginTop: 12,
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 19,
        color: palette.zuccini,
        fontStyle: 'italic'
    }
});
