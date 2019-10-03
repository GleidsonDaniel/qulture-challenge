import thunk from 'redux-thunk';
import multi from 'redux-multi';
import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from './reducers';
import tron from '~/config/ReactotronConfig';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const middleware = applyMiddleware(multi, thunk);
const reactotron = __DEV__ && tron.createEnhancer();
const combine = __DEV__
  ? compose(
      middleware,
      reactotron,
    )
  : compose(middleware);

const finalStore = createStore(persistedReducer, combine);

export const store = finalStore;
export const persistor = persistStore(finalStore);
