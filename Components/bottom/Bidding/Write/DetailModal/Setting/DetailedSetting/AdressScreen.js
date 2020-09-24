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
      isModalVisible : false
    };
  }
  
  toggle(){
    this.setState({isModalVisible:!this.state.isModalVisible});
  }
 
  render() {
    // console.log(this.props.navigation.state.params)
    console.log(this.props)
    return (
        <Container style={styles.container}>
          <Modal isVisible={this.state.isModalVisible}>
            <FindAdress toggle={()=>{this.toggle()}}/>
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

