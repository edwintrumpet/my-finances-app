import React from 'react';
import { func, node, string } from 'prop-types';
import { IconButton as MuiIconButton } from '@material-ui/core';

export default function IconButton({
  aria,
  children,
  edge,
  handleClick,
}) {
  return (
    <MuiIconButton
      aria-label={aria}
      edge={edge}
      onClick={handleClick}
    >
      {children}
    </MuiIconButton>
  );
}

IconButton.propTypes = {
  aria: string,
  children: node,
  edge: string,
  handleClick: func,
};

IconButton.defaultProps = {
  aria: null,
  children: null,
  edge: null,
  handleClick: null,
};
