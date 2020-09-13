import React, { Component } from 'react';
import {TextInput, StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Icon, Header, Content, Footer } from 'native-base'; 
import RowCardComponent  from './RowCardComponent'; 
import ColumnCardComponent  from './ColumnCardComponent'; 
import Carousel2 from './Carousel2'
import myData from '../../Util/test.json';

//const SLIDER_WIDTH = Dimensions.get('window').width;
//const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
//const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

export default class home extends Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-home' style={{color: tintColor}}/>
        )
    }   

    constructor(props) {  
        super(props);  
        this.state = {
          data1: '',
          feeds: [],
          jsonD: myData
      };  
    }  
  
    componentDidMount() {   //기존함수 componentWillMount에서 componentDidMount로 변경함.
  
        this.fetchFeeds().then(feeds => {
            this.setState({
              feeds
            })
        });
    }
 
    fetchFeeds() {
        const data = {
            id: 1,
            jsonrpc: "2.0",
            method: "call",
            params: [
              "database_api",
              "get_discussions_by_created",
              [{ tag: "kr", limit: 20 }]
            ]
        };
        return fetch('https://api.steemit.com', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => res.result)
    }
 
    render() {
        return (
            <SafeAreaView style={styles.container}>               
              
                <Header style={styles.header}><Text>어디살래?</Text></Header>
                
                <View style={{height:10}}></View>
               
                <View style={styles.title}>
                  
                    <TextInput  
                        style={{height: '80%', width: '80%', backgroundColor: 'whitesmoke', fontSize: 20, margin:10}}  
                        placeholder="검색"  
                        onChangeText={(data1) => this.setState({data1})}  
                    />
                    <Icon name='ios-search'/>
                    <Text>검색</Text>
                </View>        
                <ScrollView style={{flex:1, padding:'3%'}} >   
      
                  <View>               
                  <View><Text style={{fontSize:24}}>'어디살래?'가 추천하는 어디살래!?</Text></View>
                    <ColumnCardComponent data={ this.state.jsonD } />
                  </View>   

                  <View style={styles.br}/>               
                
                  <View>     
                  <View><Text style={{fontSize:24}}>어디살래? 새소식</Text></View>              
                    <Carousel2 data={ this.state.jsonD }/>         
                  </View>                 

                  <View style={styles.br}/>

                  <View><Text style={{fontSize:24}}>어디살래? 와 함께하는 제휴사</Text></View>
                  <View>                                              
                    {                                      
                      this.state.jsonD.map((feed, index) => (
                        <RowCardComponent data={ feed } key={index}/>
                        ))   
                    }                 
                  </View>            

                  <View style={{height:'10%'}}></View>  
                    
                </ScrollView>
            </SafeAreaView> 
            
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke'
      },
      header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      title: {
        width:'100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      content: {
   
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EFE4B0',
      },
      footer: {
        flex: 1,
        width: '100%',
        height: hp('10%'),
        backgroundColor: '#EFE4B0',
      },
      br: {
        height: '3%'
      }
});