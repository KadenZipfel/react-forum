import {apiCall} from '../../services/api';
import {SET_CURRENT_USER} from '../actionTypes';
import {removeError} from './errors';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
};

export function authUser(type, userData) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      return apiCall('post', `/api/auth/${type}`, userData).then(({...user}) => {
        dispatch(setCurrentUser(user));
        dispatch(removeError());
        resolve();
      }).catch(err => {
        console.log(err);
        reject();
      }); 
    });
  }
};

export function logout() {
  return dispatch => {
    dispatch(setCurrentUser({}));
  }
}