import React from 'react';
import Router, { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import { Box } from 'reakit';
import { Button } from 'src/components/button/Button';
import ResultChart from 'src/components/result-chart/ResultChart';
import { useUser } from 'src/context/user-context';

const data = [
  {
    id: 'rust',
    label: 'rust',
    value: 293,
    color: 'hsl(350, 70%, 50%)',
  },
  {
    id: 'ruby',
    label: 'ruby',
    value: 285,
    color: 'hsl(87, 70%, 50%)',
  },
  {
    id: 'elixir',
    label: 'elixir',
    value: 122,
    color: 'hsl(62, 70%, 50%)',
  },
  {
    id: 'make',
    label: 'make',
    value: 413,
    color: 'hsl(138, 70%, 50%)',
  },
  {
    id: 'javascript',
    label: 'javascript',
    value: 458,
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

  React.useEffect(() => {
    async function triggerEmailSending() {
      try {
        const res = await fetch('http://localhost:3000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, quizScore }),
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
  }, [emailSent, email, name, quizScore]);

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
            Seu perfil de investidor é Moderado
          </p>
        </Box>
        <Box className="max-w-4xl rounded-lg overflow-hidden border bg-gray-100">
          <Box className="px-6 py-4">
            <Box className="font-bold text-xl mb-2 text-gray-900">
              Descrição do seu perfil
            </Box>
            <p className="text-gray-700 text-base">
              Para o investidor de perfil moderado, a segurança é
              importante, mas ele busca retornos maiores, aceitando,
              portanto, assumir algum risco. Ele aceita que parte de
              seu patrimônio seja alocado em renda variável e o
              restante em aplicações mais estáveis. Além disso, ele
              preza pela busca de ganhos no médio e longo prazo.
            </p>
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
