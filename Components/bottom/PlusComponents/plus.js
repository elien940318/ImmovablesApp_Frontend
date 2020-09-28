
import React, { Component } from 'react';
import Modal from  'react-native-modal';
import { AsyncStorage,StyleSheet, Text, View, FlatList, Image, Dimensions} from 'react-native';
import {  Container, Content,Icon, Button, } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import http from '../../../http-common';
import EditInfo from './EditInfo';
import styles from '../../css/bottom/PlusComponents/PlusCSS.js'
//import myData from '.././Util/idpw.json';
import * as GoogleSignIn from 'expo-google-sign-in'
import * as firebase from 'firebase';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH /5);


  export default class plus extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
       //   jsonD: myData
            uid: null,
            email: null,
            displayName: null,
      };
    }
    componentDidMount(){
        AsyncStorage.getItem('idchk').then(value =>
            this.setState({ getValue: value })
        );
        
        var user = firebase.auth().currentUser;
        if (user != null) {
            user.providerData.forEach(function (profile) {
                alert(profile.uid + '\n' + profile.email + '\n' + profile.displayName );
                this.setState({uid: profile.uid}); 
                this.setState({email: profile.email}); 
                this.setState({displayName: profile.displayName});       
            });
        }
    }

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-more' style={{color: tintColor}}/>
        )
    }

  ahekf(){
    this.setState({isModalVisible: !this.state.isModalVisible});
  }

    render() {
            const {email} = this.state;
                return(
                    <Container style={styles.container}>
                        <Modal isVisible={this.state.isModalVisible}>
                            <EditInfo ahekf={()=> this.ahekf()}/>
                        </Modal>
                        <ScrollView>
                        <View style ={{  padding:10, flexDirection: 'column' }}>
                            <View style ={{ height: 50 }}></View>
                            <Text>{this.state.getValue}</Text>
                            <Text>{email}</Text>
                            <Button style ={styles.chimpormation} onPress={()=>this.ahekf()}>
                                <Text style ={{color : '#FF5C3B'}}>정보수정</Text>
                            </Button>
                        </View>
                        <View style={{flex:1,flexDirection: 'row'}}>
                            <Button style = {styles.topbutton}><Icon name='ios-notifications-outline' style={{fontSize: 40,color: 'black'}}/><Text style={{fontSize:11, padding:5}}>알림</Text></Button>
                            <Button style ={styles.topbutton}><Icon name='ios-redo' style={{fontSize: 40, color: 'black'}}/><Text style={{fontSize:11,padding:5}}>방내놓기</Text></Button>
                            <Button style ={styles.topbutton}><Icon name='md-create' style={{fontSize: 40, color: 'black'}}/><Text style={{fontSize:11,padding:5}}>내가쓴리뷰</Text></Button>
                            <Button style ={styles.topbutton}><Icon name='ios-home' style={{fontSize: 40, color: 'black'}}/><Text style={{fontSize:11,padding:5}}>연락한부동산</Text></Button>
                            <Button style ={styles.topbutton}><Icon name='md-trending-up' style={{fontSize: 40, color: 'black'}}/><Text style={{fontSize:11,padding:5}}>입찰</Text></Button>
                        </View>
                        <View style={styles.rowSeparatorLine} />

                        <View>
                            <View style={styles.midview}>
                                <Button style={styles.midbutton}><Text style={{fontSize: 18}}>매물번호 조회</Text></Button>
                                <Button style={styles.midbutton}><Text style={{fontSize: 18}}>자주 묻는 질문</Text></Button>
                            </View>
                            <View style={styles.bottomview}>
                                <Button style={styles.midbutton}><Text style={{fontSize: 18}}>이벤트</Text></Button>
                                <Button style={styles.midbutton}><Text style={{fontSize: 18}}>공지사항</Text></Button>
                            </View>
                            <View style={styles.bottomview}>
                                <Button style={styles.midbutton}><Text style={{fontSize: 18}}>1:1문의</Text></Button>
                            </View>

                        </View>
                        <View style={styles.rowSeparatorLine} />

                        <View style={{flexDirection: 'row'}}>
                            <Button style ={styles.bottombutton}><Text style={{color:'#d1cece'}}>이용약관 </Text></Button>
                            <Button style={styles.bottombutton}><Text style={{color:'#d1cece'}}> 개인정보처리방침</Text></Button>
                        </View>
                        <View style={styles.rowSeparatorLine} />
                        </ScrollView>
                    </Container>
                );




    }
}
