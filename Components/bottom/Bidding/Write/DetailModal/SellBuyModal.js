import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Icon, Container, Header, Button, CheckBox, } from 'native-base'; 
import styles from '../../../../css/bottom/Bidding/WriteModalCSS.js'

class SellBuyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: ''
    };
  }

  categoryName=()=>{
      this.props.categoryChanger1('방 구하기')
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.toggle}>
      <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
        <TouchableWithoutFeedback>
          <View style={{justifyContent:'center', alignItems:'center',width: 300, height: 150, borderWidth:1,borderRadius:10 ,borderColor:'#a7a7a7', backgroundColor:'white'}}>
            <View style={{width:'100%',flexDirection:'row', justifyContent:'space-around'}}>
              <Text style={{width:'33%'}}/>
              <Text style={{color:'black',margin:5, fontWeight:'bold'}}>카테고리를 선택하시오.</Text>
              <View style={{width:'33%', justifyContent:'flex-end', flexDirection:'row'}}>
              <Icon style={{color:'#FF5C3B'}}name="ios-checkmark-circle"></Icon>
              <Text style={{width:'20%'}}/>
              </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={
                this.props.categoryBuyChanger,
                this.props.buyClicker
                
              }> 
            <Text style={{color:'#FF5C3B'}}>방 구하기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={
                this.props.categorySellChanger,
                this.props.sellClicker
              }> 
              <Text style={{color:'#FF5C3B'}}>방 내놓기</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );

  }
}

export default SellBuyModal;
