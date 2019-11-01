import React from 'react';
import PropTypes from 'prop-types';
import { Provider as ReakitProvider } from 'reakit';
import { UserProvider } from 'src/context/user-context';
import { QuizProvider } from 'src/context/quiz-context';
import 'src/styles/tailwind.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Providers({ children }) {
  return (
    <ReakitProvider>
      <UserProvider>
        <QuizProvider>{children}</QuizProvider>
      </UserProvider>
    </ReakitProvider>
  );
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};
