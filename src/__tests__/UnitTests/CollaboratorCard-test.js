import React from 'react';
import {shallow} from 'enzyme';
import {CollaboratorCard} from '~/components';

describe('CollaboratorCard', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<CollaboratorCard />);
      expect(component).toMatchSnapshot();
    });
  });
});
