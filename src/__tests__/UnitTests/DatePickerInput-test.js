import React from 'react';
import {shallow} from 'enzyme';
import {DatePickerInput} from '~/components';

describe('DatePickerInput', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<DatePickerInput />);
      expect(component).toMatchSnapshot();
    });
  });
});
