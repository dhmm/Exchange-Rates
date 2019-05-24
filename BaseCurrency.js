import React from 'react';
import { StyleSheet, Picker , View} from 'react-native';

export default class BaseCurrency extends React.Component {  
  constructor(props)
  {    
    super(props);
    this.state = {
      currencies : [],
      loaded : false,
      selectedCurrency: null
    }

    fetch('https://api.exchangeratesapi.io/latest')
    .then((response) => response.json())
    .then((responseJson) => {
      let currencyEntries = Object.entries(responseJson.rates);
      let currencies = [];
      currencyEntries.forEach( (entry,index) => {
        currencies.push(entry[0]);
      });
      this.setState({
        currencies : currencies ,
        loaded : true ,
        selectedCurrency : this.state.currencies[0]
      });
    })
    .catch((error) => {
      console.error(error);
    });

    
  }

  updateSelectedValue(value,index) {
    this.setState({
      selectedCurrency : value
    })
    this.props.changeBaseCurrency(value);
  }

  render() {
    
    let items = this.state.currencies.map( (value,index) => {
      return <Picker.Item key={value} label={value} value={value} />
    })
    
    return (
      <View style = {styles.container}>
        <Picker 
          selectedValue={this.state.selectedCurrency} 
          style={styles.picker}
          onValueChange = { (evt) => this.updateSelectedValue(evt) }
          >  
          { items }                  
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    alignItems : 'stretch',
    backgroundColor: 'papayawhip',
    borderWidth:2,
    borderRadius:5    
  },
  picker: {    
    width:'90%',
    height:50
  },
});
