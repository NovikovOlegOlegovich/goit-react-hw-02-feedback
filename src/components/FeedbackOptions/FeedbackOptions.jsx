import PropTypes from 'prop-types';

import { ButtonList, ButtonListItem, Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonList>
      {options.map((option, index) => (
        <ButtonListItem key={index}>
          <Button onClick={onLeaveFeedback}>{option}</Button>
        </ButtonListItem>
      ))}
    </ButtonList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
