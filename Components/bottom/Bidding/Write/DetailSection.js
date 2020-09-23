import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon, Container, Header } from 'native-base'; 
import styles from '../../../css/bottom/Bidding/WriteModalCSS.js' 

class DetailSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let {sellbuy, lst} = this.props;
    if(sellbuy === 1){
        return(
          <TouchableOpacity style={styles.button} onPress={this.props.detailToggle}>
            <Text style={{margin:5}}>세부정보</Text>
            <Text style={{margin:5}}> &gt; </Text>
          </TouchableOpacity>
        )
      }  
      else if(sellbuy === 0){
        return(
            <TouchableOpacity style={styles.button} onPress={this.props.convToggle}>
              <Text style={{margin:5}}>편의시설</Text>
              <Text style={{margin:5}}> &gt; </Text>
              <View style={{flex:1, flexDirection:'row'}}>
              {lst.includes('음식점')?
                (<TouchableOpacity style={{height:50,width:50,borderRadius:100,justifyContent:'center',alignItems:'center', backgroundColor:'#fd6059'}}>
                <Icon name='md-restaurant'/>
                <Text>
                  음식점
                </Text>
              </TouchableOpacity>):null
              }
              {lst.includes('카페')?
                (<TouchableOpacity style={{height:50,width:50,borderRadius:100,justifyContent:'center',alignItems:'center', backgroundColor:'#FBAF5B'}}>
                <Icon name='ios-cafe'/>
                <Text>
                  카페
                </Text>
              </TouchableOpacity>):null
              }
              {lst.includes('편의점')?
              (<TouchableOpacity style={{height:50,width:50,borderRadius:100,justifyContent:'center',alignItems:'center', backgroundColor:'#7BDB84'}}>
                <Icon name='md-basket'/>
                <Text>
                  편의점
                </Text>
              </TouchableOpacity>):null
              }
              {lst.includes('병원')?
                (<TouchableOpacity style={{height:50,width:50,borderRadius:100,justifyContent:'center',alignItems:'center', backgroundColor:'#E3F95D'}}>
                <Icon name='ios-medkit'/>
                <Text>
                  병원
                </Text>
              </TouchableOpacity>):null
              }
              </View>
            </TouchableOpacity>
        )  
      }else{
          return<View></View>
      }
  }
}

export default DetailSection;
