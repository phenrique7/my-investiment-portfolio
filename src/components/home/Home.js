import React from 'react';
import Link from 'next/link';
import { Box } from 'reakit/Box';
import { LinkButton as Button } from 'src/components/button/Button';
import routes from 'src/utils/routes';
import Head from 'src/components/head/Head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Minha Carteira de Investimentos</title>
        <link
          href="https://fonts.googleapis.com/css?family=Comfortaa:600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        className="h-screen"
        style={{ backgroundImage: 'url("/static/icons-fade-bg.png")' }}
      >
        <img src="/static/home-attachment.png" alt="Home attachment" />
        <Box className="flex justify-center">
          <Box className="w-64 flex flex-col mt-5">
            <Box className="ml-auto mr-auto relative -top-4">
              <img
                src="/static/pie-chart.png"
                className="w-32 block max-w-full"
                alt="Pie Chart"
              />
            </Box>
            <span className="font-display text-center text-2xl">
              Minha Carteira de Investimentos
            </span>
            <Box className="flex justify-center mt-6">
              <Link href={routes['customer-profile']}>
                <Button widthFull roundedFull>
                  Começar
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
}
