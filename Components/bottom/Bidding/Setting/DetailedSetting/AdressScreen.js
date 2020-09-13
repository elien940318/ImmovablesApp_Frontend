import React, { PureComponent } from 'react';
import {TextInput,TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Container, Icon} from 'native-base';
import Modal from "react-native-modal";
import FindAdress from './FindAdress/FindAdress'
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
    return (
        <Container style={styles.container}>
          <Modal isVisible={this.state.isModalVisible}>
            <FindAdress toggle={()=>{this.toggle()}}/>
          </Modal>
          <View style={{ margin:3, width:'90%', height:'80%', borderWidth:0.5, borderRadius:5, alignItems:'center'}}>
            <Text style={{margin:15, fontSize: 15 }}>주소는 동, 면, 읍, 단지명 까지만 노출됩니다.</Text>
            <TouchableOpacity 
              style={{width:'90%', height:'10%', borderWidth:0.5, borderRadius:5, justifyContent:'center', alignItems:'center'}}
              onPress={()=>{this.toggle()}}
              >
              <Text style={{}}>주소 찾기</Text>  
            </TouchableOpacity>
          </View>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
 
});