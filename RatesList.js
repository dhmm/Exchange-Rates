import React from 'react';
import { StyleSheet, FlatList , View ,Text} from 'react-native';
import ListItem, { listItem } from './ListItem';

export default class RatesList extends React.Component {  
  constructor(props) {    
       super(props);
       props.showExchangeRates = this.showExchangeRates;
       this.state = {
           baseCurrency : this.props.baseCurrency ,
           exchangeRates : [] ,
           loaded : false
       }       
  }

  getRates() {         
    fetch('https://api.exchangeratesapi.io/latest?base='+this.state.baseCurrency)
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.rates != null) {
        let ratesEntries = Object.entries(responseJson.rates);
        let exchangeRates = [];
        ratesEntries.forEach( (entry,index) => {
          exchangeRates.push( { key: entry[0] , value: entry[1] });
        });
        this.setState({
          exchangeRates : exchangeRates ,
          loaded : true         
        });
      } else {
        this.setState({
          loaded : false
        })
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.baseCurrency !== this.state.value) {
      this.setState({ baseCurrency: nextProps.baseCurrency });      
    }
  }

  render() {
    this.getRates();    
    if(this.state.loaded) 
    {
      return (
        <View style = {styles.container}>        
          <FlatList
            data={this.state.exchangeRates}
            renderItem= { ({item}) => <ListItem currency = {item.key} rate = { Number((item.value).toFixed(3))}/>             
              }
          />
        </View>
      );
    } else {
      return(<View/>);
    }
  }
}

const styles = StyleSheet.create({
  container : {
    width: '90%',
    
    padding: 2,    
  } ,
  listItemView : {

  } ,
  listItem : {
    fontSize: 18 ,
    borderBottomWidth: 1
  }
});
