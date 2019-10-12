import React, { memo } from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  display: inline;
  font-size: 1.5rem;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  border: 1px solid #aaa;

  &:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    color: #222;
    outline: none;
  }

  &:hover {
    border-color: #888;
  }
`;

const Select = ({ defaultValue = 0, onchange = () => {}, children = [], ...props }) => {
  return (
    <StyledSelect defaultValue={defaultValue} onChange={onchange} {...props}>
      {children}
    </StyledSelect>
  );
};

export default memo(Select, (from, to) => {
  // to avoid unnecessary re-render
  return from.children.length === to.children.length;
});
