import React, {Component} from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import FoodComponent from './ShopCategories/FoodComponent';
import ChemistryComponent from './ShopCategories/ChemistryComponent';

class CategoryList extends Component {
    render() {
        return (
            <ScrollableTabView
                tabBarUnderlineStyle={{backgroundColor: 'green', height: 1.5}}
                tabBarActiveTextColor={'green'}
                tabBarInactiveTextColor={'darkgrey'}
                tabBarTextStyle={{letterSpacing: 0.5}}
            >
                <FoodComponent tabLabel="Таки Да Еда"/>
                <ChemistryComponent tabLabel="Мама мыла раму"/>
            </ScrollableTabView>
        );
    }
}

export default CategoryList;
