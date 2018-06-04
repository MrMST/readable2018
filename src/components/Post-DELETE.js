import React from 'react'
import PropTypes from 'prop-types'

const Post = ({ onClick, text }) => (
  <li
    onClick={onClick}
  >
    {text}
  </li>
)

Post.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Post