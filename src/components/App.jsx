import { useState } from 'react';
import { StyledMainWrapper } from './Statistics/Statistics.styled';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const { good, neutral, bad } = state;

  const handleChangeStat = name => {
    setState(prev => ({
      ...prev,
      [name]: prev[name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? (good / total) * 100 : 0;
  };

  const totalFeedback = countTotalFeedback();
  const totalPositiveFeedbacks = countPositiveFeedbackPercentage().toFixed();
  return (
    <StyledMainWrapper>
      <Section title="PLEASE, LEAVE YOUR FEEDBACK">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={handleChangeStat}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={totalPositiveFeedbacks}
        />
      </Section>
    </StyledMainWrapper>
  );
};
