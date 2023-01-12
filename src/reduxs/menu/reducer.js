import {REQUEST_MENU, REQUEST_MENU_SUCCESS, REQUEST_MENU_ERROR} from '../types';

const initialState = {
  menus: [],
  loading: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_MENU:
      return {...state, loading: true};
    case REQUEST_MENU_SUCCESS:
      return {...state, menus: [...action.payload], loading: false};
    case REQUEST_MENU_ERROR:
      return {...state, loading: false, error: true};

    default:
      return state;
  }
};
