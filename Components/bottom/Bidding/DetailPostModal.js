import React, { Component } from 'react';
import Modal from "react-native-modal";
import {Image,TouchableWithoutFeedback,TouchableOpacity,TextInput, StyleSheet, Text, View, Dimensions, TouchableHighlight, ScrollView} from 'react-native';
import { Icon, Container, Header, } from 'native-base'; 
import DoRequest from './BiddingActiveModal/DoRequest'
import styles from '../../css/bottom/Bidding/DetailPostModalCSS'
import * as imageftp from "../../../http-common";
import http from "../../../http-common";
import DPMInfo from '../Bidding/DetailPostModaldata/DPMInfo.js'
import firebase from 'firebase';

export default class DetailPostModal extends Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      modalVisible : false,
      data : this.props.toData,
      toggle : props.toggle,
      chkheart: null,
      isModalVisible: false,
      imges : [],
      preference: [],
      email: 'changkeereum@gmail.com',
    };
  }

  componentDidMount ()
  {    
    // 빌드시 주석 풀것... oauth 기능 빌드후 작동하므로...
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.setState({email: user.email})
        this.postLikeStatus(user.email);  // 현재 찜했는지 여부 확인, chkheart 값 초기화 용도.
        this.putRecentList(user.email);   // recentlist에 추가되어있는지 체크
      }
      else {
          // alert("firebase로부터 user profile 가져오는 중 오류 발생.");
          this.postLikeStatus(this.state.email);  // 현재 찜했는지 여부 확인, chkheart 값 초기화 용도.
          this.putRecentList(this.state.email);   // recentlist에 추가되어있는지 체크
      }
    });

  }

  toggle(){
    this.setState({isModalVisible:!this.state.isModalVisible});
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setHeart(){
    if(this.state.chkheart===0)
    {
      this.setState({chkheart:1})
      this.putLikeList()
    }
    else if(this.state.chkheart===1)
    {
      this.setState({chkheart:0})
      this.deleteLikeList();
    }
  }

  // 현재 해당 Component의 찜 상태를 가져옴.
  postLikeStatus(email)
  {
    http.post('/board/postLikeStatus', {
      _email: email,
      _option: '1',
      _idx: this.state.data.idx,
    })
    .then((response) => {
      var temp = Object.keys(response.data).length;
      if(temp == 1)
        this.setState({chkheart: 1})
      else if (temp == 0)
        this.setState({chkheart: 0})
    })
    .catch(function (error) {
        alert("## error: postLikeStatus DB접근 오류");
    });
  }

  // 최근 본방에 추가
  putRecentList(email)
  {
    http.put('/board/putRecentList', {
      _email: email,
      _option: '1',
      _idx: this.state.data.idx,
    })
    .then((response) => {})
    .catch(function (error) {
        alert("## error: putRecentList DB접근 오류");
    });
  }

  // 찜한 방에 추가
  putLikeList()
  {
    http.put('/board/putLikeList', {
      _email: this.state.email,
      _option: '1',
      _idx: this.state.data.idx
    })
    .then((response) => {})
    .catch(function (error) {
        alert("## error: putLikeList DB접근 오류");
    });
  }

  // 찜한 방에서 삭제
  deleteLikeList()
  {
    http.post('/board/deleteLikeList', {
      _email: this.state.email,
      _option: '1',
      _idx: this.state.data.idx
    })
    .then((response) => {})
    .catch(function (error) {
        alert("## error: deleteLikeList DB접근 오류");
    });
  }

  render() {
    this.state.data = this.props.toData
    this.state.imges = this.state.data.img.split(',')
    this.state.imges.pop()
    let l = this.state.data.preference.split(',')
    l.pop()
    this.state.preference = l 
    
    return (
      <Container style={styles.container}>
        <Modal isVisible={this.state.isModalVisible}>
          <DoRequest toggle3={() => this.toggle()} toData={this.state.data}/>
        </Modal>
        <Header style={styles.header}>
          <Icon 
            name='ios-close'
            style={{fontSize: 50, color: 'black', position: 'absolute', left: 15}}
            onPress={this.props.toggle2}
          />
          <Text> 
            {this.state.data.title} 
          </Text>   
        </Header>
        <ScrollView>
        <View style={styles.img}>
            <ScrollView style={{margin:10}} horizontal={true}>
            {
              
              this.state.imges.length > 0?
              this.state.imges.map((e, index)=>{
                 return<Image key={index} source={{uri:imageftp.connAPI+'/board/getWishImg/'+e}}  style={{ height:250, width:350 }}/>
                
              }):
              <View style ={{flex:1,justifyContent:'center', alignItems:'center'}}>
              <Text style={{margin:15}}>사진이 없습니다.</Text> 
              </View>
            }
            </ScrollView>
          </View>
          
          <View style={{backgroundColor: 'white'}}>
            <View style={styles.hr}/>
          </View>  
          <View style={styles.describeback}>
          <DPMInfo toData={this.state.data}>
          </DPMInfo>
          </View>
        </ScrollView>
        <View>
          <View style={styles.heartback}>
            <TouchableOpacity 
            style={this.state.chkheart===1? styles.heartradiuson : styles.heartradiusoff}
            onPress={()=>this.setHeart()}
            >
              <Icon name="md-heart" 
                style={this.state.chkheart===1?styles.heartbuttonon:styles.heartbuttonoff}
              >
              </Icon>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.biddingbutton} onPress={()=>{this.toggle()}}>
          <Text style={styles.biddingfont}>입찰하기</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}
