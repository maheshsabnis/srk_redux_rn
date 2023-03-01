import React from 'react'
import {View,StyleSheet} from 'react-native';
import AddProductComponent from './views/addproductcomponent';
import ListProductsComponent from './views/listproductscomponent';

import { useSelector } from 'react-redux';

const MainReduxComponent =()=> {
  let prds = useSelector(state=>state.listProudctsReducer);  
  return (
    <View style={styles.view}>
        <AddProductComponent/>
        <ListProductsComponent products={prds}/>
    </View>
  );
}

const styles = StyleSheet.create({
    view: {
      flex:1,
      backgroundColor:'magenta'
    } 
  });

export default MainReduxComponent;
