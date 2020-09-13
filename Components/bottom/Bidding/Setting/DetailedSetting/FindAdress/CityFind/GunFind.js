import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions, TouchableOpacity, TextInput, AsyncStorage} from 'react-native';
import { Container, Header, Icon  } from 'native-base';
import { FlatGrid } from 'react-native-super-grid';
import RowCardComponent  from '../../../../CityRowCardComponent'; 
import http from "../../../../../../../http-common"

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH );
const ITEM_WIDTH1 = Math.round(SLIDER_WIDTH);
export default class GunFind extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            loading:true,
            DBdata:null,
            city:'',
            cityArr:[]
        };
      }
    componentDidMount(){
    this.getDB()
    setTimeout(()=>{
        this.setState({
        loading:false
        })
    }, 1000)
    }
    getDB(){
        http.get(`/city/getCity`)
          .then(response => {
            this.state.DBdata = response.data
            this.renderSection()
          })
          .catch(error => {
            console.log(error);
          })
    }
    renderSection() {  
        if(this.state.DBdata != null && this.state.loading==false){
              this.state.DBdata.map((feed, index) => (
                this.state.cityArr.push({name:feed.name})
            ))
            return (
              <FlatGrid
                itemDimension={100}
                data={this.state.cityArr}
                style={styles.grideView}
                spacing={0}
                renderItem={({item})=>(
                  <TouchableOpacity 
                    onPress={()=>{
                      this.state.city=item.name;
                      AsyncStorage.setItem('Doch', this.state.city);
                    }}
                    style={styles.itemContainer}>
                    <Text style={styles.itemName}>{item.name}</Text>
                  </TouchableOpacity>
                )}              
              />
            )
          }
        else if(this.state.DBdata == null && this.state.loading==false){
          return(
            <Text>로딩에 실패하였습니다.</Text>
          )
        }
    }
    setnum=(a)=>{
      this.setState({city:a})
    }
    render() {
        return (
            <Container style={styles.container}>
                <Header style ={{justifyContent:'space-between', alignItems:'center'}}> 
                <Icon name='ios-arrow-back' onPress={()=>{this.props.Guntoggle()}}/>
                <Text>시/도 선택</Text>
                <Text/>
                </Header>
                <View style={{height:'82%'}}>                  
                  {this.renderSection()}
                </View>
                <View style={{height:"8%", flexDirection:'row', justifyContent: 'center', borderWidth:0.5}}>
                  <TouchableOpacity 

                    style={{height:'100%',width:'50%', alignItems:'center', justifyContent:'center', borderEndWidth:0.5}}>
                    <Text>취소</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={{width:'50%', alignItems:'center', justifyContent:'center'}}>
                    <Text>저장</Text>
                  </TouchableOpacity>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    gridView: {
      marginTop: 0,
      marginBottom: 50,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'center',
      alignItems:'center',
      padding: 10,
      height: 50,
      borderColor:'black',
      borderWidth:0.5
    },
    itemName: {
      fontSize: 16,
      color: 'black',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
});