import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Home, PostDetail } from '../Screens';
import { store } from '../Store/store';

const AppNavigation = () => {
  const AppStack = createNativeStackNavigator();

  return <Provider store={store}>
    <NavigationContainer>
      <AppStack.Navigator initialRouteName={'Home'} >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="PostDetail" component={PostDetail} options={{ headerTitle: 'Post Detail' }} />
      </AppStack.Navigator>
    </NavigationContainer>
  </Provider>

}
export default AppNavigation
