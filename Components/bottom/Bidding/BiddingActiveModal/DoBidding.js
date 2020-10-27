import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import { Icon, Container, Header, } from 'native-base'; 
import frame from '../../../css/bottom/Bidding/DoBiddingCSS.js'
import SellDetailWriteModal from '../Write/SellDetailWriteModal'
import button from '../../../css/bottom/Bidding/DetailPostModalCSS'
import styles from '../../../css/bottom/Bidding/SellDetailWriteModalCSS.js'
import http from '../../../../http-common'
import firebase from 'firebase';
class DoBidding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      email : 'changkeereum@gmail.com'
    };
  }

  componentDidMount ()
  {    
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.setState({email: user.email})
       
      }
      else {
          alert("firebase로부터 user profile 가져오는 중 오류 발생.");
      }
    });

  }

  bidding = (email, author, idx) => {
    http.post(`/post/Bidding`,{
      email: email,
      author: author,
      idx: idx
    })
      .then((response) => {
        this.props.reload()
        this.props.toggle2()
        this.props.toggle3()
        alert('완료');
        
      })
      .catch((error) => {
        console.log('upload error', error);
        alert('Upload failed!');
      });
  }

  render() {
    this.state.data = this.props.toData;
    return (
        <Container style={frame.Container}>
            <Header style={frame.header}>
                <Icon 
                name='ios-close'
                style={{fontSize: 50, color: 'black', position: 'absolute', left: 15}}
                onPress={this.props.toggle3}
                />
                <Text>
                    입찰하기
                </Text>
            </Header>
            
            <View style={{flex:1,justifyContent:'center', alignItems:"center"}}>
              <TouchableOpacity
                onPress={this.props.toggle3}>
                <Text>나갈거야 여기를</Text>
              </TouchableOpacity>
              
              <Text> DoBidding </Text>
            </View>
      <ScrollView>
      <View style={styles.EntireBox}>
          <View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    주소
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                    {this.state.data.location}
                </Text>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    건물 유형
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                    {this.state.data.immovabletype}
                </Text>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    해당층
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                    {this.state.data.floor} 층
                </Text>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    면적
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                    {this.state.data.area} 평
                </Text>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    매물 종류
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                {this.state.data.deposit === -1?'매매':'전/월세'}
                </Text>
            </View>
          </View>
          {this.state.data.deposit !== -1?
          <View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    보증금
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                {this.state.data.deposit} 만원
                </Text>
            </View>
          </View>
          :null}
          {this.state.data.deposit !== -1?
          <View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    월세 
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                {this.state.data.price} 만원
                </Text>
            </View>
          </View>
          :
          <View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    가격 
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                {this.state.data.price} 만원
                </Text>
            </View>
          </View>
          }
          <View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    관리비
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                    {this.state.data.management}
                </Text>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    주차
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                    {this.state.data.parking === 1?'가능':'불가능'}
                </Text>
            </View>
          </View><View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    난방
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                    {this.state.data.heater}
                </Text>
            </View>
          </View><View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    전세자금대출
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                    {this.state.data.loan==1?'가능':'불가능'}
                </Text>
            </View>
          </View><View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    옵션
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                    {this.state.data.option_==1?'있음':'없음'}
                </Text>
            </View>
          </View><View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    애완동물
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                    {this.state.data.pet==1?'가능':'불가능'}
                </Text>
            </View>
          </View>
          </View>
          </ScrollView>
          <TouchableOpacity style={button.biddingbutton} onPress={()=>{this.bidding(this.state.email, this.state.data.author, this.state.data.idx)}}>
          <Text style={styles.biddingfont}>입찰하시겠습니까?</Text>
        </TouchableOpacity>
        </Container>
      
    );
  }
}

export default DoBidding;
