import React, { Component } from 'react';
import { TouchableOpacity,TextInput, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { Icon, Container, Header, Button } from 'native-base'; 
import RowCardComponent  from '../RowCardComponent'; 
import BoardHeader from "./BoardHeader"
import styles from '../../../css/bottom/Bidding/LoadingCSS.js'
export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container style={styles.container}>
        <BoardHeader/>
        <View style={styles.category}>
        <TouchableOpacity style={[ this.state.activeIndex === 0 ? {height:40,borderBottomWidth:2} :{height:40}], { padding: 15, backgroundColor:'string', flexDirection: 'row'}}
            onPress={() => this.segmentClicked(0)}
            active={this.state.activeIndex === 0}>
            <Text style={[ this.state.activeIndex === 0 ? {} : {color: 'grey'} ]}>구매 희망 게시판</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[ this.state.activeIndex === 1 ? {height:40, borderBottomWidth:2} :{height:40}], { padding: 15, backgroundColor:'string', flexDirection: 'row'}}
            onPress={() => this.segmentClicked(1)}
            active={this.state.activeIndex === 1}>
            <Text style={ [ this.state.activeIndex === 1 ? {} : {color: 'grey'} ]}>거래 게시판</Text>
        </TouchableOpacity>
        </View> 
        <View>
        <Text>로딩중</Text>
        </View>
  </Container>
    );
  }
}
