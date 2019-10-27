import React from 'react';
import { storiesOf } from '@storybook/react';
import ResultChart from 'src/components/result-chart/ResultChart';
import { Box } from 'reakit';
import Legends from 'src/components/result-chart/Legends';
import {
  CONSERVATIVE_PROFILE_DATA,
  MODERATE_PROFILE_DATA,
  AGRESSIVE_PROFILE_DATA,
} from 'src/utils/constants';

storiesOf('Result Chart', module)
  .add('profile conservative', () => (
    <Box className="w-192 h-120 m-auto">
      <ResultChart profileData={CONSERVATIVE_PROFILE_DATA} />
      <Box className="flex justify-center">
        <Legends showCircleWithDots={false} />
      </Box>
    </Box>
  ))
  .add('profile moderate', () => (
    <Box className="w-192 h-120 m-auto">
      <ResultChart profileData={MODERATE_PROFILE_DATA} />
      <Box className="flex justify-center">
        <Legends />
      </Box>
    </Box>
  ))
  .add('profile agressive', () => (
    <Box className="w-192 h-120 m-auto">
      <ResultChart profileData={AGRESSIVE_PROFILE_DATA} />
      <Box className="flex justify-center">
        <Legends />
      </Box>
    </Box>
  ));
