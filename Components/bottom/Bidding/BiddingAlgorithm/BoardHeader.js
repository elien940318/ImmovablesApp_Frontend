import React, { Component } from 'react';
import { TouchableOpacity,TextInput, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { Icon, Container, Header, Button } from 'native-base'; 
import RowCardComponent  from '../RowCardComponent'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class BoardHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View>
            <Header style={styles.header}>
            <View style={{justifyContent:'center'}}>
                <Text>거래소</Text>                  
            </View> 
            <View style={{position: 'absolute', right: 0}}>
                <Button onPress={() => this.toggle()} style={{backgroundColor:'white'}}>
                <Icon name='ios-create' style={{color:'black'}}/>
                </Button>
            </View>                   
            </Header>
            <View style={styles.search}>                  
                <TextInput  
                    style={{height: '80%', width: '80%', backgroundColor: 'whitesmoke', fontSize: 20, margin:10}}  
                    placeholder="검색"  
                    onChangeText={(searchInfo) => this.setState({searchInfo})}  
                />
                <TouchableOpacity>
                <Icon name='ios-search'/>
                <Text>검색</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke'
      },
      header: {
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent: 'space-around',
        flexDirection:'row'
      },
      search: {
        width:'100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      category: {
        width:'100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      content: {
   
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EFE4B0',
      },
      footer: {
        flex: 1,
        width: '100%',
        height: hp('10%'),
        backgroundColor: '#EFE4B0',
      },
      br: {
        height: '3%'
      }
})