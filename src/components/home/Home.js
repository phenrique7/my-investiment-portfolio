import React from 'react';
import { Box } from 'reakit/Box';
import Button from 'src/components/button/Button';

export default function Home() {
  return (
    <div>
      <img src="/static/home-attachment.png" alt="Home attachment" />
      <Box className="flex justify-center">
        <Box className="w-64 flex flex-col">
          <Box className="ml-auto mr-auto relative -top-16">
            <img
              src="/static/pie-chart.png"
              alt="Pie Chart"
              className="w-40 block max-w-full"
            />
          </Box>
          <p className="text-center">Minha Carteira de Investimentos</p>
          <Button roundedFull>Começar</Button>
        </Box>
      </Box>
    </div>
  );
}
