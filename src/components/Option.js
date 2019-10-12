import React from 'react';

const Option = ({ value, title, ...props }) => {
  return (
    <option value={value} {...props}>
      {title}
    </option>
  );
};

export default Option;
