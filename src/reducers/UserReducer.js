import {
  SET_PROCESSING_USERS,
  SET_USER_LIST,
  SET_SELECTED_USER,
} from '../store/types/userTypes';

const initialState = {
  userList: [],
  selectedUser: null,
  processingUsers: false,
};

const UserReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'INITIAL_STATE':
      return initialState;
    case SET_USER_LIST:
      return {...state, userList: payload};
    case SET_SELECTED_USER:
      return {...state, selectedUser: payload};
    case SET_PROCESSING_USERS:
      return {...state, processingUsers: payload};
    default:
      return state;
  }
};

export default UserReducer;
