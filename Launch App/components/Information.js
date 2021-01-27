import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Information({data}) {
  return (
    <View style={styles.container}>
      <View style={{marginBottom:10}}>
        <Text style={styles.text}>LAUNCH ID</Text>
        <Text>{data.data.id}</Text>
      </View>
      <View>
        <Text style={styles.text}>STATUS</Text>
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
