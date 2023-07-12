import React from 'react';
import PropTypes from 'prop-types';
import { ListButtons, Button, ItemButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onButtonGood, onButtonNeutral, onButtonBad }) => {
  return (
    <ListButtons>
      <ItemButton>
        <Button onClick={onButtonGood}>Good</Button>
      </ItemButton>
      <ItemButton>
        <Button onClick={onButtonNeutral}>Neutral</Button>
      </ItemButton>
      <ItemButton>
        <Button onClick={onButtonBad}>Bad</Button>
      </ItemButton>
    </ListButtons>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onButtonGood: PropTypes.func.isRequired,
  onButtonNeutral: PropTypes.func.isRequired,
  onButtonBad: PropTypes.func.isRequired,
};
