//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import logo from './rocket.png';


export default class Logo extends Component {
  render() {
    return (
      <View style={styles.logo}>
         <Image
        source={logo}
        style={{height: 200, width: 200,resizeMode:'contain'}}
      />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  logo:{
    alignSelf:'center',
    marginBottom:-30,
    position: 'absolute',
    bottom:0
    
  }
});

