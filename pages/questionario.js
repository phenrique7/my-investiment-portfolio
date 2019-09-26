import React from 'react';
import Head from 'src/components/head/Head';
import QuizForm from 'src/components/quiz-form/QuizForm';
import HeaderLogo from 'src/components/header-logo/HeaderLogo';
import { UserProvider } from 'src/context/user-context';

export default function Quiz() {
  return (
    <UserProvider>
      <Head>
        <title>Questionário</title>
      </Head>
      <HeaderLogo />
      <QuizForm />
    </UserProvider>
  );
}
