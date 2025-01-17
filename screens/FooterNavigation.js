import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Import your screens
import HomeScreen from './HomeScreen';
import PortfolioScreen from './PortfolioScreen';
import SkillsScreen from './SkillsScreen';
import ExperienceScreen from './ExperienceScreen';
import ContactScreen from './ContactScreen';

const Tab = createBottomTabNavigator();

const FooterNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'; // Icon names for Home tab
          } else if (route.name === 'Portfolio') {
            iconName = focused ? 'briefcase' : 'briefcase-outline'; // Icon names for Portfolio tab
          } else if (route.name === 'Skills') {
            iconName = focused ? 'school' : 'school-outline'; // Icon names for Skills tab
          } else if (route.name === 'Experience') {
            iconName = focused ? 'business' : 'business-outline'; // Icon names for Experience tab
          } else if (route.name === 'Contact') {
            iconName = focused ? 'call' : 'call-outline'; // Icon names for Contact tab
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#143b2e', // Active icon color
        tabBarInactiveTintColor: 'gray', // Inactive icon color
        tabBarStyle: {
          paddingBottom: 10,
          height: 60,
          backgroundColor: '#fff', // Background color of the tab bar
          borderTopWidth: 0.5, // Top border for separation
          borderTopColor: '#ddd', // Color for the top border
        },
      })}
    >
      <Tab.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Portfolio"
        options={{ headerShown: false }}
        component={PortfolioScreen}
      />
      <Tab.Screen
        name="Skills"
        options={{ headerShown: false }}
        component={SkillsScreen}
      />
      <Tab.Screen
        name="Experience"
        options={{ headerShown: false }}
        component={ExperienceScreen}
      />
      <Tab.Screen
        name="Contact"
        options={{ headerShown: false }}
        component={ContactScreen}
      />
    </Tab.Navigator>
  );
};

export default FooterNavigation;

const styles = StyleSheet.create({});