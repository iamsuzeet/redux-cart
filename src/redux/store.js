import { createStore, combineReducers, applyMiddleware } from 'redux';
import cartReducer from './cart/cart-reducer';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  cart: cartReducer,
});

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
