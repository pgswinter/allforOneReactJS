import { actionType } from "../../_constant";

const initialState = { accounts: [] };

export function accountsReducer(state = initialState, action){
	switch (action.type) {
		case actionType.GET_ACCOUNTS:
			return Object.assign(
				{},
				{
					accounts: action.payload
				}
			);
		default:
			return state;
	}
};

export function permissionReducer(state = initialState, action){
	switch (action.type) {
		case actionType.GET_PERMISSIONS:
			return Object.assign(
				{},
				{
					permissions: action.payload
				}
			);
		default:
			return state;
	}
};
  