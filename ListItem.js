import React from 'react';
import { StyleSheet, FlatList , View ,Text} from 'react-native';

export default class ListItem extends React.Component {  
  constructor(props) {    
       super(props);
       
         
  }

 

  render() {    
      return (
        <View style = {styles.container}>        
            <View style = {styles.currencyView}><Text style={styles.currencyText}>{this.props.currency}</Text></View>
            <View style = {styles.rateView}><Text style={styles.rateText}>{this.props.rate}</Text></View>
        </View>
      ); 
  }
}

const styles = StyleSheet.create({
  container : {       
    flex:1,
    flexDirection: 'row' ,    
    marginBottom:2
  } ,
  currencyView : {
    width: "20%",    
    padding:2,
    backgroundColor : 'orangered' ,
    borderTopLeftRadius : 5 ,
    borderBottomLeftRadius : 5 ,
  } , 
  currencyText : {
    color: '#fff' ,
    fontSize:20
  } , 
  rateView: {
    width: "80%",
    padding:2,    
    marginLeft:2,
    backgroundColor : 'sandybrown'
  },
  rateText: {
    fontSize:20,    
  }
});
