import React from 'react';
import PropTypes from 'prop-types';
import { getStorage } from 'src/utils/storage';
import { LS_USER_DATA_KEY } from 'src/utils/constants';

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = React.useState({
    email: '',
    name: '',
    quizStage: 0,
  });

  React.useEffect(() => {
    const userData = getStorage(LS_USER_DATA_KEY);
    const { name = '', email = '', quizStage = 0 } =
      userData !== null ? JSON.parse(userData) : {};

    setUser({
      email,
      name,
      quizStage,
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = React.useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserProvider, useUser };
