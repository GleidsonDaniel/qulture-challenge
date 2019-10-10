import React from 'react';
import {shallow} from 'enzyme';
import {ActionButton} from '~/components';

describe('ActionButton', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<ActionButton />);
      expect(component).toMatchSnapshot();
    });
  });
});
