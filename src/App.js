import React, { Component } from 'react';
import './App.scss';
import { history } from './_helpers/history';
import { Router, Route, Switch } from "react-router-dom";

import {LoginForm} from './_pages/LoginForm';
import {Header} from './_pages/Header';
import {Footer} from './_pages/Footer';
import Home from './_pages/TestSaga';
import {MyForm} from './_pages/FormikSaga'
import {Textarea, Radio, Checkbox} from './_pages/FormikSaga/NormalForm'
import {firstFormilk} from './_pages/FormikSaga/Formik1st'


import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from './redux/reducers';
import rootSaga from './_services/saga.services';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(
        sagaMiddleware,
        loggerMiddleware
    )
);
sagaMiddleware.run(rootSaga);
// ---
// import { store } from './_helpers/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            {/* <Route path="/" component={Textarea} />
            <Route path="/" component={Radio} />
            <Route path="/" component={Checkbox} />
            <Route path="/" component={MyForm} /> */}
            <Route path="/" component={firstFormilk} />
            {/* <Route path="/" component={Header} />
              <Switch>
                  <Route exact path="/" component={LoginForm} />
              </Switch>
            <Route path="/" component={Footer} /> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
