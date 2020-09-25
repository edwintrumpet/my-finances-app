import React from 'react';
import {
  bool,
  func,
  node,
  string,
} from 'prop-types';
import { Button as MuiButton } from '@material-ui/core';

export default function Button({
  children,
  color,
  customization,
  disabled,
  handleClick,
  type,
  variant,
}) {
  return (
    <MuiButton
      className={customization}
      color={color}
      disabled={disabled}
      onClick={handleClick}
      type={type}
      variant={variant}
    >
      {children}
    </MuiButton>
  );
}

Button.propTypes = {
  children: node,
  color: string,
  customization: string,
  disabled: bool,
  handleClick: func,
  type: string,
  variant: string,
};

Button.defaultProps = {
  children: null,
  color: 'default',
  customization: null,
  disabled: false,
  handleClick: null,
  type: 'button',
  variant: 'text',
};
