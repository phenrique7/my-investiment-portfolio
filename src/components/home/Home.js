import React from 'react';
import Link from 'next/link';
import { Box } from 'reakit/Box';
import { LinkButton as Button } from 'src/components/button/Button';
import useMedia from 'src/hooks/useMedia';

export default function Home() {
  const match = useMedia('(max-width: 640px) ');

  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: 'url("/static/images/icons-fade-bg.png")',
      }}
    >
      <img
        src={
          match
            ? '/static/images/home-attachment-mobile.png'
            : '/static/images/home-attachment.png'
        }
        className="w-full"
        alt="Home attachment"
      />
      <Box className="flex justify-center">
        <Box className="w-64 flex flex-col mt-5">
          <Box className="ml-auto mr-auto relative -top-4">
            <img
              src="/static/images/pie-chart.png"
              className="w-32 block max-w-full"
              alt="Pie Chart"
            />
          </Box>
          <span className="font-display text-center font-bold text-2xl">
            Minha Carteira de Investimentos
          </span>
          <Box className="flex justify-center mt-6">
            <Link href="/dados-iniciais">
              <Button widthFull roundedFull>
                Começar
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
