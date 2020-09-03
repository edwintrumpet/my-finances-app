import React from 'react';
import { Typography as MuiTypography } from '@material-ui/core';
import { node, string, shape } from 'prop-types';

export default function Typography({
  children,
  customization,
  style,
  variant,
}) {
  return (
    <MuiTypography
      className={customization}
      style={style}
      variant={variant}
    >
      {children}
    </MuiTypography>
  );
}

Typography.propTypes = {
  children: node,
  customization: string,
  style: shape(),
  variant: string,
};

Typography.defaultProps = {
  children: null,
  customization: null,
  style: null,
  variant: 'body1',
};
