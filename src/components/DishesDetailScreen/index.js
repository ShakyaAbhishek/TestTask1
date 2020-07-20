import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import constants from '../../constants';
import ImagePicker from 'react-native-image-crop-picker';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
type Props = {
  data: Object,
  onPressClose: Object,
  modalVisual: Boolean,
  closeModal: Object
};

const DishesDetailScreen = ({data, modalVisual, onPressClose, closeModal}: Props) => {
  const openPicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.warn(image);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.marginPadding}>
        <View style={styles.flexWithDirection}>
          <View style={styles.TitleImage}>
            <View style={styles.titleImageStyle}>
              <Image
                resizeMode={'contain'}
                source={constants.images.TitleImage}
              />
            </View>
          </View>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>Verdeelgateau Fruit</Text>
          </View>
          <View style={styles.crossButtonWrapper}>
            <TouchableOpacity activeOpacity={0.8} onPress={closeModal} styles={styles.crossButtonStyle}>
              <Image
                resizeMode={'contain'}
                source={constants.images.CrossImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.discriptionTextWrapper}>
          <Text style={styles.discriptionText}>
            Wheat free, made with jackfruit and mixed berry smoothie topped with
            fresh fruit.
          </Text>
        </View>
        <View style={styles.addToWrapper}>
          <View>
            <Image
              resizeMode={'contain'}
              source={constants.images.GrayLikeImage}
            />
          </View>
          <Text style={styles.addToText}>Add to Wishlist</Text>
        </View>
        <View style={styles.contantWrapper}>
          <View style={styles.flexCenter}>
            <View style={styles.contantImageStyle}>
              <Image
                resizeMode={'contain'}
                source={constants.images.FishImage}
              />
            </View>
            <Text style={styles.contantText1}>Fish</Text>
          </View>
          <View style={styles.flexCenter}>
            <View style={styles.contantImageStyle}>
              <Image
                resizeMode={'contain'}
                source={constants.images.EggImage}
              />
            </View>
            <Text style={styles.contantText1}>Egg</Text>
          </View>
          <View style={styles.flexCenter}>
            <View style={styles.contantImageStyle}>
              <Image
                resizeMode={'contain'}
                source={constants.images.CrabImage}
              />
            </View>
            <Text style={styles.contantText1}>Crustaceans</Text>
          </View>
          <View style={styles.flexCenter}>
            <View style={styles.contantImageStyle}>
              <Image
                resizeMode={'contain'}
                source={constants.images.WheatImage}
              />
            </View>
            <Text style={styles.contantText1}>Gluten</Text>
          </View>
        </View>
        <View style={styles.margin20}>
          <Text style={styles.headingText}>{'Select shape'}</Text>
          <Text style={styles.detailText}>
            {'Note that a round cake is limited to 8 persons.'}
          </Text>
          <View style={styles.flexRow}>
            <View style={styles.flexRowAlignCenter}>
              <View
                style={[styles.radioButtonSelectWrapper, styles.borderOrange]}>
                <View style={styles.radioButtonInner} />
              </View>
              <Text style={styles.radioButtonText}>{'Round'}</Text>
            </View>
            <View style={styles.flexRowWithMarginA}>
              <View
                style={[styles.borderWhiteTwo, styles.radioButtonSelectWrapper]}
              />
              <Text style={styles.radioButtonText}>{'Square'}</Text>
            </View>
          </View>
        </View>
        <View style={styles.margin20}>
          <Text style={styles.headingText}>{'Extra cream'}</Text>
          <View style={styles.flexRowMarginTop}>
            <View style={styles.checkBoxWrapper}>
              {/* <View style={{height:10, width:10, backgroundColor:constants.colors.OrangeColor, borderRadius:5}}/> */}
            </View>
            <Text style={styles.checkBoxText}>{'Yes'}</Text>
          </View>
        </View>
        <View style={styles.margin20}>
          <Text style={styles.headingText}>{'Add picture'}</Text>
          <Text style={styles.detailText}>
            {'The picture should have a good resolution.'}
          </Text>
          <View style={styles.flexRowAlignCenter}>
            <View style={styles.checkBoxWrapper}>
              {/* <View style={{height:10, width:10, backgroundColor:constants.colors.OrangeColor, borderRadius:5}}/> */}
            </View>
            <Text style={styles.checkBoxText}>{'Yes'}</Text>
          </View>
          <View style={styles.flexRowVertical}>
            <View style={styles.flex1}>
              <Image
                resizeMode={'contain'}
                source={constants.images.RectangleImage}
              />
            </View>
            <View style={styles.flexCenter}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={openPicker}
                style={styles.uploadImageButton}>
                <Text style={styles.uploadButtonText}>
                  {'Upload other picture'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>{'Delete'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.margin20}>
          <Text style={styles.headingText}>{'Add text'}</Text>
          <Text style={styles.detailText}>
            {'Which text would you like on your cake?'}
          </Text>
          <View style={styles.flexRowAlignCenter}>
            <View style={styles.checkBoxWrapper}>
              {/* <View style={{height:10, width:10, backgroundColor:constants.colors.OrangeColor, borderRadius:5}}/> */}
            </View>
            <Text style={styles.checkBoxText}>{'Yes'}</Text>
          </View>
          <View style={styles.textInputWrapper}>
            <TextInput
              autoCorrect={false}
              placeholder={'Happy birthday'}
              style={styles.inputStyle}
            />
          </View>
          {/* add the TextInput here ----------------------- */}
        </View>
        <View style={styles.margin20}>
          <Text style={styles.headingText}>{'Count'}</Text>
          <Text style={styles.detailText}>
            {'Please select the amount of persons.'}
          </Text>
          <View style={styles.counterWrapper}>
            <View style={styles.flexCenter}>
              <Text style={styles.addMinusText}>{'-'}</Text>
            </View>
            <View style={styles.CounterWrapperCenter}>
              <Text style={styles.CountText1}>{'3'}</Text>
            </View>
            <View style={styles.flexCenter}>
              <Text style={styles.addMinusText}>{'+'}</Text>
            </View>
          </View>
        </View>
        <View style={styles.margin20}>
          <Text style={styles.headingText}>{'Quantity'}</Text>
          <View style={[styles.counterWrapper, styles.margin20]}>
            <View style={styles.flexCenter}>
              <Text style={styles.addMinusText}>{'-'}</Text>
            </View>
            <View style={styles.CounterWrapperCenter}>
              <Text style={styles.CountText1}>{'3'}</Text>
            </View>
            <View style={styles.flexCenter}>
              <Text style={styles.addMinusText}>{'+'}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomButtonWrapper}>
        <TouchableOpacity activeOpacity={0.8} style={styles.bottomButton}>
          <Text style={styles.bottomButtonText}>{'Add - €2.98'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DishesDetailScreen;
