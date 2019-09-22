import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'reakit';
import Link from 'next/link';
import { Button } from 'src/components/button/Button';
import Head from 'src/components/head/Head';
import useMedia from 'src/hooks/useMedia';
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormLabel as FormLabel,
  unstable_FormInput as FormInput,
  unstable_FormMessage as FormMessage,
} from 'reakit/Form';

function EntryDataForm({ nextStage }) {
  const form = useFormState({
    values: {
      name: '',
      email: '',
    },
    onValidate: values => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Não esqueça de inserir seu nome';
      }

      if (!values.email) {
        errors.email = 'Não esqueça de inserir seu e-mail';
      }

      if (Object.keys(errors).length) {
        throw errors;
      }
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Form className="w-full px-6 py-4" {...form}>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/5">
          <FormLabel
            name="name"
            className="block text-left text-gray-500 font-bold mb-1 md:mb-0"
            {...form}
          >
            Nome
          </FormLabel>
        </div>
        <div className="md:w-4/5">
          <FormInput
            name="name"
            className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            {...form}
          />
          <FormMessage
            className="text-red-500 text-xs"
            name="name"
            {...form}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/5">
          <FormLabel
            name="email"
            className="block text-left text-gray-500 font-bold mb-1 md:mb-0 pr-4"
            {...form}
          >
            E-mail
          </FormLabel>
        </div>
        <div className="md:w-4/5">
          <FormInput
            type="email"
            name="email"
            className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            {...form}
          />
          <FormMessage
            className="text-red-500 text-xs"
            name="email"
            {...form}
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3" />
        <div className="md:w-2/3">
          <Button type="submit" onClick={nextStage} {...form}>
            Próximo
          </Button>
        </div>
      </div>
    </Form>
  );
}

EntryDataForm.propTypes = {
  nextStage: PropTypes.func.isRequired,
};

export default function CustomerEntryData({ nextStage }) {
  const matchMediaQuery = useMedia('(max-width: 1024px) ');

  return (
    <>
      <Head>
        <title>Perfil de Investidor</title>
      </Head>
      <div className="h-screen">
        <Box className="ml-auto mr-auto absolute p-2">
          <Link href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <img
                src="/static/pie-chart.png"
                className="w-12 block max-w-full"
                alt="Pie Chart"
              />
            </a>
          </Link>
        </Box>
        <Box className="flex justify-center h-full px-3 items-center">
          <Box className="w-108 flex flex-col">
            <div className="overflow-hidden">
              <div className="px-6 py-4">
                <p className="text-gray-700 text-xl text-center">
                  Olá!{' '}
                  <img
                    draggable="false"
                    className="w-5 inline"
                    alt="👋"
                    src="https://s.w.org/images/core/emoji/11/svg/1f44b.svg"
                  />{' '}
                  Antes de começar, preciso saber duas informações
                  sobre você:
                </p>
              </div>
              <EntryDataForm nextStage={nextStage} />
            </div>
          </Box>
          {matchMediaQuery || (
            <Box>
              <img
                className="block"
                alt="Dados de entrada do usuário"
                src="/static/user-entry-data.png"
              />
            </Box>
          )}
        </Box>
      </div>
    </>
  );
}

CustomerEntryData.propTypes = {
  nextStage: PropTypes.func.isRequired,
};
