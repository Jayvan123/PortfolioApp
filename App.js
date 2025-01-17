import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen'
import FooterNavigation from './screens/FooterNavigation'; 


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='FooterNavigation' component={FooterNavigation} />
        {/* add screen here */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});