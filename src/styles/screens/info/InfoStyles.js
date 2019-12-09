import {StyleSheet, Dimensions} from 'react-native';
import {palette} from '../../palette';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    cartScreenWrapper: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 30 : 0,
    },
    infoContentWrapper: {
        alignItems: 'center',
        paddingTop: 25
    }
});
