// import {put, takeLatest, all} from 'redux-saga/effects';
// import {SAGA_ACTIONS} from '../../_constant'
import { combineReducers } from 'redux';

import { sagaReducer } from './saga.reduces';
import {sagaDataSampleReducer} from './sampleSata.reduces';

const rootReducer = combineReducers({
    sagaReducer,
    sagaDataSampleReducer
});

export default rootReducer;

// function* fetchNews(){
//     const json = yield fetch('https://newsapi.org/v1/articles?source= cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
//     .then(response => response.json(),);
//     //  As you can see we don’t even need to write action “NEWS_RECEIVED” in actions/index.js file
//     // because it’s fully described here.
//     // By now let reducer know how to deal with this type of actions “NEWS_RECEIVED”.

//     yield put ({type: SAGA_ACTIONS.NEWS_RECEIVED, fetchNews})
// }

// function* actionWatcher(){
//     yield takeLatest(SAGA_ACTIONS.GET_NEWS, fetchNews)
// }

// function* rootSaga(){
//     yield all([
//         actionWatcher(),
//     ]);
// }

// export default rootSaga
// ---
// import { combineReducers } from 'redux';

// import { accountsReducer,permissionReducer } from './auth.reducers';
// import { sagaReducer } from './saga.reduces'
// const rootReducer = combineReducers({
//     accountsReducer,
//     permissionReducer,
//     sagaReducer
// });

// export default rootReducer;