import React from 'react';
import { shallow } from 'enzyme';

import '../../jest.config';
import Select from './Select';
import Option from './Option';

test('Should render select', () => {
  const select = shallow(
    <Select defaultValue={'1'}>
      <Option value={1} title={'Value 1'} />
    </Select>,
  );
  expect(select.props().defaultValue).toBe('1');
  expect(select.props().children.props.value).toBe(1);
  expect(select.props().children.props.title).toBe('Value 1');
});
