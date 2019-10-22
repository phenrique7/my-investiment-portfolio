import React from 'react';
import PropTypes from 'prop-types';
import Router, { useRouter } from 'next/router';
import { Box } from 'reakit';
import { isEmptyObject } from 'src/helpers';
import { getStorage } from 'src/utils/storage';
import { LS_USER_DATA_KEY } from 'src/utils/constants';
import Loader from 'react-loader-spinner';

const UserContext = React.createContext();

function UserProvider({ children }) {
  const { route } = useRouter();
  const [loading, setLoading] = React.useState(true);
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

    setLoading(false);
  }, [route]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {loading ? (
        <Box className="h-screen flex justify-center items-center">
          <Loader
            type="Oval"
            color="#A0AEC0"
            height={60}
            width={60}
          />
        </Box>
      ) : (
        children
      )}
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
