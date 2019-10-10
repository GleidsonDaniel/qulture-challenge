import cameraTypes from '../store/types/cameraTypes';

const initialState = {
  photo: [],
};

const CameraReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'INITIAL_STATE':
      return initialState;
    case cameraTypes.SET_PHOTO:
      return {...state, photo: payload};
    default:
      return state;
  }
};

export default CameraReducer;
