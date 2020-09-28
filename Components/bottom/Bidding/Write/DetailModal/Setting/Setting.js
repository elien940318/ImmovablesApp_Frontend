import React, { Component } from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {Container, Header, Icon} from 'native-base';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AddiScreen from './DetailedSetting/AddiScreen'
import DescScreen from './DetailedSetting/DescScreen'
import AdressScreen from './DetailedSetting/AdressScreen'
import DefaultScreen from './DetailedSetting/DefaultScreen'
import styles from '../../../../../css/bottom/Bidding/Setting/SettingCSS'
const Tab = createMaterialTopTabNavigator();

export default class Setting extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data:{
        immovablesKind: '',
        address: '',
      },
      defaultData:{},
    };
  }

  completeDetailSetting(){
    console.log('In Setting.js')
    console.log('매물 종류 : '+ this.state.data.immovablesKind)
    console.log()
  }
  /** ############# 데이터 저장 #############*/
  addressUpdater=(address)=>{
    this.state.data.address = address;
  }
  defaultDataUpdater=(data)=>{
    this.state.defaultData = data;
  }
  /** ############# 유효성 체크 #############*/
  checker(){
    console.log('유효성 체크')
  }
//initialParams={this.state.immovablesKind}
  render() {
    this.state.data.immovablesKind = this.props.name;
    return (
      <Container>
        <Header style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <Icon name='ios-arrow-back' onPress={this.props.SettingInfoVisible1}/>
          <Text>세부설정</Text>
          <Text></Text>
        </Header>
        
        <Tab.Navigator>
          <Tab.Screen name="주소" children={()=>
            <AdressScreen 
              immovablesKind={this.state.data.immovablesKind}
              addressUpdater={this.addressUpdater}
              /> }/>
          <Tab.Screen name="기본정보" children={()=>
            <DefaultScreen 
              defaultDataUpdater={this.defaultDataUpdater}
            /> } />
          <Tab.Screen name="추가정보" component={AddiScreen} />
          <Tab.Screen name="설명" component={DescScreen} />
        </Tab.Navigator>
        
        <View style={styles.outline}>
          <TouchableOpacity style={styles.findbutton} onPress={()=>{this.completeDetailSetting()}}>
              <Text style={{fontSize:20, color:'white'}}>완료</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}


