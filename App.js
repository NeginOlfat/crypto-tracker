import React,{Component} from 'react';
import {Text, View } from 'react-native';
import { Header, CryptoContainer } from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';

import Store from './src/components';

export default class App extends Component{
  render(){
    return(
      <Provider store={Store}>
        <View>
          <Header/>
          <CryptoContainer/>
        </View>
      </Provider>
    )
  }
}

