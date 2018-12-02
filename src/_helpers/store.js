import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../redux/reducers';
import rootSaga from '../_services';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

sagaMiddleware.run(rootSaga);

export const store = createStore(
    rootReducer,
    applyMiddleware(
        sagaMiddleware,
        loggerMiddleware
    )
);
// ---
// import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
// import rootReducer from '../redux/reducers';

// const loggerMiddleware = createLogger();

// export const store = createStore(
//     rootReducer,
//     applyMiddleware(
//         thunkMiddleware,
//         loggerMiddleware
//     )
// );