import React, { Component } from 'react';
import Modal from "react-native-modal";
import { TouchableOpacity,TextInput, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { Icon, Container, Header, Button } from 'native-base'; 
import RowCardComponent  from '../RowCardComponent'; 
import WriteModal from '../WriteModal'
import styles from '../../../css/bottom/Bidding/BoardHeader.js'
export default class BoardHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }
  toggle(){
    this.setState({isModalVisible: !this.state.isModalVisible});
  }
  render() {
    return (
        <View>
            <Header style={styles.header}>
            <View style={{justifyContent:'center'}}>
                <Text>거래소</Text>                  
            </View> 
            <Modal isVisible={this.state.isModalVisible} animationIn='bounceInDown' animationInTiming={1000} animationOut='slideOutDown' animationOutTiming={1000}>
              <WriteModal toggle={() => this.toggle()}/>
            </Modal> 
            <View style={{position: 'absolute', right: 0}}>
                <Button onPress={() => this.toggle()} style={{backgroundColor:'white'}}>
                <Icon name='ios-create' style={{color:'black'}}/>
                </Button>
            </View>                   
            </Header>
            <View style={styles.search}>                  
                <TextInput  
                    style={{height: '80%', width: '80%', backgroundColor: 'whitesmoke', fontSize: 20, margin:10}}  
                    placeholder="검색"  
                    onChangeText={(searchInfo) => this.setState({searchInfo})}  
                />
                <TouchableOpacity>
                <Icon name='ios-search'/>
                <Text>검색</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}
