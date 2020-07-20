import {ScaledSheet} from 'react-native-size-matters';
import constants from '../../constants';

const styles = ScaledSheet.create({
  buttonWrapper: {
    borderColor: constants.colors.WhiteTwo,
    borderTopWidth: '1@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    height: '60@ms',
    width: '343@ms',
    backgroundColor: constants.colors.OrangeColor,
    flexDirection: 'row',
    borderRadius: '5@ms',
    marginTop: '15@ms',
    marginBottom: '5@ms',
    paddingHorizontal: '26@ms',
  },
  rightWrapper: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  text1: {
    fontSize: '12@ms',
    lineHeight: '12@ms',
    fontFamily: 'Inter-Regular',
    color: '#ffffff',
  },
  text2: {
    fontSize: '16@ms',
    lineHeight: '16@ms',
    fontFamily: 'Inter-Medium',
    color: '#ffffff',
  },
  text3: {
    fontSize: '16@ms',
    lineHeight: '16@ms',
    fontFamily: 'Inter-Regular',
    color: '#ffffff',
    marginRight: '8@ms',
  },
  leftWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  marginBottom3: {marginBottom: '3@ms'},
});

export default styles;
