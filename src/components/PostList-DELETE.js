import React from 'react'
import Post from './Post'
import PropTypes from 'prop-types'

const PostList = ({ posts, onPostTitleClick}) => {
  if(posts.length === 0) {
    return <div>Add Posts</div>
  }

  console.log(posts)

  return <ul>
    {/* {
      posts.map( post =>
        <Post
          key={post.id}
          {...post}
          onClick={()=>onPostTitleClick(post.id)}
        />
      )
    } */}
  </ul>
}

// PostList.propTypes = {
//   posts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired,
//   onPostTitleClick: PropTypes.func.isRequired
// }

export default PostList