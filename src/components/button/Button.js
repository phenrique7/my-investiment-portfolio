import React from 'react';
import PropTypes from 'prop-types';
import {
  Button as DefaultButton,
  unstable_FormSubmitButton as FormSubmitButton,
} from 'reakit';
import { defaultColor, primaryColor } from 'src/styles/colors';

/**
 * @return {string}
 */
function buttonStyles(styleProps) {
  const {
    kind,
    textColor,
    roundedFull,
    widthFull,
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
    ${widthFull ? 'w-full' : ''}
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
    type,
    kind,
    textColor,
    roundedFull,
    widthFull,
    disabled,
    ...otherProps
  } = props;

  const styles = buttonStyles(props);

  if (type === 'submit') {
    return (
      <FormSubmitButton className={styles} {...otherProps}>
        {children}
      </FormSubmitButton>
    );
  }

  return (
    <DefaultButton className={styles} {...otherProps}>
      {children}
    </DefaultButton>
  );
}

const buttonDefaultProps = {
  type: 'button',
  kind: 'primary',
  variant: 'contained',
  textColor: 'text-white',
  roundedFull: false,
  widthFull: false,
  disabled: false,
};

const buttonPropTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  kind: PropTypes.string,
  variant: PropTypes.string,
  textColor: PropTypes.string,
  roundedFull: PropTypes.bool,
  widthFull: PropTypes.bool,
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
