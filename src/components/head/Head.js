import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';

export default function Head({ children }) {
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:500,700&display=swap"
        rel="stylesheet"
      />
      {children}
    </NextHead>
  );
}

Head.defaultProps = {
  children: null,
};

Head.propTypes = {
  children: PropTypes.node,
};
