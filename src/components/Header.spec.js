import React from 'react';
import { shallow } from 'enzyme';

import '../../jest.config';
import Header from './Header';

test('Should render Header', () => {
  const header = shallow(<Header>Value 1</Header>);
  const h2 = header.find('h2');
  expect(h2).toHaveLength(1);
  expect(header.props().children).toBe('Value 1');
});
