import React from 'react';
import { useRouter } from 'next/router';
import { useQuiz } from 'src/context/quiz-context';
import Icon from 'src/components/icon/Icon';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { Button } from 'src/components/button/Button';
import useRadio from 'src/hooks/useRadio';
import { RadioGroup, Radio } from 'src/components/radio';
import questions from 'public/static/questions.json';

export default function QuizOptions() {
  const router = useRouter();
  const question = parseInt(router.query.question, 10);
  const { answers, previousQuestion, nextQuestion } = useQuiz();
  const { options } = questions[question - 1];
  const { radioState, handleChange } = useRadio(
    answers[question - 1],
  );

  function handleSubmit(event) {
    event.preventDefault();
    nextQuestion(question, radioState);
  }

  return (
    <form className="m-auto px-6 py-4" onSubmit={handleSubmit}>
      <RadioGroup
        aria-label="respostas"
        className="flex flex-col text-gray-700"
      >
        {options.map(({ answer }) => (
          <label key={answer} className="py-2">
            <Radio
              value={answer}
              className="form-radio h-6 w-6 mr-5"
              checked={radioState === answer}
              handleChange={handleChange}
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
        <Button type="submit" disabled={!radioState}>
          Próximo
          <Icon reactIcon={MdArrowForward} className="ml-2" />
        </Button>
      </div>
    </form>
  );
}
