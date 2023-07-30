import { legacy_createStore as createStore, applyMiddleware } from "redux";
import allReducers from './redux';
import createSagaMiddleware from 'redux-saga'
import { routeSaga } from "./sagas";
const sagaMiddleware = createSagaMiddleware()


const store = createStore(allReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(routeSaga)
const action = type => store.dispatch({type})
export default store;