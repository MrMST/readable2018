import Api from '../api/Api';
import * as types from './actionTypes';

export function loadPostsSuccess(posts) {
  return {
    type: types.LOAD_POSTS_SUCCESS,
    posts
  };
}

export function loadPosts() {
  return function(dispatch) {
    return Api.getAllPosts().then(posts => {
      dispatch(loadPostsSuccess(posts));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadPostSuccess(posts) {
  return {
    type: types.LOAD_POST_SUCCESS,
    posts
  };
}

export function loadPost(id) {
  return function(dispatch) {
    return Api.getSinglePost(id).then(post => {
      dispatch(loadPostSuccess(post));
    }).catch(error => {
      throw(error);
    });
  };
}
