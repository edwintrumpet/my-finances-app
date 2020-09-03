import React from 'react';
import { node, string } from 'prop-types';
import { InputLabel as MuiInputLabel } from '@material-ui/core';

export default function InputLabel({ children, id }) {
  return <MuiInputLabel id={id}>{children}</MuiInputLabel>;
}

InputLabel.propTypes = {
  children: node,
  id: string,
};

InputLabel.defaultProps = {
  children: null,
  id: null,
};
