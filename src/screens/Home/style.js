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
  txt:{
    color: 'white'
  }
  ,buttonView: {
    height: '40@ms',
    width: '60%',
    marginTop: '10@ms',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50@ms',
    backgroundColor: '#4693FF',
    elevation: 5,
    alignSelf: 'center',
},
buttonText: {
    fontSize: '16@ms',
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
}
});
