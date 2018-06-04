import { connect } from 'react-redux'
import PostList from '../components/PostList'
import { fetchPosts } from '../actions'

const getVisiblePosts = (posts, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return posts
    case 'SHOW_CAT1':
       return posts.filter(post => post.category === 'CAT1')
     case 'SHOW_CAT2':
       return posts.filter(post => post.category === 'CAT2')
  }
}

const mapStateToProps = (state) => {
  return {
    posts: fetchPosts(state.posts, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPostTitleClick: (id) => {
      dispatch(fetchPosts(id))
    }
  }
}

const VisiblePostList = connect( mapStateToProps, mapDispatchToProps ) ( PostList )

export default VisiblePostList