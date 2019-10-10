import React from 'react';
import {shallow} from 'enzyme';
import {FeedbackModal} from '~/components';

describe('FeedbackModal', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<FeedbackModal />);
      expect(component).toMatchSnapshot();
    });
  });
});
