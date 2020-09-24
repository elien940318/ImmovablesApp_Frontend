import React, { PureComponent } from 'react';
import {TextInput,TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Container, Icon} from 'native-base';
import Modal from "react-native-modal";
import FindAdress from './FindAdress/FindAdress'
import styles from '../../../../../../css/bottom/Bidding/Setting/AdressScreenCSS.js'
export default class AdressScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible : false,
      immovablesKind : ''
    };
  }
  
  toggle(){
    this.setState({isModalVisible:!this.state.isModalVisible});
  }
 
  render() {
    this.state.immovablesKind= Object.values(this.props.route.params).toString().replace(/,/gi,'')
    return (
        <Container style={styles.container}>
          <Modal isVisible={this.state.isModalVisible}>
            <FindAdress toggle={()=>{this.toggle()}} immovablesKind={this.state.immovablesKind}/>
          </Modal>
          <View style={styles.Box}>
            <Text style={{margin:15, fontSize: 15 }}>주소는 동, 면, 읍, 단지명 까지만 노출됩니다.</Text>
            <TouchableOpacity 
              style={styles.Button}
              onPress={()=>{this.toggle()}}
              >
              <Text style={{}}>주소 찾기</Text>  
            </TouchableOpacity>
            <View/>
          </View>
        </Container>
    );
  }
}

