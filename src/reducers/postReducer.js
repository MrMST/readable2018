import * as types from '../actions/actionTypes'

const initialState =  {
  posts: []
}

export default function posts(state = initialState.posts, action) {
  switch(action.type) {

    case types.LOAD_POSTS_SUCCESS:
      return action.posts;

      case types.LOAD_POST_SUCCESS:
      return [action.posts];

    default:
      return state;
  }
}