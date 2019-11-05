import React, {Component} from 'react';
import {Text, View, ImageBackground} from 'react-native';
import Swiper from 'react-native-swiper';
import {styles} from '../styles/components/SwiperComponentStyles';


const slideData = [
    {
        title: '«У НАС ТАКИ ВКУСНО» \n' +
            'ДОСТАВКА ЗАГРАНИЧНЫХ ПРОДУКТОВ',
        image: 'https://www.chatelaine.com/wp-content/uploads/2019/01/canada-new-food-guide-2019-social-1200x630-1548169539.jpg',
    },
    {
        title: 'Все продукты подбираем \n' +
            'как для себя. \n' +
            'Качество гарантируем!',
        image: 'https://assets.dmagstatic.com/wp-content/uploads/2019/09/iStock-913677844-677x451.jpg',
    },
    {
        title: 'Доставим в сохранности \n' +
            'в удобное для Вас время. \n' +
            'Мы любим наших клиентов!',
        image: 'https://blog.myfitnesspal.com/wp-content/uploads/2018/01/UACF_EG_Hero_NoBadge_Portion-Control-752x472.jpg',
    },
];


export class SwiperComponent extends Component {

    render() {
        return (
            <View style={styles.swiperContainer}>
                <Swiper showsButtons={false}
                        dot={<View style={styles.dotInactive}/>}
                        activeDot={<View style={styles.dotActive}/>}
                        containerStyle={styles.wrapper}
                        autoplay={true}
                >
                    {slideData.map((item, index) => {
                        return (
                            <View key={index} style={styles.slide}>
                                <ImageBackground
                                    key={index}
                                    resizeMode='cover'
                                    source={{uri: item.image}}
                                    style={styles.slideInner}>
                                    <View style={styles.titleContainer}>
                                        <Text style={styles.title}>
                                            {item.title}
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        );
                    })}
                </Swiper>
            </View>

        );
    }
}

export default SwiperComponent;

