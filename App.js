import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BaseCurrency from './BaseCurrency';
import RatesList from './RatesList';

export default class App extends React.Component {  
  constructor()
  {
    super();
 
    this.state = {
      baseCurrency : 'BGN'
    }

    
  }
  
  changeBaseCurrency(currency) {
    this.setState( {
      baseCurrency : currency
    });
  }

  
 
  render() {
    return (
      <View style={styles.container}>        
        <View style={styles.baseCurrency}>
          <BaseCurrency changeBaseCurrency = { evt => this.changeBaseCurrency(evt) }/>
        </View>
        <View style={styles.ratesList}>
          <RatesList baseCurrency={this.state.baseCurrency}/>
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
