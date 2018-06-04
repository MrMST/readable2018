import React from 'react';
import { Link } from 'react-router-dom'
import uuidv1 from 'uuid/v1'
import serializeForm from 'form-serialize'
import Timestamp from 'react-timestamp'
import AddComment from '../comments/addComment'

const PostShow = ({posts, comments, voteCommentDown, voteCommentUp}) => {

  return (
    <div className="post-wrapper">
      <div>Show Post</div>
      <div><Link to={"/"} key="back">Back</Link></div>
      {
          posts && posts.length > 0 && Object.keys(posts[0]).length > 0 && !posts[0].error ? (<div>
            {
              posts.filter( post => !post.deleted).map(post => (
                <div key={post.id}>
              <input type='text' name='pCategory' value={post.category} readOnly/>
              <input type='text' name='pTitle' value={post.title} readOnly/>
              <input type='text' name='pAuthor' value={post.author} readOnly/>
              <Timestamp time={ post.timestamp / 1000 } format='full' />
              <div>
                <button onClick={ () => this.voteUp(post.id) }>Up</button>
                Score { post.voteScore }
                <button onClick={ () => this.voteDown(post.id) }>Down</button>
              </div>
              <div> Comment count {post.commentCount} </div>
              <button onClick={ () => this.deletePost(post.id) }>Delete Post</button>
              <Link to={`/editpost/${post.id}`}><button>Edit Post</button></Link><br/>
              <textarea name='pContent' value={post.body} readOnly/>
              <div className="comments-wrapper">
                {
                  comments && comments.length > 0 && comments.filter ( comment => !comment.deleted ).map( comment => (
                    <div key={uuidv1()} className="comment">
                      <div>{comment.author}</div>
                      <div>{comment.body}</div>
                      <Timestamp time={ comment.timestamp / 1000 } format='full' />
                      <div>
                        <button onClick={ () => voteCommentUp(comment.id) }>Up</button>
                        Score {comment.voteScore}
                        <button onClick={ () => voteCommentDown(comment.id) }>Down</button>
                      </div>
                      <Link to={`/editcomment/${comment.id}`}><button>Edit Comment</button></Link>
                      <button onClick={ () => this.deleteComment(comment.id) }>Delete Comment</button>
                    </div>
                  ))
                }
                <AddComment
                  post={posts}
                />
              </div>
            </div>
              ))
            }
            </div>) : (<div>Post not found! 404 <Link to={"/"} key="back">Back</Link></div>)
        }
    </div>
  );
};

export default PostShow;