import React, { PureComponent } from 'react';
import {TextInput,TouchableOpacity, View, Text} from 'react-native';
import {Container, Icon} from 'native-base';
import styles from '../../../../../../css/bottom/Bidding/Setting/DescScreenCSS.js'
import Txt from './FindAdress/DesScreenChd'
export default class DescScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lst:[],
      num1:0,
      num2:0,
      num3:0,
      num4:0,
      buttonoff:false,
    };
  }
  ckonbutton1=(cknum)=>{
    this.state.num1===0? this.setState({num1:1}): this.setState({num1:0})
  };
  ckonbutton2=(cknum)=>{
    this.state.num2===0? this.setState({num2:1}): this.setState({num2:0})
  };
  ckonbutton3=(cknum)=>{
    this.state.num3===0? this.setState({num3:1}): this.setState({num3:0})
  };
  ckonbutton4=(cknum)=>{
    this.state.num4===0? this.setState({num4:1}): this.setState({num4:0})
  };
  setckonbutton(visible){
    this.setState({buttonoff:visible})
  }

  checking=(t)=>{
    let lst1 = this.state.lst
    if(!lst1.includes(t)){
      lst1.push(t)
      this.setState({lst:lst1})
    }
    else{
      let idx = lst1.indexOf(t)
      lst1.splice(idx, 1)
      this.setState({lst:lst1})
    }
  }
  render() {
    return (
        <Container style={styles.container}>
            <View style={styles.outline}>
              <View style={styles.title}>
                  <Text>집 주변 편의시설을 고르세요.</Text>
              </View>
              <View style={{height:30}}/>
              <View style={{ flexDirection:'column', width:'100%', alignItems:'center'}}>
                <View style={{height:60, width:'90%'}}>
                  <Text style={styles.condiscription}>단지주변 편의시설</Text>
                </View>
                <View style={styles.innerline}>
                  <TouchableOpacity 
                    onPress={()=>{
                      this.ckonbutton1();
                      this.checking('음식점');}}
                    style={this.state.num1===1? styles.onbutton : styles.offbutton}>
                    <Icon name='md-restaurant'/>
                    <Text>
                      음식점
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={()=>{
                      this.ckonbutton2();
                      this.checking('카페');}}
                    style={this.state.num2===1? styles.onbutton : styles.offbutton}>
                    <Icon name='ios-cafe'/>
                    <Text>
                      카페
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={()=>{
                      this.ckonbutton3();
                      this.checking('편의점');}}
                    style={this.state.num3===1? styles.onbutton : styles.offbutton}>
                    <Icon name='md-basket'/>
                    <Text>
                      편의점
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.secondinnerline}>
                <TouchableOpacity 
                  onPress={()=>{
                    this.ckonbutton4();
                    this.checking('병원');}}
                  style={this.state.num4===1? styles.onbutton : styles.offbutton}>
                    <Icon name='ios-medkit'/>
                    <Text>
                      병원
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.txtpart}>
                {
                  this.state.lst.length > 0?
                  this.state.lst.map((e, index) => <Txt data={e} key={index}/>):
                  null
                }
              </View>
            </View>
        </Container>
    );
    }
}
