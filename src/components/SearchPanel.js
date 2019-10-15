import React, { Component } from 'react';
import {Dimensions, StyleSheet, TextInput, Image, Text, TouchableOpacity} from 'react-native';
import { View } from 'react-native';
import SearchIcon from '../../assets/images/search.png';

const { width } = Dimensions.get('window');

class SearchPanel extends Component {

	state = {
		placeholder: 'Введите название продукта',
		searchString: '',
	};

	onFocus() {
		this.setState({
			placeholder: ''
		});
	}

	onPress = () => {
		alert('search')
	};

	render() {
		return (
			<View style={styles.searchPanelWrapper}>
			<View style={styles.inputContainer}>
				<View style={styles.inputIconContainer}>
					<Image source={SearchIcon} style={styles.inputIcon} resizeMode='contain' />
				</View>
				<TextInput
					placeholder={this.state.placeholder}
					// onFocus={() => this.onFocus()}
					placeholderTextColor='#9DA3B4'
					style={styles.input}
					autoComplete="off"
					autoCapitalize="none"
					autoCorrect={false}
					keyboardType='email-address'
					onChangeText={text => this.setState({ searchString: text })}
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
		);
	}
}

const styles = StyleSheet.create({
	searchPanelWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 20,
		width: width * 0.9,
	},
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '75%',
		height: 40,
		borderWidth: 1,
		borderRadius: 5,
		backgroundColor: 'rgba(142, 142, 147, 0.06)',
		borderColor: 'rgba(142, 142, 147, 0.5)'
	},
	input: {
		flex: 1,
		fontSize: 12,
		width: 300,
		fontWeight: '400',
		letterSpacing: 0.3
	},
	inputIconContainer: {

	},
	inputIcon: {
		width: 35,
		height: 35,
		opacity: 0.3,
	},
	searchButton: {
		width: '20%',
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderRadius: 5,
		backgroundColor: 'darkgreen',
		borderColor: 'rgba(142, 142, 147, 0.5)'
	},
	searchButtonText: {
		color: 'lightyellow'
	}
});

export default SearchPanel;
