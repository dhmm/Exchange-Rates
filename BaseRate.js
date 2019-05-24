import React from 'react';
import { StyleSheet, Picker , View} from 'react-native';

export default class BaseRate extends React.Component {  
  constructor()
  {    
    super();

    this.state = {
      rates : [],
      loaded : false,
      selectedRate: null
    }

    fetch('https://api.exchangeratesapi.io/latest')
    .then((response) => response.json())
    .then((responseJson) => {
      let ratesEntries = Object.entries(responseJson.rates);
      let rates = [];
      ratesEntries.forEach( (entry,index) => {
        rates.push(entry[0]);
      });
      this.setState({
        rates : rates ,
        loaded : true ,
        selectedRate : this.state.rates[0]
      });
    })
    .catch((error) => {
      console.error(error);
    });

    
  }

  updateSelectedValue(value,index) {
    this.setState({
      selectedRate : value
    })
  }

  render() {
    
    let items = this.state.rates.map( (value,index) => {
      return <Picker.Item key={value} label={value} value={value} />
    })
    
    return (
      <View style = {styles.view}>
        <Picker 
          selectedValue={this.state.selectedRate} 
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
  view: {
    flex:1,
    flexDirection: 'row',
    alignItems : 'stretch'
  },
  picker: {
    backgroundColor : '#ccc',
    width:"90%",
    height:50
  },
});
