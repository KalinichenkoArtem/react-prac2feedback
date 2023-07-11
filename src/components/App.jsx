import React from 'react';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonGoodClick = state => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  onButtonNeutralClick = state => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  onButtonBadClick = state => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  total = state => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positivePercentage = state => {
    const { good } = this.state;
    return Math.round((good / this.total()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <p>Please leave feedback</p>
        <ul>
          <li>
            <button type="button" onClick={this.onButtonGoodClick}>
              Good
            </button>
          </li>
          <li>
            <button type="button" onClick={this.onButtonNeutralClick}>
              Neutral
            </button>
          </li>
          <li>
            <button type="button" onClick={this.onButtonBadClick}>
              Bad
            </button>
          </li>
        </ul>
        <p>Statistics</p>
        {this.total() ? (
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {this.total()}</li>
            <li>Positive feedback: {this.positivePercentage()}%</li>
          </ul>
        ) : (
          <p>No feedback given</p>
        )}
      </>
    );
  }
}

export default App;
