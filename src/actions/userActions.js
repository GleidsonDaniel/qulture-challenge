import userTypes from '~/store/types/userTypes';
import {getUsers, postUser, patchUser} from '~/services/requests/userRequests';

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

export const editUser = user => async (dispatch, getState) => {
  const state = getState();
  dispatch(processingUsers(true));
  try {
    const editedUser = await patchUser(user);
    const userList = await state.user.userList.map(mapedUser =>
      mapedUser.id === editedUser.id ? editedUser : mapedUser,
    );
    dispatch({type: userTypes.SET_USER_LIST, payload: userList});
    dispatch(processingUsers(false));
  } catch (e) {
    dispatch(processingUsers(false));
  }
};

export const saveNewUser = user => async (dispatch, getState) => {
  const state = getState();
  dispatch(processingUsers(true));
  try {
    const newUser = await postUser(user);
    dispatch({
      type: userTypes.SET_USER_LIST,
      payload: [newUser, ...state.user.userList],
    });
    dispatch(processingUsers(false));
  } catch (e) {
    dispatch(processingUsers(false));
  }
};

export const resetUsers = () => async dispatch => {
  dispatch(processingUsers(true));
  dispatch({type: userTypes.SET_USER_LIST, payload: []});
  try {
    const users = await getUsers();
    dispatch({type: userTypes.SET_USER_LIST, payload: users});
    dispatch(processingUsers(false));
  } catch (e) {
    dispatch(processingUsers(false));
  }
};
