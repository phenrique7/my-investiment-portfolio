import React from 'react';
import PropTypes from 'prop-types';

export default function Icon({ reactIcon, className }) {
  return (
    <span className={`inline-block ${className}`}>
      {React.createElement(reactIcon)}
    </span>
  );
}

Icon.defaultProps = {
  className: '',
};

Icon.propTypes = {
  reactIcon: PropTypes.func.isRequired,
  className: PropTypes.string,
};
