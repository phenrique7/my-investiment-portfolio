import React from 'react';
import Head from 'src/components/head/Head';
import Home from 'src/components/home/Home';

export default function Index() {
  return (
    <>
      <Head>
        <title>Minha Carteira de Investimentos</title>
        <link
          href="https://fonts.googleapis.com/css?family=Vollkorn+SC:600,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Home />
    </>
  );
}
