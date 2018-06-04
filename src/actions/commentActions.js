import Api from '../api/Api';
import * as types from './actionTypes';

export function loadCommentsSuccess(comments) {
  return  {
    type: types.LOAD_COMMENTS_SUCCESS,
    comments
  };
};

export function loadComments(postId) {
  return function (dispatch) {
    return Api.getComments(postId).then(comments => {
      dispatch(loadCommentsSuccess(comments));
    }).catch(error => {
      throw(error);
    });
  }
};

export function addCommentSuccess(comment) {
  return {
    type: types.ADD_COMMENT_SUCCESS,
    comment
  };
};


export function addComment(comment) {
  return function (dispatch) {
    Api.addComment(comment).then(comment => {
      dispatch(addCommentSuccess(comment));
    }).catch(error => {
      throw(error);
    });
  }
};

export function voteCommentSuccess(commentId, option) {
  return {
    type: types.VOTE_COMMENT_SUCCESS,
    commentId
  };
};

export const voteComment = (commentId, option) => dispatch =>
  Api.voteComment(commentId, option).then(comment => dispatch(voteCommentSuccess(comment)));
