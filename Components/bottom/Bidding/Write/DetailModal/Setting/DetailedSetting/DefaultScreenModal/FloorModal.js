import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native';
import {Icon, Header} from 'native-base';
import styles from '../../../../../../../css/bottom/Bidding/Setting/DefaultScreenCSS.js'

class FloorModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      floor:'',
    };
  }

  render() {
    return (
        <Modal
        animationType="fade"
        transparent={false}
        visible={this.props.modalSwitch}
        onRequestClose={() => {
        this.props.floorModalVisible(this.state.floor);
    }}
    backdrop={true}
    >
      <View style={{flex:1}}>
        <Header style ={{justifyContent:'space-between'}}>
          <Icon name='ios-arrow-back' onPress={()=>{this.props.floorModalVisible(this.state.floor);}}/>
          <Text>거래종류</Text>
          <Text/>
        </Header>
        <View style={{flexDirection:'column', alignItems:'center', height:'80%'}}>
          <View  style={{justifyContent: 'center',alignItems:'center',height:'10%'}}>
            <Text>층 수를 입력하세요.</Text>
          </View>
          <View style={{width:'90%', justifyContent: 'flex-start',}}>
            <Text style={{fontSize:15}}>층 수</Text>
          </View>
          <TextInput
            keyboardType='numeric'          
            onChangeText={(text)=>this.setState({floor:text})}
            style={{color:'#000', width:'90%', height:40, borderWidth:0.5, borderRadius:5, justifyContent:'center', alignItems:'center'}}
            placeholder='0'
          >
          </TextInput>
        </View>
        <View style={{alignItems:'center', justifyContent:'center', width:'100%'}}>
          <TouchableOpacity 
            onPress={()=>this.props.floorModalVisible(this.state.floor)}
            style={styles.inputbutton}>
            <Text>입력</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </Modal>
    );
  }
}

export default FloorModal;
