import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			//return state.concat([action.payload.data]);
			// same thing as
			return [action.payload.data, ...state];
			// this puts data at the front of the array and flattens everything
	}
	return state;
}
