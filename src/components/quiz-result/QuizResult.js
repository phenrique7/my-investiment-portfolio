import React from 'react';
import Router from 'next/router';
import { useUser } from 'src/context/user-context';

export default function Result() {
  const {
    user: { name },
  } = useUser();

  React.useEffect(() => {
    if (!name) {
      Router.push('/');
    }
  }, [name]);

  return <div>result</div>;
}
