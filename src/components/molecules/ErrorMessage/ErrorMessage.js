import { Title } from 'components/atoms/Title/Title';
import React from 'react';
import { Wrapper } from './ErrorMessage.styles';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message = 'Something went wrong!' }) => {
  return (
    <Wrapper>
      <Title>Ooops!</Title>
      <p>{message}</p>
    </Wrapper>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
