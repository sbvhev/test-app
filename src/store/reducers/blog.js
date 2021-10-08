import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../shared/utility';

const initialState = {
	blogData: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.UPDATE_BLOG_DATA:
			return updateObject(state, {
				blogData: action.payload,
			});

		case actionTypes.ADD_BLOG_DATA:
			return updateObject(state, {
				blogData: [...state.blogData, action.payload],
			});

		default:
			return state;
	}
};

export default reducer;
