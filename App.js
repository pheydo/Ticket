// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabnavigation from './Component/Tabnavigation';
import MoviesApi from './Component/MoviesApi';
import DATA from './Component/DATA';
import Booking from './Screen/Booking';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerShown: false,
        
      }}
      
      >
        <Stack.Screen name="Tabnavigation" component={Tabnavigation} />
        <Stack.Screen name="MoviesApi" component={MoviesApi} />
        <Stack.Screen name="DATA" component={DATA} />
        <Stack.Screen name="Booking" component={Booking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;