import {Dimensions, StyleSheet} from 'react-native';
import {palette} from '../../../palette';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
    },
    content: {
        width: width * 0.9,
        marginTop: 20
    },
    titleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleText: {
        width: 170,
        flexWrap: 'wrap',
        marginTop: 5,
        color: palette.seaGreen,
        fontSize: 20,
        letterSpacing: 1,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    titleImg: {
        width: 110,
        height: 70,
        borderRadius: 7
    },
    descriptionWrapper: {
        marginTop: 20
    },
    descriptionBlock: {
        marginBottom: 30
    },
    descriptionTitle: {
        marginBottom: 15,
        fontSize: 20,
        letterSpacing: 1,
        color: palette.burntUmber
    },
    descriptionContent: {
        fontSize: 16,
        letterSpacing: 1,
        textAlign: 'justify'
    }
});
