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
      addiData:{},
      describeData:[],
      totalData: [],
      submitButton:false
    };
    
  }

  completeDetailSetting(){
    this.state.totalData.push(this.state.data)
    this.state.totalData.push(this.state.defaultData)
    this.state.totalData.push(this.state.addiData)
    this.state.totalData.push(this.state.describeData)
    this.props.dataTransfer(this.state.totalData)
    
  }
  /** ############# 데이터 저장 #############*/
  addressUpdater=(address)=>{
    this.state.data.address = address;
    this.checker()
  }
  defaultDataUpdater=(data)=>{
    this.state.defaultData = data;
    this.checker()
  }
  addiDataUpdater=(data)=>{
    this.state.addiData = data;
    this.checker()
  }
  describeDataUpdater=(data)=>{
    this.state.describeData = data
    this.checker()
  }
  /** ############# 유효성 체크 #############*/
  checker(){
    if(this.state.data.address !== ''& // 주소
    this.state.defaultData.tradeType !== ''& // 거래 종류가 정해졌는지
    this.state.defaultData.floor !== ''&
    this.state.defaultData.manage !== 0&
    this.state.defaultData.moveIn !== 0&
    this.state.defaultData.park !== 0&
    this.state.defaultData.rent !== 0&
    this.state.defaultData.size !== ''&
    (this.state.defaultData.tradeType !== '매매'?this.state.defaultData.deposit !== '':true)&
    this.state.addiData.gasKinds !== ''&
    this.state.addiData.loan !== 0&
    this.state.addiData.option !== 0&
    this.state.addiData.pet !== 0){
      this.setState({submitButton:true})
    }
  }
//initialParams={this.state.immovablesKind}
  render() {
    this.state.data.immovablesKind = this.props.name;
    return (
      <Container>
        <Header style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <Icon name='ios-arrow-back' onPress={this.props.SettingInfoVisible1}/>
          <Text>{this.state.data.immovablesKind} 세부설정</Text>
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
          <Tab.Screen name="추가정보" children={()=>
            <AddiScreen 
            addiDataUpdater={this.addiDataUpdater}
            /> } />
          <Tab.Screen name="설명" children={()=>
            <DescScreen 
            describeDataUpdater={this.describeDataUpdater}
          /> } />
        </Tab.Navigator>
        
        <View style={styles.outline}>
            {
              this.state.submitButton?
              <TouchableOpacity style={styles.findbutton} onPress={()=>{this.completeDetailSetting()}}>
                <Text style={{fontSize:20, color:'white'}}>완료</Text>
              </TouchableOpacity>
              :
              <TouchableOpacity style={styles.findbutton} onPress={()=>alert('내용을 채워주세요!')}>
                <Text style={{fontSize:20, color:'white'}}>모두 선택해 주세요.</Text>
              </TouchableOpacity>
            }
        </View>
      </Container>
    );
  }
}


