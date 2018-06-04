import React, { Component } from "react"
import {connect} from 'react-redux'
import { Link } from "react-router-dom"
import uuidv1 from "uuid/v1"
import serializeForm from 'form-serialize'
import { addComment } from '../../actions/commentActions'

class AddComment extends Component {

  state = {
    author: "",
    body: ""
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSaveComment = (event) => {
    event.preventDefault();
    const values = serializeForm(event.target, { hash: true })
    this.props.addComment(values);
    this.setState({
      author: "",
      body: ""
    });
  }

  render() {
    const post = this.props.posts[0]
    return (
      <div className="add-comment-wrapper">
      <form onSubmit={ this.handleSaveComment }>
        <input type="hidden"  name="id" value={uuidv1()}/>
        <input type="hidden"  name="parentId" value={post.id}/>
        <input type="hidden"  name="timestamp" value={Date.now()}/>
        <input type="hidden"  name="deleted" value="false"/>
        <input type="hidden"  name="parentDeleted" value="false"/>
        <input type="hidden"  name="voteScore" value="1"/>

        <input type='text' name='author' value={this.state.author} onChange={this.handleInputChange}/>
        <textarea name='body' value={this.state.body}  onChange={this.handleInputChange}/>
        <button>Add Comment</button>
      </form>
    </div>
    );
  }

}

const mapStateToProps = ({ posts }) => ({
  posts
});

const mapDispatchToProps = dispatch => ({
  // getPost: postId =>
  //   dispatch(getSinglePost(postId)).then(() =>
  //     dispatch(fetchComments(postId))
  //   ),
  // deletePost: postId => dispatch(sendDeletePost(postId)),
  // votePost: (postId, option) => dispatch(sendVotePost(postId, option)),
  addComment: comment => dispatch(addComment(comment)),
  // deleteComment: commentId => dispatch(fetchDeleteComment(commentId)),
  // voteComment: (commentId, option) => dispatch(voteComment(commentId, option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);