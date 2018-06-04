import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { loadPosts} from '../../actions/postActions'
import { withRouter } from 'react-router-dom'
import PostList from './postList'

class PostPage extends Component {

  componentWillMount() {
      this.props.loadPosts();
  }

  render() {
    const { posts, categories } = this.props
    return(
    <div className="col-md-12">
        <ul>
          <li><Link to={"/"} key="all"><button>All</button></Link></li>
          {
          categories && categories.length > 0 && categories.map( category =>(
            <li key={category.name}><Link to={`/${category.path}`}><button>{ category.name }</button></Link></li>
           ))
          }
        </ul>
      <div className="col-md-4">
        <PostList posts={posts} />
      </div>
    </div>)
  }
}

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts,
    categories: state.categories
  };
}

export default withRouter(connect(mapStateToProps, {loadPosts})(PostPage))