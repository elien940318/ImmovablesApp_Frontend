import React, { Component } from 'react';
import Modal from "react-native-modal";
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import { TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native-gesture-handler';


export default class RawCardComponent extends Component {

    constructor(props){
      super(props);
      this.state = {
    };  
    }
    setcity=(index,name)=>{
        this.setState({
            city:({index:index, name:name})
        })
    }
    render() {
        const { data } = this.props; 
        
      // 피드 항목 데이터
      //const { image } = JSON.parse(data.json_metadata); // json_metadata에서 이미지 url을 파싱
      return (
        // <Card>
        //     <Modal isVisible={this.state.isModalVisible}>
        //       {/* <DetailPostModal toggle2={() => this.toggle()} toData={data}/> */}
        //     </Modal>
        //     <TouchableOpacity onPress={() => this.toggle()}>
        //       <CardItem>
        //           <Body style={{flex: 1.5, flexDirection: 'column',  alignItems:'flex-start'}}>
        //             <Text>{data.name}</Text>
        //           </Body>                  
                  
        //           <Body style={{flex: 1}}>
        //             {
        //               <Text>사진</Text>
        //               /*
        //               image && image.length ?
        //               <Image 
        //                 source={{ uri: image[0] }} 
        //                 style={{ height:100, width:150 }} />
        //             : null
        //             */
        //             }
        //           </Body>
        //       </CardItem>
        //     </TouchableOpacity>
        // </Card>
        // <ScrollView style={{flexDirection: 'column'}}>
            <View>
            {/* {
            data.code%3===0?
                <TouchableOpacity>
                    <Text>{data.code}...</Text>
                </TouchableOpacity>
            :
                <TouchableOpacity>
                    <Text>{data.code}</Text>
                </TouchableOpacity>
            }             */}
            <TouchableOpacity 
                onPress={this.props.ckname(data.name    )}
                style={{height:33,width:'100%', borderBottomWidth:0.5, justifyContent:'space-between',alignItems:'center' , flexDirection:'row'}}>
                    <Text style={{fontSize:20}}>{data.name}</Text>
                    <Text style={{fontSize:20}}>></Text>
            </TouchableOpacity>
            </View>
        // </ScrollView>
        
      );
    }
  }