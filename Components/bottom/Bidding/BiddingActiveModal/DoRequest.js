import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon, Container, Header, } from 'native-base'; 
import styles from '../../../css/bottom/Bidding/DoBiddingCSS.js'
class DoRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }


  render() {
    this.state.data = this.props.toData;

    return (
        <Container style={styles.Container}>
            <Header style={styles.header}>
                <Icon 
                name='ios-close'
                style={{fontSize: 50, color: 'black', position: 'absolute', left: 15}}
                onPress={this.props.toggle3}
                />
                <Text>
                    {this.state.data.title/*제목*/} 
                </Text>
            </Header>
            <View style={{flex:1,justifyContent:'center', alignItems:"center"}}>
                <TouchableOpacity
                    onPress={this.props.toggle3}>
                    <Text>입찰 기능과 동일</Text>
                </TouchableOpacity>
                <Text> 입찰 기능과 동일 </Text>
            </View>

            <TouchableOpacity style={styles.biddingbutton} onPress={()=>{this.props.toggle3}}>
                <Text style={styles.biddingfont}>입찰하기</Text>
            </TouchableOpacity>
        </Container>
      
    );
  }
}

export default DoRequest;
