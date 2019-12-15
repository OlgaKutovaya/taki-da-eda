import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/productsActionTypes";

export const addItem = product => {
	return {
		type: ADD_ITEM,
		payload: {
			id: 1
		}
	};
};

export const deleteItem = id => {
	return {
		type: DELETE_ITEM,
		payload: id
	};
};
