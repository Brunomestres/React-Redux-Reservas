import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const enhacer = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhacer);

sagaMiddleware.run(rootSaga);

export default store;
