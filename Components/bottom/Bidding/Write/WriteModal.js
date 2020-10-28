import React, { Component } from 'react';
import {TouchableOpacity,TextInput, Text, View, Modal, ScrollView} from 'react-native';
import { Icon, Container, Header } from 'native-base'; 
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import DetailSection from './DetailSection.js'
import ImgComponet from './WriteModalImage';
import ConvModal from './DetailModal/ConvenienceModal.js'
import SellBuyCategoryModal from './DetailModal/SellBuyModal.js'
import DetailSettingModal from './DetailModal/DetailSettingModal.js'
import styles from '../../../css/bottom/Bidding/WriteModalCSS.js' 
import http from '../../../../http-common'
import SellDetailWriteModal from './SellDetailWriteModal.js'  
export default class WriteModal extends Component {

    constructor(props) {  
      super(props);  
      this.state = {
        convModalShown: false, // 편의 시설 모달 Bool
        detailModalShown: false, // 세부 설정 모달 Bool
        sellBuyModalShown: false, // 방 구하기, 방 내놓기 모달 Bool
        title:'',
        contents:'',
        category:'카테고리',
        sellbuy:null, // 0 : 방 구하기 & 1 : 방 내놓기
        imageArray: [],
        convLst:[], // 편의시설 배열
        formDataLst:[],
        sellData:null,
        att:0
      };  
  }

  componentDidMount() {
    this.getPermissionAsync();
    setTimeout(()=>{
      this.sellBuyModalToggle()
    }, 200)
  }
  /* ########## Image 관련 함수 ########## */
  getPermissionAsync = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('카메라 권한이 없습니다.');
      }
    }
  };

  noUpdate = () => {
    alert('5장까지 업로드 가능합니다!')
  }

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1, 
      });
      if (!result.cancelled) {
        let lst = this.state.imageArray
        lst.push(result)
        this.setState({imageArray:lst})
      }
    } catch (E) {}
  }; 
  /* ########## 편의 시설 모달 함수 ########## */
  selectionConv=(text)=>{
    if(!this.state.convLst.includes(text)){
      this.state.convLst.push(text)
    }
    else{
      let idx = this.state.convLst.indexOf(text)
      this.state.convLst.splice(idx, 1)
    }
  }
  convModalToggle(){
    
    this.setState({convModalShown: !this.state.convModalShown})
    if(!this.state.convModalShown)
      this.state.convLst =[]
    
  }
  convModal=()=>{  
    return(
      <Modal animationType="fade" transparent={true} visible={this.state.convModalShown} 
      onRequestClose={() => {this.convModalToggle();}} backdrop={true}>
        <ConvModal toggle={()=>this.convModalToggle()} conv={this.selectionConv} lst={this.state.convLst}/>
      </Modal>
    )
  }
  /* ########## 세부 시설 모달 함수 ########## */

  detailModalToggle=(data=null)=>{
    this.state.sellData = data;
    this.setState({detailModalShown: !this.state.detailModalShown});
  }
  detailModal=()=>{
    return (
      <Modal animationType="slide" transparent={false} visible={this.state.detailModalShown}
        onRequestClose={() => {this.detailModalToggle();}} backdrop={true}>
        <DetailSettingModal toggle={this.detailModalToggle} />
      </Modal>
    )
  }
  /* ########## 방 구하기 / 방 내놓기 모달  ########## */
  sellBuyModalToggle() {
    this.setState({sellBuyModalShown: !this.state.sellBuyModalShown});
  }
  categoryBuyChanger=()=>{
    this.setState({category: '방 구하기'}) 
  }
  categorySellChanger=()=>{
    this.setState({category: '방 내놓기'}) 
  }
  buyClicker=()=>{
    this.setState({sellbuy:0})
    this.sellBuyModalToggle()
  }
  sellClicker=()=>{
    this.setState({sellbuy:1})
    this.sellBuyModalToggle()
  }
  sellBuyCategoryModal =() =>{
    return( 
      <Modal animationType="fade" transparent={true} visible={this.state.sellBuyModalShown}
        onRequestClose={() => {this.sellBuyModalToggle();}} backdrop={true}>
        <SellBuyCategoryModal categoryBuyChanger={()=>this.categoryBuyChanger()} categorySellChanger={()=> this.categorySellChanger()}
          buyClicker = {()=>this.buyClicker()} sellClicker = {()=>this.sellClicker()} />
      </Modal>
    )
  }

  /* ########## 방 구매 업로드  ########## */
  createFormData = (photoes) => {
    const data = new FormData();
    
    photoes.forEach(photo => {
      let l = photo.uri.split('/').pop().split('.')
      l.pop()
      
      data.append('photo', {
        name: l.pop(),
        type: photo.type+'/'+photo.uri.split('.').pop(),
        uri:
          Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
      });
    });
    let tempStr = ''
    this.state.convLst.forEach(e=>
      tempStr += e + ','
      )
    data.append('title',this.state.title)
    data.append('contents',this.state.contents)
    data.append('preference', tempStr)
    data.append('price',1000)
    data.append('location','진주')
    data.append('user', 'tester')
    data.append('att', this.state.sellbuy == 0?1:2)
    return data;
  };

  postData= async ()=>{
    if(this.state.sellbuy == 0){
      http.post(`/post/postWish`, this.createFormData(this.state.imageArray))
      .then((response) => {
        alert('파일을 업로드 하였습니다.');
        this.props.toggle()
      })
      .catch((error) => {
        console.log('upload error', error);
        alert('Upload failed!');
      });
    }else{
      http.post(`/post/postTrade`, this.createFormData2(this.state.imageArray))
      .then((response) => {
        alert('파일을 업로드 하였습니다.');
        this.props.toggle()
      })
      .catch((error) => {
        console.log('upload error', error);
        alert('Upload failed!');
      });
    }
  }
  /* ########## 방 판매 업로드  ########## */
  createFormData2 = (photoes) => {
    const data = new FormData();
    
    photoes.forEach(photo => {
      let l = photo.uri.split('/').pop().split('.')
      l.pop()
      
      data.append('photo', {
        name: l.pop(),
        type: photo.type+'/'+photo.uri.split('.').pop(),
        uri:
          Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
      });
    });
    data.append('title',this.state.title)
    data.append('contents',this.state.contents)
    data.append('user', 'tester')
    data.append('address',this.state.sellData[0].address)
    data.append('immovabletype',this.state.sellData[0].immovablesKind)
    this.state.sellData[1].tradeType !== '매매'?data.append('deposit',this.state.sellData[1].deposit):data.append('deposit',-1)
    data.append('floor', this.state.sellData[1].floor)
    data.append('management', this.state.sellData[1].manage)
    data.append('moveIn', this.state.sellData[1].moveIn)
    data.append('park', this.state.sellData[1].park)
    data.append('price', this.state.sellData[1].price)
    data.append('rent', this.state.sellData[1].rent)
    data.append('area', this.state.sellData[1].size)
    data.append('tradeType', this.state.sellData[1].tradeType)
    data.append('heater', this.state.sellData[2].gasKinds)
    data.append('loan', this.state.sellData[2].loan)
    data.append('option_', this.state.sellData[2].option)
    data.append('pet', this.state.sellData[2].pet)
    data.append('purchasetype', 1) //거래 유형
    data.append('location','진주')
    return data;
  };
  /* ########## 유효성 체크 ########## */ 
  checker = () => {
    if(this.state.title!=''&this.state.contents!=''/*&this.state.convLst.length!=0*/){
    //   if(this.state.sellbuy==0){
    //     this.postData()
    //   }else{
    //     alert('방 내놓기 글쓰기는 아직 구현중이에요')
    //   }
    // }else{
    //   alert('빠트리지 않고 기입해주세요.')
    // }
    this.postData()
    }
  }
  /* ########## main ########## */ 
  render() {
      let { imageArray } = this.state // 이미지 배열 지역변수
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
            {
              this.state.sellbuy === 0?
              <View style={{flexDirection:'row', margin:10}}>
                <Text style={{fontSize:20, fontWeight:'bold'}}> 방 구하기 </Text>
              </View>
              :
              <View style={{flexDirection:'row', margin:10}}>
                <Text style={{fontSize:20, fontWeight:'bold'}}> 방 내놓기 </Text>
              </View>
            }
            
            <ScrollView style={{margin:10}} horizontal={true} /* 이미지 미리보기 */>
              {
                imageArray.length > 0?
                imageArray.map((e, index)=>(
                  <ImgComponet data={e.uri} key={index}/>
                ))
                :<Text>이미지를 업로드 하세요!</Text>
              }
            </ScrollView>
            <View style={{alignItems:'center'}}>
              
              <TouchableOpacity style={styles.button} onPress={()=>this.sellBuyModalToggle()}>
                <Text style={{margin:5}}>{this.state.category}</Text>
              </TouchableOpacity>
              <DetailSection detailToggle={()=>this.detailModalToggle()} convToggle={()=>this.convModalToggle()}
                sellbuy={this.state.sellbuy} lst={this.state.convLst} /* 세부사항, 편의시설 컴포넌트 분리 *//>
              <TextInput
                style={styles.button}  
                placeholder="제목" onChangeText={(title) => this.setState({title})} value={this.state.title}>  
              </TextInput>
              <View style={{margin:5, width:'100%', alignItems:'center'}}>
                <TextInput 
                  onChangeText={(contents) => this.setState({contents})} value={this.state.contents}
                  style={styles.mcontent} placeholder="게시글을 작성해주세요." >
                  
                </TextInput>
                {imageArray.length < 5 ? /* 이미지 선택 (5장 까지 가능하도록 구현) */
                <TouchableOpacity style={styles.bottomimage} onPress={this._pickImage} >
                  <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Icon name='md-image' style={{margin:5, color:'#FF5C3B'}}/>
                    <Text style={{margin:5, color:'#FF5C3B'}}>사진 추가하기</Text>
                  </View>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.bottomimage} onPress={this.noUpdate} >
                  <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Icon name='md-image' style={{margin:5, color:'#004aff'}}/>
                    <Text style={{margin:5, color:'#004aff'}}>사진 추가하기</Text>
                  </View>
                </TouchableOpacity>
                }
              </View> 
              {this.state.sellData!==null?
                <View style={{width:'100%'}}>
                  <View style={{width:'90%'}}>
                    <Text style={{fontWeight:'bold', margin:5}}>부동산 정보</Text>
                  </View>
                  <View style={{alignItems:'center'}}>
                    <SellDetailWriteModal toData={this.state.sellData} />
                  </View>
                </View>
              :
              null
              }
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={styles.bottombutton} onPress={this.props.toggle}> 
                  <Text>취소</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottombutton1}
                  onPress={this.checker}>
                  <Text style={{color:'white'}}>작성하기</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          {this.sellBuyCategoryModal() /* 방 구하기, 팔기 대분류 모달 */}
          {this.detailModal() /* 세부 사항 모달 */}
          {this.convModal()/* 편의 시설 모달 함수 */} 
        </Container >
      );
  }
}