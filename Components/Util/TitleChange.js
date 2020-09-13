import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Login from './Login/Login' 
import home from './bottom/home'
import like from './bottom/like'
import map from './bottom/map'
import sell from './bottom/sell'
import plus from './bottom/plus'
class TitleChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> TitleChange </Text>
      </View>
    );
  }
}

export default TitleChange;
