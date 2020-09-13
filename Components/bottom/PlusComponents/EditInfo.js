import React, { Component } from 'react';
import {AsyncStorage,TextInput,View, Text, StyleSheet } from 'react-native';
import {Container} from 'native-base';
import Modal from "react-native-modal";
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class EditInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
    AsyncStorage.getItem('idchk').then(value =>
    this.setState({ getValue: value })
    );
}
  ChkInfo=()=>{
    <Modal
    animationType="fade"
    transparent={true}
    visible={this.state.modalVisible}
    onRequestClose={() => {
      this.setModalVisible(!this.state.modalVisible);
    }}
    backdrop={true}
    >
            
    </Modal>
  }
  render() {
    return (
        <View style={{justifyContent:'center',alignItems:'center', margin:3}}>
            <View style={styles.background}>
                <Text>회원정보를 수정하려면 ID'{this.state.getValue}'의 암호를 입력하십시오.</Text>
                <TextInput style={styles.pw} placeholder='PW'/>
                <TouchableOpacity onPress={this.props.ahekf}>
                    <Text>로그인</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    background:{
        justifyContent:'center', 
        alignItems:'center',
        width: 300, 
        height: 150, 
        borderWidth:2, 
        borderColor:'#a7a7a7', 
        borderRadius:5, 
        backgroundColor:'#c0c0c0'
    },
    pw:{
        justifyContent:'center', 
        alignItems:'center',
        width: 250, 
        height: 30, 
        borderWidth:2, 
        borderColor:'#a7a7a7', 
        borderRadius:5,   
    }

});