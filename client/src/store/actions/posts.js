import {apiCall} from '../../services/api';
import {LOAD_POSTS} from '../actionTypes';
import {LOAD_POST} from '../actionTypes';

export const loadPosts = posts => ({
  type: LOAD_POSTS,
  posts
});

export const loadPost = post => ({
  type: LOAD_POST,
  post
});

export const fetchPosts = () => {
  return dispatch => {
    return apiCall('GET', '/api/posts')
      .then(res => {
        dispatch(loadPosts(res));
      })
      .catch(err => {
        console.log(err);
      });  
  };
};

export const getPost = (id) => {
  return dispatch => {
    return apiCall('GET', `/api/posts/${id}`)
      .then(res => {
        dispatch(loadPost(res));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const newPost = (title, body) => (dispatch, getState) => {
  return apiCall('post', '/api/posts', {title, body})
    .then(res => {})
    .catch(err => console.log(err));
};