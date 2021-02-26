import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userAuth, userData} from '../ducks';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const rootReducer = combineReducers(
  // auth: require('../ducks/auth/reducers').reducer,
  {userData, userAuth},
);

export const persistedReducer = persistReducer(persistConfig, rootReducer);

/*
export default ( initialState ) => ( reducerMap ) => ( state = initialState, action ) => {
const reducer = reducerMap[ action.type ];
return reducer ? reducer( state, action ) : state;
};
 */
