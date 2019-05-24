import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BaseCurrency from './BaseCurrency';
import RatesList from './RatesList';

export default class App extends React.Component {  
  render() {
    return (
      <View style={styles.container}>        
        <View style={styles.baseCurrency}>
          <BaseCurrency/>
        </View>
        <View style={styles.ratesList}>
          <RatesList/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50 ,
    flexDirection: 'column',        
    alignItems: 'stretch',  
    backgroundColor: 'peachpuff'
  },
  baseCurrency : {
    height: 50,     
    alignItems : 'center'
  },
  ratesList : {
    marginTop : 5,        
    alignItems : 'center'
  }
});
