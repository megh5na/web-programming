import React, { Component } from 'react';

class Life extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor');
  }
  componentDidMount() {
    console.log('Mounted');
  }
  componentDidUpdate() {
    console.log('Updated');
  }
  componentWillUnmount() {
    console.log('Unmounted');
  }
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update
        </button>
      </div>
    );
  }
}

export default Life;