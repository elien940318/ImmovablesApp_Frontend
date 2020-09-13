import React, { Component } from 'react';
import {TouchableWithoutFeedback,TouchableOpacity,TextInput, StyleSheet, Text, View, Dimensions, Modal, TouchableHighlight, ScrollView} from 'react-native';
import { Icon, Container, Header, } from 'native-base'; 

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
            {this.state.data.name} 
          </Text>   
        </Header>
        
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      margin:-20,
      backgroundColor: 'whitesmoke'
    },
  header:{
    backgroundColor: 'whitesmoke',
    alignItems:'center',
    justifyContent: 'center',
    flexDirection:'row'
  },
  img:{
    alignItems:'center',
    justifyContent: 'center',
  },
  price:{
    alignItems:'center',
    justifyContent: 'center',
  },
  info:{
    alignItems:'center',
    justifyContent: 'center',
  },
  br: {
    height: '10%',
    backgroundColor: 'whitesmoke'
  }


});