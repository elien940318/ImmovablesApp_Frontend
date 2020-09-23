import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions, TouchableOpacity, TextInput} from 'react-native';
import { Container, Header, Icon  } from 'native-base';
import { FlatGrid } from 'react-native-super-grid';
import http from "../../../../../../../../../http-common.js"
import styles from '../../../../../../../../css/bottom/Bidding/Setting/CityFind/DoFindCSS.js'

export default class DoFind extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:true,
            DBdata:null,
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
        http.get(`/Address/getCity`)
          .then(response => {
            this.setState({DBdata:response.data})
          })
          .catch(error => {
            console.log(error);
          })
    }
    renderSection() {  
      
        if(this.state.DBdata != null && this.state.loading==false){
            this.state.DBdata.map((feed, index) => (
              this.state.cityArr.push({name:feed.name, code:feed.code})
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
                      this.props.citySetting(item.name, item.code);
                      this.props.cityToggle();
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
    
    render() {
        return (
            <Container style={styles.container}>
                <Header style ={{justifyContent:'space-between', alignItems:'center'}}> 
                  <Icon name='ios-arrow-back' onPress={()=>{this.props.cityToggle()}}/>
                  <Text>시/도 선택</Text>
                  <Text/>
                </Header>
                <View style={{height:'82%'}}>                  
                  {this.renderSection()}
                </View>
                <View style={{height:"8%", flexDirection:'row', justifyContent: 'center', borderWidth:0.5}}>
                  <TouchableOpacity 
                    onPress={()=>{this.props.cityToggle()}}
                    style={{height:'100%',width:'50%', alignItems:'center', justifyContent:'center', borderEndWidth:0.5}}>
                    <Text>취소</Text>
                  </TouchableOpacity>
                </View>
            </Container>
        );
    }
};