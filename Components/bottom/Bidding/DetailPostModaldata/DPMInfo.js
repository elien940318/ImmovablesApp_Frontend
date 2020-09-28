import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as http from '../../../../http-common'
import styles from '../../../css/bottom/Bidding/DPMInfoCSS.js'
class DPMInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data : this.props.toData,
        preference: []

    };
  }

  render() {
    this.state.data = this.props.toData
    let l = this.state.data.preference.split(',')
    l.pop()
    this.state.preference = l 
    return (
      <View style={styles.EntireBox}>
          <View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    월세
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                    {this.state.data.price/10000}(만원)
                </Text>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    주변 희망 상가
                </Text>
            </View>
            <View style={styles.RightBox}>
                <View style={{margin:10, flexDirection:'row'}}>
                    {/** 세로로 눞힐것 */
                        this.state.preference.map((e, idx) => {
                        return <Text style={styles.ConText} key={idx}>{e} </Text>
              })
            }
                </View>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    구매 희망사항
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                    <Text>{this.state.data.content}</Text>
                </Text>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={styles.LeftBox}>
                <Text style={{margin:10}}>
                    작성자
                </Text>
            </View>
            <View style={styles.RightBox}>
                <Text style={{margin:10}}>
                    {this.state.data.author}
                </Text>
            </View>
          </View>
      </View>
    );
  }
}

export default DPMInfo;
