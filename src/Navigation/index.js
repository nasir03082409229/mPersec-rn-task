import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { Home, PostDetail } from '../Screens';

const AppNavigation = () => {
  const AppStack = createNativeStackNavigator();

  return <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: !false, }}
      initialRouteName={'PostDetail'}
    >
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="PostDetail" component={PostDetail} />
    </AppStack.Navigator>
  </NavigationContainer>

}
export default AppNavigation
