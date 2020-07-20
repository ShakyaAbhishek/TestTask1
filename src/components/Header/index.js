import React, {Component} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import styles from './style';
import constants from '../../constants';

const Header = () => {
  return (
    <View style={styles.OrangeColor}>
      <SafeAreaView>
        <View style={styles.flexRowVertical}>
          <View style={styles.menuIconWrapper}>
            <View style={styles.MenuIcon}>
              <Image
                style={{height: '100%', width: '100%'}}
                resizeMode={'contain'}
                source={constants.images.MenuImage}
              />
            </View>
          </View>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>Categories</Text>
          </View>
          <View style={styles.SearchWrapper}>
            <View style={styles.MenuIcon}>
              <Image
                style={{height: '100%', width: '100%'}}
                resizeMode={'contain'}
                source={constants.images.SearchImage}
              />
            </View>
          </View>
          <View style={styles.cartWrapper}>
            <View style={styles.MenuIcon}>
              <Image
                style={{height: '100%', width: '100%'}}
                resizeMode={'contain'}
                source={constants.images.CartImage}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Header;
