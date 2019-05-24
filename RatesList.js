import React from 'react';
import { StyleSheet, FlatList , View ,Text} from 'react-native';

export default class RatesList extends React.Component {  
  constructor() {    
       super();

       this.state = {
           baseCurrency : 'EUR' ,
           exchangeRates : [] ,
           loaded : false
       }       
  }

  getRates() {      
    fetch('https://api.exchangeratesapi.io/latest?base='+this.state.baseCurrency)
    .then((response) => response.json())
    .then((responseJson) => {
      let ratesEntries = Object.entries(responseJson.rates);
      let exchangeRates = [];
      ratesEntries.forEach( (entry,index) => {
        exchangeRates.push( { key: entry[0] , value: entry[1] });
      });
      this.setState({
        exchangeRates : exchangeRates ,
        loaded : true         
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    this.getRates();
    return (
      <View style = {styles.container}>
        <FlatList
          data={this.state.exchangeRates}
          renderItem= { ({item}) => <View style={styles.listItemView}><Text style={styles.listItem}>{item.key} = {item.value}</Text></View>
            }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    width: '90%',
    backgroundColor: 'papayawhip',
    padding: 2,
    borderWidth: 2
  } ,
  listItemView : {

  } ,
  listItem : {
    fontSize: 18 ,
    borderBottomWidth: 1
  }
});
