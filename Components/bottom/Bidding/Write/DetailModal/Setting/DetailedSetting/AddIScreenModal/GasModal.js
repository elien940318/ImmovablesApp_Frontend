import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import {Icon, Header} from 'native-base';
import styles from '../../../../../../../css/bottom/Bidding/Setting/AddiScreenCSS.js'

class GasModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        gasKinds:0,
        name:'',
    };
  }

  render() {
    return (
        <Modal
        animationType="fade"
        transparent={false}
        visible={this.props.gasModalSwitch}
        onRequestClose={() => {
        this.props.gasModalVisible(this.state.name);
        }}
        backdrop={true}>
          <View style={{flex:1}}>
            <Header style ={{justifyContent:'space-between'}}>
              <Icon name='ios-arrow-back' onPress={()=>{this.props.gasModalVisible(this.state.name);}}/>
              <Text>옵션</Text>
              <Text/>
            </Header>
            <View style={{flexDirection:'column', alignItems:'center', height:'80%'}}>
              <View  style={{justifyContent: 'center',alignItems:'center',height:'10%'}}>
                <Text>난방종류를 선택하세요.</Text>
              </View>
              <View style={{width:'90%', height:'10%', flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity 
                  onPress={()=>{this.setState({gasKinds:1, name:'중앙난방'});}}
                  style={this.state.gasKinds===1?styles.onbutton:styles.offbutton}>
                  <Text
                  style={this.state.gasKinds===1?{color:'white'}:{color:'black'}}>
                    중앙난방</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={()=>{this.setState({gasKinds:2, name:'개별난방'})}}
                  style={this.state.gasKinds===2?styles.onbutton:styles.offbutton}>
                  <Text
                    style={this.state.gasKinds===2?{color:'white'}:{color:'black'}}>
                    개별난방</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={()=>{this.setState({gasKinds:3, name:'지역난방'})}}
                  style={this.state.gasKinds===3?styles.onbutton:styles.offbutton}>
                  <Text
                    style={this.state.gasKinds===3?{color:'white'}:{color:'black'}}>
                    지역난방</Text> 
                </TouchableOpacity>
              </View>
              <View style={{height:'10%',width:'90%', flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity 
                  onPress={()=>{this.setState({gasKinds:4, name:'중앙냉난방'})}}
                  style={this.state.gasKinds===4?styles.onbutton:styles.offbutton}>
                  <Text
                    style={this.state.gasKinds===4?{color:'white'}:{color:'black'}}>
                    중앙냉난방</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={()=>{this.setState({gasKinds:5, name:'개별냉난방'})}}
                  style={this.state.gasKinds===5?styles.onbutton:styles.offbutton}>
                  <Text
                    style={this.state.gasKinds===5?{color:'white'}:{color:'black'}}>
                    개별냉난방</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={()=>{this.setState({gasKinds:6, name:'지역냉난방'})}}
                  style={this.state.gasKinds===6?styles.onbutton:styles.offbutton}>
                  <Text
                    style={this.state.gasKinds===6?{color:'white'}:{color:'black'}}>
                    지역냉난방</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection:'row', width:'90%', justifyContent:'flex-start'}}>
                <TouchableOpacity 
                  onPress={()=>{this.setState({gasKinds:7, name:'기타'})}}
                  style={this.state.gasKinds===7?styles.onbutton:styles.offbutton}>
                  <Text
                    style={this.state.gasKinds===7?{color:'white'}:{color:'black'}}>
                    기타</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{alignItems:'center', justifyContent:'center', width:'100%'}}>
              <TouchableOpacity 
                onPress={()=>this.props.gasModalVisible(this.state.name)}
                style={styles.inputbutton}>
                <Text>입력</Text>
              </TouchableOpacity>
            </View>
          </View>
      </Modal>
    );
  }
}

export default GasModal;
