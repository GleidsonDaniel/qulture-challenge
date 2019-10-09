import api from '../api';

export const getUsers = async () => {
  try {
    const {
      data: {users},
    } = await api.get('v1/users');
    return users;
  } catch (e) {
    return e;
  }
};

export const getUserById = async id => {
  try {
    const {
      data: {user},
    } = await api.get(`v1/users/${id}`);
    return user;
  } catch (e) {
    return e;
  }
};

export const deleteUserById = async id => {
  try {
    const {data} = await api.delete(`v1/users/${id}`);
    return data;
  } catch (e) {
    return e;
  }
};

export const postUser = async user => {
  try {
    const {data} = await api.post('v1/users', user);
    return data;
  } catch (e) {
    return e;
  }
};

export const patchUser = async user => {
  try {
    const {data} = await api.patch(`v1/users/${user.id}`, user);
    return data.user;
  } catch (e) {
    return e;
  }
};
