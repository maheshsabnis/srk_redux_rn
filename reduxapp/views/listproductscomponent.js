import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
// import selector hook
import { useSelector } from 'react-redux';

const ListProductsComponent=({products})=> {

    // define a selector to query to store so that the data can be read
    // aka subscribtion with store 
   // let products = useSelector(state=>state.listProudctsReducer)

    if(products){
        return (
            <View style={styles.view}>
                <Text style={styles.text}>
                    List of Products:
                    {
                        products.map((prd,idx)=>(
                            <Text key={idx}>
                                {JSON.stringify(prd)}
                            </Text>
                        ))
                    }
                </Text>
            </View>
          );
       
    } else {
        return (
            <View style={styles.view}>
                <Text style={styles.text}>
                    The Store is empty
                </Text>
            </View>
        );
    } 
}


const styles = StyleSheet.create({
    view: {
        
      backgroundColor:'cyan'
    },
    text:{
      color:'red',
      backgroundColor:'blue',
      fontSize:30,
      fontWeight:'bold'
    }
  });
export default ListProductsComponent;
