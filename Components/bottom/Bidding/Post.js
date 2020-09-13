import React, {Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container style={styles.container}>
          <Header style={styles.header}>
            <View style={{justifyContent:'center'}}>
              <Text>입찰 게시판</Text>                  
            </View> 
            <View style={{position: 'absolute', right: 0}}>
              <Button style={{backgroundColor:'white'}}>
                <Icon name='ios-create' style={{color:'black'}}/>
              </Button>
            </View>                   
          </Header>
          <View style={styles.search}>                  
              <TextInput  
                  style={{height: '80%', width: '80%', backgroundColor: 'whitesmoke', fontSize: 20, margin:10}}  
                  placeholder="검색"  
                  onChangeText={(data1) => this.setState({data1})}  
              />
              <Icon name='ios-search'/>
              <Text>검색</Text>
          </View>
          <View style={styles.category}>
            <TouchableOpacity style={[ this.state.activeIndex === 0 ? {height:40,borderBottomWidth:2} :{height:40}], { padding: 15, backgroundColor:'string', flexDirection: 'row'}}
              onPress={() => this.segmentClicked(0)}
              active={this.state.activeIndex === 0}>
              <Text style={[ this.state.activeIndex === 0 ? {} : {color: 'grey'} ]}>구매 희망 게시판</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[ this.state.activeIndex === 1 ? {height:40, borderBottomWidth:2} :{height:40}], { padding: 15, backgroundColor:'string', flexDirection: 'row'}}
              onPress={() => this.segmentClicked(1)}
              active={this.state.activeIndex === 1}>
              <Text style={ [ this.state.activeIndex === 1 ? {} : {color: 'grey'} ]}>거래 게시판</Text>
            </TouchableOpacity>
          </View> 
          <View>
            <Text>로딩중</Text>
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
      backgroundColor: 'white',
      alignItems:'center',
      justifyContent: 'space-around',
      flexDirection:'row'
    },
    search: {
      width:'100%',
      height: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    category: {
      width:'100%',
      height: 50,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    content: {
 
      width:'100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EFE4B0',
    },
    
    br: {
      height: '3%'
    }
});