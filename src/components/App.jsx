import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = e => {
    this.setState(prevState => {
      return {
        [e.target.id]: prevState[e.target.id] + 1,
      }
    });
  };

  
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return (bad + good + neutral);
  }
  

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : ((this.state.good / total) * 100).toFixed(0);
  }

  render() { 
    const { good, bad, neutral } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onButtonClick} />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />)
            :
            (<Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage} />
          )}
        </Section>
        <GlobalStyle />
      </Container>
    );
  }
}
