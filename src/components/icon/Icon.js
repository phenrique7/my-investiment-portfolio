import React from 'react';
import PropTypes from 'prop-types';

export default function Icon({ reactIcon }) {
  return (
    <span className="inline-block ml-2">
      {React.createElement(reactIcon)}
    </span>
  );
}

Icon.propTypes = {
  reactIcon: PropTypes.func.isRequired,
};
