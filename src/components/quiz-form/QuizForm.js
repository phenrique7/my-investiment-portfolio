import React from 'react';
import { useRouter } from 'next/router';
import { Box } from 'reakit';
import QuizInput from 'src/components/quiz-form/quiz-input/QuizInput';
import QuizOptions from 'src/components/quiz-form/quiz-options/QuizOptions';
import { FIRST_QUESTION } from 'src/utils/constants';
import questions from 'public/static/questions.json';

export default function QuizForm() {
  const router = useRouter();
  const question = parseInt(router.query.question, 10);
  const { description } = questions[question - 1];

  return (
    <Box className="h-screen">
      <Box className="flex h-full px-3 items-center">
        <Box className="w-full">
          <Box className="m-auto w-120 sm-max:w-auto">
            <Box className="px-6 py-4">
              <p className="text-gray-700 text-lg font-bold text-center">
                {description}
              </p>
            </Box>
            {question === FIRST_QUESTION ? (
              <QuizInput />
            ) : (
              <QuizOptions />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
