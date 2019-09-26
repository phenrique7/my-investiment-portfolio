import React from 'react';
import App from 'next/app';
import Providers from 'src/context/Providers';

class NextApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Providers>
        <Component {...pageProps} />
      </Providers>
    );
  }
}

export default NextApp;
