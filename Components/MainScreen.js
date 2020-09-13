import React, {Component} from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Icon } from 'native-base';
import { createAppContainer } from 'react-navigation'
import {createMaterialTopTabNavigator } from 'react-navigation-tabs'

import home from './bottom/HomeComponents/Home'
import like from './bottom/like'
import map from './bottom/Map'
import Board from './bottom/Bidding/Board'
import plus from './bottom/PlusComponents/plus'
//import write from './bottom/Write/Write'
//import EditInfo from './bottom/PlusComponents/EditInfo'

const AppTabNavigator = createMaterialTopTabNavigator({
    홈 : {screen: home},
    관심목록: {screen:like},
    지도: {screen:map},
    게시판: {screen:Board},
    더보기: {screen:plus}
}, {
  animationEnabled: true,
  swipeEnabled: false,
  tabBarPosition: "bottom",
  tabBarOptions: {
    style : {/*
      ...Platform.select({
        ios:{
          backgroundColor:'white',
        }
      })*/
      backgroundColor:'white',
    },
    iconStyle: {height:30},
    activeTintColor:'#000',
    inactiveTintColor:'#d1cece',
    upperCaseLabel: false,
    showLabel: true,
    showIcon:true,
  }
});

const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {

  // navigationOptions 코드 추가
  static navigationOptions = {
    //headerLeft: <Icon name='ios-camera' style={{ paddingLeft:10 }}/>,
    //headerRight: <Icon name='ios-send' style={{ paddingRight:10 }}/>,
    headerShown: false
  }

  render() {
    return (
      <AppTabContainet/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});