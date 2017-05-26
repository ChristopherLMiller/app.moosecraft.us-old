/*
Custom Redux store creation.  Instead of using the default Apollo store,
we'll create our own for each request so that we can easily layer in our
own reducers for store state outside of Apollo
*/

// ----------------------
// IMPORTS
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import appReducer from 'src/redux/reducers';
// ----------------------

export default function createNewStore(apolloClient) {
  const loggerMiddleware = createLogger();

  const rootReducer = combineReducers({
    apollo: apolloClient.reducer(),
    app: appReducer,
  });

  const store = createStore(
   rootReducer,
    // Initial server state, provided by the server.  Only relevant in the
    // browser -- on the server, we'll start with a blank object
    // eslint-disable-next-line no-underscore-dangle
    !SERVER ? window.__STATE__ : {}, // initial state
    compose(
        applyMiddleware(apolloClient.middleware(), loggerMiddleware, thunkMiddleware),
        // Enable Redux Devtools on the browser, for easy state debugging
        // eslint-disable-next-line no-underscore-dangle
        (!SERVER && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    ),
  );

  return store;
}
