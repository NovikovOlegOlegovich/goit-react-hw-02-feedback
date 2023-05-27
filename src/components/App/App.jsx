import React, { Component } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import { Wrapper } from './App.styled';
import Notification from '../Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  CountTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positivePercentage = total => {
    const { good } = this.state;
    return Math.round((100 / total) * good);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { state, onLeaveFeedback } = this;
    const total = this.CountTotalFeedback();
    const positivePercentage = this.positivePercentage(total);

    return (
      <Wrapper>
        <Section title={'Pleace leave feedback'}>
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Wrapper>
    );
  }
}
