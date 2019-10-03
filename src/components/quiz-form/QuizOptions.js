import PropTypes from 'prop-types';
import { useRadioState, Radio, RadioGroup } from 'reakit/Radio';
import Icon from 'src/components/icon/Icon';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { Button } from 'src/components/button/Button';
import questions from 'static/questions.json';

export default function QuizOptions({
  stage,
  previousStage,
  nextStage,
}) {
  const radio = useRadioState();
  const { options } = questions[stage];

  function handleSubmit(event) {
    event.preventDefault();
    nextStage();
  }

  return (
    <form className="m-auto px-6 py-4" onSubmit={handleSubmit}>
      <RadioGroup
        aria-label="fruits"
        className="flex flex-col text-gray-700"
        {...radio}
      >
        {options.map(({ answer }) => (
          <label key={answer} className="py-2">
            <Radio
              value={answer}
              className="form-radio h-6 w-6 mr-5"
              {...radio}
            />
            {answer}
          </label>
        ))}
      </RadioGroup>
      <div className="flex justify-between mt-10">
        <Button onClick={previousStage} kind="outlined">
          <Icon reactIcon={MdArrowBack} className="mr-2" />
          Voltar
        </Button>
        <Button type="submit" disabled={radio.state === undefined}>
          Próximo
          <Icon reactIcon={MdArrowForward} className="ml-2" />
        </Button>
      </div>
    </form>
  );
}

QuizOptions.propTypes = {
  stage: PropTypes.number.isRequired,
  previousStage: PropTypes.func.isRequired,
  nextStage: PropTypes.func.isRequired,
};
