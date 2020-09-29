import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native';
import {Icon, Header} from 'native-base';
import styles from '../../../../../../../css/bottom/Bidding/Setting/DefaultScreenCSS.js'

class LeaseTypeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        deposit: '',
        price: '',
    };
  }

  depositHandle = (text) => {
    if (/^\d+$/.test(text)) {
      this.setState({deposit: text});
    }
  };
  priceHandle = (text) => {
    if (/^\d+$/.test(text)) {
      this.setState({price: text});
    }
  };

  render() {
    return (
        <Modal
        animationType="fade"
        transparent={false}
        visible={this.props.modalSwitch}
        onRequestClose={() => {
        this.props.leaseTypeModalVisible(this.state.deposit, this.state.price);
    }}
    backdrop={true}
    >
      <View style={{flex:1}}>
        <Header style ={{justifyContent:'space-between', width:'100%'}}>
          <Icon name='ios-arrow-back' onPress={()=>{this.props.leaseTypeModalVisible(this.state.deposit, this.state.price)}}/>
          <Text>가격</Text>
          <Text/>
        </Header>
        <View style ={{height:'80%', alignItems:'center'}}>
          <View style={{height:'10%', justifyContent:'center', alignItems:'center'}}>
            <Text>가격을 입력하세요.</Text>
          </View>
          <View style={{flexDirection:'column', alignItems:'flex-start', width:'90%'}}>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:15}}>보증금(전세금)</Text><Text style={{fontSize:15, color:'#BEBEBE'}}> 만원</Text>
            </View>
            <TextInput
              keyboardType='numeric'
              onChangeText={(text)=>this.depositHandle(text)}
              style={styles.pricebutton}
              placeholder='0'/>
          </View>
          <View style={{width:'90%', height:'10%', alignItems: 'flex-start'}}>
            <Text>전세는 전세금만 입력하세요.</Text>
          </View>

          <View style={{flexDirection:'column', alignItems:'flex-start', width:'90%'}}>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:15}}>월세</Text><Text style={{fontSize:15, color:'#BEBEBE'}}> 만원</Text>
            </View>
            <TextInput 
            keyboardType='numeric'
            onChangeText={(text)=>this.priceHandle(text)}
            style={styles.pricebutton}
            placeholder='0'/>
          </View>
        </View>
        <View style={{alignItems:'center', justifyContent:'center', width:'100%'}}>
          <TouchableOpacity
            onPress={()=>{
              this.props.leaseTypeModalVisible(this.state.deposit, this.state.price);
            }}
            style={styles.inputbutton}>
            <Text>입력</Text>
          </TouchableOpacity>
        </View>
      </View>
      </Modal>
    );
  }
}

export default LeaseTypeModal;
