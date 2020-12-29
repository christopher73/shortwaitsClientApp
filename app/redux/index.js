import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';

import {persistedReducer} from './utils';

const middlewares = [
  /* other middlewares */
];

if (__DEV__ && !process.env.JEST_WORKER_ID) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const store = createStore(persistedReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

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
