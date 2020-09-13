import React, { Component } from 'react';
import { StyleSheet,   Alert,  Button,   Image,  TextInput,   Text,   View } from 'react-native';
import { Container, CheckBox } from 'native-base';
import http from "../../http-common";
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class Signup extends Component {

  constructor(props) {  
    super(props);  
    this.state = {
      id: '',
      pw: '',
   //   jsonD: myData
  };  
} 
klikPost(){
  http.post('/login/data', {
    id: this.state.id,
    pw: this.state.pw
  })
  .then(function (response) {
    if(response.data.result=="완료"){
      alert('회원가입 완료');
    }

  })
  .catch(function (error) {
    console.log(error);
  });
  this.state.id = '';
  this.state.pw = '';
};
idchk = ()=>{
  http.post('/login/chinfo', {
    id: this.state.id,
    pw: this.state.pw
  })
  .then(function (response) {
    if(response.data.values=="중복"){
      alert('아이디 중복');
    }
    else if(response.data.values=="중복아님"){
      alert('아이디 사용 가능');
    }
  })
  .catch(function (error) {
    console.log(error);
  });

};
  render() {
    const{checked} = this.state;
    return (
      <Container style={style.container}>
        <View>
          <View style={{flexDirection:'row'}}>
            <TextInput
              style={{borderBottomWidth:2, width:'70%',height: 40, backgroundColor: 'white', fontSize: 20, margin:10}}  
              placeholder="아이디" onChangeText={(id) => this.setState({id})} value={this.state.id}>  
            </TextInput>
            <TouchableOpacity style={{flex:1, alignItems:'center' ,justifyContent:'center', }} onPress={this.idchk}>
              <Text style={{fontSize: 20,}}>중복확인</Text>
            </TouchableOpacity>

          </View>
          <TextInput
            style={{borderBottomWidth:2, width:'90%',height: 40, backgroundColor: 'white', fontSize: 20, margin:10}}  
            placeholder="비밀번호" onChangeText={(pw) => this.setState({pw})} value={this.state.pw}>  
          </TextInput> 
          <TextInput
            style={{borderBottomWidth:2, width:'90%',height: 40, backgroundColor: 'white', fontSize: 20, margin:10}}  
            placeholder="비밀번호 확인">  
          </TextInput>  
          <TextInput
            style={{borderBottomWidth:2, width:'90%',height: 40, backgroundColor: 'white', fontSize: 20, margin:10}}  
            placeholder="이름(실명 입력)">  
          </TextInput>
          <View style={{flexDirection:'row'}}>
            <Text>  </Text>
            <TextInput
              style={{borderBottomWidth:2, width:'70%',height: 40, backgroundColor: 'white', fontSize: 20,}}  
              placeholder="휴대전화번호('-'제외)">  
            </TextInput>
            <Button title="인증번호 전송" style={{flex:1,}}></Button>
          </View>
          <TextInput
            style={{borderBottomWidth:2, width:'90%',height: 40, backgroundColor: 'white', fontSize: 20, margin:10}}  
            placeholder="인증번호 입력">  
          </TextInput>
          <TextInput
            style={{borderBottomWidth:2, width:'50%',height: 40, backgroundColor: 'white', fontSize: 20, margin:10}}  
            placeholder="생년월일(8자리 입력)">  
          </TextInput>
        </View>
        <CheckBox
          checked={this.state.checked}  checkedIcon='dot-circle-o'
        />
        <Button title= "회원가입"
          onPress={this.klikPost.bind(this)}

        />
      </Container>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttontt:{ 
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white'}
});

