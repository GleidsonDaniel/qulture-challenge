import React from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from 'react-navigation-hooks';

import {setPhoto} from '~/actions/cameraActions';

import CameraComponent from './Camera';

export default function Camera() {
  const dispatch = useDispatch();
  const {goBack} = useNavigation();

  const handleImage = image => {
    dispatch(setPhoto(image));
    goBack();
  };

  return <CameraComponent onPress={image => handleImage(image)} />;
}
