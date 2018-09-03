import _ from 'lodash';

import { FETCH_POSTS, FETCH_SINGLE_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, 'id');
		case FETCH_SINGLE_POST:
			const post = action.payload.data;
			// const newState = { ...state };
			// newState[post.id] = post;
			// return newState;
			//
			// same in es6:
			return { ...state, [action.payload.data.id]: action.payload.data};
		case DELETE_POST:
			// omits key of action.payload (id) from state object
			return _.omit(state, action.payload);
		default:
			return state;
	}
}
