import React, { Component } from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {Container, Header, Icon} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AddiScreen from './DetailedSetting/AddiScreen'
import DescScreen from './DetailedSetting/DescScreen'
import AdressScreen from './DetailedSetting/AdressScreen'
import DefaultScreen from './DetailedSetting/DefaultScreen'
import styles from '../../../../../css/bottom/Bidding/Setting/SettingCSS'
const Tab = createMaterialTopTabNavigator();

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
        <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="주소" component={AdressScreen} initialParams={this.state.immovablesKind}/>
          <Tab.Screen name="기본정보" component={DefaultScreen} />
          <Tab.Screen name="추가정보" component={AddiScreen} />
          <Tab.Screen name="설명" component={DescScreen} />
        </Tab.Navigator>
        </NavigationContainer>
        <View style={styles.outline}>
          <TouchableOpacity style={styles.findbutton} onPress={{/* 완료 기능 구현 필요 */}}>
              <Text style={{fontSize:20, color:'white'}}>완료</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}


