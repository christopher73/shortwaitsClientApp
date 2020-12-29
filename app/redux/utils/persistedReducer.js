import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as reducers from '../ducks';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme'],
};

const rootReducer = combineReducers(reducers);

export const persistedReducer = persistReducer(persistConfig, rootReducer);

/*
export default ( initialState ) => ( reducerMap ) => ( state = initialState, action ) => {
const reducer = reducerMap[ action.type ];
return reducer ? reducer( state, action ) : state;
};
 */
