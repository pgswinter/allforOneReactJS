import {authServices} from "../../_services";
import {actionType} from "../../_constant";

export function getAccounts() {
	return dispatch => 
        dispatch({
            type: actionType.GET_ACCOUNTS,
            payload: authServices.fetchUser() // if funcntion type please add () after name function
        });
}

export function getPermission() {
	return dispatch => 
        dispatch({
            type: actionType.GET_PERMISSIONS,
            payload: authServices.fetchPermission() // if funcntion type please add () after name function
        });
}