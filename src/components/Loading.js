import React from 'react';
import { ProgressBarProvider } from 'react-redux-progress';
import { connect } from 'react-redux';

const Layout = ({ isProgressActive, children }) => (
  <div>
    <ProgressBarProvider isActive={isProgressActive} />
    {children}
  </div>
);

export default connect(
  state => ({ isProgressActive: state.progress.isActive })
)(Layout);