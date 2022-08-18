import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectProgram from './Screens/SelectProgram';
import FDE from './Screens/FDE';
import Run from './Screens/Run';


import { NavigationActions } from "react-navigation";



const App=()=>{
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Run' screenOptions={{
    headerShown: false
  }}>


        <Stack.Screen name="FDE" component={FDE} />
        <Stack.Screen name="Run" component={Run} />
        <Stack.Screen name="Sp" component={SelectProgram} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


