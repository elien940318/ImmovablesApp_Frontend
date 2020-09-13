
import React, { Component } from 'react';
import Modal from  'react-native-modal';
import { AsyncStorage,StyleSheet, Text, View, FlatList, Image, Dimensions} from 'react-native';
import {  Container, Content,Icon, Button, } from 'native-base'; 
import { ScrollView } from 'react-native-gesture-handler';
import http from '../../../http-common';
import EditInfo from './EditInfo';
//import myData from '.././Util/idpw.json';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH /5);


  export default class plus extends Component {

    constructor(props) {  
        super(props);  
        this.state = {
            isModalVisible: false,
       //   jsonD: myData
      };  
    } 
    componentDidMount(){
        AsyncStorage.getItem('idchk').then(value =>
        this.setState({ getValue: value })
        );

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

                return(
                    <Container style={style.container}>
                        <Modal isVisible={this.state.isModalVisible}>
                            <EditInfo ahekf={()=> this.ahekf()}/>
                        </Modal>
                        <ScrollView>
                        <View style ={{  padding:10, flexDirection: 'column' }}>
                            <View style ={{ height: 50 }}></View>
                            <Text>{this.state.getValue}</Text>
                            <Text>e-mail</Text>
                            <Button style ={style.chimpormation} onPress={()=>this.ahekf()}>
                                <Text style ={{color : 'blue'}}>정보수정</Text>
                            </Button>
                        </View>
                        <View style={{flex:1,flexDirection: 'row'}}>
                            <Button style = {style.topbutton}><Icon name='ios-notifications-outline' style={{fontSize: 40,color: 'black'}}/><Text style={{fontSize:11, padding:5}}>알림</Text></Button>
                            <Button style ={style.topbutton}><Icon name='ios-redo' style={{fontSize: 40, color: 'black'}}/><Text style={{fontSize:11,padding:5}}>방내놓기</Text></Button>
                            <Button style ={style.topbutton}><Icon name='md-create' style={{fontSize: 40, color: 'black'}}/><Text style={{fontSize:11,padding:5}}>내가쓴리뷰</Text></Button>
                            <Button style ={style.topbutton}><Icon name='ios-home' style={{fontSize: 40, color: 'black'}}/><Text style={{fontSize:11,padding:5}}>연락한부동산</Text></Button>
                            <Button style ={style.topbutton}><Icon name='md-trending-up' style={{fontSize: 40, color: 'black'}}/><Text style={{fontSize:11,padding:5}}>입찰</Text></Button>
                        </View>
                        <View style={style.rowSeparatorLine} />

                        <View>
                            <View style={style.midview}>
                                <Button style={style.midbutton}><Text style={{fontSize: 18}}>매물번호 조회</Text></Button>
                                <Button style={style.midbutton}><Text style={{fontSize: 18}}>자주 묻는 질문</Text></Button>
                            </View>
                            <View style={style.bottomview}>
                                <Button style={style.midbutton}><Text style={{fontSize: 18}}>이벤트</Text></Button>
                                <Button style={style.midbutton}><Text style={{fontSize: 18}}>공지사항</Text></Button>
                            </View>
                            <View style={style.bottomview}>
                                <Button style={style.midbutton}><Text style={{fontSize: 18}}>1:1문의</Text></Button>
                            </View>

                        </View>
                        <View style={style.rowSeparatorLine} />

                        <View style={{flexDirection: 'row'}}>
                            <Button style ={style.bottombutton}><Text style={{color:'#d1cece'}}>이용약관 </Text></Button>
                            <Button style={style.bottombutton}><Text style={{color:'#d1cece'}}> 개인정보처리방침</Text></Button>
                        </View>
                        <View style={style.rowSeparatorLine} />
                        </ScrollView>
                    </Container>
                );
            
            
            
        
    }
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,

    },
    chimpormation: {
        width: '20%',
        height: 30,
        justifyContent: 'center',
        backgroundColor:'white',
        borderColor: 'blue',
        borderWidth: 1
    },
    topbutton: {
        height: 100,
        width: ITEM_WIDTH,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'white'
    },

    midview: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    midbutton: {
        padding: 10,
        flex: 1,
        height: 40,
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    bottombutton: {
        backgroundColor: 'white',
        padding: 10
    },

    ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
      },
      SeparatorLine: {
        backgroundColor: 'black',
        width: 2,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center'
      },
      rowSeparatorLine: {
        backgroundColor: '#d1cece',
        width: '100%',
        height: '0.1%',
        
        
      }
});