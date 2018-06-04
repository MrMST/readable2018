import Api from '../api/Api';
import * as types from './actionTypes';

export function loadCategoriesSuccess(categories) {
  return  {
    type: types.LOAD_CATEGORIES_SUCCESS,
    ...categories
  };
};

export function loadCategories() {
  return function (dispatch) {
    return Api.getCategories().then(categories => {
      dispatch(loadCategoriesSuccess(categories));
    }).catch(error => {
      throw(error);
    });
  }
};
