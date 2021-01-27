import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import back from './ic_back.png';

const Header = (props) => {
  const {
    textStyle,
    viewStyle,
    imagestyle,
    textcontainer,
    imagecontainer,
  } = styles;
  return (
    <View style={viewStyle}>
      <View style={imagecontainer}>
        <TouchableOpacity
          style={{height:40, width:20}}
          onPress={() => props.navigation.goBack()}>
          <Image style={imagestyle} source={back}></Image>
        </TouchableOpacity>
      </View>
      <View style={textcontainer}>
        <Text style={textStyle}> Launch List </Text>
      </View>
    </View>
  );
};

const styles = {
  viewStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  textcontainer: {
    flex: 2,
   
  },
  imagecontainer: {
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    
  },
  textStyle: {
    fontSize: 20,
    color: 'black',
    marginTop:15,
  },
  imagestyle: {
    height: 40,
    width: 20,
   // resizeMode: 'contain',
  },
};

export default Header;
