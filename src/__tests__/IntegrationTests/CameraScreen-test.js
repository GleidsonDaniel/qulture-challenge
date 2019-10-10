import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';

import Camera from '~/screens/Camera';
import {store} from '~/store';

describe('Camera', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(
        <Provider store={store}>
          <Camera />
        </Provider>,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
