import React from 'react';
import { storiesOf } from '@storybook/react';
import QuizOptions from 'src/components/quiz-form/quiz-options/QuizOptions';

storiesOf('Quiz Options', module).add('default', () => (
  <div className="p-4">
    <QuizOptions
      stage={1}
      previousStage={() => {}}
      nextStage={() => {}}
      quizAnswers={['', '']}
    />
  </div>
));
