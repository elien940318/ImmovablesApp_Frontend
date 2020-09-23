import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Icon, Container, Header, Button, CheckBox, } from 'native-base'; 
import Txt from './ConvenienceChd.js'
import styles from '../../../../css/bottom/Bidding/ConvenienveModalCSS.js';
class ConvenienceModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lst:[],
      pressStatus1:0,
      pressStatus2:0,
      pressStatus3:0,
      pressStatus4:0,

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

  checking=(t)=>{
    this.props.conv(t)
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
        <TouchableWithoutFeedback onPress={this.props.toggle}>
          <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                }}>
            <TouchableWithoutFeedback>
              <View style={{justifyContent:'center', alignItems:'center',width: 300, height: 150, borderWidth:1, borderColor:'#a7a7a7', borderRadius:5, backgroundColor:'white'}}>
                <View style ={{justifyContent:'flex-start', width:300, height:40, backgroundColor: null}}>
                  <Icon style={{margin:10, fontSize:25}} name='ios-arrow-back' onPress={this.props.toggle}/>
                  <Text/>
                  <Text/>
                </View>
                <View style={{flex:1, flexDirection:'row'}}>
                  <TouchableOpacity
                    onPress={()=>{this.checking('음식점'); this.PresStatus1();}}
                    style={this.state.pressStatus1 ? styles.onbutton : styles.offbutton}>
                    <Icon style={this.state.pressStatus1 ? {color:'#FF5C3B'} : {color:'#a7a7a7a7'}}name='md-restaurant'/>
                    <Text style={this.state.pressStatus1 ? {color:'#FF5C3B'} : {color:'#a7a7a7a7'}}>
                      음식점
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={()=>{this.checking('카페'); this.PresStatus2();}}
                    style={this.state.pressStatus2 ? styles.onbutton : styles.offbutton}>
                    <Icon style={this.state.pressStatus2 ? {color:'#FF5C3B'} : {color:'#a7a7a7a7'}} name='ios-cafe'/>
                    <Text style={this.state.pressStatus2 ? {color:'#FF5C3B'} : {color:'#a7a7a7a7'}}>
                      카페
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.offbutton}
                    onPress={()=>{this.checking('편의점'); this.PresStatus3();}}
                    style={this.state.pressStatus3 ? styles.onbutton : styles.offbutton}>
                    <Icon style={this.state.pressStatus3 ? {color:'#FF5C3B'} : {color:'#a7a7a7a7'}} name='md-basket'/>
                    <Text style={this.state.pressStatus3 ? {color:'#FF5C3B'} : {color:'#a7a7a7a7'}} >
                      편의점
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.offbutton}
                    onPress={()=>{this.checking('병원'); this.PresStatus4();}}
                    style={this.state.pressStatus4 ? styles.onbutton : styles.offbutton}>
                    <Icon style={this.state.pressStatus4 ? {color:'#FF5C3B'} : {color:'#a7a7a7a7'}} name='ios-medkit'/>
                    <Text style={this.state.pressStatus4 ? {color:'#FF5C3B'} : {color:'#a7a7a7a7'}}>
                      병원
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{margin:20, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                {
                  this.state.lst.length > 0?
                  this.state.lst.map((e, index) => <Txt data={e} key={index}/>):
                  null
                }
                </View>
              </View>
            </TouchableWithoutFeedback>
            
          </View>
              
        </TouchableWithoutFeedback>
    );
  }
}

export default ConvenienceModal;
