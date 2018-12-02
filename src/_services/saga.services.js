import {call, put, takeLatest, all} from 'redux-saga/effects';
import {API_CONSTANT,SAGA_ACTIONS} from '../_constant'

// --- setup saga 3
function fetchSampleDataApi() {
    return fetch(API_CONSTANT.apiSample02)
    .then(response => ({ response }))
    .catch(error => ({ error }))
}

function* fetchDataSample(){
    // --- setup saga 3
    const { response, error } = yield call(fetchSampleDataApi);
    if (response)
        yield put({ type: SAGA_ACTIONS.SAMPLE_DATA_SUCCESS, response })
    else
        yield put({ type: SAGA_ACTIONS.SAMPLE_DATA_FAILURE, error })
    // setup saga 2 ---
    // const error =" Failed to fetch";
    // const data = yield fetch(API_CONSTANT.apiSample02)
    // .then(response => response.json())
    // .catch(
    //     yield put({type: SAGA_ACTIONS.SAMPLE_DATA_FAILURE, error})
    // );
    // yield put({type: SAGA_ACTIONS.SAMPLE_DATA_SUCCESS, data})
    // setup saga 1---
    // const data = yield fetch(API_CONSTANT.apiSample02)
    // .then(response => response.json());

    // yield put({type: SAGA_ACTIONS.SAMPLE_DATA_SUCCESS, data})
}

function* actionWatcherDataSample(){
    yield takeLatest(SAGA_ACTIONS.GET_SAMPLE_DATA, fetchDataSample)
}

function* fetchNews(){
    const json = yield fetch(API_CONSTANT.apiSample01)
    .then(response => response.json(),);
    //  As you can see we don’t even need to write action “NEWS_RECEIVED” in actions/index.js file
    // because it’s fully described here.
    // By now let reducer know how to deal with this type of actions “NEWS_RECEIVED”.

    yield put ({type: SAGA_ACTIONS.NEWS_RECEIVED, json: json.articles,})
}

function* actionWatcher(){
    yield takeLatest(SAGA_ACTIONS.GET_NEWS, fetchNews)
}

function* rootSaga(){
    yield all([
        actionWatcher(),
        actionWatcherDataSample()
    ]);
}

export default rootSaga