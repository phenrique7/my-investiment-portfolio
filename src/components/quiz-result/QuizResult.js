import React from 'react';
import { Box } from 'reakit';
import { Button } from 'src/components/button/Button';
import { VictoryPie, VictoryLegend } from 'victory';

export default function Result() {
  return (
    <Box className="flex justify-center">
      <Box>
        <Box>
          <img
            className="block"
            alt="Perfil do investidor"
            src="/static/images/investor-profile.png"
          />
        </Box>
        <div className="font-bold text-xl text-center mb-6">
          <p className="text-gray-900">
            Seu perfil de investidor é Moderado
          </p>
        </div>
        <div className="max-w-4xl rounded-lg overflow-hidden border bg-gray-100">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-900">
              Descrição do seu perfil
            </div>
            <p className="text-gray-700 text-base">
              Para o investidor de perfil moderado, a segurança é
              importante, mas ele busca retornos maiores, aceitando,
              portanto, assumir algum risco. Ele aceita que parte de
              seu patrimônio seja alocado em renda variável e o
              restante em aplicações mais estáveis. Além disso, ele
              preza pela busca de ganhos no médio e longo prazo.
            </p>
          </div>
        </div>
        <div className="max-w-4xl rounded-lg overflow-hidden border mt-4 bg-gray-100">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-900">
              Carteira de investimentos sugerida
            </div>
            <svg viewBox="0 0 600 600">
              <VictoryPie
                standalone={false}
                origin={{ x: 310, y: 220 }}
                colorScale={[
                  'tomato',
                  'orange',
                  'gold',
                  'cyan',
                  'navy',
                ]}
                data={[
                  { x: '25 %', y: 25 },
                  { x: '30 %', y: 30 },
                  { x: '25 %', y: 25 },
                  { x: '15 %', y: 15 },
                  { x: '5 %', y: 5 },
                ]}
              />
              <VictoryLegend
                standalone={false}
                x={170}
                y={430}
                orientation="vertical"
                gutter={100}
                style={{ border: { stroke: 'black' } }}
                data={[
                  {
                    name: 'Previdência privada',
                    symbol: { fill: 'tomato' },
                  },
                  {
                    name: 'Renda fixa',
                    symbol: { fill: 'tomato' },
                  },
                  {
                    name: 'Renda variável',
                    symbol: { fill: 'tomato' },
                  },
                  {
                    name: 'Fundos de investimentos',
                    symbol: { fill: 'orange' },
                  },
                ]}
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Button type="submit">Refazer o questionário</Button>
        </div>
      </Box>
    </Box>
  );
}
