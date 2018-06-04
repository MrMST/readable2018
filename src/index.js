/*eslint-disable import/default */
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import reducer from './reducers'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import {loadPosts} from './actions/postActions'
import {loadCategories} from './actions/categoryActions';

const store = createStore (
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware( thunk )
)

store.dispatch(loadPosts());
store.dispatch(loadCategories());

ReactDOM.render(
  <Provider store = { store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
