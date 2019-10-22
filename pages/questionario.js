import React from 'react';
import Head from 'src/components/head/Head';
import QuizForm from 'src/components/quiz-form/QuizForm';
import HeaderLogo from 'src/components/header-logo/HeaderLogo';

export default function Quiz() {
  return (
    <>
      <Head>
        <title>Questionário</title>
      </Head>
      <HeaderLogo />
      <QuizForm />
    </>
  );
}
