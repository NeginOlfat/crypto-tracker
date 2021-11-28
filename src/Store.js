import { Platform } from "react-native";
import {createStore, applyMiddleware, compose} from 'redux';
import devTools from 'remote-redux-devTools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
//import logger from 'redux-loggger';
import RootReducer from './Reducers';

const Store =createStore(
    RootReducer,
    compose(
        middleware,
        devTools({
            name: Platform.OS,
            hostname: 'localhost',
            port: 5678
        }),
    )
)

export default Store;