import React from 'react';

const Header = ({ children, ...props }) => {
  return <h2 {...props}>{children}</h2>;
};

export default Header;
