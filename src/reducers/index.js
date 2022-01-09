import { combineReducers } from "redux";

import { filmsReducer } from "./films";

/**
 * we provide combineReducers if the app grows more complex 
 * in the future and we'll want to split ours reducing 
 * function into separate functions, 
 * each managing independent parts of the state.

 * The combineReducers helper function turns an 
 * object whose values are different reducing functions 
 * into a single reducing function you can pass to createStore.
 */

export const reducers = combineReducers({
    films: filmsReducer
});
