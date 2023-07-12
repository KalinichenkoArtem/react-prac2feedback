import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <>
      <Text>{title}</Text>
      {children}
    </>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
