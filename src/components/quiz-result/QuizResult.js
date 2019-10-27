import React from 'react';
import Router, { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import { Box } from 'reakit';
import { Button } from 'src/components/button/Button';
import ResultChart from 'src/components/result-chart/ResultChart';
import { useUser } from 'src/context/user-context';
import investorProfileDescription from 'public/static/investor-profile-description.json';
import Legends from 'src/components/result-chart/Legends';
import {
  CONSERVATIVE_PROFILE_LIMIT,
  AGRESSIVE_PROFILE_LIMIT,
  CONSERVATIVE_PROFILE_DATA,
  MODERATE_PROFILE_DATA,
  AGRESSIVE_PROFILE_DATA,
} from 'src/utils/constants';

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
      return 'moderate';
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

        await res.json();
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
            Seu perfil de investidor é
            {(() => {
              switch (investorProfileLabel) {
                case 'conservative':
                  return ' Conservador';
                case 'moderate':
                  return ' Moderado';
                default:
                  return ' Agressivo';
              }
            })()}
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
            <Box className="p-4 w-192 h-120 m-auto">
              {investorProfileLabel === 'conservative' ? (
                <ResultChart
                  profileData={CONSERVATIVE_PROFILE_DATA}
                />
              ) : investorProfileLabel === 'moderate' ? (
                <ResultChart profileData={MODERATE_PROFILE_DATA} />
              ) : (
                <ResultChart profileData={AGRESSIVE_PROFILE_DATA} />
              )}
            </Box>
            <Box className="flex justify-center">
              <Legends
                showCircleWithDots={
                  !(investorProfileLabel === 'conservative')
                }
              />
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
