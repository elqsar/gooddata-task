import React from 'react';
import { shallow } from 'enzyme';

import '../../jest.config';
import Option from './Option';

test('Should render Option', () => {
  const component = shallow(<Option value={1} title="Value 1" />);
  const option = component.find('option');
  expect(option).toHaveLength(1);
  expect(component.props().value).toBe(1);
});
