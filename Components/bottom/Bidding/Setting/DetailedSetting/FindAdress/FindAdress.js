import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, AsyncStorage} from 'react-native';
import { Container, Header, Icon  } from 'native-base';
import Modal from "react-native-modal";
import DetailAdress from './DetailAdress'
import Dofind from './CityFind/DoFind'
import Gunfind from './CityFind/GunFind'
class FindAdress extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isGunVisible: false,
        isModalVisible: false,
        DoNum:'',
        CityName:'시/도 선택'
    };
  }
  Doshow(){
    AsyncStorage.getItem('Doch').then(value =>
      this.setState({ getValue: value, CityName:value }),
      
      );
  }
  Dotoggle() {
    this.setState({isModalVisible:!this.state.isModalVisible});

  }
  Guntoggle(){
    this.setState({isGunVisible:!this.state.isGunVisible});
  }
  
  render() {
    return (
      <Container style={styles.container}>
          <Modal isVisible={this.state.isModalVisible}>
            <Dofind Dotoggle={()=>this.Dotoggle()} Doshow={()=>this.Doshow()} />
          </Modal>
          <Modal isVisible={this.state.isGunVisible}>
            <Gunfind Guntoggle={()=>this.Guntoggle()} Gun={()=>this.Doshow()} />
          </Modal>
          <Header style ={{justifyContent:'space-between', alignItems:'center'}}> 
            <Icon name='ios-arrow-back' onPress={()=>{this.props.toggle()}}/>
            <Text>주소찾기</Text>
            <Text/>
          </Header>
          <View>
            <View style={{height:'20%', justifyContent:'center', alignItems:'center'}}>
                <Text>지역 및 단지명을 선택해주세요</Text>
            </View>
            <View style={{height:'50%'}}>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', height:'25%'}}>
                    <TouchableOpacity 
                      onPress={()=>{this.Dotoggle();}}
                      style={styles.bottombutton}>
                        <Text>{this.state.CityName}</Text>
                        <Icon name='ios-arrow-forward'/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      onPress={()=>{this.Guntoggle();}}
                      style={styles.bottombutton}>
                        <Text>시/군/구 선택</Text>
                        <Icon name='ios-arrow-forward'/>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', height:'25%'}}>
                    <TouchableOpacity style={styles.bottombutton1}>
                        <Text>동/면/읍 선택</Text>
                        <Icon name='ios-arrow-forward'/>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', height:'25%'}}>
                    <TextInput placeholder='단지명을 입력해주세요.' placeholderTextColor='#0c0c0c' style={styles.bottombutton1}>

                    </TextInput>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', height:'25%'}}>
                    <TouchableOpacity style={styles.bottombutton1}>
                        <Text/>
                        <Text>검색하기</Text>
                        <Text/>
                    </TouchableOpacity>
                </View>
            </View>
          </View>
      </Container>
    );
  }
}

export default FindAdress;

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:-18,
    },
    bottombutton:{
        padding : 10,
        height:'80%',
        width:'46%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        borderWidth:1,
        borderRadius : 5,
        borderColor:'#a7a7a7',      
      },
      bottombutton1:{
        padding : 10,
        height:'80%',
        width:'92%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        borderWidth:1,
        borderRadius:5,
        borderColor:'#a7a7a7',      
      },
});
