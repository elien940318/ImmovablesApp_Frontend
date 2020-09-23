import React, { Component } from 'react';
import {Text } from 'react-native';

class ConvenienceChd extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Text>{this.props.data} </Text>
    );
  }
}

export default ConvenienceChd;
