import React, { Component } from 'react';

class Temp extends Component {
  state = { celsius: '', fahrenheit: '' };

  handleCelsius = (e) => {
    const c = e.target.value;
    const f = c ? (c * 9/5 + 32).toFixed(2) : '';
    this.setState({ celsius: c, fahrenheit: f });
  };

  handleFahrenheit = (e) => {
    const f = e.target.value;
    const c = f ? ((f - 32) * 5/9).toFixed(2) : '';
    this.setState({ fahrenheit: f, celsius: c });
  };

  render() {
    return (
      <div>
        <input
          type="number"
          value={this.state.celsius}
          onChange={this.handleCelsius}
          placeholder="Celsius"
        />
        <input
          type="number"
          value={this.state.fahrenheit}
          onChange={this.handleFahrenheit}
          placeholder="Fahrenheit"
        />
      </div>
    );
  }
}

export default Temp;