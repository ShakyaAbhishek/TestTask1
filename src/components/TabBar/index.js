import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import constants from '../../constants';
import styles from './style';

type TabProps = {
  goToPage: Object,
  activeTab: number,
};
const TabBar = ({goToPage, activeTab}: TabProps) => {
  const Tab = ({onPressTab, tabLabel, tabActive}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPressTab}
      style={styles.tab}>
      <Text
        style={[
          styles.tabText,
          tabActive ? styles.whiteColor : styles.lightOrange,
        ]}>
        {tabLabel}
      </Text>
      {tabActive && <View style={styles.BottomLine} />}
    </TouchableOpacity>
  );

  return (
    <View style={styles.tabWrapper}>
      <Tab
        onPressTab={() => goToPage(0)}
        tabLabel={'Bread'}
        count={1}
        tabActive={activeTab === 0}
      />
      <Tab
        onPressTab={() => goToPage(1)}
        tabLabel={'Rolls'}
        count={1}
        tabActive={activeTab === 1}
      />
      <Tab
        onPressTab={() => goToPage(2)}
        tabLabel={'Small Pastry'}
        count={1}
        tabActive={activeTab === 2}
      />
      <Tab
        onPressTab={() => goToPage(3)}
        tabLabel={'Coffee Cookies'}
        count={1}
        tabActive={activeTab === 3}
      />
    </View>
  );
};

export default TabBar;
