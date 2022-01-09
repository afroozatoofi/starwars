import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducers } from "./../reducers/index";
import { getAllFilms } from "../actions/films";

/**
 * we use redux thunk here; Redux Thunk is 
 * middleware that allows you to return functions, 
 * rather than just actions, within Redux. 
 * This allows for delayed actions, 
 * including working with promises.
 */

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

//Initialize
store.dispatch(getAllFilms());

//subscribe
//store.subscribe(() => console.log(store.getState()));
