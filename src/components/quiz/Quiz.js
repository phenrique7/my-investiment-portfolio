import PropTypes from 'prop-types';
import { Box } from 'reakit';
import { useRadioState, Radio, RadioGroup } from 'reakit/Radio';
import Icon from 'src/components/icon/Icon';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { Button } from 'src/components/button/Button';
import Head from 'src/components/head/Head';
import useMedia from 'src/hooks/useMedia';
import HeaderLogo from 'src/components/header-logo/HeaderLogo';

function Form({ previousStage, nextStage }) {
  const radio = useRadioState();

  return (
    <form className="m-auto px-6 py-4">
      <RadioGroup
        {...radio}
        aria-label="fruits"
        className="flex flex-col text-gray-700"
      >
        <label className="py-2">
          <Radio
            {...radio}
            value="apple"
            className="form-radio h-6 w-6 mr-5"
          />
          apple
        </label>
        <label className="py-2">
          <Radio
            {...radio}
            value="orange"
            className="form-radio h-6 w-6 mr-5"
          />
          orange
        </label>
        <label className="py-2">
          <Radio
            {...radio}
            value="watermelon"
            className="form-radio h-6 w-6 mr-5"
          />
          watermelon
        </label>
      </RadioGroup>
      <div className="flex justify-between mt-10">
        <Button type="submit" onClick={previousStage} kind="outlined">
          <Icon reactIcon={MdArrowBack} className="mr-2" />
          Voltar
        </Button>
        <Button type="submit" onClick={nextStage}>
          Próximo
          <Icon reactIcon={MdArrowForward} className="ml-2" />
        </Button>
      </div>
    </form>
  );
}

Form.propTypes = {
  stage: PropTypes.number.isRequired,
  previousStage: PropTypes.func.isRequired,
  nextStage: PropTypes.func.isRequired,
};

export default function Quiz({ stage, previousStage, nextStage }) {
  const matchMediaQuery = useMedia('(max-width: 768px) ');

  return (
    <>
      <Head>
        <title>Perfil de Investidor</title>
      </Head>
      <Box className="h-screen">
        <HeaderLogo />
        <Box className="flex h-full px-3 items-center">
          <Box className="w-full">
            <Box className="m-auto w-120 sm-max:w-auto">
              <Box className="px-6 py-4">
                <p className="text-gray-700 text-lg font-bold text-center">
                  Antes de começar a análise do seu perfil de
                  investidor, preciso saber duas informações sobre
                  você:
                </p>
              </Box>
              <Form
                stage={stage}
                previousStage={previousStage}
                nextStage={nextStage}
              />
            </Box>
          </Box>
          {matchMediaQuery || (
            <Box className="h-full flex items-center -mr-3">
              <img
                className="block"
                alt="Quiz"
                src="/static/images/quiz.png"
              />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

Quiz.propTypes = {
  stage: PropTypes.number.isRequired,
  previousStage: PropTypes.func.isRequired,
  nextStage: PropTypes.func.isRequired,
};
