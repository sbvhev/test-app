import * as actionTypes from '../actionTypes';

export const updateBlogData = (res) => ({
	type: actionTypes.UPDATE_BLOG_DATA,
	payload: res,
});

export const addBlogData = (res) => ({
	type: actionTypes.ADD_BLOG_DATA,
	payload: res,
});
