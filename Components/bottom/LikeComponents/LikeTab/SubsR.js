
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  Container, Content,Icon, Header } from 'native-base'; 

export default class SubsR extends Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-add-circle' style={{color: tintColor}}/>
        )
    }

    render() {
        return (
            <Container style={style.container}>
             <Text>찜한 방</Text>
          
          </Container>
        );
    }
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,

    }
});