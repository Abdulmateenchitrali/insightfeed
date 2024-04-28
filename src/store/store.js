import { init } from '@rematch/core';
import persistPlugin from '@rematch/persist';
import storage from 'redux-persist/lib/storage';
import createLoadingPlugin from "@rematch/loading"
import feed from './models/feed';
import alert from './notification/alert'

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['auth']
};

const store = init({
  models: {
    alert,
    feed
  },
  plugins: [persistPlugin(persistConfig), createLoadingPlugin()]
});

export default store;
