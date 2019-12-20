import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import SearchPanel from '../../components/SearchPanel';
import ProductListSlider from '../../components/ProductListSlider';
import SwiperComponent from '../../components/SwiperComponent';

class Home extends Component {
  render() {
    return (
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{alignItems: 'center'}}>
        <SearchPanel />
        <SwiperComponent />
        <ProductListSlider />
        <ProductListSlider />
      </ScrollView>
    );
  }
}

export default Home;
