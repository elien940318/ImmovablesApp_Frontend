import React, { PureComponent } from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {Container, Icon} from 'native-base';
import styles from '../../../../../../css/bottom/Bidding/Setting/DescScreenCSS.js'

export default class DescScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lst:[],
      pressStatus1:0,
      pressStatus2:0,
      pressStatus3:0,
      pressStatus4:0
    };
  }
 

  PresStatus1(){
    this.state.pressStatus1===1 ? 
    this.setState({ pressStatus1: 0 }):this.setState({ pressStatus1: 1 });
    }
  PresStatus2(){
    this.state.pressStatus2===1 ? 
    this.setState({ pressStatus2: 0 }):this.setState({ pressStatus2: 1 });
    }  
  PresStatus3(){
    this.state.pressStatus3===1 ? 
    this.setState({ pressStatus3: 0 }):this.setState({ pressStatus3: 1 });
    }  
  PresStatus4(){
    this.state.pressStatus4===1 ? 
    this.setState({ pressStatus4: 0 }):this.setState({ pressStatus4: 1 });
    }
  

  lstChecker= (name)=>{
    if(this.state.lst.includes(name)){
      this.state.lst.splice(this.state.lst.indexOf(name),1)
    }else{
      this.state.lst.push(name)
    }
    this.setState(this.state.lst);
  }

  render() {
    this.props.describeDataUpdater(this.state.lst)
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
                    onPress={()=>{this.lstChecker('음식점');this.PresStatus1()}}
                    style={this.state.pressStatus1? styles.onbutton : styles.offbutton}>
                    <Icon name='md-restaurant'/>
                    <Text>음식점</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={()=>{this.lstChecker('카페');this.PresStatus2()}}
                    style={this.state.pressStatus2? styles.onbutton : styles.offbutton}>
                    <Icon name='ios-cafe'/>
                    <Text>카페</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={()=>{this.lstChecker('편의점');this.PresStatus3()}}
                    style={this.state.pressStatus3? styles.onbutton : styles.offbutton}>
                    <Icon name='md-basket'/>
                    <Text>편의점</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.secondinnerline}>
                <TouchableOpacity 
                  onPress={()=>{this.lstChecker('병원');this.PresStatus4()}}
                  style={this.state.pressStatus4? styles.onbutton : styles.offbutton}>
                    <Icon name='ios-medkit'/>
                    <Text>병원</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.txtpart}>
                {
                  this.state.lst.length > 0?
                  this.state.lst.map((e, index) => <Text key={index}>{e}, </Text>):
                  null
                }
              </View>
            </View>
        </Container>
    );
    }
}
