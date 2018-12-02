import {SAGA_ACTIONS} from "../../_constant"

const initialState = {}

export const sagaReducer = (state=initialState, action) => {
    switch (action.type) {
        case SAGA_ACTIONS.GET_NEWS:
            return {...state, loading: true}
        case SAGA_ACTIONS.NEWS_RECEIVED:
            return { ...state, news: action.json[0], loading: false }
        default:
            return state
    }
}

// export const sagaDataSampleReducer = (state=initialState, action) => {
//     switch(action.type){
//         case SAGA_ACTIONS.GET_SAMPLE_DATA:
//             return {...state, loading: true}
//         case SAGA_ACTIONS.SAMPLE_DATA_SUCCESS:
//             return {...state, payload: action.data, loading: false}
//         default:
//             return state
//     }
// }