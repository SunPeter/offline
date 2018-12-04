import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
// import { RematchStore } from '@rematch/core';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { createStore as internalCreateStore } from './app/store/ssr';
import Router from './app/Router';

export const createStore = internalCreateStore;

export function render(store: any, location: string, context: any = {}) {
  return ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={location} context={context}>
        <Router />
      </StaticRouter>
    </Provider>
  );
}
