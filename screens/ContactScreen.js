import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'; // Added the Ionicons import

const ContactScreen = () => {
  return (
    <View style={styles.background}>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.circle}>
          <Image source={require('../assets/HomeScreen/user-profile.png')} style={styles.profileImage} />
        </View>
        <View style={styles.labels}>
          <Text style={styles.labelName}>Jovan O. Labitad</Text>
          <Text style={styles.labelUsername}>Jayvan123</Text>
          <Text style={styles.labelBio}>Lifelong learner. Full Stock Developer. Tech explorer.</Text>
        </View>
      </View>

      {/* About Me Section */}
      <ScrollView style={styles.aboutMeInformation}>
        <Text style={styles.otherInfoTitle}>Contact me</Text>
        <View>
          
          <View style={styles.otherContainer}>
            {/* Using an Ionicons icon for contact number */}
            <Icon name="call" size={30} color="#fff" style={styles.houseIcon} />
            <Text style={styles.labelTextDescription}>
              +63 912 345 6789
            </Text>
          </View>

          <View style={styles.otherContainer}>
            {/* Using an Ionicons icon for email */}
            <Icon name="mail" size={30} color="#fff" style={styles.calendarIcon} />
            <Text style={styles.labelTextDescription}>
              jovan.labitad@example.com
            </Text>
          </View>

          <View style={styles.otherContainer}>
            {/* Using an Ionicons icon for Facebook */}
            <Icon name="logo-facebook" size={30} color="#fff" style={styles.calendarIcon} />
            <Text style={styles.labelTextDescription}>
              facebook.com/jayvan123
            </Text>
          </View>

          <View style={styles.otherContainer}>
            {/* Using an Ionicons icon for Instagram */}
            <Icon name="logo-instagram" size={30} color="#fff" style={styles.calendarIcon} />
            <Text style={styles.labelTextDescription}>
              @jayvan123
            </Text>
          </View>

          <View style={styles.otherContainer}>
            {/* Using an Ionicons icon for GitHub */}
            <Icon name="logo-github" size={30} color="#fff" style={styles.calendarIcon} />
            <Text style={styles.labelTextDescription}>
              github.com/jayvan123
            </Text>
          </View>

        </View>
      </ScrollView>
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop: 40,
    width: '100%',
  },
  profileContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#111',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    marginRight: 15,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  labels: {
    flex: 1,
    justifyContent: 'center',
  },
  labelName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  labelUsername: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  labelBio: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  aboutMeInformation: {
    width: '100%',
    marginTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },
  otherInfoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  otherContainer: {
    flexDirection: 'row',
    width: '100%',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#111',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  labelTextDescription: {
    fontSize: 14,
    color: '#ccc',
    flex: 1,
  },
  schoolIcon: {
    marginRight: 10,
  },
  houseIcon: {
    marginRight: 10,
  },
  calendarIcon: {
    marginRight: 10,
  },
});
