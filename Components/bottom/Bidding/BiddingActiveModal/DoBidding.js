import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon, Container, Header, } from 'native-base'; 
import styles from '../../../css/bottom/Bidding/DoBiddingCSS.js'
class DoBidding extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container style={styles.Container}>
            <Header style={styles.header}>
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
        </Container>
      
    );
  }
}

export default DoBidding;
