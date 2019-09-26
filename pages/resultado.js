import Head from 'src/components/head/Head';
import HeaderLogo from 'src/components/header-logo/HeaderLogo';
import QuizResult from 'src/components/quiz-result/QuizResult';
import { UserProvider } from 'src/context/user-context';

export default function Result() {
  return (
    <UserProvider>
      <Head>
        <title>Resultado</title>
      </Head>
      <HeaderLogo />
      <QuizResult />
    </UserProvider>
  );
}
