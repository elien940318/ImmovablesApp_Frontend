import React, { Component } from 'react';
import {TextInput,TouchableOpacity, View, Text} from 'react-native';
import {Container, Header, Icon} from 'native-base';
import { createAppContainer } from 'react-navigation'
import {createMaterialTopTabNavigator } from 'react-navigation-tabs'
import AddiScreen from './DetailedSetting/AddiScreen'
import DescScreen from './DetailedSetting/DescScreen'
import AdressScreen from './DetailedSetting/AdressScreen'
import DefaultScreen from './DetailedSetting/DefaultScreen'

export default class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      immovablesKind: ''
    };
  }
  static navigationOptions = {
    title: 'Great',
  };
 

  render() {
    this.state.immovablesKind = this.props.name;
    return (
      <Container>
        <Header style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <Icon name='ios-arrow-back' onPress={this.props.SettingInfoVisible1}/>
          <Text>세부설정</Text>
          <Text></Text>
        </Header>
        <AppContainer/>
        <View style={{flexDirection:'column',justifyContent:'flex-end',alignItems:'center'}}>
          <TouchableOpacity style={{width:'100%',height:50, backgroundColor:'#FF5C3B', justifyContent:'center', alignItems:'center' }} onPress={{/* 완료 기능 구현 필요 */}}>
              <Text style={{fontSize:20, color:'white'}}>완료</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}


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
      activeTintColor:'#FF5C3B',
      inactiveTintColor:'#9c9a9a',
      upperCaseLabel: false,
      indicatorStyle: {
        backgroundColor: false
    },
    },

  });
const AppContainer = createAppContainer(TabNavigator);