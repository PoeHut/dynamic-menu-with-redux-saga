import {REQUEST_MENU, REQUEST_MENU_SUCCESS, REQUEST_MENU_ERROR} from '../types';

export const requestMenu = () => ({
  type: REQUEST_MENU,
});

export const requestMenuSuccess = payload => ({
  type: REQUEST_MENU_SUCCESS,
  payload,
});

export const requestMenuError = payload => ({
  type: REQUEST_MENU_ERROR,
  payload,
});
