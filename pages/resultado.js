import Head from 'src/components/head/Head';
import HeaderLogo from 'src/components/header-logo/HeaderLogo';
import QuizResult from 'src/components/quiz-result/QuizResult';

export default function Result() {
  return (
    <>
      <Head>
        <title>Resultado</title>
      </Head>
      <HeaderLogo />
      <QuizResult />
    </>
  );
}
