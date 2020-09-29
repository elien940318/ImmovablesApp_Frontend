import React, { PureComponent } from 'react';
import {TextInput,TouchableOpacity, View, Text, StyleSheet, Modal} from 'react-native';
import {Container, Icon, Header} from 'native-base';
import GasModal from './AddIScreenModal/GasModal'
import styles from '../../../../../../css/bottom/Bidding/Setting/AddiScreenCSS.js'
export default class AddiScreen extends PureComponent {
  constructor(props) {
      super(props);
      this.state = {
          data:{
            gasKinds:'',
            option : 0,
            pet : 0,
            loan : 0,
          },    
          gasModalSwitch:false,
      };
    }
  
  /** checker method */
  optionChecker = (id) => {
    this.state.data.option = id
    this.setState(this.state.data);
  };
  petChecker = (id) => {
    this.state.data.pet = id
    this.setState(this.state.data);
  };
  loanChecker = (id) => {
    this.state.data.loan = id
    this.setState(this.state.data);
  };
  /** ############# 가스 모달 ############# */
  gasModalVisible=(kind='')=>{
    this.state.data.gasKinds = kind
    this.setState({gasModalSwitch : !this.state.gasModalSwitch})
  };
  GasModal=()=>{
    return(
      <GasModal 
        gasModalSwitch = {this.state.gasModalSwitch}
        gasModalVisible = {this.gasModalVisible}
        />
    );
  }
  render() {
    this.props.addiDataUpdater(this.state.data)
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
                  <TouchableOpacity onPress={()=>this.optionChecker(1)} style={this.state.data.option === 1? styles.red : styles.button} >
                    <Text style={this.state.data.option === 1? styles.white : styles.black}>없음</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.optionChecker(2)} style={this.state.data.option === 2? styles.red : styles.button} >
                    <Text style={this.state.data.option === 2? styles.white : styles.black}>있음</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{width:'90%',height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
              <TouchableOpacity 
                onPress={()=>this.gasModalVisible()}
                style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>난방종류</Text>
                <View style={{ flexDirection:'row', alignItems:'center'}}>
                  {this.state.data.gasKinds===''?<Text>입력하세요</Text>:<Text>{this.state.data.gasKinds}</Text>}
                  <Icon name='ios-arrow-forward'/>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{width:'90%', height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>반려동물</Text>
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={()=>this.petChecker(1)} style={this.state.data.pet === 1? styles.red : styles.button} >
                    <Text style={this.state.data.pet === 1? styles.white : styles.black}>불가</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.petChecker(2)} style={this.state.data.pet === 2? styles.red : styles.button} >
                    <Text style={this.state.data.pet === 2? styles.white : styles.black}>가능</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{width:'90%', height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>전세자금대출</Text>
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={()=>this.loanChecker(1)} style={this.state.data.loan === 1? styles.red : styles.button} >
                    <Text style={this.state.data.loan === 1? styles.white : styles.black}>불가</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.loanChecker(2)} style={this.state.data.loan === 2? styles.red : styles.button} >
                    <Text style={this.state.data.loan === 2? styles.white : styles.black}>가능</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View> 
        </Container>
          
      );
  }
}
