import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import {Icon, Header} from 'native-base';
import styles from '../../../../../../../css/bottom/Bidding/Setting/DefaultScreenCSS.js'

class TradeTypeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        typebutton: 3,
        typeresult: ''
    };
  }

  render() {
    return (
        <Modal
        animationType="fade"
        transparent={false}
        visible={this.props.modalSwitch}
        onRequestClose={() => {
        this.props.tradeTypeModallVisible(this.state.typeresult);
    }}
    backdrop={true}
    >
      <View style={{flex:1}}>
        <Header style ={{justifyContent:'space-between'}}>
          <Icon name='ios-arrow-back' onPress={()=>{this.props.tradeTypeModallVisible(this.state.typeresult);}}/>
          <Text>거래종류</Text>
          <Text/>
        </Header>
        <View style={{flexDirection:'column', alignItems:'center', height:'80%'}}>
          <View  style={{justifyContent: 'center',alignItems:'center',height:'10%'}}>
            <Text>거래종류를 입력하세요.</Text>
          </View>
          <TouchableOpacity 
            onPress={()=>{this.setState({typeresult:'매매', typebutton: 1});}} style={this.state.typebutton === 1? styles.ontypebutton : styles.offtypebutton} >
            <Text>매매</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>{this.setState({typeresult:'전.월세', typebutton: 2});}} style={this.state.typebutton === 2? styles.ontypebutton : styles.offtypebutton}>
            <Text>전.월세</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems:'center', justifyContent:'center', width:'100%'}}>
          <TouchableOpacity 
            onPress={()=>this.props.tradeTypeModallVisible(this.state.typeresult)}
            style={styles.inputbutton}>
            <Text>입력</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      </Modal>
    );
  }
}

export default TradeTypeModal;
