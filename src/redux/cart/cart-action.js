import * as actionTypes from '../actionTypes';

export const addItem = (item) => ({
  type: actionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: actionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItem = () => ({
  type: actionTypes.CLEAR_CART,
});
