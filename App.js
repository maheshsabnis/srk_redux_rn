import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainReduxComponent from './reduxapp/mainreduxcomponent';

// 1 import store

import store from './store';

// 2. import Provider
 
import { Provider } from 'react-redux';



export default function App() {
  // Configure the redux 'store' for all 
  // react-native components inside the 'Provider'
  // all components executed under the 'Provider'
  // will be executed under the context
  // of 'store' and hence each dispatched
  // aciton will be listened by reducer
  // as well as theer will be store subscription
  return (
     <Provider store={store}> 
        <MainReduxComponent/>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
