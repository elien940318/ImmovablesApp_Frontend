import React, { Component } from 'react';
import { View, Text ,TouchableOpacity, Modal} from 'react-native';
import { Icon, Container, Header, Button, CheckBox, ListItem, Body } from 'native-base'; 
import SettingInfo from '../../Setting/Setting'

class DetailSettingModal extends Component {
  constructor(props) {
    super(props);
    this.state = { /* first, second, third Section 반드시 데이터 정리 */
        firstSectionVisible: false,
        secondSectionVisible: false,
        thirdSectionVisible: false,
        SettingInfoVisible: false,
        firstSectionCheckList: [false, false, false, false],
        secondSectionCheckList: [false, false, false, false],
        thirdSectionCheckList: [false, false, false, false]
    };
  }
  checkController=(sectionNum, idx, bool)=>{
    if(sectionNum === 1){
        let lst = this.state.firstSectionCheckList
        lst[idx] = bool
        this.setState({firstSectionCheckList:lst})
    }
    else if(sectionNum === 2){
        let lst = this.state.secondSectionCheckList
        lst[idx] = bool
        this.setState({secondSectionCheckList:lst})
    }else{
        let lst = this.state.thirdSectionCheckList
        lst[idx] = bool
        this.setState({thirdSectionCheckList:lst})
    }
  }

  switch=(section)=>{
    
  }

  firstSection=()=>{
    if(this.state.firstSectionVisible){
     return(
         <View style={{width:'100%', flexDirection:'row'}}>
           <View style={{width:'50%'}}>
             <View style={{flexDirection:'row'}}><ListItem><CheckBox checked={this.state.firstSectionCheckList[0]} color="green" 
             onPress={()=>this.checkController(1,0,!this.state.firstSectionCheckList[0])} /><Text>     단독주택</Text></ListItem></View>
             <View style={{flexDirection:'row'}}><ListItem><CheckBox checked={this.state.firstSectionCheckList[1]} color="green" 
             onPress={()=>this.checkController(1,1,!this.state.firstSectionCheckList[1])}/><Text>     다가구주택</Text></ListItem></View>
           </View>
           <View style={{width:'50%'}}>
            <View style={{flexDirection:'row'}}><ListItem><CheckBox checked={this.state.firstSectionCheckList[2]} color="green" 
             onPress={()=>this.checkController(1,2,!this.state.firstSectionCheckList[2])}/><Text>     다가구주택</Text></ListItem></View>
            <View style={{flexDirection:'row'}}><ListItem><CheckBox checked={this.state.firstSectionCheckList[3]} color="green" 
             onPress={()=>this.checkController(1,3,!this.state.firstSectionCheckList[3])}/><Text>     상가주택</Text></ListItem></View>
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
             <View style={{flexDirection:'row'}}><ListItem><CheckBox checked={this.state.secondSectionCheckList[0]} color="green" 
             onPress={()=>this.checkController(2,0,!this.state.secondSectionCheckList[0])} /><Text>     단독주택</Text></ListItem></View>
             <View style={{flexDirection:'row'}}><ListItem><CheckBox checked={this.state.secondSectionCheckList[1]} color="green" 
             onPress={()=>this.checkController(2,1,!this.state.secondSectionCheckList[1])} /><Text>     다가구주택</Text></ListItem></View>
           </View>
           <View style={{width:'50%'}}>
             <View style={{flexDirection:'row'}}><ListItem><CheckBox checked={this.state.secondSectionCheckList[2]} color="green" 
             onPress={()=>this.checkController(2,2,!this.state.secondSectionCheckList[2])} /><Text>     다가구주택</Text></ListItem></View>
             <View style={{flexDirection:'row'}}><ListItem><CheckBox checked={this.state.secondSectionCheckList[3]} color="green" 
             onPress={()=>this.checkController(2,3,!this.state.secondSectionCheckList[3])} /><Text>     상가주택</Text></ListItem></View>
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
           <View style={{flexDirection:'row'}}><ListItem><CheckBox checked={this.state.thirdSectionCheckList[0]} color="green" 
             onPress={()=>this.checkController(3,0,!this.state.thirdSectionCheckList[0])} /><Text>     단독주택</Text></ListItem></View>
             <View style={{flexDirection:'row'}}><ListItem><CheckBox checked={this.state.thirdSectionCheckList[1]} color="green" 
             onPress={()=>this.checkController(3,1,!this.state.thirdSectionCheckList[1])} /><Text>     다가구주택</Text></ListItem></View>
           </View>
           <View style={{width:'50%'}}>
             <View style={{flexDirection:'row'}}><ListItem><CheckBox checked={this.state.thirdSectionCheckList[2]} color="green" 
             onPress={()=>this.checkController(3,2,!this.state.thirdSectionCheckList[2])} /><Text>     다가구주택</Text></ListItem></View>
             <View style={{flexDirection:'row'}}><ListItem><CheckBox checked={this.state.thirdSectionCheckList[3]} color="green" 
             onPress={()=>this.checkController(3,3,!this.state.thirdSectionCheckList[3])} /><Text>     상가주택</Text></ListItem></View>
           </View>
         </View>
     )
   }
  }

  SettingInfoVisible1() {
    this.setState({SettingInfoVisible:!this.state.SettingInfoVisible});
  }
  SettingInfoModal=()=>{
    return( <Modal animationType="slide" transparent={false} visible={this.state.SettingInfoVisible}
    onRequestClose={() => { this.SettingInfoVisible1(); }} backdrop={true} >
      <SettingInfo SettingInfoVisible1={()=>this.SettingInfoVisible1()}/>
    </Modal>
    )
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
                    this.setState({firstSectionVisible: !this.state.firstSectionVisible, secondSectionVisible: false, thirdSectionVisible: false});
                    } }>
                    <View style={{flexDirection:'row'}}>
                        <Text>  </Text>
                        <Icon name='md-square-outline' />
                        <Text style={{margin:5}}>주택</Text>
                    </View>
                    <Icon name='ios-arrow-down' style={{margin:5}}/>
                </TouchableOpacity>
                {this.firstSection()}
                <TouchableOpacity style={{width:'100%', height:50, flexDirection:'row', justifyContent:'space-between', alignItems: 'center', borderWidth:0.5, borderColor:'#a7a7a7', backgroundColor:'whitesmoke'}}
                onPress={() => this.setState({firstSectionVisible: false, secondSectionVisible: !this.state.secondSectionVisible, thirdSectionVisible: false})}>
                    <View style={{flexDirection:'row'}}>
                        <Text>  </Text>
                        <Icon name='ios-watch'/>
                        <Text style={{margin:5}}>오피스텔</Text>
                    </View>
                    <Icon name='ios-arrow-down' style={{margin:5}}/>
                </TouchableOpacity>
                {this.SecondSection()}
                <TouchableOpacity style={{width:'100%', height:50, flexDirection:'row', justifyContent:'space-between', alignItems: 'center', borderWidth:0.5, borderColor:'#a7a7a7', backgroundColor:'whitesmoke'}}
                onPress={() => this.setState({firstSectionVisible:false,secondSectionVisible:false,thirdSectionVisible: !this.state.thirdSectionVisible})}>
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
                <TouchableOpacity style={{width:'100%',height:50, backgroundColor:'#FF5C3B', justifyContent:'center', alignItems:'center' }} onPress={()=>this.SettingInfoVisible1()}>
                    <Text style={{fontSize:20, color:'white'}}>다음</Text>
                </TouchableOpacity>
            </View>
            {this.SettingInfoModal()}
        </View>
      
    );
  }
}

export default DetailSettingModal;
