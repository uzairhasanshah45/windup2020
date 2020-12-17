import { ScaledSheet } from 'react-native-size-matters';
import {colors} from '../../config';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height - 380

export const styles = ScaledSheet.create({
    mainView: {
        flex: 1,
    },
    heading: {
        fontSize: '50@ms',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginHorizontal: '20@ms',
        marginTop: '30@ms',
        color: colors.white
    },
    container: {
        height: '350@ms',
        width: '100%',
        alignItems: 'center',
        bottom: 0,
        marginTop: '-50@ms'
    },
    loader: {
        height: '100%',
        width: '100%'
    },
    buttonView: {
        height: '40@ms',
        width: '60%',
        marginTop: '10@ms',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50@ms',
        backgroundColor: '#4693FF',
        elevation: 5,
        alignSelf: 'center',
        marginTop: windowHeight
    },
    buttonText: {
        fontSize: '16@ms',
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
    }
});
