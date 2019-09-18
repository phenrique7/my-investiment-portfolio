import React from 'react';
import { Box } from 'reakit';
import { Button } from 'src/components/button/Button';
import Head from 'src/components/head/Head';

export default function CustomerProfile() {
  return (
    <>
      <Head>
        <title>Perfil de Investidor</title>
      </Head>
      <div className="h-screen">
        <Box className="flex justify-center">
          <Box className="w-96 flex flex-col">
            <Box className="ml-auto mr-auto">
              <img
                src="/static/pie-chart.png"
                className="w-24 block max-w-full"
                alt="Pie Chart"
              />
            </Box>
            <div className="max-w-sm rounded overflow-hidden border border-gray-200 bg-gray-100">
              <div className="px-6 py-4">
                <p className="text-gray-700 text-xl">
                  Olá!{' '}
                  <img
                    draggable="false"
                    className="w-5 inline"
                    alt="👋"
                    src="https://s.w.org/images/core/emoji/11/svg/1f44b.svg"
                  />{' '}
                  Antes de começar, preciso saber duas informações sobre você:
                </p>
              </div>
              <form className="w-full max-w-sm px-6 py-4">
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/5">
                    <label
                      className="block text-left text-gray-500 font-bold mb-1 md:mb-0"
                      htmlFor="inline-full-name"
                    >
                      Nome
                    </label>
                  </div>
                  <div className="md:w-4/5">
                    <input
                      className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/5">
                    <label
                      className="block text-left text-gray-500 font-bold mb-1 md:mb-0 pr-4"
                      htmlFor="inline-username"
                    >
                      E-mail
                    </label>
                  </div>
                  <div className="md:w-4/5">
                    <input
                      className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-username"
                      type="email"
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center">
                  <div className="md:w-1/3" />
                  <div className="md:w-2/3">
                    <Button>Sign Up</Button>
                  </div>
                </div>
              </form>
            </div>
          </Box>
        </Box>
      </div>
    </>
  );
}
