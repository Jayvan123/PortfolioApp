import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen'
import FooterNavigation from './screens/FooterNavigation'; 
import HomeScreen from './screens/HomeScreen'; 
import PortfolioScreen from './screens/PortfolioScreen'; 
import SkillsScreen from './screens/SkillsScreen'; 
import ExperienceScreen from './screens/ExperienceScreen'; 
import ContactScreen from './screens/ContactScreen'; 


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='FooterNavigation' component={FooterNavigation} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='PortfolioScreen' component={PortfolioScreen} />
        <Stack.Screen name='SkillsScreen' component={SkillsScreen} />
        <Stack.Screen name='ExperienceScreen' component={ExperienceScreen} />
        <Stack.Screen name='ContactScreen' component={ContactScreen} />

        {/* add screen here */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});