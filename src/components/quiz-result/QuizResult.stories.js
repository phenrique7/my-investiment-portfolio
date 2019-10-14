import React from 'react';
import { storiesOf } from '@storybook/react';
import QuizResult from 'src/components/quiz-result/QuizResult';

storiesOf('Quiz Result', module).add('default', () => (
  <div className="p-4">
    <QuizResult />
  </div>
));
