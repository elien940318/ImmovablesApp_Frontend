import React, { PureComponent } from 'react';
import {TextInput,TouchableOpacity, View, Text, StyleSheet, Modal} from 'react-native';
import {Container, Icon, Header} from 'native-base';
import GasModal from './AddIScreenModal/GasModal.js'
import styles from '../../../../../../css/bottom/Bidding/Setting/AddiScreenCSS.js'
export default class AddiScreen extends PureComponent {
  constructor(props) {
      super(props);
      this.state = {
          optionId : 0,
          petId : 0,
          loanId : 0,
          gasModalSwitch:false,
          bt:0,

      };
    }
  chbt = (nu) =>{
    this.setState({bt:nu});
  };
  SetGasModalVisible(){
    this.setState({gasModalSwitch : !this.state.gasModalSwitch})
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
  /** ############# 가스 모달 ############# */
  GasModal=()=>{
    return(
      <GasModal 
        gasModalSwitch = {this.state.gasModalSwitch}
        
        />
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
          </View> 
        </Container>
          
      );
  }
}
