import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '~/screens/Main';
import SelectedUser from '~/screens/SelectedUser';

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
