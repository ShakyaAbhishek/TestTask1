import React, {useState, useRef} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './style';
import constants from '../../constants';
import DishesCard from '../DishesCard';

type Props = {
  onCardClick: Object,
  addItemToCart: Object,
};

const SmallPastryScreen = ({onCardClick, addItemToCart}: Props) => {
  const [wishListData, setwishListData] = useState(null);
  const [breaddata, setBreadData] = useState([
    {
      id: 19,
      like: false,
      backGround: constants.images.MaskCopyImage,
      name: 'Cup Bread',
      price: 2.99,
      selectedItem: 0,
    },
    {
      id: 20,
      like: false,
      backGround: constants.images.MaskCopy1Image,
      name: 'Farmers Coarse',
      price: 3.99,
      selectedItem: 0,
    },
    {
      id: 21,
      like: false,
      backGround: constants.images.MaskCopy2Image,
      name: 'Small Round White',
      price: 1.99,
      selectedItem: 0,
    },
    {
      id: 22,
      like: false,
      backGround: constants.images.MaskCopy3Image,
      name: 'French Baguette',
      price: 2.49,
      selectedItem: 0,
    },
    {
      id: 23,
      like: true,
      backGround: constants.images.MaskCopy4Image,
      name: 'Cup Bread',
      price: 1.99,
      selectedItem: 0,
    },
    {
      id: 24,
      like: false,
      backGround: constants.images.MaskCopy5Image,
      name: 'Farmers Coarse',
      price: 2.99,
      selectedItem: 0,
    },
    {
      id: 25,
      like: false,
      backGround: constants.images.MaskCopyImage,
      name: 'Cup Bread',
      price: 2.99,
      selectedItem: 0,
    },
    {
      id: 26,
      like: false,
      backGround: constants.images.MaskCopy1Image,
      name: 'Farmers Coarse',
      price: 3.99,
      selectedItem: 0,
    },
    {
      id: 27,
      like: false,
      backGround: constants.images.MaskCopy2Image,
      name: 'Small Round White',
      price: 1.99,
      selectedItem: 0,
    },
    {
      id: 28,
      like: false,
      backGround: constants.images.MaskCopy3Image,
      name: 'French Baguette',
      price: 2.49,
      selectedItem: 0,
    },
    {
      id: 29,
      like: true,
      backGround: constants.images.MaskCopy4Image,
      name: 'Cup Bread',
      price: 1.99,
      selectedItem: 0,
    },
    {
      id: 30,
      like: false,
      backGround: constants.images.MaskCopy5Image,
      name: 'Farmers Coarse',
      price: 2.99,
      selectedItem: 0,
    },
  ]);

  const onPressCard = (data) => {
    onCardClick(data);
  };

  const onPressWishList = (data, index) => {
    const ListData = breaddata;
    ListData[index].like = !ListData[index].like;
    if (wishListData === index) {
      setwishListData(index + 10);
    } else {
      setwishListData(index);
    }
    setBreadData(ListData);
  };

  const addItemFunction = (data, type, index) => {
    const ListData = breaddata;
    const arr = [];
    if (type === 'add') {
      ListData[index].selectedItem = ListData[index].selectedItem + 1;
    } else {
      ListData[index].selectedItem = ListData[index].selectedItem - 1;
    }
    if (wishListData === index) {
      setwishListData(index + 20);
    } else {
      setwishListData(index);
    }
    setBreadData(ListData);
    ListData.map((i) => {
      if (i.selectedItem > 0) {
        arr.push(i);
      }
    });
    addItemToCart(arr);
  };

  const renderItems = ({item, index}) => {
    return (
      <DishesCard
        data={item}
        index={index}
        onPressCard={onPressCard}
        addItemFunction={(data, type, index) =>
          addItemFunction(data, type, index)
        }
        onPressWishList={(data, index) => onPressWishList(data, index)}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={breaddata}
        extraData={wishListData}
        keyExtractor={(item) => item.id}
        renderItem={renderItems}
      />
    </View>
  );
};

export default SmallPastryScreen;

// export default SmallPastryScreen;
