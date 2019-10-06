import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';

import Main from '~/screens/Main';
import {store} from '~/store';

describe('Main', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(
        <Provider store={store}>
          <Main />
        </Provider>,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
