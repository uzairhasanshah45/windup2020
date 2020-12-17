import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../config';



export const styles = ScaledSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.primary,
        // padding: '20@ms'
        alignItems: "center",
        justifyContent: "center"    
    },
    timerView: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: "center",
        textAlign: "center",
    },
    timer:{
        flexDirection: "row",
        padding: '20@ms'
    },
    digitText: {
        // fontFamily: fonts.PoppinsMedium,
        // fontSize: `${fonts.fourteen}@ms`,
        color: '#289283',
        fontSize: 28,
        justifyContent: "space-around",
        fontWeight: "bold"
    },
    timerView1: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: "center",
        textAlign: "center",
    },
    timer1:{
        flexDirection: "row",
        padding: '10@ms'
    },
    digitText1: {
        // fontFamily: fonts.PoppinsMedium,
        // fontSize: `${fonts.fourteen}@ms`,
        color: '#289283',
        fontSize: 25,
        fontWeight: "bold"
    },
    container: {
        height: '350@ms',
        width: '100%',
        alignItems: 'center',
        bottom: 0,
        marginTop: '-200@ms'
    },
    loader: {
        height: '100%',
        width: '100%'
    },
})