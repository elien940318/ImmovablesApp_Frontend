import React, { Component } from 'react';
import { View, Text, StyleSheet, Button,TouchableOpacity, ScrollView } from 'react-native';
import { Container,Icon } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import CustomButton from '../LoginUtil/CustomButton'
export default class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
        conwrite: '',
    };
  }

  render() {
    return (
        <Container style={style.container}>
            <ScrollView >
            <View>
                <Text style={style.title}>상품등록하기</Text>
                <Icon name='ios-camera' style={{margin:10, fontSize: '100'}}/>
            </View>
            <View style={{alignItems: 'center',}}>
                <TouchableOpacity style={style.button}>
                <Text style={{  color:'#c4c4c4'}}>
                    게시판 선택
                </Text>
                <Text style={{ color:'#c4c4c4'}}>
                    >
                </Text>
                </TouchableOpacity>
                <TextInput
                    style={style.texinputstyle}  
                    placeholder="제목" onChangeText={(title) => this.setState({title})} value={this.state.title}>  
                </TextInput> 
                <TextInput 
                    style={style.wishwrite}
                    placeholder="게시글을 작성하세요." onChangeText={(conwrite) => this.setState({conwrite})} value={this.state.conwrite}>
                </TextInput>
                <TouchableOpacity style={style.button}>
                    <Text style={{color:'black'}}>
                    제출
                    </Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </Container>
    );
  }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
    },
    title: {
        margin:10,
        fontSize: 25
    },
    texinputstyle:{
        margin:10,
        borderWidth:1,
        borderColor:'whitesmoke',
        width:'90%',
        height: 40,
        backgroundColor: 'white',
        fontSize: 20,
    },
    button:{
        margin:10,
        width:'90%',
        height: 40,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    wishwrite:{
        margin:10,
        width:'90%',
        height:'70%',
        backgroundColor:'white',
        fontSize: 20,

    }
    });