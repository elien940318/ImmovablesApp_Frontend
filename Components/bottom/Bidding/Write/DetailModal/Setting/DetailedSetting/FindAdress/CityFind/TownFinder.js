import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions, TouchableOpacity, TextInput} from 'react-native';
import { Container, Header, Icon  } from 'native-base';
import { FlatGrid } from 'react-native-super-grid';
import http from "../../../../../../../../../http-common.js"
import styles from '../../../../../../../../css/bottom/Bidding/Setting/CityFind/GunFindCSS.js'

class townFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading:true,
        DBdata:null,
        townArr:[]
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
        http.get(`/Address/getTown/${this.props.contryNum}`)
          .then(response => {
            this.setState({DBdata: response.data})
          })
          .catch(error => {
            console.log(error);
          })
    }
    renderSection() {  
        if(this.state.DBdata != null && this.state.loading==false){
              this.state.DBdata.map((feed, index) => (
                this.state.townArr.push({name:feed.name, code:feed.code})
            ))
            return (
              <FlatGrid
                itemDimension={100}
                data={this.state.townArr}
                style={styles.grideView}
                spacing={0}
                renderItem={({item})=>(
                  <TouchableOpacity 
                    onPress={()=>{
                      this.props.townSetting(item.name,item.code)
                      this.props.townToggle();
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
                <Icon name='ios-arrow-back' onPress={()=>{this.props.townToggle()}}/>
                <Text>동/면/읍 선택</Text>
                <Text/>
                </Header>
                <View style={{height:'82%'}}>                  
                  {this.renderSection()}
                </View>
                <View style={{height:"8%", flexDirection:'row', justifyContent: 'center', borderWidth:0.5}}>
                  <TouchableOpacity 
                    onPress={()=>{this.props.townToggle()}}
                    style={{height:'100%',width:'50%', alignItems:'center', justifyContent:'center', borderEndWidth:0.5}}>
                    <Text>취소</Text>
                  </TouchableOpacity>
                </View>
            </Container>
        );
    }
}

export default townFinder;
