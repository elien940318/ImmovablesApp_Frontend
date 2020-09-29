import React, { PureComponent } from 'react';
import {TextInput,TouchableOpacity, View, Text} from 'react-native';
import {Container, Icon} from 'native-base';
import styles from '../../../../../../css/bottom/Bidding/Setting/DescScreenCSS.js'
import { ThemeColors } from 'react-navigation';
export default class DescScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lst:[],
    };
  }
 
  isIn(name){
    if(this.state.lst.includes(name)){
      let idx = this.state.lst.indexOf(name)
      console.log(idx)
      this.state.lst.splice(idx,1)
    }else{
      this.state.lst.push(name)
    }
    this.setState(this.state.lst)
  }

  render() {
    console.log(this.state.lst)
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
                    onPress={()=>{this.isIn('음식점')}}
                    style={this.state.lst.includes('음식점')? styles.onbutton : styles.offbutton}>
                    <Icon name='md-restaurant'/>
                    <Text>음식점</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={()=>{this.isIn('카페')}}
                    style={this.state.lst.includes('카페')? styles.onbutton : styles.offbutton}>
                    <Icon name='ios-cafe'/>
                    <Text>카페</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={()=>{this.isIn('편의점')}}
                    style={this.state.lst.includes('편의점')? styles.onbutton : styles.offbutton}>
                    <Icon name='md-basket'/>
                    <Text>편의점</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.secondinnerline}>
                <TouchableOpacity 
                  onPress={()=>{this.isIn('병원')}}
                  style={this.state.lst.includes('병원')? styles.onbutton : styles.offbutton}>
                    <Icon name='ios-medkit'/>
                    <Text>병원</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.txtpart}>
                {
                  this.state.lst.length > 0?
                  this.state.lst.map((e, index) => <Text key={index}>{e}</Text>):
                  null
                }
              </View>
            </View>
        </Container>
    );
    }
}
