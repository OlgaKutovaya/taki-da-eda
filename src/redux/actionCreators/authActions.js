import authActionTypes from "../actionTypes/authActionTypes";

export const getUserData = () => {
	return async dispatch => {
		const response = await fetch("/DATA.json");
		const data = await response.json();
		dispatch({
			type: authActionTypes.GET_USER_DATA,
			payload: data
		});
	};
};

export const deleteUser = id => {
	return (dispatch, getState) => {
		const users = getState().usersData.users;
		const newUsers = [...users];
		const userIndex = newUsers.findIndex(elem => elem.id === id);
		console.log(userIndex);

		if (userIndex !== -1) {
			newUsers.splice(userIndex, 1);
		}

		dispatch({
			type: authActionTypes.LOG_IN_USER,
			payload: newUsers
		});
	};
};

export const saveEditedUserData = user => {
	return (dispatch, getState) => {
		const users = getState().usersData.users;
		const newUsers = [...users];
		const userIndex = users.findIndex(elem => elem.id === user.id);
		newUsers[userIndex] = user;
		dispatch({
			type: authActionTypes.LOG_IN_USER,
			payload: newUsers
		});
	};
};

export const saveNewUserData = user => {
	return (dispatch, getState) => {
		const users = getState().usersData.users;
		let maxID = 1;
		users.forEach(item => {
			if (item.id > maxID) {
				maxID = item.id;
			}
		});
		const newUsers = [...users, { ...user, id: ++maxID }];
		dispatch({
			type: authActionTypes.LOG_IN_USER,
			payload: newUsers
		});
	};
};
