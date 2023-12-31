import { StyledBtn, StyledBtnWrapper } from './FeedbackOpt.styled';
import { PropTypes } from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledBtnWrapper>
      {options.map(option => (
        <StyledBtn
          key={option}
          color={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </StyledBtn>
      ))}
    </StyledBtnWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
