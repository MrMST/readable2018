import { combineReducers } from 'redux'
import posts from './postReducer'
import comments from './commentReducer'
import categories from './categoryReducer'

export default combineReducers({
  posts,
  comments,
  categories
})