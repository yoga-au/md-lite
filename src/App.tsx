import React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens import
import Latest from './screens/Latest';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Latest" component={Latest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
