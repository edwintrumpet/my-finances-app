import React from 'react';
import {
  node,
  shape,
  string,
  number,
} from 'prop-types';
import { Paper as MuiPaper } from '@material-ui/core';

export default function Paper({
  children,
  customization,
  elevation,
  style,
}) {
  return (
    <MuiPaper className={customization} elevation={elevation} style={style}>
      {children}
    </MuiPaper>
  );
}

Paper.propTypes = {
  children: node,
  customization: string,
  elevation: number,
  style: shape(),
};

Paper.defaultProps = {
  children: null,
  customization: null,
  elevation: 1,
  style: null,
};
