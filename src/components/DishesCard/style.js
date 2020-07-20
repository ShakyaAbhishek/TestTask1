import {ScaledSheet} from 'react-native-size-matters';
import constants from '../../constants';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  justifyAlignCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dishesImage: {
    paddingHorizontal: '5@ms',
    height: '134@ms',
    width: '164@ms',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  wishButtonWrapper: {
    marginTop: '10@ms',
    marginRight: '10@ms',
    height: '28@ms',
    width: '28@ms',
    borderRadius: '5@ms',
    backgroundColor: 'white',
  },
  nameWrapper: {
    width: '100%',
    paddingHorizontal: '10@ms',
  },
  text1: {
    fontFamily: 'Inter-Medium',
    fontSize: '16@ms',
    color: 'black',
    lineHeight: '20@ms',
    paddingVertical: '10@ms',
    textAlign: 'left',
  },
  text2: {
    fontSize: '16@ms',
    lineHeight: '16@ms',
    fontFamily: 'Inter-Regular',
    color: constants.colors.GrayColor,
  },
  text3: {
    fontSize: '12@ms',
    lineHeight: '12@ms',
    fontFamily: 'Inter-Medium',
    color: constants.colors.OrangeColor,
  },
  text4: {
    fontSize: '12@ms',
    lineHeight: '12@ms',
    fontFamily: 'Inter-Medium',
    color: 'black',
  },
  priceCountWrapper: {
    flexDirection: 'row',
    paddingHorizontal: '10@ms',
    alignItems: 'center',
  },
  flex1: {flex: 1},
  addCountWrapper: {
    height: '28@ms',
    width: '100%',
    borderColor: constants.colors.WhiteTwo,
    borderWidth: '1.5@ms',
    borderRadius: '5@ms',
  },
  addMinusWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  centerCounter: {
    flex: 1,
    backgroundColor: 'rgb(255,201,159)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
