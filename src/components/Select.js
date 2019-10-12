import React from 'react';

const Select = props => {
  return (
    <select defaultValue={props.defaultValue} onChange={props.onchange}>
      {props.children}
    </select>
  );
};

export default Select;
