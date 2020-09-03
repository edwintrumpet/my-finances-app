import React from 'react';
import { node, string, number } from 'prop-types';
import { Paper as MuiPaper } from '@material-ui/core';

export default function Paper({
  children,
  customization,
  elevation,
}) {
  return (
    <MuiPaper className={customization} elevation={elevation}>
      {children}
    </MuiPaper>
  );
}

Paper.propTypes = {
  children: node,
  customization: string,
  elevation: number,
};

Paper.defaultProps = {
  children: null,
  customization: null,
  elevation: 1,
};
