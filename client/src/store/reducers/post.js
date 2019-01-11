import {LOAD_POST} from '../actionTypes';

const post = (state = [], action) => {
  switch(action.type) {
    case LOAD_POST:
      return {...action.post};
    default: 
      return state;
  }
}

export default post;