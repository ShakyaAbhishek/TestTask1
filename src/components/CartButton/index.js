import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
import constants from '../../constants';

type Props = {
  selectedItems: Number,
  totalPrice: number,
};

const CartButton = ({selectedItems, totalPrice}: Props) => {
  return (
    <View style={styles.buttonWrapper}>
      <View style={styles.buttonStyle}>
        <View style={styles.rightWrapper}>
          <Text style={styles.text1}>{`${selectedItems} ITEM`}</Text>
          <Text style={styles.text2}>{`€${totalPrice.toFixed(2)}`}</Text>
        </View>
        <View style={styles.leftWrapper}>
          <Text style={styles.text3}>Cart</Text>
          <Image
            style={styles.marginBottom3}
            source={constants.images.ArrowImage}
            resizeMode={'contain'}
          />
        </View>
      </View>
    </View>
  );
};

export default CartButton;
