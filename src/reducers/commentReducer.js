import * as types from '../actions/actionTypes'

export default function  comments(state = {}, action) {
  switch (action.type) {
    case types.LOAD_COMMENTS_SUCCESS:
      return action.comments;

    case types.ADD_COMMENT_SUCCESS:
      return state.concat(action.comment)

      case types.VOTE_COMMENT_SUCCESS:
        const updatedComments = state.comments.map(item => {
          if (item.id === action.commentId.id) {
            item.voteScore = action.commentId.voteScore;
          }
          return item;
        });
        return {
          ...state,
          comments: updatedComments
        };

    default:
      return state;
  }
}