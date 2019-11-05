import React, { useState, useRef } from "react";
import { Dimensions, Text, StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { withNavigation } from "react-navigation";
import Swiper from "react-native-swiper";
import AsyncStorage from "@react-native-community/async-storage";

const { width } = Dimensions.get("window");

const SwiperWelcome = (props) => {
    const [btnText, setBtnText] = useState("Далее");
    const swiper = useRef();

    const handleSwiperChanged = (index) => {
        if (index === 2) {
            setBtnText("Понятно");
        } else {
            setBtnText("Далее");
        }
    };

    const handleNextBtnPress = () => {
        if (btnText === "Далее") {
            swiper.current.scrollBy(1);
        } else {
            AsyncStorage.setItem("@glycemic_welcome", "visited").catch();
            props.navigation.navigate("AppInner");
        }
    };

    const shadowFirstIndex = {
        width: 130,
        height: 130,
        color: "#000",
        border: 10,
        radius: 65,
        opacity: 0.025,
        x: 0,
        y: 4
    };

    const shadowSecondIndex = {
        width: 90,
        height: 90,
        color: "#000",
        border: 8,
        radius: 45,
        opacity: 0.025,
        x: 0,
        y: 4,
        style: { position: "absolute", bottom: 0, zIndex: -5 }
    };


    return (
        <View style={styles.swiperContainer}>
            <Swiper showsButtons={false}
                    dot={<View style={styles.dotInactive} />}
                    activeDot={<View style={styles.dotActive} />}
                    containerStyle={styles.wrapper}
                    autoplay={false}
                    loop={false}
                    ref={swiper}
                    onIndexChanged={handleSwiperChanged}
            >
                {/*1-st slide*/}
                <View key={0} style={styles.slide}>
                    <View style={styles.slideOneInner}>
                        <View style={styles.slideInnerTop}>
                                <View style={styles.slideOneFirstIndex}>
                                    <Text style={styles.slideOneFirstIndexText}>
                                        45
                                    </Text>
                                </View>
                                <View style={styles.slideOneSecondIndex}>
                                    <Text style={styles.slideOneSecondIndexText}>
                                        12
                                    </Text>
                                </View>
                        </View>
                        <View style={styles.slideInnerBottom}>
                            <Text style={styles.slideOneInnerBottomText}>
                                Это гликемический индекс
                            </Text>
                        </View>
                    </View>
                </View>

                {/*2-st slide*/}
                <View key={1} style={styles.slide}>
                    <View style={styles.slideTwoInner}>
                        <View style={styles.slideInnerTop}>
                                <View style={styles.slideTwoFirstIndex}>
                                    <Text style={styles.slideTwoFirstIndexText}>
                                        45
                                    </Text>
                                </View>
                                <View style={styles.slideTwoSecondIndex}>
                                    <Text style={styles.slideTwoSecondIndexText}>
                                        12
                                    </Text>
                                </View>
                        </View>
                        <View style={styles.slideInnerBottom}>
                            <Text style={styles.slideOneInnerBottomText}>
                                И гликемическая нагрузка
                            </Text>
                        </View>
                    </View>
                </View>
                {/*3-st slide*/}
                <View key={1} style={styles.slide}>
                    <View style={styles.slideTwoInner}>
                        <View style={styles.slideInnerTop}>
                            <View style={styles.slideTwoFirstIndex}>
                                <Text style={styles.slideTwoFirstIndexText}>
                                    45
                                </Text>
                            </View>
                            <View style={styles.slideTwoSecondIndex}>
                                <Text style={styles.slideTwoSecondIndexText}>
                                    12
                                </Text>
                            </View>
                        </View>
                        <View style={styles.slideInnerBottom}>
                            <Text style={styles.slideOneInnerBottomText}>
                                И гликемическая нагрузка
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
        alignItems: "center",
        justifyContent: "space-around"
// backgroundColor: "yellow"
    },
    wrapper: {
        width: width,
        height: 360,
        justifyContent: "center"
    },
    slide: {
        width: width,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    slideOneInner: {
        backgroundColor: "white",
        width: 290
    },
    slideTwoInner: {
        backgroundColor: "white",
        width: 310
    },
    slideInnerTop: {
        height: 200,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        overflow: "visible",
        marginBottom: 20
    },
    slideInnerBottom: {
        height: 70
// borderWidth: 1,
// borderColor: "blue"
    },
    slideOneArrow: {
        position: "absolute",
        top: 37, left: 0
    },
    slideOneFirstIndex: {
        position: "relative",
        zIndex: 5,
        backgroundColor: "#5EB537",
        width: 130,
        height: 130,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 65,
        overflow: "hidden",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 8
    },
    slideOneFirstIndexText: {
        fontSize: 46,
        color: "#fff"
    },
    slideOneSecondIndex: {
        position: "absolute",
        bottom: 0,
        alignSelf: "center",
        zIndex: -5,
        backgroundColor: "#E0E0E0",
        width: 90,
        height: 90,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 45,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 8
    },
    slideOneSecondIndexText: {
        fontSize: 26,
        color: "#BDBDBD"
    },
    slideOneInnerBottomText: {
        fontSize: 24,
        color: "#000000",
        textAlign: "center"
    },
    slideTwoArrow: {
        position: "absolute",
        bottom: 13, left: 0
    },
    slideTwoFirstIndex: {
        backgroundColor: "#E0E0E0",
        width: 130,
        height: 130,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 65,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 8
    },
    slideTwoFirstIndexText: {
        fontSize: 46,
        color: "#BDBDBD"
    },
    slideTwoSecondIndex: {
        position: "absolute",
        bottom: 0,
        alignSelf: "center",
        zIndex: -5,
        backgroundColor: "#F0AA40",
        width: 90,
        height: 90,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 45,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 8
    },
    slideTwoSecondIndexText: {
        fontSize: 26,
        color: "#ffffff"
    },
    dotInactive: {
        backgroundColor: "#C0C0C0",
        width: 12,
        height: 12,
        borderRadius: 6,
        marginLeft: 10,
        marginRight: 10
    },
    dotActive: {
        backgroundColor: "#000000",
        width: 12,
        height: 12,
        borderRadius: 6,
        marginLeft: 10,
        marginRight: 10
    },
    nextBtn: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
        height: 52,
        width: 230,
        marginTop: 26,
        marginBottom: 33,
        borderRadius: 4
    },
    nextBtnText: {
        fontSize: 15,
        color: "#fff"
    }
});

export default withNavigation(SwiperWelcome);
