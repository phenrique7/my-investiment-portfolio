import React from 'react';
import { storiesOf } from '@storybook/react';
import ResultChart from 'src/components/result-chart/ResultChart';
import {
  CONSERVATIVE_PROFILE_DATA,
  MODERATE_PROFILE_DATA,
  AGRESSIVE_PROFILE_DATA,
} from 'src/utils/constants';

storiesOf('Result Chart', module)
  .add('profile conservative', () => (
    <div className="w-192 h-120 m-auto">
      <ResultChart profileData={CONSERVATIVE_PROFILE_DATA} />
    </div>
  ))
  .add('profile moderate', () => (
    <div className="w-192 h-120 m-auto">
      <ResultChart profileData={MODERATE_PROFILE_DATA} />
    </div>
  ))
  .add('profile agressive', () => (
    <div className="w-192 h-120 m-auto">
      <ResultChart profileData={AGRESSIVE_PROFILE_DATA} />
    </div>
  ));
