import userTypes from '~/store/types/userTypes';
import {
  getUsers,
  postUser,
  deleteUserById,
  patchUser,
} from '~/services/requests/userRequests';

export const processingUsers = param => ({
  type: userTypes.SET_PROCESSING_USERS,
  payload: param,
});

export const requestAllUsers = () => async dispatch => {
  dispatch(processingUsers(true));
  try {
    const users = await getUsers();
    dispatch({type: userTypes.SET_USER_LIST, payload: users});
    dispatch(processingUsers(false));
  } catch (e) {
    dispatch(processingUsers(false));
  }
};

export const setSelectedUser = user => ({
  type: userTypes.SET_SELECTED_USER,
  payload: user,
});

export const saveNewUser = user => async (dispatch, getState) => {
  dispatch(processingUsers(true));
  try {
    const users = await postUser(user);
    // dispatch({type: SET_USER_LIST, payload: users});
    dispatch(processingUsers(false));
  } catch (e) {
    dispatch(processingUsers(false));
  }
};

export const editUser = id => async (dispatch, getState) => {
  dispatch(processingUsers(true));
  try {
    const users = await patchUser(id);
    // dispatch({type: SET_USER_LIST, payload: users});
    dispatch(processingUsers(false));
  } catch (e) {
    dispatch(processingUsers(false));
  }
};

export const deleteUser = id => async (dispatch, getState) => {
  dispatch(processingUsers(true));
  try {
    const users = await deleteUserById(id);
    // dispatch({type: SET_USER_LIST, payload: users});
    dispatch(processingUsers(false));
  } catch (e) {
    dispatch(processingUsers(false));
  }
};
