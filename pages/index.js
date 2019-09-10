import React from 'react';
import Providers from 'src/context/Providers';
import Home from 'src/components/home/Home';

export default function Index() {
  return (
    <Providers>
      <Home />
    </Providers>
  );
}
