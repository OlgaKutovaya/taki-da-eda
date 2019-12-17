import React, {useState, useRef} from 'react';
import {
  Dimensions,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import Swiper from 'react-native-swiper';
import AsyncStorage from '@react-native-community/async-storage';
import {palette} from '../styles/palette';
import welcome1 from '../../assets/images/welcome1.jpg';
import welcome2 from '../../assets/images/welcome2.jpg';
import welcome3 from '../../assets/images/welcome3.png';

const {width} = Dimensions.get('window');

const slideData = {
  title1: '«У НАС ТАКИ ВКУСНО» \n' + 'ДОСТАВКА ЗАГРАНИЧНЫХ ПРОДУКТОВ',
  title2:
    'Все продукты подбираем \n' + 'как для себя. \n' + 'Качество гарантируем!',
  title3:
    'Доставим в сохранности \n' +
    'в удобное для Вас время. \n' +
    'Мы любим наших клиентов!',
};

const SwiperWelcome = props => {
  const [btnText, setBtnText] = useState('Далее');
  const swiper = useRef();

  const handleSwiperChanged = index => {
    if (index === 2) {
      setBtnText('Понятно');
    } else {
      setBtnText('Далее');
    }
  };

  const handleNextBtnPress = () => {
    if (btnText === 'Далее') {
      swiper.current.scrollBy(1);
    } else {
      AsyncStorage.setItem('@glycemic_welcome', 'visited').catch();
      props.navigation.navigate('Auth');
    }
  };

  return (
    <View style={styles.swiperContainer}>
      <Swiper
        showsButtons={false}
        dot={<View style={styles.dotInactive} />}
        activeDot={<View style={styles.dotActive} />}
        containerStyle={styles.wrapper}
        autoplay={false}
        loop={false}
        ref={swiper}
        onIndexChanged={handleSwiperChanged}>
        {/*1-st slide*/}
        <View key={0} style={styles.slide}>
          <View style={styles.slideInner}>
            <View style={styles.slideInnerTop}>
              <Image
                source={welcome1}
                style={styles.topImg}
                resizeMode="cover"
              />
            </View>
            <View style={styles.slideInnerBottom}>
              <Text style={styles.slideOneInnerBottomText}>
                {slideData.title1}
              </Text>
            </View>
          </View>
        </View>

        {/*2-st slide*/}
        <View key={1} style={styles.slide}>
          <View style={styles.slideInner}>
            <View style={styles.slideInnerTop}>
              <Image
                source={welcome2}
                style={styles.topImg}
                resizeMode="cover"
              />
            </View>
            <View style={styles.slideInnerBottom}>
              <Text style={styles.slideOneInnerBottomText}>
                {slideData.title2}
              </Text>
            </View>
          </View>
        </View>
        {/*3-st slide*/}
        <View key={1} style={styles.slide}>
          <View style={styles.slideInner}>
            <View style={styles.slideInnerTop}>
              <Image
                source={welcome3}
                style={styles.topImg}
                resizeMode="cover"
              />
            </View>
            <View style={styles.slideInnerBottom}>
              <Text style={styles.slideOneInnerBottomText}>
                {slideData.title3}
              </Text>
            </View>
          </View>
        </View>
      </Swiper>
      <TouchableWithoutFeedback onPress={handleNextBtnPress}>
        <View style={styles.nextBtn}>
          <Text style={styles.nextBtnText}>{btnText}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  swiperContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  wrapper: {
    width: width,
    height: 360,
    justifyContent: 'center',
  },
  slide: {
    width: width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideInner: {
    width: 350,
  },
  slideInnerTop: {
    alignItems: 'center',
  },
  topImg: {
    height: 320,
    width: width,
  },
  slideInnerBottom: {
    marginTop: 40,
    height: 100,
  },
  slideOneInnerBottomText: {
    fontSize: 22,
    color: palette.aubergine,
    textAlign: 'center',
  },
  dotInactive: {
    backgroundColor: '#C0C0C0',
    width: 12,
    height: 12,
    borderRadius: 6,
    marginLeft: 10,
    marginRight: 10,
  },
  dotActive: {
    backgroundColor: palette.seaGreen,
    width: 12,
    height: 12,
    borderRadius: 6,
    marginLeft: 10,
    marginRight: 10,
  },
  nextBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.seaGreen,
    height: 52,
    width: 230,
    marginTop: 26,
    marginBottom: 33,
    borderRadius: 4,
  },
  nextBtnText: {
    fontSize: 17,
    color: '#fff',
  },
});

export default withNavigation(SwiperWelcome);
