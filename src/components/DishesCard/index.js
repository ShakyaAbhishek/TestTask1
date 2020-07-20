import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import constants from '../../constants';
// import {TouchableOpacity} from 'react-native-gesture-handler';

type Props = {
  data: Object,
  onPressCard: Object,
  onPressWishList: Object,
  index: Number,
  addItemFunction: Object,
};

const DishesCard = ({
  data,
  onPressCard,
  onPressWishList,
  index,
  addItemFunction,
}: Props) => {
  const {backGround, name, price, selectedItem, like} = data;
  return (
    <View style={[styles.container, styles.justifyAlignCenter]}>
      <TouchableOpacity onPress={() => onPressCard(data)} activeOpacity={0.8}>
        <ImageBackground source={backGround} style={styles.dishesImage}>
          <TouchableOpacity
            onPress={() => onPressWishList(data, index)}
            activeOpacity={0.8}
            style={[styles.wishButtonWrapper, styles.justifyAlignCenter]}>
            <Image
              resizeMode={'contain'}
              source={
                like
                  ? constants.images.RedLikeImage
                  : constants.images.GrayLikeSmallImage
              }
            />
          </TouchableOpacity>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onPressCard(data)}
        style={styles.nameWrapper}>
        <Text numberOfLines={1} style={styles.text1}>
          {name}
        </Text>
      </TouchableOpacity>
      <View style={styles.priceCountWrapper}>
        <View style={styles.flex1}>
          <Text style={styles.text2}>{`€${price}`}</Text>
        </View>
        <View style={styles.flex1}>
          <View style={[styles.addCountWrapper, styles.justifyAlignCenter]}>
            {selectedItem === 0 ? (
              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => addItemFunction(data, 'add', index)}>
                  <Text style={styles.text3}>{'BESTEL +'}</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.addMinusWrapper}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => addItemFunction(data, 'minus', index)}
                  style={[styles.flex1, styles.justifyAlignCenter]}>
                  <Text style={styles.text3}>-</Text>
                </TouchableOpacity>

                <View style={styles.centerCounter}>
                  <Text style={styles.text4}>{selectedItem}</Text>
                </View>

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => addItemFunction(data, 'add', index)}
                  style={[styles.flex1, styles.justifyAlignCenter]}>
                  <Text style={styles.text3}>+</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishesCard;
