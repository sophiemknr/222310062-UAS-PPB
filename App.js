import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Home from './components/Home';
import Ruang from './components/Ruang';
import Profile from './components/Profile';
import History from './components/History';
import Details from './components/Details';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="welcome" 
          component={Welcome} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Ruang" 
          component={Ruang} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Profile" 
          component={Profile} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="History" 
          component={History} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Details" 
          component={Details} 
          options={{headerShown: false}}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}