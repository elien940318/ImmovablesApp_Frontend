import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { Container, Header, Icon  } from 'native-base';
import Modal from "react-native-modal";
import DetailAdress from './DetailAdress'
import CityFinder from './CityFind/CityFinder'
import ContryFinder from './CityFind/ContryFinder'
import TownFinder from './CityFind/TownFinder'
import styles from '../../../../../../../css/bottom/Bidding/Setting/CityFind/FindAdressCSS.js'
import { ScrollView } from 'react-native';
import httpCommon from '../../../../../../../../http-common';
class FindAdress extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cityModalVisible: false,
        contryModalVisible: false,
        townModalVisible: false,
        cityData:['시/도 선택',null],
        contryData:['시/군/구 선택',null],
        townData:['동/면/읍 선택',null],
    };
  }
  /* 변경 데이터 저장 메소드 */
  citySetting=(cityName, cityCode)=>{
    this.setState({cityData:[cityName,cityCode],contryData:['시/군/구 선택',null],townData:['동/면/읍 선택',null]})
  }
  contrySetting=(contryName, contryCode)=>{
    this.setState({contryData:[contryName,contryCode],townData:['동/면/읍 선택',null]})
  }
  townSetting=(townName, townCode)=>{
    this.setState({townData:[townName,townCode]})
  }
  /* 모달 on/off 메소드 */
  cityToggle() {
    this.setState({cityModalVisible:!this.state.cityModalVisible});
  }
  contryToggle(){
    this.setState({contryModalVisible:!this.state.contryModalVisible});
  }
  townToggle(){
    this.setState({townModalVisible:!this.state.townModalVisible});
  }
  /* 검색 메소드 */
  villaSearch=()=>{ // 빌라 검색
    http.get(`/Address/getApart/${this.state.cityData[1]}/${this.state.contryData[1]}/${this.state.townData[1]}/${this.state.cityData/* <-- 삭제 후 검색어 */}`)
      .then(response=>{
        //response.data
      }).catch(e=>{
        console.log(e)
      })
  }
  officetelSearch=()=>{ // 아파트 검색
    http.get(`/Address/getOfficetel/${this.state.cityData[1]}/${this.state.contryData[1]}/${this.state.townData[1]}/${this.state.cityData/* <-- 삭제 후 검색어 */}`)
      .then(response=>{
        //response.data
      }).catch(e=>{
        console.log(e)
      })
  }
  apartSearch=()=>{ // 아파트 검색
    http.get(`/Address/getVilla/${this.state.cityData[1]}/${this.state.contryData[1]}/${this.state.townData[1]}/${this.state.cityData/* <-- 삭제 후 검색어 */}`)
      .then(response=>{
        //response.data
      }).catch(e=>{
        console.log(e)
      })
  }

  render() {
    return (
      <Container style={styles.container}>
          <Modal isVisible={this.state.cityModalVisible}>
            <CityFinder cityToggle={()=>this.cityToggle()} citySetting={this.citySetting} />
          </Modal>
          <Modal isVisible={this.state.contryModalVisible}>
            <ContryFinder contryToggle={()=>this.contryToggle()} contrySetting={this.contrySetting} cityNum={this.state.cityData[1]}/>
          </Modal>
          <Modal isVisible={this.state.townModalVisible}>
            <TownFinder townToggle={()=>this.townToggle()} townSetting={this.townSetting} contryNum={this.state.contryData[1]}/>
          </Modal>
          <Header style ={{justifyContent:'space-between', alignItems:'center'}}> 
            <Icon name='ios-arrow-back' onPress={()=>{this.props.toggle()}}/>
            <Text>주소찾기</Text>
            <Text/>
          </Header>
          <View>
            <View style={{height:'20%', justifyContent:'center', alignItems:'center'}}>
                <Text>지역 및 단지명을 선택해주세요</Text>
            </View>
            <View style={{height:'50%'}}>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', height:'25%'}}>
                    <TouchableOpacity 
                      onPress={()=>{this.cityToggle();}}
                      style={styles.bottombutton}>
                        <Text>{this.state.cityData[0]}</Text>
                        <Icon name='ios-arrow-forward'/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      onPress={()=>{this.state.cityData[1] !== null?this.contryToggle():alert('시/도를 먼저 선택하여 주세요.')}}
                      style={styles.bottombutton}>
                        <Text>{this.state.contryData[0]}</Text>
                        <Icon name='ios-arrow-forward'/>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', height:'25%'}}>
                    <TouchableOpacity 
                      onPress={()=>{this.state.contryData[1] !== null?this.townToggle():alert('시/군/구 를 먼저 선택하여 주세요.')}}
                      style={styles.bottombutton1}>
                        <Text>{this.state.townData[0]}</Text>
                        <Icon name='ios-arrow-forward'/>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', height:'25%'}}>
                    <TextInput placeholder='단지명을 입력해주세요.' placeholderTextColor='#0c0c0c' style={styles.bottombutton1}>

                    </TextInput>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', height:'25%'}}>
                    <TouchableOpacity style={styles.bottombutton1}>
                        <Text/>
                        <Text>검색하기</Text>
                        <Text/>
                    </TouchableOpacity>
                </View>
                <ScrollView>

                </ScrollView>
            </View>
          </View>
          <View style={{flex:1,flexDirection:'column',justifyContent:'flex-end',alignItems:'center'}}>
            <TouchableOpacity style={{width:'100%',height:50, backgroundColor:'#FF5C3B', justifyContent:'center', alignItems:'center' }} onPress={()=>{this.props.toggle()}}>
                <Text style={{fontSize:20, color:'white'}}>완료 후 돌아가기</Text>
            </TouchableOpacity>
          </View>
      </Container>
    );
  }
}

export default FindAdress;
