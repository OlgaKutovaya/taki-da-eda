import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/productsActionTypes";

const initialState = {
	items: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return {
				...state,
				items: action.payload
			};
		case DELETE_ITEM:
			return {
				...state,
				items: action.payload
			};
		default:
			return state;
	}
};
