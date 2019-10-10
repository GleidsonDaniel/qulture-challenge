import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';

import SelectedUser from '~/screens/SelectedUser';
import {store} from '~/store';

describe('SelectedUser', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(
        <Provider store={store}>
          <SelectedUser />
        </Provider>,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
