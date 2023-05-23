import React, { Component } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import { Wrapper } from './App.styled';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    this.setState(prevState => (prevState[event.target.textContent] += 0.5));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { state, onLeaveFeedback } = this;
    const total = good + neutral + bad;
    const positivePercentage = Math.round((100 / total) * good);

    return (
      <Wrapper>
        <Section title={'Pleace leave feedback'}>
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </Wrapper>
    );
  }
}
