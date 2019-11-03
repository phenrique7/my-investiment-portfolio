import React from 'react';
import PropTypes from 'prop-types';

export function Radio({ checked, handleChange, ...props }) {
  return (
    <input
      type="radio"
      name="question-answer"
      checked={checked}
      aria-checked={checked}
      onChange={handleChange}
      {...props}
    />
  );
}

Radio.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};
