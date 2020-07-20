import {ScaledSheet} from 'react-native-size-matters';
import constants from '../../constants';

const styles = ScaledSheet.create({
  OrangeColor: {
    backgroundColor: constants.colors.OrangeColor,
  },
  flexRowVertical: {
    flexDirection: 'row',
    marginVertical: '15@ms',
  },
  menuIconWrapper: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  MenuIcon: {height: '24@ms', width: '24@ms'},
  titleWrapper: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: '18@ms',
    lineHeight: '18@ms',
    color: '#ffffff',
  },
  SearchWrapper: {flex: 1, justifyContent: 'center', alignItems: 'flex-end'},
  cartWrapper: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default styles;
