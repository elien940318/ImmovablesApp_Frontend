import React, { Component, useState } from 'react';
import {TouchableOpacity,AsyncStorage, StyleSheet,   Alert,  Button,   Image,  TextInput,   Text,   View, ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { Icon } from 'native-base';
import CustomButton from '../Util/LoginUtil/CustomButton';
import http from '../../http-common'
import Main from './../MainScreen'
import Signup from '../Signup/Signup'
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class Login extends Component {
    // navigationOptions 코드 추가
    static navigationOptions = {
      header : null
      // title: <Text>어디 살래?</Text>,
    }
    
    constructor(props) {  
        super(props);  
        this.state = {
          id: '',
          pw: '',
          dataku: [],
          textInputData: '',
          getValue: '',
      };  
    }  

     klikPost(){
      http.post('/login/chinfo', {
        id: this.state.id,
        pw: this.state.pw,
        
      })
      .then((response)=> {
        if(response.data.values=="중복"){
          AsyncStorage.setItem('idchk', this.state.id)
          this.setState({id:''})
          this.setState({pw:''})
          this.props.navigation.replace('next')
        }
        else if(response.data.values=="중복아님"){
          alert('아이디 혹은 비밀번호가 다릅니다.');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
      this.props.navigation.replace('next')
    };
    
   /* _doLogin(){
      // do something
      this.props.navigation.replace('next')
    }   */

    render() {    
      return (
        <View style={styles.container}>
          {/* <ImageBackground 
          style={{ width: "100%", height: "70%", alignItems:'center'}}  
          source={require("../../assets/backgroundG.png")}
          resizeMode="cover">
        
          </ImageBackground> */}
          {/* <View style={styles.header}></View> */}
          <View style={styles.title}>
          <Image style={{height:'50%',width:'50%', resizeMode:'contain'}} source={require('./../../assets/house1.png')}/>
        
          </View>
          {/* <View style={styles.content}></View> */}
            <View style={styles.searchSection}>
              {/* <Text style={{color:"rosybrown"}}>아이디</Text> */}
                <Image style={{height:15,width:'20%', resizeMode:'contain'}} source={require('./../../assets/person.png')}/>
              <TextInput  
                    style={{width:'80%',height: 40, fontSize: 20, margin:-5}}  
                    placeholder="아이디 입력"  
                    placeholderTextColor = "#666666"
                    onChangeText={(id) => this.setState({id})}  
                    value={this.state.id}
                />
              <View/>
            </View>
            <View style={{height:20}}/>
            <View style={styles.searchSection}>
              {/* <Text style={{color:"rosybrown"}}>비밀번호</Text> */}
              <Image style={{height:20,width:'20%', resizeMode:'contain'}} source={require('./../../assets/person.png')}/>
              <TextInput  
                  style={{width:'80%',height: 40, fontSize: 20, margin:-5}}  
                  placeholder="비밀번호 입력"
                  placeholderTextColor = "#666666"
                  onChangeText={(pw) => this.setState({pw})} 
                  value={this.state.pw}
              />
              <View/>
            </View>
          {/* <View style={styles.footer}></View> */}
          <View style={{height :30}}></View>
          <View style={{height :50, flexDirection:'row'}}>
            <CustomButton
              buttonColor={'#34c85a'}
              title={'로그인'}
              titleColor={'#666666'}
              onPress={this.klikPost.bind(this)}
              
              />
              <View style={{width: 10}}></View>
            <CustomButton 
              buttonColor={'white'}
              title={'회원가입'}
              titleColor={'#666666'}
              onPress={() => this.props.navigation.navigate('Signup')}/>
          </View>
          <View style={styles.content}></View>
      
      </View>  
      );
    }
    
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems:'center',
      backgroundColor:'#d7e1e9'
    },
    header: {
      width:'100%',
      height:'20%',
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: '#24BD64',
    },
    title: {
      width:'85%',
      height:'65%',
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor:'#667C68'
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
     // backgroundColor: '#94c4d2',
    },
    footer: {
      flex: 1,
      width: '100%',
      height: 50,
     // backgroundColor: '#94c4d2',
    },
    searchSection: {
      flexDirection: 'row',
      width:'90%',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth:1,
      borderColor:'#666666'
  },
  });