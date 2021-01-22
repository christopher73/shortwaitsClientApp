import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import {rootSaga} from '../sagas';
import {persistedReducer} from './utils';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
  /* other middlewares */
];

if (__DEV__ && !process.env.JEST_WORKER_ID) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const store = createStore(persistedReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};

/**
 * backup from redux util 
    import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    } from 'redux-persist';
    const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
    serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    });
    if (__DEV__ && !process.env.JEST_WORKER_ID) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
    }
    return middlewares;
    },
    });
 */
