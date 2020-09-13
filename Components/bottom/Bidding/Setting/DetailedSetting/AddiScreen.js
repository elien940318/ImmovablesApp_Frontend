import React, { PureComponent } from 'react';
import {TextInput,TouchableOpacity, View, Text, StyleSheet, Modal} from 'react-native';
import {Container, Icon, Header} from 'native-base';

export default class AddiScreen extends PureComponent {
  constructor(props) {
      super(props);
      this.state = {
          optionId : 0,
          petId : 0,
          loanId : 0,
          Gasshown:false,
          bt:0,

      };
    }
  chbt = (nu) =>{
    this.setState({bt:nu});
  };
  SetGasModalVisible(visible){
    this.setState({Gasshown : visible})
  };
  choption = (id) => {
    this.setState({optionId: id});
  };
  chpet = (id) => {
    this.setState({petId: id});
  };
  chloan = (id) => {
    this.setState({loanId: id});
  };

  GasModal=()=>{
    return(
      <Modal
        animationType="fade"
        transparent={false}
        visible={this.state.Gasshown}
        onRequestClose={() => {
        this.SetGasModalVisible(!this.state.Gasshown);
        }}
        backdrop={true}>
          <View style={{flex:1}}>
            <Header style ={{justifyContent:'space-between'}}>
              <Icon name='ios-arrow-back' onPress={()=>{this.SetGasModalVisible(!this.state.Gasshown);}}/>
              <Text>옵션</Text>
              <Text/>
            </Header>
            <View style={{flexDirection:'column', alignItems:'center', height:'80%'}}>
              <View  style={{justifyContent: 'center',alignItems:'center',height:'10%'}}>
                <Text>난방종류를 선택하세요.</Text>
              </View>
              <View style={{width:'90%', height:'10%', flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity 
                  onPress={()=>{this.chbt(1);}}
                  style={this.state.bt===1?styles.onbutton:styles.offbutton}>
                  <Text
                  style={this.state.bt===1?{color:'white'}:{color:'black'}}>
                    중앙난방</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={()=>{this.chbt(2);}}
                  style={this.state.bt===2?styles.onbutton:styles.offbutton}>
                  <Text
                    style={this.state.bt===2?{color:'white'}:{color:'black'}}>
                    개별난방</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={()=>{this.chbt(3);}}
                  style={this.state.bt===3?styles.onbutton:styles.offbutton}>
                  <Text
                    style={this.state.bt===3?{color:'white'}:{color:'black'}}>
                    지역난방</Text> 
                </TouchableOpacity>
              </View>
              <View style={{height:'10%',width:'90%', flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity 
                  onPress={()=>{this.chbt(4);}}
                  style={this.state.bt===4?styles.onbutton:styles.offbutton}>
                  <Text
                    style={this.state.bt===4?{color:'white'}:{color:'black'}}>
                    중앙냉난방</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={()=>{this.chbt(5);}}
                  style={this.state.bt===5?styles.onbutton:styles.offbutton}>
                  <Text
                    style={this.state.bt===5?{color:'white'}:{color:'black'}}>
                    개별냉난방</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={()=>{this.chbt(6);}}
                  style={this.state.bt===6?styles.onbutton:styles.offbutton}>
                  <Text
                    style={this.state.bt===6?{color:'white'}:{color:'black'}}>
                    지역냉난방</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection:'row', width:'90%', justifyContent:'flex-start'}}>
                <TouchableOpacity 
                  onPress={()=>{this.chbt(7);}}
                  style={this.state.bt===7?styles.onbutton:styles.offbutton}>
                  <Text
                    style={this.state.bt===7?{color:'white'}:{color:'black'}}>
                    기타</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{alignItems:'center', justifyContent:'center', width:'100%'}}>
              <TouchableOpacity 
                onPress={()=>this.SetGasModalVisible(!this.state.Gasshown)}
                style={{color:'#000', width:'90%', height:40, borderWidth:0.5, borderRadius:5, justifyContent:'center', alignItems:'center', backgroundColor:"#004aff"}}>
                <Text>입력</Text>
              </TouchableOpacity>
            </View>
          </View>
      </Modal>
    );

  }
  render() {
    return (
        <Container style={styles.container}>
          {this.GasModal()}
          <View style={{ margin:3, width:'90%', height:'80%', borderWidth:0.5, borderRadius:5, alignItems:'center'}}>
            <View style={{width:'90%', borderBottomWidth:0.5}}>
              <Text style={{margin:15, fontSize: 15 }}>결정할 때 필요한 정보이므로 정확히 입력하세요.</Text>
            </View>
            <View style={{width:'90%', height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>옵션</Text>
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={()=>this.choption(1)} style={this.state.optionId === 1? styles.red : styles.button} >
                    <Text style={this.state.optionId === 1? styles.white : styles.black}>없음</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.choption(2)} style={this.state.optionId === 2? styles.red : styles.button} >
                    <Text style={this.state.optionId === 2? styles.white : styles.black}>있음</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{width:'90%',height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
              <TouchableOpacity 
                onPress={()=>this.SetGasModalVisible(true)}
                style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>난방종류</Text>
                <View style={{ flexDirection:'row', alignItems:'center'}}>
                  <Text>입력하세요</Text>
                  <Icon name='ios-arrow-forward'/>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{width:'90%', height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>반려동물</Text>
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={()=>this.chpet(1)} style={this.state.petId === 1? styles.red : styles.button} >
                    <Text style={this.state.petId === 1? styles.white : styles.black}>불가</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.chpet(2)} style={this.state.petId === 2? styles.red : styles.button} >
                    <Text style={this.state.petId === 2? styles.white : styles.black}>가능</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{width:'90%', height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>전세자금대출</Text>
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={()=>this.chloan(1)} style={this.state.loanId === 1? styles.red : styles.button} >
                    <Text style={this.state.loanId === 1? styles.white : styles.black}>불가</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.chloan(2)} style={this.state.loanId === 2? styles.red : styles.button} >
                    <Text style={this.state.loanId === 2? styles.white : styles.black}>가능</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{width:'90%', height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>준공년도</Text>
              </View>
            </View>
          </View> 
        </Container>
          
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    red: {
        backgroundColor: '#004aff',
        alignItems: 'center',
        padding: 10,
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
      },
    white: {
        color:'white'
    },
    black:{
        color:'black'
    },
    onbutton:{
      justifyContent:'center', 
      alignItems:'center', 
      width:100,
      height:30,
      borderRadius:50, 
      borderWidth:0.5,
      backgroundColor:'#004aff'
    },
    offbutton:{
      justifyContent:'center', 
      alignItems:'center', 
      width:100,
      height:30,
      borderRadius:50, 
      borderWidth:0.5,
    }
});