import React, { Component } from 'react';

class User extends Component {
  render() {
    const { firstName, lastName } = this.props;
    return <p>Hello, {firstName} {lastName}!</p>;
  }
}

export default User;