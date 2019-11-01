import React from 'react';
import { useRouter } from 'next/router';
import { useRadioState, Radio, RadioGroup } from 'reakit/Radio';
import { useQuiz } from 'src/context/quiz-context';
import Icon from 'src/components/icon/Icon';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { Button } from 'src/components/button/Button';
import questions from 'public/static/questions.json';

export default function QuizOptions() {
  const {
    query: { question },
  } = useRouter();
  const { previousQuestion, nextQuestion, answers } = useQuiz();
  const radioRef = React.useRef(null);
  const radio = useRadioState({ state: answers[question - 1] });
  const { options } = questions[question - 1];

  function handleSubmit(event) {
    event.preventDefault();
    nextQuestion(question, radio.state);
  }

  return (
    <form className="m-auto px-6 py-4" onSubmit={handleSubmit}>
      <RadioGroup
        aria-label="respostas"
        className="flex flex-col text-gray-700"
        ref={radioRef}
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
      <div className="flex justify-between items-center mt-10">
        <Button
          onClick={() => previousQuestion(question)}
          kind="outlined"
        >
          <Icon reactIcon={MdArrowBack} className="mr-2" />
          Voltar
        </Button>
        <Button type="submit" disabled={!radio.state}>
          Próximo
          <Icon reactIcon={MdArrowForward} className="ml-2" />
        </Button>
      </div>
    </form>
  );
}
