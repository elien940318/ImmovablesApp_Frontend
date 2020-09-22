import React, { Component } from 'react';
import { View, Text ,TouchableOpacity, Modal} from 'react-native';
import { Icon, Container, Header, Button, CheckBox, } from 'native-base'; 
import SettingInfo from '../../Setting/Setting'

class DetailSettingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstSectionVisible: false,
        secondSectionVisible: false,
        thirdSectionVisible: false,
        SettingInfoVisible: false
    };
  }

  renderSection=()=>{
    if(this.state.firstSectionVisible){
     return(
         <View style={{width:'100%', flexDirection:'row'}}>
           <View style={{width:'50%'}}>
             <View style={{flexDirection:'row'}}><CheckBox/><Text>     단독주택</Text></View>
             <View style={{flexDirection:'row'}}><CheckBox></CheckBox><Text>     다가구주택</Text></View>
           </View>
           <View style={{width:'50%'}}>
             <View style={{flexDirection:'row'}}><CheckBox/><Text>     다가구주택</Text></View>
             <View style={{flexDirection:'row'}}><CheckBox></CheckBox><Text>     상가주택</Text></View>
           </View>
         </View>
     )
   }
 }
 SecondSection=()=>{
    if(this.state.secondSectionVisible){
     return(
         <View style={{width:'100%', flexDirection:'row'}}>
           <View style={{width:'50%'}}>
             <View style={{flexDirection:'row'}}><CheckBox/><Text>     단독주택</Text></View>
             <View style={{flexDirection:'row'}}><CheckBox></CheckBox><Text>     다가구주택</Text></View>
           </View>
           <View style={{width:'50%'}}>
             <View style={{flexDirection:'row'}}><CheckBox/><Text>     다가구주택</Text></View>
             <View style={{flexDirection:'row'}}><CheckBox></CheckBox><Text>     상가주택</Text></View>
           </View>
         </View>
     )
   }
  }
  ThirdSection=()=>{
    if(this.state.thirdSectionVisible){
     return(
         <View style={{width:'100%', flexDirection:'row'}}>
           <View style={{width:'50%'}}>
             <View style={{flexDirection:'row'}}><CheckBox/><Text>     단독주택</Text></View>
             <View style={{flexDirection:'row'}}><CheckBox></CheckBox><Text>     다가구주택</Text></View>
           </View>
           <View style={{width:'50%'}}>
             <View style={{flexDirection:'row'}}><CheckBox/><Text>     다가구주택</Text></View>
             <View style={{flexDirection:'row'}}><CheckBox></CheckBox><Text>     상가주택</Text></View>
           </View>
         </View>
     )
   }
  }

  SettingInfoVisible1() {
    this.setState({SettingInfoVisible:!this.state.SettingInfoVisible});
  }
  SettingInfoModal=()=>{
    return <Modal
    animationType="slide"
    transparent={false}
    visible={this.state.SettingInfoVisible}
    onRequestClose={() => {
      this.SettingInfoVisible1();
    }}
    backdrop={true}
    >
      <SettingInfo SettingInfoVisible1={()=>this.SettingInfoVisible1()}/>
    </Modal>

  }

  render() {
    return (
        <View style={{flex:1}}>
            <Header style ={{justifyContent:'space-between'}}>
                <Icon name='ios-arrow-back' onPress={this.props.toggle}/>
                <Text>세부 정보</Text>
                <Text/>
            </Header>
            <View style={{flexDirection:'column', alignItems:'center'}}>
                <TouchableOpacity style={{width:'100%',height:50,flexDirection:'row',justifyContent:'space-between',alignItems: 'center',borderWidth:0.5,borderColor:'#a7a7a7',backgroundColor:'whitesmoke'}}
                    onPress={() => {
                    this.setState({firstSectionVisible: !this.state.firstSectionVisible});
                    this.setState.press=true;
                    } }>
                    <View style={{flexDirection:'row'}}>
                        <Text>  </Text>
                        <Icon name='md-square-outline' />
                        <Text style={{margin:5}}>주택</Text>
                    </View>
                    <Icon name='ios-arrow-down' style={{margin:5}}/>
                </TouchableOpacity>
                {this.renderSection()}
                <TouchableOpacity style={{width:'100%', height:50, flexDirection:'row', justifyContent:'space-between', alignItems: 'center', borderWidth:0.5, borderColor:'#a7a7a7', backgroundColor:'whitesmoke'}}
                onPress={() => this.setState({secondSectionVisible: !this.state.secondSectionVisible})}>
                    <View style={{flexDirection:'row'}}>
                        <Text>  </Text>
                        <Icon name='ios-watch'/>
                        <Text style={{margin:5}}>오피스텔</Text>
                    </View>
                    <Icon name='ios-arrow-down' style={{margin:5}}/>
                </TouchableOpacity>
                {this.SecondSection()}
                <TouchableOpacity style={{width:'100%', height:50, flexDirection:'row', justifyContent:'space-between', alignItems: 'center', borderWidth:0.5, borderColor:'#a7a7a7', backgroundColor:'whitesmoke'}}
                onPress={() => this.setState({thirdSectionVisible: !this.state.thirdSectionVisible})}>
                    <View style={{flexDirection:'row'}}>
                        <Text>  </Text>
                        <Icon name='md-browsers'/>
                        <Text style={{margin:5}}>아파트</Text>
                    </View>
                    <Icon name='ios-arrow-down' style={{margin:5}}/>
                </TouchableOpacity>
                {this.ThirdSection()}
            </View>
            <View style={{flex:1,flexDirection:'column',justifyContent:'flex-end',alignItems:'center'}}>
                <TouchableOpacity style={{width:'100%',height:50, backgroundColor:'#004aff', justifyContent:'center', alignItems:'center' }} onPress={()=>this.SettingInfoVisible1()}>
                    <Text style={{fontSize:20, color:'white'}}>다음</Text>
                </TouchableOpacity>
            </View>
            {this.SettingInfoModal()}
        </View>
      
    );
  }
}

export default DetailSettingModal;
