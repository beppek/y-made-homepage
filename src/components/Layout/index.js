import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import PageWrapper from './PageWrapper';
import GlobalStyles from './global.css';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="utf-8" />
        <title>Y Made</title>
        <description>Website of Y Made Builder</description>
        <link rel="canonical" href="https://ymade.com.au" />
      </Helmet>
      <GlobalStyles />
      <PageWrapper>{children}</PageWrapper>
    </Fragment>
  );
};

export default Layout;
