import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import reducers from '../reducers';

export default function () {
  let composeEnhancers = compose;
  if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // whitelist: ['user'],
    stateReconciler: autoMergeLevel2,
  };
  const persistedReducer = persistReducer(persistConfig, reducers);
  const enhancer = composeEnhancers(applyMiddleware(thunk));

  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);

  return {store, persistor};
}
