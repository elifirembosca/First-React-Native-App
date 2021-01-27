import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

export default function Missions({data}) {
  return (
    <View style={styles.container}>
      <View style={{marginBottom:10}}>
        <Text style={styles.text}>MISSION NAME</Text>
        <Text>{data.data.missions[0].name}</Text>
      </View>
      <View style={{marginBottom:10}}>
        <Text style={styles.text}>TYPE</Text>
        <Text>{data.data.lsp.type}</Text>
      </View>
      <View>
        <Text style={styles.text}>DECRIPTION</Text>
        <Text>{data.data.missions[0].description}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    color: '#bc2626',
    fontSize: 18,
  },
});

