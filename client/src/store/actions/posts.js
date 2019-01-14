import {apiCall} from '../../services/api';
import {LOAD_POSTS, LOAD_POST, REMOVE_POST} from '../actionTypes';

export const loadPosts = posts => ({
  type: LOAD_POSTS,
  posts
});

export const loadPost = post => ({
  type: LOAD_POST,
  post
});

export const remove = id => ({
  type: REMOVE_POST,
  id
});

export const removePost = id => {
  return dispatch => {
    return dispatch(remove(id));
  };
};

export const deletePost = id => {
  return dispatch => {
    return apiCall('delete', `/api/posts/${id}`)
      .then(() => dispatch(remove(id)))
      .catch(err => {
        console.log(err);
      }); 
  };
};

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