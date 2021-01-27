//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from '../components/Header';
import Information from '../components/Information';
import Missions from '../components/Missions';

export default function DetailScreen({route, navigation}) {
  const [tab, setTab] = useState (0);
  const { data } = route.params;
  var imageUrlRaw = data.rocket.imageURL.substr(0,data.rocket.imageURL.lastIndexOf("_")+1)
  var imageExt =data.rocket.imageURL.substr(data.rocket.imageURL.lastIndexOf("."))
  imageUrlRaw += data.rocket.imageSizes[0] + imageExt
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, alignContent: 'center'}}>
        <Header navigation={navigation} />
      </View>
      <View style={{flex: 4}}>
        <Image
          source={{uri: imageUrlRaw}}
          resizeMode={'cover'}
          style={{ width:"100%",height:"100%"}}
        />
      </View>
      <View style={{flex: 0.8, width: '100%'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#bc2626',
            alignItems: 'center',
          }}
        >
          <Text
            onPress={() => setTab (0)}
            style={{
              position: 'absolute',
              left: 0,
              marginLeft: 70,
              color: 'white',
              fontSize: 17,
            }}
          >
            Information
          </Text>
          <Text
            onPress={() => setTab (1)}
            style={{
              position: 'absolute',
              right: 0,
              marginRight: 70,
              color: 'white',
              fontSize: 17,
            }}
          >
            Missions
          </Text>
        </View>
      </View>
      <View style={{flex: 5}}>
        {tab === 0 ? <Information data= {route.params}/> : <Missions data= {route.params} />}
      </View>
    </View>
  );
}
const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
});
