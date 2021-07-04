// In App.js in a new project

import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListRecettes from "./src/composants/listrecette"
import OneRecettes from "./src/composants/onerecettes"

const Stack = createStackNavigator();

class App extends Component {
  render = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={ListRecettes} options={{headerShown:false}}/>
          <Stack.Screen name="OneRecettes" component={OneRecettes} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;