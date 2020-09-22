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
            <View style={{justifyContent:'center', alignItems:'center',width: 300, height: 150, borderWidth:1, borderColor:'#a7a7a7', borderRadius:5, backgroundColor:'#c0c0c0'}}>
              <Text style={{color:'#004aff',margin:5}}>카테고리를 선택하시오.</Text>
              <TouchableOpacity style={styles.button} onPress={
                this.props.categoryBuyChanger,
                this.props.buyClicker
                
              }> 
              <Text style={{color:'#004aff'}}>방 구하기</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={
                this.props.categorySellChanger,
                this.props.sellClicker
              }> 
                <Text style={{color:'#004aff'}}>방 내놓기</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default SellBuyModal;
