import React, { Component } from 'react';
import {TextInput,TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Container, Header, Icon} from 'native-base';
import { createAppContainer } from 'react-navigation'
import {createMaterialTopTabNavigator } from 'react-navigation-tabs'
import AddiScreen from './DetailedSetting/AddiScreen'
import DescScreen from './DetailedSetting/DescScreen'
import AdressScreen from './DetailedSetting/AdressScreen'
import DefaultScreen from './DetailedSetting/DefaultScreen'

const TabNavigator = createMaterialTopTabNavigator({
    주소: { screen: AdressScreen},
    기본정보: { screen: DefaultScreen },
    추가정보: { screen: AddiScreen },
    설명: { screen: DescScreen },
  },{
    swipeEnabled: true,
    tabBarOptions: {
      style : {
        backgroundColor:'whitesmoke',
      },
      iconStyle: {height:'20%'},
      activeTintColor:'#004aff',
      inactiveTintColor:'#9c9a9a',
      upperCaseLabel: false,
      indicatorStyle: {
        backgroundColor: false
    },
    },

  });
const AppContainer = createAppContainer(TabNavigator);

export default class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ch2:0,
      ch3:0,
      ch4:0
    };
  }
  static navigationOptions = {
    title: 'Great',
  };
 
  render() {
    return (
      <Container>
        <Header style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <Icon name='ios-arrow-back' onPress={this.props.SettingInfoVisible1}/>
          <Text>세부설정</Text>
          <Text></Text>
        </Header>
        <AppContainer/>
      </Container>
    );
  }
}