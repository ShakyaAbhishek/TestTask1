import {ScaledSheet} from 'react-native-size-matters';
import constants from '../../constants';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: '6@ms',
    alignItems: 'center',
    paddingVertical: '16@ms',
  },
});

export default styles;
