import cameraTypes from '~/store/types/cameraTypes';

export const setPhoto = param => ({
  type: cameraTypes.SET_PHOTO,
  payload: param,
});
