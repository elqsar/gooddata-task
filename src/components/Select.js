import React, { memo } from 'react';

const Select = ({ defaultValue = 0, onchange = () => {}, children = [] }) => {
  return (
    <select defaultValue={defaultValue} onChange={onchange}>
      {children}
    </select>
  );
};

export default memo(Select, (from, to) => {
  // to avoid unnecessary re-render
  return from.children.length === to.children.length;
});
