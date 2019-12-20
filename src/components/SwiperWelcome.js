import React, {useState, useRef} from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import {withNavigation} from 'react-navigation';
import Swiper from 'react-native-swiper';
import {styles} from '../styles/components/SwiperWelcomeStyles';
import AsyncStorage from '@react-native-community/async-storage';
import welcome1 from '../../assets/images/welcome/welcome1.jpg';
import welcome2 from '../../assets/images/welcome/welcome2.jpg';
import welcome3 from '../../assets/images/welcome/welcome3.png';

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

export default withNavigation(SwiperWelcome);
