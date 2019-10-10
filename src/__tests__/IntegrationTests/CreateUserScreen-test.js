import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';

import CreateUser from '~/screens/CreateUser';
import {store} from '~/store';

describe('CreateUser', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(
        <Provider store={store}>
          <CreateUser />
        </Provider>,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
