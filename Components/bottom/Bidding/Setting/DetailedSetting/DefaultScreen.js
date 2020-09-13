import React, { PureComponent } from 'react';
import {TextInput,TouchableOpacity, View, Text, StyleSheet, Modal, TouchableWithoutFeedback} from 'react-native';
import {Container, Icon,Header} from 'native-base';
import { ThemeContext } from 'react-navigation';

export default class DefaultScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        rentId : 0,
        manaId : 0,
        parkId : 0,
        moveId : 0,
        ch1:0,
        MPriceshown: false,
        Priceshown: false,
        heightshown: false,
        sizeshwon: false,
        typeshown: false,
        typebutton: 3,
        typeresult:'',
        Priceresult:'',
        MPriceresult1:'',
        MPriceresult2:'',
        heightresult:'',
        sizeresult:'',
        
    };
  }
  MPricebutton(){
    if(this.state.typeresult==='매매'){
      return(
        <View style={{width:'90%',height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
          <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}
            onPress={()=>{
              this.SetPriceModalVisible(true);
              this.setState({Priceresult:''});
            }}>
            <Text>가격</Text>
            <View style={{width:90, flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>
              <Text>{this.state.Priceresult===''?'입력하세요':'매매'+this.state.Priceresult+'만 원'}</Text>
              <Icon name='ios-arrow-forward'/>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    else if(this.state.typeresult==='전.월세'){
      return(
        <View style={{width:'90%',height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
          <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}
            onPress={()=>{
              this.SetMPriceModalVisible(true);
              this.setState({MPriceresult1:'', MPriceresult2:''});
            }}>
            <Text>가격</Text>
            <View style={{width:90, flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>
              <Text>{this.state.MPriceresult2===''?this.state.MPriceresult1===''?'입력하세요':'전세'+this.state.MPriceresult1+'만 원':this.state.MPriceresult1==='입력하세요'?'':'월세'+this.state.MPriceresult1+'만 원 / '+this.state.MPriceresult2+'만 원'}</Text>
              <Icon name='ios-arrow-forward'/>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }
  Priceresulthandle = (text) => {
    if (/^\d+$/.test(text)) {
      this.setState({Priceresult: text});
    }
  };
  MPriceresulthandle1 = (text) => {
    if (/^\d+$/.test(text)) {
      this.setState({MPriceresult1: text});
    }
  };
  MPriceresulthandle2 = (text) => {
    if (/^\d+$/.test(text)) {
      this.setState({MPriceresult2: text});
    }
  };
  Settypebuttonon = (type) => {
    this.setState({typebutton: type});
  };
  SetPriceModalVisible(visible){
    this.setState({Priceshown: visible});
  }
  SetMPriceModalVisible(visible) {
    this.setState({MPriceshown: visible});
  };
  SetTypeModalVisible(visible){
    this.setState({typeshown:visible});
  };
  SetHeightModalVisible(visible){
    this.setState({heightshown:visible});
  };
  SetSizeModalVisible(visible){
    this.setState({sizeshwon:visible});
  };
  chrent = (id) => {
    this.setState({rentId: id});
  };
  chmana = (id) => {
    this.setState({manaId: id});
  };
  chpark = (id) => {
    this.setState({parkId: id});
  };
  chmove = (id) => {
    this.setState({moveId: id});
  };
  SizeModal=()=>{
    return(
      <Modal
        animationType="fade"
        transparent={false}
        visible={this.state.sizeshwon}
        onRequestClose={() => {
        this.SetSizeModalVisible(!this.state.sizeshwon);
    }}
    backdrop={true}
    >
      <View style={{flex:1}}>
        <Header style ={{justifyContent:'space-between'}}>
          <Icon name='ios-arrow-back' onPress={()=>{this.SetSizeModalVisible(!this.state.sizeshwon);}}/>
          <Text>평 수</Text>
          <Text/>
        </Header>
        <View style={{flexDirection:'column', alignItems:'center', height:'80%'}}>
          <View  style={{justifyContent: 'center',alignItems:'center',height:'10%'}}>
            <Text>평 수를 입력하세요.</Text>
          </View>
          <View style={{width:'90%', justifyContent: 'flex-start',}}>
            <Text style={{fontSize:15}}>평 수</Text>
          </View>
          <TextInput
            keyboardType='numeric'          
            onChangeText={(text)=>this.setState({sizeresult:text})}
            style={{color:'#000', width:'90%', height:40, borderWidth:0.5, borderRadius:5, justifyContent:'center', alignItems:'center'}}
            placeholder='0'
          >
          </TextInput>
        </View>
        <View style={{alignItems:'center', justifyContent:'center', width:'100%'}}>
          <TouchableOpacity 
            onPress={()=>this.SetSizeModalVisible(!this.state.sizeshwon)}
            style={{color:'#000', width:'90%', height:40, borderWidth:0.5, borderRadius:5, justifyContent:'center', alignItems:'center', backgroundColor:"#004aff"}}>
            <Text>입력</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </Modal>
    )

  }
  HeightModal=()=>{
    return(
      <Modal
        animationType="fade"
        transparent={false}
        visible={this.state.heightshown}
        onRequestClose={() => {
        this.SetHeightModalVisible(!this.state.heightshown);
    }}
    backdrop={true}
    >
      <View style={{flex:1}}>
        <Header style ={{justifyContent:'space-between'}}>
          <Icon name='ios-arrow-back' onPress={()=>{this.SetHeightModalVisible(!this.state.heightshown);}}/>
          <Text>거래종류</Text>
          <Text/>
        </Header>
        <View style={{flexDirection:'column', alignItems:'center', height:'80%'}}>
          <View  style={{justifyContent: 'center',alignItems:'center',height:'10%'}}>
            <Text>층 수를 입력하세요.</Text>
          </View>
          <View style={{width:'90%', justifyContent: 'flex-start',}}>
            <Text style={{fontSize:15}}>층 수</Text>
          </View>
          <TextInput
            keyboardType='numeric'          
            onChangeText={(text)=>this.setState({heightresult:text})}
            style={{color:'#000', width:'90%', height:40, borderWidth:0.5, borderRadius:5, justifyContent:'center', alignItems:'center'}}
            placeholder='0'
          >
          </TextInput>
        </View>
        <View style={{alignItems:'center', justifyContent:'center', width:'100%'}}>
          <TouchableOpacity 
            onPress={()=>this.SetHeightModalVisible(!this.state.heightshown)}
            style={{color:'#000', width:'90%', height:40, borderWidth:0.5, borderRadius:5, justifyContent:'center', alignItems:'center', backgroundColor:"#004aff"}}>
            <Text>입력</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </Modal>
    )

  }
  TypeModal=()=>{
    return(
      <Modal
        animationType="fade"
        transparent={false}
        visible={this.state.typeshown}
        onRequestClose={() => {
        this.SetTypeModalVisible(!this.state.typeshown);
    }}
    backdrop={true}
    >
      <View style={{flex:1}}>
        <Header style ={{justifyContent:'space-between'}}>
          <Icon name='ios-arrow-back' onPress={()=>{this.SetTypeModalVisible(!this.state.typeshown);}}/>
          <Text>거래종류</Text>
          <Text/>
        </Header>
        <View style={{flexDirection:'column', alignItems:'center', height:'80%'}}>
          <View  style={{justifyContent: 'center',alignItems:'center',height:'10%'}}>
            <Text>거래종류를 입력하세요.</Text>
          </View>
          <TouchableOpacity 
            onPress={()=>{this.Settypebuttonon(1); this.setState({typeresult:'매매'});}} style={this.state.typebutton === 1? styles.ontypebutton : styles.offtypebutton} >
            <Text>매매</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>{this.Settypebuttonon(2); this.setState({typeresult:'전.월세'});}} style={this.state.typebutton === 2? styles.ontypebutton : styles.offtypebutton}>
            <Text>전.월세</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems:'center', justifyContent:'center', width:'100%'}}>
          <TouchableOpacity 
            onPress={()=>this.SetTypeModalVisible(!this.state.typeshown)}
            style={{color:'#000', width:'90%', height:40, borderWidth:0.5, borderRadius:5, justifyContent:'center', alignItems:'center', backgroundColor:"#004aff"}}>
            <Text>입력</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      </Modal>
    )
  }
  PriceModal=()=>{
    return(
      <Modal
        animationType="fade"
        transparent={false}
        visible={this.state.Priceshown}
        onRequestClose={() => {
        this.SetPriceModalVisible(!this.state.Priceshown);
      }}
      backdrop={true}>
        <View style={{flex:1}}>
          <Header style ={{justifyContent:'space-between', width:'100%'}}>
            <Icon name='ios-arrow-back' onPress={()=>{this.SetPriceModalVisible(!this.state.Priceshown);}}/>
            <Text>가격</Text>
            <Text/>
          </Header>
          <View style={{flexDirection:'column', alignItems:'center', height:'80%'}}>
            <View  style={{justifyContent: 'center',alignItems:'center',height:'10%'}}>
              <Text>가격을 입력하세요.</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:15}}>매매금</Text><Text style={{fontSize:15, color:'#BEBEBE'}}> 만원</Text>
            </View>
              <TextInput
                keyboardType='numeric'
                onChangeText={this.Priceresulthandle}
                style={{color:'#000', width:'90%', height:40, borderWidth:0.5, borderRadius:5, justifyContent:'center', alignItems:'center'}}
                placeholder='0'/>
          </View>
            <View style={{alignItems:'center', justifyContent:'center', width:'100%'}}>
              <TouchableOpacity
                onPress={()=>{
                  this.SetPriceModalVisible(!this.state.Priceshown);
                }}
                style={{color:'#000', width:'90%', height:40, borderWidth:0.5, borderRadius:5, justifyContent:'center', alignItems:'center', backgroundColor:"#004aff"}}>
                <Text>입력</Text>
              </TouchableOpacity>
            </View>
        </View>
      </Modal>
    );
  }
  MPriceModal=()=>{
    return(
      <Modal
        animationType="fade"
        transparent={false}
        visible={this.state.MPriceshown}
        onRequestClose={() => {
        this.SetMPriceModalVisible(!this.state.MPriceshown);
    }}
    backdrop={true}
    >
      <View style={{flex:1}}>
        <Header style ={{justifyContent:'space-between', width:'100%'}}>
          <Icon name='ios-arrow-back' onPress={()=>{this.SetMPriceModalVisible(!this.state.MPriceshown);}}/>
          <Text>가격</Text>
          <Text/>
        </Header>
        <View style ={{height:'80%', alignItems:'center'}}>
          <View style={{height:'10%', justifyContent:'center', alignItems:'center'}}>
            <Text>가격을 입력하세요.</Text>
          </View>
          <View style={{flexDirection:'column', alignItems:'flex-start', width:'90%'}}>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:15}}>보증금(전세금)</Text><Text style={{fontSize:15, color:'#BEBEBE'}}> 만원</Text>
            </View>
            <TextInput
              keyboardType='numeric'
              onChangeText={this.MPriceresulthandle1}
              style={{color:'#000', width:'100%', height:40, borderWidth:0.5, borderRadius:5, justifyContent:'center', alignItems:'center'}}
              placeholder='0'/>
          </View>
          <View style={{width:'90%', height:'10%', alignItems: 'flex-start'}}>
            <Text>전세는 전세금만 입력하세요.</Text>
          </View>

          <View style={{flexDirection:'column', alignItems:'flex-start', width:'90%'}}>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:15}}>월세</Text><Text style={{fontSize:15, color:'#BEBEBE'}}> 만원</Text>
            </View>
            <TextInput 
            keyboardType='numeric'
            onChangeText={this.MPriceresulthandle2}
            style={{color:'#000', width:'100%', height:40, borderWidth:0.5, borderRadius:5, justifyContent:'center', alignItems:'center'}}
            placeholder='0'/>
          </View>
        </View>
        <View style={{alignItems:'center', justifyContent:'center', width:'100%'}}>
          <TouchableOpacity
            onPress={()=>{
              this.SetMPriceModalVisible(!this.state.MPriceshown);
            }}
            style={{color:'#000', width:'90%', height:40, borderWidth:0.5, borderRadius:5, justifyContent:'center', alignItems:'center', backgroundColor:"#004aff"}}>
            <Text>입력</Text>
          </TouchableOpacity>
        </View>
      </View>
      </Modal>
    )
  }
  render() {{this.setState.ch1=1}
    return (
        <Container style={styles.container}>
          {this.PriceModal()}
          {this.MPriceModal()}
          {this.TypeModal()}
          {this.HeightModal()}
          {this.SizeModal()}
          <View style={{ margin:3, width:'90%', height:'80%', borderWidth:0.5, borderRadius:5, alignItems:'center'}}>
            <View style={{width:'90%', borderBottomWidth:0.5}}>
              <Text style={{margin:15, fontSize: 15 }}>가장 중요한 정보이므로 정확히 입력하세요.</Text>
            </View>
            <View style={{width:'90%',height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
              <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}
                onPress={()=>this.SetTypeModalVisible(true)}>
                <Text>거래종류</Text>
                <View style={{width:90, flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>
                  <Text>{this.state.typeresult===''?'입력하세요':this.state.typeresult}</Text>
                  <Text/>
                  <Icon name='ios-arrow-forward'/>
                </View>
              </TouchableOpacity>
            </View>
              
              {this.MPricebutton()}
            <View style={{width:'90%', height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
              <TouchableOpacity 
                onPress={()=>{
                  this.SetHeightModalVisible(true);
                }}
                style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>층 수</Text>
                <View style={{ width:90, flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>
                  <Text>{this.state.heightresult===''?'입력하세요':this.state.heightresult+'층'}</Text>
                  <Icon name='ios-arrow-forward'/>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{width:'90%', height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
              <TouchableOpacity 
                onPress={()=>this.SetSizeModalVisible(true)}
                style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>방 크기</Text>
                <View style={{ width:90, flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>
                  <Text>{this.state.sizeresult===''?'입력하세요':this.state.sizeresult+'평'}</Text>
                  <Icon name='ios-arrow-forward'/>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{width:'90%', height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>단기임대</Text>
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={()=>this.chrent(1)} style={this.state.rentId === 1? styles.red : styles.button} >
                    <Text style={this.state.rentId === 1? styles.white : styles.black}>불가</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.chrent(2)} style={this.state.rentId === 2? styles.red : styles.button} >
                    <Text style={this.state.rentId === 2? styles.white : styles.black}>가능</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{width:'90%', height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>관리비</Text>
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={()=>this.chmana(1)} style={this.state.manaId === 1? styles.red : styles.button} >
                    <Text style={this.state.manaId === 1? styles.white : styles.black}>없음</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.chmana(2)} style={this.state.manaId === 2? styles.red : styles.button} >
                    <Text style={this.state.manaId === 2? styles.white : styles.black}>있음</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{width:'90%', height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>주차</Text>
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={()=>this.chpark(1)} style={this.state.parkId === 1? styles.red : styles.button} >
                    <Text style={this.state.parkId === 1? styles.white : styles.black}>불가</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.chpark(2)} style={this.state.parkId === 2? styles.red : styles.button} >
                    <Text style={this.state.parkId === 2? styles.white : styles.black}>가능</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{width:'90%', height:'8%', justifyContent:'center', borderBottomWidth:0.5}}>
              <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text>입주 가능일</Text>
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={()=>this.chmove(1)} style={this.state.moveId === 1? styles.red : styles.button} >
                    <Text style={this.state.moveId === 1? styles.white : styles.black}>즉시 입주</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.chmove(2)} style={this.state.moveId === 2? styles.red : styles.button} >
                    <Text style={this.state.moveId === 8? styles.white : styles.black}>날짜 협의</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.chmove(3)} style={this.state.moveId === 3? styles.red : styles.button} >
                    <Text style={this.state.moveId === 3? styles.white : styles.black}>직접 입력</Text>
                  </TouchableOpacity>
                  
                </View>
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
    ontypebutton:{
      color:'#000', 
      width:'90%', 
      height:40, 
      borderWidth:0.5, 
      borderRadius:5, 
      justifyContent:'center', 
      alignItems:'center',
      backgroundColor:'#004aff'
    },
    offtypebutton:{
      color:'#000', 
      width:'90%', 
      height:40, 
      borderWidth:0.5, 
      borderRadius:5, 
      justifyContent:'center', 
      alignItems:'center',
      
    }
});