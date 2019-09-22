import PropTypes from 'prop-types';
import { useRadioState, Radio, RadioGroup } from 'reakit/Radio';

export default function Quiz() {
  const radio = useRadioState();

  return (
    <RadioGroup {...radio} aria-label="fruits">
      <label>
        <Radio {...radio} value="apple" /> apple
      </label>
      <label>
        <Radio {...radio} value="orange" /> orange
      </label>
      <label>
        <Radio {...radio} value="watermelon" /> watermelon
      </label>
    </RadioGroup>
  );
}

Quiz.propTypes = {
  stage: PropTypes.number.isRequired,
  nextStage: PropTypes.func.isRequired,
};
