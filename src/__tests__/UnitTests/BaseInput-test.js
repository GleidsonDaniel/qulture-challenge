import React from 'react';
import {shallow} from 'enzyme';
import {BaseInput} from '~/components';

describe('BaseInput', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<BaseInput />);
      expect(component).toMatchSnapshot();
    });
  });
});
