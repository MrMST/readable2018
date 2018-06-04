import fetch from 'cross-fetch'

const API = "http://localhost:3001";

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_CAT1: 'SHOW_CAT1',
  SHOW_CAT2: 'SHOW_CAT2'
}

export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts(posts) {
  return {
    type: REQUEST_POSTS,
    posts
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts( json) {
  return {
    type: RECEIVE_POSTS,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function fetchPosts() {
  return function(dispatch) {
    dispatch(requestPosts())
    return fetch(`${API}/posts` , { headers: { Authorization: "whatever-you-want" } })
      .then (
        response => response.json(),
        error => console.log('Error: ', error)
      )
      //.then(json => dispatch(receivePosts(json)))
  }
}