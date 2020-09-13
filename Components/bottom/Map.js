import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Icon, Container, Header } from 'native-base'; 
import MapView,{Marker, AnimatedRegion, Animated} from 'react-native-maps';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import http from '../../http-common'
import { getAppLoadingLifecycleEmitter } from 'expo/build/launch/AppLoading';

export default class mymap extends Component {

  constructor(props){
    super(props)
    this.state={
      temp:0,
      region: new AnimatedRegion({
        latitude: 37.5647673,
        longitude: 126.7086819,
        latitudeDelta: 6.5,
        longitudeDelta: 3.6,
      }),
      markers:{
        latlng:{
          latitude: 37.5647673,
          longitude: 126.7086819
        },
        title: 'test',
        description : 'test2'
      },
      cityData: 1,
      loading: true
    }
  }

  componentDidMount(){
    this.getDB()
    setTimeout(()=>{
      this.setState({
        loading:false
      })
    }, 1000)
  }

  getDB = () =>{
    http.get(`/map`)
      .then(response => {
        this.state.cityData = response.data
      })
      .catch(error => {
        console.log(error);
      })
  }  

  static navigationOptions = {
      tabBarIcon: ({tintColor}) => (
          <Icon name='ios-map' styles={{color: tintColor}}/>
      )
  }  

  makingMarker = () => {
      return(
          /* 반복문 사용하여 Marker 뽑기 */
          <Marker
            coordinate={{latitude: 37.5647673, longitude: 126.7086819}}
            title= {this.state.cityData[0].name}
            description='gg'
          />     
      )    
  }

  onRegionChange(region) {
    this.setState({ region });
  }
  
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}><Text>지도</Text></Header>
          <View style={styles.container}>
          <MapView
            initialRegion={{
              latitude: 35.2,
              longitude: 127.8,
              latitudeDelta: 6.5,
              longitudeDelta: 3.6,
            }}
            minZoomLevel={7.1}
            style={styles.mapStyle}
          >
            {
              this.state.loading === false? this.makingMarker() : null            
            }
              
          </MapView>
            
          </View> 
          <View style={{marginLeft:10}}>
            <Text>{this.state.temp}</Text>
          </View>
      </Container>
    );
  }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke'
      },
      header: {
        height: 50,
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
      },
      mapStyle:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      }
});
