import React from 'react';
import PropTypes from 'prop-types';

export function RadioGroup({ children, ...props }) {
  return (
    <div role="radiogroup" {...props}>
      {children}
    </div>
  );
}

RadioGroup.propTypes = {
  children: PropTypes.node.isRequired,
};
