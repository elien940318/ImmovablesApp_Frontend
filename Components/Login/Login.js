import React, { Component, useState } from 'react';
import {TouchableOpacity,AsyncStorage, StyleSheet,   Alert,  Button,   Image,  TextInput,   Text,   View, ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'native-base';
import CustomButton from '../Util/LoginUtil/CustomButton';
import GoogleButton from '../Util/LoginUtil/GoogleLogin';
import http from '../../http-common'
import Main from './../MainScreen'
import Signup from '../Signup/Signup'
import { TouchableHighlight } from 'react-native-gesture-handler';
import styles from "../css/LoginCSS.js";

import * as GoogleSignIn from 'expo-google-sign-in'
import * as firebase from 'firebase';
import "firebase/auth";
// import 'firebase/firestore';


// key 생성
// expo credentials:manager -p android

export default class Login extends Component {
    // navigationOptions 코드 추가
    static navigationOptions = {
      headerShown : false
      // title: <Text>어디 살래?</Text>,
    }

    constructor(props) {  
        super(props);  
        this.state = {
          // Login state
          id: '',
          pw: '',
          dataku: [],
          textInputData: '',
          getValue: '',

          // OAuth state
          uid: null,
          email: null,
          name: null
      };  
    }  
    
    componentDidMount() {
      //this.initAsync();

      // 현재 로그인되어있는 상태인지 체크한다...
      firebase.auth().onAuthStateChanged(user => {
          if (user) {
            // OAuth 로그인이 되어있는 상태입니다. 그러니 바로 next로 넘겨줍시다.
            // this.syncUserWithStateAsync();
            this.props.navigation.replace('next');
          }
      });
    }

    // iOS 부분 주석처리함... 로직오류...
    // async initAsync() {
    //   try{
    //     await GoogleSignIn.initAsync({
    //       clientId: '356463774004-ncg5gr5k1lv9qvdva1laolhkh8cfn6jv.apps.googleusercontent.com',
    //     });
    //   }
    //   catch({message}){
    //     console.log('GoogleSignIn.initAsync(): ' + message);
    //   }
    // }

    // async syncUserWithStateAsync() {
    //   const user = await GoogleSignIn.signInSilentlyAsync();
    //   // Google uid는 고정적인 uid인것 같음... 이걸 활용해서 db 구성해야 함...
    //   // props로 uid와 email을 보내주거나, 해당 페이지에서 다시 호출하여 user 가져오는 식으로...
    //   // 여기서 백엔드로 유저 insert 보내주어야 하는가...? 그렇습니다.      
    //   this.InsertUser(user.uid, user.email, user.lastName+user.firstName);
    //   this.props.navigation.replace('next');
    // }
    
    InsertUser(uid, email, name) {
        http.post('/login/checkUser', {
          _email: email,
          _uid: uid,
          _name: name,
        })
        .then((response)=>{
          alert(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    async signInWithGoogle() {
      try {
        await GoogleSignIn.askForPlayServicesAsync();
        const { type, user } = await GoogleSignIn.signInAsync();

        if (type === 'success') 
        {
          // 로그인은 양호하게 처리된 상태...
          await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
          
          const credential = firebase.auth.GoogleAuthProvider.credential(
            user.auth.idToken, 
            user.auth.accessToken,
          );
          // 이건 무슨 구문인지 아직 이해가 안됩니다...
          const googleProfileData = await firebase.auth().signInWithCredential(credential);          
          
          // db에 insert or update 시켜주는 구문 처리...
          this.InsertUser(user.uid, user.email, user.displayName);
          // this.syncUserWithStateAsync();
          this.props.navigation.replace('next');
        }
      } catch ({ message }) {
        alert('Error:' + message);
      }
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
w
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
          <Image style={{height:'80%',width:'80%', resizeMode:'contain'}} source={require('./../../assets/logo1.png')}/>
        
          </View>
            {/* <View style={styles.searchSection}>
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
              <Image style={{height:20,width:'20%', resizeMode:'contain'}} source={require('./../../assets/person.png')}/>
              <TextInput  
                  style={{width:'80%',height: 40, fontSize: 20, margin:-5}}  
                  placeholder="비밀번호 입력"
                  placeholderTextColor = "#666666"
                  onChangeText={(pw) => this.setState({pw})} 
                  value={this.state.pw}
              />
              <View/>
            </View> */}
          <View style={{alignItems:"center",height:50, width:'100%'}}>
            <GoogleButton
                buttonColor={'#FF765B'}
                title={'  SIGN IN WITH GOOGLE'}
                titleColor={'white'}
                onPress={()=>this.signInWithGoogle()}
                />
          </View>
          {/* <View style={styles.container}>
            <GithubButton onPress={() => signInAsync()} />
          </View> */}
          {/* <View style={{alignItems:"center",height:150, width:'100%'}}>
            <GoogleButton2
                buttonColor={'#FF765B'}
                title={'  SIGN IN WITH GOOGLE'}
                titleColor={'white'}
                
                />
          </View> */}
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
  
  