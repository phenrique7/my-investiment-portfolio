import React from 'react';
import { Provider as ReakitProvider } from 'reakit';
import { UserProvider } from 'src/context/user-context';
import PropTypes from 'prop-types';
import 'src/styles/tailwind.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Providers({ children }) {
  return (
    <ReakitProvider>
      <UserProvider>{children}</UserProvider>
    </ReakitProvider>
  );
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};
