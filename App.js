import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BaseRate from './BaseRate';

export default class App extends React.Component {  
  render() {
    return (
      <View style={styles.container}>
        <BaseRate/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50
   
  },
});
