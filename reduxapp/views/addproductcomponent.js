import React from 'react'
import {View, Button, Text, StyleSheet} from 'react-native';

// import the dispatch hook\
import { useDispatch } from 'react-redux';

// import an action method which will be dispatched
import { addProduct } from '../actions/actions';

const AddProductComponent=()=> {

  // define a dispatch Object
  let dispatch = useDispatch();

  const addProuctPress = ()=>{
    // dispatch the action
    dispatch(addProduct({ProductId:101, ProductName:'Laptop'}));
  };

  return (
    <View style={styles.view}>
      <Text style={styles.text}>
        CLick Button to Add Product
      </Text>
      <Button style={styles.button} title='Add Product'
       onPress={addProuctPress}
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    height:300,
    width:500,
    backgroundColor:'white'
  },
  text:{
    color:'red',
    fontSize:30
  },
  button:{
    color:'red',
    backgroundColor:'blue'
  }
});

export default AddProductComponent;
