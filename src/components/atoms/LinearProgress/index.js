import React from 'react';
import { string } from 'prop-types';
import { LinearProgress as MuiLinearProgress } from '@material-ui/core';

export default function LinearProgress({ customization }) {
  return <MuiLinearProgress className={customization} />;
}

LinearProgress.propTypes = {
  customization: string,
};

LinearProgress.defaultProps = {
  customization: null,
};
