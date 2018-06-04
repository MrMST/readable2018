import React, { Component } from 'react';
import Post from './components/posts/postPage'
import PostDetail from './components/posts/postDetailPage'
import { Route, Switch } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Post} />
        {/* <Route exact path="/addPost" component={AddPost} />
        <Route exact path="/:category/" component={ShowCategoryPosts} />
        <Route exact path="/editPost/:postId" component={EditPost} />
        <Route exact path="/editComment/:commentId" component={EditComment} /> */}
        <Route exact path="/:category/:post_id" component={PostDetail} />
      </Switch>
    );
  }
}

export default App;
