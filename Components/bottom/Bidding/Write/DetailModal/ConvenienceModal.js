import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Icon, Container, Header, Button, CheckBox, } from 'native-base'; 
import Txt from './ConvenienceChd.js'

class ConvenienceModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lst:[]
    };
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
                  <TouchableOpacity style={{height:50,width:50,borderRadius:100,justifyContent:'center',alignItems:'center', backgroundColor:'#fd6059'}}
                    onPress={()=>this.checking('음식점')}>
                    <Icon name='md-restaurant'/>
                    <Text>
                      음식점
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{height:50,width:50,borderRadius:100,justifyContent:'center',alignItems:'center', backgroundColor:'#FBAF5B'}}
                    onPress={()=>this.checking('카페')}>
                    <Icon name='ios-cafe'/>
                    <Text>
                      카페
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{height:50,width:50,borderRadius:100,justifyContent:'center',alignItems:'center', backgroundColor:'#7BDB84'}}
                   onPress={()=>this.checking('편의점')}>
                    <Icon name='md-basket'/>
                    <Text>
                      편의점
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{height:50,width:50,borderRadius:100,justifyContent:'center',alignItems:'center', backgroundColor:'#E3F95D'}}
                   onPress={()=>this.checking('병원')}>
                    <Icon name='ios-medkit'/>
                    <Text>
                      병원
                    </Text>
                  </TouchableOpacity>
                </View>
                {
                  this.state.lst.length > 0?
                  this.state.lst.map((e, index) => <Txt data={e} key={index}/>):
                  null
                }
              </View>
            </TouchableWithoutFeedback>
            
          </View>
              
        </TouchableWithoutFeedback>
    );
  }
}

export default ConvenienceModal;
