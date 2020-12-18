import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../config';

export const styles = ScaledSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center"
    
  },
  article:{
    width: '300@ms',
    height: '200@ms',
    borderRadius: '10@ms'
  },
  txt:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.5,
    width: '300@ms',
    borderBottomLeftRadius: '10@ms',
    borderBottomRightRadius: '10@ms',
    height: '30@ms',
    paddingTop: '5@ms',    
    paddingLeft: '10@ms'
    }
});
