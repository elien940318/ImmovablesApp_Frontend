import React, { PureComponent } from 'react';
import {TextInput,TouchableOpacity, View, Text, StyleSheet, Modal, TouchableWithoutFeedback} from 'react-native';
import {Container, Icon,Header} from 'native-base';
import { ThemeContext } from 'react-navigation';
import TradeTypeModal from './DefaultScreenModal/TradeTypeModal'
import SellTypePriceModal from './DefaultScreenModal/SellTypePriceModal'
import LeaseTypePriceModal from './DefaultScreenModal/LeaseTypeModal'
import FloorModal from './DefaultScreenModal/FloorModal'
import ScaleModal from './DefaultScreenModal/ScaleModal'

import styles from '../../../../../../css/bottom/Bidding/Setting/DefaultScreenCSS.js'
export default class DefaultScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        ch1:0,
        //0. 거래종류 , 1. 매매 가격, 2. 전,월세 가격 3. 층 수, 4. 방 크기, 5. 
        modalSwitch : [false, false, false, false, false], 
        data:{
          tradeType:'',// 매매, 전세 
          deposit:'', //전세일 경우 보증금
          price:'', //월세, 매매 가격, 반전세
          floor:'',
          size:'', // 평 수
          rent: 0, // 단기 임대
          manage : 0, // 관리비
          park : 0, // 주차
          moveIn : 0, // 입주 가능일
        },
    };
  }
  /** ################## 거래종류 모달 ################## */
  tradeTypeModallVisible=(type='')=>{
    this.state.data.tradeType = type
    this.state.modalSwitch[0] = !this.state.modalSwitch[0]
    this.setState(this.state.modalSwitch);
  };
  tradeTypeModal=()=>{
    return(
      <TradeTypeModal 
        modalSwitch={this.state.modalSwitch[0]}
        tradeTypeModallVisible={this.tradeTypeModallVisible}
        />
    )
  }
  /** ################## 매매 가격 모달 ################## */
  sellTypeModalVisible=(price='')=>{
    
    this.state.data.price = price
    this.state.modalSwitch[1] = !this.state.modalSwitch[1]
    this.setState(this.state.modalSwitch);
  }
  sellTypeModal=()=>{
    return(
      <SellTypePriceModal 
        modalSwitch={this.state.modalSwitch[1]}
        sellTypeModalVisible={this.sellTypeModalVisible}
      />
    );
  }
  /** ################## 임대 가격 모달 ################## */
  leaseTypeModalVisible=(deposit='', price='')=>{
    this.state.data.deposit = deposit
    this.state.data.price = price
    this.state.modalSwitch[2] = !this.state.modalSwitch[2]
    this.setState(this.state.modalSwitch);
  }
  leaseTypeModal=()=>{
    return(
      <LeaseTypePriceModal
      modalSwitch={this.state.modalSwitch[2]}
      leaseTypeModalVisible={this.leaseTypeModalVisible}
      />
    )
  }
  /** ################## 층 수 모달 ################## */
  floorModalVisible=(floor='')=>{
    this.state.data.floor = floor
    this.state.modalSwitch[3] = !this.state.modalSwitch[3]
    this.setState(this.state.modalSwitch);
  };
  floorModal=()=>{
    return(
     <FloorModal 
      modalSwitch={this.state.modalSwitch[3]}
      floorModalVisible={this.floorModalVisible}
      />
    )
  }
  /** ################## 방 크기 모달 ################## */
  scaleModalVisible=(size='')=>{
    this.state.data.size = size
    this.state.modalSwitch[4] = !this.state.modalSwitch[4]
    this.setState(this.state.modalSwitch);
  };
  scaleModal=()=>{
    return(
      <ScaleModal 
        modalSwitch={this.state.modalSwitch[4]}
        scaleModalVisible={this.scaleModalVisible}
        />
    )
  }
  /** ################## 단기 임대, 관리비, 주차, 입주 가능일 체크 메소드 ################## */
  rentChecker = (id) => {
    this.state.data.rent = id
    this.setState(this.state.data);
  };
  managementChecker = (id) => {
    this.state.data.manage = id
    this.setState(this.state.data);
  };
  parkChecker = (id) => {
    this.state.data.park = id
    this.setState(this.state.data);
  };
  moveInChecker = (id) => {
    this.state.data.moveIn = id
    this.setState(this.state.data);
  };

  tradeTypeSection(){
    if(this.state.data.tradeType==='매매'){
      return(
        <View style={{width:'90%',height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
          <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}
            onPress={()=>{
              this.sellTypeModalVisible();
            }}>
            <Text>가격</Text>
            <View style={{width:90, flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>
              <Text>{this.state.data.price===''?'입력하세요':'매매'+this.state.data.price+'만 원'}</Text>
              <Icon name='ios-arrow-forward'/>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    else if(this.state.data.tradeType==='전.월세'){
      return(
        <View style={{width:'90%',height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
          <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}
            onPress={()=>{
              this.leaseTypeModalVisible();
            }}>
            <Text>가격</Text>
            <View style={{width:90, flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>
              <Text>{this.state.data.deposit===''?
                      this.state.data.price===''?
                        '입력하세요':
                        '월세 '+this.state.data.price+'만 원'
                      :this.state.data.price===''?
                        '보증금'+this.state.data.deposit+'만 원'
                        :'보증금'+this.state.data.deposit+'만 원 / 월세 '+this.state.data.price+'만 원'}</Text>
              <Icon name='ios-arrow-forward'/>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }
  
secondSection(){
  return(
    <View>
      
    </View>
  )
}

  render() {
    this.props.defaultDataUpdater(this.state.data)
    return (
        <Container style={styles.container}>
          {this.sellTypeModal()}
          {this.leaseTypeModal()}
          {this.tradeTypeModal()}
          {this.floorModal()}
          {this.scaleModal()}
          <View style={{ margin:3, width:'90%', height:'80%', borderWidth:0.5, borderRadius:5, alignItems:'center'}}>
            <View style={{width:'90%', borderBottomWidth:0.5}}>
              <Text style={{margin:15, fontSize: 15 }}>가장 중요한 정보이므로 정확히 입력하세요.</Text>
            </View>
            <View style={styles.typebutton}>
              <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}
                onPress={()=>this.tradeTypeModallVisible()}>
                <Text>거래종류</Text>
                <View style={{width:90, flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>
                  <Text>{this.state.data.tradeType===''?'입력하세요':this.state.data.tradeType}</Text>
                  <Text/>
                  <Icon name='ios-arrow-forward'/>
                </View>
              </TouchableOpacity>
            </View>
            
            {this.tradeTypeSection()}
            <View style={styles.typebutton}>
              <TouchableOpacity 
                onPress={()=>{
                  this.floorModalVisible();
                }}
                style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>층 수</Text>
                <View style={{ width:90, flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>
                  <Text>{this.state.data.floor===''?'입력하세요':this.state.data.floor+'층'}</Text>
                  <Icon name='ios-arrow-forward'/>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.typebutton}>
              <TouchableOpacity 
                onPress={()=>this.scaleModalVisible()}
                style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>방 크기</Text>
                <View style={{ width:90, flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>
                  <Text>{this.state.data.size===''?'입력하세요':this.state.data.size+'평'}</Text>
                  <Icon name='ios-arrow-forward'/>
                </View>
              </TouchableOpacity>
            </View>
            {this.state.data.tradeType!=='매매'?
            <View style={styles.typebutton}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>단기임대</Text>
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={()=>this.rentChecker(1)} style={this.state.data.rent === 1? styles.red : styles.button} >
                    <Text style={this.state.data.rent === 1? styles.white : styles.black}>불가</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.rentChecker(2)} style={this.state.data.rent === 2? styles.red : styles.button} >
                    <Text style={this.state.data.rent === 2? styles.white : styles.black}>가능</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>:null
            }
            <View style={styles.typebutton}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>관리비</Text>
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={()=>this.managementChecker(1)} style={this.state.data.manage === 1? styles.red : styles.button} >
                    <Text style={this.state.data.manage === 1? styles.white : styles.black}>없음</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.managementChecker(2)} style={this.state.data.manage === 2? styles.red : styles.button} >
                    <Text style={this.state.data.manage === 2? styles.white : styles.black}>있음</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.typebutton}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>주차</Text>
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={()=>this.parkChecker(1)} style={this.state.data.park === 1? styles.red : styles.button} >
                    <Text style={this.state.data.park === 1? styles.white : styles.black}>불가</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.parkChecker(2)} style={this.state.data.park === 2? styles.red : styles.button} >
                    <Text style={this.state.data.park === 2? styles.white : styles.black}>가능</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.typebutton}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>입주 가능일</Text>
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={()=>this.moveInChecker(1)} style={this.state.data.moveIn === 1? styles.red : styles.button} >
                    <Text style={this.state.data.moveIn === 1? styles.white : styles.black}>즉시 입주</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.moveInChecker(2)} style={this.state.data.moveIn === 2? styles.red : styles.button} >
                    <Text style={this.state.data.moveIn === 2? styles.white : styles.black}>날짜 협의</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.moveInChecker(3)} style={this.state.data.moveIn === 3? styles.red : styles.button} >
                    <Text style={this.state.data.moveIn === 3? styles.white : styles.black}>직접 입력</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View> 
        </Container>
      );
  }
}
