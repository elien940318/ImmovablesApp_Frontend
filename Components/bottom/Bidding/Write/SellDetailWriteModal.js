import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../../../css/bottom/Bidding/SellDetailWriteModalCSS.js'
class SellDetailWriteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data : this.props.toData,
    };
  }

  render() {
    this.state.data = this.props.toData
    return (
        <View style={styles.EntireBox}>
          <View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    주소
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                    {this.state.data[0].address}
                </Text>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    건물 유형
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                    {this.state.data[0].immovablesKind}
                </Text>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    해당층
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                    {this.state.data[1].floor} 층
                </Text>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    면적
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                    {this.state.data[1].size} 평
                </Text>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    매물 종류
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                {this.state.data[1].tradeType}
                </Text>
            </View>
          </View>
          {this.state.data[1].tradeType !== '매매'?
          <View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    보증금
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                {this.state.data[1].deposit} 만원
                </Text>
            </View>
          </View>
          :null}
          {this.state.data[1].tradeType !== '매매'?
          <View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    월세 
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                {this.state.data[1].price} 만원
                </Text>
            </View>
          </View>
          :
          <View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}> 만원
                    가격 
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                {this.state.data[1].price} 만원
                </Text>
            </View>
          </View>
          }
          <View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    관리비
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                    {this.state.data[1].manage}
                </Text>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    주차
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                    {this.state.data[1].park === 1?'가능':'불가능'}
                </Text>
            </View>
          </View><View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    난방
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                    {this.state.data[2].gasKinds}
                </Text>
            </View>
          </View><View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    전세자금대출
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                    {this.state.data[2].loan==1?'가능':'불가능'}
                </Text>
            </View>
          </View><View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    옵션
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                    {this.state.data[2].option==1?'있음':'없음'}
                </Text>
            </View>
          </View><View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    애완동물
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                    {this.state.data[2].pet==1?'가능':'불가능'}
                </Text>
            </View>
          </View>
      </View>

    );
  }
}

export default SellDetailWriteModal;
