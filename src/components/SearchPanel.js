import React, {Component} from 'react';
import {TextInput, Image, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import SearchIcon from '../../assets/images/search.png';
import {styles} from '../styles/components/SearchPanelStyles';


class SearchPanel extends Component {

    state = {
        searchString: '',
        isFocused: false,
    };

    onFocus() {
        this.setState({
            isFocused: true,
        });
    }

    onBlur() {
        this.setState({
            isFocused: false,
        });
    }

    onPress = () => {
        alert('search');
    };

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.searchPanelWrapper}>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputIconContainer}>
                            <Image source={SearchIcon}
                                   style={styles.inputIcon}
                                   resizeMode='contain'
                            />
                        </View>
                        <TextInput
                            placeholder={this.state.isFocused ? '' : 'Введите название продукта'}
                            onFocus={() => this.onFocus()}
                            onBlur={() => this.onBlur()}
                            placeholderTextColor='#9DA3B4'
                            style={styles.input}
                            autoComplete="off"
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType='email-address'
                            onChangeText={text => this.setState({searchString: text})}
                            value={this.state.searchString}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.searchButton}
                        onPress={this.onPress}>
                        <Text style={styles.searchButtonText}>
                            поиск
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default SearchPanel;
