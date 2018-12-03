import React, { Fragment } from 'react';
import PageWrapper from './PageWrapper';
import GlobalStyles from './global.css';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyles />
      <PageWrapper>{children}</PageWrapper>
    </Fragment>
  );
};

export default Layout;
