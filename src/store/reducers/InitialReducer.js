import {INITIAL_STATE} from '../types';

const initialState = {};

const InitialReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case INITIAL_STATE:
      return {...initialState};
    default:
      return state;
  }
};

export default InitialReducer;
