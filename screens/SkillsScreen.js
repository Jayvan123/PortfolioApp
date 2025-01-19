import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'; // Added the Ionicons import

const SkillsScreen = ({nagivation}) => {
  return (
    <ScrollView style={styles.background}>

    </ScrollView>
  )
}

export default SkillsScreen

const styles = StyleSheet.create({
  background: {
    flex: 1, 
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop: 40,
    width: '100%',
  },
})