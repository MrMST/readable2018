import React, { Component } from 'react'
import {connect} from 'react-redux'
import { loadPost} from '../../actions/postActions'
import { loadComments, voteComment } from '../../actions/commentActions'
import PostShow from './postShow'

class PostDetailPage extends Component {

  componentDidMount() {
    this.props.getPost(this.props.match.params.post_id);
  }

  voteCommentUp = (commentId) => {
    this.props.voteComment(commentId, "upVote");
  };

  voteCommentDown = (commentId) => {
    this.props.voteComment(commentId, "downVote");
  };

  render() {
    const { posts, comments } = this.props

    return(
    <div className="col-md-12">
      <h1>Posts</h1>
      <div className="col-md-4">
        <PostShow
          posts={posts}
          comments={comments}
          voteCommentUp={this.voteCommentUp}
          voteCommentDown={this.voteCommentDown}
        />
      </div>
    </div>)
  }
}

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

const mapDispatchToProps = dispatch => ({
  getPost: (postId) =>
    dispatch(loadPost(postId)).then(() =>
      dispatch(loadComments(postId))
    ),
    voteComment: (commentId, option) => dispatch(voteComment(commentId, option))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailPage)