import { Notification } from 'components/Notification/Notification';
import {
  StyledStatisticsList,
  StyledStatisticsItem,
} from './Statistics.styled';
import { PropTypes } from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  if (!good && !neutral && !bad) {
    return <Notification message="There is no feedback😭"></Notification>;
  } else {
    return (
      <StyledStatisticsList>
        <StyledStatisticsItem $good>Good: {good}</StyledStatisticsItem>
        <StyledStatisticsItem $neutral>Neutral: {neutral}</StyledStatisticsItem>
        <StyledStatisticsItem $bad>Bad: {bad}</StyledStatisticsItem>
        <StyledStatisticsItem $total>Total: {total}</StyledStatisticsItem>
        <StyledStatisticsItem>
          Positive feedbacks: {positivePercentage}%
        </StyledStatisticsItem>
      </StyledStatisticsList>
    );
  }
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
