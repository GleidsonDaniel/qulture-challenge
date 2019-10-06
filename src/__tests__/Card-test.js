import React from 'react';
import {shallow} from 'enzyme';
import Card from '~/components/Card';

describe('Card', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<Card />);
      expect(component).toMatchSnapshot();
    });
  });
});
