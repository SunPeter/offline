import { init } from '@rematch/core';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { createStore } from 'redux';
import history from '../utils/history';
import * as models from '../models';
import { createDemoPlugin } from './plugins/demo';

const store = init({
  name: 'appStore',
  plugins: [createDemoPlugin()],
  models,
  redux: {
    middlewares: [routerMiddleware(history)],
    createStore: (...args: any[]) => {
      // eslint-disable-next-line no-param-reassign
      args[0] = connectRouter(history)(args[0]);
      return (createStore as any)(...args);
    },
    rootReducers: {
      RESET: (_rootState, action) => {
        return action.payload;
      }
    }
  }
});

export default store;
