import React from 'react';
import { shape, string } from 'prop-types';
import { connect } from 'react-redux';

import { Auth, WalletsPlaceholder } from './screens';

function App({ user }) {
  if (!user) return <Auth />;
  return <WalletsPlaceholder />;
}

App.propTypes = {
  user: shape({
    name: string.isRequired,
  }),
};

App.defaultProps = {
  user: null,
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, null)(App);
