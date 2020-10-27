import React, { Component } from 'react';
import Modal from "react-native-modal";
import {Image,TouchableWithoutFeedback,TouchableOpacity,TextInput, StyleSheet, Text, View, Dimensions, TouchableHighlight, ScrollView} from 'react-native';
import { Icon, Container, Header, } from 'native-base'; 
import DoRequest from './BiddingActiveModal/DoRequest'
import styles from '../../css/bottom/Bidding/DetailPostModalCSS'
import * as http from '../../../http-common'
import DPMInfo from '../Bidding/DetailPostModaldata/DPMInfo.js'
export default class DetailPostModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible : false,
      data : this.props.toData,
      toggle : props.toggle,
      chkheart:0,
      isModalVisible: false,
      imges : [],
      preference: []
    };
  }
  toggle(){
    this.setState({isModalVisible:!this.state.isModalVisible});
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  setHeart(){
    if(this.state.chkheart===0)
      this.setState({chkheart:1})
    else if(this.state.chkheart===1)
      this.setState({chkheart:0})
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
                 return<Image key={index} source={{uri:http.connAPI+'/board/getWishImg/'+e}}  style={{ height:250, width:350 }}/>
                
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
