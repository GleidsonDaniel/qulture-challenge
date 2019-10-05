import {
  INITIAL_STATE,
  SET_FETCHING_USERS_USER_REDUCER,
  SET_USER_LIST_USER_REDUCER,
  SET_SELECTED_USER_USER_REDUCER,
} from '../store/types';

const initialState = {
  userList: [],
  selectedUser: {
    id: 0,
    name: '',
    email: '',
    photo_url: '',
    admission_date: '',
    job_title: '',
    created_at: '',
    updated_at: '',
  },
  fetchingUsers: false,
};

const UserReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case INITIAL_STATE:
      return initialState;
    case SET_USER_LIST_USER_REDUCER:
      return {...state, userList: payload};
    case SET_SELECTED_USER_USER_REDUCER:
      return {...state, selectedUser: payload};
    case SET_FETCHING_USERS_USER_REDUCER:
      return {...state, fetchingUsers: payload};
    default:
      return state;
  }
};

export default UserReducer;
