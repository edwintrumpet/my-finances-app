// This component does not work because it's not returning ref
import React from 'react';
import { node, string } from 'prop-types';
import { MenuItem as MuiMenuItem } from '@material-ui/core';

export default function MenuItem({ children, value }) {
  return <MuiMenuItem value={value}>{children}</MuiMenuItem>;
}

MenuItem.propTypes = {
  children: node,
  value: string,
};

MenuItem.defaultProps = {
  children: null,
  value: null,
};
