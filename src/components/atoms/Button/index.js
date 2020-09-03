import React from 'react';
import { bool, node, string } from 'prop-types';
import { Button as MuiButton } from '@material-ui/core';

export default function Button({
  children,
  color,
  customization,
  disabled,
  type,
  variant,
}) {
  return (
    <MuiButton
      className={customization}
      color={color}
      disabled={disabled}
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
  type: string,
  variant: string,
};

Button.defaultProps = {
  children: null,
  color: 'default',
  customization: null,
  disabled: false,
  type: 'button',
  variant: 'text',
};
