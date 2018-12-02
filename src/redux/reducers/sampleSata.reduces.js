import {SAGA_ACTIONS} from "../../_constant"

const initialState = {}

export const sagaDataSampleReducer = (state=initialState, action) => {
    let error;
    switch(action.type){
        case SAGA_ACTIONS.GET_SAMPLE_DATA:
            return {...state, loading: true}
        case SAGA_ACTIONS.SAMPLE_DATA_SUCCESS:
            return {...state, payload: action.data, loading: false}
        case SAGA_ACTIONS.SAMPLE_DATA_FAILURE:
            return {...state, error: error, loading: false}
        default:
            return state
    }
}