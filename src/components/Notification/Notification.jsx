import React from 'react';
import PropTypes from 'prop-types';
import { Subtext } from './Notification.styled';

const Notification = ({ message }) => {
  return <Subtext>{message}</Subtext>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
