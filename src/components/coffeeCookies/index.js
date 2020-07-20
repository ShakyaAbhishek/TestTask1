import React, {useState, useRef} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './style';
import constants from '../../constants';
import DishesCard from '../DishesCard';

type Props = {
  onCardClick: Object,
  addItemToCart: Object,
};

const CoffeeCookies = ({onCardClick, addItemToCart}: Props) => {
  const [wishListData, setwishListData] = useState(null);
  const [breaddata, setBreadData] = useState([
    {
      id: 7,
      like: false,
      backGround: constants.images.MaskCopyImage,
      name: 'Cup Bread',
      price: 2.99,
      selectedItem: 0,
    },
    {
      id: 8,
      like: false,
      backGround: constants.images.MaskCopy1Image,
      name: 'Farmers Coarse',
      price: 3.99,
      selectedItem: 0,
    },
    {
      id: 9,
      like: false,
      backGround: constants.images.MaskCopy2Image,
      name: 'Small Round White',
      price: 1.99,
      selectedItem: 0,
    },
    {
      id: 10,
      like: false,
      backGround: constants.images.MaskCopy3Image,
      name: 'French Baguette',
      price: 2.49,
      selectedItem: 0,
    },
    {
      id: 11,
      like: true,
      backGround: constants.images.MaskCopy4Image,
      name: 'Cup Bread',
      price: 1.99,
      selectedItem: 0,
    },
    {
      id: 12,
      like: false,
      backGround: constants.images.MaskCopy5Image,
      name: 'Farmers Coarse',
      price: 2.99,
      selectedItem: 0,
    },
    {
      id: 37,
      like: false,
      backGround: constants.images.MaskCopyImage,
      name: 'Cup Bread',
      price: 2.99,
      selectedItem: 0,
    },
    {
      id: 38,
      like: false,
      backGround: constants.images.MaskCopy1Image,
      name: 'Farmers Coarse',
      price: 3.99,
      selectedItem: 0,
    },
    {
      id: 39,
      like: false,
      backGround: constants.images.MaskCopy2Image,
      name: 'Small Round White',
      price: 1.99,
      selectedItem: 0,
    },
    {
      id: 40,
      like: false,
      backGround: constants.images.MaskCopy3Image,
      name: 'French Baguette',
      price: 2.49,
      selectedItem: 0,
    },
    {
      id: 41,
      like: true,
      backGround: constants.images.MaskCopy4Image,
      name: 'Cup Bread',
      price: 1.99,
      selectedItem: 0,
    },
    {
      id: 42,
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

export default CoffeeCookies;


// export default CoffeeCookies;
