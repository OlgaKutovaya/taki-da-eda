import React, {Component} from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import HouseholdChemicals from './HouseholdChemicals';
import {palette} from '../../../styles/palette';
import ProductComponent from './ProductComponent';

class CategoryList extends Component {
    render() {
        return (
            <ScrollableTabView
                tabBarUnderlineStyle={{backgroundColor: palette.seaGreen, height: 1.5}}
                tabBarActiveTextColor={palette.seaGreen}
                tabBarInactiveTextColor={palette.nobel}
                tabBarTextStyle={{letterSpacing: 0.5}}
            >
                <ProductComponent tabLabel="Таки Да Еда"/>
                <HouseholdChemicals tabLabel="Бытовая химия"/>
            </ScrollableTabView>
        );
    }
}

export default CategoryList;
