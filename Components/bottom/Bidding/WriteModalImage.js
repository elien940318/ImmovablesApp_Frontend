import React, { Component } from 'react';

import { View, Image} from 'react-native';

class WriteModalImage extends Component {  
  render() {
    const { data } = this.props; 
    return (
        <Image source={{ uri: data }} style={{ width: 100, height: 100 }} />
    );
  }
}


export default WriteModalImage;
