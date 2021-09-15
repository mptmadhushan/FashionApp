import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from './theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const _styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    fontSize: 20,
    // fontWeight: 'bold',
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'left',
    color: '#C54F4F',
  },

  rowFlexAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
  },
  rowFlexBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
  buttonStyle: {
    backgroundColor: COLORS.primary,
    borderWidth: 0,
    color: COLORS.white,
    height: 35,
    minWidth: 130,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 40,
    paddingHorizontal: 10,
    justifyContent: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default _styles;
