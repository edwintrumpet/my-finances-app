import React from 'react';
import { string } from 'prop-types';
import { AccountBalanceWallet } from '@material-ui/icons';

export default function Logo({ color, customization }) {
  return <AccountBalanceWallet color={color} className={customization} />;
}

Logo.propTypes = {
  color: string,
  customization: string,
};

Logo.defaultProps = {
  color: 'primary',
  customization: null,
};
