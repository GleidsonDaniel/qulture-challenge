import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import CameraReducer from './CameraReducer';

const reducers = combineReducers({user: UserReducer, camera: CameraReducer});

export default reducers;
