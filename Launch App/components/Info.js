import React, { Component } from 'react';
import {View, Text, Image,} from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

const Info = (props) => {
  const {containerstyle, namestyle, windowstyle} = styles;
    var imageUrlRaw = props.data.rocket.imageURL.substr(0,props.data.rocket.imageURL.lastIndexOf("_")+1)
    var imageExt =props.data.rocket.imageURL.substr(props.data.rocket.imageURL.lastIndexOf("."))
    imageUrlRaw += props.data.rocket.imageSizes[0] + imageExt
  return (
    <View style={containerstyle}>
      <TouchableOpacity onPress={()=>props.navigation.navigate("DetailScreen",{data:props.data})}>
      <View>
        <Image
          source={{uri:imageUrlRaw}}
          resizeMode={'cover'}
          style={{width:"100%", height: 250,borderRadius:20,}}
        />
      </View>
      <View>
        <Text style={namestyle}>{props.data.name}</Text>
        <Text style={windowstyle}>{props.data.windowstart}</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};


const styles = {
  containerstyle: {
    marginLeft:10,
    marginRight:10,
    marginTop:40,
  },
  namestyle: {
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#bc2626',
    textTransform: 'uppercase',
  },
  windowstyle: {
    color: 'black',
    marginTop: 2,
    fontSize:16,
  },
};

export default Info;
