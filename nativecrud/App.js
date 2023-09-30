import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
import Create from './src/screens/Create'
import Edit from './src/screens/Edit'

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
          headerShown: false
        }}/>
        <Stack.Screen name='Create' component={Create} options={{
          headerShown: true
        }}/>
        <Stack.Screen name='Edit' component={Edit} options={{
          headerShown: true
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App