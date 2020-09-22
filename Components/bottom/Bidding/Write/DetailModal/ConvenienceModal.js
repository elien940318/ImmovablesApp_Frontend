import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Icon, Container, Header, Button, CheckBox, } from 'native-base'; 

class ConvenienceModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
                  <TouchableOpacity style={{height:50,width:50,borderRadius:100,justifyContent:'center',alignItems:'center', backgroundColor:'#fd6059'}}>
                    <Icon name='md-restaurant'/>
                    <Text>
                      음식점
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{height:50,width:50,borderRadius:100,justifyContent:'center',alignItems:'center', backgroundColor:'#FBAF5B'}}>
                    <Icon name='ios-cafe'/>
                    <Text>
                      카페
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{height:50,width:50,borderRadius:100,justifyContent:'center',alignItems:'center', backgroundColor:'#7BDB84'}}>
                    <Icon name='md-basket'/>
                    <Text>
                      편의점
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{height:50,width:50,borderRadius:100,justifyContent:'center',alignItems:'center', backgroundColor:'#E3F95D'}}>
                    <Icon name='ios-medkit'/>
                    <Text>
                      병원
                    </Text>
                  </TouchableOpacity>
                </View>
    
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
    );
  }
}

export default ConvenienceModal;
