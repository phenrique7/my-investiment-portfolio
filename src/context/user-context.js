import React from 'react';
import Router, { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { isEmptyObject } from 'src/helpers';
import { getStorage } from 'src/utils/storage';
import { LS_USER_DATA_KEY } from 'src/utils/constants';

const UserContext = React.createContext();

function UserProvider({ children }) {
  const { route } = useRouter();
  const [user, setUser] = React.useState({
    email: '',
    name: '',
    quizStage: 0,
    finalScore: 0,
  });

  React.useEffect(() => {
    const userDataStorage = getStorage(LS_USER_DATA_KEY);
    const userData =
      userDataStorage !== null ? JSON.parse(userDataStorage) : {};

    if (!isEmptyObject(userData)) {
      setUser({
        email: userData.email,
        name: userData.name,
        quizStage: userData.quizStage,
      });
    } else if (route === '/questionario' || route === '/resultado') {
      Router.push('/');
    }
  }, [route]);

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
