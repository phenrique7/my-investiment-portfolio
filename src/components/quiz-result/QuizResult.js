import React from 'react';
import { Box } from 'reakit';
import { Button } from 'src/components/button/Button';
import ResultChart from 'src/components/result-chart/ResultChart';

export default function Result() {
  return (
    <Box className="flex justify-center">
      <Box className="px-5">
        <Box>
          <img
            className="block"
            alt="Perfil do investidor"
            src="/static/images/investor-profile.png"
          />
        </Box>
        <Box className="font-bold text-xl text-center mb-6">
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
            <Box>
              <ResultChart />
            </Box>
          </Box>
        </Box>
        <Box className="flex justify-center mt-10 mb-5">
          <Button type="submit">Refazer o questionário</Button>
        </Box>
      </Box>
    </Box>
  );
}
