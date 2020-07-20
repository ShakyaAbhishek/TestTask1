import React, {useRef, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import styles from './style';
import constants from '../../constants';
import {
  BreadScreen,
  SmallPastryScreen,
  CoffeeCookies,
  RollsScreen,
  DishesDetailScreen,
  Header,
  CartButton,
  TabBar,
} from '../../components';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {Modalize} from 'react-native-modalize';

const ScreenHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  const modalizeRef = useRef(null);
  const [cartItem, setCartItem] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const closeModal = () => {
    modalizeRef.current?.close();
  };

  const addItemToCart = (data) => {
    const arr = [];
    var totalPrice = 0;
    [...data].map((i) => {
      if (i.selectedItem > 0) {
        arr.push(i);
        totalPrice = totalPrice + i.price * i.selectedItem;
      }
    });
    setCartItem(arr);
    setTotalCartPrice(totalPrice);
  };

  return (
    <View style={styles.container}>
      <Header />
      <SafeAreaView style={styles.container}>
        <ScrollableTabView
          renderTabBar={() => <TabBar />}
          style={styles.scrollableTabView}
          contentContainerStyle={styles.contentContainerScrolView}
          prerenderingSiblingsNumber={2}>
          <BreadScreen
            onCardClick={onOpen}
            addItemToCart={(data) => addItemToCart(data)}
          />
          <RollsScreen
            onCardClick={onOpen}
            addItemToCart={(data) => addItemToCart(data)}
          />
          <SmallPastryScreen
            onCardClick={onOpen}
            addItemToCart={(data) => addItemToCart(data)}
          />
          <CoffeeCookies
            onCardClick={onOpen}
            addItemToCart={(data) => addItemToCart(data)}
          />
        </ScrollableTabView>
        {totalCartPrice > 0 && (
          <CartButton
            selectedItems={cartItem.length}
            totalPrice={totalCartPrice}
          />
        )}
      </SafeAreaView>
      <Modalize ref={modalizeRef} snapPoint={ScreenHeight / 1.5}>
        <DishesDetailScreen closeModal={closeModal} />
      </Modalize>
    </View>
  );
};

export default HomeScreen;
