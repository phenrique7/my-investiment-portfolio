import React from 'react';
import Link from 'next/link';
import { Box } from 'reakit';
import { LinkButton, Button } from 'src/components/button/Button';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import Icon from 'src/components/icon/Icon';
import useMedia from 'src/hooks/useMedia';
import { useUser } from 'src/context/user-context';
import { setStorage } from 'src/utils/storage';
import { LS_USER_DATA_KEY } from 'src/utils/constants';
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormLabel as FormLabel,
  unstable_FormInput as FormInput,
  unstable_FormMessage as FormMessage,
} from 'reakit/Form';
import {
  isEmptyObject,
  emailIsValid,
  initialAnswers,
} from 'src/helpers';

export default function EntryData() {
  const matchMediaQuery = useMedia('(max-width: 1024px)');
  const {
    user: { name },
    setUser,
    resetUser,
  } = useUser();
  const form = useFormState({
    values: {
      name: '',
      email: '',
    },
    onValidate: values => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Nome não pode ser vazio.';
      }

      if (!values.email) {
        errors.email = 'E-mail não pode ser vazio.';
      } else if (!emailIsValid(values.email)) {
        errors.email = 'Endereço de e-mail inválido.';
      }

      if (Object.keys(errors).length) {
        throw errors;
      }
    },
    onSubmit: values => {
      const userData = {
        email: values.email,
        name: values.name,
        quizAnswers: initialAnswers(),
      };

      setUser(() => {
        setStorage(LS_USER_DATA_KEY, userData, true);
        return userData;
      });
    },
  });

  const validForm =
    isEmptyObject(form.errors) &&
    form.values.name &&
    form.values.email;

  return (
    <Box className="h-screen">
      <Box className="flex justify-center h-full px-3 items-center">
        {name ? (
          <Box className="w-108">
            <p className="text-gray-700 text-lg text-center">
              Olá, <b>{name}</b>
              <img
                draggable="false"
                className="w-5 inline mx-2"
                alt="👋"
                src="https://s.w.org/images/core/emoji/11/svg/1f44b.svg"
              />
              Algumas perguntas serão feitas a fim de que seja
              possível identificar qual é o seu perfil de investidor
              e, assim, poder sugerir melhor a alocação dos seus
              recursos e os investimentos que se adequam ao seu
              perfil.
            </p>
            <Box className="mt-10 flex justify-between items-center">
              <Button onClick={resetUser} kind="outlined">
                <Icon reactIcon={MdArrowBack} className="mr-2" />
                Voltar
              </Button>
              <Link href="/questionario?question=1">
                <LinkButton>
                  Prosseguir
                  <Icon reactIcon={MdArrowForward} className="ml-2" />
                </LinkButton>
              </Link>
            </Box>
          </Box>
        ) : (
          <>
            <Box className="w-108 flex flex-col">
              <Box className="overflow-hidden">
                <Box className="px-6 py-4">
                  <p className="text-gray-700 text-xl text-center">
                    Antes de começarmos, preciso saber duas
                    informações sobre você:
                  </p>
                </Box>
                <Form className="w-full px-6 py-4" {...form}>
                  <div className="md-min:flex md-min:items-center mb-6">
                    <div className="md-min:w-1/5">
                      <FormLabel
                        name="name"
                        className="block text-left text-gray-500 font-bold mb-1 md-min:mb-0"
                        {...form}
                      >
                        Nome
                      </FormLabel>
                    </div>
                    <div className="md-min:w-4/5">
                      <FormInput
                        required
                        name="name"
                        className="appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                        {...form}
                      />
                      <FormMessage
                        className="text-red-500 text-xs"
                        name="name"
                        {...form}
                      />
                    </div>
                  </div>
                  <div className="md-min:flex md-min:items-center mb-6">
                    <div className="md-min:w-1/5">
                      <FormLabel
                        name="email"
                        className="block text-left text-gray-500 font-bold mb-1 md-min:mb-0 pr-4"
                        {...form}
                      >
                        E-mail
                      </FormLabel>
                    </div>
                    <div className="md-min:w-4/5">
                      <FormInput
                        required
                        type="email"
                        name="email"
                        className="appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                        {...form}
                      />
                      <FormMessage
                        className="text-red-500 text-xs"
                        name="email"
                        {...form}
                      />
                    </div>
                  </div>
                  <div className="md-min:flex md-min:items-center">
                    <div className="md-min:w-1/3" />
                    <div className="md-min:w-2/3">
                      <Button
                        type="submit"
                        disabled={!validForm}
                        {...form}
                      >
                        Continuar
                      </Button>
                    </div>
                  </div>
                </Form>
              </Box>
            </Box>
            {matchMediaQuery || (
              <Box>
                <img
                  className="block"
                  alt="Dados de entrada do usuário"
                  src="/static/images/user-entry-data.png"
                />
              </Box>
            )}
          </>
        )}
      </Box>
    </Box>
  );
}
