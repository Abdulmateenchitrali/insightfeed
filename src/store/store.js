import { init } from '@rematch/core';
import persistPlugin from '@rematch/persist';
import storage from 'redux-persist/lib/storage';
import createLoadingPlugin from "@rematch/loading"
import feed from './models/feed';
import alert from './notification/alert'
import personalizedFeed from './models/personalizedFeed';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['personalizedFeed']
};

const store = init({
  models: {
    alert,
    feed,
    personalizedFeed
  },
  plugins: [persistPlugin(persistConfig), createLoadingPlugin()]
});

export default store;
