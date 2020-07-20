import {ScaledSheet} from 'react-native-size-matters';
import constants from '../../constants';

const styles = ScaledSheet.create({
  tabWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: constants.colors.OrangeColor,
    paddingTop: '10@ms',
    paddingBottom: '25@ms',
    borderBottomLeftRadius: '20@ms',
    borderBottomRightRadius: '20@ms',
  },
  tabText: {
    fontSize: '14@ms',
    lineHeight: '16@ms',
    fontFamily: 'Inter-SemiBold',
  },
  whiteColor: {color: 'rgb(255,255,255)'},
  lightOrange: {color: 'rgb(255,201,159)'},
  BottomLine: {
    width: '30@ms',
    alignSelf: 'center',
    height: '3@ms',
    borderRadius: '1.5@ms',
    marginTop: '8@ms',
    backgroundColor: '#ffffff',
  },
});

export default styles;
