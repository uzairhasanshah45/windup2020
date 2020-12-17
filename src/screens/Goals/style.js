import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../config';

export const styles = ScaledSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center"
    
  },
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center",
    width: null,
    height: null,
  },
  modalBackgroundStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    width: '280@ms',
    height: '340@ms',
    borderRadius: 20,
    padding: '30@ms',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  openButton: {
    backgroundColor: '#4693FF',
    borderRadius: '10@ms',
    height: '30@ms',
    width: '100@ms',
    elevation: 5,
    marginTop: '50@ms'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '5@ms'
  },
  elementView:{
    flexDirection: "row", 
    marginTop: '30@ms'
  },
  elements:{
    color: 'black', 
    borderBottomWidth: 1, 
    borderBottomColor: 'grey', 
    width: '150@ms', 
    textAlign: "center", 
    paddingBottom: '3@ms', 
    marginLeft: '15@ms',
    marginTop: '-10%'
  },
  elementText:{
    color: 'black'
  },
});
