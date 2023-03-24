import { Component } from 'react';
import Statistics from '../statistic/FeedbackStatistic';
import FeedbackOptions from '../feedbackOptions/FeedbackOptions';
import Section from '../section/Section';
import Notification from '../notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = val => {
    this.setState(prev => ({ [val]: prev[val] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, val) => acc + val, 0);
  };

  countPositiveFeedbackPercentage = () => {
    let countPositiveFeedback =
      (this.state.good * 100) / this.countTotalFeedback();
    return Math.ceil(countPositiveFeedback) + '%';
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              state={this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </div>
    );
  }
}
