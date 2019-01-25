import React from 'react';
import glamorous from 'glamorous';
import * as glamor from 'glamor';
import PropTypes from 'prop-types';

const gradient = glamor.css.keyframes({
  '0%': {
    backgroundPosition: '0% 50%',
  },
  '50%': {
    backgroundPosition: '100% 50%',
  },
  '100%': {
    backgroundPosition: '0% 50%',
  },
});

const StyledButton = glamorous.button({
  '&.usage-normal': {
    backgroundColor: '#FFF0BC',
    border: '1px solid #C7B987',
    color: '#8D5C23',
  },
  '&.usage-submit': {
    animation: `${gradient} 7s ease infinite`,
    background: 'linear-gradient(-45deg, #A6FFDE, #B2D99A, #23A6D5, #23D5AB)',
    backgroundSize: '400% 400%',
    border: '1px solid #1EAD8B',
    color: '#F0F9F6',
  },
  ':hover': {
    cursor: 'pointer',
  },
  border: 'none',
  borderRadius: '6px',
  color: '#236525',
  display: 'inline-block',
  fontSize: '17px',
  padding: '10px 15px',
  textDecoration: 'none',
});

const Button = ({ text, usage }) => (
  <StyledButton className={`usage-${usage}`}>{text}</StyledButton>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  usage: PropTypes.oneOf(['warning', 'info', 'normal', 'danger', 'submit']),
};

Button.defaultProps = {
  usage: 'normal',
};

export default Button;
