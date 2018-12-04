import { Action, Plugin } from '@rematch/core';

export function createDemoPlugin(): Plugin {
  return {
    config: {
      redux: {
        middlewares: [
          store => next => (action: Action) => {
            return next(action);
          }
        ]
      }
    }
  };
}
