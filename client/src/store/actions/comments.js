import {apiCall} from '../../services/api';

export const newComment = (comment, id, user) => (dispatch, getState) => {
  return apiCall('post', `/api/posts/${id}`, {comment, id, user})
    .then(res => {})
    .catch(err => console.log(err));
};