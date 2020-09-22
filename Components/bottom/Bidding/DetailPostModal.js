import React, { Component } from 'react';
import {TouchableWithoutFeedback,TouchableOpacity,TextInput, StyleSheet, Text, View, Dimensions, Modal, TouchableHighlight, ScrollView} from 'react-native';
import { Icon, Container, Header, } from 'native-base'; 
import styles from '../../css/bottom/Bidding/DetailPostModal'
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4)

export default class DetailPostModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible : false,
      data : props.toData,
      toggle : props.toggle
    };
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


  render() {
    return (
      <Container style={styles.container}>
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
          {/*사진 View*/}
          <View style={styles.img}>
            <Text style={{margin:15}}>사진</Text>        
          </View>
          <View style={{backgroundColor: 'white'}}>
            <View style={styles.hr}/>
          </View>          
          {/* 가격 뷰 // DB에 전,월세 저장 */}
          <View style={styles.price}>
            <Text style={{fontSize:25}}>월세 {this.state.data.price}</Text>
          </View>                 
          {/*설명*/}
          <View style={styles.content}>
            <Text>{this.state.data.content}</Text>
          </View>
          <View style={{backgroundColor: 'white'}}>
            <View style={styles.hr}/>
          </View> 
          {/*부동산*/}
          <View style={styles.category}>
            <View style={styles.info}>
              <Text>{this.state.data.author}</Text>
            </View>
          </View>
          <View style={{backgroundColor: 'white'}}>
            <View style={styles.hr}/>
          </View>  
        </ScrollView>
      </Container>
    );
  }
}
