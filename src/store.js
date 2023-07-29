import { legacy_createStore as createStore } from "redux";
import allReducers from './redux';

const store = createStore(allReducers);

export default store;