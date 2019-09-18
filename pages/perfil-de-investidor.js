import React from 'react';
import Providers from 'src/context/Providers';
import CustomerProfile from 'src/components/customer-profile/CustomerProfile';

export default function Index() {
  return (
    <Providers>
      <CustomerProfile />
    </Providers>
  );
}
