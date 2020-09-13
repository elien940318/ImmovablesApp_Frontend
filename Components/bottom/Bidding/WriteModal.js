
import React, { Component } from 'react';
import {Image,touchablehilight,TouchableWithoutFeedback,TouchableOpacity,TextInput, StyleSheet, Text, View, Dimensions, Modal, TouchableHighlight, ScrollView} from 'react-native';
import { Icon, Container, Header, Button, CheckBox, } from 'native-base'; 
import Setting from './Setting/Setting'
import SettingInfo from './Setting/Setting'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH );
const ITEM_WIDTH1 = Math.round(SLIDER_WIDTH);
// const [selectImg, setSelectedImg] = React.useState(null)
// let openImage = async () =>{
//   let permission = await ImagePicker.requestCameraRollPermissionsAsync();

//   if(permission.granted == false){
//     return;
//   }
//   let picker = await ImagePicker.launchImageLibraryAsync()

//   if(picker.cancelled === true){
//     return;

//   }
//   setSelectedImg({localUri:picker.uri})
//   console.log(picker)
// }

//   console.log(picker)
//   console.log('ㅗㅑㅗㅑ')
  
// }

export default class WriteModal extends Component {


    constructor(props) {  
      super(props);  
      this.state = {
        ConmodalShown: false,
        modalShown: false,
        modalVisible: false,
        SettingInfoVisible: false,
        title:'',
        category:'카테고리',
        activeIndex:1,
        secondIndex:1,
        thirdIndex:1,
        sellbuy:null,
        image: null
      };  
  }
  componentDidMount() {
    this.getPermissionAsync();
  }
  getPermissionAsync = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };
  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  }; 

sellbuyClicked = (sellbuy) => {
  this.setState({ 
    sellbuy 
  });
  
}  
segmentClicked = (activeIndex) => {
  this.setState({ 
    activeIndex 
  });
  
}
SecondClicked = (secondIndex) => {
  this.setState({ 
    secondIndex 
  });
  
}
ThirdClicked = (thirdIndex) => {
  this.setState({ 
    thirdIndex 
  });
  
}
renderSection=()=>{
   if(this.state.activeIndex === 0){
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
DetailSection=()=>{
  if(this.state.sellbuy === 1){
    return(
      <TouchableOpacity style={styles.button} onPress={()=>this.setModalShown(true)}>
        <Text style={{margin:5}}>세부정보</Text>
        <Text style={{margin:5}}>></Text>
      </TouchableOpacity>
    )
    }  
  else if(this.state.sellbuy === 0){
    return(
      <TouchableOpacity style={styles.button} onPress={()=>this.SetConModalShown(true)}>
        <Text style={{margin:5}}>편의시설</Text>
        <Text style={{margin:5}}>></Text>
      </TouchableOpacity>
    )  
  }
}
SecondSection=()=>{
  if(this.state.secondIndex === 0){
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
  if(this.state.thirdIndex === 0){
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

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
    
  setModalShown(visible) {
    this.setState({modalShown: visible});
  }
  SetConModalShown(visible){
    this.setState({ConmodalShown: visible});
  }
  Conmodal=()=>{
    return(
      <Modal
    animationType="fade"
    transparent={true}
    visible={this.state.ConmodalShown}
    onRequestClose={() => {
      this.SetConModalShown(!this.state.ConmodalShown);
    }}
    backdrop={true}
    >
    <TouchableWithoutFeedback onPress={()=>{this.SetConModalShown(!this.state.modalShown);}}>
      <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
        <TouchableWithoutFeedback>
          <View style={{justifyContent:'center', alignItems:'center',width: 300, height: 150, borderWidth:1, borderColor:'#a7a7a7', borderRadius:5, backgroundColor:'white'}}>
            <View style ={{justifyContent:'flex-start', width:300, height:40, backgroundColor: null}}>
              <Icon style={{margin:10, fontSize:25}} name='ios-arrow-back' onPress={()=>{this.SetConModalShown(!this.state.ConmodalShown);}}/>
              <Text/>
              <Text/>
            </View>
            <View style={{flex:1, flexDirection:'row'}}>
              <TouchableOpacity style={{height:50,width:50,borderRadius:100,justifyContent:'center',alignItems:'center', backgroundColor:'#fd6059'}}>
                <Icon name='md-restaurant'/>
                <Text>
                  음식점
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{height:50,width:50,borderRadius:100,justifyContent:'center',alignItems:'center', backgroundColor:'#FBAF5B'}}>
                <Icon name='ios-cafe'/>
                <Text>
                  카페
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{height:50,width:50,borderRadius:100,justifyContent:'center',alignItems:'center', backgroundColor:'#7BDB84'}}>
                <Icon name='md-basket'/>
                <Text>
                  편의점
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{height:50,width:50,borderRadius:100,justifyContent:'center',alignItems:'center', backgroundColor:'#E3F95D'}}>
                <Icon name='ios-medkit'/>
                <Text>
                  병원
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>

  </Modal>
    )
  }
  Settingmodal=()=>{
    return <Modal
    animationType="slide"
    transparent={false}
    visible={this.state.modalShown}
    onRequestClose={() => {
      this.setModalShown(!this.state.modalShown);
    }}
    backdrop={true}
    >
      <View style={{flex:1}}>
        <Header style ={{justifyContent:'space-between'}}>
          
          <Icon name='ios-arrow-back' onPress={()=>{this.setModalShown(!this.state.modalShown);}}/>
          <Text>세부 정보</Text>
          <Text/>
        </Header>
        <View style={{flexDirection:'column', alignItems:'center'}}>
          <TouchableOpacity style={{width:'100%',height:50,flexDirection:'row',justifyContent:'space-between',alignItems: 'center',borderWidth:0.5,borderColor:'#a7a7a7',backgroundColor:'whitesmoke'}}
           onPress={() => {
             this.state.activeIndex === 1 ? this.segmentClicked(0) : this.segmentClicked(1);
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
          onPress={() => this.state.secondIndex === 1 ? this.SecondClicked(0) : this.SecondClicked(1)}>
            <View style={{flexDirection:'row'}}>
              <Text>  </Text>
              <Icon name='ios-watch'/>
              <Text style={{margin:5}}>오피스텔</Text>
            </View>
            <Icon name='ios-arrow-down' style={{margin:5}}/>
          </TouchableOpacity>
          {this.SecondSection()}
          <TouchableOpacity style={{width:'100%', height:50, flexDirection:'row', justifyContent:'space-between', alignItems: 'center', borderWidth:0.5, borderColor:'#a7a7a7', backgroundColor:'whitesmoke'}}
          onPress={() => this.state.thirdIndex === 1 ? this.ThirdClicked(0) : this.ThirdClicked(1)}>
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
      </View>
      {this.SettingInfoModal()}
    </Modal>

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
  showmodal =() =>{
  return <Modal
    animationType="fade"
    transparent={true}
    visible={this.state.modalVisible}
    onRequestClose={() => {
      this.setModalVisible(!this.state.modalVisible);
    }}
    backdrop={true}
    >
    <TouchableWithoutFeedback onPress={()=>{this.setModalVisible(!this.state.modalVisible);}}>
      <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
        <TouchableWithoutFeedback>
          <View style={{justifyContent:'center', alignItems:'center',width: 300, height: 150, borderWidth:1, borderColor:'#a7a7a7', borderRadius:5, backgroundColor:'#c0c0c0'}}>
            <Text style={{color:'#004aff',margin:5}}>카테고리를 선택하시오.</Text>
            <TouchableOpacity style={styles.button} onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
              this.setState({category: '방 구하기'});
              this.sellbuyClicked(0);
            }}> 
            <Text style={{color:'#004aff'}}>방 구하기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
              this.setState({category: '방 내놓기'});
              this.sellbuyClicked(1);
            }}> 
              <Text style={{color:'#004aff'}}>방 내놓기</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>

  </Modal>
  }
  updateText = () => {
    this.setState({myText: 'My Changed Text'})
 }

  render() {
      let { image } = this.state;
      return (
              <Container style={styles.container}>
              <ScrollView>
                <Header style={styles.modalheader}>    
                  <TouchableOpacity onPress={this.props.toggle}>
                    <Text>X</Text>
                  </TouchableOpacity> 
                  <Text style={{fontSize:15 }}>
                    게시판 글쓰기
                  </Text>
                  <Text></Text>           
                </Header>
                {this.showmodal()}
                {this.Settingmodal()}
                {this.Conmodal()}
                <View style={{alignItems:'center'}}>
                  <View style={styles.iteminformation}>
                    {/* {
                      selectImg != null ?
                      (
                        <Image
                        style = {styles.image}
                        source={{uri:(selectImg.localUri !=null) ? selectImg.localUri :'' }}/>
                      ) : <Icon name='ios-camera' style={{margin:10, fontSize: 100}} />
                      
                    } */}
                    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                    <View>
                      <Text>매물이름</Text>
                      <Text>가격</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.button} onPress={()=>this.setModalVisible(true)}>
                    <Text style={{margin:5}}>{this.state.category}</Text>
                    <Text style={{margin:5}}>></Text>
                  </TouchableOpacity>
                  {this.DetailSection()}
                  <TextInput
                    style={styles.button}  
                    placeholder="제목" onChangeText={(title) => this.setState({title})} value={this.state.title}>  
                  </TextInput>
                  <View style={{margin:5, width:'100%', alignItems:'center'}}>
                    <TextInput 
                      style={styles.mcontent} placeholder="게시글을 작성해주세요." >
                      
                    </TextInput>
                      <TouchableOpacity style={styles.bottomimage} onPress={this._pickImage} >
                        <View style={{flexDirection:'row'}}>
                          <Icon name='md-image' style={{margin:5, color:'#004aff'}}/>
                          <Text style={{margin:5, color:'#004aff'}}>사진 추가하기</Text>
                        </View>
                      </TouchableOpacity>
                  </View> 
                  <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.bottombutton} onPress={this.props.toggle}> 
                      <Text>취소</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottombutton1}>
                      <Text style={{color:'white'}}>작성하기</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
              </Container >
              
      );
  }
}
const Buttton = ({ onPress, children }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
    container: {
        margin:-20,
        backgroundColor: 'whitesmoke'
      },
      modalheader:{
        backgroundColor: 'whitesmoke',
        alignItems:'center',
        justifyContent: 'space-between',

      },
      button1:{
        width:'95%',
        justifyContent:'space-around',
        alignItems: 'center',
        borderWidth:1,
        borderColor:'#a7a7a7',
        backgroundColor:'whitesmoke'    
    },

    button:{
        margin:5,
        width:'95%',
        height:40,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        borderWidth:1,
        borderColor:'#a7a7a7',
        borderRadius:5,
        backgroundColor:'whitesmoke'
        
    },
    iteminformation:{
      flex:1,
      height:100,
      width:'100%',
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems: 'center',
      borderBottomWidth:1,
      borderColor:'#b7b7b7',
  },

    mcontent:{
      height:ITEM_HEIGHT,
      width:'95%',
      justifyContent:'center',
      alignItems: 'center',
      borderWidth:1,
      borderColor:'#a7a7a7',      
    },
    bottomimage:{
      width:'95%',
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems: 'center',
      borderWidth:1,
      borderColor:'#a7a7a7',      
    },
    bottombutton:{
      width:'46%',
      height: ITEM_HEIGHT/7,
      margin:5,
      flexDirection:'row',
      justifyContent:'center',
      alignItems: 'center',
      borderWidth:1,
      borderColor:'#a7a7a7',      
    },
    bottombutton1:{
      width:'46%',
      height: ITEM_HEIGHT/7,
      margin:5,
      flexDirection:'row',
      justifyContent:'center',
      alignItems: 'center',
      borderWidth:1,
      borderColor:'#a7a7a7',   
      backgroundColor:'#004aff'   
    },
    image: { width: 300, height: 300, backgroundColor: 'gray' },


});