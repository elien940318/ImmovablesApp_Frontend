import React, { Component } from 'react';
import Modal from "react-native-modal";
import { TouchableOpacity,TextInput, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { Icon, Container, Header, Button } from 'native-base'; 
import RowCardComponent  from '../RowCardComponent'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Board from "../Board"
import WriteModal from '../WriteModal'
import http from "../../../../http-common";
import styels from '../../../css/bottom/Bidding/PurchaseHope.js'
export default class PurchaseHope extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getDB(){
    http.get(`/board/getPost`)
    .then(response => {
      this.state.DBdata = response.data
      this.renderSection()
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
        <Container style={styles.container}>
          <Modal isVisible={this.state.isModalVisible} animationIn='bounceInDown' animationInTiming={1000} animationOut='slideOutDown' animationOutTiming={1000}>
            <WriteModal toggle={() => this.toggle()}/>
          </Modal>          
          <Header style={styles.header}>
            <View style={{justifyContent:'center'}}>
              <Text>거래소</Text>                  
            </View> 
            <View style={{position: 'absolute', right: 0}}>
              <Button onPress={() => this.toggle()} style={{backgroundColor:'white'}}>
                <Icon name='ios-create' style={{color:'black'}}/>
              </Button>
            </View>                   
          </Header>
          <View style={styles.search}>                  
              <TextInput  
                  style={{height: '80%', width: '80%', backgroundColor: 'whitesmoke', fontSize: 20, margin:10}}  
                  placeholder="검색"  
                  onChangeText={(searchInfo) => this.setState({searchInfo})}  
              />
              <TouchableOpacity>
              <Icon name='ios-search'/>
              <Text>검색</Text>
              </TouchableOpacity>
          </View>        

          <View style={styles.category}>
            <TouchableOpacity style={[ this.state.activeIndex === 0 ? {height:40,borderBottomWidth:2} :{height:40}], { padding: 15, backgroundColor:'string', flexDirection: 'row'}}
              onPress={() => this.segmentClicked(0)}
              active={this.state.activeIndex === 0}>
              <Text style={[ this.state.activeIndex === 0 ? {} : {color: 'grey'} ]}>구매 희망 게시판</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[ this.state.activeIndex === 1 ? {height:40, borderBottomWidth:2} :{height:40}], { padding: 15, backgroundColor:'string', flexDirection: 'row'}}
              onPress={() => this.segmentClicked(1)}
              active={this.state.activeIndex === 1}>
              <Text style={ [ this.state.activeIndex === 1 ? {} : {color: 'grey'} ]}>거래 게시판</Text>
            </TouchableOpacity>
          </View> 
          <ScrollView>                                             
          {                               
            Board.renderSection() 
          }
          </ScrollView>
        </Container>
    );
  }
}
