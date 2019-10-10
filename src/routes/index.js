import {Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '~/screens/Main';
import SelectedUser from '~/screens/SelectedUser';
import Camera from '~/screens/Camera';
import CreateUser from '~/screens/CreateUser';

import {qultureGreen} from '~/helpers/colors';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: 'Lista de Colaboradores',
        },
      },
      SelectedUser: {
        screen: SelectedUser,
        navigationOptions: {
          title: 'Colaborador',
        },
      },
      Camera: {
        screen: Camera,
        navigationOptions: {
          header: Platform.OS === 'ios' ? true : null,
          title: 'Camera',
        },
      },
      CreateUser: {
        screen: CreateUser,
        navigationOptions: {
          title: 'Novo colaborador',
        },
      },
    },
    {
      initialRouteName: 'Main',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: qultureGreen,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
        },
      },
    },
  ),
);

export default Routes;
