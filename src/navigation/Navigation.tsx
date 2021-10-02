import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeatherIcon from 'react-native-vector-icons/Feather';

// screens import
import Latest from '../screens/Latest';

const NativeStack = createNativeStackNavigator();

const Navigation: React.FC = ({children}) => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <NativeStack.Navigator
        screenOptions={{
          headerShadowVisible: false,
          headerLeft: () => (
            <FeatherIcon
              name="menu"
              size={24}
              color="hsl(0, 0%, 80%)"
              style={styles.navIcon}
            />
          ),
        }}>
        <NativeStack.Screen name="Latest Update" component={Latest} />
      </NativeStack.Navigator>
      {children}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  navIcon: {
    marginRight: 16,
    color: 'orange',
  },
});

export default Navigation;
