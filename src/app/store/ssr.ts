import { init } from '@rematch/core';
import { produce } from 'immer';
import * as models from '../models';

export function createStore() {
  const store = init({
    name: 'appStoreSSR',
    models,
    redux: {
      rootReducers: {
        stateFromSSR: (rootState: Root, action) => {
          return produce<Root>(rootState, draft => {
            Object.keys(action.payload).forEach(d => {
              draft[d] = action.payload[d];
            });
          });
        },
        RESET: (_rootState, action) => {
          return action.payload;
        }
      }
    }
  });
  return store;
}
