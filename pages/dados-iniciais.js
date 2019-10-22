import React from 'react';
import Head from 'src/components/head/Head';
import EntryData from 'src/components/entry-data/EntryData';
import HeaderLogo from 'src/components/header-logo/HeaderLogo';

export default function Index() {
  return (
    <>
      <Head>
        <title>Dados iniciais</title>
      </Head>
      <HeaderLogo />
      <EntryData />
    </>
  );
}
