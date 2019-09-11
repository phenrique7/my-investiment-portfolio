import React from 'react';
import Link from 'next/link';
import { Box } from 'reakit/Box';
import { LinkButton as Button } from 'src/components/button/Button';
import routes from 'src/utils/routes';

export default function Home() {
  return (
    <div className="h-screen">
      <img src="/static/home-attachment.png" alt="Home attachment" />
      <Box className="flex justify-center">
        <Box className="w-64 flex flex-col">
          <Box className="ml-auto mr-auto relative -top-16">
            <img
              src="/static/pie-chart.png"
              className="w-32 block max-w-full"
              alt="Pie Chart"
            />
          </Box>
          <span className="text-center">
            Minha Carteira de Investimentos
          </span>
          <Link href={routes['customer-profile']}>
            <Button roundedFull>
              Começar
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
}
