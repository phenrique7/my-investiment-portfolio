import React from 'react';
import PropTypes from 'prop-types';
import { Button as ReakitButton } from 'reakit';
import { defaultColor, primaryColor } from 'src/styles/colors';

/**
 * @return {string}
 */
function buttonStyles(styleProps) {
  const {
    kind,
    textColor,
    roundedFull,
    disabled,
  } = styleProps;

  let bgColor;

  if (kind === 'primary') {
    bgColor = primaryColor;
  } else {
    bgColor = defaultColor;
  }

  return `
    ${bgColor.normal}
    hover:${bgColor.darker}
    ${textColor}
    cursor-pointer
    text-center
    font-normal
    py-2 px-4
    rounded
    focus:shadow-outline
    ${roundedFull ? 'rounded-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `;
}

export const LinkButton = React.forwardRef((props, ref) => {
  const styles = buttonStyles(props);

  return (
    <a
      ref={ref}
      href={props.href}
      onClick={props.onClick}
      className={styles}
    >
      {props.children}
    </a>
  );
});

export function Button({ children, ...props }) {
  const {
    kind,
    textColor,
    roundedFull,
    disabled,
    ...otherProps
  } = props;

  const styles = buttonStyles(props);

  return (
    <ReakitButton className={styles} {...otherProps}>
      {children}
    </ReakitButton>
  );
}

const buttonDefaultProps = {
  kind: 'primary',
  variant: 'contained',
  textColor: 'text-white',
  roundedFull: false,
  disabled: false,
};

const buttonPropTypes = {
  children: PropTypes.node.isRequired,
  kind: PropTypes.string,
  variant: PropTypes.string,
  textColor: PropTypes.string,
  roundedFull: PropTypes.bool,
  disabled: PropTypes.bool,
};

LinkButton.defaultProps = {
  href: '/',
  onClick: () => {},
  ...buttonDefaultProps,
};

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  ...buttonPropTypes,
};

Button.defaultProps = buttonDefaultProps;
Button.propTypes = buttonPropTypes;
