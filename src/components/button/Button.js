import React from 'react';
import { Button as ReakitButton } from 'reakit';
import PropTypes from 'prop-types';
import { defaultColor, primaryColor } from 'styles/colors';

export default function Button({ children, ...props }) {
  const {
    kind,
    backgroundColor,
    textColor,
    roundedFull,
    disabled,
    ...otherProps
  } = props;

  let bgColor;

  if (kind === 'primary') {
    bgColor = primaryColor;
  } else {
    bgColor = defaultColor;
  }

  return (
    <ReakitButton
      className={`
        ${bgColor.normal}
        hover:${bgColor.darker}
        ${textColor}
        font-bold
        py-2 px-4
        rounded
        focus:shadow-outline
        ${roundedFull ? 'rounded-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
      {...otherProps}
    >
      {children}
    </ReakitButton>
  );
}

Button.defaultProps = {
  kind: 'primary',
  variant: 'contained',
  backgroundColor: 'bg-blue-500',
  textColor: 'text-white',
  roundedFull: false,
  disabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  kind: PropTypes.string,
  variant: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  roundedFull: PropTypes.bool,
  disabled: PropTypes.bool,
};
