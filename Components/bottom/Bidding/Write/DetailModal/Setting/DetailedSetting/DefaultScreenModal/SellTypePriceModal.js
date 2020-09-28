import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native';
import {Icon, Header} from 'native-base';
import styles from '../../../../../../../css/bottom/Bidding/Setting/DefaultScreenCSS.js'

class SellTypePriceModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
    };
  }

  Priceresulthandle = (text) => {
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
        this.props.sellTypeModalVisible(this.state.price);
      }}
      backdrop={true}>
        <View style={{flex:1}}>
          <Header style ={{justifyContent:'space-between', width:'100%'}}>
            <Icon name='ios-arrow-back' onPress={()=>{this.props.sellTypeModalVisible(this.state.price);}}/>
            <Text>가격</Text>
            <Text/>
          </Header>
          <View style={{flexDirection:'column', alignItems:'center', height:'80%'}}>
            <View  style={{justifyContent: 'center',alignItems:'center',height:'10%'}}>
              <Text>가격을 입력하세요.</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:15}}>매매금</Text><Text style={{fontSize:15, color:'#BEBEBE'}}> 만원</Text>
            </View>
              <TextInput
                keyboardType='numeric'
                onChangeText={(text)=>this.Priceresulthandle(text)}
                style={{color:'#000', width:'90%', height:40, borderWidth:0.5, borderRadius:5, justifyContent:'center', alignItems:'center'}}
                placeholder='0'/>
          </View>
            <View style={{alignItems:'center', justifyContent:'center', width:'100%'}}>
              <TouchableOpacity
                onPress={()=>{
                  this.props.sellTypeModalVisible(this.state.price);
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

export default SellTypePriceModal;
