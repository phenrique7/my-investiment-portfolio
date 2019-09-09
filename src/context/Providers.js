import React from 'react';
import { Provider as ReakitProvider } from 'reakit';
import PropTypes from 'prop-types';
import '../styles/tailwind.css';

export default function Providers({ children }) {
  return (
    <ReakitProvider>
      {children}
    </ReakitProvider>
  );
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};
