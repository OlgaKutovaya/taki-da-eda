import React, { Component } from 'react';
import { Dimensions, StyleSheet, TextInput, Image } from 'react-native';
import { View } from 'react-native';
import SearchIcon from '../assets/images/search.png';

const { width } = Dimensions.get('window');

class SearchInput extends Component {

	state = {
		searchString: '',
	};

	render() {
		return (
			<View style={styles.inputContainer}>
				<View style={styles.inputIconContainer}>
					<Image source={SearchIcon} style={styles.inputIcon} resizeMode='contain' />
				</View>
				<TextInput
					placeholder="Введите название продукта"
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
		);
	}
}

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: width * 0.9,
		height: 50,
		borderWidth: 1,
		backgroundColor: 'rgba(142, 142, 147, 0.06)',
		borderColor: 'rgba(142, 142, 147, 0.5)',
		paddingRight: 10,
	},
	input: {
		flex: 1,
		fontSize: 17,
		fontWeight: '400',
		letterSpacing: 0.3,
		height: 44,
	},
	inputIconContainer: {
		marginRight: -10,
	},
	inputIcon: {
		width: 60,
		height: 60,
		opacity: 0.6,
	},
});

export default SearchInput;
