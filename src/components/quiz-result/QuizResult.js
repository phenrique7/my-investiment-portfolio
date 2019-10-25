import React from 'react';
import Router, { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import { Box } from 'reakit';
import { Button } from 'src/components/button/Button';
import ResultChart from 'src/components/result-chart/ResultChart';
import { useUser } from 'src/context/user-context';
import investorProfileDescription from 'public/static/investor-profile-description.json';
import {
  CONSERVATIVE_PROFILE_LIMIT,
  AGRESSIVE_PROFILE_LIMIT,
} from 'src/utils/constants';

const data = [
  {
    id: 'rust',
    label: 'rust',
    value: 5,
    color: 'hsl(350, 70%, 50%)',
  },
  {
    id: 'ruby',
    label: 'ruby',
    value: 15,
    color: 'hsl(87, 70%, 50%)',
  },
  {
    id: 'elixir',
    label: 'elixir',
    value: 25,
    color: 'hsl(62, 70%, 50%)',
  },
  {
    id: 'make',
    label: 'make',
    value: 20,
    color: 'hsl(138, 70%, 50%)',
  },
  {
    id: 'javascript',
    label: 'javascript',
    value: 30,
    color: 'hsl(220, 70%, 50%)',
  },
];

export default function Result() {
  const [emailSent, setEmailSent] = React.useState(false);
  const {
    user: { name, email },
  } = useUser();
  const {
    query: { quizScore },
  } = useRouter();

  function getInvestorProfileLabel() {
    if (quizScore <= CONSERVATIVE_PROFILE_LIMIT) {
      return 'conservative';
    }

    if (
      quizScore > CONSERVATIVE_PROFILE_LIMIT &&
      quizScore < AGRESSIVE_PROFILE_LIMIT
    ) {
      return 'modarate';
    }

    return 'agressive';
  }

  const investorProfileLabel = getInvestorProfileLabel();

  React.useEffect(() => {
    async function triggerEmailSending() {
      try {
        const res = await fetch('http://localhost:3000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            investorProfileLabel,
          }),
        });
        const json = await res.json();
        console.log('json', json);
      } catch (error) {
        console.log('An error occured while sending e-mail', error);
      } finally {
        setEmailSent(true);
      }
    }

    if (!emailSent) {
      triggerEmailSending();
    }
  }, [emailSent, email, name, investorProfileLabel]);

  function retakeQuiz() {
    Router.push('/dados-iniciais');
  }

  return (
    <Box className="flex justify-center">
      <Box className="px-5">
        <Box>
          <img
            className="block m-auto"
            alt="Perfil do investidor"
            src="/static/images/investor-profile.png"
          />
        </Box>
        <Box className="font-bold text-xl text-center mb-10">
          <p className="text-gray-900">
            Seu perfil de investidor é{' '}
            {investorProfileLabel === 'conservative'
              ? 'Conservador'
              : investorProfileLabel === 'moderate'
              ? 'Moderado'
              : 'Agressivo'}
          </p>
        </Box>
        <Box className="max-w-4xl rounded-lg overflow-hidden border bg-gray-100">
          <Box className="px-6 py-4">
            <Box className="font-bold text-xl mb-2 text-gray-900">
              Descrição do seu perfil
            </Box>
            {investorProfileLabel === 'conservative' ? (
              <p className="text-gray-700 text-base">
                {investorProfileDescription.conservative}
              </p>
            ) : investorProfileLabel === 'moderate' ? (
              <p className="text-gray-700 text-base">
                {investorProfileDescription.moderate}
              </p>
            ) : (
              <p className="text-gray-700 text-base">
                {investorProfileDescription.agressive}
              </p>
            )}
          </Box>
        </Box>
        <Box className="max-w-4xl rounded-lg overflow-hidden border mt-4 bg-gray-100">
          <Box className="px-6 py-4">
            <Box className="font-bold text-xl mb-2 text-gray-900">
              Carteira de investimentos sugerida
            </Box>
            <Box className="p-4 w-108 h-108 m-auto">
              <ResultChart data={data} />
            </Box>
          </Box>
        </Box>
        <Box className="flex justify-center mt-10 mb-5">
          <Button type="submit" onClick={retakeQuiz}>
            Refazer o questionário
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
