import React from 'react';
import {View} from 'react-native';

import {BaseInput} from '~/components';

// import { Container } from './styles';

export default function SelectedUser() {
  return (
    <View style={{padding: 10}}>
      <BaseInput />
      <BaseInput />
    </View>
  );
}
